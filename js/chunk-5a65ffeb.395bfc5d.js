(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a65ffeb"],{8493:function(o,t,e){"use strict";e.r(t);var r=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"contenedor"},[e("h1",{staticClass:"text-center"},[o._v(" Ingresa los correos de las personas con las que has tenido contacto los últimos días ")]),e("br"),e("br"),e("form",{on:{submit:function(t){return t.preventDefault(),o.procesarFormulario.apply(null,arguments)}}},[o._l(o.numero,(function(t,r){return e("div",{key:r,staticClass:"form-inline col-md-12"},[e("label",{staticClass:"col-md-4",attrs:{for:"correo"}},[o._v("Correo:")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:o.correo.correos[r],expression:"correo.correos[index]",modifiers:{trim:!0}}],staticClass:"form-control col-md-8 my-2",attrs:{type:"email",placeholder:"email"},domProps:{value:o.correo.correos[r]},on:{input:function(t){t.target.composing||o.$set(o.correo.correos,r,t.target.value.trim())},blur:function(t){return o.$forceUpdate()}}})])})),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary btnMas",on:{click:function(t){return t.preventDefault(),o.agregar.apply(null,arguments)}}},[o._v(" + ")])]),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary mt-2 col-md-6 ",attrs:{type:"submit",disabled:o.bloquear},on:{click:function(t){return t.preventDefault(),o.procesarFormulario.apply(null,arguments)}}},[o._v(" Enviar ")])]),e("hr")],2)])},s=[],i=e("bc3a"),n=e.n(i),c={name:"TrazavilidadCorreos",components:{},data:function(){return{correo:{correos:[]},numero:1,id_prueba:this.$route.query.id_prueba,tipo_prueba:this.$route.query.tipo_prueba,resultado:this.$route.query.resultado,documento:this.$route.query.documento,id_medico:this.$route.query.id_medico,id_users:this.$route.query.id_users,status:this.$route.query.status}},methods:{agregar:function(){this.numero+=1,console.log(this.numero),console.log("correo: "+this.correo.correos)},procesarFormulario:function(){console.log(this.id_prueba),console.log(this.correo2);for(var o=0;o<this.correo.correos.length;o++)n.a.post("https://proyecto-tedw.herokuapp.com/traz",{id_prueba:this.id_prueba,correo:this.correo.correos[o]}).then((function(o){console.log(o)})).catch((function(o){console.log(o)})),this.$toast.open({message:"Registro existoso",type:"success",duration:5e3,dismissible:!0});this.updateForm()},updateForm:function(){n.a.put("https://proyecto-tedw.herokuapp.com/prueba/"+this.id_prueba,{tipo_prueba:this.tipo_prueba,resultado:this.resultado,documento:this.documento,id_medico:this.id_medico,id_users:this.id_users,status:"correos"}).then((function(o){console.log(o)})).catch((function(o){console.log(o)}))}},computed:{bloquear:function(){return""===this.correo.correos[0]}}},a=c,u=(e("f134"),e("2877")),l=Object(u["a"])(a,r,s,!1,null,null,null);t["default"]=l.exports},"917c":function(o,t,e){},f134:function(o,t,e){"use strict";e("917c")}}]);
//# sourceMappingURL=chunk-5a65ffeb.395bfc5d.js.map