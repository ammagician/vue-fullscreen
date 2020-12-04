import Vue from "vue";
import App from "./App.vue";
import "@/icons";
import VueFullscreen from "./components/index";
Vue.use(VueFullscreen);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
