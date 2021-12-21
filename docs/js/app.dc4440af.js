(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/my-vue-memo-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"1a45":function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},abcb:function(t,e,a){"use strict";a("1a45")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/list"}},[t._v("List")]),t._v(" | "),a("router-link",{attrs:{to:"/detail"}},[t._v("Detail")])],1),a("router-view")],1)},o=[],r=(a("5c0b"),a("2877")),s={},c=Object(r["a"])(s,i,o,!1,null,null,null),l=c.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"memo-list"},[a("b-select",{attrs:{options:t.categoryList},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}}),a("b-table",{attrs:{items:t.items,fields:t.fields},on:{"row-clicked":t.onRowClicked}})],1)])},d=[],f=(a("4160"),a("d81d"),a("159b"),a("d4ec")),m=a("bee2"),b=a("262e"),h=a("2caf"),g=a("9ab4"),v=(a("4de4"),a("7db0"),a("c740"),function t(e,a,n,i,o){Object(f["a"])(this,t),this.properties={},this.id=e,this.category=a,this.title=n,this.body=i,this.tags=o}),y="memos",O=function(){function t(){var e,a=this;if(Object(f["a"])(this,t),this.nextId=1,y in localStorage){e=JSON.parse(localStorage.getItem(y));var n=[];e.forEach((function(t){a.nextId=a.nextId>t.id?a.nextId:t.id+1;var e=new v(t.id,t.category,t.title,t.body,t.tags);e.properties=t.properties,n.push(e)})),this.list=n}else this.list=[]}return Object(m["a"])(t,[{key:"getList",value:function(t){return this.list.filter((function(e){return e.category===t}))}},{key:"getMemo",value:function(t){var e=this.list.find((function(e){return e.id===t}));return e||this.getNewMemo()}},{key:"getNewMemo",value:function(){return new v(this.nextId++,"","","",[])}},{key:"addMemo",value:function(t){-1===this.list.findIndex((function(e){return e.id===t.id}))&&this.list.push(t),localStorage.setItem(y,JSON.stringify(this.list))}}]),t}(),k=a("60a3"),j=[{name:"ウィスキー",schema:[{id:"title",type:"text",property:"title"},{id:"body",type:"textarea",property:"body"}]},{name:"脱出ゲーム",schema:[{id:"title",type:"text",property:"title"},{id:"shop",type:"text",property:"shop"},{id:"body",type:"textarea",property:"body"}]}],w=["ウィスキー","脱出ゲーム"],_=function(t){Object(b["a"])(a,t);var e=Object(h["a"])(a);function a(){var t;return Object(f["a"])(this,a),t=e.call(this),t.fields=[],t.memos=new O,t.categoryList=w,t.category=t.categoryList[0],t.fields=[{key:"title",thStyle:{width:"10rem"},sortable:!0},{key:"body"}],t}return Object(m["a"])(a,[{key:"onRowClicked",value:function(t){this.$router.push("/detail/".concat(t.id))}},{key:"items",get:function(){var t=this;return this.memos.getList(this.category).map((function(e){var a={id:e.id};return t.fields.forEach((function(t){e.properties[t.key]||(e.properties[t.key]=""),a[t.key]=e.properties[t.key]})),a}),this)}}]),a}(k["d"]);_=Object(g["a"])([Object(k["a"])({})],_);var x=_,S=x,T=(a("abcb"),Object(r["a"])(S,p,d,!1,null,null,null)),C=T.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",[a("b-form-select",{attrs:{options:t.categoryList,disabled:!t.editable},on:{change:t.onChange},model:{value:t.memo.category,callback:function(e){t.$set(t.memo,"category",e)},expression:"memo.category"}}),a("b-form-tags",{staticClass:"mb-2",attrs:{id:"tags","no-outer-focus":"",disabled:!t.editable},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.tags,i=e.disabled,o=e.addTag,r=e.removeTag;return[n.length>0?a("ul",{staticClass:"list-inline d-inline-block mb-2"},t._l(n,(function(e){return a("li",{key:e,staticClass:"list-inline-item"},[a("b-form-tag",{attrs:{title:e,disabled:i,variant:"info"},on:{remove:function(t){return r(e)}}},[t._v(t._s(e))])],1)})),0):t._e(),a("b-dropdown",{attrs:{size:"sm",variant:"outline-secondary",block:"","menu-class":"w-100"},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("b-icon",{attrs:{icon:"tag-fill"}}),t._v(" Choose tags ")]},proxy:!0}],null,!0)},[a("b-dropdown-form",{on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Search tags","label-for":"tag-search-input","label-cols-md":"auto","label-size":"sm",description:t.searchDesc,disabled:i}},[a("b-input-group",[a("b-form-input",{staticClass:"form-control",attrs:{id:"tag-search-input",type:"search",size:"sm",autocomplete:"off"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.addToTags(o)}}},[t._v("add to list")])],1)],1)],1)],1),a("b-dropdown-divider"),t._l(t.availableOptions,(function(e){return a("b-dropdown-item-button",{key:e,on:{click:function(a){return t.onOptionClick({option:e,addTag:o})}}},[t._v(" "+t._s(e)+" ")])})),0===t.availableOptions.length?a("b-dropdown-text",[t._v(" There are no tags available to select ")]):t._e()],2)]}}]),model:{value:t.memo.tags,callback:function(e){t.$set(t.memo,"tags",e)},expression:"memo.tags"}}),t._l(t.cs.schema,(function(e,n){return a("div",{key:n},[a("general-input",{attrs:{type:e.type,disabled:!t.editable},model:{value:t.memo.properties[e.property],callback:function(a){t.$set(t.memo.properties,e.property,a)},expression:"memo.properties[schema.property]"}})],1)}))],2),t.editable?a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("登録")]):t._e(),t.editable?t._e():a("b-button",{attrs:{type:"button",variant:"warning"},on:{click:t.changeEditable}},[t._v("編集")])],1)],1)},N=[],M=(a("c975"),a("b0c0"),a("a9e3"),a("9129"),a("25eb"),a("ac1f"),a("841c"),a("498a"),a("caad"),a("2532"),"tags"),$=function(){function t(){Object(f["a"])(this,t),M in localStorage?this.tags=JSON.parse(localStorage.getItem(M)):(this.tags=[],localStorage.setItem(M,JSON.stringify(this.tags)))}return Object(m["a"])(t,[{key:"getTags",value:function(){return this.tags?this.tags:[]}},{key:"addTag",value:function(t){this.tags.includes(t)||(this.tags.push(t),localStorage.setItem(M,JSON.stringify(this.tags)))}}]),t}(),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"text"===t.type?a("div",[a("b-input",{attrs:{id:t.id,disabled:t.disabled},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1):"textarea"===t.type?a("div",[a("b-textarea",{attrs:{id:t.id,disabled:t.disabled},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1):t._e()},E=[],P=function(t){Object(b["a"])(a,t);var e=Object(h["a"])(a);function a(){return Object(f["a"])(this,a),e.apply(this,arguments)}return Object(m["a"])(a,[{key:"input",value:function(t){}},{key:"localValue",get:function(){return this.value},set:function(t){this.input(t)}}]),a}(k["d"]);Object(g["a"])([Object(k["c"])()],P.prototype,"id",void 0),Object(g["a"])([Object(k["c"])()],P.prototype,"type",void 0),Object(g["a"])([Object(k["c"])()],P.prototype,"value",void 0),Object(g["a"])([Object(k["c"])()],P.prototype,"disabled",void 0),Object(g["a"])([Object(k["b"])()],P.prototype,"input",null),P=Object(g["a"])([Object(k["a"])({})],P);var D=P,J=D,V=Object(r["a"])(J,L,E,!1,null,null,null),z=V.exports,R=function(t){Object(b["a"])(a,t);var e=Object(h["a"])(a);function a(){var t,n;Object(f["a"])(this,a),n=e.call(this),n.editable=!1,n.search="",n.tagOptions=[],n.memos=new O,n.categoryList=w,n.tags=new $,n.tagOptions=n.tags.getTags(),n.$route.params.id&&!Number.isNaN(n.$route.params.id)?(n.memo=n.memos.getMemo(Number.parseInt(n.$route.params.id)),n.editable=!1):(n.memo=n.memos.getNewMemo(),n.editable=!0);var i=j.find((function(t){return t.name===n.memo.category}));return n.cs=i||j[0],null===(t=n.cs)||void 0===t||t.schema.forEach((function(t){n.memo.properties[t.property]||(n.memo.properties[t.property]="")})),n}return Object(m["a"])(a,[{key:"onSubmit",value:function(){event&&event.preventDefault(),this.memos.addMemo(this.memo),this.memo=this.memos.getNewMemo()}},{key:"changeEditable",value:function(){event&&event.preventDefault(),this.editable=!0}},{key:"onOptionClick",value:function(t){var e=t.option,a=t.addTag;a(e),this.search=""}},{key:"onChange",value:function(){var t,e=this,a=this.memo.category,n=j.find((function(t){var e=t.name==a;return e}));this.cs=n||j[1],null===(t=this.cs)||void 0===t||t.schema.forEach((function(t){e.memo.properties[t.property]||(e.memo.properties[t.property]="")}))}},{key:"addToTags",value:function(t){t(this.search),this.tags.addTag(this.search),this.tagOptions=this.tags.getTags(),this.search=""}},{key:"criteria",get:function(){return this.search.trim().toLowerCase()}},{key:"availableOptions",get:function(){var t=this,e=this.criteria,a=this.tagOptions.filter((function(e){return-1===t.memo.tags.indexOf(e)}));return e?a.filter((function(t){return t.toLowerCase().indexOf(e)>-1})):a}},{key:"searchDesc",get:function(){return this.criteria&&0===this.availableOptions.length?"There are no tags matching your search criteria":""}}]),a}(k["d"]);R=Object(g["a"])([Object(k["a"])({components:{GeneralInput:z}})],R);var G=R,H=G,q=Object(r["a"])(H,I,N,!1,null,null,null),A=q.exports;n["default"].use(u["a"]);var B=[{path:"/",name:"Home",component:C},{path:"/list",name:"List",component:C},{path:"/detail",name:"Register",component:A},{path:"/detail/:id",name:"Detail",component:A}],F=new u["a"]({mode:"history",base:"/my-vue-memo-app/",routes:B}),K=F,Q=a("2f62");n["default"].use(Q["a"]);var U=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),W=a("5f5b"),X=a("b1e0");a("f9e3"),a("2dd8");n["default"].config.productionTip=!1,n["default"].config.devtools=!0,n["default"].use(W["a"]),n["default"].use(X["a"]),new n["default"]({router:K,store:U,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.dc4440af.js.map