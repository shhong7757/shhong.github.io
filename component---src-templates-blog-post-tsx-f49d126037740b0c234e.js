(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+pfR":function(t,e,n){},"09Fq":function(t,e,n){var c=n("q1tI");function i(t){return c.createElement("svg",t,[c.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",key:0}),c.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",key:1})])}i.defaultProps={height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=i,i.default=i},HjZe:function(t,e,n){var c=n("q1tI");function i(t){return c.createElement("svg",t,[c.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",key:0}),c.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",key:1})])}i.defaultProps={height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=i,i.default=i},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"shhong7757.github.io"}}}}')},"Ng2+":function(t,e,n){"use strict";var c=n("IRj2"),i=n("q1tI"),r=n.n(i),o=n("qKvR"),a=n("Wbzz"),s={name:"l6x4uw",styles:"max-width:1200px;margin:0px auto;"},l={name:"jbedf6",styles:"justify-self:center;align-self:center;"},d=Object(o.b)(l," cursor:pointer;margin-top:14px;margin-bottom:14px;color:black;text-decoration:none;font-size:20px;font-weight:bold;height:32px;line-height:32px;"),u={name:"7w7vxn",styles:"background-color:white;border-bottom-color:#cecece;border-bottom-style:solid;border-bottom-width:1px;padding:0px 20px;position:sticky;top:0;"},p=Object(o.b)(s," display:grid;grid-template-columns:280px 1fr;grid-gap:16px;"),f={name:"1w5224z",styles:"justify-self:start;align-self:center;"},b={name:"1ixjl8x",styles:"display:grid;grid-template-columns:repeat(2,auto) 1fr;grid-gap:16px;"},m=function(t){var e=t.siteTitle;return Object(o.c)("header",{css:u},Object(o.c)("div",{css:p},Object(o.c)("div",{css:f},Object(o.c)(a.Link,{css:d,to:"/"},e)),Object(o.c)("nav",{css:b},Object(o.c)(a.Link,{css:d,to:"/blog",activeStyle:{color:"hotpink"},partiallyActive:!0},"Blog"),Object(o.c)("div",null))))},h={name:"10q9h0f",styles:"body{margin:0px;}"},g=function(t){var e=t.children,n=c.data;return Object(o.c)(r.a.Fragment,null,Object(o.c)(o.a,{styles:h}),Object(o.c)(m,{siteTitle:n.site.siteMetadata.title}),e)};e.a=g},Tq89:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return W}));var c=n("DjBF"),i=n("qKvR"),r=n("q1tI");var o=function(){var t=Object(r.useState)({width:void 0,height:void 0}),e=Object(c.a)(t,2),n=e[0],i=e[1];return Object(r.useEffect)((function(){function t(){var t=window,e=t.innerWidth,n=t.innerHeight;i({width:e,height:n})}return i({width:innerWidth,height:innerHeight}),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n};var a=function(){var t=Object(r.useState)(0),e=Object(c.a)(t,2),n=e[0],i=e[1];return Object(r.useEffect)((function(){function t(){i(window.pageYOffset)}return i(window.pageYOffset),window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),n},s=n("F9FU");function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var d=n("09Fq"),u=n.n(d);function p(){var t=l(["\n  from {\n    transform: rotate(90deg)\n  }\n  to% {\n    transform: rotate(0deg)\n  }\n"]);return p=function(){return t},t}function f(){var t=l(["\n  from {\n    transform: rotate(0deg)\n  }\n  to {\n    transform: rotate(90deg)\n  }\n"]);return f=function(){return t},t}var b=Object(i.d)(f()),m=Object(i.d)(p()),h={name:"1cbdd87",styles:"color:#6d6d6d;flex:1;font-size:24px;font-weight:700;margin:0px;"},g={name:"15f2kop",styles:"color:#1a1a1a;background-color:transparent;font-size:16px;"},j={name:"1poe6c3",styles:"cursor:pointer;display:flex;flex-direction:row;margin-bottom:8px;"},O={name:"u8v21p",styles:"cursor:pointer;list-style-type:'none';padding:4px 0px;"},x={name:"1l95nvm",styles:"margin:0;padding:0;"},v=function(t){var e=t.category,n=t.categoryOfSelectedTitle,o=t.postTitles,a=Object(r.useState)(!1),s=Object(c.a)(a,2),l=s[0],d=s[1];Object(r.useEffect)((function(){d(e===n)}),[e,n]);var p=Object(r.useCallback)((function(){return d(!l)}),[l]);return Object(i.c)(r.Fragment,null,Object(i.c)("div",{css:j,onClick:p},Object(i.c)("h3",{css:h},e),Object(i.c)("div",{css:Object(i.b)("animation:",l?b:m," 0.5s forwards;")},Object(i.c)(u.a,null))),l&&Object(i.c)("ul",{css:x},o.map((function(t){var e=t.path,n=t.title;return Object(i.c)("li",{key:t.id,css:O},Object(i.c)("a",{href:"/blog".concat(e),style:{textDecoration:"none"}},Object(i.c)("span",{css:g},n)))}))))},y={name:"1mh511h",styles:"padding:20px 0px;"},w=function(t){var e=t.categories,n=t.categoryOfSelectedTitle;return Object(i.c)("div",{css:y},e.map((function(t,e){return Object(i.c)(v,Object(s.a)({key:e.toString()},t,{categoryOfSelectedTitle:n}))})))},k=n("Ng2+"),E=function(){var t=Object(r.createRef)(),e={}.GATSBY_COMMENT_REPO;return Object(r.useEffect)((function(){if(t){var e,n=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"shhong7757/shhong7757.github.io",label:"comment","issue-term":"pathname",theme:"github-light",crossOrigin:"anonymous",async:"true"}).forEach((function(t){var e=Object(c.a)(t,2),i=e[0],r=e[1];n.setAttribute(i,r)})),null===(e=t.current)||void 0===e||e.appendChild(n)}}),[e]),Object(i.c)("div",{ref:t})};E.displayName="Utterances";var z=E,M=n("wahk"),S=n.n(M),q=n("HjZe"),T=n.n(q),H=(n("+pfR"),{name:"17wnfjw",styles:"margin-left:48px;@media (max-width:1024px){margin-left:0;}"}),L={name:"1vk5qsk",styles:"display:grid;grid-template-columns:280px 1fr;margin:0px auto;max-width:1200px;@media (max-width:1024px){grid-template-columns:1fr;}"},R={name:"18mgonu",styles:"padding:0px 20px;"},C={name:"626vhr",styles:"@media (min-width:1024px){height:calc(100vh - 61px);overflow-y:auto;padding-right:20px;position:sticky;top:61px;}@media (max-width:1023px){background-color:#f7f7f7;padding:0px 20px;z-index:100;}"},I={name:"1rf96ts",styles:"height:100%;overflow-y:auto;overflow-x:hidden;"},N={name:"2kfk43",styles:"align-items:ceter;background-color:white;border-bottom-color:#cecece;border-bottom-style:solid;border-bottom-width:1px;display:flex;line-height:24px;padding:8px 20px;position:sticky;top:61px;"},F={name:"1tv31xt",styles:"font-weight:700;font-size:60px;line-height:65px;margin:20px 0px 4px 0px;"},B={name:"1m01c8l",styles:"height:24px;width:24px;"},P={name:"1y6ic72",styles:"margin-left:10px;"},_={name:"l57rop",styles:"padding-bottom:10px;"},A={name:"1l6s9wh",styles:"cursor:pointer;position:fixed;width:56px;height:56px;border-radius:50%;bottom:20px;right:20px;background-color:black;transition:bottom 0.2s,opacity 0.2s;"},J={name:"ci9ou1",styles:"cursor:pointer;bottom:-56px;transition:bottom 0.2s,opacity 0.2s;"},V={name:"19midj6",styles:"padding:16px;"},W=(e.default=function(t){var e=t.data,n=Object(r.useState)(!1),s=Object(c.a)(n,2),l=s[0],d=s[1],u=Object(r.useState)(!1),p=Object(c.a)(u,2),f=p[0],b=p[1],m=Object(r.useState)(!1),h=Object(c.a)(m,2),g=h[0],j=h[1],O=e.allMarkdownRemark.group,x=e.markdownRemark,v=x.frontmatter,y=v.title,E=v.category,M=v.date,q=x.html,W=o(),Y=(W.height,W.width),D=a(),K=Object(r.useMemo)((function(){return O.map((function(t){return{category:t.category,postTitles:t.edges.map((function(t){var e=t.node,n=e.id,c=e.frontmatter;return{id:n,title:c.title,path:c.path}}))}}))}),[O]),U=Object(r.useMemo)((function(){return!(!l&&g)}),[l,g]);Object(r.useEffect)((function(){j(!!(Y&&Y<1024))}),[Y]),Object(r.useEffect)((function(){b(D>0)}),[D]),Object(r.useEffect)((function(){return d(!1)}),[g]);var Z=Object(r.useCallback)((function(){return d(!l)}),[l]),G=Object(r.useCallback)((function(){window.scroll({top:0,behavior:"smooth"})}),[]),Q=Object(r.useMemo)((function(){return l?Object(i.b)(C," box-sizing:border-box;height:100%;left:0px;overflow-y:auto;overscroll-behavior:contain;position:fixed;width:100%;"):C}),[l,g]);return Object(i.c)(k.a,null,g&&Object(i.c)("div",{css:N},Object(i.c)("span",{css:B,onClick:Z},Object(i.c)(T.a,null)),Object(i.c)("span",{css:P},E)),Object(i.c)("main",{css:R},Object(i.c)("div",{css:L},Object(i.c)("div",{css:Q},Object(i.c)("nav",{css:I},U&&Object(i.c)(w,{categories:K,categoryOfSelectedTitle:E}))),Object(i.c)("article",{css:H},Object(i.c)("div",{className:"blog-post-container"},Object(i.c)("div",{className:"blog-post"},Object(i.c)("div",{css:_},Object(i.c)("h1",{css:F},y),Object(i.c)("span",null,"🗓",M)),Object(i.c)("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:q}})),Object(i.c)(z,null))))),Object(i.c)("div",{css:f?A:J,onClick:G},Object(i.c)("div",{css:V},Object(i.c)(S.a,{fill:"white",width:24,height:24}))))},"3856302063")},wahk:function(t,e,n){var c=n("q1tI");function i(t){return c.createElement("svg",t,[c.createElement("path",{d:"M0 0h24v24H0z",fill:"none",key:0}),c.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",key:1})])}i.defaultProps={height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-f49d126037740b0c234e.js.map