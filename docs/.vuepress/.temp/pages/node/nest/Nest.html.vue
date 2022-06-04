<template><h2 id="nest-笔记" tabindex="-1"><a class="header-anchor" href="#nest-笔记" aria-hidden="true">#</a> Nest 笔记</h2>
<blockquote>
<p>没事学一学后台》想要扎实的学好一门技术，那是是要做到想的到，写的出，说的透，记笔记吧，好记性不如烂笔头</p>
<p><img src="https://img-blog.csdnimg.cn/2020011414381332.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2x4eTg2OTcxODA2OQ==,size_16,color_FFFFFF,t_70" alt="img"></p>
</blockquote>
<h3 id="nest-介绍" tabindex="-1"><a class="header-anchor" href="#nest-介绍" aria-hidden="true">#</a> Nest 介绍</h3>
<p>Nest.js 是一个后台 Node 框架，可以说是跟 spring 相差无几，它对 express 的 http 做了一层封装，解决了架构问题。它提供了 express 里面没有的 MVC、IOC、AOP 架构特性，使得代码容易维护、扩展</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ba5dd3d01fa4674a343f26cc8a98e69~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?" alt="Nest.js 的 AOP 架构的好处，你感受到了么？"></p>
<h3 id="mvc、ioc、aop" tabindex="-1"><a class="header-anchor" href="#mvc、ioc、aop" aria-hidden="true">#</a> MVC、IOC、AOP</h3>
<p>请求 → Controller → Service → Repository</p>
<p>MVC 架构：</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9911c44a21d949e6824122c41a0d6bbe~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?" alt="img"></p>
<p>Nest 提供了 @Controller 装饰器声明 Controller</p>
<p>而 Service 会用 @Injecttable 装饰器声明</p>
<p>通过 @Controller、@Injectable 装饰器声明的 class 会被 Nest.js 扫描，创建对应的对象并加到一个容器里，这些所有的对象会根据构造器里声明的依赖自动注入，也就是 DI（dependency inject），这种思想叫做 IOC（Inverse Of Control）。</p>
<p><strong>IOC 的架构的好处是不需要动手创建对象和根据 ----------------- 抄的暂时不理解</strong></p>
<h4 id="aoc" tabindex="-1"><a class="header-anchor" href="#aoc" aria-hidden="true">#</a> AOC</h4>
<p>此外，Nest.js 还提供了 AOP （Aspect Oriented Programming）的能力，也就是面向切面编程的能力：</p>
<p>一个请求过来，可能会经过 Controller（控制器）、Service（服务）、Repository（数据库访问） 的逻辑：</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98095ad993dd484b9c4059e386cc0fb0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?" alt="img"></p>
<p>请求链路的逻辑拦截叫做 AOP 对于前端来将就是生命周期，那个阶段该拦截做哪些事情</p>
<p><strong>AOP 的好处是可以把一些通用逻辑分离到切面中，保持业务逻辑的存粹性，这样切面逻辑可以复用，还可以动态的增删</strong></p>
<p>其实 Express 的中间件的洋葱模型也是一种 AOP 的实现，因为你可以透明的在外面包一层，加入一些逻辑，内层感知不到。</p>
<p>而 Nestjs 中实现 AOP 的方式更多，一共有五种，包括 Middleware、Guard、Pipe、Interceptor、ExceptionFilter</p>
<h4 id="中间件-middleware" tabindex="-1"><a class="header-anchor" href="#中间件-middleware" aria-hidden="true">#</a> 中间件 Middleware</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 全局中间件</span>
app<span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span>logger<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 路由中间件</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token keyword">implements</span> <span class="token class-name">NestModule</span> <span class="token punctuation">{</span>
  <span class="token function">configure</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">consumer</span><span class="token operator">:</span> MiddlewareConsumer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });</span>
    <span class="token function">consumer</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>LoggerMiddleware<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forRoutes</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 注入</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 中间件 洋葱模型</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LoggerMiddleware</span> <span class="token keyword">implements</span> <span class="token class-name">NestMiddleware</span> <span class="token punctuation">{</span>
  <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> Request<span class="token punctuation">,</span> <span class="token literal-property property">res</span><span class="token operator">:</span> Response<span class="token punctuation">,</span> <span class="token literal-property property">next</span><span class="token operator">:</span> NextFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Request..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Request...2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="guard" tabindex="-1"><a class="header-anchor" href="#guard" aria-hidden="true">#</a> Guard</h4>
<p>Gurard 是路由守卫的意思，可以用于在调用某个 Controller 之前判断权限，返回 true 或者 false 来决定是否放行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义守卫</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CanActivate<span class="token punctuation">,</span> ExecutionContext<span class="token punctuation">,</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/common'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'rxjs'</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthGuard</span> <span class="token keyword">implements</span> <span class="token class-name">CanActivate</span> <span class="token punctuation">{</span>
  <span class="token function">canActivate</span><span class="token punctuation">(</span>
    <span class="token literal-property property">context</span><span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token operator">|</span> Promise<span class="token operator">&lt;</span>boolean<span class="token operator">></span> <span class="token operator">|</span> Observable<span class="token operator">&lt;</span>boolean<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 全局守卫 app.module.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">APP_GUARD</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/core'</span>
<span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        provider：<span class="token constant">APP_GUARD</span>，
       	<span class="token literal-property property">useClass</span><span class="token operator">:</span> guard
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// 控制器守卫 以及 路由守卫</span>
@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span>
@<span class="token function">UseGuards</span><span class="token punctuation">(</span>guard<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
	@<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    @<span class="token function">UseGuards</span><span class="token punctuation">(</span>guard<span class="token punctuation">)</span>
    <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token string">'xxx'</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 执行顺序   全局 → 控制器 → 路由</span>

<span class="token comment">// 有时候有些路由我们可能不需要对其进行校验  这个时候就需要用到我们的 反射器 了</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Reflector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/core'</span><span class="token punctuation">;</span>
<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> readonly reflector<span class="token operator">:</span> Reflector</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
@<span class="token function">SetMetadata</span><span class="token punctuation">(</span><span class="token string">'roles'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'admin'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> roles <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reflector<span class="token punctuation">.</span>get<span class="token operator">&lt;</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'roles'</span><span class="token punctuation">,</span> context<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>Guard 可以抽离路由的访问控制逻辑，但是不能对请求、响应做修改、这种逻辑可以使用 interceptor；</p>
<h4 id="interceptor" tabindex="-1"><a class="header-anchor" href="#interceptor" aria-hidden="true">#</a> Interceptor</h4>
<p>拦截器可以在目标 Controller 方法前后加入一些逻辑处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RequestInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">NestInterceptor</span> <span class="token punctuation">{</span>
  <span class="token function">intercept</span><span class="token punctuation">(</span>context<span class="token operator">:</span> ExecutionContext<span class="token punctuation">,</span> <span class="token literal-property property">next</span><span class="token operator">:</span> CallHandler<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Before..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> next
      <span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">After... </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> now<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>除了路由的控制权限 目标 Controller 之前之后的处理这些都是通用逻辑外，对参数处理也是一个通用的逻辑，所以 Nest 也抽离出了对应的切片面，也就是 Pipe</p>
<h4 id="pipe" tabindex="-1"><a class="header-anchor" href="#pipe" aria-hidden="true">#</a> Pipe</h4>
<p>这个没什么可说的就是对参数进行处理</p>
<h4 id="exceptionfilter" tabindex="-1"><a class="header-anchor" href="#exceptionfilter" aria-hidden="true">#</a> ExceptionFilter</h4>
<blockquote>
<p>全局错误拦截</p>
</blockquote>
<p>ExceptionFiter 可以对抛出的异常做处理，返回对应的响应</p>
</template>
