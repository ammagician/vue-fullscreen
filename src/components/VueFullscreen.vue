<template>
  <div ref="fullscreenWrap">
    <div style="position: relative">
      <span class="icon" v-if="icon" @click="toggle"
        ><slot name="icon">{{ isFull ? "退出" : "全屏" }}</slot></span
      >
      <div :class="fullscreen" ref="fullscreen"><slot></slot></div>
    </div>
  </div>
</template>

<script>
import { initFullscreen, toggleFullscreen } from "@/utils/index";
export default {
  name: "vue-fullscreen",
  props: {
    resize: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFull: false
    };
  },
  mounted() {
    this.destroyFullScreen = initFullscreen(
      this.$refs.fullscreenWrap,
      isFull => {
        this.isFull = isFull;
        const fullscreen = this.$refs.fullscreen;
        const fullscreenWrap = this.$refs.fullscreenWrap;
        if (isFull && this.resize) {
          const rw =
            window.innerWidth /
            parseInt(fullscreenWrap.getAttribute("oldWidth"));
          const rh =
            window.innerHeight /
            parseInt(fullscreenWrap.getAttribute("oldHeight"));
          const r = Math.min(rw, rh);
          fullscreen.style.transform = `scale(${r}, ${r})`;
        } else {
          fullscreen.style.removeProperty("transform");
        }
        this.$emit("toggle", isFull);
      }
    );
  },

  beforeDestroy() {
    this.destroyFullScreen();
  },
  methods: {
    toggle() {
      toggleFullscreen(this.$refs.fullscreenWrap);
    }
  },

  computed: {
    fullscreen: function() {
      return this.isFull ? "fullscreen" : "";
    }
  }
};
</script>

<style>
::backdrop {
  z-index: 0;
  background-color: white !important;
}

html,
*:fullscreen,
*:-webkit-full-screen,
*:-moz-full-screen {
  background-color: white !important;
}
</style>

<style scoped>
.fullscreen {
  transform-origin: center top;
}
.icon {
  position: absolute;
  top: 0px;
  right: 10px;
  display: inline-block;
  cursor: pointer;
  z-index: 10000;
}
</style>
