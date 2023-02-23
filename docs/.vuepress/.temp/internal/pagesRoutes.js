import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"快点开始写博客吧"},["/index.html","/README.md"]],
  ["v-1fcdcab9","/articles/",{"title":""},["/articles/index.html","/articles/README.md"]],
  ["v-5a7304ec","/computer-base/Git.html",{"title":""},["/computer-base/Git","/computer-base/Git.md"]],
  ["v-18193185","/computer-base/",{"title":""},["/computer-base/index.html","/computer-base/README.md"]],
  ["v-5818ff35","/computer-base/sh%E8%84%9A%E6%9C%AC.html",{"title":"Shell脚本"},["/computer-base/sh脚本.html","/computer-base/sh%E8%84%9A%E6%9C%AC","/computer-base/sh脚本.md","/computer-base/sh%E8%84%9A%E6%9C%AC.md"]],
  ["v-5a6712f9","/computer-base/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",{"title":""},["/computer-base/数据结构.html","/computer-base/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84","/computer-base/数据结构.md","/computer-base/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md"]],
  ["v-6295d704","/computer-base/%E7%AE%97%E6%B3%95.html",{"title":""},["/computer-base/算法.html","/computer-base/%E7%AE%97%E6%B3%95","/computer-base/算法.md","/computer-base/%E7%AE%97%E6%B3%95.md"]],
  ["v-97937702","/computer-base/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE.html",{"title":""},["/computer-base/网络协议.html","/computer-base/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE","/computer-base/网络协议.md","/computer-base/%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE.md"]],
  ["v-7825b054","/computer-base/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html",{"title":""},["/computer-base/设计模式.html","/computer-base/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F","/computer-base/设计模式.md","/computer-base/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.md"]],
  ["v-74457188","/cli/",{"title":""},["/cli/index.html","/cli/README.md"]],
  ["v-0c1ecdd2","/cli/%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7%E5%8E%9F%E7%90%86.html",{"title":"实现小型打包工具"},["/cli/打包工具原理.html","/cli/%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7%E5%8E%9F%E7%90%86","/cli/打包工具原理.md","/cli/%E6%89%93%E5%8C%85%E5%B7%A5%E5%85%B7%E5%8E%9F%E7%90%86.md"]],
  ["v-884fd4bc","/guide/css.html",{"title":""},["/guide/css","/guide/css.md"]],
  ["v-e5218278","/guide/js.html",{"title":"/%+= -= *= /= %=><>=<="},["/guide/js","/guide/js.md"]],
  ["v-fffb8e28","/guide/",{"title":""},["/guide/index.html","/guide/README.md"]],
  ["v-7911f002","/guide/vue.html",{"title":""},["/guide/vue","/guide/vue.md"]],
  ["v-5150440a","/guide/%E9%A1%B9%E7%9B%AE.html",{"title":""},["/guide/项目.html","/guide/%E9%A1%B9%E7%9B%AE","/guide/项目.md","/guide/%E9%A1%B9%E7%9B%AE.md"]],
  ["v-15051314","/node/",{"title":""},["/node/index.html","/node/README.md"]],
  ["v-cb92f676","/articles/css/",{"title":""},["/articles/css/index.html","/articles/css/README.md"]],
  ["v-a63e226a","/articles/html/",{"title":""},["/articles/html/index.html","/articles/html/README.md"]],
  ["v-0d3baaad","/articles/js/",{"title":""},["/articles/js/index.html","/articles/js/README.md"]],
  ["v-0d3bd037","/articles/ts/",{"title":""},["/articles/ts/index.html","/articles/ts/README.md"]],
  ["v-cb81a4bc","/articles/vue/",{"title":""},["/articles/vue/index.html","/articles/vue/README.md"]],
  ["v-1c4d6cbb","/computer-base/beff/%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8.html",{"title":"beef的简单使用"},["/computer-base/beff/简单使用.html","/computer-base/beff/%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8","/computer-base/beff/简单使用.md","/computer-base/beff/%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8.md"]],
  ["v-2bcb5a58","/computer-base/beff/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85.html",{"title":"windows下安装kali"},["/computer-base/beff/软件安装.html","/computer-base/beff/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85","/computer-base/beff/软件安装.md","/computer-base/beff/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85.md"]],
  ["v-3158f1f4","/computer-base/beff/%E8%BD%AF%E4%BB%B6%E9%85%8D%E7%BD%AE.html",{"title":"beef安装与配置"},["/computer-base/beff/软件配置.html","/computer-base/beff/%E8%BD%AF%E4%BB%B6%E9%85%8D%E7%BD%AE","/computer-base/beff/软件配置.md","/computer-base/beff/%E8%BD%AF%E4%BB%B6%E9%85%8D%E7%BD%AE.md"]],
  ["v-731c1450","/node/config/nginx.html",{"title":""},["/node/config/nginx","/node/config/nginx.md"]],
  ["v-37f7f399","/node/config/",{"title":""},["/node/config/index.html","/node/config/README.md"]],
  ["v-57fcee7e","/node/nest/Nest.html",{"title":""},["/node/nest/Nest","/node/nest/Nest.md"]],
  ["v-7d1c494b","/node/nest/Nest%E9%85%8D%E7%BD%AENginx.html",{"title":""},["/node/nest/Nest配置Nginx.html","/node/nest/Nest%E9%85%8D%E7%BD%AENginx","/node/nest/Nest配置Nginx.md","/node/nest/Nest%E9%85%8D%E7%BD%AENginx.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
