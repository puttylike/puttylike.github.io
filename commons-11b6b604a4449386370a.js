(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{2176:function(t){function e(t){return!isNaN(parseFloat(t))&&isFinite(t)}t.exports=function(t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=!1),"cool"===n?n=237:"slate"===n?n=122:"warm"===n&&(n=69),!e(n))throw new Error("Hue is not a number");if(!e(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var o=0;if(0!==n){o=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var i=0;return r?(i=t/100,t="100%,"):(i=(100-t)/100,t="0%,"),"hsla("+n+","+o+"%,"+t+i+")"}},8718:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.LARGER_DISPLAY_WIDTH="1600px",e.LARGE_DISPLAY_WIDTH="1280px",e.DEFAULT_WIDTH="980px",e.TABLET_WIDTH="768px",e.MOBILE_WIDTH="480px",e.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",e.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",e.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",e.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",e.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",e.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",e.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",e.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",e.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",e.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},3402:function(t,e,n){"use strict";var r,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(2176),a=(r=i)&&r.__esModule?r:{default:r},u=n(8718);var c={title:"Kirkham",baseFontSize:"18px",baseLineHeight:1.44,scaleRatio:2.15,blockMarginBottom:.75,googleFonts:[{name:"Playfair Display",styles:["700"]},{name:"Fira Sans",styles:["400","400i","700","700i"]}],headerFontFamily:["Playfair Display","serif"],bodyFontFamily:["Fira Sans","sans-serif"],headerColor:"hsla(0,0%,0%,1)",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:700,bodyWeight:400,boldWeight:700,overrideStyles:function(t,e){var n=t.adjustFontSizeTo,r=t.scale,i=t.rhythm;return function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({a:{color:"#9f392b"},blockquote:o({},r(.2),{color:(0,a.default)(41),fontStyle:"italic",paddingLeft:i(13/16),marginLeft:0,borderLeft:i(3/16)+" solid "+(0,a.default)(80)}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":o({},n(e.baseFontSize),{color:e.bodyColor,fontWeight:e.bodyWeight}),"blockquote cite:before":{content:'"— "'}},u.MOBILE_MEDIA_QUERY,{blockquote:{marginLeft:i(-3/4),marginRight:0,paddingLeft:i(9/16)}})}};e.Z=c},4240:function(t,e,n){var r,o,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,r,o=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))a.call(n,l)&&(o[l]=n[l]);if(i){r=i(n);for(var s=0;s<r.length;s++)u.call(n,r[s])&&(o[r[s]]=n[r[s]])}}return o},l=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},s=function(t){return l(t)[0]},f=function(t){return null==t&&(t=t),function(e,n,r,o){null==r&&(r=t),null==o&&(o=r);var i=l(e)[1];if(i===n)return e;var a=s(e);if("px"!==i)if("em"===i)a=s(e)*s(r);else if("rem"===i)a=s(e)*s(t);else{if("ex"!==i)return e;a=s(e)*s(r)*2}var u=a;if("px"!==n)if("em"===n)u=a/s(o);else if("rem"===n)u=a/s(t);else{if("ex"!==n)return e;u=a/s(o)/2}return parseFloat(u.toFixed(5))+n}},p=l,h=function(t){return p(t)[1]},d=function(t){return p(t)[0]},b={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},g=function(t,e){var n,r=f(e.baseFontSize),o=d(r(t,"px")),i=d(e.baseLineHeightInPx),a=d(r(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(n+=e.roundToNearestHalfLine?.5:1),n},y=function(t){var e=f(t.baseFontSize);return function(n,r,o){null==n&&(n=1),null==r&&(r=t.baseFontSize),null==o&&(o=0);var i=n*d(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,r);return"px"===h(a)&&(a=Math.floor(d(a))+h(a)),parseFloat(d(a).toFixed(5))+h(a)}},v=Object.prototype.toString;function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}r=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Number]"==v.call(t)},o={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};var _=function(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!m(e))throw new Error("Hue is not a number");if(!m(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var r=0;0!==e&&(r=19.92978+-.3651759*t+.001737214*Math.pow(t,2));var o=0;return n?(o=t/100,t="100%,"):(o=(100-t)/100,t="0%,"),"hsla("+e+","+r+"%,"+t+o+")"},j="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var x,O="object"==typeof j&&j&&j.Object===Object&&j,S="object"==typeof self&&self&&self.Object===Object&&self,F=O||S||Function("return this")(),z=F.Symbol,k=Object.prototype,A=k.hasOwnProperty,L=k.toString,E=z?z.toStringTag:void 0,M=Object.prototype.toString,I=z?z.toStringTag:void 0,P=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":I&&I in Object(t)?function(t){var e=A.call(t,E),n=t[E];try{t[E]=void 0;var r=!0}catch(t){}var o=L.call(t);return r&&(e?t[E]=n:delete t[E]),o}(t):function(t){return M.call(t)}(t)},T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},B=function(t){if(!T(t))return!1;var e=P(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},D=F["__core-js_shared__"],R=(x=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",H=Function.prototype.toString,U=function(t){if(null!=t){try{return H.call(t)}catch(t){}try{return t+""}catch(t){}}return""},W=/^\[object .+?Constructor\]$/,N=Function.prototype,C=Object.prototype,q=RegExp("^"+N.toString.call(C.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Y=function(t){return!(!T(t)||function(t){return!!R&&R in t}(t))&&(B(t)?q:W).test(U(t))},$=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Y(n)?n:void 0},Z=function(){try{var t=$(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Q=function(t,e,n){"__proto__"==e&&Z?Z(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},G=function(t,e){return t===e||t!=t&&e!=e},V=Object.prototype.hasOwnProperty,J=function(t,e,n){var r=t[e];V.call(t,e)&&G(r,n)&&(void 0!==n||e in t)||Q(t,e,n)},K=Array.isArray,X=function(t){return null!=t&&"object"==typeof t},tt=function(t){return"symbol"==typeof t||X(t)&&"[object Symbol]"==P(t)},et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nt=/^\w*$/,rt=function(t,e){if(K(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!tt(t))||nt.test(t)||!et.test(t)||null!=e&&t in Object(e)},ot=$(Object,"create"),it=Object.prototype.hasOwnProperty,at=Object.prototype.hasOwnProperty;function ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ut.prototype.clear=function(){this.__data__=ot?ot(null):{},this.size=0},ut.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ut.prototype.get=function(t){var e=this.__data__;if(ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(e,t)?e[t]:void 0},ut.prototype.has=function(t){var e=this.__data__;return ot?void 0!==e[t]:at.call(e,t)},ut.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ot&&void 0===e?"__lodash_hash_undefined__":e,this};var ct=ut,lt=function(t,e){for(var n=t.length;n--;)if(G(t[n][0],e))return n;return-1},st=Array.prototype.splice;function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ft.prototype.clear=function(){this.__data__=[],this.size=0},ft.prototype.delete=function(t){var e=this.__data__,n=lt(e,t);return!(n<0||(n==e.length-1?e.pop():st.call(e,n,1),--this.size,0))},ft.prototype.get=function(t){var e=this.__data__,n=lt(e,t);return n<0?void 0:e[n][1]},ft.prototype.has=function(t){return lt(this.__data__,t)>-1},ft.prototype.set=function(t,e){var n=this.__data__,r=lt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var pt=ft,ht=$(F,"Map"),dt=function(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map};function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=function(){this.size=0,this.__data__={hash:new ct,map:new(ht||pt),string:new ct}},bt.prototype.delete=function(t){var e=dt(this,t).delete(t);return this.size-=e?1:0,e},bt.prototype.get=function(t){return dt(this,t).get(t)},bt.prototype.has=function(t){return dt(this,t).has(t)},bt.prototype.set=function(t,e){var n=dt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};var gt=bt;function yt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(yt.Cache||gt),n}yt.Cache=gt;var vt=yt,mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_t=/\\(\\)?/g,jt=function(t){var e=vt((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(mt,(function(t,n,r,o){e.push(r?o.replace(_t,"$1"):n||t)})),e}),(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}(),wt=z?z.prototype:void 0,xt=wt?wt.toString:void 0,Ot=function t(e){if("string"==typeof e)return e;if(K(e))return function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,t)+"";if(tt(e))return xt?xt.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},St=function(t,e){return K(t)?t:rt(t,e)?[t]:jt(function(t){return null==t?"":Ot(t)}(t))},Ft=/^(?:0|[1-9]\d*)$/,zt=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Ft.test(t))&&t>-1&&t%1==0&&t<e},kt=function(t){if("string"==typeof t||tt(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},At=function(t,e,n){return null==t?t:function(t,e,n,r){if(!T(t))return t;for(var o=-1,i=(e=St(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=kt(e[o]),l=n;if(o!=a){var s=u[c];void 0===(l=r?r(s,c,u):void 0)&&(l=T(s)?s:zt(e[o+1])?[]:{})}J(u,c,l),u=u[c]}return t}(t,e,n)},Lt=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},Et=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var u=i[++r];if(!1===e(o[u],u,o))break}return t},Mt=function(t){return X(t)&&"[object Arguments]"==P(t)},It=Object.prototype,Pt=It.hasOwnProperty,Tt=It.propertyIsEnumerable,Bt=Mt(function(){return arguments}())?Mt:function(t){return X(t)&&Pt.call(t,"callee")&&!Tt.call(t,"callee")},Dt=function(){return!1},Rt=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?F.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||Dt})),Ht=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Ut={};Ut["[object Float32Array]"]=Ut["[object Float64Array]"]=Ut["[object Int8Array]"]=Ut["[object Int16Array]"]=Ut["[object Int32Array]"]=Ut["[object Uint8Array]"]=Ut["[object Uint8ClampedArray]"]=Ut["[object Uint16Array]"]=Ut["[object Uint32Array]"]=!0,Ut["[object Arguments]"]=Ut["[object Array]"]=Ut["[object ArrayBuffer]"]=Ut["[object Boolean]"]=Ut["[object DataView]"]=Ut["[object Date]"]=Ut["[object Error]"]=Ut["[object Function]"]=Ut["[object Map]"]=Ut["[object Number]"]=Ut["[object Object]"]=Ut["[object RegExp]"]=Ut["[object Set]"]=Ut["[object String]"]=Ut["[object WeakMap]"]=!1;var Wt=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&O.process,i=function(){try{return r&&r.require&&r.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),Nt=Wt&&Wt.isTypedArray,Ct=Nt?function(t){return function(e){return t(e)}}(Nt):function(t){return X(t)&&Ht(t.length)&&!!Ut[P(t)]},qt=Object.prototype.hasOwnProperty,Yt=function(t,e){var n=K(t),r=!n&&Bt(t),o=!n&&!r&&Rt(t),i=!n&&!r&&!o&&Ct(t),a=n||r||o||i,u=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=u.length;for(var l in t)!e&&!qt.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||zt(l,c))||u.push(l);return u},$t=Object.prototype,Zt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||$t)},Qt=function(t,e){return function(n){return t(e(n))}},Gt=Qt(Object.keys,Object),Vt=Object.prototype.hasOwnProperty,Jt=function(t){return null!=t&&Ht(t.length)&&!B(t)},Kt=function(t){return Jt(t)?Yt(t):function(t){if(!Zt(t))return Gt(t);var e=[];for(var n in Object(t))Vt.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)},Xt=function(t,e){if(null==t)return t;if(!Jt(t))return function(t,e){return t&&Et(t,e,Kt)}(t,e);for(var n=t.length,r=-1,o=Object(t);++r<n&&!1!==e(o[r],r,o););return t},te=function(t){return t},ee=function(t,e){return(K(t)?Lt:Xt)(t,function(t){return"function"==typeof t?t:te}(e))};function ne(t){var e=this.__data__=new pt(t);this.size=e.size}ne.prototype.clear=function(){this.__data__=new pt,this.size=0},ne.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},ne.prototype.get=function(t){return this.__data__.get(t)},ne.prototype.has=function(t){return this.__data__.has(t)},ne.prototype.set=function(t,e){var n=this.__data__;if(n instanceof pt){var r=n.__data__;if(!ht||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new gt(r)}return n.set(t,e),this.size=n.size,this};var re=ne,oe=function(t,e,n){(void 0===n||G(t[e],n))&&(void 0!==n||e in t)||Q(t,e,n)},ie=w((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?F.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=i?i(n):new t.constructor(n);return t.copy(r),r}})),ae=F.Uint8Array,ue=function(t,e){var n=e?function(t){var e=new t.constructor(t.byteLength);return new ae(e).set(new ae(t)),e}(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},ce=Object.create,le=function(){function t(){}return function(e){if(!T(e))return{};if(ce)return ce(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),se=Qt(Object.getPrototypeOf,Object),fe=Function.prototype,pe=Object.prototype,he=fe.toString,de=pe.hasOwnProperty,be=he.call(Object),ge=function(t,e){return"__proto__"==e?void 0:t[e]},ye=Object.prototype.hasOwnProperty,ve=function(t){if(!T(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=Zt(t),n=[];for(var r in t)("constructor"!=r||!e&&ye.call(t,r))&&n.push(r);return n},me=function(t){return Jt(t)?Yt(t,!0):ve(t)},_e=function(t){return function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=r?r(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),o?Q(n,u,c):J(n,u,c)}return n}(t,me(t))},je=function(t,e,n,r,o,i,a){var u=ge(t,n),c=ge(e,n),l=a.get(c);if(l)oe(t,n,l);else{var s=i?i(u,c,n+"",t,e,a):void 0,f=void 0===s;if(f){var p=K(c),h=!p&&Rt(c),d=!p&&!h&&Ct(c);s=c,p||h||d?K(u)?s=u:function(t){return X(t)&&Jt(t)}(u)?s=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(u):h?(f=!1,s=ie(c,!0)):d?(f=!1,s=ue(c,!0)):s=[]:function(t){if(!X(t)||"[object Object]"!=P(t))return!1;var e=se(t);if(null===e)return!0;var n=de.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&he.call(n)==be}(c)||Bt(c)?(s=u,Bt(u)?s=_e(u):(!T(u)||r&&B(u))&&(s=function(t){return"function"!=typeof t.constructor||Zt(t)?{}:le(se(t))}(c))):f=!1}f&&(a.set(c,s),o(s,c,r,i,a),a.delete(c)),oe(t,n,s)}},we=function t(e,n,r,o,i){e!==n&&Et(n,(function(a,u){if(T(a))i||(i=new re),je(e,n,u,r,t,o,i);else{var c=o?o(ge(e,u),a,u+"",e,n,i):void 0;void 0===c&&(c=a),oe(e,u,c)}}),me)},xe=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},Oe=Math.max,Se=function(t){return function(){return t}},Fe=Date.now,ze=function(t){var e=0,n=0;return function(){var r=Fe(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Z?function(t,e){return Z(t,"toString",{configurable:!0,enumerable:!1,value:Se(e),writable:!0})}:te),ke=function(t,e){return ze(function(t,e,n){return e=Oe(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=Oe(r.length-e,0),a=Array(i);++o<i;)a[o]=r[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=r[o];return u[e]=n(a),xe(t,this,u)}}(t,e,te),t+"")},Ae=function(t){return ke((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&function(t,e,n){if(!T(n))return!1;var r=typeof e;return!!("number"==r?Jt(n)&&zt(e,n.length):"string"==r&&e in n)&&G(n[e],t)}(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var u=n[r];u&&t(e,u,r)}return e}))}((function(t,e,n){we(t,e,n)})),Le=function(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n};function Ee(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new gt;++e<n;)this.add(t[e])}Ee.prototype.add=Ee.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Ee.prototype.has=function(t){return this.__data__.has(t)};var Me=Ee,Ie=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},Pe=function(t,e){return t.has(e)},Te=function(t,e,n,r,o,i){var a=1&n,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var s=-1,f=!0,p=2&n?new Me:void 0;for(i.set(t,e),i.set(e,t);++s<u;){var h=t[s],d=e[s];if(r)var b=a?r(d,h,s,e,t,i):r(h,d,s,t,e,i);if(void 0!==b){if(b)continue;f=!1;break}if(p){if(!Ie(e,(function(t,e){if(!Pe(p,e)&&(h===t||o(h,t,n,r,i)))return p.push(e)}))){f=!1;break}}else if(h!==d&&!o(h,d,n,r,i)){f=!1;break}}return i.delete(t),i.delete(e),f},Be=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},De=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Re=z?z.prototype:void 0,He=Re?Re.valueOf:void 0,Ue=Object.prototype.propertyIsEnumerable,We=Object.getOwnPropertySymbols,Ne=We?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}(We(t),(function(e){return Ue.call(t,e)})))}:function(){return[]},Ce=function(t){return function(t,e,n){var r=e(t);return K(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Kt,Ne)},qe=Object.prototype.hasOwnProperty,Ye=$(F,"DataView"),$e=$(F,"Promise"),Ze=$(F,"Set"),Qe=$(F,"WeakMap"),Ge=U(Ye),Ve=U(ht),Je=U($e),Ke=U(Ze),Xe=U(Qe),tn=P;(Ye&&"[object DataView]"!=tn(new Ye(new ArrayBuffer(1)))||ht&&"[object Map]"!=tn(new ht)||$e&&"[object Promise]"!=tn($e.resolve())||Ze&&"[object Set]"!=tn(new Ze)||Qe&&"[object WeakMap]"!=tn(new Qe))&&(tn=function(t){var e=P(t),n="[object Object]"==e?t.constructor:void 0,r=n?U(n):"";if(r)switch(r){case Ge:return"[object DataView]";case Ve:return"[object Map]";case Je:return"[object Promise]";case Ke:return"[object Set]";case Xe:return"[object WeakMap]"}return e});var en,nn=tn,rn="[object Arguments]",on="[object Array]",an="[object Object]",un=Object.prototype.hasOwnProperty,cn=function(t,e,n,r,o,i){var a=K(t),u=K(e),c=a?on:nn(t),l=u?on:nn(e),s=(c=c==rn?an:c)==an,f=(l=l==rn?an:l)==an,p=c==l;if(p&&Rt(t)){if(!Rt(e))return!1;a=!0,s=!1}if(p&&!s)return i||(i=new re),a||Ct(t)?Te(t,e,n,r,o,i):function(t,e,n,r,o,i,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new ae(t),new ae(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return G(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=Be;case"[object Set]":if(u||(u=De),t.size!=e.size&&!(1&r))return!1;var c=a.get(t);if(c)return c==e;r|=2,a.set(t,e);var l=Te(u(t),u(e),r,o,i,a);return a.delete(t),l;case"[object Symbol]":if(He)return He.call(t)==He.call(e)}return!1}(t,e,c,n,r,o,i);if(!(1&n)){var h=s&&un.call(t,"__wrapped__"),d=f&&un.call(e,"__wrapped__");if(h||d){var b=h?t.value():t,g=d?e.value():e;return i||(i=new re),o(b,g,n,r,i)}}return!!p&&(i||(i=new re),function(t,e,n,r,o,i){var a=1&n,u=Ce(t),c=u.length;if(c!=Ce(e).length&&!a)return!1;for(var l=c;l--;){var s=u[l];if(!(a?s in e:qe.call(e,s)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var p=!0;i.set(t,e),i.set(e,t);for(var h=a;++l<c;){var d=t[s=u[l]],b=e[s];if(r)var g=a?r(b,d,s,e,t,i):r(d,b,s,t,e,i);if(!(void 0===g?d===b||o(d,b,n,r,i):g)){p=!1;break}h||(h="constructor"==s)}if(p&&!h){var y=t.constructor,v=e.constructor;y!=v&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v)&&(p=!1)}return i.delete(t),i.delete(e),p}(t,e,n,r,o,i))},ln=function t(e,n,r,o,i){return e===n||(null==e||null==n||!X(e)&&!X(n)?e!=e&&n!=n:cn(e,n,r,o,t,i))},sn=function(t){return t==t&&!T(t)},fn=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}},pn=function(t){var e=function(t){for(var e=Kt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,sn(o)]}return e}(t);return 1==e.length&&e[0][2]?fn(e[0][0],e[0][1]):function(n){return n===t||function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],l=t[c],s=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var f=new re;if(r)var p=r(l,s,c,t,e,f);if(!(void 0===p?ln(s,l,3,r,f):p))return!1}}return!0}(n,t,e)}},hn=function(t,e){for(var n=0,r=(e=St(e,t)).length;null!=t&&n<r;)t=t[kt(e[n++])];return n&&n==r?t:void 0},dn=function(t,e){return null!=t&&e in Object(t)},bn=function(t,e){return null!=t&&function(t,e,n){for(var r=-1,o=(e=St(e,t)).length,i=!1;++r<o;){var a=kt(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Ht(o)&&zt(a,o)&&(K(t)||Bt(t))}(t,e,dn)},gn=function(t,e){return rt(t)&&sn(e)?fn(kt(t),e):function(n){var r=function(t,e,n){var r=null==t?void 0:hn(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?bn(n,t):ln(e,r,3)}},yn=function(t){return rt(t)?function(t){return function(e){return null==e?void 0:e[t]}}(kt(t)):function(t){return function(e){return hn(e,t)}}(t)},vn=function(t){return"function"==typeof t?t:null==t?te:"object"==typeof t?K(t)?gn(t[0],t[1]):pn(t):yn(t)},mn=function(t,e,n,r,o){return o(t,(function(t,o,i){n=r?(r=!1,t):e(n,t,o,i)})),n},_n=function(t,e,n){var r=K(t)?Le:mn,o=arguments.length<3;return r(t,vn(e),n,o,Xt)},jn=function(t,e,n){var r;return void 0===t&&(t={}),r=K(e)?e:[e],ee(r,(function(e){ee(n,(function(n,r){At(t,e+"."+r,n)}))})),t},wn=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],xn=function(t){return-1!==wn.indexOf(t)?t:"'"+t+"'"},On=(en=w((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"})))&&en.__esModule&&Object.prototype.hasOwnProperty.call(en,"default")?en.default:en,Sn=function t(e){return _n(e,(function(e,n,r){return e+=r+"{",ee(n,(function(n,r){if(T(n)){var o={};o[r]=n,e+=t(o)}else{var i=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(r,"-")+":"+n+";";["Webkit","ms","Moz","O"].forEach((function(t){r.slice(0,t.length)===t&&(i="-"+i)})),e+=i}})),e+="}"}),"")};t.exports=function(t){var e,n,i,a,u=c({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),l=(e=u,n=JSON.parse(JSON.stringify(b)),i=Object.assign({},n,e),a=f(i.baseFontSize),h(i.baseLineHeight)?(d(a(i.baseFontSize,"px")),i.baseLineHeightInPx=a(i.baseLineHeight,"px")):i.baseLineHeightInPx=d(i.baseFontSize)*i.baseLineHeight+"px",{rhythm:y(i),establishBaseline:function(){return f((t=i).baseFontSize),{fontSize:d(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return g(t,i)},adjustFontSizeTo:function(t,e,n){return null==e&&(e="auto"),function(t,e,n,r){null==n&&(n=r.baseFontSize),"%"===h(t)&&(t=d(r.baseFontSize)*(d(t)/100)+"px");var o=f(r.baseFontSize);t=o(t,"px",n=o(n,"px"));var i=y(r);return"auto"===e&&(e=g(t,r)),{fontSize:o(t,r.rhythmUnit,n),lineHeight:i(e,n)}}(t,e,n,i)}});return l.scale=function(t){var e=parseInt(u.baseFontSize,10),n=function(t,e){var n;return null==t&&(t=0),null==e&&(e="golden"),n=r(e)?e:null!=o[e]?o[e]:o.golden,Math.pow(n,t)}(t,u.scaleRatio)*e+"px";return l.adjustFontSizeTo(n)},Object.assign({},{options:u},l,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var n={},r=t.establishBaseline();n=jn(n,"html",{font:r.fontSize+"/"+r.lineHeight+" "+e.bodyFontFamily.map(xn).join(","),boxSizing:"border-box",overflowY:"scroll"}),n=jn(n,["*","*:before","*:after"],{boxSizing:"inherit"}),n=jn(n,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(xn).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),n=jn(n,"img",{maxWidth:"100%"});var o;o=function(t){return"number"==typeof t||X(t)&&"[object Number]"==P(t)}(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):function(t){return"string"==typeof t||!K(t)&&X(t)&&"[object String]"==P(t)}(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),n=jn(n,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),n=jn(n,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),n=jn(n,["b","strong","dt","th"],{fontWeight:e.boldWeight}),n=jn(n,"hr",{background:_(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),n=jn(n,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),n=jn(n,"li",{marginBottom:"calc("+o+" / 2)"}),n=jn(n,["ol li","ul li"],{paddingLeft:0}),n=jn(n,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),n=jn(n,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),n=jn(n,["li > p"],{marginBottom:"calc("+o+" / 2)"}),n=jn(n,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(n=jn(n,["abbr","acronym"],{borderBottom:"1px dotted "+_(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+_(50),cursor:"help",textDecoration:"none"},n=jn(n,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),n=jn(n,["thead"],{textAlign:"left"}),n=jn(n,["td,th"],{textAlign:"left",borderBottom:"1px solid "+_(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),n=jn(n,"th:first-child,td:first-child",{paddingLeft:0}),n=jn(n,"th:last-child,td:last-child",{paddingRight:0}),n=jn(n,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(xn).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),s=t.scale(-.3);return ee([i,a,u,c,l,s],(function(t,r){n=At(n,"h"+(r+1)+".fontSize",t.fontSize),n=At(n,"h"+(r+1)+".lineHeight",e.headerLineHeight)})),K(e.plugins)&&(n=_n(e.plugins,(function(n,r){return Ae(n,r(t,e,n))}),n)),e.overrideStyles&&B(e.overrideStyles)&&(n=Ae(n,e.overrideStyles(t,e,n))),e.overrideThemeStyles&&B(e.overrideThemeStyles)&&(n=Ae(n,e.overrideThemeStyles(t,e,n))),n}(l,u)},toString:function(){return function(t,e,n){var r=Sn(n);return e.includeNormalize&&(r=""+On+r),r}(0,u,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString();var e=document.head;e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}})}},7198:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});n(7294);var r=n(6625),o=n(5444),i=n(5713);var a={name:"146q31f",styles:"float:right;"},u={name:"146q31f",styles:"float:right;"},c={name:"146q31f",styles:"float:right;"};function l(t){var e=t.children,n=(0,o.K2)("3159585216");return(0,r.tZ)("main",{css:(0,r.iv)("margin:0 auto;max-width:720px;padding:",(0,i.q)(2),";padding-top:",(0,i.q)(1.5),";")},(0,r.tZ)(o.rU,{to:"/"},(0,r.tZ)("h3",{css:(0,r.iv)("margin-bottom:",(0,i.q)(2),";display:inline-block;font-style:normal;")},n.site.siteMetadata.title)),(0,r.tZ)(o.rU,{to:"/about/",css:a},"About"),(0,r.tZ)("p",{css:u}," / "),(0,r.tZ)(o.rU,{to:"/contact/",css:c},"Contact"),e)}},5713:function(t,e,n){"use strict";n.d(e,{q:function(){return u}});var r=n(4240),o=n.n(r),i=n(3402),a=new(o())(i.Z),u=a.rhythm}}]);
//# sourceMappingURL=commons-11b6b604a4449386370a.js.map