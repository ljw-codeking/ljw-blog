export const data = {
  "key": "v-0c1ecdd2",
  "path": "/cli/%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7%E5%8E%9F%E7%90%86.html",
  "title": "实现小型打包工具",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "实现",
      "slug": "实现",
      "children": []
    },
    {
      "level": 2,
      "title": "小结",
      "slug": "小结",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1648708959000,
    "contributors": [
      {
        "name": "ljw",
        "email": "liujunweidyy@163.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "cli/打包工具原理.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
