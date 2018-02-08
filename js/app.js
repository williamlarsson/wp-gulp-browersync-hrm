/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// GLOBAL VARIABLES
var isIE = /*@cc_on!@*/false || !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia,
    isIEorEdge = isIE || isEdge,
    isiPad = navigator.userAgent.match(/iPad/i) != null,
    isTouch = !!('ontouchstart' in window),
    transitionFast = 0.45,
    transitionSlow = 0.65,
    duration = transitionSlow * 1000,
    easing1 = [.77, 0, .175, 1],
    easing2 = 'cubic-bezier(0.19, 1, 0.22, 1)',
    easing = "easeInOutSine",
    delay = 0.4;

// IMPORTS
var Anime = __webpack_require__(0);

__webpack_require__(4);
__webpack_require__(5);

var App = function () {
    function App() {
        _classCallCheck(this, App);
    }

    _createClass(App, [{
        key: 'load',
        value: function load() {}
    }, {
        key: 'main',
        value: function main() {} //main

    }]);

    return App;
}(); // APP

var Project = new App();

document.addEventListener('ready', function (event) {
    Project.load();
});

window.addEventListener('load', function (event) {
    Project.main();
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Anime = __webpack_require__(0);

var Navigation = {
    init: function init(duration, easing) {
        this.open = false;
        this.duration = duration || 1000;
        this.easing = easing || 'easeOutExpo';
        this.cacheDOM();
        this.addEvents();
    },
    cacheDOM: function cacheDOM() {
        this.body = document.querySelector('body');
        this.toggle = this.body.querySelector('.nav__toggle');
        this.navigation = this.body.querySelector('nav.nav');
        this.navigationListItem = this.navigation.querySelectorAll('li');
    },
    addEvents: function addEvents() {
        var _this = this;

        this.toggle.addEventListener('touchstart', function (event) {
            return _this.handleClick(event);
        });
        this.toggle.addEventListener('mousedown', function (event) {
            return _this.handleClick(event);
        });
    },
    handleClick: function handleClick(event) {
        event.preventDefault();
        if (!this.open) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
    },
    openMenu: function openMenu() {
        var _this2 = this;

        this.open = true;
        this.timeline = new Anime.timeline({
            easing: this.easing,
            duration: this.duration
        });
        this.timeline.add({
            targets: this.navigation,
            translateX: {
                value: ["100%", "0%"]
            },
            run: function run() {
                _this2.body.classList.add('nav-is-open');
            }
        }).add({
            targets: this.navigationListItem,
            opacity: {
                value: [0, 1]
            },
            translateY: {
                value: [-10, 0]
            },
            delay: function delay(el, i) {
                return i * 50;
            },
            offset: 200
        });
    },
    closeMenu: function closeMenu() {
        var _this3 = this;

        this.open = false;
        this.timeline = new Anime.timeline({
            easing: this.easing,
            duration: this.duration
        });
        this.timeline.add({
            targets: this.navigationListItem,
            opacity: {
                value: [0]
            },
            translateY: {
                value: [-10]
            },
            delay: function delay(el, i) {
                return i * 50;
            },
            run: function run() {
                _this3.body.classList.remove('nav-is-open');
            }
        }).add({
            targets: this.navigation,
            translateX: {
                value: ["100%"]
            },
            offset: 200
        });
    }
};

Navigation.init();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Anime = __webpack_require__(0);
var Barba = __webpack_require__(6);
console.log('asdf');
var PageTransition = {
    init: function init(duration, easing) {
        this.newBodyClass = '';
        this.nextPage = '';
        this.duration = duration || 2000;
        this.easing = easing || 'easeOutExpo';
        this.cacheDOM();
        this.addEvents();
        this.setup();
    },
    cacheDOM: function cacheDOM() {
        this.body = document.querySelector('body');
    },
    addEvents: function addEvents() {},
    updateClasses: function updateClasses(newPageRawHTML) {
        this.body.classList = this.newBodyClass;
        console.log('updated');
    },
    setup: function setup() {
        var _this2 = this;

        var easing = this.easing,
            duration = this.duration,
            updateClasses = this.updateClasses.bind(this);
        var ReducerTransition = Barba.BaseTransition.extend({
            map: {
                // front: {
                //     music: this.toMusicTransition,
                // },
                default: this.fadeTransition
            },
            start: function start() {
                var _this = this;

                this.newContainerLoading.then(function () {
                    var from = Barba.Pjax.History.prevStatus().namespace;
                    var to = Barba.Pjax.History.currentStatus().namespace;
                    return (_this.map[from] && _this.map[from][to] || _this.map.default)(_this.oldContainer, _this.newContainer, _this.done.bind(_this), duration, easing, updateClasses);
                });
            }
        });
        Barba.Pjax.Dom.containerClass = 'inner-wrapper';
        Barba.Pjax.Dom.wrapperId = 'outer-wrapper';
        Barba.Pjax.init();
        Barba.Prefetch.init();
        Barba.Dispatcher.on('newPageReady', function (currentStatus, prevStatus, HTMLElementContainer, newPageRawHTML) {
            _this2.newBodyClass = newPageRawHTML.match(/body\sclass=['|"]([^'|"]*)['|"]/)[1]; //getMe
        });
        Barba.Dispatcher.on('transitionCompleted', function () {
            // this.updateClasses();
        });
        Barba.Pjax.getTransition = function () {
            return ReducerTransition;
        };
    },
    fadeTransition: function fadeTransition(oldContainer, newContainer, done, duration, easing, updateClasses) {
        Anime.timeline({
            easing: easing,
            duration: duration,
            complete: function complete() {
                done();
            }
        }).add({
            targets: oldContainer,
            opacity: {
                value: [1, 0]
            }
        }).add({
            begin: function begin() {
                updateClasses();
            },
            targets: newContainer,
            opacity: {
                value: [0, 1]
            }
        });
    }
};
PageTransition.init();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Barba", [], factory);
	else if(typeof exports === 'object')
		exports["Barba"] = factory();
	else
		root["Barba"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//Promise polyfill https://github.com/taylorhakes/promise-polyfill
	
	if (typeof Promise !== 'function') {
	 window.Promise = __webpack_require__(1);
	}
	
	var Barba = {
	  version: '1.0.0',
	  BaseTransition: __webpack_require__(4),
	  BaseView: __webpack_require__(6),
	  BaseCache: __webpack_require__(8),
	  Dispatcher: __webpack_require__(7),
	  HistoryManager: __webpack_require__(9),
	  Pjax: __webpack_require__(10),
	  Prefetch: __webpack_require__(13),
	  Utils: __webpack_require__(5)
	};
	
	module.exports = Barba;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {
	
	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;
	
	  function noop() {
	  }
	
	  // Use polyfill for setImmediate for performance gains
	  var asap = (typeof setImmediate === 'function' && setImmediate) ||
	    function (fn) {
	      setTimeoutFunc(fn, 0);
	    };
	
	  var onUnhandledRejection = function onUnhandledRejection(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };
	
	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }
	
	  function Promise(fn) {
	    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];
	
	    doResolve(fn, this);
	  }
	
	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    asap(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }
	
	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }
	
	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }
	
	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      asap(function() {
	        if (!self._handled) {
	          onUnhandledRejection(self._value);
	        }
	      });
	    }
	
	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }
	
	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }
	
	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }
	
	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };
	
	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new (this.constructor)(noop);
	
	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };
	
	  Promise.all = function (arr) {
	    var args = Array.prototype.slice.call(arr);
	
	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;
	
	      function res(i, val) {
	        try {
	          if (val && (typeof val === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }
	
	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };
	
	  Promise.resolve = function (value) {
	    if (value && typeof value === 'object' && value.constructor === Promise) {
	      return value;
	    }
	
	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };
	
	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };
	
	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };
	
	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @private
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    asap = fn;
	  };
	
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    onUnhandledRejection = fn;
	  };
	
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }
	
	})(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(3).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(5);
	
	/**
	 * BaseTransition to extend
	 *
	 * @namespace Barba.BaseTransition
	 * @type {Object}
	 */
	var BaseTransition = {
	  /**
	   * @memberOf Barba.BaseTransition
	   * @type {HTMLElement}
	   */
	  oldContainer: undefined,
	
	  /**
	   * @memberOf Barba.BaseTransition
	   * @type {HTMLElement}
	   */
	  newContainer: undefined,
	
	  /**
	   * @memberOf Barba.BaseTransition
	   * @type {Promise}
	   */
	  newContainerLoading: undefined,
	
	  /**
	   * Helper to extend the object
	   *
	   * @memberOf Barba.BaseTransition
	   * @param  {Object} newObject
	   * @return {Object} newInheritObject
	   */
	  extend: function(obj){
	    return Utils.extend(this, obj);
	  },
	
	  /**
	   * This function is called from Pjax module to initialize
	   * the transition.
	   *
	   * @memberOf Barba.BaseTransition
	   * @private
	   * @param  {HTMLElement} oldContainer
	   * @param  {Promise} newContainer
	   * @return {Promise}
	   */
	  init: function(oldContainer, newContainer) {
	    var _this = this;
	
	    this.oldContainer = oldContainer;
	    this._newContainerPromise = newContainer;
	
	    this.deferred = Utils.deferred();
	    this.newContainerReady = Utils.deferred();
	    this.newContainerLoading = this.newContainerReady.promise;
	
	    this.start();
	
	    this._newContainerPromise.then(function(newContainer) {
	      _this.newContainer = newContainer;
	      _this.newContainerReady.resolve();
	    });
	
	    return this.deferred.promise;
	  },
	
	  /**
	   * This function needs to be called as soon the Transition is finished
	   *
	   * @memberOf Barba.BaseTransition
	   */
	  done: function() {
	    this.oldContainer.parentNode.removeChild(this.oldContainer);
	    this.newContainer.style.visibility = 'visible';
	    this.deferred.resolve();
	  },
	
	  /**
	   * Constructor for your Transition
	   *
	   * @memberOf Barba.BaseTransition
	   * @abstract
	   */
	  start: function() {},
	};
	
	module.exports = BaseTransition;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Just an object with some helpful functions
	 *
	 * @type {Object}
	 * @namespace Barba.Utils
	 */
	var Utils = {
	  /**
	   * Return the current url
	   *
	   * @memberOf Barba.Utils
	   * @return {String} currentUrl
	   */
	  getCurrentUrl: function() {
	    return window.location.protocol + '//' +
	           window.location.host +
	           window.location.pathname +
	           window.location.search;
	  },
	
	  /**
	   * Given an url, return it without the hash
	   *
	   * @memberOf Barba.Utils
	   * @private
	   * @param  {String} url
	   * @return {String} newCleanUrl
	   */
	  cleanLink: function(url) {
	    return url.replace(/#.*/, '');
	  },
	
	  /**
	   * Time in millisecond after the xhr request goes in timeout
	   *
	   * @memberOf Barba.Utils
	   * @type {Number}
	   * @default
	   */
	  xhrTimeout: 5000,
	
	  /**
	   * Start an XMLHttpRequest() and return a Promise
	   *
	   * @memberOf Barba.Utils
	   * @param  {String} url
	   * @return {Promise}
	   */
	  xhr: function(url) {
	    var deferred = this.deferred();
	    var req = new XMLHttpRequest();
	
	    req.onreadystatechange = function() {
	      if (req.readyState === 4) {
	        if (req.status === 200) {
	          return deferred.resolve(req.responseText);
	        } else {
	          return deferred.reject(new Error('xhr: HTTP code is not 200'));
	        }
	      }
	    };
	
	    req.ontimeout = function() {
	      return deferred.reject(new Error('xhr: Timeout exceeded'));
	    };
	
	    req.open('GET', url);
	    req.timeout = this.xhrTimeout;
	    req.setRequestHeader('x-barba', 'yes');
	    req.send();
	
	    return deferred.promise;
	  },
	
	  /**
	   * Get obj and props and return a new object with the property merged
	   *
	   * @memberOf Barba.Utils
	   * @param  {object} obj
	   * @param  {object} props
	   * @return {object}
	   */
	  extend: function(obj, props) {
	    var newObj = Object.create(obj);
	
	    for(var prop in props) {
	      if(props.hasOwnProperty(prop)) {
	        newObj[prop] = props[prop];
	      }
	    }
	
	    return newObj;
	  },
	
	  /**
	   * Return a new "Deferred" object
	   * https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
	   *
	   * @memberOf Barba.Utils
	   * @return {Deferred}
	   */
	  deferred: function() {
	    return new function() {
	      this.resolve = null;
	      this.reject = null;
	
	      this.promise = new Promise(function(resolve, reject) {
	        this.resolve = resolve;
	        this.reject = reject;
	      }.bind(this));
	    };
	  },
	
	  /**
	   * Return the port number normalized, eventually you can pass a string to be normalized.
	   *
	   * @memberOf Barba.Utils
	   * @private
	   * @param  {String} p
	   * @return {Int} port
	   */
	  getPort: function(p) {
	    var port = typeof p !== 'undefined' ? p : window.location.port;
	    var protocol = window.location.protocol;
	
	    if (port != '')
	      return parseInt(port);
	
	    if (protocol === 'http:')
	      return 80;
	
	    if (protocol === 'https:')
	      return 443;
	  }
	};
	
	module.exports = Utils;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Dispatcher = __webpack_require__(7);
	var Utils = __webpack_require__(5);
	
	/**
	 * BaseView to be extended
	 *
	 * @namespace Barba.BaseView
	 * @type {Object}
	 */
	var BaseView  = {
	  /**
	   * Namespace of the view.
	   * (need to be associated with the data-namespace of the container)
	   *
	   * @memberOf Barba.BaseView
	   * @type {String}
	   */
	  namespace: null,
	
	  /**
	   * Helper to extend the object
	   *
	   * @memberOf Barba.BaseView
	   * @param  {Object} newObject
	   * @return {Object} newInheritObject
	   */
	  extend: function(obj){
	    return Utils.extend(this, obj);
	  },
	
	  /**
	   * Init the view.
	   * P.S. Is suggested to init the view before starting Barba.Pjax.start(),
	   * in this way .onEnter() and .onEnterCompleted() will be fired for the current
	   * container when the page is loaded.
	   *
	   * @memberOf Barba.BaseView
	   */
	  init: function() {
	    var _this = this;
	
	    Dispatcher.on('initStateChange',
	      function(newStatus, oldStatus) {
	        if (oldStatus && oldStatus.namespace === _this.namespace)
	          _this.onLeave();
	      }
	    );
	
	    Dispatcher.on('newPageReady',
	      function(newStatus, oldStatus, container) {
	        _this.container = container;
	
	        if (newStatus.namespace === _this.namespace)
	          _this.onEnter();
	      }
	    );
	
	    Dispatcher.on('transitionCompleted',
	      function(newStatus, oldStatus) {
	        if (newStatus.namespace === _this.namespace)
	          _this.onEnterCompleted();
	
	        if (oldStatus && oldStatus.namespace === _this.namespace)
	          _this.onLeaveCompleted();
	      }
	    );
	  },
	
	 /**
	  * This function will be fired when the container
	  * is ready and attached to the DOM.
	  *
	  * @memberOf Barba.BaseView
	  * @abstract
	  */
	  onEnter: function() {},
	
	  /**
	   * This function will be fired when the transition
	   * to this container has just finished.
	   *
	   * @memberOf Barba.BaseView
	   * @abstract
	   */
	  onEnterCompleted: function() {},
	
	  /**
	   * This function will be fired when the transition
	   * to a new container has just started.
	   *
	   * @memberOf Barba.BaseView
	   * @abstract
	   */
	  onLeave: function() {},
	
	  /**
	   * This function will be fired when the container
	   * has just been removed from the DOM.
	   *
	   * @memberOf Barba.BaseView
	   * @abstract
	   */
	  onLeaveCompleted: function() {}
	}
	
	module.exports = BaseView;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Little Dispatcher inspired by MicroEvent.js
	 *
	 * @namespace Barba.Dispatcher
	 * @type {Object}
	 */
	var Dispatcher = {
	  /**
	   * Object that keeps all the events
	   *
	   * @memberOf Barba.Dispatcher
	   * @readOnly
	   * @type {Object}
	   */
	  events: {},
	
	  /**
	   * Bind a callback to an event
	   *
	   * @memberOf Barba.Dispatcher
	   * @param  {String} eventName
	   * @param  {Function} function
	   */
	  on: function(e, f) {
	    this.events[e] = this.events[e] || [];
	    this.events[e].push(f);
	  },
	
	  /**
	   * Unbind event
	   *
	   * @memberOf Barba.Dispatcher
	   * @param  {String} eventName
	   * @param  {Function} function
	   */
	  off: function(e, f) {
	    if(e in this.events === false)
	      return;
	
	    this.events[e].splice(this.events[e].indexOf(f), 1);
	  },
	
	  /**
	   * Fire the event running all the event associated to it
	   *
	   * @memberOf Barba.Dispatcher
	   * @param  {String} eventName
	   * @param  {...*} args
	   */
	  trigger: function(e) {//e, ...args
	    if (e in this.events === false)
	      return;
	
	    for(var i = 0; i < this.events[e].length; i++){
	      this.events[e][i].apply(this, Array.prototype.slice.call(arguments, 1));
	    }
	  }
	};
	
	module.exports = Dispatcher;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(5);
	
	/**
	 * BaseCache it's a simple static cache
	 *
	 * @namespace Barba.BaseCache
	 * @type {Object}
	 */
	var BaseCache = {
	  /**
	   * The Object that keeps all the key value information
	   *
	   * @memberOf Barba.BaseCache
	   * @type {Object}
	   */
	  data: {},
	
	  /**
	   * Helper to extend this object
	   *
	   * @memberOf Barba.BaseCache
	   * @private
	   * @param  {Object} newObject
	   * @return {Object} newInheritObject
	   */
	  extend: function(obj) {
	    return Utils.extend(this, obj);
	  },
	
	  /**
	   * Set a key and value data, mainly Barba is going to save promises
	   *
	   * @memberOf Barba.BaseCache
	   * @param {String} key
	   * @param {*} value
	   */
	  set: function(key, val) {
	    this.data[key] = val;
	  },
	
	  /**
	   * Retrieve the data using the key
	   *
	   * @memberOf Barba.BaseCache
	   * @param  {String} key
	   * @return {*}
	   */
	  get: function(key) {
	    return this.data[key];
	  },
	
	  /**
	   * Flush the cache
	   *
	   * @memberOf Barba.BaseCache
	   */
	  reset: function() {
	    this.data = {};
	  }
	};
	
	module.exports = BaseCache;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * HistoryManager helps to keep track of the navigation
	 *
	 * @namespace Barba.HistoryManager
	 * @type {Object}
	 */
	var HistoryManager = {
	  /**
	   * Keep track of the status in historic order
	   *
	   * @memberOf Barba.HistoryManager
	   * @readOnly
	   * @type {Array}
	   */
	  history: [],
	
	  /**
	   * Add a new set of url and namespace
	   *
	   * @memberOf Barba.HistoryManager
	   * @param {String} url
	   * @param {String} namespace
	   * @private
	   */
	  add: function(url, namespace) {
	    if (!namespace)
	      namespace = undefined;
	
	    this.history.push({
	      url: url,
	      namespace: namespace
	    });
	  },
	
	  /**
	   * Return information about the current status
	   *
	   * @memberOf Barba.HistoryManager
	   * @return {Object}
	   */
	  currentStatus: function() {
	    return this.history[this.history.length - 1];
	  },
	
	  /**
	   * Return information about the previous status
	   *
	   * @memberOf Barba.HistoryManager
	   * @return {Object}
	   */
	  prevStatus: function() {
	    var history = this.history;
	
	    if (history.length < 2)
	      return null;
	
	    return history[history.length - 2];
	  }
	};
	
	module.exports = HistoryManager;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(5);
	var Dispatcher = __webpack_require__(7);
	var HideShowTransition = __webpack_require__(11);
	var BaseCache = __webpack_require__(8);
	
	var HistoryManager = __webpack_require__(9);
	var Dom = __webpack_require__(12);
	
	/**
	 * Pjax is a static object with main function
	 *
	 * @namespace Barba.Pjax
	 * @borrows Dom as Dom
	 * @type {Object}
	 */
	var Pjax = {
	  Dom: Dom,
	  History: HistoryManager,
	  Cache: BaseCache,
	
	  /**
	   * Indicate wether or not use the cache
	   *
	   * @memberOf Barba.Pjax
	   * @type {Boolean}
	   * @default
	   */
	  cacheEnabled: true,
	
	  /**
	   * Indicate if there is an animation in progress
	   *
	   * @memberOf Barba.Pjax
	   * @readOnly
	   * @type {Boolean}
	   */
	  transitionProgress: false,
	
	  /**
	   * Class name used to ignore links
	   *
	   * @memberOf Barba.Pjax
	   * @type {String}
	   * @default
	   */
	  ignoreClassLink: 'no-barba',
	
	  /**
	   * Function to be called to start Pjax
	   *
	   * @memberOf Barba.Pjax
	   */
	  start: function() {
	    this.init();
	  },
	
	  /**
	   * Init the events
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   */
	  init: function() {
	    var container = this.Dom.getContainer();
	    var wrapper = this.Dom.getWrapper();
	
	    wrapper.setAttribute('aria-live', 'polite');
	
	    this.History.add(
	      this.getCurrentUrl(),
	      this.Dom.getNamespace(container)
	    );
	
	    //Fire for the current view.
	    Dispatcher.trigger('initStateChange', this.History.currentStatus());
	    Dispatcher.trigger('newPageReady',
	      this.History.currentStatus(),
	      {},
	      container,
	      this.Dom.currentHTML
	    );
	    Dispatcher.trigger('transitionCompleted', this.History.currentStatus());
	
	    this.bindEvents();
	  },
	
	  /**
	   * Attach the eventlisteners
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   */
	  bindEvents: function() {
	    document.addEventListener('click',
	      this.onLinkClick.bind(this)
	    );
	
	    window.addEventListener('popstate',
	      this.onStateChange.bind(this)
	    );
	  },
	
	  /**
	   * Return the currentURL cleaned
	   *
	   * @memberOf Barba.Pjax
	   * @return {String} currentUrl
	   */
	  getCurrentUrl: function() {
	    return Utils.cleanLink(
	      Utils.getCurrentUrl()
	    );
	  },
	
	  /**
	   * Change the URL with pushstate and trigger the state change
	   *
	   * @memberOf Barba.Pjax
	   * @param {String} newUrl
	   */
	  goTo: function(url) {
	    window.history.pushState(null, null, url);
	    this.onStateChange();
	  },
	
	  /**
	   * Force the browser to go to a certain url
	   *
	   * @memberOf Barba.Pjax
	   * @param {String} url
	   * @private
	   */
	  forceGoTo: function(url) {
	    window.location = url;
	  },
	
	  /**
	   * Load an url, will start an xhr request or load from the cache
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   * @param  {String} url
	   * @return {Promise}
	   */
	  load: function(url) {
	    var deferred = Utils.deferred();
	    var _this = this;
	    var xhr;
	
	    xhr = this.Cache.get(url);
	
	    if (!xhr) {
	      xhr = Utils.xhr(url);
	      this.Cache.set(url, xhr);
	    }
	
	    xhr.then(
	      function(data) {
	        var container = _this.Dom.parseResponse(data);
	
	        _this.Dom.putContainer(container);
	
	        if (!_this.cacheEnabled)
	          _this.Cache.reset();
	
	        deferred.resolve(container);
	      },
	      function() {
	        //Something went wrong (timeout, 404, 505...)
	        _this.forceGoTo(url);
	
	        deferred.reject();
	      }
	    );
	
	    return deferred.promise;
	  },
	
	  /**
	   * Get the .href parameter out of an element
	   * and handle special cases (like xlink:href)
	   *
	   * @private
	   * @memberOf Barba.Pjax
	   * @param  {HTMLElement} el
	   * @return {String} href
	   */
	  getHref: function(el) {
	    if (!el) {
	      return undefined;
	    }
	
	    if (el.getAttribute && typeof el.getAttribute('xlink:href') === 'string') {
	      return el.getAttribute('xlink:href');
	    }
	
	    if (typeof el.href === 'string') {
	      return el.href;
	    }
	
	    return undefined;
	  },
	
	  /**
	   * Callback called from click event
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   * @param {MouseEvent} evt
	   */
	  onLinkClick: function(evt) {
	    var el = evt.target;
	
	    //Go up in the nodelist until we
	    //find something with an href
	    while (el && !this.getHref(el)) {
	      el = el.parentNode;
	    }
	
	    if (this.preventCheck(evt, el)) {
	      evt.stopPropagation();
	      evt.preventDefault();
	
	      Dispatcher.trigger('linkClicked', el, evt);
	
	      var href = this.getHref(el);
	      this.goTo(href);
	    }
	  },
	
	  /**
	   * Determine if the link should be followed
	   *
	   * @memberOf Barba.Pjax
	   * @param  {MouseEvent} evt
	   * @param  {HTMLElement} element
	   * @return {Boolean}
	   */
	  preventCheck: function(evt, element) {
	    if (!window.history.pushState)
	      return false;
	
	    var href = this.getHref(element);
	
	    //User
	    if (!element || !href)
	      return false;
	
	    //Middle click, cmd click, and ctrl click
	    if (evt.which > 1 || evt.metaKey || evt.ctrlKey || evt.shiftKey || evt.altKey)
	      return false;
	
	    //Ignore target with _blank target
	    if (element.target && element.target === '_blank')
	      return false;
	
	    //Check if it's the same domain
	    if (window.location.protocol !== element.protocol || window.location.hostname !== element.hostname)
	      return false;
	
	    //Check if the port is the same
	    if (Utils.getPort() !== Utils.getPort(element.port))
	      return false;
	
	    //Ignore case when a hash is being tacked on the current URL
	    if (href.indexOf('#') > -1)
	      return false;
	
	    //Ignore case where there is download attribute
	    if (element.getAttribute && typeof element.getAttribute('download') === 'string')
	      return false;
	
	    //In case you're trying to load the same page
	    if (Utils.cleanLink(href) == Utils.cleanLink(location.href))
	      return false;
	
	    if (element.classList.contains(this.ignoreClassLink))
	      return false;
	
	    return true;
	  },
	
	  /**
	   * Return a transition object
	   *
	   * @memberOf Barba.Pjax
	   * @return {Barba.Transition} Transition object
	   */
	  getTransition: function() {
	    //User customizable
	    return HideShowTransition;
	  },
	
	  /**
	   * Method called after a 'popstate' or from .goTo()
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   */
	  onStateChange: function() {
	    var newUrl = this.getCurrentUrl();
	
	    if (this.transitionProgress)
	      this.forceGoTo(newUrl);
	
	    if (this.History.currentStatus().url === newUrl)
	      return false;
	
	    this.History.add(newUrl);
	
	    var newContainer = this.load(newUrl);
	    var transition = Object.create(this.getTransition());
	
	    this.transitionProgress = true;
	
	    Dispatcher.trigger('initStateChange',
	      this.History.currentStatus(),
	      this.History.prevStatus()
	    );
	
	    var transitionInstance = transition.init(
	      this.Dom.getContainer(),
	      newContainer
	    );
	
	    newContainer.then(
	      this.onNewContainerLoaded.bind(this)
	    );
	
	    transitionInstance.then(
	      this.onTransitionEnd.bind(this)
	    );
	  },
	
	  /**
	   * Function called as soon the new container is ready
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   * @param {HTMLElement} container
	   */
	  onNewContainerLoaded: function(container) {
	    var currentStatus = this.History.currentStatus();
	    currentStatus.namespace = this.Dom.getNamespace(container);
	
	    Dispatcher.trigger('newPageReady',
	      this.History.currentStatus(),
	      this.History.prevStatus(),
	      container,
	      this.Dom.currentHTML
	    );
	  },
	
	  /**
	   * Function called as soon the transition is finished
	   *
	   * @memberOf Barba.Pjax
	   * @private
	   */
	  onTransitionEnd: function() {
	    this.transitionProgress = false;
	
	    Dispatcher.trigger('transitionCompleted',
	      this.History.currentStatus(),
	      this.History.prevStatus()
	    );
	  }
	};
	
	module.exports = Pjax;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var BaseTransition = __webpack_require__(4);
	
	/**
	 * Basic Transition object, wait for the new Container to be ready,
	 * scroll top, and finish the transition (removing the old container and displaying the new one)
	 *
	 * @private
	 * @namespace Barba.HideShowTransition
	 * @augments Barba.BaseTransition
	 */
	var HideShowTransition = BaseTransition.extend({
	  start: function() {
	    this.newContainerLoading.then(this.finish.bind(this));
	  },
	
	  finish: function() {
	    document.body.scrollTop = 0;
	    this.done();
	  }
	});
	
	module.exports = HideShowTransition;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Object that is going to deal with DOM parsing/manipulation
	 *
	 * @namespace Barba.Pjax.Dom
	 * @type {Object}
	 */
	var Dom = {
	  /**
	   * The name of the data attribute on the container
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @type {String}
	   * @default
	   */
	  dataNamespace: 'namespace',
	
	  /**
	   * Id of the main wrapper
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @type {String}
	   * @default
	   */
	  wrapperId: 'barba-wrapper',
	
	  /**
	   * Class name used to identify the containers
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @type {String}
	   * @default
	   */
	  containerClass: 'barba-container',
	
	  /**
	   * Full HTML String of the current page.
	   * By default is the innerHTML of the initial loaded page.
	   *
	   * Each time a new page is loaded, the value is the response of the xhr call.
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @type {String}
	   */
	  currentHTML: document.documentElement.innerHTML,
	
	  /**
	   * Parse the responseText obtained from the xhr call
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {String} responseText
	   * @return {HTMLElement}
	   */
	  parseResponse: function(responseText) {
	    this.currentHTML = responseText;
	
	    var wrapper = document.createElement('div');
	    wrapper.innerHTML = responseText;
	
	    var titleEl = wrapper.querySelector('title');
	
	    if (titleEl)
	      document.title = titleEl.textContent;
	
	    return this.getContainer(wrapper);
	  },
	
	  /**
	   * Get the main barba wrapper by the ID `wrapperId`
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @return {HTMLElement} element
	   */
	  getWrapper: function() {
	    var wrapper = document.getElementById(this.wrapperId);
	
	    if (!wrapper)
	      throw new Error('Barba.js: wrapper not found!');
	
	    return wrapper;
	  },
	
	  /**
	   * Get the container on the current DOM,
	   * or from an HTMLElement passed via argument
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {HTMLElement} element
	   * @return {HTMLElement}
	   */
	  getContainer: function(element) {
	    if (!element)
	      element = document.body;
	
	    if (!element)
	      throw new Error('Barba.js: DOM not ready!');
	
	    var container = this.parseContainer(element);
	
	    if (container && container.jquery)
	      container = container[0];
	
	    if (!container)
	      throw new Error('Barba.js: no container found');
	
	    return container;
	  },
	
	  /**
	   * Get the namespace of the container
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {HTMLElement} element
	   * @return {String}
	   */
	  getNamespace: function(element) {
	    if (element && element.dataset) {
	      return element.dataset[this.dataNamespace];
	    } else if (element) {
	      return element.getAttribute('data-' + this.dataNamespace);
	    }
	
	    return null;
	  },
	
	  /**
	   * Put the container on the page
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {HTMLElement} element
	   */
	  putContainer: function(element) {
	    element.style.visibility = 'hidden';
	
	    var wrapper = this.getWrapper();
	    wrapper.appendChild(element);
	  },
	
	  /**
	   * Get container selector
	   *
	   * @memberOf Barba.Pjax.Dom
	   * @private
	   * @param  {HTMLElement} element
	   * @return {HTMLElement} element
	   */
	  parseContainer: function(element) {
	    return element.querySelector('.' + this.containerClass);
	  }
	};
	
	module.exports = Dom;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var Utils = __webpack_require__(5);
	var Pjax = __webpack_require__(10);
	
	/**
	 * Prefetch
	 *
	 * @namespace Barba.Prefetch
	 * @type {Object}
	 */
	var Prefetch = {
	  /**
	   * Class name used to ignore prefetch on links
	   *
	   * @memberOf Barba.Prefetch
	   * @type {String}
	   * @default
	   */
	  ignoreClassLink: 'no-barba-prefetch',
	
	  /**
	   * Init the event listener on mouseover and touchstart
	   * for the prefetch
	   *
	   * @memberOf Barba.Prefetch
	   */
	  init: function() {
	    if (!window.history.pushState) {
	      return false;
	    }
	
	    document.body.addEventListener('mouseover', this.onLinkEnter.bind(this));
	    document.body.addEventListener('touchstart', this.onLinkEnter.bind(this));
	  },
	
	  /**
	   * Callback for the mousehover/touchstart
	   *
	   * @memberOf Barba.Prefetch
	   * @private
	   * @param  {Object} evt
	   */
	  onLinkEnter: function(evt) {
	    var el = evt.target;
	
	    while (el && !Pjax.getHref(el)) {
	      el = el.parentNode;
	    }
	
	    if (!el || el.classList.contains(this.ignoreClassLink)) {
	      return;
	    }
	
	    var url = Pjax.getHref(el);
	
	    //Check if the link is elegible for Pjax
	    if (Pjax.preventCheck(evt, el) && !Pjax.Cache.get(url)) {
	      var xhr = Utils.xhr(url);
	      Pjax.Cache.set(url, xhr);
	    }
	  }
	};
	
	module.exports = Prefetch;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=barba.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDQ3Yzc3OTlhYzEwMjI1OTczZmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FuaW1lanMvYW5pbWUubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGFnZVRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhcmJhLmpzL2Rpc3QvYmFyYmEuanMiXSwibmFtZXMiOlsiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiaXNFZGdlIiwid2luZG93IiwiU3R5bGVNZWRpYSIsImlzSUVvckVkZ2UiLCJpc2lQYWQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImlzVG91Y2giLCJ0cmFuc2l0aW9uRmFzdCIsInRyYW5zaXRpb25TbG93IiwiZHVyYXRpb24iLCJlYXNpbmcxIiwiZWFzaW5nMiIsImVhc2luZyIsImRlbGF5IiwiQW5pbWUiLCJyZXF1aXJlIiwiQXBwIiwiUHJvamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImxvYWQiLCJtYWluIiwiTmF2aWdhdGlvbiIsImluaXQiLCJvcGVuIiwiY2FjaGVET00iLCJhZGRFdmVudHMiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uTGlzdEl0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW5NZW51IiwiY2xvc2VNZW51IiwidGltZWxpbmUiLCJhZGQiLCJ0YXJnZXRzIiwidHJhbnNsYXRlWCIsInZhbHVlIiwicnVuIiwiY2xhc3NMaXN0Iiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJlbCIsImkiLCJvZmZzZXQiLCJyZW1vdmUiLCJCYXJiYSIsImNvbnNvbGUiLCJsb2ciLCJQYWdlVHJhbnNpdGlvbiIsIm5ld0JvZHlDbGFzcyIsIm5leHRQYWdlIiwic2V0dXAiLCJ1cGRhdGVDbGFzc2VzIiwibmV3UGFnZVJhd0hUTUwiLCJiaW5kIiwiUmVkdWNlclRyYW5zaXRpb24iLCJCYXNlVHJhbnNpdGlvbiIsImV4dGVuZCIsIm1hcCIsImRlZmF1bHQiLCJmYWRlVHJhbnNpdGlvbiIsInN0YXJ0IiwibmV3Q29udGFpbmVyTG9hZGluZyIsInRoZW4iLCJmcm9tIiwiUGpheCIsIkhpc3RvcnkiLCJwcmV2U3RhdHVzIiwibmFtZXNwYWNlIiwidG8iLCJjdXJyZW50U3RhdHVzIiwib2xkQ29udGFpbmVyIiwibmV3Q29udGFpbmVyIiwiZG9uZSIsIkRvbSIsImNvbnRhaW5lckNsYXNzIiwid3JhcHBlcklkIiwiUHJlZmV0Y2giLCJEaXNwYXRjaGVyIiwib24iLCJIVE1MRWxlbWVudENvbnRhaW5lciIsImdldFRyYW5zaXRpb24iLCJjb21wbGV0ZSIsImJlZ2luIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OENDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVLHdHQUF3RyxpRkFBaUYseURBQXlELDhCQUE4QixrR0FBa0csdUNBQXVDO0FBQ2hiLDhC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O0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSxrREFBa0QsU0FBUztBQUMzRDtBQUNBO0FBQ0E7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M0IsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA0N2M3Nzk5YWMxMDIyNTk3M2ZhIiwiLypcbiAyMDE3IEp1bGlhbiBHYXJuaWVyXG4gUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4qL1xudmFyICRqc2NvbXA9e3Njb3BlOnt9fTskanNjb21wLmRlZmluZVByb3BlcnR5PVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihlLHIscCl7aWYocC5nZXR8fHAuc2V0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJFUzMgZG9lcyBub3Qgc3VwcG9ydCBnZXR0ZXJzIGFuZCBzZXR0ZXJzLlwiKTtlIT1BcnJheS5wcm90b3R5cGUmJmUhPU9iamVjdC5wcm90b3R5cGUmJihlW3JdPXAudmFsdWUpfTskanNjb21wLmdldEdsb2JhbD1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT1lP2U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDplfTskanNjb21wLmdsb2JhbD0kanNjb21wLmdldEdsb2JhbCh0aGlzKTskanNjb21wLlNZTUJPTF9QUkVGSVg9XCJqc2NvbXBfc3ltYm9sX1wiO1xuJGpzY29tcC5pbml0U3ltYm9sPWZ1bmN0aW9uKCl7JGpzY29tcC5pbml0U3ltYm9sPWZ1bmN0aW9uKCl7fTskanNjb21wLmdsb2JhbC5TeW1ib2x8fCgkanNjb21wLmdsb2JhbC5TeW1ib2w9JGpzY29tcC5TeW1ib2wpfTskanNjb21wLnN5bWJvbENvdW50ZXJfPTA7JGpzY29tcC5TeW1ib2w9ZnVuY3Rpb24oZSl7cmV0dXJuICRqc2NvbXAuU1lNQk9MX1BSRUZJWCsoZXx8XCJcIikrJGpzY29tcC5zeW1ib2xDb3VudGVyXysrfTtcbiRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yPWZ1bmN0aW9uKCl7JGpzY29tcC5pbml0U3ltYm9sKCk7dmFyIGU9JGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yO2V8fChlPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcj0kanNjb21wLmdsb2JhbC5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2VdJiYkanNjb21wLmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxlLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gJGpzY29tcC5hcnJheUl0ZXJhdG9yKHRoaXMpfX0pOyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yPWZ1bmN0aW9uKCl7fX07JGpzY29tcC5hcnJheUl0ZXJhdG9yPWZ1bmN0aW9uKGUpe3ZhciByPTA7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGUoZnVuY3Rpb24oKXtyZXR1cm4gcjxlLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTplW3IrK119Ontkb25lOiEwfX0pfTtcbiRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGU9ZnVuY3Rpb24oZSl7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IoKTtlPXtuZXh0OmV9O2VbJGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gZX07JGpzY29tcC5hcnJheT0kanNjb21wLmFycmF5fHx7fTskanNjb21wLml0ZXJhdG9yRnJvbUFycmF5PWZ1bmN0aW9uKGUscil7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IoKTtlIGluc3RhbmNlb2YgU3RyaW5nJiYoZSs9XCJcIik7dmFyIHA9MCxtPXtuZXh0OmZ1bmN0aW9uKCl7aWYocDxlLmxlbmd0aCl7dmFyIHU9cCsrO3JldHVybnt2YWx1ZTpyKHUsZVt1XSksZG9uZTohMX19bS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6ITAsdmFsdWU6dm9pZCAwfX07cmV0dXJuIG0ubmV4dCgpfX07bVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIG19O3JldHVybiBtfTtcbiRqc2NvbXAucG9seWZpbGw9ZnVuY3Rpb24oZSxyLHAsbSl7aWYocil7cD0kanNjb21wLmdsb2JhbDtlPWUuc3BsaXQoXCIuXCIpO2ZvcihtPTA7bTxlLmxlbmd0aC0xO20rKyl7dmFyIHU9ZVttXTt1IGluIHB8fChwW3VdPXt9KTtwPXBbdV19ZT1lW2UubGVuZ3RoLTFdO209cFtlXTtyPXIobSk7ciE9bSYmbnVsbCE9ciYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShwLGUse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpyfSl9fTskanNjb21wLnBvbHlmaWxsKFwiQXJyYXkucHJvdG90eXBlLmtleXNcIixmdW5jdGlvbihlKXtyZXR1cm4gZT9lOmZ1bmN0aW9uKCl7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JGcm9tQXJyYXkodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZX0pfX0sXCJlczYtaW1wbFwiLFwiZXMzXCIpO3ZhciAkanNjb21wJHRoaXM9dGhpcztcbihmdW5jdGlvbihlLHIpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHIpOlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1yKCk6ZS5hbmltZT1yKCl9KSh0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtpZighaC5jb2woYSkpdHJ5e3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEpfWNhdGNoKGMpe319ZnVuY3Rpb24gcihhLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxiPTI8PWFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzFdOnZvaWQgMCxmPVtdLG49MDtuPGQ7bisrKWlmKG4gaW4gYSl7dmFyIGs9YVtuXTtjLmNhbGwoYixrLG4sYSkmJmYucHVzaChrKX1yZXR1cm4gZn1mdW5jdGlvbiBwKGEpe3JldHVybiBhLnJlZHVjZShmdW5jdGlvbihhLGQpe3JldHVybiBhLmNvbmNhdChoLmFycihkKT9wKGQpOmQpfSxbXSl9ZnVuY3Rpb24gbShhKXtpZihoLmFycihhKSlyZXR1cm4gYTtcbmguc3RyKGEpJiYoYT1lKGEpfHxhKTtyZXR1cm4gYSBpbnN0YW5jZW9mIE5vZGVMaXN0fHxhIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24/W10uc2xpY2UuY2FsbChhKTpbYV19ZnVuY3Rpb24gdShhLGMpe3JldHVybiBhLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1jfSl9ZnVuY3Rpb24gQyhhKXt2YXIgYz17fSxkO2ZvcihkIGluIGEpY1tkXT1hW2RdO3JldHVybiBjfWZ1bmN0aW9uIEQoYSxjKXt2YXIgZD1DKGEpLGI7Zm9yKGIgaW4gYSlkW2JdPWMuaGFzT3duUHJvcGVydHkoYik/Y1tiXTphW2JdO3JldHVybiBkfWZ1bmN0aW9uIHooYSxjKXt2YXIgZD1DKGEpLGI7Zm9yKGIgaW4gYylkW2JdPWgudW5kKGFbYl0pP2NbYl06YVtiXTtyZXR1cm4gZH1mdW5jdGlvbiBUKGEpe2E9YS5yZXBsYWNlKC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksZnVuY3Rpb24oYSxjLGQsayl7cmV0dXJuIGMrYytkK2QraytrfSk7dmFyIGM9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGEpO1xuYT1wYXJzZUludChjWzFdLDE2KTt2YXIgZD1wYXJzZUludChjWzJdLDE2KSxjPXBhcnNlSW50KGNbM10sMTYpO3JldHVyblwicmdiYShcIithK1wiLFwiK2QrXCIsXCIrYytcIiwxKVwifWZ1bmN0aW9uIFUoYSl7ZnVuY3Rpb24gYyhhLGMsYil7MD5iJiYoYis9MSk7MTxiJiYtLWI7cmV0dXJuIGI8MS82P2ErNiooYy1hKSpiOi41PmI/YzpiPDIvMz9hKyhjLWEpKigyLzMtYikqNjphfXZhciBkPS9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGEpfHwvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhhKTthPXBhcnNlSW50KGRbMV0pLzM2MDt2YXIgYj1wYXJzZUludChkWzJdKS8xMDAsZj1wYXJzZUludChkWzNdKS8xMDAsZD1kWzRdfHwxO2lmKDA9PWIpZj1iPWE9ZjtlbHNle3ZhciBuPS41PmY/ZiooMStiKTpmK2ItZipiLGs9MipmLW4sZj1jKGssbixhKzEvMyksYj1jKGssbixhKTthPWMoayxuLGEtMS8zKX1yZXR1cm5cInJnYmEoXCIrXG4yNTUqZitcIixcIisyNTUqYitcIixcIisyNTUqYStcIixcIitkK1wiKVwifWZ1bmN0aW9uIHkoYSl7aWYoYT0vKFtcXCtcXC1dP1swLTkjXFwuXSspKCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWMoYSkpcmV0dXJuIGFbMl19ZnVuY3Rpb24gVihhKXtpZigtMTxhLmluZGV4T2YoXCJ0cmFuc2xhdGVcIil8fFwicGVyc3BlY3RpdmVcIj09PWEpcmV0dXJuXCJweFwiO2lmKC0xPGEuaW5kZXhPZihcInJvdGF0ZVwiKXx8LTE8YS5pbmRleE9mKFwic2tld1wiKSlyZXR1cm5cImRlZ1wifWZ1bmN0aW9uIEkoYSxjKXtyZXR1cm4gaC5mbmMoYSk/YShjLnRhcmdldCxjLmlkLGMudG90YWwpOmF9ZnVuY3Rpb24gRShhLGMpe2lmKGMgaW4gYS5zdHlsZSlyZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShhKS5nZXRQcm9wZXJ0eVZhbHVlKGMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZyxcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCkpfHxcIjBcIn1mdW5jdGlvbiBKKGEsYyl7aWYoaC5kb20oYSkmJlxudShXLGMpKXJldHVyblwidHJhbnNmb3JtXCI7aWYoaC5kb20oYSkmJihhLmdldEF0dHJpYnV0ZShjKXx8aC5zdmcoYSkmJmFbY10pKXJldHVyblwiYXR0cmlidXRlXCI7aWYoaC5kb20oYSkmJlwidHJhbnNmb3JtXCIhPT1jJiZFKGEsYykpcmV0dXJuXCJjc3NcIjtpZihudWxsIT1hW2NdKXJldHVyblwib2JqZWN0XCJ9ZnVuY3Rpb24gWChhLGMpe3ZhciBkPVYoYyksZD0tMTxjLmluZGV4T2YoXCJzY2FsZVwiKT8xOjArZDthPWEuc3R5bGUudHJhbnNmb3JtO2lmKCFhKXJldHVybiBkO2Zvcih2YXIgYj1bXSxmPVtdLG49W10saz0vKFxcdyspXFwoKC4rPylcXCkvZztiPWsuZXhlYyhhKTspZi5wdXNoKGJbMV0pLG4ucHVzaChiWzJdKTthPXIobixmdW5jdGlvbihhLGIpe3JldHVybiBmW2JdPT09Y30pO3JldHVybiBhLmxlbmd0aD9hWzBdOmR9ZnVuY3Rpb24gSyhhLGMpe3N3aXRjaChKKGEsYykpe2Nhc2UgXCJ0cmFuc2Zvcm1cIjpyZXR1cm4gWChhLGMpO2Nhc2UgXCJjc3NcIjpyZXR1cm4gRShhLGMpO2Nhc2UgXCJhdHRyaWJ1dGVcIjpyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYyl9cmV0dXJuIGFbY118fFxuMH1mdW5jdGlvbiBMKGEsYyl7dmFyIGQ9L14oXFwqPXxcXCs9fC09KS8uZXhlYyhhKTtpZighZClyZXR1cm4gYTt2YXIgYj15KGEpfHwwO2M9cGFyc2VGbG9hdChjKTthPXBhcnNlRmxvYXQoYS5yZXBsYWNlKGRbMF0sXCJcIikpO3N3aXRjaChkWzBdWzBdKXtjYXNlIFwiK1wiOnJldHVybiBjK2ErYjtjYXNlIFwiLVwiOnJldHVybiBjLWErYjtjYXNlIFwiKlwiOnJldHVybiBjKmErYn19ZnVuY3Rpb24gRihhLGMpe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYy54LWEueCwyKStNYXRoLnBvdyhjLnktYS55LDIpKX1mdW5jdGlvbiBNKGEpe2E9YS5wb2ludHM7Zm9yKHZhciBjPTAsZCxiPTA7YjxhLm51bWJlck9mSXRlbXM7YisrKXt2YXIgZj1hLmdldEl0ZW0oYik7MDxiJiYoYys9RihkLGYpKTtkPWZ9cmV0dXJuIGN9ZnVuY3Rpb24gTihhKXtpZihhLmdldFRvdGFsTGVuZ3RoKXJldHVybiBhLmdldFRvdGFsTGVuZ3RoKCk7c3dpdGNoKGEudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXtjYXNlIFwiY2lyY2xlXCI6cmV0dXJuIDIqXG5NYXRoLlBJKmEuZ2V0QXR0cmlidXRlKFwiclwiKTtjYXNlIFwicmVjdFwiOnJldHVybiAyKmEuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikrMiphLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKTtjYXNlIFwibGluZVwiOnJldHVybiBGKHt4OmEuZ2V0QXR0cmlidXRlKFwieDFcIikseTphLmdldEF0dHJpYnV0ZShcInkxXCIpfSx7eDphLmdldEF0dHJpYnV0ZShcIngyXCIpLHk6YS5nZXRBdHRyaWJ1dGUoXCJ5MlwiKX0pO2Nhc2UgXCJwb2x5bGluZVwiOnJldHVybiBNKGEpO2Nhc2UgXCJwb2x5Z29uXCI6dmFyIGM9YS5wb2ludHM7cmV0dXJuIE0oYSkrRihjLmdldEl0ZW0oYy5udW1iZXJPZkl0ZW1zLTEpLGMuZ2V0SXRlbSgwKSl9fWZ1bmN0aW9uIFkoYSxjKXtmdW5jdGlvbiBkKGIpe2I9dm9pZCAwPT09Yj8wOmI7cmV0dXJuIGEuZWwuZ2V0UG9pbnRBdExlbmd0aCgxPD1jK2I/YytiOjApfXZhciBiPWQoKSxmPWQoLTEpLG49ZCgxKTtzd2l0Y2goYS5wcm9wZXJ0eSl7Y2FzZSBcInhcIjpyZXR1cm4gYi54O2Nhc2UgXCJ5XCI6cmV0dXJuIGIueTtcbmNhc2UgXCJhbmdsZVwiOnJldHVybiAxODAqTWF0aC5hdGFuMihuLnktZi55LG4ueC1mLngpL01hdGguUEl9fWZ1bmN0aW9uIE8oYSxjKXt2YXIgZD0vLT9cXGQqXFwuP1xcZCsvZyxiO2I9aC5wdGgoYSk/YS50b3RhbExlbmd0aDphO2lmKGguY29sKGIpKWlmKGgucmdiKGIpKXt2YXIgZj0vcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMoYik7Yj1mP1wicmdiYShcIitmWzFdK1wiLDEpXCI6Yn1lbHNlIGI9aC5oZXgoYik/VChiKTpoLmhzbChiKT9VKGIpOnZvaWQgMDtlbHNlIGY9KGY9eShiKSk/Yi5zdWJzdHIoMCxiLmxlbmd0aC1mLmxlbmd0aCk6YixiPWMmJiEvXFxzL2cudGVzdChiKT9mK2M6ZjtiKz1cIlwiO3JldHVybntvcmlnaW5hbDpiLG51bWJlcnM6Yi5tYXRjaChkKT9iLm1hdGNoKGQpLm1hcChOdW1iZXIpOlswXSxzdHJpbmdzOmguc3RyKGEpfHxjP2Iuc3BsaXQoZCk6W119fWZ1bmN0aW9uIFAoYSl7YT1hP3AoaC5hcnIoYSk/YS5tYXAobSk6bShhKSk6W107cmV0dXJuIHIoYSxcbmZ1bmN0aW9uKGEsZCxiKXtyZXR1cm4gYi5pbmRleE9mKGEpPT09ZH0pfWZ1bmN0aW9uIFooYSl7dmFyIGM9UChhKTtyZXR1cm4gYy5tYXAoZnVuY3Rpb24oYSxiKXtyZXR1cm57dGFyZ2V0OmEsaWQ6Yix0b3RhbDpjLmxlbmd0aH19KX1mdW5jdGlvbiBhYShhLGMpe3ZhciBkPUMoYyk7aWYoaC5hcnIoYSkpe3ZhciBiPWEubGVuZ3RoOzIhPT1ifHxoLm9iaihhWzBdKT9oLmZuYyhjLmR1cmF0aW9uKXx8KGQuZHVyYXRpb249Yy5kdXJhdGlvbi9iKTphPXt2YWx1ZTphfX1yZXR1cm4gbShhKS5tYXAoZnVuY3Rpb24oYSxiKXtiPWI/MDpjLmRlbGF5O2E9aC5vYmooYSkmJiFoLnB0aChhKT9hOnt2YWx1ZTphfTtoLnVuZChhLmRlbGF5KSYmKGEuZGVsYXk9Yik7cmV0dXJuIGF9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHooYSxkKX0pfWZ1bmN0aW9uIGJhKGEsYyl7dmFyIGQ9e30sYjtmb3IoYiBpbiBhKXt2YXIgZj1JKGFbYl0sYyk7aC5hcnIoZikmJihmPWYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBJKGEsXG5jKX0pLDE9PT1mLmxlbmd0aCYmKGY9ZlswXSkpO2RbYl09Zn1kLmR1cmF0aW9uPXBhcnNlRmxvYXQoZC5kdXJhdGlvbik7ZC5kZWxheT1wYXJzZUZsb2F0KGQuZGVsYXkpO3JldHVybiBkfWZ1bmN0aW9uIGNhKGEpe3JldHVybiBoLmFycihhKT9BLmFwcGx5KHRoaXMsYSk6UVthXX1mdW5jdGlvbiBkYShhLGMpe3ZhciBkO3JldHVybiBhLnR3ZWVucy5tYXAoZnVuY3Rpb24oYil7Yj1iYShiLGMpO3ZhciBmPWIudmFsdWUsZT1LKGMudGFyZ2V0LGEubmFtZSksaz1kP2QudG8ub3JpZ2luYWw6ZSxrPWguYXJyKGYpP2ZbMF06ayx3PUwoaC5hcnIoZik/ZlsxXTpmLGspLGU9eSh3KXx8eShrKXx8eShlKTtiLmZyb209TyhrLGUpO2IudG89Tyh3LGUpO2Iuc3RhcnQ9ZD9kLmVuZDphLm9mZnNldDtiLmVuZD1iLnN0YXJ0K2IuZGVsYXkrYi5kdXJhdGlvbjtiLmVhc2luZz1jYShiLmVhc2luZyk7Yi5lbGFzdGljaXR5PSgxRTMtTWF0aC5taW4oTWF0aC5tYXgoYi5lbGFzdGljaXR5LDEpLDk5OSkpL1xuMUUzO2IuaXNQYXRoPWgucHRoKGYpO2IuaXNDb2xvcj1oLmNvbChiLmZyb20ub3JpZ2luYWwpO2IuaXNDb2xvciYmKGIucm91bmQ9MSk7cmV0dXJuIGQ9Yn0pfWZ1bmN0aW9uIGVhKGEsYyl7cmV0dXJuIHIocChhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYy5tYXAoZnVuY3Rpb24oYil7dmFyIGM9SihhLnRhcmdldCxiLm5hbWUpO2lmKGMpe3ZhciBkPWRhKGIsYSk7Yj17dHlwZTpjLHByb3BlcnR5OmIubmFtZSxhbmltYXRhYmxlOmEsdHdlZW5zOmQsZHVyYXRpb246ZFtkLmxlbmd0aC0xXS5lbmQsZGVsYXk6ZFswXS5kZWxheX19ZWxzZSBiPXZvaWQgMDtyZXR1cm4gYn0pfSkpLGZ1bmN0aW9uKGEpe3JldHVybiFoLnVuZChhKX0pfWZ1bmN0aW9uIFIoYSxjLGQsYil7dmFyIGY9XCJkZWxheVwiPT09YTtyZXR1cm4gYy5sZW5ndGg/KGY/TWF0aC5taW46TWF0aC5tYXgpLmFwcGx5KE1hdGgsYy5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIGJbYV19KSk6Zj9iLmRlbGF5OmQub2Zmc2V0K2IuZGVsYXkrXG5iLmR1cmF0aW9ufWZ1bmN0aW9uIGZhKGEpe3ZhciBjPUQoZ2EsYSksZD1EKFMsYSksYj1aKGEudGFyZ2V0cyksZj1bXSxlPXooYyxkKSxrO2ZvcihrIGluIGEpZS5oYXNPd25Qcm9wZXJ0eShrKXx8XCJ0YXJnZXRzXCI9PT1rfHxmLnB1c2goe25hbWU6ayxvZmZzZXQ6ZS5vZmZzZXQsdHdlZW5zOmFhKGFba10sZCl9KTthPWVhKGIsZik7cmV0dXJuIHooYyx7Y2hpbGRyZW46W10sYW5pbWF0YWJsZXM6YixhbmltYXRpb25zOmEsZHVyYXRpb246UihcImR1cmF0aW9uXCIsYSxjLGQpLGRlbGF5OlIoXCJkZWxheVwiLGEsYyxkKX0pfWZ1bmN0aW9uIHEoYSl7ZnVuY3Rpb24gYygpe3JldHVybiB3aW5kb3cuUHJvbWlzZSYmbmV3IFByb21pc2UoZnVuY3Rpb24oYSl7cmV0dXJuIHA9YX0pfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGcucmV2ZXJzZWQ/Zy5kdXJhdGlvbi1hOmF9ZnVuY3Rpb24gYihhKXtmb3IodmFyIGI9MCxjPXt9LGQ9Zy5hbmltYXRpb25zLGY9ZC5sZW5ndGg7YjxmOyl7dmFyIGU9ZFtiXSxcbms9ZS5hbmltYXRhYmxlLGg9ZS50d2VlbnMsbj1oLmxlbmd0aC0xLGw9aFtuXTtuJiYobD1yKGgsZnVuY3Rpb24oYil7cmV0dXJuIGE8Yi5lbmR9KVswXXx8bCk7Zm9yKHZhciBoPU1hdGgubWluKE1hdGgubWF4KGEtbC5zdGFydC1sLmRlbGF5LDApLGwuZHVyYXRpb24pL2wuZHVyYXRpb24sdz1pc05hTihoKT8xOmwuZWFzaW5nKGgsbC5lbGFzdGljaXR5KSxoPWwudG8uc3RyaW5ncyxwPWwucm91bmQsbj1bXSxtPXZvaWQgMCxtPWwudG8ubnVtYmVycy5sZW5ndGgsdD0wO3Q8bTt0Kyspe3ZhciB4PXZvaWQgMCx4PWwudG8ubnVtYmVyc1t0XSxxPWwuZnJvbS5udW1iZXJzW3RdLHg9bC5pc1BhdGg/WShsLnZhbHVlLHcqeCk6cSt3Kih4LXEpO3AmJihsLmlzQ29sb3ImJjI8dHx8KHg9TWF0aC5yb3VuZCh4KnApL3ApKTtuLnB1c2goeCl9aWYobD1oLmxlbmd0aClmb3IobT1oWzBdLHc9MDt3PGw7dysrKXA9aFt3KzFdLHQ9blt3XSxpc05hTih0KXx8KG09cD9tKyh0K3ApOm0rKHQrXCIgXCIpKTtcbmVsc2UgbT1uWzBdO2hhW2UudHlwZV0oay50YXJnZXQsZS5wcm9wZXJ0eSxtLGMsay5pZCk7ZS5jdXJyZW50VmFsdWU9bTtiKyt9aWYoYj1PYmplY3Qua2V5cyhjKS5sZW5ndGgpZm9yKGQ9MDtkPGI7ZCsrKUh8fChIPUUoZG9jdW1lbnQuYm9keSxcInRyYW5zZm9ybVwiKT9cInRyYW5zZm9ybVwiOlwiLXdlYmtpdC10cmFuc2Zvcm1cIiksZy5hbmltYXRhYmxlc1tkXS50YXJnZXQuc3R5bGVbSF09Y1tkXS5qb2luKFwiIFwiKTtnLmN1cnJlbnRUaW1lPWE7Zy5wcm9ncmVzcz1hL2cuZHVyYXRpb24qMTAwfWZ1bmN0aW9uIGYoYSl7aWYoZ1thXSlnW2FdKGcpfWZ1bmN0aW9uIGUoKXtnLnJlbWFpbmluZyYmITAhPT1nLnJlbWFpbmluZyYmZy5yZW1haW5pbmctLX1mdW5jdGlvbiBrKGEpe3ZhciBrPWcuZHVyYXRpb24sbj1nLm9mZnNldCx3PW4rZy5kZWxheSxyPWcuY3VycmVudFRpbWUseD1nLnJldmVyc2VkLHE9ZChhKTtpZihnLmNoaWxkcmVuLmxlbmd0aCl7dmFyIHU9Zy5jaGlsZHJlbix2PXUubGVuZ3RoO1xuaWYocT49Zy5jdXJyZW50VGltZSlmb3IodmFyIEc9MDtHPHY7RysrKXVbR10uc2VlayhxKTtlbHNlIGZvcig7di0tOyl1W3ZdLnNlZWsocSl9aWYocT49d3x8IWspZy5iZWdhbnx8KGcuYmVnYW49ITAsZihcImJlZ2luXCIpKSxmKFwicnVuXCIpO2lmKHE+biYmcTxrKWIocSk7ZWxzZSBpZihxPD1uJiYwIT09ciYmKGIoMCkseCYmZSgpKSxxPj1rJiZyIT09a3x8IWspYihrKSx4fHxlKCk7ZihcInVwZGF0ZVwiKTthPj1rJiYoZy5yZW1haW5pbmc/KHQ9aCxcImFsdGVybmF0ZVwiPT09Zy5kaXJlY3Rpb24mJihnLnJldmVyc2VkPSFnLnJldmVyc2VkKSk6KGcucGF1c2UoKSxnLmNvbXBsZXRlZHx8KGcuY29tcGxldGVkPSEwLGYoXCJjb21wbGV0ZVwiKSxcIlByb21pc2VcImluIHdpbmRvdyYmKHAoKSxtPWMoKSkpKSxsPTApfWE9dm9pZCAwPT09YT97fTphO3ZhciBoLHQsbD0wLHA9bnVsbCxtPWMoKSxnPWZhKGEpO2cucmVzZXQ9ZnVuY3Rpb24oKXt2YXIgYT1nLmRpcmVjdGlvbixjPWcubG9vcDtnLmN1cnJlbnRUaW1lPVxuMDtnLnByb2dyZXNzPTA7Zy5wYXVzZWQ9ITA7Zy5iZWdhbj0hMTtnLmNvbXBsZXRlZD0hMTtnLnJldmVyc2VkPVwicmV2ZXJzZVwiPT09YTtnLnJlbWFpbmluZz1cImFsdGVybmF0ZVwiPT09YSYmMT09PWM/MjpjO2IoMCk7Zm9yKGE9Zy5jaGlsZHJlbi5sZW5ndGg7YS0tOylnLmNoaWxkcmVuW2FdLnJlc2V0KCl9O2cudGljaz1mdW5jdGlvbihhKXtoPWE7dHx8KHQ9aCk7aygobCtoLXQpKnEuc3BlZWQpfTtnLnNlZWs9ZnVuY3Rpb24oYSl7ayhkKGEpKX07Zy5wYXVzZT1mdW5jdGlvbigpe3ZhciBhPXYuaW5kZXhPZihnKTstMTxhJiZ2LnNwbGljZShhLDEpO2cucGF1c2VkPSEwfTtnLnBsYXk9ZnVuY3Rpb24oKXtnLnBhdXNlZCYmKGcucGF1c2VkPSExLHQ9MCxsPWQoZy5jdXJyZW50VGltZSksdi5wdXNoKGcpLEJ8fGlhKCkpfTtnLnJldmVyc2U9ZnVuY3Rpb24oKXtnLnJldmVyc2VkPSFnLnJldmVyc2VkO3Q9MDtsPWQoZy5jdXJyZW50VGltZSl9O2cucmVzdGFydD1mdW5jdGlvbigpe2cucGF1c2UoKTtcbmcucmVzZXQoKTtnLnBsYXkoKX07Zy5maW5pc2hlZD1tO2cucmVzZXQoKTtnLmF1dG9wbGF5JiZnLnBsYXkoKTtyZXR1cm4gZ312YXIgZ2E9e3VwZGF0ZTp2b2lkIDAsYmVnaW46dm9pZCAwLHJ1bjp2b2lkIDAsY29tcGxldGU6dm9pZCAwLGxvb3A6MSxkaXJlY3Rpb246XCJub3JtYWxcIixhdXRvcGxheTohMCxvZmZzZXQ6MH0sUz17ZHVyYXRpb246MUUzLGRlbGF5OjAsZWFzaW5nOlwiZWFzZU91dEVsYXN0aWNcIixlbGFzdGljaXR5OjUwMCxyb3VuZDowfSxXPVwidHJhbnNsYXRlWCB0cmFuc2xhdGVZIHRyYW5zbGF0ZVogcm90YXRlIHJvdGF0ZVggcm90YXRlWSByb3RhdGVaIHNjYWxlIHNjYWxlWCBzY2FsZVkgc2NhbGVaIHNrZXdYIHNrZXdZIHBlcnNwZWN0aXZlXCIuc3BsaXQoXCIgXCIpLEgsaD17YXJyOmZ1bmN0aW9uKGEpe3JldHVybiBBcnJheS5pc0FycmF5KGEpfSxvYmo6ZnVuY3Rpb24oYSl7cmV0dXJuLTE8T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJPYmplY3RcIil9LFxucHRoOmZ1bmN0aW9uKGEpe3JldHVybiBoLm9iaihhKSYmYS5oYXNPd25Qcm9wZXJ0eShcInRvdGFsTGVuZ3RoXCIpfSxzdmc6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50fSxkb206ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZVR5cGV8fGguc3ZnKGEpfSxzdHI6ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfSxmbmM6ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGF9LHVuZDpmdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGF9LGhleDpmdW5jdGlvbihhKXtyZXR1cm4vKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKX0scmdiOmZ1bmN0aW9uKGEpe3JldHVybi9ecmdiLy50ZXN0KGEpfSxoc2w6ZnVuY3Rpb24oYSl7cmV0dXJuL15oc2wvLnRlc3QoYSl9LGNvbDpmdW5jdGlvbihhKXtyZXR1cm4gaC5oZXgoYSl8fGgucmdiKGEpfHxoLmhzbChhKX19LEE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsXG5kLGIpe3JldHVybigoKDEtMypiKzMqZCkqYSsoMypiLTYqZCkpKmErMypkKSphfXJldHVybiBmdW5jdGlvbihjLGQsYixmKXtpZigwPD1jJiYxPj1jJiYwPD1iJiYxPj1iKXt2YXIgZT1uZXcgRmxvYXQzMkFycmF5KDExKTtpZihjIT09ZHx8YiE9PWYpZm9yKHZhciBrPTA7MTE+azsrK2spZVtrXT1hKC4xKmssYyxiKTtyZXR1cm4gZnVuY3Rpb24oayl7aWYoYz09PWQmJmI9PT1mKXJldHVybiBrO2lmKDA9PT1rKXJldHVybiAwO2lmKDE9PT1rKXJldHVybiAxO2Zvcih2YXIgaD0wLGw9MTsxMCE9PWwmJmVbbF08PWs7KytsKWgrPS4xOy0tbDt2YXIgbD1oKyhrLWVbbF0pLyhlW2wrMV0tZVtsXSkqLjEsbj0zKigxLTMqYiszKmMpKmwqbCsyKigzKmItNipjKSpsKzMqYztpZiguMDAxPD1uKXtmb3IoaD0wOzQ+aDsrK2gpe249MyooMS0zKmIrMypjKSpsKmwrMiooMypiLTYqYykqbCszKmM7aWYoMD09PW4pYnJlYWs7dmFyIG09YShsLGMsYiktayxsPWwtbS9ufWs9bH1lbHNlIGlmKDA9PT1cbm4paz1sO2Vsc2V7dmFyIGw9aCxoPWgrLjEsZz0wO2RvIG09bCsoaC1sKS8yLG49YShtLGMsYiktaywwPG4/aD1tOmw9bTt3aGlsZSgxZS03PE1hdGguYWJzKG4pJiYxMD4rK2cpO2s9bX1yZXR1cm4gYShrLGQsZil9fX19KCksUT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiKXtyZXR1cm4gMD09PWF8fDE9PT1hP2E6LU1hdGgucG93KDIsMTAqKGEtMSkpKk1hdGguc2luKDIqKGEtMS1iLygyKk1hdGguUEkpKk1hdGguYXNpbigxKSkqTWF0aC5QSS9iKX12YXIgYz1cIlF1YWQgQ3ViaWMgUXVhcnQgUXVpbnQgU2luZSBFeHBvIENpcmMgQmFjayBFbGFzdGljXCIuc3BsaXQoXCIgXCIpLGQ9e0luOltbLjU1LC4wODUsLjY4LC41M10sWy41NSwuMDU1LC42NzUsLjE5XSxbLjg5NSwuMDMsLjY4NSwuMjJdLFsuNzU1LC4wNSwuODU1LC4wNl0sWy40NywwLC43NDUsLjcxNV0sWy45NSwuMDUsLjc5NSwuMDM1XSxbLjYsLjA0LC45OCwuMzM1XSxbLjYsLS4yOCwuNzM1LC4wNDVdLGFdLE91dDpbWy4yNSxcbi40NiwuNDUsLjk0XSxbLjIxNSwuNjEsLjM1NSwxXSxbLjE2NSwuODQsLjQ0LDFdLFsuMjMsMSwuMzIsMV0sWy4zOSwuNTc1LC41NjUsMV0sWy4xOSwxLC4yMiwxXSxbLjA3NSwuODIsLjE2NSwxXSxbLjE3NSwuODg1LC4zMiwxLjI3NV0sZnVuY3Rpb24oYixjKXtyZXR1cm4gMS1hKDEtYixjKX1dLEluT3V0OltbLjQ1NSwuMDMsLjUxNSwuOTU1XSxbLjY0NSwuMDQ1LC4zNTUsMV0sWy43NywwLC4xNzUsMV0sWy44NiwwLC4wNywxXSxbLjQ0NSwuMDUsLjU1LC45NV0sWzEsMCwwLDFdLFsuNzg1LC4xMzUsLjE1LC44Nl0sWy42OCwtLjU1LC4yNjUsMS41NV0sZnVuY3Rpb24oYixjKXtyZXR1cm4uNT5iP2EoMipiLGMpLzI6MS1hKC0yKmIrMixjKS8yfV19LGI9e2xpbmVhcjpBKC4yNSwuMjUsLjc1LC43NSl9LGY9e30sZTtmb3IoZSBpbiBkKWYudHlwZT1lLGRbZi50eXBlXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihkLGYpe2JbXCJlYXNlXCIrYS50eXBlK2NbZl1dPWguZm5jKGQpP1xuZDpBLmFwcGx5KCRqc2NvbXAkdGhpcyxkKX19KGYpKSxmPXt0eXBlOmYudHlwZX07cmV0dXJuIGJ9KCksaGE9e2NzczpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGEuc3R5bGVbY109ZH0sYXR0cmlidXRlOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoYyxkKX0sb2JqZWN0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYVtjXT1kfSx0cmFuc2Zvcm06ZnVuY3Rpb24oYSxjLGQsYixmKXtiW2ZdfHwoYltmXT1bXSk7YltmXS5wdXNoKGMrXCIoXCIrZCtcIilcIil9fSx2PVtdLEI9MCxpYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtCPXJlcXVlc3RBbmltYXRpb25GcmFtZShjKX1mdW5jdGlvbiBjKGMpe3ZhciBiPXYubGVuZ3RoO2lmKGIpe2Zvcih2YXIgZD0wO2Q8YjspdltkXSYmdltkXS50aWNrKGMpLGQrKzthKCl9ZWxzZSBjYW5jZWxBbmltYXRpb25GcmFtZShCKSxCPTB9cmV0dXJuIGF9KCk7cS52ZXJzaW9uPVwiMi4yLjBcIjtxLnNwZWVkPTE7cS5ydW5uaW5nPXY7cS5yZW1vdmU9XG5mdW5jdGlvbihhKXthPVAoYSk7Zm9yKHZhciBjPXYubGVuZ3RoO2MtLTspZm9yKHZhciBkPXZbY10sYj1kLmFuaW1hdGlvbnMsZj1iLmxlbmd0aDtmLS07KXUoYSxiW2ZdLmFuaW1hdGFibGUudGFyZ2V0KSYmKGIuc3BsaWNlKGYsMSksYi5sZW5ndGh8fGQucGF1c2UoKSl9O3EuZ2V0VmFsdWU9SztxLnBhdGg9ZnVuY3Rpb24oYSxjKXt2YXIgZD1oLnN0cihhKT9lKGEpWzBdOmEsYj1jfHwxMDA7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybntlbDpkLHByb3BlcnR5OmEsdG90YWxMZW5ndGg6TihkKSooYi8xMDApfX19O3Euc2V0RGFzaG9mZnNldD1mdW5jdGlvbihhKXt2YXIgYz1OKGEpO2Euc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLGMpO3JldHVybiBjfTtxLmJlemllcj1BO3EuZWFzaW5ncz1RO3EudGltZWxpbmU9ZnVuY3Rpb24oYSl7dmFyIGM9cShhKTtjLnBhdXNlKCk7Yy5kdXJhdGlvbj0wO2MuYWRkPWZ1bmN0aW9uKGQpe2MuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhKXthLmJlZ2FuPVxuITA7YS5jb21wbGV0ZWQ9ITB9KTttKGQpLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9eihiLEQoUyxhfHx7fSkpO2QudGFyZ2V0cz1kLnRhcmdldHN8fGEudGFyZ2V0cztiPWMuZHVyYXRpb247dmFyIGU9ZC5vZmZzZXQ7ZC5hdXRvcGxheT0hMTtkLmRpcmVjdGlvbj1jLmRpcmVjdGlvbjtkLm9mZnNldD1oLnVuZChlKT9iOkwoZSxiKTtjLmJlZ2FuPSEwO2MuY29tcGxldGVkPSEwO2Muc2VlayhkLm9mZnNldCk7ZD1xKGQpO2QuYmVnYW49ITA7ZC5jb21wbGV0ZWQ9ITA7ZC5kdXJhdGlvbj5iJiYoYy5kdXJhdGlvbj1kLmR1cmF0aW9uKTtjLmNoaWxkcmVuLnB1c2goZCl9KTtjLnNlZWsoMCk7Yy5yZXNldCgpO2MuYXV0b3BsYXkmJmMucmVzdGFydCgpO3JldHVybiBjfTtyZXR1cm4gY307cS5yYW5kb209ZnVuY3Rpb24oYSxjKXtyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihjLWErMSkpK2F9O3JldHVybiBxfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gR0xPQkFMIFZBUklBQkxFU1xubGV0IGlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSxcbiAgICBpc0VkZ2UgPSAhaXNJRSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhLFxuICAgIGlzSUVvckVkZ2UgPSBpc0lFIHx8IGlzRWRnZSxcbiAgICBpc2lQYWQgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpICE9IG51bGwsXG4gICAgaXNUb3VjaCA9ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyksXG4gICAgdHJhbnNpdGlvbkZhc3QgPSAwLjQ1LFxuICAgIHRyYW5zaXRpb25TbG93ID0gMC42NSxcbiAgICBkdXJhdGlvbiA9IHRyYW5zaXRpb25TbG93ICogMTAwMCxcbiAgICBlYXNpbmcxID1bLjc3LCAwLCAuMTc1LCAxXSxcbiAgICBlYXNpbmcyID0gJ2N1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKScsXG4gICAgZWFzaW5nID0gXCJlYXNlSW5PdXRTaW5lXCIsXG4gICAgZGVsYXkgPSAwLjQ7XG5cblxuXG4vLyBJTVBPUlRTXG5jb25zdCBBbmltZSA9IHJlcXVpcmUoJ2FuaW1lanMnKTtcblxucmVxdWlyZSgnLi9OYXZpZ2F0aW9uLmpzJylcbnJlcXVpcmUoJy4vUGFnZVRyYW5zaXRpb24uanMnKVxuXG5cblxuY2xhc3MgQXBwIHtcblxuICAgIGxvYWQgKCkge1xuICAgIH1cblxuICAgIG1haW4gKCkge1xuICAgICAgICBcbiAgICB9IC8vbWFpblxufSAvLyBBUFBcblxubGV0IFByb2plY3QgPSBuZXcgQXBwKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5JywgKGV2ZW50KSA9PiB7XG4gICAgUHJvamVjdC5sb2FkKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcbiAgICBQcm9qZWN0Lm1haW4oKVxufSk7ICAgXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvYXBwLmpzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IEFuaW1lID0gcmVxdWlyZSgnYW5pbWVqcycpO1xuXG5jb25zdCBOYXZpZ2F0aW9uID0ge1xuICAgIGluaXQoZHVyYXRpb24sIGVhc2luZyl7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAgZHVyYXRpb24gfHwgMTAwMDtcbiAgICAgICAgdGhpcy5lYXNpbmcgPSBlYXNpbmcgfHwgJ2Vhc2VPdXRFeHBvJztcbiAgICAgICAgdGhpcy5jYWNoZURPTSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50cygpO1xuICAgIH0sXG4gICAgY2FjaGVET00oKXtcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMuYm9keS5xdWVyeVNlbGVjdG9yKCcubmF2X190b2dnbGUnKTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gdGhpcy5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ25hdi5uYXYnKTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uTGlzdEl0ZW0gPSB0aGlzLm5hdmlnYXRpb24ucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICB9LFxuICAgIGFkZEV2ZW50cygpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZXZlbnQgPT4gdGhpcy5oYW5kbGVDbGljayhldmVudCkpO1xuICAgICAgICB0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB0aGlzLmhhbmRsZUNsaWNrKGV2ZW50KSk7XG4gICAgfSxcbiAgICBoYW5kbGVDbGljayhldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICggIXRoaXMub3BlbiApIHtcbiAgICAgICAgICAgIHRoaXMub3Blbk1lbnUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgIH0gXG4gICAgfSxcbiAgICBvcGVuTWVudSgpe1xuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gbmV3IEFuaW1lLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIGVhc2luZzogdGhpcy5lYXNpbmcsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aW1lbGluZVxuICAgICAgICAgICAgLmFkZCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5uYXZpZ2F0aW9uLCBcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXCIxMDAlXCIsIFwiMCVcIl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBydW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoJ25hdi1pcy1vcGVuJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5hZGQoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IHRoaXMubmF2aWdhdGlvbkxpc3RJdGVtLCBcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbMCwxXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWToge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogWy0xMCwgMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWxheTogZnVuY3Rpb24oZWwsIGkpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAqIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDIwMCxcbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICBjbG9zZU1lbnUoKXtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSBuZXcgQW5pbWUudGltZWxpbmUoe1xuICAgICAgICAgICAgZWFzaW5nOiB0aGlzLmVhc2luZyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRpbWVsaW5lXG4gICAgICAgICAgICAuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiB0aGlzLm5hdmlnYXRpb25MaXN0SXRlbSwgXG4gICAgICAgICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogWzBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbLTEwXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlbGF5OiBmdW5jdGlvbihlbCwgaSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpICogNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJ1bjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LWlzLW9wZW4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiB0aGlzLm5hdmlnYXRpb24sIFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtcIjEwMCVcIl0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDIwMCxcbiAgICAgICAgICAgIH0pXG4gICAgfSAgXG59XG5cbk5hdmlnYXRpb24uaW5pdCgpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL05hdmlnYXRpb24uanMiLCJjb25zdCBBbmltZSA9IHJlcXVpcmUoJ2FuaW1lanMnKTtcbmNvbnN0IEJhcmJhID0gcmVxdWlyZSgnYmFyYmEuanMnKTtcbmNvbnNvbGUubG9nKCdhc2RmJylcbmNvbnN0IFBhZ2VUcmFuc2l0aW9uID0ge1xuICAgIGluaXQoZHVyYXRpb24sIGVhc2luZyl7XG4gICAgICAgIHRoaXMubmV3Qm9keUNsYXNzID0gJydcbiAgICAgICAgdGhpcy5uZXh0UGFnZSA9ICcnXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAyMDAwXG4gICAgICAgIHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8ICdlYXNlT3V0RXhwbydcbiAgICAgICAgdGhpcy5jYWNoZURPTSgpXG4gICAgICAgIHRoaXMuYWRkRXZlbnRzKClcbiAgICAgICAgdGhpcy5zZXR1cCgpXG5cbiAgICB9LFxuICAgIGNhY2hlRE9NKCl7XG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTsgICBcbiAgICB9LFxuICAgIGFkZEV2ZW50cygpe1xuXG4gICAgfSxcbiAgICB1cGRhdGVDbGFzc2VzKG5ld1BhZ2VSYXdIVE1MKXtcbiAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdCA9IHRoaXMubmV3Qm9keUNsYXNzXG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVkJylcbiAgICB9LFxuICAgIHNldHVwKCl7XG4gICAgICAgIGNvbnN0IGVhc2luZyA9IHRoaXMuZWFzaW5nLFxuICAgICAgICAgICAgZHVyYXRpb24gPSAgdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHVwZGF0ZUNsYXNzZXMgPSB0aGlzLnVwZGF0ZUNsYXNzZXMuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc3QgUmVkdWNlclRyYW5zaXRpb24gPSBCYXJiYS5CYXNlVHJhbnNpdGlvbi5leHRlbmQoe1xuICAgICAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICAgICAgLy8gZnJvbnQ6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbXVzaWM6IHRoaXMudG9NdXNpY1RyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aGlzLmZhZGVUcmFuc2l0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3Q29udGFpbmVyTG9hZGluZy50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJvbSA9IEJhcmJhLlBqYXguSGlzdG9yeS5wcmV2U3RhdHVzKCkubmFtZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvID0gQmFyYmEuUGpheC5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKS5uYW1lc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgodGhpcy5tYXBbZnJvbV0gJiYgdGhpcy5tYXBbZnJvbV1bdG9dKSB8fCB0aGlzLm1hcC5kZWZhdWx0KShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2xkQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgQmFyYmEuUGpheC5Eb20uY29udGFpbmVyQ2xhc3MgPSAnaW5uZXItd3JhcHBlcic7XG4gICAgICAgIEJhcmJhLlBqYXguRG9tLndyYXBwZXJJZCA9ICdvdXRlci13cmFwcGVyJztcbiAgICAgICAgQmFyYmEuUGpheC5pbml0KCk7XG4gICAgICAgIEJhcmJhLlByZWZldGNoLmluaXQoKTtcbiAgICAgICAgQmFyYmEuRGlzcGF0Y2hlci5vbignbmV3UGFnZVJlYWR5JywoY3VycmVudFN0YXR1cywgcHJldlN0YXR1cywgSFRNTEVsZW1lbnRDb250YWluZXIsIG5ld1BhZ2VSYXdIVE1MICkgPT57ICAgXG4gICAgICAgICAgICB0aGlzLm5ld0JvZHlDbGFzcyA9IG5ld1BhZ2VSYXdIVE1MLm1hdGNoKC9ib2R5XFxzY2xhc3M9Wyd8XCJdKFteJ3xcIl0qKVsnfFwiXS8pWzFdOyAvL2dldE1lXG4gICAgICAgIH0pXG4gICAgICAgIEJhcmJhLkRpc3BhdGNoZXIub24oJ3RyYW5zaXRpb25Db21wbGV0ZWQnLCgpID0+e1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIEJhcmJhLlBqYXguZ2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZHVjZXJUcmFuc2l0aW9uO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgZmFkZVRyYW5zaXRpb24gKG9sZENvbnRhaW5lciwgbmV3Q29udGFpbmVyLCBkb25lLCBkdXJhdGlvbiwgZWFzaW5nLCB1cGRhdGVDbGFzc2VzKSB7XG4gICAgICAgIEFuaW1lLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIGVhc2luZzogZWFzaW5nLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBkb25lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IG9sZENvbnRhaW5lcixcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogWzEsMF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmFkZCh7XG4gICAgICAgICAgICBiZWdpbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNsYXNzZXMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhcmdldHM6IG5ld0NvbnRhaW5lcixcbiAgICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogWzAsMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5QYWdlVHJhbnNpdGlvbi5pbml0KClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvUGFnZVRyYW5zaXRpb24uanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkJhcmJhXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkJhcmJhXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkJhcmJhXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2Rpc3RcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vUHJvbWlzZSBwb2x5ZmlsbCBodHRwczovL2dpdGh1Yi5jb20vdGF5bG9yaGFrZXMvcHJvbWlzZS1wb2x5ZmlsbFxuXHRcblx0aWYgKHR5cGVvZiBQcm9taXNlICE9PSAnZnVuY3Rpb24nKSB7XG5cdCB3aW5kb3cuUHJvbWlzZSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdH1cblx0XG5cdHZhciBCYXJiYSA9IHtcblx0ICB2ZXJzaW9uOiAnMS4wLjAnLFxuXHQgIEJhc2VUcmFuc2l0aW9uOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLFxuXHQgIEJhc2VWaWV3OiBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpLFxuXHQgIEJhc2VDYWNoZTogX193ZWJwYWNrX3JlcXVpcmVfXyg4KSxcblx0ICBEaXNwYXRjaGVyOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLFxuXHQgIEhpc3RvcnlNYW5hZ2VyOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLFxuXHQgIFBqYXg6IF9fd2VicGFja19yZXF1aXJlX18oMTApLFxuXHQgIFByZWZldGNoOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKSxcblx0ICBVdGlsczogX193ZWJwYWNrX3JlcXVpcmVfXyg1KVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBCYXJiYTtcblxuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHNldEltbWVkaWF0ZSkgeyhmdW5jdGlvbiAocm9vdCkge1xuXHRcblx0ICAvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBwcm9taXNlLXBvbHlmaWxsIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuXHQgIC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuXHQgIHZhciBzZXRUaW1lb3V0RnVuYyA9IHNldFRpbWVvdXQ7XG5cdFxuXHQgIGZ1bmN0aW9uIG5vb3AoKSB7XG5cdCAgfVxuXHRcblx0ICAvLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblx0ICB2YXIgYXNhcCA9ICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmIHNldEltbWVkaWF0ZSkgfHxcblx0ICAgIGZ1bmN0aW9uIChmbikge1xuXHQgICAgICBzZXRUaW1lb3V0RnVuYyhmbiwgMCk7XG5cdCAgICB9O1xuXHRcblx0ICB2YXIgb25VbmhhbmRsZWRSZWplY3Rpb24gPSBmdW5jdGlvbiBvblVuaGFuZGxlZFJlamVjdGlvbihlcnIpIHtcblx0ICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZSkge1xuXHQgICAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjonLCBlcnIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblx0ICAgIH1cblx0ICB9O1xuXHRcblx0ICAvLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcblx0ICBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG5cdCAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICBmbi5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuXHQgICAgfTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIFByb21pc2UoZm4pIHtcblx0ICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ldycpO1xuXHQgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcblx0ICAgIHRoaXMuX3N0YXRlID0gMDtcblx0ICAgIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcblx0ICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xuXHQgICAgdGhpcy5fZGVmZXJyZWRzID0gW107XG5cdFxuXHQgICAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuXHQgICAgd2hpbGUgKHNlbGYuX3N0YXRlID09PSAzKSB7XG5cdCAgICAgIHNlbGYgPSBzZWxmLl92YWx1ZTtcblx0ICAgIH1cblx0ICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMCkge1xuXHQgICAgICBzZWxmLl9kZWZlcnJlZHMucHVzaChkZWZlcnJlZCk7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHNlbGYuX2hhbmRsZWQgPSB0cnVlO1xuXHQgICAgYXNhcChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIHZhciBjYiA9IHNlbGYuX3N0YXRlID09PSAxID8gZGVmZXJyZWQub25GdWxmaWxsZWQgOiBkZWZlcnJlZC5vblJlamVjdGVkO1xuXHQgICAgICBpZiAoY2IgPT09IG51bGwpIHtcblx0ICAgICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIHZhciByZXQ7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgcmV0ID0gY2Ioc2VsZi5fdmFsdWUpO1xuXHQgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgcmVqZWN0KGRlZmVycmVkLnByb21pc2UsIGUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICByZXNvbHZlKGRlZmVycmVkLnByb21pc2UsIHJldCk7XG5cdCAgICB9KTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgIC8vIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjI3RoZS1wcm9taXNlLXJlc29sdXRpb24tcHJvY2VkdXJlXG5cdCAgICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZikgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi4nKTtcblx0ICAgICAgaWYgKG5ld1ZhbHVlICYmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0ICAgICAgICB2YXIgdGhlbiA9IG5ld1ZhbHVlLnRoZW47XG5cdCAgICAgICAgaWYgKG5ld1ZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHQgICAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuXHQgICAgICAgICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcblx0ICAgICAgICAgIGZpbmFsZShzZWxmKTtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICBkb1Jlc29sdmUoYmluZCh0aGVuLCBuZXdWYWx1ZSksIHNlbGYpO1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICBzZWxmLl9zdGF0ZSA9IDE7XG5cdCAgICAgIHNlbGYuX3ZhbHVlID0gbmV3VmFsdWU7XG5cdCAgICAgIGZpbmFsZShzZWxmKTtcblx0ICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgcmVqZWN0KHNlbGYsIGUpO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG5cdCAgICBzZWxmLl9zdGF0ZSA9IDI7XG5cdCAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuXHQgICAgZmluYWxlKHNlbGYpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gZmluYWxlKHNlbGYpIHtcblx0ICAgIGlmIChzZWxmLl9zdGF0ZSA9PT0gMiAmJiBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgIGFzYXAoZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG5cdCAgICAgICAgICBvblVuaGFuZGxlZFJlamVjdGlvbihzZWxmLl92YWx1ZSk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZi5fZGVmZXJyZWRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGhhbmRsZShzZWxmLCBzZWxmLl9kZWZlcnJlZHNbaV0pO1xuXHQgICAgfVxuXHQgICAgc2VsZi5fZGVmZXJyZWRzID0gbnVsbDtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb21pc2UpIHtcblx0ICAgIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG5cdCAgICB0aGlzLm9uUmVqZWN0ZWQgPSB0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVqZWN0ZWQgOiBudWxsO1xuXHQgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIFRha2UgYSBwb3RlbnRpYWxseSBtaXNiZWhhdmluZyByZXNvbHZlciBmdW5jdGlvbiBhbmQgbWFrZSBzdXJlXG5cdCAgICogb25GdWxmaWxsZWQgYW5kIG9uUmVqZWN0ZWQgYXJlIG9ubHkgY2FsbGVkIG9uY2UuXG5cdCAgICpcblx0ICAgKiBNYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IGFzeW5jaHJvbnkuXG5cdCAgICovXG5cdCAgZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG5cdCAgICB2YXIgZG9uZSA9IGZhbHNlO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgZm4oZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcblx0ICAgICAgICBkb25lID0gdHJ1ZTtcblx0ICAgICAgICByZXNvbHZlKHNlbGYsIHZhbHVlKTtcblx0ICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHQgICAgICAgIGlmIChkb25lKSByZXR1cm47XG5cdCAgICAgICAgZG9uZSA9IHRydWU7XG5cdCAgICAgICAgcmVqZWN0KHNlbGYsIHJlYXNvbik7XG5cdCAgICAgIH0pO1xuXHQgICAgfSBjYXRjaCAoZXgpIHtcblx0ICAgICAgaWYgKGRvbmUpIHJldHVybjtcblx0ICAgICAgZG9uZSA9IHRydWU7XG5cdCAgICAgIHJlamVjdChzZWxmLCBleCk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG5cdCAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcblx0ICAgIHZhciBwcm9tID0gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKShub29wKTtcblx0XG5cdCAgICBoYW5kbGUodGhpcywgbmV3IEhhbmRsZXIob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIHByb20pKTtcblx0ICAgIHJldHVybiBwcm9tO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UuYWxsID0gZnVuY3Rpb24gKGFycikge1xuXHQgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpO1xuXHRcblx0ICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdCAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuXHQgICAgICB2YXIgcmVtYWluaW5nID0gYXJncy5sZW5ndGg7XG5cdFxuXHQgICAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgIGlmICh2YWwgJiYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpKSB7XG5cdCAgICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgIHRoZW4uY2FsbCh2YWwsIGZ1bmN0aW9uICh2YWwpIHtcblx0ICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuXHQgICAgICAgICAgICAgIH0sIHJlamVjdCk7XG5cdCAgICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICBhcmdzW2ldID0gdmFsO1xuXHQgICAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG5cdCAgICAgICAgICAgIHJlc29sdmUoYXJncyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSBjYXRjaCAoZXgpIHtcblx0ICAgICAgICAgIHJlamVjdChleCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdFxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICByZXMoaSwgYXJnc1tpXSk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFByb21pc2UpIHtcblx0ICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHQgICAgICByZXNvbHZlKHZhbHVlKTtcblx0ICAgIH0pO1xuXHQgIH07XG5cdFxuXHQgIFByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICByZWplY3QodmFsdWUpO1xuXHQgICAgfSk7XG5cdCAgfTtcblx0XG5cdCAgUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuXHQgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0ICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICAgIHZhbHVlc1tpXS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH07XG5cdFxuXHQgIC8qKlxuXHQgICAqIFNldCB0aGUgaW1tZWRpYXRlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgY2FsbGJhY2tzXG5cdCAgICogQHBhcmFtIGZuIHtmdW5jdGlvbn0gRnVuY3Rpb24gdG8gZXhlY3V0ZVxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgUHJvbWlzZS5fc2V0SW1tZWRpYXRlRm4gPSBmdW5jdGlvbiBfc2V0SW1tZWRpYXRlRm4oZm4pIHtcblx0ICAgIGFzYXAgPSBmbjtcblx0ICB9O1xuXHRcblx0ICBQcm9taXNlLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF9zZXRVbmhhbmRsZWRSZWplY3Rpb25Gbihmbikge1xuXHQgICAgb25VbmhhbmRsZWRSZWplY3Rpb24gPSBmbjtcblx0ICB9O1xuXHRcblx0ICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0ICAgIG1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblx0ICB9IGVsc2UgaWYgKCFyb290LlByb21pc2UpIHtcblx0ICAgIHJvb3QuUHJvbWlzZSA9IFByb21pc2U7XG5cdCAgfVxuXHRcblx0fSkodGhpcyk7XG5cdFxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygyKS5zZXRJbW1lZGlhdGUpKVxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHNldEltbWVkaWF0ZSwgY2xlYXJJbW1lZGlhdGUpIHt2YXIgbmV4dFRpY2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLm5leHRUaWNrO1xuXHR2YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cdHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblx0dmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xuXHR2YXIgbmV4dEltbWVkaWF0ZUlkID0gMDtcblx0XG5cdC8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cdFxuXHRleHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcblx0ICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG5cdH07XG5cdGV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcblx0ICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcblx0fTtcblx0ZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuXHRleHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblx0XG5cdGZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcblx0ICB0aGlzLl9pZCA9IGlkO1xuXHQgIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xuXHR9XG5cdFRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblx0VGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcblx0ICB0aGlzLl9jbGVhckZuLmNhbGwod2luZG93LCB0aGlzLl9pZCk7XG5cdH07XG5cdFxuXHQvLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cblx0ZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuXHQgIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblx0ICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0ICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cdCAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcblx0fTtcblx0XG5cdGV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG5cdCAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXHRcblx0ICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcblx0ICBpZiAobXNlY3MgPj0gMCkge1xuXHQgICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuXHQgICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuXHQgICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuXHQgICAgfSwgbXNlY3MpO1xuXHQgIH1cblx0fTtcblx0XG5cdC8vIFRoYXQncyBub3QgaG93IG5vZGUuanMgaW1wbGVtZW50cyBpdCBidXQgdGhlIGV4cG9zZWQgYXBpIGlzIHRoZSBzYW1lLlxuXHRleHBvcnRzLnNldEltbWVkaWF0ZSA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IGZ1bmN0aW9uKGZuKSB7XG5cdCAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG5cdCAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGZhbHNlIDogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHRcblx0ICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblx0XG5cdCAgbmV4dFRpY2soZnVuY3Rpb24gb25OZXh0VGljaygpIHtcblx0ICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG5cdCAgICAgIC8vIGZuLmNhbGwoKSBpcyBmYXN0ZXIgc28gd2Ugb3B0aW1pemUgZm9yIHRoZSBjb21tb24gdXNlLWNhc2Vcblx0ICAgICAgLy8gQHNlZSBodHRwOi8vanNwZXJmLmNvbS9jYWxsLWFwcGx5LXNlZ3Vcblx0ICAgICAgaWYgKGFyZ3MpIHtcblx0ICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBmbi5jYWxsKG51bGwpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIFByZXZlbnQgaWRzIGZyb20gbGVha2luZ1xuXHQgICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcblx0ICAgIH1cblx0ICB9KTtcblx0XG5cdCAgcmV0dXJuIGlkO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9IHR5cGVvZiBjbGVhckltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gY2xlYXJJbW1lZGlhdGUgOiBmdW5jdGlvbihpZCkge1xuXHQgIGRlbGV0ZSBpbW1lZGlhdGVJZHNbaWRdO1xuXHR9O1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygyKS5zZXRJbW1lZGlhdGUsIF9fd2VicGFja19yZXF1aXJlX18oMikuY2xlYXJJbW1lZGlhdGUpKVxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cdFxuXHR2YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cdFxuXHQvLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcblx0Ly8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG5cdC8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblx0XG5cdHZhciBjYWNoZWRTZXRUaW1lb3V0O1xuXHR2YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXHRcblx0KGZ1bmN0aW9uICgpIHtcblx0ICB0cnkge1xuXHQgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG5cdCAgfSBjYXRjaCAoZSkge1xuXHQgICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHRyeSB7XG5cdCAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG5cdCAgfSBjYXRjaCAoZSkge1xuXHQgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuXHQgICAgfVxuXHQgIH1cblx0fSAoKSlcblx0dmFyIHF1ZXVlID0gW107XG5cdHZhciBkcmFpbmluZyA9IGZhbHNlO1xuXHR2YXIgY3VycmVudFF1ZXVlO1xuXHR2YXIgcXVldWVJbmRleCA9IC0xO1xuXHRcblx0ZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuXHQgICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgZHJhaW5pbmcgPSBmYWxzZTtcblx0ICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuXHQgICAgfVxuXHQgICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuXHQgICAgICAgIGRyYWluUXVldWUoKTtcblx0ICAgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcblx0ICAgIGlmIChkcmFpbmluZykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHZhciB0aW1lb3V0ID0gY2FjaGVkU2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuXHQgICAgZHJhaW5pbmcgPSB0cnVlO1xuXHRcblx0ICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cdCAgICB3aGlsZShsZW4pIHtcblx0ICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcblx0ICAgICAgICBxdWV1ZSA9IFtdO1xuXHQgICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcblx0ICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuXHQgICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcblx0ICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cdCAgICB9XG5cdCAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuXHQgICAgZHJhaW5pbmcgPSBmYWxzZTtcblx0ICAgIGNhY2hlZENsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0fVxuXHRcblx0cHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcblx0ICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcblx0ICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG5cdCAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuXHQgICAgICAgIGNhY2hlZFNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG5cdCAgICB9XG5cdH07XG5cdFxuXHQvLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5cdGZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuXHQgICAgdGhpcy5mdW4gPSBmdW47XG5cdCAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG5cdH1cblx0SXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuXHQgICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG5cdH07XG5cdHByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5cdHByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5cdHByb2Nlc3MuZW52ID0ge307XG5cdHByb2Nlc3MuYXJndiA9IFtdO1xuXHRwcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcblx0cHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXHRcblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cdFxuXHRwcm9jZXNzLm9uID0gbm9vcDtcblx0cHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3Mub25jZSA9IG5vb3A7XG5cdHByb2Nlc3Mub2ZmID0gbm9vcDtcblx0cHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcblx0cHJvY2Vzcy5lbWl0ID0gbm9vcDtcblx0XG5cdHByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdH07XG5cdFxuXHRwcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xuXHRwcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcblx0fTtcblx0cHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIFV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdC8qKlxuXHQgKiBCYXNlVHJhbnNpdGlvbiB0byBleHRlbmRcblx0ICpcblx0ICogQG5hbWVzcGFjZSBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0dmFyIEJhc2VUcmFuc2l0aW9uID0ge1xuXHQgIC8qKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cblx0ICAgKi9cblx0ICBvbGRDb250YWluZXI6IHVuZGVmaW5lZCxcblx0XG5cdCAgLyoqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VUcmFuc2l0aW9uXG5cdCAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuXHQgICAqL1xuXHQgIG5ld0NvbnRhaW5lcjogdW5kZWZpbmVkLFxuXHRcblx0ICAvKipcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICAgKiBAdHlwZSB7UHJvbWlzZX1cblx0ICAgKi9cblx0ICBuZXdDb250YWluZXJMb2FkaW5nOiB1bmRlZmluZWQsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEhlbHBlciB0byBleHRlbmQgdGhlIG9iamVjdFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VUcmFuc2l0aW9uXG5cdCAgICogQHBhcmFtICB7T2JqZWN0fSBuZXdPYmplY3Rcblx0ICAgKiBAcmV0dXJuIHtPYmplY3R9IG5ld0luaGVyaXRPYmplY3Rcblx0ICAgKi9cblx0ICBleHRlbmQ6IGZ1bmN0aW9uKG9iail7XG5cdCAgICByZXR1cm4gVXRpbHMuZXh0ZW5kKHRoaXMsIG9iaik7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSBQamF4IG1vZHVsZSB0byBpbml0aWFsaXplXG5cdCAgICogdGhlIHRyYW5zaXRpb24uXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBvbGRDb250YWluZXJcblx0ICAgKiBAcGFyYW0gIHtQcm9taXNlfSBuZXdDb250YWluZXJcblx0ICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgICAqL1xuXHQgIGluaXQ6IGZ1bmN0aW9uKG9sZENvbnRhaW5lciwgbmV3Q29udGFpbmVyKSB7XG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgIHRoaXMub2xkQ29udGFpbmVyID0gb2xkQ29udGFpbmVyO1xuXHQgICAgdGhpcy5fbmV3Q29udGFpbmVyUHJvbWlzZSA9IG5ld0NvbnRhaW5lcjtcblx0XG5cdCAgICB0aGlzLmRlZmVycmVkID0gVXRpbHMuZGVmZXJyZWQoKTtcblx0ICAgIHRoaXMubmV3Q29udGFpbmVyUmVhZHkgPSBVdGlscy5kZWZlcnJlZCgpO1xuXHQgICAgdGhpcy5uZXdDb250YWluZXJMb2FkaW5nID0gdGhpcy5uZXdDb250YWluZXJSZWFkeS5wcm9taXNlO1xuXHRcblx0ICAgIHRoaXMuc3RhcnQoKTtcblx0XG5cdCAgICB0aGlzLl9uZXdDb250YWluZXJQcm9taXNlLnRoZW4oZnVuY3Rpb24obmV3Q29udGFpbmVyKSB7XG5cdCAgICAgIF90aGlzLm5ld0NvbnRhaW5lciA9IG5ld0NvbnRhaW5lcjtcblx0ICAgICAgX3RoaXMubmV3Q29udGFpbmVyUmVhZHkucmVzb2x2ZSgpO1xuXHQgICAgfSk7XG5cdFxuXHQgICAgcmV0dXJuIHRoaXMuZGVmZXJyZWQucHJvbWlzZTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUaGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGNhbGxlZCBhcyBzb29uIHRoZSBUcmFuc2l0aW9uIGlzIGZpbmlzaGVkXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICAgKi9cblx0ICBkb25lOiBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMub2xkQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5vbGRDb250YWluZXIpO1xuXHQgICAgdGhpcy5uZXdDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0ICAgIHRoaXMuZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIENvbnN0cnVjdG9yIGZvciB5b3VyIFRyYW5zaXRpb25cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlVHJhbnNpdGlvblxuXHQgICAqIEBhYnN0cmFjdFxuXHQgICAqL1xuXHQgIHN0YXJ0OiBmdW5jdGlvbigpIHt9LFxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBCYXNlVHJhbnNpdGlvbjtcblxuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIEp1c3QgYW4gb2JqZWN0IHdpdGggc29tZSBoZWxwZnVsIGZ1bmN0aW9uc1xuXHQgKlxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLlV0aWxzXG5cdCAqL1xuXHR2YXIgVXRpbHMgPSB7XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIHRoZSBjdXJyZW50IHVybFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlV0aWxzXG5cdCAgICogQHJldHVybiB7U3RyaW5nfSBjdXJyZW50VXJsXG5cdCAgICovXG5cdCAgZ2V0Q3VycmVudFVybDogZnVuY3Rpb24oKSB7XG5cdCAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArXG5cdCAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QgK1xuXHQgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArXG5cdCAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBHaXZlbiBhbiB1cmwsIHJldHVybiBpdCB3aXRob3V0IHRoZSBoYXNoXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuVXRpbHNcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge1N0cmluZ30gdXJsXG5cdCAgICogQHJldHVybiB7U3RyaW5nfSBuZXdDbGVhblVybFxuXHQgICAqL1xuXHQgIGNsZWFuTGluazogZnVuY3Rpb24odXJsKSB7XG5cdCAgICByZXR1cm4gdXJsLnJlcGxhY2UoLyMuKi8sICcnKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUaW1lIGluIG1pbGxpc2Vjb25kIGFmdGVyIHRoZSB4aHIgcmVxdWVzdCBnb2VzIGluIHRpbWVvdXRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuXHQgICAqIEB0eXBlIHtOdW1iZXJ9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICB4aHJUaW1lb3V0OiA1MDAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBTdGFydCBhbiBYTUxIdHRwUmVxdWVzdCgpIGFuZCByZXR1cm4gYSBQcm9taXNlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuVXRpbHNcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuXHQgICAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAgICovXG5cdCAgeGhyOiBmdW5jdGlvbih1cmwpIHtcblx0ICAgIHZhciBkZWZlcnJlZCA9IHRoaXMuZGVmZXJyZWQoKTtcblx0ICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XG5cdCAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdCAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PT0gNCkge1xuXHQgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcblx0ICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5yZXNvbHZlKHJlcS5yZXNwb25zZVRleHQpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcigneGhyOiBIVFRQIGNvZGUgaXMgbm90IDIwMCcpKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH07XG5cdFxuXHQgICAgcmVxLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICByZXR1cm4gZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcigneGhyOiBUaW1lb3V0IGV4Y2VlZGVkJykpO1xuXHQgICAgfTtcblx0XG5cdCAgICByZXEub3BlbignR0VUJywgdXJsKTtcblx0ICAgIHJlcS50aW1lb3V0ID0gdGhpcy54aHJUaW1lb3V0O1xuXHQgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ3gtYmFyYmEnLCAneWVzJyk7XG5cdCAgICByZXEuc2VuZCgpO1xuXHRcblx0ICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEdldCBvYmogYW5kIHByb3BzIGFuZCByZXR1cm4gYSBuZXcgb2JqZWN0IHdpdGggdGhlIHByb3BlcnR5IG1lcmdlZFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlV0aWxzXG5cdCAgICogQHBhcmFtICB7b2JqZWN0fSBvYmpcblx0ICAgKiBAcGFyYW0gIHtvYmplY3R9IHByb3BzXG5cdCAgICogQHJldHVybiB7b2JqZWN0fVxuXHQgICAqL1xuXHQgIGV4dGVuZDogZnVuY3Rpb24ob2JqLCBwcm9wcykge1xuXHQgICAgdmFyIG5ld09iaiA9IE9iamVjdC5jcmVhdGUob2JqKTtcblx0XG5cdCAgICBmb3IodmFyIHByb3AgaW4gcHJvcHMpIHtcblx0ICAgICAgaWYocHJvcHMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcblx0ICAgICAgICBuZXdPYmpbcHJvcF0gPSBwcm9wc1twcm9wXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBuZXdPYmo7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIGEgbmV3IFwiRGVmZXJyZWRcIiBvYmplY3Rcblx0ICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL01vemlsbGEvSmF2YVNjcmlwdF9jb2RlX21vZHVsZXMvUHJvbWlzZS5qc20vRGVmZXJyZWRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuXHQgICAqIEByZXR1cm4ge0RlZmVycmVkfVxuXHQgICAqL1xuXHQgIGRlZmVycmVkOiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBuZXcgZnVuY3Rpb24oKSB7XG5cdCAgICAgIHRoaXMucmVzb2x2ZSA9IG51bGw7XG5cdCAgICAgIHRoaXMucmVqZWN0ID0gbnVsbDtcblx0XG5cdCAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG5cdCAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG5cdCAgICAgIH0uYmluZCh0aGlzKSk7XG5cdCAgICB9O1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFJldHVybiB0aGUgcG9ydCBudW1iZXIgbm9ybWFsaXplZCwgZXZlbnR1YWxseSB5b3UgY2FuIHBhc3MgYSBzdHJpbmcgdG8gYmUgbm9ybWFsaXplZC5cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5VdGlsc1xuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSBwXG5cdCAgICogQHJldHVybiB7SW50fSBwb3J0XG5cdCAgICovXG5cdCAgZ2V0UG9ydDogZnVuY3Rpb24ocCkge1xuXHQgICAgdmFyIHBvcnQgPSB0eXBlb2YgcCAhPT0gJ3VuZGVmaW5lZCcgPyBwIDogd2luZG93LmxvY2F0aW9uLnBvcnQ7XG5cdCAgICB2YXIgcHJvdG9jb2wgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XG5cdFxuXHQgICAgaWYgKHBvcnQgIT0gJycpXG5cdCAgICAgIHJldHVybiBwYXJzZUludChwb3J0KTtcblx0XG5cdCAgICBpZiAocHJvdG9jb2wgPT09ICdodHRwOicpXG5cdCAgICAgIHJldHVybiA4MDtcblx0XG5cdCAgICBpZiAocHJvdG9jb2wgPT09ICdodHRwczonKVxuXHQgICAgICByZXR1cm4gNDQzO1xuXHQgIH1cblx0fTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG5cblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBEaXNwYXRjaGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0dmFyIFV0aWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdC8qKlxuXHQgKiBCYXNlVmlldyB0byBiZSBleHRlbmRlZFxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLkJhc2VWaWV3XG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgQmFzZVZpZXcgID0ge1xuXHQgIC8qKlxuXHQgICAqIE5hbWVzcGFjZSBvZiB0aGUgdmlldy5cblx0ICAgKiAobmVlZCB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGRhdGEtbmFtZXNwYWNlIG9mIHRoZSBjb250YWluZXIpXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAdHlwZSB7U3RyaW5nfVxuXHQgICAqL1xuXHQgIG5hbWVzcGFjZTogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogSGVscGVyIHRvIGV4dGVuZCB0aGUgb2JqZWN0XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAcGFyYW0gIHtPYmplY3R9IG5ld09iamVjdFxuXHQgICAqIEByZXR1cm4ge09iamVjdH0gbmV3SW5oZXJpdE9iamVjdFxuXHQgICAqL1xuXHQgIGV4dGVuZDogZnVuY3Rpb24ob2JqKXtcblx0ICAgIHJldHVybiBVdGlscy5leHRlbmQodGhpcywgb2JqKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBJbml0IHRoZSB2aWV3LlxuXHQgICAqIFAuUy4gSXMgc3VnZ2VzdGVkIHRvIGluaXQgdGhlIHZpZXcgYmVmb3JlIHN0YXJ0aW5nIEJhcmJhLlBqYXguc3RhcnQoKSxcblx0ICAgKiBpbiB0aGlzIHdheSAub25FbnRlcigpIGFuZCAub25FbnRlckNvbXBsZXRlZCgpIHdpbGwgYmUgZmlyZWQgZm9yIHRoZSBjdXJyZW50XG5cdCAgICogY29udGFpbmVyIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkLlxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VWaWV3XG5cdCAgICovXG5cdCAgaW5pdDogZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgIERpc3BhdGNoZXIub24oJ2luaXRTdGF0ZUNoYW5nZScsXG5cdCAgICAgIGZ1bmN0aW9uKG5ld1N0YXR1cywgb2xkU3RhdHVzKSB7XG5cdCAgICAgICAgaWYgKG9sZFN0YXR1cyAmJiBvbGRTdGF0dXMubmFtZXNwYWNlID09PSBfdGhpcy5uYW1lc3BhY2UpXG5cdCAgICAgICAgICBfdGhpcy5vbkxlYXZlKCk7XG5cdCAgICAgIH1cblx0ICAgICk7XG5cdFxuXHQgICAgRGlzcGF0Y2hlci5vbignbmV3UGFnZVJlYWR5Jyxcblx0ICAgICAgZnVuY3Rpb24obmV3U3RhdHVzLCBvbGRTdGF0dXMsIGNvbnRhaW5lcikge1xuXHQgICAgICAgIF90aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XG5cdCAgICAgICAgaWYgKG5ld1N0YXR1cy5uYW1lc3BhY2UgPT09IF90aGlzLm5hbWVzcGFjZSlcblx0ICAgICAgICAgIF90aGlzLm9uRW50ZXIoKTtcblx0ICAgICAgfVxuXHQgICAgKTtcblx0XG5cdCAgICBEaXNwYXRjaGVyLm9uKCd0cmFuc2l0aW9uQ29tcGxldGVkJyxcblx0ICAgICAgZnVuY3Rpb24obmV3U3RhdHVzLCBvbGRTdGF0dXMpIHtcblx0ICAgICAgICBpZiAobmV3U3RhdHVzLm5hbWVzcGFjZSA9PT0gX3RoaXMubmFtZXNwYWNlKVxuXHQgICAgICAgICAgX3RoaXMub25FbnRlckNvbXBsZXRlZCgpO1xuXHRcblx0ICAgICAgICBpZiAob2xkU3RhdHVzICYmIG9sZFN0YXR1cy5uYW1lc3BhY2UgPT09IF90aGlzLm5hbWVzcGFjZSlcblx0ICAgICAgICAgIF90aGlzLm9uTGVhdmVDb21wbGV0ZWQoKTtcblx0ICAgICAgfVxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0IC8qKlxuXHQgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gdGhlIGNvbnRhaW5lclxuXHQgICogaXMgcmVhZHkgYW5kIGF0dGFjaGVkIHRvIHRoZSBET00uXG5cdCAgKlxuXHQgICogQG1lbWJlck9mIEJhcmJhLkJhc2VWaWV3XG5cdCAgKiBAYWJzdHJhY3Rcblx0ICAqL1xuXHQgIG9uRW50ZXI6IGZ1bmN0aW9uKCkge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCB3aGVuIHRoZSB0cmFuc2l0aW9uXG5cdCAgICogdG8gdGhpcyBjb250YWluZXIgaGFzIGp1c3QgZmluaXNoZWQuXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAYWJzdHJhY3Rcblx0ICAgKi9cblx0ICBvbkVudGVyQ29tcGxldGVkOiBmdW5jdGlvbigpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQgd2hlbiB0aGUgdHJhbnNpdGlvblxuXHQgICAqIHRvIGEgbmV3IGNvbnRhaW5lciBoYXMganVzdCBzdGFydGVkLlxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VWaWV3XG5cdCAgICogQGFic3RyYWN0XG5cdCAgICovXG5cdCAgb25MZWF2ZTogZnVuY3Rpb24oKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gdGhlIGNvbnRhaW5lclxuXHQgICAqIGhhcyBqdXN0IGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBET00uXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZVZpZXdcblx0ICAgKiBAYWJzdHJhY3Rcblx0ICAgKi9cblx0ICBvbkxlYXZlQ29tcGxldGVkOiBmdW5jdGlvbigpIHt9XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gQmFzZVZpZXc7XG5cblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBMaXR0bGUgRGlzcGF0Y2hlciBpbnNwaXJlZCBieSBNaWNyb0V2ZW50LmpzXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuRGlzcGF0Y2hlclxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0dmFyIERpc3BhdGNoZXIgPSB7XG5cdCAgLyoqXG5cdCAgICogT2JqZWN0IHRoYXQga2VlcHMgYWxsIHRoZSBldmVudHNcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5EaXNwYXRjaGVyXG5cdCAgICogQHJlYWRPbmx5XG5cdCAgICogQHR5cGUge09iamVjdH1cblx0ICAgKi9cblx0ICBldmVudHM6IHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBCaW5kIGEgY2FsbGJhY2sgdG8gYW4gZXZlbnRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5EaXNwYXRjaGVyXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSBldmVudE5hbWVcblx0ICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZnVuY3Rpb25cblx0ICAgKi9cblx0ICBvbjogZnVuY3Rpb24oZSwgZikge1xuXHQgICAgdGhpcy5ldmVudHNbZV0gPSB0aGlzLmV2ZW50c1tlXSB8fCBbXTtcblx0ICAgIHRoaXMuZXZlbnRzW2VdLnB1c2goZik7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogVW5iaW5kIGV2ZW50XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuRGlzcGF0Y2hlclxuXHQgICAqIEBwYXJhbSAge1N0cmluZ30gZXZlbnROYW1lXG5cdCAgICogQHBhcmFtICB7RnVuY3Rpb259IGZ1bmN0aW9uXG5cdCAgICovXG5cdCAgb2ZmOiBmdW5jdGlvbihlLCBmKSB7XG5cdCAgICBpZihlIGluIHRoaXMuZXZlbnRzID09PSBmYWxzZSlcblx0ICAgICAgcmV0dXJuO1xuXHRcblx0ICAgIHRoaXMuZXZlbnRzW2VdLnNwbGljZSh0aGlzLmV2ZW50c1tlXS5pbmRleE9mKGYpLCAxKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBGaXJlIHRoZSBldmVudCBydW5uaW5nIGFsbCB0aGUgZXZlbnQgYXNzb2NpYXRlZCB0byBpdFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkRpc3BhdGNoZXJcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IGV2ZW50TmFtZVxuXHQgICAqIEBwYXJhbSAgey4uLip9IGFyZ3Ncblx0ICAgKi9cblx0ICB0cmlnZ2VyOiBmdW5jdGlvbihlKSB7Ly9lLCAuLi5hcmdzXG5cdCAgICBpZiAoZSBpbiB0aGlzLmV2ZW50cyA9PT0gZmFsc2UpXG5cdCAgICAgIHJldHVybjtcblx0XG5cdCAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHNbZV0ubGVuZ3RoOyBpKyspe1xuXHQgICAgICB0aGlzLmV2ZW50c1tlXVtpXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IERpc3BhdGNoZXI7XG5cblxuLyoqKi8gfSxcbi8qIDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHQvKipcblx0ICogQmFzZUNhY2hlIGl0J3MgYSBzaW1wbGUgc3RhdGljIGNhY2hlXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuQmFzZUNhY2hlXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgQmFzZUNhY2hlID0ge1xuXHQgIC8qKlxuXHQgICAqIFRoZSBPYmplY3QgdGhhdCBrZWVwcyBhbGwgdGhlIGtleSB2YWx1ZSBpbmZvcm1hdGlvblxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkJhc2VDYWNoZVxuXHQgICAqIEB0eXBlIHtPYmplY3R9XG5cdCAgICovXG5cdCAgZGF0YToge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEhlbHBlciB0byBleHRlbmQgdGhpcyBvYmplY3Rcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5CYXNlQ2FjaGVcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge09iamVjdH0gbmV3T2JqZWN0XG5cdCAgICogQHJldHVybiB7T2JqZWN0fSBuZXdJbmhlcml0T2JqZWN0XG5cdCAgICovXG5cdCAgZXh0ZW5kOiBmdW5jdGlvbihvYmopIHtcblx0ICAgIHJldHVybiBVdGlscy5leHRlbmQodGhpcywgb2JqKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBTZXQgYSBrZXkgYW5kIHZhbHVlIGRhdGEsIG1haW5seSBCYXJiYSBpcyBnb2luZyB0byBzYXZlIHByb21pc2VzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZUNhY2hlXG5cdCAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuXHQgICAqIEBwYXJhbSB7Kn0gdmFsdWVcblx0ICAgKi9cblx0ICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsKSB7XG5cdCAgICB0aGlzLmRhdGFba2V5XSA9IHZhbDtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBSZXRyaWV2ZSB0aGUgZGF0YSB1c2luZyB0aGUga2V5XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZUNhY2hlXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSBrZXlcblx0ICAgKiBAcmV0dXJuIHsqfVxuXHQgICAqL1xuXHQgIGdldDogZnVuY3Rpb24oa2V5KSB7XG5cdCAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogRmx1c2ggdGhlIGNhY2hlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuQmFzZUNhY2hlXG5cdCAgICovXG5cdCAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgdGhpcy5kYXRhID0ge307XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBCYXNlQ2FjaGU7XG5cblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBIaXN0b3J5TWFuYWdlciBoZWxwcyB0byBrZWVwIHRyYWNrIG9mIHRoZSBuYXZpZ2F0aW9uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuSGlzdG9yeU1hbmFnZXJcblx0ICogQHR5cGUge09iamVjdH1cblx0ICovXG5cdHZhciBIaXN0b3J5TWFuYWdlciA9IHtcblx0ICAvKipcblx0ICAgKiBLZWVwIHRyYWNrIG9mIHRoZSBzdGF0dXMgaW4gaGlzdG9yaWMgb3JkZXJcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5IaXN0b3J5TWFuYWdlclxuXHQgICAqIEByZWFkT25seVxuXHQgICAqIEB0eXBlIHtBcnJheX1cblx0ICAgKi9cblx0ICBoaXN0b3J5OiBbXSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWRkIGEgbmV3IHNldCBvZiB1cmwgYW5kIG5hbWVzcGFjZVxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLkhpc3RvcnlNYW5hZ2VyXG5cdCAgICogQHBhcmFtIHtTdHJpbmd9IHVybFxuXHQgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqL1xuXHQgIGFkZDogZnVuY3Rpb24odXJsLCBuYW1lc3BhY2UpIHtcblx0ICAgIGlmICghbmFtZXNwYWNlKVxuXHQgICAgICBuYW1lc3BhY2UgPSB1bmRlZmluZWQ7XG5cdFxuXHQgICAgdGhpcy5oaXN0b3J5LnB1c2goe1xuXHQgICAgICB1cmw6IHVybCxcblx0ICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2Vcblx0ICAgIH0pO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFJldHVybiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBzdGF0dXNcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5IaXN0b3J5TWFuYWdlclxuXHQgICAqIEByZXR1cm4ge09iamVjdH1cblx0ICAgKi9cblx0ICBjdXJyZW50U3RhdHVzOiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFJldHVybiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJldmlvdXMgc3RhdHVzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuSGlzdG9yeU1hbmFnZXJcblx0ICAgKiBAcmV0dXJuIHtPYmplY3R9XG5cdCAgICovXG5cdCAgcHJldlN0YXR1czogZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcblx0XG5cdCAgICBpZiAoaGlzdG9yeS5sZW5ndGggPCAyKVxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0XG5cdCAgICByZXR1cm4gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDJdO1xuXHQgIH1cblx0fTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gSGlzdG9yeU1hbmFnZXI7XG5cblxuLyoqKi8gfSxcbi8qIDEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgVXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHR2YXIgRGlzcGF0Y2hlciA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdHZhciBIaWRlU2hvd1RyYW5zaXRpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0dmFyIEJhc2VDYWNoZSA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cdFxuXHR2YXIgSGlzdG9yeU1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXHR2YXIgRG9tID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cdFxuXHQvKipcblx0ICogUGpheCBpcyBhIHN0YXRpYyBvYmplY3Qgd2l0aCBtYWluIGZ1bmN0aW9uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgQmFyYmEuUGpheFxuXHQgKiBAYm9ycm93cyBEb20gYXMgRG9tXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgUGpheCA9IHtcblx0ICBEb206IERvbSxcblx0ICBIaXN0b3J5OiBIaXN0b3J5TWFuYWdlcixcblx0ICBDYWNoZTogQmFzZUNhY2hlLFxuXHRcblx0ICAvKipcblx0ICAgKiBJbmRpY2F0ZSB3ZXRoZXIgb3Igbm90IHVzZSB0aGUgY2FjaGVcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHR5cGUge0Jvb2xlYW59XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICBjYWNoZUVuYWJsZWQ6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEluZGljYXRlIGlmIHRoZXJlIGlzIGFuIGFuaW1hdGlvbiBpbiBwcm9ncmVzc1xuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcmVhZE9ubHlcblx0ICAgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICAgKi9cblx0ICB0cmFuc2l0aW9uUHJvZ3Jlc3M6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBDbGFzcyBuYW1lIHVzZWQgdG8gaWdub3JlIGxpbmtzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICBpZ25vcmVDbGFzc0xpbms6ICduby1iYXJiYScsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB0byBzdGFydCBQamF4XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqL1xuXHQgIHN0YXJ0OiBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMuaW5pdCgpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEluaXQgdGhlIGV2ZW50c1xuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqL1xuXHQgIGluaXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuRG9tLmdldENvbnRhaW5lcigpO1xuXHQgICAgdmFyIHdyYXBwZXIgPSB0aGlzLkRvbS5nZXRXcmFwcGVyKCk7XG5cdFxuXHQgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsICdwb2xpdGUnKTtcblx0XG5cdCAgICB0aGlzLkhpc3RvcnkuYWRkKFxuXHQgICAgICB0aGlzLmdldEN1cnJlbnRVcmwoKSxcblx0ICAgICAgdGhpcy5Eb20uZ2V0TmFtZXNwYWNlKGNvbnRhaW5lcilcblx0ICAgICk7XG5cdFxuXHQgICAgLy9GaXJlIGZvciB0aGUgY3VycmVudCB2aWV3LlxuXHQgICAgRGlzcGF0Y2hlci50cmlnZ2VyKCdpbml0U3RhdGVDaGFuZ2UnLCB0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpKTtcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcignbmV3UGFnZVJlYWR5Jyxcblx0ICAgICAgdGhpcy5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKSxcblx0ICAgICAge30sXG5cdCAgICAgIGNvbnRhaW5lcixcblx0ICAgICAgdGhpcy5Eb20uY3VycmVudEhUTUxcblx0ICAgICk7XG5cdCAgICBEaXNwYXRjaGVyLnRyaWdnZXIoJ3RyYW5zaXRpb25Db21wbGV0ZWQnLCB0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpKTtcblx0XG5cdCAgICB0aGlzLmJpbmRFdmVudHMoKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBdHRhY2ggdGhlIGV2ZW50bGlzdGVuZXJzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgYmluZEV2ZW50czogZnVuY3Rpb24oKSB7XG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG5cdCAgICAgIHRoaXMub25MaW5rQ2xpY2suYmluZCh0aGlzKVxuXHQgICAgKTtcblx0XG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLFxuXHQgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKVxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBSZXR1cm4gdGhlIGN1cnJlbnRVUkwgY2xlYW5lZFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcmV0dXJuIHtTdHJpbmd9IGN1cnJlbnRVcmxcblx0ICAgKi9cblx0ICBnZXRDdXJyZW50VXJsOiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBVdGlscy5jbGVhbkxpbmsoXG5cdCAgICAgIFV0aWxzLmdldEN1cnJlbnRVcmwoKVxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBDaGFuZ2UgdGhlIFVSTCB3aXRoIHB1c2hzdGF0ZSBhbmQgdHJpZ2dlciB0aGUgc3RhdGUgY2hhbmdlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwYXJhbSB7U3RyaW5nfSBuZXdVcmxcblx0ICAgKi9cblx0ICBnb1RvOiBmdW5jdGlvbih1cmwpIHtcblx0ICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmwpO1xuXHQgICAgdGhpcy5vblN0YXRlQ2hhbmdlKCk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogRm9yY2UgdGhlIGJyb3dzZXIgdG8gZ28gdG8gYSBjZXJ0YWluIHVybFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG5cdCAgICogQHByaXZhdGVcblx0ICAgKi9cblx0ICBmb3JjZUdvVG86IGZ1bmN0aW9uKHVybCkge1xuXHQgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIExvYWQgYW4gdXJsLCB3aWxsIHN0YXJ0IGFuIHhociByZXF1ZXN0IG9yIGxvYWQgZnJvbSB0aGUgY2FjaGVcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtTdHJpbmd9IHVybFxuXHQgICAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAgICovXG5cdCAgbG9hZDogZnVuY3Rpb24odXJsKSB7XG5cdCAgICB2YXIgZGVmZXJyZWQgPSBVdGlscy5kZWZlcnJlZCgpO1xuXHQgICAgdmFyIF90aGlzID0gdGhpcztcblx0ICAgIHZhciB4aHI7XG5cdFxuXHQgICAgeGhyID0gdGhpcy5DYWNoZS5nZXQodXJsKTtcblx0XG5cdCAgICBpZiAoIXhocikge1xuXHQgICAgICB4aHIgPSBVdGlscy54aHIodXJsKTtcblx0ICAgICAgdGhpcy5DYWNoZS5zZXQodXJsLCB4aHIpO1xuXHQgICAgfVxuXHRcblx0ICAgIHhoci50aGVuKFxuXHQgICAgICBmdW5jdGlvbihkYXRhKSB7XG5cdCAgICAgICAgdmFyIGNvbnRhaW5lciA9IF90aGlzLkRvbS5wYXJzZVJlc3BvbnNlKGRhdGEpO1xuXHRcblx0ICAgICAgICBfdGhpcy5Eb20ucHV0Q29udGFpbmVyKGNvbnRhaW5lcik7XG5cdFxuXHQgICAgICAgIGlmICghX3RoaXMuY2FjaGVFbmFibGVkKVxuXHQgICAgICAgICAgX3RoaXMuQ2FjaGUucmVzZXQoKTtcblx0XG5cdCAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShjb250YWluZXIpO1xuXHQgICAgICB9LFxuXHQgICAgICBmdW5jdGlvbigpIHtcblx0ICAgICAgICAvL1NvbWV0aGluZyB3ZW50IHdyb25nICh0aW1lb3V0LCA0MDQsIDUwNS4uLilcblx0ICAgICAgICBfdGhpcy5mb3JjZUdvVG8odXJsKTtcblx0XG5cdCAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG5cdCAgICAgIH1cblx0ICAgICk7XG5cdFxuXHQgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogR2V0IHRoZSAuaHJlZiBwYXJhbWV0ZXIgb3V0IG9mIGFuIGVsZW1lbnRcblx0ICAgKiBhbmQgaGFuZGxlIHNwZWNpYWwgY2FzZXMgKGxpa2UgeGxpbms6aHJlZilcblx0ICAgKlxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcblx0ICAgKiBAcmV0dXJuIHtTdHJpbmd9IGhyZWZcblx0ICAgKi9cblx0ICBnZXRIcmVmOiBmdW5jdGlvbihlbCkge1xuXHQgICAgaWYgKCFlbCkge1xuXHQgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgICAgfVxuXHRcblx0ICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUgJiYgdHlwZW9mIGVsLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpID09PSAnc3RyaW5nJykge1xuXHQgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCd4bGluazpocmVmJyk7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKHR5cGVvZiBlbC5ocmVmID09PSAnc3RyaW5nJykge1xuXHQgICAgICByZXR1cm4gZWwuaHJlZjtcblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gdW5kZWZpbmVkO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIENhbGxiYWNrIGNhbGxlZCBmcm9tIGNsaWNrIGV2ZW50XG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldnRcblx0ICAgKi9cblx0ICBvbkxpbmtDbGljazogZnVuY3Rpb24oZXZ0KSB7XG5cdCAgICB2YXIgZWwgPSBldnQudGFyZ2V0O1xuXHRcblx0ICAgIC8vR28gdXAgaW4gdGhlIG5vZGVsaXN0IHVudGlsIHdlXG5cdCAgICAvL2ZpbmQgc29tZXRoaW5nIHdpdGggYW4gaHJlZlxuXHQgICAgd2hpbGUgKGVsICYmICF0aGlzLmdldEhyZWYoZWwpKSB7XG5cdCAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcblx0ICAgIH1cblx0XG5cdCAgICBpZiAodGhpcy5wcmV2ZW50Q2hlY2soZXZ0LCBlbCkpIHtcblx0ICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXHQgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblx0XG5cdCAgICAgIERpc3BhdGNoZXIudHJpZ2dlcignbGlua0NsaWNrZWQnLCBlbCwgZXZ0KTtcblx0XG5cdCAgICAgIHZhciBocmVmID0gdGhpcy5nZXRIcmVmKGVsKTtcblx0ICAgICAgdGhpcy5nb1RvKGhyZWYpO1xuXHQgICAgfVxuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIERldGVybWluZSBpZiB0aGUgbGluayBzaG91bGQgYmUgZm9sbG93ZWRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHBhcmFtICB7TW91c2VFdmVudH0gZXZ0XG5cdCAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICAgKiBAcmV0dXJuIHtCb29sZWFufVxuXHQgICAqL1xuXHQgIHByZXZlbnRDaGVjazogZnVuY3Rpb24oZXZ0LCBlbGVtZW50KSB7XG5cdCAgICBpZiAoIXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSlcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIHZhciBocmVmID0gdGhpcy5nZXRIcmVmKGVsZW1lbnQpO1xuXHRcblx0ICAgIC8vVXNlclxuXHQgICAgaWYgKCFlbGVtZW50IHx8ICFocmVmKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9NaWRkbGUgY2xpY2ssIGNtZCBjbGljaywgYW5kIGN0cmwgY2xpY2tcblx0ICAgIGlmIChldnQud2hpY2ggPiAxIHx8IGV2dC5tZXRhS2V5IHx8IGV2dC5jdHJsS2V5IHx8IGV2dC5zaGlmdEtleSB8fCBldnQuYWx0S2V5KVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9JZ25vcmUgdGFyZ2V0IHdpdGggX2JsYW5rIHRhcmdldFxuXHQgICAgaWYgKGVsZW1lbnQudGFyZ2V0ICYmIGVsZW1lbnQudGFyZ2V0ID09PSAnX2JsYW5rJylcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIC8vQ2hlY2sgaWYgaXQncyB0aGUgc2FtZSBkb21haW5cblx0ICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09IGVsZW1lbnQucHJvdG9jb2wgfHwgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICE9PSBlbGVtZW50Lmhvc3RuYW1lKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9DaGVjayBpZiB0aGUgcG9ydCBpcyB0aGUgc2FtZVxuXHQgICAgaWYgKFV0aWxzLmdldFBvcnQoKSAhPT0gVXRpbHMuZ2V0UG9ydChlbGVtZW50LnBvcnQpKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgLy9JZ25vcmUgY2FzZSB3aGVuIGEgaGFzaCBpcyBiZWluZyB0YWNrZWQgb24gdGhlIGN1cnJlbnQgVVJMXG5cdCAgICBpZiAoaHJlZi5pbmRleE9mKCcjJykgPiAtMSlcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIC8vSWdub3JlIGNhc2Ugd2hlcmUgdGhlcmUgaXMgZG93bmxvYWQgYXR0cmlidXRlXG5cdCAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkb3dubG9hZCcpID09PSAnc3RyaW5nJylcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcblx0ICAgIC8vSW4gY2FzZSB5b3UncmUgdHJ5aW5nIHRvIGxvYWQgdGhlIHNhbWUgcGFnZVxuXHQgICAgaWYgKFV0aWxzLmNsZWFuTGluayhocmVmKSA9PSBVdGlscy5jbGVhbkxpbmsobG9jYXRpb24uaHJlZikpXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0XG5cdCAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5pZ25vcmVDbGFzc0xpbmspKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogUmV0dXJuIGEgdHJhbnNpdGlvbiBvYmplY3Rcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHJldHVybiB7QmFyYmEuVHJhbnNpdGlvbn0gVHJhbnNpdGlvbiBvYmplY3Rcblx0ICAgKi9cblx0ICBnZXRUcmFuc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0ICAgIC8vVXNlciBjdXN0b21pemFibGVcblx0ICAgIHJldHVybiBIaWRlU2hvd1RyYW5zaXRpb247XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogTWV0aG9kIGNhbGxlZCBhZnRlciBhICdwb3BzdGF0ZScgb3IgZnJvbSAuZ29UbygpXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICovXG5cdCAgb25TdGF0ZUNoYW5nZTogZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgbmV3VXJsID0gdGhpcy5nZXRDdXJyZW50VXJsKCk7XG5cdFxuXHQgICAgaWYgKHRoaXMudHJhbnNpdGlvblByb2dyZXNzKVxuXHQgICAgICB0aGlzLmZvcmNlR29UbyhuZXdVcmwpO1xuXHRcblx0ICAgIGlmICh0aGlzLkhpc3RvcnkuY3VycmVudFN0YXR1cygpLnVybCA9PT0gbmV3VXJsKVxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdFxuXHQgICAgdGhpcy5IaXN0b3J5LmFkZChuZXdVcmwpO1xuXHRcblx0ICAgIHZhciBuZXdDb250YWluZXIgPSB0aGlzLmxvYWQobmV3VXJsKTtcblx0ICAgIHZhciB0cmFuc2l0aW9uID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmdldFRyYW5zaXRpb24oKSk7XG5cdFxuXHQgICAgdGhpcy50cmFuc2l0aW9uUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcignaW5pdFN0YXRlQ2hhbmdlJyxcblx0ICAgICAgdGhpcy5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKSxcblx0ICAgICAgdGhpcy5IaXN0b3J5LnByZXZTdGF0dXMoKVxuXHQgICAgKTtcblx0XG5cdCAgICB2YXIgdHJhbnNpdGlvbkluc3RhbmNlID0gdHJhbnNpdGlvbi5pbml0KFxuXHQgICAgICB0aGlzLkRvbS5nZXRDb250YWluZXIoKSxcblx0ICAgICAgbmV3Q29udGFpbmVyXG5cdCAgICApO1xuXHRcblx0ICAgIG5ld0NvbnRhaW5lci50aGVuKFxuXHQgICAgICB0aGlzLm9uTmV3Q29udGFpbmVyTG9hZGVkLmJpbmQodGhpcylcblx0ICAgICk7XG5cdFxuXHQgICAgdHJhbnNpdGlvbkluc3RhbmNlLnRoZW4oXG5cdCAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kLmJpbmQodGhpcylcblx0ICAgICk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogRnVuY3Rpb24gY2FsbGVkIGFzIHNvb24gdGhlIG5ldyBjb250YWluZXIgaXMgcmVhZHlcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4XG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcblx0ICAgKi9cblx0ICBvbk5ld0NvbnRhaW5lckxvYWRlZDogZnVuY3Rpb24oY29udGFpbmVyKSB7XG5cdCAgICB2YXIgY3VycmVudFN0YXR1cyA9IHRoaXMuSGlzdG9yeS5jdXJyZW50U3RhdHVzKCk7XG5cdCAgICBjdXJyZW50U3RhdHVzLm5hbWVzcGFjZSA9IHRoaXMuRG9tLmdldE5hbWVzcGFjZShjb250YWluZXIpO1xuXHRcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcignbmV3UGFnZVJlYWR5Jyxcblx0ICAgICAgdGhpcy5IaXN0b3J5LmN1cnJlbnRTdGF0dXMoKSxcblx0ICAgICAgdGhpcy5IaXN0b3J5LnByZXZTdGF0dXMoKSxcblx0ICAgICAgY29udGFpbmVyLFxuXHQgICAgICB0aGlzLkRvbS5jdXJyZW50SFRNTFxuXHQgICAgKTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBGdW5jdGlvbiBjYWxsZWQgYXMgc29vbiB0aGUgdHJhbnNpdGlvbiBpcyBmaW5pc2hlZFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXhcblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqL1xuXHQgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24oKSB7XG5cdCAgICB0aGlzLnRyYW5zaXRpb25Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcblx0ICAgIERpc3BhdGNoZXIudHJpZ2dlcigndHJhbnNpdGlvbkNvbXBsZXRlZCcsXG5cdCAgICAgIHRoaXMuSGlzdG9yeS5jdXJyZW50U3RhdHVzKCksXG5cdCAgICAgIHRoaXMuSGlzdG9yeS5wcmV2U3RhdHVzKClcblx0ICAgICk7XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBQamF4O1xuXG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIEJhc2VUcmFuc2l0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0XG5cdC8qKlxuXHQgKiBCYXNpYyBUcmFuc2l0aW9uIG9iamVjdCwgd2FpdCBmb3IgdGhlIG5ldyBDb250YWluZXIgdG8gYmUgcmVhZHksXG5cdCAqIHNjcm9sbCB0b3AsIGFuZCBmaW5pc2ggdGhlIHRyYW5zaXRpb24gKHJlbW92aW5nIHRoZSBvbGQgY29udGFpbmVyIGFuZCBkaXNwbGF5aW5nIHRoZSBuZXcgb25lKVxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLkhpZGVTaG93VHJhbnNpdGlvblxuXHQgKiBAYXVnbWVudHMgQmFyYmEuQmFzZVRyYW5zaXRpb25cblx0ICovXG5cdHZhciBIaWRlU2hvd1RyYW5zaXRpb24gPSBCYXNlVHJhbnNpdGlvbi5leHRlbmQoe1xuXHQgIHN0YXJ0OiBmdW5jdGlvbigpIHtcblx0ICAgIHRoaXMubmV3Q29udGFpbmVyTG9hZGluZy50aGVuKHRoaXMuZmluaXNoLmJpbmQodGhpcykpO1xuXHQgIH0sXG5cdFxuXHQgIGZpbmlzaDogZnVuY3Rpb24oKSB7XG5cdCAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG5cdCAgICB0aGlzLmRvbmUoKTtcblx0ICB9XG5cdH0pO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBIaWRlU2hvd1RyYW5zaXRpb247XG5cblxuLyoqKi8gfSxcbi8qIDEyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogT2JqZWN0IHRoYXQgaXMgZ29pbmcgdG8gZGVhbCB3aXRoIERPTSBwYXJzaW5nL21hbmlwdWxhdGlvblxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIEJhcmJhLlBqYXguRG9tXG5cdCAqIEB0eXBlIHtPYmplY3R9XG5cdCAqL1xuXHR2YXIgRG9tID0ge1xuXHQgIC8qKlxuXHQgICAqIFRoZSBuYW1lIG9mIHRoZSBkYXRhIGF0dHJpYnV0ZSBvbiB0aGUgY29udGFpbmVyXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAdHlwZSB7U3RyaW5nfVxuXHQgICAqIEBkZWZhdWx0XG5cdCAgICovXG5cdCAgZGF0YU5hbWVzcGFjZTogJ25hbWVzcGFjZScsXG5cdFxuXHQgIC8qKlxuXHQgICAqIElkIG9mIHRoZSBtYWluIHdyYXBwZXJcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICB3cmFwcGVySWQ6ICdiYXJiYS13cmFwcGVyJyxcblx0XG5cdCAgLyoqXG5cdCAgICogQ2xhc3MgbmFtZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBjb250YWluZXJzXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAdHlwZSB7U3RyaW5nfVxuXHQgICAqIEBkZWZhdWx0XG5cdCAgICovXG5cdCAgY29udGFpbmVyQ2xhc3M6ICdiYXJiYS1jb250YWluZXInLFxuXHRcblx0ICAvKipcblx0ICAgKiBGdWxsIEhUTUwgU3RyaW5nIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG5cdCAgICogQnkgZGVmYXVsdCBpcyB0aGUgaW5uZXJIVE1MIG9mIHRoZSBpbml0aWFsIGxvYWRlZCBwYWdlLlxuXHQgICAqXG5cdCAgICogRWFjaCB0aW1lIGEgbmV3IHBhZ2UgaXMgbG9hZGVkLCB0aGUgdmFsdWUgaXMgdGhlIHJlc3BvbnNlIG9mIHRoZSB4aHIgY2FsbC5cblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICovXG5cdCAgY3VycmVudEhUTUw6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIFBhcnNlIHRoZSByZXNwb25zZVRleHQgb2J0YWluZWQgZnJvbSB0aGUgeGhyIGNhbGxcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QamF4LkRvbVxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7U3RyaW5nfSByZXNwb25zZVRleHRcblx0ICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cblx0ICAgKi9cblx0ICBwYXJzZVJlc3BvbnNlOiBmdW5jdGlvbihyZXNwb25zZVRleHQpIHtcblx0ICAgIHRoaXMuY3VycmVudEhUTUwgPSByZXNwb25zZVRleHQ7XG5cdFxuXHQgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gcmVzcG9uc2VUZXh0O1xuXHRcblx0ICAgIHZhciB0aXRsZUVsID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuXHRcblx0ICAgIGlmICh0aXRsZUVsKVxuXHQgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlRWwudGV4dENvbnRlbnQ7XG5cdFxuXHQgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKHdyYXBwZXIpO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEdldCB0aGUgbWFpbiBiYXJiYSB3cmFwcGVyIGJ5IHRoZSBJRCBgd3JhcHBlcklkYFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICAgKi9cblx0ICBnZXRXcmFwcGVyOiBmdW5jdGlvbigpIHtcblx0ICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy53cmFwcGVySWQpO1xuXHRcblx0ICAgIGlmICghd3JhcHBlcilcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYXJiYS5qczogd3JhcHBlciBub3QgZm91bmQhJyk7XG5cdFxuXHQgICAgcmV0dXJuIHdyYXBwZXI7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogR2V0IHRoZSBjb250YWluZXIgb24gdGhlIGN1cnJlbnQgRE9NLFxuXHQgICAqIG9yIGZyb20gYW4gSFRNTEVsZW1lbnQgcGFzc2VkIHZpYSBhcmd1bWVudFxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuXHQgICAqL1xuXHQgIGdldENvbnRhaW5lcjogZnVuY3Rpb24oZWxlbWVudCkge1xuXHQgICAgaWYgKCFlbGVtZW50KVxuXHQgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblx0XG5cdCAgICBpZiAoIWVsZW1lbnQpXG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignQmFyYmEuanM6IERPTSBub3QgcmVhZHkhJyk7XG5cdFxuXHQgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMucGFyc2VDb250YWluZXIoZWxlbWVudCk7XG5cdFxuXHQgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuanF1ZXJ5KVxuXHQgICAgICBjb250YWluZXIgPSBjb250YWluZXJbMF07XG5cdFxuXHQgICAgaWYgKCFjb250YWluZXIpXG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignQmFyYmEuanM6IG5vIGNvbnRhaW5lciBmb3VuZCcpO1xuXHRcblx0ICAgIHJldHVybiBjb250YWluZXI7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogR2V0IHRoZSBuYW1lc3BhY2Ugb2YgdGhlIGNvbnRhaW5lclxuXHQgICAqXG5cdCAgICogQG1lbWJlck9mIEJhcmJhLlBqYXguRG9tXG5cdCAgICogQHByaXZhdGVcblx0ICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgICAqIEByZXR1cm4ge1N0cmluZ31cblx0ICAgKi9cblx0ICBnZXROYW1lc3BhY2U6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0ICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuZGF0YXNldCkge1xuXHQgICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W3RoaXMuZGF0YU5hbWVzcGFjZV07XG5cdCAgICB9IGVsc2UgaWYgKGVsZW1lbnQpIHtcblx0ICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyB0aGlzLmRhdGFOYW1lc3BhY2UpO1xuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBudWxsO1xuXHQgIH0sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFB1dCB0aGUgY29udGFpbmVyIG9uIHRoZSBwYWdlXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAgICovXG5cdCAgcHV0Q29udGFpbmVyOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdCAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XG5cdCAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuXHQgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0ICB9LFxuXHRcblx0ICAvKipcblx0ICAgKiBHZXQgY29udGFpbmVyIHNlbGVjdG9yXG5cdCAgICpcblx0ICAgKiBAbWVtYmVyT2YgQmFyYmEuUGpheC5Eb21cblx0ICAgKiBAcHJpdmF0ZVxuXHQgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICAgKi9cblx0ICBwYXJzZUNvbnRhaW5lcjogZnVuY3Rpb24oZWxlbWVudCkge1xuXHQgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLmNvbnRhaW5lckNsYXNzKTtcblx0ICB9XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IERvbTtcblxuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBVdGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdHZhciBQamF4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdFxuXHQvKipcblx0ICogUHJlZmV0Y2hcblx0ICpcblx0ICogQG5hbWVzcGFjZSBCYXJiYS5QcmVmZXRjaFxuXHQgKiBAdHlwZSB7T2JqZWN0fVxuXHQgKi9cblx0dmFyIFByZWZldGNoID0ge1xuXHQgIC8qKlxuXHQgICAqIENsYXNzIG5hbWUgdXNlZCB0byBpZ25vcmUgcHJlZmV0Y2ggb24gbGlua3Ncblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QcmVmZXRjaFxuXHQgICAqIEB0eXBlIHtTdHJpbmd9XG5cdCAgICogQGRlZmF1bHRcblx0ICAgKi9cblx0ICBpZ25vcmVDbGFzc0xpbms6ICduby1iYXJiYS1wcmVmZXRjaCcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEluaXQgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIG1vdXNlb3ZlciBhbmQgdG91Y2hzdGFydFxuXHQgICAqIGZvciB0aGUgcHJlZmV0Y2hcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QcmVmZXRjaFxuXHQgICAqL1xuXHQgIGluaXQ6IGZ1bmN0aW9uKCkge1xuXHQgICAgaWYgKCF3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHRcblx0ICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5vbkxpbmtFbnRlci5iaW5kKHRoaXMpKTtcblx0ICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25MaW5rRW50ZXIuYmluZCh0aGlzKSk7XG5cdCAgfSxcblx0XG5cdCAgLyoqXG5cdCAgICogQ2FsbGJhY2sgZm9yIHRoZSBtb3VzZWhvdmVyL3RvdWNoc3RhcnRcblx0ICAgKlxuXHQgICAqIEBtZW1iZXJPZiBCYXJiYS5QcmVmZXRjaFxuXHQgICAqIEBwcml2YXRlXG5cdCAgICogQHBhcmFtICB7T2JqZWN0fSBldnRcblx0ICAgKi9cblx0ICBvbkxpbmtFbnRlcjogZnVuY3Rpb24oZXZ0KSB7XG5cdCAgICB2YXIgZWwgPSBldnQudGFyZ2V0O1xuXHRcblx0ICAgIHdoaWxlIChlbCAmJiAhUGpheC5nZXRIcmVmKGVsKSkge1xuXHQgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKCFlbCB8fCBlbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5pZ25vcmVDbGFzc0xpbmspKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblx0XG5cdCAgICB2YXIgdXJsID0gUGpheC5nZXRIcmVmKGVsKTtcblx0XG5cdCAgICAvL0NoZWNrIGlmIHRoZSBsaW5rIGlzIGVsZWdpYmxlIGZvciBQamF4XG5cdCAgICBpZiAoUGpheC5wcmV2ZW50Q2hlY2soZXZ0LCBlbCkgJiYgIVBqYXguQ2FjaGUuZ2V0KHVybCkpIHtcblx0ICAgICAgdmFyIHhociA9IFV0aWxzLnhocih1cmwpO1xuXHQgICAgICBQamF4LkNhY2hlLnNldCh1cmwsIHhocik7XG5cdCAgICB9XG5cdCAgfVxuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmVmZXRjaDtcblxuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXJiYS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYXJiYS5qcy9kaXN0L2JhcmJhLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=