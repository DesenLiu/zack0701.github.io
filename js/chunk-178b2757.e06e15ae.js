(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-178b2757"],{"09de":function(t,e,n){},1276:function(t,e,n){"use strict";var a=n("d784"),i=n("44e7"),r=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),f=n("9263"),d=n("d039"),g=[].push,p=Math.min,h=4294967295,v=!d((function(){return!RegExp(h,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(o(this)),r=void 0===n?h:n>>>0;if(0===r)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,r);var s,c,u,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,d+"g");while(s=f.call(v,a)){if(c=v.lastIndex,c>p&&(l.push(a.slice(p,s.index)),s.length>1&&s.index<a.length&&g.apply(l,s.slice(1)),u=s[0].length,p=c,l.length>=r))break;v.lastIndex===s.index&&v.lastIndex++}return p===a.length?!u&&v.test("")||l.push(""):l.push(a.slice(p)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,i,n):a.call(String(i),e,n)},function(t,i){var o=n(a,t,this,i,a!==e);if(o.done)return o.value;var f=r(t),d=String(this),g=s(f,RegExp),m=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),y=new g(v?f:"^(?:"+f.source+")",b),x=void 0===i?h:i>>>0;if(0===x)return[];if(0===d.length)return null===l(y,d)?[d]:[];var k=0,I=0,S=[];while(I<d.length){y.lastIndex=v?I:0;var C,w=l(y,v?d:d.slice(I));if(null===w||(C=p(u(y.lastIndex+(v?0:I)),d.length))===k)I=c(d,I,m);else{if(S.push(d.slice(k,I)),S.length===x)return S;for(var O=1;O<=w.length-1;O++)if(S.push(w[O]),S.length===x)return S;I=k=C}}return S.push(d.slice(k)),S}]}),!v)},"2f14":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("99af"),n("fb6a");var a=n("d4ec"),i=n("bee2"),r=function(){function t(){Object(a["a"])(this,t)}return Object(i["a"])(t,[{key:"quertString",value:function(t){var e="";for(var n in t)e+="".concat(n,"=").concat(t[n],"&");return e.slice(0,-1)}}]),t}(),o=new r},"4b7f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account"},[n("van-nav-bar",{attrs:{title:"设置","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":function(e){return t.$router.push({name:"My"})}}}),n("div",{staticClass:"list-box"},[n("van-cell",{attrs:{title:"头像"}},[n("div",{staticClass:"avatar fr"},[n("img",{staticClass:"auto-img",attrs:{src:t.userInfo.userImg,alt:""}}),n("van-uploader",{staticClass:"uploader-box",attrs:{"after-read":t.uploadUserImg}})],1)]),n("van-cell",{attrs:{title:"用户id"}},[n("div",{staticClass:"fr"},[t._v(t._s(t.userInfo.userId))])]),n("van-cell",{attrs:{title:"手机号"}},[n("div",{staticClass:"fr"},[t._v(t._s(t.userInfo.phone))])]),n("van-cell",{attrs:{title:"昵称"}},[n("div",{staticClass:"fr"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.nickName,expression:"userInfo.nickName"}],staticClass:"nickname",attrs:{type:"text"},domProps:{value:t.userInfo.nickName},on:{change:function(e){return t.modifyUserInfo("nickName","/updateNickName")},input:function(e){e.target.composing||t.$set(t.userInfo,"nickName",e.target.value)}}})])]),n("div",{staticClass:"desc-box"},[n("div",{staticClass:"desc-title"},[t._v("简介")]),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.desc,expression:"userInfo.desc"}],staticClass:"text-area",attrs:{placeholder:"这家伙很懒，什么都没有留下"},domProps:{value:t.userInfo.desc},on:{change:function(e){return t.modifyUserInfo("desc","/updateDesc")},input:function(e){e.target.composing||t.$set(t.userInfo,"desc",e.target.value)}}})])]),n("div",{staticClass:"btn-noLogin",staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:t.noLogin}},[t._v("退出登录")])],1)],1)],1)},i=[],r=(n("c975"),n("a15b"),n("ac1f"),n("5319"),n("1276"),n("e17f"),n("2241"));function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("09de");var s=n("2f14"),c={data:function(){return{userInfo:{userId:"",phone:"",nickName:"",userImg:"",desc:""},maxSize:1048576}},methods:{findMy:function(){var t=this,e=localStorage.getItem("_token");e&&this.axios({method:"GET",url:"/findAccountInfo",params:{appkey:this.appkey,tokenString:e}}).then((function(e){if("B001"==e.data.code)for(var n in t.userInfo)t.userInfo[n]=e.data.result[0][n]})).catch((function(t){}))},modifyUserInfo:function(t,e){var n=this,a=localStorage.getItem("_token");if(a){var i=s["a"].quertString(o({appkey:this.appkey,tokenString:a},t,this.userInfo[t]));this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:e,data:i}).then((function(t){n.$toast.clear(),n.$toast(t.data.msg)})).catch((function(t){}))}},uploadUserImg:function(t){var e=this,n=localStorage.getItem("_token");if(n){var a=t.file.type.split("/")[1],i=["png","gif","jpg","jpeg"];if(-1!==i.indexOf(a))if(this.maxSize<t.file.size)this.$notify({message:"上传文件大小不能超过"+this.maxSize/1024+"KB",color:"#fff",background:"#0C34BA"});else{var r=t.content.replace(/data:image\/[A-Za-z]+;base64,/,""),o=s["a"].quertString({appkey:this.appkey,tokenString:n,imgType:a,serverBase64Img:r});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/updateAvatar",data:o}).then((function(t){e.$toast.clear(),"H001"==t.data.code&&(e.userInfo.userImg=t.data.userImg)})).catch((function(t){e.$toast.clear()}))}else this.$notify({message:"图片类型只支持"+i.join(","),color:"#fff",background:"#0C34BA"})}},noLogin:function(){var t=this;r["a"].confirm({title:"退出",message:"确定退出登录吗"}).then((function(){var e=localStorage.getItem("_token");if(e){var n=s["a"].quertString({appkey:t.appkey,tokenString:e});t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),t.axios({method:"POST",url:"/logout",data:n}).then((function(e){t.$toast.clear(),"F001"==e.data.code&&(t.$toast(e.data.msg),localStorage.removeItem("_token"),t.$router.go(-1))})).catch((function(e){t.$toast.clear()}))}})).catch((function(){}))}},created:function(){this.findMy()}},u=c,l=n("2877"),f=Object(l["a"])(u,a,i,!1,null,"5c1062a7",null);e["default"]=f.exports},"99af":function(t,e,n){"use strict";var a=n("23e7"),i=n("d039"),r=n("e8b5"),o=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),g=n("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",m=g>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},x=!m||!b;a({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,a,i,r,o=s(this),f=l(o,0),d=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],y(r)){if(i=c(r.length),d+i>h)throw TypeError(v);for(n=0;n<i;n++,d++)n in r&&u(f,d,r[n])}else{if(d>=h)throw TypeError(v);u(f,d++,r)}return f.length=d,f}})},a15b:function(t,e,n){"use strict";var a=n("23e7"),i=n("44ad"),r=n("fc6a"),o=n("a640"),s=[].join,c=i!=Object,u=o("join",",");a({target:"Array",proto:!0,forced:c||!u},{join:function(t){return s.call(r(this),void 0===t?",":t)}})},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},bee2:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return i}))},c975:function(t,e,n){"use strict";var a=n("23e7"),i=n("4d64").indexOf,r=n("a640"),o=n("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d4ec:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=chunk-178b2757.e06e15ae.js.map