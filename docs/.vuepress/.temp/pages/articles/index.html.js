export const data = {
  "key": "v-1fcdcab9",
  "path": "/articles/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
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
  "filePathRelative": "articles/README.md"
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
