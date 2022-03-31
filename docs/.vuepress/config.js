const sidebar = require("./sidebar");
module.exports = {
  title: "最后的倔强",
  description: "长风破浪会有时 直挂云帆济沧海",
  keywords: "前端开发",
  head: [["link", { rel: "icon", href: "/img/favicon.ico" }]],
  lastUpdated: "Last Updated",
  base: "/",
  erviceWorker: true, // 是否支持PWA
  themeConfig: {
    //主题配置
    logo: "/img/logo.jpg",
    navbar: [
      //导航栏
      { text: "首页", link: "/" },
      { text: "前端知识", link: "/articles/" },
      {
        text: "计算机基础",
        link: "/computer-base/",
      },
      {
        text: "cli",
        link: "/cli/",
      },
      {
        text: "关于",
        link: "/about/",
      },
      {
        text: "Github",
        link: "https://github.com/ljw-codeking",
      },
    ],
    sidebar: sidebar,
  },
};
