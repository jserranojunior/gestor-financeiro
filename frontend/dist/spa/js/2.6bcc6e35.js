(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0d38":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex-col flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.favorecido,expression:"fields.favorecido"}],staticClass:"form-tail w-full",attrs:{type:"text",name:"favorecido",required:"",placeholder:"Favorecido"},domProps:{value:t.fields.favorecido},on:{input:function(e){e.target.composing||t.$set(t.fields,"favorecido",e.target.value)}}})]),a("div",{staticClass:"flex-col flex pt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fields.descricao,expression:"fields.descricao"}],staticClass:"form-tail",attrs:{type:"text",name:"descricao",placeholder:"Descrição"},domProps:{value:t.fields.descricao},on:{input:function(e){e.target.composing||t.$set(t.fields,"descricao",e.target.value)}}})]),a("div",{staticClass:"flex-col flex pt-2"},[a("input",{directives:[{name:"mask",rawName:"v-mask",value:"money",expression:"'money'"},{name:"model",rawName:"v-model",value:t.fields.valor,expression:"fields.valor"}],staticClass:"form-tail",attrs:{type:"text",name:"valor",required:"",placeholder:"Valor"},domProps:{value:t.fields.valor},on:{input:function(e){e.target.composing||t.$set(t.fields,"valor",e.target.value)}}})]),a("div",{staticClass:"flex-col flex pt-2"},[a("label",{staticClass:"pb-2 text-gray-700 font-semibold",attrs:{for:"inicio_data_pagamento"}},[t._v("Inicio Pagamento")]),a("input",{directives:[{name:"mask",rawName:"v-mask",value:"99/99/9999",expression:"'99/99/9999'"},{name:"model",rawName:"v-model",value:t.fields.inicio_data_pagamento,expression:"fields.inicio_data_pagamento"}],staticClass:"form-tail",attrs:{type:"text",placeholder:"dd/mm/aaaa",required:""},domProps:{value:t.fields.inicio_data_pagamento},on:{input:function(e){e.target.composing||t.$set(t.fields,"inicio_data_pagamento",e.target.value)}}})]),a("div",{staticClass:"flex-col flex pt-2"},[a("label",{staticClass:"pb-2 text-gray-700 font-semibold",attrs:{for:"fim_data_pagamento"}},[t._v("Fim Pagamento")]),a("input",{directives:[{name:"mask",rawName:"v-mask",value:"99/99/9999",expression:"'99/99/9999'"},{name:"model",rawName:"v-model",value:t.fields.fim_data_pagamento,expression:"fields.fim_data_pagamento"}],staticClass:"form-tail",attrs:{type:"text",placeholder:"dd/mm/aaaa"},domProps:{value:t.fields.fim_data_pagamento},on:{input:function(e){e.target.composing||t.$set(t.fields,"fim_data_pagamento",e.target.value)}}})]),a("div",{staticClass:"flex-col flex pt-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.fields.categorias_contas_a_pagar_id,expression:"fields.categorias_contas_a_pagar_id"}],staticClass:"form-tail",attrs:{name:"categorias_contas_a_pagar_id",id:"",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.fields,"categorias_contas_a_pagar_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1"}},[t._v("Essenciais")]),a("option",{attrs:{value:"2"}},[t._v("Compras")]),a("option",{attrs:{value:"3"}},[t._v("Urgencias")]),a("option",{attrs:{value:"4"}},[t._v("Lazer")]),a("option",{attrs:{value:"5"}},[t._v("Transporte")]),a("option",{attrs:{value:"6"}},[t._v("Alimentação")]),a("option",{attrs:{value:"7"}},[t._v("Estudos")]),a("option",{attrs:{value:"8"}},[t._v("Avulsos")]),a("option",{attrs:{value:"9"}},[t._v("Empresa")])])]),a("div",{staticClass:"flex-col flex pt-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.fields.tipo_conta,expression:"fields.tipo_conta"}],staticClass:"form-tail",attrs:{name:"tipo_conta",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.fields,"tipo_conta",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:"Tipo de Conta"}},[t._v("Tipo de Conta")]),a("option",{attrs:{value:"Extra"}},[t._v("Extra")]),a("option",{attrs:{value:"Fixa"}},[t._v("Fixa")]),a("option",{attrs:{value:"Parcelada"}},[t._v("Parcelada")])])]),a("div",{staticClass:"flex-col flex pt-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.fields.forma_pagamento,expression:"fields.forma_pagamento"}],staticClass:"form-tail",attrs:{name:"forma_pagamento",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.fields,"forma_pagamento",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",selected:"",value:"Forma de Pagamento"}},[t._v("\n        Forma de Pagamento\n      ")]),a("option",{attrs:{value:"Cartão"}},[t._v("Cartão")]),a("option",{attrs:{value:"Dinheiro"}},[t._v("Dinheiro")]),a("option",{attrs:{value:"Débito"}},[t._v("Débito")]),a("option",{attrs:{value:"Débito Automatico"}},[t._v("Débito Automatico")]),a("option",{attrs:{value:"Terceiro"}},[t._v("Terceiro")])])]),a("div",{staticClass:"mt-2"},["add"===t.mode?a("div",{staticClass:"btn-primary-tail-rounded",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.cadastrar()}}},[t._v("\n      Cadastrar\n    ")]):a("div",{staticClass:"flex justify-between mt-1"},[a("router-link",{attrs:{to:{name:"financeiro"}}},[a("button",{staticClass:"btn-warning-tail-rounded"},[t._v("Voltar")])]),a("button",{staticClass:"btn-primary-tail-rounded",on:{click:function(e){return t.atualizar()}}},[t._v("\n        Atualizar\n      ")])],1)])])},s=[],r=(a("26e9"),a("5319"),a("ded3")),n=a.n(r),o=a("2f62"),l=a("8865"),d=a.n(l),c=(a("c1df"),{name:"AddEditContas",data(){return{fields:{},errors:{},loaded:!0,minhadata:"",dataAtual:this.dataAtualFinanceiro?this.dataAtualFinanceiro:(new Date).toLocaleDateString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit"}),modoEdicao:!1}},methods:n()(n()({},Object(o["b"])(["ActionStoreFinancial","ActionUpdateFinancial"])),{},{toMoney(t){if(t){let e=(t/1).toFixed(2).replace(".",",");return e=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),e}return"0,00"},cadastrar(){this.ActionStoreFinancial(this.fields).then((t=>{this.fields.favorecido="",this.fields.descricao="",this.fields.valor="",this.$router.push({name:"financeiro"})}))},atualizar(){this.ActionUpdateFinancial(this.fields).then((t=>{this.$router.push({name:"financeiro"})}))},setFields(){"add"===this.mode?(this.fields.inicio_data_pagamento=this.dataAtual,this.fields.fim_data_pagamento=this.dataAtual,this.fields.forma_pagamento="Cartão",this.fields.tipo_conta="Extra",this.fields.categorias_contas_a_pagar_id="2"):"edit"===this.mode&&(this.editarContaAPagar[0]?(this.fields.id=this.editarContaAPagar[0].id,this.fields.favorecido=this.editarContaAPagar[0].favorecido,this.fields.descricao=this.editarContaAPagar[0].descricao,this.fields.inicio_data_pagamento=this.editarContaAPagar[0].inicio_data_pagamento,this.fields.forma_pagamento=this.editarContaAPagar[0].forma_pagamento,this.fields.tipo_conta=this.editarContaAPagar[0].tipo_conta,this.fields.categorias_contas_a_pagar_id=this.editarContaAPagar[0].categorias_contas_a_pagar_id,this.fields.valor=this.toMoney(this.editarContaAPagar[0].valores_contas_a_pagars.valor),this.fields.inicio_data_pagamento=this.editarContaAPagar[0].inicio_data_pagamento.split("-").reverse().join("/"),this.editarContaAPagar[0].fim_data_pagamento?this.fields.fim_data_pagamento=this.editarContaAPagar[0].fim_data_pagamento.split("-").reverse().join("/"):this.fields.fim_data_pagamento="",this.fields.data_pagamento=this.dataAtualFinanceiro):this.$router.push({name:"financeiro"}))}}),beforeMount(){this.setFields()},props:{mode:{type:String,required:!0}},watch:{editarContaAPagar:{handler(){console.log(this.editarContaAPagar),this.setFields()},deep:!0},fields:{handler(){},deep:!0},categorias_contas_a_pagar_id:function(){this.fields.categorias_contas_a_pagar_id=this.categorias_contas_a_pagar_id}},computed:n()({},Object(o["c"])({dataAtualFinanceiro:t=>t.Financeiro.dataSelecionada,editarContaAPagar:t=>t.Financeiro.editarContaAPagar})),directives:{mask:d.a}}),u=c,f=a("2877"),v=Object(f["a"])(u,i,s,!1,null,null,null);e["a"]=v.exports},1681:function(t,e,a){"use strict";a("3d87")},"39f6":function(t,e,a){"use strict";a("8e41")},"3d87":function(t,e,a){},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="4678"},"8e41":function(t,e,a){},"9e52":function(t,e,a){},d047:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex flex-wrap justify-start mt-1"},[a("div",{staticClass:"w-8/12 p-1"},[a("div",{staticClass:"w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-1/4 p-1"},[a("Calendario")],1)]),a("div",{staticClass:"ml-2"},[a("router-link",{attrs:{to:{name:"financeiroadicionarconta"}}},[a("button",{staticClass:"mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-1"},[t._v("\n          Adicionar Conta\n        ")])])],1)]),a("div",{staticClass:"flex"},[a("div",{staticClass:"w-8/12 p-1"},[a("CategoriaContasAPagar")],1),a("div",{staticClass:"w-4/12 border-l"},[a("FeedbackFinanceiro")],1)])])},s=[],r=a("0d38"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"columns mt-2"},t._l(t.categoriaContas,(function(e){return a("div",{key:e.id,staticClass:"mt-2 w-full",staticStyle:{width:"100%"}},[a("div",{staticClass:"painel w-full"},[a("div",{staticClass:"painel-header categoria-header text-center p-1 rounded-lg w-full",style:{backgroundColor:e.cor}},[a("p",{staticClass:"painel-title"},[t._v(t._s(e.nome))])]),a("div",{staticClass:"painel-body w-full p-1"},t._l(e.contas_a_pagars,(function(e){return a("div",{key:e.id,staticClass:"text-center cursor-pointer hover:bg-gray-700 text-gray-100 w-full"},[a("div",{staticClass:"w-1/4 text-left"},[e.contas_pagas&&e.contas_pagas.id?a("div",{staticClass:"relative"},[a("label",{staticClass:"cursor-pointer",attrs:{for:"checked"},on:{click:function(a){return t.deleteBillPayment({contas_a_pagar_id:e.id,data_pagamento:e.contas_pagas.data_pagamento})}}},[t._m(0,!0)])]):a("div",{staticClass:"relative"},[a("label",{staticClass:"cursor-pointer",attrs:{for:"unchecked"},on:{click:function(a){return t.makeBillPayment({contas_a_pagar_id:e.id,data_pagamento:t.dataSelecionada})}}},[t._m(1,!0)])])]),a("span",{on:{click:function(a){return t.editarContaAPagar(e.id)}}},[a("div",{staticClass:"w-2/4 pointer"},[t._v("\n                "+t._s(e.favorecido)+"\n              ")]),e.valores_contas_a_pagars?a("div",{staticClass:"w-1/4 text-right"},[t._v("\n                "+t._s(t._f("money")(e.valores_contas_a_pagars.valor))+"\n              ")]):a("div",{staticClass:"w-1/4"},[t._v("0")])])])})),0),a("div",{staticClass:"painel-footer flex text-center justify-between p-1 text-gray-300 w-full"},[a("div",{staticClass:"border-t w-full h-1"},[a("div",{staticClass:"w-1/2 text-left"},[t._v("Total")]),a("div",{staticClass:"w-1/2 text-right"},[t._v("\n              "+t._s(t._f("money")(e.totalCategoria))+"\n            ")])])])])])})),0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("span",{staticClass:"block w-8 h-5 bg-blue-800 rounded-full shadow-inner"}),a("span",{staticClass:"absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-300 transform translate-x-full"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("span",{staticClass:"block w-8 h-5 bg-red-800 rounded-full shadow-inner"}),a("span",{staticClass:"absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-red-300"})])}],l=(a("e6cf"),a("5319"),a("ded3")),d=a.n(l),c=a("2f62"),u={name:"CategoriaContasAPagar",data(){return{editandoContaAPagar:{},categoriaContas:{}}},computed:d()({},Object(c["c"])({categoriaContasVuex:t=>t.Financeiro.categoriaContas.categorias,totalCategoriaContasVuex:t=>t.Financeiro.categoriaContas.totalCategorias,dataSelecionada:t=>t.Calendario.dataSelecionada,token:t=>t.Auth.token})),methods:d()(d()({makeBillPayment(t){this.ActionStoreFinancialBillPayment(t).then(this.getCategoriaContasVuex())},deleteBillPayment(t){this.ActionDeleteFinancialBillPayment(t).then(this.getCategoriaContasVuex())},async editarContaAPagar(t){const e={id:t,dataselecionada:this.dataSelecionada};await this.ActionEditFinancial(e).then((()=>{console.log(t),this.$router.push({name:"financeiroeditarconta"})}))}},Object(c["b"])(["ActionGetFinancial","ActionEditFinancial","ActionStoreFinancialBillPayment","ActionDeleteFinancialBillPayment"])),{},{getCategoriaContasVuex(){this.dataSelecionada&&this.ActionGetFinancial(this.dataSelecionada)}}),props:{msg:String},beforeMount(){this.getCategoriaContasVuex()},watch:{$route(t,e){this.getCategoriaContasVuex()},dataSelecionada(){this.getCategoriaContasVuex()},categoriaContasVuex:{handler(){this.categoriaContasVuex&&(this.categoriaContas=this.categoriaContasVuex)},deep:!0}},filters:{money:function(t){if(t){let e=(t/1).toFixed(2).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return"0,00"}}},f=u,v=(a("f961"),a("2877")),h=Object(v["a"])(f,n,o,!1,null,null,null),m=h.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 p-1"},[a("div",{staticClass:"painel mt-1 shadow-md text-white"},[t._m(0),a("div",{staticClass:"painel-body p-1"},[a("div",{staticClass:"flex flex-wrap justify-between text-center mt-1 p-1"},[a("div",[t._v("Contas a pagar")]),t.totalCategoriaContasVuex?a("div",[t._v("\n              "+t._s(t._f("money")(t.totalCategoriaContasVuex))+"\n            ")]):a("div",{staticClass:"w-1/4"},[t._v("0")])])]),a("div",{staticClass:"painel-footer flex flez-wrap text-center justify-between border-t mt-1 p-1"},[a("div",{staticClass:"w-1/4"},[t._v("Total")]),a("div",{staticClass:"w-1/4"},[t._v(t._s(t._f("money")(t.totalCategoriaContasVuex)))])])])]),t._m(1)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"painel-header text-center p-1 rounded-lg text-white bg-red-500"},[a("p",{staticClass:"painel-title"},[t._v("TOTAIS")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 p-1"},[a("div",{staticClass:"painel mt-1 shadow-md text-white"},[a("div",{staticClass:"painel-header text-center p-1 rounded-lg text-white bg-green-500"},[a("p",{staticClass:"painel-title"},[t._v("CAIXA / FREELAS")])]),a("div",{staticClass:"painel-body p-1"},[a("div",{staticClass:"flex flex-wrap justify-between text-center mt-1 p-1"},[a("div",[t._v("Ls Star")]),a("div",[t._v("750,00")])]),a("div",{staticClass:"flex flex-wrap justify-between text-center mt-1 p-1"},[a("div",[t._v("Acolher")]),a("div",[t._v("1.400,00")])])]),a("div",{staticClass:"painel-footer flex text-center justify-between border-t mt-1 p-2"},[a("div",{staticClass:"w-1/3"},[t._v("Total")]),a("div",{staticClass:"w-1/3"},[t._v("000")])])])])}],b={name:"FeedbackFinanceiro",computed:d()({},Object(c["c"])({totalCategoriaContasVuex:t=>t.Financeiro.categoriaContas.totalCategorias})),filters:{money:function(t){if(t){let e=(t/1).toFixed(2).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return"0,00"}}},y=b,_=Object(v["a"])(y,p,g,!1,null,null,null),x=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"painel"},[a("div",{staticClass:"painel-body"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"w-full"},[a("VueTailwindPicker",{attrs:{theme:{background:"#1A202C",text:"text-white",border:"border-gray-700",currentColor:"text-gray-200",navigation:{background:"bg-gray-800",hover:"hover:bg-gray-700",focus:"bg-gray-700"},picker:{rounded:"rounded-md",selected:{background:"bg-teal-400",border:"border-teal-400",hover:"hover:border-teal-400"},holiday:"text-red-400",weekend:"text-green-400",event:"bg-blue-500"},event:{border:"border-gray-700"}},"start-date":"2020-01-01","selected-date":t.dataSelecionada},on:{change:function(e){return t.dataSelecionada=e}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSelecionada,expression:"dataSelecionada"}],staticClass:"cursor-pointer w-full bg-gray-600 appearance-none border-2 border-gray-600 rounded py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:bg-gray-500 focus:border-purple-500",attrs:{type:"date"},domProps:{value:t.dataSelecionada},on:{input:function(e){e.target.composing||(t.dataSelecionada=e.target.value)}}})])],1)])])])])},w=[],j=(a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"closable",rawName:"v-closable",value:{handler:"onAway",exclude:["currentPicker"]},expression:"{\n    handler: 'onAway',\n    exclude: ['currentPicker'],\n  }"}],ref:"vTailwindPickerRef",staticClass:"relative select-none",style:"--bg-tailwind-picker: "+t.theme.background+";",on:{click:t.onFeedBack}},[t._t("default"),a("transition",{attrs:{name:"v-tailwind-picker"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showPicker||t.inline,expression:"showPicker || inline"}]},[a("div",{staticClass:"bg-transparent mt-3 z-10",class:[{"inline-mode":t.inline},t.inline?"static":"absolute bottom-0 inset-x-0",t.theme.currentColor],attrs:{id:"v-tailwind-picker"}},[a("div",{staticClass:"w-88 h-auto max-w-xs transition-all duration-150 ease-linear rounded overflow-hidden border",class:[t.theme.border,t.theme.text,t.inline?"shadow-xs":"shadow-md"],style:{backgroundColor:"var(--bg-tailwind-picker)"}},[a("div",{attrs:{id:"v-tailwind-picker-header"}},[a("div",{staticClass:"flex flex-row justify-center items-center px-2 py-1"},[a("div",{staticClass:"flex items-center text-2xl xl:text-3xl"},[t._v("\n                "+t._s(t.today.format("DD"))+"\n              ")]),a("div",{staticClass:"mx-1"},[a("div",{staticClass:"leading-none text-xxs"},[t._v("\n                  "+t._s(t.today.format("dddd"))+"\n                ")]),a("div",{staticClass:"leading-none text-xs"},[t._v("\n                  "+t._s(t.today.format("MMMM YYYY"))+"\n                ")])])])]),a("div",{staticClass:"relative p-1"},[a("div",{staticClass:"absolute inset-0",class:t.theme.navigation.background}),a("div",{staticClass:"flex justify-between items-center relative"},[a("div",{staticClass:"flex-shrink-0 w-8"},[a("transition",{attrs:{name:"v-tailwind-picker-chevron-left"}},[t.enableMonth||t.enableYear?t._e():a("div",{staticClass:"rounded-full overflow-hidden"},[a("div",{staticClass:"transition duration-150 ease-out p-2",class:[t.visiblePrev?"cursor-pointer":"cursor-not-allowed opacity-30",t.theme.navigation.hover],on:{click:function(e){return t.onPrevious()}}},[a("svg",{staticClass:"h-4 w-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 511.641 511.641",fill:"currentColor"}},[a("path",{attrs:{d:"M148.32 255.76L386.08 18c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0L125.707 248.293a10.623 10.623 0 000 15.04L371.04 508.667c4.267 4.053 10.987 3.947 15.04-.213a10.763 10.763 0 000-14.827L148.32 255.76z"}})])])])])],1),a("div",{staticClass:"flex flex-1"},[a("div",{staticClass:"flex-1 rounded overflow-hidden py-1 ml-2 mr-1 text-center cursor-pointer transition duration-150 ease-out",class:[t.enableMonth?t.theme.navigation.focus:"",t.theme.navigation.hover],on:{click:function(e){return t.toggleMonth()}}},[t._v("\n                  "+t._s(t.today.format("MMMM"))+"\n                ")]),a("div",{staticClass:"flex-1 rounded overflow-hidden py-1 mr-2 ml-1 text-center cursor-pointer transition duration-150 ease-out",class:[t.enableYear?t.theme.navigation.focus:"",t.theme.navigation.hover],on:{click:function(e){return t.toggleYear()}}},[t._v("\n                  "+t._s(t.today.$y)+"\n                ")])]),a("div",{staticClass:"flex-shrink-0 w-8"},[a("transition",{attrs:{name:"v-tailwind-picker-chevron-right"}},[t.enableMonth||t.enableYear?t._e():a("div",{staticClass:"rounded-full overflow-hidden"},[a("div",{staticClass:"transition duration-150 ease-out p-2",class:[t.visibleNext?"cursor-pointer":"cursor-not-allowed opacity-30",t.theme.navigation.hover],on:{click:function(e){return t.onNext()}}},[a("svg",{staticClass:"h-4 w-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 511.949 511.949",fill:"currentColor"}},[a("path",{attrs:{d:"M386.235 248.308L140.902 2.975c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 000 14.827l237.76 237.76-237.76 237.867c-4.267 4.053-4.373 10.88-.213 15.04 4.053 4.267 10.88 4.373 15.04.213l.213-.213 245.333-245.333a10.624 10.624 0 000-15.041z"}})])])])])],1)])]),a("div",{staticClass:"smooth-scrolling overflow-x-hidden overflow-y-auto"},[a("transition",{attrs:{name:"v-tailwind-picker-body"}},[t.enableMonth||t.enableYear?t._e():a("div",{staticClass:"relative"},[a("div",{staticClass:"flex flex-no-wrap py-2 border-b",class:t.theme.border},t._l(t.days,(function(e){return a("div",{key:e,staticClass:"w-1/7 flex justify-center"},[a("div",{staticClass:"leading-relaxed text-sm",class:["Sun"===e?t.theme.picker.holiday:"Fri"===e?t.theme.picker.weekend:""]},[t._v("\n                      "+t._s(e)+"\n                    ")])])})),0),a("div",{ref:"currentPicker",staticClass:"flex flex-wrap relative"},[t._l(t.previousPicker,(function(e,i){return a("div",{key:""+e.$D+e.$M+e.$y+"-previous",staticClass:"w-1/7 flex justify-center my-2px cursor-not-allowed",class:[i===t.previousPicker.length-1?"rounded-r-full":"",t.theme.navigation.background]},[a("div",{staticClass:"h-8 w-8 flex justify-center items-center",attrs:{"data-tailwind-datepicker":e.$d}},[a("div",{staticClass:"text-xs opacity-75",class:[0===e.day()?t.theme.picker.holiday:5===e.day()?t.theme.picker.weekend:""]},[t._v("\n                        "+t._s(e.$D)+"\n                      ")])])])})),t._l(t.currentPicker,(function(e){return a("div",{key:""+e.$D+e.$M+e.$y+"-current",staticClass:"w-1/7 group flex justify-center items-center my-2px"},[a("div",{staticClass:"relative overflow-hidden",class:t.theme.picker.rounded},[e.$events?a("div",{staticClass:"absolute top-0 right-0 h-2 w-2 z-2",class:t.theme.picker.event,style:{backgroundColor:e.$events.color?e.$events.color:""}}):t._e(),a("div",{staticClass:"relative h-8 w-8 flex justify-center items-center overflow-hidden",class:[t.theme.picker.rounded,t.possibleDate(e)?"cursor-pointer":"cursor-not-allowed"]},[t.possibleDate(e)?a("div",{staticClass:"absolute inset-0 transition duration-150 ease-in-out border border-dotted border-transparent",class:[t.theme.picker.rounded,t.possibleDate(e)?"hover:"+t.theme.picker.selected.border:"",e.$D===t.today.$D?t.theme.picker.selected.background+" shadow-xs":""],on:{click:function(a){return t.changePicker(e)}}}):t._e(),a("div",{staticClass:"flex justify-center items-center",attrs:{"data-tailwind-datepicker":e.$d}},[a("div",{class:[!t.holidayDate(e)&&0!==e.day()||e.$D===t.today.$D?"":t.theme.picker.holiday,5===e.day()&&e.$D!==t.today.$D?t.theme.picker.weekend:"",{"z-10 text-white ":e.$D===t.today.$D&&t.possibleDate(e)},{"opacity-50":!t.possibleDate(e)}]},[a("span",[t._v(t._s(e.$D))])])])])])])})),t._l(t.nextPicker,(function(e){return a("div",{key:""+e.$D+e.$M+e.$y+"-next",staticClass:"w-1/7 flex justify-center my-2px cursor-not-allowed",class:[1===e.$D?"rounded-l-full":"",t.theme.navigation.background]},[a("div",{staticClass:"h-8 w-8 flex justify-center items-center",attrs:{"data-tailwind-datepicker":e.$d}},[a("div",{staticClass:"text-xs opacity-75",class:[e.day()===(t.startFromMonday?1:0)?t.theme.picker.holiday:e.day()===(t.startFromMonday?6:5)?t.theme.picker.weekend:""]},[t._v("\n                        "+t._s(e.$D)+"\n                      ")])])])}))],2)])]),a("transition",{attrs:{name:"v-tailwind-picker-months"}},[t.enableMonth?a("div",{staticClass:"relative flex items-center smooth-scrolling overflow-y-auto overflow-x-hidden"},[a("div",{staticClass:"flex flex-wrap py-1"},t._l(t.months,(function(e,i){return a("div",{key:i,staticClass:"w-1/3 flex justify-center items-center px-2"},[a("div",{staticClass:"w-full flex justify-center items-center py-2 my-1 transition duration-150 ease-out rounded border cursor-pointer",class:[i===t.today.$M?""+t.theme.picker.selected.border:t.theme.border+" "+t.theme.picker.selected.hover],on:{click:function(e){return t.setMonth(i)}}},[a("span",{staticClass:"font-medium"},[t._v(t._s(e))])])])})),0)]):t._e()]),a("transition",{attrs:{name:"v-tailwind-picker-years"}},[t.enableYear?a("div",{staticClass:"relative smooth-scrolling overflow-y-auto overflow-x-hidden"},[a("div",{staticClass:"flex flex-wrap py-1"},t._l(t.years,(function(e,i){return a("div",{key:i,staticClass:"w-1/3 flex justify-center items-center px-2"},[a("div",{staticClass:"w-full flex justify-center items-center py-2 my-1 transition duration-150 ease-out rounded border cursor-pointer",class:[e===t.today.$y?""+t.theme.picker.selected.border:t.theme.border+" "+t.theme.picker.selected.hover],on:{click:function(a){return t.setYear(e)}}},[a("span",{staticClass:"font-medium"},[t._v(t._s(e))])])])})),0)]):t._e()])],1),t.currentPicker.filter((function(t){return void 0!==t.$events})).length>0?a("div",{attrs:{id:"v-tailwind-picker-footer"}},[a("transition-group",{staticClass:"flex flex-wrap border-t p-1",class:t.theme.event.border,attrs:{name:"v-tailwind-picker-footer",tag:"div"}},t._l(t.currentPicker.filter((function(t){return void 0!==t.$events})),(function(e,i){return a("div",{key:i+"-event",staticClass:"w-full flex flex-row space-x-1 mb-px"},[a("div",{staticClass:"inline-flex justify-end w-4"},[a("span",{staticClass:"text-xs leading-none",class:t.theme.picker.holiday},[t._v("\n                    "+t._s(t.dayjs(e.$events.date,t.formatDate).$D)+"\n                  ")])]),a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"w-full flex items-end"},[a("span",{staticClass:"text-xxs leading-none"},[t._v("\n                      "+t._s(e.$events.description)+"\n                    ")])])])])})),0)],1):t._e()])])])])],2)}),k=[],D=(a("4e82"),a("5a0c")),A=a.n(D),P=a("83dc"),$=a.n(P),M=a("f906"),S=a.n(M),F=a("e418"),z=a.n(F),Y=a("23ad"),E=a.n(Y),O=a("8f19"),q=a.n(O),N=a("b375"),B=a.n(N),V=a("d758"),L=a.n(V);let T;A.a.extend($.a),A.a.extend(S.a),A.a.extend(z.a),A.a.extend(E.a),A.a.extend(q.a),A.a.extend(B.a),A.a.extend(L.a);var J={name:"VueTailwindPicker",directives:{closable:{bind(t,e,a){T=i=>{i.stopPropagation();const{handler:s,exclude:r}=e.value;let n=!1;r&&r.forEach((t=>{if(!n){const e=a.context.$refs[t];n=!!e&&e.contains(i.target)}})),n&&a.context.autoClose&&a.context[s](),t.contains(i.target)||n||a.context[s]()},document.addEventListener("click",T),document.addEventListener("touchstart",T)},unbind(){document.removeEventListener("click",T),document.removeEventListener("touchstart",T)}}},props:{init:{type:Boolean,required:!1,default:!0},selectedDate:{type:String,required:!1},startDate:{type:String,required:!1,default:A()().format("YYYY-MM-DD")},endDate:{type:String,required:!1,default:void 0},disableDate:{type:Array,required:!1,default:()=>[]},eventDate:{type:Array,required:!1,default:()=>[]},formatDate:{type:String,required:!1,default:"YYYY-MM-DD"},formatDisplay:{type:String,required:!1,default:"YYYY-MM-DD"},inline:{type:Boolean,required:!1,default:!1},tailwindPickerValue:{type:String,required:!1,default:""},dateRange:{type:Boolean,required:!1,default:!1},autoClose:{type:Boolean,required:!1,default:!0},startFromMonday:{type:Boolean,required:!1,default:!1},theme:{type:Object,required:!1,default:()=>({background:"#FFFFFF",text:"text-gray-700",border:"border-gray-200",currentColor:"text-gray-200",navigation:{background:"bg-gray-100",hover:"hover:bg-gray-200",focus:"bg-gray-200"},picker:{rounded:"rounded-full",selected:{background:"bg-red-500",border:"border-red-500",hover:"hover:border-red-500"},holiday:"text-red-400",weekend:"text-green-400",event:"bg-indigo-500"},event:{border:"border-gray-200"}})}},data(){const t=A()(this.startDate,this.formatDate),e=this.endDate?A()(this.endDate,this.formatDate):void 0,a=this.selectedDate&&this.startDate<this.selectedDate?A()(this.selectedDate,this.formatDate):A()(t,this.formatDate),i=Array.from(Array(12),((t,e)=>A()().month(e).format("MMMM"))),s=Array.from(Array(this.endDate?e.diff(a,"year")+1:a.diff(a,"year")+36),((t,e)=>a.add(e,"year").$y)),r=!1,n=!1,o=!1;return{startDatepicker:t,endDatepicker:e,today:a,visibleMonth:r,months:i,visibleYear:n,years:s,showPicker:o}},computed:{days(){const t=this.startFromMonday?1:0;return Array.from(Array(7),((e,a)=>A()().day(a+t).format("ddd")))},previousPicker(){const t=this.startFromMonday?1:0,e=[],a=this.today.date(0),i=this.today.date(0);for(let s=0;s<=i.day()-t;s++)e.push(a.subtract(s,"day"));return e.sort(((t,e)=>t.$d-e.$d))},currentPicker(){const t=this.startFromMonday?1:0,e=this.eventDate.length>0?this.eventDate:[];return Array.from(Array(this.today.daysInMonth()-t),((t,a)=>{const i=this.today.date(++a);return i.$events=e.find((t=>t.date===i.format(this.formatDate))),i}))},nextPicker(){const t=this.startFromMonday?1:0,e=[],a=this.previousPicker.length,i=this.today.daysInMonth();for(let s=1;s<=42-(a+i)+t;s++)e.push(this.today.date(s).add(1,"month"));return e},enableMonth(){return this.visibleMonth},enableYear(){return this.visibleYear},visiblePrev(){if(!this.dateRange){const t=this.today.subtract(1,"month").endOf("month"),e=this.startDatepicker.diff(t,"day");return e<this.today.daysInMonth()-this.today.$D}return!0},visibleNext(){if(!this.dateRange&&this.endDate){const t=this.today.add(1,"month").startOf("month");return this.endDatepicker.diff(t,"day")>0}return!0}},watch:{showPicker(t,e){t&&(this.visibleMonth=e,this.visibleYear=e)}},mounted(){this.init&&this.emit()},methods:{dayjs:A.a,emit(){this.$emit("change",this.today.format(this.formatDate))},changePicker(t){this.today=t,this.emit(),this.showPicker=!this.showPicker},onPrevious(){if(this.visiblePrev){const t=this.today.set("month",0===this.today.$M?11:this.today.$M-1).set("year",0===this.today.$M?this.today.$y-1:this.today.$y);this.possibleDate(t)?this.today=t:this.today=this.startDatepicker,this.emit()}},onNext(){if(this.visibleNext){const t=this.today.set("month",(this.today.$M+1)%12).set("year",11===this.today.$M?this.today.$y+1:this.today.$y);this.possibleDate(t)?this.today=t:this.today=this.endDatepicker,this.emit()}},possibleStartDate(t){return!!this.dateRange||t.isSameOrAfter(this.startDatepicker,"day")},possibleEndDate(t){return!!this.endDate&&(!!this.dateRange||t.isSameOrBefore(this.endDatepicker,"day"))},possibleDate(t){return this.endDate?this.possibleStartDate(t)&&this.possibleEndDate(t):this.possibleStartDate(t)},holidayDate(t){return!(!t.$events||!t.$events.holiday)},toggleMonth(){this.visibleMonth=!this.visibleMonth,this.visibleMonth&&(this.visibleYear=!1)},toggleYear(){this.visibleYear=!this.visibleYear,this.visibleYear&&(this.visibleMonth=!1)},setMonth(t){this.possibleDate(this.today.set("month",t))?this.today=this.today.set("month",t):this.today=this.startDatepicker,this.emit(),this.toggleMonth()},setYear(t){this.possibleDate(this.today.set("year",t))?this.today=this.today.set("year",t):this.today=this.startDatepicker,this.emit(),this.toggleYear()},onAway(){this.showPicker=!1},onFeedBack(){this.showPicker=!0}}},R=J,I=(a("39f6"),Object(v["a"])(R,j,k,!1,null,"c1cdb01e",null)),U=I.exports,Q=a("b002");A.a.extend(Q),A.a.updateLocale("en",{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthsShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],weekdays:["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domindo"],weekdaysShort:["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"]});var G={name:"Calendario",methods:d()(d()({},Object(c["b"])(["ActionSetDataSelecionada"])),{},{changeMonth(t){let e,a,i=new Date(...this.dataSelecionada.split());"previous"==t?(e=i.getMonth()-1,a=i.getDate()+1):"next"==t&&(e=i.getMonth()+1,a=i.getDate()+1),i=new Date(i.setMonth(e)),i=new Date(i.setDate(a)),this.dataSelecionada=i.toLocaleDateString("fr-CA")}}),components:{VueTailwindPicker:U},data(){return{dataSelecionada:""}},beforeMount(){this.dataSelecionada=(new Date).toLocaleDateString("fr-CA")},watch:{dataSelecionada(){this.ActionSetDataSelecionada(this.dataSelecionada)}}},X=G,H=(a("1681"),Object(v["a"])(X,C,w,!1,null,null,null)),K=H.exports,W={name:"FinanceiroIndex",data(){return{}},components:{CategoriaContasAPagar:m,AddEditContas:r["a"],FeedbackFinanceiro:x,Calendario:K}},Z=W,tt=Object(v["a"])(Z,i,s,!1,null,null,null);e["default"]=tt.exports},f961:function(t,e,a){"use strict";a("9e52")}}]);