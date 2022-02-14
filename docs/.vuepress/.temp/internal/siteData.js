export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "最后的倔强",
  "description": "长风破浪会有时 直挂云帆济沧海",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/img/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
