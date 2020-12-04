<template>
  <div id="app">
    <VueFullscreen @toggle="toggle" ref="fullscreen" resize icon>
      <template v-slot:icon>
        <span :title="isFull ? '退出' : '全屏'"
          ><svg-icon
            :icon-class="isFull ? 'exit-fullscreen' : 'fullscreen'"
            class-name="disabled"
        /></span>
      </template>
      <img alt="Vue logo" src="./assets/logo.png" />
    </VueFullscreen>
    <div class="br"></div>
    <VueFullscreen @toggle="toggle" ref="fullscreen" icon>
      <img alt="Vue logo" src="./assets/logo.png" />
    </VueFullscreen>
    <div class="br"></div>
    <VueFullscreen @toggle="toggle" ref="fullscreen">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <button @click="click">{{ isFull ? "退出" : "全屏" }}</button>
    </VueFullscreen>
  </div>
</template>

<script>
//import VueFullscreen, { toggleFullscreen } from "./components/index";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      isFull: false
    };
  },
  methods: {
    toggle(isFull) {
      this.isFull = isFull;
    },
    click() {
      this.$refs.fullscreen.toggle();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 800px;
  margin: 0 auto;
}

.br {
  border-top: solid 1px #ccc;
}
</style>
