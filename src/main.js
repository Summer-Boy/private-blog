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

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
