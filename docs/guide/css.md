#### CSS 选择器( 三大特性 ) ?

- Id 选择器
- 类名选择器
- 标签选择器
- 伪类选择器 列如：last-child nth-child after before

### BFC 机制 （暂时理解不了）

BFC 是英文缩写，翻译为“块级格式化上下文”
翻译过来就相当于 css 盒模型的渲染规则
一个 BFC 的范围 包含创建该上下文元素的所有子元素，但不包括创建了新 BFC 的子元素的内部元素。这从另一方角度说明，一个元素不能同时存在于两个 BFC 中。因为如果一个元素能够同时处于两个 BFC 中，那么就意味着这个元素能与两个 BFC 中的元素发生作用，就违反了 BFC 的隔离作用。

### 盒模型

- border-box IE 盒模型
  盒模型宽高不会包含 border 和 padding
- content-box w3c 盒模型
  盒模型的宽高会包含 border 和 padding

### CSS 模块化开发(封装); SCSS 和 LESS 的使用

\\ 使静态语言拥有动态语言的能力 变量 函数等
目前 css 本身也拥有变量能力
通常将常用的变量以及类名通过全局文件封装起来

### 屏幕适配 以及 页面自适应

\\ 关键字 媒体查询 @medio
你可以通过不同媒体填入不同的条件，从而改变不同的样式
比如说 screen 屏幕 print 打印机 all 所有设备

```css
/**日常的简单使用 */
@medio screen and (min-width >= 300px) {
  body {
    font-size: 24px;
  }
}
```

### CSS3 中新增的属性 transform trasition animation 等…

##### transform 属性

\\ transform 属性向元素应用 2D | 3D 转换，允许我们对元素进行旋转、缩放、移动、翻转
| 属性值 | 说明 |
| ---- | ---- |
| translate | 定义 2D 转换。 |
| scale | 定义 2D 缩放 |
| rotate | 定义旋转 |
| skew | 定义倾斜 |

trasition 过渡效果
trasition: 1s easy;

### 布局

- 标准文档流（padding + margin）+ float + 定位
- 百分比布局
- flex 布局
- gird 栅格布局
- 响应式布局

### 背景补充知识

background-attachment

### 定位补充知识

position： sticky 粘性布局
