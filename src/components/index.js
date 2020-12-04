import { toggleFullscreen } from "@/utils/index";
import VueFullscreen from "./VueFullscreen.vue";

const coms = {
  VueFullscreen
};

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(coms).forEach(name => {
    Vue.component(name, coms[name]);
  });
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use({ install });
}

export default VueFullscreen;
export { toggleFullscreen, install };
