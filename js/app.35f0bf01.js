(function(e){function n(n){for(var r,o,s=n[0],u=n[1],i=n[2],d=0,l=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(l.length)l.shift()();return c.push.apply(c,i||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var s=t[o];0!==a[s]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-15753c54":"53534166","chunk-2d22d746":"968565d6","chunk-499e5cc2":"8706b1ee","chunk-503b0a0e":"d3fccacf","chunk-5ed8fb21":"cefb0ac2","chunk-8e220066":"efa360c4","chunk-183d2ff4":"aec11bb9","chunk-1bdeb8f2":"5dd528c9"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-15753c54":1,"chunk-499e5cc2":1,"chunk-503b0a0e":1,"chunk-5ed8fb21":1,"chunk-8e220066":1,"chunk-183d2ff4":1,"chunk-1bdeb8f2":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-15753c54":"ea9ee22f","chunk-2d22d746":"31d6cfe0","chunk-499e5cc2":"0931f054","chunk-503b0a0e":"744a03f3","chunk-5ed8fb21":"b1fe537d","chunk-8e220066":"a9ef1966","chunk-183d2ff4":"5e138669","chunk-1bdeb8f2":"bb9d1ed7"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===a))return n()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],d=i.getAttribute("data-href");if(d===r||d===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var l=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"595f":function(e,n,t){},6861:function(e,n,t){},"702e":function(e,n,t){"use strict";var r=t("78fd"),o=t.n(r);o.a},"78fd":function(e,n,t){},"9aa9":function(e,n,t){"use strict";var r=t("6861"),o=t.n(r);o.a},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app"},[t("div",{staticClass:"center-container"},[t("transition",{attrs:{name:"fade"}},[e.animateEnd?t("Navbar"):e._e()],1),t("transition",{attrs:{name:"fade"}},[e.showBackground&&"Home"==e.$route.name?t("img",{staticClass:"background",attrs:{src:e.background}}):e._e(),e.showBackground&&"Home"!=e.$route.name?t("div",{staticClass:"background",style:"background-image: linear-gradient(to top, #000 1%, rgba(0, 0, 0, 0)), url("+e.background+")"}):e._e()]),t("div",{staticClass:"center-box"},[t("transition",{attrs:{name:"fade"}},[e.showFirst?t("h1",[e._v(e._s(e.titleText))]):e._e()]),t("transition",{attrs:{name:"fade"}},[e.showSecond?t("h1",{staticClass:"special"},[e._v("sotap.dev")]):e._e()]),t("transition",{attrs:{name:"fade"}},[e.showThird?t("h1",[e._v("你可以在这里找到基础层面的帮助和信息")]):e._e()]),t("transition",{attrs:{name:"fade"}},[e.animateEnd?t("div",{staticClass:"inner-content"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1):e._e()])],1),t("Footer")],1)])},a=[],c=(t("b0c0"),t("d3b7"),t("96cf"),t("1da1")),s=r["a"].extend({data:function(){return{titleText:"嘿，",showFirst:!1,showSecond:!1,showThird:!1,showBackground:!1,animateEnd:!1,background:"https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-03-23_16.02.02.jpg"}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("no"!=e.$cookies.get("animation")){n.next=7;break}return n.next=3,e.sleep(200);case 3:e.showBackground=!0,e.animateEnd=!0,n.next=34;break;case 7:return e.showFirst=!0,n.next=10,e.sleep(900);case 10:return e.showFirst=!1,e.titleText="欢迎来到",n.next=14,e.sleep(900);case 14:return e.showFirst=!0,n.next=17,e.sleep(1e3);case 17:return e.showFirst=!1,n.next=20,e.sleep(500);case 20:return e.showSecond=!0,n.next=23,e.sleep(1500);case 23:return e.showThird=!0,n.next=26,e.sleep(2e3);case 26:return e.showThird=!1,"Home"!=e.$route.name&&(e.showSecond=!1),e.showBackground=!0,n.next=31,e.sleep(500);case 31:e.animateEnd=!0,e.$cookies.config("30d"),e.$cookies.set("animation","no");case 34:case"end":return n.stop()}}),n)})))()},methods:{sleep:function(e){return new Promise((function(n){setTimeout((function(){n(null)}),e)}))}},components:{Footer:function(){return t.e("chunk-499e5cc2").then(t.bind(null,"fd2d"))},Navbar:function(){return t.e("chunk-8e220066").then(t.bind(null,"d178"))}},watch:{$route:function(e){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.showBackground=!1,t.next=3,n.sleep(100);case 3:return n.background=null!==(r=e.meta.background)&&void 0!==r?r:n.background,t.next=6,n.sleep(100);case 6:n.showBackground=!0;case 7:case"end":return t.stop()}}),t)})))()}}}),u=s,i=(t("9aa9"),t("2877")),d=Object(i["a"])(u,o,a,!1,null,"70bb433a",null),l=d.exports,f=t("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=t("8c4f"),p=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("div",{staticClass:"hero-text"},[t("span",{staticClass:"hero-wrapper"},[t("h1",{staticClass:"hero"},[e._v("Build Our World Together.")])]),t("p",[e._v(" 一起造"),t("ruby",[e._v("轮"),t("rt",[e._v("lún")]),e._v("子"),t("rt",[e._v("zi")])]),e._v("让世界变得更好吧 ")])])])}],g=r["a"].extend({mounted:function(){this.$anime.timeline({loop:!1}).add({targets:".hero",translateY:[100,0],translateZ:0,opacity:[0,1],easing:"easeOutExpo",duration:1400,delay:function(e,n){return 300+30*n}})}}),b=g,k=(t("702e"),Object(i["a"])(b,p,m,!1,null,"b9ba6df0",null)),v=k.exports;r["a"].use(h["a"]);var w=[{path:"/",name:"Home",component:v,meta:{background:"https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-03-23_16.02.02.jpg"}},{path:"/about",name:"About",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))},meta:{background:"https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-03-23_16.05.13.jpg"}},{path:"/resources",name:"Resources",component:function(){return t.e("chunk-5ed8fb21").then(t.bind(null,"93b9"))},meta:{background:"https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-03-23_16.04.39.jpg"}},{path:"/agreement",name:"Agreement",component:function(){return t.e("chunk-15753c54").then(t.bind(null,"a6e3"))},meta:{background:"https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-08-03_21.27.27.jpg"}},{path:"/contact",name:"Contact",component:function(){return t.e("chunk-503b0a0e").then(t.bind(null,"b8fa"))},meta:{background:"https://sotapstatic-1253679544.cos.ap-hongkong.myqcloud.com/img/2020-08-03_21.28.01.jpg"}}],y=new h["a"]({mode:"hash",base:"/",routes:w}),_=y,x=(t("fad7"),t("2b27")),j=t.n(x),C=t("1209"),E=function(e){e.prototype.$anime=C["a"]},O=E;t("595f"),t("c789");r["a"].use(j.a),r["a"].use(O),r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(l)}}).$mount("#app")},fad7:function(e,n,t){}});
//# sourceMappingURL=app.35f0bf01.js.map