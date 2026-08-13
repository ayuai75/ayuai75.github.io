# 向AI进击的阿鱼个人主页

发布地址：`https://ayuai75.github.io/`

## 页面结构

页面保留原作品集的视觉与交互方式，作品分为：

- 代表作
- 原创影像
- 实拍 × AI
- IP 改编
- 获奖作品
- 商业影像

每支视频都是独立作品卡片，封面来自 `assets/covers/portfolio/`。

## 播放方式

- 电脑端抖音作品：点击封面后，在当前页面弹窗内动态创建抖音 iframe。
- 手机端抖音作品：点击封面后打开抖音原视频页面。
- 小红书与快手作品：点击封面后打开对应原平台页面。
- 关闭电脑端弹窗时销毁 iframe，页面初始不加载视频播放器。

抖音播放器地址由 `douyinVideoId` 生成：

```text
https://open.douyin.com/player/video?vid=抖音VideoID&autoplay=0
```

## 修改作品

所有作品集中在 `app.js` 顶部的 `videos` 数组中：

```js
{
  title: "作品标题",
  category: "原创影像",
  tag: "真人 · 科幻",
  duration: "2026.08",
  description: "作品简介",
  cover: coverPath("cover-file"),
  platform: "douyin",
  shareUrl: douyinUrl("抖音作品ID"),
  douyinVideoId: "抖音作品ID",
  ratio: "16:9",
  status: "ready",
}
```

## 本地预览

```bash
cd /Users/zhuyu/Documents/Playground/ayuai75.github.io
python3 -m http.server 4173 --bind 127.0.0.1
```

打开 `http://127.0.0.1:4173/`。

仓库不提交本地视频文件：

```gitignore
*.mp4
assets/videos/
```
