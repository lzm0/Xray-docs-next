import{r as o,o as n,c as l,a as e,b as t,w as r,F as s,e as a}from"./app.07673c31.js";const u={},c=e("h1",{id:"inbounds-protocols",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inbounds-protocols","aria-hidden":"true"},"#"),a(" Inbounds Protocols")],-1),d=e("blockquote",null,[e("p",null,"这个章节包含了目前所有可用于 Inbounds 的协议及具体配置细节.")],-1),p=e("h2",{id:"协议列表",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#协议列表","aria-hidden":"true"},"#"),a(" 协议列表")],-1),i=a("Dokodemo-door"),k=e("p",null,"Dokodemo door（任意门）可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果。",-1),h=a("HTTP"),f=e("p",null,"HTTP 协议",-1),b=a("Socks"),m=a("标准 Socks 协议实现，兼容 "),g={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},S=a("Socks 4"),_=a("、Socks 4a 和 "),q={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},w=a("Socks 5"),j=a("。"),T=a("VLESS"),v=e("p",null,"VLESS 是一个无状态的轻量传输协议，可以作为 Xray 客户端和服务器之间的桥梁。",-1),L=a("VMess"),V=a("VMess"),x=a(" 是一个加密传输协议，，可以作为 Xray 客户端和服务器之间的桥梁。"),O=a("Trojan"),P={href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"},y=a("Trojan"),C=a(" 协议"),D=a("Shadowsocks"),E={href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},H=a("Shadowsocks"),I=a(" 协议。");u.render=function(a,u){const K=o("RouterLink"),M=o("OutboundLink");return n(),l(s,null,[c,d,p,e("blockquote",null,[e("p",null,[t(K,{to:"/en/config/inbounds/dokodemo.html"},{default:r((()=>[i])),_:1})])]),k,e("blockquote",null,[e("p",null,[t(K,{to:"/en/config/inbounds/http.html"},{default:r((()=>[h])),_:1})])]),f,e("blockquote",null,[e("p",null,[t(K,{to:"/en/config/inbounds/socks.html"},{default:r((()=>[b])),_:1})])]),e("p",null,[m,e("a",g,[S,t(M)]),_,e("a",q,[w,t(M)]),j]),e("blockquote",null,[e("p",null,[t(K,{to:"/en/config/inbounds/vless.html"},{default:r((()=>[T])),_:1})])]),v,e("blockquote",null,[e("p",null,[t(K,{to:"/en/config/inbounds/vmess.html"},{default:r((()=>[L])),_:1})])]),e("p",null,[t(K,{to:"/en/config/development/protocols/vmess.html"},{default:r((()=>[V])),_:1}),x]),e("blockquote",null,[e("p",null,[t(K,{to:"/en/config/inbounds/trojan.html"},{default:r((()=>[O])),_:1})])]),e("p",null,[e("a",P,[y,t(M)]),C]),e("blockquote",null,[e("p",null,[t(K,{to:"/en/config/inbounds/shadowsocks.html"},{default:r((()=>[D])),_:1})])]),e("p",null,[e("a",E,[H,t(M)]),I])],64)};export default u;
