<template><h3 id="变量数据类型及检测-基本-引用" tabindex="-1"><a class="header-anchor" href="#变量数据类型及检测-基本-引用" aria-hidden="true">#</a> 变量数据类型及检测: 基本 + 引用</h3>
<ul>
<li>String</li>
<li>Boolean</li>
<li>Number</li>
<li>Null</li>
<li>undefined</li>
<li>Symbol</li>
<li>BigInt</li>
<li>Object</li>
</ul>
<h3 id="运算符-算术-条件-逻辑-位-短路-隐式转换等" tabindex="-1"><a class="header-anchor" href="#运算符-算术-条件-逻辑-位-短路-隐式转换等" aria-hidden="true">#</a> 运算符: 算术 + 条件 + 逻辑 + 位 + 短路, 隐式转换等</h3>
<ul>
<li>/</li>
<li>%</li>
<li>^</li>
<li>&amp;</li>
<li>+= -= *= /= %=</li>
<li>&gt;</li>
<li>&lt;</li>
<li>&gt;=</li>
<li>&lt;=</li>
<li>=</li>
<li>==</li>
<li>===</li>
<li>&amp;&amp;</li>
<li>||</li>
<li>**</li>
<li>? :</li>
<li>?.</li>
<li>??</li>
<li>100_000</li>
<li>for</li>
<li>for in</li>
<li>for of</li>
<li>if</li>
<li>while</li>
<li>switch</li>
<li>cash</li>
<li>brank</li>
<li>return</li>
<li>instanceof</li>
<li>typeof</li>
</ul>
<h3 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h3>
<blockquote>
<p>原型的主要作用 节省内存不用在每个实例对象上进行创建而是通过 <strong>proto</strong> 往上查找</p>
</blockquote>
<p>每个构建函数都拥有一个 prototype 属性
每个实例对象都拥有一个 <strong>proto</strong> 属性指向 构建函数的 prototype 属性</p>
<p>所以原型链就很好解释了，实例对象可以通过 <strong>proto</strong> 找到构建函数的原型 那么原型也是一个实例对象也拥有 <strong>proto</strong> 属性 就这样一层一层往上找，直到为 null 因为 Object 的 <strong>prototype</strong> 指向 null</p>
<p>构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。-- 《JavaScript 高级指南》</p>
<h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3>
<p>保存函数内部状态
函数外可以获取到函数内的值</p>
<h3 id="深拷贝与浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝与浅拷贝" aria-hidden="true">#</a> 深拷贝与浅拷贝</h3>
<p>深拷贝拷贝内存
浅拷贝拷贝指针</p>
<h3 id="js-执行机制" tabindex="-1"><a class="header-anchor" href="#js-执行机制" aria-hidden="true">#</a> JS 执行机制</h3>
<p>从上往下执行 -&gt;
首先变量提升 -&gt;
其次函数提升 -&gt;
同步代码 -&gt;
宏任务 -&gt;
微任务</p>
<h3 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h3>
<ol>
<li>let 定义一个局部变量、const 定义一个常量 不能更改器地址、let const 不存在变量提升</li>
<li>...展开符</li>
<li>Set 类集合类</li>
<li>Map 哈希对象</li>
<li>Symbol 唯一值</li>
<li>箭头函数 this 指向上层作用域 普通函数 this 指向调用者</li>
<li>Promise 包含 reject、resolve、all 这些方法 then、catch、finally 方法</li>
<li>Class 类</li>
<li>严格模式</li>
<li>Proxy</li>
<li>for of</li>
<li>Reflect 顶级对象</li>
<li>async await</li>
<li>import export</li>
<li>try、catch、finally</li>
<li>变量解构
等等...</li>
</ol>
<h3 id="数组的操作方法" tabindex="-1"><a class="header-anchor" href="#数组的操作方法" aria-hidden="true">#</a> 数组的操作方法</h3>
<ol>
<li>indexOf 从头查找数组</li>
<li>lastindexOf 从尾部查找数组</li>
<li>map 处理数组</li>
<li>filter 找出符合条件的元素</li>
<li>some 返回一个布尔值 找到一个就返回</li>
<li>every 全部为 true 返回 true</li>
<li>forEach 遍历数组</li>
<li>find 查找数组</li>
<li>findIndex 查找目标值在数组中的索引</li>
<li>from 创建数组</li>
<li>flot 拉平二维数组</li>
<li>push 往数组后面放入一个元素并返回</li>
<li>pop 删除并返回数组最后一个元素</li>
<li>shift 往数组前面放入一个元素并返回</li>
<li>unshift 删除并返回数组的第一个元素</li>
<li>concat 合并数组</li>
<li>join 根据 xx 将数组切割成字符串</li>
<li>sort 排序</li>
<li>splice 将数组中的某个索引值替换或删除</li>
<li>reverse 数组翻转</li>
<li>fill 重复生成 （如果是复杂数据类型将指向同一片内存地址）</li>
<li>reduce 计算函数</li>
</ol>
<h3 id="对象的操作方法" tabindex="-1"><a class="header-anchor" href="#对象的操作方法" aria-hidden="true">#</a> 对象的操作方法</h3>
<ol>
<li>Object.keys() 获取对象所有键名组成的数组</li>
<li>Object.values() 获取对象值所组成的数组</li>
<li>Object.assign() 合并对象 注意: 这是浅拷贝</li>
<li>Object.create(proto,<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties" target="_blank" rel="noopener noreferrer">propertiesObject(就是 defineProperties 的参数属性)<ExternalLinkIcon/></a>) 创建一个新对象，使用现有对象来提供新对象的 <strong>proto</strong></li>
<li>Object.entries() 返回 [[key,value]]</li>
<li>Object.freeze() 返回一个不可操作的对象</li>
<li>Object.values()</li>
</ol>
<h3 id="函数的操作方法" tabindex="-1"><a class="header-anchor" href="#函数的操作方法" aria-hidden="true">#</a> 函数的操作方法</h3>
<p>自执行函数 (() =&gt; {})()
.call 改变 this 指向
.apply
.bind 改变 this 指向 并返回一个新函数
手写 call 函数
new Function</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 移花接木
 * 将传递过来的对象接收
 * 在对象上挂载一个函数
 * 调用函数将结果return出去
 * */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx <span class="token operator">=</span> ctx <span class="token operator">||</span> window<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> ctx <span class="token operator">!==</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 可能有点问题后期改</span>
  ctx<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> arg <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">delete</span> ctx<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * apply 差不多，换了一种传参方是
 * */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx <span class="token operator">=</span> ctx <span class="token operator">||</span> window<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> arg <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">that</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="手写-promise" tabindex="-1"><a class="header-anchor" href="#手写-promise" aria-hidden="true">#</a> 手写 Promise</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Promise</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fn <span class="token operator">||</span> <span class="token keyword">typeof</span> fn <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Errow</span><span class="token punctuation">(</span><span class="token string">"Promise resolver undefined is not a function"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  status <span class="token operator">=</span> <span class="token string">"padding"</span><span class="token punctuation">;</span> <span class="token comment">// padding: 初始化状态 fulfilled: 操作成功 rejected：操作失败</span>
<span class="token punctuation">}</span>

<span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">all</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">race</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>
