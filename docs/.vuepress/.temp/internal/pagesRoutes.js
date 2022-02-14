import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"快点开始写博客吧"},["/index.html","/README.md"]],
  ["v-1fcdcab9","/articles/",{"title":""},["/articles/index.html","/articles/README.md"]],
  ["v-fffb8e28","/guide/",{"title":""},["/guide/index.html","/guide/README.md"]],
  ["v-5150440a","/guide/%E9%A1%B9%E7%9B%AE.html",{"title":""},["/guide/项目.html","/guide/%E9%A1%B9%E7%9B%AE","/guide/项目.md","/guide/%E9%A1%B9%E7%9B%AE.md"]],
  ["v-cb92f676","/articles/css/",{"title":""},["/articles/css/index.html","/articles/css/README.md"]],
  ["v-0d3baaad","/articles/js/",{"title":"/%+= -= *= /= %=><>=<="},["/articles/js/index.html","/articles/js/README.md"]],
  ["v-a599d958","/articles/node/",{"title":""},["/articles/node/index.html","/articles/node/README.md"]],
  ["v-0d3bd037","/articles/ts/",{"title":""},["/articles/ts/index.html","/articles/ts/README.md"]],
  ["v-cb81a4bc","/articles/vue/",{"title":""},["/articles/vue/index.html","/articles/vue/README.md"]],
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
