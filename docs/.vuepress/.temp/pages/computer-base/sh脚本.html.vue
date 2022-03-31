<template><h1 id="shell脚本" tabindex="-1"><a class="header-anchor" href="#shell脚本" aria-hidden="true">#</a> Shell脚本</h1>
<p><em>小祥</em> <em>2020-09-07</em> <em>58</em> <em>Linux</em></p>
<p>基础的运维知识</p>
<h2 id="脚本开发规范" tabindex="-1"><a class="header-anchor" href="#脚本开发规范" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E8%84%9A%E6%9C%AC%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>脚本开发规范</h2>
<ul>
<li>脚本命名要有意义，文件后缀是.sh</li>
<li>脚本文件首行是而且必须是脚本解释器：<code>#!/bin/bash</code></li>
<li>脚本文件解释器后面要有脚本的基本信息等内容</li>
<li>脚本文件中尽量不用中文注释，尽量用英文注释，防止本机或切换系统环境后中文乱码的困扰</li>
<li>脚本文件常见执行方式：bash 脚本名</li>
</ul>
<blockquote>
<p>常见的注释信息：脚本名称、脚本功能描述、脚本版本、脚本作者、联系方式等</p>
</blockquote>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E6%B3%A8%E9%87%8A" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>注释</h2>
<p>单行注释：<code>#</code>，除了首行的#不是注释外，其他所有行内容，只要首个字符是#,那么就表示该行是注释</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">'1'</span>
<span class="token comment"># 注释</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>复制代码</p>
<p>多行注释：<code>:&lt;&lt;! ... !</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">'1'</span>
:<span class="token operator">&lt;&lt;</span><span class="token operator">!</span>
多行注释
多行注释
<span class="token operator">!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>复制代码</p>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>变量</h2>
<p>变量包括两部分：<code>变量名=变量值</code></p>
<p>shell中变量分为三大类</p>
<ol>
<li><strong>本地变量</strong>：手工方式定义的<strong>作用范围小</strong>的变量</li>
<li><strong>全局变量</strong>：手工|默认方式定义<strong>作用范围大</strong>的变量</li>
<li><strong>内置变量</strong>：bash命令中自带的一些参数变量类型</li>
</ol>
<h3 id="本地变量" tabindex="-1"><a class="header-anchor" href="#本地变量" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E6%9C%AC%E5%9C%B0%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>本地变量</h3>
<h4 id="普通变量" tabindex="-1"><a class="header-anchor" href="#普通变量" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E6%99%AE%E9%80%9A%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>普通变量</h4>
<ol>
<li><code>变量名=变量值</code>：变量值必须是一个整体，中间没有特殊字符</li>
<li><code>变量名='变量值'</code>：我看到的内容，我就输出什么内容</li>
<li><code>变量名=&quot;变量值&quot;</code>：如果变量值范围内，有可以解析的变量A，那么首先解析变量A，将A的结果和其他内容<strong>组合成一个整体</strong>，重新赋值给变量B</li>
</ol>
<blockquote>
<p>建议：<strong>数字不加引号，其他默认加双引号</strong></p>
</blockquote>
<h4 id="命令变量" tabindex="-1"><a class="header-anchor" href="#命令变量" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%91%BD%E4%BB%A4%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>命令变量</h4>
<p>执行`或者$()范围内的命令，将命令执行后的结果，赋值给新的变量名A</p>
<ol>
<li><strong>变量名=<code>命令</code></strong></li>
<li><strong>变量名=$(命令)</strong></li>
</ol>
<h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>全局变量</h3>
<p>查看全局变量：<code>env</code></p>
<p>定义全局变量：<code>export 变量=值</code></p>
<p>查看变量：<code>$变量名</code>，<code>&quot;变量名&quot;</code>，<code>${变量名}</code>，<code>&quot;${变量名}&quot;</code></p>
<p>取消变量：<code>unset 变量名</code></p>
<h3 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%86%85%E7%BD%AE%E5%8F%98%E9%87%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>内置变量</h3>
<h4 id="脚本文件" tabindex="-1"><a class="header-anchor" href="#脚本文件" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E8%84%9A%E6%9C%AC%E6%96%87%E4%BB%B6" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>脚本文件</h4>
<ul>
<li><code>$0</code>：获取当前执行的shell脚本文件名</li>
<li><code>$n</code>：获取当前执行的shell脚本的第n个参数值，<strong>n为数字</strong>，当n为0时表示脚本的文件名，如果n大于9就要用大括号括起来<code>${10}</code></li>
<li><code>$#</code>：获取当前shell命令行中参数的总个数</li>
<li><code>$?</code>：获取执行上一个指令的返回值，<strong>0为成功，非0为失败</strong></li>
</ul>
<h4 id="精确截取" tabindex="-1"><a class="header-anchor" href="#精确截取" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E7%B2%BE%E7%A1%AE%E6%88%AA%E5%8F%96" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>精确截取</h4>
<p>格式：<code>${变量名:起始位置:截取长度}</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 从第1个字符开始，截取5个字符</span>
<span class="token variable">${file<span class="token operator">:</span>0<span class="token operator">:</span>5}</span>

<span class="token comment"># 从第6个字符开始，截取5个字符</span>
<span class="token variable">${file<span class="token operator">:</span>5<span class="token operator">:</span>5}</span>

<span class="token comment"># 从倒数第6个字符开始，截取之后的3个字符</span>
<span class="token variable">${file<span class="token operator">:</span>0-6<span class="token operator">:</span>3}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>复制代码</p>
<h4 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E9%BB%98%E8%AE%A4%E5%80%BC" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>默认值</h4>
<p><code>${变量名:-默认值}</code>：如果变量有内容，就输出变量的内容，没有则输出默认值</p>
<p><code>${变量名+默认值}</code>：无论变量是否有内容，都输出默认值</p>
<h2 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E8%A1%A8%E8%BE%BE%E5%BC%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>表达式</h2>
<p>使用格式：<code>[ 表达式 ]</code>，左右两侧必须有空格，表达式条件成立则返回<code>0</code>，不成立返回<code>1</code></p>
<h3 id="逻辑表达式" tabindex="-1"><a class="header-anchor" href="#逻辑表达式" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E9%80%BB%E8%BE%91%E8%A1%A8%E8%BE%BE%E5%BC%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>逻辑表达式</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&amp;&amp;`：如果命令1执行成功则`执行`命令2，否则命令2`不执行
||`：如果命令1执行成功则命令2`不执行`，否则命令2`执行
# 1 = 1 之前必须有空格
[ 1 = 1 ] &amp;&amp; echo "前面执行成功就执行这个"

[ 1 = 2 ] || echo "前面执行失败就执行这个"
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>复制代码</p>
<h3 id="文件表达式" tabindex="-1"><a class="header-anchor" href="#文件表达式" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E6%96%87%E4%BB%B6%E8%A1%A8%E8%BE%BE%E5%BC%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>文件表达式</h3>
<p><code>-f</code>：判断输入的内容是否是一个文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span> -f wenjian.sh <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"是一个文件"</span>
<span class="token punctuation">[</span> -f wenjian.ssdah <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">"不是一个文件"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>复制代码</p>
<p><code>-d</code>：判断输入的内容是否是一个目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span> -d wenjian.ssdh <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">"不是一个目录"</span>
<span class="token punctuation">[</span> -d wenjian <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"是一个目录"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>复制代码</p>
<p><code>-x</code>：判断输入内容是否可执行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span> -x age.sh <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">"文件没有执行权限"</span>
<span class="token punctuation">[</span> -x test.sh <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"文件有执行权限"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>复制代码</p>
<h3 id="数值操作符" tabindex="-1"><a class="header-anchor" href="#数值操作符" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E6%95%B0%E5%80%BC%E6%93%8D%E4%BD%9C%E7%AC%A6" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>数值操作符</h3>
<ul>
<li><code>-eq</code>：相等</li>
<li><code>-gt</code>：大于</li>
<li><code>-lt</code>：小于</li>
<li><code>-ne</code>：不等于</li>
<li><code>==</code>：字符串比较</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token number">1</span> -eq <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"1等于1"</span>
<span class="token punctuation">[</span> <span class="token number">1</span> -ne <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"1不等于2"</span>
<span class="token punctuation">[</span> <span class="token number">1</span> -gt <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"1大于0"</span>
<span class="token punctuation">[</span> <span class="token number">1</span> -lt <span class="token number">2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"1小于2"</span>
<span class="token punctuation">[</span> a <span class="token operator">==</span> a <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"a等于a"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>复制代码</p>
<h3 id="计算表达式" tabindex="-1"><a class="header-anchor" href="#计算表达式" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E8%AE%A1%E7%AE%97%E8%A1%A8%E8%BE%BE%E5%BC%8F" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>计算表达式</h3>
<p>使用：<code>$(( 计算表达式 ))</code>或者<code>let 计算表达式</code>，<code>$(( 计算表达式 ))</code>中只能用<code>+ - * /和()</code>运算符，并且只能用做整数运算</p>
<p><a href="https://gitee.com/jtxyh/blogImg/raw/master/shell%E8%AE%A1%E7%AE%97%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%BD%BF%E7%94%A8.png" target="_blank" rel="noopener noreferrer"><img src="https://gitee.com/jtxyh/blogImg/raw/master/shell计算表达式使用.png" alt="shell计算表达式使用"><ExternalLinkIcon/></a></p>
<h3 id="数组操作" tabindex="-1"><a class="header-anchor" href="#数组操作" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E6%95%B0%E7%BB%84%E6%93%8D%E4%BD%9C" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>数组操作</h3>
<p>在Shell中，用括号来表示数组，数组元素用<strong>空格</strong>符合分割</p>
<h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%AE%9A%E4%B9%89" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>定义</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">array_name</span><span class="token operator">=</span><span class="token punctuation">(</span>v1 v2 v3<span class="token punctuation">)</span>

<span class="token comment"># 或者</span>
<span class="token assign-left variable">array_name</span><span class="token operator">=</span><span class="token punctuation">(</span>
    v1
    v2
    v3
<span class="token punctuation">)</span>

<span class="token comment"># 或者</span>
array_name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>v1
array_name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>v2
array_name<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span>v3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>复制代码</p>
<h4 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E6%9F%A5%E6%89%BE" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>查找</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>${array_name[index]}
# 索引查找
array_name=(v1 v2 v3)

echo ${array_name[0}
echo ${array_name[@}
echo ${array_name[*}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>复制代码</p>
<p><a href="https://gitee.com/jtxyh/blogImg/raw/master/20210112135248.png" target="_blank" rel="noopener noreferrer"><img src="https://gitee.com/jtxyh/blogImg/raw/master/20210112135248.png" alt="数组查找"><ExternalLinkIcon/></a></p>
<h4 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E4%BF%AE%E6%94%B9" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>修改</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>array_name[index]=值
array_name[0]=666
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>复制代码</p>
<h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%88%A0%E9%99%A4" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>删除</h4>
<p>删除单个元素 <code>unset array_name[index]</code> 删除整个数组 <code>unset array_name</code></p>
<h2 id="常见符号" tabindex="-1"><a class="header-anchor" href="#常见符号" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%B8%B8%E8%A7%81%E7%AC%A6%E5%8F%B7" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>常见符号</h2>
<h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E9%87%8D%E5%AE%9A%E5%90%91" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>重定向</h3>
<p><code>&gt;符号</code>：表示将符号左侧的内容，以<strong>覆盖</strong>的方式输入到右侧文件中</p>
<p><code>&gt;&gt;符号</code>：表示将符号左侧的内容，以<strong>追加</strong>的方式输入到右侧文件的末尾行中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"file.txt"</span> <span class="token operator">></span> file.txt
<span class="token builtin class-name">echo</span> <span class="token string">"file.txt"</span> <span class="token operator">>></span> file.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>复制代码</p>
<h3 id="管道符" tabindex="-1"><a class="header-anchor" href="#管道符" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E7%AE%A1%E9%81%93%E7%AC%A6" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>管道符</h3>
<p><code>|</code>：<code>命令1 | 命令2</code>，管道符左侧命令1执行后的结果，<strong>传递给</strong>管道符右侧的命令2使用</p>
<h2 id="流程控制语句" tabindex="-1"><a class="header-anchor" href="#流程控制语句" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>流程控制语句</h2>
<h3 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#if" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>if</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件 <span class="token punctuation">]</span>
<span class="token keyword">then</span> 
    指令1
<span class="token keyword">elif</span> <span class="token punctuation">[</span> 条件2 <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    指令2
<span class="token keyword">else</span>
    指令3
<span class="token keyword">fi</span>

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># 多 if 语句的使用场景</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token operator">==</span> <span class="token string">"start"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"服务启动中..."</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token operator">==</span> <span class="token string">"stop"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"服务关闭中..."</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token operator">==</span> <span class="token string">"restart"</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"服务重启中..."</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$0</span> 脚本的使用方式： <span class="token variable">$0</span> [ start | stop | restart ]"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>复制代码</p>
<h3 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#case" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>case</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">case</span> 变量名 <span class="token keyword">in</span>
    值1<span class="token punctuation">)</span>
        指令1
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    值2<span class="token punctuation">)</span>
        指令2
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        都不匹配
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token comment">#!/bin/bash</span>
<span class="token comment"># case 语句使用场景</span>
<span class="token keyword">case</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token keyword">in</span>
    <span class="token string">"start"</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"服务启动中..."</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">"stop"</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"服务关闭中..."</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token string">"restart"</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"服务重启中..."</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$0</span> 脚本的使用方式： <span class="token variable">$0</span> [ start | stop | restart ]"</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>复制代码</p>
<h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#for" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>for</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> 值 <span class="token keyword">in</span> 列表
<span class="token keyword">do</span>
    执行语句
<span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>复制代码</p>
<h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#while" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>while</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">while</span> 条件
<span class="token keyword">do</span>
    执行语句
<span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>复制代码</p>
<p>条件的类型：<code>命令、[[ 字符串表达式 ]]、(( 数字表达式 ))</code></p>
<h3 id="until" tabindex="-1"><a class="header-anchor" href="#until" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#until" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>until</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">until</span> 条件
<span class="token keyword">do</span>
    执行语句
<span class="token keyword">done</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>复制代码</p>
<p>条件的类型：<code>命令、[[ 字符串表达式 ]]、(( 数字表达式 ))</code></p>
<h3 id="循环退出" tabindex="-1"><a class="header-anchor" href="#循环退出" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%BE%AA%E7%8E%AF%E9%80%80%E5%87%BA" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>循环退出</h3>
<ul>
<li><code>break</code>： 跳出所有循环</li>
<li><code>break n</code>： 跳出第n个循环(由内向外)</li>
<li><code>continue</code>： 跳出当前循环</li>
<li><code>exit</code>： 退出程序</li>
</ul>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>函数</h2>
<h3 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%AE%9A%E4%B9%89%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>定义函数</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 普通函数</span>
函数名<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    函数体
<span class="token punctuation">}</span>

<span class="token comment"># 传参函数</span>
函数名<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    函数体 <span class="token variable">$n</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>复制代码</p>
<h3 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>调用函数</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 普通函数</span>
函数名

<span class="token comment"># 传参函数</span>
函数名 参数
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>复制代码</p>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>常用命令</h2>
<h3 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#grep" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>grep</h3>
<p><code>grep [参数] [关键字] &lt;文件名&gt;</code>：文本搜索命令</p>
<p>参数：<code>-c</code>只输出匹配行的计数，<code>-n</code>显示匹配行及好号，<code>-v</code>显示不包含匹配文本的所有行</p>
<h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> <a href="https://www.jtxyh.top/blogs/2020/102-Shell%E8%84%9A%E6%9C%AC.html#find" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>find</h3>
<p><code>find [路径] [参数] [关键字] [动作]</code>：查找命令 参数：<code>-name</code>按照文件名查找文件，<code>-user</code>按照文件属主查找文件，<code>-group</code>按照文件所属组来查找文件，<code>-type</code>查找某一类型的文件</p>
</template>
