## Vue组件插槽

> 通常我们会向一个组件中传入一些自定义的内容，这个时候就可以用到插槽。插槽内可以包含任何模板代码，包括HTML或者是一个组件。

[官网链接：https://cn.vuejs.org/v2/guide/components-slots.html](https://cn.vuejs.org/v2/guide/components-slots.html)

### 普通/默认 插槽

```
<div id="root">
    <message></message>
</div>

// 定义一个带默认内容的插槽组件
Vue.component = ('message', {
    template: `
        <div>
            <slot>default content</slot>
        </div>    
    `
})
new Vue({
    el: '#root',
})
```

### 具名插槽

**使用方式**

1：在一个父组件的 `<template>` 元素上使用 `slot` 特性

```
<base-layout>
  <template slot="header">
    <h1>Here might be a page title</h1>
  </template>
  
  <template slot="main">
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>
 
  <template slot="footer">
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

2：直接在普通元素上使用

```
<base-layout>
  <h1 slot="header">Here might be a page title</h1>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <p slot="footer">Here's some contact info</p>
</base-layout>
```
### 作用域插槽

>由于父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。而有时我们希望可以在插槽中获取子组件的数据，这个时候就要用到作用域插槽。注意：在 2.5.0+，slot-scope 不再限制在 <template> 元素上使用，而可以用在插槽内的任何元素或组件上。

[具体效果点击这里查看](http://jsbin.com/febogar/edit?html,output)

```
<div id="root">
    <child>
        <template slot-scope="data">
            <h1>{{data.item}}</h1>
        </template>
<!--  <li slot-scope="data">{{data.item}}</li> -->
    </child>
</div>

// 申明一个作用域插槽
Vue.component('child', {
    data () {
      return {
          list: [1, 2, 3, 4]
      }  
    },
    template: `
        <div>
            <ul>
                <slot v-for="item of list"
                    :item="item"
                ></slot>
            </ul>
        </div>
    `
})
```
