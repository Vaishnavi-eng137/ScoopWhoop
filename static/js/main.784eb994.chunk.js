(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(13),l=c.n(s),i=(c(19),c(20),c(11)),r=c.n(i),o=c(12),j=c(14),d=c(8),b=c(3),h=c(4),p=c(0);var x=function(e){var t=e.curElem;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{src:t.feature_img}),Object(p.jsx)("div",{className:"title",children:Object(p.jsx)("p",{children:t.title})}),Object(p.jsxs)("div",{style:{padding:"5px"},children:[Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(p.jsx)("p",{style:{fontWeight:"bolder",fontSize:"20px"},children:t.cat_display[0].category_display}),Object(p.jsx)("p",{style:{fontSize:"12px"},children:t.auth_display.display_name})]}),Object(p.jsx)("div",{style:{display:"flex",alignItems:"center",height:"10px"},children:Object(p.jsxs)("p",{style:{fontWeight:"lighter",fontSize:"10px",color:"Background"},children:[Math.ceil(Math.abs(new Date-new Date(t.pub_date))/864e5)," ","days ago | ",t.readtime]})})]})]})};var u=function(){return Object(p.jsx)("div",{className:"imageBox",children:Object(p.jsx)("img",{src:"https://t.ly/nqVs",className:"img-fluid",width:"100%",style:{objectFit:"cover",objectPosition:"top"}})})};var v=function(){return Object(p.jsx)("div",{className:"fixed-top",children:Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg nvbar justify-content-between",children:[Object(p.jsx)("img",{src:"https://s4.scoopwhoop.com/anj/sw120-x-120/682842409.png",height:"50px",width:"50px",style:{padding:".3rem"}}),Object(p.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{class:"navbar-toggler-icon"})}),Object(p.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNav",children:Object(p.jsxs)("ul",{class:"navbar-nav",children:[Object(p.jsx)("li",{class:"nav-item active",children:Object(p.jsx)("a",{class:"nav-link",href:"#",children:"TRENDING"})}),Object(p.jsx)("li",{class:"nav-item",children:Object(p.jsx)("a",{class:"nav-link",href:"#",children:"VIDEOS"})}),Object(p.jsx)("li",{class:"nav-item",children:Object(p.jsx)("a",{class:"nav-link",href:"#",children:"STORIES"})}),Object(p.jsx)("li",{class:"nav-item",children:Object(p.jsx)("a",{class:"nav-link ",href:"#",children:"QUIZZES"})}),Object(p.jsx)("li",{class:"nav-item",children:Object(p.jsx)("a",{class:"nav-link ",href:"#",children:"MEMES"})})]})}),Object(p.jsxs)("div",{className:"sideIcon",children:[Object(p.jsx)(b.a,{icon:h.d}),Object(p.jsx)(b.a,{icon:h.b}),Object(p.jsx)(b.a,{icon:h.c})]})]})})};var O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),l=Object(d.a)(s,2),i=l[0],O=l[1],g=Object(n.useState)(0),f=Object(d.a)(g,2),m=f[0],y=f[1],w=Object(n.useRef)(null),N=function(){var e=Object(j.a)(r.a.mark((function e(){var t,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.scoopwhoop.com/api/v4/read/all/?offset=".concat(m,"&limit=12"));case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,a([].concat(Object(o.a)(c),Object(o.a)(s.data))),console.log(null===(t=w.current)||void 0===t?void 0:t.clientHeight);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N()}),[m]),Object(p.jsxs)("div",{ref:w,className:"Mainpage",onScroll:function(e){console.log(e.currentTarget.scrollTop);var t=e.target;t.scrollHeight-t.scrollTop-t.clientHeight<10&&(console.log(t.scrollTop,"top"),console.log(t.clientHeight,"clientheight"),console.log(t.scrollHeight,"scrollheight"),console.log("end"),y((function(e){return e+8}))),t.scrollTop>30?O(!0):O(!1)},children:[Object(p.jsx)(v,{}),Object(p.jsx)(u,{}),Object(p.jsx)("div",{className:"cardDisplay",children:c.map((function(e){return Object(p.jsx)(x,{curElem:e})}))}),i&&Object(p.jsx)("div",{className:"scrollUp",onClick:function(){w.current.scrollTo({top:0,behavior:"smooth"})},children:Object(p.jsx)(b.a,{icon:h.a})})]})};var g=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(O,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),f()}},[[28,1,2]]]);
//# sourceMappingURL=main.784eb994.chunk.js.map