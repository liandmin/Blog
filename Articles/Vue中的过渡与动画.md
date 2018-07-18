## 过渡 & 动画

**[官网介绍](https://cn.vuejs.org/v2/guide/transitions.html)**

**具体介绍**

Vue会在动画刚开始以及结束的时候，给动画元素添加相应的类名，具体如下图

开始动画
![image](https://note.youdao.com/yws/api/personal/sync?method=download&fileId=992940EE4EB84D40A5950F832A5BCEF5&version=5806&cstk=XI9VrfDs)

结束动画
![image](https://note.youdao.com/yws/api/personal/sync?method=download&fileId=3BFF7F21895A4DC1A3310DEEC731A522&version=5811&cstk=XI9VrfDs)

在开始动画时，添加默认类 `v-enter` 和 `v-enter-active`，在动画的下一帧开始的时候移除 `v-enter` 并添加 `v-enter-to`，并在动画结束的前一帧时移除所有`enter`类

在结束动画开始前，添加默认类 `v-leave` 和 `v-leave-active`，并在动画结束的下一帧移除 `v-leave`，同时添加 `v-leave-to`，直到动画结束，移除所有的`v-leave`类

再附上一张大图，解释的更加清楚
![image](https://www.w3cplus.com/sites/default/files/blogs/2017/1709/vuejs-9.png)

可在transtion上设置`name="指定类名"`来覆盖默认类名

### 单元素/组件的过渡

[具体效果见此Demo](http://jsbin.com/pijavub/edit?html,css,output)

主要代码如下

```
// CSS

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

// HTML

<div id="root">
    <transition name="fade">
        <p v-if="show">hello world</p>
    </transition>  
    <button @click="handleClick">Toggle</button>
</div>

// JS

new Vue({
  el: '#root',
  data: {
     show: true
  },
  methods: {
    handleClick () {
      this.show = !this.show
    }
  }
})
```

### 单元素/组件的动画

[具体效果见此Demo](http://jsbin.com/xuhutoc/edit?html,css,output)

过渡和动画可以设置自定义类名，主要代码如下

```
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.enter {
  transform-origin: left center;
  animation: bounce-in 1s;
}

.leave {
  transform-origin: left center;
  animation: bounce-in 1s reverse;
}
```

### 结合animate.css库使用

[具体效果见此Demo](http://jsbin.com/copowiw/edit?html,css,output)

主要就是利用了Vue可以自定义过渡和动画的类名来实现的，主要代码如下

```
<transition name="fade"
    enter-active-class="animated swing"
    leave-active-class="animated shake"
>
```

### Vue中同时使用过渡和动画



