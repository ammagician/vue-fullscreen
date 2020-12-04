import { toggleFullscreen } from "@/utils/index";
import VueFullscreen from "./VueFullscreen.vue";

VueFullscreen.install = Vue => Vue.component(VueFullscreen.name, VueFullscreen);

export default VueFullscreen;
export { toggleFullscreen };
