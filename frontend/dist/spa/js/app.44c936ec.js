(function(e){function t(t){for(var o,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={1:0},r={1:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{2:"6bcc6e35",3:"5dc23eb6",4:"2076b0a7",5:"470b28cc",6:"f6940f9d",7:"51373e0f",8:"118d3c74",9:"46d57ae4"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={2:1,3:1,4:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"3a7ed9c8",3:"927f0217",4:"83c6abc8",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",r=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"ActionLogin",(function(){return k})),n.d(o,"ActionLogout",(function(){return N})),n.d(o,"ActionAuthenticated",(function(){return L}));var a={};n.r(a),n.d(a,"getToken",(function(){return I}));var r={};n.r(r),n.d(r,"ActionUsersStore",(function(){return F}));var c={};n.r(c),n.d(c,"ActionGetFinancial",(function(){return te})),n.d(c,"ActionStoreFinancial",(function(){return ne})),n.d(c,"ActionUpdateFinancial",(function(){return oe})),n.d(c,"ActionEditFinancial",(function(){return ae})),n.d(c,"ActionSetDataSelecionada",(function(){return re})),n.d(c,"ActionStoreFinancialBillPayment",(function(){return ce})),n.d(c,"ActionDeleteFinancialBillPayment",(function(){return ie}));var i={};n.r(i),n.d(i,"ActionSetDataSelecionada",(function(){return de}));n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d");var s=n("2b0e"),u=n("1f91"),l=n("42d2"),d=n("b05d");s["default"].use(d["a"],{config:{},lang:u["a"],iconSet:l["a"]});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},m=[],h=n("ded3"),p=n.n(h),g=n("2f62"),b={name:"App",beforeMount(){console.log("Intellect"),this.ActionAuthenticated()},methods:p()({},Object(g["b"])("Auth",["ActionAuthenticated"]))},A=b,E=n("2877"),v=Object(E["a"])(A,f,m,!1,null,null,null),S=v.exports,y={user:{},token:!1,erro:!1},T={SET_ERRO(e,t){e.erro=t},SET_TOKEN(e,t){localStorage.setItem("token",t),e.token=t}},_=n("bc3a"),w=n.n(_);const O="'https://backintellect.alvitre.com.br'",P={baseURL:O,timeout:1e3};class R{login(e){return new Promise((async function(t,n){const o="/login";return w.a.post(o,e,P).then((e=>{t(e)})).catch((e=>{n(e.response)}))}))}logout(){return new Promise((async function(e,t){const n="/logout";return w.a.get(n,P).then((t=>{e(t)})).catch((e=>{t(e.response)}))}))}}const C=new R,k=({commit:e},t)=>C.login(t).then((t=>(e("SET_ERRO",""),e("SET_TOKEN",t.data.token),t))).catch((t=>{console.log("contem erro "+t.data.erro),e("SET_ERRO",t.data.erro),e("SET_TOKEN","")})),N=({commit:e},t)=>C.logout().then((()=>{e("SET_ERRO",""),e("SET_TOKEN","")})),L=({commit:e})=>{const t=localStorage.getItem("token");t&&""!=t&&void 0!=t&&"undefined"!=t&&0!=t?(e("SET_ERRO",""),e("SET_TOKEN",t)):(e("SET_ERRO",""),e("SET_TOKEN",""))},I=()=>"noting";var D={namespaced:!0,state:y,actions:o,getters:a,mutations:T},j={user:{},token:!1,erro:!1},$=n("bebd"),x=n.n($);const U="'https://backintellect.alvitre.com.br'";class B{store(e){return new Promise((async function(t,n){const o={baseURL:U,timeout:1e3},a="/users";return w.a.post(a,e,o).then((e=>{t(e)})).catch((e=>{n(e.response)}))}))}}const K=new B,F=({commit:e},t)=>K.store(t).then((t=>(console.log(t),e("Auth/SET_ERRO","",{root:!0}),e("Auth/SET_TOKEN",t.token,{root:!0}),t))).catch((t=>{console.log("contem erro "+t.data.erro),e("Auth/SET_ERRO",t.data.erro,{root:!0}),e("Auth/SET_TOKEN","",{root:!0})}));var G=n("933e"),M={namespaced:!0,state:j,actions:r,getters:G,mutations:x.a},q={categoriaContas:{},editarContaAPagar:{}},z={SET_CATEGORIA_CONTAS(e,t){e.categoriaContas=t},SET_DATA_SELECIONADA(e,t){e.dataSelecionada=t},SET_EDITAR_CONTA_A_PAGAR(e,t){e.editarContaAPagar=t}};const V="'https://backintellect.alvitre.com.br'";console.log(V);const J=localStorage.getItem("token"),H={baseURL:V,timeout:1e3,headers:{Authorization:`Bearer ${J}`}};class Q{async get(e){return console.log(V+e),w.a.get(e,H).then((e=>e)).catch((e=>(console.log(e),console.log(e.response),e)))}}var W=Q;const X=new W,Y="'https://backintellect.alvitre.com.br'";class Z{async get(e){const t=`/financial/${e}`;return await X.get(t)}store(e){const t=localStorage.getItem("token");return new Promise((async function(n,o){const a={baseURL:Y,timeout:1e3,headers:{Authorization:`Bearer ${t}`}},r="/financial/billstopay";return w.a.post(r,e,a).then((e=>{e?n(e):o(e)})).catch((function(e){console.log(e),o(!1)}))}))}update(e){const t=localStorage.getItem("token");return new Promise((async function(n,o){const a={baseURL:Y,headers:{Authorization:`Bearer ${t}`}},r=`/financial/billstopay/${e.id}/${e.data_pagamento}`;return w.a.put(r,e,a).then((e=>{e.data?(console.log(e),n(e)):o(e)})).catch((function(e){o(e)}))}))}edit(e){return new Promise((async function(t,n){const o={baseURL:Y},a=`/financial/billstopay/${e.id}/${e.dataselecionada}`;return w.a.get(a,o).then((e=>{t(e)})).catch((function(e){console.log(e),n(e)}))}))}storeContaPaga(e){return new Promise((async function(t,n){const o={baseURL:Y,timeout:1e3},a="/financial/contapaga";return w.a.post(a,e,o).then((e=>{e?t(e):n(e)})).catch((function(e){console.log(e),n(!1)}))}))}deleteContaPaga(e){return console.log(e),new Promise((async function(t,n){const o=`${Y}/financial/contapaga/${e.contas_a_pagar_id}/${e.data_pagamento}`;return w.a.delete(o).then((e=>{t(e.data)})).catch((function(e){console.log(e),n(!1)}))}))}}const ee=new Z,te=({commit:e},t)=>{ee.get(t).then((t=>{e("SET_CATEGORIA_CONTAS",t.data)}))},ne=({commit:e},t)=>{ee.store(t).then((e=>e))},oe=({commit:e},t)=>ee.update(t),ae=async({commit:e},t)=>ee.edit(t).then((t=>{e("SET_EDITAR_CONTA_A_PAGAR",t.data)})),re=({commit:e},t)=>new Promise((async n=>{e("SET_DATA_SELECIONADA",t),n(!0)})),ce=({commit:e},t)=>{ee.storeContaPaga(t).then((e=>e))},ie=({commit:e},t)=>ee.deleteContaPaga(t).then((e=>e));var se={state:q,actions:c,mutations:z},ue={dataSelecionada:""},le={SET_DATA_SELECIONADA(e,t){e.dataSelecionada=t}};const de=({commit:e},t)=>new Promise((async n=>{e("SET_DATA_SELECIONADA",t),n()}));var fe={state:ue,actions:i,mutations:le},me=function(){const e=new g["a"].Store({modules:{Auth:D,Financeiro:se,Calendario:fe,Users:M},strict:!1});return e};s["default"].use(g["a"]);var he=n("8c4f"),pe=n("bfaa"),ge=n.n(pe);function be(){const e=localStorage.getItem("token");return!(!e||""==e||void 0==e||"undefined"==e)}async function Ae(e,t,n){"login"!==e.name&&!1===be()&&n({name:"login"}),"login"===e.name&&!0===be()?n({name:"financeiro"}):n()}var Ee=Ae;const ve={};ve.auth=Ee;var Se=ve;const ye=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"financeiro",name:"financeiro",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"d047")),beforeEnter:ge()([Se.auth])},{path:"financeiro/adicionarconta",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"4b07")),name:"financeiroadicionarconta"},{path:"financeiro/editarconta",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"3727")),name:"financeiroeditarconta"},{path:"/",component:()=>n.e(4).then(n.bind(null,"3551")),beforeEnter:ge()([Se.auth]),name:"login"},{path:"/cadastro",component:()=>n.e(8).then(n.bind(null,"d2d7")),name:"cadastro"},{path:"/aniversariosmensais",component:()=>n.e(7).then(n.bind(null,"3339"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"e51e"))}];var Te=ye;s["default"].use(he["a"]);var _e=function(){const e=new he["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Te,mode:"hash",base:""});return e},we=async function(){const e="function"===typeof me?await me({Vue:s["default"]}):me,t="function"===typeof _e?await _e({Vue:s["default"],store:e}):_e;e.$router=t;const n={router:t,store:e,render:e=>e(S),el:"#q-app"};return{app:n,store:e,router:t}};s["default"].prototype.$axios=w.a;const Oe="";async function Pe(){const{app:e,store:t,router:n}=await we();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},r=window.location.href.replace(window.location.origin,""),c=[void 0];for(let u=0;!1===o&&u<c.length;u++)if("function"===typeof c[u])try{await c[u]({app:e,router:n,store:t,Vue:s["default"],ssrContext:null,redirect:a,urlPath:r,publicPath:Oe})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&new s["default"](e)}Pe()},"7e6d":function(e,t,n){},"933e":function(e,t){},bebd:function(e,t){}});