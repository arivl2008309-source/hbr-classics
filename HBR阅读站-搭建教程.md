# 手把手教你做一个 HBR 经典阅读站：纯静态、零后端、手机可开、还能自动更新

上篇我讲了为什么用「策展」而不是「原创」来做个人 IP。这篇给实操：这样一个能公网访问、手机直接打开、还能每两周自动新增文章的阅读站，其实只要 4 个文件，零后端、零数据库，一个下午就能搭出来。

下面所有代码都来自我那个真实在跑的站点，你可以照抄。

## 一、整体思路：数据驱动 + 纯静态

做内容站最容易踩的坑，是把内容写死在 HTML 里——加一篇文章就要改一坨标签，改两次就不想维护了。

正确思路是「数据驱动」：

- 内容是一个数组（data.js 里的 ARTICLES）
- 页面是渲染逻辑（app.js），从数组自动生成卡片、筛选、弹窗
- 加一篇文章 = 往数组里加一个对象，页面自动变

文件结构只有四个：

```
index.html   页面骨架（顶部、搜索栏、网格、弹窗）
styles.css   深色编辑风样式
data.js      文章数据（你要维护的「数据库」）
app.js       渲染 / 搜索 / 筛选 / 排序 / 弹窗逻辑
```

好处是：版权安全（全文留在原站，你只放摘要和外链）、可纯静态托管、手机能开、扩展成本几乎为零。

## 二、第一步：准备好你的「数据库」（data.js）

每篇文章就是一个对象，字段固定。这是真实示例：

```js
{
  id: "marketing-myopia",
  url: "https://hbr.org/2004/07/marketing-myopia",
  zhTitle: "营销短视",
  enTitle: "Marketing Myopia",
  author: "Theodore Levitt",
  year: 1960,
  category: "营销",
  tags: ["客户需求", "长期主义"],
  summary: "企业衰败往往源于对自身业务的狭隘定义……才能跨越技术更替持续生长。",
  detail: "Levitt 指出，每一个重大行业的衰落都伴随着「自满于产品、忽视客户」的短视……"
}
```

字段含义：

- id：唯一标识，也用作「新增」角标的依据
- url：HBR 官方文章详情页直链（关键，后面讲为什么）
- zhTitle / enTitle：中英文标题
- author / year：作者与首次发表年份
- category：分类，用来生成筛选标签
- tags：标签，参与搜索
- summary：卡片上显示的短摘要
- detail：点开详情后的长摘要

顶部还有一个 META，记录「最后更新」和哪些是新加的：

```js
const META = {
  lastUpdated: "2026-07-10",
  newIds: ["retain-employees-purpose", "great-resignation", "ai-slop"]
};
```

版权底线写在第一行注释里：摘要是原创中文改写，不构成对原文的复制，所有外链指向 HBR 官方。这条规矩让你敢公开传播、敢长期做。

## 三、第二步：页面骨架（index.html）

骨架极简，关键是最后两行的加载顺序——先 data.js，再 app.js，因为 app.js 要读 ARTICLES：

```html
<main class="grid" id="grid"></main>

<div class="modal-overlay" id="modal-overlay">
  <div class="modal" id="modal" role="dialog" aria-modal="true"></div>
</div>

<script src="data.js"></script>
<script src="app.js"></script>
```

网格和弹窗都是空的，内容由 app.js 动态填。你甚至不需要在 HTML 里写任何一篇文章。

## 四、第三步：让它动起来（app.js 核心逻辑）

app.js 是一个立即执行函数，核心就四个函数。

分类筛选标签从数据自动算，不用你手填：

```js
function getCategories() {
  const counts = {};
  ARTICLES.forEach((a) => {
    counts[a.category] = (counts[a.category] || 0) + 1;
  });
  return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
}
```

搜索 + 排序合一的过滤函数：

```js
function getVisible() {
  let list = ARTICLES.filter((a) => {
    // 分类匹配 + 关键词匹配（标题/作者/摘要/标签都搜）
  });
  const sort = sortSelect.value;
  list = list.slice().sort((a, b) => {
    if (sort === "year-desc") return b.year - a.year;
    if (sort === "title") return a.zhTitle.localeCompare(b.zhTitle, "zh");
  });
  return list;
}
```

详情弹窗里的「阅读原文」，用了一个关键设计——优先直链，没有直链再回退检索：

```js
const link = a.url || buildHbrLink(a.enTitle);
```

我踩过的坑：一开始所有「阅读原文」都跳 HBR 搜索列表，读者点开不是文章页。修法是给每篇补真实的 url 直链，只在少数没有独立页的书（如《执行》）才回退。这一个判断，决定了体验是「直达」还是「迷路」。

另外有个细节值得抄：所有用户输入和文章字段渲染前都过一遍转义，防止注入：

```js
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ /* … */ }[c]));
}
```

## 五、第四步：深色编辑风（styles.css 关键变量）

视觉上要「像一本管理学期刊」，靠一组 CSS 变量统一控制：

```css
:root {
  --bg: #0e1014;
  --text: #e8eaf0;
  --accent: #c8102e;   /* HBR 经典深红 */
  --serif: Georgia, "Songti SC", "SimSun", serif;
  --sans: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

强调色用 HBR 红 #c8102e，标题用衬线字体，正文用无衬线。响应式交给 CSS 栅格，手机上自动单列、卡片全宽。

## 六、第五步：部署上线（CloudStudio → 公网链接）

纯静态站最爽的一步：把四个文件往静态托管一丢，就有公网地址。

我用的是 CloudStudio，部署后拿到一个 `*.app.codebuddy.work` 的公网链接——手机浏览器直接打开、能收藏成书签、无需登录。整个站点对外只有一个 HTML + 一个 CSS + 两个 JS，加载快、零运维。

如果你有自己的服务器或 GitHub Pages，同样适用：把这四个文件传上去即可。

## 七、加分项：让站点「自己会长」

静态站做完是「陈列馆」，加上自动化才变成「自己在长」。

我的做法是设一个定时任务（每两周周五）：AI 自动去策展 3 到 5 篇真实的 HBR 文章，写进 data.js 的 ARTICLES，更新 META 的 lastUpdated 和 newIds，然后重新部署。新文章自动带绿色「新」角标，读者一眼知道哪些是新加的。

这一步把「靠意志力更新」变成「一套流程在跑」，也是公众号 2026 年推荐机制最奖励的那种持续、真实产出。

## 八、避坑提醒

第一，版权底线别碰。只做原创摘要 + 外链，不搬运全文。这一年各大平台都在限流纯 AI 搬运内容，守规矩的人反而被算法偏爱。

第二，「阅读原文」一定要用真实文章直链，别图省事跳搜索页。读者点「原文」却进了检索列表，信任立刻掉一分。

第三，从第一天就用数据驱动。分类、统计、角标全部从数据自动算，不写死在页面里——这样你加第 35 篇、第 100 篇时，维护成本和加第 1 篇一样低。

## 总结

一个能公网访问、手机可开、还会自动更新的内容站，本质就是：一份数据 + 一套渲染 + 一次部署。难的不是技术，是你选哪个领域、写不写得出有血有肉的摘要。

行动建议：今天就建一个文件夹，先放 10 篇文章数据进去，把页面跑起来。跑通了，IP 的第一块砖就垒上了。
