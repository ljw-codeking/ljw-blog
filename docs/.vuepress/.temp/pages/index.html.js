export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "快点开始写博客吧",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "为什么要写博客？",
      "slug": "为什么要写博客",
      "children": []
    },
    {
      "level": 3,
      "title": "写博客有什么好处",
      "slug": "写博客有什么好处",
      "children": []
    },
    {
      "level": 3,
      "title": "参考",
      "slug": "参考",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "README.md"
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