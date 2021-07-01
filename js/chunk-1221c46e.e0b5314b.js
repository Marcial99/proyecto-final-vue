(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1221c46e"],{"06c8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container overflow-auto mt-5 shadow-lg border p-5"},[r("h1",{staticClass:"text-center mt-2"},[t._v(" Detalles de la encuesta "+t._s(t.encuesta.id_encuesta)+" ")]),r("div",{staticClass:"accordion mt-4",attrs:{id:"accordionExample"}},[r("div",{staticClass:"card"},[t._m(0),r("div",{staticClass:"collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[r("div",{staticClass:"card-body"},[r("h3",[t._v("Id del usuario: "+t._s(t.encuesta.id_users))]),r("h3",[t._v("Modalidad de la encuesta: "+t._s(t.encuesta.modalidad))]),r("h3",{staticClass:"text-center"},[t._v("Respuestas")]),r("table",{staticClass:"table  table-responsive-md table-hover table-bordered ",attrs:{cellspacing:"0"}},[t._m(1),r("tbody",[r("tr",[t._m(2),r("td",[t._v(t._s(t.encuesta.r1?"Si":"No"))])]),r("tr",[t._m(3),r("td",[t._v(t._s(t.encuesta.r2?"Si":"No"))])]),r("tr",[t._m(4),r("td",[t._v(t._s(t.encuesta.r3?"Si":"No"))])]),r("tr",[t._m(5),r("td",[t._v(t._s(t.encuesta.r4?"Si":"No"))])]),r("tr",[t._m(6),r("td",[t._v(t._s(t.encuesta.r5?"Si":"No"))])]),r("tr",[r("strong",[t._v("6.-")]),t._v(" ¿Tiene secreción o congestión nasal de causa desconocida? "),r("td",[t._v(t._s(t.encuesta.r6?"Si":"No"))])]),r("tr",[r("strong",[t._v("7.-")]),t._v(" Dolor de estómago "),r("td",[t._v(t._s(t.encuesta.r7?"Si":"No"))])]),r("tr",[r("strong",[t._v("8.-")]),t._v(" Náuseas o vómitos "),r("td",[t._v(t._s(t.encuesta.r8?"Si":"No"))])]),r("tr",[r("strong",[t._v("9.-")]),t._v(" Diarrea "),r("td",[t._v(t._s(t.encuesta.r9?"Si":"No"))])]),r("tr",[r("strong",[t._v("10.-")]),t._v(" Fatiga inusualmente intensa sin razón obvia "),r("td",[t._v(t._s(t.encuesta.r10?"Si":"No"))])]),r("tr",[r("strong",[t._v("11.-")]),t._v(" Pérdida significativa de apetito "),r("td",[t._v(t._s(t.encuesta.r11?"Si":"No"))])]),r("tr",[r("strong",[t._v("12.-")]),t._v(" Dolores musculares generalizados inusuales o sin razón obvia (no relacionado con el esfuerzo físico) "),r("td",[t._v(t._s(t.encuesta.r12?"Si":"No"))])]),r("tr",[r("strong",[t._v("13.-")]),t._v(" Dolor de cabeza inhabitual "),r("td",[t._v(t._s(t.encuesta.r13?"Si":"No"))])]),r("tr",[r("strong",[t._v("14.-")]),t._v(" Otros sintomas "),r("td",[t._v(t._s(t.encuesta.r14))])])])])])])]),r("div",{staticClass:"card"},[t._m(7),r("div",{staticClass:"collapse show",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordionExample"}},[r("div",{staticClass:"card-body"},[r("label",{attrs:{for:"tipo_prueba"}},[t._v("Tipo de prueba")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.tipo_prueba,expression:"tipo_prueba"}],staticClass:"form-select",attrs:{name:"tipo_prueba",required:"",id:"tipo_prueba"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tipo_prueba=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"Prueba rápida de sangre"}},[t._v("Prueba rápida de sangre")]),r("option",{attrs:{value:"Prueba rápida de antígenos"}},[t._v("Prueba rápida de antígenos")]),r("option",{attrs:{value:"Prueba PCR"}},[t._v("Prueba PCR(Reacción en cadena de la polimerasa)")])]),r("button",{staticClass:"btn btn-success mt-4 ml-2 font-weight-bold",attrs:{disabled:t.activo},on:{click:t.submitPrueba}},[t._v(" Levantar Prueba ")])])])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[r("h2",{staticClass:"mb-0"},[r("button",{staticClass:"btn btn-link btn-block text-left",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v(" Detalles de la encuesta ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Pregunta")]),r("th",{attrs:{scope:"col"}},[t._v("Respuesta")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("strong",[t._v(" 1.-")]),t._v(" ¿Siente fiebre, escalofríos como los de una gripe, o una fiebre con una temperatura tomada por la boca de 38,1°C (100,6°F) o más? ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("strong",[t._v("2.-")]),t._v(" ¿Ha tenido una pérdida repentina del olfato sin congestión nasal (nariz tapada), con o sin pérdida del gusto? ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("strong",[t._v("3.- ")]),t._v(" ¿Ha desarrollado una tos o su tos crónica ha empeorado recientemente? ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("strong",[t._v("4.-")]),t._v(" ¿Tiene problemas al respirar o le falta el aliento? ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("strong",[t._v("5.-")]),t._v(" ¿Tiene dolor de garganta?")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header",attrs:{id:"headingTwo"}},[r("h2",{staticClass:"mb-0"},[r("button",{staticClass:"btn btn-link btn-block text-left collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[t._v(" Levantar Prueba ")])])])}],o=r("1da1"),i=(r("96cf"),r("bc3a")),s=r.n(i),c=(r("1f57"),{data:function(){var t=this.$store.state.auth.user.id;return{id_encuesta:this.$route.query.id_encuesta,encuesta:[],tipo_prueba:"",activoo:!1,medico:0,id_usuario:t}},computed:{activo:function(){return this.activoo},currentUser:function(){return this.$store.state.auth.user}},methods:{getEncuesta:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://proyecto-tedw.herokuapp.com/encuestas/"+t.id_encuesta);case 3:r=e.sent,t.encuesta=r.data,console.log(r),t.cargado=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getMedico:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://proyecto-tedw.herokuapp.com/usuario/medicos/"+t.id_usuario);case 3:r=e.sent,t.medico=r.data[0],console.log(r),t.cargado=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},submitPrueba:function(){var t=this;s.a.post("https://proyecto-tedw.herokuapp.com/prueba",{tipo_prueba:this.tipo_prueba,resultado:"Sin resultado",documento:"Sin documento",status:"abierta",id_medico:this.medico.id_medico,id_users:this.encuesta.id_users}).then((function(e){console.log(e),t.activoo=!0,t.encuesta.status="cerrado"})).catch((function(t){console.log(t)})),s.a.put("https://proyecto-tedw.herokuapp.com/encuestas/"+this.encuesta.id_encuesta,{modalidad:this.encuesta.modalidad,id_users:this.encuesta.id_users,fecha:this.encuesta.fecha,r1:this.encuesta.r1,r2:this.encuesta.r2,r3:this.encuesta.r3,r4:this.encuesta.r4,r5:this.encuesta.r5,r6:this.encuesta.r6,r7:this.encuesta.r7,r8:this.encuesta.r8,r9:this.encuesta.r9,r10:this.encuesta.r10,r11:this.encuesta.r11,r12:this.encuesta.r12,r13:this.encuesta.r13,r14:this.encuesta.r14,resultado:this.encuesta.resultado,status:"cerrada"}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},created:function(){this.getEncuesta(),this.getMedico()}}),u=c,l=r("2877"),d=Object(l["a"])(u,n,a,!1,null,"448167fb",null);e["default"]=d.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function s(t){n(i,a,o,s,c,"next",t)}function c(t){n(i,a,o,s,c,"throw",t)}s(void 0)}))}}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof _?e:_,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=k(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var d="suspendedStart",h="suspendedYield",p="executing",f="completed",v={};function _(){}function g(){}function m(){}var y={};y[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==r&&n.call(w,o)&&(y=w);var x=m.prototype=_.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,o,i,s){var c=l(t[a],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function k(t,e,r){var n=d;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw o;return j()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?f:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=f,r.method="throw",r.arg=c.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,g.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),c(x,s,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=chunk-1221c46e.e0b5314b.js.map