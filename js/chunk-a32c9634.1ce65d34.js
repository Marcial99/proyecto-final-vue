(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a32c9634"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,r){var n=r("c6b6"),o=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),a=r("2d00"),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3e99":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container border rounded mt-5 p-5"},[r("div",[r("h1",{staticClass:"text-center"},[t._v("Actualizar prueba")]),r("h6",[t._v("Id prueba: "+t._s(t.id_prueba))]),r("h6",[t._v("Tipo de prueba: "+t._s(t.tipo_prueba))]),r("h6",[t._v("Id medico: "+t._s(t.id_medico))]),r("h6",[t._v("Id usuario: "+t._s(t.id_users))]),r("label",{attrs:{for:"resultado"}},[t._v("Resultado:")]),r("div",{staticClass:"mb-3"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.resultado,expression:"resultado"}],staticClass:"form-control",attrs:{type:"text",name:"",id:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.resultado=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"positivo"}},[t._v("Positivo")]),r("option",{attrs:{value:"negativo"}},[t._v("Negativo")])])])]),r("div",[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Documento")]),r("input",{staticClass:"form-control",attrs:{type:"file",id:"exampleInputPassword1",accept:"image/jpeg,image/png,application/pdf"},on:{change:t.onFileSelected}})]),r("div",{staticClass:"container-fluid"},[r("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.picture,frameborder:"0"}})]),r("div"),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.activado},on:{click:t.onUpload}},[t._v(" Enviar ")])])])},o=[],a=(r("b0c0"),r("ac1f"),r("841c"),r("fb6a"),r("99af"),r("2591")),i=r("bc3a"),c=r.n(i),s={name:"correo",components:{},data:function(){return{id_prueba:this.$route.query.id_prueba,tipo_prueba:this.$route.query.tipo_prueba,resultado:this.$route.query.resultado,documento:this.$route.query.documento,id_medico:this.$route.query.id_medico,id_users:this.$route.query.id_users,status:this.$route.query.status,response:null,picture:null,activado:!1}},methods:{onUpload1:function(){var t=this;c.a.put("https://proyecto-tedw.herokuapp.com/prueba/"+this.id_prueba,{id_prueba:this.id_prueba,tipo_prueba:this.tipo_prueba,resultado:this.resultado,documento:document.getElementById("exampleInputPassword1").files[0].name,id_medico:this.id_medico,id_users:this.id_users,status:this.status}).then((function(e){console.log(e),t.activado=!0,Swal.fire({icon:"success",title:"Ok",text:"El resultado de la prueba fue actualizado correctamente y el usuario ha sido notificado"})})).catch((function(t){console.log(t)})),this.$toast.open({message:"Registro existoso",type:"success",duration:5e3,dismissible:!0})},onFileSelected:function(t){this.selectedFile=t.target.files[0],console.log(this.selectedFile);var e=this.selectedFile.type,r=e.search("/"),n=e.length;this.extension=e.slice(r+1,n)},onUpload:function(){var t=this,e=Date.now(),r=a["a"].storage().ref("/imagenes/".concat(e,"_").concat(this.email,".").concat(this.extension));"application/pdf"==this.selectedFile.type&&(r=a["a"].storage().ref("/documentos/".concat(e,"_").concat(this.email,".").concat(this.extension)));var n=r.put(this.selectedFile);n.on("state_changed",(function(e){var r=e.bytesTransferred/e.totalBytes*100;t.uploadValue=r}),(function(t){console.log(t.message)}),(function(){t.uploadValue=100,n.snapshot.ref.getDownloadURL().then((function(e){t.picture=e,console.log(t.picture)}))})),"positivo"==this.resultado?this.status="resultado":this.status="cerrado",this.onUpload1()}}},u=s,l=r("2877"),d=Object(l["a"])(u,n,o,!1,null,"5762513e",null);e["default"]=d.exports},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),a=r("b622"),i=a("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},"841c":function(t,e,r){"use strict";var n=r("d784"),o=r("825a"),a=r("1d80"),i=r("129f"),c=r("14c3");n("search",1,(function(t,e,r){return[function(e){var r=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var a=o(t),s=String(this),u=a.lastIndex;i(u,0)||(a.lastIndex=0);var l=c(a,s);return i(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},9263:function(t,e,r){"use strict";var n=r("ad6d"),o=r("9f7f"),a=r("5692"),i=RegExp.prototype.exec,c=a("native-string-replace",String.prototype.replace),s=i,u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=u||d||l;p&&(s=function(t){var e,r,o,a,s=this,p=l&&s.sticky,f=n.call(s),v=s.source,h=0,x=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),x=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(v="(?: "+v+")",x=" "+x,h++),r=new RegExp("^(?:"+v+")",f)),d&&(r=new RegExp("^"+v+"$(?!\\s)",f)),u&&(e=s.lastIndex),o=i.call(p?r:s,x),p?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=s.lastIndex,s.lastIndex+=o[0].length):s.lastIndex=0:u&&o&&(s.lastIndex=s.global?o.index+o[0].length:e),d&&o&&o.length>1&&c.call(o[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o}),t.exports=s},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),a=r("e8b5"),i=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),p=r("b622"),f=r("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,x="Maximum allowed index exceeded",b=f>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=d("concat"),m=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)},y=!b||!g;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,r,n,o,a,i=c(this),d=l(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?i:arguments[e],m(a)){if(o=s(a.length),p+o>h)throw TypeError(x);for(r=0;r<o;r++,p++)r in a&&u(d,p,a[r])}else{if(p>=h)throw TypeError(x);u(d,p++,a)}return d.length=p,d}})},"9f7f":function(t,e,r){"use strict";var n=r("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),o=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),o=r("9263"),a=r("d039"),i=r("b622"),c=r("9112"),s=i("species"),u=RegExp.prototype,l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),v=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,p){var h=i(t),x=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),b=x&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!x||!b||"replace"===t&&(!l||!d||f)||"split"===t&&!v){var g=/./[h],m=r(h,""[t],(function(t,e,r,n,a){var i=e.exec;return i===o||i===u.exec?x&&!a?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),y=m[0],_=m[1];n(String.prototype,t,y),n(u,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}p&&c(u[h],"sham",!0)}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),l=r("b622"),d=r("1dde"),p=d("slice"),f=l("species"),v=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var r,n,l,d=s(this),p=c(d.length),x=i(t,p),b=i(void 0===e?p:e,p);if(a(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(d,x,b);for(n=new(void 0===r?Array:r)(h(b-x,0)),l=0;x<b;x++,l++)x in d&&u(n,l,d[x]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-a32c9634.1ce65d34.js.map