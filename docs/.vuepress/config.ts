import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Documentation",
      description: "A demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档",
      description: "vuepress-theme-hope 的演示",
    },
  },

  theme,

});
