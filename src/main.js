import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import "./global.less";
import "lib-flexible";
import { isPC } from "@/utils";
import VueLazyload from "vue-lazyload";
import * as filters from "./filter";
import Helpers from "muse-ui/lib/Helpers";
import theme from "muse-ui/lib/theme";

//注册过滤器
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]));
Vue.prototype.filterDate = filters.filterDate;

Vue.config.productionTip = false;
Vue.prototype.isPC = isPC;
Vue.prototype.avatar = require("./assets/index.jpg");

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("./assets/loading.gif"),
  loading: require("./assets/loading.gif"),
  attempt: 1,
});
Vue.use(MuseUI);
Vue.use(Helpers);

theme.add(
  "selfDark",
  {
    primary: "#1976d2",
    secondary: "#ff4081",
    success: "#4caf50",
    warning: "#fdd835",
    info: "#2196f3",
    error: "#f44336",
    track: "#757575",
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      alternate: "#303030",
      disabled: "rgba(255, 255, 255, 0.3)",
      hint: "rgba(255, 255, 255, 0.3)", // 提示文字颜色
    },
    divider: "rgba(255, 255, 255, 0.3)",
    background: {
      paper: "#424242",
      chip: "#616161",
      default: "#303030",
    },
  },
  "dark"
);

theme.add(
  "selfLight",
  {
    primary: "#2196f3",
    secondary: "#ff4081",
    success: "#4caf50",
    warning: "#fdd835",
    info: "#2196f3",
    error: "#f44336",
    track: "#bdbdbd",
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "gba(0, 0, 0, 0.54)",
      alternate: "#fff",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)", // 提示文字颜色
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      chip: "#e0e0e0",
      default: "#fafafa",
    },
  },
  "light"
);
theme.use(localStorage.getItem("theme") || "selfLight");
Vue.prototype.theme = theme;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
