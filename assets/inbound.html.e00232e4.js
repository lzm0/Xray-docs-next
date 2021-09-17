import{r as n,o as s,c as a,a as o,b as e,w as t,F as p,e as c,d as l}from"./app.07673c31.js";const u={},r=o("h1",{id:"入站代理",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#入站代理","aria-hidden":"true"},"#"),c(" 入站代理")],-1),i=c("入站连接用于接收发来的数据，可用的协议请见"),d=c("入站协议"),b=c("。"),k=l('<h2 id="inboundobject" tabindex="-1"><a class="header-anchor" href="#inboundobject" aria-hidden="true">#</a> InboundObject</h2><p><code>InboundObject</code> 对应配置文件中 <code>inbounds</code> 项的一个子元素。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;协议名称&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标识&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;sniffing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;destOverride&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;allocate&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;refresh&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><blockquote><p><code>listen</code>: address</p></blockquote><p>监听地址，IP 地址或 Unix domain socket，默认值为 <code>&quot;0.0.0.0&quot;</code>，表示接收所有网卡上的连接.</p><p>可以指定一个系统可用的 IP 地址。</p>',6),q=c("支持填写 Unix domain socket，格式为绝对路径，形如 "),m=o("code",null,'"/dev/shm/domain.socket"',-1),g=c("，可在开头加 "),f=o("code",null,"@",-1),y=c(" 代表 "),h={href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"},j=c("abstract"),v=c("，"),x=o("code",null,"@@",-1),O=c(" 则代表带 padding 的 abstract。"),S=l("<p>填写 Unix domain socket 时，<code>port</code> 和 <code>allocate</code> 将被忽略，协议目前可选 VLESS、VMess、Trojan，传输方式可选 TCP、WebSocket、HTTP/2、gRPC。</p><blockquote><p><code>port</code>: number | &quot;env:variable&quot; | string</p></blockquote><p>端口。接受的格式如下:</p><ul><li>整型数值：实际的端口号。</li><li>环境变量：以 <code>&quot;env:&quot;</code> 开头，后面是一个环境变量的名称，如 <code>&quot;env:PORT&quot;</code>。Xray 会以字符串形式解析这个环境变量。</li><li>字符串：可以是一个数值类型的字符串，如 <code>&quot;1234&quot;</code>；或者一个数值范围，如 <code>&quot;5-10&quot;</code> 表示端口 5 到端口 10，这 6 个端口。</li></ul><p>当只有一个端口时，Xray 会在此端口监听入站连接。当指定了一个端口范围时，取决于 <code>allocate</code> 设置。</p><blockquote><p><code>protocol</code>: string</p></blockquote>",6),w=c("连接协议名称，可选的协议类型见 "),P=c("入站协议"),I=c("。"),T=o("blockquote",null,[o("p",null,[o("code",null,"settings"),c(": InboundConfigurationObject")])],-1),X=o("p",null,[c("具体的配置内容，视协议不同而不同。详见每个协议中的 "),o("code",null,"InboundConfigurationObject"),c("。")],-1),B=o("code",null,"streamSettings",-1),C=c(": "),E=c("StreamSettingsObject"),_=l('<p>底层传输方式（transport）是当前 Xray 节点和其它节点对接的方式</p><blockquote><p><code>tag</code>: string 此入站连接的标识，用于在其它的配置中定位此连接。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">警告</p><p>当其不为空时，其值必须在所有 <code>tag</code> 中<strong>唯一</strong>。</p></div><blockquote><p><code>sniffing</code>: <a href="#sniffingobject">SniffingObject</a></p></blockquote><p>流量探测主要作用于在透明代理等用途. 比如一个典型流程如下:</p><ol><li>如有一个设备上网,去访问 abc.com,首先设备通过 DNS 查询得到 abc.com 的 IP 是 1.2.3.4,然后设备会向 1.2.3.4 去发起连接.</li><li>如果不设置嗅探,Xray 收到的连接请求是 1.2.3.4,并不能用于域名规则的路由分流.</li><li>当设置了 sniffing 中的 enable 为 true,Xray 处理此连接的流量时,会从流量的数据中,嗅探出域名,即 abc.com</li><li>Xray 会把 1.2.3.4 重置为 abc.com.路由就可以根据域名去进行路由的域名规则的分流</li></ol><p>因为变成了一个向 abc.com 请求的连接, 就可以做更多的事情, 除了路由域名规则分流, 还能重新做 DNS 解析等其他工作.</p><p>当设置了 sniffing 中的 enable 为 true, 还能嗅探出 bittorrent 类型的流量, 然后可以在路由中配置&quot;protocol&quot;项来设置规则处理 BT 流量, 比如服务端用来拦截 BT 流量, 或客户端固定转发 BT 流量到某个 VPS 去等.</p><blockquote><p><code>allocate</code>: <a href="#allocateobject">AllocateObject</a></p></blockquote><p>当设置了多个 port 时, 端口分配的具体设置</p><h3 id="sniffingobject" tabindex="-1"><a class="header-anchor" href="#sniffingobject" aria-hidden="true">#</a> SniffingObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;destOverride&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fakedns&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;metadataOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;domainsExcluded&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>enabled</code>: true | false</p></blockquote><p>是否开启流量探测。</p><blockquote><p><code>destOverride</code>: [&quot;http&quot; | &quot;tls&quot; | &quot;fakedns&quot; ]</p></blockquote><p>当流量为指定类型时，按其中包括的目标地址重置当前连接的目标。</p><blockquote><p><code>metadataOnly</code>: true | false</p></blockquote><p>当启用时，将仅使用连接的元数据嗅探目标地址。此时，<code>http</code> 与 <code>tls</code> 将不能使用。</p>',18),L=o("code",null,"domainsExcluded",-1),R=c(": [string] "),U=l('<p>一个域名列表，如果流量探测结果在这个列表中时，将 <strong>不会</strong> 重置目标地址。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>目前，<code>domainsExcluded</code> 不支持类似路由中的域名匹配方式。此选项未来可能会改变，不保证跨版本兼容。</p></div><h3 id="allocateobject" tabindex="-1"><a class="header-anchor" href="#allocateobject" aria-hidden="true">#</a> AllocateObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;refresh&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>strategy</code>: &quot;always&quot; | &quot;random&quot;</p></blockquote><p>端口分配策略。</p><ul><li><code>&quot;always&quot;</code> 表示总是分配所有已指定的端口，<code>port</code> 中指定了多少个端口，Xray 就会监听这些端口。</li><li><code>&quot;random&quot;</code> 表示随机开放端口，每隔 <code>refresh</code> 分钟在 <code>port</code> 范围中随机选取 <code>concurrency</code> 个端口来监听。</li></ul><blockquote><p><code>refresh</code>: number</p></blockquote><p>随机端口刷新间隔，单位为分钟。最小值为 <code>2</code>，建议值为 <code>5</code>。这个属性仅当 <code>strategy</code> 设置为 <code>&quot;random&quot;</code> 时有效。</p><blockquote><p><code>concurrency</code>: number</p></blockquote><p>随机端口数量。最小值为 <code>1</code>，最大值为 <code>port</code> 范围的三分之一。建议值为 <code>3</code>。</p>',11);u.render=function(c,l){const u=n("RouterLink"),V=n("OutboundLink"),A=n("Badge");return s(),a(p,null,[r,o("p",null,[i,e(u,{to:"/config/inbounds/"},{default:t((()=>[d])),_:1}),b]),k,o("p",null,[q,m,g,f,y,o("a",h,[j,e(V)]),v,x,O]),S,o("p",null,[w,e(u,{to:"/config/inbounds/"},{default:t((()=>[P])),_:1}),I]),T,X,o("blockquote",null,[o("p",null,[B,C,e(u,{to:"/config/transport.html#streamsettingsobject"},{default:t((()=>[E])),_:1})])]),_,o("blockquote",null,[o("p",null,[L,R,e(A,{text:"WIP",type:"warning"})])]),U],64)};export default u;
