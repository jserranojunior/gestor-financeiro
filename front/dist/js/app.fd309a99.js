(function(t){function a(a){for(var n,i,s=a[0],c=a[1],l=a[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(p.length)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},o=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"30c9":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);var n={};e.r(n),e.d(n,"authenticate",(function(){return _})),e.d(n,"getUser",(function(){return O})),e.d(n,"ActionCheckToken",(function(){return y})),e.d(n,"ActionSetToken",(function(){return w})),e.d(n,"Logout",(function(){return A}));var r={};e.r(r),e.d(r,"hasToken",(function(){return j}));var o={};e.r(o),e.d(o,"ActionAddContasAPagar",(function(){return S})),e.d(o,"ActionGetCategoriasContasAPagar",(function(){return E})),e.d(o,"ActionSetDataSelecionada",(function(){return D})),e.d(o,"ActionSetEditarContaAPagar",(function(){return T}));var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},c=[],l=e("2877"),u={},d=Object(l["a"])(u,s,c,!1,null,null,null),p=d.exports,f=e("8c4f"),m=(e("b0c0"),e("96cf"),e("1da1")),v=e("2f62"),g={token:"",user:{}},b={AUTHENTICATE:function(t,a){t.token=a},USER:function(t,a){t.user=a}},h=(e("d3b7"),e("e6cf"),e("bc3a")),C=e.n(h),_=function(t,a){var e=t.dispatch;return new Promise(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:C.a.post("http://127.0.0.1:3333/authenticate",a).then((function(t){e("ActionSetToken",t.data.token),n()})).catch((function(t){console.log(t),console.log(t.response),r(t)}));case 1:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}())},O=function(t){var a=t.commit,e=t.state;return new Promise(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n,r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o={baseURL:"http://localhost:3333",timeout:1e3,headers:{Authorization:"Bearer "+e.token}},C.a.get("/user",o).then((function(t){a("USER",t.data),n()})).catch((function(t){console.log(t),console.log(t.response),r(t)}));case 2:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}())},y=function(t){var a=t.dispatch,e=t.state;if(e.token)return Promise.resolve(e.token);var n=localStorage.getItem("token");return n&&"undefined"!=n&&"null"!=n&&""!=n||(n=!1),n?n||"undefined"!==n||""!==n||"null"!==n?a("ActionSetToken",n):void 0:Promise.reject(new Error("Token Inválido"))},w=function(t,a){var e=t.commit,n=t.dispatch;localStorage.setItem("token",a),e("AUTHENTICATE",a),n("getUser","")},A=function(t){var a=t.commit;localStorage.setItem("token",""),a("AUTHENTICATE",""),a("USER","")},j=function(){var t=localStorage.getItem("token");return t},P={state:g,actions:n,getters:r,mutations:b,namespaced:!0},k={categoriaContas:{},dataSelecionada:"",editarContaAPagar:{}},x={SET_CATEGORIA_CONTAS:function(t,a){t.categoriaContas=a},SET_DATA_SELECIONADA:function(t,a){t.dataSelecionada=a},SET_EDITAR_CONTA_A_PAGAR:function(t,a){t.editarContaAPagar=a}},S=function(t,a){var e=t.dispatch;return new Promise(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n,r){var o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o={baseURL:"http://localhost:3333",timeout:1e3,headers:{Authorization:"Bearer "+$.state.Auth.token}},i="/contasapagar",C.a.post(i,a,o).then((function(){e("ActionGetCategoriasContasAPagar"),n()})).catch((function(t){console.log(t),console.log(t.response),r(t)}));case 3:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}())},E=function(t){var a=t.commit,e=t.state;return new Promise(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n,r){var o,i,s,c,l,u,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o={baseURL:"http://localhost:3333",timeout:1e3,headers:{Authorization:"Bearer "+$.state.Auth.token}},""==e.dataSelecionada?(s=new Date,c=s.getMonth()+1,l=s.getFullYear(),u=c<10?"0"+c:c,i=l+"-"+u):i=e.dataSelecionada,d="/financeiro/"+i,C.a.get(d,o).then((function(t){a("SET_CATEGORIA_CONTAS",t.data),n()})).catch((function(t){console.log(t),console.log(t.response),r(t)}));case 4:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}())},D=function(t,a){var e=t.commit;return new Promise(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e("SET_DATA_SELECIONADA",a),n();case 2:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}())},T=function(t,a){var e=t.commit;return new Promise(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e("SET_EDITAR_CONTA_A_PAGAR",a),n();case 2:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}())},M={state:k,actions:o,mutations:x};i["default"].use(v["a"]);var $=new v["a"].Store({modules:{Auth:P,Financeiro:M}}),N=function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(a,e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(document.title="Intellect - ".concat(a.name),r=$.getters["Auth/hasToken"],r&&"undefined"!=r&&"null"!=r||(r=!1),"login"===a.name||r){t.next=15;break}return t.prev=4,t.next=7,$.dispatch("Auth/ActionCheckToken");case 7:n({path:a.path}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),n({name:"login"});case 13:t.next=26;break;case 15:if("login"!==a.name||!r){t.next=19;break}n({name:"home"}),t.next=26;break;case 19:if("login"===a.name||!r){t.next=25;break}return t.next=22,$.dispatch("Auth/ActionCheckToken");case 22:n(),t.next=26;break;case 25:"login"!==a.name||r||n();case 26:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(a,e,n){return t.apply(this,arguments)}}(),R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Main",{scopedSlots:t._u([{key:"mainpage",fn:function(){return[t._v(" Bem vindo "+t._s(t.Auth.user.username)+" ")]},proxy:!0}])})],1)},F=[],I=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("ade3")),L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"wrapper"},[e("Header"),e("SideBar"),e("div",{staticClass:"content-wrapper"},[t._m(0),e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-12"},[t._t("mainpage")],2)])])])]),e("aside",{staticClass:"control-sidebar control-sidebar-dark"})],1)])},G=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-header"},[e("div",{staticClass:"container-fluid"})])}],U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("aside",{staticClass:"main-sidebar sidebar-light-info elevation-4",attrs:{id:"sidebarlateral"}},[e("div",{staticClass:"sidebar"},[t._m(0),t._m(1),e("nav",{staticClass:"mt-2"},[e("ul",{staticClass:"nav nav-pills nav-sidebar flex-column",attrs:{"data-widget":"treeview",role:"menu","data-accordion":"false"}},[e("li",{staticClass:"nav-header"},[t._v("ADMIN")]),e("li",{staticClass:"nav-item has-treeview"},[t._m(2),e("ul",{staticClass:"nav nav-treeview"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"financeiro"}}},[e("i",{staticClass:"far fa-circle nav-icon"}),e("p",[t._v("Contas a pagar")])])],1)]),e("ul",{staticClass:"nav nav-treeview"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"adicionarcontaapagar"}}},[e("i",{staticClass:"far fa-circle nav-icon"}),e("p",[t._v("Nova Conta")])])],1)])])])])])])])},H=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"brand-link text-center",attrs:{href:"alvitre.net"}},[e("span",{staticClass:"text-center brand-text font-weight-light"},[t._v("Intellect")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-panel mt-3 pb-3 d-flex"},[e("div",{staticClass:"image"},[e("img",{staticClass:"img-circle elevation-2",attrs:{src:"http://alvitre.net/alvitre/images/programador/jorge.jpg",alt:"User Image"}})]),e("div",{staticClass:"info"},[e("a",{staticClass:"d-block",attrs:{href:"#"}},[t._v("Jorge Serrano Junior")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"nav-icon far fa-dot-circle"}),e("p",[t._v(" Financeiro "),e("i",{staticClass:"fas fa-angle-left right"}),e("span",{staticClass:"badge badge-info right"},[t._v("1")])])])}],J={name:"SideBar",data:function(){return{}},components:{},computed:{},methods:{},watch:{}},B=J,q=Object(l["a"])(B,U,H,!1,null,null,null),z=q.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"main-header navbar navbar-expand navbar-white navbar-light"},[e("ul",{staticClass:"navbar-nav"},[t._m(0),e("li",{staticClass:"nav-item d-none d-sm-inline-block"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home")])])],1),e("li",{staticClass:"nav-item d-none d-sm-inline-block"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/financeiro"}},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Financeiro")])])],1)]),e("ul",{staticClass:"navbar-nav ml-auto"},[t._m(1),t._m(2),e("li",{staticClass:"nav-item"},[t.Auth.token?t._e():e("a",{staticClass:"nav-link",attrs:{"data-widget":"control-sidebar","data-slide":"true",href:"#"}},[e("router-link",{attrs:{to:"/login"}},[e("button",{staticClass:"btn btn-success  btn-sm"},[t._v("Login")])])],1)]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-widget":"control-sidebar","data-slide":"true",href:"#"},on:{click:function(a){return t.sair()}}},[t._m(3)])])])])])},Q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-widget":"pushmenu",href:"#"}},[e("i",{staticClass:"fas fa-bars"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"dropdown",href:"#"}},[e("i",{staticClass:"far fa-comments"}),e("span",{staticClass:"badge badge-danger navbar-badge"},[t._v("3")])]),e("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},[e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item dropdown-footer",attrs:{href:"#"}},[t._v("See All Messages")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link",attrs:{"data-toggle":"dropdown",href:"#"}},[e("i",{staticClass:"far fa-bell"}),e("span",{staticClass:"badge badge-warning navbar-badge"},[t._v("15")])]),e("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-right"},[e("span",{staticClass:"dropdown-item dropdown-header"},[t._v("15 Notifications")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item dropdown-footer",attrs:{href:"#"}},[t._v("See All Notifications")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"d-block text-center",attrs:{href:"#"}},[e("a",{staticClass:"text-danger",attrs:{href:"#"}},[t._v("Sair")])])}];function V(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function K(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?V(Object(e),!0).forEach((function(a){Object(I["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):V(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var W={name:"Header",data:function(){return{}},methods:K({},Object(v["b"])("Auth",["Logout"]),{sair:function(){this.Logout(),this.$router.go("/login")}}),computed:K({},Object(v["c"])({Auth:function(t){return t.Auth}}))},X=W,Z=Object(l["a"])(X,Y,Q,!1,null,"31d0a23c",null),tt=Z.exports,at={name:"Main",components:{SideBar:z,Header:tt},data:function(){return{}},methods:{}},et=at,nt=Object(l["a"])(et,L,G,!1,null,null,null),rt=nt.exports;function ot(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function it(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?ot(Object(e),!0).forEach((function(a){Object(I["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ot(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var st={name:"home",data:function(){return{}},computed:it({},Object(v["c"])({Auth:function(t){return t.Auth}})),components:{Main:rt}},ct=st,lt=Object(l["a"])(ct,R,F,!1,null,null,null),ut=lt.exports,dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Main",{scopedSlots:t._u([{key:"mainpage",fn:function(){return[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"login-box"},[e("div",{staticClass:"login-logo"},[e("a",{attrs:{href:"#"}},[e("b",[t._v("Login")])])]),e("div",{staticClass:"card"},[e("p",[t._v(t._s(t.Auth))]),e("div",{staticClass:"card-body login-card-body"},[e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.email,expression:"fields.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.fields.email},on:{input:function(a){a.target.composing||t.$set(t.fields,"email",a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-envelope"})])])]),e("div",{staticClass:"input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.password,expression:"fields.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.fields.password},on:{input:function(a){a.target.composing||t.$set(t.fields,"password",a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"fas fa-lock"})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"icheck-primary"},[e("input",{attrs:{type:"checkbox",id:"remember"}}),t._v(" Esqueci a senha ")])]),e("div",{staticClass:"col-4"},[e("button",{staticClass:"btn btn-primary btn-block btn-sm",on:{click:function(a){return t.logar()}}},[t._v("LOGAR")])])]),e("div",{staticClass:"social-auth-links text-center mb-3"},[e("p",[t._v("- OR -")]),e("a",{staticClass:"btn btn-block btn-primary",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook mr-2"}),t._v(" Sign in using Facebook ")]),e("a",{staticClass:"btn btn-block btn-danger",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-google-plus mr-2"}),t._v(" Sign in using Google+ ")])]),e("p",{staticClass:"mb-1"},[e("a",{attrs:{href:"forgot-password.html"}},[t._v("I forgot my password")])]),e("p",{staticClass:"mb-0"},[e("a",{staticClass:"text-center",attrs:{href:"register.html"}},[t._v("Register a new membership")])])])])])])]},proxy:!0}])})],1)},pt=[];function ft(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function mt(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?ft(Object(e),!0).forEach((function(a){Object(I["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ft(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var vt={name:"Login",data:function(){return{fields:{}}},beforeMount:function(){this.fields.email="jorgeserranojunior@gmail.com",this.fields.password="carro"},computed:mt({},Object(v["c"])("Auth",{Auth:function(t){return t}})),methods:mt({},Object(v["b"])("Auth",["authenticate"]),{logar:function(){this.authenticate(this.fields)}}),components:{Main:rt},watch:{Auth:{handler:function(){this.Auth.token>""&&this.$router.go("/login")},deep:!0}}},gt=vt,bt=Object(l["a"])(gt,dt,pt,!1,null,null,null),ht=bt.exports,Ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Main",{scopedSlots:t._u([{key:"mainpage",fn:function(){return[e("AddEditContas")]},proxy:!0}])})],1)},_t=[],Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{attrs:{method:"post"},on:{submit:function(a){return a.preventDefault(),a.stopPropagation(),t.submit(a)}}},[t._v(" "+t._s(t.editarContaAPagar)+" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.favorecido,expression:"fields.favorecido"}],staticClass:"form-control",attrs:{type:"text",name:"favorecido",required:"",placeholder:"Favorecido"},domProps:{value:t.fields.favorecido},on:{input:function(a){a.target.composing||t.$set(t.fields,"favorecido",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.descricao,expression:"fields.descricao"}],staticClass:"form-control",attrs:{type:"text",name:"descricao",placeholder:"Descrição"},domProps:{value:t.fields.descricao},on:{input:function(a){a.target.composing||t.$set(t.fields,"descricao",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"mask",rawName:"v-mask",value:"money",expression:"'money'"},{name:"model",rawName:"v-model",value:t.fields.valor,expression:"fields.valor"}],staticClass:"form-control",attrs:{type:"text",name:"valor",required:"",placeholder:"Valor"},domProps:{value:t.fields.valor},on:{input:function(a){a.target.composing||t.$set(t.fields,"valor",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inicio_data_pagamento"}},[t._v("Inicio Pagamento")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inicio_data_pagamento,expression:"inicio_data_pagamento"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Inicio Pagamento",required:"",name:"inicio_data_pagamento"},domProps:{value:t.inicio_data_pagamento},on:{input:function(a){a.target.composing||(t.inicio_data_pagamento=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"fim_data_pagamento"}},[t._v("Fim Pagamento")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.fim_data_pagamento,expression:"fields.fim_data_pagamento"}],staticClass:"form-control",attrs:{type:"date",name:"fim_data_pagamento"},domProps:{value:t.fields.fim_data_pagamento},on:{input:function(a){a.target.composing||t.$set(t.fields,"fim_data_pagamento",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.categorias_contas_a_pagar_id,expression:"categorias_contas_a_pagar_id"}],staticClass:"form-control",attrs:{name:"categorias_contas_a_pagar_id",id:"",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.categorias_contas_a_pagar_id=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"1"}},[t._v("Essenciais")]),e("option",{attrs:{value:"2"}},[t._v("Compras")]),e("option",{attrs:{value:"3"}},[t._v("Urgencias")]),e("option",{attrs:{value:"4"}},[t._v("Lazer")]),e("option",{attrs:{value:"5"}},[t._v("Transporte")]),e("option",{attrs:{value:"6"}},[t._v("Alimentação")]),e("option",{attrs:{value:"7"}},[t._v("Estudos")]),e("option",{attrs:{value:"8"}},[t._v("Avulsos")])])]),e("div",{staticClass:"form-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.tipo_conta,expression:"tipo_conta"}],staticClass:"form-control",attrs:{name:"tipo_conta",id:"",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.tipo_conta=a.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",selected:"",value:"Tipo de Conta"}},[t._v("Tipo de Conta")]),e("option",{attrs:{value:"Extra"}},[t._v("Extra")]),e("option",{attrs:{value:"Fixa"}},[t._v("Fixa")]),e("option",{attrs:{value:"Parcelada"}},[t._v("Parcelada")])])]),e("div",{staticClass:"form-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.forma_pagamento,expression:"forma_pagamento"}],staticClass:"form-control",attrs:{name:"forma_pagamento",required:"",id:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.forma_pagamento=a.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",selected:"",value:"Forma de Pagamento"}},[t._v("Forma de Pagamento")]),e("option",{attrs:{value:"Cartão"}},[t._v("Cartão")]),e("option",{attrs:{value:"Dinheiro"}},[t._v("Dinheiro")]),e("option",{attrs:{value:"Débito"}},[t._v("Débito")]),e("option",{attrs:{value:"Débito Automatico"}},[t._v("Débito Automatico")]),e("option",{attrs:{value:"Terceiro"}},[t._v("Terceiro")])])]),e("div",{staticClass:"card-footer text-center"},[e("div",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal"},on:{click:t.submit}},[t._v("Cadastrar")])])])])},yt=[],wt=e("8865"),At=e.n(wt);function jt(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function Pt(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?jt(Object(e),!0).forEach((function(a){Object(I["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):jt(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var kt={name:"AddEditContas",data:function(){return{dataAtualHoje:"",fields:{},errors:{},loaded:!0,minhadata:"",inicio_data_pagamento:"",categorias_contas_a_pagar_id:1,tipo_conta:"Extra",forma_pagamento:"Cartão"}},directives:{mask:At.a},methods:Pt({},Object(v["b"])(["ActionAddContasAPagar"]),{submit:function(){this.ActionAddContasAPagar(this.fields)}}),beforeMount:function(){this.fields.categorias_contas_a_pagar_id=this.categorias_contas_a_pagar_id,this.fields.tipo_conta=this.tipo_conta,this.fields.forma_pagamento=this.forma_pagamento;var t=new Date;this.dataAtualHoje=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear()},watch:{inicio_data_pagamento:function(){this.fields.inicio_data_pagamento=this.inicio_data_pagamento},categorias_contas_a_pagar_id:function(){this.fields.categorias_contas_a_pagar_id=this.categorias_contas_a_pagar_id},tipo_conta:function(){this.fields.tipo_conta=this.tipo_conta},forma_pagamento:function(){this.fields.forma_pagamento=this.forma_pagamento},editarContaAPagar:{deep:!0,handler:function(){console.log("ta funcioandno")}},dataAtual:function(){this.inicio_data_pagamento=this.dataAtual+"-01"}},computed:Pt({},Object(v["c"])({dataAtual:function(t){return t.Financeiro.dataSelecionada},editarContaAPagar:function(t){return t.Financeiro.editarContaAPagar}}))},xt=kt,St=Object(l["a"])(xt,Ot,yt,!1,null,null,null),Et=St.exports,Dt={name:"AdicionarConta",data:function(){return{}},components:{AddEditContas:Et,Main:rt}},Tt=Dt,Mt=Object(l["a"])(Tt,Ct,_t,!1,null,null,null),$t=Mt.exports,Nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Main",{scopedSlots:t._u([{key:"mainpage",fn:function(){return[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-4"},[e("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v(" Adicionar Conta ")])]),e("div",{staticClass:"col-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("Calendario")],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"})])]),e("div",{staticClass:"col-4"})]),e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Modal title")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[e("AddEditContas")],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("CategoriaContasAPagar")],1),e("div",{staticClass:"col-4"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header categoria-contas-pagar categoria-urgencia text-center"},[t._v(" TOTAIS ")]),e("div",{staticClass:"card-body table-responsive"},[e("table",{staticClass:"table table-sm table-financial table-striped  table-hover"},[e("tr",[e("td",{staticClass:"text-primary"},[t._v(" Contas a pagar ")]),e("td",[t._v(" "+t._s(t._f("money")(t.categoriaContas.TotalGeralContasAPagar))+" ")])])])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header categoria-contas-pagar categoria-estudos text-center"},[t._v(" Caixa / Frelas ")]),e("div",{staticClass:"card-body table-responsive"},[e("table",{staticClass:"table table-sm table-financial table-striped  table-hover"},[e("tr",[e("td",[t._v(" Santander ")]),e("td",[t._v(" R$148,00 ")])])])])])]),e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header categoria-contas-pagar categoria-lazer text-center"},[t._v(" Poupança ")]),e("div",{staticClass:"card-body table-responsive"},[e("table",{staticClass:"table table-sm table-financial table-striped  table-hover"},[e("tr",[e("td",[t._v(" ROUPA / HIGIENE ")]),e("td",[t._v(" R$400,00 ")])])])])])])])])]},proxy:!0}])})],1)},Rt=[],Ft=(e("b680"),e("ac1f"),e("25f0"),e("5319"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},t._l(t.categoriaContas.contasAPagar,(function(a){return e("div",{key:a.id,staticClass:"col-3"},[e("div",{staticClass:"card card-outline card-success"},[e("div",{staticClass:"card-header text-center",class:a.cor},[e("h3",{staticClass:"card-title"},[t._v(t._s(a.nome))]),t._m(0,!0)]),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-sm table-hover"},[t._m(1,!0),e("tbody",[t._l(a.contas_a_pagars,(function(a){return e("tr",{key:a.id,staticClass:"pointer"},[e("td",[t._v(" "+t._s(a.favorecido)+" ")]),e("td",{staticClass:"text-center",attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(e){return t.editarContaAPagar(a.id)}}},t._l(a.valores_contas_a_pagars,(function(a){return e("p",{key:a.id},[t._v(" "+t._s(a.valor)+" ")])})),0),e("td",{staticClass:"text-right"},[e("div",{staticClass:"custom-control custom-switch custom-switch-off-danger custom-switch-on-primary text-right  pointer"},[e("input",{staticClass:"custom-control-input  pointer",attrs:{type:"checkbox",id:a.id}}),e("label",{staticClass:"custom-control-label  pointer",attrs:{for:a.id}})])])])})),e("tr",{staticClass:"font-weight-bold"},[e("td",{attrs:{colspan:"2"}},[t._v("TOTAL")]),e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v(t._s(t._f("money")(a.totalCategoria)))])])],2)])])])])})),0)}),It=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse"}},[e("i",{staticClass:"fas fa-minus"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr")])}];function Lt(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function Gt(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?Lt(Object(e),!0).forEach((function(a){Object(I["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Lt(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var Ut={name:"CategoriaContasAPagar",data:function(){return{editandoContaAPagar:{}}},computed:Gt({},Object(v["c"])({categoriaContas:function(t){return t.Financeiro.categoriaContas}})),methods:Gt({editarContaAPagar:function(t){this.ActionSetEditarContaAPagar(t)}},Object(v["b"])(["ActionGetCategoriasContasAPagar","ActionSetEditarContaAPagar"])),props:{msg:String},beforeMount:function(){this.ActionGetCategoriasContasAPagar()},filters:{money:function(t){if(t){var a=(t/1).toFixed(2).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return"0,00"}}},Ht=Ut,Jt=(e("f961"),Object(l["a"])(Ht,Ft,It,!1,null,null,null)),Bt=Jt.exports,qt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"none"},[e("FunctionalCalendar",{ref:"Calendar",attrs:{newCurrentDate:t.newCurrentDate,"is-modal":!0,configs:t.calendarConfigs},model:{value:t.calendarData,callback:function(a){t.calendarData=a},expression:"calendarData"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col text-center"},[e("div",{staticClass:"btn btn-sm btn-primary  pointer",on:{click:function(a){return t.preMonth()}}},[e("i",{staticClass:"fas fa-chevron-left"})]),e("div",{staticClass:"btn text-bold"},[e("span",[t._v(t._s(t.dataSelecionada))])]),e("div",{staticClass:"btn btn-sm btn-primary  pointer",on:{click:function(a){return t.nexMonth()}}},[e("i",{staticClass:"fas fa-chevron-right"})])])])])},zt=[],Yt=e("479b");function Qt(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function Vt(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?Qt(Object(e),!0).forEach((function(a){Object(I["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Qt(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var Kt={name:"Calendario",methods:Vt({},Object(v["b"])(["ActionSetDataSelecionada","ActionGetCategoriasContasAPagar"]),{preMonth:function(){this.$refs.Calendar.PreMonth()},nexMonth:function(){this.$refs.Calendar.NextMonth()}}),components:{FunctionalCalendar:Yt["a"]},data:function(){return{dataSelecionada:"",newCurrentDate:new Date,calendarData:{},calendarConfigs:{dateFormat:"dd/mm/yyyy",isDatePicker:!0,isModal:!0,monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonthNames:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Seg","Ter","Qua","Qui","Sex","Sab","Dom"]}}},beforeMount:function(){},watch:{calendarData:{handler:function(){var t=this.calendarData.currentDate.getMonth(),a=this.calendarConfigs.monthNames[t],e=this.calendarData.currentDate.getFullYear();this.dataSelecionada=a+" - "+e;var n=t;n=t<10?"0"+(t+1):t+1;var r=e+"-"+n;this.ActionSetDataSelecionada(r),this.ActionGetCategoriasContasAPagar(r)},deep:!0}}},Wt=Kt,Xt=(e("b8d0"),Object(l["a"])(Wt,qt,zt,!1,null,null,null)),Zt=Xt.exports;function ta(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function aa(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?ta(Object(e),!0).forEach((function(a){Object(I["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ta(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var ea={name:"FinanceiroIndex",data:function(){return{}},components:{CategoriaContasAPagar:Bt,AddEditContas:Et,Main:rt,Calendario:Zt},computed:aa({},Object(v["c"])({categoriaContas:function(t){return t.Financeiro.categoriaContas}})),filters:{money:function(t){if(t){var a=(t/1).toFixed(2).replace(".",",");return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return"0,00"}}},na=ea,ra=Object(l["a"])(na,Nt,Rt,!1,null,null,null),oa=ra.exports;i["default"].use(f["a"]);var ia=[{path:"/",name:"home",component:ut},{path:"/login",name:"login",component:ht},{path:"/financeiro/adicionarcontaapagar",name:"adicionarcontaapagar",component:$t},{path:"/financeiro/editarcontaapagar",name:"editarcontaapagar",component:$t},{path:"/financeiro",name:"financeiro",component:oa}],sa=new f["a"]({routes:ia});sa.beforeEach(N);var ca=sa;i["default"].config.productionTip=!1,new i["default"]({router:ca,store:$,render:function(t){return t(p)}}).$mount("#app")},b8d0:function(t,a,e){"use strict";var n=e("f9ad"),r=e.n(n);r.a},f961:function(t,a,e){"use strict";var n=e("30c9"),r=e.n(n);r.a},f9ad:function(t,a,e){}});
//# sourceMappingURL=app.fd309a99.js.map