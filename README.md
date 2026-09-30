# 橙子 · Aurantium

个人网站：生活、照片、随记、项目简历，以及「我的 AI 成果」。

- 网站：<https://aurantium-47.github.io/>
- [使用说明：给自己、dot 和其他 AI 对话](docs/使用说明.md)
- [共享进度](collaboration/status.md)
- [给 AI 的协作规则](AGENTS.md)
- [建站研究与复用记录](docs/建站研究.md)

## 开始更新

项目放在 `src/content/projects/`，随记与日记放在 `src/content/notes/`。一个成果就是一个 Markdown 文件。主页、项目页与 RSS 从同一份内容生成。

每个 AI 开始工作前读 `AGENTS.md` 和 `collaboration/status.md`；结束时提交成果与简短进度。GitHub 保存共享资料，GitHub Actions 构建网站。所有对话不需要互相持有完整历史。

**此仓库公开。** `draft: true` 只会排除网站页面，不会隐藏 GitHub 上的文件。私人日记、身份证件、账号凭据与未获公开许可的材料请保存在私有位置。

## 本地运行

使用 Node.js 24 或更新的兼容版本。

```sh
npm ci
npm run dev
```

发布前运行 `npm run build`：检查类型、生成页面、验证站内链接与草稿排除。推送 `main` 后 GitHub Actions 自动构建并发布。首次部署需要仓库 Settings → Pages → Source 选择 GitHub Actions。

## 复用与素材

内容结构、日期组件、RSS 与页面元信息改写自 [Astro Nano](https://github.com/markhorn-dev/astro-nano)（MIT，原始许可见 `licenses/ASTRO-NANO-MIT.txt`）。视觉、栏目与内容另行制作。

六张海报和互动展馆来自本人发起、Codex 协助完成的「涌现图鉴」。它们是作品渲染，生活相册等待添加真实照片。教育与工作经历暂未填写；项目简历只列已核实的实践。开篇随记根据本人的建站想法整理，已注明 AI 协助。

第三方代码与字体按各自许可使用；个人文字、照片和作品不因公开仓库而自动授权转载。
