import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/user/Desktop/my_company/ljw-blog/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/user/Desktop/my_company/ljw-blog/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
