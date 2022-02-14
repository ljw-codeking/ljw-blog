<template><h3 id="vue2-指令" tabindex="-1"><a class="header-anchor" href="#vue2-指令" aria-hidden="true">#</a> vue2 指令</h3>
<ul>
<li>v-model</li>
<li>v-for</li>
<li>v-bind</li>
<li>v-on</li>
<li>v-html</li>
<li>v-text</li>
<li>v-once</li>
<li>v-show</li>
<li>v-slot</li>
</ul>
<h3 id="vue-生命周期" tabindex="-1"><a class="header-anchor" href="#vue-生命周期" aria-hidden="true">#</a> vue 生命周期</h3>
<ul>
<li>beforeCreate</li>
<li>created</li>
<li>beforeMountd</li>
<li>mounted</li>
<li>beforeUpdate</li>
<li>undate</li>
<li>beforeDestroy</li>
<li>destroy</li>
</ul>
<h3 id="实例的属性和方法" tabindex="-1"><a class="header-anchor" href="#实例的属性和方法" aria-hidden="true">#</a> 实例的属性和方法</h3>
<ul>
<li>nextTick -- 等待页面更新完毕执行 将函数推到任务队列的最后面</li>
<li>foreUpdate -- 强制更新当前组件</li>
<li>watch -- 监听 data 数据变化 可以通过 options 进行配置获得更强大的能力 immediate：立即执行 deep：进行深度监听</li>
<li>computed -- get data 进行依赖收集 从而进行计算</li>
<li>emit -- 向上传递事件</li>
<li>mixins -- 代码混合 可以将一些功能性代码进行混合</li>
<li>props -- 组件传递的变量定义</li>
<li>emits -- 定义事件传递</li>
<li>$attrs -- 接受props中未定义的值 3.0中$listeners 已经移除将其合并到该变量中</li>
</ul>
<h3 id="内置的组件" tabindex="-1"><a class="header-anchor" href="#内置的组件" aria-hidden="true">#</a> 内置的组件</h3>
<ul>
<li>transition -- 动画组件 可以根据 name 进行配置</li>
<li>transition-group -- 帮助多个元素进行过度 注意：每个元素必须拥有唯一的 key 值</li>
<li>keep-alive -- 缓存组件 保留组件状态 避免重复渲染 实例方法 max 最多缓存多少个 include 只有组件名匹配的才进行缓存 exclude 名字匹配不进行缓存</li>
<li>teleport -- 传送 拥有 to 属性 传送至那个 html 模板处</li>
<li>component -- 动态组件渲染 通过 is 属性对应组件名称来进行渲染</li>
</ul>
<h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3>
<ol>
<li>普通插槽</li>
<li>具名插槽
通过 name 属性配对插槽名字</li>
<li>作用域插槽
将子组件的数据通过在 slot 标签自定义属性传递到作用域
父组件接受通过 v-slot 接受</li>
</ol>
<h3 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h3>
<ol>
<li>父子通信
通过 props 单向数据流进行通信 如需改变单向数据流 可以使用.sync vue3 中已经移除 使用 v-model:xx 语法
子组件通过 emit 向父组件传递事件进行通信</li>
<li>多层通信
借助 vuex、bus 事件流进行通信</li>
<li>兄弟通信
通过上级组件交替通讯
vuex
vue.observable 创建一个响应式数据
eventbus 通信</li>
</ol>
<p>深入 vue</p>
<ol>
<li>vnode</li>
</ol>
<h3 id="v-model-实现原理" tabindex="-1"><a class="header-anchor" href="#v-model-实现原理" aria-hidden="true">#</a> v-model 实现原理</h3>
<p>v-model 从本意上来理解就是 input 和 value 的一个语法糖</p>
<h3 id="vue-响应式原理" tabindex="-1"><a class="header-anchor" href="#vue-响应式原理" aria-hidden="true">#</a> vue 响应式原理</h3>
<p>vue 响应式原理通过 definePrototype 订阅 data 属性，每当 data 属性进行改变时进行发布</p>
<p>vue2、vue3 的主要区别</p>
<ul>
<li>分离出了 Composition Api</li>
<li>更友好的拥抱 TS</li>
<li>更爽的写法</li>
</ul>
<p>vue3
setup 模式
jsx 语法更加友好
应用创建方式
css module
底层使用 proxy 而不是 definePrototype</p>
</template>
