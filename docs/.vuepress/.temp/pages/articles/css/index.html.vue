<template><h3 id="css-选择器-三大特性" tabindex="-1"><a class="header-anchor" href="#css-选择器-三大特性" aria-hidden="true">#</a> CSS 选择器( 三大特性 ) ?</h3>
<blockquote>
<p>权重等级 !important &gt; style &gt; id &gt; class &gt; tag</p>
</blockquote>
<ul>
<li>Id 选择器</li>
<li>类名选择器</li>
<li>标签选择器</li>
<li>伪类选择器 列如：last-child nth-child after before</li>
</ul>
<h3 id="重排-reflow-和-重绘-repaint-的理解" tabindex="-1"><a class="header-anchor" href="#重排-reflow-和-重绘-repaint-的理解" aria-hidden="true">#</a> 重排（reflow） 和 重绘（repaint） 的理解</h3>
<p>以我的理解就是，顾名思意，重排就是重新排版页面，重绘就是重新绘制元素，那么什么时候会重新排版页面，很好理解，当然是页面结构改动的时候，比如说什么 margin，width，height。</p>
<h3 id="bfc-机制-暂时理解不了" tabindex="-1"><a class="header-anchor" href="#bfc-机制-暂时理解不了" aria-hidden="true">#</a> BFC 机制 （暂时理解不了）</h3>
<p>BFC 是英文缩写，翻译为“块级格式化上下文”
翻译过来就相当于 css 盒模型的渲染规则
一个 BFC 的范围 包含创建该上下文元素的所有子元素，但不包括创建了新 BFC 的子元素的内部元素。这从另一方角度说明，一个元素不能同时存在于两个 BFC 中。因为如果一个元素能够同时处于两个 BFC 中，那么就意味着这个元素能与两个 BFC 中的元素发生作用，就违反了 BFC 的隔离作用。</p>
<h3 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h3>
<ul>
<li>border-box IE 盒模型
盒模型宽高不会包含 border 和 padding</li>
<li>content-box w3c 盒模型
盒模型的宽高会包含 border 和 padding</li>
</ul>
<h3 id="css-模块化开发-封装-scss-和-less-的使用" tabindex="-1"><a class="header-anchor" href="#css-模块化开发-封装-scss-和-less-的使用" aria-hidden="true">#</a> CSS 模块化开发(封装); SCSS 和 LESS 的使用</h3>
<p>使静态语言拥有动态语言的能力 变量 函数等
目前 css 本身也拥有变量能力
通常将常用的变量以及类名通过全局文件封装起来</p>
<h3 id="css变量" tabindex="-1"><a class="header-anchor" href="#css变量" aria-hidden="true">#</a> css变量</h3>
<h3 id="屏幕适配-以及-页面自适应" tabindex="-1"><a class="header-anchor" href="#屏幕适配-以及-页面自适应" aria-hidden="true">#</a> 屏幕适配 以及 页面自适应</h3>
<p>关键字 媒体查询 @medio
你可以通过不同媒体填入不同的条件，从而改变不同的样式
比如说 screen 屏幕 print 打印机 all 所有设备</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/**日常的简单使用 */</span>
<span class="token atrule"><span class="token rule">@medio</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span>min-width >= 300px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="css3-中新增的属性-transform-trasition-animation-等" tabindex="-1"><a class="header-anchor" href="#css3-中新增的属性-transform-trasition-animation-等" aria-hidden="true">#</a> CSS3 中新增的属性 transform trasition animation 等…</h3>
<h5 id="transform-属性" tabindex="-1"><a class="header-anchor" href="#transform-属性" aria-hidden="true">#</a> transform 属性</h5>
<p>\ transform 属性向元素应用 2D | 3D 转换，允许我们对元素进行旋转、缩放、移动、翻转</p>
<table>
<thead>
<tr>
<th>属性值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>translate</td>
<td>定义 2D 转换。</td>
</tr>
<tr>
<td>scale</td>
<td>定义 2D 缩放</td>
</tr>
<tr>
<td>rotate</td>
<td>定义旋转</td>
</tr>
<tr>
<td>skew</td>
<td>定义倾斜</td>
</tr>
</tbody>
</table>
<p>trasition 过渡效果 第一个参数定义什么过渡 all 或者 width 等等
trasition: 1s easy;</p>
<h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h3>
<ul>
<li>标准文档流（padding + margin）+ float + 定位</li>
<li>百分比布局</li>
<li>flex 布局</li>
<li>gird 栅格布局</li>
<li>响应式布局</li>
</ul>
<h3 id="背景补充知识" tabindex="-1"><a class="header-anchor" href="#背景补充知识" aria-hidden="true">#</a> 背景补充知识</h3>
<p>background-attachment</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>scroll</td>
<td>背景图片随着页面的滚动而滚动，这是默认的。</td>
</tr>
<tr>
<td>fixed</td>
<td>背景图片不会随着页面的滚动而滚动。</td>
</tr>
<tr>
<td>local</td>
<td>背景图片会随着元素内容的滚动而滚动。</td>
</tr>
<tr>
<td>initial</td>
<td>设置该属性的默认值。 阅读关于 initial 内容</td>
</tr>
<tr>
<td>inherit</td>
<td>指定 background-attachment 的设置应该从父元素继承。 阅读关于 inherit 内容</td>
</tr>
</tbody>
</table>
<h3 id="定位补充知识" tabindex="-1"><a class="header-anchor" href="#定位补充知识" aria-hidden="true">#</a> 定位补充知识</h3>
<p>position： sticky; 粘性布局 兼容性不是特别好</p>
<h3 id="其余属性" tabindex="-1"><a class="header-anchor" href="#其余属性" aria-hidden="true">#</a> 其余属性</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> offset-x offset-y 阴影的模糊半径 阴影扩展半径<span class="token punctuation">;</span>
<span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // 滤镜
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="自定义滚动条" tabindex="-1"><a class="header-anchor" href="#自定义滚动条" aria-hidden="true">#</a> 自定义滚动条</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.custom-scrollbar::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-scrollbar::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #1E3F20<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-scrollbar::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #4A7856<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
