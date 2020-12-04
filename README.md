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
    import VueFullscreen from 'vue-fullscreen';
```

加入到 Vue 组件

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
    import { install } from "vue-fullscreen";
    install(Vue);
```


引入全屏功能函数

 ```javascript
    import { toggleFullscreen } from "vue-fullscreen";
```

#### 浏览器

在页面中使用已打包好的文件。 此时组件已为可用状态。

```html
    <script src="vue-fullscreen.umd.min.js"></script>
```

### 使用

```javascript
	import VueFullscreen, { toggleFullscreen } from "./components/index";
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
        toggleFullscreen();
      }
    }
  };
```


```html
    <template>
      <div id="app">
        <VueFullscreen  ref="fullscreen" resize icon>
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
        <VueFullscreen  ref="fullscreen" icon>
          <img alt="Vue logo" src="./assets/logo.png" />
        </VueFullscreen>
        <div class="br"></div>
        <VueFullscreen @toggle="toggle" ref="fullscreen">
          <HelloWorld msg="Welcome to Your Vue.js App" />
          <button @click="click">{{ isFull ? "退出" : "全屏" }}</button>
        </VueFullscreen>

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
        <VueFullscreen  ref="fullscreen" resize icon>
          <template v-slot:icon>
            <span :title="isFull ? '退出' : '全屏'"
              ><svg-icon
                :icon-class="isFull ? 'exit-fullscreen' : 'fullscreen'"
                class-name="disabled"
            /></span>
          </template>
          <img alt="Vue logo" src="./assets/logo.png" />
        </VueFullscreen>
      </div>
    </template>
```

#### 事件

每一个实例可以监听toggle事件，这样父级Vue对象就可以收到当前的状态。

````html

    <VueFullscreen @toggle="toggle" icon>
      <img alt="Vue logo" src="./assets/logo.png" />
    </VueFullscreen>

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

    <VueFullscreen ref="fullscreen" icon>
      <img alt="Vue logo" src="./assets/logo.png" />
      <button @click="click">全屏</button>
    </VueFullscreen>

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

