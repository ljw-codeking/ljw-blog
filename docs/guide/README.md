### 递归

顾明思意，就是一层一层递归在向上回溯

- 主要用于不确定的循坏以及深度遍历
- 要有退出条件，否则会造成死循坏

```javascript
// 2-1 斐波那契数列
function fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1
    };
    return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(30)
```

[N 叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/)

```
const rootTree = {
      val: 1,
      children: [
        { val: 2, children: [{ val: 5, children: [] }] },
        { val: 3, children: [null] },
        { val: 4, children: [] }
      ]
    }

 var maxDepth = function (root) {
      if (root == null)
        return 0;
      let ans = 0;
      for (const child of root.children) {
        console.log(ans, maxDepth(child))
        ans = Math.max(ans, maxDepth(child));
      } 
      return ans + 1;
    };
 maxDepth(rootTree)
// 0 1
// 0 2
// 0 1
// 0 0
// 2 1
// 0 0
// 2 1
```

