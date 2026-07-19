/* ============================================================
   HBR 经典文章收藏站 · 交互逻辑 v2
   渲染 / 搜索 / 分类 / 排序 / 详情 / 新增角标
   + 阅读进度(已读·稍后读) / 每日一文 / 阅读时长 / 相关推荐
   + 主题切换(深·浅) / 锚点路由(可分享深链)
   ============================================================ */

(function () {
  "use strict";

  const grid = document.getElementById("grid");
  const searchInput = document.getElementById("search");
  const sortSelect = document.getElementById("sort");
  const chipsEl = document.getElementById("chips");
  const statTotal = document.getElementById("stat-total");
  const statCat = document.getElementById("stat-cat");
  const statUpdated = document.getElementById("stat-updated");

  let activeFilter = "全部";
  let keyword = "";

  // 数据源：优先取 window.HBR_DATA（由 data.js 暴露），便于「检查更新」时热重载
  let META = (window.HBR_DATA && window.HBR_DATA.META) || {};
  let ARTICLES = (window.HBR_DATA && window.HBR_DATA.ARTICLES) || [];
  let buildHbrLink = (window.HBR_DATA && window.HBR_DATA.buildHbrLink) || function (t) {
    return "https://hbr.org/search?search_type=search&term=" + encodeURIComponent(t);
  };

  // 新增篇目集合（由 META.newIds 决定），可随刷新变化
  let NEW_SET = new Set(META.newIds || []);
  function recomputeNew() {
    NEW_SET = new Set((META && META.newIds) || []);
  }

  /* ---------- 本地存储：阅读进度 ---------- */
  const LS_READ = "hbr_read_v1";
  const LS_LATER = "hbr_later_v1";
  const readSet = new Set(JSON.parse(localStorage.getItem(LS_READ) || "[]"));
  const laterSet = new Set(JSON.parse(localStorage.getItem(LS_LATER) || "[]"));
  function saveRead() {
    localStorage.setItem(LS_READ, JSON.stringify([...readSet]));
  }
  function saveLater() {
    localStorage.setItem(LS_LATER, JSON.stringify([...laterSet]));
  }
  function toggleSet(set, save, id) {
    if (set.has(id)) set.delete(id);
    else set.add(id);
    save();
  }

  /* ---------- 阅读时长估算（中文约 350 字/分钟） ---------- */
  function readingMinutes(a) {
    const chars = (a.summary || "").length + (a.detail || "").length;
    return Math.max(1, Math.round(chars / 350));
  }

  /* ---------- 分类列表 ---------- */
  function getCategories() {
    const counts = {};
    ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  }

  /* ---------- 渲染筛选 chips（特殊筛选 + 分类） ---------- */
  function renderChips() {
    const cats = getCategories();
    const specials = [
      { key: "全部", label: "全部" },
      { key: "新增", label: "新增 " + NEW_SET.size },
      { key: "稍后读", label: "稍后读 " + laterSet.size },
      { key: "已读", label: "已读 " + readSet.size },
    ];
    const chips = [...specials.map((s) => s.key), ...cats];
    chipsEl.innerHTML = "";
    chips.forEach((key) => {
      const meta = specials.find((s) => s.key === key);
      const btn = document.createElement("button");
      btn.className = "chip" + (key === activeFilter ? " active" : "");
      btn.textContent = meta ? meta.label : key;
      btn.addEventListener("click", () => {
        activeFilter = key;
        renderChips();
        renderGrid();
      });
      chipsEl.appendChild(btn);
    });
    statCat.textContent = cats.length;
    statTotal.textContent = ARTICLES.length;
    if (statUpdated && typeof META !== "undefined") {
      statUpdated.textContent = META.lastUpdated || "—";
    }
  }

  /* ---------- 搜索相关度评分 ---------- */
  function relevanceScore(a, kw) {
    const k = kw.toLowerCase();
    let score = 0;
    if (a.zhTitle.toLowerCase().includes(k)) score += 10;
    if (a.tags.some((t) => t.toLowerCase().includes(k))) score += 6;
    if (a.category.toLowerCase().includes(k)) score += 4;
    if (a.author.toLowerCase().includes(k)) score += 3;
    if (a.enTitle.toLowerCase().includes(k)) score += 2;
    if (a.summary.toLowerCase().includes(k)) score += 1;
    return score;
  }

  /* ---------- 过滤 + 排序 ---------- */
  function getVisible() {
    let list = ARTICLES.filter((a) => {
      if (activeFilter === "新增") {
        if (!NEW_SET.has(a.id)) return false;
      } else if (activeFilter === "稍后读") {
        if (!laterSet.has(a.id)) return false;
      } else if (activeFilter === "已读") {
        if (!readSet.has(a.id)) return false;
      } else if (activeFilter !== "全部") {
        if (a.category !== activeFilter) return false;
      }
      if (!keyword) return true;
      const hay =
        (a.zhTitle + " " + a.enTitle + " " + a.author + " " + a.summary +
          " " + a.detail + " " + a.tags.join(" ") + " " + a.category).toLowerCase();
      return hay.includes(keyword.toLowerCase());
    });

    if (keyword) {
      // 有搜索词时按相关度降序，最相关的排前面
      list = list.slice().sort((a, b) => relevanceScore(b, keyword) - relevanceScore(a, keyword));
    } else {
      const sort = sortSelect.value;
      list = list.slice().sort((a, b) => {
        if (sort === "year-desc") return b.year - a.year;
        if (sort === "year-asc") return a.year - b.year;
        if (sort === "title") return a.zhTitle.localeCompare(b.zhTitle, "zh");
        return 0;
      });
    }
    return list;
  }

  /* ---------- 转义，防止注入 ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));
  }

  /* ---------- 搜索高亮：安全转义后包 mark ---------- */
  function highlight(text, kw) {
    if (!kw) return esc(text);
    const safe = esc(text);
    const k = esc(kw);
    const re = new RegExp(k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    return safe.replace(re, (m) => `<mark>${m}</mark>`);
  }

  /* ---------- 渲染卡片网格 ---------- */
  function renderGrid() {
    const list = getVisible();
    grid.innerHTML = "";

    if (list.length === 0) {
      grid.innerHTML =
        '<div class="empty">没有匹配的文章，换个关键词或分类试试。</div>';
      return;
    }

    list.forEach((a) => {
      const isRead = readSet.has(a.id);
      const isLater = laterSet.has(a.id);
      const card = document.createElement("article");
      card.className = "card" + (isRead ? " read" : "");
      card.tabIndex = 0;
      card.innerHTML = `
        <div class="meta-top">
          <span class="cat-badge">${highlight(a.category, keyword)}</span>
          ${NEW_SET.has(a.id) ? '<span class="new-badge">新</span>' : ""}
          <span class="year">${a.year}</span>
          <span class="meta-acts">
            <button class="act act-later${isLater ? " on" : ""}" data-act="later" data-id="${a.id}" title="稍后读" aria-label="稍后读">${isLater ? "★" : "☆"}</button>
            <button class="act act-read${isRead ? " on" : ""}" data-act="read" data-id="${a.id}" title="标记已读" aria-label="标记已读">${isRead ? "✓" : ""}</button>
          </span>
        </div>
        <h3>${highlight(a.zhTitle, keyword)}</h3>
        <div class="en-title">${highlight(a.enTitle, keyword)}</div>
        <div class="author">作者 · <b>${highlight(a.author, keyword)}</b></div>
        <p class="summary">${highlight(a.summary, keyword)}</p>
        <div class="tags">
          ${a.tags.map((t) => `<span class="tag">${highlight(t, keyword)}</span>`).join("")}
        </div>
        <div class="read-time">约 ${readingMinutes(a)} 分钟读完${isRead ? " · 已读" : ""}</div>
      `;
      card.addEventListener("click", (e) => {
        if (e.target.closest(".act")) return;
        navigateTo(a.id);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigateTo(a.id);
        }
      });
      card.querySelectorAll(".act").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const id = btn.dataset.id;
          if (btn.dataset.act === "later") toggleSet(laterSet, saveLater, id);
          else toggleSet(readSet, saveRead, id);
          renderChips();
          renderGrid();
        });
      });
      grid.appendChild(card);
    });
  }

  /* ---------- 相关文章推荐 ---------- */
  function relatedArticles(a, n = 3) {
    return ARTICLES.filter((x) => x.id !== a.id)
      .map((x) => {
        let score = x.category === a.category ? 2 : 0;
        score += x.tags.filter((t) => a.tags.includes(t)).length;
        return { x, score };
      })
      .filter((o) => o.score > 0)
      .sort((p, q) => q.score - p.score)
      .slice(0, n)
      .map((o) => o.x);
  }

  /* ---------- 详情弹窗 ---------- */
  const overlay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal");
  let lastFocused = null;

  function openModal(a) {
    lastFocused = document.activeElement;
    const link = a.url || buildHbrLink(a.enTitle);
    const rel = relatedArticles(a);
    modal.innerHTML = `
      <button class="close" aria-label="关闭" id="modal-close">&times;</button>
      <span class="cat-badge">${esc(a.category)}</span>
      ${NEW_SET.has(a.id) ? '<span class="new-badge">新</span>' : ""}
      <h2>${esc(a.zhTitle)}</h2>
      <div class="en-title">${esc(a.enTitle)}</div>
      <div class="byline">作者 · <b>${esc(a.author)}</b> &nbsp;|&nbsp; 首次发表 · <b>${a.year}</b> &nbsp;|&nbsp; 约 <b>${readingMinutes(a)}</b> 分钟读完</div>
      <div class="section-label">核心观点</div>
      <p class="detail">${esc(a.detail)}</p>
      <div class="tags">
        ${a.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
      </div>
      <div class="modal-actions">
        <button class="mini-btn${laterSet.has(a.id) ? " on" : ""}" data-act="later" data-id="${a.id}">${laterSet.has(a.id) ? "★ 已加入稍后读" : "☆ 稍后读"}</button>
        <button class="mini-btn${readSet.has(a.id) ? " on" : ""}" data-act="read" data-id="${a.id}">${readSet.has(a.id) ? "✓ 已读" : "标记已读"}</button>
      </div>
      ${rel.length ? `<div class="section-label related-label">相关阅读</div><div class="related">${rel.map((r) => `<button class="rel-item" data-id="${r.id}"><span class="rel-cat">${esc(r.category)}</span><span class="rel-title">${esc(r.zhTitle)}</span><span class="rel-year">${r.year}</span></button>`).join("")}</div>` : ""}
      <div class="modal-actions">
        <button class="mini-btn copy-link" data-id="${a.id}">复制链接</button>
      </div>
      <div class="cta-box">
        <div class="cta-title">觉得有启发？</div>
        <p>关注公众号 <strong>「你的公众号名称」</strong>，每双周收到一份 AI 精选的 HBR 经典解读。</p>
      </div>
      <a class="read-link" href="${link}" target="_blank" rel="noopener noreferrer">阅读原文（HBR 官方）</a>
    `;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-close").focus();

    modal.querySelectorAll(".mini-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        if (btn.dataset.act === "later") toggleSet(laterSet, saveLater, id);
        else toggleSet(readSet, saveRead, id);
        renderChips();
        renderGrid();
        openModal(a); // 刷新弹窗内状态
      });
    });
    modal.querySelectorAll(".rel-item").forEach((btn) => {
      btn.addEventListener("click", () => navigateTo(btn.dataset.id));
    });

    const copyBtn = modal.querySelector(".copy-link");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const url = location.origin + "/#/" + a.id;
        try {
          await navigator.clipboard.writeText(url);
          copyBtn.textContent = "已复制";
          setTimeout(() => (copyBtn.textContent = "复制链接"), 1500);
        } catch (err) {
          copyBtn.textContent = "复制失败";
          setTimeout(() => (copyBtn.textContent = "复制链接"), 1500);
        }
      });
    }
  }

  function closeModal() {
    if (!overlay.classList.contains("open")) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    if (location.hash) {
      history.replaceState(null, "", location.pathname + location.search);
    }
    if (lastFocused) lastFocused.focus();
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
    if (e.key === "/" && !overlay.classList.contains("open") && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  /* ---------- 返回顶部 ---------- */
  const backTopBtn = document.getElementById("back-top");
  if (backTopBtn) {
    window.addEventListener("scroll", () => {
      backTopBtn.classList.toggle("show", window.scrollY > 400);
    });
    backTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 锚点路由（可分享深链） ---------- */
  function parseHash() {
    const m = (location.hash || "").match(/^#\/(.+)$/);
    return m ? m[1] : null;
  }
  function navigateTo(id) {
    location.hash = "#/" + id;
  }
  function syncRoute() {
    const id = parseHash();
    if (id) {
      const a = ARTICLES.find((x) => x.id === id);
      if (a) openModal(a);
      else closeModal();
    } else {
      closeModal();
    }
  }
  window.addEventListener("hashchange", syncRoute);

  /* ---------- 每日一文 ---------- */
  const dailyBtn = document.getElementById("daily-pick");
  if (dailyBtn) {
    dailyBtn.addEventListener("click", () => {
      const a = ARTICLES[Math.floor(Math.random() * ARTICLES.length)];
      navigateTo(a.id);
    });
  }

  /* ---------- 主题切换（深 / 浅） ---------- */
  const themeBtn = document.getElementById("theme-toggle");
  const THEME_KEY = "hbr_theme";
  function applyTheme(t) {
    document.documentElement.classList.toggle("light", t === "light");
    if (themeBtn) themeBtn.textContent = t === "light" ? "浅色" : "深色";
  }
  if (themeBtn) {
    const saved = localStorage.getItem(THEME_KEY);
    applyTheme(saved === "light" ? "light" : "dark");
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.classList.contains("light")
        ? "dark"
        : "light";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  /* ---------- 事件绑定 ---------- */
  searchInput.addEventListener("input", (e) => {
    keyword = e.target.value.trim();
    renderGrid();
  });
  sortSelect.addEventListener("change", renderGrid);

  /* ---------- Toast 提示 ---------- */
  const toastEl = document.getElementById("toast");
  let toastTimer = null;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }

  /* ---------- 检查更新（热重载 data.js） ---------- */
  const refreshBtn = document.getElementById("check-update");
  const LS_SEEN = "hbr_last_seen";
  function markSeen() {
    try { localStorage.setItem(LS_SEEN, META.lastUpdated || ""); } catch (e) {}
    if (refreshBtn) refreshBtn.classList.remove("has-update");
  }
  function checkUpdateBadge() {
    if (!refreshBtn) return;
    let seen = "";
    try { seen = localStorage.getItem(LS_SEEN) || ""; } catch (e) {}
    if (seen !== (META.lastUpdated || "")) refreshBtn.classList.add("has-update");
  }
  async function refreshData() {
    if (!refreshBtn) return;
    const oldLabel = refreshBtn.textContent;
    refreshBtn.textContent = "刷新中…";
    refreshBtn.disabled = true;
    try {
      const res = await fetch("data.js?t=" + Date.now(), { cache: "no-store" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const txt = await res.text();
      const d = new Function(txt + "\n;return {META, ARTICLES, buildHbrLink};")();
      META = d.META; ARTICLES = d.ARTICLES; buildHbrLink = d.buildHbrLink;
      if (window.HBR_DATA) window.HBR_DATA = d;
      recomputeNew();
      renderChips();
      renderGrid();
      syncRoute();
      markSeen();
      toast("已更新到 " + (META.lastUpdated || "最新") + " · 共 " + ARTICLES.length + " 篇");
    } catch (err) {
      toast("更新失败，请稍后重试");
    } finally {
      refreshBtn.textContent = oldLabel;
      refreshBtn.disabled = false;
    }
  }
  if (refreshBtn) refreshBtn.addEventListener("click", refreshData);

  /* ---------- 初始化 ---------- */
  renderChips();
  renderGrid();
  syncRoute(); // 支持带 #/id 直接打开
  checkUpdateBadge();
})();
