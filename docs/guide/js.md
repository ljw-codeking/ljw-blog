### 变量数据类型及检测: 基本 + 引用

- string
- boolean
- number
- null
- undefined
- object
- array

### 运算符: 算术 + 条件 + 逻辑 + 位 + 短路, 隐式转换等

-

*

- /
  %
  += -= \*= /= %=
  \>
  <
  \>=
  <=
  =
  ==
  \===
  &&
  ||
  \*\*
  ? :
  ?.
  ??
  100_000
  for
  for in
  for of
  if
  while
  switch
  cash
  brank
  return
  instanceof
  typeof

### 原型链

> > 原型的主要作用 节省内存不用在每个实例对象上进行创建而是通过 **proto** 往上查找

每个构建函数都拥有一个 prototype 属性
每个实例对象都拥有一个 **proto** 属性指向 构建函数的 prototype 属性

所以原型链就很好解释了，实例对象可以通过 **proto** 找到构建函数的原型 那么原型也是一个实例对象也拥有 **proto** 属性 就这样一层一层往上找，直到为 null 因为 Object 的 **proto** 指向 null

构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。-- 《JavaScript 高级指南》

### 闭包

保存函数内部状态
函数外可以获取到函数内的值

### 深拷贝与浅拷贝

深拷贝拷贝内存
浅拷贝拷贝指针

### JS 执行机制

从上往下执行
首先变量提升
其次函数提升
同步代码
宏任务
微任务

### ES6

let 定义一个局部变量
const 定义一个常量 不能更改器地址
let const 不存在变量提升
...展开符
Set 类集合类
Map 哈希对象
Symbol 唯一值
箭头函数 this 指向上层作用域 普通函数 this 指向调用者
Promise 包含 reject、resolve、all 这些方法 then、catch、finally 方法
Class 类
严格模式
Proxy
for of
Reflect 顶级对象
async await
import export
变量解构
等等

### 数组的操作方法

indexOf 从头查找数组
lastindexOf 从尾部查找数组
map 处理数组
filter 找出符合条件的元素
some 返回一个布尔值 找到一个就返回
every 全部为 true 返回 true
forEach 遍历数组
find 查找数组
findIndex 查找目标值在数组中的索引
from
flot 拉平二维数组
push 往数组后面放入一个元素并返回
pop 删除并返回数组最后一个元素
shift 往数组前面放入一个元素并返回
unshift 删除并返回数组的第一个元素
concat 合并数组
join 根据 xx 将数组切割成字符串
sort 排序
splice 将数组中的某个索引值替换或删除
reverse 数组翻转
fill 重复生成 （如果是复杂数据类型将指向同一片内存地址）
reduce 计算函数

### 对象的操作方法

Object.keys() 获取对象所有键名组成的数组
Object.values() 获取对象值所组成的数组
Object.assign() 合并对象 注意: 这是浅拷贝

Object.create(proto,[propertiesObject(就是 defineProperties 的参数属性)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)) 创建一个新对象，使用现有对象来提供新对象的 **proto**

### 函数的操作方法

自执行函数 (() => {})()
.call 改变 this 指向
.apply
.bind 改变 this 指向 并返回一个新函数
手写 call 函数

```javascript
/**
 * 移花接木
 * 将传递过来的对象接收
 * 在对象上挂载一个函数
 * 调用函数将结果return出去
 * */
Function.prototype.myCall = function (ctx) {
  ctx = ctx || window;
  if (typeof this !== "function") return;
  if (typeof ctx !== "object") return; // 可能有点问题后期改
  ctx.fn = this;
  const arg = [...arguments].slice(1);
  const result = ctx.fn(...arg);
  delete ctx.fn;
  return result;
};

/**
 * apply 差不多，换了一种传参方是
 * */
Function.prototype.myApply = function (ctx) {
  ctx = ctx || window;
};

Function.prototype.myBind = function (ctx) {
  const that = this;
  const arg = [...arguments].slice(1);
  return function F() {
    return that.apply(ctx, arg);
  };
};
```

### 手写 Promise

```javascript
class Promise {
  constructor(fn) {
    if (!fn || typeof fn !== "function")
      return throw new Errow("Promise resolver undefined is not a function");
  }
  status = "padding"; // padding: 初始化状态 fulfilled: 操作成功 rejected：操作失败
}

Promise.prototype.then = function () {
  return this;
};

Promise.prototype.catch = function () {
  return this;
};

Promise.prototype.resolve = function () {};

Promise.prototype.reject = function () {};

Promise.prototype.all = function () {};

Promise.prototype.race = function () {};
```
