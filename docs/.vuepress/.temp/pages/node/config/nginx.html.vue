<template><h4 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h4>
<blockquote>
<p>最近不是心血来潮，想玩一下后台服务，从 nodejs 开始，当然这些都不重要，因为这都不是我写这篇文章的目的，我写这篇文章主要是想记录我第一次配置 nginx 辛酸。太难了 QAQ...</p>
</blockquote>
<p>第一步下载 nginx</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx

<span class="token builtin class-name">cd</span> /etc/nginx/conf.d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># copy 别人的配置</span>
upstream ice <span class="token punctuation">{</span>
        server <span class="token number">127.0</span>.0.1:3000<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name ice.qjnubk.club<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
        <span class="token comment"># 后端的Web服务器可以通过X-Forwarded-For获取用户真实IP</span>
        proxy_next_upstream error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_set_header X_Nginx_Proxy <span class="token boolean">true</span><span class="token punctuation">;</span>
        proxy_pass http://ice<span class="token punctuation">;</span>
        proxy_redirect off<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><img src="C:\Users\86155\AppData\Roaming\Typora\typora-user-images\image-20220331212159682.png" alt="image-20220331212159682"></p>
<p>我们的 nginx 配置也可以在这文件下进行配置</p>
<p>当然我们还有终极大招就是在线配置网站 <a href="https://www.digitalocean.com/community/tools/nginx?domains.0.server.domain=liujunwei.club&amp;domains.0.server.wwwSubdomain=true&amp;domains.0.https.https=false&amp;domains.0.php.php=false&amp;domains.0.reverseProxy.reverseProxy=true&amp;domains.0.routing.root=false&amp;domains.0.logging.accessLog=true&amp;global.app.lang=zhCN" target="_blank" rel="noopener noreferrer">nginx 配置<ExternalLinkIcon/></a></p>
<p>接下来就是我的一路踩坑</p>
<p>如果 nginx 访问不了请做以下检查</p>
<ol>
<li>检查 server_name proxy_pass 是否正确</li>
<li>检查 阿里云安全组是否开启 80 端口</li>
<li>查看 nginx 是否启动 netstat -tlnp （我就是被这个害了一天时间）</li>
</ol>
<p>nginx 常用命令</p>
<p><strong>1.停止 Nginx 服务的四种方法</strong></p>
<ul>
<li>从容停止服务
这种方法较 stop 相比就比较温和一些了，需要进程完成当前工作后再停止。</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx -s quit
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>立即停止服务
这种方法比较强硬，无论进程是否在工作，都直接停止进程。</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx -s stop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>systemctl 停止</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl属于Linux命令
systemctl stop nginx.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>killall 方法杀死进程
直接杀死进程，在上面无效的情况下使用，态度强硬，简单粗暴！</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">killall</span> nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>2.启动 Nginx</strong></p>
<ul>
<li>nginx 直接启动</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>systemctl 命令启动</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl start nginx.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>3.查看启动后记录</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>4.重启 Nginx 服务</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl restart nginx.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>5.重新载入配置文件</strong></p>
<p>当有系统配置文件有修改，用此命令，建议不要停止再重启，以防报错！</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx -s reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>6.查看端口号</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">netstat</span> -tlnp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
