const coverPath = (name) => `./assets/covers/portfolio/${name}.webp`;
const douyinUrl = (videoId) => `https://www.douyin.com/video/${videoId}`;

const videos = [
  {
    title: "地球上最后一个诗人",
    category: "原创影像",
    tag: "代表作 · 科幻",
    duration: "2026.08 · 18 MIN",
    description: "关于记忆、痛苦、存在与救赎的后人类寓言。数字永生成为普遍选择后，一个仍保留感官的人必须决定什么才是人类最后不可删除的部分。",
    cover: coverPath("last-poet-2026"),
    platform: "douyin",
    shareUrl: douyinUrl("7672377395738955017"),
    douyinVideoId: "7672377395738955017",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "喜",
    category: "原创影像",
    tag: "中式恐怖 · 高播放",
    duration: "2026.02",
    description: "婚嫁的喜色与民俗阴影彼此吞噬，一则以东方仪式和女性视角展开的中式恐怖短片。",
    cover: coverPath("xi"),
    platform: "douyin",
    shareUrl: douyinUrl("7605074719074831635"),
    douyinVideoId: "7605074719074831635",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "下次已退回",
    category: "原创影像",
    tag: "真人 · 亲情",
    duration: "2026.08",
    description: "一段被反复退回的现实，牵出亲情、错过与重新面对彼此的可能。",
    cover: coverPath("returned-next-time"),
    platform: "douyin",
    shareUrl: douyinUrl("7673084869026663689"),
    douyinVideoId: "7673084869026663689",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "治愈童话",
    category: "原创影像",
    tag: "动画 · 治愈",
    duration: "2026.07",
    description: "用明亮而柔软的动画世界，讲述相遇、理解与被温柔接住的瞬间。",
    cover: coverPath("healing-fairy-tale"),
    platform: "douyin",
    shareUrl: douyinUrl("7660458393290722575"),
    douyinVideoId: "7660458393290722575",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "长徙僧",
    category: "原创影像",
    tag: "真人 · 古风",
    duration: "2026.04",
    description: "一个漫长行旅中的古风故事，以克制的人物表演和命运感勾勒精神归途。",
    cover: coverPath("wandering-monk"),
    platform: "douyin",
    shareUrl: douyinUrl("7623650876346977590"),
    douyinVideoId: "7623650876346977590",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "治愈香蕉猫",
    category: "原创影像",
    tag: "动画 · 治愈",
    duration: "2026.03",
    description: "在梦境般的糖果森林中，用轻盈动画回应孤独与陪伴。",
    cover: coverPath("healing-banana-cat"),
    platform: "douyin",
    shareUrl: douyinUrl("7620099377079651635"),
    douyinVideoId: "7620099377079651635",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "山的后面",
    category: "原创影像",
    tag: "获奖 · 真人",
    duration: "2025.10",
    description: "一只流浪猫的独白，用爪尖的自由哲学反衬人类世界的爱与囚笼。",
    cover: coverPath("beyond-the-mountain"),
    platform: "douyin",
    shareUrl: douyinUrl("7565731356559887625"),
    douyinVideoId: "7565731356559887625",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "地球上最后一个诗人（2025版）",
    category: "原创影像",
    tag: "获奖 · 长片",
    duration: "2025.10",
    description: "代表作的最初版本，记录《地球上最后一个诗人》从获奖短片走向新版长片的创作起点。",
    cover: coverPath("last-poet-2025"),
    platform: "douyin",
    shareUrl: douyinUrl("7561347762295786802"),
    douyinVideoId: "7561347762295786802",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "再踏凌霄",
    category: "原创影像",
    tag: "获奖 · 动画",
    duration: "2025",
    description: "以动画重访东方神话中的反抗、选择与再次出发。",
    cover: coverPath("return-to-lingxiao"),
    platform: "kuaishou",
    shareUrl: "https://www.kuaishou.com/f/X-6XfFfUAAws7t6Q",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "浮生六味",
    category: "原创影像",
    tag: "东方 · 诗意",
    duration: "2025",
    description: "以六味观浮生，在东方意象和日常感受之间寻找人生的余韵。",
    cover: coverPath("six-flavors-of-life"),
    platform: "xiaohongshu",
    shareUrl: "https://www.xiaohongshu.com/discovery/item/691fe6e8000000001e00848e?source=webshare&xhsshare=pc_web&xsec_token=ABJ_CZ9MVU6ahkiFp8FKfaa5iqnSM1MpWJsWh4ym32y-A=&xsec_source=pc_share",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "末日乐园预告",
    category: "IP 改编",
    tag: "小说改编 · 真人",
    duration: "2026.06",
    description: "“规则很简单，活到第一局结束，就算赢。”以真人表演和 AI 世界构建进入末日生存游戏。",
    cover: coverPath("apocalypse-paradise"),
    platform: "douyin",
    shareUrl: douyinUrl("7648726904337452326"),
    douyinVideoId: "7648726904337452326",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "诡秘之主 · Film 01",
    category: "IP 改编",
    tag: "漫改 · 动画",
    duration: "2026.05",
    description: "以系列短片进入诡秘世界，在维多利亚式阴影、疯狂与守护者命运之间完成视觉改编。",
    cover: coverPath("lord-of-mysteries-1"),
    platform: "douyin",
    shareUrl: douyinUrl("7642667180676369699"),
    douyinVideoId: "7642667180676369699",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "诡秘之主 · Film 02",
    category: "IP 改编",
    tag: "漫改 · 动画",
    duration: "2026.05",
    description: "延续诡秘世界的阴郁质感，以独立人物切面展开系列化 AI 改编。",
    cover: coverPath("lord-of-mysteries-2"),
    platform: "douyin",
    shareUrl: douyinUrl("7629744274724130067"),
    douyinVideoId: "7629744274724130067",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "诡秘之主：我们拯救了廷根",
    category: "IP 改编",
    tag: "漫改 · 动画",
    duration: "2026.05",
    description: "“我们是守护者，也是一群时刻对抗危险和疯狂的可怜虫。”进入廷根守护者的命运切面。",
    cover: coverPath("lord-of-mysteries-3"),
    platform: "douyin",
    shareUrl: douyinUrl("7625852519557713215"),
    douyinVideoId: "7625852519557713215",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "人渣的本愿",
    category: "IP 改编",
    tag: "真人化 · 剧情",
    duration: "2026.03",
    description: "将剧情混剪、真人化与解说叙事结合，重组人物欲望与关系中的隐秘张力。",
    cover: coverPath("scums-wish"),
    platform: "douyin",
    shareUrl: douyinUrl("7617555846339267875"),
    douyinVideoId: "7617555846339267875",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "诸神愚戏",
    category: "IP 改编",
    tag: "漫改 · 真人",
    duration: "2025.12",
    description: "真人版试炼开启，以强风格视觉进入规则、谎言与命运互相纠缠的叙事场。",
    cover: coverPath("foolish-play-of-gods"),
    platform: "douyin",
    shareUrl: douyinUrl("7585570996866829618"),
    douyinVideoId: "7585570996866829618",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "我在怪谈论坛学斩鬼",
    category: "IP 改编",
    tag: "漫改 · 动画",
    duration: "2025.12",
    description: "怪谈论坛中的诡事逐渐照进现实，一个普通学生在规则阴影中升级求生。",
    cover: coverPath("ghost-forum-slayer"),
    platform: "douyin",
    shareUrl: douyinUrl("7585179005993766171"),
    douyinVideoId: "7585179005993766171",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "杀了那条龙",
    category: "IP 改编",
    tag: "游戏二创 · 获奖",
    duration: "2025",
    description: "从游戏世界出发，以女性视角重新书写屠龙、命运和自我选择。",
    cover: coverPath("slay-the-dragon"),
    platform: "xiaohongshu",
    shareUrl: "https://www.xiaohongshu.com/discovery/item/688c45a8000000000500a1ad?source=webshare&xhsshare=pc_web&xsec_token=ABBlpx4HKSZIYteLRA_oKJDjJIVGfmzt6yPGFUcD82u2w=&xsec_source=pc_share",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "花木兰",
    category: "实拍 × AI",
    tag: "实拍为主 · AI 为辅",
    duration: "2026.06",
    description: "以现场表演和摄影为基底，让 AI 延展战场、时空与人物内心的视觉规模。",
    cover: coverPath("mulan"),
    platform: "douyin",
    shareUrl: douyinUrl("7647392584839759589"),
    douyinVideoId: "7647392584839759589",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "坤道",
    category: "实拍 × AI",
    tag: "实拍为主 · AI 为辅",
    duration: "2026.05",
    description: "真人表演和现场质感构成叙事骨架，AI 负责扩展人物所处的精神空间。",
    cover: coverPath("kundao"),
    platform: "douyin",
    shareUrl: douyinUrl("7634830644921404645"),
    douyinVideoId: "7634830644921404645",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "剑来",
    category: "实拍 × AI",
    tag: "IP · 实拍 × AI",
    duration: "2026.07",
    description: "以实拍人物、现场摄影和 AI 场景延展，重构东方玄幻世界的视觉气韵。",
    cover: coverPath("jianlai"),
    platform: "douyin",
    shareUrl: douyinUrl("7664548617386705649"),
    douyinVideoId: "7664548617386705649",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "BYD · 美好出行家",
    category: "商业影像",
    tag: "汽车 · 品牌影像",
    duration: "2026.05",
    description: "以家庭陪伴为情绪入口，在生活细节中建立产品与用户之间的温暖连接。",
    cover: coverPath("byd-film-1"),
    platform: "douyin",
    shareUrl: douyinUrl("7644566606844038463"),
    douyinVideoId: "7644566606844038463",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "BYD · 方程豹钛 3",
    category: "商业影像",
    tag: "汽车 · AI 广告",
    duration: "2026.05",
    description: "以户外探索和科技想象展开汽车产品叙事，连接性能表达与生活方式。",
    cover: coverPath("byd-film-2"),
    platform: "douyin",
    shareUrl: douyinUrl("7621094404614393097"),
    douyinVideoId: "7621094404614393097",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "给自己的一封信",
    category: "商业影像",
    tag: "获奖 · 品牌叙事",
    duration: "动画短片",
    description: "从旧电脑到未来数据海洋，两个时代的自己隔空相望，完成一封关于选择与成长的时光回信。",
    cover: coverPath("letter-to-myself"),
    platform: "douyin",
    shareUrl: douyinUrl("7519441971397889331"),
    douyinVideoId: "7519441971397889331",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "机械眼教程",
    category: "创作实验",
    tag: "教程 · Workflow",
    duration: "LAB",
    description: "从生成、镜头设计到剪辑，拆解电影感机械眼短片的完整制作路径。",
    cover: coverPath("mechanical-eye-tutorial"),
    platform: "xiaohongshu",
    shareUrl: "https://www.xiaohongshu.com/discovery/item/68ee420a00000000070347a9?source=webshare&xhsshare=pc_web&xsec_token=ABdvwtd0fq7P9xK64_HsgjHj5YjReEhCrPjY4EnZHWHyI=&xsec_source=pc_share",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "首尾帧教程",
    category: "创作实验",
    tag: "教程 · Workflow",
    duration: "LAB",
    description: "用首尾帧控制镜头运动、画面转场和生成一致性的实用方法。",
    cover: coverPath("first-last-frame-tutorial"),
    platform: "douyin",
    shareUrl: douyinUrl("7560620220017380618"),
    douyinVideoId: "7560620220017380618",
    ratio: "16:9",
    status: "ready",
  },
];

const categoryNotes = {
  原创影像: "从科幻寓言、中式恐怖到亲情与治愈叙事，呈现导演视角与故事能力。",
  "IP 改编": "从小说、漫画到游戏，以 AI 影像重新进入已有世界。",
  "实拍 × AI": "让现场摄影、真人表演与 AI 生成在同一套影像语言中协作。",
  商业影像: "用 AIGC 建立品牌叙事、产品想象与情绪记忆。",
  创作实验: "记录教程、技术实验与可复用的 AIGC 影像工作流。",
};

const categories = ["原创影像", "IP 改编", "实拍 × AI", "商业影像", "创作实验"];

const categoryEnglish = {
  原创影像: "ORIGINAL FILMS",
  "IP 改编": "IP & ADAPTATION",
  "实拍 × AI": "LIVE ACTION × AI",
  商业影像: "COMMERCIAL",
  创作实验: "LAB & TUTORIALS",
};

const workGroups = categories.map((category) => ({
  category,
  note: categoryNotes[category],
  works: videos
    .map((video, index) => ({ ...video, index }))
    .filter((video) => video.category === category),
}));

const worksGrid = document.querySelector("#worksGrid");
const categoryNav = document.querySelector("#categoryNav");
const videoModal = document.querySelector("#videoModal");
const modalDialog = document.querySelector(".modal-dialog");
const modalCloseButton = document.querySelector("[data-modal-close]");
const modalMeta = document.querySelector("#modalMeta");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalPlayer = document.querySelector("#modalPlayer");
const mobileToast = document.querySelector("#mobileToast");
let lastFocusedElement = null;
let mobileToastTimer = null;

categoryNav.innerHTML = categories
  .map(
    (category, index) => `
      <a href="#work-category-${index}">
        <span>${categoryEnglish[category]}</span>
        <small>${category}</small>
      </a>
    `,
  )
  .join("");

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const platformLabels = {
  bilibili: "B站",
  douyin: "抖音",
  xiaohongshu: "小红书",
  kuaishou: "快手",
};

const ratioConfigs = {
  "16:9": {
    cssRatio: "16 / 9",
    dialogClass: "modal-dialog--wide",
  },
  "9:16": {
    cssRatio: "9 / 16",
    dialogClass: "modal-dialog--portrait",
  },
  "4:3": {
    cssRatio: "4 / 3",
    dialogClass: "modal-dialog--classic",
  },
};

const getPlatform = (video) => {
  const supportedPlatforms = ["bilibili", "douyin", "xiaohongshu", "kuaishou"];
  return supportedPlatforms.includes(video.platform) ? video.platform : "douyin";
};

const getShareUrl = (video) => String(video.shareUrl || video.douyinShareUrl || "").trim();

const getRatioConfig = (video) => ratioConfigs[video.ratio] || ratioConfigs["16:9"];

const isMobilePlaybackRedirect = () =>
  window.matchMedia("(max-width: 768px), (pointer: coarse) and (max-height: 520px)").matches;

const getVideoEmbedUrl = (video) => {
  const platform = getPlatform(video);
  const bvid = String(video.bvid || "").trim();
  const douyinVideoId = String(video.douyinVideoId || "").trim();

  if (platform === "bilibili" && bvid) {
    const encodedBvid = encodeURIComponent(bvid);
    const page = encodeURIComponent(String(video.page || 1));

    return `https://player.bilibili.com/player.html?bvid=${encodedBvid}&p=${page}&poster=1&autoplay=0&danmaku=0`;
  }

  if (platform === "douyin" && douyinVideoId) {
    const encodedDouyinVideoId = encodeURIComponent(douyinVideoId);

    return `https://open.douyin.com/player/video?vid=${encodedDouyinVideoId}&autoplay=0`;
  }

  return "";
};

const getStatusLabel = (video) => {
  if (getVideoEmbedUrl(video)) {
    return "播放作品";
  }

  if (getShareUrl(video)) {
    return `在${platformLabels[getPlatform(video)]}打开`;
  }

  return "视频即将上线";
};

const getMobileStatusLabel = (video) => {
  if (getShareUrl(video)) {
    return `在${platformLabels[getPlatform(video)]}观看`;
  }

  return "视频即将上线";
};

const getIframeTitle = (video) => {
  return `${video.title} - ${platformLabels[getPlatform(video)]}播放器`;
};

const createPlayerIframe = (video, embedUrl) => {
  const iframe = document.createElement("iframe");
  iframe.src = embedUrl;
  iframe.title = getIframeTitle(video);
  iframe.loading = "lazy";
  iframe.allow = "fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.setAttribute("allowfullscreen", "");

  return iframe;
};

const getPendingContent = (video) => {
  const shareUrl = getShareUrl(video);

  if (shareUrl) {
    return {
      title: "暂未配置站内播放器",
      body: `可以先在${platformLabels[getPlatform(video)]}原视频页面观看。`,
      actionLabel: `在${platformLabels[getPlatform(video)]}打开`,
      actionUrl: shareUrl,
    };
  }

  return {
    title: "视频即将上线",
    body: "后续填入抖音 VideoID 后即可在这里播放。",
  };
};

const buildPendingNotice = (video) => {
  const pendingContent = getPendingContent(video);
  const pendingNotice = document.createElement("div");
  pendingNotice.className = "pending-video";

  const title = document.createElement("strong");
  title.textContent = pendingContent.title;
  pendingNotice.append(title);

  const body = document.createElement("span");
  body.textContent = pendingContent.body;
  pendingNotice.append(body);

  if (pendingContent.actionUrl) {
    const action = document.createElement("a");
    action.className = "pending-video-action";
    action.href = pendingContent.actionUrl;
    action.target = "_blank";
    action.rel = "noreferrer";
    action.textContent = pendingContent.actionLabel;
    pendingNotice.append(action);
  }

  return pendingNotice;
};

const applyModalRatio = (video) => {
  const ratioConfig = getRatioConfig(video);

  modalPlayer.style.setProperty("--player-ratio", ratioConfig.cssRatio);
  modalDialog.classList.add(ratioConfig.dialogClass);
};

const resetModalRatio = () => {
  modalPlayer.style.removeProperty("--player-ratio");
  modalDialog.classList.remove(
    "modal-dialog--wide",
    "modal-dialog--portrait",
    "modal-dialog--classic",
  );
};

const renderWorkCard = (work) => {
  const statusLabel = getStatusLabel(work);
  const mobileStatusLabel = getMobileStatusLabel(work);

  return `
    <article class="work-card">
      <button class="video-frame work-trigger" type="button" data-video-index="${work.index}" aria-label="观看《${escapeHtml(work.title)}》">
        <img src="${escapeHtml(work.cover)}" alt="《${escapeHtml(work.title)}》封面" loading="lazy">
        <span class="play-mark" aria-hidden="true"></span>
        <span class="availability-badge">
          <span class="label-desktop">${escapeHtml(statusLabel)}</span>
          <span class="label-mobile">${escapeHtml(mobileStatusLabel)}</span>
        </span>
      </button>
      <div class="work-body">
        <div class="work-meta">
          <span class="work-tag">${escapeHtml(work.tag)}</span>
          <span class="work-duration">${escapeHtml(work.duration)}</span>
        </div>
        <h4>${escapeHtml(work.title)}</h4>
        <p>${escapeHtml(work.description)}</p>
      </div>
    </article>
  `;
};

worksGrid.innerHTML = workGroups
  .map(
    (group, groupIndex) => {
      const groupId = `work-category-${groupIndex}`;
      const groupClass = group.works.length > 3
        ? "work-group work-group--extended"
        : group.works.length === 2
          ? "work-group work-group--compact"
          : "work-group";

      return `
      <section class="${groupClass}" aria-labelledby="${groupId}">
        <div class="group-heading">
          <div>
            <p class="group-kicker">${categoryEnglish[group.category]} / ${group.works.length} Works</p>
            <h3 id="${groupId}">${group.category}</h3>
          </div>
          <p>${group.note}</p>
        </div>
        <div class="category-grid">
          ${group.works.map(renderWorkCard).join("")}
        </div>
      </section>
    `;
    },
  )
  .join("");

const openVideoModal = (video, trigger) => {
  const embedUrl = getVideoEmbedUrl(video);

  lastFocusedElement = trigger;
  modalMeta.textContent = `${video.category} / ${video.tag} / ${platformLabels[getPlatform(video)]}`;
  modalTitle.textContent = video.title;
  modalDescription.textContent = video.description;
  modalPlayer.replaceChildren();
  applyModalRatio(video);
  modalPlayer.classList.toggle("modal-player--pending", !embedUrl);

  if (embedUrl) {
    modalPlayer.append(createPlayerIframe(video, embedUrl));
  } else {
    modalPlayer.append(buildPendingNotice(video));
  }

  videoModal.hidden = false;
  document.body.classList.add("modal-open");
  modalCloseButton.focus();
};

const showMobileToast = (message) => {
  if (!mobileToast) {
    return;
  }

  window.clearTimeout(mobileToastTimer);
  mobileToast.textContent = message;
  mobileToast.hidden = false;

  mobileToastTimer = window.setTimeout(() => {
    mobileToast.hidden = true;
  }, 2600);
};

const openExternalVideo = (video) => {
  const shareUrl = getShareUrl(video);

  if (!shareUrl) {
    showMobileToast("视频即将上线");
    return;
  }

  const externalWindow = window.open(shareUrl, "_blank", "noopener,noreferrer");

  if (!externalWindow) {
    window.location.href = shareUrl;
  }
};

const closeVideoModal = () => {
  videoModal.hidden = true;
  modalPlayer.replaceChildren();
  modalPlayer.classList.remove("modal-player--pending");
  resetModalRatio();
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
  lastFocusedElement = null;
};

worksGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-video-index]");

  if (!trigger) {
    return;
  }

  const video = videos[Number(trigger.dataset.videoIndex)];

  if (video) {
    if (isMobilePlaybackRedirect() || getPlatform(video) !== "douyin") {
      openExternalVideo(video);
    } else {
      openVideoModal(video, trigger);
    }
  }
});

modalCloseButton.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    closeVideoModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (!videoModal.hidden) {
    closeVideoModal();
  }
});

const copyButton = document.querySelector("[data-copy]");

copyButton?.addEventListener("click", async () => {
  const value = copyButton.dataset.copy;
  const originalText = copyButton.textContent;

  try {
    await navigator.clipboard.writeText(value);
    copyButton.textContent = "已复制：lzy57666";
  } catch {
    copyButton.textContent = "联系方式：lzy57666";
  }

  window.setTimeout(() => {
    copyButton.textContent = originalText;
  }, 2200);
});
