var Pv=Object.defineProperty;var Lv=(t,e,n)=>e in t?Pv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $f=(t,e,n)=>Lv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var _g={exports:{}},mc={},vg={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),Nv=Symbol.for("react.portal"),Dv=Symbol.for("react.fragment"),Iv=Symbol.for("react.strict_mode"),Uv=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),Ov=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),Bv=Symbol.for("react.memo"),Hv=Symbol.for("react.lazy"),qf=Symbol.iterator;function Vv(t){return t===null||typeof t!="object"?null:(t=qf&&t[qf]||t["@@iterator"],typeof t=="function"?t:null)}var xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yg=Object.assign,Sg={};function io(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||xg}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mg(){}Mg.prototype=io.prototype;function Ad(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||xg}var bd=Ad.prototype=new Mg;bd.constructor=Ad;yg(bd,io.prototype);bd.isPureReactComponent=!0;var Yf=Array.isArray,Eg=Object.prototype.hasOwnProperty,Cd={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Eg.call(e,i)&&!wg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ga,type:t,key:s,ref:o,props:r,_owner:Cd.current}}function Gv(t,e){return{$$typeof:ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kf=/\/+/g;function Uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jv(""+t.key):e.toString(36)}function xl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ga:case Nv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Uc(o,0):i,Yf(r)?(n="",t!=null&&(n=t.replace(Kf,"$&/")+"/"),xl(r,e,n,"",function(c){return c})):r!=null&&(Rd(r)&&(r=Gv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Kf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Yf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Uc(s,a);o+=xl(s,e,n,l,r)}else if(l=Vv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Uc(s,a++),o+=xl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var i=[],r=0;return xl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Wv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},yl={transition:null},Xv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:yl,ReactCurrentOwner:Cd};function Ag(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!Rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=io;Qe.Fragment=Dv;Qe.Profiler=Uv;Qe.PureComponent=Ad;Qe.StrictMode=Iv;Qe.Suspense=zv;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;Qe.act=Ag;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Eg.call(e,l)&&!wg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ga,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fv,_context:t},t.Consumer=t};Qe.createElement=Tg;Qe.createFactory=function(t){var e=Tg.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:Ov,render:t}};Qe.isValidElement=Rd;Qe.lazy=function(t){return{$$typeof:Hv,_payload:{_status:-1,_result:t},_init:Wv}};Qe.memo=function(t,e){return{$$typeof:Bv,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};Qe.unstable_act=Ag;Qe.useCallback=function(t,e){return an.current.useCallback(t,e)};Qe.useContext=function(t){return an.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return an.current.useEffect(t,e)};Qe.useId=function(){return an.current.useId()};Qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return an.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Qe.useRef=function(t){return an.current.useRef(t)};Qe.useState=function(t){return an.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return an.current.useTransition()};Qe.version="18.3.1";vg.exports=Qe;var Ue=vg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=Ue,qv=Symbol.for("react.element"),Yv=Symbol.for("react.fragment"),Kv=Object.prototype.hasOwnProperty,Zv=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qv={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Kv.call(e,i)&&!Qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qv,type:t,key:s,ref:o,props:r,_owner:Zv.current}}mc.Fragment=Yv;mc.jsx=bg;mc.jsxs=bg;_g.exports=mc;var _=_g.exports,Cg={exports:{}},bn={},Rg={exports:{}},Pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,F){var W=R.length;R.push(F);e:for(;0<W;){var ie=W-1>>>1,he=R[ie];if(0<r(he,F))R[ie]=F,R[W]=he,W=ie;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var F=R[0],W=R.pop();if(W!==F){R[0]=W;e:for(var ie=0,he=R.length,Be=he>>>1;ie<Be;){var ee=2*(ie+1)-1,ae=R[ee],xe=ee+1,me=R[xe];if(0>r(ae,W))xe<he&&0>r(me,ae)?(R[ie]=me,R[xe]=W,ie=xe):(R[ie]=ae,R[ee]=W,ie=ee);else if(xe<he&&0>r(me,W))R[ie]=me,R[xe]=W,ie=xe;else break e}}return F}function r(R,F){var W=R.sortIndex-F.sortIndex;return W!==0?W:R.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=R)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function S(R){if(g=!1,y(R),!x)if(n(l)!==null)x=!0,z(T);else{var F=n(c);F!==null&&ne(S,F.startTime-R)}}function T(R,F){x=!1,g&&(g=!1,h(N),N=-1),p=!0;var W=f;try{for(y(F),d=n(l);d!==null&&(!(d.expirationTime>F)||R&&!U());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var he=ie(d.expirationTime<=F);F=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(l)&&i(l),y(F)}else i(l);d=n(l)}if(d!==null)var Be=!0;else{var ee=n(c);ee!==null&&ne(S,ee.startTime-F),Be=!1}return Be}finally{d=null,f=W,p=!1}}var A=!1,L=null,N=-1,w=5,M=-1;function U(){return!(t.unstable_now()-M<w)}function $(){if(L!==null){var R=t.unstable_now();M=R;var F=!0;try{F=L(!0,R)}finally{F?D():(A=!1,L=null)}}else A=!1}var D;if(typeof v=="function")D=function(){v($)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,j=k.port2;k.port1.onmessage=$,D=function(){j.postMessage(null)}}else D=function(){m($,0)};function z(R){L=R,A||(A=!0,D())}function ne(R,F){N=m(function(){R(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,z(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var W=f;f=F;try{return R()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,F){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=f;f=R;try{return F()}finally{f=W}},t.unstable_scheduleCallback=function(R,F,W){var ie=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ie+W:ie):W=ie,R){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=W+he,R={id:u++,callback:F,priorityLevel:R,startTime:W,expirationTime:he,sortIndex:-1},W>ie?(R.sortIndex=W,e(c,R),n(l)===null&&R===n(c)&&(g?(h(N),N=-1):g=!0,ne(S,W-ie))):(R.sortIndex=he,e(l,R),x||p||(x=!0,z(T))),R},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(R){var F=f;return function(){var W=f;f=F;try{return R.apply(this,arguments)}finally{f=W}}}})(Pg);Rg.exports=Pg;var Jv=Rg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=Ue,An=Jv;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lg=new Set,Yo={};function Qr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Yo[t]=e,t=0;t<e.length;t++)Lg.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf={},Qf={};function nx(t){return Gu.call(Qf,t)?!0:Gu.call(Zf,t)?!1:tx.test(t)?Qf[t]=!0:(Zf[t]=!0,!1)}function ix(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rx(t,e,n,i){if(e===null||typeof e>"u"||ix(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function Ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pd,Ld);$t[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pd,Ld);$t[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pd,Ld);$t[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nd(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rx(e,n,r,i)&&(n=null),i||r===null?nx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),vs=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),Ng=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),Jf=Symbol.iterator;function ho(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Fc;function Ro(t){if(Fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fc=e&&e[1]||""}return`
`+Fc+t}var kc=!1;function Oc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function sx(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function $u(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case vs:return"Portal";case ju:return"Profiler";case Dd:return"StrictMode";case Wu:return"Suspense";case Xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dg:return(t.displayName||"Context")+".Consumer";case Ng:return(t._context.displayName||"Context")+".Provider";case Id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ud:return e=t.displayName||null,e!==null?e:$u(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return $u(t(e))}catch{}}return null}function ox(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $u(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ax(t){var e=Ug(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=ax(t))}function Fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ug(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qu(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kg(t,e){e=e.checked,e!=null&&Nd(t,"checked",e,!1)}function Yu(t,e){kg(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ku(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function np(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(Po(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function Og(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,Bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lx=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){lx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function Hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function Vg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var cx=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ju(t,e){if(e){if(cx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=null;function Fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nh=null,Is=null,Us=null;function rp(t){if(t=xa(t)){if(typeof nh!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=yc(e),nh(t.stateNode,t.type,e))}}function Gg(t){Is?Us?Us.push(t):Us=[t]:Is=t}function jg(){if(Is){var t=Is,e=Us;if(Us=Is=null,rp(t),e)for(t=0;t<e.length;t++)rp(e[t])}}function Wg(t,e){return t(e)}function Xg(){}var zc=!1;function $g(t,e,n){if(zc)return t(e,n);zc=!0;try{return Wg(t,e,n)}finally{zc=!1,(Is!==null||Us!==null)&&(Xg(),jg())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var i=yc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var ih=!1;if(Di)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){ih=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{ih=!1}function ux(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var zo=!1,Hl=null,Vl=!1,rh=null,hx={onError:function(t){zo=!0,Hl=t}};function dx(t,e,n,i,r,s,o,a,l){zo=!1,Hl=null,ux.apply(hx,arguments)}function fx(t,e,n,i,r,s,o,a,l){if(dx.apply(this,arguments),zo){if(zo){var c=Hl;zo=!1,Hl=null}else throw Error(ue(198));Vl||(Vl=!0,rh=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sp(t){if(Jr(t)!==t)throw Error(ue(188))}function px(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sp(r),t;if(s===i)return sp(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function Yg(t){return t=px(t),t!==null?Kg(t):null}function Kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kg(t);if(e!==null)return e;t=t.sibling}return null}var Zg=An.unstable_scheduleCallback,op=An.unstable_cancelCallback,mx=An.unstable_shouldYield,gx=An.unstable_requestPaint,Rt=An.unstable_now,_x=An.unstable_getCurrentPriorityLevel,kd=An.unstable_ImmediatePriority,Qg=An.unstable_UserBlockingPriority,Gl=An.unstable_NormalPriority,vx=An.unstable_LowPriority,Jg=An.unstable_IdlePriority,gc=null,fi=null;function xx(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:Mx,yx=Math.log,Sx=Math.LN2;function Mx(t){return t>>>=0,t===0?32:31-(yx(t)/Sx|0)|0}var Da=64,Ia=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Lo(a):(s&=o,s!==0&&(i=Lo(s)))}else o=n&~r,o!==0?i=Lo(o):s!==0&&(i=Lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function Ex(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ex(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e0(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function Tx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function t0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n0,zd,i0,r0,s0,oh=!1,Ua=[],ir=null,rr=null,sr=null,Qo=new Map,Jo=new Map,Qi=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(t,e){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function bx(t,e,n,i,r){switch(e){case"focusin":return ir=po(ir,t,e,n,i,r),!0;case"dragenter":return rr=po(rr,t,e,n,i,r),!0;case"mouseover":return sr=po(sr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qo.set(s,po(Qo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jo.set(s,po(Jo.get(s)||null,t,e,n,i,r)),!0}return!1}function o0(t){var e=Dr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=qg(n),e!==null){t.blockedOn=e,s0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);th=i,n.target.dispatchEvent(i),th=null}else return e=xa(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function lp(t,e,n){Sl(t)&&n.delete(e)}function Cx(){oh=!1,ir!==null&&Sl(ir)&&(ir=null),rr!==null&&Sl(rr)&&(rr=null),sr!==null&&Sl(sr)&&(sr=null),Qo.forEach(lp),Jo.forEach(lp)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,oh||(oh=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,Cx)))}function ea(t){function e(r){return mo(r,t)}if(0<Ua.length){mo(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ir!==null&&mo(ir,t),rr!==null&&mo(rr,t),sr!==null&&mo(sr,t),Qo.forEach(e),Jo.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&Qi.shift()}var Fs=Oi.ReactCurrentBatchConfig,Wl=!0;function Rx(t,e,n,i){var r=ht,s=Fs.transition;Fs.transition=null;try{ht=1,Bd(t,e,n,i)}finally{ht=r,Fs.transition=s}}function Px(t,e,n,i){var r=ht,s=Fs.transition;Fs.transition=null;try{ht=4,Bd(t,e,n,i)}finally{ht=r,Fs.transition=s}}function Bd(t,e,n,i){if(Wl){var r=ah(t,e,n,i);if(r===null)Kc(t,e,i,Xl,n),ap(t,i);else if(bx(r,t,e,n,i))i.stopPropagation();else if(ap(t,i),e&4&&-1<Ax.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&n0(s),s=ah(t,e,n,i),s===null&&Kc(t,e,i,Xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kc(t,e,i,null,n)}}var Xl=null;function ah(t,e,n,i){if(Xl=null,t=Fd(i),t=Dr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function a0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_x()){case kd:return 1;case Qg:return 4;case Gl:case vx:return 16;case Jg:return 536870912;default:return 16}default:return 16}}var tr=null,Hd=null,Ml=null;function l0(){if(Ml)return Ml;var t,e=Hd,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ml=r.slice(t,1<i?1-i:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fa(){return!0}function cp(){return!1}function Cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:cp,this.isPropagationStopped=cp,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=Cn(ro),va=Tt({},ro,{view:0,detail:0}),Lx=Cn(va),Hc,Vc,go,_c=Tt({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Hc=t.screenX-go.screenX,Vc=t.screenY-go.screenY):Vc=Hc=0,go=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),up=Cn(_c),Nx=Tt({},_c,{dataTransfer:0}),Dx=Cn(Nx),Ix=Tt({},va,{relatedTarget:0}),Gc=Cn(Ix),Ux=Tt({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=Cn(Ux),kx=Tt({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=Cn(kx),zx=Tt({},ro,{data:0}),hp=Cn(zx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vx[t])?!!e[t]:!1}function Gd(){return Gx}var jx=Tt({},va,{key:function(t){if(t.key){var e=Bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gd,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wx=Cn(jx),Xx=Tt({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=Cn(Xx),$x=Tt({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gd}),qx=Cn($x),Yx=Tt({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=Cn(Yx),Zx=Tt({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Cn(Zx),Jx=[9,13,27,32],jd=Di&&"CompositionEvent"in window,Bo=null;Di&&"documentMode"in document&&(Bo=document.documentMode);var ey=Di&&"TextEvent"in window&&!Bo,c0=Di&&(!jd||Bo&&8<Bo&&11>=Bo),fp=" ",pp=!1;function u0(t,e){switch(t){case"keyup":return Jx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function ty(t,e){switch(t){case"compositionend":return h0(e);case"keypress":return e.which!==32?null:(pp=!0,fp);case"textInput":return t=e.data,t===fp&&pp?null:t;default:return null}}function ny(t,e){if(ys)return t==="compositionend"||!jd&&u0(t,e)?(t=l0(),Ml=Hd=tr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c0&&e.locale!=="ko"?null:e.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iy[t.type]:e==="textarea"}function d0(t,e,n,i){Gg(i),e=$l(e,"onChange"),0<e.length&&(n=new Vd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ho=null,ta=null;function ry(t){E0(t,0)}function vc(t){var e=Es(t);if(Fg(e))return t}function sy(t,e){if(t==="change")return e}var f0=!1;if(Di){var jc;if(Di){var Wc="oninput"in document;if(!Wc){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),Wc=typeof gp.oninput=="function"}jc=Wc}else jc=!1;f0=jc&&(!document.documentMode||9<document.documentMode)}function _p(){Ho&&(Ho.detachEvent("onpropertychange",p0),ta=Ho=null)}function p0(t){if(t.propertyName==="value"&&vc(ta)){var e=[];d0(e,ta,t,Fd(t)),$g(ry,e)}}function oy(t,e,n){t==="focusin"?(_p(),Ho=e,ta=n,Ho.attachEvent("onpropertychange",p0)):t==="focusout"&&_p()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(ta)}function ly(t,e){if(t==="click")return vc(e)}function cy(t,e){if(t==="input"||t==="change")return vc(e)}function uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:uy;function na(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gu.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,e){var n=vp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vp(n)}}function m0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hy(t){var e=g0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m0(n.ownerDocument.documentElement,n)){if(i!==null&&Wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xp(n,s);var o=xp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dy=Di&&"documentMode"in document&&11>=document.documentMode,Ss=null,lh=null,Vo=null,ch=!1;function yp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||Ss==null||Ss!==Bl(i)||(i=Ss,"selectionStart"in i&&Wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vo&&na(Vo,i)||(Vo=i,i=$l(lh,"onSelect"),0<i.length&&(e=new Vd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},Xc={},_0={};Di&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function xc(t){if(Xc[t])return Xc[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _0)return Xc[t]=e[n];return t}var v0=xc("animationend"),x0=xc("animationiteration"),y0=xc("animationstart"),S0=xc("transitionend"),M0=new Map,Sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){M0.set(t,e),Qr(e,[t])}for(var $c=0;$c<Sp.length;$c++){var qc=Sp[$c],fy=qc.toLowerCase(),py=qc[0].toUpperCase()+qc.slice(1);_r(fy,"on"+py)}_r(v0,"onAnimationEnd");_r(x0,"onAnimationIteration");_r(y0,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(S0,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Mp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fx(i,e,void 0,t),t.currentTarget=null}function E0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Mp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Mp(r,a,c),s=l}}}if(Vl)throw t=rh,Vl=!1,rh=null,t}function xt(t,e){var n=e[ph];n===void 0&&(n=e[ph]=new Set);var i=t+"__bubble";n.has(i)||(w0(e,t,2,!1),n.add(i))}function Yc(t,e,n){var i=0;e&&(i|=4),w0(n,t,i,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[Oa]){t[Oa]=!0,Lg.forEach(function(n){n!=="selectionchange"&&(my.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Yc("selectionchange",!1,e))}}function w0(t,e,n,i){switch(a0(e)){case 1:var r=Rx;break;case 4:r=Px;break;default:r=Bd}n=r.bind(null,e,n,t),r=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Kc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$g(function(){var c=s,u=Fd(n),d=[];e:{var f=M0.get(t);if(f!==void 0){var p=Vd,x=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":p=Wx;break;case"focusin":x="focus",p=Gc;break;case"focusout":x="blur",p=Gc;break;case"beforeblur":case"afterblur":p=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=qx;break;case v0:case x0:case y0:p=Fx;break;case S0:p=Kx;break;case"scroll":p=Lx;break;case"wheel":p=Qx;break;case"copy":case"cut":case"paste":p=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dp}var g=(e&4)!==0,m=!g&&t==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=Zo(v,h),S!=null&&g.push(ra(v,S,y)))),m)break;v=v.return}0<g.length&&(f=new p(f,x,null,n,u),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==th&&(x=n.relatedTarget||n.fromElement)&&(Dr(x)||x[Ii]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Dr(x):null,x!==null&&(m=Jr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(g=up,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=dp,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Es(p),y=x==null?f:Es(x),f=new g(S,v+"leave",p,n,u),f.target=m,f.relatedTarget=y,S=null,Dr(u)===c&&(g=new g(h,v+"enter",x,n,u),g.target=y,g.relatedTarget=m,S=g),m=S,p&&x)t:{for(g=p,h=x,v=0,y=g;y;y=ns(y))v++;for(y=0,S=h;S;S=ns(S))y++;for(;0<v-y;)g=ns(g),v--;for(;0<y-v;)h=ns(h),y--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=ns(g),h=ns(h)}g=null}else g=null;p!==null&&Ep(d,f,p,g,!1),x!==null&&m!==null&&Ep(d,m,x,g,!0)}}e:{if(f=c?Es(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=sy;else if(mp(f))if(f0)T=cy;else{T=ay;var A=oy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=ly);if(T&&(T=T(t,c))){d0(d,T,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Ku(f,"number",f.value)}switch(A=c?Es(c):window,t){case"focusin":(mp(A)||A.contentEditable==="true")&&(Ss=A,lh=c,Vo=null);break;case"focusout":Vo=lh=Ss=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,yp(d,n,u);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":yp(d,n,u)}var L;if(jd)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ys?u0(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(c0&&n.locale!=="ko"&&(ys||N!=="onCompositionStart"?N==="onCompositionEnd"&&ys&&(L=l0()):(tr=u,Hd="value"in tr?tr.value:tr.textContent,ys=!0)),A=$l(c,N),0<A.length&&(N=new hp(N,t,null,n,u),d.push({event:N,listeners:A}),L?N.data=L:(L=h0(n),L!==null&&(N.data=L)))),(L=ey?ty(t,n):ny(t,n))&&(c=$l(c,"onBeforeInput"),0<c.length&&(u=new hp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=L))}E0(d,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Zo(t,n),s!=null&&i.unshift(ra(t,s,r)),s=Zo(t,e),s!=null&&i.push(ra(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ep(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Zo(n,s),l!=null&&o.unshift(ra(n,l,a))):r||(l=Zo(n,s),l!=null&&o.push(ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function wp(t){return(typeof t=="string"?t:""+t).replace(gy,`
`).replace(_y,"")}function za(t,e,n){if(e=wp(e),wp(t)!==e&&n)throw Error(ue(425))}function ql(){}var uh=null,hh=null;function dh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,Tp=typeof Promise=="function"?Promise:void 0,xy=typeof queueMicrotask=="function"?queueMicrotask:typeof Tp<"u"?function(t){return Tp.resolve(null).then(t).catch(yy)}:fh;function yy(t){setTimeout(function(){throw t})}function Zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ea(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),ci="__reactFiber$"+so,sa="__reactProps$"+so,Ii="__reactContainer$"+so,ph="__reactEvents$"+so,Sy="__reactListeners$"+so,My="__reactHandles$"+so;function Dr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ap(t);t!==null;){if(n=t[ci])return n;t=Ap(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[ci]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function yc(t){return t[sa]||null}var mh=[],ws=-1;function vr(t){return{current:t}}function yt(t){0>ws||(t.current=mh[ws],mh[ws]=null,ws--)}function gt(t,e){ws++,mh[ws]=t.current,t.current=e}var pr={},en=vr(pr),pn=vr(!1),Vr=pr;function js(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Yl(){yt(pn),yt(en)}function bp(t,e,n){if(en.current!==pr)throw Error(ue(168));gt(en,e),gt(pn,n)}function T0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,ox(t)||"Unknown",r));return Tt({},n,i)}function Kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Vr=en.current,gt(en,t),gt(pn,pn.current),!0}function Cp(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=T0(t,e,Vr),i.__reactInternalMemoizedMergedChildContext=t,yt(pn),yt(en),gt(en,t)):yt(pn),gt(pn,n)}var Ai=null,Sc=!1,Qc=!1;function A0(t){Ai===null?Ai=[t]:Ai.push(t)}function Ey(t){Sc=!0,A0(t)}function xr(){if(!Qc&&Ai!==null){Qc=!0;var t=0,e=ht;try{var n=Ai;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,Sc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),Zg(kd,xr),r}finally{ht=e,Qc=!1}}return null}var Ts=[],As=0,Zl=null,Ql=0,Dn=[],In=0,Gr=null,bi=1,Ci="";function Cr(t,e){Ts[As++]=Ql,Ts[As++]=Zl,Zl=t,Ql=e}function b0(t,e,n){Dn[In++]=bi,Dn[In++]=Ci,Dn[In++]=Gr,Gr=t;var i=bi;t=Ci;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,bi=1<<32-ei(e)+r|n<<r|i,Ci=s+t}else bi=1<<s|n<<r|i,Ci=t}function Xd(t){t.return!==null&&(Cr(t,1),b0(t,1,0))}function $d(t){for(;t===Zl;)Zl=Ts[--As],Ts[As]=null,Ql=Ts[--As],Ts[As]=null;for(;t===Gr;)Gr=Dn[--In],Dn[In]=null,Ci=Dn[--In],Dn[In]=null,bi=Dn[--In],Dn[In]=null}var Tn=null,wn=null,St=!1,Yn=null;function C0(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:bi,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _h(t){if(St){var e=wn;if(e){var n=e;if(!Rp(t,e)){if(gh(t))throw Error(ue(418));e=or(n.nextSibling);var i=Tn;e&&Rp(t,e)?C0(i,n):(t.flags=t.flags&-4097|2,St=!1,Tn=t)}}else{if(gh(t))throw Error(ue(418));t.flags=t.flags&-4097|2,St=!1,Tn=t}}}function Pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Ba(t){if(t!==Tn)return!1;if(!St)return Pp(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dh(t.type,t.memoizedProps)),e&&(e=wn)){if(gh(t))throw R0(),Error(ue(418));for(;e;)C0(t,e),e=or(e.nextSibling)}if(Pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?or(t.stateNode.nextSibling):null;return!0}function R0(){for(var t=wn;t;)t=or(t.nextSibling)}function Ws(){wn=Tn=null,St=!1}function qd(t){Yn===null?Yn=[t]:Yn.push(t)}var wy=Oi.ReactCurrentBatchConfig;function _o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lp(t){var e=t._init;return e(t._payload)}function P0(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=ur(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,S){return v===null||v.tag!==6?(v=su(y,h.mode,S),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,S){var T=y.type;return T===xs?u(h,v,y.props.children,S,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yi&&Lp(T)===v.type)?(S=r(v,y.props),S.ref=_o(h,v,y),S.return=h,S):(S=Pl(y.type,y.key,y.props,null,h.mode,S),S.ref=_o(h,v,y),S.return=h,S)}function c(h,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=ou(y,h.mode,S),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function u(h,v,y,S,T){return v===null||v.tag!==7?(v=zr(y,h.mode,S,T),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=su(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return y=Pl(v.type,v.key,v.props,null,h.mode,y),y.ref=_o(h,null,v),y.return=h,y;case vs:return v=ou(v,h.mode,y),v.return=h,v;case Yi:var S=v._init;return d(h,S(v._payload),y)}if(Po(v)||ho(v))return v=zr(v,h.mode,y,null),v.return=h,v;Ha(h,v)}return null}function f(h,v,y,S){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(h,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pa:return y.key===T?l(h,v,y,S):null;case vs:return y.key===T?c(h,v,y,S):null;case Yi:return T=y._init,f(h,v,T(y._payload),S)}if(Po(y)||ho(y))return T!==null?null:u(h,v,y,S,null);Ha(h,y)}return null}function p(h,v,y,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,a(v,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Pa:return h=h.get(S.key===null?y:S.key)||null,l(v,h,S,T);case vs:return h=h.get(S.key===null?y:S.key)||null,c(v,h,S,T);case Yi:var A=S._init;return p(h,v,y,A(S._payload),T)}if(Po(S)||ho(S))return h=h.get(y)||null,u(v,h,S,T,null);Ha(v,S)}return null}function x(h,v,y,S){for(var T=null,A=null,L=v,N=v=0,w=null;L!==null&&N<y.length;N++){L.index>N?(w=L,L=null):w=L.sibling;var M=f(h,L,y[N],S);if(M===null){L===null&&(L=w);break}t&&L&&M.alternate===null&&e(h,L),v=s(M,v,N),A===null?T=M:A.sibling=M,A=M,L=w}if(N===y.length)return n(h,L),St&&Cr(h,N),T;if(L===null){for(;N<y.length;N++)L=d(h,y[N],S),L!==null&&(v=s(L,v,N),A===null?T=L:A.sibling=L,A=L);return St&&Cr(h,N),T}for(L=i(h,L);N<y.length;N++)w=p(L,h,N,y[N],S),w!==null&&(t&&w.alternate!==null&&L.delete(w.key===null?N:w.key),v=s(w,v,N),A===null?T=w:A.sibling=w,A=w);return t&&L.forEach(function(U){return e(h,U)}),St&&Cr(h,N),T}function g(h,v,y,S){var T=ho(y);if(typeof T!="function")throw Error(ue(150));if(y=T.call(y),y==null)throw Error(ue(151));for(var A=T=null,L=v,N=v=0,w=null,M=y.next();L!==null&&!M.done;N++,M=y.next()){L.index>N?(w=L,L=null):w=L.sibling;var U=f(h,L,M.value,S);if(U===null){L===null&&(L=w);break}t&&L&&U.alternate===null&&e(h,L),v=s(U,v,N),A===null?T=U:A.sibling=U,A=U,L=w}if(M.done)return n(h,L),St&&Cr(h,N),T;if(L===null){for(;!M.done;N++,M=y.next())M=d(h,M.value,S),M!==null&&(v=s(M,v,N),A===null?T=M:A.sibling=M,A=M);return St&&Cr(h,N),T}for(L=i(h,L);!M.done;N++,M=y.next())M=p(L,h,N,M.value,S),M!==null&&(t&&M.alternate!==null&&L.delete(M.key===null?N:M.key),v=s(M,v,N),A===null?T=M:A.sibling=M,A=M);return t&&L.forEach(function($){return e(h,$)}),St&&Cr(h,N),T}function m(h,v,y,S){if(typeof y=="object"&&y!==null&&y.type===xs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Pa:e:{for(var T=y.key,A=v;A!==null;){if(A.key===T){if(T=y.type,T===xs){if(A.tag===7){n(h,A.sibling),v=r(A,y.props.children),v.return=h,h=v;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yi&&Lp(T)===A.type){n(h,A.sibling),v=r(A,y.props),v.ref=_o(h,A,y),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}y.type===xs?(v=zr(y.props.children,h.mode,S,y.key),v.return=h,h=v):(S=Pl(y.type,y.key,y.props,null,h.mode,S),S.ref=_o(h,v,y),S.return=h,h=S)}return o(h);case vs:e:{for(A=y.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=ou(y,h.mode,S),v.return=h,h=v}return o(h);case Yi:return A=y._init,m(h,v,A(y._payload),S)}if(Po(y))return x(h,v,y,S);if(ho(y))return g(h,v,y,S);Ha(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=su(y,h.mode,S),v.return=h,h=v),o(h)):n(h,v)}return m}var Xs=P0(!0),L0=P0(!1),Jl=vr(null),ec=null,bs=null,Yd=null;function Kd(){Yd=bs=ec=null}function Zd(t){var e=Jl.current;yt(Jl),t._currentValue=e}function vh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){ec=t,Yd=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Yd!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(ec===null)throw Error(ue(308));bs=t,ec.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Ir=null;function Qd(t){Ir===null?Ir=[t]:Ir.push(t)}function N0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function Jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Qd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Od(t,n)}}function Np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tc(t,e,n,i){var r=t.updateQueue;Ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,g=a;switch(f=e,p=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){d=x.call(p,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,f=typeof x=="function"?x.call(p,d,f):x,f==null)break e;d=Tt({},d,f);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=d}}function Dp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var ya={},pi=vr(ya),oa=vr(ya),aa=vr(ya);function Ur(t){if(t===ya)throw Error(ue(174));return t}function ef(t,e){switch(gt(aa,e),gt(oa,t),gt(pi,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qu(e,t)}yt(pi),gt(pi,e)}function $s(){yt(pi),yt(oa),yt(aa)}function I0(t){Ur(aa.current);var e=Ur(pi.current),n=Qu(e,t.type);e!==n&&(gt(oa,t),gt(pi,n))}function tf(t){oa.current===t&&(yt(pi),yt(oa))}var Et=vr(0);function nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function nf(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Tl=Oi.ReactCurrentDispatcher,eu=Oi.ReactCurrentBatchConfig,jr=0,wt=null,It=null,Ht=null,ic=!1,Go=!1,la=0,Ty=0;function qt(){throw Error(ue(321))}function rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function sf(t,e,n,i,r,s){if(jr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?Ry:Py,t=n(i,r),Go){s=0;do{if(Go=!1,la=0,25<=s)throw Error(ue(301));s+=1,Ht=It=null,e.updateQueue=null,Tl.current=Ly,t=n(i,r)}while(Go)}if(Tl.current=rc,e=It!==null&&It.next!==null,jr=0,Ht=It=wt=null,ic=!1,e)throw Error(ue(300));return t}function of(){var t=la!==0;return la=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?wt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Bn(){if(It===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=Ht===null?wt.memoizedState:Ht.next;if(e!==null)Ht=e,It=t;else{if(t===null)throw Error(ue(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},Ht===null?wt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function ca(t,e){return typeof e=="function"?e(t):e}function tu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,wt.lanes|=u,Wr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ii(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,Wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ii(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function U0(){}function F0(t,e){var n=wt,i=Bn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,af(z0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,ua(9,O0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ue(349));jr&30||k0(n,e,r)}return r}function k0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,i){e.value=n,e.getSnapshot=i,B0(e)&&H0(t)}function z0(t,e,n){return n(function(){B0(e)&&H0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function H0(t){var e=Ui(t,1);e!==null&&ti(e,t,1,-1)}function Ip(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=Cy.bind(null,wt,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function V0(){return Bn().memoizedState}function Al(t,e,n,i){var r=oi();wt.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function Mc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&rf(i,o.deps)){r.memoizedState=ua(e,n,s,i);return}}wt.flags|=t,r.memoizedState=ua(1|e,n,s,i)}function Up(t,e){return Al(8390656,8,t,e)}function af(t,e){return Mc(2048,8,t,e)}function G0(t,e){return Mc(4,2,t,e)}function j0(t,e){return Mc(4,4,t,e)}function W0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,W0.bind(null,e,t),n)}function lf(){}function $0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function q0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&rf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Y0(t,e,n){return jr&21?(ii(n,e)||(n=e0(),wt.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function Ay(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=eu.transition;eu.transition={};try{t(!1),e()}finally{ht=n,eu.transition=i}}function K0(){return Bn().memoizedState}function by(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))Q0(e,n);else if(n=N0(t,e,n,i),n!==null){var r=sn();ti(n,t,i,r),J0(n,e,i)}}function Cy(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))Q0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,o)){var l=e.interleaved;l===null?(r.next=r,Qd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=N0(t,e,r,i),n!==null&&(r=sn(),ti(n,t,i,r),J0(n,e,i))}}function Z0(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function Q0(t,e){Go=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Od(t,n)}}var rc={readContext:zn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},Ry={readContext:zn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:Up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,W0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=by.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:Ip,useDebugValue:lf,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Ip(!1),e=t[0];return t=Ay.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=oi();if(St){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Vt===null)throw Error(ue(349));jr&30||k0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Up(z0.bind(null,i,s,t),[t]),i.flags|=2048,ua(9,O0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Vt.identifierPrefix;if(St){var n=Ci,i=bi;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ty++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Py={readContext:zn,useCallback:$0,useContext:zn,useEffect:af,useImperativeHandle:X0,useInsertionEffect:G0,useLayoutEffect:j0,useMemo:q0,useReducer:tu,useRef:V0,useState:function(){return tu(ca)},useDebugValue:lf,useDeferredValue:function(t){var e=Bn();return Y0(e,It.memoizedState,t)},useTransition:function(){var t=tu(ca)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:F0,useId:K0,unstable_isNewReconciler:!1},Ly={readContext:zn,useCallback:$0,useContext:zn,useEffect:af,useImperativeHandle:X0,useInsertionEffect:G0,useLayoutEffect:j0,useMemo:q0,useReducer:nu,useRef:V0,useState:function(){return nu(ca)},useDebugValue:lf,useDeferredValue:function(t){var e=Bn();return It===null?e.memoizedState=t:Y0(e,It.memoizedState,t)},useTransition:function(){var t=nu(ca)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:F0,useId:K0,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=cr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(ti(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=cr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(ti(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=cr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(ti(e,t,i,n),wl(e,t,i))}};function Fp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,i)||!na(r,s):!0}function e_(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=mn(e)?Vr:en.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function kp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=mn(e)?Vr:en.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ec.enqueueReplaceState(r,r.state,null),tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",i=e;do n+=sx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ny=typeof WeakMap=="function"?WeakMap:Map;function t_(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){oc||(oc=!0,Lh=i),Sh(t,e)},n}function n_(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sh(t,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Op(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ny;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Xy.bind(null,t,e,n),e.then(t,t))}function zp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var Dy=Oi.ReactCurrentOwner,fn=!1;function nn(t,e,n,i){e.child=t===null?L0(e,null,n,i):Xs(e,t.child,n,i)}function Hp(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=sf(t,e,n,i,s,r),n=of(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(St&&n&&Xd(e),e.flags|=1,nn(t,e,i,r),e.child)}function Vp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i_(t,e,s,i,r)):(t=Pl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function i_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(na(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return Mh(t,e,n,i,r)}function r_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Rs,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(Rs,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(Rs,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(Rs,Mn),Mn|=i;return nn(t,e,r,n),e.child}function s_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,i,r){var s=mn(n)?Vr:en.current;return s=js(e,s),ks(e,r),n=sf(t,e,n,i,s,r),i=of(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(St&&i&&Xd(e),e.flags|=1,nn(t,e,n,r),e.child)}function Gp(t,e,n,i,r){if(mn(n)){var s=!0;Kl(e)}else s=!1;if(ks(e,r),e.stateNode===null)bl(t,e),e_(e,n,i),yh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=mn(n)?Vr:en.current,c=js(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&kp(e,o,i,c),Ki=!1;var f=e.memoizedState;o.state=f,tc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||pn.current||Ki?(typeof u=="function"&&(xh(e,n,u,i),l=e.memoizedState),(a=Ki||Fp(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,D0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=mn(n)?Vr:en.current,l=js(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&kp(e,o,i,l),Ki=!1,f=e.memoizedState,o.state=f,tc(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||pn.current||Ki?(typeof p=="function"&&(xh(e,n,p,i),x=e.memoizedState),(c=Ki||Fp(e,n,c,i,f,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Eh(t,e,n,i,s,r)}function Eh(t,e,n,i,r,s){s_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Cp(e,n,!1),Fi(t,e,s);i=e.stateNode,Dy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&Cp(e,n,!0),e.child}function o_(t){var e=t.stateNode;e.pendingContext?bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bp(t,e.context,!1),ef(t,e.containerInfo)}function jp(t,e,n,i,r){return Ws(),qd(r),e.flags|=256,nn(t,e,n,i),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(t){return{baseLanes:t,cachePool:null,transitions:null}}function a_(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(Et,r&1),t===null)return _h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ac(o,i,0,null),t=zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Th(n),e.memoizedState=wh,t):cf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Iy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wh,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function cf(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,i){return i!==null&&qd(i),Xs(e,t.child,null,n),t=cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Iy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=iu(Error(ue(422))),Va(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=wh,s);if(!(e.mode&1))return Va(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=iu(s,i,void 0),Va(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ti(i,t,r,-1))}return mf(),i=iu(Error(ue(421))),Va(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$y.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=or(r.nextSibling),Tn=e,St=!0,Yn=null,t!==null&&(Dn[In++]=bi,Dn[In++]=Ci,Dn[In++]=Gr,bi=t.id,Ci=t.overflow,Gr=e),e=cf(e,i.children),e.flags|=4096,e)}function Wp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vh(t.return,e,n)}function ru(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function l_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wp(t,n,e);else if(t.tag===19)Wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ru(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ru(e,!0,n,null,s);break;case"together":ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uy(t,e,n){switch(e.tag){case 3:o_(e),Ws();break;case 5:I0(e);break;case 1:mn(e.type)&&Kl(e);break;case 4:ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?a_(t,e,n):(gt(Et,Et.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);gt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return l_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,r_(t,e,n)}return Fi(t,e,n)}var c_,Ah,u_,h_;c_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ah=function(){};u_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(pi.current);var s=null;switch(n){case"input":r=qu(t,r),i=qu(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Zu(t,r),i=Zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ql)}Ju(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};h_=function(t,e,n,i){n!==i&&(e.flags|=4)};function vo(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Fy(t,e,n){var i=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return mn(e.type)&&Yl(),Yt(e),null;case 3:return i=e.stateNode,$s(),yt(pn),yt(en),nf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Ih(Yn),Yn=null))),Ah(t,e),Yt(e),null;case 5:tf(e);var r=Ur(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)u_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return Yt(e),null}if(t=Ur(pi.current),Ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[sa]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)xt(No[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":ep(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":np(i,s),xt("invalid",i)}Ju(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xt("scroll",i)}switch(n){case"input":La(i),tp(i,s,!0);break;case"textarea":La(i),ip(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ci]=e,t[sa]=i,c_(t,e,!1,!1),e.stateNode=t;e:{switch(o=eh(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)xt(No[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":ep(t,i),r=qu(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),xt("invalid",t);break;case"textarea":np(t,i),r=Zu(t,i),xt("invalid",t);break;default:r=i}Ju(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(t,l):typeof l=="number"&&Ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&Nd(t,s,l,o))}switch(n){case"input":La(t),tp(t,i,!1);break;case"textarea":La(t),ip(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)h_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Ur(aa.current),Ur(pi.current),Ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Yt(e),null;case 13:if(yt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&wn!==null&&e.mode&1&&!(e.flags&128))R0(),Ws(),e.flags|=98560,s=!1;else if(s=Ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[ci]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Yn!==null&&(Ih(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ut===0&&(Ut=3):mf())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return $s(),Ah(t,e),t===null&&ia(e.stateNode.containerInfo),Yt(e),null;case 10:return Zd(e.type._context),Yt(e),null;case 17:return mn(e.type)&&Yl(),Yt(e),null;case 19:if(yt(Et),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nc(t),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Ys&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(t=nc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return Yt(e),null}else 2*Rt()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=Et.current,gt(Et,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return pf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function ky(t,e){switch($d(e),e.tag){case 1:return mn(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),yt(pn),yt(en),nf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tf(e),null;case 13:if(yt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Et),null;case 4:return $s(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Ga=!1,Qt=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function bh(t,e,n){try{n()}catch(i){At(t,e,i)}}var Xp=!1;function zy(t,e){if(uh=Wl,t=g0(),Wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hh={focusedElem:t,selectionRange:n},Wl=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Xn(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){At(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return x=Xp,Xp=!1,x}function jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bh(e,n,s)}r=r.next}while(r!==i)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function d_(t){var e=t.alternate;e!==null&&(t.alternate=null,d_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[sa],delete e[ph],delete e[Sy],delete e[My])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function f_(t){return t.tag===5||t.tag===3||t.tag===4}function $p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(i!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}function Ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}var Gt=null,$n=!1;function Hi(t,e,n){for(n=n.child;n!==null;)p_(t,e,n),n=n.sibling}function p_(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:Qt||Cs(n,e);case 6:var i=Gt,r=$n;Gt=null,Hi(t,e,n),Gt=i,$n=r,Gt!==null&&($n?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&($n?(t=Gt,n=n.stateNode,t.nodeType===8?Zc(t.parentNode,n):t.nodeType===1&&Zc(t,n),ea(t)):Zc(Gt,n.stateNode));break;case 4:i=Gt,r=$n,Gt=n.stateNode.containerInfo,$n=!0,Hi(t,e,n),Gt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(n,e,o),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!Qt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Hi(t,e,n),Qt=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Oy),e.forEach(function(i){var r=qy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,$n=!1;break e;case 3:Gt=a.stateNode.containerInfo,$n=!0;break e;case 4:Gt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Gt===null)throw Error(ue(160));p_(s,o,r),Gt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m_(e,t),e=e.sibling}function m_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),si(t),i&4){try{jo(3,t,t.return),wc(3,t)}catch(g){At(t,t.return,g)}try{jo(5,t,t.return)}catch(g){At(t,t.return,g)}}break;case 1:Vn(e,t),si(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Vn(e,t),si(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{Ko(r,"")}catch(g){At(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&kg(r,s),eh(a,o);var c=eh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Vg(r,d):u==="dangerouslySetInnerHTML"?Bg(r,d):u==="children"?Ko(r,d):Nd(r,u,d,c)}switch(a){case"input":Yu(r,s);break;case"textarea":Og(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ds(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[sa]=s}catch(g){At(t,t.return,g)}}break;case 6:if(Vn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){At(t,t.return,g)}}break;case 3:if(Vn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(g){At(t,t.return,g)}break;case 4:Vn(e,t),si(t);break;case 13:Vn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(df=Rt())),i&4&&qp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||u,Vn(e,t),Qt=c):Vn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Re=t,u=t.child;u!==null;){for(d=Re=u;Re!==null;){switch(f=Re,p=f.child,f.tag){case 0:case 11:case 14:case 15:jo(4,f,f.return);break;case 1:Cs(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){At(i,n,g)}}break;case 5:Cs(f,f.return);break;case 22:if(f.memoizedState!==null){Kp(d);continue}}p!==null?(p.return=f,Re=p):Kp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hg("display",o))}catch(g){At(t,t.return,g)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){At(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vn(e,t),si(t),i&4&&qp(t);break;case 21:break;default:Vn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(f_(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ko(r,""),i.flags&=-33);var s=$p(t);Ph(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=$p(t);Rh(t,a,o);break;default:throw Error(ue(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function By(t,e,n){Re=t,g_(t)}function g_(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=Ga;var c=Qt;if(Ga=o,(Qt=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?Zp(r):l!==null?(l.return=o,Re=l):Zp(r);for(;s!==null;)Re=s,g_(s),s=s.sibling;Re=r,Ga=a,Qt=c}Yp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):Yp(t)}}function Yp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ea(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Qt||e.flags&512&&Ch(e)}catch(f){At(e,e.return,f)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Kp(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Zp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Ch(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Ch(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var Hy=Math.ceil,sc=Oi.ReactCurrentDispatcher,uf=Oi.ReactCurrentOwner,kn=Oi.ReactCurrentBatchConfig,nt=0,Vt=null,Nt=null,Wt=0,Mn=0,Rs=vr(0),Ut=0,ha=null,Wr=0,Tc=0,hf=0,Wo=null,dn=null,df=0,Ys=1/0,Ti=null,oc=!1,Lh=null,lr=null,ja=!1,nr=null,ac=0,Xo=0,Nh=null,Cl=-1,Rl=0;function sn(){return nt&6?Rt():Cl!==-1?Cl:Cl=Rt()}function cr(t){return t.mode&1?nt&2&&Wt!==0?Wt&-Wt:wy.transition!==null?(Rl===0&&(Rl=e0()),Rl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:a0(t.type)),t):1}function ti(t,e,n,i){if(50<Xo)throw Xo=0,Nh=null,Error(ue(185));_a(t,n,i),(!(nt&2)||t!==Vt)&&(t===Vt&&(!(nt&2)&&(Tc|=n),Ut===4&&Ji(t,Wt)),gn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Ys=Rt()+500,Sc&&xr()))}function gn(t,e){var n=t.callbackNode;wx(t,e);var i=jl(t,t===Vt?Wt:0);if(i===0)n!==null&&op(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&op(n),e===1)t.tag===0?Ey(Qp.bind(null,t)):A0(Qp.bind(null,t)),xy(function(){!(nt&6)&&xr()}),n=null;else{switch(t0(i)){case 1:n=kd;break;case 4:n=Qg;break;case 16:n=Gl;break;case 536870912:n=Jg;break;default:n=Gl}n=w_(n,__.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function __(t,e){if(Cl=-1,Rl=0,nt&6)throw Error(ue(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var i=jl(t,t===Vt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=lc(t,i);else{e=i;var r=nt;nt|=2;var s=x_();(Vt!==t||Wt!==e)&&(Ti=null,Ys=Rt()+500,Or(t,e));do try{jy();break}catch(a){v_(t,a)}while(!0);Kd(),sc.current=s,nt=r,Nt!==null?e=0:(Vt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=sh(t),r!==0&&(i=r,e=Dh(t,r))),e===1)throw n=ha,Or(t,0),Ji(t,i),gn(t,Rt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!Vy(r)&&(e=lc(t,i),e===2&&(s=sh(t),s!==0&&(i=s,e=Dh(t,s))),e===1))throw n=ha,Or(t,0),Ji(t,i),gn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Rr(t,dn,Ti);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=df+500-Rt(),10<e)){if(jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fh(Rr.bind(null,t,dn,Ti),e);break}Rr(t,dn,Ti);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hy(i/1960))-i,10<i){t.timeoutHandle=fh(Rr.bind(null,t,dn,Ti),i);break}Rr(t,dn,Ti);break;case 5:Rr(t,dn,Ti);break;default:throw Error(ue(329))}}}return gn(t,Rt()),t.callbackNode===n?__.bind(null,t):null}function Dh(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=lc(t,e),t!==2&&(e=dn,dn=n,e!==null&&Ih(e)),t}function Ih(t){dn===null?dn=t:dn.push.apply(dn,t)}function Vy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~hf,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Qp(t){if(nt&6)throw Error(ue(327));Os();var e=jl(t,0);if(!(e&1))return gn(t,Rt()),null;var n=lc(t,e);if(t.tag!==0&&n===2){var i=sh(t);i!==0&&(e=i,n=Dh(t,i))}if(n===1)throw n=ha,Or(t,0),Ji(t,e),gn(t,Rt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,dn,Ti),gn(t,Rt()),null}function ff(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Ys=Rt()+500,Sc&&xr())}}function Xr(t){nr!==null&&nr.tag===0&&!(nt&6)&&Os();var e=nt;nt|=1;var n=kn.transition,i=ht;try{if(kn.transition=null,ht=1,t)return t()}finally{ht=i,kn.transition=n,nt=e,!(nt&6)&&xr()}}function pf(){Mn=Rs.current,yt(Rs)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vy(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch($d(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yl();break;case 3:$s(),yt(pn),yt(en),nf();break;case 5:tf(i);break;case 4:$s();break;case 13:yt(Et);break;case 19:yt(Et);break;case 10:Zd(i.type._context);break;case 22:case 23:pf()}n=n.return}if(Vt=t,Nt=t=ur(t.current,null),Wt=Mn=e,Ut=0,ha=null,hf=Tc=Wr=0,dn=Wo=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ir=null}return t}function v_(t,e){do{var n=Nt;try{if(Kd(),Tl.current=rc,ic){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ic=!1}if(jr=0,Ht=It=wt=null,Go=!1,la=0,uf.current=null,n===null||n.return===null){Ut=1,ha=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=zp(o);if(p!==null){p.flags&=-257,Bp(p,o,a,s,e),p.mode&1&&Op(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){Op(s,c,e),mf();break e}l=Error(ue(426))}}else if(St&&a.mode&1){var m=zp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Bp(m,o,a,s,e),qd(qs(l,a));break e}}s=l=qs(l,a),Ut!==4&&(Ut=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=t_(s,l,e);Np(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lr===null||!lr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=n_(s,a,e);Np(s,S);break e}}s=s.return}while(s!==null)}S_(n)}catch(T){e=T,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function x_(){var t=sc.current;return sc.current=rc,t===null?rc:t}function mf(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(Wr&268435455)&&!(Tc&268435455)||Ji(Vt,Wt)}function lc(t,e){var n=nt;nt|=2;var i=x_();(Vt!==t||Wt!==e)&&(Ti=null,Or(t,e));do try{Gy();break}catch(r){v_(t,r)}while(!0);if(Kd(),nt=n,sc.current=i,Nt!==null)throw Error(ue(261));return Vt=null,Wt=0,Ut}function Gy(){for(;Nt!==null;)y_(Nt)}function jy(){for(;Nt!==null&&!mx();)y_(Nt)}function y_(t){var e=E_(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?S_(t):Nt=e,uf.current=null}function S_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ky(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Nt=null;return}}else if(n=Fy(n,e,Mn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Rr(t,e,n){var i=ht,r=kn.transition;try{kn.transition=null,ht=1,Wy(t,e,n,i)}finally{kn.transition=r,ht=i}return null}function Wy(t,e,n,i){do Os();while(nr!==null);if(nt&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tx(t,s),t===Vt&&(Nt=Vt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,w_(Gl,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=ht;ht=1;var a=nt;nt|=4,uf.current=null,zy(t,n),m_(n,t),hy(hh),Wl=!!uh,hh=uh=null,t.current=n,By(n),gx(),nt=a,ht=o,kn.transition=s}else t.current=n;if(ja&&(ja=!1,nr=t,ac=r),s=t.pendingLanes,s===0&&(lr=null),xx(n.stateNode),gn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(oc)throw oc=!1,t=Lh,Lh=null,t;return ac&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Nh?Xo++:(Xo=0,Nh=t):Xo=0,xr(),null}function Os(){if(nr!==null){var t=t0(ac),e=kn.transition,n=ht;try{if(kn.transition=null,ht=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,ac=0,nt&6)throw Error(ue(331));var r=nt;for(nt|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:jo(8,u,s)}var d=u.child;if(d!==null)d.return=u,Re=d;else for(;Re!==null;){u=Re;var f=u.sibling,p=u.return;if(d_(u),u===c){Re=null;break}if(f!==null){f.return=p,Re=f;break}Re=p}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:jo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Re=h;break e}Re=s.return}}var v=t.current;for(Re=v;Re!==null;){o=Re;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Re=y;else e:for(o=v;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(T){At(a,a.return,T)}if(a===o){Re=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Re=S;break e}Re=a.return}}if(nt=r,xr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(gc,t)}catch{}i=!0}return i}finally{ht=n,kn.transition=e}}return!1}function Jp(t,e,n){e=qs(n,e),e=t_(t,e,1),t=ar(t,e,1),e=sn(),t!==null&&(_a(t,1,e),gn(t,e))}function At(t,e,n){if(t.tag===3)Jp(t,t,n);else for(;e!==null;){if(e.tag===3){Jp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){t=qs(n,t),t=n_(e,t,1),e=ar(e,t,1),t=sn(),e!==null&&(_a(e,1,t),gn(e,t));break}}e=e.return}}function Xy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Rt()-df?Or(t,0):hf|=n),gn(t,e)}function M_(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=sn();t=Ui(t,e),t!==null&&(_a(t,e,n),gn(t,n))}function $y(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M_(t,n)}function qy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),M_(t,n)}var E_;E_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,Uy(t,e,n);fn=!!(t.flags&131072)}else fn=!1,St&&e.flags&1048576&&b0(e,Ql,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bl(t,e),t=e.pendingProps;var r=js(e,en.current);ks(e,n),r=sf(null,e,i,t,r,n);var s=of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jd(e),r.updater=Ec,e.stateNode=r,r._reactInternals=e,yh(e,i,t,n),e=Eh(null,e,i,!0,s,n)):(e.tag=0,St&&s&&Xd(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ky(i),t=Xn(i,t),r){case 0:e=Mh(null,e,i,t,n);break e;case 1:e=Gp(null,e,i,t,n);break e;case 11:e=Hp(null,e,i,t,n);break e;case 14:e=Vp(null,e,i,Xn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Mh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Gp(t,e,i,r,n);case 3:e:{if(o_(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D0(t,e),tc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(ue(423)),e),e=jp(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(ue(424)),e),e=jp(t,e,i,n,r);break e}else for(wn=or(e.stateNode.containerInfo.firstChild),Tn=e,St=!0,Yn=null,n=L0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Fi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return I0(e),t===null&&_h(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,dh(i,r)?o=null:s!==null&&dh(i,s)&&(e.flags|=32),s_(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&_h(e),null;case 13:return a_(t,e,n);case 4:return ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Hp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,gt(Jl,i._currentValue),i._currentValue=o,s!==null)if(ii(s.value,o)){if(s.children===r.children&&!pn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=zn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Vp(t,e,i,r,n);case 15:return i_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),bl(t,e),e.tag=1,mn(i)?(t=!0,Kl(e)):t=!1,ks(e,n),e_(e,i,r),yh(e,i,r,n),Eh(null,e,i,!0,t,n);case 19:return l_(t,e,n);case 22:return r_(t,e,n)}throw Error(ue(156,e.tag))};function w_(t,e){return Zg(t,e)}function Yy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new Yy(t,e,n,i)}function gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ky(t){if(typeof t=="function")return gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Id)return 11;if(t===Ud)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return zr(n.children,r,s,e);case Dd:o=8,r|=8;break;case ju:return t=Fn(12,n,e,r|2),t.elementType=ju,t.lanes=s,t;case Wu:return t=Fn(13,n,e,r),t.elementType=Wu,t.lanes=s,t;case Xu:return t=Fn(19,n,e,r),t.elementType=Xu,t.lanes=s,t;case Ig:return Ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ng:o=10;break e;case Dg:o=9;break e;case Id:o=11;break e;case Ud:o=14;break e;case Yi:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function zr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Ac(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Ig,t.lanes=n,t.stateNode={isHidden:!1},t}function su(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function ou(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Zy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _f(t,e,n,i,r,s,o,a,l){return t=new Zy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(s),t}function Qy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function T_(t){if(!t)return pr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(mn(n))return T0(t,n,e)}return e}function A_(t,e,n,i,r,s,o,a,l){return t=_f(n,i,!0,t,r,s,o,a,l),t.context=T_(null),n=t.current,i=sn(),r=cr(n),s=Li(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,_a(t,r,i),gn(t,i),t}function bc(t,e,n,i){var r=e.current,s=sn(),o=cr(r);return n=T_(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,o),t!==null&&(ti(t,r,o,s),wl(t,r,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vf(t,e){em(t,e),(t=t.alternate)&&em(t,e)}function Jy(){return null}var b_=typeof reportError=="function"?reportError:function(t){console.error(t)};function xf(t){this._internalRoot=t}Cc.prototype.render=xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));bc(t,e,null,null)};Cc.prototype.unmount=xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){bc(null,t,null,null)}),e[Ii]=null}};function Cc(t){this._internalRoot=t}Cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=r0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&o0(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tm(){}function eS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cc(o);s.call(c)}}var o=A_(e,i,t,0,null,!1,!1,"",tm);return t._reactRootContainer=o,t[Ii]=o.current,ia(t.nodeType===8?t.parentNode:t),Xr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=cc(l);a.call(c)}}var l=_f(t,0,!1,null,null,!1,!1,"",tm);return t._reactRootContainer=l,t[Ii]=l.current,ia(t.nodeType===8?t.parentNode:t),Xr(function(){bc(e,l,n,i)}),l}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cc(o);a.call(l)}}bc(e,o,t,r)}else o=eS(n,e,t,r,i);return cc(o)}n0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(Od(e,n|1),gn(e,Rt()),!(nt&6)&&(Ys=Rt()+500,xr()))}break;case 13:Xr(function(){var i=Ui(t,1);if(i!==null){var r=sn();ti(i,t,1,r)}}),vf(t,1)}};zd=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=sn();ti(e,t,134217728,n)}vf(t,134217728)}};i0=function(t){if(t.tag===13){var e=cr(t),n=Ui(t,e);if(n!==null){var i=sn();ti(n,t,e,i)}vf(t,e)}};r0=function(){return ht};s0=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};nh=function(t,e,n){switch(e){case"input":if(Yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yc(i);if(!r)throw Error(ue(90));Fg(i),Yu(i,r)}}}break;case"textarea":Og(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};Wg=ff;Xg=Xr;var tS={usingClientEntryPoint:!1,Events:[xa,Es,yc,Gg,jg,ff]},xo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nS={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yg(t),t===null?null:t.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{gc=Wa.inject(nS),fi=Wa}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(ue(200));return Qy(t,e,null,n)};bn.createRoot=function(t,e){if(!yf(t))throw Error(ue(299));var n=!1,i="",r=b_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_f(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,ia(t.nodeType===8?t.parentNode:t),new xf(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=Yg(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Xr(t)};bn.hydrate=function(t,e,n){if(!Rc(e))throw Error(ue(200));return Pc(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=b_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=A_(e,null,t,1,n??null,r,!1,s,o),t[Ii]=e.current,ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cc(e)};bn.render=function(t,e,n){if(!Rc(e))throw Error(ue(200));return Pc(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Rc(t))throw Error(ue(40));return t._reactRootContainer?(Xr(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};bn.unstable_batchedUpdates=ff;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Rc(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Pc(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function C_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C_)}catch(t){console.error(t)}}C_(),Cg.exports=bn;var iS=Cg.exports,R_,nm=iS;R_=nm.createRoot,nm.hydrateRoot;const rS="modulepreload",sS=function(t,e){return new URL(t,e).href},im={},oS=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=sS(c,i),c in im)return;im[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!i)for(let x=o.length-1;x>=0;x--){const g=o[x];if(g.href===c&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":rS,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((x,g)=>{p.addEventListener("load",x),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Uh={backyard:{label:"Backyard",l:100,w:70,surface:"grass"},church:{label:"Church or school lawn",l:160,w:120,surface:"grass"},park:{label:"Park or open field",l:250,w:180,surface:"grass"},lot:{label:"Parking lot",l:300,w:150,surface:"asphalt"},patio:{label:"Venue patio",l:90,w:60,surface:"concrete"},custom:{label:"Custom size"}},$r={frame:{label:"Frame tent",stake:3,sizes:[[20,20],[20,30],[20,40],[30,30],[30,45],[30,60],[40,40],[40,60],[40,80],[40,100],[40,120]]},cleartop:{label:"Clear-top frame tent",stake:3,sizes:[[20,20],[20,40],[30,30],[30,45],[30,60],[40,40],[40,60],[40,80]]},pole:{label:"High-peak pole tent",stake:6,sizes:[[30,45],[40,60],[40,80],[40,100],[60,60],[60,90],[60,120],[80,120]]},sailcloth:{label:"Sailcloth tent",stake:8,shape:"oval",ends:{44:21.5,59:19.5},sizes:[[44,43],[44,63],[44,83],[44,103],[59,39],[59,79],[59,99]]},structure:{label:"Structure tent (clearspan)",stake:3,sizes:[[40,45],[40,60],[40,75],[40,90],[40,120],[40,150],[60,60],[60,90],[60,120],[60,150],[60,180]]}},jt={rounds60:{label:'60" round tables',kind:"round",r:2.5,seats:[8,10],def:8,cx:10,cy:10,hx:4.25,hy:4.25,table:'60" round table',linen:'120" round, floor length',sqft:"10–12"},rounds72:{label:'72" round tables',kind:"round",r:3,seats:[10,12],def:10,cx:11.5,cy:11.5,hx:4.75,hy:4.75,table:'72" round table',linen:'132" round, floor length',sqft:"11–13"},banquet:{label:"8' banquet rows",kind:"banquet",seats:[8],def:8,cx:8,cy:7.5,hx:4,hy:3,table:`8' × 30" banquet table`,linen:'90" × 156" banquet, floor length',sqft:"8–10"},mixed:{label:"Mixed rounds + banquet tables",kind:"mixed",seats:[8,10],def:8,cx:10,cy:10,hx:4.25,hy:4.25,sqft:"9–12"},theater:{label:"Ceremony rows (chairs only)",kind:"chair",seats:[1],def:1,cx:3,cy:2,hx:.8,hy:.8,sqft:"6–8"},none:{label:"No seating (standing / cocktail)",kind:"none",seats:[0],def:0,cx:10,cy:10,hx:0,hy:0,sqft:"6–8"}},Ll={rounds60:10,rounds72:12,banquet:8},aS={rounds60:'60" round',rounds72:'72" round',banquet:"8' banquet"},$o=6,Sf=[{id:"stage",label:"Stage",short:"STAGE",sizes:{"8×8":[8,8],"12×8":[12,8],"16×12":[16,12],"24×16":[24,16]},def:"12×8",walls:["left","top"],f:.5},{id:"head",label:"Head table",short:"HEAD TABLE",sizes:{"Sweetheart · 2":[6,5,2],"Head table · 8":[16,6,8],"Head table · 12":[24,6,12],"Head table · 16":[32,6,16]},def:"Head table · 8",walls:["left","top"],f:.5},{id:"dance",label:"Dance floor",short:"DANCE FLOOR",dance:!0},{id:"dj",label:"DJ booth",short:"DJ",dims:[8,6],walls:["top","left"],f:"dance"},{id:"buffet",label:"Buffet line",short:"BUFFET",dims:[16,9],qty:!0,walls:["right","top","bottom"],f:.5},{id:"bar",label:"Bar",short:"BAR",dims:[10,6],qty:!0,walls:["bottom","top"],f:1},{id:"cake",label:"Cake table",short:"CAKE",dims:[6,6],walls:["bottom","top"],f:"dance"},{id:"gift",label:"Gift & card table",short:"GIFTS",dims:[8,5],walls:["bottom","top"],f:.64},{id:"photo",label:"Photo booth",short:"PHOTO",dims:[10,10],walls:["bottom","top"],f:.3},{id:"lounge",label:"Lounge seating",short:"LOUNGE",dims:[14,10],walls:["top","bottom"],f:1},{id:"highboy",label:"Cocktail tables",short:"",dims:[5,5],qty:!0,qtyOpts:[2,4,6,8,10,12,16,20],free:!0,walls:["bottom"],f:1}],rm={top:0,right:90,bottom:180,left:270},vi=1.5,Ps={cherry:{label:"Cherry",desc:"Rich cherry wood-tone finish",sizes:["12x12","12x16","16x16","20x20","24x24"],colors:["#7c3c27","#6c3320"],tile:4},birch:{label:"Birch",desc:"Light birch wood-tone finish",sizes:["12x12","12x16","16x16","20x20","24x24"],colors:["#e2c797","#d5b985"],tile:4},black:{label:"Black",desc:"Matte black finish",sizes:["12x12","12x16"],colors:["#1f2226","#272b30"],tile:4},white:{label:"White",desc:"Bright white high-gloss finish",sizes:["12x12","12x16"],colors:["#f8f8f6","#eeeeeb"],tile:4},bw:{label:"Black & white checkered",desc:"Classic black & white checkerboard",sizes:["12x12","12x16","16x16","20x20"],colors:["#1f2226","#f8f8f6"],tile:4},birchwhite:{label:"Birch & white checkered",desc:"Birch & white checkerboard",sizes:["12x12","16x16","20x20","20x24"],colors:["#e2c797","#f8f8f6"],tile:4}},lS=[["bottom",.5],["top",.7],["right",.5],["top",.3],["bottom",.2],["bottom",.8]],cS={"White folding":"#f1f2f2",Chiavari:"#c9a457","Cross-back":"#8a6340","Padded banquet":"#3b414a"},uS={swag:"Swag (zigzag across ceiling)",perimeter:"Inside perimeter",both:"Swag + perimeter"},uc=1.5,P_=[-3,-1,1,3].flatMap(t=>[[t,-1],[t,1]]),hS=["White folding","Chiavari","Cross-back","Padded banquet"],hc={siteName:"Example: Hartwell wedding reception",sitePreset:"church",siteL:160,siteW:120,surface:"grass",guests:150,seating:"rounds60",seatsPer:8,mixRound:"rounds60",mixBanquet:4,spacing:"comfortable",chairStyle:"Chiavari",name:"Tent 1",tentType:"frame",tentSize:"auto",walls:"window",acc:{stage:{on:!1,size:"12×8",cl:12,cw:8},head:{on:!0,size:"Head table · 8"},dance:{on:!0,size:"auto",cl:20,cw:20,finish:"cherry",wrap:!1},dj:{on:!0},buffet:{on:!0,qty:"auto"},bar:{on:!0,qty:"auto"},cake:{on:!0},gift:{on:!0},photo:{on:!1},lounge:{on:!1},highboy:{on:!0,qty:"auto"}},climate:"none",stringLights:!0,lightStyle:"swag",chandeliers:!1,uplights:!0,generator:!0,chandList:null,exits:null,pos:{},tentPos:null,tables:null,address:"",photo:null,tentAngle:0};function L_(t,e,n){const i=$r[t];if(!i||i.shape!=="oval")return{oval:!1,W:e,L:n,e:0};const r=Math.min(n/2,i.ends&&i.ends[e]||Math.min(e,n)/2);return{oval:!0,W:e,L:n,e:r}}function ai(t,e){if(!t.oval)return 0;const{W:n,L:i,e:r}=t,s=e<r?r-e:e>i-r?e-(i-r):0;return s?n/2-n/2*Math.sqrt(Math.max(0,1-(s/r)**2)):0}function sm(t,e){if(!t.oval)return 0;const{W:n,e:i}=t,r=Math.abs(e-n/2);return i-i*Math.sqrt(Math.max(0,1-(r/(n/2))**2))}function dS(t,e,n){const{W:i,L:r,e:s}=t;let o;if(t.oval&&(e<s||e>r-s)){const l=e<s?s:r-s,c=Math.atan2((n-i/2)/(i/2),(e-l)/s);o=Math.abs(Math.sin(c))<Math.SQRT1_2?e<s?"left":"right":n<i/2?"top":"bottom"}else if(t.oval)o=n<i/2?"top":"bottom";else{const l={top:n,bottom:i-n,left:e,right:r-e};o=Object.keys(l).reduce((c,u)=>l[u]<l[c]?u:c)}return{side:o,f:Math.min(1,Math.max(0,o==="top"||o==="bottom"?e/r:n/i))}}function Xa(t,e,n,i=0){const{W:r,L:s,e:o}=t;if(e<i-1e-6||e>s-i+1e-6||n<i-1e-6||n>r-i+1e-6)return!1;if(!t.oval||e>=o&&e<=s-o)return!0;const a=o-i,l=r/2-i;if(a<=0||l<=0)return!1;const c=e<o?o-e:e-(s-o),u=n-r/2;return(c/a)**2+(u/l)**2<=1+1e-6}const yo=(t,e,n=0)=>Xa(t,e.x,e.y,n)&&Xa(t,e.x+e.w,e.y,n)&&Xa(t,e.x,e.y+e.h,n)&&Xa(t,e.x+e.w,e.y+e.h,n);function Mf(t,e=0,n=360){const{W:i,L:r,e:s}=t;if(!t.oval)return[[-e,-e],[r+e,-e],[r+e,i+e],[-e,i+e]];const o=s+e,a=i/2+e,l=[],c=Math.ceil(n/2);for(let u=0;u<=c;u++){const d=-Math.PI/2+Math.PI*u/c;l.push([r-s+o*Math.cos(d),i/2+a*Math.sin(d)])}for(let u=0;u<=c;u++){const d=Math.PI/2+Math.PI*u/c;l.push([s+o*Math.cos(d),i/2+a*Math.sin(d)])}return l}function au(t,e=0){const{W:n,L:i,e:r}=t,s=r+e,o=n/2+e;return t.oval?`M${r} ${-e}H${i-r}A${s} ${o} 0 0 1 ${i-r} ${n+e}H${r}A${s} ${o} 0 0 1 ${r} ${-e}Z`:`M${-e} ${-e}H${i+e}V${n+e}H${-e}Z`}function da(t,e=0){if(!t.oval)return 2*(t.W+t.L+4*e);const n=Mf(t,e);let i=0;for(let r=0;r<n.length;r++){const[s,o]=n[r],[a,l]=n[(r+1)%n.length];i+=Math.hypot(a-s,l-o)}return i}function om(t){return t.oval?(t.L-2*t.e)*t.W+Math.PI*t.e*(t.W/2):t.W*t.L}function N_(t,e,n=0){const i=Mf(t,n),r=[],s=[...i,i[0]];let o=0;for(let u=0;u<i.length;u++){const d=Math.hypot(s[u+1][0]-s[u][0],s[u+1][1]-s[u][1]);r.push(d),o+=d}const a=[];let l=0,c=0;for(let u=0;u<e;u++){const d=u*o/e;for(;c+r[l]<d;)c+=r[l],l++;const f=r[l]?(d-c)/r[l]:0;a.push({x:s[l][0]+(s[l+1][0]-s[l][0])*f,y:s[l][1]+(s[l+1][1]-s[l][1])*f})}return a}function D_(t,e,n=3){const i=Mf(t),r=l=>e.some(c=>Math.hypot(l[0]-c.x,l[1]-c.y)<n),s=[];let o=[];const a=Math.max(0,i.findIndex(l=>!r(l)));for(let l=0;l<=i.length;l++){const c=i[(a+l)%i.length];r(c)?(o.length>1&&s.push(o),o=[]):o.push(c)}return o.length>1&&s.push(o),s}const Qn=t=>JSON.parse(JSON.stringify(t)),ct=(t,e,n)=>Math.min(n,Math.max(e,t)),Ye=t=>Math.round(t*100)/100,Ln=t=>Math.round(t*2)/2;function $a(t){const e=Math.floor(t+1e-6),n=Math.round((t-e)*12);return`${e}'-${n}"`}function Ks(t,e){try{if(e===void 0)return JSON.parse(localStorage.getItem(t)||"null");localStorage.setItem(t,JSON.stringify(e))}catch{return null}}function lu(t){const e=Object.assign(Qn(hc),Qn(t),{acc:Object.assign(Qn(hc.acc),Qn(t.acc||{}))});return jt[e.seating]||(e.seating="rounds60",e.seatsPer=8),e.mixRound!=="rounds60"&&e.mixRound!=="rounds72"&&(e.mixRound="rounds60"),$r[e.tentType]||(e.tentType="frame"),e.tentSize!=="auto"&&!$r[e.tentType].sizes.some(([n,i])=>`${n}x${i}`===e.tentSize)&&(e.tentSize="auto",e.pos={},e.tables=null),delete e.photoSrc,e}const Do=(t,e)=>{const n=e*Math.PI/180,i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n));return[Ye(t[0]*i+t[1]*r),Ye(t[0]*r+t[1]*i)]},Fh=t=>(Math.round(t)%360+360)%360,fS=t=>{const e=Fh(t);return e>180?e-360:e},Vi=(t,e)=>t.x<e.x+e.w-1e-6&&t.x+t.w>e.x+1e-6&&t.y<e.y+e.h-1e-6&&t.y+t.h>e.y+1e-6,is=(t,e)=>({x:t.x-e,y:t.y-e,w:t.w+2*e,h:t.h+2*e}),Sa=t=>Ps[(t.acc.dance||{}).finish]||Ps.cherry,qo=t=>{const[e,n]=t.split("x").map(Number);return[Math.max(e,n),Math.min(e,n)]},kh=t=>Math.round(t.guests*1.5);function pS(t,e){if(e.size==="custom")return[Math.ceil((e.cl||20)/4)*4,Math.ceil((e.cw||20)/4)*4];const n=Sa(t),i=n.sizes.includes(e.size)?e.size:n.sizes.find(r=>qo(r)[0]*qo(r)[1]>=kh(t))||n.sizes[n.sizes.length-1];return qo(i)}const I_=(t,e)=>t==="highboy"?Math.max(2,Math.ceil(e/25)):ct(Math.ceil(t==="buffet"?e/125:e/150),1,4);function Lc(t){return t<10?1:t<200?2:t<500?3:t<1e3?4:t<2e3?5:6}function am(t,e){const n=Math.max(1,Math.ceil(t/e-1e-6));return Array.from({length:n+1},(i,r)=>r*t/n)}function mS(t,e,n,i=L_(t,e,n)){const r=[],s=t==="structure"?15:10;if(i.oval)r.push(...N_(i,Math.max(8,Math.round(da(i)/s))));else{for(const o of am(n,s))r.push({x:o,y:0},{x:o,y:e});for(const o of am(e,s).slice(1,-1))r.push({x:0,y:o},{x:n,y:o})}if(t==="pole"||t==="sailcloth"){const o=Math.max(1,Math.round(n/20)),a=o===1?[n/2]:Array.from({length:o-1},(c,u)=>(u+1)*n/o),l=t==="pole"?e>=60?[e/4,e/2,3*e/4]:[e/2]:e>50?[e/3,2*e/3]:[e/2];for(const c of l)for(const u of a)r.push({x:u,y:c,inner:!0})}return r}const Sr=6,gS=t=>lS.slice(0,Lc(t)).map(([e,n],i)=>({side:e,f:n,kind:i===0?"entrance":"exit"})),_S=(t,e)=>{const n=Math.max(1,Math.round(e/20));return Array.from({length:n},(i,r)=>({x:(r+.5)*e/n,y:t/2}))},vS=(t,e,n)=>t.chandeliers?t.chandList?t.chandList.map(i=>({x:i.fx*n,y:i.fy*e})):_S(e,n):[],U_=t=>t.chands.map(e=>({fx:e.x/t.L,fy:e.y/t.W}));function xS(t,e,n){const i=ct(e,1,t.L-1),r=ai(t,i);return{x:i,y:ct(n,Math.min(r+1,t.W/2),Math.max(t.W-r-1,t.W/2))}}function F_(t){const{W:e,L:n,chands:i}=t;let r={x:n/2,y:e/2},s=-1;for(let o=2;o<=n-2;o+=.5){const a=i.length?Math.min(...i.map(l=>Math.hypot(l.x-o,l.y-e/2))):n;a>s&&(s=a,r={x:o,y:e/2})}return{fx:r.x/n,fy:r.y/e}}const k_=t=>t.exits.map(e=>({side:e.side,f:e.c/(e.side==="top"||e.side==="bottom"?t.L:t.W),kind:e.kind}));function O_(t){const e=s=>t.filter(o=>o.side===s).length,n=["bottom","top","right","left"].reduce((s,o)=>e(o)<e(s)?o:s),i=t.filter(s=>s.side===n).map(s=>s.f),r=[.5,.25,.75,.15,.85,.35,.65].find(s=>i.every(o=>Math.abs(o-s)>.12))??.5;return{side:n,f:r,kind:t.some(s=>s.kind==="entrance")?"exit":"entrance"}}function yS(t,e,n,i={oval:!1,W:e,L:n,e:0},r=null){const s=r||gS(t),o=Sr/2;return s.map(({side:a,f:l,kind:c})=>{const u=a==="top"||a==="bottom",d=!r&&i.oval&&n-2*i.e>=8,f=d?i.e+o:o+1,p=d?n-i.e-o:n-o-1,x=u?ct(l*n,f,Math.max(f,p)):ct(l*e,o+1,e-o-1),g=a==="top"?ai(i,x):a==="bottom"?e-ai(i,x):a==="left"?sm(i,x):n-sm(i,x),m=u?{x:x-o,y:a==="top"?g:g-Sr,w:Sr,h:Sr}:{x:a==="left"?g:g-Sr,y:x-o,w:Sr,h:Sr};return{side:a,f:l,kind:c,c:x,p:g,x:u?x:g,y:u?g:x,zone:m,main:c==="entrance"}})}const Nl=40,hi=.55,z_=t=>ct(Math.round(t)||8,1,Nl),B_=t=>Math.max(2,Math.floor(t/1.5));function H_(t){const e=Sf.find(c=>c.id==="head");let n,i,r,s=!1;t.size==="custom"?(r=z_(t.seats),n=Math.max(8,Math.ceil(r/4)*8),i=6):([n,i,r]=e.sizes[t.size]||e.sizes[e.def],s=t.size==="Sweetheart · 2");const o=Array.from({length:r},(c,u)=>({x:Ye((u+.5)*n/r),y:i-4.45})),a=Array.isArray(t.chairs),l=a?t.chairs.map(c=>({x:ct(+c.x||0,hi,n-hi),y:ct(+c.y||0,hi,i-hi)})):o;return{dims:[n,i],seats:l.length,chairs:l,custom:a,sweet:s,front:i-4.45}}function SS(t){const[e]=t.dims,n=t.front??t.dims[1]-4.45;let i={x:e/2,y:n},r=-1;for(let s=hi+.35;s<=e-hi-.35+1e-6;s+=.5){const o=Math.min(1/0,...t.chairs.map(a=>Math.hypot(a.x-s,a.y-n)));o>r&&(r=o,i={x:Ye(s),y:n})}return i}function MS(t){const e=[];for(const n of Sf){const i=t.acc[n.id];if(!i||!i.on)continue;let r,s=0,o=1,a=null;if(n.dance)r=pS(t,i);else if(n.id==="head"){const l=H_(i);r=l.dims,s=l.seats,a={chairs:l.chairs,customChairs:l.custom,sweet:l.sweet,front:l.front}}else if(n.id==="stage"&&i.size==="custom")r=[i.cl||12,i.cw||8];else if(n.sizes){const l=n.sizes[i.size]||n.sizes[n.def];r=[l[0],l[1]],s=l[2]||0}else r=n.dims;n.qty&&(o=i.qty==="auto"||!i.qty?I_(n.id,t.guests):+i.qty);for(let l=0;l<o;l++)e.push({key:n.qty?n.id+"-"+l:n.id,def:n,dims:r,seats:s,idx:l,n:o,...a})}return e}const Io=t=>t.seating+"/"+t.seatsPer+"/"+t.spacing+(t.seating==="mixed"?"/"+t.mixRound+"/"+t.mixBanquet:"");function cu(t,e,n){const i=$r[t.tentType],r=jt[t.seating],s=e+"x"+n,o=L_(t.tentType,e,n),a=yS(t.guests,e,n,o,t.exits),l=mS(t.tentType,e,n,o).filter(Z=>Z.inner||!o.oval||!a.some(oe=>Math.hypot(Z.x-oe.x,Z.y-oe.y)<2.5)),c=l.filter(Z=>Z.inner),u=a.map(Z=>Z.zone),d=[];let f=!0;const p=Z=>yo(o,Z,.5),x=Z=>!d.some(oe=>Vi(Z,is(oe,1)))&&!u.some(oe=>Vi(Z,oe))&&!c.some(oe=>oe.x>Z.x&&oe.x<Z.x+Z.w&&oe.y>Z.y&&oe.y<Z.y+Z.h),g=(Z,oe)=>{if(p(Z)&&x(Z))return Z;const de=Math.max(e,n);for(let fe=.5;fe<=de;fe+=.5)for(const ye of[fe,-fe]){const le={...Z};if(le[oe]+=ye,p(le)&&x(le))return le}if(o.oval){const fe=oe==="x"?"y":"x";for(let ye=1;ye<=20;ye+=1)for(let le=0;le<=de;le+=1)for(const P of[le,-le])for(const E of[ye,-ye]){const H={...Z};if(H[oe]+=P,H[fe]+=E,p(H)&&x(H))return H}}return null},m=(Z,oe,de,fe,ye,le)=>{const P=Z==="top"||Z==="bottom",E=P?n:e,H=P?ye:le,te=fe*H+(fe-1),re=E-2*vi-te;if(oe==="dance"){const Ee=d.find(we=>we.def.id==="dance"),ve=Ee?P?Ee.x+Ee.w/2:Ee.y+Ee.h/2:E/2;oe=re>0?(ve-te/2-vi)/re:.5}const Q=vi+ct(oe,0,1)*Math.max(0,re)+de*(H+1);return P?{x:Q,y:Z==="top"?vi:e-vi-le,axis:"x"}:{x:Z==="left"?vi:n-vi-ye,y:Q,axis:"y"}},h=[];for(const Z of MS(t)){const oe=Z.def,de=t.pos[Z.key];let fe=null,ye=0;if(oe.free&&!(de&&de.t===s)){h.push(Z);continue}if(de&&de.t===s){ye=de.rot;const[le,P]=Do(Z.dims,ye);fe={x:de.x,y:de.y,w:le,h:P,fit:le<=n&&P<=e&&yo(o,{x:de.x,y:de.y,w:le,h:P})}}else if(oe.dance){const[le,P]=Z.dims,E=d.filter(Q=>Q.wall==="left"),H=E.length?Math.max(...E.map(Q=>Q.x+Q.w))+2:(n-le)/2,te=(e-P)/2,re=g({x:H,y:te,w:le,h:P},"x");fe=re?{...re,fit:!0}:{x:H,y:te,w:le,h:P,fit:!1}}else{for(const le of oe.walls){ye=rm[le];const[P,E]=Do(Z.dims,ye),H=m(le,oe.f,Z.idx,Z.n,P,E),te=g({x:H.x,y:H.y,w:P,h:E},H.axis);if(te){fe={...te,fit:!0,wall:le};break}}if(!fe){const le=oe.walls[0];ye=rm[le];const[P,E]=Do(Z.dims,ye),H=m(le,oe.f,Z.idx,Z.n,P,E);fe={x:H.x,y:H.y,w:P,h:E,fit:!1,wall:le}}}d.push({...fe,key:Z.key,def:oe,dims:Z.dims,seats:Z.seats,rot:ye,chairs:Z.chairs,customChairs:Z.customChairs,sweet:Z.sweet,front:Z.front}),fe.fit||(f=!1)}const v=d.filter(Z=>Z.def.id==="head").reduce((Z,oe)=>Z+oe.seats,0),y=r.kind==="none",S=r.kind==="mixed",T=r.kind==="chair",A=S?t.mixRound:t.seating,L=Z=>Z===A?t.seatsPer:jt[Z].def,N=T?1:y?0:t.seatsPer,w=Math.max(0,t.guests-v),M=S?Math.min(Math.max(0,Math.floor(t.mixBanquet)||0),Math.ceil(w/8)):0,U=S?Math.ceil(Math.max(0,w-M*8)/t.seatsPer):0,$=S?M+U:N?Math.ceil(w/N):0,D=t.spacing==="tight"?.9:1,k=Z=>Z.def.id==="dance"?1.5:Z.def.id==="stage"&&T?6:1,j=[...d.map(Z=>is(Z,k(Z))),...u,...c.map(Z=>({x:Z.x-.4,y:Z.y-.4,w:.8,h:.8}))];T&&j.push({x:0,y:e/2-2.5,w:n,h:5});const z=T?3:.5,ne=Z=>{const oe=jt[Z.type||A],[de,fe]=Do([2*oe.hx,2*oe.hy],Z.rot||0);return{x:Z.x-de/2,y:Z.y-fe/2,w:de,h:fe}},R=!y&&t.tables&&t.tables.t===s&&t.tables.s===Io(t)?t.tables.pts:null,F=!!(R&&t.tables.manual),W=F?R.length:$;if(R)for(const Z of R.slice(0,W))j.push(ne(Z));const ie=(Z,oe)=>{const de=jt[Z],fe=de.kind==="banquet",ye=fe?de.cx:de.cx*D,le=de.cy*D,{hx:P,hy:E}=de;let H=[],te=-1e9;for(let re=0;re<le-1e-6;re+=.5){const Q=[],Ee=[];for(let je=z+E+re;je<=e-z-E+1e-6;je+=le)Ee.push(je);for(const je of Ee){let ce=z+P,Te=0;for(;ce<=n-z-P+1e-6;){const ke={x:ce-P,y:je-E,w:2*P,h:2*E};let Ie=null;if(o.oval&&!yo(o,ke,z)){ce+=.5;continue}for(const Ae of oe)Vi(ke,Ae)&&(!Ie||Ae.x+Ae.w>Ie.x+Ie.w)&&(Ie=Ae);Ie?ce=Math.max(ce+.5,Ie.x+Ie.w+P):(Q.push({x:ce,y:je,type:Z}),Te++,ce+=ye,fe&&Te%4===0&&(ce+=4))}}const ve=Ee.length?Math.abs(Ee[0]-E-z-(e-z-Ee[Ee.length-1]-E)):0,we=Q.length*100-ve;we>te&&(te=we,H=Q)}return H},he=d.find(Z=>Z.def.id==="dance")||d.find(Z=>Z.def.id==="stage")||d.find(Z=>Z.def.id==="head"),Be=T?{x:0,y:e/2}:he?{x:he.x+he.w/2,y:he.y+he.h/2}:{x:n/2,y:e/2},ee=Z=>Math.hypot(Z.x-Be.x,Z.y-Be.y),ae=(Z,oe)=>ee(Z)-ee(oe),xe=y?[]:ie(A,j),me=R?R.slice(0,W).map(Z=>({x:Z.x,y:Z.y,rot:Z.rot||0,type:Z.type||A,pinned:!0,set:Z.seats})):[],Fe=[...xe].sort(ae);let Oe=[],Ve=me.length+xe.length;if(!F&&S){const Z=Math.max(0,M-me.filter(ye=>ye.type==="banquet").length),oe=Math.max(0,U-me.filter(ye=>ye.type!=="banquet").length),de=Z?ie("banquet",j).sort((ye,le)=>ae(le,ye)).slice(0,Z):[],fe=de.length?ie(A,[...j,...de.map(ye=>is(ne(ye),1.5))]).sort(ae):Fe;Oe=[...de,...fe.slice(0,oe)],Ve=me.length+de.length+(de.length<Z?Math.min(fe.length,oe):fe.length)}else F||(Oe=Fe.slice(0,Math.max(0,$-me.length)));const Ke=(R?[...me,...Oe]:Oe.sort((Z,oe)=>Z.y-oe.y||Z.x-oe.x)).map((Z,oe)=>({...Z,type:Z.type||A,n:oe+1}));for(const Z of Ke)Z.seats=Z.set??L(Z.type);if(!F&&Ke.length===$&&$){let Z=Ke.reduce((de,fe)=>de+fe.seats,0)-w;const oe=[...Ke].reverse().sort((de,fe)=>(de.type==="banquet")-(fe.type==="banquet"));for(const de of oe){if(Z<=0)break;if(de.set!=null)continue;const fe=Math.min(Z,de.seats-1);de.seats-=fe,Z-=fe}}const ze=Ke.reduce((Z,oe)=>Z+oe.seats,0);F&&(Ve=Ke.length);const st=Z=>Z.filter(oe=>!Ke.some(de=>Vi(ne(oe),is(ne(de),-.05)))),B={[A]:st(Fe)};S&&(B.banquet=st(ie("banquet",j).sort(ae)));for(const Z of Ke){if(!Z.pinned)continue;const oe=ne(Z);Z.bad=!yo(o,oe)||d.some(de=>Vi(oe,de))||c.some(de=>de.x>oe.x&&de.x<oe.x+oe.w&&de.y>oe.y&&de.y<oe.y+oe.h)||Ke.some(de=>de!==Z&&Vi(is(oe,-.05),ne(de)))}if(h.length){const Z=[...Ke.map(ne),...u,...c.map(ye=>({x:ye.x-.4,y:ye.y-.4,w:.8,h:.8}))],oe=d.find(ye=>ye.def.id==="bar")||d.find(ye=>ye.def.id==="dance"),de=oe?{x:oe.x+oe.w/2,y:oe.y+oe.h/2}:{x:n/2,y:e},fe=[];for(let ye=.5;ye<=e-5.5+1e-6;ye+=1)for(let le=.5;le<=n-5.5+1e-6;le+=1)fe.push({x:le,y:ye});fe.sort((ye,le)=>Math.hypot(ye.x+2.5-de.x,ye.y+2.5-de.y)-Math.hypot(le.x+2.5-de.x,le.y+2.5-de.y));for(const ye of h){const[le,P]=ye.dims,E=fe.find(te=>{const re={x:te.x,y:te.y,w:le,h:P};return yo(o,re,.5)&&!d.some(Q=>Vi(re,is(Q,.5)))&&!Z.some(Q=>Vi(re,Q))}),H=E?{x:E.x,y:E.y,w:le,h:P,fit:!0}:{x:vi,y:vi,w:le,h:P,fit:!1};d.push({...H,key:ye.key,def:ye.def,dims:ye.dims,seats:0,rot:0}),H.fit||(f=!1)}}return{W:e,L:n,T:i,S:r,sh:o,area:om(o),perim:da(o),poles:l,exits:a,chands:vS(t,e,n),items:d,units:Ke,needed:$,per:N,base:A,nB:M,seated:w,headSeats:v,capacity:Ve,seats:ze,manual:F,freeSpots:B,allFit:f,ok:f&&(y?om(o)>=t.guests*$o:F||Ve>=$)}}function Ma(t,e,n){const i=(t.tentAngle||0)*Math.PI/180,r=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i));return{ex:(e*r+n*s)/2,ey:(e*s+n*r)/2}}const Ef=(t,e,n,i)=>{const{ex:r,ey:s}=Ma(t,n+2*i,e+2*i);return 2*r<=t.siteL+1e-6&&2*s<=t.siteW+1e-6};function fa(t){const e=$r[t.tentType];if(t.tentSize!=="auto"){const[s,o]=t.tentSize.split("x").map(Number);return{...cu(t,s,o),auto:!1}}const n=[...e.sizes].sort((s,o)=>s[0]*s[1]-o[0]*o[1]||s[0]-o[0]);let i=null;for(const[s,o]of n){const a=cu(t,s,o);if(a.ok){if(Ef(t,s,o,e.stake))return{...a,auto:!0};i||(i=a)}}const r=n[n.length-1];return{...i||cu(t,r[0],r[1]),auto:!0}}function wf(t,e){return t.climate==="fans"?Math.ceil(e/600):t.climate==="heat-mild"?Math.max(1,Math.ceil(e*80/15e4)):t.climate==="heat-cold"?Math.max(1,Math.ceil(e*160/15e4)):0}function Ea(t,e){return e?{l:t.photo.pw*t.photo.fpp,w:t.photo.ph*t.photo.fpp}:{l:t.siteL,w:t.siteW}}function qr(t,e,n){const{W:i,L:r}=e,s=Ea(t,n),{ex:o,ey:a}=Ma(t,r,i);let l=s.l/2,c=s.w/2;return t.tentPos&&(l=t.tentPos.x+r/2,c=t.tentPos.y+i/2,n?(l=ct(l,0,s.l),c=ct(c,0,s.w)):(l=s.l<2*o?s.l/2:ct(l,o,s.l-o),c=s.w<2*a?s.w/2:ct(c,a,s.w-a))),{x:l-r/2,y:c-i/2}}const Tf=["siteName","sitePreset","siteL","siteW","surface","address","photo"],dc=t=>Object.fromEntries(Tf.map(e=>[e,t[e]])),Af=t=>Object.fromEntries(Object.keys(t).filter(e=>!Tf.includes(e)&&e!=="tents"&&e!=="active").map(e=>[e,t[e]]));function Br(t,e=t.active){return{...dc(t),...t.tents[e]}}function ES(t,e,n){for(const i of Object.keys(n))Tf.includes(i)?t[i]=n[i]:t.tents[e][i]=n[i]}function Oh(t){if(!t)return lm(Qn(hc));if(Array.isArray(t.tents)&&t.tents.length){const e=dc(lu(dc(t))),n=t.tents.map((i,r)=>({...Af(lu({...e,...i})),name:i.name||`Tent ${r+1}`}));return{...e,tents:n,active:ct(t.active|0,0,n.length-1)}}return lm(lu(t))}function lm(t){return{...dc(t),tents:[{...Af(t),name:t.name||"Tent 1"}],active:0}}function wS(t){const e=Af(Qn(hc));for(const n of Object.keys(e.acc))e.acc[n].on=!1;return{...e,name:`Tent ${t}`,guests:50,stringLights:!1,generator:!1}}function bf(t,e,n){const i=qr(t,e,n),r=e.T.stake,{ex:s,ey:o}=Ma(t,e.L+2*r,e.W+2*r);return{cx:i.x+e.L/2,cy:i.y+e.W/2,ex:s,ey:o}}const TS=(t,e,n,i,r)=>Math.max(0,Math.min(t+n,r.cx+r.ex)-Math.max(t-n,r.cx-r.ex))*Math.max(0,Math.min(e+i,r.cy+r.ey)-Math.max(e-i,r.cy-r.ey));function So(t,e,n,i,r,s,o,a=!1){let l=null,c=1/0;const u=(h,v)=>Math.min(h+o,v/2),d=(h,v)=>Math.max(v-h-o,v/2),f=u(e,t.l),p=d(e,t.l),x=u(n,t.w),g=d(n,t.w),m=Math.max(1,Math.min(t.l,t.w)/80);for(let h=x;h<=g+1e-6;h+=m)for(let v=f;v<=p+1e-6;v+=m){let y;if(a)y=i.reduce((S,T)=>S+TS(v,h,e,n,T),0)*1e3+Math.hypot(v-r.x,h-r.y);else{if(i.some(S=>Math.abs(v-S.cx)<e+S.ex+s&&Math.abs(h-S.cy)<n+S.ey+s))continue;y=Math.hypot(v-r.x,h-r.y)}y<c&&(c=y,l={x:v,y:h})}return l}function V_(t,e,n,i){const r=Br(t,e),s=fa(r),o=Ea(r,n),a=t.tents.map((x,g)=>g).filter(x=>x!==e).map(x=>{const g=Br(t,x);return bf(g,fa(g),n)}),l=s.T.stake,{ex:c,ey:u}=Ma(r,s.L+2*l,s.W+2*l),d=i||{x:o.l/2,y:o.w/2},f=n?0:20,p=So(o,c,u,a,d,20,f)||So(o,c,u,a,d,12,f)||So(o,c,u,a,d,12,0)||So(o,c,u,a,d,0,0)||So(o,c,u,a,d,0,0,!0);t.tents[e].tentPos=p?{x:p.x-s.L/2,y:p.y-s.W/2}:null}function uu(t,e){for(const p of t.tents)p.tentPos=null;if(t.tents.length<2)return;const n=t.tents.map((p,x)=>({i:x,a:fa(Br(t,x)).area})).sort((p,x)=>x.a-p.a).map(p=>p.i),i=new Set,r={x:0,y:0};for(const p of n){const x=t.tents;t.tents=x.filter((g,m)=>m===p||i.has(m)),V_(t,t.tents.indexOf(x[p]),e,r),t.tents=x,i.add(p)}const s=t.tents.map((p,x)=>{const g=Br(t,x);return bf(g,fa(g),e)}),o=Math.min(...s.map(p=>p.cx-p.ex)),a=Math.max(...s.map(p=>p.cx+p.ex)),l=Math.min(...s.map(p=>p.cy-p.ey)),c=Math.max(...s.map(p=>p.cy+p.ey)),u=Ea(Br(t,0),e),d=u.l/2-(o+a)/2,f=u.w/2-(l+c)/2;if(a-o<=u.l&&c-l<=u.w)for(const p of t.tents)p.tentPos&&(p.tentPos={x:p.tentPos.x+d,y:p.tentPos.y+f})}function AS(t,e,n){const i=qr(t,e,n),r=e.T.stake,s=i.x+e.L/2,o=i.y+e.W/2,a=(t.tentAngle||0)*Math.PI/180,l=Math.cos(a),c=Math.sin(a),u=e.L/2+r,d=e.W/2+r;return[[-u,-d],[u,-d],[u,d],[-u,d]].map(([f,p])=>[s+f*l-p*c,o+f*c+p*l])}function bS(t,e){for(const n of[t,e])for(let i=0;i<n.length;i++){const[r,s]=n[i],[o,a]=n[(i+1)%n.length],l=a-s,c=r-o,u=t.map(([f,p])=>f*l+p*c),d=e.map(([f,p])=>f*l+p*c);if(Math.max(...u)<Math.min(...d)||Math.max(...d)<Math.min(...u))return!1}return!0}function CS([t,e],[n,i],[r,s]){const o=r-n,a=s-i,l=ct(((t-n)*o+(e-i)*a)/(o*o+a*a||1),0,1);return Math.hypot(t-n-l*o,e-i-l*a)}function RS(t,e){let n=1/0;for(const[i,r]of[[t,e],[e,t]])for(const s of i)for(let o=0;o<r.length;o++)n=Math.min(n,CS(s,r[o],r[(o+1)%r.length]));return n}function PS(t,e,n){const i=[];if(t.length<2)return i;const r=t.map((a,l)=>AS(a,e[l],n));for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){const c=t[a].name,u=t[l].name;if(bS(r[a],r[l]))i.push(["bad",`${c} and ${u} overlap on the site (including stake and guy line areas). Drag one apart on the site plan.`]);else{const d=RS(r[a],r[l]);d<20&&i.push(["warn",`${c} and ${u} are ${Math.floor(d)}' apart between stake lines. The fire code generally asks for 20' between tents, with exceptions for smaller combined areas; confirm with the local fire marshal.`])}}const s=e.reduce((a,l)=>a+l.area,0),o=t.reduce((a,l)=>a+l.guests,0);return i.push(["info",`${t.length} tents on site: ${Math.round(s).toLocaleString()} sq ft under cover for ${o} guests in total.`]),i}const LS=""+new URL("knights-logo-lJDnesvl.png",import.meta.url).href;function ui({value:t,onValue:e,valid:n=()=>!0,parse:i=parseFloat,...r}){const[s,o]=Ue.useState(String(t)),[a,l]=Ue.useState(!1);return Ue.useEffect(()=>{a||o(String(t))},[t,a]),_.jsx("input",{type:"number",...r,value:s,onFocus:()=>l(!0),onBlur:()=>l(!1),onChange:c=>{const u=c.target.value;o(u);const d=i(u,10);n(d)&&e(d)}})}const Mo=()=>Ks("tlp-saved")||{},NS=()=>{const t=Ks("tlp-current-name");return typeof t=="string"?t:""};function DS({model:t,ph:e,photoSrc:n,onLoad:i,onNew:r}){const[s,o]=Ue.useState(Mo),[a,l]=Ue.useState(NS),[c,u]=Ue.useState(a),[d,f]=Ue.useState(a),[p,x]=Ue.useState("Layouts save in this browser only."),[g,m]=Ue.useState(null),h=Ue.useRef(0),v=Object.keys(s).sort(),y=v.includes(d)?d:v[0]||"";Ue.useEffect(()=>()=>clearTimeout(h.current),[]);const S=D=>{l(D),Ks("tlp-current-name",D)},T=()=>{clearTimeout(h.current),m(null)},A=(D,k)=>g===D?(T(),!0):(clearTimeout(h.current),m(D),x(k),h.current=setTimeout(()=>m(null),4e3),!1),L=()=>{A("new",a?`Click “Confirm new” to start a blank layout. Unsaved changes to “${a}” will be lost.`:"Click “Confirm new” to start a blank layout. This unsaved plan will be lost.")&&(r(),S(""),u(""),x("Started a new layout. Name it and click Save."))},N=()=>{const D=c.trim();if(!D){T(),x("Type a name for this layout, then click Save.");return}const k=Mo();if(k[D]&&D!==a&&!A("save",`“${D}” already exists. Click “Overwrite” to replace it, or change the name.`))return;T();let j=k[D]?`Updated “${D}”.`:`Saved “${D}” in this browser.`;k[D]={...Qn(t),photoSrc:e?n:null};try{localStorage.setItem("tlp-saved",JSON.stringify(k))}catch{k[D].photoSrc=null,k[D].photo=null,j=`Saved “${D}” without the photo; browser storage is full.`;try{localStorage.setItem("tlp-saved",JSON.stringify(k))}catch{x("This browser will not save layouts.");return}}o(Mo()),f(D),S(D),x(j)},w=()=>{const D=Mo()[y];D&&(T(),i(D),S(y),u(y),x(`Loaded “${y}”. Save updates it; change the name to save a copy.`))},M=()=>{if(!y||!A("delete",`Click “Confirm delete” to delete “${y}”.`))return;const D=Mo();delete D[y],Ks("tlp-saved",D),y===a&&S(""),o(D),x(`Deleted “${y}”.`)},U=c.trim(),$=g==="save"?"Overwrite":s[U]&&U===a?"Update":"Save";return _.jsxs("section",{children:[_.jsx("h2",{children:"Saved layouts"}),_.jsx("p",{className:"hint",children:a?_.jsxs(_.Fragment,{children:["Editing ",_.jsx("strong",{children:a})]}):"New layout (not saved yet)"}),_.jsxs("div",{className:"btnrow",children:[_.jsx("input",{type:"text",placeholder:"Layout name",style:{flex:1},value:c,onChange:D=>{u(D.target.value),g==="save"&&T()},onKeyDown:D=>{D.key==="Enter"&&N()}}),_.jsx("button",{className:g==="save"?"btn danger":"btn primary",onClick:N,children:$}),_.jsx("button",{className:g==="new"?"btn danger":"btn",onClick:L,children:g==="new"?"Confirm new":"New"})]}),_.jsxs("div",{className:"btnrow",children:[_.jsx("select",{style:{flex:1},"aria-label":"Saved layouts",value:y,onChange:D=>f(D.target.value),children:v.length?v.map(D=>_.jsx("option",{value:D,children:D},D)):_.jsx("option",{value:"",children:"No saved layouts yet"})}),_.jsx("button",{className:"btn",disabled:!v.length,onClick:w,children:"Load"}),_.jsx("button",{className:"btn danger",disabled:!v.length,onClick:M,children:g==="delete"?"Confirm delete":"Delete"})]}),_.jsx("p",{className:"hint",children:p})]})}const G_={bottom:"Bottom side",top:"Top side",left:"Left end",right:"Right end"},j_={entrance:"Entrance",exit:"Exit only"};function IS({st:t,lay:e,update:n,sel:i,onSelect:r}){const s=Lc(t.guests),o=e.exits.length,a=!!t.exits,l=c=>n(u=>{u.exits||(u.exits=k_(e)),c(u.exits,u)});return _.jsxs("section",{children:[_.jsx("h2",{children:"Entrances & exits"}),_.jsxs("p",{className:"hint",children:[o," opening",o===1?"":"s"," · ",s," required for ",t.guests," guests."," ",a?"Placed by you.":"Placed automatically; any change below switches to your own layout.",o<s&&_.jsxs("b",{style:{color:"var(--bad)"},children:[" Add ",s-o," more."]})]}),_.jsx("div",{className:"exits",children:e.exits.map((c,u)=>_.jsxs("div",{className:"exitrow",style:i==="x:"+u?{background:"var(--accent-soft)"}:void 0,children:[_.jsx("button",{className:"btn sm no",title:"Select in the plan",onClick:()=>r("x:"+u),children:u+1}),_.jsx("select",{"aria-label":`Opening ${u+1} side`,value:c.side,onChange:d=>{const f=d.target.value;l(p=>{p[u]={...p[u],side:f}})},children:Object.entries(G_).map(([d,f])=>_.jsx("option",{value:d,children:f},d))}),_.jsx("select",{"aria-label":`Opening ${u+1} type`,value:c.kind,onChange:d=>{const f=d.target.value;l(p=>{p[u]={...p[u],kind:f}})},children:Object.entries(j_).map(([d,f])=>_.jsx("option",{value:d,children:f},d))}),_.jsx("button",{className:"btn sm danger","aria-label":`Remove opening ${u+1}`,title:"Remove",onClick:()=>{l(d=>{d.splice(u,1)}),i&&i.startsWith("x:")&&r(null)},children:"✕"}),_.jsxs("span",{className:"pos",title:"Distance from the left or top corner",children:[Math.round(c.c),"'"]}),_.jsx("input",{type:"range",min:0,max:100,step:1,"aria-label":`Opening ${u+1} position along the wall`,value:Math.round(c.f*100),onChange:d=>{const f=+d.target.value/100;l(p=>{p[u]={...p[u],f}})}})]},u))}),_.jsxs("div",{className:"btnrow",children:[_.jsx("button",{className:"btn",onClick:()=>l(c=>{c.push(O_(c))}),children:"+ Add exit"}),a&&_.jsx("button",{className:"btn",onClick:()=>{n(c=>{c.exits=null}),r(null)},children:"Reset to auto"})]}),_.jsx("p",{className:"hint",children:"Tip: click an exit in the tent plan and drag it along the wall, or press Delete to remove it."})]})}function US({tents:t,active:e,st:n,update:i,onPick:r,onAdd:s,onDuplicate:o,onRemove:a}){const[l,c]=Ue.useState(-1),u=Ue.useRef(0);Ue.useEffect(()=>()=>clearTimeout(u.current),[]);const d=f=>{if(l!==f){c(f),clearTimeout(u.current),u.current=setTimeout(()=>c(-1),3e3);return}clearTimeout(u.current),c(-1),a(f)};return _.jsxs("section",{children:[_.jsx("h2",{children:"Tents"}),t.map((f,p)=>_.jsxs("div",{className:"tentrow",children:[_.jsxs("button",{className:"btn pick","aria-pressed":p===e,onClick:()=>r(p),title:"Edit this tent",children:[f.name," ",_.jsxs("span",{className:"hint",style:{display:"inline"},children:["· ",f.lay.W,"' × ",f.lay.L,"' · ",f.guests]})]}),t.length>1?_.jsx("button",{className:"btn sm danger",onClick:()=>d(p),"aria-label":`Remove ${f.name}`,children:l===p?"Confirm":"✕"}):_.jsx("span",{}),_.jsx("span",{})]},p)),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Name of selected tent"}),_.jsx("input",{type:"text",value:n.name||"",onChange:f=>{const p=f.target.value;i(x=>{x.name=p})}})]}),_.jsxs("div",{className:"btnrow",children:[_.jsx("button",{className:"btn",onClick:s,children:"+ Add tent"}),_.jsx("button",{className:"btn",onClick:o,children:"Duplicate selected"})]}),_.jsx("p",{className:"hint",children:"The settings below apply to the selected tent. On the site plan, click a tent to select it and drag it into place."})]})}const Sn=t=>t.map(([e,n])=>_.jsx("option",{value:e,children:n},e));function FS({st:t,update:e}){return _.jsx("div",{className:"acc",children:Sf.map(n=>{const i=t.acc[n.id]||{on:!1},r=l=>e(c=>{c.acc[n.id]=c.acc[n.id]||{},l(c.acc[n.id],c)}),s=_.jsxs("label",{className:"chk",children:[_.jsx("input",{type:"checkbox",checked:!!i.on,onChange:l=>{const c=l.target.checked;r(u=>{u.on=c})}})," ",n.label]}),o=l=>r((c,u)=>{c.size=l,delete u.pos[n.id]});if(n.dance){const l=Ps[i.finish]||Ps.cherry,c=i.size==="auto"||i.size==="custom"||l.sizes.includes(i.size)?i.size:"auto";return _.jsxs(Ue.Fragment,{children:[_.jsxs("div",{className:"accrow",children:[s,_.jsxs("select",{"aria-label":"Dance floor size",value:c||"auto",disabled:!i.on,onChange:u=>o(u.target.value),children:[_.jsx("option",{value:"auto",children:"Auto size"}),l.sizes.map(u=>_.jsx("option",{value:u,children:`${u.replace("x","' × ")}'`},u)),_.jsx("option",{value:"custom",children:"Custom size"})]})]}),i.on&&_.jsxs("div",{className:"dsub",children:[_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Finish"}),_.jsx("select",{value:i.finish||"cherry",onChange:u=>{const d=u.target.value;r((f,p)=>{f.finish=d,f.size!=="auto"&&f.size!=="custom"&&!Ps[d].sizes.includes(f.size)&&(f.size="auto"),delete p.pos.dance})},children:Sn(Object.entries(Ps).map(([u,d])=>[u,d.label]))})]}),_.jsxs("label",{className:"chk",children:[_.jsx("input",{type:"checkbox",checked:!!i.wrap,onChange:u=>{const d=u.target.checked;r(f=>{f.wrap=d})}})," Vinyl wrap"]})]}),i.on&&i.size==="custom"&&_.jsxs("div",{className:"dcustom",children:[_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Length (ft)"}),_.jsx(ui,{min:4,max:100,step:4,value:i.cl||20,valid:u=>u>=4,onValue:u=>r((d,f)=>{d.cl=Math.min(100,u),delete f.pos.dance})})]}),_.jsx("span",{className:"x",children:"×"}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Width (ft)"}),_.jsx(ui,{min:4,max:100,step:4,value:i.cw||20,valid:u=>u>=4,onValue:u=>r((d,f)=>{d.cw=Math.min(100,u),delete f.pos.dance})})]})]})]},n.id)}if(n.id==="stage")return _.jsxs(Ue.Fragment,{children:[_.jsxs("div",{className:"accrow",children:[s,_.jsxs("select",{"aria-label":"Stage size",value:i.size||n.def,disabled:!i.on,onChange:l=>o(l.target.value),children:[Object.keys(n.sizes).map(l=>_.jsx("option",{value:l,children:l},l)),_.jsx("option",{value:"custom",children:"Custom size"})]})]}),i.on&&i.size==="custom"&&_.jsxs("div",{className:"dcustom",children:[_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Front width (ft)"}),_.jsx(ui,{min:4,max:80,step:1,value:i.cl||12,valid:l=>l>=4,onValue:l=>r((c,u)=>{c.cl=Math.min(100,l),delete u.pos.stage})})]}),_.jsx("span",{className:"x",children:"×"}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Depth (ft)"}),_.jsx(ui,{min:4,max:60,step:1,value:i.cw||8,valid:l=>l>=4,onValue:l=>r((c,u)=>{c.cw=Math.min(100,l),delete u.pos.stage})})]})]})]},n.id);if(n.id==="head"){const l=c=>r((u,d)=>{c(u),delete u.chairs,delete d.pos.head});return _.jsxs(Ue.Fragment,{children:[_.jsxs("div",{className:"accrow",children:[s,_.jsxs("select",{"aria-label":"Head table size",value:i.size||n.def,disabled:!i.on,onChange:c=>{const u=c.target.value;l(d=>{u==="custom"&&!d.seats&&(d.seats=(n.sizes[d.size]||n.sizes[n.def])[2]),d.size=u})},children:[Object.keys(n.sizes).map(c=>_.jsx("option",{value:c,children:c},c)),_.jsx("option",{value:"custom",children:"Custom seats"})]})]}),i.on&&i.size==="custom"&&_.jsxs("div",{className:"dcustom",children:[_.jsxs("label",{className:"field",children:[_.jsxs("span",{children:["Seats (1–",Nl,")"]}),_.jsx(ui,{min:1,max:Nl,step:1,value:z_(i.seats),parse:parseInt,valid:c=>Number.isInteger(c)&&c>=1&&c<=Nl,onValue:c=>l(u=>{u.seats=c})})]}),_.jsxs("span",{className:"hint",children:[H_(i).dims[0],"' long"]})]}),i.on&&Array.isArray(i.chairs)&&_.jsxs("div",{className:"dsub",children:[_.jsxs("span",{className:"hint",children:[i.chairs.length," seat",i.chairs.length===1?"":"s",", arranged by hand"]}),_.jsx("button",{className:"btn sm",onClick:()=>r(c=>{delete c.chairs}),children:"Reset seats"})]})]},n.id)}let a=_.jsx("span",{});return n.sizes?a=_.jsx("select",{"aria-label":`${n.label} size`,value:i.size||n.def,disabled:!i.on,onChange:l=>{const c=l.target.value;r(u=>{u.size=c})},children:Object.keys(n.sizes).map(l=>_.jsx("option",{value:l,children:l},l))}):n.qty&&(a=_.jsxs("select",{"aria-label":`${n.label} count`,value:i.qty||"auto",disabled:!i.on,onChange:l=>{const c=l.target.value;r(u=>{u.qty=c})},children:[_.jsx("option",{value:"auto",children:"Auto count"}),(n.qtyOpts||[1,2,3,4]).map(l=>_.jsx("option",{value:String(l),children:l},l))]})),_.jsxs("div",{className:"accrow",children:[s,a]},n.id)})})}function kS({st:t,lay:e,model:n,tents:i,active:r,sel:s,onSelect:o,update:a,ph:l,photoSrc:c,onPhotoFile:u,onCalib:d,onPhotoDel:f,onPhotoScale:p,onLoadLayout:x,onNewLayout:g,onPickTent:m,onAddTent:h,onDuplicateTent:v,onRemoveTent:y,onArrange:S,onAddTable:T,onResetTables:A}){const L=Ue.useRef(null),N=R=>F=>{const W=F.target.value;a(ie=>{ie[R]=W})},w=R=>F=>{const W=F.target.checked;a(ie=>{ie[R]=W})},M=jt[t.seating],U=M.kind==="mixed",$=U?jt[t.mixRound].seats:M.seats,D=e?e.units.filter(R=>R.type==="banquet").length:0,k=e?e.units.length-D:0,j=t.address?`https://www.google.com/maps?q=${encodeURIComponent(t.address)}&t=k`:"https://www.google.com/maps?t=k",z=l?t.photo.calibrated?`Scale set: 1 ft = ${(1/t.photo.fpp).toFixed(1)} photo pixels. Drag the tent on the site plan to place it.`:"Scale is a rough guess. Click Set scale and mark two points you measured in Google Maps (right-click › Measure distance).":"Screenshot the satellite view, then upload it or paste it here (Ctrl+V). You will set the scale by clicking two points a known distance apart.",ne=t.tentSize!=="auto"&&(Object.keys(t.pos).length>0||!!t.tables);return _.jsxs("aside",{className:"rail","aria-label":"Layout settings",children:[_.jsxs("section",{children:[_.jsx("h2",{children:"Location"}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Event or site name"}),_.jsx("input",{type:"text",value:t.siteName,onChange:N("siteName")})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Site type"}),_.jsx("select",{value:t.sitePreset,onChange:R=>{const F=R.target.value;a(W=>{W.sitePreset=F;const ie=Uh[F];ie.l&&(W.siteL=ie.l,W.siteW=ie.w,W.surface=ie.surface),W.tentPos=null}),i.length>1&&S()},children:Sn(Object.entries(Uh).map(([R,F])=>[R,F.label]))})]}),_.jsxs("div",{className:"row2",children:[_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Usable length (ft)"}),_.jsx(ui,{min:20,max:2e3,step:5,value:t.siteL,valid:R=>R>=20,onValue:R=>a(F=>{F.siteL=Math.min(2e3,R),F.sitePreset="custom"})})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Usable depth (ft)"}),_.jsx(ui,{min:20,max:2e3,step:5,value:t.siteW,valid:R=>R>=20,onValue:R=>a(F=>{F.siteW=Math.min(2e3,R),F.sitePreset="custom"})})]})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Ground surface"}),_.jsx("select",{value:t.surface,onChange:N("surface"),children:Sn([["grass","Grass / lawn"],["gravel","Gravel"],["asphalt","Asphalt"],["concrete","Concrete"]])})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Site address"}),_.jsx("input",{type:"text",value:t.address||"",onChange:N("address"),placeholder:"Street, city, state"})]}),_.jsx("div",{className:"btnrow",children:_.jsx("a",{className:"btn",target:"_blank",rel:"noopener noreferrer",href:j,children:"Open satellite view in Google Maps"})}),_.jsxs("div",{className:"field",children:[_.jsx("span",{children:"Satellite photo of the site"}),_.jsxs("div",{className:"btnrow",children:[_.jsx("button",{className:"btn",onClick:()=>L.current.click(),children:"Upload screenshot"}),_.jsx("input",{type:"file",ref:L,accept:"image/*",hidden:!0,onChange:R=>{u(R.target.files&&R.target.files[0]),R.target.value=""}}),_.jsx("button",{className:"btn",disabled:!l,onClick:d,children:"Set scale"}),_.jsx("button",{className:"btn danger",disabled:!l,onClick:f,children:"Remove"})]}),_.jsx("p",{className:"hint",children:z})]}),l&&_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Photo scale: width covered (ft)"}),_.jsx(ui,{min:10,max:5e3,step:1,value:Math.round(t.photo.pw*t.photo.fpp),valid:R=>R>=10,onValue:R=>p(R/(t.photo.pw*t.photo.fpp))})]}),_.jsxs("label",{className:"field",children:[_.jsxs("span",{children:[i.length>1?`${t.name} rotation`:"Tent rotation"," on site: ",_.jsxs("b",{children:[t.tentAngle||0,"°"]})]}),_.jsx("input",{type:"range",min:-180,max:180,step:1,value:t.tentAngle||0,onChange:R=>{const F=+R.target.value;a(W=>{W.tentAngle=F})}})]})]}),_.jsx(US,{tents:i,active:r,st:t,update:a,onPick:m,onAdd:h,onDuplicate:v,onRemove:y}),_.jsxs("section",{children:[_.jsxs("h2",{children:["Guests & seating",i.length>1?` · ${t.name}`:""]}),_.jsxs("div",{className:"field",children:[_.jsx("span",{children:"Guest count"}),_.jsxs("div",{className:"guests",children:[_.jsx(ui,{min:1,max:2e3,"aria-label":"Guest count",value:t.guests,parse:parseInt,valid:R=>R>=1,onValue:R=>a(F=>{F.guests=Math.min(2e3,R)})}),_.jsx("input",{type:"range",min:10,max:600,step:5,"aria-label":"Guest count slider",value:Math.min(600,t.guests),onChange:R=>{const F=parseInt(R.target.value,10);a(W=>{W.guests=F})}})]})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Seating style"}),_.jsx("select",{value:t.seating,onChange:R=>{const F=R.target.value;a(W=>{W.seating=F,W.seatsPer=jt[F==="mixed"?W.mixRound||"rounds60":F].def})},children:Sn(Object.entries(jt).map(([R,F])=>[R,F.label]))})]}),U&&_.jsxs("div",{className:"row2",children:[_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Round tables"}),_.jsx("select",{value:t.mixRound,onChange:R=>{const F=R.target.value;a(W=>{W.mixRound=F,W.seatsPer=jt[F].def})},children:Sn([["rounds60",'60" rounds'],["rounds72",'72" rounds']])})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Banquet tables (8 seats)"}),_.jsx(ui,{min:0,max:250,"aria-label":"Banquet tables",value:t.mixBanquet,parse:parseInt,valid:R=>R>=0,onValue:R=>a(F=>{F.mixBanquet=Math.min(250,R)})})]})]}),M.kind!=="none"&&_.jsxs("div",{className:"row2",children:[_.jsxs("label",{className:"field",children:[_.jsx("span",{children:U?"Seats per round":"Seats per table"}),_.jsx("select",{value:t.seatsPer,disabled:$.length<2,onChange:R=>{const F=+R.target.value;a(W=>{W.seatsPer=F})},children:Sn($.map(R=>[R,R===1?"—":R]))})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Spacing"}),_.jsx("select",{value:t.spacing,onChange:N("spacing"),children:Sn([["comfortable","Comfortable"],["tight","Tight"]])})]})]}),M.kind==="none"?_.jsx("p",{className:"hint",children:"No tables or chairs are planned. The tent is sized for standing room (about 6–8 sq ft per guest) plus the floor items below."}):e&&_.jsxs("div",{className:"field",children:[_.jsxs("span",{children:[M.kind==="chair"?`${e.units.length} chairs`:U?`${k} rounds · ${D} banquet · ${e.seats} seats`:`${e.units.length} tables · ${e.seats} seats`," · ",e.manual?"set by you":"auto from guest count"]}),_.jsxs("div",{className:"btnrow",children:[U?_.jsxs(_.Fragment,{children:[_.jsx("button",{className:"btn sm",onClick:()=>T(t.mixRound),children:"+ Add round"}),_.jsx("button",{className:"btn sm",onClick:()=>T("banquet"),children:"+ Add banquet"})]}):_.jsx("button",{className:"btn sm",onClick:()=>T(),children:M.kind==="chair"?"+ Add chair":"+ Add table"}),t.tables&&_.jsx("button",{className:"btn sm",onClick:A,children:"Reset to auto"})]}),_.jsx("p",{className:"hint",children:M.kind==="chair"?"Click a chair in the tent plan to move or remove it.":"Click a table in the tent plan to move it, switch it between round and banquet, add or remove chairs, or remove it."})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Chair style"}),_.jsx("select",{value:t.chairStyle,onChange:N("chairStyle"),children:Sn(hS.map(R=>[R,R]))})]})]}),_.jsxs("section",{children:[_.jsxs("h2",{children:["Tent",i.length>1?` · ${t.name}`:""]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Tent style"}),_.jsx("select",{value:t.tentType,onChange:R=>{const F=R.target.value;a(W=>{W.tentType=F,W.tentSize="auto",W.pos={}})},children:Sn(Object.entries($r).map(([R,F])=>[R,F.label]))})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Size"}),_.jsx("select",{value:t.tentSize,onChange:N("tentSize"),children:Sn([["auto","Auto (smallest that fits)"],...$r[t.tentType].sizes.map(([R,F])=>[`${R}x${F}`,`${R}' × ${F}'`])])})]}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Sidewalls"}),_.jsx("select",{value:t.walls,onChange:N("walls"),children:Sn([["none","None (open sides)"],["solid","Solid white"],["window","Cathedral window"],["clear","Clear"]])})]}),ne&&_.jsx("p",{className:"hint",children:"Size locked because you moved an item. Pick Auto to resize again."})]}),e&&_.jsx(IS,{st:t,lay:e,update:a,sel:s,onSelect:o}),_.jsxs("section",{children:[_.jsx("h2",{children:"Floor items"}),_.jsx(FS,{st:t,update:a})]}),_.jsxs("section",{children:[_.jsx("h2",{children:"Comfort, lighting & power"}),_.jsxs("label",{className:"field",children:[_.jsx("span",{children:"Climate control"}),_.jsx("select",{value:t.climate,onChange:N("climate"),children:Sn([["none","None"],["fans","Summer: industrial fans"],["heat-mild","Cool evening: heat (50s °F)"],["heat-cold","Cold: heat (30s–40s °F)"]])})]}),_.jsxs("label",{className:"chk",children:[_.jsx("input",{type:"checkbox",checked:!!t.stringLights,onChange:w("stringLights")})," Bistro string lights"]}),t.stringLights&&_.jsxs("label",{className:"field",style:{paddingLeft:24},children:[_.jsx("span",{children:"String light layout"}),_.jsx("select",{value:t.lightStyle||"swag",onChange:N("lightStyle"),children:Sn(Object.entries(uS))})]}),_.jsxs("label",{className:"chk",children:[_.jsx("input",{type:"checkbox",checked:!!t.chandeliers,onChange:w("chandeliers")})," Chandeliers"]}),t.chandeliers&&e&&_.jsxs("div",{className:"field",style:{paddingLeft:24},children:[_.jsxs("span",{children:[e.chands.length," chandelier",e.chands.length===1?"":"s"," · ",t.chandList?"placed by you":"auto, one per 20' bay"]}),_.jsxs("div",{className:"btnrow",children:[_.jsx("button",{className:"btn sm",onClick:()=>a(R=>{R.chandList||(R.chandList=U_(e)),R.chandList.push(F_(e))}),children:"+ Add chandelier"}),t.chandList&&_.jsx("button",{className:"btn sm",onClick:()=>{a(R=>{R.chandList=null}),o(null)},children:"Reset to auto"})]}),_.jsx("p",{className:"hint",children:"Click a chandelier in the tent plan to drag it, or press Delete to remove it."})]}),_.jsxs("label",{className:"chk",children:[_.jsx("input",{type:"checkbox",checked:!!t.uplights,onChange:w("uplights")})," LED uplighting"]}),_.jsxs("label",{className:"chk",children:[_.jsx("input",{type:"checkbox",checked:!!t.generator,onChange:w("generator")})," Generator"]})]}),_.jsx(DS,{model:n,ph:l,photoSrc:c,onLoad:x,onNew:g})]})}const OS=()=>_.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:_.jsx("path",{d:"M10 3v9m0 0-3.5-3.5M10 12l3.5-3.5M4 14v2.5h12V14",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})});function zS({doc:t,onClose:e}){const n=Ue.useMemo(()=>URL.createObjectURL(t.blob),[t]),i=Ue.useRef(null),r=navigator.pdfViewerEnabled!==!1;Ue.useEffect(()=>()=>URL.revokeObjectURL(n),[n]),Ue.useEffect(()=>{var u;const a=document.activeElement;(u=i.current)==null||u.focus();const l=d=>{d.key==="Escape"&&e()};document.addEventListener("keydown",l);const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{var d;document.removeEventListener("keydown",l),document.body.style.overflow=c,(d=a==null?void 0:a.focus)==null||d.call(a)}},[e]);const s=()=>{const a=URL.createObjectURL(t.blob),l=document.createElement("a");l.href=a,l.download=t.filename,document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(a),6e4)},o=Math.max(1,Math.round(t.blob.size/1024));return _.jsx("div",{className:"pdfmodal",onMouseDown:a=>{a.target===a.currentTarget&&e()},children:_.jsxs("div",{className:"pdfbox",role:"dialog","aria-modal":"true","aria-labelledby":"pdfprev-title",children:[_.jsxs("div",{className:"pdfhead",children:[_.jsx("h2",{id:"pdfprev-title",children:"PDF preview"}),_.jsxs("span",{className:"fname",title:t.filename,children:[t.filename," · ",o.toLocaleString()," KB"]}),_.jsxs("button",{className:"btn primary",onClick:s,children:[_.jsx(OS,{}),"Download"]}),_.jsx("button",{className:"btn",ref:i,onClick:e,children:"Close"})]}),r?_.jsx("iframe",{className:"pdfframe",title:"PDF preview",src:`${n}#view=FitH`}):_.jsxs("div",{className:"pdffall",children:[_.jsx("p",{children:"This browser can't show the PDF here."}),_.jsx("p",{children:_.jsx("a",{className:"btn",href:n,target:"_blank",rel:"noopener",children:"Open in a new tab"})})]})]})})}function BS({id:t,w:e,h:n,chairs:i,st:r,interactive:s,sel:o}){const a=[];let l=0;const c=()=>l++;if(t==="stage"){a.push(_.jsx("rect",{className:"stage",width:e,height:n},c()));for(let u=4;u<e-.1;u+=4)a.push(_.jsx("line",{className:"deck",x1:u,y1:0,x2:u,y2:n},c()));for(let u=8;u<n-.1;u+=8)a.push(_.jsx("line",{className:"deck",x1:0,y1:u,x2:e,y2:u},c()))}else if(t==="dance"){const u=Sa(r),d=u.tile;for(let f=0;f<e/d-.01;f++)for(let p=0;p<n/d-.01;p++)a.push(_.jsx("rect",{fill:u.colors[(f+p)%2],x:f*d,y:p*d,width:Ye(Math.min(d,e-f*d)),height:Ye(Math.min(d,n-p*d))},c()));a.push(_.jsx("rect",{className:"dfedge",width:e,height:n},c())),(r.acc.dance||{}).wrap&&a.push(_.jsx("circle",{className:"wrap",cx:e/2,cy:n/2,r:Math.min(e,n)*.3},c()))}else if(t==="head"){a.push(_.jsx("rect",{className:"tbl",x:0,y:n-3.5,width:e,height:2.5},c()));for(let u=8;u<e-.1;u+=8)a.push(_.jsx("line",{className:"tbl",x1:u,y1:n-3.5,x2:u,y2:n-1},c()));(i||[]).forEach((u,d)=>a.push(_.jsx("rect",{className:"chair"+(s?" hseat":"")+(s&&o==="h:"+d?" sel":""),"data-hseat":s?d:void 0,x:Ye(u.x-.65),y:Ye(u.y-.65),width:1.3,height:1.3,rx:.3},c())))}else if(t==="dj")a.push(_.jsx("rect",{className:"zone",width:e,height:n},c()),_.jsx("rect",{className:"tbl",x:1,y:2.8,width:e-2,height:2},c()),_.jsx("rect",{className:"stage",x:.3,y:n-1.5,width:1.2,height:1.2},c()),_.jsx("rect",{className:"stage",x:e-1.5,y:n-1.5,width:1.2,height:1.2},c()));else if(t==="buffet"){a.push(_.jsx("rect",{className:"zone",width:e,height:n},c()),_.jsx("rect",{className:"tbl",x:0,y:n/2-1.25,width:e,height:2.5},c()),_.jsx("line",{className:"tbl",x1:8,y1:n/2-1.25,x2:8,y2:n/2+1.25},c()));for(let u=1;u<e-1;u+=2.6)a.push(_.jsx("rect",{className:"chafer",x:u,y:n/2-.6,width:1.8,height:1.2,rx:.3},c()))}else t==="bar"?a.push(_.jsx("rect",{className:"zone",width:e,height:n},c()),_.jsx("rect",{className:"tbl",x:2,y:.5,width:e-4,height:1.5},c()),_.jsx("rect",{className:"stage",x:1,y:3,width:e-2,height:2.5},c())):t==="cake"?a.push(_.jsx("circle",{className:"tbl",cx:e/2,cy:n/2,r:2},c()),_.jsx("circle",{className:"chafer",cx:e/2,cy:n/2,r:.9},c())):t==="highboy"?a.push(_.jsx("circle",{className:"zone",cx:e/2,cy:n/2,r:2.3},c()),_.jsx("circle",{className:"tbl",cx:e/2,cy:n/2,r:1.25},c())):t==="gift"?a.push(_.jsx("rect",{className:"tbl",x:1,y:1.2,width:e-2,height:2.5},c())):t==="photo"?a.push(_.jsx("rect",{className:"zone",width:e,height:n},c()),_.jsx("rect",{className:"stage",x:1,y:.4,width:e-2,height:.7},c()),_.jsx("rect",{className:"stage",x:e/2-.6,y:n-2.2,width:1.2,height:1.2},c())):t==="lounge"&&a.push(_.jsx("rect",{className:"zone",width:e,height:n},c()),_.jsx("rect",{className:"sofa",x:2,y:.6,width:e-4,height:2.6,rx:.6},c()),_.jsx("rect",{className:"sofa",x:1,y:5.6,width:2.6,height:2.6,rx:.5},c()),_.jsx("rect",{className:"sofa",x:e-3.6,y:5.6,width:2.6,height:2.6,rx:.5},c()),_.jsx("rect",{className:"tbl",x:e/2-2.5,y:4.6,width:5,height:2.4,rx:.3},c()));return _.jsx(_.Fragment,{children:a})}function HS({u:t,S:e,seatsPer:n}){const{x:i,y:r}=t,s=t.seats??n,o=[];let a=0;const l=()=>a++;if(e.kind==="round"){const c=e.r+.85;for(let u=0;u<s;u++){const d=u*2*Math.PI/s-Math.PI/2;o.push(_.jsx("circle",{className:"chair",cx:Ye(i+c*Math.cos(d)),cy:Ye(r+c*Math.sin(d)),r:.62},l()))}o.push(_.jsx("circle",{className:"tbl",cx:i,cy:r,r:e.r},l()),_.jsx("text",{className:"num seats",x:i,y:r,fontSize:e.r*.7,children:s},l()))}else if(e.kind==="banquet"){for(const[c,u]of P_.slice(0,s))o.push(_.jsx("rect",{className:"chair",x:i+c-.6,y:r+u*2.05-.55,width:1.2,height:1.1,rx:.25},l()));o.push(_.jsx("rect",{className:"tbl",x:i-4,y:r-1.25,width:8,height:2.5},l()),_.jsx("text",{className:"num seats",x:i,y:r,fontSize:1.5,children:s},l()))}else e.kind==="chair"?o.push(_.jsx("rect",{className:"chair",x:i-.75,y:r-.75,width:1.5,height:1.5,rx:.3},l())):o.push(_.jsx("circle",{className:"tbl",cx:i,cy:r,r:e.r},l()),_.jsx("circle",{className:"chair",cx:i,cy:r,r:.4},l()));return _.jsx(_.Fragment,{children:o})}function W_({st:t,l:e,interactive:n,fs:i,sel:r}){const{W:s,L:o,sh:a}=e,l=e.T.stake,c=[];let u=0;const d=()=>u++,f="floor"+(t.tentType==="cleartop"?" clear":"");if(a.oval?(c.push(_.jsx("path",{className:"stake",d:au(a,l)},d())),c.push(_.jsx("path",{className:f,d:au(a)},d()))):(c.push(_.jsx("rect",{className:"stake",x:-l,y:-l,width:o+2*l,height:s+2*l,rx:l/2},d())),c.push(_.jsx("rect",{className:f,x:0,y:0,width:o,height:s},d()))),t.climate.startsWith("heat")){const g=wf(t,e.area),m=Math.ceil(g/2),h=g-m,v=(y,S)=>{for(let T=0;T<y;T++){const A=(T+1)*o/(y+1),L=S?-7:s+3;c.push(_.jsx("line",{className:"duct",x1:A,y1:S?-3:s,x2:A,y2:S?0:s+3},d()),_.jsx("rect",{className:"heater",x:A-1.5,y:L,width:3,height:4},d()))}};v(m,!1),v(h,!0)}for(const g of e.items){const[m,h]=g.dims,v=g.x+g.w/2,y=g.y+g.h/2;c.push(_.jsxs("g",{className:"item"+(n&&r===g.key?" sel":"")+(g.fit?"":" bad"),"data-key":n?g.key:void 0,transform:`translate(${Ye(v)} ${Ye(y)}) rotate(${g.rot}) translate(${-m/2} ${-h/2})`,children:[_.jsx("rect",{className:"hit",width:m,height:h}),_.jsx(BS,{id:g.def.id,w:m,h,chairs:g.chairs,st:t,interactive:n,sel:r})]},"i-"+g.key))}e.units.forEach((g,m)=>{const h=_.jsx(HS,{u:g,S:jt[g.type]||e.S,seatsPer:t.seatsPer});if(!n){c.push(g.rot?_.jsx("g",{transform:`rotate(${g.rot} ${g.x} ${g.y})`,children:h},"u-"+m):_.jsx("g",{children:h},"u-"+m));return}const{hx:v,hy:y}=jt[g.type]||e.S;c.push(_.jsxs("g",{className:"unit"+(r==="u:"+m?" sel":"")+(g.bad?" bad":""),"data-unit":m,transform:g.rot?`rotate(${g.rot} ${g.x} ${g.y})`:void 0,children:[_.jsx("rect",{className:"hit",x:Ye(g.x-v),y:Ye(g.y-y),width:2*v,height:2*y}),h]},"u-"+m))});for(const g of e.poles)c.push(g.inner?_.jsx("circle",{className:"pole inner",cx:Ye(g.x),cy:Ye(g.y),r:.55},d()):_.jsx("rect",{className:"pole",x:Ye(g.x)-.35,y:Ye(g.y)-.35,width:.7,height:.7},d()));const p=t.walls==="none"?"wall open":"wall";if(a.oval)for(const g of D_(a,e.exits))c.push(_.jsx("polyline",{className:p,fill:"none",points:g.map(([m,h])=>`${Ye(m)},${Ye(h)}`).join(" ")},d()));else for(const g of["top","bottom","left","right"]){const m=g==="top"||g==="bottom",h=m?o:s,v=e.exits.filter(T=>T.side===g).map(T=>[T.c-3,T.c+3]).sort((T,A)=>T[0]-A[0]);let y=0;const S=[];for(const[T,A]of v)S.push([y,T]),y=A;S.push([y,h]);for(const[T,A]of S){if(A-T<.01)continue;const L=g==="top"||g==="left"?0:m?s:o;c.push(m?_.jsx("line",{className:p,x1:Ye(T),y1:L,x2:Ye(A),y2:L},d()):_.jsx("line",{className:p,x1:L,y1:Ye(T),x2:L,y2:Ye(A)},d()))}}const x=t.lightStyle||"swag";if(t.stringLights&&x!=="swag"&&c.push(_.jsx("path",{className:"light",d:au(a,-uc)},d())),t.stringLights&&x!=="perimeter"){const g=Math.max(1,Math.round(o/10)),m=[];for(let h=0;h<=g;h++){const v=h*o/g,y=ai(a,v);m.push(`${Ye(v)},${Ye(h%2?s-y:y)}`)}c.push(_.jsx("polyline",{className:"light",points:m.join(" ")},d()))}e.chands.forEach((g,m)=>{const h=Ye(g.x),v=Ye(g.y);c.push(_.jsxs("g",{className:n?"chandg"+(r==="c:"+m?" sel":""):void 0,"data-chand":n?m:void 0,children:[n&&_.jsx("circle",{className:"hit",cx:h,cy:v,r:Math.max(1.6,i*1.2)}),_.jsx("circle",{className:"chand",cx:h,cy:v,r:i*.45}),_.jsx("circle",{className:"light",cx:h,cy:v,r:i*.95,style:{strokeDasharray:"none",strokeWidth:1}})]},"c-"+m))}),e.exits.forEach((g,m)=>{const h=g.main?"ENTRANCE · EXIT":"EXIT",v=[];if(g.side==="bottom")v.push(_.jsx("line",{className:"exitarrow",x1:g.c,y1:g.p-2,x2:g.c,y2:g.p+2,markerEnd:"url(#arr)"},"a"),_.jsx("text",{className:"exitt",x:g.c,y:g.p+2.6+i,fontSize:i*.9,children:h},"t"));else if(g.side==="top")v.push(_.jsx("line",{className:"exitarrow",x1:g.c,y1:g.p+2,x2:g.c,y2:g.p-2,markerEnd:"url(#arr)"},"a"),_.jsx("text",{className:"exitt",x:g.c,y:g.p-2.8,fontSize:i*.9,children:h},"t"));else{const y=g.p,S=g.side==="right"?1:-1;v.push(_.jsx("line",{className:"exitarrow",x1:y-2*S,y1:g.c,x2:y+2*S,y2:g.c,markerEnd:"url(#arr)"},"a"),_.jsx("text",{className:"exitt",transform:`translate(${y+S*(2.8+i*.5)} ${g.c}) rotate(${S*90})`,fontSize:i*.9,children:h},"t"))}c.push(_.jsxs("g",{className:n?"exitg"+(r==="x:"+m?" sel":""):void 0,"data-exit":n?m:void 0,children:[n&&_.jsx("circle",{className:"hit",cx:Ye(g.x),cy:Ye(g.y),r:4}),v]},"x-"+m))});for(const g of e.items){if(!g.def.short)continue;const m=g.x+g.w/2,h=g.y+g.h/2,v=g.def.id,y=g.h>g.w*1.25;let S=g.def.short;(v==="dance"||v==="stage")&&(S+=` ${g.dims[0]}×${g.dims[1]}`);const T=Math.min(i,(y?g.h:g.w)/(S.length*.5));c.push(_.jsx("text",{className:"lbl"+(v==="stage"?" inv":""),fontSize:Ye(T),transform:`translate(${Ye(m)} ${Ye(h)})${y?" rotate(-90)":""}`,children:S},d()))}return _.jsx(_.Fragment,{children:c})}function cm({x:t,y:e,maxLen:n,fs:i}){const r=n<=40?5:n<=90?10:n<=180?20:50;return _.jsxs(_.Fragment,{children:[_.jsx("rect",{className:"sb1",x:t,y:e,width:r,height:i*.45}),_.jsx("rect",{className:"sb2",x:t+r,y:e,width:r,height:i*.45}),_.jsx("text",{className:"sbt",x:t,y:e+i*1.4,fontSize:i*.75,children:"0"}),_.jsx("text",{className:"sbt",x:t+r,y:e+i*1.4,fontSize:i*.75,children:r}),_.jsxs("text",{className:"sbt",x:t+2*r,y:e+i*1.4,fontSize:i*.75,children:[2*r," FT"]})]})}function qa({x0:t,y0:e,len:n,horiz:i,off:r,fs:s,label:o}){if(i){const l=e-r;return _.jsxs(_.Fragment,{children:[_.jsx("line",{className:"ext",x1:t,y1:e,x2:t,y2:l-1}),_.jsx("line",{className:"ext",x1:t+n,y1:e,x2:t+n,y2:l-1}),_.jsx("line",{className:"dim",x1:t,y1:l,x2:t+n,y2:l}),_.jsx("line",{className:"dim",x1:t-.7,y1:l+.7,x2:t+.7,y2:l-.7}),_.jsx("line",{className:"dim",x1:t+n-.7,y1:l+.7,x2:t+n+.7,y2:l-.7}),_.jsx("text",{className:"dimt",x:t+n/2,y:l-.6,fontSize:s*.85,children:o})]})}const a=t-r;return _.jsxs(_.Fragment,{children:[_.jsx("line",{className:"ext",x1:t,y1:e,x2:a-1,y2:e}),_.jsx("line",{className:"ext",x1:t,y1:e+n,x2:a-1,y2:e+n}),_.jsx("line",{className:"dim",x1:a,y1:e,x2:a,y2:e+n}),_.jsx("line",{className:"dim",x1:a-.7,y1:e+.7,x2:a+.7,y2:e-.7}),_.jsx("line",{className:"dim",x1:a-.7,y1:e+n+.7,x2:a+.7,y2:e+n-.7}),_.jsx("text",{className:"dimt",transform:`translate(${a-.6} ${e+n/2}) rotate(-90)`,fontSize:s*.85,children:o})]})}const um=()=>_.jsx("defs",{children:_.jsx("marker",{id:"arr",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"5",markerHeight:"5",orient:"auto-start-reverse",children:_.jsx("path",{d:"M0 0 L10 5 L0 10 z",fill:"var(--ok)"})})});function VS({t,i:e,active:n,sel:i,ph:r,fs:s,multi:o}){const{st:a,lay:l}=t,{W:c,L:u}=l,d=l.T.stake,f=qr(a,l,r),p=`translate(${Ye(f.x+u/2)} ${Ye(f.y+c/2)}) rotate(${a.tentAngle||0}) translate(${-u/2} ${-c/2})`,x=u+d+20,g=c/2-2,m=e===n&&i==="__tent";return _.jsxs(_.Fragment,{children:[r&&_.jsxs("g",{transform:p,children:[_.jsx("rect",{className:"setback",x:-20,y:-20,width:u+40,height:c+40,rx:20,style:{strokeWidth:2}}),_.jsx("text",{className:"sett",x:u/2,y:-20-s*.5,fontSize:s*.8,textAnchor:"middle",style:{paintOrder:"stroke",stroke:"var(--tent)",strokeWidth:"3px"},children:"20' CLEARANCE"})]}),_.jsx("g",{className:"tentg"+(m?" sel":"")+(o&&e===n?" active":""),"data-key":`__tent:${e}`,transform:p,children:_.jsx(W_,{st:a,l,interactive:!1,fs:Math.min(s,ct(Math.max(u,c)/50,.9,2.4)),sel:i})}),a.generator&&_.jsxs("g",{transform:p,children:[_.jsx("line",{className:"dim",x1:u,y1:g+2,x2:x,y2:g+2,style:{strokeDasharray:"4 3"}}),_.jsx("rect",{className:"gen",x,y:g,width:7,height:4}),_.jsx("text",{className:"dimt",x:x+3.5,y:g-1,fontSize:s*.7,children:"GENERATOR · 20' MIN."})]}),o&&_.jsx("text",{className:"tentname",x:Ye(f.x+u/2),y:Ye(f.y+c/2),fontSize:s*1.1,children:a.name})]})}function GS({st:t,lay:e,tents:n,active:i=0,view:r,sel:s,calib:o,ph:a,photoSrc:l,svgRef:c,dragging:u,...d}){const{W:f,L:p}=e,x=e.T.stake,g=[u?"dragging":"",o&&r==="site"?"calibrating":""].filter(Boolean).join(" ")||void 0;if(r==="tent"){const L=ct(Math.max(p,f)/50,.9,2.4),N=x+6+L*2.2;return _.jsxs("svg",{id:"plan",ref:c,className:g,xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:`${-N} ${-N} ${p+2*N} ${f+2*N+L*1.5}`,"aria-label":`Tent plan, ${f} by ${p} foot ${e.T.label}`,...d,children:[_.jsx(um,{}),_.jsx(W_,{st:t,l:e,interactive:!0,fs:L,sel:s}),_.jsx(qa,{x0:0,y0:-x,len:p,horiz:!0,off:3+L*.4,fs:L,label:$a(p)}),_.jsx(qa,{x0:-x,y0:0,len:f,horiz:!1,off:3+L*.4,fs:L,label:$a(f)}),_.jsx(cm,{x:0,y:f+x+3+L*.6,maxLen:p,fs:L})]})}const m=Ea(t,a),h=m.l,v=m.w,y=Math.max(h,v)/55,S=Math.max(h,v)*.07+y*2,T=n&&n.length?n:[{st:t,lay:e}],A=T.length>1;return _.jsxs("svg",{id:"plan",ref:c,className:g,xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:`${-S} ${-S} ${h+2*S} ${v+2*S}`,"aria-label":a?"Site plan over satellite photo":`Site plan, ${h} by ${v} foot site`,...d,children:[_.jsx(um,{}),a?_.jsx("image",{href:l,x:0,y:0,width:Ye(h),height:Ye(v),preserveAspectRatio:"none"}):_.jsxs(_.Fragment,{children:[_.jsx("rect",{className:t.surface==="grass"||t.surface==="gravel"?"soft":"hard",x:0,y:0,width:h,height:v}),h>45&&v>45&&_.jsxs(_.Fragment,{children:[_.jsx("rect",{className:"setback",x:20,y:20,width:h-40,height:v-40}),_.jsx("text",{className:"sett",x:22,y:20+y*1.1,fontSize:y*.7,children:"20' SETBACK FROM LOT LINES"})]}),_.jsx("rect",{className:"siteline",x:0,y:0,width:h,height:v})]}),T.map((L,N)=>_.jsx(VS,{t:L,i:N,active:i,sel:s,ph:a,fs:y,multi:A},N)),!a&&_.jsxs(_.Fragment,{children:[_.jsx(qa,{x0:0,y0:0,len:h,horiz:!0,off:y*1.6,fs:y,label:`SITE ${$a(h)}`}),_.jsx(qa,{x0:0,y0:0,len:v,horiz:!1,off:y*1.6,fs:y,label:$a(v)})]}),_.jsx(cm,{x:0,y:v+y*1.2,maxLen:h,fs:y}),a&&_.jsxs("text",{className:"attr",x:h-y*.5,y:v-y*.5,fontSize:y*.6,children:["Imagery: Google",t.photo.calibrated?"":" · scale not set"]}),o&&_.jsxs(_.Fragment,{children:[o.pts.length===2&&_.jsx("line",{className:"calib",x1:o.pts[0].x,y1:o.pts[0].y,x2:o.pts[1].x,y2:o.pts[1].y}),o.pts.map((L,N)=>_.jsx("circle",{className:"calibpt",cx:L.x,cy:L.y,r:y*.35},N))]})]})}function hm({item:t,onAddHeadSeat:e,onResetHeadSeats:n}){const i=t.chairs.length,r=i>=B_(t.dims[0]);return _.jsxs(_.Fragment,{children:[_.jsxs("span",{className:"hint",children:[i," seat",i===1?"":"s"]}),_.jsx("button",{className:"btn",disabled:r,title:r?"No more room along this table":void 0,onClick:e,children:"+ Add seat"}),t.customChairs&&_.jsx("button",{className:"btn",onClick:n,children:"Reset seats"})]})}function hu({angle:t,selKey:e,onRotate:n,onSetAngle:i}){const r=Math.round(t);return _.jsxs(_.Fragment,{children:[_.jsx("button",{className:"btn","aria-label":"Rotate 15 degrees left",onClick:()=>n(-15),children:"⟲ 15°"}),_.jsx("button",{className:"btn","aria-label":"Rotate 15 degrees right",onClick:()=>n(15),children:"⟳ 15°"}),_.jsx("button",{className:"btn",onClick:()=>n(90),children:"Turn 90°"}),_.jsxs("label",{className:"hint",children:["Angle"," ",_.jsx("input",{type:"number",step:1,defaultValue:r,onKeyDown:s=>{s.key==="Enter"&&i(parseFloat(s.target.value))},onBlur:s=>{const o=parseFloat(s.target.value);o!==r&&i(o)}},e+":"+r)," °"]})]})}function jS({view:t,calib:e,sel:n,lay:i,st:r,onCancelCalib:s,onApplyCalib:o,onRotate:a,onSetAngle:l,onRemove:c,onReflow:u,onExitKind:d,onRemoveExit:f,onAddExit:p,onRemoveChand:x,onAddChand:g,onSeats:m,onTableType:h,onAddTable:v,onRemoveTable:y,onAddHeadSeat:S,onRemoveHeadSeat:T,onResetHeadSeats:A}){const L=Ue.useRef(null);let N;if(t==="site"&&e)N=e.pts.length<2?_.jsxs(_.Fragment,{children:[_.jsxs("span",{className:"hint",children:["Click ",e.pts.length?"the second point":"two points a known distance apart"," on the photo."]}),_.jsx("button",{className:"btn",onClick:s,children:"Cancel"})]}):_.jsxs(_.Fragment,{children:[_.jsxs("label",{className:"hint",children:["Real distance"," ",_.jsx("input",{ref:L,type:"number",min:1,step:.5,"aria-label":"Real distance in feet",autoFocus:!0,onKeyDown:w=>{w.key==="Enter"&&o(parseFloat(w.target.value))}})," ft"]}),_.jsx("button",{className:"btn primary",onClick:()=>o(parseFloat(L.current&&L.current.value)),children:"Apply scale"}),_.jsx("button",{className:"btn",onClick:s,children:"Cancel"})]});else if(t==="site"&&n==="__tent")N=_.jsxs(_.Fragment,{children:[_.jsx("span",{className:"name",children:"Tent"}),_.jsx(hu,{angle:r.tentAngle||0,selKey:n,onRotate:a,onSetAngle:l})]});else{const w=t==="tent"&&n&&n.startsWith("x:")?i.exits[+n.slice(2)]:null,M=t==="tent"&&n&&n.startsWith("c:")?i.chands[+n.slice(2)]:null,U=t==="tent"&&n&&n.startsWith("u:")?i.units[+n.slice(2)]:null,$=t==="tent"&&n&&n.startsWith("h:")?i.items.find(j=>j.def.id==="head"):null,D=$?$.chairs[+n.slice(2)]:null,k=t==="tent"&&n&&!U&&!w&&!M&&!$?i.items.find(j=>j.key===n):null;if(D)N=_.jsxs(_.Fragment,{children:[_.jsxs("span",{className:"name",children:["Head table seat ",+n.slice(2)+1]}),_.jsx("span",{className:"hint",children:'Drag to move · arrows nudge 6"'}),_.jsx(hm,{item:$,onAddHeadSeat:S,onResetHeadSeats:A}),_.jsx("button",{className:"btn danger",onClick:T,children:"Remove seat"})]});else if(M)N=_.jsxs(_.Fragment,{children:[_.jsxs("span",{className:"name",children:["Chandelier ",+n.slice(2)+1]}),_.jsxs("span",{className:"hint",children:[Math.round(M.x),"' along · ",Math.round(M.y),"' across"]}),_.jsx("button",{className:"btn",onClick:g,children:"+ Add another"}),_.jsx("button",{className:"btn danger",onClick:x,children:"Remove"})]});else if(w)N=_.jsxs(_.Fragment,{children:[_.jsxs("span",{className:"name",children:[w.main?"Entrance":"Exit"," ",+n.slice(2)+1]}),_.jsxs("span",{className:"hint",children:[G_[w.side]," · ",Math.round(w.c),"' in"]}),_.jsx("select",{"aria-label":"Opening type",value:w.kind,onChange:j=>d(j.target.value),style:{width:"auto"},children:Object.entries(j_).map(([j,z])=>_.jsx("option",{value:j,children:z},j))}),_.jsx("button",{className:"btn danger",onClick:f,children:"Remove"})]});else if(U){const j=i.S.kind==="chair",z=U.seats??i.per,ne=Ll[U.type]||12;N=_.jsxs(_.Fragment,{children:[_.jsx("span",{className:"name",children:j?"Chair":"Table"}),!j&&_.jsx("select",{"aria-label":"Table type",value:U.type,onChange:R=>h(R.target.value),style:{width:"auto"},children:Object.entries(aS).map(([R,F])=>_.jsx("option",{value:R,children:F},R))}),!j&&_.jsxs("span",{className:"stepper",role:"group","aria-label":"Chairs at this table",children:[_.jsx("button",{className:"btn sm","aria-label":"Remove a chair",disabled:z<=0,onClick:()=>m(z-1),children:"−"}),_.jsxs("span",{className:"cnt",children:[z," chair",z===1?"":"s"]}),_.jsx("button",{className:"btn sm","aria-label":"Add a chair",disabled:z>=ne,onClick:()=>m(z+1),children:"+"})]}),_.jsx(hu,{angle:U.rot||0,selKey:n,onRotate:a,onSetAngle:l}),_.jsx("button",{className:"btn",onClick:()=>v(U.type),children:j?"+ Add chair":"+ Add table"}),_.jsx("button",{className:"btn danger",onClick:y,children:j?"Remove chair":"Remove table"}),r.tables&&_.jsx("button",{className:"btn",onClick:u,children:"Reset to auto"})]})}else k?N=_.jsxs(_.Fragment,{children:[_.jsx("span",{className:"name",children:k.def.label}),_.jsx(hu,{angle:k.rot,selKey:n,onRotate:a,onSetAngle:l}),k.def.id==="head"&&_.jsx(hm,{item:k,onAddHeadSeat:S,onResetHeadSeats:A}),_.jsx("button",{className:"btn danger",onClick:c,children:"Remove"})]}):N=t==="site"?_.jsx("span",{className:"hint",children:"Drag the tent to place it on the site."}):_.jsxs(_.Fragment,{children:[_.jsx("span",{className:"hint",children:"Drag any item, table, exit or chandelier to move it."}),_.jsx("button",{className:"btn",onClick:p,children:"+ Add exit"})]})}return _.jsx("div",{className:"selinfo",children:N})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="170",zs={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},WS=0,dm=1,XS=2,X_=1,$S=2,wi=3,mr=0,_n=1,Kn=2,hr=0,Bs=1,fm=2,pm=3,mm=4,qS=5,Lr=100,YS=101,KS=102,ZS=103,QS=104,JS=200,eM=201,tM=202,nM=203,zh=204,Bh=205,iM=206,rM=207,sM=208,oM=209,aM=210,lM=211,cM=212,uM=213,hM=214,Hh=0,Vh=1,Gh=2,Zs=3,jh=4,Wh=5,Xh=6,$h=7,Rf=0,dM=1,fM=2,dr=0,pM=1,mM=2,gM=3,_M=4,vM=5,xM=6,yM=7,$_=300,Qs=301,Js=302,qh=303,Yh=304,Nc=306,Kh=1e3,Fr=1001,Zh=1002,ni=1003,SM=1004,Ya=1005,di=1006,du=1007,kr=1008,ki=1009,q_=1010,Y_=1011,pa=1012,Pf=1013,Yr=1014,Ri=1015,wa=1016,Lf=1017,Nf=1018,eo=1020,K_=35902,Z_=1021,Q_=1022,Jn=1023,J_=1024,ev=1025,Hs=1026,to=1027,tv=1028,Df=1029,nv=1030,If=1031,Uf=1033,Dl=33776,Il=33777,Ul=33778,Fl=33779,Qh=35840,Jh=35841,ed=35842,td=35843,nd=36196,id=37492,rd=37496,sd=37808,od=37809,ad=37810,ld=37811,cd=37812,ud=37813,hd=37814,dd=37815,fd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,kl=36492,xd=36494,yd=36495,iv=36283,Sd=36284,Md=36285,Ed=36286,MM=3200,EM=3201,rv=0,wM=1,er="",En="srgb",oo="srgb-linear",Dc="linear",ft="srgb",rs=7680,gm=519,TM=512,AM=513,bM=514,sv=515,CM=516,RM=517,PM=518,LM=519,_m=35044,vm="300 es",Pi=2e3,fc=2001;class es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=Math.PI/180,wd=180/Math.PI;function Ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function NM(t,e){return(t%e+e)%e}function fu(t,e,n){return(1-n)*t+n*e}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const DM={DEG2RAD:Ol};class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],x=i[8],g=r[0],m=r[3],h=r[6],v=r[1],y=r[4],S=r[7],T=r[2],A=r[5],L=r[8];return s[0]=o*g+a*v+l*T,s[3]=o*m+a*y+l*A,s[6]=o*h+a*S+l*L,s[1]=c*g+u*v+d*T,s[4]=c*m+u*y+d*A,s[7]=c*h+u*S+d*L,s[2]=f*g+p*v+x*T,s[5]=f*m+p*y+x*A,s[8]=f*h+p*S+x*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,x=n*d+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pu.makeScale(e,n)),this}rotate(e){return this.premultiply(pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pu=new $e;function ov(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ma(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function IM(){const t=ma("canvas");return t.style.display="block",t}const xm={};function Uo(t){t in xm||(xm[t]=!0,console.warn(t))}function UM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function FM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ft&&(t.r=Ni(t.r),t.g=Ni(t.g),t.b=Ni(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ft&&(t.r=Vs(t.r),t.g=Vs(t.g),t.b=Vs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===er?Dc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const ym=[.64,.33,.3,.6,.15,.06],Sm=[.2126,.7152,.0722],Mm=[.3127,.329],Em=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[oo]:{primaries:ym,whitePoint:Mm,transfer:Dc,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:Sm,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:ym,whitePoint:Mm,transfer:ft,toXYZ:Em,fromXYZ:wm,luminanceCoefficients:Sm,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let ss;class OM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=ma("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ma("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zM=0;class av{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mu(r[o].image)):s.push(mu(r[o]))}else s=mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?OM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BM=0;class on extends es{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Fr,r=Fr,s=di,o=kr,a=Jn,l=ki,c=on.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Ta(),this.name="",this.source=new av(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kh:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kh:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=$_;on.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],x=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,T=(h+1)/2,A=(u+f)/4,L=(d+g)/4,N=(x+m)/4;return y>S&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=L/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=N/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=L/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-g)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HM extends es{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new av(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends HM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lv extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VM extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ni,this.minFilter=ni,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=x,e[n+3]=g;return}if(d!==g||l!==f||c!==p||u!==x){let m=1-a;const h=l*f+c*p+u*x+d*g,v=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const T=Math.sqrt(y),A=Math.atan2(T,h*v);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const S=a*v;if(l=l*m+f*S,c=c*m+p*S,u=u*m+x*S,d=d*m+g*S,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*d+l*p-c*f,e[n+1]=l*x+u*f+c*d-a*p,e[n+2]=c*x+u*p+a*f-l*d,e[n+3]=u*x-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"YXZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"ZXY":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"ZYX":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"YZX":this._x=f*u*d+c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d-f*p*x;break;case"XZY":this._x=f*u*d-c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gu.copy(this).projectOnVector(e),this.sub(gu)}reflect(e){return this.sub(gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gu=new X,Tm=new Zr;class Aa{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ka.copy(i.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Za.subVectors(this.max,wo),os.subVectors(e.a,wo),as.subVectors(e.b,wo),ls.subVectors(e.c,wo),Gi.subVectors(as,os),ji.subVectors(ls,as),Mr.subVectors(os,ls);let n=[0,-Gi.z,Gi.y,0,-ji.z,ji.y,0,-Mr.z,Mr.y,Gi.z,0,-Gi.x,ji.z,0,-ji.x,Mr.z,0,-Mr.x,-Gi.y,Gi.x,0,-ji.y,ji.x,0,-Mr.y,Mr.x,0];return!_u(n,os,as,ls,Za)||(n=[1,0,0,0,1,0,0,0,1],!_u(n,os,as,ls,Za))?!1:(Qa.crossVectors(Gi,ji),n=[Qa.x,Qa.y,Qa.z],_u(n,os,as,ls,Za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new X,new X,new X,new X,new X,new X,new X,new X],Gn=new X,Ka=new Aa,os=new X,as=new X,ls=new X,Gi=new X,ji=new X,Mr=new X,wo=new X,Za=new X,Qa=new X,Er=new X;function _u(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Er.fromArray(t,s);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const GM=new Aa,To=new X,vu=new X;class Ff{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):GM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const n=To.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(To,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(vu)),this.expandByPoint(To.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new X,xu=new X,Ja=new X,Wi=new X,yu=new X,el=new X,Su=new X;class cv{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xu.copy(e).add(n).multiplyScalar(.5),Ja.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ja),a=Wi.dot(this.direction),l=-Wi.dot(Ja),c=Wi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,x;if(u>0)if(d=o*l-a,f=o*a-l,x=s*u,d>=0)if(f>=-x)if(f<=x){const g=1/u;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xu).addScaledVector(Ja,f),p}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){yu.subVectors(n,e),el.subVectors(i,e),Su.crossVectors(yu,el);let o=this.direction.dot(Su),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=a*this.direction.dot(el.crossVectors(Wi,el));if(l<0)return null;const c=a*this.direction.dot(yu.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Su);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,x,g,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,x,g,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,x,g,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=x,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,x=a*u,g=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=f-g*c,n[9]=-a*l,n[2]=g-f*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,x=c*u,g=c*d;n[0]=f+g*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=g+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,x=c*u,g=c*d;n[0]=f-g*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=g-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,x=a*u,g=a*d;n[0]=l*u,n[4]=x*c-p,n[8]=f*c+g,n[1]=l*d,n[5]=g*c+f,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,x=a*l,g=a*c;n[0]=l*u,n[4]=g-f*d,n[8]=x*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+x,n[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*c,x=a*l,g=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+g,n[5]=o*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*u,n[10]=g*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jM,e,WM)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Xi.crossVectors(i,xn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Xi.crossVectors(i,xn)),Xi.normalize(),tl.crossVectors(xn,Xi),r[0]=Xi.x,r[4]=tl.x,r[8]=xn.x,r[1]=Xi.y,r[5]=tl.y,r[9]=xn.y,r[2]=Xi.z,r[6]=tl.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],x=i[2],g=i[6],m=i[10],h=i[14],v=i[3],y=i[7],S=i[11],T=i[15],A=r[0],L=r[4],N=r[8],w=r[12],M=r[1],U=r[5],$=r[9],D=r[13],k=r[2],j=r[6],z=r[10],ne=r[14],R=r[3],F=r[7],W=r[11],ie=r[15];return s[0]=o*A+a*M+l*k+c*R,s[4]=o*L+a*U+l*j+c*F,s[8]=o*N+a*$+l*z+c*W,s[12]=o*w+a*D+l*ne+c*ie,s[1]=u*A+d*M+f*k+p*R,s[5]=u*L+d*U+f*j+p*F,s[9]=u*N+d*$+f*z+p*W,s[13]=u*w+d*D+f*ne+p*ie,s[2]=x*A+g*M+m*k+h*R,s[6]=x*L+g*U+m*j+h*F,s[10]=x*N+g*$+m*z+h*W,s[14]=x*w+g*D+m*ne+h*ie,s[3]=v*A+y*M+S*k+T*R,s[7]=v*L+y*U+S*j+T*F,s[11]=v*N+y*$+S*z+T*W,s[15]=v*w+y*D+S*ne+T*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],x=e[3],g=e[7],m=e[11],h=e[15];return x*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+g*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],x=e[12],g=e[13],m=e[14],h=e[15],v=d*m*c-g*f*c+g*l*p-a*m*p-d*l*h+a*f*h,y=x*f*c-u*m*c-x*l*p+o*m*p+u*l*h-o*f*h,S=u*g*c-x*d*c+x*a*p-o*g*p-u*a*h+o*d*h,T=x*d*l-u*g*l-x*a*f+o*g*f+u*a*m-o*d*m,A=n*v+i*y+r*S+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=v*L,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*L,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*h+i*l*h)*L,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*L,e[4]=y*L,e[5]=(u*m*s-x*f*s+x*r*p-n*m*p-u*r*h+n*f*h)*L,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*h-n*l*h)*L,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*L,e[8]=S*L,e[9]=(x*d*s-u*g*s-x*i*p+n*g*p+u*i*h-n*d*h)*L,e[10]=(o*g*s-x*a*s+x*i*c-n*g*c-o*i*h+n*a*h)*L,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*L,e[12]=T*L,e[13]=(u*g*r-x*d*r+x*i*f-n*g*f-u*i*m+n*d*m)*L,e[14]=(x*a*r-o*g*r-x*i*l+n*g*l+o*i*m-n*a*m)*L,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,x=s*d,g=o*u,m=o*d,h=a*d,v=l*c,y=l*u,S=l*d,T=i.x,A=i.y,L=i.z;return r[0]=(1-(g+h))*T,r[1]=(p+S)*T,r[2]=(x-y)*T,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(x+y)*L,r[9]=(m-v)*L,r[10]=(1-(f+g))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const c=1/s,u=1/o,d=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,n.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Pi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,x;if(a===Pi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===fc)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Pi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let x,g;if(a===Pi)x=(o+s)*d,g=-2*d;else if(a===fc)x=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const cs=new X,jn=new Ct,jM=new X(0,0,0),WM=new X(1,1,1),Xi=new X,tl=new X,xn=new X,Am=new Ct,bm=new Zr;class gi{constructor(e=0,n=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Am,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XM=0;const Cm=new X,us=new Zr,Si=new Ct,nl=new X,Ao=new X,$M=new X,qM=new Zr,Rm=new X(1,0,0),Pm=new X(0,1,0),Lm=new X(0,0,1),Nm={type:"added"},YM={type:"removed"},hs={type:"childadded",child:null},Mu={type:"childremoved",child:null};class Xt extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new X,n=new gi,i=new Zr,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new $e}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Rm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,n){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nl.copy(e):nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ao,nl,this.up):Si.lookAt(nl,Ao,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Si),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nm),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YM),Mu.child=e,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nm),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,$M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,qM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new X(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new X,Mi=new X,Eu=new X,Ei=new X,ds=new X,fs=new X,Dm=new X,wu=new X,Tu=new X,Au=new X,bu=new bt,Cu=new bt,Ru=new bt;class Zn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),Mi.subVectors(i,n),Eu.subVectors(e,n);const o=Wn.dot(Wn),a=Wn.dot(Mi),l=Wn.dot(Eu),c=Mi.dot(Mi),u=Mi.dot(Eu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return bu.setScalar(0),Cu.setScalar(0),Ru.setScalar(0),bu.fromBufferAttribute(e,n),Cu.fromBufferAttribute(e,i),Ru.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bu,s.x),o.addScaledVector(Cu,s.y),o.addScaledVector(Ru,s.z),o}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),Mi.subVectors(e,n),Wn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Wn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ds.subVectors(r,i),fs.subVectors(s,i),wu.subVectors(e,i);const l=ds.dot(wu),c=fs.dot(wu);if(l<=0&&c<=0)return n.copy(i);Tu.subVectors(e,r);const u=ds.dot(Tu),d=fs.dot(Tu);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ds,o);Au.subVectors(e,s);const p=ds.dot(Au),x=fs.dot(Au);if(x>=0&&p<=x)return n.copy(s);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(fs,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return Dm.subVectors(s,r),a=(d-u)/(d-u+(p-x)),n.copy(r).addScaledVector(Dm,a);const h=1/(m+g+f);return o=g*h,a=f*h,n.copy(i).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},il={h:0,s:0,l:0};function Pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=NM(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pu(o,s,e+1/3),this.g=Pu(o,s,e),this.b=Pu(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=hv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return tt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(rn(Zt.r*255,0,255))*65536+Math.round(rn(Zt.g*255,0,255))*256+Math.round(rn(Zt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=En){tt.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(il);const i=fu($i.h,il.h,n),r=fu($i.s,il.s,n),s=fu($i.l,il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ze;Ze.NAMES=hv;let KM=0;class ba extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Ta(),this.name="",this.blending=Bs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Bh,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zh&&(i.blendSrc=this.blendSrc),this.blendDst!==Bh&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pc extends ba{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new X,rl=new We;class mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_m,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)rl.fromBufferAttribute(this,n),rl.applyMatrix3(e),this.setXY(n,rl.x,rl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_m&&(e.usage=this.usage),e}}class dv extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fv extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jt extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ZM=0;const Nn=new Ct,Lu=new Xt,ps=new X,yn=new Aa,bo=new Aa,Bt=new X;class On extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?fv:dv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ff);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(yn.min,bo.min),yn.expandByPoint(Bt),Bt.addVectors(yn.max,bo.max),yn.expandByPoint(Bt)):(yn.expandByPoint(bo.min),yn.expandByPoint(bo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Bt.add(ps)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new X,l[N]=new X;const c=new X,u=new X,d=new X,f=new We,p=new We,x=new We,g=new X,m=new X;function h(N,w,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,w),x.fromBufferAttribute(s,M),u.sub(c),d.sub(c),p.sub(f),x.sub(f);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(U),a[N].add(g),a[w].add(g),a[M].add(g),l[N].add(m),l[w].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,w=v.length;N<w;++N){const M=v[N],U=M.start,$=M.count;for(let D=U,k=U+$;D<k;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new X,S=new X,T=new X,A=new X;function L(N){T.fromBufferAttribute(r,N),A.copy(T);const w=a[N];y.copy(w),y.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(A,w);const U=S.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,U)}for(let N=0,w=v.length;N<w;++N){const M=v[N],U=M.start,$=M.count;for(let D=U,k=U+$;D<k;D+=3)L(e.getX(D+0)),L(e.getX(D+1)),L(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)f[x++]=c[p++]}return new mi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Im=new Ct,wr=new cv,sl=new Ff,Um=new X,ol=new X,al=new X,ll=new X,Nu=new X,cl=new X,Fm=new X,ul=new X;class Lt extends Xt{constructor(e=new On,n=new pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Nu.fromBufferAttribute(d,e),o?cl.addScaledVector(Nu,u):cl.addScaledVector(Nu.sub(n),u))}n.add(cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(sl.containsPoint(wr.origin)===!1&&(wr.intersectSphere(sl,Um)===null||wr.origin.distanceToSquared(Um)>(e.far-e.near)**2))&&(Im.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Im),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=f.length;x<g;x++){const m=f[x],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=y;S<T;S+=3){const A=a.getX(S),L=a.getX(S+1),N=a.getX(S+2);r=hl(this,h,e,i,c,u,d,A,L,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,h=g;m<h;m+=3){const v=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=hl(this,o,e,i,c,u,d,v,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=f.length;x<g;x++){const m=f[x],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=y;S<T;S+=3){const A=S,L=S+1,N=S+2;r=hl(this,h,e,i,c,u,d,A,L,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,h=g;m<h;m+=3){const v=m,y=m+1,S=m+2;r=hl(this,o,e,i,c,u,d,v,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function QM(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mr,a),l===null)return null;ul.copy(a),ul.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ul);return c<n.near||c>n.far?null:{distance:c,point:ul.clone(),object:t}}function hl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ol),t.getVertexPosition(l,al),t.getVertexPosition(c,ll);const u=QM(t,e,n,i,ol,al,ll,Fm);if(u){const d=new X;Zn.getBarycoord(Fm,ol,al,ll,d),r&&(u.uv=Zn.getInterpolatedAttribute(r,a,l,c,d,new We)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,a,l,c,d,new We)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};Zn.getNormal(ol,al,ll,f.normal),u.face=f,u.barycoord=d}return u}class ao extends On{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function x(g,m,h,v,y,S,T,A,L,N,w){const M=S/L,U=T/N,$=S/2,D=T/2,k=A/2,j=L+1,z=N+1;let ne=0,R=0;const F=new X;for(let W=0;W<z;W++){const ie=W*U-D;for(let he=0;he<j;he++){const Be=he*M-$;F[g]=Be*v,F[m]=ie*y,F[h]=k,c.push(F.x,F.y,F.z),F[g]=0,F[m]=0,F[h]=A>0?1:-1,u.push(F.x,F.y,F.z),d.push(he/L),d.push(1-W/N),ne+=1}}for(let W=0;W<N;W++)for(let ie=0;ie<L;ie++){const he=f+ie+j*W,Be=f+ie+j*(W+1),ee=f+(ie+1)+j*(W+1),ae=f+(ie+1)+j*W;l.push(he,Be,ae),l.push(Be,ee,ae),R+=6}a.addGroup(p,R,w),p+=R,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=no(t[n]);for(const r in i)e[r]=i[r]}return e}function JM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function pv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const eE={clone:no,merge:tn};var tE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends ba{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tE,this.fragmentShader=nE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=JM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class mv extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new X,km=new We,Om=new We;class Un extends mv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,km,Om),n.subVectors(Om,km)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class iE extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new Un(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new Un(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new Un(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new Un(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new Un(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class gv extends on{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Qs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rE extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:di}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ao(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:hr});s.uniforms.tEquirect.value=n;const o=new Lt(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=di),new iE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Du=new X,sE=new X,oE=new $e;class Zi{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Du.subVectors(i,n).cross(sE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oE.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Ff,dl=new X;class kf{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],h=r[12],v=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+x,S+v).normalize(),i[3].setComponents(l-o,f-u,m-x,S-v).normalize(),i[4].setComponents(l-a,f-d,m-g,S-y).normalize(),n===Pi)i[5].setComponents(l+a,f+d,m+g,S+y).normalize();else if(n===fc)i[5].setComponents(a,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _v(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function aE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],g=d[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const g=d[p];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Hr extends On{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],x=[],g=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let y=0;y<c;y++){const S=y*d-s;x.push(S,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,S=v+c*(h+1),T=v+1+c*(h+1),A=v+1+c*h;p.push(y,S,A),p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.widthSegments,e.heightSegments)}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ME=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OE="gl_FragColor = linearToOutputTexel( gl_FragColor );",zE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,e1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,o1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ew=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ww=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Aw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:lE,alphahash_pars_fragment:cE,alphamap_fragment:uE,alphamap_pars_fragment:hE,alphatest_fragment:dE,alphatest_pars_fragment:fE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:_E,begin_vertex:vE,beginnormal_vertex:xE,bsdfs:yE,iridescence_fragment:SE,bumpmap_pars_fragment:ME,clipping_planes_fragment:EE,clipping_planes_pars_fragment:wE,clipping_planes_pars_vertex:TE,clipping_planes_vertex:AE,color_fragment:bE,color_pars_fragment:CE,color_pars_vertex:RE,color_vertex:PE,common:LE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:DE,displacementmap_pars_vertex:IE,displacementmap_vertex:UE,emissivemap_fragment:FE,emissivemap_pars_fragment:kE,colorspace_fragment:OE,colorspace_pars_fragment:zE,envmap_fragment:BE,envmap_common_pars_fragment:HE,envmap_pars_fragment:VE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:e1,envmap_vertex:jE,fog_vertex:WE,fog_pars_vertex:XE,fog_fragment:$E,fog_pars_fragment:qE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:KE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:QE,lights_pars_begin:JE,lights_toon_fragment:t1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:r1,lights_physical_fragment:s1,lights_physical_pars_fragment:o1,lights_fragment_begin:a1,lights_fragment_maps:l1,lights_fragment_end:c1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:f1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:g1,map_particle_pars_fragment:_1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:x1,morphinstance_vertex:y1,morphcolor_vertex:S1,morphnormal_vertex:M1,morphtarget_pars_vertex:E1,morphtarget_vertex:w1,normal_fragment_begin:T1,normal_fragment_maps:A1,normal_pars_fragment:b1,normal_pars_vertex:C1,normal_vertex:R1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:D1,iridescence_pars_fragment:I1,opaque_fragment:U1,packing:F1,premultiplied_alpha_fragment:k1,project_vertex:O1,dithering_fragment:z1,dithering_pars_fragment:B1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:V1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:j1,shadowmap_vertex:W1,shadowmask_pars_fragment:X1,skinbase_vertex:$1,skinning_pars_vertex:q1,skinning_vertex:Y1,skinnormal_vertex:K1,specularmap_fragment:Z1,specularmap_pars_fragment:Q1,tonemapping_fragment:J1,tonemapping_pars_fragment:ew,transmission_fragment:tw,transmission_pars_fragment:nw,uv_pars_fragment:iw,uv_pars_vertex:rw,uv_vertex:sw,worldpos_vertex:ow,background_vert:aw,background_frag:lw,backgroundCube_vert:cw,backgroundCube_frag:uw,cube_vert:hw,cube_frag:dw,depth_vert:fw,depth_frag:pw,distanceRGBA_vert:mw,distanceRGBA_frag:gw,equirect_vert:_w,equirect_frag:vw,linedashed_vert:xw,linedashed_frag:yw,meshbasic_vert:Sw,meshbasic_frag:Mw,meshlambert_vert:Ew,meshlambert_frag:ww,meshmatcap_vert:Tw,meshmatcap_frag:Aw,meshnormal_vert:bw,meshnormal_frag:Cw,meshphong_vert:Rw,meshphong_frag:Pw,meshphysical_vert:Lw,meshphysical_frag:Nw,meshtoon_vert:Dw,meshtoon_frag:Iw,points_vert:Uw,points_frag:Fw,shadow_vert:kw,shadow_frag:Ow,sprite_vert:zw,sprite_frag:Bw},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},li={basic:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:tn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:tn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:tn([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:tn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:tn([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:tn([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:tn([Me.common,Me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:tn([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};li.physical={uniforms:tn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const fl={r:0,b:0,g:0},Ar=new gi,Hw=new Ct;function Vw(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function g(v){let y=!1;const S=x(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,y){const S=x(y);S&&(S.isCubeTexture||S.mapping===Nc)?(u===void 0&&(u=new Lt(new ao(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:no(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ar.copy(y.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hw.makeRotationFromEuler(Ar)),u.material.toneMapped=tt.getTransfer(S.colorSpace)!==ft,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Lt(new Hr(2,2),new gr({name:"BackgroundMaterial",uniforms:no(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB(fl,pv(t)),i.buffers.color.setClear(fl.r,fl.g,fl.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:g,addToRenderList:m}}function Gw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,U,$,D,k){let j=!1;const z=d(D,$,U);s!==z&&(s=z,c(s.object)),j=p(M,D,$,k),j&&x(M,D,$,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(M,U,$,D),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,U,$){const D=$.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let j=k[U.id];j===void 0&&(j={},k[U.id]=j);let z=j[D];return z===void 0&&(z=f(l()),j[D]=z),z}function f(M){const U=[],$=[],D=[];for(let k=0;k<n;k++)U[k]=0,$[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:D,object:M,attributes:{},index:null}}function p(M,U,$,D){const k=s.attributes,j=U.attributes;let z=0;const ne=$.getAttributes();for(const R in ne)if(ne[R].location>=0){const W=k[R];let ie=j[R];if(ie===void 0&&(R==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),R==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),W===void 0||W.attribute!==ie||ie&&W.data!==ie.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function x(M,U,$,D){const k={},j=U.attributes;let z=0;const ne=$.getAttributes();for(const R in ne)if(ne[R].location>=0){let W=j[R];W===void 0&&(R==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),R==="instanceColor"&&M.instanceColor&&(W=M.instanceColor));const ie={};ie.attribute=W,W&&W.data&&(ie.data=W.data),k[R]=ie,z++}s.attributes=k,s.attributesNum=z,s.index=D}function g(){const M=s.newAttributes;for(let U=0,$=M.length;U<$;U++)M[U]=0}function m(M){h(M,0)}function h(M,U){const $=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;$[M]=1,D[M]===0&&(t.enableVertexAttribArray(M),D[M]=1),k[M]!==U&&(t.vertexAttribDivisor(M,U),k[M]=U)}function v(){const M=s.newAttributes,U=s.enabledAttributes;for(let $=0,D=U.length;$<D;$++)U[$]!==M[$]&&(t.disableVertexAttribArray($),U[$]=0)}function y(M,U,$,D,k,j,z){z===!0?t.vertexAttribIPointer(M,U,$,k,j):t.vertexAttribPointer(M,U,$,D,k,j)}function S(M,U,$,D){g();const k=D.attributes,j=$.getAttributes(),z=U.defaultAttributeValues;for(const ne in j){const R=j[ne];if(R.location>=0){let F=k[ne];if(F===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),F!==void 0){const W=F.normalized,ie=F.itemSize,he=e.get(F);if(he===void 0)continue;const Be=he.buffer,ee=he.type,ae=he.bytesPerElement,xe=ee===t.INT||ee===t.UNSIGNED_INT||F.gpuType===Pf;if(F.isInterleavedBufferAttribute){const me=F.data,Fe=me.stride,Oe=F.offset;if(me.isInstancedInterleavedBuffer){for(let Ve=0;Ve<R.locationSize;Ve++)h(R.location+Ve,me.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ve=0;Ve<R.locationSize;Ve++)m(R.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Ve=0;Ve<R.locationSize;Ve++)y(R.location+Ve,ie/R.locationSize,ee,W,Fe*ae,(Oe+ie/R.locationSize*Ve)*ae,xe)}else{if(F.isInstancedBufferAttribute){for(let me=0;me<R.locationSize;me++)h(R.location+me,F.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let me=0;me<R.locationSize;me++)m(R.location+me);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let me=0;me<R.locationSize;me++)y(R.location+me,ie/R.locationSize,ee,W,ie*ae,ie/R.locationSize*me*ae,xe)}}else if(z!==void 0){const W=z[ne];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(R.location,W);break;case 3:t.vertexAttrib3fv(R.location,W);break;case 4:t.vertexAttrib4fv(R.location,W);break;default:t.vertexAttrib1fv(R.location,W)}}}}v()}function T(){N();for(const M in i){const U=i[M];for(const $ in U){const D=U[$];for(const k in D)u(D[k].object),delete D[k];delete U[$]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const $ in U){const D=U[$];for(const k in D)u(D[k].object),delete D[k];delete U[$]}delete i[M.id]}function L(M){for(const U in i){const $=i[U];if($[M.id]===void 0)continue;const D=$[M.id];for(const k in D)u(D[k].object),delete D[k];delete $[M.id]}}function N(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function jw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g]*f[g];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ww(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Jn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ki&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ri&&!N)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:T,maxSamples:A}}function Xw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,y=v*4;let S=h.clippingState||null;l.value=S,S=u(x,f,y,p);for(let T=0;T!==y;++T)S[T]=n[T];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,x){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const h=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,S=p;y!==g;++y,S+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function $w(t){let e=new WeakMap;function n(o,a){return a===qh?o.mapping=Qs:a===Yh&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qh||a===Yh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vv extends mv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,zm=[.125,.215,.35,.446,.526,.582],Nr=20,Iu=new vv,Bm=new Ze;let Uu=null,Fu=0,ku=0,Ou=!1;const Pr=(1+Math.sqrt(5))/2,_s=1/Pr,Hm=[new X(-Pr,_s,0),new X(Pr,_s,0),new X(-_s,0,Pr),new X(_s,0,Pr),new X(0,Pr,-_s),new X(0,Pr,_s),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Fu,ku),this._renderer.xr.enabled=Ou,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:wa,format:Jn,colorSpace:oo,depthBuffer:!1},r=Gm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(s)),this._blurMaterial=Yw(s,e,n)}return r}_compileMaterial(e){const n=new Lt(this._lodPlanes[0],e);this._renderer.compile(n,Iu)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Bm),u.toneMapping=dr,u.autoClear=!1;const p=new pc({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),x=new Lt(new ao,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Bm),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;pl(r,v*y,h>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qs||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Iu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hm[(r-s-1)%Hm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Lt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),g=s/x,m=isFinite(s)?1+Math.floor(u*g):Nr;m>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);const h=[];let v=0;for(let L=0;L<Nr;++L){const N=L/g,w=Math.exp(-N*N/2);h.push(w),L===0?v+=w:L<m&&(v+=2*w)}for(let L=0;L<h.length;L++)h[L]=h[L]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-i;const S=this._sizeLods[r],T=3*S*(r>y-Ns?r-y+Ns:0),A=4*(this._cubeSize-S);pl(n,T,A,3*S,2*S),l.setRenderTarget(n),l.render(d,Iu)}}function qw(t){const e=[],n=[],i=[];let r=t;const s=t-Ns+1+zm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ns?l=zm[o-t+Ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,g=3,m=2,h=1,v=new Float32Array(g*x*p),y=new Float32Array(m*x*p),S=new Float32Array(h*x*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,N=A>2?0:-1,w=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];v.set(w,g*x*A),y.set(f,m*x*A);const M=[A,A,A,A,A,A];S.set(M,h*x*A)}const T=new On;T.setAttribute("position",new mi(v,g)),T.setAttribute("uv",new mi(y,m)),T.setAttribute("faceIndex",new mi(S,h)),e.push(T),r>Ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gm(t,e,n){const i=new Kr(t,e,n);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Yw(t,e,n){const i=new Float32Array(Nr),r=new X(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function jm(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Wm(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qh||l===Yh,u=l===Qs||l===Js;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Vm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Vm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Zw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Uo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Qw(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const g=f.morphAttributes[x];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const g=p[x];for(let m=0,h=g.length;m<h;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,x=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let y=0,S=v.length;y<S;y+=3){const T=v[y+0],A=v[y+1],L=v[y+2];f.push(T,A,A,L,L,T)}}else if(x!==void 0){const v=x.array;g=x.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const T=y+0,A=y+1,L=y+2;f.push(T,A,A,L,L,T)}}else return;const m=new(ov(f)?fv:dv)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Jw(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,f*o,x),n.update(p,i,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];n.update(m,i,1)}function d(f,p,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,x);let h=0;for(let v=0;v<x;v++)h+=p[v]*g[v];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tT(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let S=a.attributes.position.count*y,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*T*4*d),L=new lv(A,S,T,d);L.type=Ri,L.needsUpdate=!0;const N=y*4;for(let M=0;M<d;M++){const U=m[M],$=h[M],D=v[M],k=S*T*4*M;for(let j=0;j<U.count;j++){const z=j*N;p===!0&&(r.fromBufferAttribute(U,j),A[k+z+0]=r.x,A[k+z+1]=r.y,A[k+z+2]=r.z,A[k+z+3]=0),x===!0&&(r.fromBufferAttribute($,j),A[k+z+4]=r.x,A[k+z+5]=r.y,A[k+z+6]=r.z,A[k+z+7]=0),g===!0&&(r.fromBufferAttribute(D,j),A[k+z+8]=r.x,A[k+z+9]=r.y,A[k+z+10]=r.z,A[k+z+11]=D.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new We(S,T)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function nT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class xv extends on{constructor(e,n,i,r,s,o,a,l,c,u=Hs){if(u!==Hs&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=Yr),i===void 0&&u===to&&(i=eo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const yv=new on,Xm=new xv(1,1),Sv=new lv,Mv=new VM,Ev=new gv,$m=[],qm=[],Ym=new Float32Array(16),Km=new Float32Array(9),Zm=new Float32Array(4);function lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$m[r];if(s===void 0&&(s=new Float32Array(r),$m[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ic(t,e){let n=qm[e];n===void 0&&(n=new Int32Array(e),qm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Zm.set(i),t.uniformMatrix2fv(this.addr,!1,Zm),kt(n,i)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Km.set(i),t.uniformMatrix3fv(this.addr,!1,Km),kt(n,i)}}function cT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Ym.set(i),t.uniformMatrix4fv(this.addr,!1,Ym),kt(n,i)}}function uT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function vT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xm.compareFunction=sv,s=Xm):s=yv,n.setTexture2D(e||s,r)}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Mv,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ev,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Sv,r)}function MT(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return hT;case 35668:case 35672:return dT;case 35669:case 35673:return fT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(t,e){t.uniform1fv(this.addr,e)}function wT(t,e){const n=lo(e,this.size,2);t.uniform2fv(this.addr,n)}function TT(t,e){const n=lo(e,this.size,3);t.uniform3fv(this.addr,n)}function AT(t,e){const n=lo(e,this.size,4);t.uniform4fv(this.addr,n)}function bT(t,e){const n=lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CT(t,e){const n=lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RT(t,e){const n=lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PT(t,e){t.uniform1iv(this.addr,e)}function LT(t,e){t.uniform2iv(this.addr,e)}function NT(t,e){t.uniform3iv(this.addr,e)}function DT(t,e){t.uniform4iv(this.addr,e)}function IT(t,e){t.uniform1uiv(this.addr,e)}function UT(t,e){t.uniform2uiv(this.addr,e)}function FT(t,e){t.uniform3uiv(this.addr,e)}function kT(t,e){t.uniform4uiv(this.addr,e)}function OT(t,e,n){const i=this.cache,r=e.length,s=Ic(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||yv,s[o])}function zT(t,e,n){const i=this.cache,r=e.length,s=Ic(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Mv,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=Ic(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ev,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=Ic(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Sv,s[o])}function VT(t){switch(t){case 5126:return ET;case 35664:return wT;case 35665:return TT;case 35666:return AT;case 35674:return bT;case 35675:return CT;case 35676:return RT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return DT;case 5125:return IT;case 36294:return UT;case 36295:return FT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class GT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MT(n.type)}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VT(n.type)}}class WT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Qm(t,e){t.seq.push(e),t.map[e.id]=e}function XT(t,e,n){const i=t.name,r=i.length;for(zu.lastIndex=0;;){const s=zu.exec(i),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qm(n,c===void 0?new GT(a,t,e):new jT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new WT(a),Qm(n,d)),n=d}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);XT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Jm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $T=37297;let qT=0;function YT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const eg=new $e;function KT(t){tt._getMatrix(eg,tt.workingColorSpace,t);const e=`mat3( ${eg.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case Dc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function tg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+YT(t.getShaderSource(e),o)}else return r}function ZT(t,e){const n=KT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function QT(t,e){let n;switch(e){case pM:n="Linear";break;case mM:n="Reinhard";break;case gM:n="Cineon";break;case _M:n="ACESFilmic";break;case xM:n="AgX";break;case yM:n="Neutral";break;case vM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new X;function JT(){tt.getLuminanceCoefficients(ml);const t=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function tA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fo(t){return t!==""}function ng(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(t){return t.replace(iA,sA)}const rA=new Map;function sA(t,e){let n=qe[e];if(n===void 0){const i=rA.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Td(n)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(t){return t.replace(oA,aA)}function aA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$S?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function cA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function hA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Rf:e="ENVMAP_BLENDING_MULTIPLY";break;case dM:e="ENVMAP_BLENDING_MIX";break;case fM:e="ENVMAP_BLENDING_ADD";break}return e}function dA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=lA(n),c=cA(n),u=uA(n),d=hA(n),f=dA(n),p=eA(n),x=tA(s),g=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Fo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Fo).join(`
`),h.length>0&&(h+=`
`)):(m=[sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),h=[sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?qe.tonemapping_pars_fragment:"",n.toneMapping!==dr?QT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ZT("linearToOutputTexel",n.outputColorSpace),JT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Td(o),o=ng(o,n),o=ig(o,n),a=Td(a),a=ng(a,n),a=ig(a,n),o=rg(o),a=rg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+m+o,S=v+h+a,T=Jm(r,r.VERTEX_SHADER,y),A=Jm(r,r.FRAGMENT_SHADER,S);r.attachShader(g,T),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function L(U){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(T).trim(),k=r.getShaderInfoLog(A).trim();let j=!0,z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,T,A);else{const ne=tg(r,T,"vertex"),R=tg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+ne+`
`+R)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||k==="")&&(z=!1);z&&(U.diagnostics={runnable:j,programLog:$,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:h}})}r.deleteShader(T),r.deleteShader(A),N=new zl(r,g),w=nA(r,g)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,$T)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gA(e),n.set(e,i)),i}}class gA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function _A(t,e,n,i,r,s,o){const a=new uv,l=new mA,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,U,$,D){const k=$.fog,j=D.geometry,z=w.isMeshStandardMaterial?$.environment:null,ne=(w.isMeshStandardMaterial?n:e).get(w.envMap||z),R=ne&&ne.mapping===Nc?ne.image.height:null,F=x[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const W=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=W!==void 0?W.length:0;let he=0;j.morphAttributes.position!==void 0&&(he=1),j.morphAttributes.normal!==void 0&&(he=2),j.morphAttributes.color!==void 0&&(he=3);let Be,ee,ae,xe;if(F){const _e=li[F];Be=_e.vertexShader,ee=_e.fragmentShader}else Be=w.vertexShader,ee=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);const me=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Ve=D.isBatchedMesh===!0,Ke=!!w.map,ze=!!w.matcap,st=!!ne,B=!!w.aoMap,Z=!!w.lightMap,oe=!!w.bumpMap,de=!!w.normalMap,fe=!!w.displacementMap,ye=!!w.emissiveMap,le=!!w.metalnessMap,P=!!w.roughnessMap,E=w.anisotropy>0,H=w.clearcoat>0,te=w.dispersion>0,re=w.iridescence>0,Q=w.sheen>0,Ee=w.transmission>0,ve=E&&!!w.anisotropyMap,we=H&&!!w.clearcoatMap,je=H&&!!w.clearcoatNormalMap,ce=H&&!!w.clearcoatRoughnessMap,Te=re&&!!w.iridescenceMap,ke=re&&!!w.iridescenceThicknessMap,Ie=Q&&!!w.sheenColorMap,Ae=Q&&!!w.sheenRoughnessMap,Je=!!w.specularMap,He=!!w.specularColorMap,rt=!!w.specularIntensityMap,O=Ee&&!!w.transmissionMap,Se=Ee&&!!w.thicknessMap,J=!!w.gradientMap,se=!!w.alphaMap,be=w.alphaTest>0,C=!!w.alphaHash,I=!!w.extensions;let q=dr;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(q=t.toneMapping);const pe={shaderID:F,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:ee,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:oo,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:ze,envMap:st,envMapMode:st&&ne.mapping,envMapCubeUVHeight:R,aoMap:B,lightMap:Z,bumpMap:oe,normalMap:de,displacementMap:f&&fe,emissiveMap:ye,normalMapObjectSpace:de&&w.normalMapType===wM,normalMapTangentSpace:de&&w.normalMapType===rv,metalnessMap:le,roughnessMap:P,anisotropy:E,anisotropyMap:ve,clearcoat:H,clearcoatMap:we,clearcoatNormalMap:je,clearcoatRoughnessMap:ce,dispersion:te,iridescence:re,iridescenceMap:Te,iridescenceThicknessMap:ke,sheen:Q,sheenColorMap:Ie,sheenRoughnessMap:Ae,specularMap:Je,specularColorMap:He,specularIntensityMap:rt,transmission:Ee,transmissionMap:O,thicknessMap:Se,gradientMap:J,opaque:w.transparent===!1&&w.blending===Bs&&w.alphaToCoverage===!1,alphaMap:se,alphaTest:be,alphaHash:C,combine:w.combine,mapUv:Ke&&g(w.map.channel),aoMapUv:B&&g(w.aoMap.channel),lightMapUv:Z&&g(w.lightMap.channel),bumpMapUv:oe&&g(w.bumpMap.channel),normalMapUv:de&&g(w.normalMap.channel),displacementMapUv:fe&&g(w.displacementMap.channel),emissiveMapUv:ye&&g(w.emissiveMap.channel),metalnessMapUv:le&&g(w.metalnessMap.channel),roughnessMapUv:P&&g(w.roughnessMap.channel),anisotropyMapUv:ve&&g(w.anisotropyMap.channel),clearcoatMapUv:we&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(w.sheenRoughnessMap.channel),specularMapUv:Je&&g(w.specularMap.channel),specularColorMapUv:He&&g(w.specularColorMap.channel),specularIntensityMapUv:rt&&g(w.specularIntensityMap.channel),transmissionMapUv:O&&g(w.transmissionMap.channel),thicknessMapUv:Se&&g(w.thicknessMap.channel),alphaMapUv:se&&g(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(de||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(Ke||se),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Fe,skinning:D.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:he,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:q,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===ft,decodeVideoTextureEmissive:ye&&w.emissiveMap.isVideoTexture===!0&&tt.getTransfer(w.emissiveMap.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Kn,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:I&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)M.push(U),M.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(v(M,w),y(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const M=x[w.type];let U;if(M){const $=li[M];U=eE.clone($.uniforms)}else U=w.uniforms;return U}function T(w,M){let U;for(let $=0,D=u.length;$<D;$++){const k=u[$];if(k.cacheKey===M){U=k,++U.usedTimes;break}}return U===void 0&&(U=new fA(t,M,w,s),u.push(U)),U}function A(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function L(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:N}}function vA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function xA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function og(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ag(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,x,g,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=x,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,x,g,m){const h=o(d,f,p,x,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,x,g,m){const h=o(d,f,p,x,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||xA),i.length>1&&i.sort(f||og),r.length>1&&r.sort(f||og)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function yA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ag,t.set(i,[o])):r>=s.length?(o=new ag,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function SA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ze};break;case"SpotLight":n={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function MA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let EA=0;function wA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TA(t){const e=new SA,n=MA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new Ct,o=new Ct;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,x=0,g=0,m=0,h=0,v=0,y=0,S=0,T=0,A=0,L=0;c.sort(wA);for(let w=0,M=c.length;w<M;w++){const U=c[w],$=U.color,D=U.intensity,k=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=$.r*D,d+=$.g*D,f+=$.b*D;else if(U.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(U.sh.coefficients[z],D);L++}else if(U.isDirectionalLight){const z=e.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ne=U.shadow,R=n.get(U);R.shadowIntensity=ne.intensity,R.shadowBias=ne.bias,R.shadowNormalBias=ne.normalBias,R.shadowRadius=ne.radius,R.shadowMapSize=ne.mapSize,i.directionalShadow[p]=R,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=z,p++}else if(U.isSpotLight){const z=e.get(U);z.position.setFromMatrixPosition(U.matrixWorld),z.color.copy($).multiplyScalar(D),z.distance=k,z.coneCos=Math.cos(U.angle),z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),z.decay=U.decay,i.spot[g]=z;const ne=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,ne.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[g]=ne.matrix,U.castShadow){const R=n.get(U);R.shadowIntensity=ne.intensity,R.shadowBias=ne.bias,R.shadowNormalBias=ne.normalBias,R.shadowRadius=ne.radius,R.shadowMapSize=ne.mapSize,i.spotShadow[g]=R,i.spotShadowMap[g]=j,S++}g++}else if(U.isRectAreaLight){const z=e.get(U);z.color.copy($).multiplyScalar(D),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=z,m++}else if(U.isPointLight){const z=e.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),z.distance=U.distance,z.decay=U.decay,U.castShadow){const ne=U.shadow,R=n.get(U);R.shadowIntensity=ne.intensity,R.shadowBias=ne.bias,R.shadowNormalBias=ne.normalBias,R.shadowRadius=ne.radius,R.shadowMapSize=ne.mapSize,R.shadowCameraNear=ne.camera.near,R.shadowCameraFar=ne.camera.far,i.pointShadow[x]=R,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=U.shadow.matrix,y++}i.point[x]=z,x++}else if(U.isHemisphereLight){const z=e.get(U);z.skyColor.copy(U.color).multiplyScalar(D),z.groundColor.copy(U.groundColor).multiplyScalar(D),i.hemi[h]=z,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==x||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==S||N.numSpotMaps!==T||N.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,N.directionalLength=p,N.pointLength=x,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=S,N.numSpotMaps=T,N.numLightProbes=L,i.version=EA++)}function l(c,u){let d=0,f=0,p=0,x=0,g=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const y=c[h];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function lg(t){const e=new TA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new lg(t),e.set(r,[a])):s>=o.length?(a=new lg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class bA extends ba{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=MM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CA extends ba{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LA(t,e,n){let i=new kf;const r=new We,s=new We,o=new bt,a=new bA({depthPacking:EM}),l=new CA,c={},u=n.maxTextureSize,d={[mr]:_n,[_n]:mr,[Kn]:Kn},f=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:RA,fragmentShader:PA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new On;x.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Lt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X_;let h=this.type;this.render=function(A,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),$=t.state;$.setBlending(hr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const D=h!==wi&&this.type===wi,k=h===wi&&this.type!==wi;for(let j=0,z=A.length;j<z;j++){const ne=A[j],R=ne.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const F=R.getFrameExtents();if(r.multiply(F),s.copy(R.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,R.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,R.mapSize.y=s.y)),R.map===null||D===!0||k===!0){const ie=this.type!==wi?{minFilter:ni,magFilter:ni}:{};R.map!==null&&R.map.dispose(),R.map=new Kr(r.x,r.y,ie),R.map.texture.name=ne.name+".shadowMap",R.camera.updateProjectionMatrix()}t.setRenderTarget(R.map),t.clear();const W=R.getViewportCount();for(let ie=0;ie<W;ie++){const he=R.getViewport(ie);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),$.viewport(o),R.updateMatrices(ne,ie),i=R.getFrustum(),S(L,N,R.camera,ne,this.type)}R.isPointLightShadow!==!0&&this.type===wi&&v(R,N),R.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,U)};function v(A,L){const N=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(L,null,N,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(L,null,N,p,g,null)}function y(A,L,N,w){let M=null;const U=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)M=U;else if(M=N.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const $=M.uuid,D=L.uuid;let k=c[$];k===void 0&&(k={},c[$]=k);let j=k[D];j===void 0&&(j=M.clone(),k[D]=j,L.addEventListener("dispose",T)),M=j}if(M.visible=L.visible,M.wireframe=L.wireframe,w===wi?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const $=t.properties.get(M);$.light=N}return M}function S(A,L,N,w,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===wi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const D=e.update(A),k=A.material;if(Array.isArray(k)){const j=D.groups;for(let z=0,ne=j.length;z<ne;z++){const R=j[z],F=k[R.materialIndex];if(F&&F.visible){const W=y(A,F,w,M);A.onBeforeShadow(t,A,L,N,D,W,R),t.renderBufferDirect(N,null,D,W,A,R),A.onAfterShadow(t,A,L,N,D,W,R)}}}else if(k.visible){const j=y(A,k,w,M);A.onBeforeShadow(t,A,L,N,D,j,null),t.renderBufferDirect(N,null,D,j,A,null),A.onAfterShadow(t,A,L,N,D,j,null)}}const $=A.children;for(let D=0,k=$.length;D<k;D++)S($[D],L,N,w,M)}function T(A){A.target.removeEventListener("dispose",T);for(const N in c){const w=c[N],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const NA={[Hh]:Vh,[Gh]:Xh,[jh]:$h,[Zs]:Wh,[Vh]:Hh,[Xh]:Gh,[$h]:jh,[Wh]:Zs};function DA(t,e){function n(){let O=!1;const Se=new bt;let J=null;const se=new bt(0,0,0,0);return{setMask:function(be){J!==be&&!O&&(t.colorMask(be,be,be,be),J=be)},setLocked:function(be){O=be},setClear:function(be,C,I,q,pe){pe===!0&&(be*=q,C*=q,I*=q),Se.set(be,C,I,q),se.equals(Se)===!1&&(t.clearColor(be,C,I,q),se.copy(Se))},reset:function(){O=!1,J=null,se.set(-1,0,0,0)}}}function i(){let O=!1,Se=!1,J=null,se=null,be=null;return{setReversed:function(C){if(Se!==C){const I=e.get("EXT_clip_control");Se?I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT):I.clipControlEXT(I.LOWER_LEFT_EXT,I.NEGATIVE_ONE_TO_ONE_EXT);const q=be;be=null,this.setClear(q)}Se=C},getReversed:function(){return Se},setTest:function(C){C?me(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(C){J!==C&&!O&&(t.depthMask(C),J=C)},setFunc:function(C){if(Se&&(C=NA[C]),se!==C){switch(C){case Hh:t.depthFunc(t.NEVER);break;case Vh:t.depthFunc(t.ALWAYS);break;case Gh:t.depthFunc(t.LESS);break;case Zs:t.depthFunc(t.LEQUAL);break;case jh:t.depthFunc(t.EQUAL);break;case Wh:t.depthFunc(t.GEQUAL);break;case Xh:t.depthFunc(t.GREATER);break;case $h:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=C}},setLocked:function(C){O=C},setClear:function(C){be!==C&&(Se&&(C=1-C),t.clearDepth(C),be=C)},reset:function(){O=!1,J=null,se=null,be=null,Se=!1}}}function r(){let O=!1,Se=null,J=null,se=null,be=null,C=null,I=null,q=null,pe=null;return{setTest:function(_e){O||(_e?me(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(_e){Se!==_e&&!O&&(t.stencilMask(_e),Se=_e)},setFunc:function(_e,et,ut){(J!==_e||se!==et||be!==ut)&&(t.stencilFunc(_e,et,ut),J=_e,se=et,be=ut)},setOp:function(_e,et,ut){(C!==_e||I!==et||q!==ut)&&(t.stencilOp(_e,et,ut),C=_e,I=et,q=ut)},setLocked:function(_e){O=_e},setClear:function(_e){pe!==_e&&(t.clearStencil(_e),pe=_e)},reset:function(){O=!1,Se=null,J=null,se=null,be=null,C=null,I=null,q=null,pe=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,h=null,v=null,y=null,S=null,T=null,A=null,L=new Ze(0,0,0),N=0,w=!1,M=null,U=null,$=null,D=null,k=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const R=t.getParameter(t.VERSION);R.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(R)[1]),z=ne>=1):R.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),z=ne>=2);let F=null,W={};const ie=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),Be=new bt().fromArray(ie),ee=new bt().fromArray(he);function ae(O,Se,J,se){const be=new Uint8Array(4),C=t.createTexture();t.bindTexture(O,C),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let I=0;I<J;I++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(Se+I,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return C}const xe={};xe[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(t.DEPTH_TEST),o.setFunc(Zs),oe(!1),de(dm),me(t.CULL_FACE),B(hr);function me(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function Fe(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function Oe(O,Se){return d[O]!==Se?(t.bindFramebuffer(O,Se),d[O]=Se,O===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Se),O===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ve(O,Se){let J=p,se=!1;if(O){J=f.get(Se),J===void 0&&(J=[],f.set(Se,J));const be=O.textures;if(J.length!==be.length||J[0]!==t.COLOR_ATTACHMENT0){for(let C=0,I=be.length;C<I;C++)J[C]=t.COLOR_ATTACHMENT0+C;J.length=be.length,se=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,se=!0);se&&t.drawBuffers(J)}function Ke(O){return x!==O?(t.useProgram(O),x=O,!0):!1}const ze={[Lr]:t.FUNC_ADD,[YS]:t.FUNC_SUBTRACT,[KS]:t.FUNC_REVERSE_SUBTRACT};ze[ZS]=t.MIN,ze[QS]=t.MAX;const st={[JS]:t.ZERO,[eM]:t.ONE,[tM]:t.SRC_COLOR,[zh]:t.SRC_ALPHA,[aM]:t.SRC_ALPHA_SATURATE,[sM]:t.DST_COLOR,[iM]:t.DST_ALPHA,[nM]:t.ONE_MINUS_SRC_COLOR,[Bh]:t.ONE_MINUS_SRC_ALPHA,[oM]:t.ONE_MINUS_DST_COLOR,[rM]:t.ONE_MINUS_DST_ALPHA,[lM]:t.CONSTANT_COLOR,[cM]:t.ONE_MINUS_CONSTANT_COLOR,[uM]:t.CONSTANT_ALPHA,[hM]:t.ONE_MINUS_CONSTANT_ALPHA};function B(O,Se,J,se,be,C,I,q,pe,_e){if(O===hr){g===!0&&(Fe(t.BLEND),g=!1);return}if(g===!1&&(me(t.BLEND),g=!0),O!==qS){if(O!==m||_e!==w){if((h!==Lr||S!==Lr)&&(t.blendEquation(t.FUNC_ADD),h=Lr,S=Lr),_e)switch(O){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.ONE,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,T=null,A=null,L.set(0,0,0),N=0,m=O,w=_e}return}be=be||Se,C=C||J,I=I||se,(Se!==h||be!==S)&&(t.blendEquationSeparate(ze[Se],ze[be]),h=Se,S=be),(J!==v||se!==y||C!==T||I!==A)&&(t.blendFuncSeparate(st[J],st[se],st[C],st[I]),v=J,y=se,T=C,A=I),(q.equals(L)===!1||pe!==N)&&(t.blendColor(q.r,q.g,q.b,pe),L.copy(q),N=pe),m=O,w=!1}function Z(O,Se){O.side===Kn?Fe(t.CULL_FACE):me(t.CULL_FACE);let J=O.side===_n;Se&&(J=!J),oe(J),O.blending===Bs&&O.transparent===!1?B(hr):B(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const se=O.stencilWrite;a.setTest(se),se&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ye(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function oe(O){M!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),M=O)}function de(O){O!==WS?(me(t.CULL_FACE),O!==U&&(O===dm?t.cullFace(t.BACK):O===XS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),U=O}function fe(O){O!==$&&(z&&t.lineWidth(O),$=O)}function ye(O,Se,J){O?(me(t.POLYGON_OFFSET_FILL),(D!==Se||k!==J)&&(t.polygonOffset(Se,J),D=Se,k=J)):Fe(t.POLYGON_OFFSET_FILL)}function le(O){O?me(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function P(O){O===void 0&&(O=t.TEXTURE0+j-1),F!==O&&(t.activeTexture(O),F=O)}function E(O,Se,J){J===void 0&&(F===null?J=t.TEXTURE0+j-1:J=F);let se=W[J];se===void 0&&(se={type:void 0,texture:void 0},W[J]=se),(se.type!==O||se.texture!==Se)&&(F!==J&&(t.activeTexture(J),F=J),t.bindTexture(O,Se||xe[O]),se.type=O,se.texture=Se)}function H(){const O=W[F];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(O){Be.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Be.copy(O))}function Ae(O){ee.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Je(O,Se){let J=c.get(Se);J===void 0&&(J=new WeakMap,c.set(Se,J));let se=J.get(O);se===void 0&&(se=t.getUniformBlockIndex(Se,O.name),J.set(O,se))}function He(O,Se){const se=c.get(Se).get(O);l.get(Se)!==se&&(t.uniformBlockBinding(Se,se,O.__bindingPointIndex),l.set(Se,se))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},F=null,W={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,h=null,v=null,y=null,S=null,T=null,A=null,L=new Ze(0,0,0),N=0,w=!1,M=null,U=null,$=null,D=null,k=null,Be.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:Fe,bindFramebuffer:Oe,drawBuffers:Ve,useProgram:Ke,setBlending:B,setMaterial:Z,setFlipSided:oe,setCullFace:de,setLineWidth:fe,setPolygonOffset:ye,setScissorTest:le,activeTexture:P,bindTexture:E,unbindTexture:H,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:Te,texImage3D:ke,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:je,texStorage3D:ce,texSubImage2D:Q,texSubImage3D:Ee,compressedTexSubImage2D:ve,compressedTexSubImage3D:we,scissor:Ie,viewport:Ae,reset:rt}}function cg(t,e,n,i){const r=IA(i);switch(n){case Z_:return t*e;case J_:return t*e;case ev:return t*e*2;case tv:return t*e/r.components*r.byteLength;case Df:return t*e/r.components*r.byteLength;case nv:return t*e*2/r.components*r.byteLength;case If:return t*e*2/r.components*r.byteLength;case Q_:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case Uf:return t*e*4/r.components*r.byteLength;case Dl:case Il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jh:case td:return Math.max(t,16)*Math.max(e,8)/4;case Qh:case ed:return Math.max(t,8)*Math.max(e,8)/2;case nd:case id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kl:case xd:case yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case iv:case Sd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Md:case Ed:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IA(t){switch(t){case ki:case q_:return{byteLength:1,components:1};case pa:case Y_:case wa:return{byteLength:2,components:1};case Lf:case Nf:return{byteLength:2,components:4};case Yr:case Pf:case Ri:return{byteLength:4,components:1};case K_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function UA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,E){return p?new OffscreenCanvas(P,E):ma("canvas")}function g(P,E,H){let te=1;const re=le(P);if((re.width>H||re.height>H)&&(te=H/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(te*re.width),Ee=Math.floor(te*re.height);d===void 0&&(d=x(Q,Ee));const ve=E?x(Q,Ee):d;return ve.width=Q,ve.height=Ee,ve.getContext("2d").drawImage(P,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Q+"x"+Ee+")."),ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function m(P){return P.generateMipmaps}function h(P){t.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,E,H,te,re=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=E;if(E===t.RED&&(H===t.FLOAT&&(Q=t.R32F),H===t.HALF_FLOAT&&(Q=t.R16F),H===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.R8UI),H===t.UNSIGNED_SHORT&&(Q=t.R16UI),H===t.UNSIGNED_INT&&(Q=t.R32UI),H===t.BYTE&&(Q=t.R8I),H===t.SHORT&&(Q=t.R16I),H===t.INT&&(Q=t.R32I)),E===t.RG&&(H===t.FLOAT&&(Q=t.RG32F),H===t.HALF_FLOAT&&(Q=t.RG16F),H===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RG8UI),H===t.UNSIGNED_SHORT&&(Q=t.RG16UI),H===t.UNSIGNED_INT&&(Q=t.RG32UI),H===t.BYTE&&(Q=t.RG8I),H===t.SHORT&&(Q=t.RG16I),H===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),H===t.UNSIGNED_INT&&(Q=t.RGB32UI),H===t.BYTE&&(Q=t.RGB8I),H===t.SHORT&&(Q=t.RGB16I),H===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),H===t.UNSIGNED_INT&&(Q=t.RGBA32UI),H===t.BYTE&&(Q=t.RGBA8I),H===t.SHORT&&(Q=t.RGBA16I),H===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){const Ee=re?Dc:tt.getTransfer(te);H===t.FLOAT&&(Q=t.RGBA32F),H===t.HALF_FLOAT&&(Q=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Q=Ee===ft?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(P,E){let H;return P?E===null||E===Yr||E===eo?H=t.DEPTH24_STENCIL8:E===Ri?H=t.DEPTH32F_STENCIL8:E===pa&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===eo?H=t.DEPTH_COMPONENT24:E===Ri?H=t.DEPTH_COMPONENT32F:E===pa&&(H=t.DEPTH_COMPONENT16),H}function T(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ni&&P.minFilter!==di?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){const E=P.target;E.removeEventListener("dispose",A),N(E),E.isVideoTexture&&u.delete(E)}function L(P){const E=P.target;E.removeEventListener("dispose",L),M(E)}function N(P){const E=i.get(P);if(E.__webglInit===void 0)return;const H=P.source,te=f.get(H);if(te){const re=te[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(P),Object.keys(te).length===0&&f.delete(H)}i.remove(P)}function w(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const H=P.source,te=f.get(H);delete te[E.__cacheKey],o.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let re=0;re<E.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[te][re]);else t.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)t.deleteFramebuffer(E.__webglFramebuffer[te]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=P.textures;for(let te=0,re=H.length;te<re;te++){const Q=i.get(H[te]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(H[te])}i.remove(P)}let U=0;function $(){U=0}function D(){const P=U;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),U+=1,P}function k(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function j(P,E){const H=i.get(P);if(P.isVideoTexture&&fe(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(H,P,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function z(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ee(H,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function ne(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ee(H,P,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function R(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ae(H,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const F={[Kh]:t.REPEAT,[Fr]:t.CLAMP_TO_EDGE,[Zh]:t.MIRRORED_REPEAT},W={[ni]:t.NEAREST,[SM]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[di]:t.LINEAR,[du]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},ie={[TM]:t.NEVER,[LM]:t.ALWAYS,[AM]:t.LESS,[sv]:t.LEQUAL,[bM]:t.EQUAL,[PM]:t.GEQUAL,[CM]:t.GREATER,[RM]:t.NOTEQUAL};function he(P,E){if(E.type===Ri&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===di||E.magFilter===du||E.magFilter===Ya||E.magFilter===kr||E.minFilter===di||E.minFilter===du||E.minFilter===Ya||E.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,F[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,F[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,F[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,W[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ni||E.minFilter!==Ya&&E.minFilter!==kr||E.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Be(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const te=E.source;let re=f.get(te);re===void 0&&(re={},f.set(te,re));const Q=k(E);if(Q!==P.__cacheKey){re[Q]===void 0&&(re[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[Q].usedTimes++;const Ee=re[P.__cacheKey];Ee!==void 0&&(re[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(E)),P.__cacheKey=Q,P.__webglTexture=re[Q].texture}return H}function ee(P,E,H){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const re=Be(P,E),Q=E.source;n.bindTexture(te,P.__webglTexture,t.TEXTURE0+H);const Ee=i.get(Q);if(Q.version!==Ee.__version||re===!0){n.activeTexture(t.TEXTURE0+H);const ve=tt.getPrimaries(tt.workingColorSpace),we=E.colorSpace===er?null:tt.getPrimaries(E.colorSpace),je=E.colorSpace===er||ve===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ce=g(E.image,!1,r.maxTextureSize);ce=ye(E,ce);const Te=s.convert(E.format,E.colorSpace),ke=s.convert(E.type);let Ie=y(E.internalFormat,Te,ke,E.colorSpace,E.isVideoTexture);he(te,E);let Ae;const Je=E.mipmaps,He=E.isVideoTexture!==!0,rt=Ee.__version===void 0||re===!0,O=Q.dataReady,Se=T(E,ce);if(E.isDepthTexture)Ie=S(E.format===to,E.type),rt&&(He?n.texStorage2D(t.TEXTURE_2D,1,Ie,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ce.width,ce.height,0,Te,ke,null));else if(E.isDataTexture)if(Je.length>0){He&&rt&&n.texStorage2D(t.TEXTURE_2D,Se,Ie,Je[0].width,Je[0].height);for(let J=0,se=Je.length;J<se;J++)Ae=Je[J],He?O&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Te,ke,Ae.data):n.texImage2D(t.TEXTURE_2D,J,Ie,Ae.width,Ae.height,0,Te,ke,Ae.data);E.generateMipmaps=!1}else He?(rt&&n.texStorage2D(t.TEXTURE_2D,Se,Ie,ce.width,ce.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Te,ke,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ce.width,ce.height,0,Te,ke,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ie,Je[0].width,Je[0].height,ce.depth);for(let J=0,se=Je.length;J<se;J++)if(Ae=Je[J],E.format!==Jn)if(Te!==null)if(He){if(O)if(E.layerUpdates.size>0){const be=cg(Ae.width,Ae.height,E.format,E.type);for(const C of E.layerUpdates){const I=Ae.data.subarray(C*be/Ae.data.BYTES_PER_ELEMENT,(C+1)*be/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,C,Ae.width,Ae.height,1,Te,I)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,ce.depth,Te,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,Ie,Ae.width,Ae.height,ce.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,ce.depth,Te,ke,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,Ie,Ae.width,Ae.height,ce.depth,0,Te,ke,Ae.data)}else{He&&rt&&n.texStorage2D(t.TEXTURE_2D,Se,Ie,Je[0].width,Je[0].height);for(let J=0,se=Je.length;J<se;J++)Ae=Je[J],E.format!==Jn?Te!==null?He?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Te,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,J,Ie,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?O&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Te,ke,Ae.data):n.texImage2D(t.TEXTURE_2D,J,Ie,Ae.width,Ae.height,0,Te,ke,Ae.data)}else if(E.isDataArrayTexture)if(He){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ie,ce.width,ce.height,ce.depth),O)if(E.layerUpdates.size>0){const J=cg(ce.width,ce.height,E.format,E.type);for(const se of E.layerUpdates){const be=ce.data.subarray(se*J/ce.data.BYTES_PER_ELEMENT,(se+1)*J/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,ce.width,ce.height,1,Te,ke,be)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,ke,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ce.width,ce.height,ce.depth,0,Te,ke,ce.data);else if(E.isData3DTexture)He?(rt&&n.texStorage3D(t.TEXTURE_3D,Se,Ie,ce.width,ce.height,ce.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,ke,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ce.width,ce.height,ce.depth,0,Te,ke,ce.data);else if(E.isFramebufferTexture){if(rt)if(He)n.texStorage2D(t.TEXTURE_2D,Se,Ie,ce.width,ce.height);else{let J=ce.width,se=ce.height;for(let be=0;be<Se;be++)n.texImage2D(t.TEXTURE_2D,be,Ie,J,se,0,Te,ke,null),J>>=1,se>>=1}}else if(Je.length>0){if(He&&rt){const J=le(Je[0]);n.texStorage2D(t.TEXTURE_2D,Se,Ie,J.width,J.height)}for(let J=0,se=Je.length;J<se;J++)Ae=Je[J],He?O&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Te,ke,Ae):n.texImage2D(t.TEXTURE_2D,J,Ie,Te,ke,Ae);E.generateMipmaps=!1}else if(He){if(rt){const J=le(ce);n.texStorage2D(t.TEXTURE_2D,Se,Ie,J.width,J.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,ke,ce)}else n.texImage2D(t.TEXTURE_2D,0,Ie,Te,ke,ce);m(E)&&h(te),Ee.__version=Q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ae(P,E,H){if(E.image.length!==6)return;const te=Be(P,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const Q=i.get(re);if(re.version!==Q.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const Ee=tt.getPrimaries(tt.workingColorSpace),ve=E.colorSpace===er?null:tt.getPrimaries(E.colorSpace),we=E.colorSpace===er||Ee===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,ce=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let se=0;se<6;se++)!je&&!ce?Te[se]=g(E.image[se],!0,r.maxCubemapSize):Te[se]=ce?E.image[se].image:E.image[se],Te[se]=ye(E,Te[se]);const ke=Te[0],Ie=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),Je=y(E.internalFormat,Ie,Ae,E.colorSpace),He=E.isVideoTexture!==!0,rt=Q.__version===void 0||te===!0,O=re.dataReady;let Se=T(E,ke);he(t.TEXTURE_CUBE_MAP,E);let J;if(je){He&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Je,ke.width,ke.height);for(let se=0;se<6;se++){J=Te[se].mipmaps;for(let be=0;be<J.length;be++){const C=J[be];E.format!==Jn?Ie!==null?He?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,C.width,C.height,Ie,C.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,Je,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,C.width,C.height,Ie,Ae,C.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,Je,C.width,C.height,0,Ie,Ae,C.data)}}}else{if(J=E.mipmaps,He&&rt){J.length>0&&Se++;const se=le(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,Je,se.width,se.height)}for(let se=0;se<6;se++)if(ce){He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te[se].width,Te[se].height,Ie,Ae,Te[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Te[se].width,Te[se].height,0,Ie,Ae,Te[se].data);for(let be=0;be<J.length;be++){const I=J[be].image[se].image;He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,I.width,I.height,Ie,Ae,I.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,Je,I.width,I.height,0,Ie,Ae,I.data)}}else{He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie,Ae,Te[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Ie,Ae,Te[se]);for(let be=0;be<J.length;be++){const C=J[be];He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,Ie,Ae,C.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,Je,Ie,Ae,C.image[se])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),Q.__version=re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function xe(P,E,H,te,re,Q){const Ee=s.convert(H.format,H.colorSpace),ve=s.convert(H.type),we=y(H.internalFormat,Ee,ve,H.colorSpace),je=i.get(E),ce=i.get(H);if(ce.__renderTarget=E,!je.__hasExternalTextures){const Te=Math.max(1,E.width>>Q),ke=Math.max(1,E.height>>Q);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,Q,we,Te,ke,E.depth,0,Ee,ve,null):n.texImage2D(re,Q,we,Te,ke,0,Ee,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,ce.__webglTexture,0,oe(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,ce.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(P,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const te=E.depthTexture,re=te&&te.isDepthTexture?te.type:null,Q=S(E.stencilBuffer,re),Ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=oe(E);de(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Q,E.width,E.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,P)}else{const te=E.textures;for(let re=0;re<te.length;re++){const Q=te[re],Ee=s.convert(Q.format,Q.colorSpace),ve=s.convert(Q.type),we=y(Q.internalFormat,Ee,ve,Q.colorSpace),je=oe(E);H&&de(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,we,E.width,E.height):de(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,we,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,we,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Fe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(E.depthTexture);te.__renderTarget=E,(!te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const re=te.__webglTexture,Q=oe(E);if(E.depthTexture.format===Hs)de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===to)de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const E=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const te=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=te}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Fe(E.__webglFramebuffer,P)}else if(H){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=t.createRenderbuffer(),me(E.__webglDepthbuffer[te],P,!1);else{const re=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),me(E.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(P,E,H){const te=i.get(P);E!==void 0&&xe(te.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Oe(P)}function Ke(P){const E=P.texture,H=i.get(P),te=i.get(E);P.addEventListener("dispose",L);const re=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ee=re.length>1;if(Ee||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,o.memory.textures++),Q){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let we=0;we<E.mipmaps.length;we++)H.__webglFramebuffer[ve][we]=t.createFramebuffer()}else H.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)H.__webglFramebuffer[ve]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ve=0,we=re.length;ve<we;ve++){const je=i.get(re[ve]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&de(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<re.length;ve++){const we=re[ve];H.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);const je=s.convert(we.format,we.colorSpace),ce=s.convert(we.type),Te=y(we.internalFormat,je,ce,we.colorSpace,P.isXRRenderTarget===!0),ke=oe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Te,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),me(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),he(t.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)xe(H.__webglFramebuffer[ve][we],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else xe(H.__webglFramebuffer[ve],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ve=0,we=re.length;ve<we;ve++){const je=re[ve],ce=i.get(je);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),he(t.TEXTURE_2D,je),xe(H.__webglFramebuffer,P,je,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),m(je)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,te.__webglTexture),he(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)xe(H.__webglFramebuffer[we],P,E,t.COLOR_ATTACHMENT0,ve,we);else xe(H.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,ve,0);m(E)&&h(ve),n.unbindTexture()}P.depthBuffer&&Oe(P)}function ze(P){const E=P.textures;for(let H=0,te=E.length;H<te;H++){const re=E[H];if(m(re)){const Q=v(P),Ee=i.get(re).__webglTexture;n.bindTexture(Q,Ee),h(Q),n.unbindTexture()}}}const st=[],B=[];function Z(P){if(P.samples>0){if(de(P)===!1){const E=P.textures,H=P.width,te=P.height;let re=t.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(P),ve=E.length>1;if(ve)for(let we=0;we<E.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let we=0;we<E.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[we]);const je=i.get(E[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,re,t.NEAREST),l===!0&&(st.length=0,B.length=0,st.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(st.push(Q),B.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,B)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<E.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[we]);const je=i.get(E[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function oe(P){return Math.min(r.maxSamples,P.samples)}function de(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function ye(P,E){const H=P.colorSpace,te=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==oo&&H!==er&&(tt.getTransfer(H)===ft?(te!==Jn||re!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=ne,this.setTextureCube=R,this.rebindTextures=Ve,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=de}function FA(t,e){function n(i,r=er){let s;const o=tt.getTransfer(r);if(i===ki)return t.UNSIGNED_BYTE;if(i===Lf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===K_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===q_)return t.BYTE;if(i===Y_)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===Pf)return t.INT;if(i===Yr)return t.UNSIGNED_INT;if(i===Ri)return t.FLOAT;if(i===wa)return t.HALF_FLOAT;if(i===Z_)return t.ALPHA;if(i===Q_)return t.RGB;if(i===Jn)return t.RGBA;if(i===J_)return t.LUMINANCE;if(i===ev)return t.LUMINANCE_ALPHA;if(i===Hs)return t.DEPTH_COMPONENT;if(i===to)return t.DEPTH_STENCIL;if(i===tv)return t.RED;if(i===Df)return t.RED_INTEGER;if(i===nv)return t.RG;if(i===If)return t.RG_INTEGER;if(i===Uf)return t.RGBA_INTEGER;if(i===Dl||i===Il||i===Ul||i===Fl)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qh||i===Jh||i===ed||i===td)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ed)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nd||i===id||i===rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nd||i===id)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===hd||i===dd||i===fd||i===pd||i===md||i===gd||i===_d||i===vd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===od)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ad)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ld)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ud)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===md)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_d)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vd)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===xd||i===yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kl)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iv||i===Sd||i===Md||i===Ed)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Md)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ed)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class kA extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qn extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OA={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gr({vertexShader:zA,fragmentShader:BA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Lt(new Hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends es{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,x=null;const g=new HA,m=n.getContextAttributes();let h=null,v=null;const y=[],S=[],T=new We;let A=null;const L=new Un;L.viewport=new bt;const N=new Un;N.viewport=new bt;const w=[L,N],M=new kA;let U=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=y[ee];return ae===void 0&&(ae=new Bu,y[ee]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=y[ee];return ae===void 0&&(ae=new Bu,y[ee]=ae),ae.getGripSpace()},this.getHand=function(ee){let ae=y[ee];return ae===void 0&&(ae=new Bu,y[ee]=ae),ae.getHandSpace()};function D(ee){const ae=S.indexOf(ee.inputSource);if(ae===-1)return;const xe=y[ae];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,c||o),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function k(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",j);for(let ee=0;ee<y.length;ee++){const ae=S[ee];ae!==null&&(S[ee]=null,y[ee].disconnect(ae))}U=null,$=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",k),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Kr(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,xe=null,me=null;m.depth&&(me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=m.stencil?to:Hs,xe=m.stencil?eo:Yr);const Fe={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Kr(f.textureWidth,f.textureHeight,{format:Jn,type:ki,depthTexture:new xv(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(ee){for(let ae=0;ae<ee.removed.length;ae++){const xe=ee.removed[ae],me=S.indexOf(xe);me>=0&&(S[me]=null,y[me].disconnect(xe))}for(let ae=0;ae<ee.added.length;ae++){const xe=ee.added[ae];let me=S.indexOf(xe);if(me===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=S.length){S.push(xe),me=Oe;break}else if(S[Oe]===null){S[Oe]=xe,me=Oe;break}if(me===-1)break}const Fe=y[me];Fe&&Fe.connect(xe)}}const z=new X,ne=new X;function R(ee,ae,xe){z.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(xe.matrixWorld);const me=z.distanceTo(ne),Fe=ae.projectionMatrix.elements,Oe=xe.projectionMatrix.elements,Ve=Fe[14]/(Fe[10]-1),Ke=Fe[14]/(Fe[10]+1),ze=(Fe[9]+1)/Fe[5],st=(Fe[9]-1)/Fe[5],B=(Fe[8]-1)/Fe[0],Z=(Oe[8]+1)/Oe[0],oe=Ve*B,de=Ve*Z,fe=me/(-B+Z),ye=fe*-B;if(ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ye),ee.translateZ(fe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Fe[10]===-1)ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const le=Ve+fe,P=Ke+fe,E=oe-ye,H=de+(me-ye),te=ze*Ke/P*le,re=st*Ke/P*le;ee.projectionMatrix.makePerspective(E,H,te,re,le,P),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function F(ee,ae){ae===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ae=ee.near,xe=ee.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),M.near=N.near=L.near=ae,M.far=N.far=L.far=xe,(U!==M.near||$!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,$=M.far),L.layers.mask=ee.layers.mask|2,N.layers.mask=ee.layers.mask|4,M.layers.mask=L.layers.mask|N.layers.mask;const me=ee.parent,Fe=M.cameras;F(M,me);for(let Oe=0;Oe<Fe.length;Oe++)F(Fe[Oe],me);Fe.length===2?R(M,L,N):M.projectionMatrix.copy(L.projectionMatrix),W(ee,M,me)};function W(ee,ae,xe){xe===null?ee.matrix.copy(ae.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=wd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let ie=null;function he(ee,ae){if(u=ae.getViewerPose(c||o),x=ae,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let me=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let Oe=0;Oe<xe.length;Oe++){const Ve=xe[Oe];let Ke=null;if(p!==null)Ke=p.getViewport(Ve);else{const st=d.getViewSubImage(f,Ve);Ke=st.viewport,Oe===0&&(e.setRenderTargetTextures(v,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(v))}let ze=w[Oe];ze===void 0&&(ze=new Un,ze.layers.enable(Oe),ze.viewport=new bt,w[Oe]=ze),ze.matrix.fromArray(Ve.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ve.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Oe===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(ze)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Oe=d.getDepthInformation(xe[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(e,Oe,r.renderState)}}for(let xe=0;xe<y.length;xe++){const me=S[xe],Fe=y[xe];me!==null&&Fe!==void 0&&Fe.update(me,ae,c||o)}ie&&ie(ee,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const Be=new _v;Be.setAnimationLoop(he),this.setAnimationLoop=function(ee){ie=ee},this.dispose=function(){}}}const br=new gi,GA=new Ct;function jA(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,pv(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===_n&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===_n&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,S=v.envMapRotation;y&&(m.envMap.value=y,br.copy(S),br.x*=-1,br.y*=-1,br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(br)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=r[v.id];S===void 0&&(x(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(v,T);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function u(v){const y=d();v.__bindingPointIndex=y;const S=t.createBuffer(),T=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],S=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,L=S.length;A<L;A++){const N=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,M=N.length;w<M;w++){const U=N[w];if(p(U,A,w,T)===!0){const $=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let j=0;j<D.length;j++){const z=D[j],ne=g(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,$+k,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,k),k+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,y,S,T){const A=v.value,L=y+"_"+S;if(T[L]===void 0)return typeof A=="number"||typeof A=="boolean"?T[L]=A:T[L]=A.clone(),!0;{const N=T[L];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return T[L]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function x(v){const y=v.uniforms;let S=0;const T=16;for(let L=0,N=y.length;L<N;L++){const w=Array.isArray(y[L])?y[L]:[y[L]];for(let M=0,U=w.length;M<U;M++){const $=w[M],D=Array.isArray($.value)?$.value:[$.value];for(let k=0,j=D.length;k<j;k++){const z=D[k],ne=g(z),R=S%T,F=R%ne.boundary,W=R+F;S+=F,W!==0&&T-W<ne.storage&&(S+=T-W),$.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=ne.storage}}}const A=S%T;return A>0&&(S+=T-A),v.__size=S,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class XA{constructor(e={}){const{canvas:n=IM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),g=new Int32Array(4);let m=null,h=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=dr,this.toneMappingExposure=1;const S=this;let T=!1,A=0,L=0,N=null,w=-1,M=null;const U=new bt,$=new bt;let D=null;const k=new Ze(0);let j=0,z=n.width,ne=n.height,R=1,F=null,W=null;const ie=new bt(0,0,z,ne),he=new bt(0,0,z,ne);let Be=!1;const ee=new kf;let ae=!1,xe=!1;const me=new Ct,Fe=new Ct,Oe=new X,Ve=new bt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function st(){return N===null?R:1}let B=i;function Z(b,V){return n.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cf}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",C,!1),B===null){const V="webgl2";if(B=Z(V,b),B===null)throw Z(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let oe,de,fe,ye,le,P,E,H,te,re,Q,Ee,ve,we,je,ce,Te,ke,Ie,Ae,Je,He,rt,O;function Se(){oe=new Zw(B),oe.init(),He=new FA(B,oe),de=new Ww(B,oe,e,He),fe=new DA(B,oe),de.reverseDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),ye=new eT(B),le=new vA,P=new UA(B,oe,fe,le,de,He,ye),E=new $w(S),H=new Kw(S),te=new aE(B),rt=new Gw(B,te),re=new Qw(B,te,ye,rt),Q=new nT(B,re,te,ye),Ie=new tT(B,de,P),ce=new Xw(le),Ee=new _A(S,E,H,oe,de,rt,ce),ve=new jA(S,le),we=new yA,je=new AA(oe),ke=new Vw(S,E,H,fe,Q,p,l),Te=new LA(S,Q,de),O=new WA(B,ye,de,fe),Ae=new jw(B,oe,ye),Je=new Jw(B,oe,ye),ye.programs=Ee.programs,S.capabilities=de,S.extensions=oe,S.properties=le,S.renderLists=we,S.shadowMap=Te,S.state=fe,S.info=ye}Se();const J=new VA(S,B);this.xr=J,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(b){b!==void 0&&(R=b,this.setSize(z,ne,!1))},this.getSize=function(b){return b.set(z,ne)},this.setSize=function(b,V,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,ne=V,n.width=Math.floor(b*R),n.height=Math.floor(V*R),Y===!0&&(n.style.width=b+"px",n.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(z*R,ne*R).floor()},this.setDrawingBufferSize=function(b,V,Y){z=b,ne=V,R=Y,n.width=Math.floor(b*Y),n.height=Math.floor(V*Y),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,V,Y,K){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,V,Y,K),fe.viewport(U.copy(ie).multiplyScalar(R).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,V,Y,K){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,V,Y,K),fe.scissor($.copy(he).multiplyScalar(R).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(b){fe.setScissorTest(Be=b)},this.setOpaqueSort=function(b){F=b},this.setTransparentSort=function(b){W=b},this.getClearColor=function(b){return b.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(b=!0,V=!0,Y=!0){let K=0;if(b){let G=!1;if(N!==null){const ge=N.texture.format;G=ge===Uf||ge===If||ge===Df}if(G){const ge=N.texture.type,Ce=ge===ki||ge===Yr||ge===pa||ge===eo||ge===Lf||ge===Nf,Pe=ke.getClearColor(),Le=ke.getClearAlpha(),Ge=Pe.r,Xe=Pe.g,Ne=Pe.b;Ce?(x[0]=Ge,x[1]=Xe,x[2]=Ne,x[3]=Le,B.clearBufferuiv(B.COLOR,0,x)):(g[0]=Ge,g[1]=Xe,g[2]=Ne,g[3]=Le,B.clearBufferiv(B.COLOR,0,g))}else K|=B.COLOR_BUFFER_BIT}V&&(K|=B.DEPTH_BUFFER_BIT),Y&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",C,!1),we.dispose(),je.dispose(),le.dispose(),E.dispose(),H.dispose(),Q.dispose(),rt.dispose(),O.dispose(),Ee.dispose(),J.dispose(),J.removeEventListener("sessionstart",ot),J.removeEventListener("sessionend",Ot),Rn.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=ye.autoReset,V=Te.enabled,Y=Te.autoUpdate,K=Te.needsUpdate,G=Te.type;Se(),ye.autoReset=b,Te.enabled=V,Te.autoUpdate=Y,Te.needsUpdate=K,Te.type=G}function C(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function I(b){const V=b.target;V.removeEventListener("dispose",I),q(V)}function q(b){pe(b),le.remove(b)}function pe(b){const V=le.get(b).programs;V!==void 0&&(V.forEach(function(Y){Ee.releaseProgram(Y)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,Y,K,G,ge){V===null&&(V=Ke);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,Pe=bv(b,V,Y,K,G);fe.setMaterial(K,Ce);let Le=Y.index,Ge=1;if(K.wireframe===!0){if(Le=re.getWireframeAttribute(Y),Le===void 0)return;Ge=2}const Xe=Y.drawRange,Ne=Y.attributes.position;let it=Xe.start*Ge,mt=(Xe.start+Xe.count)*Ge;ge!==null&&(it=Math.max(it,ge.start*Ge),mt=Math.min(mt,(ge.start+ge.count)*Ge)),Le!==null?(it=Math.max(it,0),mt=Math.min(mt,Le.count)):Ne!=null&&(it=Math.max(it,0),mt=Math.min(mt,Ne.count));const _t=mt-it;if(_t<0||_t===1/0)return;rt.setup(G,K,Pe,Y,Le);let cn,at=Ae;if(Le!==null&&(cn=te.get(Le),at=Je,at.setIndex(cn)),G.isMesh)K.wireframe===!0?(fe.setLineWidth(K.wireframeLinewidth*st()),at.setMode(B.LINES)):at.setMode(B.TRIANGLES);else if(G.isLine){let De=K.linewidth;De===void 0&&(De=1),fe.setLineWidth(De*st()),G.isLineSegments?at.setMode(B.LINES):G.isLineLoop?at.setMode(B.LINE_LOOP):at.setMode(B.LINE_STRIP)}else G.isPoints?at.setMode(B.POINTS):G.isSprite&&at.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)at.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const De=G._multiDrawStarts,_i=G._multiDrawCounts,lt=G._multiDrawCount,Hn=Le?te.get(Le).bytesPerElement:1,ts=le.get(K).currentProgram.getUniforms();for(let vn=0;vn<lt;vn++)ts.setValue(B,"_gl_DrawID",vn),at.render(De[vn]/Hn,_i[vn])}else if(G.isInstancedMesh)at.renderInstances(it,_t,G.count);else if(Y.isInstancedBufferGeometry){const De=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,_i=Math.min(Y.instanceCount,De);at.renderInstances(it,_t,_i)}else at.render(it,_t)};function _e(b,V,Y){b.transparent===!0&&b.side===Kn&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,Ca(b,V,Y),b.side=mr,b.needsUpdate=!0,Ca(b,V,Y),b.side=Kn):Ca(b,V,Y)}this.compile=function(b,V,Y=null){Y===null&&(Y=b),h=je.get(Y),h.init(V),y.push(h),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),b!==Y&&b.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights();const K=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){const Pe=ge[Ce];_e(Pe,Y,G),K.add(Pe)}else _e(ge,Y,G),K.add(ge)}),y.pop(),h=null,K},this.compileAsync=function(b,V,Y=null){const K=this.compile(b,V,Y);return new Promise(G=>{function ge(){if(K.forEach(function(Ce){le.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){G(b);return}setTimeout(ge,10)}oe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let et=null;function ut(b){et&&et(b)}function ot(){Rn.stop()}function Ot(){Rn.start()}const Rn=new _v;Rn.setAnimationLoop(ut),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(b){et=b,J.setAnimationLoop(b),b===null?Rn.stop():Rn.start()},J.addEventListener("sessionstart",ot),J.addEventListener("sessionend",Ot),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,V,N),h=je.get(b,y.length),h.init(V),y.push(h),Fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ee.setFromProjectionMatrix(Fe),xe=this.localClippingEnabled,ae=ce.init(this.clippingPlanes,xe),m=we.get(b,v.length),m.init(),v.push(m),J.enabled===!0&&J.isPresenting===!0){const ge=S.xr.getDepthSensingMesh();ge!==null&&yr(ge,V,-1/0,S.sortObjects)}yr(b,V,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(F,W),ze=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ze&&ke.addToRenderList(m,b),this.info.render.frame++,ae===!0&&ce.beginShadows();const Y=h.state.shadowsArray;Te.render(Y,b,V),ae===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,G=m.transmissive;if(h.setupLights(),V.isArrayCamera){const ge=V.cameras;if(G.length>0)for(let Ce=0,Pe=ge.length;Ce<Pe;Ce++){const Le=ge[Ce];Mt(K,G,b,Le)}ze&&ke.render(b);for(let Ce=0,Pe=ge.length;Ce<Pe;Ce++){const Le=ge[Ce];dt(m,b,Le,Le.viewport)}}else G.length>0&&Mt(K,G,b,V),ze&&ke.render(b),dt(m,b,V);N!==null&&(P.updateMultisampleRenderTarget(N),P.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(S,b,V),rt.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(h=y[y.length-1],ae===!0&&ce.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function yr(b,V,Y,K){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){K&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Fe);const Ce=Q.update(b),Pe=b.material;Pe.visible&&m.push(b,Ce,Pe,Y,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ee.intersectsObject(b))){const Ce=Q.update(b),Pe=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ve.copy(Ce.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Fe)),Array.isArray(Pe)){const Le=Ce.groups;for(let Ge=0,Xe=Le.length;Ge<Xe;Ge++){const Ne=Le[Ge],it=Pe[Ne.materialIndex];it&&it.visible&&m.push(b,Ce,it,Y,Ve.z,Ne)}}else Pe.visible&&m.push(b,Ce,Pe,Y,Ve.z,null)}}const ge=b.children;for(let Ce=0,Pe=ge.length;Ce<Pe;Ce++)yr(ge[Ce],V,Y,K)}function dt(b,V,Y,K){const G=b.opaque,ge=b.transmissive,Ce=b.transparent;h.setupLightsView(Y),ae===!0&&ce.setGlobalState(S.clippingPlanes,Y),K&&fe.viewport(U.copy(K)),G.length>0&&zt(G,V,Y),ge.length>0&&zt(ge,V,Y),Ce.length>0&&zt(Ce,V,Y),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Mt(b,V,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[K.id]===void 0&&(h.state.transmissionRenderTarget[K.id]=new Kr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?wa:ki,minFilter:kr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ge=h.state.transmissionRenderTarget[K.id],Ce=K.viewport||U;ge.setSize(Ce.z,Ce.w);const Pe=S.getRenderTarget();S.setRenderTarget(ge),S.getClearColor(k),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),ze&&ke.render(Y);const Le=S.toneMapping;S.toneMapping=dr;const Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),h.setupLightsView(K),ae===!0&&ce.setGlobalState(S.clippingPlanes,K),zt(b,Y,K),P.updateMultisampleRenderTarget(ge),P.updateRenderTargetMipmap(ge),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ne=0,it=V.length;Ne<it;Ne++){const mt=V[Ne],_t=mt.object,cn=mt.geometry,at=mt.material,De=mt.group;if(at.side===Kn&&_t.layers.test(K.layers)){const _i=at.side;at.side=_n,at.needsUpdate=!0,Gf(_t,Y,K,cn,at,De),at.side=_i,at.needsUpdate=!0,Xe=!0}}Xe===!0&&(P.updateMultisampleRenderTarget(ge),P.updateRenderTargetMipmap(ge))}S.setRenderTarget(Pe),S.setClearColor(k,j),Ge!==void 0&&(K.viewport=Ge),S.toneMapping=Le}function zt(b,V,Y){const K=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ge=b.length;G<ge;G++){const Ce=b[G],Pe=Ce.object,Le=Ce.geometry,Ge=K===null?Ce.material:K,Xe=Ce.group;Pe.layers.test(Y.layers)&&Gf(Pe,V,Y,Le,Ge,Xe)}}function Gf(b,V,Y,K,G,ge){b.onBeforeRender(S,V,Y,K,G,ge),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(S,V,Y,K,b,ge),G.transparent===!0&&G.side===Kn&&G.forceSinglePass===!1?(G.side=_n,G.needsUpdate=!0,S.renderBufferDirect(Y,V,K,G,b,ge),G.side=mr,G.needsUpdate=!0,S.renderBufferDirect(Y,V,K,G,b,ge),G.side=Kn):S.renderBufferDirect(Y,V,K,G,b,ge),b.onAfterRender(S,V,Y,K,G,ge)}function Ca(b,V,Y){V.isScene!==!0&&(V=Ke);const K=le.get(b),G=h.state.lights,ge=h.state.shadowsArray,Ce=G.state.version,Pe=Ee.getParameters(b,G.state,ge,V,Y),Le=Ee.getProgramCacheKey(Pe);let Ge=K.programs;K.environment=b.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(b.isMeshStandardMaterial?H:E).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Ge===void 0&&(b.addEventListener("dispose",I),Ge=new Map,K.programs=Ge);let Xe=Ge.get(Le);if(Xe!==void 0){if(K.currentProgram===Xe&&K.lightsStateVersion===Ce)return Wf(b,Pe),Xe}else Pe.uniforms=Ee.getUniforms(b),b.onBeforeCompile(Pe,S),Xe=Ee.acquireProgram(Pe,Le),Ge.set(Le,Xe),K.uniforms=Pe.uniforms;const Ne=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=ce.uniform),Wf(b,Pe),K.needsLights=Rv(b),K.lightsStateVersion=Ce,K.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMap.value=G.state.directionalShadowMap,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotShadowMap.value=G.state.spotShadowMap,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMap.value=G.state.pointShadowMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Xe,K.uniformsList=null,Xe}function jf(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=zl.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Wf(b,V){const Y=le.get(b);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function bv(b,V,Y,K,G){V.isScene!==!0&&(V=Ke),P.resetTextureUnits();const ge=V.fog,Ce=K.isMeshStandardMaterial?V.environment:null,Pe=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:oo,Le=(K.isMeshStandardMaterial?H:E).get(K.envMap||Ce),Ge=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,mt=!!Y.morphAttributes.color;let _t=dr;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(_t=S.toneMapping);const cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=cn!==void 0?cn.length:0,De=le.get(K),_i=h.state.lights;if(ae===!0&&(xe===!0||b!==M)){const Pn=b===M&&K.id===w;ce.setState(K,b,Pn)}let lt=!1;K.version===De.__version?(De.needsLights&&De.lightsStateVersion!==_i.state.version||De.outputColorSpace!==Pe||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==Le||K.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ce.numPlanes||De.numIntersection!==ce.numIntersection)||De.vertexAlphas!==Ge||De.vertexTangents!==Xe||De.morphTargets!==Ne||De.morphNormals!==it||De.morphColors!==mt||De.toneMapping!==_t||De.morphTargetsCount!==at)&&(lt=!0):(lt=!0,De.__version=K.version);let Hn=De.currentProgram;lt===!0&&(Hn=Ca(K,V,G));let ts=!1,vn=!1,co=!1;const vt=Hn.getUniforms(),ri=De.uniforms;if(fe.useProgram(Hn.program)&&(ts=!0,vn=!0,co=!0),K.id!==w&&(w=K.id,vn=!0),ts||M!==b){fe.buffers.depth.getReversed()?(me.copy(b.projectionMatrix),FM(me),kM(me),vt.setValue(B,"projectionMatrix",me)):vt.setValue(B,"projectionMatrix",b.projectionMatrix),vt.setValue(B,"viewMatrix",b.matrixWorldInverse);const zi=vt.map.cameraPosition;zi!==void 0&&zi.setValue(B,Oe.setFromMatrixPosition(b.matrixWorld)),de.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,vn=!0,co=!0)}if(G.isSkinnedMesh){vt.setOptional(B,G,"bindMatrix"),vt.setOptional(B,G,"bindMatrixInverse");const Pn=G.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),vt.setValue(B,"boneTexture",Pn.boneTexture,P))}G.isBatchedMesh&&(vt.setOptional(B,G,"batchingTexture"),vt.setValue(B,"batchingTexture",G._matricesTexture,P),vt.setOptional(B,G,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",G._indirectTexture,P),vt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",G._colorsTexture,P));const uo=Y.morphAttributes;if((uo.position!==void 0||uo.normal!==void 0||uo.color!==void 0)&&Ie.update(G,Y,Hn),(vn||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,vt.setValue(B,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ri.envMap.value=Le,ri.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(ri.envMapIntensity.value=V.environmentIntensity),vn&&(vt.setValue(B,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&Cv(ri,co),ge&&K.fog===!0&&ve.refreshFogUniforms(ri,ge),ve.refreshMaterialUniforms(ri,K,R,ne,h.state.transmissionRenderTarget[b.id]),zl.upload(B,jf(De),ri,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(zl.upload(B,jf(De),ri,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(B,"center",G.center),vt.setValue(B,"modelViewMatrix",G.modelViewMatrix),vt.setValue(B,"normalMatrix",G.normalMatrix),vt.setValue(B,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Pn=K.uniformsGroups;for(let zi=0,Bi=Pn.length;zi<Bi;zi++){const Xf=Pn[zi];O.update(Xf,Hn),O.bind(Xf,Hn)}}return Hn}function Cv(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Rv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,V,Y){le.get(b.texture).__webglTexture=V,le.get(b.depthTexture).__webglTexture=Y;const K=le.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,V){const Y=le.get(b);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,Y=0){N=b,A=V,L=Y;let K=!0,G=null,ge=!1,Ce=!1;if(b){const Le=le.get(b);if(Le.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(Le.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(Le.__hasExternalTextures)P.rebindTextures(b,le.get(b.texture).__webglTexture,le.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(Le.__boundDepthTexture!==Ne){if(Ne!==null&&le.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ce=!0);const Xe=le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[V])?G=Xe[V][Y]:G=Xe[V],ge=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?G=le.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?G=Xe[Y]:G=Xe,U.copy(b.viewport),$.copy(b.scissor),D=b.scissorTest}else U.copy(ie).multiplyScalar(R).floor(),$.copy(he).multiplyScalar(R).floor(),D=Be;if(fe.bindFramebuffer(B.FRAMEBUFFER,G)&&K&&fe.drawBuffers(b,G),fe.viewport(U),fe.scissor($),fe.setScissorTest(D),ge){const Le=le.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,Y)}else if(Ce){const Le=le.get(b.texture),Ge=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.__webglTexture,Y||0,Ge)}w=-1},this.readRenderTargetPixels=function(b,V,Y,K,G,ge,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){fe.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const Le=b.texture,Ge=Le.format,Xe=Le.type;if(!de.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-K&&Y>=0&&Y<=b.height-G&&B.readPixels(V,Y,K,G,He.convert(Ge),He.convert(Xe),ge)}finally{const Le=N!==null?le.get(N).__webglFramebuffer:null;fe.bindFramebuffer(B.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,V,Y,K,G,ge,Ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){const Le=b.texture,Ge=Le.format,Xe=Le.type;if(!de.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=b.width-K&&Y>=0&&Y<=b.height-G){fe.bindFramebuffer(B.FRAMEBUFFER,Pe);const Ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.bufferData(B.PIXEL_PACK_BUFFER,ge.byteLength,B.STREAM_READ),B.readPixels(V,Y,K,G,He.convert(Ge),He.convert(Xe),0);const it=N!==null?le.get(N).__webglFramebuffer:null;fe.bindFramebuffer(B.FRAMEBUFFER,it);const mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await UM(B,mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ge),B.deleteBuffer(Ne),B.deleteSync(mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,V=null,Y=0){b.isTexture!==!0&&(Uo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-Y),G=Math.floor(b.image.width*K),ge=Math.floor(b.image.height*K),Ce=V!==null?V.x:0,Pe=V!==null?V.y:0;P.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Ce,Pe,G,ge),fe.unbindTexture()},this.copyTextureToTexture=function(b,V,Y=null,K=null,G=0){b.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],V=arguments[2],G=arguments[3]||0,Y=null);let ge,Ce,Pe,Le,Ge,Xe,Ne,it,mt;const _t=b.isCompressedTexture?b.mipmaps[G]:b.image;Y!==null?(ge=Y.max.x-Y.min.x,Ce=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Ge=Y.min.y,Xe=Y.isBox3?Y.min.z:0):(ge=_t.width,Ce=_t.height,Pe=_t.depth||1,Le=0,Ge=0,Xe=0),K!==null?(Ne=K.x,it=K.y,mt=K.z):(Ne=0,it=0,mt=0);const cn=He.convert(V.format),at=He.convert(V.type);let De;V.isData3DTexture?(P.setTexture3D(V,0),De=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),De=B.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),De=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const _i=B.getParameter(B.UNPACK_ROW_LENGTH),lt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Hn=B.getParameter(B.UNPACK_SKIP_PIXELS),ts=B.getParameter(B.UNPACK_SKIP_ROWS),vn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,_t.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Le),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xe);const co=b.isDataArrayTexture||b.isData3DTexture,vt=V.isDataArrayTexture||V.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const ri=le.get(b),uo=le.get(V),Pn=le.get(ri.__renderTarget),zi=le.get(uo.__renderTarget);fe.bindFramebuffer(B.READ_FRAMEBUFFER,Pn.__webglFramebuffer),fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Bi=0;Bi<Pe;Bi++)co&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,le.get(b).__webglTexture,G,Xe+Bi),b.isDepthTexture?(vt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,le.get(V).__webglTexture,G,mt+Bi),B.blitFramebuffer(Le,Ge,ge,Ce,Ne,it,ge,Ce,B.DEPTH_BUFFER_BIT,B.NEAREST)):vt?B.copyTexSubImage3D(De,G,Ne,it,mt+Bi,Le,Ge,ge,Ce):B.copyTexSubImage2D(De,G,Ne,it,mt+Bi,Le,Ge,ge,Ce);fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(De,G,Ne,it,mt,ge,Ce,Pe,cn,at,_t.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(De,G,Ne,it,mt,ge,Ce,Pe,cn,_t.data):B.texSubImage3D(De,G,Ne,it,mt,ge,Ce,Pe,cn,at,_t):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,Ne,it,ge,Ce,cn,at,_t.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,Ne,it,_t.width,_t.height,cn,_t.data):B.texSubImage2D(B.TEXTURE_2D,G,Ne,it,ge,Ce,cn,at,_t);B.pixelStorei(B.UNPACK_ROW_LENGTH,_i),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Hn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ts),B.pixelStorei(B.UNPACK_SKIP_IMAGES,vn),G===0&&V.generateMipmaps&&B.generateMipmap(De),fe.unbindTexture()},this.copyTextureToTexture3D=function(b,V,Y=null,K=null,G=0){return b.isTexture!==!0&&(Uo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,b=arguments[2],V=arguments[3],G=arguments[4]||0),Uo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,V,Y,K,G)},this.initRenderTarget=function(b){le.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),fe.unbindTexture()},this.resetState=function(){A=0,L=0,N=null,fe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}class $A extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zf extends On{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let x=0;const g=[],m=i/2;let h=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(p,2));function v(){const S=new X,T=new X;let A=0;const L=(n-e)/i;for(let N=0;N<=s;N++){const w=[],M=N/s,U=M*(n-e)+e;for(let $=0;$<=r;$++){const D=$/r,k=D*l+a,j=Math.sin(k),z=Math.cos(k);T.x=U*j,T.y=-M*i+m,T.z=U*z,d.push(T.x,T.y,T.z),S.set(j,L,z).normalize(),f.push(S.x,S.y,S.z),p.push(D,1-M),w.push(x++)}g.push(w)}for(let N=0;N<r;N++)for(let w=0;w<s;w++){const M=g[w][N],U=g[w+1][N],$=g[w+1][N+1],D=g[w][N+1];(e>0||w!==0)&&(u.push(M,U,D),A+=3),(n>0||w!==s-1)&&(u.push(U,$,D),A+=3)}c.addGroup(h,A,0),h+=A}function y(S){const T=x,A=new We,L=new X;let N=0;const w=S===!0?e:n,M=S===!0?1:-1;for(let $=1;$<=r;$++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),x++;const U=x;for(let $=0;$<=r;$++){const k=$/r*l+a,j=Math.cos(k),z=Math.sin(k);L.x=w*z,L.y=m*M,L.z=w*j,d.push(L.x,L.y,L.z),f.push(0,M,0),A.x=j*.5+.5,A.y=z*.5*M+.5,p.push(A.x,A.y),x++}for(let $=0;$<r;$++){const D=T+$,k=U+$;S===!0?u.push(k,k+1,D):u.push(k+1,k,D),N+=3}c.addGroup(h,N,S===!0?1:2),h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bf extends On{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new X,f=new X,p=[],x=[],g=[],m=[];for(let h=0;h<=i;h++){const v=[],y=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let T=0;T<=n;T++){const A=T/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),m.push(A+S,1-y),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const y=u[h][v+1],S=u[h][v],T=u[h+1][v],A=u[h+1][v+1];(h!==0||o>0)&&p.push(y,S,A),(h!==i-1||l<Math.PI)&&p.push(S,T,A)}this.setIndex(p),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ug extends ba{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rv,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const hg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class qA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const YA=new qA;class Hf{constructor(e){this.manager=e!==void 0?e:YA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hf.DEFAULT_MATERIAL_NAME="__DEFAULT";class KA extends Hf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ma("img");function l(){u(),hg.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ZA extends Hf{constructor(e){super(e)}load(e,n,i,r){const s=new on,o=new KA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class wv extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class QA extends wv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Hu=new Ct,dg=new X,fg=new X;class JA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kf,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dg.setFromMatrixPosition(e.matrixWorld),n.position.copy(dg),fg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fg),n.updateMatrixWorld(),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eb extends JA{constructor(){super(new vv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tb extends wv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new eb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nb extends es{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);const mg={type:"change"},Vf={type:"start"},Tv={type:"end"},gl=new cv,gg=new Zi,ib=Math.cos(70*DM.DEG2RAD),Dt=new X,hn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vu=1e-6;class rb extends nb{constructor(e,n=null){super(e,n),this.state=pt.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Zr,this._lastTargetPosition=new X,this._quat=new Zr().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pg,this._sphericalDelta=new pg,this._scale=1,this._panOffset=new X,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new X,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ob.bind(this),this._onPointerDown=sb.bind(this),this._onPointerUp=ab.bind(this),this._onContextMenu=pb.bind(this),this._onMouseWheel=ub.bind(this),this._onKeyDown=hb.bind(this),this._onTouchStart=db.bind(this),this._onTouchMove=fb.bind(this),this._onMouseDown=lb.bind(this),this._onMouseMove=cb.bind(this),this._interceptControlDown=mb.bind(this),this._interceptControlUp=gb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mg),this.update(),this.state=pt.NONE}update(e=null){const n=this.object.position;Dt.copy(n).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),r<-Math.PI?r+=hn:r>Math.PI&&(r-=hn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gl.origin.copy(this.object.position),gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gl.direction))<ib?this.object.lookAt(this.target):(gg.setFromNormalAndCoplanarPoint(this.object.up,this.target),gl.intersectPlane(gg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Vu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vu||this._lastTargetPosition.distanceToSquared(this.target)>Vu?(this.dispatchEvent(mg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Dt.setFromMatrixColumn(n,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,n){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(n,1):(Dt.setFromMatrixColumn(n,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dt.copy(r).sub(this.target);let s=Dt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new We,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function sb(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function ob(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function ab(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tv),this.state=pt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function lb(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=pt.DOLLY;break;case zs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=pt.ROTATE}break;case zs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Vf)}function cb(t){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function ub(t){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(t.preventDefault(),this.dispatchEvent(Vf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Tv))}function hb(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function db(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=pt.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=pt.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Vf)}function fb(t){switch(this._trackPointer(t),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=pt.NONE}}function pb(t){this.enabled!==!1&&t.preventDefault()}function mb(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gb(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Co=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim()||"#888888";class ko{constructor(e){this.box=e,this.r=new XA({antialias:!0}),this.r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.appendChild(this.r.domElement),this.scene=new $A,this.cam=new Un(50,1,.3,6e3),this.draw=this.draw.bind(this),this.ctl=new rb(this.cam,this.r.domElement),this.ctl.maxPolarAngle=Math.PI*.495,this.ctl.addEventListener("change",this.draw),this.scene.add(new QA(16777215,8226167,.8*Math.PI));const n=new tb(16777215,.6*Math.PI);n.position.set(-60,120,80),this.scene.add(n),this.root=new qn,this.scene.add(this.root),this.boxG=new ao(1,1,1),this.cylG=new zf(1,1,1,28),this.sphG=new Bf(1,10,8),this.mats={},this.geoms=[],this.tex=null,this.texSrc=null,this.first=!0,this.camMode="corner",this.inner=null,this.dims=null,this.lay=null,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize()}resize(){const e=this.box.clientWidth,n=this.box.clientHeight;!e||!n||(this.r.setSize(e,n,!1),this.cam.aspect=e/n,this.cam.updateProjectionMatrix(),this.draw())}draw(){this.r.render(this.scene,this.cam)}geo(e){return this.geoms.push(e),e}mat(e,n={}){const i=e+JSON.stringify(n);if(!this.mats[i]){const{basic:r,...s}=n;this.mats[i]=r?new pc({color:new Ze(e),...s}):new ug({color:new Ze(e),...s})}return this.mats[i]}boxAt(e,n,i,r,s,o,a,l,c){const u=new Lt(this.boxG,this.mat(l,c));return u.scale.set(r,o,s),u.position.set(n+r/2,a+o/2,i+s/2),e.add(u),u}cylAt(e,n,i,r,s,o,a,l){const c=new Lt(this.cylG,this.mat(a,l));return c.scale.set(r,s,r),c.position.set(n,o+s/2,i),e.add(c),c}chair3D(e,n,i,r,s){const o=new qn,a=cS[s]||"#cccccc";o.position.set(n,0,i),o.rotation.y=-r,this.boxAt(o,-.65,-.65,1.3,1.3,.18,1.42,a),this.boxAt(o,-.72,-.65,.16,1.3,1.7,1.5,a);for(const[l,c]of[[-.55,-.55],[-.55,.45],[.45,-.55],[.45,.45]])this.boxAt(o,l,c,.1,.1,1.42,0,a);e.add(o)}item3D(e,n,i){const[r,s]=n.dims,o=n.def.id,a=new qn,l=new qn;a.position.set(n.x+n.w/2,0,n.y+n.h/2),a.rotation.y=-n.rot*Math.PI/180,l.position.set(-r/2,0,-s/2),a.add(l),e.add(a);const c="#fbfbfa",u="#262d36";if(o==="stage")this.boxAt(l,0,0,r,s,2,0,Co("--stage"));else if(o==="dance"){const d=Sa(i),f=d.tile;for(let p=0;p<r/f-.01;p++)for(let x=0;x<s/f-.01;x++)this.boxAt(l,p*f,x*f,Math.min(f,r-p*f),Math.min(f,s-x*f),.15,0,d.colors[(p+x)%2]);if((i.acc.dance||{}).wrap){const p=this.cylAt(l,r/2,s/2,Math.min(r,s)*.3,.02,.15,"#c9b37a");p.scale.y=.02}}else if(o==="head"){this.boxAt(l,0,s-3.5,r,2.5,2.5,0,c);for(const d of n.chairs||[])this.chair3D(l,d.x,d.y,Math.PI/2,i.chairStyle)}else if(o==="dj")this.boxAt(l,1,2.8,r-2,2,3,0,u),this.boxAt(l,.3,s-1.5,1.2,1.2,4.5,0,u),this.boxAt(l,r-1.5,s-1.5,1.2,1.2,4.5,0,u);else if(o==="buffet"){this.boxAt(l,0,s/2-1.25,r,2.5,2.5,0,c);for(let d=1;d<r-1;d+=2.6)this.boxAt(l,d,s/2-.6,1.8,1.2,.5,2.5,"#b9c0c7")}else if(o==="bar")this.boxAt(l,2,.5,r-4,1.5,3,0,u),this.boxAt(l,1,3,r-2,2.5,3.5,0,"#3a434e");else if(o==="cake")this.cylAt(l,r/2,s/2,2,2.5,0,c),this.cylAt(l,r/2,s/2,.8,1.3,2.5,"#efe4d0");else if(o==="gift")this.boxAt(l,1,1.2,r-2,2.5,2.5,0,c);else if(o==="photo")this.boxAt(l,1,.4,r-2,.4,8,0,"#3a434e"),this.boxAt(l,r/2-.6,s-2.2,1.2,1.2,5,0,u);else if(o==="lounge"){const d="#8e9ba7";this.boxAt(l,2,.6,r-4,2.6,2.6,0,d),this.boxAt(l,1,5.6,2.6,2.6,2.4,0,d),this.boxAt(l,r-3.6,5.6,2.6,2.6,2.4,0,d),this.boxAt(l,r/2-2.5,4.6,5,2.4,1.4,0,"#5d4b3a")}else o==="highboy"&&this.cylAt(l,r/2,s/2,1.25,3.5,0,c)}unit3D(e,n,i,r){const s=new qn;s.position.set(n.x,0,n.y),s.rotation.y=-(n.rot||0)*Math.PI/180,e.add(s);const o="#fbfbfa";if(i.kind==="round"){this.cylAt(s,0,0,i.r,2.5,0,o);const a=n.seats??r.seatsPer,l=i.r+.95;for(let c=0;c<a;c++){const u=c*2*Math.PI/a-Math.PI/2;this.chair3D(s,l*Math.cos(u),l*Math.sin(u),u+Math.PI,r.chairStyle)}}else if(i.kind==="banquet"){this.boxAt(s,-4,-1.25,8,2.5,2.5,0,o);for(const[a,l]of P_.slice(0,n.seats??8))this.chair3D(s,a,l*2.15,l<0?Math.PI/2:-Math.PI/2,r.chairStyle)}else i.kind==="chair"?this.chair3D(s,0,0,Math.PI,r.chairStyle):this.cylAt(s,0,0,i.r||1.25,3.5,0,o)}build(e,n,i,r){const s=e[n]||e[0],o=this.root;for(;o.children.length;)o.remove(o.children[0]);Object.values(this.mats).forEach(x=>x.dispose()),this.mats={},this.geoms.forEach(x=>x.dispose()),this.geoms=[],this.scene.background=new Ze(Co("--paper"));const a=s.st,l=!!i,c=Ea(a,l);this.site={l:c.l,w:c.w,multi:e.length>1};let u;l?(this.texSrc!==i&&(this.tex&&this.tex.dispose(),this.tex=new ZA().load(i,this.draw),this.tex.colorSpace=En,this.texSrc=i),u=new pc({map:this.tex}),this.mats._photo=u):u=this.mat(Co(a.surface==="grass"||a.surface==="gravel"?"--grass":"--hard"));const d=new Lt(this.geo(new Hr(c.l,c.w)),u);d.rotation.x=-Math.PI/2,d.position.set(c.l/2,0,c.w/2),o.add(d),this.ground=l?null:d,this.groundSoft=a.surface==="grass"||a.surface==="gravel";const f=new Lt(this.geo(new Hr(c.l*4+400,c.w*4+400)),this.mat(Co("--soft")));f.rotation.x=-Math.PI/2,f.position.set(c.l/2,-.05,c.w/2),this.far=f,o.add(f);for(const x of e){const g=this.buildTent(x.st,x.lay,l,r);x===s&&(this.inner=g.T,this.dims=g.dims,this.lay=x.lay)}const p=this.first||this.lastActive!==n;this.first=!1,this.lastActive=n,p?this.setCam(this.camMode):this.draw()}buildTent(e,n,i,{roof:r,walls:s}){const o=this.root,{W:a,L:l,sh:c}=n,u=e.tentType,d=qr(e,n,i),f=(e.tentAngle||0)*Math.PI/180,p=n.T.stake,x=new qn;x.position.set(d.x+l/2,0,d.y+a/2),x.rotation.y=-f,o.add(x);const g=new qn;g.position.set(-l/2,0,-a/2),x.add(g);const m=u==="structure"?a>=60?12:10:8,h=u==="frame"||u==="cleartop"?m+a*.25:u==="structure"?m+a*.2:u==="pole"?m+a*.5:m+a*.45,v=[...new Set(n.poles.filter(D=>D.inner).map(D=>Ye(D.x)))].sort((D,k)=>D-k),y=v.length>1?v[1]-v[0]:l,S=u==="pole"||u==="sailcloth",T=D=>a/2-ai(c,D),A=(D,k)=>{const j=T(D),z=j<.01?0:Math.max(0,1-Math.abs(k-a/2)/j);if(S){const ne=c.oval?1:Math.max(0,Math.min(1,D/(a*.5),(l-D)/(a*.5)));let R=1e9;for(const W of v)R=Math.min(R,Math.abs(D-W));const F=v.length?.55+.45*Math.pow(Math.max(0,1-R/(y/2)),1.5):1;return m+(h-m)*Math.pow(z,u==="sailcloth"?1.8:1.3)*Math.min(ne,F)}return m+(h-m)*z},L=u==="sailcloth"?"#f7f1e3":"#ffffff",N=u==="cleartop",w=this.mat(N?"#d7ebf7":L,{transparent:!0,opacity:N?.2:.88,side:Kn,depthWrite:!N});if(r){const D=Math.max(8,Math.round(l/1.5)),k=Math.max(8,Math.round(a/1.5)),j=[],z=[];for(let R=0;R<=k;R++)for(let F=0;F<=D;F++){const W=F*l/D,ie=ai(c,W),he=ie+R*(a-2*ie)/k;j.push(W,A(W,he),he)}for(let R=0;R<k;R++)for(let F=0;F<D;F++){const W=R*(D+1)+F,ie=W+1,he=W+D+1,Be=he+1;z.push(W,he,ie,ie,he,Be)}const ne=this.geo(new On);if(ne.setAttribute("position",new Jt(j,3)),ne.setIndex(z),ne.computeVertexNormals(),g.add(new Lt(ne,w)),!S)for(const R of[0,l]){const F=this.geo(new On);F.setAttribute("position",new Jt([R,m,0,R,h,a/2,R,m,a],3)),F.computeVertexNormals(),g.add(new Lt(F,w))}}const M="#b9c0c6";for(const D of n.poles)D.inner?this.cylAt(g,D.x,D.y,.3,A(D.x,D.y),0,"#d9d2c3"):this.cylAt(g,D.x,D.y,.17,m,0,M);if(S||(this.boxAt(g,0,-.1,l,.2,.3,m-.3,M),this.boxAt(g,0,a-.1,l,.2,.3,m-.3,M),this.boxAt(g,0,a/2-.15,l,.3,.3,h-.3,M)),s&&e.walls!=="none"){const D={solid:.92,window:.62,clear:.16}[e.walls],k=this.mat(e.walls==="clear"?"#d7ebf7":L,{transparent:!0,opacity:D,side:Kn,depthWrite:e.walls==="solid"});if(c.oval)for(const j of D_(c,n.exits)){const z=[],ne=[];j.forEach(([F,W],ie)=>{if(z.push(F,0,W,F,m,W),ie){const he=2*(ie-1);ne.push(he,he+2,he+1,he+1,he+2,he+3)}});const R=this.geo(new On);R.setAttribute("position",new Jt(z,3)),R.setIndex(ne),R.computeVertexNormals(),g.add(new Lt(R,k))}else for(const j of["top","bottom","left","right"]){const z=j==="top"||j==="bottom",ne=z?l:a,R=n.exits.filter(ie=>ie.side===j).map(ie=>[ie.c-3,ie.c+3]).sort((ie,he)=>ie[0]-he[0]);let F=0;const W=[];for(const[ie,he]of R)W.push([F,ie]),F=he;W.push([F,ne]);for(const[ie,he]of W){if(he-ie<.05)continue;const Be=new Lt(this.geo(new Hr(he-ie,m)),k);z?Be.position.set((ie+he)/2,m/2,j==="top"?0:a):(Be.rotation.y=Math.PI/2,Be.position.set(j==="left"?0:l,m/2,(ie+he)/2)),g.add(Be)}}}for(const D of n.exits){const k=m-.9;D.side==="top"||D.side==="bottom"?this.boxAt(g,D.c-.5,D.p-.08,1,.16,.4,k,"#2f9a5c",{basic:!0}):this.boxAt(g,D.p-.08,D.c-.5,.16,1,.4,k,"#2f9a5c",{basic:!0})}for(const D of n.items)this.item3D(g,D,e);for(const D of n.units)this.unit3D(g,D,jt[D.type]||n.S,e);const U=this.mat(Co("--light"),{basic:!0}),$=e.lightStyle||"swag";if(e.stringLights&&$!=="swag"){const D=n.poles.filter(j=>!j.inner),k=D.length>1?da(c)/D.length:10;for(const j of N_(c,Math.max(12,Math.round(da(c)/2.5)),-uc)){let z=1e9;for(const F of D)z=Math.min(z,Math.hypot(F.x-j.x,F.y-j.y));const ne=Math.sin(Math.PI/2*Math.min(1,z/(k/2)))*.9,R=new Lt(this.sphG,U);R.scale.setScalar(.16),R.position.set(j.x,m-.4-ne,j.y),g.add(R)}}if(e.stringLights&&$!=="perimeter"){const D=Math.max(1,Math.round(l/10));for(let k=0;k<D;k++){const j=k*l/D,z=(k+1)*l/D,ne=k%2?a-ai(c,j):ai(c,j),R=(k+1)%2?a-ai(c,z):ai(c,z),F=Math.hypot(z-j,R-ne),W=Math.max(2,Math.round(F/2.5));for(let ie=0;ie<=W;ie++){const he=ie/W,Be=j+(z-j)*he,ee=ne+(R-ne)*he,ae=Math.sin(Math.PI*he)*1.2,xe=new Lt(this.sphG,U);xe.scale.setScalar(.16),xe.position.set(Be,A(Be,ee)-.5-ae,ee),g.add(xe)}}}for(const{x:D,y:k}of n.chands){const j=A(D,k),z=new Lt(this.sphG,U);z.scale.setScalar(.9),z.position.set(D,j-3.6,k),g.add(z),this.boxAt(g,D-.03,k-.03,.06,.06,2.7,j-2.7,M)}if(e.climate.startsWith("heat")){const D=wf(e,n.area),k=Math.ceil(D/2),j=D-k;for(let z=0;z<k;z++)this.boxAt(g,(z+1)*l/(k+1)-1.5,a+3,3,4,3,0,"#a8443b");for(let z=0;z<j;z++)this.boxAt(g,(z+1)*l/(j+1)-1.5,-7,3,4,3,0,"#a8443b")}return e.generator&&this.boxAt(g,l+p+20,a/2-2,7,4,4,0,"#2d343d"),{T:g,dims:{L:l,W:a,peak:h}}}setCam(e){if(this.camMode=e,!this.inner||!this.dims)return;const{L:n,W:i,peak:r}=this.dims,s=Math.max(n,i);this.root.updateMatrixWorld(!0);const o=(c,u,d)=>this.inner.localToWorld(new X(c,u,d));let a,l;if(e==="top"&&this.site&&this.site.multi){const{l:c,w:u}=this.site;a=new X(c/2,Math.max(c,u)*1.1+30,u/2+.5),l=new X(c/2,0,u/2)}else if(e==="top")a=o(n/2,s*1.15+r+20,i/2+.5),l=o(n/2,0,i/2);else if(e==="eye"){const c=this.lay.exits.find(m=>m.main)||this.lay.exits[0],u=this.lay.items.find(m=>m.def.id==="dance")||this.lay.items.find(m=>m.def.id==="stage"),d=u?u.x+u.w/2:n/2,f=u?u.y+u.h/2:i/2,p={bottom:[0,-2.5],top:[0,2.5],left:[2.5,0],right:[-2.5,0]},[x,g]=c?p[c.side]:[0,0];a=c?o(c.x+x,5.5,c.y+g):o(n/2,5.5,i-2.5),l=o(d,3.5,f)}else a=o(-n*.35,s*.5+r,i+s*.75),l=o(n/2,2,i/2);this.cam.position.copy(a),this.ctl.target.copy(l),this.ctl.update(),this.draw()}snapshot(e,n,{light:i=!0}={}){if(!this.inner)return null;const r={pos:this.cam.position.clone(),tgt:this.ctl.target.clone(),bg:this.scene.background,mode:this.camMode,pr:this.r.getPixelRatio()},s=[],o=(l,c)=>{l&&(s.push([l,l.material]),l.material=new ug({color:new Ze(c)}))};if(i){this.scene.background=new Ze("#e8eef4");const l=this.groundSoft?"#a7bf93":"#cdd1d6";o(this.far,this.ground?l:"#d9dfd3"),o(this.ground,l)}let a=null;try{this.r.setPixelRatio(1),this.r.setSize(e,n,!1),this.cam.aspect=e/n,this.cam.updateProjectionMatrix(),this.setCam("corner");const l=this.cam.position.clone().sub(this.ctl.target);this.cam.position.copy(this.ctl.target).addScaledVector(l,.8),this.ctl.update(),this.draw(),a=this.r.domElement.toDataURL("image/jpeg",.92)}finally{for(const[l,c]of s)l.material.dispose(),l.material=c;this.scene.background=r.bg,this.camMode=r.mode,this.r.setPixelRatio(r.pr),this.cam.position.copy(r.pos),this.ctl.target.copy(r.tgt),this.ctl.update(),this.resize()}return a}dispose(){this.ro.disconnect(),this.ctl.dispose(),Object.values(this.mats).forEach(e=>e.dispose()),this.geoms.forEach(e=>e.dispose()),[this.boxG,this.cylG,this.sphG].forEach(e=>e.dispose()),this.tex&&this.tex.dispose(),this.r.dispose(),this.r.domElement.remove()}}$f(ko,"current",null);const _b=[["corner","Corner"],["top","Overhead"],["eye","Eye level"]];function vb({tents:t,active:e,photoSrc:n}){const i=Ue.useRef(null),r=Ue.useRef(null),[s,o]=Ue.useState("Loading 3D view…"),[a,l]=Ue.useState("corner"),[c,u]=Ue.useState(!0),[d,f]=Ue.useState(!0);Ue.useEffect(()=>{let x;try{x=new ko(i.current)}catch{o("The 3D view needs WebGL, which is turned off in this browser.");return}return r.current=x,ko.current=x,o(null),()=>{ko.current===x&&(ko.current=null),x.dispose(),r.current=null}},[]),Ue.useEffect(()=>{const x=setTimeout(()=>{const g=r.current;g&&g.build(t,e,n,{roof:c,walls:d})},180);return()=>clearTimeout(x)},[t,e,n,c,d]);const p=x=>{l(x),r.current&&r.current.setCam(x)};return _.jsxs("section",{className:"card",children:[_.jsxs("div",{className:"toolbar",children:[_.jsx("h2",{className:"t3",children:"3D view"}),_.jsx("div",{className:"seg",role:"group","aria-label":"Camera",children:_b.map(([x,g])=>_.jsx("button",{"aria-pressed":a===x,onClick:()=>p(x),children:g},x))}),_.jsxs("label",{className:"chk",children:[_.jsx("input",{type:"checkbox",checked:c,onChange:x=>u(x.target.checked)})," Roof"]}),_.jsxs("label",{className:"chk",children:[_.jsx("input",{type:"checkbox",checked:d,onChange:x=>f(x.target.checked)})," Sidewalls"]}),_.jsx("span",{className:"hint hint3",children:"Drag to orbit · scroll or pinch to zoom · right-drag to pan"})]}),_.jsx("div",{className:"stage3d",ref:i,children:s&&_.jsx("p",{className:"hint msg3d",children:s})})]})}function xb(t,e){const{W:n,L:i,S:r}=e,s=Math.round(e.area),o=Math.round(e.perim),a=e.poles.filter(m=>!m.inner).length,l=e.poles.filter(m=>m.inner).length,c=[],u=m=>c.push({grp:m}),d=(m,h,v="")=>c.push({item:m,qty:h,note:v}),f=m=>e.items.filter(h=>h.def.id===m);if(u("Tent"),d(`${n}' × ${i}' ${e.T.label}${e.sh.oval?" (oval)":""}`,1,`${s.toLocaleString()} sq ft${e.sh.oval?" floor inside the oval":""} · ${a} perimeter ${e.sh.oval?"poles":"legs"}${l?` · ${l} center poles`:""}`),t.walls!=="none"&&d(`Sidewalls, ${{solid:"solid white",window:"cathedral window",clear:"clear"}[t.walls]}`,Math.ceil(o/20),`20' sections · ${o} lin ft perimeter`),t.surface==="grass"||t.surface==="gravel"?d("Stakes and ratchet straps",a*2,"2 per leg; locate utilities (call 811) before staking"):d("Ballast (water barrels or concrete blocks)",a,"1 per leg minimum; size weight to the tent's wind load rating"),e.exits.length){const m=e.exits.filter(h=>h.main).length;d("Lighted exit signs",e.exits.length,`${e.exits.length} openings × 72"${m?` (${m} entrance${m>1?"s":""})`:""} for ${t.guests} occupants`)}if(r.kind==="chair")u("Seating"),d(`${t.chairStyle} chairs`,e.units.length,"Ceremony rows with 5' center aisle");else if(e.units.length+e.headSeats>0){u("Seating");const m=[...new Set(e.units.map(v=>v.type))].map(v=>[jt[v],e.units.filter(y=>y.type===v)]);for(const[v,y]of m){const S=y.reduce((A,L)=>A+L.seats,0),T=y.some(A=>A.seats!==y[0].seats);d(v.table,y.length,T?`${S} seats in all; chair counts vary by table`:`${y[0].seats} guests each`)}const h=e.seats+e.headSeats;h&&d(`${t.chairStyle} chairs`,h,e.headSeats?`Includes ${e.headSeats} at the head table`:"");for(const[v,y]of m)d(`Tablecloths, ${v.linen}`,y.length);r.kind!=="none"&&d("Napkins",t.guests)}const p=[];for(const m of f("dance")){const h=Sa(t),v=t.acc.dance,y=h.sizes.some(T=>qo(T).join()===m.dims.join()),S=v.size==="custom"&&((v.cl||20)%4||(v.cw||20)%4);p.push([`${h.label} dance floor, ${m.dims[0]}' × ${m.dims[1]}'`,1,`${h.desc} · ${m.dims[0]/4*(m.dims[1]/4)} sections (4' × 4')${S?" · rounded up to whole sections":""}${y?"":`; custom size, confirm with Knights (stock sizes: ${h.sizes.map(T=>T.replace("x","×")).join(", ")})`}`]),v.wrap&&p.push(["Dance floor vinyl wrap",1,"Custom graphic, full or partial coverage"])}for(const m of f("stage"))p.push([`Stage ${m.dims[0]}' × ${m.dims[1]}'`,Math.ceil(m.dims[0]*m.dims[1]/32),`4' × 8' decks${m.dims[0]%4||m.dims[1]%4?" (size rounds up to full decks)":""} · ${m.dims[0]+2*m.dims[1]} lin ft skirting · steps`]);for(const m of f("head"))p.push(m.sweet?[`Sweetheart table${m.seats!==2?`, ${m.seats} seat${m.seats===1?"":"s"}`:""}`,1,"With linen"]:[`Head table, ${m.seats} seat${m.seats===1?"":"s"}`,Math.ceil(m.dims[0]/8),`8' banquet tables (${m.dims[0]}' long), linens and skirting`]);f("buffet").length&&p.push(["8' banquet tables for buffet",f("buffet").length*2,`${f("buffet").length} double-sided line${f("buffet").length>1?"s":""}, linens`]),f("bar").length&&p.push(["Bar with back bar",f("bar").length,"About 1 bar per 150 guests"]),f("dj").length&&p.push(["DJ table",1,"6' table, black linen, power drop"]),f("cake").length&&p.push(['Cake table, 48" round',1,"With linen"]),f("gift").length&&p.push(["Gift & card table, 6'",1,"Near the entrance"]),f("photo").length&&p.push(["Photo booth area",1,"10' × 10' with backdrop"]),f("lounge").length&&p.push(["Lounge furniture set",1,"Sofa, 2 chairs, coffee table"]),f("highboy").length&&p.push(['Cocktail tables, 30" highboy',f("highboy").length,'42" tall · 120" round cinched linens']),p.length&&(u("Floor items"),p.forEach(m=>d(...m)));const x=[];if(t.stringLights){const m=t.lightStyle||"swag",h=m==="both";if(m!=="perimeter"){const v=Math.max(1,Math.round(i/10)),y=Math.hypot(n,i/v);x.push([`Bistro string lights${h?", swag":""}`,Math.ceil(v*y/10)*10+" ft",`${v} zigzag runs across the ceiling`])}if(m!=="swag"){const v=da(e.sh,-uc);x.push([`Bistro string lights${h?", perimeter":""}`,Math.ceil(v*1.1/10)*10+" ft",`Around the inside of the ${e.sh.oval?"oval ":""}perimeter, ${uc}' in from the walls · includes 10% for drape between poles`])}}e.chands.length&&x.push(["Chandeliers",e.chands.length,t.chandList?"Placed as shown on the plan":"Centerline, one per 20' bay"]),t.uplights&&x.push(["LED uplights",Math.ceil(o/15),"Around the perimeter, about every 15'"]);const g=wf(t,s);return t.climate==="fans"&&x.push(["Industrial fans",g,"About 1 per 600 sq ft"]),t.climate.startsWith("heat")&&x.push(["Forced-air heaters, 150,000 BTU",g,`Estimate for ${t.climate==="heat-cold"?"cold":"cool"} weather; set outside with ducts`]),t.generator&&x.push(["Generator",1,"Size to the load (lights, DJ, heaters); place 20'+ from the tent"]),x.length&&(u("Lighting, climate & power"),x.forEach(m=>d(...m))),c}function Av(t){const e=t.length>1;return t.flatMap(({st:n,lay:i})=>xb(n,i).map(r=>r.grp&&e?{...r,grp:`${n.name} · ${r.grp}`,tent:!0}:r))}function yb(t){const e=t[0].st,n=t.reduce((r,s)=>r+s.st.guests,0),i=[`${e.siteName||"Tent layout"}${e.address?` · ${e.address}`:""}`,`${e.siteL}' x ${e.siteW}' ${e.surface} site · ${n} guests`];for(const{st:r,lay:s}of t)i.push(`${t.length>1?`${r.name}: `:""}${r.guests} guests · ${s.W}' x ${s.L}' ${s.T.label}`);i.push("");for(const r of Av(t))i.push(r.grp?`
${r.grp.toUpperCase()}`:`${r.qty}  ${r.item}${r.note?`  (${r.note})`:""}`);return i.join(`
`).replace(/\n{3,}/g,`

`)}function Sb(t,e,n){const{W:i,L:r,T:s,S:o}=e,a=e.area,l=[];if(o.kind==="none")a<t.guests*$o&&l.push(["bad",`${Math.round(a)} sq ft is tight for ${t.guests} standing guests. Plan on at least ${$o}–8 sq ft per guest (${t.guests*$o}+ sq ft); pick a larger tent.`]);else if(e.manual){const g=e.seated-e.seats;g>0?l.push(["warn",`${g} guest${g>1?"s":""} without a seat: the plan has ${e.seats} seats for ${e.seated} guests${e.headSeats?" (plus the head table)":""}. Add a table or chairs, or reset tables to auto.`]):g<0&&l.push(["info",`${-g} more seat${g<-1?"s":""} than guests. Fine for extra room; remove chairs or tables to trim the rental.`])}else e.capacity<e.needed&&l.push(["bad",`Only ${e.capacity} of ${e.needed} ${o.kind==="chair"?"chairs":"tables"} fit. Choose a larger tent, switch spacing to Tight, or turn off a floor item.`]);const c=Lc(t.guests),u=e.exits.length;u<c&&l.push(["bad",`${t.guests} guests need at least ${c} exits under the fire code (IFC Ch. 31, tents); the plan has ${u}. Add ${c-u} more under Entrances & exits.`]),u&&!e.exits.some(g=>g.main)&&l.push(["warn","No opening is marked as the entrance. Set one to “Entrance” so guests know where to come in."]),e.exits.some((g,m)=>e.exits.some((h,v)=>v>m&&Math.hypot(g.x-h.x,g.y-h.y)<7))&&l.push(["warn","Two openings overlap or sit side by side. Spread exits apart so one blocked doorway does not block both."]);const f=e.items.filter(g=>!g.fit);if(f.length&&l.push(["bad",`${[...new Set(f.map(g=>g.def.label))].join(", ")} ${f.length>1?"do":"does"} not fit cleanly. It is outlined in red; drag it somewhere open or pick a larger tent.`]),!Ef(t,i,r,s.stake))l.push(["bad",`The tent plus its ${s.stake}' stake and guy line area is ${r+2*s.stake}' × ${i+2*s.stake}', which is larger than the ${t.siteL}' × ${t.siteW}' site.`]);else if(n)l.push(["info",`On the site plan, keep buildings and lot lines outside the dashed 20' clearance ring (IFC 3103.8). ${t.photo.calibrated?"":"Set the photo scale first so the ring is accurate."}`]);else{const g=qr(t,e,n),m=g.x+r/2,h=g.y+i/2,{ex:v,ey:y}=Ma(t,r+2*s.stake,i+2*s.stake),S=Math.min(m-v,h-y,t.siteL-m-v,t.siteW-h-y);S<20&&l.push(["warn",`Tent sits ${Math.max(0,Math.floor(S))}' from the site edge. The fire code (IFC 3103.8) asks for 20' from lot lines and buildings; your local fire marshal can confirm exceptions.`])}const p=t.acc.dance||{};if(p.on&&p.size==="auto"){const g=Sa(t),m=qo(g.sizes[g.sizes.length-1]);m[0]*m[1]<kh(t)&&l.push(["warn",`About ${kh(t)} sq ft of dance floor suits ${t.guests} guests. The largest ${g.label.toLowerCase()} floor is ${m[0]}' × ${m[1]}' (${m[0]*m[1]} sq ft). Pick a finish with larger sizes or enter a custom size.`])}const x=e.units.filter(g=>g.bad).length;return x&&l.push(["warn",`${x} ${o.kind==="chair"?"chair":"table"}${x>1?"s":""} overlap${x>1?"":"s"} another item, a pole or the tent wall (outlined in red). Drag ${x>1?"them":"it"} to open floor.`]),e.ok&&!e.auto&&l.push(["ok",`Everything fits in the ${i}' × ${r}'.`]),e.auto&&e.ok&&l.push(["ok",`${i}' × ${r}' is the smallest ${s.label.toLowerCase()} that fits this layout.`]),l.push(["info",o.kind==="none"?`${(a/t.guests).toFixed(1)} sq ft per guest overall. Standing receptions usually need ${o.sqft} sq ft per guest, more with buffets and bars.`:`${(a/t.guests).toFixed(1)} sq ft per guest overall. Seating alone usually needs ${o.sqft} sq ft per guest for ${o.label.toLowerCase()}.`]),a>400&&l.push(["info","Tents over 400 sq ft usually need a permit (700 sq ft for open-sided frame tents). Check with the local building or fire department."]),(t.surface==="asphalt"||t.surface==="concrete")&&l.push(["info",`On ${t.surface}, plan for ballast. Staking needs the owner's approval and patching afterward.`]),(t.surface==="grass"||t.surface==="gravel")&&l.push(["info","Call 811 to mark underground utilities before staking."]),t.climate.startsWith("heat")&&l.push(["info","Keep heaters and fuel outside the tent and at the clearances listed by the heater manufacturer."]),l}function _l({k:t,v:e,s:n,pill:i}){return _.jsxs("div",{className:"stat",children:[_.jsx("span",{className:"k",children:t}),_.jsx("span",{className:"v",children:e}),_.jsx("span",{className:"s",children:n}),i&&_.jsx("span",{className:`pill ${i[0]}`,children:i[1]})]})}function Mb({st:t,lay:e,count:n=1}){const{W:i,L:r,T:s,S:o}=e,a=Math.round(e.area),l=o.kind==="chair",c=o.kind==="none",u=n>1,d=e.manual?Math.max(0,e.seated-e.seats):e.needed-Math.min(e.capacity,e.needed),f=c?e.area>=t.guests*$o?["ok","Standing room"]:["bad","Too tight"]:d>0?["bad",e.manual?`${d} without a seat`:`Short ${d}`]:["ok",e.manual?"Set by you":"Everyone seated"];return _.jsxs("div",{className:"stats",children:[_.jsx(_l,{k:u?t.name:"Tent",v:`${i}' × ${r}'`,s:`${s.label}${e.sh.oval?" (oval)":""} · ${a.toLocaleString()} sq ft`,pill:e.auto?["ok","Auto size"]:["warn","Size set by you"]}),_.jsx(_l,{k:"Seating",v:c?"No seating":l?`${e.units.length} chairs`:`${e.units.length} tables`,s:c?`standing room for ${t.guests} guests`:l?`for ${t.guests} guests`:`${e.seats} seats${e.headSeats?` + ${e.headSeats} at head table`:""}`,pill:f}),_.jsx(_l,{k:"Space per guest",v:(a/t.guests).toFixed(1),s:`sq ft · guide ${o.sqft} for seating`}),_.jsx(_l,{k:"Site",v:`${t.siteL}' × ${t.siteW}'`,s:`${u?`${n} tents · `:""}${Lc(t.guests)} exits required · ${t.surface}`,pill:Ef(t,i,r,s.stake)?["ok","Tent fits site"]:["bad","Tent too big for site"]})]})}function Eb({st:t,lay:e,view:n,tents:i}){const{W:r,L:s,T:o}=e,a=i&&i.length>1,l=new Date().toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}),c=a?i.reduce((d,f)=>d+f.st.guests,0):t.guests,u=[["Event / site",t.siteName||"Untitled layout"],["Location",`${t.address||Uh[t.sitePreset].label} · ${t.surface}`],["Guests",a&&n==="site"?`${c} total`:t.guests],["Tent",a&&n==="site"?`${i.length} tents`:`${a?`${t.name} · `:""}${r}' × ${s}' ${o.label.split(" (")[0]}`],["Date",l],["Sheet",n==="tent"?"L-1":"L-2"]];return _.jsxs("div",{className:"titleblock",children:[u.map(([d,f])=>_.jsxs("div",{children:[_.jsx("div",{className:"k",children:d}),_.jsx("div",{className:"v",children:f})]},d)),_.jsx("div",{className:"foot",children:"For planning only. Poles, exits and table counts are typical. Field-verify site, utilities, slope and code clearances before install."})]})}function wb({tents:t}){const[e,n]=Ue.useState("Copy list"),[i,r]=Ue.useState(null),s=Av(t),o=()=>{const a=yb(t),l=()=>{r(a),n("Select and copy below")};try{navigator.clipboard.writeText(a).then(()=>{n("Copied"),r(null),setTimeout(()=>n("Copy list"),1600)},l)}catch{l()}};return _.jsxs("section",{className:"card",children:[_.jsxs("div",{className:"cardhead",children:[_.jsxs("h2",{children:["Rental list",t.length>1?` · ${t.length} tents`:""]}),_.jsx("button",{className:"btn",onClick:o,children:e})]}),_.jsx("div",{className:"tablewrap",children:_.jsxs("table",{children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:"Item"}),_.jsx("th",{className:"q",children:"Qty"}),_.jsx("th",{children:"Notes"})]})}),_.jsx("tbody",{children:s.map((a,l)=>a.grp?_.jsx("tr",{className:"grp",children:_.jsx("td",{colSpan:3,children:a.grp})},l):_.jsxs("tr",{children:[_.jsx("td",{children:a.item}),_.jsx("td",{className:"q",children:a.qty}),_.jsx("td",{className:"n",children:a.note})]},l))})]})}),i!=null&&_.jsx("textarea",{className:"copyfall",readOnly:!0,"aria-label":"Rental list text",value:i,autoFocus:!0,onFocus:a=>a.target.select()})]})}function Tb({st:t,lay:e,ph:n,tents:i}){const r=i&&i.length>1,s=r?PS(i.map(c=>c.st),i.map(c=>c.lay),n):[],o=Sb(t,e,n).map(([c,u])=>[c,r?`${t.name}: ${u}`:u]),a={bad:0,warn:1,ok:2,info:3},l=[...s,...o].sort((c,u)=>a[c[0]]-a[u[0]]);return _.jsxs("section",{className:"card",children:[_.jsx("div",{className:"cardhead",children:_.jsx("h2",{children:"Checks & notes"})}),_.jsx("ul",{className:"notes",children:l.map(([c,u],d)=>_.jsx("li",{className:c,children:u},d))})]})}function Ab(){const t=Ks("tlp-current"),e=Oh(t&&(t.acc||t.tents)?t:null);let n=null;if(e.photo){try{n=localStorage.getItem("tlp-photo")}catch{}n||(e.photo=null)}return{model:e,photo:n}}function vl(t){try{t?localStorage.setItem("tlp-photo",t):localStorage.removeItem("tlp-photo")}catch{}}function bb(){const[t]=Ue.useState(Ab),[e,n]=Ue.useState(t.model),[i,r]=Ue.useState(t.photo),[s,o]=Ue.useState("tent"),[a,l]=Ue.useState(null),[c,u]=Ue.useState(null),[d,f]=Ue.useState(!1),p=Ue.useRef(null),x=Ue.useRef(null),g=!!(e.photo&&i),m=e.active,h=Ue.useMemo(()=>e.tents.map((C,I)=>Br(e,I)),[e]),v=Ue.useMemo(()=>h.map(C=>fa(C)),[h]),y=Ue.useMemo(()=>h.map((C,I)=>({st:C,lay:v[I]})),[h,v]),S=h[m],T=v[m];Ue.useEffect(()=>{Ks("tlp-current",e)},[e]);const A=Ue.useCallback(C=>n(I=>{const q=Qn(I),pe=Br(q,q.active);return C(pe),ES(q,q.active,pe),q}),[]),L=Ue.useCallback(C=>n(I=>{const q=Qn(I);return C(q),q}),[]),N=C=>{o(C),l(null),C!=="site"&&u(null)},w=C=>{C!==m&&(L(I=>{I.active=C}),l(null))},M=()=>{const C=bf(S,T,g);return{x:C.cx,y:C.cy}},U=C=>{const I=M();L(q=>{const pe=C?{...Qn(q.tents[q.active]),name:`${q.tents[q.active].name} (copy)`}:wS(q.tents.length+1);q.tents.push(pe),q.active=q.tents.length-1,V_(q,q.active,g,I)}),l(null)},$=C=>{L(I=>{I.tents.length<2||(I.tents.splice(C,1),I.active=ct(I.active>C?I.active-1:I.active,0,I.tents.length-1))}),l(null)},D=()=>L(C=>uu(C,g)),k=`${T.W}x${T.L}`,j=C=>{C.tentSize==="auto"&&(C.tentSize=k)},z=C=>{if(C.tables&&C.tables.manual&&C.tables.t===k&&C.tables.s===Io(C))return;j(C);const I=Io(C),q=C.tables&&C.tables.t===k&&C.tables.s===I?C.tables.pts:[];C.tables={t:k,s:I,pts:[...T.units.map(pe=>({x:pe.x,y:pe.y,rot:pe.rot||0,type:pe.type})),...q.slice(T.units.length)]}},ne=C=>A(I=>{I.exits||(I.exits=k_(T)),C(I.exits,I)}),R=a&&a.startsWith("x:")?+a.slice(2):-1,F=C=>{ne(I=>{I.splice(C,1)}),l(null)},W=C=>A(I=>{I.chandList||(I.chandList=U_(T)),C(I.chandList,I)}),ie=a&&a.startsWith("c:")?+a.slice(2):-1,he=C=>{W(I=>{I.splice(C,1)}),l(null)},Be=(C,I,q)=>{const pe=xS(T.sh,I,q);W(_e=>{_e[C]&&(_e[C]={fx:pe.x/T.L,fy:pe.y/T.W})})},ee=C=>{C&&s!=="tent"&&(o("tent"),u(null)),l(C)},ae=C=>{C.tables&&C.tables.manual&&C.tables.t===k&&C.tables.s===Io(C)||(j(C),C.tables={t:k,s:Io(C),manual:!0,pts:T.units.map(I=>({x:I.x,y:I.y,rot:I.rot||0,type:I.type,seats:I.seats}))})},xe=a&&a.startsWith("u:")?+a.slice(2):-1,me=C=>{const I=typeof C=="string"?C:T.base;if(T.S.kind==="none"||!jt[I])return;const q=(T.freeSpots[I]||[])[0]||{x:T.L/2,y:T.W/2},pe=T.S.kind==="chair"?1:I===T.base?T.per:jt[I].def;A(_e=>{ae(_e),_e.tables.pts.push({x:q.x,y:q.y,rot:0,type:I,seats:pe})}),s!=="tent"&&(o("tent"),u(null)),l("u:"+T.units.length)},Fe=C=>{T.units[C]&&(A(I=>{ae(I),I.tables.pts.splice(C,1)}),l(null))},Oe=(C,I)=>{if(!T.units[C])return;const q=Ll[T.units[C].type]||12;I<0||I>q||A(pe=>{ae(pe),pe.tables.pts[C].seats=I})},Ve=(C,I)=>{const q=T.units[C];!q||!Ll[I]||q.type===I||A(pe=>{ae(pe),pe.tables.pts[C]={...pe.tables.pts[C],type:I,seats:Math.min(q.seats,Ll[I])}})},Ke=()=>{A(C=>{C.tables=null,Object.keys(C.pos).length||(C.tentSize="auto")}),l(null)},ze=T.items.find(C=>C.def.id==="head"),st=a&&a.startsWith("h:")?+a.slice(2):-1,B=C=>{ze&&A(I=>{const q=I.acc.head;Array.isArray(q.chairs)||(q.chairs=ze.chairs.map(pe=>({x:pe.x,y:pe.y}))),C(q.chairs)})},Z=(C,I,q)=>{const[pe,_e]=ze.dims;B(et=>{et[C]&&(et[C]={x:ct(I,hi,pe-hi),y:ct(q,hi,_e-hi)})})},oe=C=>{B(I=>{I.splice(C,1)}),l(ze?"head":null)},de=()=>{if(!ze||ze.chairs.length>=B_(ze.dims[0]))return;const C=SS(ze);B(I=>{I.push(C)}),l("h:"+ze.chairs.length)},fe=()=>{A(C=>{delete C.acc.head.chairs}),a&&a.startsWith("h:")&&l("head")},ye=(C,I)=>{const q=(ze?ze.rot:0)*Math.PI/180,pe=Math.cos(q),_e=Math.sin(q);return[C*pe+I*_e,-C*_e+I*pe]},le=(C,I,q,pe)=>{const{hx:_e,hy:et}=jt[T.units[I].type]||T.S;C.tables.pts[I]={...C.tables.pts[I],x:ct(q,_e,T.L-_e),y:ct(pe,et,T.W-et)}},P=C=>{const I=p.current,q=I.createSVGPoint();return q.x=C.clientX,q.y=C.clientY,q.matrixTransform(I.getScreenCTM().inverse())},E=C=>{const I=p.current,q=I.closest(".svgwrap");if(q&&document.activeElement!==q&&q.focus({preventScroll:!0}),c&&s==="site"){const dt=P(C),Mt={x:dt.x,y:dt.y};u(zt=>({pts:zt.pts.length>=2?[Mt]:[...zt.pts,Mt]}));return}const pe=C.target.closest("[data-chand]");if(pe){const dt=+pe.dataset.chand,Mt=T.chands[dt];if(!Mt)return;const zt=P(C);x.current={chand:dt,ox:Mt.x,oy:Mt.y,px:zt.x,py:zt.y,moved:!1},l("c:"+dt),I.setPointerCapture(C.pointerId),f(!0),C.preventDefault();return}const _e=C.target.closest("[data-exit]");if(_e){const dt=+_e.dataset.exit;if(!T.exits[dt])return;const Mt=P(C);x.current={exit:dt,px:Mt.x,py:Mt.y,moved:!1},l("x:"+dt),I.setPointerCapture(C.pointerId),f(!0),C.preventDefault();return}const et=C.target.closest("[data-unit]");if(et){const dt=+et.dataset.unit,Mt=T.units[dt];if(!Mt)return;const zt=P(C);x.current={unit:dt,ox:Mt.x,oy:Mt.y,px:zt.x,py:zt.y,moved:!1},l("u:"+dt),I.setPointerCapture(C.pointerId),f(!0),C.preventDefault();return}const ut=C.target.closest("[data-hseat]");if(ut&&ze){const dt=+ut.dataset.hseat,Mt=ze.chairs[dt];if(!Mt)return;const zt=P(C);x.current={hseat:dt,ox:Mt.x,oy:Mt.y,px:zt.x,py:zt.y,moved:!1},l("h:"+dt),I.setPointerCapture(C.pointerId),f(!0),C.preventDefault();return}const ot=C.target.closest("[data-key]");if(!ot){l(null);return}const Ot=ot.dataset.key,Rn=P(C);if(Ot.startsWith("__tent")){const dt=+(Ot.split(":")[1]||m),Mt=qr(h[dt],v[dt],g);dt!==m&&L(zt=>{zt.active=dt}),x.current={key:"__tent",ox:Mt.x,oy:Mt.y,px:Rn.x,py:Rn.y,moved:!1},l("__tent"),I.setPointerCapture(C.pointerId),f(!0),C.preventDefault();return}const yr=T.items.find(dt=>dt.key===Ot);yr&&(x.current={key:Ot,ox:yr.x,oy:yr.y,px:Rn.x,py:Rn.y,moved:!1},l(Ot),I.setPointerCapture(C.pointerId),f(!0),C.preventDefault())},H=C=>{const I=x.current;if(!I)return;const q=P(C),pe=q.x-I.px,_e=q.y-I.py;if(!I.moved&&Math.hypot(pe,_e)<.4)return;if(I.chand!=null){I.moved=!0,Be(I.chand,Ln(I.ox+pe),Ln(I.oy+_e));return}if(I.hseat!=null){I.moved=!0;const[ut,ot]=ye(pe,_e);Z(I.hseat,Ln(I.ox+ut),Ln(I.oy+ot));return}if(I.exit!=null){I.moved=!0;const{side:ut,f:ot}=dS(T.sh,q.x,q.y);ne(Ot=>{Ot[I.exit]&&(Ot[I.exit]={...Ot[I.exit],side:ut,f:ot})});return}if(I.unit!=null){const ut=!I.moved;I.moved=!0,A(ot=>{(ut||!ot.tables)&&z(ot),le(ot,I.unit,Ln(I.ox+pe),Ln(I.oy+_e))});return}if(I.moved=!0,I.key==="__tent"){A(ut=>{ut.tentPos={x:Ln(I.ox+pe),y:Ln(I.oy+_e)}});return}const et=T.items.find(ut=>ut.key===I.key);et&&A(ut=>{j(ut),ut.pos[I.key]={x:ct(Ln(I.ox+pe),0,T.L-et.w),y:ct(Ln(I.oy+_e),0,T.W-et.h),rot:et.rot,t:k}})},te=()=>{x.current&&(x.current=null,f(!1))},re=()=>{if(a==="__tent")return S.tentAngle||0;if(a&&a.startsWith("u:")){const I=T.units[+a.slice(2)];return I&&I.rot||0}const C=T.items.find(I=>I.key===a);return C?C.rot:0},Q=C=>{if(!a||!Number.isFinite(C))return;if(a==="__tent"){A(ot=>{ot.tentAngle=fS(C)});return}if(a.startsWith("u:")){const ot=+a.slice(2);if(!T.units[ot])return;A(Ot=>{z(Ot),Ot.tables.pts[ot]={...Ot.tables.pts[ot],rot:Fh(C)}});return}const I=T.items.find(ot=>ot.key===a);if(!I)return;const q=Fh(C),[pe,_e]=Do(I.dims,q),et=I.x+I.w/2,ut=I.y+I.h/2;A(ot=>{j(ot),ot.pos[a]={x:ct(Ln(et-pe/2),0,Math.max(0,T.L-pe)),y:ct(Ln(ut-_e/2),0,Math.max(0,T.W-_e)),rot:q,t:k}})},Ee=C=>Q(re()+C),ve=()=>{const C=T.items.find(q=>q.key===a);if(!C)return;const I=C.def;A(q=>{const pe=q.acc[I.id];if(I.qty){const _e=pe.qty==="auto"?I_(I.id,q.guests):+pe.qty;_e<=1?pe.on=!1:pe.qty=String(_e-1)}else pe.on=!1;Object.keys(q.pos).filter(_e=>_e.startsWith(I.id)).forEach(_e=>delete q.pos[_e])}),l(null)},we=(C,I)=>{const q=T.items.find(pe=>pe.key===a);q&&A(pe=>{j(pe),pe.pos[a]={x:ct(q.x+C,0,T.L-q.w),y:ct(q.y+I,0,T.W-q.h),rot:q.rot,t:k}})},je=C=>{if(!a||C.target.tagName==="INPUT")return;const I={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[C.key];if(C.key==="r"||C.key==="R"){C.preventDefault(),Ee(C.shiftKey?15:90);return}if(a==="__tent"){if(I&&s==="site"){C.preventDefault();const q=qr(S,T,g);A(pe=>{pe.tentPos={x:q.x+I[0],y:q.y+I[1]}})}return}if(s==="tent"){if(ie>=0){const q=T.chands[ie];if(!q)return;if(C.key==="Delete"||C.key==="Backspace"){C.preventDefault(),he(ie);return}I&&(C.preventDefault(),Be(ie,q.x+I[0],q.y+I[1]));return}if(R>=0){const q=T.exits[R];if(!q)return;if(C.key==="Delete"||C.key==="Backspace"){C.preventDefault(),F(R);return}if(!I)return;C.preventDefault();const pe=q.side==="top"||q.side==="bottom",_e=pe?I[0]/T.L:I[1]/T.W;_e&&ne(et=>{et[R]={...et[R],f:ct(q.c/(pe?T.L:T.W)+_e,0,1)}});return}if(st>=0){const q=ze&&ze.chairs[st];if(!q)return;if(C.key==="Delete"||C.key==="Backspace"){C.preventDefault(),oe(st);return}if(C.key==="+"||C.key==="="){C.preventDefault(),de();return}if(!I)return;C.preventDefault();const[pe,_e]=ye(I[0]*.5,I[1]*.5);Z(st,q.x+pe,q.y+_e);return}if(a.startsWith("u:")){const q=+a.slice(2),pe=T.units[q];if(!pe)return;if(C.key==="Delete"||C.key==="Backspace"){C.preventDefault(),Fe(q);return}if(C.key==="+"||C.key==="="){C.preventDefault(),Oe(q,pe.seats+1);return}if(C.key==="-"||C.key==="_"){C.preventDefault(),Oe(q,pe.seats-1);return}if(!I)return;C.preventDefault(),A(_e=>{z(_e),le(_e,q,pe.x+I[0],pe.y+I[1])});return}I?(C.preventDefault(),we(...I)):(C.key==="Delete"||C.key==="Backspace")&&(C.preventDefault(),ve())}},ce=()=>{s==="site"?e.tents.length>1?D():A(C=>{C.tentPos=null}):A(C=>{C.pos={},C.tables=null,C.tentSize="auto"}),l(null)},Te=Ue.useCallback(C=>{if(!C||!C.type.startsWith("image/"))return;const I=new FileReader;I.onload=()=>{const q=new Image;q.onload=()=>{const pe=Math.min(1,2e3/Math.max(q.width,q.height)),_e=document.createElement("canvas");_e.width=Math.round(q.width*pe),_e.height=Math.round(q.height*pe),_e.getContext("2d").drawImage(q,0,0,_e.width,_e.height);const et=_e.toDataURL("image/jpeg",.85);r(et),vl(et),n(ut=>{const ot=Qn(ut);ot.photo={pw:_e.width,ph:_e.height,fpp:Math.max(ot.siteL,60)/_e.width,calibrated:!1};for(const Ot of ot.tents)Ot.tentAngle=0;return uu(ot,!0),ot}),u({pts:[]}),o("site"),l(null)},q.src=I.result},I.readAsDataURL(C)},[]);Ue.useEffect(()=>{const C=I=>{const q=[...I.clipboardData&&I.clipboardData.files||[]].find(pe=>pe.type.startsWith("image/"));q&&(I.preventDefault(),Te(q))};return document.addEventListener("paste",C),()=>document.removeEventListener("paste",C)},[Te]);const ke=()=>{g&&(N("site"),u({pts:[]}))},Ie=()=>{L(C=>{C.photo=null;for(const I of C.tents)I.tentAngle=0;uu(C,!1)}),u(null),r(null),vl(null)},Ae=C=>{!(C>0)||!Number.isFinite(C)||L(I=>{I.photo.fpp*=C,I.photo.calibrated=!0;for(const q of I.tents)q.tentPos&&(q.tentPos={x:q.tentPos.x*C,y:q.tentPos.y*C})})},Je=C=>{const I=c&&c.pts;if(!(C>0)||!I||I.length<2)return;const q=Math.hypot(I[1].x-I[0].x,I[1].y-I[0].y);q<.01||(Ae(C/q),u(null))},[He,rt]=Ue.useState("idle"),[O,Se]=Ue.useState(null),J=async()=>{if(He!=="busy"){rt("busy");try{const{makeClientPdf:C}=await oS(async()=>{const{makeClientPdf:I}=await import("./pdf-CbTjAY1k.js").then(q=>q.p);return{makeClientPdf:I}},[],import.meta.url);Se(await C({model:e,tents:y,active:m,ph:g,photoSrc:i})),rt("idle")}catch(C){console.error(C),rt("error"),setTimeout(()=>rt("idle"),4e3)}}},se=C=>{const I=Oh(C),q=I.photo&&C.photoSrc?C.photoSrc:null;q||(I.photo=null),n(I),r(q),vl(q),u(null),l(null)},be=()=>{n(Oh(null)),r(null),vl(null),u(null),l(null),o("tent")};return _.jsxs(_.Fragment,{children:[_.jsxs("header",{className:"top",children:[_.jsx("img",{className:"logo",src:LS,alt:"Knights Tent & Party Rental"}),_.jsxs("div",{children:[_.jsx("h1",{children:"Tent Layout Planner"}),_.jsx("p",{children:"Set the site, guest count and extras. The tent size, plan and rental list update as you go. Drag any floor item to move it."})]}),_.jsxs("button",{className:"btn primary pdfbtn",onClick:J,disabled:He==="busy","aria-live":"polite",title:"Download a client-ready PDF: overview, 3D preview, floor plans and rental summary",children:[_.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:_.jsx("path",{d:"M10 3v9m0 0-3.5-3.5M10 12l3.5-3.5M4 14v2.5h12V14",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),He==="busy"?"Preparing PDF…":He==="error"?"PDF failed, try again":"Download PDF"]})]}),O&&_.jsx(zS,{doc:O,onClose:()=>Se(null)}),_.jsxs("div",{className:"app",children:[_.jsx(kS,{st:S,lay:T,model:e,active:m,tents:y.map(C=>({name:C.st.name,guests:C.st.guests,lay:C.lay})),sel:a,onSelect:ee,update:A,ph:g,photoSrc:i,onPhotoFile:Te,onCalib:ke,onPhotoDel:Ie,onPhotoScale:Ae,onLoadLayout:se,onNewLayout:be,onPickTent:w,onAddTent:()=>U(!1),onDuplicateTent:()=>U(!0),onRemoveTent:$,onArrange:D,onAddTable:me,onResetTables:Ke}),_.jsxs("main",{className:"sheet",children:[_.jsx(Mb,{st:S,lay:T,count:e.tents.length}),_.jsxs("section",{className:"card",children:[_.jsxs("div",{className:"tenttabs",role:"group","aria-label":"Tents",children:[e.tents.map((C,I)=>_.jsx("button",{className:"tab","aria-pressed":I===m,onClick:()=>w(I),children:C.name},I)),_.jsx("button",{className:"btn sm",onClick:()=>U(!1),children:"+ Add tent"})]}),_.jsxs("div",{className:"toolbar",children:[_.jsxs("div",{className:"seg",role:"group","aria-label":"Drawing view",children:[_.jsx("button",{"aria-pressed":s==="tent",onClick:()=>N("tent"),children:"Tent plan"}),_.jsx("button",{"aria-pressed":s==="site",onClick:()=>N("site"),children:"Site plan"})]}),_.jsx("button",{className:"btn",onClick:ce,children:"Auto-arrange"}),_.jsx(jS,{view:s,calib:c,sel:a,lay:T,st:S,onCancelCalib:()=>u(null),onApplyCalib:Je,onRotate:Ee,onSetAngle:Q,onRemove:ve,onReflow:()=>{A(C=>{C.tables=null}),l(null)},onExitKind:C=>ne(I=>{I[R]&&(I[R]={...I[R],kind:C})}),onRemoveExit:()=>F(R),onAddExit:()=>{ne(C=>{C.push(O_(C))})},onRemoveChand:()=>he(ie),onAddChand:()=>W(C=>{C.push(F_(T))}),onSeats:C=>Oe(xe,C),onTableType:C=>Ve(xe,C),onAddTable:me,onRemoveTable:()=>Fe(xe),onAddHeadSeat:de,onRemoveHeadSeat:()=>oe(st),onResetHeadSeats:fe})]}),_.jsx("div",{className:"svgwrap",tabIndex:0,onKeyDown:je,"aria-label":"Layout drawing. Select an item, then use arrow keys to nudge, R to rotate, Delete to remove.",onDragOver:C=>C.preventDefault(),onDrop:C=>{const I=C.dataTransfer&&C.dataTransfer.files[0];I&&I.type.startsWith("image/")&&(C.preventDefault(),Te(I))},children:_.jsx(GS,{st:S,lay:T,tents:y,active:m,view:s,sel:a,calib:s==="site"?c:null,ph:g,photoSrc:i,svgRef:p,dragging:d,onPointerDown:E,onPointerMove:H,onPointerUp:te,onPointerCancel:te})}),_.jsx(Eb,{st:S,lay:T,view:s,tents:y})]}),_.jsx(vb,{tents:y,active:m,photoSrc:g?i:null}),_.jsxs("div",{className:"two",children:[_.jsx(wb,{tents:y}),_.jsx(Tb,{st:S,lay:T,ph:g,tents:y})]})]})]})]})}R_(document.getElementById("root")).render(_.jsx(Ue.StrictMode,{children:_.jsx(bb,{})}));export{uS as L,GS as P,ko as S,oS as _,Uh as a,jt as b,Av as c,Sa as d,LS as l,Ue as r};
