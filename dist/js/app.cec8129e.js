(function(t){function e(e){for(var a,i,l=e[0],s=e[1],c=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="thebestofvue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4114:function(t,e,r){t.exports=r.p+"img/no_poster.2246dc72.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"app"}},[r("Banner",{attrs:{title:"Search for your favourite movies.",description:"What movie are you searching for?",label:"Start typing..",button:"Search"},on:{onSubmit:t.onSearchHandler}}),r("Results",{attrs:{data:this.data,search:this.search,loading:this.loading,error:this.error},on:{onPageSelect:t.onPageSelectHandler}})],1)},o=[],i=(r("99af"),r("ac1f"),r("841c"),r("96cf"),r("1da1")),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-parallax",{attrs:{src:t.getImageUrl("background.jpg"),height:"600"}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-col",{staticStyle:{"text-align":"center","max-width":"600px"}},[r("h1",{staticStyle:{color:"white"}},[t._v(" "+t._s(t.title)+" ")]),r("p",{staticStyle:{color:"white"}},[t._v(" "+t._s(t.description)+" ")]),r("v-text-field",{attrs:{label:t.label,"background-color":"white",height:"55","prepend-inner-icon":"mdi-magnify",solo:"",rounded:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),r("v-btn",{attrs:{disabled:0===this.value.trim().length,color:"primary",dark:"",text:"",rounded:""},on:{click:t.onSubmit}},[t._v(" "+t._s(t.button)+" ")])],1)],1)],1)},s=[],c=(r("498a"),function(t){return r("7584")("./".concat(t))}),u={name:"Banner",props:["title","description","label","button"],methods:{onSubmit:function(){0!==this.value.trim().length&&(this.$emit("onSubmit",this.value.trim()),this.value="")},getImageUrl:c},data:function(){return{value:""}}},d=u,p=r("2877"),v=Object(p["a"])(d,l,s,!1,null,null,null),g=v.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"mt-6"},[t.loading?r("v-layout",{attrs:{"justify-center":""}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):t.error?r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-col",{staticStyle:{"text-align":"center"}},[r("h2",[t._v("Oops! An error has occured. Please, try again.")]),r("v-btn",{attrs:{color:"primary",dark:"",rounded:""},on:{click:function(e){return t.onSearchHandler(t.data.page)}}},[t._v(" Try again ")])],1)],1):null!=t.data&&0!==t.data.results.length?r("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[r("v-flex",{staticClass:"mx-3",attrs:{xs12:""}},[r("h2",[t._v("Your search result for: "),r("i",[t._v(t._s(t.search))])])]),t._l(t.data.results,(function(t){return r("v-flex",{key:t.id,attrs:{xs10:"",sm5:"",md4:"",lg3:""}},[r("Movie",{attrs:{title:t.title,overview:t.overview,rating:t.vote_average,release:t.release_date,poster:t.poster_path,backdrop:t.backdrop_path}})],1)})),1!==t.data.total_pages?r("v-flex",{staticClass:"my-4",attrs:{xs12:""}},[r("v-pagination",{attrs:{color:"primary",length:t.data.total_pages,"total-visible":7},on:{input:t.onSearchHandler},model:{value:t.data.page,callback:function(e){t.$set(t.data,"page",e)},expression:"data.page"}})],1):t._e()],2):null!=t.data&&0===t.data.results.length?r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-col",{staticStyle:{"text-align":"center"}},[r("h2",[t._v("No results for: "),r("i",[t._v(t._s(t.search))])])])],1):t._e()],1)},h=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{"justify-center":""}},[r("v-card",{staticClass:"ma-3",attrs:{outlined:"",width:"250px"}},[r("v-img",{staticClass:"white--text align-end",attrs:{gradient:"rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)",height:"300px",src:null!=t.poster?this.img_base_url+t.poster:t.getImageUrl("no_poster.png")}},[r("v-card-title",{staticClass:"title",staticStyle:{"line-height":"1.25em","text-shadow":"0 0 2px black"}},[t._v(t._s(t.title))])],1),r("v-card-subtitle",[t._v("Rating: "+t._s(t.rating)+"/10")]),r("v-card-text",{staticClass:"text--primary"},[t._v(t._s(t.release||"Unknown date"))]),r("v-card-actions",[r("v-dialog",{attrs:{"max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({attrs:{color:"primary"}},a),[t._v("More info")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-img",{attrs:{height:"300px",src:null!=t.backdrop?this.img_base_url+t.backdrop:t.getImageUrl("no_poster.png")}}),r("v-card-title",{staticClass:"headline"},[t._v(t._s(t.title))]),r("v-card-text",{staticClass:"text--primary"},[r("i",[t._v(t._s(t.release||"Unknown date"))])]),r("v-card-text",[t._v(t._s(t.overview))]),r("v-card-subtitle",[t._v("Rating: "+t._s(t.rating)+"/10")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)],1)},b=[],_={name:"Movie",props:["title","overview","rating","release","poster","backdrop"],methods:{getImageUrl:function(t){return r("7584")("./".concat(t))}},data:function(){return{dialog:!1,img_base_url:"http://image.tmdb.org/t/p/original"}}},y=_,x=Object(p["a"])(y,m,b,!1,null,null,null),w=x.exports,k={name:"Results",components:{Movie:w},methods:{onSearchHandler:function(t){window.scrollTo(0,0),this.$emit("onPageSelect",t)}},props:["data","search","loading","error"]},S=k,j=Object(p["a"])(S,f,h,!1,null,null,null),O=j.exports,C="2393700d5762a0eb9ce2c652386386f9",P="https://api.themoviedb.org/3/search/movie?api_key=".concat(C),R=r("bc3a"),U=r.n(R),F={name:"App",components:{Banner:g,Results:O},methods:{onSearchHandler:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loading=!0,e.error=!1,a=P+"&query=".concat(encodeURI(t)),r.prev=3,r.next=6,U.a.get(a);case 6:n=r.sent,console.log(n.data),e.search=t,e.loading=!1,e.data=n.data,r.next=19;break;case 13:r.prev=13,r.t0=r["catch"](3),e.loading=!1,e.data=null,e.error=!0,console.log(r.t0);case 19:case"end":return r.stop()}}),r,null,[[3,13]])})))()},onPageSelectHandler:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.error=!1,e.loading=!0,e.page=t,a=P+"&query=".concat(encodeURI(e.search),"&page=").concat(e.page),r.prev=4,r.next=7,U.a.get(a);case 7:n=r.sent,e.loading=!1,e.data=n.data,r.next=18;break;case 12:r.prev=12,r.t0=r["catch"](4),e.loading=!1,e.data=null,e.error=!0,console.log(r.t0);case 18:case"end":return r.stop()}}),r,null,[[4,12]])})))()}},data:function(){return{search:"",loading:!1,data:null,error:!1,page:1}}},M=F,$=Object(p["a"])(M,n,o,!1,null,null,null),E=$.exports,H=r("ce5b"),I=r.n(H);r("bf40");a["default"].use(I.a);var T=new I.a({theme:{themes:{light:{primary:"#6200ea",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});r("d5e8"),r("5363");a["default"].config.productionTip=!1,new a["default"]({vuetify:T,render:function(t){return t(E)}}).$mount("#app")},7584:function(t,e,r){var a={"./background.jpg":"b13e","./no_poster.png":"4114"};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="7584"},b13e:function(t,e,r){t.exports=r.p+"img/background.615d9e6c.jpg"}});
//# sourceMappingURL=app.cec8129e.js.map