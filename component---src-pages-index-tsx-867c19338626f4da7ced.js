(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"11+e":function(t,e,a){"use strict";var n=a("qKvR"),i=a("Wbzz"),o=a("PYQj"),c={name:"16iqw5x",styles:"font-size:24px;"},r={name:"1y6ic72",styles:"margin-left:10px;"},s=function(t){var e=t.postTitle,a=e.title,s=e.date,l=e.path,u=e.tags;return Object(n.a)(i.Link,{to:"".concat(l),style:{textDecoration:"none"}},Object(n.a)("span",{css:c},a),Object(n.a)("span",{css:r},s),Object(n.a)(o.a,{tags:u}))},l={name:"1l95nvm",styles:"margin:0;padding:0;"},u={name:"155za0w",styles:"list-style-type:none;"},b=function(t){var e=t.postTitles;return Object(n.a)("ul",{css:l},e.map((function(t){return Object(n.a)("li",{key:t.id,css:u},Object(n.a)(s,{postTitle:t}))})))};e.a=b},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"shhong7757.github.io"}}}}')},"Ng2+":function(t,e,a){"use strict";var n=a("IRj2"),i=a("q1tI"),o=a.n(i),c=a("qKvR"),r=a("Wbzz"),s={name:"gvap3q",styles:"display:grid;grid-template-columns:1fr auto;"},l=function(t){var e=t.siteTitle;return Object(c.a)("header",{style:{marginBottom:"1.45rem"}},Object(c.a)("div",{style:{margin:"0 auto",maxWidth:1250,padding:"1.45rem 1.0875rem"}},Object(c.a)("div",{css:s},Object(c.a)("h1",{style:{margin:0}},Object(c.a)(r.Link,{to:"/",style:{color:"black",textDecoration:"none"}},e))),Object(c.a)("nav",null,Object(c.a)(r.Link,{to:"/about",activeStyle:{color:"hotpink"},style:{color:"black",textDecoration:"none",fontSize:20,fontWeight:"bold",marginRight:10}},"/About"),Object(c.a)(r.Link,{to:"/blog",activeStyle:{color:"hotpink"},style:{color:"black",fontSize:20,fontWeight:"bold",textDecoration:"none",marginRight:10}},"/Blog"),Object(c.a)(r.Link,{to:"/tags",activeStyle:{color:"hotpink"},style:{color:"black",fontSize:20,fontWeight:"bold",textDecoration:"none"}},"/Tags"))))},u=function(t){var e=t.children,a=n.data;return Object(c.a)(o.a.Fragment,null,Object(c.a)(l,{siteTitle:a.site.siteMetadata.title}),Object(c.a)("div",{style:{margin:"0 auto",maxWidth:1250,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},Object(c.a)("main",null,e),Object(c.a)("footer",null)))};e.a=u},PYQj:function(t,e,a){"use strict";var n=a("iYmT"),i=a("qKvR"),o=function(t){var e=t.tag;return Object(i.a)("span",null,"🔖 ",e)},c=function(t){var e=t.tags,a=t.vertical,c=void 0!==a&&a;return Object(i.a)("div",null,e.map((function(t,e){return Object(i.a)("span",{key:e.toString(),css:Object(n.a)({marginRight:10,display:c?"block":"inline-bl"})},Object(i.a)(o,{tag:t}))})))};e.a=c},QeBL:function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return s}));var n=a("q1tI"),i=a("Ng2+"),o=a("11+e"),c=a("ytpH"),r=a("qKvR");e.default=function(t){var e=t.data,a=Object(n.useMemo)((function(){return e.allMarkdownRemark.edges.map((function(t){var e=t.node,a=e.id,n=e.frontmatter,i=n.title,o=n.date,c=n.path,r=n.tags;return Object.assign({date:o,id:a,path:c,title:i,tags:r})}))}),[e]);return Object(r.a)(i.a,null,Object(r.a)(c.a,{title:"Home"}),"Recent Post",Object(r.a)(o.a,{postTitles:a}))};var s="3878010878"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-867c19338626f4da7ced.js.map