export interface CollectedSkill {
  id: string;
  name: string;
  command: string;
  category: string;
  purpose: string;
  input: string;
  output: string;
  invocation: string;
  credit: string;
  source: { label: string; url: string } | null;
  verification: string;
  example: { label: string; url: string; note: string } | null;
  textExample?: { before: string; after: string; note: string };
}

// This is a selected, public-facing index. Skill files and local configuration are not published.
export const skills: CollectedSkill[] = [
  {
    "id": "chinese-platform-research",
    "name": "中文平台调研",
    "command": "chinese-platform-research",
    "category": "搜索与阅读",
    "purpose": "跨平台找原帖，接着读正文和有用评论。",
    "input": "一个调研问题",
    "output": "带原帖和评论出处的调研笔记",
    "invocation": "$chinese-platform-research 搜索现成的视频转写方案，读原帖与有用评论，记录失败渠道和替代入口。",
    "credit": "我提出需求并验收，Codex 协助整理的平台接入与调研工作流。",
    "source": {
      "label": "我的工作流说明",
      "url": "/ai/platform-research/"
    },
    "verification": "部分实测。各平台实际读到的内容与失败范围记录在案例中，平台变化后需要重测。",
    "example": {
      "label": "方法与验证记录",
      "url": "/ai/platform-research/",
      "note": "本站实践记录；包含已验证渠道与仍未覆盖的能力。"
    }
  },
  {
    "id": "bili-note",
    "name": "Bili Note",
    "command": "bili-note",
    "category": "搜索与阅读",
    "purpose": "把 B 站视频或图文整理成可检索的笔记。",
    "input": "B站视频或图文链接",
    "output": "Markdown 笔记和提取素材",
    "invocation": "$bili-note 把这条 B 站视频整理成带时间位置的笔记，字幕不可用时说明实际转写情况。",
    "credit": "Rimagination / bili-note。本机版本的后续改动未逐项比对。",
    "source": {
      "label": "原项目",
      "url": "https://github.com/Rimagination/bili-note"
    },
    "verification": "已安装；本轮核对了用途，尚未登记可公开的运行结果。",
    "example": null
  },
  {
    "id": "wechat-article-reader",
    "name": "公众号文章读取",
    "command": "wechat-article-reader",
    "category": "搜索与阅读",
    "purpose": "把公开文章与图片保存在一起，方便回头查。",
    "input": "公开公众号文章链接",
    "output": "文章内容、图片与归档文件",
    "invocation": "$wechat-article-reader 读取这篇公众号文章，保留原文链接并整理成可检索的笔记。",
    "credit": "本机收藏；作者与原始上游尚待确认。",
    "source": null,
    "verification": "已安装；本轮核对了用途，尚未登记可公开的运行结果。",
    "example": null
  },
  {
    "id": "humanizer-zh",
    "name": "Humanizer · 中文修订",
    "command": "humanizer-zh",
    "category": "写作",
    "purpose": "清掉空话和重复，保留原稿的事实与口气。",
    "input": "一篇已有中文稿",
    "output": "保留事实和口气的修订稿",
    "invocation": "$humanizer-zh 删去这篇稿子里的空话和重复，保留我的判断、事实和不确定程度。",
    "credit": "基于 op7418 / Humanizer-zh、blader / humanizer 等资料修订，本机为改编版。",
    "source": {
      "label": "原项目",
      "url": "https://github.com/op7418/Humanizer-zh"
    },
    "verification": "本页的说明文案已按本机 Skill 编辑。此前也与前端设计 Skill 一同用于画廊文案整理。",
    "example": {
      "label": "上游改写示例",
      "url": "https://github.com/op7418/Humanizer-zh#改写示例",
      "note": "原项目 README 中的修改前后示例，不是本机实测稿。"
    },
    "textExample": {
      "before": "为了让下次使用更加便捷，我把挑选出的 Skills 进行系统化整理，全面记录用途、示例和来源，打造一个可复用的工具集合。",
      "after": "我把挑出的 Skills 整理在这里，记下用途、示例和来源，下次要用时方便找。",
      "note": "本次为页面编写的说明文案，按本机 humanizer-zh 编辑；没有增加事实或个人经历。"
    }
  },
  {
    "id": "guizang-material-illustration",
    "name": "材质插画",
    "command": "guizang-material-illustration",
    "category": "视觉与演示",
    "purpose": "把文字中的概念画成有材质感的解释插图。",
    "input": "文章、概念或数据",
    "output": "有材质感的解释插图",
    "invocation": "$guizang-material-illustration 为这段内容做一张材质插画，先提出两种适合内容的构图。",
    "credit": "歸藏 / op7418；本机收藏。",
    "source": {
      "label": "原项目",
      "url": "https://github.com/op7418/guizang-material-illustration"
    },
    "verification": "已安装；本轮核对了用途，尚未登记可公开的运行结果。",
    "example": null
  },
  {
    "id": "guizang-ppt-skill",
    "name": "网页演示",
    "command": "guizang-ppt-skill",
    "category": "视觉与演示",
    "purpose": "把分享提纲做成横向翻页的 HTML 演示。",
    "input": "分享提纲和素材",
    "output": "单文件网页演示",
    "invocation": "$guizang-ppt-skill 把这个分享提纲做成横向翻页的网页演示，先确定排版方向。",
    "credit": "歸藏 / op7418；本机收藏。",
    "source": {
      "label": "原项目",
      "url": "https://github.com/op7418/guizang-ppt-skill"
    },
    "verification": "已安装；本轮核对了用途，尚未登记可公开的运行结果。",
    "example": {
      "label": "作者主题预览",
      "url": "https://github.com/op7418/guizang-ppt-skill#readme",
      "note": "原项目展示的 Style A、Style B 和演讲者视图，不是我的作品。"
    }
  },
  {
    "id": "design-taste-frontend",
    "name": "Taste · 前端设计",
    "command": "design-taste-frontend",
    "category": "网页与代码",
    "purpose": "从内容、构图和交互着手设计网页。",
    "input": "网站目标、内容与视觉参考",
    "output": "前端设计与实现",
    "invocation": "$design-taste-frontend 审阅这个个人网站，依据真实内容提出两种构图不同的设计方向。",
    "credit": "Leonxlnx / taste-skill；本机收藏。",
    "source": {
      "label": "原项目",
      "url": "https://github.com/Leonxlnx/taste-skill"
    },
    "verification": "已安装；本机 Skill 文本与本轮核对的上游一致，尚未登记独立的本机效果。",
    "example": {
      "label": "作者网页示例",
      "url": "https://github.com/Leonxlnx/taste-skill#examples",
      "note": "原项目 README 中的 Floria 网页效果图，不是本站或我的作品。"
    }
  },
  {
    "id": "playground",
    "name": "交互小实验",
    "command": "playground",
    "category": "网页与代码",
    "purpose": "让读者调一调参数，直接看到变化。",
    "input": "想探索的参数和关系",
    "output": "带控制项与预览的 HTML",
    "invocation": "$playground 把这个概念做成可调参数的小页面，让读者看到参数改变会发生什么。",
    "credit": "Anthropic 官方插件的本地适配；将调用提示中的 Claude 改为 Codex。",
    "source": {
      "label": "原项目",
      "url": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/playground"
    },
    "verification": "已安装；本轮核对了用途，尚未登记可公开的运行结果。",
    "example": null
  },
  {
    "id": "deslop",
    "name": "Deslop · 代码整理",
    "command": "deslop",
    "category": "网页与代码",
    "purpose": "检查一个分支里不必要的注释、分支和类型绕过。",
    "input": "一个 Git 分支的改动",
    "output": "保持行为的精简修改",
    "invocation": "$deslop 检查这个分支里多余的注释、防御分支和类型绕过，只清理没有必要的部分。",
    "credit": "本机收藏；作者与原始上游尚待确认。",
    "source": null,
    "verification": "已安装；本轮核对了用途，尚未登记可公开的运行结果。",
    "example": null
  },
  {
    "id": "research-wiki",
    "name": "研究知识库",
    "command": "research-wiki",
    "category": "科研与图表",
    "purpose": "把文献、想法与实验记录连成可接续的资料库。",
    "input": "论文、想法和实验记录",
    "output": "能持续补充的研究知识库",
    "invocation": "$research-wiki 把这批资料加入研究知识库，保留来源并连接重复出现的问题。",
    "credit": "ARIS / wanshuiyin；本地版本与当前上游存在改动。",
    "source": {
      "label": "原项目文档",
      "url": "https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/main/skills/research-wiki"
    },
    "verification": "已安装；本轮核对了用途，尚未登记可公开的运行结果。",
    "example": null
  },
  {
    "id": "nature-reader",
    "name": "论文对照阅读",
    "command": "nature-reader",
    "category": "科研与图表",
    "purpose": "将论文整理成图文对应的中英阅读稿。",
    "input": "论文 PDF、DOI 或网页",
    "output": "图文位置对应的中英阅读稿",
    "invocation": "$nature-reader 把这篇论文整理成中英对照阅读稿，图表放在相关段落旁并保留出处。",
    "credit": "本机收藏；作者与原始上游尚待确认。",
    "source": null,
    "verification": "已安装；本轮核对了用途，尚未登记可公开的运行结果。",
    "example": null
  },
  {
    "id": "drawio-reconstruction",
    "name": "Draw.io 图表重建",
    "command": "drawio-reconstruction",
    "category": "科研与图表",
    "purpose": "把一张结构图重建成可以继续编辑的文件。",
    "input": "结构图或流程图图片",
    "output": "Draw.io 文件和预览",
    "invocation": "$drawio-reconstruction 将这张流程图重建成可编辑的 Draw.io 文件，文字和结构保持可修改。",
    "credit": "HKUSTDial / Supervisor-Skills 中的 drawio-reconstruction；本机收藏。",
    "source": {
      "label": "原项目",
      "url": "https://github.com/HKUSTDial/Supervisor-Skills/tree/main/skills/drawio-reconstruction"
    },
    "verification": "已安装；本机 Skill 文本与本轮核对的上游一致，尚未登记本机运行结果。",
    "example": {
      "label": "作者图表对照",
      "url": "https://github.com/HKUSTDial/Supervisor-Skills/tree/main/skills/drawio-reconstruction#reconstruction-cases",
      "note": "README 有三组原图与可编辑重建图，是作者样例。"
    }
  }
];
