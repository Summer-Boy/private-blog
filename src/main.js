import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css";
import "./global.less";
import "lib-flexible";

Vue.use(MuseUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
