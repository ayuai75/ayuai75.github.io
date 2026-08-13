# 向AI进击的阿鱼 · Director Portfolio

个人导演作品档案，发布于 `https://ayuai75.github.io/`。

## 页面结构

- Selected Works：首页精选 8 个项目
- Live Action × AI：实拍与 AI 制作能力专题
- Work Index：完整作品档案及五类筛选
- Awards & Festivals：获奖与入围经历
- About / Contact：创作者介绍与合作入口

作品一级分类：

- `original`：原创影像
- `adaptation`：IP 改编
- `live-action`：实拍 × AI
- `commercial`：商业影像
- `lab`：创作实验

获奖、高播放、真人、动画等信息统一放在项目 `tags` 中，不作为一级分类。

## 本地预览

```bash
cd /Users/zhuyu/Documents/Playground/ayuai75.github.io
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4173/`。

## 作品配置

所有项目集中在 `app.js` 的 `projects` 数组中。单个项目可以包含一支或多支影像：

```js
{
  id: "project-id",
  title: "中文片名",
  titleEn: "ENGLISH TITLE",
  category: "original",
  year: "2026.08",
  meta: "SCI-FI · 18 MIN",
  cover: coverPath("cover-file"),
  tags: ["FLAGSHIP", "SCI-FI", "AI FILM"],
  description: "项目简介",
  films: [
    {
      label: "观看完整作品",
      platform: "douyin",
      videoId: "抖音作品 ID",
      shareUrl: "https://www.douyin.com/video/抖音作品ID",
    },
  ],
}
```

`featured: 1` 到 `featured: 8` 控制首页精选作品和顺序。`badge: "3 FILMS"` 用于系列项目角标。

## 播放策略

- 电脑端：打开项目详情，点击具体影片后才创建抖音 iframe。
- 手机端：单片项目直接打开公开原视频地址；多片系列先打开站内项目详情供选择。
- 关闭详情时销毁 iframe，避免后台继续播放。
- 页面初始不加载任何视频 iframe。

## 资源约定

封面统一放在 `assets/covers/portfolio/`，优先使用轻量 WebP。仓库不提交本地视频文件：

```gitignore
*.mp4
assets/videos/
```
