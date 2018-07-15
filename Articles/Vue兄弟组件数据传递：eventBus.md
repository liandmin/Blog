### 兄弟组件数据传递

* 1、使用Vuex
* 2、通过全局实例，eventBus

### eventBus：订阅-发布模式

[Demo地址](http://jsbin.com/totamasara/edit?html,output)

> 本质是使用发布-订阅模式，在Vue.prototype上挂载一个全局实例bus，然后在需要传递数据的组件中通过 `$emit` 触发相关方法，在 `mounted` 中通过 `$on` 触发相关事件。具体效果见Demo，代码如下：

```
<div id="root">
    <Child content="Dell"></Child>
    <Child content="Lee"></Child>
</div>
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
<script>
    Vue.prototype.bus = new Vue()
    Vue.component('Child', {
      props: {
        content: String
      },
      data () {
        return {
          str: this.content
        }
      },
      template: `<div @click="handleClick">{{str}}</div>`,
      methods: {
        handleClick () {
          this.bus.$emit('change', this.str)
        }
      },
      mounted () {
        this.bus.$on('change', (msg) => {
          this.str = msg
        })
      }
    })
    new Vue({
      el: '#root'
    })
</script>
```