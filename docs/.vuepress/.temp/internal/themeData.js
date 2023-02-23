export const themeData = {
  "logo": "/img/logo.jpg",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "前端知识",
      "link": "/articles/"
    },
    {
      "text": "计算机基础",
      "link": "/computer-base/"
    },
    {
      "text": "cli",
      "link": "/cli/"
    },
    {
      "text": "node",
      "link": "/node/"
    },
    {
      "text": "关于",
      "link": "/about/"
    },
    {
      "text": "Github",
      "link": "https://github.com/ljw-codeking"
    }
  ],
  "sidebar": {
    "/computer-base/": [
      {
        "text": "数据结构",
        "link": "/computer-base/数据结构.md"
      },
      {
        "text": "算法",
        "link": "/computer-base/算法.md"
      },
      {
        "text": "网络协议",
        "link": "/computer-base/网络协议.md"
      },
      {
        "text": "设计模式",
        "link": "/computer-base/设计模式.md"
      },
      {
        "text": "Git",
        "link": "/computer-base/Git.md"
      },
      {
        "text": "SH脚本",
        "link": "/computer-base/SH脚本.md"
      },
      {
        "text": "beff",
        "link": "/computer-base/beff/",
        "children": [
          {
            "text": "软件安装",
            "link": "/computer-base/beff/软件安装.md"
          },
          {
            "text": "软件配置",
            "link": "/computer-base/beff/软件配置.md"
          },
          {
            "text": "简单使用",
            "link": "/computer-base/beff/简单使用.md"
          }
        ]
      }
    ],
    "/articles/": [
      {
        "text": "HTML",
        "link": "/articles/html/"
      },
      {
        "text": "CSS",
        "link": "/articles/css/"
      },
      {
        "text": "JavaScript",
        "link": "/articles/js/"
      },
      {
        "text": "TypeScript",
        "link": "/articles/ts/"
      },
      {
        "text": "Vue",
        "link": "/articles/vue/"
      }
    ],
    "/cli/": [
      {
        "text": "打包工具原理",
        "link": "/cli/打包工具原理.md"
      }
    ],
    "/node/": [
      {
        "text": "NestJs",
        "link": "/node/nest/Nest.md"
      },
      {
        "text": "服务器配置",
        "link": "/node/config/",
        "children": [
          {
            "text": "Nginx",
            "link": "/node/config/nginx.md"
          }
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
