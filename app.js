const coverPath = (slug) => `./assets/covers/portfolio/${slug}.webp`;
const douyinUrl = (id) => `https://www.douyin.com/video/${id}`;

const projects = [
  {
    id: "last-poet",
    title: "地球上最后一个诗人",
    titleEn: "THE LAST POET ON EARTH",
    category: "original",
    year: "2025 — 2026",
    meta: "SCI-FI · 18 MIN",
    cover: coverPath("last-poet-2026"),
    tags: ["FLAGSHIP", "SCI-FI", "AI FILM", "LIVE ACTION"],
    description: "在数字永生成为普遍选择后，一个仍然保留痛苦、记忆与感官的人，必须决定什么才是人类最后不可被删除的部分。",
    featured: 1,
    films: [
      {
        label: "2026 Final Version",
        detail: "18 min · Director's Cut",
        platform: "douyin",
        videoId: "7672377395738955017",
        shareUrl: douyinUrl("7672377395738955017"),
      },
      {
        label: "2025 Original Version",
        detail: "Award-winning Short Film",
        platform: "douyin",
        videoId: "7561347762295786802",
        shareUrl: douyinUrl("7561347762295786802"),
      },
    ],
  },
  {
    id: "xi",
    title: "喜",
    titleEn: "DOUBLE HAPPINESS",
    category: "original",
    year: "2026.02",
    meta: "HORROR · SHORT FILM",
    cover: coverPath("xi"),
    tags: ["VIRAL", "HORROR", "LIVE ACTION"],
    description: "婚嫁的喜色与民俗阴影彼此吞噬，一则以东方仪式和女性视角展开的中式恐怖短片。",
    featured: 2,
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7605074719074831635", shareUrl: douyinUrl("7605074719074831635") }],
  },
  {
    id: "returned-next-time",
    title: "下次已退回",
    titleEn: "RETURNED: NEXT TIME",
    category: "original",
    year: "2026.08",
    meta: "DRAMA · FAMILY",
    cover: coverPath("returned-next-time"),
    tags: ["DRAMA", "FAMILY", "LIVE ACTION"],
    description: "一段被反复退回的现实，牵出亲情、错过与重新面对彼此的可能。",
    featured: 3,
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7673084869026663689", shareUrl: douyinUrl("7673084869026663689") }],
  },
  {
    id: "healing-fairy-tale",
    title: "治愈童话",
    titleEn: "A HEALING FAIRY TALE",
    category: "original",
    year: "2026.07",
    meta: "ANIMATION · HEALING",
    cover: coverPath("healing-fairy-tale"),
    tags: ["ANIMATION", "HEALING"],
    description: "用明亮而柔软的动画世界，讲述相遇、理解与被温柔接住的瞬间。",
    featured: 8,
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7660458393290722575", shareUrl: douyinUrl("7660458393290722575") }],
  },
  {
    id: "beyond-the-mountain",
    title: "山的后面",
    titleEn: "BEYOND THE MOUNTAIN",
    category: "original",
    year: "2025.10",
    meta: "DRAMA · SHORT FILM",
    cover: coverPath("beyond-the-mountain"),
    tags: ["AWARD WINNER", "LIVE ACTION", "DRAMA"],
    description: "一只流浪猫的独白，用爪尖的自由哲学反衬人类世界的爱与囚笼。",
    featured: 7,
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7565731356559887625", shareUrl: douyinUrl("7565731356559887625") }],
  },
  {
    id: "wandering-monk",
    title: "长徙僧",
    titleEn: "THE WANDERING MONK",
    category: "original",
    year: "2026.04",
    meta: "ANCIENT CHINA · DRAMA",
    cover: coverPath("wandering-monk"),
    tags: ["ANCIENT CHINA", "LIVE ACTION"],
    description: "一个漫长行旅中的古风故事，以克制的人物表演和命运感勾勒精神归途。",
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7623650876346977590", shareUrl: douyinUrl("7623650876346977590") }],
  },
  {
    id: "healing-banana-cat",
    title: "治愈香蕉猫",
    titleEn: "BANANA CAT",
    category: "original",
    year: "2026.03",
    meta: "ANIMATION · HEALING",
    cover: coverPath("healing-banana-cat"),
    tags: ["ANIMATION", "HEALING"],
    description: "在梦境般的糖果森林中，用轻盈动画回应孤独与陪伴。",
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7620099377079651635", shareUrl: douyinUrl("7620099377079651635") }],
  },
  {
    id: "return-to-lingxiao",
    title: "再踏凌霄",
    titleEn: "RETURN TO LINGXIAO",
    category: "original",
    year: "2025",
    meta: "ANIMATION · SHORT FILM",
    cover: coverPath("return-to-lingxiao"),
    tags: ["AWARD WINNER", "ANIMATION"],
    description: "以动画重访东方神话中的反抗、选择与再次出发。",
    films: [{ label: "在快手观看", platform: "kuaishou", shareUrl: "https://www.kuaishou.com/f/X-6XfFfUAAws7t6Q" }],
  },
  {
    id: "six-flavors-of-life",
    title: "浮生六味",
    titleEn: "SIX FLAVORS OF LIFE",
    category: "original",
    year: "2025",
    meta: "POETIC FILM",
    cover: coverPath("six-flavors-of-life"),
    tags: ["POETIC", "ANCIENT CHINA"],
    description: "以六味观浮生，在东方意象和日常感受之间寻找人生的余韵。",
    films: [{ label: "在小红书观看", platform: "xiaohongshu", shareUrl: "https://www.xiaohongshu.com/discovery/item/691fe6e8000000001e00848e" }],
  },
  {
    id: "lord-of-mysteries",
    title: "诡秘之主",
    titleEn: "LORD OF MYSTERIES",
    category: "adaptation",
    year: "2026.05",
    meta: "IP ADAPTATION SERIES · 3 FILMS",
    cover: coverPath("lord-of-mysteries-2"),
    tags: ["VIRAL", "IP ADAPTATION", "ANIMATION"],
    badge: "3 FILMS",
    description: "以三支独立短片进入诡秘世界，在维多利亚式阴影、疯狂与守护者命运之间完成系列化改编。",
    featured: 5,
    films: [
      { label: "Film 01", detail: "系列短片", platform: "douyin", videoId: "7642667180676369699", shareUrl: douyinUrl("7642667180676369699") },
      { label: "Film 02", detail: "系列短片", platform: "douyin", videoId: "7629744274724130067", shareUrl: douyinUrl("7629744274724130067") },
      { label: "我们拯救了廷根", detail: "系列短片", platform: "douyin", videoId: "7625852519557713215", shareUrl: douyinUrl("7625852519557713215") },
    ],
  },
  {
    id: "apocalypse-paradise",
    title: "末日乐园",
    titleEn: "WORLD'S END PARADISE",
    category: "adaptation",
    year: "2026.06",
    meta: "NOVEL ADAPTATION · TRAILER",
    cover: coverPath("apocalypse-paradise"),
    tags: ["IP ADAPTATION", "LIVE ACTION", "TRAILER"],
    description: "规则很简单，活到第一局结束，就算赢。以真人表演和 AI 世界构建进入末日生存游戏。",
    films: [{ label: "观看预告片", platform: "douyin", videoId: "7648726904337452326", shareUrl: douyinUrl("7648726904337452326") }],
  },
  {
    id: "jianlai",
    title: "剑来",
    titleEn: "SWORD OF COMING",
    category: "adaptation",
    year: "2026.07",
    meta: "IP ADAPTATION · LIVE ACTION",
    cover: coverPath("jianlai"),
    tags: ["LIVE ACTION × AI", "IP ADAPTATION"],
    description: "以实拍人物、现场摄影和 AI 场景延展，重构东方玄幻世界的视觉气韵。",
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7664548617386705649", shareUrl: douyinUrl("7664548617386705649") }],
  },
  {
    id: "foolish-play-of-gods",
    title: "诸神愚戏",
    titleEn: "FOOLISH PLAY OF GODS",
    category: "adaptation",
    year: "2025.12",
    meta: "COMIC ADAPTATION · LIVE ACTION",
    cover: coverPath("foolish-play-of-gods"),
    tags: ["IP ADAPTATION", "LIVE ACTION"],
    description: "真人版试炼开启，以强风格视觉进入规则、谎言与命运互相纠缠的叙事场。",
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7585570996866829618", shareUrl: douyinUrl("7585570996866829618") }],
  },
  {
    id: "ghost-forum-slayer",
    title: "我在怪谈论坛学斩鬼",
    titleEn: "GHOST FORUM SLAYER",
    category: "adaptation",
    year: "2025.12",
    meta: "COMIC ADAPTATION · ANIMATION",
    cover: coverPath("ghost-forum-slayer"),
    tags: ["IP ADAPTATION", "ANIMATION", "HORROR"],
    description: "怪谈论坛中的诡事逐渐照进现实，一个普通学生在规则阴影中升级求生。",
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7585179005993766171", shareUrl: douyinUrl("7585179005993766171") }],
  },
  {
    id: "slay-the-dragon",
    title: "杀了那条龙",
    titleEn: "SLAY THAT DRAGON",
    category: "adaptation",
    year: "2025",
    meta: "GAME REIMAGINED · FEMALE STORY",
    cover: coverPath("slay-the-dragon"),
    tags: ["AWARD WINNER", "GAME", "FEMALE STORY"],
    description: "从游戏世界出发，以女性视角重新书写屠龙、命运和自我选择。",
    films: [{ label: "在小红书观看", platform: "xiaohongshu", shareUrl: "https://www.xiaohongshu.com/discovery/item/688c45a8000000000500a1ad" }],
  },
  {
    id: "scums-wish",
    title: "人渣的本愿",
    titleEn: "SCUM'S WISH",
    category: "adaptation",
    year: "2026.03",
    meta: "NARRATIVE EDIT · LIVE ACTION",
    cover: coverPath("scums-wish"),
    tags: ["LIVE ACTION", "NARRATIVE EDIT"],
    description: "将剧情混剪、真人化与解说叙事结合，重组人物欲望与关系中的隐秘张力。",
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7617555846339267875", shareUrl: douyinUrl("7617555846339267875") }],
  },
  {
    id: "mulan",
    title: "花木兰",
    titleEn: "MULAN",
    category: "live-action",
    year: "2026.06",
    meta: "LIVE ACTION × AI",
    cover: coverPath("mulan"),
    tags: ["LIVE ACTION × AI", "PERFORMANCE", "COMPOSITING"],
    description: "以现场表演和摄影为基底，让 AI 延展战场、时空与人物内心的视觉规模。",
    featured: 6,
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7647392584839759589", shareUrl: douyinUrl("7647392584839759589") }],
  },
  {
    id: "kundao",
    title: "坤道",
    titleEn: "KUNDAO",
    category: "live-action",
    year: "2026.05",
    meta: "LIVE ACTION × AI",
    cover: coverPath("kundao"),
    tags: ["LIVE ACTION × AI", "PERFORMANCE"],
    description: "真人表演和现场质感构成叙事骨架，AI 负责扩展人物所处的精神空间。",
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7634830644921404645", shareUrl: douyinUrl("7634830644921404645") }],
  },
  {
    id: "byd",
    title: "BYD",
    titleEn: "BYD · BRANDED FILMS",
    category: "commercial",
    year: "2026.05",
    meta: "AI COMMERCIAL · 2 FILMS",
    cover: coverPath("byd-film-1"),
    tags: ["BRANDED", "AUTOMOTIVE", "LIVE ACTION"],
    badge: "2 FILMS",
    description: "两支汽车品牌影像，以家庭陪伴和户外探索为不同情绪入口，完成从产品特性到生活方式的叙事转换。",
    featured: 4,
    films: [
      { label: "DENZA · 美好出行家", detail: "Branded Film", platform: "douyin", videoId: "7644566606844038463", shareUrl: douyinUrl("7644566606844038463") },
      { label: "方程豹 · 钛 3", detail: "AI Commercial", platform: "douyin", videoId: "7621094404614393097", shareUrl: douyinUrl("7621094404614393097") },
    ],
  },
  {
    id: "letter-to-myself",
    title: "给自己的一封信",
    titleEn: "A LETTER TO MYSELF",
    category: "commercial",
    year: "2025",
    meta: "BRANDED FILM · ANIMATION",
    cover: coverPath("letter-to-myself"),
    tags: ["AWARD WINNER", "BRANDED", "ANIMATION"],
    description: "从旧电脑到未来数据海洋，两个时代的自己隔空相望，完成一封关于选择与成长的时光回信。",
    films: [{ label: "观看完整作品", platform: "douyin", videoId: "7519441971397889331", shareUrl: douyinUrl("7519441971397889331") }],
  },
  {
    id: "mechanical-eye",
    title: "机械眼教程",
    titleEn: "MECHANICAL EYE WORKFLOW",
    category: "lab",
    year: "LAB",
    meta: "EXPERIMENT · TUTORIAL",
    cover: coverPath("mechanical-eye-tutorial"),
    tags: ["TUTORIAL", "WORKFLOW", "AIGC"],
    description: "从生成、镜头设计到剪辑，拆解电影感机械眼短片的完整制作路径。",
    films: [{ label: "在小红书查看教程", platform: "xiaohongshu", shareUrl: "https://www.xiaohongshu.com/discovery/item/68ee420a00000000070347a9" }],
  },
  {
    id: "first-last-frame",
    title: "首尾帧教程",
    titleEn: "FIRST & LAST FRAME",
    category: "lab",
    year: "LAB",
    meta: "EXPERIMENT · TUTORIAL",
    cover: coverPath("first-last-frame-tutorial"),
    tags: ["TUTORIAL", "WORKFLOW", "AIGC"],
    description: "用首尾帧控制镜头运动、画面转场和生成一致性的实用方法。",
    films: [{ label: "观看教程", platform: "douyin", videoId: "7560620220017380618", shareUrl: douyinUrl("7560620220017380618") }],
  },
];

const categories = [
  { id: "all", label: "ALL", sublabel: "全部作品" },
  { id: "original", label: "ORIGINAL FILMS", sublabel: "原创影像" },
  { id: "adaptation", label: "IP & ADAPTATION", sublabel: "IP 改编" },
  { id: "live-action", label: "LIVE ACTION × AI", sublabel: "实拍 × AI" },
  { id: "commercial", label: "COMMERCIAL", sublabel: "商业影像" },
  { id: "lab", label: "LAB", sublabel: "创作实验" },
];

const selectedGrid = document.querySelector("#selectedGrid");
const liveActionGrid = document.querySelector("#liveActionGrid");
const workGrid = document.querySelector("#workGrid");
const filterTabs = document.querySelector("#filterTabs");
const modal = document.querySelector("#projectModal");
const modalDialog = document.querySelector(".project-dialog");
const modalMedia = document.querySelector("#modalMedia");
const modalEyebrow = document.querySelector("#modalEyebrow");
const modalTitle = document.querySelector("#modalTitle");
const modalTitleEn = document.querySelector("#modalTitleEn");
const modalDescription = document.querySelector("#modalDescription");
const modalTags = document.querySelector("#modalTags");
const filmList = document.querySelector("#filmList");
const toast = document.querySelector("#toast");

let activeCategory = "all";
let activeProject = null;
let lastFocusedElement = null;
let toastTimer = null;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);

const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

const getProject = (id) => projects.find((project) => project.id === id);

const showToast = (message) => {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("toast--visible"));
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("toast--visible");
    window.setTimeout(() => { toast.hidden = true; }, 180);
  }, 2400);
};

const renderTags = (tags) => tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");

const selectedCardTemplate = (project) => {
  const sizeClass = project.featured === 1 ? "selected-card--hero" : "";
  return `
    <button class="selected-card ${sizeClass}" type="button" data-project-id="${escapeHtml(project.id)}">
      <span class="selected-card__media">
        <img src="${escapeHtml(project.cover)}" alt="《${escapeHtml(project.title)}》封面" loading="lazy">
        <span class="card-shade" aria-hidden="true"></span>
        <span class="card-number">${String(project.featured).padStart(2, "0")}</span>
        ${project.badge ? `<span class="series-badge">${escapeHtml(project.badge)}</span>` : ""}
        <span class="play-mark" aria-hidden="true">▶</span>
      </span>
      <span class="selected-card__info">
        <span class="card-title-en">${escapeHtml(project.titleEn)}</span>
        <strong>${escapeHtml(project.title)}</strong>
        <span class="card-meta">${escapeHtml(project.year)} · ${escapeHtml(project.meta)}</span>
        <span class="card-feature-tag">${escapeHtml(project.tags[0])}</span>
      </span>
    </button>
  `;
};

const workCardTemplate = (project) => `
  <button class="work-card" type="button" data-project-id="${escapeHtml(project.id)}">
    <span class="work-card__media">
      <img src="${escapeHtml(project.cover)}" alt="《${escapeHtml(project.title)}》封面" loading="lazy">
      <span class="card-shade" aria-hidden="true"></span>
      ${project.badge ? `<span class="series-badge">${escapeHtml(project.badge)}</span>` : ""}
      <span class="work-card__action">View project <span aria-hidden="true">↗</span></span>
    </span>
    <span class="work-card__info">
      <span class="card-title-en">${escapeHtml(project.titleEn)}</span>
      <strong>${escapeHtml(project.title)}</strong>
      <span class="card-meta">${escapeHtml(project.year)} · ${escapeHtml(project.meta)}</span>
      <span class="work-card__tags">${renderTags(project.tags.slice(0, 2))}</span>
    </span>
  </button>
`;

const liveActionCardTemplate = (project, index) => `
  <button class="live-action-card" type="button" data-project-id="${escapeHtml(project.id)}">
    <img src="${escapeHtml(project.cover)}" alt="《${escapeHtml(project.title)}》封面" loading="lazy">
    <span class="card-shade" aria-hidden="true"></span>
    <span class="live-action-card__index">0${index + 1}</span>
    <span class="live-action-card__title"><strong>${escapeHtml(project.title)}</strong><small>${escapeHtml(project.titleEn)}</small></span>
  </button>
`;

const renderSelected = () => {
  selectedGrid.innerHTML = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.featured - b.featured)
    .map(selectedCardTemplate)
    .join("");
};

const renderLiveAction = () => {
  const ids = ["mulan", "kundao", "jianlai"];
  liveActionGrid.innerHTML = ids.map((id, index) => liveActionCardTemplate(getProject(id), index)).join("");
};

const renderFilters = () => {
  filterTabs.innerHTML = categories.map((category) => `
    <button
      type="button"
      class="filter-tab ${category.id === activeCategory ? "filter-tab--active" : ""}"
      data-category="${escapeHtml(category.id)}"
      aria-pressed="${category.id === activeCategory}"
    >
      <span>${escapeHtml(category.label)}</span>
      <small>${escapeHtml(category.sublabel)}</small>
    </button>
  `).join("");
};

const renderWorkIndex = () => {
  const visibleProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => (
      project.category === activeCategory
      || (activeCategory === "live-action" && project.id === "jianlai")
    ));
  workGrid.innerHTML = visibleProjects.map(workCardTemplate).join("");
};

const getEmbedUrl = (film) => {
  if (film.platform === "douyin" && film.videoId) {
    return `https://open.douyin.com/player/video?vid=${encodeURIComponent(film.videoId)}&autoplay=0`;
  }
  return "";
};

const clearPlayer = () => {
  modalMedia.querySelectorAll("iframe").forEach((iframe) => {
    iframe.src = "about:blank";
    iframe.remove();
  });
};

const playFilm = (project, film) => {
  if (isMobile()) {
    if (film.shareUrl) {
      const opened = window.open(film.shareUrl, "_blank", "noopener,noreferrer");
      if (!opened) window.location.href = film.shareUrl;
      return;
    }
    showToast("作品视频即将上线");
    return;
  }

  const embedUrl = getEmbedUrl(film);
  if (!embedUrl) {
    if (film.shareUrl) {
      window.open(film.shareUrl, "_blank", "noopener,noreferrer");
      return;
    }
    showToast("作品视频即将上线");
    return;
  }

  clearPlayer();
  modalMedia.innerHTML = "";
  const iframe = document.createElement("iframe");
  iframe.src = embedUrl;
  iframe.title = `${project.title} · ${film.label}`;
  iframe.allow = "fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture";
  iframe.allowFullscreen = true;
  modalMedia.append(iframe);

  filmList.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("film-button--active", button.dataset.videoId === film.videoId);
  });
};

const filmButtonTemplate = (film, index) => `
  <button
    class="film-button"
    type="button"
    data-film-index="${index}"
    data-video-id="${escapeHtml(film.videoId || "")}"
  >
    <span><strong>${escapeHtml(film.label)}</strong>${film.detail ? `<small>${escapeHtml(film.detail)}</small>` : ""}</span>
    <span aria-hidden="true">${film.platform === "douyin" ? "Play" : "Open"} ↗</span>
  </button>
`;

const openProject = (project, trigger) => {
  if (!project) return;
  activeProject = project;
  lastFocusedElement = trigger || document.activeElement;
  modalEyebrow.textContent = `${project.year} / ${categories.find((category) => category.id === project.category)?.label || "PROJECT"}`;
  modalTitle.textContent = project.title;
  modalTitleEn.textContent = project.titleEn;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = renderTags(project.tags);
  filmList.innerHTML = project.films.map(filmButtonTemplate).join("");
  modalMedia.innerHTML = `<img src="${escapeHtml(project.cover)}" alt="《${escapeHtml(project.title)}》封面">`;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.classList.add("project-modal--open"));
  document.querySelector("[data-modal-close]")?.focus({ preventScroll: true });
};

const closeProject = () => {
  if (modal.hidden) return;
  clearPlayer();
  modal.classList.remove("project-modal--open");
  document.body.classList.remove("modal-open");
  activeProject = null;
  window.setTimeout(() => {
    modal.hidden = true;
    modalMedia.innerHTML = "";
  }, 180);
  lastFocusedElement?.focus?.({ preventScroll: true });
};

document.addEventListener("click", (event) => {
  const projectTrigger = event.target.closest("[data-project-id]");
  if (projectTrigger) {
    const project = getProject(projectTrigger.dataset.projectId);
    if (isMobile() && project?.films.length === 1) {
      playFilm(project, project.films[0]);
    } else {
      openProject(project, projectTrigger);
    }
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    renderFilters();
    renderWorkIndex();
    return;
  }

  const filmButton = event.target.closest("[data-film-index]");
  if (filmButton && activeProject) {
    playFilm(activeProject, activeProject.films[Number(filmButton.dataset.filmIndex)]);
    return;
  }

  if (event.target.closest("[data-modal-close]") || event.target === modal) {
    closeProject();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProject();
  if (event.key === "Tab" && !modal.hidden) {
    const focusable = [...modalDialog.querySelectorAll("button, a, iframe")].filter((element) => !element.disabled);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast(`已复制：${value}`);
    } catch {
      showToast(`联系方式：${value}`);
    }
  });
});

renderSelected();
renderLiveAction();
renderFilters();
renderWorkIndex();
