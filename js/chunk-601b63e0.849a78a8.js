(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-601b63e0"],{"2f14":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("99af"),a("fb6a");var i=a("d4ec"),r=a("bee2"),s=function(){function t(){Object(i["a"])(this,t)}return Object(r["a"])(t,[{key:"quertString",value:function(t){var e="";for(var a in t)e+="".concat(a,"=").concat(t[a],"&");return e.slice(0,-1)}}]),t}(),n=new s},"68d9":function(t,e,a){},"99af":function(t,e,a){"use strict";var i=a("23e7"),r=a("d039"),s=a("e8b5"),n=a("861d"),o=a("7b0b"),c=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),f=a("b622"),v=a("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",m=v>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=u("concat"),C=function(t){if(!n(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},x=!m||!b;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,i,r,s,n=o(this),u=l(n,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?n:arguments[e],C(s)){if(r=c(s.length),f+r>h)throw TypeError(g);for(a=0;a<r;a++,f++)a in s&&d(u,f,s[a])}else{if(f>=h)throw TypeError(g);d(u,f++,s)}return u.length=f,u}})},a434:function(t,e,a){"use strict";var i=a("23e7"),r=a("23cb"),s=a("a691"),n=a("50c4"),o=a("7b0b"),c=a("65f0"),d=a("8418"),l=a("1dde"),u=a("ae40"),f=l("splice"),v=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,e){var a,i,l,u,f,v,b=o(this),C=n(b.length),x=r(t,C),_=arguments.length;if(0===_?a=i=0:1===_?(a=0,i=C-x):(a=_-2,i=h(p(s(e),0),C-x)),C+a-i>g)throw TypeError(m);for(l=c(b,i),u=0;u<i;u++)f=x+u,f in b&&d(l,u,b[f]);if(l.length=i,a<i){for(u=x;u<C-i;u++)f=u+i,v=u+a,f in b?b[v]=b[f]:delete b[v];for(u=C;u>C-i+a;u--)delete b[u-1]}else if(a>i)for(u=C-i;u>x;u--)f=u+i-1,v=u+a-1,f in b?b[v]=b[f]:delete b[v];for(u=0;u<a;u++)b[u+x]=arguments[u+2];return b.length=C-i+a,l}})},bee2:function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}a.d(e,"a",(function(){return r}))},cf2a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("van-nav-bar",{attrs:{title:"我的订单","left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.push({name:"My"})}}}),a("div",{staticClass:"order-bg"}),a("div",{staticClass:"tab-box"},[a("van-tabs",{staticClass:"tabs-box",on:{change:t.toggleStatus},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabltems,(function(e,i){return a("van-tab",{key:i,attrs:{title:e.title}},[t.orderDatas.length>0?a("div",t._l(t.orderDatas,(function(e,i){return a("div",{key:i,staticClass:"tab-item"},[a("div",{staticClass:"tab-item-box clearfix"},[a("div",{staticClass:"fl no"},[t._v(t._s(e.orderId))]),a("div",{staticClass:"fr"},[1==e.status?a("div",{staticClass:"text",on:{click:function(a){return t.confirmReceive(e,i)}}},[t._v("确认收货")]):a("div",{staticClass:"text-box-tab"},[a("div",{staticClass:"finished"},[t._v("已完成")]),a("div",{staticClass:"remove",on:{click:function(a){return t.removeOrder(e.orderId,i)}}},[a("van-icon",{attrs:{name:"delete",size:"20px"}})],1)])])]),a("div",{staticClass:"order-box"},t._l(e.products,(function(i,r){return a("div",{key:r,staticClass:"clearfix cell-box"},[a("div",{staticClass:"pro-img fl"},[a("img",{staticClass:"auto-img",attrs:{src:i.smallImg,alt:""}})]),a("div",{staticClass:"pro-info fl"},[a("div",{staticClass:"text-box"},[a("div",{staticClass:"clearfix"},[a("div",{staticClass:"text-name fl"},[t._v(t._s(i.name))]),a("div",{staticClass:"text-rule fl"},[t._v(t._s(i.rule))])]),a("div",{staticClass:"enname"},[t._v(t._s(i.enname))])]),a("div",{staticClass:"price-box"},[a("div",{staticClass:"fl price"},[t._v("￥"+t._s(i.price))]),a("div",{staticClass:"fr count"},[t._v("x"+t._s(e.count))])])])])})),0),a("div",{staticClass:"pro-box"},[a("div",{staticClass:"pro-boxing"},[a("div",{staticClass:"date"},[t._v(t._s(t._f("formatDate")(e.date,"yyyy-MM-dd hh:mm:ss")))]),a("div",{staticClass:"clearfix"},[a("div",{staticClass:"fl pro-count"},[t._v("共计"+t._s(e.count)+"件商品")]),a("div",{staticClass:"fr pro-total"},[t._v("合计￥"+t._s(e.total))])])]),a("div",{staticClass:"left-box left"}),a("div",{staticClass:"left-box right"})])])})),0):a("div")])})),1)],1)],1)},r=[],s=(a("d81d"),a("a434"),a("68d9"),a("2f14")),n={data:function(){return{active:0,orderDatas:[],tabltems:[{title:"全部"},{title:"进行中"},{title:"已完成"}]}},created:function(){this.getOrderData(0)},methods:{getOrderData:function(t){var e=this,a=localStorage.getItem("_token");a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findOrder",params:{appkey:this.appkey,tokenString:a,status:t}}).then((function(t){if(e.$toast.clear(),e.orderDatas=[],7e4==t.data.code){var a={};for(var i in t.data.result.map((function(t){a[t.oid]?(a[t.oid].count+=t.count,a[t.oid].total+=t.count*t.price,a[t.oid].products.push(t)):a[t.oid]={orderId:t.oid,date:t.createdAt,count:t.count,total:t.count*t.price,products:[t],status:t.status}})),a)e.orderDatas.push(a[i]);e.orderDatas.sort((function(t,e){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}})).catch((function(t){e.$toast.clear()})))},toggleStatus:function(t){this.getOrderData(t)},confirmReceive:function(t,e){var a=this,i=localStorage.getItem("_token");if(i){var r=s["a"].quertString({appkey:this.appkey,tokenString:i,oid:t.orderId});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/receive",data:r}).then((function(i){a.$toast.clear(),8e4==i.data.code&&(a.$toast(i.data.msg),1==a.active?a.orderDatas.splice(e,1):t.status=2)})).catch((function(t){}))}},removeOrder:function(t,e){var a=this,i=localStorage.getItem("_token");if(i){var r=s["a"].quertString({appkey:this.appkey,tokenString:i,oid:t});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/removeOrder",data:r}).then((function(t){a.$toast.clear(),9e4==t.data.code&&(a.$toast(t.data.msg),a.orderDatas.splice(e,1))})).catch((function(t){a.$toast.clear()}))}}}},o=n,c=a("2877"),d=Object(c["a"])(o,i,r,!1,null,"08194a5e",null);e["default"]=d.exports},d4ec:function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return i}))},d81d:function(t,e,a){"use strict";var i=a("23e7"),r=a("b727").map,s=a("1dde"),n=a("ae40"),o=s("map"),c=n("map");i({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-601b63e0.849a78a8.js.map