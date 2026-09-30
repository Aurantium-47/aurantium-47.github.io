---
title: 涌现图鉴
description: 六个实时数学艺术实验，组成一个可以调整参数、保存海报的互动展馆。
date: 2026-09-29
kind: 作品
status: 已完成
role: 我提出探索与展示需求，参与方向选择和验收；Codex 协助完成视觉、程序、测试与交付。
stack: [Canvas 2D, WebGL, Anime.js, Generative Art]
featured: true
cover: julia
demoURL: /lab/emergence/
draft: false
---

## 用它做什么

打开浏览器，就能看见规则怎样长成图像。它既是我的数学艺术展馆，也是一件可以分享给朋友、自己反复玩的作品。

六个展项分别展示蝴蝶效应、鸟群、反应扩散、驻波节点、粒子场与 Julia 集。可以调整参数、切换预设，或导出 2160 × 2700 的艺术海报。

## 先看一段真实演示

<video controls playsinline preload="none" aria-label="涌现图鉴约三十秒巡展演示">
  <source src="/media/emergence-demo.mp4" type="video/mp4" />
  你的浏览器无法播放视频，可以打开互动展馆。
</video>

这段约 30 秒的巡展视频来自作品实际运行，六张海报也来自真实渲染。

## 技术怎样服务作品

- **Canvas 2D**：画鸟群、轨迹与反应扩散纹理。
- **WebGL**：计算和绘制 Julia 集；不可用时切换到简化的 Canvas 渲染。
- **Anime.js**：组织首屏进场和展项切换。
- **原生 HTML / JavaScript**：把程序、字体和许可打包成一个可独立打开的网页。

观看时无需登录、API 密钥或大模型调用。作品本身可离线运行。

## 做到哪一步

V2 的交付记录包含 108 项浏览器主检查、11 项离线与后备渲染检查，以及 5 个 CPU 数值套件。记录表明这些检查通过；它们不等于所有设备上的性能保证。

声音展项采用理想化节点模型，引力展项采用预设双中心场与艺术扰动，均用于直观体验。它们的用途与完整物理模拟不同。

[打开互动展馆](/lab/emergence/) · [浏览六张海报](/ai/)
