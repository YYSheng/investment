(function(t){function e(e){for(var r,u,i=e[0],c=e[1],l=e[2],s=0,f=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"d39cef65"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4753:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),l=c.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")},on:{click:t.onClick}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Gold Investment App"}})],1)},f=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("div",{staticClass:"div-input"},[n("div",[t._v("输入API：")]),n("input",{staticClass:"input",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:t.url}})]),n("p",[t._v("测试使用输入的API跳转WhatsApp与指定人员通讯功能")]),n("a",{attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v("点我跳转")])])},m=[],h={name:"HelloWorld",data:function(){return{url:"https://api.whatsapp.com/send?phone=+8615003878847&text=Hello"}},props:{msg:String}},v=h,b=(n("eb18"),Object(u["a"])(v,d,m,!1,null,"42562b7e",null)),g=b.exports,y={name:"Home",components:{HelloWorld:g},methods:{onClick:function(){this.$router.push({path:"/About"})}}},w=y,_=Object(u["a"])(w,p,f,!1,null,null,null),j=_.exports;r["a"].use(s["a"]);var O=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=new s["a"]({mode:"history",base:"",routes:O}),P=x,k=n("2f62");r["a"].use(k["a"]);var C=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:P,store:C,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"static/img/logo.3944a9db.png"},eb18:function(t,e,n){"use strict";n("4753")}});