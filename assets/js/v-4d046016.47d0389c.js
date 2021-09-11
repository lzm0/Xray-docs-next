"use strict";(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[5073],{68758:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-4d046016",path:"/en/document/command.html",title:"命令参数",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"获取基本命令",slug:"获取基本命令",children:[{level:3,title:"xray run",slug:"xray-run",children:[]},{level:3,title:"xray version",slug:"xray-version",children:[]},{level:3,title:"xray api",slug:"xray-api",children:[]},{level:3,title:"xray tls",slug:"xray-tls",children:[]},{level:3,title:"xray uuid",slug:"xray-uuid",children:[]}]}],filePathRelative:"en/document/command.md",git:{updatedTime:1622027153e3,contributors:[{name:"hmol233",email:"82594500+hmol233@users.noreply.github.com",commits:1}]}}},95388:(e,n,a)=>{a.r(n),a.d(n,{default:()=>m});var s=a(66252);const r=(0,s.uE)('<h1 id="命令参数" tabindex="-1"><a class="header-anchor" href="#命令参数" aria-hidden="true">#</a> 命令参数</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Xray 使用 Go 风格的命令及参数</p></div><h2 id="获取基本命令" tabindex="-1"><a class="header-anchor" href="#获取基本命令" aria-hidden="true">#</a> 获取基本命令</h2><p>您可以运行 <code>xray help</code> 来获得所有 xray 最基础的用法, 以及可用的命令及说明.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Xray is a platform for building proxies.\n\nUsage:\n\n        xray &lt;command&gt; [arguments]\n\nThe commands are:\n\n        run          Run Xray with config, the default command\n        version      Show current version of Xray\n        api          Call an API in an Xray process\n        tls          TLS tools\n        uuid         Generate new UUIDs\n\nUse &quot;xray help &lt;command&gt;&quot; for more information about a command.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="xray-run" tabindex="-1"><a class="header-anchor" href="#xray-run" aria-hidden="true">#</a> xray run</h3><p>指定一个或多个配置文件，并运行。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xray run [-c config.json] [-confdir dir]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Run Xray with config, the default command.\n\nThe -config=file, -c=file flags set the config files for\nXray. Multiple assign is accepted.\n\nThe -confdir=dir flag sets a dir with multiple json config\n\nThe -format=json flag sets the format of config files.\nDefault &quot;json&quot;.\n\nThe -test flag tells Xray to test config files only,\nwithout launching the server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="xray-version" tabindex="-1"><a class="header-anchor" href="#xray-version" aria-hidden="true">#</a> xray version</h3><p>输出 Xray 版本、 Golang 版本等信息。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> xray version\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="xray-api" tabindex="-1"><a class="header-anchor" href="#xray-api" aria-hidden="true">#</a> xray api</h3><p>调用 Xray 的 gRPC API，需要在配置文件中开启。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray api &lt;command&gt; [arguments]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        restartlogger Restart the logger\n        stats         Get statistics\n        statsquery    Query statistics\n        statssys      Get system statistics\n        adi           Add inbounds\n        ado           Add outbounds\n        rmi           Remove inbounds\n        rmo           Remove outbounds\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="xray-tls" tabindex="-1"><a class="header-anchor" href="#xray-tls" aria-hidden="true">#</a> xray tls</h3><p>一些与 TLS 相关的工具。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray tls &lt;command&gt; [arguments]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>        cert         Generate TLS certificates\n        ping         Ping the domain with TLS handshake\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="xray-uuid" tabindex="-1"><a class="header-anchor" href="#xray-uuid" aria-hidden="true">#</a> xray uuid</h3><p>生成 UUID。</p><p>使用方法:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xray uuid\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',28),l={class:"custom-container tip"},i=(0,s._)("p",{class:"custom-container-title"},"TIP",-1),t=(0,s._)("p",null,[(0,s.Uk)("当"),(0,s._)("code",null,"-config"),(0,s.Uk)("没有指定时，Xray 将先后尝试从以下路径加载"),(0,s._)("code",null,"config.json"),(0,s.Uk)(":")],-1),c=(0,s._)("li",null,"工作目录（Working Directory）",-1),u=(0,s.Uk)("环境变量"),d=(0,s.Uk)("中"),p=(0,s._)("code",null,"Xray.location.asset",-1),o=(0,s.Uk)("所指定的路径"),m={render:function(e,n){const a=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("div",l,[i,t,(0,s._)("ul",null,[c,(0,s._)("li",null,[(0,s.Wm)(a,{to:"/en/config/features/env.html#%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84"},{default:(0,s.w5)((()=>[u])),_:1}),d,p,o])])])],64)}}}}]);