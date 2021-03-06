<h1 align="center">vue-fullscreen</h1>

<p align="center">
<a href="https://www.npmjs.com/package/vue-fullscreen"><img src="https://img.shields.io/npm/v/vue-fullscreen.svg"/> <img src="https://img.shields.io/npm/dm/vue-fullscreen.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.2.x-brightgreen.svg"/></a>
</p>

vue-fullscreen是一个将任意dom元素进行全屏（缩放）显示的组件，兼容按钮、F11、ESC操作。

<br/>

## 特性

* 可多实例化
* 支持多DOM使用
* 可纯粹全屏操作

## 入门指南

### 安装

#### npm

  # 使用 npm

	npm install vue-fullscreen --save


组件引入

```javascript
    import VueFullscreen from '@ammagician/vue-fullscreen';
    import "@ammagician/dist/vue-fullscreen.css";
```

Vue 组件加入

 ```javascript
export default {
    components: {
        VueFullscreen
    },
// ... data, methods, mounted (), etc.
}
```

全局引入

 ```javascript
import "@ammagician/dist/vue-fullscreen.css";
import VueFullscreen from "@ammagician/vue-fullscreen";
Vue.use(VueFullscreen);
```


引入全屏功能函数

 ```javascript
import { initFullscreen } from "@ammagician/vue-fullscreen";
initFullscreen(element, callback)  //element默认参数为body
```

#### 浏览器

在页面中使用已打包好的文件。 此时组件已为可用状态。

```html
    <script src="vue-fullscreen.umd.js"></script>
    <link rel="stylesheet" href="./vue-fullscreen.css">
```

### 使用

```javascript
import VueFullscreen, { initFullscreen } from "./components/index";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    VueFullscreen
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
    },
    click2() {
      initFullscreen();
    }
  }
};
```


```html
<template>
  <div id="app">
    <vue-fullscreen  ref="fullscreen" resize icon>
      <template v-slot:icon>
        <span :title="isFull ? '退出' : '全屏'"
          ><svg-icon
            :icon-class="isFull ? 'exit-fullscreen' : 'fullscreen'"
            class-name="disabled"
        /></span>
      </template>
      <img alt="Vue logo" src="./assets/logo.png" />
    </vue-fullscreen>
    <div class="br"></div>
    <vue-fullscreen  ref="fullscreen" icon>
      <img alt="Vue logo" src="./assets/logo.png" />
    </vue-fullscreen>
    <div class="br"></div>
    <vue-fullscreen @toggle="toggle" ref="fullscreen">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <button @click="click">{{ isFull ? "退出" : "全屏" }}</button>
    </vue-fullscreen>

    <button @click="click2">{{ isFull ? "退出" : "全屏" }}</button>
  </div>
</template>
```


### 文档

#### 属性

* **resize**

    * type: `Boolean`
    * required: `false`

    是否全屏缩放元素。值必须为 `Boolean`，默认为false。

* **icon**

    * type: `Boolean`
    * required: `false`

    是否显示切换按钮。值必须为 `Boolean`，默认为false。


#### 插槽

* **icon**
    自定义切换按钮样式。

```html
<template>
  <div id="app">
    <vue-fullscreen  ref="fullscreen" resize icon>
      <template v-slot:icon>
        <span :title="isFull ? '退出' : '全屏'"
          ><svg-icon
            :icon-class="isFull ? 'exit-fullscreen' : 'fullscreen'"
            class-name="disabled"
        /></span>
      </template>
      <img alt="Vue logo" src="./assets/logo.png" />
    </vue-fullscreen>
  </div>
</template>
```

#### 事件

每一个实例可以监听toggle事件，这样父级Vue对象就可以收到当前的状态。

````html

<vue-fullscreen @toggle="toggle" icon>
  <img alt="Vue logo" src="./assets/logo.png" />
</vue-fullscreen>

````

```javascript
methods: {
  toggle(isFull) {
    this.isFull = isFull;
  }
}
```

#### 方法

可以直接调用每一个实例的toggle方法进行全屏状态的切换。

````html

<vue-fullscreen ref="fullscreen" icon>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="click">全屏</button>
</vue-fullscreen>

````

```javascript
methods: {
  click() {
    this.$refs.fullscreen.toggle();
  }
}
```

## 如何贡献

请提交issue或PR。

