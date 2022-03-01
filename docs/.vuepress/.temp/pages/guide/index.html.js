export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "递归",
      "slug": "递归",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1644825719000,
    "contributors": [
      {
        "name": "hx",
        "email": "903320779@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/README.md"
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
