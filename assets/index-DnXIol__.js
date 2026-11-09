(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var lg={exports:{}},sc={},cg={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),yv=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Ev=Symbol.for("react.profiler"),Tv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),Av=Symbol.for("react.forward_ref"),bv=Symbol.for("react.suspense"),Cv=Symbol.for("react.memo"),Rv=Symbol.for("react.lazy"),Vd=Symbol.iterator;function Pv(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,fg={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=fg,this.updater=n||ug}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dg(){}dg.prototype=Ys.prototype;function xf(t,e,n){this.props=t,this.context=e,this.refs=fg,this.updater=n||ug}var yf=xf.prototype=new dg;yf.constructor=xf;hg(yf,Ys.prototype);yf.isPureReactComponent=!0;var Gd=Array.isArray,pg=Object.prototype.hasOwnProperty,Sf={current:null},mg={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pg.call(e,i)&&!mg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:aa,type:t,key:s,ref:o,props:r,_owner:Sf.current}}function Lv(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function Nv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jd=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nv(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case yv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bc(o,0):i,Gd(r)?(n="",t!=null&&(n=t.replace(jd,"$&/")+"/"),ul(r,e,n,"",function(c){return c})):r!=null&&(Mf(r)&&(r=Lv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Gd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bc(s,a);o+=ul(s,e,n,l,r)}else if(l=Pv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bc(s,a++),o+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Dv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},hl={transition:null},Iv={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Sf};function _g(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!Mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ys;Ye.Fragment=Sv;Ye.Profiler=Ev;Ye.PureComponent=xf;Ye.StrictMode=Mv;Ye.Suspense=bv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;Ye.act=_g;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pg.call(e,l)&&!mg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:aa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:wv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tv,_context:t},t.Consumer=t};Ye.createElement=gg;Ye.createFactory=function(t){var e=gg.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Av,render:t}};Ye.isValidElement=Mf;Ye.lazy=function(t){return{$$typeof:Rv,_payload:{_status:-1,_result:t},_init:Dv}};Ye.memo=function(t,e){return{$$typeof:Cv,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};Ye.unstable_act=_g;Ye.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Ye.useContext=function(t){return Jt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Ye.useId=function(){return Jt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Jt.current.useRef(t)};Ye.useState=function(t){return Jt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Jt.current.useTransition()};Ye.version="18.3.1";cg.exports=Ye;var ke=cg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv=ke,Fv=Symbol.for("react.element"),Ov=Symbol.for("react.fragment"),kv=Object.prototype.hasOwnProperty,zv=Uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bv={key:!0,ref:!0,__self:!0,__source:!0};function vg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)kv.call(e,i)&&!Bv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Fv,type:t,key:s,ref:o,props:r,_owner:zv.current}}sc.Fragment=Ov;sc.jsx=vg;sc.jsxs=vg;lg.exports=sc;var x=lg.exports,xg={exports:{}},yn={},yg={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,k){var Z=P.length;P.push(k);e:for(;0<Z;){var se=Z-1>>>1,fe=P[se];if(0<r(fe,k))P[se]=k,P[Z]=fe,Z=se;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var k=P[0],Z=P.pop();if(Z!==k){P[0]=Z;e:for(var se=0,fe=P.length,Oe=fe>>>1;se<Oe;){var te=2*(se+1)-1,le=P[te],ye=te+1,_e=P[ye];if(0>r(le,Z))ye<fe&&0>r(_e,le)?(P[se]=_e,P[ye]=Z,se=ye):(P[se]=le,P[te]=Z,se=te);else if(ye<fe&&0>r(_e,Z))P[se]=_e,P[ye]=Z,se=ye;else break e}}return k}function r(P,k){var Z=P.sortIndex-k.sortIndex;return Z!==0?Z:P.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,m=!1,v=!1,g=!1,p=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=P)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(P){if(g=!1,y(P),!v)if(n(l)!==null)v=!0,j(T);else{var k=n(c);k!==null&&O(S,k.startTime-P)}}function T(P,k){v=!1,g&&(g=!1,h(N),N=-1),m=!0;var Z=d;try{for(y(k),f=n(l);f!==null&&(!(f.expirationTime>k)||P&&!I());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var fe=se(f.expirationTime<=k);k=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(l)&&i(l),y(k)}else i(l);f=n(l)}if(f!==null)var Oe=!0;else{var te=n(c);te!==null&&O(S,te.startTime-k),Oe=!1}return Oe}finally{f=null,d=Z,m=!1}}var b=!1,C=null,N=-1,w=5,M=-1;function I(){return!(t.unstable_now()-M<w)}function q(){if(C!==null){var P=t.unstable_now();M=P;var k=!0;try{k=C(!0,P)}finally{k?U():(b=!1,C=null)}}else b=!1}var U;if(typeof _=="function")U=function(){_(q)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=q,U=function(){$.postMessage(null)}}else U=function(){p(q,0)};function j(P){C=P,b||(b=!0,U())}function O(P,k){N=p(function(){P(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,j(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var Z=d;d=k;try{return P()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=d;d=P;try{return k()}finally{d=Z}},t.unstable_scheduleCallback=function(P,k,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,P){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Z+fe,P={id:u++,callback:k,priorityLevel:P,startTime:Z,expirationTime:fe,sortIndex:-1},Z>se?(P.sortIndex=Z,e(c,P),n(l)===null&&P===n(c)&&(g?(h(N),N=-1):g=!0,O(S,Z-se))):(P.sortIndex=fe,e(l,P),v||m||(v=!0,j(T))),P},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(P){var k=d;return function(){var Z=d;d=k;try{return P.apply(this,arguments)}finally{d=Z}}}})(Sg);yg.exports=Sg;var Hv=yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv=ke,xn=Hv;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mg=new Set,Bo={};function Wr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Bo[t]=e,t=0;t<e.length;t++)Mg.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,Gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wd={},Xd={};function jv(t){return Fu.call(Xd,t)?!0:Fu.call(Wd,t)?!1:Gv.test(t)?Xd[t]=!0:(Wd[t]=!0,!1)}function Wv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xv(t,e,n,i){if(e===null||typeof e>"u"||Wv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function Tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ef,Tf);zt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ef,Tf);zt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ef,Tf);zt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xv(e,n,r,i)&&(n=null),i||r===null?jv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),hs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),Tg=Symbol.for("react.context"),bf=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),$d=Symbol.iterator;function io(t){return t===null||typeof t!="object"?null:(t=$d&&t[$d]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,Cc;function So(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Rc=!1;function Pc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function $v(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case hs:return"Portal";case Ou:return"Profiler";case Af:return"StrictMode";case ku:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tg:return(t.displayName||"Context")+".Consumer";case Eg:return(t._context.displayName||"Context")+".Provider";case bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function qv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===Af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yv(t){var e=Ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=Yv(t))}function bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cg(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function Vu(t,e){Cg(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gu(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gu(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(Mo(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Rg(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ta,Lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){Kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function Ng(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ng(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Zv=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Zv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function Rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,bs=null,Cs=null;function Qd(t){if(t=ua(t)){if(typeof Yu!="function")throw Error(he(280));var e=t.stateNode;e&&(e=uc(e),Yu(t.stateNode,t.type,e))}}function Ig(t){bs?Cs?Cs.push(t):Cs=[t]:bs=t}function Ug(){if(bs){var t=bs,e=Cs;if(Cs=bs=null,Qd(t),e)for(t=0;t<e.length;t++)Qd(e[t])}}function Fg(t,e){return t(e)}function Og(){}var Lc=!1;function kg(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return Fg(t,e,n)}finally{Lc=!1,(bs!==null||Cs!==null)&&(Og(),Ug())}}function Vo(t,e){var n=t.stateNode;if(n===null)return null;var i=uc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var Ku=!1;if(Ai)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Ku=!1}function Qv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Po=!1,Ll=null,Nl=!1,Zu=null,Jv={onError:function(t){Po=!0,Ll=t}};function ex(t,e,n,i,r,s,o,a,l){Po=!1,Ll=null,Qv.apply(Jv,arguments)}function tx(t,e,n,i,r,s,o,a,l){if(ex.apply(this,arguments),Po){if(Po){var c=Ll;Po=!1,Ll=null}else throw Error(he(198));Nl||(Nl=!0,Zu=c)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jd(t){if(Xr(t)!==t)throw Error(he(188))}function nx(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jd(r),t;if(s===i)return Jd(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function Bg(t){return t=nx(t),t!==null?Hg(t):null}function Hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hg(t);if(e!==null)return e;t=t.sibling}return null}var Vg=xn.unstable_scheduleCallback,ep=xn.unstable_cancelCallback,ix=xn.unstable_shouldYield,rx=xn.unstable_requestPaint,Et=xn.unstable_now,sx=xn.unstable_getCurrentPriorityLevel,Pf=xn.unstable_ImmediatePriority,Gg=xn.unstable_UserBlockingPriority,Dl=xn.unstable_NormalPriority,ox=xn.unstable_LowPriority,jg=xn.unstable_IdlePriority,oc=null,ri=null;function ax(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(oc,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:ux,lx=Math.log,cx=Math.LN2;function ux(t){return t>>>=0,t===0?32:31-(lx(t)/cx|0)|0}var wa=64,Aa=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Eo(a):(s&=o,s!==0&&(i=Eo(s)))}else o=n&~r,o!==0?i=Eo(o):s!==0&&(i=Eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function hx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wg(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function dx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $g,Nf,qg,Yg,Kg,Ju=!1,ba=[],Ki=null,Zi=null,Qi=null,Go=new Map,jo=new Map,Wi=[],px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function so(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&Nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function mx(t,e,n,i,r){switch(e){case"focusin":return Ki=so(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=so(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=so(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Go.set(s,so(Go.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,jo.set(s,so(jo.get(s)||null,t,e,n,i,r)),!0}return!1}function Zg(t){var e=Ar(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=zg(n),e!==null){t.blockedOn=e,Kg(t.priority,function(){qg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qu=i,n.target.dispatchEvent(i),qu=null}else return e=ua(n),e!==null&&Nf(e),t.blockedOn=n,!1;e.shift()}return!0}function np(t,e,n){fl(t)&&n.delete(e)}function gx(){Ju=!1,Ki!==null&&fl(Ki)&&(Ki=null),Zi!==null&&fl(Zi)&&(Zi=null),Qi!==null&&fl(Qi)&&(Qi=null),Go.forEach(np),jo.forEach(np)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,gx)))}function Wo(t){function e(r){return oo(r,t)}if(0<ba.length){oo(ba[0],t);for(var n=1;n<ba.length;n++){var i=ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&oo(Ki,t),Zi!==null&&oo(Zi,t),Qi!==null&&oo(Qi,t),Go.forEach(e),jo.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)Zg(n),n.blockedOn===null&&Wi.shift()}var Rs=Li.ReactCurrentBatchConfig,Ul=!0;function _x(t,e,n,i){var r=st,s=Rs.transition;Rs.transition=null;try{st=1,Df(t,e,n,i)}finally{st=r,Rs.transition=s}}function vx(t,e,n,i){var r=st,s=Rs.transition;Rs.transition=null;try{st=4,Df(t,e,n,i)}finally{st=r,Rs.transition=s}}function Df(t,e,n,i){if(Ul){var r=eh(t,e,n,i);if(r===null)Vc(t,e,i,Fl,n),tp(t,i);else if(mx(r,t,e,n,i))i.stopPropagation();else if(tp(t,i),e&4&&-1<px.indexOf(t)){for(;r!==null;){var s=ua(r);if(s!==null&&$g(s),s=eh(t,e,n,i),s===null&&Vc(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(t,e,i,null,n)}}var Fl=null;function eh(t,e,n,i){if(Fl=null,t=Rf(i),t=Ar(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function Qg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sx()){case Pf:return 1;case Gg:return 4;case Dl:case ox:return 16;case jg:return 536870912;default:return 16}default:return 16}}var qi=null,If=null,dl=null;function Jg(){if(dl)return dl;var t,e=If,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return dl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function ip(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:ip,this.isPropagationStopped=ip,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=Sn(Ks),ca=vt({},Ks,{view:0,detail:0}),xx=Sn(ca),Dc,Ic,ao,ac=vt({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(Dc=t.screenX-ao.screenX,Ic=t.screenY-ao.screenY):Ic=Dc=0,ao=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),rp=Sn(ac),yx=vt({},ac,{dataTransfer:0}),Sx=Sn(yx),Mx=vt({},ca,{relatedTarget:0}),Uc=Sn(Mx),Ex=vt({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=Sn(Ex),wx=vt({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ax=Sn(wx),bx=vt({},Ks,{data:0}),sp=Sn(bx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Px[t])?!!e[t]:!1}function Ff(){return Lx}var Nx=vt({},ca,{key:function(t){if(t.key){var e=Cx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dx=Sn(Nx),Ix=vt({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Sn(Ix),Ux=vt({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),Fx=Sn(Ux),Ox=vt({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=Sn(Ox),zx=vt({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bx=Sn(zx),Hx=[9,13,27,32],Of=Ai&&"CompositionEvent"in window,Lo=null;Ai&&"documentMode"in document&&(Lo=document.documentMode);var Vx=Ai&&"TextEvent"in window&&!Lo,e0=Ai&&(!Of||Lo&&8<Lo&&11>=Lo),ap=" ",lp=!1;function t0(t,e){switch(t){case"keyup":return Hx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Gx(t,e){switch(t){case"compositionend":return n0(e);case"keypress":return e.which!==32?null:(lp=!0,ap);case"textInput":return t=e.data,t===ap&&lp?null:t;default:return null}}function jx(t,e){if(ds)return t==="compositionend"||!Of&&t0(t,e)?(t=Jg(),dl=If=qi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e0&&e.locale!=="ko"?null:e.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wx[t.type]:e==="textarea"}function i0(t,e,n,i){Ig(i),e=Ol(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var No=null,Xo=null;function Xx(t){p0(t,0)}function lc(t){var e=gs(t);if(bg(e))return t}function $x(t,e){if(t==="change")return e}var r0=!1;if(Ai){var Fc;if(Ai){var Oc="oninput"in document;if(!Oc){var up=document.createElement("div");up.setAttribute("oninput","return;"),Oc=typeof up.oninput=="function"}Fc=Oc}else Fc=!1;r0=Fc&&(!document.documentMode||9<document.documentMode)}function hp(){No&&(No.detachEvent("onpropertychange",s0),Xo=No=null)}function s0(t){if(t.propertyName==="value"&&lc(Xo)){var e=[];i0(e,Xo,t,Rf(t)),kg(Xx,e)}}function qx(t,e,n){t==="focusin"?(hp(),No=e,Xo=n,No.attachEvent("onpropertychange",s0)):t==="focusout"&&hp()}function Yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lc(Xo)}function Kx(t,e){if(t==="click")return lc(e)}function Zx(t,e){if(t==="input"||t==="change")return lc(e)}function Qx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Qx;function $o(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,e){var n=fp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fp(n)}}function o0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a0(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jx(t){var e=a0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o0(n.ownerDocument.documentElement,n)){if(i!==null&&kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=dp(n,s);var o=dp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ey=Ai&&"documentMode"in document&&11>=document.documentMode,ps=null,th=null,Do=null,nh=!1;function pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||ps==null||ps!==Pl(i)||(i=ps,"selectionStart"in i&&kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Do&&$o(Do,i)||(Do=i,i=Ol(th,"onSelect"),0<i.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},kc={},l0={};Ai&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function cc(t){if(kc[t])return kc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l0)return kc[t]=e[n];return t}var c0=cc("animationend"),u0=cc("animationiteration"),h0=cc("animationstart"),f0=cc("transitionend"),d0=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){d0.set(t,e),Wr(e,[t])}for(var zc=0;zc<mp.length;zc++){var Bc=mp[zc],ty=Bc.toLowerCase(),ny=Bc[0].toUpperCase()+Bc.slice(1);ur(ty,"on"+ny)}ur(c0,"onAnimationEnd");ur(u0,"onAnimationIteration");ur(h0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(f0,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,tx(i,e,void 0,t),t.currentTarget=null}function p0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gp(r,a,c),s=l}}}if(Nl)throw t=Zu,Nl=!1,Zu=null,t}function ft(t,e){var n=e[ah];n===void 0&&(n=e[ah]=new Set);var i=t+"__bubble";n.has(i)||(m0(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),m0(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Pa]){t[Pa]=!0,Mg.forEach(function(n){n!=="selectionchange"&&(iy.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Hc("selectionchange",!1,e))}}function m0(t,e,n,i){switch(Qg(e)){case 1:var r=_x;break;case 4:r=vx;break;default:r=Df}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}kg(function(){var c=s,u=Rf(n),f=[];e:{var d=d0.get(t);if(d!==void 0){var m=Uf,v=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":m=Dx;break;case"focusin":v="focus",m=Uc;break;case"focusout":v="blur",m=Uc;break;case"beforeblur":case"afterblur":m=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fx;break;case c0:case u0:case h0:m=Tx;break;case f0:m=kx;break;case"scroll":m=xx;break;case"wheel":m=Bx;break;case"copy":case"cut":case"paste":m=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=op}var g=(e&4)!==0,p=!g&&t==="scroll",h=g?d!==null?d+"Capture":null:d;g=[];for(var _=c,y;_!==null;){y=_;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=Vo(_,h),S!=null&&g.push(Yo(_,S,y)))),p)break;_=_.return}0<g.length&&(d=new m(d,v,null,n,u),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==qu&&(v=n.relatedTarget||n.fromElement)&&(Ar(v)||v[bi]))break e;if((m||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Ar(v):null,v!==null&&(p=Xr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(g=rp,S="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(g=op,S="onPointerLeave",h="onPointerEnter",_="pointer"),p=m==null?d:gs(m),y=v==null?d:gs(v),d=new g(S,_+"leave",m,n,u),d.target=p,d.relatedTarget=y,S=null,Ar(u)===c&&(g=new g(h,_+"enter",v,n,u),g.target=y,g.relatedTarget=p,S=g),p=S,m&&v)t:{for(g=m,h=v,_=0,y=g;y;y=Yr(y))_++;for(y=0,S=h;S;S=Yr(S))y++;for(;0<_-y;)g=Yr(g),_--;for(;0<y-_;)h=Yr(h),y--;for(;_--;){if(g===h||h!==null&&g===h.alternate)break t;g=Yr(g),h=Yr(h)}g=null}else g=null;m!==null&&_p(f,d,m,g,!1),v!==null&&p!==null&&_p(f,p,v,g,!0)}}e:{if(d=c?gs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=$x;else if(cp(d))if(r0)T=Zx;else{T=Yx;var b=qx}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Kx);if(T&&(T=T(t,c))){i0(f,T,n,u);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Gu(d,"number",d.value)}switch(b=c?gs(c):window,t){case"focusin":(cp(b)||b.contentEditable==="true")&&(ps=b,th=c,Do=null);break;case"focusout":Do=th=ps=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,pp(f,n,u);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":pp(f,n,u)}var C;if(Of)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ds?t0(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(e0&&n.locale!=="ko"&&(ds||N!=="onCompositionStart"?N==="onCompositionEnd"&&ds&&(C=Jg()):(qi=u,If="value"in qi?qi.value:qi.textContent,ds=!0)),b=Ol(c,N),0<b.length&&(N=new sp(N,t,null,n,u),f.push({event:N,listeners:b}),C?N.data=C:(C=n0(n),C!==null&&(N.data=C)))),(C=Vx?Gx(t,n):jx(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(u=new sp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=C))}p0(f,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Vo(t,n),s!=null&&i.unshift(Yo(t,s,r)),s=Vo(t,e),s!=null&&i.push(Yo(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Vo(n,s),l!=null&&o.unshift(Yo(n,l,a))):r||(l=Vo(n,s),l!=null&&o.push(Yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ry=/\r\n?/g,sy=/\u0000|\uFFFD/g;function vp(t){return(typeof t=="string"?t:""+t).replace(ry,`
`).replace(sy,"")}function La(t,e,n){if(e=vp(e),vp(t)!==e&&n)throw Error(he(425))}function kl(){}var ih=null,rh=null;function sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(t){return xp.resolve(null).then(t).catch(ly)}:oh;function ly(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wo(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Zs,Ko="__reactProps$"+Zs,bi="__reactContainer$"+Zs,ah="__reactEvents$"+Zs,cy="__reactListeners$"+Zs,uy="__reactHandles$"+Zs;function Ar(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yp(t);t!==null;){if(n=t[ni])return n;t=yp(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[ni]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function uc(t){return t[Ko]||null}var lh=[],_s=-1;function hr(t){return{current:t}}function pt(t){0>_s||(t.current=lh[_s],lh[_s]=null,_s--)}function ct(t,e){_s++,lh[_s]=t.current,t.current=e}var ar={},$t=hr(ar),an=hr(!1),Ur=ar;function Os(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function zl(){pt(an),pt($t)}function Sp(t,e,n){if($t.current!==ar)throw Error(he(168));ct($t,e),ct(an,n)}function g0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,qv(t)||"Unknown",r));return vt({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Ur=$t.current,ct($t,t),ct(an,an.current),!0}function Mp(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=g0(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,pt(an),pt($t),ct($t,t)):pt(an),ct(an,n)}var vi=null,hc=!1,jc=!1;function _0(t){vi===null?vi=[t]:vi.push(t)}function hy(t){hc=!0,_0(t)}function fr(){if(!jc&&vi!==null){jc=!0;var t=0,e=st;try{var n=vi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,hc=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),Vg(Pf,fr),r}finally{st=e,jc=!1}}return null}var vs=[],xs=0,Hl=null,Vl=0,Tn=[],wn=0,Fr=null,yi=1,Si="";function Sr(t,e){vs[xs++]=Vl,vs[xs++]=Hl,Hl=t,Vl=e}function v0(t,e,n){Tn[wn++]=yi,Tn[wn++]=Si,Tn[wn++]=Fr,Fr=t;var i=yi;t=Si;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-Xn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function zf(t){t.return!==null&&(Sr(t,1),v0(t,1,0))}function Bf(t){for(;t===Hl;)Hl=vs[--xs],vs[xs]=null,Vl=vs[--xs],vs[xs]=null;for(;t===Fr;)Fr=Tn[--wn],Tn[wn]=null,Si=Tn[--wn],Tn[wn]=null,yi=Tn[--wn],Tn[wn]=null}var vn=null,_n=null,mt=!1,Hn=null;function x0(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,_n=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,_n=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uh(t){if(mt){var e=_n;if(e){var n=e;if(!Ep(t,e)){if(ch(t))throw Error(he(418));e=Ji(n.nextSibling);var i=vn;e&&Ep(t,e)?x0(i,n):(t.flags=t.flags&-4097|2,mt=!1,vn=t)}}else{if(ch(t))throw Error(he(418));t.flags=t.flags&-4097|2,mt=!1,vn=t}}}function Tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Na(t){if(t!==vn)return!1;if(!mt)return Tp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sh(t.type,t.memoizedProps)),e&&(e=_n)){if(ch(t))throw y0(),Error(he(418));for(;e;)x0(t,e),e=Ji(e.nextSibling)}if(Tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=vn?Ji(t.stateNode.nextSibling):null;return!0}function y0(){for(var t=_n;t;)t=Ji(t.nextSibling)}function ks(){_n=vn=null,mt=!1}function Hf(t){Hn===null?Hn=[t]:Hn.push(t)}var fy=Li.ReactCurrentBatchConfig;function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wp(t){var e=t._init;return e(t._payload)}function S0(t){function e(h,_){if(t){var y=h.deletions;y===null?(h.deletions=[_],h.flags|=16):y.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=ir(h,_),h.index=0,h.sibling=null,h}function s(h,_,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<_?(h.flags|=2,_):y):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,y,S){return _===null||_.tag!==6?(_=Zc(y,h.mode,S),_.return=h,_):(_=r(_,y),_.return=h,_)}function l(h,_,y,S){var T=y.type;return T===fs?u(h,_,y.props.children,S,y.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Vi&&wp(T)===_.type)?(S=r(_,y.props),S.ref=lo(h,_,y),S.return=h,S):(S=Sl(y.type,y.key,y.props,null,h.mode,S),S.ref=lo(h,_,y),S.return=h,S)}function c(h,_,y,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Qc(y,h.mode,S),_.return=h,_):(_=r(_,y.children||[]),_.return=h,_)}function u(h,_,y,S,T){return _===null||_.tag!==7?(_=Nr(y,h.mode,S,T),_.return=h,_):(_=r(_,y),_.return=h,_)}function f(h,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Zc(""+_,h.mode,y),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:return y=Sl(_.type,_.key,_.props,null,h.mode,y),y.ref=lo(h,null,_),y.return=h,y;case hs:return _=Qc(_,h.mode,y),_.return=h,_;case Vi:var S=_._init;return f(h,S(_._payload),y)}if(Mo(_)||io(_))return _=Nr(_,h.mode,y,null),_.return=h,_;Da(h,_)}return null}function d(h,_,y,S){var T=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(h,_,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ma:return y.key===T?l(h,_,y,S):null;case hs:return y.key===T?c(h,_,y,S):null;case Vi:return T=y._init,d(h,_,T(y._payload),S)}if(Mo(y)||io(y))return T!==null?null:u(h,_,y,S,null);Da(h,y)}return null}function m(h,_,y,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,a(_,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ma:return h=h.get(S.key===null?y:S.key)||null,l(_,h,S,T);case hs:return h=h.get(S.key===null?y:S.key)||null,c(_,h,S,T);case Vi:var b=S._init;return m(h,_,y,b(S._payload),T)}if(Mo(S)||io(S))return h=h.get(y)||null,u(_,h,S,T,null);Da(_,S)}return null}function v(h,_,y,S){for(var T=null,b=null,C=_,N=_=0,w=null;C!==null&&N<y.length;N++){C.index>N?(w=C,C=null):w=C.sibling;var M=d(h,C,y[N],S);if(M===null){C===null&&(C=w);break}t&&C&&M.alternate===null&&e(h,C),_=s(M,_,N),b===null?T=M:b.sibling=M,b=M,C=w}if(N===y.length)return n(h,C),mt&&Sr(h,N),T;if(C===null){for(;N<y.length;N++)C=f(h,y[N],S),C!==null&&(_=s(C,_,N),b===null?T=C:b.sibling=C,b=C);return mt&&Sr(h,N),T}for(C=i(h,C);N<y.length;N++)w=m(C,h,N,y[N],S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?N:w.key),_=s(w,_,N),b===null?T=w:b.sibling=w,b=w);return t&&C.forEach(function(I){return e(h,I)}),mt&&Sr(h,N),T}function g(h,_,y,S){var T=io(y);if(typeof T!="function")throw Error(he(150));if(y=T.call(y),y==null)throw Error(he(151));for(var b=T=null,C=_,N=_=0,w=null,M=y.next();C!==null&&!M.done;N++,M=y.next()){C.index>N?(w=C,C=null):w=C.sibling;var I=d(h,C,M.value,S);if(I===null){C===null&&(C=w);break}t&&C&&I.alternate===null&&e(h,C),_=s(I,_,N),b===null?T=I:b.sibling=I,b=I,C=w}if(M.done)return n(h,C),mt&&Sr(h,N),T;if(C===null){for(;!M.done;N++,M=y.next())M=f(h,M.value,S),M!==null&&(_=s(M,_,N),b===null?T=M:b.sibling=M,b=M);return mt&&Sr(h,N),T}for(C=i(h,C);!M.done;N++,M=y.next())M=m(C,h,N,M.value,S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?N:M.key),_=s(M,_,N),b===null?T=M:b.sibling=M,b=M);return t&&C.forEach(function(q){return e(h,q)}),mt&&Sr(h,N),T}function p(h,_,y,S){if(typeof y=="object"&&y!==null&&y.type===fs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ma:e:{for(var T=y.key,b=_;b!==null;){if(b.key===T){if(T=y.type,T===fs){if(b.tag===7){n(h,b.sibling),_=r(b,y.props.children),_.return=h,h=_;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Vi&&wp(T)===b.type){n(h,b.sibling),_=r(b,y.props),_.ref=lo(h,b,y),_.return=h,h=_;break e}n(h,b);break}else e(h,b);b=b.sibling}y.type===fs?(_=Nr(y.props.children,h.mode,S,y.key),_.return=h,h=_):(S=Sl(y.type,y.key,y.props,null,h.mode,S),S.ref=lo(h,_,y),S.return=h,h=S)}return o(h);case hs:e:{for(b=y.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(h,_.sibling),_=r(_,y.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Qc(y,h.mode,S),_.return=h,h=_}return o(h);case Vi:return b=y._init,p(h,_,b(y._payload),S)}if(Mo(y))return v(h,_,y,S);if(io(y))return g(h,_,y,S);Da(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,y),_.return=h,h=_):(n(h,_),_=Zc(y,h.mode,S),_.return=h,h=_),o(h)):n(h,_)}return p}var zs=S0(!0),M0=S0(!1),Gl=hr(null),jl=null,ys=null,Vf=null;function Gf(){Vf=ys=jl=null}function jf(t){var e=Gl.current;pt(Gl),t._currentValue=e}function hh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){jl=t,Vf=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Vf!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(jl===null)throw Error(he(308));ys=t,jl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var br=null;function Wf(t){br===null?br=[t]:br.push(t)}function E0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Wf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lf(t,n)}}function Ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(d=e,m=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){f=v.call(m,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,d=typeof v=="function"?v.call(m,f,d):v,d==null)break e;f=vt({},f,d);break e;case 2:Gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);kr|=o,t.lanes=o,t.memoizedState=f}}function bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var ha={},si=hr(ha),Zo=hr(ha),Qo=hr(ha);function Cr(t){if(t===ha)throw Error(he(174));return t}function $f(t,e){switch(ct(Qo,e),ct(Zo,t),ct(si,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}pt(si),ct(si,e)}function Bs(){pt(si),pt(Zo),pt(Qo)}function w0(t){Cr(Qo.current);var e=Cr(si.current),n=Wu(e,t.type);e!==n&&(ct(Zo,t),ct(si,n))}function qf(t){Zo.current===t&&(pt(si),pt(Zo))}var gt=hr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function Yf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var gl=Li.ReactCurrentDispatcher,Xc=Li.ReactCurrentBatchConfig,Or=0,_t=null,Ct=null,Dt=null,$l=!1,Io=!1,Jo=0,dy=0;function Ht(){throw Error(he(321))}function Kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Zf(t,e,n,i,r,s){if(Or=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?_y:vy,t=n(i,r),Io){s=0;do{if(Io=!1,Jo=0,25<=s)throw Error(he(301));s+=1,Dt=Ct=null,e.updateQueue=null,gl.current=xy,t=n(i,r)}while(Io)}if(gl.current=ql,e=Ct!==null&&Ct.next!==null,Or=0,Dt=Ct=_t=null,$l=!1,e)throw Error(he(300));return t}function Qf(){var t=Jo!==0;return Jo=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?_t.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Ln(){if(Ct===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Dt===null?_t.memoizedState:Dt.next;if(e!==null)Dt=e,Ct=t;else{if(t===null)throw Error(he(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Dt===null?_t.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ea(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Ln(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Or&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,_t.lanes|=u,kr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function A0(){}function b0(t,e){var n=_t,i=Ln(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,Jf(P0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,ta(9,R0.bind(null,n,i,r,e),void 0,null),It===null)throw Error(he(349));Or&30||C0(n,e,r)}return r}function C0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R0(t,e,n,i){e.value=n,e.getSnapshot=i,L0(e)&&N0(t)}function P0(t,e,n){return n(function(){L0(e)&&N0(t)})}function L0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function N0(t){var e=Ci(t,1);e!==null&&$n(e,t,1,-1)}function Cp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=gy.bind(null,_t,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function D0(){return Ln().memoizedState}function _l(t,e,n,i){var r=Jn();_t.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Kf(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function Rp(t,e){return _l(8390656,8,t,e)}function Jf(t,e){return fc(2048,8,t,e)}function I0(t,e){return fc(4,2,t,e)}function U0(t,e){return fc(4,4,t,e)}function F0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O0(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,F0.bind(null,e,t),n)}function ed(){}function k0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function z0(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function B0(t,e,n){return Or&21?(Yn(n,e)||(n=Wg(),_t.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function py(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{st=n,Xc.transition=i}}function H0(){return Ln().memoizedState}function my(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},V0(t))G0(e,n);else if(n=E0(t,e,n,i),n!==null){var r=Zt();$n(n,t,i,r),j0(n,e,i)}}function gy(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(V0(t))G0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Wf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=E0(t,e,r,i),n!==null&&(r=Zt(),$n(n,t,i,r),j0(n,e,i))}}function V0(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function G0(t,e){Io=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lf(t,n)}}var ql={readContext:Pn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},_y={readContext:Pn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,F0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=my.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Cp,useDebugValue:ed,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Cp(!1),e=t[0];return t=py.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=Jn();if(mt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),It===null)throw Error(he(349));Or&30||C0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Rp(P0.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,R0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=It.identifierPrefix;if(mt){var n=Si,i=yi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vy={readContext:Pn,useCallback:k0,useContext:Pn,useEffect:Jf,useImperativeHandle:O0,useInsertionEffect:I0,useLayoutEffect:U0,useMemo:z0,useReducer:$c,useRef:D0,useState:function(){return $c(ea)},useDebugValue:ed,useDeferredValue:function(t){var e=Ln();return B0(e,Ct.memoizedState,t)},useTransition:function(){var t=$c(ea)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:b0,useId:H0,unstable_isNewReconciler:!1},xy={readContext:Pn,useCallback:k0,useContext:Pn,useEffect:Jf,useImperativeHandle:O0,useInsertionEffect:I0,useLayoutEffect:U0,useMemo:z0,useReducer:qc,useRef:D0,useState:function(){return qc(ea)},useDebugValue:ed,useDeferredValue:function(t){var e=Ln();return Ct===null?e.memoizedState=t:B0(e,Ct.memoizedState,t)},useTransition:function(){var t=qc(ea)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:A0,useSyncExternalStore:b0,useId:H0,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dc={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=nr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&($n(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=nr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&($n(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=nr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&($n(e,t,i,n),ml(e,t,i))}};function Pp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function W0(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=ln(e)?Ur:$t.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&dc.enqueueReplaceState(e,e.state,null)}function dh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=ln(e)?Ur:$t.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&dc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=$v(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yy=typeof WeakMap=="function"?WeakMap:Map;function X0(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,Th=i),ph(t,e)},n}function $0(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ph(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ph(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Np(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new yy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Iy.bind(null,t,e,n),e.then(t,t))}function Dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var Sy=Li.ReactCurrentOwner,on=!1;function Yt(t,e,n,i){e.child=t===null?M0(e,null,n,i):zs(e,t.child,n,i)}function Up(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=Zf(t,e,n,i,s,r),n=Qf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(mt&&n&&zf(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Fp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ld(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q0(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function q0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return mh(t,e,n,i,r)}function Y0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Ms,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Ms,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Ms,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Ms,mn),mn|=i;return Yt(t,e,r,n),e.child}function K0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mh(t,e,n,i,r){var s=ln(n)?Ur:$t.current;return s=Os(e,s),Ps(e,r),n=Zf(t,e,n,i,s,r),i=Qf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(mt&&i&&zf(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Op(t,e,n,i,r){if(ln(n)){var s=!0;Bl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)vl(t,e),W0(e,n,i),dh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=ln(n)?Ur:$t.current,c=Os(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Lp(e,o,i,c),Gi=!1;var d=e.memoizedState;o.state=d,Wl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||an.current||Gi?(typeof u=="function"&&(fh(e,n,u,i),l=e.memoizedState),(a=Gi||Pp(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,T0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=ln(n)?Ur:$t.current,l=Os(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Lp(e,o,i,l),Gi=!1,d=e.memoizedState,o.state=d,Wl(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||an.current||Gi?(typeof m=="function"&&(fh(e,n,m,i),v=e.memoizedState),(c=Gi||Pp(e,n,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return gh(t,e,n,i,s,r)}function gh(t,e,n,i,r,s){K0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mp(e,n,!1),Ri(t,e,s);i=e.stateNode,Sy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&Mp(e,n,!0),e.child}function Z0(t){var e=t.stateNode;e.pendingContext?Sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sp(t,e.context,!1),$f(t,e.containerInfo)}function kp(t,e,n,i,r){return ks(),Hf(r),e.flags|=256,Yt(t,e,n,i),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q0(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(gt,r&1),t===null)return uh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gc(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vh(n),e.memoizedState=_h,t):td(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return My(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_h,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function td(t,e){return e=gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&Hf(i),zs(e,t.child,null,n),t=td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function My(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Yc(Error(he(422))),Ia(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gc({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=vh(o),e.memoizedState=_h,s);if(!(e.mode&1))return Ia(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(he(419)),i=Yc(s,i,void 0),Ia(t,e,o,i)}if(a=(o&t.childLanes)!==0,on||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),$n(i,t,r,-1))}return ad(),i=Yc(Error(he(421))),Ia(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Uy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Ji(r.nextSibling),vn=e,mt=!0,Hn=null,t!==null&&(Tn[wn++]=yi,Tn[wn++]=Si,Tn[wn++]=Fr,yi=t.id,Si=t.overflow,Fr=e),e=td(e,i.children),e.flags|=4096,e)}function zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hh(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function J0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zp(t,n,e);else if(t.tag===19)zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ey(t,e,n){switch(e.tag){case 3:Z0(e),ks();break;case 5:w0(e);break;case 1:ln(e.type)&&Bl(e);break;case 4:$f(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?Q0(t,e,n):(ct(gt,gt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ct(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return J0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Y0(t,e,n)}return Ri(t,e,n)}var e_,xh,t_,n_;e_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xh=function(){};t_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(si.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=ju(t,r),i=ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}Xu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};n_=function(t,e,n,i){n!==i&&(e.flags|=4)};function co(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ty(t,e,n){var i=e.pendingProps;switch(Bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return ln(e.type)&&zl(),Vt(e),null;case 3:return i=e.stateNode,Bs(),pt(an),pt($t),Yf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(bh(Hn),Hn=null))),xh(t,e),Vt(e),null;case 5:qf(e);var r=Cr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)t_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Vt(e),null}if(t=Cr(si.current),Na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<To.length;r++)ft(To[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":qd(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Kd(i,s),ft("invalid",i)}Xu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":Ea(i),Yd(i,s,!0);break;case"textarea":Ea(i),Zd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Ko]=i,e_(t,e,!1,!1),e.stateNode=t;e:{switch(o=$u(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<To.length;r++)ft(To[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":qd(t,i),r=Hu(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Kd(t,i),r=ju(t,i),ft("invalid",t);break;default:r=i}Xu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&wf(t,s,l,o))}switch(n){case"input":Ea(t),Yd(t,i,!1);break;case"textarea":Ea(t),Zd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)n_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=Cr(Qo.current),Cr(si.current),Na(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:La(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Vt(e),null;case 13:if(pt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&_n!==null&&e.mode&1&&!(e.flags&128))y0(),ks(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[ni]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Hn!==null&&(bh(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Rt===0&&(Rt=3):ad())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Bs(),xh(t,e),t===null&&qo(e.stateNode.containerInfo),Vt(e),null;case 10:return jf(e.type._context),Vt(e),null;case 17:return ln(e.type)&&zl(),Vt(e),null;case 19:if(pt(gt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)co(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Vs&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return Vt(e),null}else 2*Et()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=gt.current,ct(gt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return od(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function wy(t,e){switch(Bf(e),e.tag){case 1:return ln(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),pt(an),pt($t),Yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(pt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(gt),null;case 4:return Bs(),null;case 10:return jf(e.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var Ua=!1,Wt=!1,Ay=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function yh(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Bp=!1;function by(t,e){if(ih=Ul,t=a0(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rh={focusedElem:t,selectionRange:n},Ul=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,p=v.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:kn(e.type,g),p);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return v=Bp,Bp=!1,v}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yh(e,n,s)}r=r.next}while(r!==i)}}function pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i_(t){var e=t.alternate;e!==null&&(t.alternate=null,i_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Ko],delete e[ah],delete e[cy],delete e[uy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r_(t){return t.tag===5||t.tag===3||t.tag===4}function Hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}function Eh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}var Ut=null,zn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)s_(t,e,n),n=n.sibling}function s_(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(oc,n)}catch{}switch(n.tag){case 5:Wt||Ss(n,e);case 6:var i=Ut,r=zn;Ut=null,Ii(t,e,n),Ut=i,zn=r,Ut!==null&&(zn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(zn?(t=Ut,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Wo(t)):Gc(Ut,n.stateNode));break;case 4:i=Ut,r=zn,Ut=n.stateNode.containerInfo,zn=!0,Ii(t,e,n),Ut=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yh(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Wt&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ii(t,e,n),Wt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ay),e.forEach(function(i){var r=Fy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,zn=!1;break e;case 3:Ut=a.stateNode.containerInfo,zn=!0;break e;case 4:Ut=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Ut===null)throw Error(he(160));s_(s,o,r),Ut=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,t),e=e.sibling}function o_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Zn(t),i&4){try{Uo(3,t,t.return),pc(3,t)}catch(g){yt(t,t.return,g)}try{Uo(5,t,t.return)}catch(g){yt(t,t.return,g)}}break;case 1:In(e,t),Zn(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(In(e,t),Zn(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(g){yt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cg(r,s),$u(a,o);var c=$u(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Dg(r,f):u==="dangerouslySetInnerHTML"?Lg(r,f):u==="children"?Ho(r,f):wf(r,u,f,c)}switch(a){case"input":Vu(r,s);break;case"textarea":Rg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?As(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(g){yt(t,t.return,g)}}break;case 6:if(In(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){yt(t,t.return,g)}}break;case 3:if(In(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(g){yt(t,t.return,g)}break;case 4:In(e,t),Zn(t);break;case 13:In(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rd=Et())),i&4&&Vp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,In(e,t),Wt=c):In(e,t),Zn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Re=t,u=t.child;u!==null;){for(f=Re=u;Re!==null;){switch(d=Re,m=d.child,d.tag){case 0:case 11:case 14:case 15:Uo(4,d,d.return);break;case 1:Ss(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){yt(i,n,g)}}break;case 5:Ss(d,d.return);break;case 22:if(d.memoizedState!==null){jp(f);continue}}m!==null?(m.return=d,Re=m):jp(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ng("display",o))}catch(g){yt(t,t.return,g)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){yt(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),Zn(t),i&4&&Vp(t);break;case 21:break;default:In(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r_(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=Hp(t);Eh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hp(t);Mh(t,a,o);break;default:throw Error(he(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cy(t,e,n){Re=t,a_(t)}function a_(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Ua;var c=Wt;if(Ua=o,(Wt=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?Wp(r):l!==null?(l.return=o,Re=l):Wp(r);for(;s!==null;)Re=s,a_(s),s=s.sibling;Re=r,Ua=a,Wt=c}Gp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):Gp(t)}}function Gp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Wo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Wt||e.flags&512&&Sh(e)}catch(d){yt(e,e.return,d)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function jp(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Wp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pc(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Sh(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Sh(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var Ry=Math.ceil,Yl=Li.ReactCurrentDispatcher,nd=Li.ReactCurrentOwner,Cn=Li.ReactCurrentBatchConfig,Je=0,It=null,At=null,Ot=0,mn=0,Ms=hr(0),Rt=0,na=null,kr=0,mc=0,id=0,Fo=null,sn=null,rd=0,Vs=1/0,_i=null,Kl=!1,Th=null,tr=null,Fa=!1,Yi=null,Zl=0,Oo=0,wh=null,xl=-1,yl=0;function Zt(){return Je&6?Et():xl!==-1?xl:xl=Et()}function nr(t){return t.mode&1?Je&2&&Ot!==0?Ot&-Ot:fy.transition!==null?(yl===0&&(yl=Wg()),yl):(t=st,t!==0||(t=window.event,t=t===void 0?16:Qg(t.type)),t):1}function $n(t,e,n,i){if(50<Oo)throw Oo=0,wh=null,Error(he(185));la(t,n,i),(!(Je&2)||t!==It)&&(t===It&&(!(Je&2)&&(mc|=n),Rt===4&&Xi(t,Ot)),cn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Vs=Et()+500,hc&&fr()))}function cn(t,e){var n=t.callbackNode;fx(t,e);var i=Il(t,t===It?Ot:0);if(i===0)n!==null&&ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ep(n),e===1)t.tag===0?hy(Xp.bind(null,t)):_0(Xp.bind(null,t)),ay(function(){!(Je&6)&&fr()}),n=null;else{switch(Xg(i)){case 1:n=Pf;break;case 4:n=Gg;break;case 16:n=Dl;break;case 536870912:n=jg;break;default:n=Dl}n=m_(n,l_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l_(t,e){if(xl=-1,yl=0,Je&6)throw Error(he(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var i=Il(t,t===It?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=Je;Je|=2;var s=u_();(It!==t||Ot!==e)&&(_i=null,Vs=Et()+500,Lr(t,e));do try{Ny();break}catch(a){c_(t,a)}while(!0);Gf(),Yl.current=s,Je=r,At!==null?e=0:(It=null,Ot=0,e=Rt)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=Ah(t,r))),e===1)throw n=na,Lr(t,0),Xi(t,i),cn(t,Et()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Py(r)&&(e=Ql(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=Ah(t,s))),e===1))throw n=na,Lr(t,0),Xi(t,i),cn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Mr(t,sn,_i);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=rd+500-Et(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=oh(Mr.bind(null,t,sn,_i),e);break}Mr(t,sn,_i);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ry(i/1960))-i,10<i){t.timeoutHandle=oh(Mr.bind(null,t,sn,_i),i);break}Mr(t,sn,_i);break;case 5:Mr(t,sn,_i);break;default:throw Error(he(329))}}}return cn(t,Et()),t.callbackNode===n?l_.bind(null,t):null}function Ah(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=sn,sn=n,e!==null&&bh(e)),t}function bh(t){sn===null?sn=t:sn.push.apply(sn,t)}function Py(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~id,e&=~mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Xp(t){if(Je&6)throw Error(he(327));Ls();var e=Il(t,0);if(!(e&1))return cn(t,Et()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=Ah(t,i))}if(n===1)throw n=na,Lr(t,0),Xi(t,e),cn(t,Et()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,sn,_i),cn(t,Et()),null}function sd(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Vs=Et()+500,hc&&fr())}}function zr(t){Yi!==null&&Yi.tag===0&&!(Je&6)&&Ls();var e=Je;Je|=1;var n=Cn.transition,i=st;try{if(Cn.transition=null,st=1,t)return t()}finally{st=i,Cn.transition=n,Je=e,!(Je&6)&&fr()}}function od(){mn=Ms.current,pt(Ms)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oy(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Bs(),pt(an),pt($t),Yf();break;case 5:qf(i);break;case 4:Bs();break;case 13:pt(gt);break;case 19:pt(gt);break;case 10:jf(i.type._context);break;case 22:case 23:od()}n=n.return}if(It=t,At=t=ir(t.current,null),Ot=mn=e,Rt=0,na=null,id=mc=kr=0,sn=Fo=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}br=null}return t}function c_(t,e){do{var n=At;try{if(Gf(),gl.current=ql,$l){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(Or=0,Dt=Ct=_t=null,Io=!1,Jo=0,nd.current=null,n===null||n.return===null){Rt=1,na=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Dp(o);if(m!==null){m.flags&=-257,Ip(m,o,a,s,e),m.mode&1&&Np(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){Np(s,c,e),ad();break e}l=Error(he(426))}}else if(mt&&a.mode&1){var p=Dp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ip(p,o,a,s,e),Hf(Hs(l,a));break e}}s=l=Hs(l,a),Rt!==4&&(Rt=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=X0(s,l,e);Ap(s,h);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(tr===null||!tr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=$0(s,a,e);Ap(s,S);break e}}s=s.return}while(s!==null)}f_(n)}catch(T){e=T,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function u_(){var t=Yl.current;return Yl.current=ql,t===null?ql:t}function ad(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),It===null||!(kr&268435455)&&!(mc&268435455)||Xi(It,Ot)}function Ql(t,e){var n=Je;Je|=2;var i=u_();(It!==t||Ot!==e)&&(_i=null,Lr(t,e));do try{Ly();break}catch(r){c_(t,r)}while(!0);if(Gf(),Je=n,Yl.current=i,At!==null)throw Error(he(261));return It=null,Ot=0,Rt}function Ly(){for(;At!==null;)h_(At)}function Ny(){for(;At!==null&&!ix();)h_(At)}function h_(t){var e=p_(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?f_(t):At=e,nd.current=null}function f_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wy(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=Ty(n,e,mn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function Mr(t,e,n){var i=st,r=Cn.transition;try{Cn.transition=null,st=1,Dy(t,e,n,i)}finally{Cn.transition=r,st=i}return null}function Dy(t,e,n,i){do Ls();while(Yi!==null);if(Je&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dx(t,s),t===It&&(At=It=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,m_(Dl,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=st;st=1;var a=Je;Je|=4,nd.current=null,by(t,n),o_(n,t),Jx(rh),Ul=!!ih,rh=ih=null,t.current=n,Cy(n),rx(),Je=a,st=o,Cn.transition=s}else t.current=n;if(Fa&&(Fa=!1,Yi=t,Zl=r),s=t.pendingLanes,s===0&&(tr=null),ax(n.stateNode),cn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=Th,Th=null,t;return Zl&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===wh?Oo++:(Oo=0,wh=t):Oo=0,fr(),null}function Ls(){if(Yi!==null){var t=Xg(Zl),e=Cn.transition,n=st;try{if(Cn.transition=null,st=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Zl=0,Je&6)throw Error(he(331));var r=Je;for(Je|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:Uo(8,u,s)}var f=u.child;if(f!==null)f.return=u,Re=f;else for(;Re!==null;){u=Re;var d=u.sibling,m=u.return;if(i_(u),u===c){Re=null;break}if(d!==null){d.return=m,Re=d;break}Re=m}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var p=g.sibling;g.sibling=null,g=p}while(g!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Re=h;break e}Re=s.return}}var _=t.current;for(Re=_;Re!==null;){o=Re;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Re=y;else e:for(o=_;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pc(9,a)}}catch(T){yt(a,a.return,T)}if(a===o){Re=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Re=S;break e}Re=a.return}}if(Je=r,fr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(oc,t)}catch{}i=!0}return i}finally{st=n,Cn.transition=e}}return!1}function $p(t,e,n){e=Hs(n,e),e=X0(t,e,1),t=er(t,e,1),e=Zt(),t!==null&&(la(t,1,e),cn(t,e))}function yt(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Hs(n,t),t=$0(e,t,1),e=er(e,t,1),t=Zt(),e!==null&&(la(e,1,t),cn(e,t));break}}e=e.return}}function Iy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ot&n)===n&&(Rt===4||Rt===3&&(Ot&130023424)===Ot&&500>Et()-rd?Lr(t,0):id|=n),cn(t,e)}function d_(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=Zt();t=Ci(t,e),t!==null&&(la(t,e,n),cn(t,n))}function Uy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d_(t,n)}function Fy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),d_(t,n)}var p_;p_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,Ey(t,e,n);on=!!(t.flags&131072)}else on=!1,mt&&e.flags&1048576&&v0(e,Vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vl(t,e),t=e.pendingProps;var r=Os(e,$t.current);Ps(e,n),r=Zf(null,e,i,t,r,n);var s=Qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xf(e),r.updater=dc,e.stateNode=r,r._reactInternals=e,dh(e,i,t,n),e=gh(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&zf(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ky(i),t=kn(i,t),r){case 0:e=mh(null,e,i,t,n);break e;case 1:e=Op(null,e,i,t,n);break e;case 11:e=Up(null,e,i,t,n);break e;case 14:e=Fp(null,e,i,kn(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),mh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Op(t,e,i,r,n);case 3:e:{if(Z0(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,T0(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(he(423)),e),e=kp(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(he(424)),e),e=kp(t,e,i,n,r);break e}else for(_n=Ji(e.stateNode.containerInfo.firstChild),vn=e,mt=!0,Hn=null,n=M0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Ri(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return w0(e),t===null&&uh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,sh(i,r)?o=null:s!==null&&sh(i,s)&&(e.flags|=32),K0(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&uh(e),null;case 13:return Q0(t,e,n);case 4:return $f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Up(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(Gl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!an.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(he(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=Pn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),Fp(t,e,i,r,n);case 15:return q0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),vl(t,e),e.tag=1,ln(i)?(t=!0,Bl(e)):t=!1,Ps(e,n),W0(e,i,r),dh(e,i,r,n),gh(null,e,i,!0,t,n);case 19:return J0(t,e,n);case 22:return Y0(t,e,n)}throw Error(he(156,e.tag))};function m_(t,e){return Vg(t,e)}function Oy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new Oy(t,e,n,i)}function ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ky(t){if(typeof t=="function")return ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bf)return 11;if(t===Cf)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ld(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Nr(n.children,r,s,e);case Af:o=8,r|=8;break;case Ou:return t=bn(12,n,e,r|2),t.elementType=Ou,t.lanes=s,t;case ku:return t=bn(13,n,e,r),t.elementType=ku,t.lanes=s,t;case zu:return t=bn(19,n,e,r),t.elementType=zu,t.lanes=s,t;case wg:return gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Eg:o=10;break e;case Tg:o=9;break e;case bf:o=11;break e;case Cf:o=14;break e;case Vi:o=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function gc(t,e,n,i){return t=bn(22,t,i,e),t.elementType=wg,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cd(t,e,n,i,r,s,o,a,l){return t=new zy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xf(s),t}function By(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function g_(t){if(!t)return ar;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(ln(n))return g0(t,n,e)}return e}function __(t,e,n,i,r,s,o,a,l){return t=cd(n,i,!0,t,r,s,o,a,l),t.context=g_(null),n=t.current,i=Zt(),r=nr(n),s=Ti(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,la(t,r,i),cn(t,i),t}function _c(t,e,n,i){var r=e.current,s=Zt(),o=nr(r);return n=g_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&($n(t,r,o,s),ml(t,r,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ud(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function Hy(){return null}var v_=typeof reportError=="function"?reportError:function(t){console.error(t)};function hd(t){this._internalRoot=t}vc.prototype.render=hd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));_c(t,e,null,null)};vc.prototype.unmount=hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){_c(null,t,null,null)}),e[bi]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&Zg(t)}};function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function Vy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(o);s.call(c)}}var o=__(e,i,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=o,t[bi]=o.current,qo(t.nodeType===8?t.parentNode:t),zr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jl(l);a.call(c)}}var l=cd(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=l,t[bi]=l.current,qo(t.nodeType===8?t.parentNode:t),zr(function(){_c(e,l,n,i)}),l}function yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jl(o);a.call(l)}}_c(e,o,t,r)}else o=Vy(n,e,t,r,i);return Jl(o)}$g=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Lf(e,n|1),cn(e,Et()),!(Je&6)&&(Vs=Et()+500,fr()))}break;case 13:zr(function(){var i=Ci(t,1);if(i!==null){var r=Zt();$n(i,t,1,r)}}),ud(t,1)}};Nf=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=Zt();$n(e,t,134217728,n)}ud(t,134217728)}};qg=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=Zt();$n(n,t,e,i)}ud(t,e)}};Yg=function(){return st};Kg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Yu=function(t,e,n){switch(e){case"input":if(Vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uc(i);if(!r)throw Error(he(90));bg(i),Vu(i,r)}}}break;case"textarea":Rg(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};Fg=sd;Og=zr;var Gy={usingClientEntryPoint:!1,Events:[ua,gs,uc,Ig,Ug,sd]},uo={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jy={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bg(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{oc=Oa.inject(jy),ri=Oa}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(e))throw Error(he(200));return By(t,e,null,n)};yn.createRoot=function(t,e){if(!fd(t))throw Error(he(299));var n=!1,i="",r=v_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cd(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,qo(t.nodeType===8?t.parentNode:t),new hd(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=Bg(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return zr(t)};yn.hydrate=function(t,e,n){if(!xc(e))throw Error(he(200));return yc(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!fd(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=v_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=__(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vc(e)};yn.render=function(t,e,n){if(!xc(e))throw Error(he(200));return yc(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!xc(t))throw Error(he(40));return t._reactRootContainer?(zr(function(){yc(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};yn.unstable_batchedUpdates=sd;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xc(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return yc(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(t){console.error(t)}}x_(),xg.exports=yn;var Wy=xg.exports,y_,Kp=Wy;y_=Kp.createRoot,Kp.hydrateRoot;const Ch={backyard:{label:"Backyard",l:100,w:70,surface:"grass"},church:{label:"Church or school lawn",l:160,w:120,surface:"grass"},park:{label:"Park or open field",l:250,w:180,surface:"grass"},lot:{label:"Parking lot",l:300,w:150,surface:"asphalt"},patio:{label:"Venue patio",l:90,w:60,surface:"concrete"},custom:{label:"Custom size"}},Br={frame:{label:"Frame tent",stake:3,sizes:[[20,20],[20,30],[20,40],[30,30],[30,45],[30,60],[40,40],[40,60],[40,80],[40,100],[40,120]]},cleartop:{label:"Clear-top frame tent",stake:3,sizes:[[20,20],[20,40],[30,30],[30,45],[30,60],[40,40],[40,60],[40,80]]},pole:{label:"High-peak pole tent",stake:6,sizes:[[30,45],[40,60],[40,80],[40,100],[60,60],[60,90],[60,120],[80,120]]},sailcloth:{label:"Sailcloth tent",stake:8,shape:"oval",ends:{44:21.5,59:19.5},sizes:[[44,43],[44,63],[44,83],[44,103],[59,39],[59,79],[59,99]]},structure:{label:"Structure tent (clearspan)",stake:3,sizes:[[40,45],[40,60],[40,75],[40,90],[40,120],[40,150],[60,60],[60,90],[60,120],[60,150],[60,180]]}},Ft={rounds60:{label:'60" round tables',kind:"round",r:2.5,seats:[8,10],def:8,cx:10,cy:10,hx:4.25,hy:4.25,table:'60" round table',linen:'120" round, floor length',sqft:"10–12"},rounds72:{label:'72" round tables',kind:"round",r:3,seats:[10,12],def:10,cx:11.5,cy:11.5,hx:4.75,hy:4.75,table:'72" round table',linen:'132" round, floor length',sqft:"11–13"},banquet:{label:"8' banquet rows",kind:"banquet",seats:[8],def:8,cx:8,cy:7.5,hx:4,hy:3,table:`8' × 30" banquet table`,linen:'90" × 156" banquet, floor length',sqft:"8–10"},mixed:{label:"Mixed rounds + banquet tables",kind:"mixed",seats:[8,10],def:8,cx:10,cy:10,hx:4.25,hy:4.25,sqft:"9–12"},theater:{label:"Ceremony rows (chairs only)",kind:"chair",seats:[1],def:1,cx:3,cy:2,hx:.8,hy:.8,sqft:"6–8"},none:{label:"No seating (standing / cocktail)",kind:"none",seats:[0],def:0,cx:10,cy:10,hx:0,hy:0,sqft:"6–8"}},Ml={rounds60:10,rounds72:12,banquet:8},Xy={rounds60:'60" round',rounds72:'72" round',banquet:"8' banquet"},ko=6,S_=[{id:"stage",label:"Stage",short:"STAGE",sizes:{"8×8":[8,8],"12×8":[12,8],"16×12":[16,12],"24×16":[24,16]},def:"12×8",walls:["left","top"],f:.5},{id:"head",label:"Head table",short:"HEAD TABLE",sizes:{"Sweetheart · 2":[6,5,2],"Head table · 8":[16,6,8],"Head table · 12":[24,6,12],"Head table · 16":[32,6,16]},def:"Head table · 8",walls:["left","top"],f:.5},{id:"dance",label:"Dance floor",short:"DANCE FLOOR",dance:!0},{id:"dj",label:"DJ booth",short:"DJ",dims:[8,6],walls:["top","left"],f:"dance"},{id:"buffet",label:"Buffet line",short:"BUFFET",dims:[16,9],qty:!0,walls:["right","top","bottom"],f:.5},{id:"bar",label:"Bar",short:"BAR",dims:[10,6],qty:!0,walls:["bottom","top"],f:1},{id:"cake",label:"Cake table",short:"CAKE",dims:[6,6],walls:["bottom","top"],f:"dance"},{id:"gift",label:"Gift & card table",short:"GIFTS",dims:[8,5],walls:["bottom","top"],f:.64},{id:"photo",label:"Photo booth",short:"PHOTO",dims:[10,10],walls:["bottom","top"],f:.3},{id:"lounge",label:"Lounge seating",short:"LOUNGE",dims:[14,10],walls:["top","bottom"],f:1},{id:"highboy",label:"Cocktail tables",short:"",dims:[5,5],qty:!0,qtyOpts:[2,4,6,8,10,12,16,20],free:!0,walls:["bottom"],f:1}],Zp={top:0,right:90,bottom:180,left:270},ui=1.5,Es={cherry:{label:"Cherry",desc:"Rich cherry wood-tone finish",sizes:["12x12","12x16","16x16","20x20","24x24"],colors:["#7c3c27","#6c3320"],tile:4},birch:{label:"Birch",desc:"Light birch wood-tone finish",sizes:["12x12","12x16","16x16","20x20","24x24"],colors:["#e2c797","#d5b985"],tile:4},black:{label:"Black",desc:"Matte black finish",sizes:["12x12","12x16"],colors:["#1f2226","#272b30"],tile:4},white:{label:"White",desc:"Bright white high-gloss finish",sizes:["12x12","12x16"],colors:["#f8f8f6","#eeeeeb"],tile:4},bw:{label:"Black & white checkered",desc:"Classic black & white checkerboard",sizes:["12x12","12x16","16x16","20x20"],colors:["#1f2226","#f8f8f6"],tile:4},birchwhite:{label:"Birch & white checkered",desc:"Birch & white checkerboard",sizes:["12x12","16x16","20x20","20x24"],colors:["#e2c797","#f8f8f6"],tile:4}},$y=[["bottom",.5],["top",.7],["right",.5],["top",.3],["bottom",.2],["bottom",.8]],qy={"White folding":"#f1f2f2",Chiavari:"#c9a457","Cross-back":"#8a6340","Padded banquet":"#3b414a"},Yy={swag:"Swag (zigzag across ceiling)",perimeter:"Inside perimeter",both:"Swag + perimeter"},ec=1.5,M_=[-3,-1,1,3].flatMap(t=>[[t,-1],[t,1]]),Ky=["White folding","Chiavari","Cross-back","Padded banquet"],tc={siteName:"Example: Hartwell wedding reception",sitePreset:"church",siteL:160,siteW:120,surface:"grass",guests:150,seating:"rounds60",seatsPer:8,mixRound:"rounds60",mixBanquet:4,spacing:"comfortable",chairStyle:"Chiavari",name:"Tent 1",tentType:"frame",tentSize:"auto",walls:"window",acc:{stage:{on:!1,size:"12×8",cl:12,cw:8},head:{on:!0,size:"Head table · 8"},dance:{on:!0,size:"auto",cl:20,cw:20,finish:"cherry",wrap:!1},dj:{on:!0},buffet:{on:!0,qty:"auto"},bar:{on:!0,qty:"auto"},cake:{on:!0},gift:{on:!0},photo:{on:!1},lounge:{on:!1},highboy:{on:!0,qty:"auto"}},climate:"none",stringLights:!0,lightStyle:"swag",chandeliers:!1,uplights:!0,generator:!0,chandList:null,exits:null,pos:{},tentPos:null,tables:null,address:"",photo:null,tentAngle:0};function E_(t,e,n){const i=Br[t];if(!i||i.shape!=="oval")return{oval:!1,W:e,L:n,e:0};const r=Math.min(n/2,i.ends&&i.ends[e]||Math.min(e,n)/2);return{oval:!0,W:e,L:n,e:r}}function ei(t,e){if(!t.oval)return 0;const{W:n,L:i,e:r}=t,s=e<r?r-e:e>i-r?e-(i-r):0;return s?n/2-n/2*Math.sqrt(Math.max(0,1-(s/r)**2)):0}function Qp(t,e){if(!t.oval)return 0;const{W:n,e:i}=t,r=Math.abs(e-n/2);return i-i*Math.sqrt(Math.max(0,1-(r/(n/2))**2))}function Zy(t,e,n){const{W:i,L:r,e:s}=t;let o;if(t.oval&&(e<s||e>r-s)){const l=e<s?s:r-s,c=Math.atan2((n-i/2)/(i/2),(e-l)/s);o=Math.abs(Math.sin(c))<Math.SQRT1_2?e<s?"left":"right":n<i/2?"top":"bottom"}else if(t.oval)o=n<i/2?"top":"bottom";else{const l={top:n,bottom:i-n,left:e,right:r-e};o=Object.keys(l).reduce((c,u)=>l[u]<l[c]?u:c)}return{side:o,f:Math.min(1,Math.max(0,o==="top"||o==="bottom"?e/r:n/i))}}function ka(t,e,n,i=0){const{W:r,L:s,e:o}=t;if(e<i-1e-6||e>s-i+1e-6||n<i-1e-6||n>r-i+1e-6)return!1;if(!t.oval||e>=o&&e<=s-o)return!0;const a=o-i,l=r/2-i;if(a<=0||l<=0)return!1;const c=e<o?o-e:e-(s-o),u=n-r/2;return(c/a)**2+(u/l)**2<=1+1e-6}const ho=(t,e,n=0)=>ka(t,e.x,e.y,n)&&ka(t,e.x+e.w,e.y,n)&&ka(t,e.x,e.y+e.h,n)&&ka(t,e.x+e.w,e.y+e.h,n);function dd(t,e=0,n=360){const{W:i,L:r,e:s}=t;if(!t.oval)return[[-e,-e],[r+e,-e],[r+e,i+e],[-e,i+e]];const o=s+e,a=i/2+e,l=[],c=Math.ceil(n/2);for(let u=0;u<=c;u++){const f=-Math.PI/2+Math.PI*u/c;l.push([r-s+o*Math.cos(f),i/2+a*Math.sin(f)])}for(let u=0;u<=c;u++){const f=Math.PI/2+Math.PI*u/c;l.push([s+o*Math.cos(f),i/2+a*Math.sin(f)])}return l}function Jc(t,e=0){const{W:n,L:i,e:r}=t,s=r+e,o=n/2+e;return t.oval?`M${r} ${-e}H${i-r}A${s} ${o} 0 0 1 ${i-r} ${n+e}H${r}A${s} ${o} 0 0 1 ${r} ${-e}Z`:`M${-e} ${-e}H${i+e}V${n+e}H${-e}Z`}function ia(t,e=0){if(!t.oval)return 2*(t.W+t.L+4*e);const n=dd(t,e);let i=0;for(let r=0;r<n.length;r++){const[s,o]=n[r],[a,l]=n[(r+1)%n.length];i+=Math.hypot(a-s,l-o)}return i}function Jp(t){return t.oval?(t.L-2*t.e)*t.W+Math.PI*t.e*(t.W/2):t.W*t.L}function T_(t,e,n=0){const i=dd(t,n),r=[],s=[...i,i[0]];let o=0;for(let u=0;u<i.length;u++){const f=Math.hypot(s[u+1][0]-s[u][0],s[u+1][1]-s[u][1]);r.push(f),o+=f}const a=[];let l=0,c=0;for(let u=0;u<e;u++){const f=u*o/e;for(;c+r[l]<f;)c+=r[l],l++;const d=r[l]?(f-c)/r[l]:0;a.push({x:s[l][0]+(s[l+1][0]-s[l][0])*d,y:s[l][1]+(s[l+1][1]-s[l][1])*d})}return a}function w_(t,e,n=3){const i=dd(t),r=l=>e.some(c=>Math.hypot(l[0]-c.x,l[1]-c.y)<n),s=[];let o=[];const a=Math.max(0,i.findIndex(l=>!r(l)));for(let l=0;l<=i.length;l++){const c=i[(a+l)%i.length];r(c)?(o.length>1&&s.push(o),o=[]):o.push(c)}return o.length>1&&s.push(o),s}const jn=t=>JSON.parse(JSON.stringify(t)),dt=(t,e,n)=>Math.min(n,Math.max(e,t)),Ke=t=>Math.round(t*100)/100,Qn=t=>Math.round(t*2)/2;function za(t){const e=Math.floor(t+1e-6),n=Math.round((t-e)*12);return`${e}'-${n}"`}function Sc(t,e){try{if(e===void 0)return JSON.parse(localStorage.getItem(t)||"null");localStorage.setItem(t,JSON.stringify(e))}catch{return null}}function eu(t){const e=Object.assign(jn(tc),jn(t),{acc:Object.assign(jn(tc.acc),jn(t.acc||{}))});return Ft[e.seating]||(e.seating="rounds60",e.seatsPer=8),e.mixRound!=="rounds60"&&e.mixRound!=="rounds72"&&(e.mixRound="rounds60"),Br[e.tentType]||(e.tentType="frame"),e.tentSize!=="auto"&&!Br[e.tentType].sizes.some(([n,i])=>`${n}x${i}`===e.tentSize)&&(e.tentSize="auto",e.pos={},e.tables=null),delete e.photoSrc,e}const wo=(t,e)=>{const n=e*Math.PI/180,i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n));return[Ke(t[0]*i+t[1]*r),Ke(t[0]*r+t[1]*i)]},Rh=t=>(Math.round(t)%360+360)%360,Qy=t=>{const e=Rh(t);return e>180?e-360:e},Ui=(t,e)=>t.x<e.x+e.w-1e-6&&t.x+t.w>e.x+1e-6&&t.y<e.y+e.h-1e-6&&t.y+t.h>e.y+1e-6,Kr=(t,e)=>({x:t.x-e,y:t.y-e,w:t.w+2*e,h:t.h+2*e}),fa=t=>Es[(t.acc.dance||{}).finish]||Es.cherry,zo=t=>{const[e,n]=t.split("x").map(Number);return[Math.max(e,n),Math.min(e,n)]},Ph=t=>Math.round(t.guests*1.5);function Jy(t,e){if(e.size==="custom")return[Math.ceil((e.cl||20)/4)*4,Math.ceil((e.cw||20)/4)*4];const n=fa(t),i=n.sizes.includes(e.size)?e.size:n.sizes.find(r=>zo(r)[0]*zo(r)[1]>=Ph(t))||n.sizes[n.sizes.length-1];return zo(i)}const A_=(t,e)=>t==="highboy"?Math.max(2,Math.ceil(e/25)):dt(Math.ceil(t==="buffet"?e/125:e/150),1,4);function Mc(t){return t<10?1:t<200?2:t<500?3:t<1e3?4:t<2e3?5:6}function em(t,e){const n=Math.max(1,Math.ceil(t/e-1e-6));return Array.from({length:n+1},(i,r)=>r*t/n)}function eS(t,e,n,i=E_(t,e,n)){const r=[],s=t==="structure"?15:10;if(i.oval)r.push(...T_(i,Math.max(8,Math.round(ia(i)/s))));else{for(const o of em(n,s))r.push({x:o,y:0},{x:o,y:e});for(const o of em(e,s).slice(1,-1))r.push({x:0,y:o},{x:n,y:o})}if(t==="pole"||t==="sailcloth"){const o=Math.max(1,Math.round(n/20)),a=o===1?[n/2]:Array.from({length:o-1},(c,u)=>(u+1)*n/o),l=t==="pole"?e>=60?[e/4,e/2,3*e/4]:[e/2]:e>50?[e/3,2*e/3]:[e/2];for(const c of l)for(const u of a)r.push({x:u,y:c,inner:!0})}return r}const pr=6,tS=t=>$y.slice(0,Mc(t)).map(([e,n],i)=>({side:e,f:n,kind:i===0?"entrance":"exit"})),nS=(t,e)=>{const n=Math.max(1,Math.round(e/20));return Array.from({length:n},(i,r)=>({x:(r+.5)*e/n,y:t/2}))},iS=(t,e,n)=>t.chandeliers?t.chandList?t.chandList.map(i=>({x:i.fx*n,y:i.fy*e})):nS(e,n):[],b_=t=>t.chands.map(e=>({fx:e.x/t.L,fy:e.y/t.W}));function rS(t,e,n){const i=dt(e,1,t.L-1),r=ei(t,i);return{x:i,y:dt(n,Math.min(r+1,t.W/2),Math.max(t.W-r-1,t.W/2))}}function C_(t){const{W:e,L:n,chands:i}=t;let r={x:n/2,y:e/2},s=-1;for(let o=2;o<=n-2;o+=.5){const a=i.length?Math.min(...i.map(l=>Math.hypot(l.x-o,l.y-e/2))):n;a>s&&(s=a,r={x:o,y:e/2})}return{fx:r.x/n,fy:r.y/e}}const R_=t=>t.exits.map(e=>({side:e.side,f:e.c/(e.side==="top"||e.side==="bottom"?t.L:t.W),kind:e.kind}));function P_(t){const e=s=>t.filter(o=>o.side===s).length,n=["bottom","top","right","left"].reduce((s,o)=>e(o)<e(s)?o:s),i=t.filter(s=>s.side===n).map(s=>s.f),r=[.5,.25,.75,.15,.85,.35,.65].find(s=>i.every(o=>Math.abs(o-s)>.12))??.5;return{side:n,f:r,kind:t.some(s=>s.kind==="entrance")?"exit":"entrance"}}function sS(t,e,n,i={oval:!1,W:e,L:n,e:0},r=null){const s=r||tS(t),o=pr/2;return s.map(({side:a,f:l,kind:c})=>{const u=a==="top"||a==="bottom",f=!r&&i.oval&&n-2*i.e>=8,d=f?i.e+o:o+1,m=f?n-i.e-o:n-o-1,v=u?dt(l*n,d,Math.max(d,m)):dt(l*e,o+1,e-o-1),g=a==="top"?ei(i,v):a==="bottom"?e-ei(i,v):a==="left"?Qp(i,v):n-Qp(i,v),p=u?{x:v-o,y:a==="top"?g:g-pr,w:pr,h:pr}:{x:a==="left"?g:g-pr,y:v-o,w:pr,h:pr};return{side:a,f:l,kind:c,c:v,p:g,x:u?v:g,y:u?g:v,zone:p,main:c==="entrance"}})}function oS(t){const e=[];for(const n of S_){const i=t.acc[n.id];if(!i||!i.on)continue;let r,s=0,o=1;if(n.dance)r=Jy(t,i);else if(n.id==="stage"&&i.size==="custom")r=[i.cl||12,i.cw||8];else if(n.sizes){const a=n.sizes[i.size]||n.sizes[n.def];r=[a[0],a[1]],s=a[2]||0}else r=n.dims;n.qty&&(o=i.qty==="auto"||!i.qty?A_(n.id,t.guests):+i.qty);for(let a=0;a<o;a++)e.push({key:n.qty?n.id+"-"+a:n.id,def:n,dims:r,seats:s,idx:a,n:o})}return e}const Ao=t=>t.seating+"/"+t.seatsPer+"/"+t.spacing+(t.seating==="mixed"?"/"+t.mixRound+"/"+t.mixBanquet:"");function tu(t,e,n){const i=Br[t.tentType],r=Ft[t.seating],s=e+"x"+n,o=E_(t.tentType,e,n),a=sS(t.guests,e,n,o,t.exits),l=eS(t.tentType,e,n,o).filter(J=>J.inner||!o.oval||!a.some(ae=>Math.hypot(J.x-ae.x,J.y-ae.y)<2.5)),c=l.filter(J=>J.inner),u=a.map(J=>J.zone),f=[];let d=!0;const m=J=>ho(o,J,.5),v=J=>!f.some(ae=>Ui(J,Kr(ae,1)))&&!u.some(ae=>Ui(J,ae))&&!c.some(ae=>ae.x>J.x&&ae.x<J.x+J.w&&ae.y>J.y&&ae.y<J.y+J.h),g=(J,ae)=>{if(m(J)&&v(J))return J;const de=Math.max(e,n);for(let pe=.5;pe<=de;pe+=.5)for(const Se of[pe,-pe]){const ce={...J};if(ce[ae]+=Se,m(ce)&&v(ce))return ce}if(o.oval){const pe=ae==="x"?"y":"x";for(let Se=1;Se<=20;Se+=1)for(let ce=0;ce<=de;ce+=1)for(const R of[ce,-ce])for(const E of[Se,-Se]){const B={...J};if(B[ae]+=R,B[pe]+=E,m(B)&&v(B))return B}}return null},p=(J,ae,de,pe,Se,ce)=>{const R=J==="top"||J==="bottom",E=R?n:e,B=R?Se:ce,ne=pe*B+(pe-1),ie=E-2*ui-ne;if(ae==="dance"){const Ee=f.find(Te=>Te.def.id==="dance"),xe=Ee?R?Ee.x+Ee.w/2:Ee.y+Ee.h/2:E/2;ae=ie>0?(xe-ne/2-ui)/ie:.5}const ee=ui+dt(ae,0,1)*Math.max(0,ie)+de*(B+1);return R?{x:ee,y:J==="top"?ui:e-ui-ce,axis:"x"}:{x:J==="left"?ui:n-ui-Se,y:ee,axis:"y"}},h=[];for(const J of oS(t)){const ae=J.def,de=t.pos[J.key];let pe=null,Se=0;if(ae.free&&!(de&&de.t===s)){h.push(J);continue}if(de&&de.t===s){Se=de.rot;const[ce,R]=wo(J.dims,Se);pe={x:de.x,y:de.y,w:ce,h:R,fit:ce<=n&&R<=e&&ho(o,{x:de.x,y:de.y,w:ce,h:R})}}else if(ae.dance){const[ce,R]=J.dims,E=f.filter(ee=>ee.wall==="left"),B=E.length?Math.max(...E.map(ee=>ee.x+ee.w))+2:(n-ce)/2,ne=(e-R)/2,ie=g({x:B,y:ne,w:ce,h:R},"x");pe=ie?{...ie,fit:!0}:{x:B,y:ne,w:ce,h:R,fit:!1}}else{for(const ce of ae.walls){Se=Zp[ce];const[R,E]=wo(J.dims,Se),B=p(ce,ae.f,J.idx,J.n,R,E),ne=g({x:B.x,y:B.y,w:R,h:E},B.axis);if(ne){pe={...ne,fit:!0,wall:ce};break}}if(!pe){const ce=ae.walls[0];Se=Zp[ce];const[R,E]=wo(J.dims,Se),B=p(ce,ae.f,J.idx,J.n,R,E);pe={x:B.x,y:B.y,w:R,h:E,fit:!1,wall:ce}}}f.push({...pe,key:J.key,def:ae,dims:J.dims,seats:J.seats,rot:Se}),pe.fit||(d=!1)}const _=f.filter(J=>J.def.id==="head").reduce((J,ae)=>J+ae.seats,0),y=r.kind==="none",S=r.kind==="mixed",T=r.kind==="chair",b=S?t.mixRound:t.seating,C=J=>J===b?t.seatsPer:Ft[J].def,N=T?1:y?0:t.seatsPer,w=Math.max(0,t.guests-_),M=S?Math.min(Math.max(0,Math.floor(t.mixBanquet)||0),Math.ceil(w/8)):0,I=S?Math.ceil(Math.max(0,w-M*8)/t.seatsPer):0,q=S?M+I:N?Math.ceil(w/N):0,U=t.spacing==="tight"?.9:1,W=J=>J.def.id==="dance"?1.5:J.def.id==="stage"&&T?6:1,$=[...f.map(J=>Kr(J,W(J))),...u,...c.map(J=>({x:J.x-.4,y:J.y-.4,w:.8,h:.8}))];T&&$.push({x:0,y:e/2-2.5,w:n,h:5});const j=T?3:.5,O=J=>{const ae=Ft[J.type||b],[de,pe]=wo([2*ae.hx,2*ae.hy],J.rot||0);return{x:J.x-de/2,y:J.y-pe/2,w:de,h:pe}},P=!y&&t.tables&&t.tables.t===s&&t.tables.s===Ao(t)?t.tables.pts:null,k=!!(P&&t.tables.manual),Z=k?P.length:q;if(P)for(const J of P.slice(0,Z))$.push(O(J));const se=(J,ae)=>{const de=Ft[J],pe=de.kind==="banquet",Se=pe?de.cx:de.cx*U,ce=de.cy*U,{hx:R,hy:E}=de;let B=[],ne=-1e9;for(let ie=0;ie<ce-1e-6;ie+=.5){const ee=[],Ee=[];for(let D=j+E+ie;D<=e-j-E+1e-6;D+=ce)Ee.push(D);for(const D of Ee){let L=j+R,G=0;for(;L<=n-j-R+1e-6;){const re={x:L-R,y:D-E,w:2*R,h:2*E};let ue=null;if(o.oval&&!ho(o,re,j)){L+=.5;continue}for(const ge of ae)Ui(re,ge)&&(!ue||ge.x+ge.w>ue.x+ue.w)&&(ue=ge);ue?L=Math.max(L+.5,ue.x+ue.w+R):(ee.push({x:L,y:D,type:J}),G++,L+=Se,pe&&G%4===0&&(L+=4))}}const xe=Ee.length?Math.abs(Ee[0]-E-j-(e-j-Ee[Ee.length-1]-E)):0,Te=ee.length*100-xe;Te>ne&&(ne=Te,B=ee)}return B},fe=f.find(J=>J.def.id==="dance")||f.find(J=>J.def.id==="stage")||f.find(J=>J.def.id==="head"),Oe=T?{x:0,y:e/2}:fe?{x:fe.x+fe.w/2,y:fe.y+fe.h/2}:{x:n/2,y:e/2},te=J=>Math.hypot(J.x-Oe.x,J.y-Oe.y),le=(J,ae)=>te(J)-te(ae),ye=y?[]:se(b,$),_e=P?P.slice(0,Z).map(J=>({x:J.x,y:J.y,rot:J.rot||0,type:J.type||b,pinned:!0,set:J.seats})):[],Ue=[...ye].sort(le);let Fe=[],ze=_e.length+ye.length;if(!k&&S){const J=Math.max(0,M-_e.filter(Se=>Se.type==="banquet").length),ae=Math.max(0,I-_e.filter(Se=>Se.type!=="banquet").length),de=J?se("banquet",$).sort((Se,ce)=>le(ce,Se)).slice(0,J):[],pe=de.length?se(b,[...$,...de.map(Se=>Kr(O(Se),1.5))]).sort(le):Ue;Fe=[...de,...pe.slice(0,ae)],ze=_e.length+de.length+(de.length<J?Math.min(pe.length,ae):pe.length)}else k||(Fe=Ue.slice(0,Math.max(0,q-_e.length)));const qe=(P?[..._e,...Fe]:Fe.sort((J,ae)=>J.y-ae.y||J.x-ae.x)).map((J,ae)=>({...J,type:J.type||b,n:ae+1}));for(const J of qe)J.seats=J.set??C(J.type);if(!k&&qe.length===q&&q){let J=qe.reduce((de,pe)=>de+pe.seats,0)-w;const ae=[...qe].reverse().sort((de,pe)=>(de.type==="banquet")-(pe.type==="banquet"));for(const de of ae){if(J<=0)break;if(de.set!=null)continue;const pe=Math.min(J,de.seats-1);de.seats-=pe,J-=pe}}const $e=qe.reduce((J,ae)=>J+ae.seats,0);k&&(ze=qe.length);const tt=J=>J.filter(ae=>!qe.some(de=>Ui(O(ae),Kr(O(de),-.05)))),z={[b]:tt(Ue)};S&&(z.banquet=tt(se("banquet",$).sort(le)));for(const J of qe){if(!J.pinned)continue;const ae=O(J);J.bad=!ho(o,ae)||f.some(de=>Ui(ae,de))||c.some(de=>de.x>ae.x&&de.x<ae.x+ae.w&&de.y>ae.y&&de.y<ae.y+ae.h)||qe.some(de=>de!==J&&Ui(Kr(ae,-.05),O(de)))}if(h.length){const J=[...qe.map(O),...u,...c.map(Se=>({x:Se.x-.4,y:Se.y-.4,w:.8,h:.8}))],ae=f.find(Se=>Se.def.id==="bar")||f.find(Se=>Se.def.id==="dance"),de=ae?{x:ae.x+ae.w/2,y:ae.y+ae.h/2}:{x:n/2,y:e},pe=[];for(let Se=.5;Se<=e-5.5+1e-6;Se+=1)for(let ce=.5;ce<=n-5.5+1e-6;ce+=1)pe.push({x:ce,y:Se});pe.sort((Se,ce)=>Math.hypot(Se.x+2.5-de.x,Se.y+2.5-de.y)-Math.hypot(ce.x+2.5-de.x,ce.y+2.5-de.y));for(const Se of h){const[ce,R]=Se.dims,E=pe.find(ne=>{const ie={x:ne.x,y:ne.y,w:ce,h:R};return ho(o,ie,.5)&&!f.some(ee=>Ui(ie,Kr(ee,.5)))&&!J.some(ee=>Ui(ie,ee))}),B=E?{x:E.x,y:E.y,w:ce,h:R,fit:!0}:{x:ui,y:ui,w:ce,h:R,fit:!1};f.push({...B,key:Se.key,def:Se.def,dims:Se.dims,seats:0,rot:0}),B.fit||(d=!1)}}return{W:e,L:n,T:i,S:r,sh:o,area:Jp(o),perim:ia(o),poles:l,exits:a,chands:iS(t,e,n),items:f,units:qe,needed:q,per:N,base:b,nB:M,seated:w,headSeats:_,capacity:ze,seats:$e,manual:k,freeSpots:z,allFit:d,ok:d&&(y?Jp(o)>=t.guests*ko:k||ze>=q)}}function da(t,e,n){const i=(t.tentAngle||0)*Math.PI/180,r=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i));return{ex:(e*r+n*s)/2,ey:(e*s+n*r)/2}}const pd=(t,e,n,i)=>{const{ex:r,ey:s}=da(t,n+2*i,e+2*i);return 2*r<=t.siteL+1e-6&&2*s<=t.siteW+1e-6};function ra(t){const e=Br[t.tentType];if(t.tentSize!=="auto"){const[s,o]=t.tentSize.split("x").map(Number);return{...tu(t,s,o),auto:!1}}const n=[...e.sizes].sort((s,o)=>s[0]*s[1]-o[0]*o[1]||s[0]-o[0]);let i=null;for(const[s,o]of n){const a=tu(t,s,o);if(a.ok){if(pd(t,s,o,e.stake))return{...a,auto:!0};i||(i=a)}}const r=n[n.length-1];return{...i||tu(t,r[0],r[1]),auto:!0}}function md(t,e){return t.climate==="fans"?Math.ceil(e/600):t.climate==="heat-mild"?Math.max(1,Math.ceil(e*80/15e4)):t.climate==="heat-cold"?Math.max(1,Math.ceil(e*160/15e4)):0}function pa(t,e){return e?{l:t.photo.pw*t.photo.fpp,w:t.photo.ph*t.photo.fpp}:{l:t.siteL,w:t.siteW}}function Hr(t,e,n){const{W:i,L:r}=e,s=pa(t,n),{ex:o,ey:a}=da(t,r,i);let l=s.l/2,c=s.w/2;return t.tentPos&&(l=t.tentPos.x+r/2,c=t.tentPos.y+i/2,n?(l=dt(l,0,s.l),c=dt(c,0,s.w)):(l=s.l<2*o?s.l/2:dt(l,o,s.l-o),c=s.w<2*a?s.w/2:dt(c,a,s.w-a))),{x:l-r/2,y:c-i/2}}const gd=["siteName","sitePreset","siteL","siteW","surface","address","photo"],nc=t=>Object.fromEntries(gd.map(e=>[e,t[e]])),_d=t=>Object.fromEntries(Object.keys(t).filter(e=>!gd.includes(e)&&e!=="tents"&&e!=="active").map(e=>[e,t[e]]));function Dr(t,e=t.active){return{...nc(t),...t.tents[e]}}function aS(t,e,n){for(const i of Object.keys(n))gd.includes(i)?t[i]=n[i]:t.tents[e][i]=n[i]}function L_(t){if(!t)return tm(jn(tc));if(Array.isArray(t.tents)&&t.tents.length){const e=nc(eu(nc(t))),n=t.tents.map((i,r)=>({..._d(eu({...e,...i})),name:i.name||`Tent ${r+1}`}));return{...e,tents:n,active:dt(t.active|0,0,n.length-1)}}return tm(eu(t))}function tm(t){return{...nc(t),tents:[{..._d(t),name:t.name||"Tent 1"}],active:0}}function lS(t){const e=_d(jn(tc));for(const n of Object.keys(e.acc))e.acc[n].on=!1;return{...e,name:`Tent ${t}`,guests:50,stringLights:!1,generator:!1}}function vd(t,e,n){const i=Hr(t,e,n),r=e.T.stake,{ex:s,ey:o}=da(t,e.L+2*r,e.W+2*r);return{cx:i.x+e.L/2,cy:i.y+e.W/2,ex:s,ey:o}}const cS=(t,e,n,i,r)=>Math.max(0,Math.min(t+n,r.cx+r.ex)-Math.max(t-n,r.cx-r.ex))*Math.max(0,Math.min(e+i,r.cy+r.ey)-Math.max(e-i,r.cy-r.ey));function fo(t,e,n,i,r,s,o,a=!1){let l=null,c=1/0;const u=(h,_)=>Math.min(h+o,_/2),f=(h,_)=>Math.max(_-h-o,_/2),d=u(e,t.l),m=f(e,t.l),v=u(n,t.w),g=f(n,t.w),p=Math.max(1,Math.min(t.l,t.w)/80);for(let h=v;h<=g+1e-6;h+=p)for(let _=d;_<=m+1e-6;_+=p){let y;if(a)y=i.reduce((S,T)=>S+cS(_,h,e,n,T),0)*1e3+Math.hypot(_-r.x,h-r.y);else{if(i.some(S=>Math.abs(_-S.cx)<e+S.ex+s&&Math.abs(h-S.cy)<n+S.ey+s))continue;y=Math.hypot(_-r.x,h-r.y)}y<c&&(c=y,l={x:_,y:h})}return l}function N_(t,e,n,i){const r=Dr(t,e),s=ra(r),o=pa(r,n),a=t.tents.map((v,g)=>g).filter(v=>v!==e).map(v=>{const g=Dr(t,v);return vd(g,ra(g),n)}),l=s.T.stake,{ex:c,ey:u}=da(r,s.L+2*l,s.W+2*l),f=i||{x:o.l/2,y:o.w/2},d=n?0:20,m=fo(o,c,u,a,f,20,d)||fo(o,c,u,a,f,12,d)||fo(o,c,u,a,f,12,0)||fo(o,c,u,a,f,0,0)||fo(o,c,u,a,f,0,0,!0);t.tents[e].tentPos=m?{x:m.x-s.L/2,y:m.y-s.W/2}:null}function nu(t,e){for(const m of t.tents)m.tentPos=null;if(t.tents.length<2)return;const n=t.tents.map((m,v)=>({i:v,a:ra(Dr(t,v)).area})).sort((m,v)=>v.a-m.a).map(m=>m.i),i=new Set,r={x:0,y:0};for(const m of n){const v=t.tents;t.tents=v.filter((g,p)=>p===m||i.has(p)),N_(t,t.tents.indexOf(v[m]),e,r),t.tents=v,i.add(m)}const s=t.tents.map((m,v)=>{const g=Dr(t,v);return vd(g,ra(g),e)}),o=Math.min(...s.map(m=>m.cx-m.ex)),a=Math.max(...s.map(m=>m.cx+m.ex)),l=Math.min(...s.map(m=>m.cy-m.ey)),c=Math.max(...s.map(m=>m.cy+m.ey)),u=pa(Dr(t,0),e),f=u.l/2-(o+a)/2,d=u.w/2-(l+c)/2;if(a-o<=u.l&&c-l<=u.w)for(const m of t.tents)m.tentPos&&(m.tentPos={x:m.tentPos.x+f,y:m.tentPos.y+d})}function uS(t,e,n){const i=Hr(t,e,n),r=e.T.stake,s=i.x+e.L/2,o=i.y+e.W/2,a=(t.tentAngle||0)*Math.PI/180,l=Math.cos(a),c=Math.sin(a),u=e.L/2+r,f=e.W/2+r;return[[-u,-f],[u,-f],[u,f],[-u,f]].map(([d,m])=>[s+d*l-m*c,o+d*c+m*l])}function hS(t,e){for(const n of[t,e])for(let i=0;i<n.length;i++){const[r,s]=n[i],[o,a]=n[(i+1)%n.length],l=a-s,c=r-o,u=t.map(([d,m])=>d*l+m*c),f=e.map(([d,m])=>d*l+m*c);if(Math.max(...u)<Math.min(...f)||Math.max(...f)<Math.min(...u))return!1}return!0}function fS([t,e],[n,i],[r,s]){const o=r-n,a=s-i,l=dt(((t-n)*o+(e-i)*a)/(o*o+a*a||1),0,1);return Math.hypot(t-n-l*o,e-i-l*a)}function dS(t,e){let n=1/0;for(const[i,r]of[[t,e],[e,t]])for(const s of i)for(let o=0;o<r.length;o++)n=Math.min(n,fS(s,r[o],r[(o+1)%r.length]));return n}function pS(t,e,n){const i=[];if(t.length<2)return i;const r=t.map((a,l)=>uS(a,e[l],n));for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){const c=t[a].name,u=t[l].name;if(hS(r[a],r[l]))i.push(["bad",`${c} and ${u} overlap on the site (including stake and guy line areas). Drag one apart on the site plan.`]);else{const f=dS(r[a],r[l]);f<20&&i.push(["warn",`${c} and ${u} are ${Math.floor(f)}' apart between stake lines. The fire code generally asks for 20' between tents, with exceptions for smaller combined areas; confirm with the local fire marshal.`])}}const s=e.reduce((a,l)=>a+l.area,0),o=t.reduce((a,l)=>a+l.guests,0);return i.push(["info",`${t.length} tents on site: ${Math.round(s).toLocaleString()} sq ft under cover for ${o} guests in total.`]),i}function xi({value:t,onValue:e,valid:n=()=>!0,parse:i=parseFloat,...r}){const[s,o]=ke.useState(String(t)),[a,l]=ke.useState(!1);return ke.useEffect(()=>{a||o(String(t))},[t,a]),x.jsx("input",{type:"number",...r,value:s,onFocus:()=>l(!0),onBlur:()=>l(!1),onChange:c=>{const u=c.target.value;o(u);const f=i(u,10);n(f)&&e(f)}})}const po=()=>Sc("tlp-saved")||{};function mS({model:t,ph:e,photoSrc:n,onLoad:i}){const[r,s]=ke.useState(po),[o,a]=ke.useState(""),[l,c]=ke.useState(""),[u,f]=ke.useState("Layouts save in this browser only."),[d,m]=ke.useState(!1),v=ke.useRef(0),g=Object.keys(r).sort(),p=g.includes(l)?l:g[0]||"";ke.useEffect(()=>()=>clearTimeout(v.current),[]);const h=()=>{const S=o.trim()||t.siteName||"Layout",T=po();let b=`Saved “${S}” in this browser.`;T[S]={...jn(t),photoSrc:e?n:null};try{localStorage.setItem("tlp-saved",JSON.stringify(T))}catch{T[S].photoSrc=null,T[S].photo=null,b=`Saved “${S}” without the photo; browser storage is full.`;try{localStorage.setItem("tlp-saved",JSON.stringify(T))}catch{b="This browser will not save layouts."}}s(po()),c(S),f(b)},_=()=>{const S=po()[p];S&&(i(S),f(`Loaded “${p}”.`))},y=()=>{if(!p)return;if(!d){m(!0),v.current=setTimeout(()=>m(!1),3e3);return}clearTimeout(v.current);const S=po();delete S[p],Sc("tlp-saved",S),m(!1),s(S),f(`Deleted “${p}”.`)};return x.jsxs("section",{children:[x.jsx("h2",{children:"Saved layouts"}),x.jsxs("div",{className:"btnrow",children:[x.jsx("input",{type:"text",placeholder:"Layout name",style:{flex:1},value:o,onChange:S=>a(S.target.value)}),x.jsx("button",{className:"btn primary",onClick:h,children:"Save"})]}),x.jsxs("div",{className:"btnrow",children:[x.jsx("select",{style:{flex:1},"aria-label":"Saved layouts",value:p,onChange:S=>c(S.target.value),children:g.length?g.map(S=>x.jsx("option",{value:S,children:S},S)):x.jsx("option",{value:"",children:"No saved layouts yet"})}),x.jsx("button",{className:"btn",disabled:!g.length,onClick:_,children:"Load"}),x.jsx("button",{className:"btn danger",disabled:!g.length,onClick:y,children:d?"Confirm delete":"Delete"})]}),x.jsx("p",{className:"hint",children:u})]})}const D_={bottom:"Bottom side",top:"Top side",left:"Left end",right:"Right end"},I_={entrance:"Entrance",exit:"Exit only"};function gS({st:t,lay:e,update:n,sel:i,onSelect:r}){const s=Mc(t.guests),o=e.exits.length,a=!!t.exits,l=c=>n(u=>{u.exits||(u.exits=R_(e)),c(u.exits,u)});return x.jsxs("section",{children:[x.jsx("h2",{children:"Entrances & exits"}),x.jsxs("p",{className:"hint",children:[o," opening",o===1?"":"s"," · ",s," required for ",t.guests," guests."," ",a?"Placed by you.":"Placed automatically; any change below switches to your own layout.",o<s&&x.jsxs("b",{style:{color:"var(--bad)"},children:[" Add ",s-o," more."]})]}),x.jsx("div",{className:"exits",children:e.exits.map((c,u)=>x.jsxs("div",{className:"exitrow",style:i==="x:"+u?{background:"var(--accent-soft)"}:void 0,children:[x.jsx("button",{className:"btn sm no",title:"Select in the plan",onClick:()=>r("x:"+u),children:u+1}),x.jsx("select",{"aria-label":`Opening ${u+1} side`,value:c.side,onChange:f=>{const d=f.target.value;l(m=>{m[u]={...m[u],side:d}})},children:Object.entries(D_).map(([f,d])=>x.jsx("option",{value:f,children:d},f))}),x.jsx("select",{"aria-label":`Opening ${u+1} type`,value:c.kind,onChange:f=>{const d=f.target.value;l(m=>{m[u]={...m[u],kind:d}})},children:Object.entries(I_).map(([f,d])=>x.jsx("option",{value:f,children:d},f))}),x.jsx("button",{className:"btn sm danger","aria-label":`Remove opening ${u+1}`,title:"Remove",onClick:()=>{l(f=>{f.splice(u,1)}),i&&i.startsWith("x:")&&r(null)},children:"✕"}),x.jsxs("span",{className:"pos",title:"Distance from the left or top corner",children:[Math.round(c.c),"'"]}),x.jsx("input",{type:"range",min:0,max:100,step:1,"aria-label":`Opening ${u+1} position along the wall`,value:Math.round(c.f*100),onChange:f=>{const d=+f.target.value/100;l(m=>{m[u]={...m[u],f:d}})}})]},u))}),x.jsxs("div",{className:"btnrow",children:[x.jsx("button",{className:"btn",onClick:()=>l(c=>{c.push(P_(c))}),children:"+ Add exit"}),a&&x.jsx("button",{className:"btn",onClick:()=>{n(c=>{c.exits=null}),r(null)},children:"Reset to auto"})]}),x.jsx("p",{className:"hint",children:"Tip: click an exit in the tent plan and drag it along the wall, or press Delete to remove it."})]})}function _S({tents:t,active:e,st:n,update:i,onPick:r,onAdd:s,onDuplicate:o,onRemove:a}){const[l,c]=ke.useState(-1),u=ke.useRef(0);ke.useEffect(()=>()=>clearTimeout(u.current),[]);const f=d=>{if(l!==d){c(d),clearTimeout(u.current),u.current=setTimeout(()=>c(-1),3e3);return}clearTimeout(u.current),c(-1),a(d)};return x.jsxs("section",{children:[x.jsx("h2",{children:"Tents"}),t.map((d,m)=>x.jsxs("div",{className:"tentrow",children:[x.jsxs("button",{className:"btn pick","aria-pressed":m===e,onClick:()=>r(m),title:"Edit this tent",children:[d.name," ",x.jsxs("span",{className:"hint",style:{display:"inline"},children:["· ",d.lay.W,"' × ",d.lay.L,"' · ",d.guests]})]}),t.length>1?x.jsx("button",{className:"btn sm danger",onClick:()=>f(m),"aria-label":`Remove ${d.name}`,children:l===m?"Confirm":"✕"}):x.jsx("span",{}),x.jsx("span",{})]},m)),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Name of selected tent"}),x.jsx("input",{type:"text",value:n.name||"",onChange:d=>{const m=d.target.value;i(v=>{v.name=m})}})]}),x.jsxs("div",{className:"btnrow",children:[x.jsx("button",{className:"btn",onClick:s,children:"+ Add tent"}),x.jsx("button",{className:"btn",onClick:o,children:"Duplicate selected"})]}),x.jsx("p",{className:"hint",children:"The settings below apply to the selected tent. On the site plan, click a tent to select it and drag it into place."})]})}const pn=t=>t.map(([e,n])=>x.jsx("option",{value:e,children:n},e));function vS({st:t,update:e}){return x.jsx("div",{className:"acc",children:S_.map(n=>{const i=t.acc[n.id]||{on:!1},r=l=>e(c=>{c.acc[n.id]=c.acc[n.id]||{},l(c.acc[n.id],c)}),s=x.jsxs("label",{className:"chk",children:[x.jsx("input",{type:"checkbox",checked:!!i.on,onChange:l=>{const c=l.target.checked;r(u=>{u.on=c})}})," ",n.label]}),o=l=>r((c,u)=>{c.size=l,delete u.pos[n.id]});if(n.dance){const l=Es[i.finish]||Es.cherry,c=i.size==="auto"||i.size==="custom"||l.sizes.includes(i.size)?i.size:"auto";return x.jsxs(ke.Fragment,{children:[x.jsxs("div",{className:"accrow",children:[s,x.jsxs("select",{"aria-label":"Dance floor size",value:c||"auto",disabled:!i.on,onChange:u=>o(u.target.value),children:[x.jsx("option",{value:"auto",children:"Auto size"}),l.sizes.map(u=>x.jsx("option",{value:u,children:`${u.replace("x","' × ")}'`},u)),x.jsx("option",{value:"custom",children:"Custom size"})]})]}),i.on&&x.jsxs("div",{className:"dsub",children:[x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Finish"}),x.jsx("select",{value:i.finish||"cherry",onChange:u=>{const f=u.target.value;r((d,m)=>{d.finish=f,d.size!=="auto"&&d.size!=="custom"&&!Es[f].sizes.includes(d.size)&&(d.size="auto"),delete m.pos.dance})},children:pn(Object.entries(Es).map(([u,f])=>[u,f.label]))})]}),x.jsxs("label",{className:"chk",children:[x.jsx("input",{type:"checkbox",checked:!!i.wrap,onChange:u=>{const f=u.target.checked;r(d=>{d.wrap=f})}})," Vinyl wrap"]})]}),i.on&&i.size==="custom"&&x.jsxs("div",{className:"dcustom",children:[x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Length (ft)"}),x.jsx(xi,{min:4,max:100,step:4,value:i.cl||20,valid:u=>u>=4,onValue:u=>r((f,d)=>{f.cl=Math.min(100,u),delete d.pos.dance})})]}),x.jsx("span",{className:"x",children:"×"}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Width (ft)"}),x.jsx(xi,{min:4,max:100,step:4,value:i.cw||20,valid:u=>u>=4,onValue:u=>r((f,d)=>{f.cw=Math.min(100,u),delete d.pos.dance})})]})]})]},n.id)}if(n.id==="stage")return x.jsxs(ke.Fragment,{children:[x.jsxs("div",{className:"accrow",children:[s,x.jsxs("select",{"aria-label":"Stage size",value:i.size||n.def,disabled:!i.on,onChange:l=>o(l.target.value),children:[Object.keys(n.sizes).map(l=>x.jsx("option",{value:l,children:l},l)),x.jsx("option",{value:"custom",children:"Custom size"})]})]}),i.on&&i.size==="custom"&&x.jsxs("div",{className:"dcustom",children:[x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Front width (ft)"}),x.jsx(xi,{min:4,max:80,step:1,value:i.cl||12,valid:l=>l>=4,onValue:l=>r((c,u)=>{c.cl=Math.min(100,l),delete u.pos.stage})})]}),x.jsx("span",{className:"x",children:"×"}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Depth (ft)"}),x.jsx(xi,{min:4,max:60,step:1,value:i.cw||8,valid:l=>l>=4,onValue:l=>r((c,u)=>{c.cw=Math.min(100,l),delete u.pos.stage})})]})]})]},n.id);let a=x.jsx("span",{});return n.sizes?a=x.jsx("select",{"aria-label":`${n.label} size`,value:i.size||n.def,disabled:!i.on,onChange:l=>{const c=l.target.value;r(u=>{u.size=c})},children:Object.keys(n.sizes).map(l=>x.jsx("option",{value:l,children:l},l))}):n.qty&&(a=x.jsxs("select",{"aria-label":`${n.label} count`,value:i.qty||"auto",disabled:!i.on,onChange:l=>{const c=l.target.value;r(u=>{u.qty=c})},children:[x.jsx("option",{value:"auto",children:"Auto count"}),(n.qtyOpts||[1,2,3,4]).map(l=>x.jsx("option",{value:String(l),children:l},l))]})),x.jsxs("div",{className:"accrow",children:[s,a]},n.id)})})}function xS({st:t,lay:e,model:n,tents:i,active:r,sel:s,onSelect:o,update:a,ph:l,photoSrc:c,onPhotoFile:u,onCalib:f,onPhotoDel:d,onPhotoScale:m,onLoadLayout:v,onPickTent:g,onAddTent:p,onDuplicateTent:h,onRemoveTent:_,onArrange:y,onAddTable:S,onResetTables:T}){const b=ke.useRef(null),C=O=>P=>{const k=P.target.value;a(Z=>{Z[O]=k})},N=O=>P=>{const k=P.target.checked;a(Z=>{Z[O]=k})},w=Ft[t.seating],M=w.kind==="mixed",I=M?Ft[t.mixRound].seats:w.seats,q=e?e.units.filter(O=>O.type==="banquet").length:0,U=e?e.units.length-q:0,W=t.address?`https://www.google.com/maps?q=${encodeURIComponent(t.address)}&t=k`:"https://www.google.com/maps?t=k",$=l?t.photo.calibrated?`Scale set: 1 ft = ${(1/t.photo.fpp).toFixed(1)} photo pixels. Drag the tent on the site plan to place it.`:"Scale is a rough guess. Click Set scale and mark two points you measured in Google Maps (right-click › Measure distance).":"Screenshot the satellite view, then upload it or paste it here (Ctrl+V). You will set the scale by clicking two points a known distance apart.",j=t.tentSize!=="auto"&&(Object.keys(t.pos).length>0||!!t.tables);return x.jsxs("aside",{className:"rail","aria-label":"Layout settings",children:[x.jsxs("section",{children:[x.jsx("h2",{children:"Location"}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Event or site name"}),x.jsx("input",{type:"text",value:t.siteName,onChange:C("siteName")})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Site type"}),x.jsx("select",{value:t.sitePreset,onChange:O=>{const P=O.target.value;a(k=>{k.sitePreset=P;const Z=Ch[P];Z.l&&(k.siteL=Z.l,k.siteW=Z.w,k.surface=Z.surface),k.tentPos=null}),i.length>1&&y()},children:pn(Object.entries(Ch).map(([O,P])=>[O,P.label]))})]}),x.jsxs("div",{className:"row2",children:[x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Usable length (ft)"}),x.jsx(xi,{min:20,max:2e3,step:5,value:t.siteL,valid:O=>O>=20,onValue:O=>a(P=>{P.siteL=Math.min(2e3,O),P.sitePreset="custom"})})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Usable depth (ft)"}),x.jsx(xi,{min:20,max:2e3,step:5,value:t.siteW,valid:O=>O>=20,onValue:O=>a(P=>{P.siteW=Math.min(2e3,O),P.sitePreset="custom"})})]})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Ground surface"}),x.jsx("select",{value:t.surface,onChange:C("surface"),children:pn([["grass","Grass / lawn"],["gravel","Gravel"],["asphalt","Asphalt"],["concrete","Concrete"]])})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Site address"}),x.jsx("input",{type:"text",value:t.address||"",onChange:C("address"),placeholder:"Street, city, state"})]}),x.jsx("div",{className:"btnrow",children:x.jsx("a",{className:"btn",target:"_blank",rel:"noopener noreferrer",href:W,children:"Open satellite view in Google Maps"})}),x.jsxs("div",{className:"field",children:[x.jsx("span",{children:"Satellite photo of the site"}),x.jsxs("div",{className:"btnrow",children:[x.jsx("button",{className:"btn",onClick:()=>b.current.click(),children:"Upload screenshot"}),x.jsx("input",{type:"file",ref:b,accept:"image/*",hidden:!0,onChange:O=>{u(O.target.files&&O.target.files[0]),O.target.value=""}}),x.jsx("button",{className:"btn",disabled:!l,onClick:f,children:"Set scale"}),x.jsx("button",{className:"btn danger",disabled:!l,onClick:d,children:"Remove"})]}),x.jsx("p",{className:"hint",children:$})]}),l&&x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Photo scale: width covered (ft)"}),x.jsx(xi,{min:10,max:5e3,step:1,value:Math.round(t.photo.pw*t.photo.fpp),valid:O=>O>=10,onValue:O=>m(O/(t.photo.pw*t.photo.fpp))})]}),x.jsxs("label",{className:"field",children:[x.jsxs("span",{children:[i.length>1?`${t.name} rotation`:"Tent rotation"," on site: ",x.jsxs("b",{children:[t.tentAngle||0,"°"]})]}),x.jsx("input",{type:"range",min:-180,max:180,step:1,value:t.tentAngle||0,onChange:O=>{const P=+O.target.value;a(k=>{k.tentAngle=P})}})]})]}),x.jsx(_S,{tents:i,active:r,st:t,update:a,onPick:g,onAdd:p,onDuplicate:h,onRemove:_}),x.jsxs("section",{children:[x.jsxs("h2",{children:["Guests & seating",i.length>1?` · ${t.name}`:""]}),x.jsxs("div",{className:"field",children:[x.jsx("span",{children:"Guest count"}),x.jsxs("div",{className:"guests",children:[x.jsx(xi,{min:1,max:2e3,"aria-label":"Guest count",value:t.guests,parse:parseInt,valid:O=>O>=1,onValue:O=>a(P=>{P.guests=Math.min(2e3,O)})}),x.jsx("input",{type:"range",min:10,max:600,step:5,"aria-label":"Guest count slider",value:Math.min(600,t.guests),onChange:O=>{const P=parseInt(O.target.value,10);a(k=>{k.guests=P})}})]})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Seating style"}),x.jsx("select",{value:t.seating,onChange:O=>{const P=O.target.value;a(k=>{k.seating=P,k.seatsPer=Ft[P==="mixed"?k.mixRound||"rounds60":P].def})},children:pn(Object.entries(Ft).map(([O,P])=>[O,P.label]))})]}),M&&x.jsxs("div",{className:"row2",children:[x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Round tables"}),x.jsx("select",{value:t.mixRound,onChange:O=>{const P=O.target.value;a(k=>{k.mixRound=P,k.seatsPer=Ft[P].def})},children:pn([["rounds60",'60" rounds'],["rounds72",'72" rounds']])})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Banquet tables (8 seats)"}),x.jsx(xi,{min:0,max:250,"aria-label":"Banquet tables",value:t.mixBanquet,parse:parseInt,valid:O=>O>=0,onValue:O=>a(P=>{P.mixBanquet=Math.min(250,O)})})]})]}),w.kind!=="none"&&x.jsxs("div",{className:"row2",children:[x.jsxs("label",{className:"field",children:[x.jsx("span",{children:M?"Seats per round":"Seats per table"}),x.jsx("select",{value:t.seatsPer,disabled:I.length<2,onChange:O=>{const P=+O.target.value;a(k=>{k.seatsPer=P})},children:pn(I.map(O=>[O,O===1?"—":O]))})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Spacing"}),x.jsx("select",{value:t.spacing,onChange:C("spacing"),children:pn([["comfortable","Comfortable"],["tight","Tight"]])})]})]}),w.kind==="none"?x.jsx("p",{className:"hint",children:"No tables or chairs are planned. The tent is sized for standing room (about 6–8 sq ft per guest) plus the floor items below."}):e&&x.jsxs("div",{className:"field",children:[x.jsxs("span",{children:[w.kind==="chair"?`${e.units.length} chairs`:M?`${U} rounds · ${q} banquet · ${e.seats} seats`:`${e.units.length} tables · ${e.seats} seats`," · ",e.manual?"set by you":"auto from guest count"]}),x.jsxs("div",{className:"btnrow",children:[M?x.jsxs(x.Fragment,{children:[x.jsx("button",{className:"btn sm",onClick:()=>S(t.mixRound),children:"+ Add round"}),x.jsx("button",{className:"btn sm",onClick:()=>S("banquet"),children:"+ Add banquet"})]}):x.jsx("button",{className:"btn sm",onClick:()=>S(),children:w.kind==="chair"?"+ Add chair":"+ Add table"}),t.tables&&x.jsx("button",{className:"btn sm",onClick:T,children:"Reset to auto"})]}),x.jsx("p",{className:"hint",children:w.kind==="chair"?"Click a chair in the tent plan to move or remove it.":"Click a table in the tent plan to move it, switch it between round and banquet, add or remove chairs, or remove it."})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Chair style"}),x.jsx("select",{value:t.chairStyle,onChange:C("chairStyle"),children:pn(Ky.map(O=>[O,O]))})]})]}),x.jsxs("section",{children:[x.jsxs("h2",{children:["Tent",i.length>1?` · ${t.name}`:""]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Tent style"}),x.jsx("select",{value:t.tentType,onChange:O=>{const P=O.target.value;a(k=>{k.tentType=P,k.tentSize="auto",k.pos={}})},children:pn(Object.entries(Br).map(([O,P])=>[O,P.label]))})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Size"}),x.jsx("select",{value:t.tentSize,onChange:C("tentSize"),children:pn([["auto","Auto (smallest that fits)"],...Br[t.tentType].sizes.map(([O,P])=>[`${O}x${P}`,`${O}' × ${P}'`])])})]}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Sidewalls"}),x.jsx("select",{value:t.walls,onChange:C("walls"),children:pn([["none","None (open sides)"],["solid","Solid white"],["window","Cathedral window"],["clear","Clear"]])})]}),j&&x.jsx("p",{className:"hint",children:"Size locked because you moved an item. Pick Auto to resize again."})]}),e&&x.jsx(gS,{st:t,lay:e,update:a,sel:s,onSelect:o}),x.jsxs("section",{children:[x.jsx("h2",{children:"Floor items"}),x.jsx(vS,{st:t,update:a})]}),x.jsxs("section",{children:[x.jsx("h2",{children:"Comfort, lighting & power"}),x.jsxs("label",{className:"field",children:[x.jsx("span",{children:"Climate control"}),x.jsx("select",{value:t.climate,onChange:C("climate"),children:pn([["none","None"],["fans","Summer: industrial fans"],["heat-mild","Cool evening: heat (50s °F)"],["heat-cold","Cold: heat (30s–40s °F)"]])})]}),x.jsxs("label",{className:"chk",children:[x.jsx("input",{type:"checkbox",checked:!!t.stringLights,onChange:N("stringLights")})," Bistro string lights"]}),t.stringLights&&x.jsxs("label",{className:"field",style:{paddingLeft:24},children:[x.jsx("span",{children:"String light layout"}),x.jsx("select",{value:t.lightStyle||"swag",onChange:C("lightStyle"),children:pn(Object.entries(Yy))})]}),x.jsxs("label",{className:"chk",children:[x.jsx("input",{type:"checkbox",checked:!!t.chandeliers,onChange:N("chandeliers")})," Chandeliers"]}),t.chandeliers&&e&&x.jsxs("div",{className:"field",style:{paddingLeft:24},children:[x.jsxs("span",{children:[e.chands.length," chandelier",e.chands.length===1?"":"s"," · ",t.chandList?"placed by you":"auto, one per 20' bay"]}),x.jsxs("div",{className:"btnrow",children:[x.jsx("button",{className:"btn sm",onClick:()=>a(O=>{O.chandList||(O.chandList=b_(e)),O.chandList.push(C_(e))}),children:"+ Add chandelier"}),t.chandList&&x.jsx("button",{className:"btn sm",onClick:()=>{a(O=>{O.chandList=null}),o(null)},children:"Reset to auto"})]}),x.jsx("p",{className:"hint",children:"Click a chandelier in the tent plan to drag it, or press Delete to remove it."})]}),x.jsxs("label",{className:"chk",children:[x.jsx("input",{type:"checkbox",checked:!!t.uplights,onChange:N("uplights")})," LED uplighting"]}),x.jsxs("label",{className:"chk",children:[x.jsx("input",{type:"checkbox",checked:!!t.generator,onChange:N("generator")})," Generator"]})]}),x.jsx(mS,{model:n,ph:l,photoSrc:c,onLoad:v})]})}function yS({id:t,w:e,h:n,seats:i,st:r}){const s=[];let o=0;const a=()=>o++;if(t==="stage"){s.push(x.jsx("rect",{className:"stage",width:e,height:n},a()));for(let l=4;l<e-.1;l+=4)s.push(x.jsx("line",{className:"deck",x1:l,y1:0,x2:l,y2:n},a()));for(let l=8;l<n-.1;l+=8)s.push(x.jsx("line",{className:"deck",x1:0,y1:l,x2:e,y2:l},a()))}else if(t==="dance"){const l=fa(r),c=l.tile;for(let u=0;u<e/c-.01;u++)for(let f=0;f<n/c-.01;f++)s.push(x.jsx("rect",{fill:l.colors[(u+f)%2],x:u*c,y:f*c,width:Ke(Math.min(c,e-u*c)),height:Ke(Math.min(c,n-f*c))},a()));s.push(x.jsx("rect",{className:"dfedge",width:e,height:n},a())),(r.acc.dance||{}).wrap&&s.push(x.jsx("circle",{className:"wrap",cx:e/2,cy:n/2,r:Math.min(e,n)*.3},a()))}else if(t==="head"){const l=i||2;s.push(x.jsx("rect",{className:"tbl",x:0,y:n-3.5,width:e,height:2.5},a()));for(let c=8;c<e-.1;c+=8)s.push(x.jsx("line",{className:"tbl",x1:c,y1:n-3.5,x2:c,y2:n-1},a()));for(let c=0;c<l;c++){const u=(c+.5)*e/l;s.push(x.jsx("rect",{className:"chair",x:u-.65,y:n-5.1,width:1.3,height:1.3,rx:.3},a()))}}else if(t==="dj")s.push(x.jsx("rect",{className:"zone",width:e,height:n},a()),x.jsx("rect",{className:"tbl",x:1,y:2.8,width:e-2,height:2},a()),x.jsx("rect",{className:"stage",x:.3,y:n-1.5,width:1.2,height:1.2},a()),x.jsx("rect",{className:"stage",x:e-1.5,y:n-1.5,width:1.2,height:1.2},a()));else if(t==="buffet"){s.push(x.jsx("rect",{className:"zone",width:e,height:n},a()),x.jsx("rect",{className:"tbl",x:0,y:n/2-1.25,width:e,height:2.5},a()),x.jsx("line",{className:"tbl",x1:8,y1:n/2-1.25,x2:8,y2:n/2+1.25},a()));for(let l=1;l<e-1;l+=2.6)s.push(x.jsx("rect",{className:"chafer",x:l,y:n/2-.6,width:1.8,height:1.2,rx:.3},a()))}else t==="bar"?s.push(x.jsx("rect",{className:"zone",width:e,height:n},a()),x.jsx("rect",{className:"tbl",x:2,y:.5,width:e-4,height:1.5},a()),x.jsx("rect",{className:"stage",x:1,y:3,width:e-2,height:2.5},a())):t==="cake"?s.push(x.jsx("circle",{className:"tbl",cx:e/2,cy:n/2,r:2},a()),x.jsx("circle",{className:"chafer",cx:e/2,cy:n/2,r:.9},a())):t==="highboy"?s.push(x.jsx("circle",{className:"zone",cx:e/2,cy:n/2,r:2.3},a()),x.jsx("circle",{className:"tbl",cx:e/2,cy:n/2,r:1.25},a())):t==="gift"?s.push(x.jsx("rect",{className:"tbl",x:1,y:1.2,width:e-2,height:2.5},a())):t==="photo"?s.push(x.jsx("rect",{className:"zone",width:e,height:n},a()),x.jsx("rect",{className:"stage",x:1,y:.4,width:e-2,height:.7},a()),x.jsx("rect",{className:"stage",x:e/2-.6,y:n-2.2,width:1.2,height:1.2},a())):t==="lounge"&&s.push(x.jsx("rect",{className:"zone",width:e,height:n},a()),x.jsx("rect",{className:"sofa",x:2,y:.6,width:e-4,height:2.6,rx:.6},a()),x.jsx("rect",{className:"sofa",x:1,y:5.6,width:2.6,height:2.6,rx:.5},a()),x.jsx("rect",{className:"sofa",x:e-3.6,y:5.6,width:2.6,height:2.6,rx:.5},a()),x.jsx("rect",{className:"tbl",x:e/2-2.5,y:4.6,width:5,height:2.4,rx:.3},a()));return x.jsx(x.Fragment,{children:s})}function SS({u:t,S:e,seatsPer:n}){const{x:i,y:r}=t,s=t.seats??n,o=[];let a=0;const l=()=>a++;if(e.kind==="round"){const c=e.r+.85;for(let u=0;u<s;u++){const f=u*2*Math.PI/s-Math.PI/2;o.push(x.jsx("circle",{className:"chair",cx:Ke(i+c*Math.cos(f)),cy:Ke(r+c*Math.sin(f)),r:.62},l()))}o.push(x.jsx("circle",{className:"tbl",cx:i,cy:r,r:e.r},l()),x.jsx("text",{className:"num seats",x:i,y:r,fontSize:e.r*.7,children:s},l()))}else if(e.kind==="banquet"){for(const[c,u]of M_.slice(0,s))o.push(x.jsx("rect",{className:"chair",x:i+c-.6,y:r+u*2.05-.55,width:1.2,height:1.1,rx:.25},l()));o.push(x.jsx("rect",{className:"tbl",x:i-4,y:r-1.25,width:8,height:2.5},l()),x.jsx("text",{className:"num seats",x:i,y:r,fontSize:1.5,children:s},l()))}else e.kind==="chair"?o.push(x.jsx("rect",{className:"chair",x:i-.75,y:r-.75,width:1.5,height:1.5,rx:.3},l())):o.push(x.jsx("circle",{className:"tbl",cx:i,cy:r,r:e.r},l()),x.jsx("circle",{className:"chair",cx:i,cy:r,r:.4},l()));return x.jsx(x.Fragment,{children:o})}function U_({st:t,l:e,interactive:n,fs:i,sel:r}){const{W:s,L:o,sh:a}=e,l=e.T.stake,c=[];let u=0;const f=()=>u++,d="floor"+(t.tentType==="cleartop"?" clear":"");if(a.oval?(c.push(x.jsx("path",{className:"stake",d:Jc(a,l)},f())),c.push(x.jsx("path",{className:d,d:Jc(a)},f()))):(c.push(x.jsx("rect",{className:"stake",x:-l,y:-l,width:o+2*l,height:s+2*l,rx:l/2},f())),c.push(x.jsx("rect",{className:d,x:0,y:0,width:o,height:s},f()))),t.climate.startsWith("heat")){const g=md(t,e.area),p=Math.ceil(g/2),h=g-p,_=(y,S)=>{for(let T=0;T<y;T++){const b=(T+1)*o/(y+1),C=S?-7:s+3;c.push(x.jsx("line",{className:"duct",x1:b,y1:S?-3:s,x2:b,y2:S?0:s+3},f()),x.jsx("rect",{className:"heater",x:b-1.5,y:C,width:3,height:4},f()))}};_(p,!1),_(h,!0)}for(const g of e.items){const[p,h]=g.dims,_=g.x+g.w/2,y=g.y+g.h/2;c.push(x.jsxs("g",{className:"item"+(n&&r===g.key?" sel":"")+(g.fit?"":" bad"),"data-key":n?g.key:void 0,transform:`translate(${Ke(_)} ${Ke(y)}) rotate(${g.rot}) translate(${-p/2} ${-h/2})`,children:[x.jsx("rect",{className:"hit",width:p,height:h}),x.jsx(yS,{id:g.def.id,w:p,h,seats:g.seats,st:t})]},"i-"+g.key))}e.units.forEach((g,p)=>{const h=x.jsx(SS,{u:g,S:Ft[g.type]||e.S,seatsPer:t.seatsPer});if(!n){c.push(g.rot?x.jsx("g",{transform:`rotate(${g.rot} ${g.x} ${g.y})`,children:h},"u-"+p):x.jsx("g",{children:h},"u-"+p));return}const{hx:_,hy:y}=Ft[g.type]||e.S;c.push(x.jsxs("g",{className:"unit"+(r==="u:"+p?" sel":"")+(g.bad?" bad":""),"data-unit":p,transform:g.rot?`rotate(${g.rot} ${g.x} ${g.y})`:void 0,children:[x.jsx("rect",{className:"hit",x:Ke(g.x-_),y:Ke(g.y-y),width:2*_,height:2*y}),h]},"u-"+p))});for(const g of e.poles)c.push(g.inner?x.jsx("circle",{className:"pole inner",cx:Ke(g.x),cy:Ke(g.y),r:.55},f()):x.jsx("rect",{className:"pole",x:Ke(g.x)-.35,y:Ke(g.y)-.35,width:.7,height:.7},f()));const m=t.walls==="none"?"wall open":"wall";if(a.oval)for(const g of w_(a,e.exits))c.push(x.jsx("polyline",{className:m,fill:"none",points:g.map(([p,h])=>`${Ke(p)},${Ke(h)}`).join(" ")},f()));else for(const g of["top","bottom","left","right"]){const p=g==="top"||g==="bottom",h=p?o:s,_=e.exits.filter(T=>T.side===g).map(T=>[T.c-3,T.c+3]).sort((T,b)=>T[0]-b[0]);let y=0;const S=[];for(const[T,b]of _)S.push([y,T]),y=b;S.push([y,h]);for(const[T,b]of S){if(b-T<.01)continue;const C=g==="top"||g==="left"?0:p?s:o;c.push(p?x.jsx("line",{className:m,x1:Ke(T),y1:C,x2:Ke(b),y2:C},f()):x.jsx("line",{className:m,x1:C,y1:Ke(T),x2:C,y2:Ke(b)},f()))}}const v=t.lightStyle||"swag";if(t.stringLights&&v!=="swag"&&c.push(x.jsx("path",{className:"light",d:Jc(a,-ec)},f())),t.stringLights&&v!=="perimeter"){const g=Math.max(1,Math.round(o/10)),p=[];for(let h=0;h<=g;h++){const _=h*o/g,y=ei(a,_);p.push(`${Ke(_)},${Ke(h%2?s-y:y)}`)}c.push(x.jsx("polyline",{className:"light",points:p.join(" ")},f()))}e.chands.forEach((g,p)=>{const h=Ke(g.x),_=Ke(g.y);c.push(x.jsxs("g",{className:n?"chandg"+(r==="c:"+p?" sel":""):void 0,"data-chand":n?p:void 0,children:[n&&x.jsx("circle",{className:"hit",cx:h,cy:_,r:Math.max(1.6,i*1.2)}),x.jsx("circle",{className:"chand",cx:h,cy:_,r:i*.45}),x.jsx("circle",{className:"light",cx:h,cy:_,r:i*.95,style:{strokeDasharray:"none",strokeWidth:1}})]},"c-"+p))}),e.exits.forEach((g,p)=>{const h=g.main?"ENTRANCE · EXIT":"EXIT",_=[];if(g.side==="bottom")_.push(x.jsx("line",{className:"exitarrow",x1:g.c,y1:g.p-2,x2:g.c,y2:g.p+2,markerEnd:"url(#arr)"},"a"),x.jsx("text",{className:"exitt",x:g.c,y:g.p+2.6+i,fontSize:i*.9,children:h},"t"));else if(g.side==="top")_.push(x.jsx("line",{className:"exitarrow",x1:g.c,y1:g.p+2,x2:g.c,y2:g.p-2,markerEnd:"url(#arr)"},"a"),x.jsx("text",{className:"exitt",x:g.c,y:g.p-2.8,fontSize:i*.9,children:h},"t"));else{const y=g.p,S=g.side==="right"?1:-1;_.push(x.jsx("line",{className:"exitarrow",x1:y-2*S,y1:g.c,x2:y+2*S,y2:g.c,markerEnd:"url(#arr)"},"a"),x.jsx("text",{className:"exitt",transform:`translate(${y+S*(2.8+i*.5)} ${g.c}) rotate(${S*90})`,fontSize:i*.9,children:h},"t"))}c.push(x.jsxs("g",{className:n?"exitg"+(r==="x:"+p?" sel":""):void 0,"data-exit":n?p:void 0,children:[n&&x.jsx("circle",{className:"hit",cx:Ke(g.x),cy:Ke(g.y),r:4}),_]},"x-"+p))});for(const g of e.items){if(!g.def.short)continue;const p=g.x+g.w/2,h=g.y+g.h/2,_=g.def.id,y=g.h>g.w*1.25;let S=g.def.short;(_==="dance"||_==="stage")&&(S+=` ${g.dims[0]}×${g.dims[1]}`);const T=Math.min(i,(y?g.h:g.w)/(S.length*.5));c.push(x.jsx("text",{className:"lbl"+(_==="stage"?" inv":""),fontSize:Ke(T),transform:`translate(${Ke(p)} ${Ke(h)})${y?" rotate(-90)":""}`,children:S},f()))}return x.jsx(x.Fragment,{children:c})}function nm({x:t,y:e,maxLen:n,fs:i}){const r=n<=40?5:n<=90?10:n<=180?20:50;return x.jsxs(x.Fragment,{children:[x.jsx("rect",{className:"sb1",x:t,y:e,width:r,height:i*.45}),x.jsx("rect",{className:"sb2",x:t+r,y:e,width:r,height:i*.45}),x.jsx("text",{className:"sbt",x:t,y:e+i*1.4,fontSize:i*.75,children:"0"}),x.jsx("text",{className:"sbt",x:t+r,y:e+i*1.4,fontSize:i*.75,children:r}),x.jsxs("text",{className:"sbt",x:t+2*r,y:e+i*1.4,fontSize:i*.75,children:[2*r," FT"]})]})}function Ba({x0:t,y0:e,len:n,horiz:i,off:r,fs:s,label:o}){if(i){const l=e-r;return x.jsxs(x.Fragment,{children:[x.jsx("line",{className:"ext",x1:t,y1:e,x2:t,y2:l-1}),x.jsx("line",{className:"ext",x1:t+n,y1:e,x2:t+n,y2:l-1}),x.jsx("line",{className:"dim",x1:t,y1:l,x2:t+n,y2:l}),x.jsx("line",{className:"dim",x1:t-.7,y1:l+.7,x2:t+.7,y2:l-.7}),x.jsx("line",{className:"dim",x1:t+n-.7,y1:l+.7,x2:t+n+.7,y2:l-.7}),x.jsx("text",{className:"dimt",x:t+n/2,y:l-.6,fontSize:s*.85,children:o})]})}const a=t-r;return x.jsxs(x.Fragment,{children:[x.jsx("line",{className:"ext",x1:t,y1:e,x2:a-1,y2:e}),x.jsx("line",{className:"ext",x1:t,y1:e+n,x2:a-1,y2:e+n}),x.jsx("line",{className:"dim",x1:a,y1:e,x2:a,y2:e+n}),x.jsx("line",{className:"dim",x1:a-.7,y1:e+.7,x2:a+.7,y2:e-.7}),x.jsx("line",{className:"dim",x1:a-.7,y1:e+n+.7,x2:a+.7,y2:e+n-.7}),x.jsx("text",{className:"dimt",transform:`translate(${a-.6} ${e+n/2}) rotate(-90)`,fontSize:s*.85,children:o})]})}const im=()=>x.jsx("defs",{children:x.jsx("marker",{id:"arr",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"5",markerHeight:"5",orient:"auto-start-reverse",children:x.jsx("path",{d:"M0 0 L10 5 L0 10 z",fill:"var(--ok)"})})});function MS({t,i:e,active:n,sel:i,ph:r,fs:s,multi:o}){const{st:a,lay:l}=t,{W:c,L:u}=l,f=l.T.stake,d=Hr(a,l,r),m=`translate(${Ke(d.x+u/2)} ${Ke(d.y+c/2)}) rotate(${a.tentAngle||0}) translate(${-u/2} ${-c/2})`,v=u+f+20,g=c/2-2,p=e===n&&i==="__tent";return x.jsxs(x.Fragment,{children:[r&&x.jsxs("g",{transform:m,children:[x.jsx("rect",{className:"setback",x:-20,y:-20,width:u+40,height:c+40,rx:20,style:{strokeWidth:2}}),x.jsx("text",{className:"sett",x:u/2,y:-20-s*.5,fontSize:s*.8,textAnchor:"middle",style:{paintOrder:"stroke",stroke:"var(--tent)",strokeWidth:"3px"},children:"20' CLEARANCE"})]}),x.jsx("g",{className:"tentg"+(p?" sel":"")+(o&&e===n?" active":""),"data-key":`__tent:${e}`,transform:m,children:x.jsx(U_,{st:a,l,interactive:!1,fs:Math.min(s,dt(Math.max(u,c)/50,.9,2.4)),sel:i})}),a.generator&&x.jsxs("g",{transform:m,children:[x.jsx("line",{className:"dim",x1:u,y1:g+2,x2:v,y2:g+2,style:{strokeDasharray:"4 3"}}),x.jsx("rect",{className:"gen",x:v,y:g,width:7,height:4}),x.jsx("text",{className:"dimt",x:v+3.5,y:g-1,fontSize:s*.7,children:"GENERATOR · 20' MIN."})]}),o&&x.jsx("text",{className:"tentname",x:Ke(d.x+u/2),y:Ke(d.y+c/2),fontSize:s*1.1,children:a.name})]})}function ES({st:t,lay:e,tents:n,active:i=0,view:r,sel:s,calib:o,ph:a,photoSrc:l,svgRef:c,dragging:u,...f}){const{W:d,L:m}=e,v=e.T.stake,g=[u?"dragging":"",o&&r==="site"?"calibrating":""].filter(Boolean).join(" ")||void 0;if(r==="tent"){const C=dt(Math.max(m,d)/50,.9,2.4),N=v+6+C*2.2;return x.jsxs("svg",{id:"plan",ref:c,className:g,xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:`${-N} ${-N} ${m+2*N} ${d+2*N+C*1.5}`,"aria-label":`Tent plan, ${d} by ${m} foot ${e.T.label}`,...f,children:[x.jsx(im,{}),x.jsx(U_,{st:t,l:e,interactive:!0,fs:C,sel:s}),x.jsx(Ba,{x0:0,y0:-v,len:m,horiz:!0,off:3+C*.4,fs:C,label:za(m)}),x.jsx(Ba,{x0:-v,y0:0,len:d,horiz:!1,off:3+C*.4,fs:C,label:za(d)}),x.jsx(nm,{x:0,y:d+v+3+C*.6,maxLen:m,fs:C})]})}const p=pa(t,a),h=p.l,_=p.w,y=Math.max(h,_)/55,S=Math.max(h,_)*.07+y*2,T=n&&n.length?n:[{st:t,lay:e}],b=T.length>1;return x.jsxs("svg",{id:"plan",ref:c,className:g,xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:`${-S} ${-S} ${h+2*S} ${_+2*S}`,"aria-label":a?"Site plan over satellite photo":`Site plan, ${h} by ${_} foot site`,...f,children:[x.jsx(im,{}),a?x.jsx("image",{href:l,x:0,y:0,width:Ke(h),height:Ke(_),preserveAspectRatio:"none"}):x.jsxs(x.Fragment,{children:[x.jsx("rect",{className:t.surface==="grass"||t.surface==="gravel"?"soft":"hard",x:0,y:0,width:h,height:_}),h>45&&_>45&&x.jsxs(x.Fragment,{children:[x.jsx("rect",{className:"setback",x:20,y:20,width:h-40,height:_-40}),x.jsx("text",{className:"sett",x:22,y:20+y*1.1,fontSize:y*.7,children:"20' SETBACK FROM LOT LINES"})]}),x.jsx("rect",{className:"siteline",x:0,y:0,width:h,height:_})]}),T.map((C,N)=>x.jsx(MS,{t:C,i:N,active:i,sel:s,ph:a,fs:y,multi:b},N)),!a&&x.jsxs(x.Fragment,{children:[x.jsx(Ba,{x0:0,y0:0,len:h,horiz:!0,off:y*1.6,fs:y,label:`SITE ${za(h)}`}),x.jsx(Ba,{x0:0,y0:0,len:_,horiz:!1,off:y*1.6,fs:y,label:za(_)})]}),x.jsx(nm,{x:0,y:_+y*1.2,maxLen:h,fs:y}),a&&x.jsxs("text",{className:"attr",x:h-y*.5,y:_-y*.5,fontSize:y*.6,children:["Imagery: Google",t.photo.calibrated?"":" · scale not set"]}),o&&x.jsxs(x.Fragment,{children:[o.pts.length===2&&x.jsx("line",{className:"calib",x1:o.pts[0].x,y1:o.pts[0].y,x2:o.pts[1].x,y2:o.pts[1].y}),o.pts.map((C,N)=>x.jsx("circle",{className:"calibpt",cx:C.x,cy:C.y,r:y*.35},N))]})]})}function iu({angle:t,selKey:e,onRotate:n,onSetAngle:i}){const r=Math.round(t);return x.jsxs(x.Fragment,{children:[x.jsx("button",{className:"btn","aria-label":"Rotate 15 degrees left",onClick:()=>n(-15),children:"⟲ 15°"}),x.jsx("button",{className:"btn","aria-label":"Rotate 15 degrees right",onClick:()=>n(15),children:"⟳ 15°"}),x.jsx("button",{className:"btn",onClick:()=>n(90),children:"Turn 90°"}),x.jsxs("label",{className:"hint",children:["Angle"," ",x.jsx("input",{type:"number",step:1,defaultValue:r,onKeyDown:s=>{s.key==="Enter"&&i(parseFloat(s.target.value))},onBlur:s=>{const o=parseFloat(s.target.value);o!==r&&i(o)}},e+":"+r)," °"]})]})}function TS({view:t,calib:e,sel:n,lay:i,st:r,onCancelCalib:s,onApplyCalib:o,onRotate:a,onSetAngle:l,onRemove:c,onReflow:u,onExitKind:f,onRemoveExit:d,onAddExit:m,onRemoveChand:v,onAddChand:g,onSeats:p,onTableType:h,onAddTable:_,onRemoveTable:y}){const S=ke.useRef(null);let T;if(t==="site"&&e)T=e.pts.length<2?x.jsxs(x.Fragment,{children:[x.jsxs("span",{className:"hint",children:["Click ",e.pts.length?"the second point":"two points a known distance apart"," on the photo."]}),x.jsx("button",{className:"btn",onClick:s,children:"Cancel"})]}):x.jsxs(x.Fragment,{children:[x.jsxs("label",{className:"hint",children:["Real distance"," ",x.jsx("input",{ref:S,type:"number",min:1,step:.5,"aria-label":"Real distance in feet",autoFocus:!0,onKeyDown:b=>{b.key==="Enter"&&o(parseFloat(b.target.value))}})," ft"]}),x.jsx("button",{className:"btn primary",onClick:()=>o(parseFloat(S.current&&S.current.value)),children:"Apply scale"}),x.jsx("button",{className:"btn",onClick:s,children:"Cancel"})]});else if(t==="site"&&n==="__tent")T=x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"name",children:"Tent"}),x.jsx(iu,{angle:r.tentAngle||0,selKey:n,onRotate:a,onSetAngle:l})]});else{const b=t==="tent"&&n&&n.startsWith("x:")?i.exits[+n.slice(2)]:null,C=t==="tent"&&n&&n.startsWith("c:")?i.chands[+n.slice(2)]:null,N=t==="tent"&&n&&n.startsWith("u:")?i.units[+n.slice(2)]:null,w=t==="tent"&&n&&!N&&!b&&!C?i.items.find(M=>M.key===n):null;if(C)T=x.jsxs(x.Fragment,{children:[x.jsxs("span",{className:"name",children:["Chandelier ",+n.slice(2)+1]}),x.jsxs("span",{className:"hint",children:[Math.round(C.x),"' along · ",Math.round(C.y),"' across"]}),x.jsx("button",{className:"btn",onClick:g,children:"+ Add another"}),x.jsx("button",{className:"btn danger",onClick:v,children:"Remove"})]});else if(b)T=x.jsxs(x.Fragment,{children:[x.jsxs("span",{className:"name",children:[b.main?"Entrance":"Exit"," ",+n.slice(2)+1]}),x.jsxs("span",{className:"hint",children:[D_[b.side]," · ",Math.round(b.c),"' in"]}),x.jsx("select",{"aria-label":"Opening type",value:b.kind,onChange:M=>f(M.target.value),style:{width:"auto"},children:Object.entries(I_).map(([M,I])=>x.jsx("option",{value:M,children:I},M))}),x.jsx("button",{className:"btn danger",onClick:d,children:"Remove"})]});else if(N){const M=i.S.kind==="chair",I=N.seats??i.per,q=Ml[N.type]||12;T=x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"name",children:M?"Chair":"Table"}),!M&&x.jsx("select",{"aria-label":"Table type",value:N.type,onChange:U=>h(U.target.value),style:{width:"auto"},children:Object.entries(Xy).map(([U,W])=>x.jsx("option",{value:U,children:W},U))}),!M&&x.jsxs("span",{className:"stepper",role:"group","aria-label":"Chairs at this table",children:[x.jsx("button",{className:"btn sm","aria-label":"Remove a chair",disabled:I<=0,onClick:()=>p(I-1),children:"−"}),x.jsxs("span",{className:"cnt",children:[I," chair",I===1?"":"s"]}),x.jsx("button",{className:"btn sm","aria-label":"Add a chair",disabled:I>=q,onClick:()=>p(I+1),children:"+"})]}),x.jsx(iu,{angle:N.rot||0,selKey:n,onRotate:a,onSetAngle:l}),x.jsx("button",{className:"btn",onClick:()=>_(N.type),children:M?"+ Add chair":"+ Add table"}),x.jsx("button",{className:"btn danger",onClick:y,children:M?"Remove chair":"Remove table"}),r.tables&&x.jsx("button",{className:"btn",onClick:u,children:"Reset to auto"})]})}else w?T=x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"name",children:w.def.label}),x.jsx(iu,{angle:w.rot,selKey:n,onRotate:a,onSetAngle:l}),x.jsx("button",{className:"btn danger",onClick:c,children:"Remove"})]}):T=t==="site"?x.jsx("span",{className:"hint",children:"Drag the tent to place it on the site."}):x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"hint",children:"Drag any item, table, exit or chandelier to move it."}),x.jsx("button",{className:"btn",onClick:m,children:"+ Add exit"})]})}return x.jsx("div",{className:"selinfo",children:T})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xd="170",Ns={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wS=0,rm=1,AS=2,F_=1,bS=2,gi=3,lr=0,un=1,Vn=2,rr=0,Ds=1,sm=2,om=3,am=4,CS=5,Tr=100,RS=101,PS=102,LS=103,NS=104,DS=200,IS=201,US=202,FS=203,Lh=204,Nh=205,OS=206,kS=207,zS=208,BS=209,HS=210,VS=211,GS=212,jS=213,WS=214,Dh=0,Ih=1,Uh=2,Gs=3,Fh=4,Oh=5,kh=6,zh=7,yd=0,XS=1,$S=2,sr=0,qS=1,YS=2,KS=3,ZS=4,QS=5,JS=6,eM=7,O_=300,js=301,Ws=302,Bh=303,Hh=304,Ec=306,Vh=1e3,Rr=1001,Gh=1002,qn=1003,tM=1004,Ha=1005,ii=1006,ru=1007,Pr=1008,Pi=1009,k_=1010,z_=1011,sa=1012,Sd=1013,Vr=1014,Mi=1015,ma=1016,Md=1017,Ed=1018,Xs=1020,B_=35902,H_=1021,V_=1022,Wn=1023,G_=1024,j_=1025,Is=1026,$s=1027,W_=1028,Td=1029,X_=1030,wd=1031,Ad=1033,El=33776,Tl=33777,wl=33778,Al=33779,jh=35840,Wh=35841,Xh=35842,$h=35843,qh=36196,Yh=37492,Kh=37496,Zh=37808,Qh=37809,Jh=37810,ef=37811,tf=37812,nf=37813,rf=37814,sf=37815,of=37816,af=37817,lf=37818,cf=37819,uf=37820,hf=37821,bl=36492,ff=36494,df=36495,$_=36283,pf=36284,mf=36285,gf=36286,nM=3200,iM=3201,q_=0,rM=1,$i="",gn="srgb",Qs="srgb-linear",Tc="linear",ot="srgb",Zr=7680,lm=519,sM=512,oM=513,aM=514,Y_=515,lM=516,cM=517,uM=518,hM=519,cm=35044,um="300 es",Ei=2e3,ic=2001;class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,_f=180/Math.PI;function ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function fM(t,e){return(t%e+e)%e}function su(t,e,n){return(1-n)*t+n*e}function mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const dM={DEG2RAD:Cl};class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],g=r[0],p=r[3],h=r[6],_=r[1],y=r[4],S=r[7],T=r[2],b=r[5],C=r[8];return s[0]=o*g+a*_+l*T,s[3]=o*p+a*y+l*b,s[6]=o*h+a*S+l*C,s[1]=c*g+u*_+f*T,s[4]=c*p+u*y+f*b,s[7]=c*h+u*S+f*C,s[2]=d*g+m*_+v*T,s[5]=d*p+m*y+v*b,s[8]=d*h+m*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,v=n*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=m*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ou.makeScale(e,n)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new je;function K_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pM(){const t=oa("canvas");return t.style.display="block",t}const hm={};function bo(t){t in hm||(hm[t]=!0,console.warn(t))}function mM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function gM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _M(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ot&&(t.r=wi(t.r),t.g=wi(t.g),t.b=wi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ot&&(t.r=Us(t.r),t.g=Us(t.g),t.b=Us(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===$i?Tc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const fm=[.64,.33,.3,.6,.15,.06],dm=[.2126,.7152,.0722],pm=[.3127,.329],mm=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Qs]:{primaries:fm,whitePoint:pm,transfer:Tc,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:dm,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:fm,whitePoint:pm,transfer:ot,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:dm,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let Qr;class vM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=oa("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wi(n[i]/255)*255):n[i]=wi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xM=0;class Z_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(au(r[o].image)):s.push(au(r[o]))}else s=au(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function au(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yM=0;class Qt extends $r{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Rr,r=Rr,s=ii,o=Pr,a=Wn,l=Pi,c=Qt.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ga(),this.name="",this.source=new Z_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vh:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vh:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=O_;Qt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(m+1)/2,T=(h+1)/2,b=(u+d)/4,C=(f+g)/4,N=(v+p)/4;return y>S&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=C/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=N/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=N/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(f-g)/_,this.z=(d-u)/_,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends $r{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Z_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends SM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Q_ extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=g;return}if(f!==g||l!==d||c!==m||u!==v){let p=1-a;const h=l*d+c*m+u*v+f*g,_=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const T=Math.sqrt(y),b=Math.atan2(T,h*_);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T}const S=a*_;if(l=l*p+d*S,c=c*p+m*S,u=u*p+v*S,f=f*p+g*S,p===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*m-c*d,e[n+1]=l*v+u*d+c*f-a*m,e[n+2]=c*v+u*m+a*d-l*f,e[n+3]=u*v-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_m.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_m.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lu=new X,_m=new jr;class _a{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),Ga.subVectors(this.max,go),Jr.subVectors(e.a,go),es.subVectors(e.b,go),ts.subVectors(e.c,go),Fi.subVectors(es,Jr),Oi.subVectors(ts,es),mr.subVectors(Jr,ts);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-mr.z,mr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,mr.z,0,-mr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-mr.y,mr.x,0];return!cu(n,Jr,es,ts,Ga)||(n=[1,0,0,0,1,0,0,0,1],!cu(n,Jr,es,ts,Ga))?!1:(ja.crossVectors(Fi,Oi),n=[ja.x,ja.y,ja.z],cu(n,Jr,es,ts,Ga))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new X,new X,new X,new X,new X,new X,new X,new X],Un=new X,Va=new _a,Jr=new X,es=new X,ts=new X,Fi=new X,Oi=new X,mr=new X,go=new X,Ga=new X,ja=new X,gr=new X;function cu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gr.fromArray(t,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),u=i.dot(gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const EM=new _a,_o=new X,uu=new X;class bd{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):EM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const n=_o.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_o,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(uu)),this.expandByPoint(_o.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new X,hu=new X,Wa=new X,ki=new X,fu=new X,Xa=new X,du=new X;class J_{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),Wa.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Wa),a=ki.dot(this.direction),l=-ki.dot(Wa),c=ki.lengthSq(),u=Math.abs(1-o*o);let f,d,m,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hu).addScaledVector(Wa,d),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){fu.subVectors(n,e),Xa.subVectors(i,e),du.crossVectors(fu,Xa);let o=this.direction.dot(du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Xa.crossVectors(ki,Xa));if(l<0)return null;const c=a*this.direction.dot(fu.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(du);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,m,v,g,p){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,m,v,g,p)}set(e,n,i,r,s,o,a,l,c,u,f,d,m,v,g,p){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,v=a*u,g=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=d-g*c,n[9]=-a*l,n[2]=g-d*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,v=c*u,g=c*f;n[0]=d+g*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-v,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,v=c*u,g=c*f;n[0]=d-g*a,n[4]=-o*f,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*u,n[9]=g-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,v=a*u,g=a*f;n[0]=l*u,n[4]=v*c-m,n[8]=d*c+g,n[1]=l*f,n[5]=g*c+d,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=g-d*f,n[8]=v*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+v,n[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,m=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+g,n[5]=o*u,n[9]=m*f-v,n[2]=v*f-m,n[6]=a*u,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TM,e,wM)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),zi.crossVectors(i,fn),zi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),zi.crossVectors(i,fn)),zi.normalize(),$a.crossVectors(fn,zi),r[0]=zi.x,r[4]=$a.x,r[8]=fn.x,r[1]=zi.y,r[5]=$a.y,r[9]=fn.y,r[2]=zi.z,r[6]=$a.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],g=i[6],p=i[10],h=i[14],_=i[3],y=i[7],S=i[11],T=i[15],b=r[0],C=r[4],N=r[8],w=r[12],M=r[1],I=r[5],q=r[9],U=r[13],W=r[2],$=r[6],j=r[10],O=r[14],P=r[3],k=r[7],Z=r[11],se=r[15];return s[0]=o*b+a*M+l*W+c*P,s[4]=o*C+a*I+l*$+c*k,s[8]=o*N+a*q+l*j+c*Z,s[12]=o*w+a*U+l*O+c*se,s[1]=u*b+f*M+d*W+m*P,s[5]=u*C+f*I+d*$+m*k,s[9]=u*N+f*q+d*j+m*Z,s[13]=u*w+f*U+d*O+m*se,s[2]=v*b+g*M+p*W+h*P,s[6]=v*C+g*I+p*$+h*k,s[10]=v*N+g*q+p*j+h*Z,s[14]=v*w+g*U+p*O+h*se,s[3]=_*b+y*M+S*W+T*P,s[7]=_*C+y*I+S*$+T*k,s[11]=_*N+y*q+S*j+T*Z,s[15]=_*w+y*U+S*O+T*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],g=e[7],p=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+g*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],g=e[13],p=e[14],h=e[15],_=f*p*c-g*d*c+g*l*m-a*p*m-f*l*h+a*d*h,y=v*d*c-u*p*c-v*l*m+o*p*m+u*l*h-o*d*h,S=u*g*c-v*f*c+v*a*m-o*g*m-u*a*h+o*f*h,T=v*f*l-u*g*l-v*a*d+o*g*d+u*a*p-o*f*p,b=n*_+i*y+r*S+s*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(g*d*s-f*p*s-g*r*m+i*p*m+f*r*h-i*d*h)*C,e[2]=(a*p*s-g*l*s+g*r*c-i*p*c-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*C,e[4]=y*C,e[5]=(u*p*s-v*d*s+v*r*m-n*p*m-u*r*h+n*d*h)*C,e[6]=(v*l*s-o*p*s-v*r*c+n*p*c+o*r*h-n*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*m+n*l*m)*C,e[8]=S*C,e[9]=(v*f*s-u*g*s-v*i*m+n*g*m+u*i*h-n*f*h)*C,e[10]=(o*g*s-v*a*s+v*i*c-n*g*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*C,e[12]=T*C,e[13]=(u*g*r-v*f*r+v*i*d-n*g*d-u*i*p+n*f*p)*C,e[14]=(v*a*r-o*g*r-v*i*l+n*g*l+o*i*p-n*a*p)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,v=s*f,g=o*u,p=o*f,h=a*f,_=l*c,y=l*u,S=l*f,T=i.x,b=i.y,C=i.z;return r[0]=(1-(g+h))*T,r[1]=(m+S)*T,r[2]=(v-y)*T,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(d+h))*b,r[6]=(p+_)*b,r[7]=0,r[8]=(v+y)*C,r[9]=(p-_)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ns.set(r[0],r[1],r[2]).length();const o=ns.set(r[4],r[5],r[6]).length(),a=ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,u=1/o,f=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(a===Ei)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ic)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,m=(i+r)*u;let v,g;if(a===Ei)v=(o+s)*f,g=-2*f;else if(a===ic)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ns=new X,Fn=new Mt,TM=new X(0,0,0),wM=new X(1,1,1),zi=new X,$a=new X,fn=new X,vm=new Mt,xm=new jr;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AM=0;const ym=new X,is=new jr,di=new Mt,qa=new X,vo=new X,bM=new X,CM=new jr,Sm=new X(1,0,0),Mm=new X(0,1,0),Em=new X(0,0,1),Tm={type:"added"},RM={type:"removed"},rs={type:"childadded",child:null},pu={type:"childremoved",child:null};class kt extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new X,n=new ai,i=new jr,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,n){return is.setFromAxisAngle(e,n),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qa.copy(e):qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(vo,qa,this.up):di.lookAt(qa,vo,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),is.setFromRotationMatrix(di),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RM),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,CM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new X(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new X,pi=new X,mu=new X,mi=new X,ss=new X,os=new X,wm=new X,gu=new X,_u=new X,vu=new X,xu=new St,yu=new St,Su=new St;class Gn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),pi.subVectors(i,n),mu.subVectors(e,n);const o=On.dot(On),a=On.dot(pi),l=On.dot(mu),c=pi.dot(pi),u=pi.dot(mu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return xu.setScalar(0),yu.setScalar(0),Su.setScalar(0),xu.fromBufferAttribute(e,n),yu.fromBufferAttribute(e,i),Su.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xu,s.x),o.addScaledVector(yu,s.y),o.addScaledVector(Su,s.z),o}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),pi.subVectors(e,n),On.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),On.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ss.subVectors(r,i),os.subVectors(s,i),gu.subVectors(e,i);const l=ss.dot(gu),c=os.dot(gu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const u=ss.dot(_u),f=os.dot(_u);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ss,o);vu.subVectors(e,s);const m=ss.dot(vu),v=os.dot(vu);if(v>=0&&m<=v)return n.copy(s);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(os,a);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return wm.subVectors(s,r),a=(f-u)/(f-u+(m-v)),n.copy(r).addScaledVector(wm,a);const h=1/(p+g+d);return o=g*h,a=d*h,n.copy(i).addScaledVector(ss,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=fM(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Mu(o,s,e+1/3),this.g=Mu(o,s,e),this.b=Mu(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){const i=tv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Qe.fromWorkingColorSpace(jt.copy(this),e),Math.round(Kt(jt.r*255,0,255))*65536+Math.round(Kt(jt.g*255,0,255))*256+Math.round(Kt(jt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=gn){Qe.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Ya);const i=su(Bi.h,Ya.h,n),r=su(Bi.s,Ya.s,n),s=su(Bi.l,Ya.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ze;Ze.NAMES=tv;let PM=0;class va extends $r{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ga(),this.name="",this.blending=Ds,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lh&&(i.blendSrc=this.blendSrc),this.blendDst!==Nh&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rc extends va{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new X,Ka=new He;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cm,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ka.fromBufferAttribute(this,n),Ka.applyMatrix3(e),this.setXY(n,Ka.x,Ka.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=mo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mo(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mo(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mo(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cm&&(e.usage=this.usage),e}}class nv extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class iv extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LM=0;const En=new Mt,Eu=new kt,as=new X,dn=new _a,xo=new _a,Nt=new X;class Rn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K_(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(dn.min,xo.min),dn.expandByPoint(Nt),Nt.addVectors(dn.max,xo.max),dn.expandByPoint(Nt)):(dn.expandByPoint(xo.min),dn.expandByPoint(xo.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),Nt.add(as)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new X,l[N]=new X;const c=new X,u=new X,f=new X,d=new He,m=new He,v=new He,g=new X,p=new X;function h(N,w,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,N),m.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(d),v.sub(d);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(I),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(I),a[N].add(g),a[w].add(g),a[M].add(g),l[N].add(p),l[w].add(p),l[M].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let N=0,w=_.length;N<w;++N){const M=_[N],I=M.start,q=M.count;for(let U=I,W=I+q;U<W;U+=3)h(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new X,S=new X,T=new X,b=new X;function C(N){T.fromBufferAttribute(r,N),b.copy(T);const w=a[N];y.copy(w),y.sub(T.multiplyScalar(T.dot(w))).normalize(),S.crossVectors(b,w);const I=S.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,I)}for(let N=0,w=_.length;N<w;++N){const M=_[N],I=M.start,q=M.count;for(let U=I,W=I+q;U<W;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new oi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Am=new Mt,_r=new J_,Za=new bd,bm=new X,Qa=new X,Ja=new X,el=new X,Tu=new X,tl=new X,Cm=new X,nl=new X;class wt extends kt{constructor(e=new Rn,n=new rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Tu.fromBufferAttribute(f,e),o?tl.addScaledVector(Tu,u):tl.addScaledVector(Tu.sub(n),u))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Za.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Za,bm)===null||_r.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Am.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Am),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const p=d[v],h=o[p.materialIndex],_=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,T=y;S<T;S+=3){const b=a.getX(S),C=a.getX(S+1),N=a.getX(S+2);r=il(this,h,e,i,c,u,f,b,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=v,h=g;p<h;p+=3){const _=a.getX(p),y=a.getX(p+1),S=a.getX(p+2);r=il(this,o,e,i,c,u,f,_,y,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const p=d[v],h=o[p.materialIndex],_=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,T=y;S<T;S+=3){const b=S,C=S+1,N=S+2;r=il(this,h,e,i,c,u,f,b,C,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=v,h=g;p<h;p+=3){const _=p,y=p+1,S=p+2;r=il(this,o,e,i,c,u,f,_,y,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function NM(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;nl.copy(a),nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nl);return c<n.near||c>n.far?null:{distance:c,point:nl.clone(),object:t}}function il(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Qa),t.getVertexPosition(l,Ja),t.getVertexPosition(c,el);const u=NM(t,e,n,i,Qa,Ja,el,Cm);if(u){const f=new X;Gn.getBarycoord(Cm,Qa,Ja,el,f),r&&(u.uv=Gn.getInterpolatedAttribute(r,a,l,c,f,new He)),s&&(u.uv1=Gn.getInterpolatedAttribute(s,a,l,c,f,new He)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};Gn.getNormal(Qa,Ja,el,d.normal),u.face=d,u.barycoord=f}return u}class Js extends Rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function v(g,p,h,_,y,S,T,b,C,N,w){const M=S/C,I=T/N,q=S/2,U=T/2,W=b/2,$=C+1,j=N+1;let O=0,P=0;const k=new X;for(let Z=0;Z<j;Z++){const se=Z*I-U;for(let fe=0;fe<$;fe++){const Oe=fe*M-q;k[g]=Oe*_,k[p]=se*y,k[h]=W,c.push(k.x,k.y,k.z),k[g]=0,k[p]=0,k[h]=b>0?1:-1,u.push(k.x,k.y,k.z),f.push(fe/C),f.push(1-Z/N),O+=1}}for(let Z=0;Z<N;Z++)for(let se=0;se<C;se++){const fe=d+se+$*Z,Oe=d+se+$*(Z+1),te=d+(se+1)+$*(Z+1),le=d+(se+1)+$*Z;l.push(fe,Oe,le),l.push(Oe,te,le),P+=6}a.addGroup(m,P,w),m+=P,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function DM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const IM={clone:qs,merge:qt};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends va{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=DM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sv extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new X,Rm=new He,Pm=new He;class An extends sv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Pm),n.subVectors(Pm,Rm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ls=-90,cs=1;class OM extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(ls,cs,e,n);r.layers=this.layers,this.add(r);const s=new An(ls,cs,e,n);s.layers=this.layers,this.add(s);const o=new An(ls,cs,e,n);o.layers=this.layers,this.add(o);const a=new An(ls,cs,e,n);a.layers=this.layers,this.add(a);const l=new An(ls,cs,e,n);l.layers=this.layers,this.add(l);const c=new An(ls,cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ov extends Qt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kM extends Gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ov(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Js(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:rr});s.uniforms.tEquirect.value=n;const o=new wt(r,s),a=n.minFilter;return n.minFilter===Pr&&(n.minFilter=ii),new OM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const wu=new X,zM=new X,BM=new je;class ji{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wu.subVectors(i,n).cross(zM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BM.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new bd,rl=new X;class Cd{constructor(e=new ji,n=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],h=r[12],_=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,p-m,S-h).normalize(),i[1].setComponents(l+s,d+c,p+m,S+h).normalize(),i[2].setComponents(l+o,d+u,p+v,S+_).normalize(),i[3].setComponents(l-o,d-u,p-v,S-_).normalize(),i[4].setComponents(l-a,d-f,p-g,S-y).normalize(),n===Ei)i[5].setComponents(l+a,d+f,p+g,S+y).normalize();else if(n===ic)i[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function av(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<f.length;m++){const v=f[d],g=f[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,v=f.length;m<v;m++){const g=f[m];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ir extends Rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,m=[],v=[],g=[],p=[];for(let h=0;h<u;h++){const _=h*d-o;for(let y=0;y<c;y++){const S=y*f-s;v.push(S,-_,0),g.push(0,0,1),p.push(y/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const y=_+c*h,S=_+c*(h+1),T=_+1+c*(h+1),b=_+1+c*h;m.push(y,S,b),m.push(S,T,b)}this.setIndex(m),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}var VM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
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
#endif`,jM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KM=`#ifdef USE_BATCHING
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
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tE=`#ifdef USE_IRIDESCENCE
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
#endif`,nE=`#ifdef USE_BUMPMAP
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
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hE=`#define PI 3.141592653589793
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
} // validated`,fE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dE=`vec3 transformedNormal = objectNormal;
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
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vE="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RE=`#ifdef USE_GRADIENTMAP
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
}`,PE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DE=`uniform bool receiveShadow;
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
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,UE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zE=`PhysicalMaterial material;
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
#endif`,BE=`struct PhysicalMaterial {
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
}`,HE=`
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
#endif`,VE=`#if defined( RE_IndirectDiffuse )
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
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZE=`#if defined( USE_POINTS_UV )
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
#endif`,QE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
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
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
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
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A1=`float getShadowMask() {
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
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,R1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
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
}`,q1=`#if DEPTH_PACKING == 3200
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
}`,Y1=`#define DISTANCE
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
}`,K1=`#define DISTANCE
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
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#define LAMBERT
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
}`,rT=`#define LAMBERT
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
}`,sT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,lT=`#define NORMAL
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
}`,cT=`#define PHONG
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
}`,uT=`#define PHONG
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
}`,hT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,dT=`#define TOON
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
}`,pT=`#define TOON
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
}`,mT=`uniform float size;
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
}`,gT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,vT=`uniform vec3 color;
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
}`,xT=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:VM,alphahash_pars_fragment:GM,alphamap_fragment:jM,alphamap_pars_fragment:WM,alphatest_fragment:XM,alphatest_pars_fragment:$M,aomap_fragment:qM,aomap_pars_fragment:YM,batching_pars_vertex:KM,batching_vertex:ZM,begin_vertex:QM,beginnormal_vertex:JM,bsdfs:eE,iridescence_fragment:tE,bumpmap_pars_fragment:nE,clipping_planes_fragment:iE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:sE,clipping_planes_vertex:oE,color_fragment:aE,color_pars_fragment:lE,color_pars_vertex:cE,color_vertex:uE,common:hE,cube_uv_reflection_fragment:fE,defaultnormal_vertex:dE,displacementmap_pars_vertex:pE,displacementmap_vertex:mE,emissivemap_fragment:gE,emissivemap_pars_fragment:_E,colorspace_fragment:vE,colorspace_pars_fragment:xE,envmap_fragment:yE,envmap_common_pars_fragment:SE,envmap_pars_fragment:ME,envmap_pars_vertex:EE,envmap_physical_pars_fragment:IE,envmap_vertex:TE,fog_vertex:wE,fog_pars_vertex:AE,fog_fragment:bE,fog_pars_fragment:CE,gradientmap_pars_fragment:RE,lightmap_pars_fragment:PE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:NE,lights_pars_begin:DE,lights_toon_fragment:UE,lights_toon_pars_fragment:FE,lights_phong_fragment:OE,lights_phong_pars_fragment:kE,lights_physical_fragment:zE,lights_physical_pars_fragment:BE,lights_fragment_begin:HE,lights_fragment_maps:VE,lights_fragment_end:GE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:WE,logdepthbuf_pars_vertex:XE,logdepthbuf_vertex:$E,map_fragment:qE,map_pars_fragment:YE,map_particle_fragment:KE,map_particle_pars_fragment:ZE,metalnessmap_fragment:QE,metalnessmap_pars_fragment:JE,morphinstance_vertex:e1,morphcolor_vertex:t1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:r1,normal_fragment_begin:s1,normal_fragment_maps:o1,normal_pars_fragment:a1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:d1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:_1,project_vertex:v1,dithering_fragment:x1,dithering_pars_fragment:y1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:T1,shadowmap_vertex:w1,shadowmask_pars_fragment:A1,skinbase_vertex:b1,skinning_pars_vertex:C1,skinning_vertex:R1,skinnormal_vertex:P1,specularmap_fragment:L1,specularmap_pars_fragment:N1,tonemapping_fragment:D1,tonemapping_pars_fragment:I1,transmission_fragment:U1,transmission_pars_fragment:F1,uv_pars_fragment:O1,uv_pars_vertex:k1,uv_vertex:z1,worldpos_vertex:B1,background_vert:H1,background_frag:V1,backgroundCube_vert:G1,backgroundCube_frag:j1,cube_vert:W1,cube_frag:X1,depth_vert:$1,depth_frag:q1,distanceRGBA_vert:Y1,distanceRGBA_frag:K1,equirect_vert:Z1,equirect_frag:Q1,linedashed_vert:J1,linedashed_frag:eT,meshbasic_vert:tT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:rT,meshmatcap_vert:sT,meshmatcap_frag:oT,meshnormal_vert:aT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:hT,meshphysical_frag:fT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:_T,shadow_frag:vT,sprite_vert:xT,sprite_frag:yT},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ti={basic:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:qt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:qt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:qt([Me.points,Me.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:qt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:qt([Me.common,Me.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:qt([Me.sprite,Me.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:qt([Me.common,Me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:qt([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ti.physical={uniforms:qt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const sl={r:0,b:0,g:0},xr=new ai,ST=new Mt;function MT(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function g(_){let y=!1;const S=v(_);S===null?h(a,l):S&&S.isColor&&(h(S,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,y){const S=v(y);S&&(S.isCubeTexture||S.mapping===Ec)?(u===void 0&&(u=new wt(new Js(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:qs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xr.copy(y.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(xr)),u.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ot,(f!==S||d!==S.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new wt(new Ir(2,2),new cr({name:"BackgroundMaterial",uniforms:qs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,y){_.getRGB(sl,rv(t)),i.buffers.color.setClear(sl.r,sl.g,sl.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:g,addToRenderList:p}}function ET(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,I,q,U,W){let $=!1;const j=f(U,q,I);s!==j&&(s=j,c(s.object)),$=m(M,U,q,W),$&&v(M,U,q,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(M,I,q,U),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,I,q){const U=q.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let $=W[I.id];$===void 0&&($={},W[I.id]=$);let j=$[U];return j===void 0&&(j=d(l()),$[U]=j),j}function d(M){const I=[],q=[],U=[];for(let W=0;W<n;W++)I[W]=0,q[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:q,attributeDivisors:U,object:M,attributes:{},index:null}}function m(M,I,q,U){const W=s.attributes,$=I.attributes;let j=0;const O=q.getAttributes();for(const P in O)if(O[P].location>=0){const Z=W[P];let se=$[P];if(se===void 0&&(P==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),P==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;j++}return s.attributesNum!==j||s.index!==U}function v(M,I,q,U){const W={},$=I.attributes;let j=0;const O=q.getAttributes();for(const P in O)if(O[P].location>=0){let Z=$[P];Z===void 0&&(P==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),P==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),W[P]=se,j++}s.attributes=W,s.attributesNum=j,s.index=U}function g(){const M=s.newAttributes;for(let I=0,q=M.length;I<q;I++)M[I]=0}function p(M){h(M,0)}function h(M,I){const q=s.newAttributes,U=s.enabledAttributes,W=s.attributeDivisors;q[M]=1,U[M]===0&&(t.enableVertexAttribArray(M),U[M]=1),W[M]!==I&&(t.vertexAttribDivisor(M,I),W[M]=I)}function _(){const M=s.newAttributes,I=s.enabledAttributes;for(let q=0,U=I.length;q<U;q++)I[q]!==M[q]&&(t.disableVertexAttribArray(q),I[q]=0)}function y(M,I,q,U,W,$,j){j===!0?t.vertexAttribIPointer(M,I,q,W,$):t.vertexAttribPointer(M,I,q,U,W,$)}function S(M,I,q,U){g();const W=U.attributes,$=q.getAttributes(),j=I.defaultAttributeValues;for(const O in $){const P=$[O];if(P.location>=0){let k=W[O];if(k===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(k=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(k=M.instanceColor)),k!==void 0){const Z=k.normalized,se=k.itemSize,fe=e.get(k);if(fe===void 0)continue;const Oe=fe.buffer,te=fe.type,le=fe.bytesPerElement,ye=te===t.INT||te===t.UNSIGNED_INT||k.gpuType===Sd;if(k.isInterleavedBufferAttribute){const _e=k.data,Ue=_e.stride,Fe=k.offset;if(_e.isInstancedInterleavedBuffer){for(let ze=0;ze<P.locationSize;ze++)h(P.location+ze,_e.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<P.locationSize;ze++)p(P.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ze=0;ze<P.locationSize;ze++)y(P.location+ze,se/P.locationSize,te,Z,Ue*le,(Fe+se/P.locationSize*ze)*le,ye)}else{if(k.isInstancedBufferAttribute){for(let _e=0;_e<P.locationSize;_e++)h(P.location+_e,k.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let _e=0;_e<P.locationSize;_e++)p(P.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let _e=0;_e<P.locationSize;_e++)y(P.location+_e,se/P.locationSize,te,Z,se*le,se/P.locationSize*_e*le,ye)}}else if(j!==void 0){const Z=j[O];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(P.location,Z);break;case 3:t.vertexAttrib3fv(P.location,Z);break;case 4:t.vertexAttrib4fv(P.location,Z);break;default:t.vertexAttrib1fv(P.location,Z)}}}}_()}function T(){N();for(const M in i){const I=i[M];for(const q in I){const U=I[q];for(const W in U)u(U[W].object),delete U[W];delete I[q]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const q in I){const U=I[q];for(const W in U)u(U[W].object),delete U[W];delete I[q]}delete i[M.id]}function C(M){for(const I in i){const q=i[I];if(q[M.id]===void 0)continue;const U=q[M.id];for(const W in U)u(U[W].object),delete U[W];delete q[M.id]}}function N(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:p,disableUnusedAttributes:_}}function TT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];n.update(m,i,1)}function l(c,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*d[g];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Wn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!N)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:T,maxSamples:b}}function AT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ji,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const _=s?0:i,y=_*4;let S=h.clippingState||null;l.value=S,S=u(v,d,y,m);for(let T=0;T!==y;++T)S[T]=n[T];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,v){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const h=m+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,S=m;y!==g;++y,S+=4)o.copy(f[y]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function bT(t){let e=new WeakMap;function n(o,a){return a===Bh?o.mapping=js:a===Hh&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bh||a===Hh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class lv extends sv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Lm=[.125,.215,.35,.446,.526,.582],wr=20,Au=new lv,Nm=new Ze;let bu=null,Cu=0,Ru=0,Pu=!1;const Er=(1+Math.sqrt(5))/2,us=1/Er,Dm=[new X(-Er,us,0),new X(Er,us,0),new X(-us,0,Er),new X(us,0,Er),new X(0,Er,-us),new X(0,Er,us),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bu=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Cu,Ru),this._renderer.xr.enabled=Pu,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:ma,format:Wn,colorSpace:Qs,depthBuffer:!1},r=Um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(s)),this._blurMaterial=RT(s,e,n)}return r}_compileMaterial(e){const n=new wt(this._lodPlanes[0],e);this._renderer.compile(n,Au)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Nm),u.toneMapping=sr,u.autoClear=!1;const m=new rc({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new wt(new Js,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Nm),g=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;ol(r,_*y,h>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===js||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ol(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Dm[(r-s-1)%Dm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),g=s/v,p=isFinite(s)?1+Math.floor(u*g):wr;p>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wr}`);const h=[];let _=0;for(let C=0;C<wr;++C){const N=C/g,w=Math.exp(-N*N/2);h.push(w),C===0?_+=w:C<p&&(_+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-i;const S=this._sizeLods[r],T=3*S*(r>y-ws?r-y+ws:0),b=4*(this._cubeSize-S);ol(n,T,b,3*S,2*S),l.setRenderTarget(n),l.render(f,Au)}}function CT(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ws?l=Lm[o-t+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,g=3,p=2,h=1,_=new Float32Array(g*v*m),y=new Float32Array(p*v*m),S=new Float32Array(h*v*m);for(let b=0;b<m;b++){const C=b%3*2/3-1,N=b>2?0:-1,w=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];_.set(w,g*v*b),y.set(d,p*v*b);const M=[b,b,b,b,b,b];S.set(M,h*v*b)}const T=new Rn;T.setAttribute("position",new oi(_,g)),T.setAttribute("uv",new oi(y,p)),T.setAttribute("faceIndex",new oi(S,h)),e.push(T),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Um(t,e,n){const i=new Gr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RT(t,e,n){const i=new Float32Array(wr),r=new X(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Fm(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Om(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Rd(){return`

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
	`}function PT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bh||l===Hh,u=l===js||l===Ws;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Im(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Im(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NT(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const g=m[v];for(let p=0,h=g.length;p<h;p++)e.update(g[p],t.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let g=0;if(m!==null){const _=m.array;g=m.version;for(let y=0,S=_.length;y<S;y+=3){const T=_[y+0],b=_[y+1],C=_[y+2];d.push(T,b,b,C,C,T)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,S=_.length/3-1;y<S;y+=3){const T=y+0,b=y+1,C=y+2;d.push(T,b,b,C,C,T)}}else return;const p=new(K_(d)?iv:nv)(d,1);p.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function DT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,d*o,v),n.update(m,i,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];n.update(p,i,1)}function f(d,m,v,g){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)c(d[h]/o,m[h],g[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,g,0,v);let h=0;for(let _=0;_<v;_++)h+=m[_]*g[_];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function IT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UT(t,e,n){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let T=a.attributes.position.count*S,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*b*4*f),N=new Q_(C,T,b,f);N.type=Mi,N.needsUpdate=!0;const w=S*4;for(let I=0;I<f;I++){const q=h[I],U=_[I],W=y[I],$=T*b*4*I;for(let j=0;j<q.count;j++){const O=j*w;v===!0&&(r.fromBufferAttribute(q,j),C[$+O+0]=r.x,C[$+O+1]=r.y,C[$+O+2]=r.z,C[$+O+3]=0),g===!0&&(r.fromBufferAttribute(U,j),C[$+O+4]=r.x,C[$+O+5]=r.y,C[$+O+6]=r.z,C[$+O+7]=0),p===!0&&(r.fromBufferAttribute(W,j),C[$+O+8]=r.x,C[$+O+9]=r.y,C[$+O+10]=r.z,C[$+O+11]=W.itemSize===4?r.w:1)}}d={count:f,texture:N,size:new He(T,b)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function FT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class cv extends Qt{constructor(e,n,i,r,s,o,a,l,c,u=Is){if(u!==Is&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Is&&(i=Vr),i===void 0&&u===$s&&(i=Xs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const uv=new Qt,km=new cv(1,1),hv=new Q_,fv=new MM,dv=new ov,zm=[],Bm=[],Hm=new Float32Array(16),Vm=new Float32Array(9),Gm=new Float32Array(4);function eo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wc(t,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Lt(n,i)}}function VT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Vm.set(i),t.uniformMatrix3fv(this.addr,!1,Vm),Lt(n,i)}}function GT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),Lt(n,i)}}function jT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function qT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function QT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(km.compareFunction=Y_,s=km):s=uv,n.setTexture2D(e||s,r)}function JT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fv,r)}function ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dv,r)}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hv,r)}function nw(t){switch(t){case 5126:return OT;case 35664:return kT;case 35665:return zT;case 35666:return BT;case 35674:return HT;case 35675:return VT;case 35676:return GT;case 5124:case 35670:return jT;case 35667:case 35671:return WT;case 35668:case 35672:return XT;case 35669:case 35673:return $T;case 5125:return qT;case 36294:return YT;case 36295:return KT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return tw}}function iw(t,e){t.uniform1fv(this.addr,e)}function rw(t,e){const n=eo(e,this.size,2);t.uniform2fv(this.addr,n)}function sw(t,e){const n=eo(e,this.size,3);t.uniform3fv(this.addr,n)}function ow(t,e){const n=eo(e,this.size,4);t.uniform4fv(this.addr,n)}function aw(t,e){const n=eo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lw(t,e){const n=eo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cw(t,e){const n=eo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uw(t,e){t.uniform1iv(this.addr,e)}function hw(t,e){t.uniform2iv(this.addr,e)}function fw(t,e){t.uniform3iv(this.addr,e)}function dw(t,e){t.uniform4iv(this.addr,e)}function pw(t,e){t.uniform1uiv(this.addr,e)}function mw(t,e){t.uniform2uiv(this.addr,e)}function gw(t,e){t.uniform3uiv(this.addr,e)}function _w(t,e){t.uniform4uiv(this.addr,e)}function vw(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||uv,s[o])}function xw(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||fv,s[o])}function yw(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dv,s[o])}function Sw(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hv,s[o])}function Mw(t){switch(t){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return hw;case 35668:case 35672:return fw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}class Ew{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nw(n.type)}}class Tw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Mw(n.type)}}class ww{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function jm(t,e){t.seq.push(e),t.map[e.id]=e}function Aw(t,e,n){const i=t.name,r=i.length;for(Lu.lastIndex=0;;){const s=Lu.exec(i),o=Lu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){jm(n,c===void 0?new Ew(a,t,e):new Tw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ww(a),jm(n,f)),n=f}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Aw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bw=37297;let Cw=0;function Rw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Xm=new je;function Pw(t){Qe._getMatrix(Xm,Qe.workingColorSpace,t);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Tc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $m(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Rw(t.getShaderSource(e),o)}else return r}function Lw(t,e){const n=Pw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Nw(t,e){let n;switch(e){case qS:n="Linear";break;case YS:n="Reinhard";break;case KS:n="Cineon";break;case ZS:n="ACESFilmic";break;case JS:n="AgX";break;case eM:n="Neutral";break;case QS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const al=new X;function Dw(){Qe.getLuminanceCoefficients(al);const t=al.x.toFixed(4),e=al.y.toFixed(4),n=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function Uw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Fw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function qm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(t){return t.replace(Ow,zw)}const kw=new Map;function zw(t,e){let n=Xe[e];if(n===void 0){const i=kw.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vf(n)}const Bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(t){return t.replace(Bw,Hw)}function Hw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Vw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===F_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case js:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Ww(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yd:e="ENVMAP_BLENDING_MULTIPLY";break;case XS:e="ENVMAP_BLENDING_MIX";break;case $S:e="ENVMAP_BLENDING_ADD";break}return e}function Xw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $w(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Vw(n),c=Gw(n),u=jw(n),f=Ww(n),d=Xw(n),m=Iw(n),v=Uw(s),g=r.createProgram();let p,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Co).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Co).join(`
`),h.length>0&&(h+=`
`)):(p=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),h=[Zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==sr?Nw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Lw("linearToOutputTexel",n.outputColorSpace),Dw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=vf(o),o=qm(o,n),o=Ym(o,n),a=vf(a),a=qm(a,n),a=Ym(a,n),o=Km(o),a=Km(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=_+p+o,S=_+h+a,T=Wm(r,r.VERTEX_SHADER,y),b=Wm(r,r.FRAGMENT_SHADER,S);r.attachShader(g,T),r.attachShader(g,b),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(I){if(t.debug.checkShaderErrors){const q=r.getProgramInfoLog(g).trim(),U=r.getShaderInfoLog(T).trim(),W=r.getShaderInfoLog(b).trim();let $=!0,j=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,T,b);else{const O=$m(r,T,"vertex"),P=$m(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+O+`
`+P)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||W==="")&&(j=!1);j&&(I.diagnostics={runnable:$,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:W,prefix:h}})}r.deleteShader(T),r.deleteShader(b),N=new Rl(r,g),w=Fw(r,g)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,bw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Cw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=b,this}let qw=0;class Yw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Kw(e),n.set(e,i)),i}}class Kw{constructor(e){this.id=qw++,this.code=e,this.usedTimes=0}}function Zw(t,e,n,i,r,s,o){const a=new ev,l=new Yw,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,M,I,q,U){const W=q.fog,$=U.geometry,j=w.isMeshStandardMaterial?q.environment:null,O=(w.isMeshStandardMaterial?n:e).get(w.envMap||j),P=O&&O.mapping===Ec?O.image.height:null,k=v[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const Z=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,se=Z!==void 0?Z.length:0;let fe=0;$.morphAttributes.position!==void 0&&(fe=1),$.morphAttributes.normal!==void 0&&(fe=2),$.morphAttributes.color!==void 0&&(fe=3);let Oe,te,le,ye;if(k){const rt=ti[k];Oe=rt.vertexShader,te=rt.fragmentShader}else Oe=w.vertexShader,te=w.fragmentShader,l.update(w),le=l.getVertexShaderID(w),ye=l.getFragmentShaderID(w);const _e=t.getRenderTarget(),Ue=t.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,ze=U.isBatchedMesh===!0,qe=!!w.map,$e=!!w.matcap,tt=!!O,z=!!w.aoMap,J=!!w.lightMap,ae=!!w.bumpMap,de=!!w.normalMap,pe=!!w.displacementMap,Se=!!w.emissiveMap,ce=!!w.metalnessMap,R=!!w.roughnessMap,E=w.anisotropy>0,B=w.clearcoat>0,ne=w.dispersion>0,ie=w.iridescence>0,ee=w.sheen>0,Ee=w.transmission>0,xe=E&&!!w.anisotropyMap,Te=B&&!!w.clearcoatMap,D=B&&!!w.clearcoatNormalMap,L=B&&!!w.clearcoatRoughnessMap,G=ie&&!!w.iridescenceMap,re=ie&&!!w.iridescenceThicknessMap,ue=ee&&!!w.sheenColorMap,ge=ee&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Ce=!!w.specularColorMap,We=!!w.specularIntensityMap,F=Ee&&!!w.transmissionMap,me=Ee&&!!w.thicknessMap,Q=!!w.gradientMap,oe=!!w.alphaMap,be=w.alphaTest>0,we=!!w.alphaHash,Ve=!!w.extensions;let xt=sr;w.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Bt={shaderID:k,shaderType:w.type,shaderName:w.name,vertexShader:Oe,fragmentShader:te,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:ze,batchingColor:ze&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Qs,alphaToCoverage:!!w.alphaToCoverage,map:qe,matcap:$e,envMap:tt,envMapMode:tt&&O.mapping,envMapCubeUVHeight:P,aoMap:z,lightMap:J,bumpMap:ae,normalMap:de,displacementMap:d&&pe,emissiveMap:Se,normalMapObjectSpace:de&&w.normalMapType===rM,normalMapTangentSpace:de&&w.normalMapType===q_,metalnessMap:ce,roughnessMap:R,anisotropy:E,anisotropyMap:xe,clearcoat:B,clearcoatMap:Te,clearcoatNormalMap:D,clearcoatRoughnessMap:L,dispersion:ne,iridescence:ie,iridescenceMap:G,iridescenceThicknessMap:re,sheen:ee,sheenColorMap:ue,sheenRoughnessMap:ge,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:We,transmission:Ee,transmissionMap:F,thicknessMap:me,gradientMap:Q,opaque:w.transparent===!1&&w.blending===Ds&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:be,alphaHash:we,combine:w.combine,mapUv:qe&&g(w.map.channel),aoMapUv:z&&g(w.aoMap.channel),lightMapUv:J&&g(w.lightMap.channel),bumpMapUv:ae&&g(w.bumpMap.channel),normalMapUv:de&&g(w.normalMap.channel),displacementMapUv:pe&&g(w.displacementMap.channel),emissiveMapUv:Se&&g(w.emissiveMap.channel),metalnessMapUv:ce&&g(w.metalnessMap.channel),roughnessMapUv:R&&g(w.roughnessMap.channel),anisotropyMapUv:xe&&g(w.anisotropyMap.channel),clearcoatMapUv:Te&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:D&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(w.sheenRoughnessMap.channel),specularMapUv:Ie&&g(w.specularMap.channel),specularColorMapUv:Ce&&g(w.specularColorMap.channel),specularIntensityMapUv:We&&g(w.specularIntensityMap.channel),transmissionMapUv:F&&g(w.transmissionMap.channel),thicknessMapUv:me&&g(w.thicknessMap.channel),alphaMapUv:oe&&g(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(de||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(qe||oe),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ue,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:qe&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===ot,decodeVideoTextureEmissive:Se&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vn,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(_(M,w),y(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const M=v[w.type];let I;if(M){const q=ti[M];I=IM.clone(q.uniforms)}else I=w.uniforms;return I}function T(w,M){let I;for(let q=0,U=u.length;q<U;q++){const W=u[q];if(W.cacheKey===M){I=W,++I.usedTimes;break}}return I===void 0&&(I=new $w(t,M,w,s),u.push(I)),I}function b(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:T,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:N}}function Qw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Jw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,v,g,p){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=p),e++,h}function a(f,d,m,v,g,p){const h=o(f,d,m,v,g,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(f,d,m,v,g,p){const h=o(f,d,m,v,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||Jw),i.length>1&&i.sort(d||Qm),r.length>1&&r.sort(d||Qm)}function u(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function eA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jm,t.set(i,[o])):r>=s.length?(o=new Jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ze};break;case"SpotLight":n={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function nA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iA=0;function rA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sA(t){const e=new tA,n=nA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new Mt,o=new Mt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,v=0,g=0,p=0,h=0,_=0,y=0,S=0,T=0,b=0,C=0;c.sort(rA);for(let w=0,M=c.length;w<M;w++){const I=c[w],q=I.color,U=I.intensity,W=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=q.r*U,f+=q.g*U,d+=q.b*U;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],U);C++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const O=I.shadow,P=n.get(I);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=I.shadow.matrix,_++}i.directional[m]=j,m++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(q).multiplyScalar(U),j.distance=W,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[g]=j;const O=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,O.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[g]=O.matrix,I.castShadow){const P=n.get(I);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,i.spotShadow[g]=P,i.spotShadowMap[g]=$,S++}g++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(q).multiplyScalar(U),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=j,p++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const O=I.shadow,P=n.get(I);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,P.shadowCameraNear=O.camera.near,P.shadowCameraFar=O.camera.far,i.pointShadow[v]=P,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=I.shadow.matrix,y++}i.point[v]=j,v++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(U),j.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[h]=j,h++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==m||N.pointLength!==v||N.spotLength!==g||N.rectAreaLength!==p||N.hemiLength!==h||N.numDirectionalShadows!==_||N.numPointShadows!==y||N.numSpotShadows!==S||N.numSpotMaps!==T||N.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,N.directionalLength=m,N.pointLength=v,N.spotLength=g,N.rectAreaLength=p,N.hemiLength=h,N.numDirectionalShadows=_,N.numPointShadows=y,N.numSpotShadows=S,N.numSpotMaps=T,N.numLightProbes=C,i.version=iA++)}function l(c,u){let f=0,d=0,m=0,v=0,g=0;const p=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const y=c[h];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(y.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function eg(t){const e=new sA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new eg(t),e.set(r,[a])):s>=o.length?(a=new eg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class aA extends va{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lA extends va{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
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
}`;function hA(t,e,n){let i=new Cd;const r=new He,s=new He,o=new St,a=new aA({depthPacking:iM}),l=new lA,c={},u=n.maxTextureSize,f={[lr]:un,[un]:lr,[Vn]:Vn},d=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:cA,fragmentShader:uA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Rn;v.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F_;let h=this.type;this.render=function(b,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),q=t.state;q.setBlending(rr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const U=h!==gi&&this.type===gi,W=h===gi&&this.type!==gi;for(let $=0,j=b.length;$<j;$++){const O=b[$],P=O.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const k=P.getFrameExtents();if(r.multiply(k),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,P.mapSize.y=s.y)),P.map===null||U===!0||W===!0){const se=this.type!==gi?{minFilter:qn,magFilter:qn}:{};P.map!==null&&P.map.dispose(),P.map=new Gr(r.x,r.y,se),P.map.texture.name=O.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const Z=P.getViewportCount();for(let se=0;se<Z;se++){const fe=P.getViewport(se);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),q.viewport(o),P.updateMatrices(O,se),i=P.getFrustum(),S(C,N,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===gi&&_(P,N),P.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(w,M,I)};function _(b,C){const N=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,N,d,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,N,m,g,null)}function y(b,C,N,w){let M=null;const I=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)M=I;else if(M=N.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=M.uuid,U=C.uuid;let W=c[q];W===void 0&&(W={},c[q]=W);let $=W[U];$===void 0&&($=M.clone(),W[U]=$,C.addEventListener("dispose",T)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,w===gi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=t.properties.get(M);q.light=N}return M}function S(b,C,N,w,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===gi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const U=e.update(b),W=b.material;if(Array.isArray(W)){const $=U.groups;for(let j=0,O=$.length;j<O;j++){const P=$[j],k=W[P.materialIndex];if(k&&k.visible){const Z=y(b,k,w,M);b.onBeforeShadow(t,b,C,N,U,Z,P),t.renderBufferDirect(N,null,U,Z,b,P),b.onAfterShadow(t,b,C,N,U,Z,P)}}}else if(W.visible){const $=y(b,W,w,M);b.onBeforeShadow(t,b,C,N,U,$,null),t.renderBufferDirect(N,null,U,$,b,null),b.onAfterShadow(t,b,C,N,U,$,null)}}const q=b.children;for(let U=0,W=q.length;U<W;U++)S(q[U],C,N,w,M)}function T(b){b.target.removeEventListener("dispose",T);for(const N in c){const w=c[N],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const fA={[Dh]:Ih,[Uh]:kh,[Fh]:zh,[Gs]:Oh,[Ih]:Dh,[kh]:Uh,[zh]:Fh,[Oh]:Gs};function dA(t,e){function n(){let F=!1;const me=new St;let Q=null;const oe=new St(0,0,0,0);return{setMask:function(be){Q!==be&&!F&&(t.colorMask(be,be,be,be),Q=be)},setLocked:function(be){F=be},setClear:function(be,we,Ve,xt,Bt){Bt===!0&&(be*=xt,we*=xt,Ve*=xt),me.set(be,we,Ve,xt),oe.equals(me)===!1&&(t.clearColor(be,we,Ve,xt),oe.copy(me))},reset:function(){F=!1,Q=null,oe.set(-1,0,0,0)}}}function i(){let F=!1,me=!1,Q=null,oe=null,be=null;return{setReversed:function(we){if(me!==we){const Ve=e.get("EXT_clip_control");me?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const xt=be;be=null,this.setClear(xt)}me=we},getReversed:function(){return me},setTest:function(we){we?_e(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(we){Q!==we&&!F&&(t.depthMask(we),Q=we)},setFunc:function(we){if(me&&(we=fA[we]),oe!==we){switch(we){case Dh:t.depthFunc(t.NEVER);break;case Ih:t.depthFunc(t.ALWAYS);break;case Uh:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case Fh:t.depthFunc(t.EQUAL);break;case Oh:t.depthFunc(t.GEQUAL);break;case kh:t.depthFunc(t.GREATER);break;case zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=we}},setLocked:function(we){F=we},setClear:function(we){be!==we&&(me&&(we=1-we),t.clearDepth(we),be=we)},reset:function(){F=!1,Q=null,oe=null,be=null,me=!1}}}function r(){let F=!1,me=null,Q=null,oe=null,be=null,we=null,Ve=null,xt=null,Bt=null;return{setTest:function(rt){F||(rt?_e(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(rt){me!==rt&&!F&&(t.stencilMask(rt),me=rt)},setFunc:function(rt,Nn,li){(Q!==rt||oe!==Nn||be!==li)&&(t.stencilFunc(rt,Nn,li),Q=rt,oe=Nn,be=li)},setOp:function(rt,Nn,li){(we!==rt||Ve!==Nn||xt!==li)&&(t.stencilOp(rt,Nn,li),we=rt,Ve=Nn,xt=li)},setLocked:function(rt){F=rt},setClear:function(rt){Bt!==rt&&(t.clearStencil(rt),Bt=rt)},reset:function(){F=!1,me=null,Q=null,oe=null,be=null,we=null,Ve=null,xt=null,Bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,m=[],v=null,g=!1,p=null,h=null,_=null,y=null,S=null,T=null,b=null,C=new Ze(0,0,0),N=0,w=!1,M=null,I=null,q=null,U=null,W=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,O=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(P)[1]),j=O>=1):P.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),j=O>=2);let k=null,Z={};const se=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),Oe=new St().fromArray(se),te=new St().fromArray(fe);function le(F,me,Q,oe){const be=new Uint8Array(4),we=t.createTexture();t.bindTexture(F,we),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<Q;Ve++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(me+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return we}const ye={};ye[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(t.DEPTH_TEST),o.setFunc(Gs),ae(!1),de(rm),_e(t.CULL_FACE),z(rr);function _e(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function Ue(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Fe(F,me){return f[F]!==me?(t.bindFramebuffer(F,me),f[F]=me,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=me),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=me),!0):!1}function ze(F,me){let Q=m,oe=!1;if(F){Q=d.get(me),Q===void 0&&(Q=[],d.set(me,Q));const be=F.textures;if(Q.length!==be.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Ve=be.length;we<Ve;we++)Q[we]=t.COLOR_ATTACHMENT0+we;Q.length=be.length,oe=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,oe=!0);oe&&t.drawBuffers(Q)}function qe(F){return v!==F?(t.useProgram(F),v=F,!0):!1}const $e={[Tr]:t.FUNC_ADD,[RS]:t.FUNC_SUBTRACT,[PS]:t.FUNC_REVERSE_SUBTRACT};$e[LS]=t.MIN,$e[NS]=t.MAX;const tt={[DS]:t.ZERO,[IS]:t.ONE,[US]:t.SRC_COLOR,[Lh]:t.SRC_ALPHA,[HS]:t.SRC_ALPHA_SATURATE,[zS]:t.DST_COLOR,[OS]:t.DST_ALPHA,[FS]:t.ONE_MINUS_SRC_COLOR,[Nh]:t.ONE_MINUS_SRC_ALPHA,[BS]:t.ONE_MINUS_DST_COLOR,[kS]:t.ONE_MINUS_DST_ALPHA,[VS]:t.CONSTANT_COLOR,[GS]:t.ONE_MINUS_CONSTANT_COLOR,[jS]:t.CONSTANT_ALPHA,[WS]:t.ONE_MINUS_CONSTANT_ALPHA};function z(F,me,Q,oe,be,we,Ve,xt,Bt,rt){if(F===rr){g===!0&&(Ue(t.BLEND),g=!1);return}if(g===!1&&(_e(t.BLEND),g=!0),F!==CS){if(F!==p||rt!==w){if((h!==Tr||S!==Tr)&&(t.blendEquation(t.FUNC_ADD),h=Tr,S=Tr),rt)switch(F){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.ONE,t.ONE);break;case om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case sm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,y=null,T=null,b=null,C.set(0,0,0),N=0,p=F,w=rt}return}be=be||me,we=we||Q,Ve=Ve||oe,(me!==h||be!==S)&&(t.blendEquationSeparate($e[me],$e[be]),h=me,S=be),(Q!==_||oe!==y||we!==T||Ve!==b)&&(t.blendFuncSeparate(tt[Q],tt[oe],tt[we],tt[Ve]),_=Q,y=oe,T=we,b=Ve),(xt.equals(C)===!1||Bt!==N)&&(t.blendColor(xt.r,xt.g,xt.b,Bt),C.copy(xt),N=Bt),p=F,w=!1}function J(F,me){F.side===Vn?Ue(t.CULL_FACE):_e(t.CULL_FACE);let Q=F.side===un;me&&(Q=!Q),ae(Q),F.blending===Ds&&F.transparent===!1?z(rr):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const oe=F.stencilWrite;a.setTest(oe),oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){M!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),M=F)}function de(F){F!==wS?(_e(t.CULL_FACE),F!==I&&(F===rm?t.cullFace(t.BACK):F===AS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),I=F}function pe(F){F!==q&&(j&&t.lineWidth(F),q=F)}function Se(F,me,Q){F?(_e(t.POLYGON_OFFSET_FILL),(U!==me||W!==Q)&&(t.polygonOffset(me,Q),U=me,W=Q)):Ue(t.POLYGON_OFFSET_FILL)}function ce(F){F?_e(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function R(F){F===void 0&&(F=t.TEXTURE0+$-1),k!==F&&(t.activeTexture(F),k=F)}function E(F,me,Q){Q===void 0&&(k===null?Q=t.TEXTURE0+$-1:Q=k);let oe=Z[Q];oe===void 0&&(oe={type:void 0,texture:void 0},Z[Q]=oe),(oe.type!==F||oe.texture!==me)&&(k!==Q&&(t.activeTexture(Q),k=Q),t.bindTexture(F,me||ye[F]),oe.type=F,oe.texture=me)}function B(){const F=Z[k];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(F){Oe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Oe.copy(F))}function ge(F){te.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Ie(F,me){let Q=c.get(me);Q===void 0&&(Q=new WeakMap,c.set(me,Q));let oe=Q.get(F);oe===void 0&&(oe=t.getUniformBlockIndex(me,F.name),Q.set(F,oe))}function Ce(F,me){const oe=c.get(me).get(F);l.get(me)!==oe&&(t.uniformBlockBinding(me,oe,F.__bindingPointIndex),l.set(me,oe))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},k=null,Z={},f={},d=new WeakMap,m=[],v=null,g=!1,p=null,h=null,_=null,y=null,S=null,T=null,b=null,C=new Ze(0,0,0),N=0,w=!1,M=null,I=null,q=null,U=null,W=null,Oe.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:Ue,bindFramebuffer:Fe,drawBuffers:ze,useProgram:qe,setBlending:z,setMaterial:J,setFlipSided:ae,setCullFace:de,setLineWidth:pe,setPolygonOffset:Se,setScissorTest:ce,activeTexture:R,bindTexture:E,unbindTexture:B,compressedTexImage2D:ne,compressedTexImage3D:ie,texImage2D:G,texImage3D:re,updateUBOMapping:Ie,uniformBlockBinding:Ce,texStorage2D:D,texStorage3D:L,texSubImage2D:ee,texSubImage3D:Ee,compressedTexSubImage2D:xe,compressedTexSubImage3D:Te,scissor:ue,viewport:ge,reset:We}}function tg(t,e,n,i){const r=pA(i);switch(n){case H_:return t*e;case G_:return t*e;case j_:return t*e*2;case W_:return t*e/r.components*r.byteLength;case Td:return t*e/r.components*r.byteLength;case X_:return t*e*2/r.components*r.byteLength;case wd:return t*e*2/r.components*r.byteLength;case V_:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case Ad:return t*e*4/r.components*r.byteLength;case El:case Tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:case $h:return Math.max(t,16)*Math.max(e,8)/4;case jh:case Xh:return Math.max(t,8)*Math.max(e,8)/2;case qh:case Yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bl:case ff:case df:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $_:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pA(t){switch(t){case Pi:case k_:return{byteLength:1,components:1};case sa:case z_:case ma:return{byteLength:2,components:1};case Md:case Ed:return{byteLength:2,components:4};case Vr:case Sd:case Mi:return{byteLength:4,components:1};case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function mA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return m?new OffscreenCanvas(R,E):oa("canvas")}function g(R,E,B){let ne=1;const ie=ce(R);if((ie.width>B||ie.height>B)&&(ne=B/Math.max(ie.width,ie.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(ne*ie.width),Ee=Math.floor(ne*ie.height);f===void 0&&(f=v(ee,Ee));const xe=E?v(ee,Ee):f;return xe.width=ee,xe.height=Ee,xe.getContext("2d").drawImage(R,0,0,ee,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Ee+")."),xe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function p(R){return R.generateMipmaps}function h(R){t.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,E,B,ne,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=E;if(E===t.RED&&(B===t.FLOAT&&(ee=t.R32F),B===t.HALF_FLOAT&&(ee=t.R16F),B===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.R8UI),B===t.UNSIGNED_SHORT&&(ee=t.R16UI),B===t.UNSIGNED_INT&&(ee=t.R32UI),B===t.BYTE&&(ee=t.R8I),B===t.SHORT&&(ee=t.R16I),B===t.INT&&(ee=t.R32I)),E===t.RG&&(B===t.FLOAT&&(ee=t.RG32F),B===t.HALF_FLOAT&&(ee=t.RG16F),B===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RG8UI),B===t.UNSIGNED_SHORT&&(ee=t.RG16UI),B===t.UNSIGNED_INT&&(ee=t.RG32UI),B===t.BYTE&&(ee=t.RG8I),B===t.SHORT&&(ee=t.RG16I),B===t.INT&&(ee=t.RG32I)),E===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),B===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),B===t.UNSIGNED_INT&&(ee=t.RGB32UI),B===t.BYTE&&(ee=t.RGB8I),B===t.SHORT&&(ee=t.RGB16I),B===t.INT&&(ee=t.RGB32I)),E===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),B===t.UNSIGNED_INT&&(ee=t.RGBA32UI),B===t.BYTE&&(ee=t.RGBA8I),B===t.SHORT&&(ee=t.RGBA16I),B===t.INT&&(ee=t.RGBA32I)),E===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),E===t.RGBA){const Ee=ie?Tc:Qe.getTransfer(ne);B===t.FLOAT&&(ee=t.RGBA32F),B===t.HALF_FLOAT&&(ee=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ee=Ee===ot?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(R,E){let B;return R?E===null||E===Vr||E===Xs?B=t.DEPTH24_STENCIL8:E===Mi?B=t.DEPTH32F_STENCIL8:E===sa&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vr||E===Xs?B=t.DEPTH_COMPONENT24:E===Mi?B=t.DEPTH_COMPONENT32F:E===sa&&(B=t.DEPTH_COMPONENT16),B}function T(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==qn&&R.minFilter!==ii?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){const E=R.target;E.removeEventListener("dispose",b),N(E),E.isVideoTexture&&u.delete(E)}function C(R){const E=R.target;E.removeEventListener("dispose",C),M(E)}function N(R){const E=i.get(R);if(E.__webglInit===void 0)return;const B=R.source,ne=d.get(B);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(R),Object.keys(ne).length===0&&d.delete(B)}i.remove(R)}function w(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const B=R.source,ne=d.get(B);delete ne[E.__cacheKey],o.memory.textures--}function M(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ie=0;ie<E.__webglFramebuffer[ne].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ne][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ne]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=R.textures;for(let ne=0,ie=B.length;ne<ie;ne++){const ee=i.get(B[ne]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(B[ne])}i.remove(R)}let I=0;function q(){I=0}function U(){const R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function W(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const B=i.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,R,E);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function j(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){te(B,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function O(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){te(B,R,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function P(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){le(B,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const k={[Vh]:t.REPEAT,[Rr]:t.CLAMP_TO_EDGE,[Gh]:t.MIRRORED_REPEAT},Z={[qn]:t.NEAREST,[tM]:t.NEAREST_MIPMAP_NEAREST,[Ha]:t.NEAREST_MIPMAP_LINEAR,[ii]:t.LINEAR,[ru]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},se={[sM]:t.NEVER,[hM]:t.ALWAYS,[oM]:t.LESS,[Y_]:t.LEQUAL,[aM]:t.EQUAL,[uM]:t.GEQUAL,[lM]:t.GREATER,[cM]:t.NOTEQUAL};function fe(R,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ii||E.magFilter===ru||E.magFilter===Ha||E.magFilter===Pr||E.minFilter===ii||E.minFilter===ru||E.minFilter===Ha||E.minFilter===Pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,k[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,k[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,k[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qn||E.minFilter!==Ha&&E.minFilter!==Pr||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",b));const ne=E.source;let ie=d.get(ne);ie===void 0&&(ie={},d.set(ne,ie));const ee=W(E);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ie[ee].usedTimes++;const Ee=ie[R.__cacheKey];Ee!==void 0&&(ie[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(E)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return B}function te(R,E,B){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const ie=Oe(R,E),ee=E.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+B);const Ee=i.get(ee);if(ee.version!==Ee.__version||ie===!0){n.activeTexture(t.TEXTURE0+B);const xe=Qe.getPrimaries(Qe.workingColorSpace),Te=E.colorSpace===$i?null:Qe.getPrimaries(E.colorSpace),D=E.colorSpace===$i||xe===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);let L=g(E.image,!1,r.maxTextureSize);L=Se(E,L);const G=s.convert(E.format,E.colorSpace),re=s.convert(E.type);let ue=y(E.internalFormat,G,re,E.colorSpace,E.isVideoTexture);fe(ne,E);let ge;const Ie=E.mipmaps,Ce=E.isVideoTexture!==!0,We=Ee.__version===void 0||ie===!0,F=ee.dataReady,me=T(E,L);if(E.isDepthTexture)ue=S(E.format===$s,E.type),We&&(Ce?n.texStorage2D(t.TEXTURE_2D,1,ue,L.width,L.height):n.texImage2D(t.TEXTURE_2D,0,ue,L.width,L.height,0,G,re,null));else if(E.isDataTexture)if(Ie.length>0){Ce&&We&&n.texStorage2D(t.TEXTURE_2D,me,ue,Ie[0].width,Ie[0].height);for(let Q=0,oe=Ie.length;Q<oe;Q++)ge=Ie[Q],Ce?F&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,G,re,ge.data):n.texImage2D(t.TEXTURE_2D,Q,ue,ge.width,ge.height,0,G,re,ge.data);E.generateMipmaps=!1}else Ce?(We&&n.texStorage2D(t.TEXTURE_2D,me,ue,L.width,L.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,L.width,L.height,G,re,L.data)):n.texImage2D(t.TEXTURE_2D,0,ue,L.width,L.height,0,G,re,L.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ce&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,ue,Ie[0].width,Ie[0].height,L.depth);for(let Q=0,oe=Ie.length;Q<oe;Q++)if(ge=Ie[Q],E.format!==Wn)if(G!==null)if(Ce){if(F)if(E.layerUpdates.size>0){const be=tg(ge.width,ge.height,E.format,E.type);for(const we of E.layerUpdates){const Ve=ge.data.subarray(we*be/ge.data.BYTES_PER_ELEMENT,(we+1)*be/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,we,ge.width,ge.height,1,G,Ve)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,L.depth,G,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,ue,ge.width,ge.height,L.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ge.width,ge.height,L.depth,G,re,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,ue,ge.width,ge.height,L.depth,0,G,re,ge.data)}else{Ce&&We&&n.texStorage2D(t.TEXTURE_2D,me,ue,Ie[0].width,Ie[0].height);for(let Q=0,oe=Ie.length;Q<oe;Q++)ge=Ie[Q],E.format!==Wn?G!==null?Ce?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,G,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?F&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ge.width,ge.height,G,re,ge.data):n.texImage2D(t.TEXTURE_2D,Q,ue,ge.width,ge.height,0,G,re,ge.data)}else if(E.isDataArrayTexture)if(Ce){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,ue,L.width,L.height,L.depth),F)if(E.layerUpdates.size>0){const Q=tg(L.width,L.height,E.format,E.type);for(const oe of E.layerUpdates){const be=L.data.subarray(oe*Q/L.data.BYTES_PER_ELEMENT,(oe+1)*Q/L.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,L.width,L.height,1,G,re,be)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,G,re,L.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,L.width,L.height,L.depth,0,G,re,L.data);else if(E.isData3DTexture)Ce?(We&&n.texStorage3D(t.TEXTURE_3D,me,ue,L.width,L.height,L.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,G,re,L.data)):n.texImage3D(t.TEXTURE_3D,0,ue,L.width,L.height,L.depth,0,G,re,L.data);else if(E.isFramebufferTexture){if(We)if(Ce)n.texStorage2D(t.TEXTURE_2D,me,ue,L.width,L.height);else{let Q=L.width,oe=L.height;for(let be=0;be<me;be++)n.texImage2D(t.TEXTURE_2D,be,ue,Q,oe,0,G,re,null),Q>>=1,oe>>=1}}else if(Ie.length>0){if(Ce&&We){const Q=ce(Ie[0]);n.texStorage2D(t.TEXTURE_2D,me,ue,Q.width,Q.height)}for(let Q=0,oe=Ie.length;Q<oe;Q++)ge=Ie[Q],Ce?F&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,G,re,ge):n.texImage2D(t.TEXTURE_2D,Q,ue,G,re,ge);E.generateMipmaps=!1}else if(Ce){if(We){const Q=ce(L);n.texStorage2D(t.TEXTURE_2D,me,ue,Q.width,Q.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,G,re,L)}else n.texImage2D(t.TEXTURE_2D,0,ue,G,re,L);p(E)&&h(ne),Ee.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function le(R,E,B){if(E.image.length!==6)return;const ne=Oe(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const ee=i.get(ie);if(ie.version!==ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const Ee=Qe.getPrimaries(Qe.workingColorSpace),xe=E.colorSpace===$i?null:Qe.getPrimaries(E.colorSpace),Te=E.colorSpace===$i||Ee===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const D=E.isCompressedTexture||E.image[0].isCompressedTexture,L=E.image[0]&&E.image[0].isDataTexture,G=[];for(let oe=0;oe<6;oe++)!D&&!L?G[oe]=g(E.image[oe],!0,r.maxCubemapSize):G[oe]=L?E.image[oe].image:E.image[oe],G[oe]=Se(E,G[oe]);const re=G[0],ue=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),Ie=y(E.internalFormat,ue,ge,E.colorSpace),Ce=E.isVideoTexture!==!0,We=ee.__version===void 0||ne===!0,F=ie.dataReady;let me=T(E,re);fe(t.TEXTURE_CUBE_MAP,E);let Q;if(D){Ce&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ie,re.width,re.height);for(let oe=0;oe<6;oe++){Q=G[oe].mipmaps;for(let be=0;be<Q.length;be++){const we=Q[be];E.format!==Wn?ue!==null?Ce?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,0,0,we.width,we.height,ue,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,Ie,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,0,0,we.width,we.height,ue,ge,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be,Ie,we.width,we.height,0,ue,ge,we.data)}}}else{if(Q=E.mipmaps,Ce&&We){Q.length>0&&me++;const oe=ce(G[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ie,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(L){Ce?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,G[oe].width,G[oe].height,ue,ge,G[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ie,G[oe].width,G[oe].height,0,ue,ge,G[oe].data);for(let be=0;be<Q.length;be++){const Ve=Q[be].image[oe].image;Ce?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,0,0,Ve.width,Ve.height,ue,ge,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,Ie,Ve.width,Ve.height,0,ue,ge,Ve.data)}}else{Ce?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ue,ge,G[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ie,ue,ge,G[oe]);for(let be=0;be<Q.length;be++){const we=Q[be];Ce?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,0,0,ue,ge,we.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be+1,Ie,ue,ge,we.image[oe])}}}p(E)&&h(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ye(R,E,B,ne,ie,ee){const Ee=s.convert(B.format,B.colorSpace),xe=s.convert(B.type),Te=y(B.internalFormat,Ee,xe,B.colorSpace),D=i.get(E),L=i.get(B);if(L.__renderTarget=E,!D.__hasExternalTextures){const G=Math.max(1,E.width>>ee),re=Math.max(1,E.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,Te,G,re,E.depth,0,Ee,xe,null):n.texImage2D(ie,ee,Te,G,re,0,Ee,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ie,L.__webglTexture,0,ae(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ie,L.__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(R,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const ne=E.depthTexture,ie=ne&&ne.isDepthTexture?ne.type:null,ee=S(E.stencilBuffer,ie),Ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=ae(E);de(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,ee,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const ne=E.textures;for(let ie=0;ie<ne.length;ie++){const ee=ne[ie],Ee=s.convert(ee.format,ee.colorSpace),xe=s.convert(ee.type),Te=y(ee.internalFormat,Ee,xe,ee.colorSpace),D=ae(E);B&&de(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,D,Te,E.width,E.height):de(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D,Te,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Te,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(E.depthTexture);ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ie=ne.__webglTexture,ee=ae(E);if(E.depthTexture.format===Is)de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===$s)de(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const E=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",ie)};ne.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ne}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ue(E.__webglFramebuffer,R)}else if(B){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=t.createRenderbuffer(),_e(E.__webglDepthbuffer[ne],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),_e(E.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(R,E,B){const ne=i.get(R);E!==void 0&&ye(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Fe(R)}function qe(R){const E=R.texture,B=i.get(R),ne=i.get(E);R.addEventListener("dispose",C);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ee=ie.length>1;if(Ee||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,o.memory.textures++),ee){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let Te=0;Te<E.mipmaps.length;Te++)B.__webglFramebuffer[xe][Te]=t.createFramebuffer()}else B.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)B.__webglFramebuffer[xe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let xe=0,Te=ie.length;xe<Te;xe++){const D=i.get(ie[xe]);D.__webglTexture===void 0&&(D.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&de(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){const Te=ie[xe];B.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);const D=s.convert(Te.format,Te.colorSpace),L=s.convert(Te.type),G=y(Te.internalFormat,D,L,Te.colorSpace,R.isXRRenderTarget===!0),re=ae(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,G,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),fe(t.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ye(B.__webglFramebuffer[xe][Te],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Te);else ye(B.__webglFramebuffer[xe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);p(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let xe=0,Te=ie.length;xe<Te;xe++){const D=ie[xe],L=i.get(D);n.bindTexture(t.TEXTURE_2D,L.__webglTexture),fe(t.TEXTURE_2D,D),ye(B.__webglFramebuffer,R,D,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),p(D)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,ne.__webglTexture),fe(xe,E),E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ye(B.__webglFramebuffer[Te],R,E,t.COLOR_ATTACHMENT0,xe,Te);else ye(B.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,xe,0);p(E)&&h(xe),n.unbindTexture()}R.depthBuffer&&Fe(R)}function $e(R){const E=R.textures;for(let B=0,ne=E.length;B<ne;B++){const ie=E[B];if(p(ie)){const ee=_(R),Ee=i.get(ie).__webglTexture;n.bindTexture(ee,Ee),h(ee),n.unbindTexture()}}}const tt=[],z=[];function J(R){if(R.samples>0){if(de(R)===!1){const E=R.textures,B=R.width,ne=R.height;let ie=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),xe=E.length>1;if(xe)for(let Te=0;Te<E.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),xe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const D=i.get(E[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,D,0)}t.blitFramebuffer(0,0,B,ne,0,0,B,ne,ie,t.NEAREST),l===!0&&(tt.length=0,z.length=0,tt.push(t.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(ee),z.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Te=0;Te<E.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const D=i.get(E[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,D,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function ae(R){return Math.min(r.maxSamples,R.samples)}function de(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pe(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Se(R,E){const B=R.colorSpace,ne=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Qs&&B!==$i&&(Qe.getTransfer(B)===ot?(ne!==Wn||ie!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=O,this.setTextureCube=P,this.rebindTextures=ze,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=de}function gA(t,e){function n(i,r=$i){let s;const o=Qe.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===Md)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ed)return t.UNSIGNED_SHORT_5_5_5_1;if(i===B_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===k_)return t.BYTE;if(i===z_)return t.SHORT;if(i===sa)return t.UNSIGNED_SHORT;if(i===Sd)return t.INT;if(i===Vr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===ma)return t.HALF_FLOAT;if(i===H_)return t.ALPHA;if(i===V_)return t.RGB;if(i===Wn)return t.RGBA;if(i===G_)return t.LUMINANCE;if(i===j_)return t.LUMINANCE_ALPHA;if(i===Is)return t.DEPTH_COMPONENT;if(i===$s)return t.DEPTH_STENCIL;if(i===W_)return t.RED;if(i===Td)return t.RED_INTEGER;if(i===X_)return t.RG;if(i===wd)return t.RG_INTEGER;if(i===Ad)return t.RGBA_INTEGER;if(i===El||i===Tl||i===wl||i===Al)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===El)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===El)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jh||i===Wh||i===Xh||i===$h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qh||i===Yh||i===Kh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qh||i===Yh)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zh||i===Qh||i===Jh||i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===hf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ef)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===of)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===af)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===ff||i===df)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bl)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ff)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===df)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$_||i===pf||i===mf||i===gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class _A extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vA={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=n.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
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

}`;class SA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cr({vertexShader:xA,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wt(new Ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MA extends $r{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null;const g=new SA,p=n.getContextAttributes();let h=null,_=null;const y=[],S=[],T=new He;let b=null;const C=new An;C.viewport=new St;const N=new An;N.viewport=new St;const w=[C,N],M=new _A;let I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=y[te];return le===void 0&&(le=new Nu,y[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=y[te];return le===void 0&&(le=new Nu,y[te]=le),le.getGripSpace()},this.getHand=function(te){let le=y[te];return le===void 0&&(le=new Nu,y[te]=le),le.getHandSpace()};function U(te){const le=S.indexOf(te.inputSource);if(le===-1)return;const ye=y[le];ye!==void 0&&(ye.update(te.inputSource,te.frame,c||o),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let te=0;te<y.length;te++){const le=S[te];le!==null&&(S[te]=null,y[te].disconnect(le))}I=null,q=null,g.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,_=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new Gr(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,ye=null,_e=null;p.depth&&(_e=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=p.stencil?$s:Is,ye=p.stencil?Xs:Vr);const Ue={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Gr(d.textureWidth,d.textureHeight,{format:Wn,type:Pi,depthTexture:new cv(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(te){for(let le=0;le<te.removed.length;le++){const ye=te.removed[le],_e=S.indexOf(ye);_e>=0&&(S[_e]=null,y[_e].disconnect(ye))}for(let le=0;le<te.added.length;le++){const ye=te.added[le];let _e=S.indexOf(ye);if(_e===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=S.length){S.push(ye),_e=Fe;break}else if(S[Fe]===null){S[Fe]=ye,_e=Fe;break}if(_e===-1)break}const Ue=y[_e];Ue&&Ue.connect(ye)}}const j=new X,O=new X;function P(te,le,ye){j.setFromMatrixPosition(le.matrixWorld),O.setFromMatrixPosition(ye.matrixWorld);const _e=j.distanceTo(O),Ue=le.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,ze=Ue[14]/(Ue[10]-1),qe=Ue[14]/(Ue[10]+1),$e=(Ue[9]+1)/Ue[5],tt=(Ue[9]-1)/Ue[5],z=(Ue[8]-1)/Ue[0],J=(Fe[8]+1)/Fe[0],ae=ze*z,de=ze*J,pe=_e/(-z+J),Se=pe*-z;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Se),te.translateZ(pe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ue[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ce=ze+pe,R=qe+pe,E=ae-Se,B=de+(_e-Se),ne=$e*qe/R*ce,ie=tt*qe/R*ce;te.projectionMatrix.makePerspective(E,B,ne,ie,ce,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function k(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let le=te.near,ye=te.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),M.near=N.near=C.near=le,M.far=N.far=C.far=ye,(I!==M.near||q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,q=M.far),C.layers.mask=te.layers.mask|2,N.layers.mask=te.layers.mask|4,M.layers.mask=C.layers.mask|N.layers.mask;const _e=te.parent,Ue=M.cameras;k(M,_e);for(let Fe=0;Fe<Ue.length;Fe++)k(Ue[Fe],_e);Ue.length===2?P(M,C,N):M.projectionMatrix.copy(C.projectionMatrix),Z(te,M,_e)};function Z(te,le,ye){ye===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=_f*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let se=null;function fe(te,le){if(u=le.getViewerPose(c||o),v=le,u!==null){const ye=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let _e=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let Fe=0;Fe<ye.length;Fe++){const ze=ye[Fe];let qe=null;if(m!==null)qe=m.getViewport(ze);else{const tt=f.getViewSubImage(d,ze);qe=tt.viewport,Fe===0&&(e.setRenderTargetTextures(_,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(_))}let $e=w[Fe];$e===void 0&&($e=new An,$e.layers.enable(Fe),$e.viewport=new St,w[Fe]=$e),$e.matrix.fromArray(ze.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ze.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(qe.x,qe.y,qe.width,qe.height),Fe===0&&(M.matrix.copy($e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push($e)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Fe=f.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(e,Fe,r.renderState)}}for(let ye=0;ye<y.length;ye++){const _e=S[ye],Ue=y[ye];_e!==null&&Ue!==void 0&&Ue.update(_e,le,c||o)}se&&se(te,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),v=null}const Oe=new av;Oe.setAnimationLoop(fe),this.setAnimationLoop=function(te){se=te},this.dispose=function(){}}}const yr=new ai,EA=new Mt;function TA(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,rv(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,_,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,_,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===un&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===un&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h),y=_.envMap,S=_.envMapRotation;y&&(p.envMap.value=y,yr.copy(S),yr.x*=-1,yr.y*=-1,yr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),p.envMapRotation.value.setFromMatrix4(EA.makeRotationFromEuler(yr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,_,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=y*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const _=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const S=y.program;i.uniformBlockBinding(_,S)}function c(_,y){let S=r[_.id];S===void 0&&(v(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",p));const T=y.program;i.updateUBOMapping(_,T);const b=e.render.frame;s[_.id]!==b&&(d(_),s[_.id]=b)}function u(_){const y=f();_.__bindingPointIndex=y;const S=t.createBuffer(),T=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=r[_.id],S=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let b=0,C=S.length;b<C;b++){const N=Array.isArray(S[b])?S[b]:[S[b]];for(let w=0,M=N.length;w<M;w++){const I=N[w];if(m(I,b,w,T)===!0){const q=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let $=0;$<U.length;$++){const j=U[$],O=g(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,q+W,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,y,S,T){const b=_.value,C=y+"_"+S;if(T[C]===void 0)return typeof b=="number"||typeof b=="boolean"?T[C]=b:T[C]=b.clone(),!0;{const N=T[C];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return T[C]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function v(_){const y=_.uniforms;let S=0;const T=16;for(let C=0,N=y.length;C<N;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,I=w.length;M<I;M++){const q=w[M],U=Array.isArray(q.value)?q.value:[q.value];for(let W=0,$=U.length;W<$;W++){const j=U[W],O=g(j),P=S%T,k=P%O.boundary,Z=P+k;S+=k,Z!==0&&T-Z<O.storage&&(S+=T-Z),q.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=O.storage}}}const b=S%T;return b>0&&(S+=T-b),_.__size=S,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){const y=_.target;y.removeEventListener("dispose",p);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class AA{constructor(e={}){const{canvas:n=pM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),g=new Int32Array(4);let p=null,h=null;const _=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=sr,this.toneMappingExposure=1;const S=this;let T=!1,b=0,C=0,N=null,w=-1,M=null;const I=new St,q=new St;let U=null;const W=new Ze(0);let $=0,j=n.width,O=n.height,P=1,k=null,Z=null;const se=new St(0,0,j,O),fe=new St(0,0,j,O);let Oe=!1;const te=new Cd;let le=!1,ye=!1;const _e=new Mt,Ue=new Mt,Fe=new X,ze=new St,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function tt(){return N===null?P:1}let z=i;function J(A,H){return n.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xd}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",we,!1),z===null){const H="webgl2";if(z=J(H,A),z===null)throw J(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,de,pe,Se,ce,R,E,B,ne,ie,ee,Ee,xe,Te,D,L,G,re,ue,ge,Ie,Ce,We,F;function me(){ae=new LT(z),ae.init(),Ce=new gA(z,ae),de=new wT(z,ae,e,Ce),pe=new dA(z,ae),de.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Se=new IT(z),ce=new Qw,R=new mA(z,ae,pe,ce,de,Ce,Se),E=new bT(S),B=new PT(S),ne=new HM(z),We=new ET(z,ne),ie=new NT(z,ne,Se,We),ee=new FT(z,ie,ne,Se),ue=new UT(z,de,R),L=new AT(ce),Ee=new Zw(S,E,B,ae,de,We,L),xe=new TA(S,ce),Te=new eA,D=new oA(ae),re=new MT(S,E,B,pe,ee,m,l),G=new hA(S,ee,de),F=new wA(z,Se,de,pe),ge=new TT(z,ae,Se),Ie=new DT(z,ae,Se),Se.programs=Ee.programs,S.capabilities=de,S.extensions=ae,S.properties=ce,S.renderLists=Te,S.shadowMap=G,S.state=pe,S.info=Se}me();const Q=new MA(S,z);this.xr=Q,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(j,O,!1))},this.getSize=function(A){return A.set(j,O)},this.setSize=function(A,H,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,O=H,n.width=Math.floor(A*P),n.height=Math.floor(H*P),Y===!0&&(n.style.width=A+"px",n.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(j*P,O*P).floor()},this.setDrawingBufferSize=function(A,H,Y){j=A,O=H,P=Y,n.width=Math.floor(A*Y),n.height=Math.floor(H*Y),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,H,Y,K){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,H,Y,K),pe.viewport(I.copy(se).multiplyScalar(P).round())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,H,Y,K){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,H,Y,K),pe.scissor(q.copy(fe).multiplyScalar(P).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){pe.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,H=!0,Y=!0){let K=0;if(A){let V=!1;if(N!==null){const ve=N.texture.format;V=ve===Ad||ve===wd||ve===Td}if(V){const ve=N.texture.type,Ae=ve===Pi||ve===Vr||ve===sa||ve===Xs||ve===Md||ve===Ed,Pe=re.getClearColor(),Le=re.getClearAlpha(),Be=Pe.r,Ge=Pe.g,Ne=Pe.b;Ae?(v[0]=Be,v[1]=Ge,v[2]=Ne,v[3]=Le,z.clearBufferuiv(z.COLOR,0,v)):(g[0]=Be,g[1]=Ge,g[2]=Ne,g[3]=Le,z.clearBufferiv(z.COLOR,0,g))}else K|=z.COLOR_BUFFER_BIT}H&&(K|=z.DEPTH_BUFFER_BIT),Y&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Te.dispose(),D.dispose(),ce.dispose(),E.dispose(),B.dispose(),ee.dispose(),We.dispose(),F.dispose(),Ee.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Id),Q.removeEventListener("sessionend",Ud),dr.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Se.autoReset,H=G.enabled,Y=G.autoUpdate,K=G.needsUpdate,V=G.type;me(),Se.autoReset=A,G.enabled=H,G.autoUpdate=Y,G.needsUpdate=K,G.type=V}function we(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ve(A){const H=A.target;H.removeEventListener("dispose",Ve),xt(H)}function xt(A){Bt(A),ce.remove(A)}function Bt(A){const H=ce.get(A).programs;H!==void 0&&(H.forEach(function(Y){Ee.releaseProgram(Y)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Y,K,V,ve){H===null&&(H=qe);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,Pe=_v(A,H,Y,K,V);pe.setMaterial(K,Ae);let Le=Y.index,Be=1;if(K.wireframe===!0){if(Le=ie.getWireframeAttribute(Y),Le===void 0)return;Be=2}const Ge=Y.drawRange,Ne=Y.attributes.position;let et=Ge.start*Be,lt=(Ge.start+Ge.count)*Be;ve!==null&&(et=Math.max(et,ve.start*Be),lt=Math.min(lt,(ve.start+ve.count)*Be)),Le!==null?(et=Math.max(et,0),lt=Math.min(lt,Le.count)):Ne!=null&&(et=Math.max(et,0),lt=Math.min(lt,Ne.count));const ut=lt-et;if(ut<0||ut===1/0)return;We.setup(V,K,Pe,Y,Le);let tn,nt=ge;if(Le!==null&&(tn=ne.get(Le),nt=Ie,nt.setIndex(tn)),V.isMesh)K.wireframe===!0?(pe.setLineWidth(K.wireframeLinewidth*tt()),nt.setMode(z.LINES)):nt.setMode(z.TRIANGLES);else if(V.isLine){let De=K.linewidth;De===void 0&&(De=1),pe.setLineWidth(De*tt()),V.isLineSegments?nt.setMode(z.LINES):V.isLineLoop?nt.setMode(z.LINE_LOOP):nt.setMode(z.LINE_STRIP)}else V.isPoints?nt.setMode(z.POINTS):V.isSprite&&nt.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)nt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))nt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const De=V._multiDrawStarts,ci=V._multiDrawCounts,it=V._multiDrawCount,Dn=Le?ne.get(Le).bytesPerElement:1,qr=ce.get(K).currentProgram.getUniforms();for(let hn=0;hn<it;hn++)qr.setValue(z,"_gl_DrawID",hn),nt.render(De[hn]/Dn,ci[hn])}else if(V.isInstancedMesh)nt.renderInstances(et,ut,V.count);else if(Y.isInstancedBufferGeometry){const De=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ci=Math.min(Y.instanceCount,De);nt.renderInstances(et,ut,ci)}else nt.render(et,ut)};function rt(A,H,Y){A.transparent===!0&&A.side===Vn&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,ya(A,H,Y),A.side=lr,A.needsUpdate=!0,ya(A,H,Y),A.side=Vn):ya(A,H,Y)}this.compile=function(A,H,Y=null){Y===null&&(Y=A),h=D.get(Y),h.init(H),y.push(h),Y.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),A!==Y&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights();const K=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ve=V.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Pe=ve[Ae];rt(Pe,Y,V),K.add(Pe)}else rt(ve,Y,V),K.add(ve)}),y.pop(),h=null,K},this.compileAsync=function(A,H,Y=null){const K=this.compile(A,H,Y);return new Promise(V=>{function ve(){if(K.forEach(function(Ae){ce.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){V(A);return}setTimeout(ve,10)}ae.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Nn=null;function li(A){Nn&&Nn(A)}function Id(){dr.stop()}function Ud(){dr.start()}const dr=new av;dr.setAnimationLoop(li),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(A){Nn=A,Q.setAnimationLoop(A),A===null?dr.stop():dr.start()},Q.addEventListener("sessionstart",Id),Q.addEventListener("sessionend",Ud),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(H),H=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,H,N),h=D.get(A,y.length),h.init(H),y.push(h),Ue.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),te.setFromProjectionMatrix(Ue),ye=this.localClippingEnabled,le=L.init(this.clippingPlanes,ye),p=Te.get(A,_.length),p.init(),_.push(p),Q.enabled===!0&&Q.isPresenting===!0){const ve=S.xr.getDepthSensingMesh();ve!==null&&Ac(ve,H,-1/0,S.sortObjects)}Ac(A,H,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(k,Z),$e=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,$e&&re.addToRenderList(p,A),this.info.render.frame++,le===!0&&L.beginShadows();const Y=h.state.shadowsArray;G.render(Y,A,H),le===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=p.opaque,V=p.transmissive;if(h.setupLights(),H.isArrayCamera){const ve=H.cameras;if(V.length>0)for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const Le=ve[Ae];Od(K,V,A,Le)}$e&&re.render(A);for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const Le=ve[Ae];Fd(p,A,Le,Le.viewport)}}else V.length>0&&Od(K,V,A,H),$e&&re.render(A),Fd(p,A,H);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(S,A,H),We.resetDefaultState(),w=-1,M=null,y.pop(),y.length>0?(h=y[y.length-1],le===!0&&L.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Ac(A,H,Y,K){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){K&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ue);const Ae=ee.update(A),Pe=A.material;Pe.visible&&p.push(A,Ae,Pe,Y,ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Ae=ee.update(A),Pe=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ze.copy(Ae.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(Ue)),Array.isArray(Pe)){const Le=Ae.groups;for(let Be=0,Ge=Le.length;Be<Ge;Be++){const Ne=Le[Be],et=Pe[Ne.materialIndex];et&&et.visible&&p.push(A,Ae,et,Y,ze.z,Ne)}}else Pe.visible&&p.push(A,Ae,Pe,Y,ze.z,null)}}const ve=A.children;for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++)Ac(ve[Ae],H,Y,K)}function Fd(A,H,Y,K){const V=A.opaque,ve=A.transmissive,Ae=A.transparent;h.setupLightsView(Y),le===!0&&L.setGlobalState(S.clippingPlanes,Y),K&&pe.viewport(I.copy(K)),V.length>0&&xa(V,H,Y),ve.length>0&&xa(ve,H,Y),Ae.length>0&&xa(Ae,H,Y),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Od(A,H,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[K.id]===void 0&&(h.state.transmissionRenderTarget[K.id]=new Gr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?ma:Pi,minFilter:Pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ve=h.state.transmissionRenderTarget[K.id],Ae=K.viewport||I;ve.setSize(Ae.z,Ae.w);const Pe=S.getRenderTarget();S.setRenderTarget(ve),S.getClearColor(W),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),$e&&re.render(Y);const Le=S.toneMapping;S.toneMapping=sr;const Be=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),h.setupLightsView(K),le===!0&&L.setGlobalState(S.clippingPlanes,K),xa(A,Y,K),R.updateMultisampleRenderTarget(ve),R.updateRenderTargetMipmap(ve),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ne=0,et=H.length;Ne<et;Ne++){const lt=H[Ne],ut=lt.object,tn=lt.geometry,nt=lt.material,De=lt.group;if(nt.side===Vn&&ut.layers.test(K.layers)){const ci=nt.side;nt.side=un,nt.needsUpdate=!0,kd(ut,Y,K,tn,nt,De),nt.side=ci,nt.needsUpdate=!0,Ge=!0}}Ge===!0&&(R.updateMultisampleRenderTarget(ve),R.updateRenderTargetMipmap(ve))}S.setRenderTarget(Pe),S.setClearColor(W,$),Be!==void 0&&(K.viewport=Be),S.toneMapping=Le}function xa(A,H,Y){const K=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ve=A.length;V<ve;V++){const Ae=A[V],Pe=Ae.object,Le=Ae.geometry,Be=K===null?Ae.material:K,Ge=Ae.group;Pe.layers.test(Y.layers)&&kd(Pe,H,Y,Le,Be,Ge)}}function kd(A,H,Y,K,V,ve){A.onBeforeRender(S,H,Y,K,V,ve),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(S,H,Y,K,A,ve),V.transparent===!0&&V.side===Vn&&V.forceSinglePass===!1?(V.side=un,V.needsUpdate=!0,S.renderBufferDirect(Y,H,K,V,A,ve),V.side=lr,V.needsUpdate=!0,S.renderBufferDirect(Y,H,K,V,A,ve),V.side=Vn):S.renderBufferDirect(Y,H,K,V,A,ve),A.onAfterRender(S,H,Y,K,V,ve)}function ya(A,H,Y){H.isScene!==!0&&(H=qe);const K=ce.get(A),V=h.state.lights,ve=h.state.shadowsArray,Ae=V.state.version,Pe=Ee.getParameters(A,V.state,ve,H,Y),Le=Ee.getProgramCacheKey(Pe);let Be=K.programs;K.environment=A.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(A.isMeshStandardMaterial?B:E).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Ve),Be=new Map,K.programs=Be);let Ge=Be.get(Le);if(Ge!==void 0){if(K.currentProgram===Ge&&K.lightsStateVersion===Ae)return Bd(A,Pe),Ge}else Pe.uniforms=Ee.getUniforms(A),A.onBeforeCompile(Pe,S),Ge=Ee.acquireProgram(Pe,Le),Be.set(Le,Ge),K.uniforms=Pe.uniforms;const Ne=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=L.uniform),Bd(A,Pe),K.needsLights=xv(A),K.lightsStateVersion=Ae,K.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.directionalShadowMap.value=V.state.directionalShadowMap,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotShadowMap.value=V.state.spotShadowMap,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMap.value=V.state.pointShadowMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Ge,K.uniformsList=null,Ge}function zd(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Rl.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Bd(A,H){const Y=ce.get(A);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function _v(A,H,Y,K,V){H.isScene!==!0&&(H=qe),R.resetTextureUnits();const ve=H.fog,Ae=K.isMeshStandardMaterial?H.environment:null,Pe=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qs,Le=(K.isMeshStandardMaterial?B:E).get(K.envMap||Ae),Be=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,lt=!!Y.morphAttributes.color;let ut=sr;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ut=S.toneMapping);const tn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=tn!==void 0?tn.length:0,De=ce.get(K),ci=h.state.lights;if(le===!0&&(ye===!0||A!==M)){const Mn=A===M&&K.id===w;L.setState(K,A,Mn)}let it=!1;K.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ci.state.version||De.outputColorSpace!==Pe||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==Le||K.fog===!0&&De.fog!==ve||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==L.numPlanes||De.numIntersection!==L.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==Ge||De.morphTargets!==Ne||De.morphNormals!==et||De.morphColors!==lt||De.toneMapping!==ut||De.morphTargetsCount!==nt)&&(it=!0):(it=!0,De.__version=K.version);let Dn=De.currentProgram;it===!0&&(Dn=ya(K,H,V));let qr=!1,hn=!1,to=!1;const ht=Dn.getUniforms(),Kn=De.uniforms;if(pe.useProgram(Dn.program)&&(qr=!0,hn=!0,to=!0),K.id!==w&&(w=K.id,hn=!0),qr||M!==A){pe.buffers.depth.getReversed()?(_e.copy(A.projectionMatrix),gM(_e),_M(_e),ht.setValue(z,"projectionMatrix",_e)):ht.setValue(z,"projectionMatrix",A.projectionMatrix),ht.setValue(z,"viewMatrix",A.matrixWorldInverse);const Ni=ht.map.cameraPosition;Ni!==void 0&&Ni.setValue(z,Fe.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ht.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,hn=!0,to=!0)}if(V.isSkinnedMesh){ht.setOptional(z,V,"bindMatrix"),ht.setOptional(z,V,"bindMatrixInverse");const Mn=V.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),ht.setValue(z,"boneTexture",Mn.boneTexture,R))}V.isBatchedMesh&&(ht.setOptional(z,V,"batchingTexture"),ht.setValue(z,"batchingTexture",V._matricesTexture,R),ht.setOptional(z,V,"batchingIdTexture"),ht.setValue(z,"batchingIdTexture",V._indirectTexture,R),ht.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(z,"batchingColorTexture",V._colorsTexture,R));const no=Y.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0)&&ue.update(V,Y,Dn),(hn||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,ht.setValue(z,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Kn.envMap.value=Le,Kn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(Kn.envMapIntensity.value=H.environmentIntensity),hn&&(ht.setValue(z,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&vv(Kn,to),ve&&K.fog===!0&&xe.refreshFogUniforms(Kn,ve),xe.refreshMaterialUniforms(Kn,K,P,O,h.state.transmissionRenderTarget[A.id]),Rl.upload(z,zd(De),Kn,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Rl.upload(z,zd(De),Kn,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ht.setValue(z,"center",V.center),ht.setValue(z,"modelViewMatrix",V.modelViewMatrix),ht.setValue(z,"normalMatrix",V.normalMatrix),ht.setValue(z,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Mn=K.uniformsGroups;for(let Ni=0,Di=Mn.length;Ni<Di;Ni++){const Hd=Mn[Ni];F.update(Hd,Dn),F.bind(Hd,Dn)}}return Dn}function vv(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function xv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,H,Y){ce.get(A.texture).__webglTexture=H,ce.get(A.depthTexture).__webglTexture=Y;const K=ce.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const Y=ce.get(A);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,Y=0){N=A,b=H,C=Y;let K=!0,V=null,ve=!1,Ae=!1;if(A){const Le=ce.get(A);if(Le.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(z.FRAMEBUFFER,null),K=!1;else if(Le.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Le.__hasExternalTextures)R.rebindTextures(A,ce.get(A.texture).__webglTexture,ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ne=A.depthTexture;if(Le.__boundDepthTexture!==Ne){if(Ne!==null&&ce.has(Ne)&&(A.width!==Ne.image.width||A.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const Ge=ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?V=Ge[H][Y]:V=Ge[H],ve=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?V=ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?V=Ge[Y]:V=Ge,I.copy(A.viewport),q.copy(A.scissor),U=A.scissorTest}else I.copy(se).multiplyScalar(P).floor(),q.copy(fe).multiplyScalar(P).floor(),U=Oe;if(pe.bindFramebuffer(z.FRAMEBUFFER,V)&&K&&pe.drawBuffers(A,V),pe.viewport(I),pe.scissor(q),pe.setScissorTest(U),ve){const Le=ce.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,Y)}else if(Ae){const Le=ce.get(A.texture),Be=H||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.__webglTexture,Y||0,Be)}w=-1},this.readRenderTargetPixels=function(A,H,Y,K,V,ve,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){pe.bindFramebuffer(z.FRAMEBUFFER,Pe);try{const Le=A.texture,Be=Le.format,Ge=Le.type;if(!de.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-K&&Y>=0&&Y<=A.height-V&&z.readPixels(H,Y,K,V,Ce.convert(Be),Ce.convert(Ge),ve)}finally{const Le=N!==null?ce.get(N).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,H,Y,K,V,ve,Ae){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){const Le=A.texture,Be=Le.format,Ge=Le.type;if(!de.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-K&&Y>=0&&Y<=A.height-V){pe.bindFramebuffer(z.FRAMEBUFFER,Pe);const Ne=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ne),z.bufferData(z.PIXEL_PACK_BUFFER,ve.byteLength,z.STREAM_READ),z.readPixels(H,Y,K,V,Ce.convert(Be),Ce.convert(Ge),0);const et=N!==null?ce.get(N).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,et);const lt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await mM(z,lt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ne),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ve),z.deleteBuffer(Ne),z.deleteSync(lt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,Y=0){A.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-Y),V=Math.floor(A.image.width*K),ve=Math.floor(A.image.height*K),Ae=H!==null?H.x:0,Pe=H!==null?H.y:0;R.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,Ae,Pe,V,ve),pe.unbindTexture()},this.copyTextureToTexture=function(A,H,Y=null,K=null,V=0){A.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],H=arguments[2],V=arguments[3]||0,Y=null);let ve,Ae,Pe,Le,Be,Ge,Ne,et,lt;const ut=A.isCompressedTexture?A.mipmaps[V]:A.image;Y!==null?(ve=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Be=Y.min.y,Ge=Y.isBox3?Y.min.z:0):(ve=ut.width,Ae=ut.height,Pe=ut.depth||1,Le=0,Be=0,Ge=0),K!==null?(Ne=K.x,et=K.y,lt=K.z):(Ne=0,et=0,lt=0);const tn=Ce.convert(H.format),nt=Ce.convert(H.type);let De;H.isData3DTexture?(R.setTexture3D(H,0),De=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(R.setTexture2DArray(H,0),De=z.TEXTURE_2D_ARRAY):(R.setTexture2D(H,0),De=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const ci=z.getParameter(z.UNPACK_ROW_LENGTH),it=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Dn=z.getParameter(z.UNPACK_SKIP_PIXELS),qr=z.getParameter(z.UNPACK_SKIP_ROWS),hn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Le),z.pixelStorei(z.UNPACK_SKIP_ROWS,Be),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge);const to=A.isDataArrayTexture||A.isData3DTexture,ht=H.isDataArrayTexture||H.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Kn=ce.get(A),no=ce.get(H),Mn=ce.get(Kn.__renderTarget),Ni=ce.get(no.__renderTarget);pe.bindFramebuffer(z.READ_FRAMEBUFFER,Mn.__webglFramebuffer),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Di=0;Di<Pe;Di++)to&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ce.get(A).__webglTexture,V,Ge+Di),A.isDepthTexture?(ht&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ce.get(H).__webglTexture,V,lt+Di),z.blitFramebuffer(Le,Be,ve,Ae,Ne,et,ve,Ae,z.DEPTH_BUFFER_BIT,z.NEAREST)):ht?z.copyTexSubImage3D(De,V,Ne,et,lt+Di,Le,Be,ve,Ae):z.copyTexSubImage2D(De,V,Ne,et,lt+Di,Le,Be,ve,Ae);pe.bindFramebuffer(z.READ_FRAMEBUFFER,null),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ht?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(De,V,Ne,et,lt,ve,Ae,Pe,tn,nt,ut.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(De,V,Ne,et,lt,ve,Ae,Pe,tn,ut.data):z.texSubImage3D(De,V,Ne,et,lt,ve,Ae,Pe,tn,nt,ut):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,Ne,et,ve,Ae,tn,nt,ut.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,Ne,et,ut.width,ut.height,tn,ut.data):z.texSubImage2D(z.TEXTURE_2D,V,Ne,et,ve,Ae,tn,nt,ut);z.pixelStorei(z.UNPACK_ROW_LENGTH,ci),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Dn),z.pixelStorei(z.UNPACK_SKIP_ROWS,qr),z.pixelStorei(z.UNPACK_SKIP_IMAGES,hn),V===0&&H.generateMipmaps&&z.generateMipmap(De),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,H,Y=null,K=null,V=0){return A.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,A=arguments[2],H=arguments[3],V=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,Y,K,V)},this.initRenderTarget=function(A){ce.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){b=0,C=0,N=null,pe.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}class bA extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Pd extends Rn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let v=0;const g=[],p=i/2;let h=0;_(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(m,2));function _(){const S=new X,T=new X;let b=0;const C=(n-e)/i;for(let N=0;N<=s;N++){const w=[],M=N/s,I=M*(n-e)+e;for(let q=0;q<=r;q++){const U=q/r,W=U*l+a,$=Math.sin(W),j=Math.cos(W);T.x=I*$,T.y=-M*i+p,T.z=I*j,f.push(T.x,T.y,T.z),S.set($,C,j).normalize(),d.push(S.x,S.y,S.z),m.push(U,1-M),w.push(v++)}g.push(w)}for(let N=0;N<r;N++)for(let w=0;w<s;w++){const M=g[w][N],I=g[w+1][N],q=g[w+1][N+1],U=g[w][N+1];(e>0||w!==0)&&(u.push(M,I,U),b+=3),(n>0||w!==s-1)&&(u.push(I,q,U),b+=3)}c.addGroup(h,b,0),h+=b}function y(S){const T=v,b=new He,C=new X;let N=0;const w=S===!0?e:n,M=S===!0?1:-1;for(let q=1;q<=r;q++)f.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),v++;const I=v;for(let q=0;q<=r;q++){const W=q/r*l+a,$=Math.cos(W),j=Math.sin(W);C.x=w*j,C.y=p*M,C.z=w*$,f.push(C.x,C.y,C.z),d.push(0,M,0),b.x=$*.5+.5,b.y=j*.5*M+.5,m.push(b.x,b.y),v++}for(let q=0;q<r;q++){const U=T+q,W=I+q;S===!0?u.push(W,W+1,U):u.push(W+1,W,U),N+=3}c.addGroup(h,N,S===!0?1:2),h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ld extends Rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new X,d=new X,m=[],v=[],g=[],p=[];for(let h=0;h<=i;h++){const _=[],y=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let T=0;T<=n;T++){const b=T/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+y*a),v.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(b+S,1-y),_.push(c++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const y=u[h][_+1],S=u[h][_],T=u[h+1][_],b=u[h+1][_+1];(h!==0||o>0)&&m.push(y,S,b),(h!==i-1||l<Math.PI)&&m.push(S,T,b)}this.setIndex(m),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(g,3)),this.setAttribute("uv",new Xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class CA extends va{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q_,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ng={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class RA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const PA=new RA;class Nd{constructor(e){this.manager=e!==void 0?e:PA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nd.DEFAULT_MATERIAL_NAME="__DEFAULT";class LA extends Nd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ng.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=oa("img");function l(){u(),ng.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class NA extends Nd{constructor(e){super(e)}load(e,n,i,r){const s=new Qt,o=new LA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class pv extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class DA extends pv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Du=new Mt,ig=new X,rg=new X;class IA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cd,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ig.setFromMatrixPosition(e.matrixWorld),n.position.copy(ig),rg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rg),n.updateMatrixWorld(),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class UA extends IA{constructor(){super(new lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FA extends pv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new UA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Kt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class OA extends $r{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);const og={type:"change"},Dd={type:"start"},mv={type:"end"},ll=new J_,ag=new ji,kA=Math.cos(70*dM.DEG2RAD),bt=new X,rn=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Iu=1e-6;class zA extends OA{constructor(e,n=null){super(e,n),this.state=at.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new jr,this._lastTargetPosition=new X,this._quat=new jr().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sg,this._sphericalDelta=new sg,this._scale=1,this._panOffset=new X,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new X,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HA.bind(this),this._onPointerDown=BA.bind(this),this._onPointerUp=VA.bind(this),this._onContextMenu=YA.bind(this),this._onMouseWheel=WA.bind(this),this._onKeyDown=XA.bind(this),this._onTouchStart=$A.bind(this),this._onTouchMove=qA.bind(this),this._onMouseDown=GA.bind(this),this._onMouseMove=jA.bind(this),this._interceptControlDown=KA.bind(this),this._interceptControlUp=ZA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(og),this.update(),this.state=at.NONE}update(e=null){const n=this.object.position;bt.copy(n).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),r<-Math.PI?r+=rn:r>Math.PI&&(r-=rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ll.origin.copy(this.object.position),ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ll.direction))<kA?this.object.lookAt(this.target):(ag.setFromNormalAndCoplanarPoint(this.object.up,this.target),ll.intersectPlane(ag,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Iu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Iu||this._lastTargetPosition.distanceToSquared(this.target)>Iu?(this.dispatchEvent(og),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){bt.setFromMatrixColumn(n,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,n){this.screenSpacePanning===!0?bt.setFromMatrixColumn(n,1):(bt.setFromMatrixColumn(n,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;bt.copy(r).sub(this.target);let s=bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new He,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function BA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function HA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function VA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mv),this.state=at.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function GA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=at.DOLLY;break;case Ns.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=at.ROTATE}break;case Ns.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Dd)}function jA(t){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function WA(t){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(t.preventDefault(),this.dispatchEvent(Dd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(mv))}function XA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function $A(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=at.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=at.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Dd)}function qA(t){switch(this._trackPointer(t),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=at.NONE}}function YA(t){this.enabled!==!1&&t.preventDefault()}function KA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yo=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim()||"#888888";class QA{constructor(e){this.box=e,this.r=new AA({antialias:!0}),this.r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.appendChild(this.r.domElement),this.scene=new bA,this.cam=new An(50,1,.3,6e3),this.draw=this.draw.bind(this),this.ctl=new zA(this.cam,this.r.domElement),this.ctl.maxPolarAngle=Math.PI*.495,this.ctl.addEventListener("change",this.draw),this.scene.add(new DA(16777215,8226167,.8*Math.PI));const n=new FA(16777215,.6*Math.PI);n.position.set(-60,120,80),this.scene.add(n),this.root=new Bn,this.scene.add(this.root),this.boxG=new Js(1,1,1),this.cylG=new Pd(1,1,1,28),this.sphG=new Ld(1,10,8),this.mats={},this.geoms=[],this.tex=null,this.texSrc=null,this.first=!0,this.camMode="corner",this.inner=null,this.dims=null,this.lay=null,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize()}resize(){const e=this.box.clientWidth,n=this.box.clientHeight;!e||!n||(this.r.setSize(e,n,!1),this.cam.aspect=e/n,this.cam.updateProjectionMatrix(),this.draw())}draw(){this.r.render(this.scene,this.cam)}geo(e){return this.geoms.push(e),e}mat(e,n={}){const i=e+JSON.stringify(n);if(!this.mats[i]){const{basic:r,...s}=n;this.mats[i]=r?new rc({color:new Ze(e),...s}):new CA({color:new Ze(e),...s})}return this.mats[i]}boxAt(e,n,i,r,s,o,a,l,c){const u=new wt(this.boxG,this.mat(l,c));return u.scale.set(r,o,s),u.position.set(n+r/2,a+o/2,i+s/2),e.add(u),u}cylAt(e,n,i,r,s,o,a,l){const c=new wt(this.cylG,this.mat(a,l));return c.scale.set(r,s,r),c.position.set(n,o+s/2,i),e.add(c),c}chair3D(e,n,i,r,s){const o=new Bn,a=qy[s]||"#cccccc";o.position.set(n,0,i),o.rotation.y=-r,this.boxAt(o,-.65,-.65,1.3,1.3,.18,1.42,a),this.boxAt(o,-.72,-.65,.16,1.3,1.7,1.5,a);for(const[l,c]of[[-.55,-.55],[-.55,.45],[.45,-.55],[.45,.45]])this.boxAt(o,l,c,.1,.1,1.42,0,a);e.add(o)}item3D(e,n,i){const[r,s]=n.dims,o=n.def.id,a=new Bn,l=new Bn;a.position.set(n.x+n.w/2,0,n.y+n.h/2),a.rotation.y=-n.rot*Math.PI/180,l.position.set(-r/2,0,-s/2),a.add(l),e.add(a);const c="#fbfbfa",u="#262d36";if(o==="stage")this.boxAt(l,0,0,r,s,2,0,yo("--stage"));else if(o==="dance"){const f=fa(i),d=f.tile;for(let m=0;m<r/d-.01;m++)for(let v=0;v<s/d-.01;v++)this.boxAt(l,m*d,v*d,Math.min(d,r-m*d),Math.min(d,s-v*d),.15,0,f.colors[(m+v)%2]);if((i.acc.dance||{}).wrap){const m=this.cylAt(l,r/2,s/2,Math.min(r,s)*.3,.02,.15,"#c9b37a");m.scale.y=.02}}else if(o==="head"){this.boxAt(l,0,s-3.5,r,2.5,2.5,0,c);const f=n.seats||2;for(let d=0;d<f;d++)this.chair3D(l,(d+.5)*r/f,s-4.45,Math.PI/2,i.chairStyle)}else if(o==="dj")this.boxAt(l,1,2.8,r-2,2,3,0,u),this.boxAt(l,.3,s-1.5,1.2,1.2,4.5,0,u),this.boxAt(l,r-1.5,s-1.5,1.2,1.2,4.5,0,u);else if(o==="buffet"){this.boxAt(l,0,s/2-1.25,r,2.5,2.5,0,c);for(let f=1;f<r-1;f+=2.6)this.boxAt(l,f,s/2-.6,1.8,1.2,.5,2.5,"#b9c0c7")}else if(o==="bar")this.boxAt(l,2,.5,r-4,1.5,3,0,u),this.boxAt(l,1,3,r-2,2.5,3.5,0,"#3a434e");else if(o==="cake")this.cylAt(l,r/2,s/2,2,2.5,0,c),this.cylAt(l,r/2,s/2,.8,1.3,2.5,"#efe4d0");else if(o==="gift")this.boxAt(l,1,1.2,r-2,2.5,2.5,0,c);else if(o==="photo")this.boxAt(l,1,.4,r-2,.4,8,0,"#3a434e"),this.boxAt(l,r/2-.6,s-2.2,1.2,1.2,5,0,u);else if(o==="lounge"){const f="#8e9ba7";this.boxAt(l,2,.6,r-4,2.6,2.6,0,f),this.boxAt(l,1,5.6,2.6,2.6,2.4,0,f),this.boxAt(l,r-3.6,5.6,2.6,2.6,2.4,0,f),this.boxAt(l,r/2-2.5,4.6,5,2.4,1.4,0,"#5d4b3a")}else o==="highboy"&&this.cylAt(l,r/2,s/2,1.25,3.5,0,c)}unit3D(e,n,i,r){const s=new Bn;s.position.set(n.x,0,n.y),s.rotation.y=-(n.rot||0)*Math.PI/180,e.add(s);const o="#fbfbfa";if(i.kind==="round"){this.cylAt(s,0,0,i.r,2.5,0,o);const a=n.seats??r.seatsPer,l=i.r+.95;for(let c=0;c<a;c++){const u=c*2*Math.PI/a-Math.PI/2;this.chair3D(s,l*Math.cos(u),l*Math.sin(u),u+Math.PI,r.chairStyle)}}else if(i.kind==="banquet"){this.boxAt(s,-4,-1.25,8,2.5,2.5,0,o);for(const[a,l]of M_.slice(0,n.seats??8))this.chair3D(s,a,l*2.15,l<0?Math.PI/2:-Math.PI/2,r.chairStyle)}else i.kind==="chair"?this.chair3D(s,0,0,Math.PI,r.chairStyle):this.cylAt(s,0,0,i.r||1.25,3.5,0,o)}build(e,n,i,r){const s=e[n]||e[0],o=this.root;for(;o.children.length;)o.remove(o.children[0]);Object.values(this.mats).forEach(v=>v.dispose()),this.mats={},this.geoms.forEach(v=>v.dispose()),this.geoms=[],this.scene.background=new Ze(yo("--paper"));const a=s.st,l=!!i,c=pa(a,l);this.site={l:c.l,w:c.w,multi:e.length>1};let u;l?(this.texSrc!==i&&(this.tex&&this.tex.dispose(),this.tex=new NA().load(i,this.draw),this.tex.colorSpace=gn,this.texSrc=i),u=new rc({map:this.tex}),this.mats._photo=u):u=this.mat(yo(a.surface==="grass"||a.surface==="gravel"?"--grass":"--hard"));const f=new wt(this.geo(new Ir(c.l,c.w)),u);f.rotation.x=-Math.PI/2,f.position.set(c.l/2,0,c.w/2),o.add(f);const d=new wt(this.geo(new Ir(c.l*4+400,c.w*4+400)),this.mat(yo("--soft")));d.rotation.x=-Math.PI/2,d.position.set(c.l/2,-.05,c.w/2),o.add(d);for(const v of e){const g=this.buildTent(v.st,v.lay,l,r);v===s&&(this.inner=g.T,this.dims=g.dims,this.lay=v.lay)}const m=this.first||this.lastActive!==n;this.first=!1,this.lastActive=n,m?this.setCam(this.camMode):this.draw()}buildTent(e,n,i,{roof:r,walls:s}){const o=this.root,{W:a,L:l,sh:c}=n,u=e.tentType,f=Hr(e,n,i),d=(e.tentAngle||0)*Math.PI/180,m=n.T.stake,v=new Bn;v.position.set(f.x+l/2,0,f.y+a/2),v.rotation.y=-d,o.add(v);const g=new Bn;g.position.set(-l/2,0,-a/2),v.add(g);const p=u==="structure"?a>=60?12:10:8,h=u==="frame"||u==="cleartop"?p+a*.25:u==="structure"?p+a*.2:u==="pole"?p+a*.5:p+a*.45,_=[...new Set(n.poles.filter(U=>U.inner).map(U=>Ke(U.x)))].sort((U,W)=>U-W),y=_.length>1?_[1]-_[0]:l,S=u==="pole"||u==="sailcloth",T=U=>a/2-ei(c,U),b=(U,W)=>{const $=T(U),j=$<.01?0:Math.max(0,1-Math.abs(W-a/2)/$);if(S){const O=c.oval?1:Math.max(0,Math.min(1,U/(a*.5),(l-U)/(a*.5)));let P=1e9;for(const Z of _)P=Math.min(P,Math.abs(U-Z));const k=_.length?.55+.45*Math.pow(Math.max(0,1-P/(y/2)),1.5):1;return p+(h-p)*Math.pow(j,u==="sailcloth"?1.8:1.3)*Math.min(O,k)}return p+(h-p)*j},C=u==="sailcloth"?"#f7f1e3":"#ffffff",N=u==="cleartop",w=this.mat(N?"#d7ebf7":C,{transparent:!0,opacity:N?.2:.88,side:Vn,depthWrite:!N});if(r){const U=Math.max(8,Math.round(l/1.5)),W=Math.max(8,Math.round(a/1.5)),$=[],j=[];for(let P=0;P<=W;P++)for(let k=0;k<=U;k++){const Z=k*l/U,se=ei(c,Z),fe=se+P*(a-2*se)/W;$.push(Z,b(Z,fe),fe)}for(let P=0;P<W;P++)for(let k=0;k<U;k++){const Z=P*(U+1)+k,se=Z+1,fe=Z+U+1,Oe=fe+1;j.push(Z,fe,se,se,fe,Oe)}const O=this.geo(new Rn);if(O.setAttribute("position",new Xt($,3)),O.setIndex(j),O.computeVertexNormals(),g.add(new wt(O,w)),!S)for(const P of[0,l]){const k=this.geo(new Rn);k.setAttribute("position",new Xt([P,p,0,P,h,a/2,P,p,a],3)),k.computeVertexNormals(),g.add(new wt(k,w))}}const M="#b9c0c6";for(const U of n.poles)U.inner?this.cylAt(g,U.x,U.y,.3,b(U.x,U.y),0,"#d9d2c3"):this.cylAt(g,U.x,U.y,.17,p,0,M);if(S||(this.boxAt(g,0,-.1,l,.2,.3,p-.3,M),this.boxAt(g,0,a-.1,l,.2,.3,p-.3,M),this.boxAt(g,0,a/2-.15,l,.3,.3,h-.3,M)),s&&e.walls!=="none"){const U={solid:.92,window:.62,clear:.16}[e.walls],W=this.mat(e.walls==="clear"?"#d7ebf7":C,{transparent:!0,opacity:U,side:Vn,depthWrite:e.walls==="solid"});if(c.oval)for(const $ of w_(c,n.exits)){const j=[],O=[];$.forEach(([k,Z],se)=>{if(j.push(k,0,Z,k,p,Z),se){const fe=2*(se-1);O.push(fe,fe+2,fe+1,fe+1,fe+2,fe+3)}});const P=this.geo(new Rn);P.setAttribute("position",new Xt(j,3)),P.setIndex(O),P.computeVertexNormals(),g.add(new wt(P,W))}else for(const $ of["top","bottom","left","right"]){const j=$==="top"||$==="bottom",O=j?l:a,P=n.exits.filter(se=>se.side===$).map(se=>[se.c-3,se.c+3]).sort((se,fe)=>se[0]-fe[0]);let k=0;const Z=[];for(const[se,fe]of P)Z.push([k,se]),k=fe;Z.push([k,O]);for(const[se,fe]of Z){if(fe-se<.05)continue;const Oe=new wt(this.geo(new Ir(fe-se,p)),W);j?Oe.position.set((se+fe)/2,p/2,$==="top"?0:a):(Oe.rotation.y=Math.PI/2,Oe.position.set($==="left"?0:l,p/2,(se+fe)/2)),g.add(Oe)}}}for(const U of n.exits){const W=p-.9;U.side==="top"||U.side==="bottom"?this.boxAt(g,U.c-.5,U.p-.08,1,.16,.4,W,"#2f9a5c",{basic:!0}):this.boxAt(g,U.p-.08,U.c-.5,.16,1,.4,W,"#2f9a5c",{basic:!0})}for(const U of n.items)this.item3D(g,U,e);for(const U of n.units)this.unit3D(g,U,Ft[U.type]||n.S,e);const I=this.mat(yo("--light"),{basic:!0}),q=e.lightStyle||"swag";if(e.stringLights&&q!=="swag"){const U=n.poles.filter($=>!$.inner),W=U.length>1?ia(c)/U.length:10;for(const $ of T_(c,Math.max(12,Math.round(ia(c)/2.5)),-ec)){let j=1e9;for(const k of U)j=Math.min(j,Math.hypot(k.x-$.x,k.y-$.y));const O=Math.sin(Math.PI/2*Math.min(1,j/(W/2)))*.9,P=new wt(this.sphG,I);P.scale.setScalar(.16),P.position.set($.x,p-.4-O,$.y),g.add(P)}}if(e.stringLights&&q!=="perimeter"){const U=Math.max(1,Math.round(l/10));for(let W=0;W<U;W++){const $=W*l/U,j=(W+1)*l/U,O=W%2?a-ei(c,$):ei(c,$),P=(W+1)%2?a-ei(c,j):ei(c,j),k=Math.hypot(j-$,P-O),Z=Math.max(2,Math.round(k/2.5));for(let se=0;se<=Z;se++){const fe=se/Z,Oe=$+(j-$)*fe,te=O+(P-O)*fe,le=Math.sin(Math.PI*fe)*1.2,ye=new wt(this.sphG,I);ye.scale.setScalar(.16),ye.position.set(Oe,b(Oe,te)-.5-le,te),g.add(ye)}}}for(const{x:U,y:W}of n.chands){const $=b(U,W),j=new wt(this.sphG,I);j.scale.setScalar(.9),j.position.set(U,$-3.6,W),g.add(j),this.boxAt(g,U-.03,W-.03,.06,.06,2.7,$-2.7,M)}if(e.climate.startsWith("heat")){const U=md(e,n.area),W=Math.ceil(U/2),$=U-W;for(let j=0;j<W;j++)this.boxAt(g,(j+1)*l/(W+1)-1.5,a+3,3,4,3,0,"#a8443b");for(let j=0;j<$;j++)this.boxAt(g,(j+1)*l/($+1)-1.5,-7,3,4,3,0,"#a8443b")}return e.generator&&this.boxAt(g,l+m+20,a/2-2,7,4,4,0,"#2d343d"),{T:g,dims:{L:l,W:a,peak:h}}}setCam(e){if(this.camMode=e,!this.inner||!this.dims)return;const{L:n,W:i,peak:r}=this.dims,s=Math.max(n,i);this.root.updateMatrixWorld(!0);const o=(c,u,f)=>this.inner.localToWorld(new X(c,u,f));let a,l;if(e==="top"&&this.site&&this.site.multi){const{l:c,w:u}=this.site;a=new X(c/2,Math.max(c,u)*1.1+30,u/2+.5),l=new X(c/2,0,u/2)}else if(e==="top")a=o(n/2,s*1.15+r+20,i/2+.5),l=o(n/2,0,i/2);else if(e==="eye"){const c=this.lay.exits.find(p=>p.main)||this.lay.exits[0],u=this.lay.items.find(p=>p.def.id==="dance")||this.lay.items.find(p=>p.def.id==="stage"),f=u?u.x+u.w/2:n/2,d=u?u.y+u.h/2:i/2,m={bottom:[0,-2.5],top:[0,2.5],left:[2.5,0],right:[-2.5,0]},[v,g]=c?m[c.side]:[0,0];a=c?o(c.x+v,5.5,c.y+g):o(n/2,5.5,i-2.5),l=o(f,3.5,d)}else a=o(-n*.35,s*.5+r,i+s*.75),l=o(n/2,2,i/2);this.cam.position.copy(a),this.ctl.target.copy(l),this.ctl.update(),this.draw()}dispose(){this.ro.disconnect(),this.ctl.dispose(),Object.values(this.mats).forEach(e=>e.dispose()),this.geoms.forEach(e=>e.dispose()),[this.boxG,this.cylG,this.sphG].forEach(e=>e.dispose()),this.tex&&this.tex.dispose(),this.r.dispose(),this.r.domElement.remove()}}const JA=[["corner","Corner"],["top","Overhead"],["eye","Eye level"]];function eb({tents:t,active:e,photoSrc:n}){const i=ke.useRef(null),r=ke.useRef(null),[s,o]=ke.useState("Loading 3D view…"),[a,l]=ke.useState("corner"),[c,u]=ke.useState(!0),[f,d]=ke.useState(!0);ke.useEffect(()=>{let v;try{v=new QA(i.current)}catch{o("The 3D view needs WebGL, which is turned off in this browser.");return}return r.current=v,o(null),()=>{v.dispose(),r.current=null}},[]),ke.useEffect(()=>{const v=setTimeout(()=>{const g=r.current;g&&g.build(t,e,n,{roof:c,walls:f})},180);return()=>clearTimeout(v)},[t,e,n,c,f]);const m=v=>{l(v),r.current&&r.current.setCam(v)};return x.jsxs("section",{className:"card",children:[x.jsxs("div",{className:"toolbar",children:[x.jsx("h2",{className:"t3",children:"3D view"}),x.jsx("div",{className:"seg",role:"group","aria-label":"Camera",children:JA.map(([v,g])=>x.jsx("button",{"aria-pressed":a===v,onClick:()=>m(v),children:g},v))}),x.jsxs("label",{className:"chk",children:[x.jsx("input",{type:"checkbox",checked:c,onChange:v=>u(v.target.checked)})," Roof"]}),x.jsxs("label",{className:"chk",children:[x.jsx("input",{type:"checkbox",checked:f,onChange:v=>d(v.target.checked)})," Sidewalls"]}),x.jsx("span",{className:"hint hint3",children:"Drag to orbit · scroll or pinch to zoom · right-drag to pan"})]}),x.jsx("div",{className:"stage3d",ref:i,children:s&&x.jsx("p",{className:"hint msg3d",children:s})})]})}function tb(t,e){const{W:n,L:i,S:r}=e,s=Math.round(e.area),o=Math.round(e.perim),a=e.poles.filter(p=>!p.inner).length,l=e.poles.filter(p=>p.inner).length,c=[],u=p=>c.push({grp:p}),f=(p,h,_="")=>c.push({item:p,qty:h,note:_}),d=p=>e.items.filter(h=>h.def.id===p);if(u("Tent"),f(`${n}' × ${i}' ${e.T.label}${e.sh.oval?" (oval)":""}`,1,`${s.toLocaleString()} sq ft${e.sh.oval?" floor inside the oval":""} · ${a} perimeter ${e.sh.oval?"poles":"legs"}${l?` · ${l} center poles`:""}`),t.walls!=="none"&&f(`Sidewalls, ${{solid:"solid white",window:"cathedral window",clear:"clear"}[t.walls]}`,Math.ceil(o/20),`20' sections · ${o} lin ft perimeter`),t.surface==="grass"||t.surface==="gravel"?f("Stakes and ratchet straps",a*2,"2 per leg; locate utilities (call 811) before staking"):f("Ballast (water barrels or concrete blocks)",a,"1 per leg minimum; size weight to the tent's wind load rating"),e.exits.length){const p=e.exits.filter(h=>h.main).length;f("Lighted exit signs",e.exits.length,`${e.exits.length} openings × 72"${p?` (${p} entrance${p>1?"s":""})`:""} for ${t.guests} occupants`)}if(r.kind==="chair")u("Seating"),f(`${t.chairStyle} chairs`,e.units.length,"Ceremony rows with 5' center aisle");else if(e.units.length+e.headSeats>0){u("Seating");const p=[...new Set(e.units.map(_=>_.type))].map(_=>[Ft[_],e.units.filter(y=>y.type===_)]);for(const[_,y]of p){const S=y.reduce((b,C)=>b+C.seats,0),T=y.some(b=>b.seats!==y[0].seats);f(_.table,y.length,T?`${S} seats in all; chair counts vary by table`:`${y[0].seats} guests each`)}const h=e.seats+e.headSeats;h&&f(`${t.chairStyle} chairs`,h,e.headSeats?`Includes ${e.headSeats} at the head table`:"");for(const[_,y]of p)f(`Tablecloths, ${_.linen}`,y.length);r.kind!=="none"&&f("Napkins",t.guests)}const m=[];for(const p of d("dance")){const h=fa(t),_=t.acc.dance,y=h.sizes.some(T=>zo(T).join()===p.dims.join()),S=_.size==="custom"&&((_.cl||20)%4||(_.cw||20)%4);m.push([`${h.label} dance floor, ${p.dims[0]}' × ${p.dims[1]}'`,1,`${h.desc} · ${p.dims[0]/4*(p.dims[1]/4)} sections (4' × 4')${S?" · rounded up to whole sections":""}${y?"":`; custom size, confirm with Knights (stock sizes: ${h.sizes.map(T=>T.replace("x","×")).join(", ")})`}`]),_.wrap&&m.push(["Dance floor vinyl wrap",1,"Custom graphic, full or partial coverage"])}for(const p of d("stage"))m.push([`Stage ${p.dims[0]}' × ${p.dims[1]}'`,Math.ceil(p.dims[0]*p.dims[1]/32),`4' × 8' decks${p.dims[0]%4||p.dims[1]%4?" (size rounds up to full decks)":""} · ${p.dims[0]+2*p.dims[1]} lin ft skirting · steps`]);for(const p of d("head"))m.push([p.seats===2?"Sweetheart table":`Head table, ${p.seats} seats`,p.seats===2?1:Math.ceil(p.dims[0]/8),p.seats===2?"With linen":"8' banquet tables, linens and skirting"]);d("buffet").length&&m.push(["8' banquet tables for buffet",d("buffet").length*2,`${d("buffet").length} double-sided line${d("buffet").length>1?"s":""}, linens`]),d("bar").length&&m.push(["Bar with back bar",d("bar").length,"About 1 bar per 150 guests"]),d("dj").length&&m.push(["DJ table",1,"6' table, black linen, power drop"]),d("cake").length&&m.push(['Cake table, 48" round',1,"With linen"]),d("gift").length&&m.push(["Gift & card table, 6'",1,"Near the entrance"]),d("photo").length&&m.push(["Photo booth area",1,"10' × 10' with backdrop"]),d("lounge").length&&m.push(["Lounge furniture set",1,"Sofa, 2 chairs, coffee table"]),d("highboy").length&&m.push(['Cocktail tables, 30" highboy',d("highboy").length,'42" tall · 120" round cinched linens']),m.length&&(u("Floor items"),m.forEach(p=>f(...p)));const v=[];if(t.stringLights){const p=t.lightStyle||"swag",h=p==="both";if(p!=="perimeter"){const _=Math.max(1,Math.round(i/10)),y=Math.hypot(n,i/_);v.push([`Bistro string lights${h?", swag":""}`,Math.ceil(_*y/10)*10+" ft",`${_} zigzag runs across the ceiling`])}if(p!=="swag"){const _=ia(e.sh,-ec);v.push([`Bistro string lights${h?", perimeter":""}`,Math.ceil(_*1.1/10)*10+" ft",`Around the inside of the ${e.sh.oval?"oval ":""}perimeter, ${ec}' in from the walls · includes 10% for drape between poles`])}}e.chands.length&&v.push(["Chandeliers",e.chands.length,t.chandList?"Placed as shown on the plan":"Centerline, one per 20' bay"]),t.uplights&&v.push(["LED uplights",Math.ceil(o/15),"Around the perimeter, about every 15'"]);const g=md(t,s);return t.climate==="fans"&&v.push(["Industrial fans",g,"About 1 per 600 sq ft"]),t.climate.startsWith("heat")&&v.push(["Forced-air heaters, 150,000 BTU",g,`Estimate for ${t.climate==="heat-cold"?"cold":"cool"} weather; set outside with ducts`]),t.generator&&v.push(["Generator",1,"Size to the load (lights, DJ, heaters); place 20'+ from the tent"]),v.length&&(u("Lighting, climate & power"),v.forEach(p=>f(...p))),c}function gv(t){const e=t.length>1;return t.flatMap(({st:n,lay:i})=>tb(n,i).map(r=>r.grp&&e?{...r,grp:`${n.name} · ${r.grp}`,tent:!0}:r))}function nb(t){const e=t[0].st,n=t.reduce((r,s)=>r+s.st.guests,0),i=[`${e.siteName||"Tent layout"}${e.address?` · ${e.address}`:""}`,`${e.siteL}' x ${e.siteW}' ${e.surface} site · ${n} guests`];for(const{st:r,lay:s}of t)i.push(`${t.length>1?`${r.name}: `:""}${r.guests} guests · ${s.W}' x ${s.L}' ${s.T.label}`);i.push("");for(const r of gv(t))i.push(r.grp?`
${r.grp.toUpperCase()}`:`${r.qty}  ${r.item}${r.note?`  (${r.note})`:""}`);return i.join(`
`).replace(/\n{3,}/g,`

`)}function ib(t,e,n){const{W:i,L:r,T:s,S:o}=e,a=e.area,l=[];if(o.kind==="none")a<t.guests*ko&&l.push(["bad",`${Math.round(a)} sq ft is tight for ${t.guests} standing guests. Plan on at least ${ko}–8 sq ft per guest (${t.guests*ko}+ sq ft); pick a larger tent.`]);else if(e.manual){const g=e.seated-e.seats;g>0?l.push(["warn",`${g} guest${g>1?"s":""} without a seat: the plan has ${e.seats} seats for ${e.seated} guests${e.headSeats?" (plus the head table)":""}. Add a table or chairs, or reset tables to auto.`]):g<0&&l.push(["info",`${-g} more seat${g<-1?"s":""} than guests. Fine for extra room; remove chairs or tables to trim the rental.`])}else e.capacity<e.needed&&l.push(["bad",`Only ${e.capacity} of ${e.needed} ${o.kind==="chair"?"chairs":"tables"} fit. Choose a larger tent, switch spacing to Tight, or turn off a floor item.`]);const c=Mc(t.guests),u=e.exits.length;u<c&&l.push(["bad",`${t.guests} guests need at least ${c} exits under the fire code (IFC Ch. 31, tents); the plan has ${u}. Add ${c-u} more under Entrances & exits.`]),u&&!e.exits.some(g=>g.main)&&l.push(["warn","No opening is marked as the entrance. Set one to “Entrance” so guests know where to come in."]),e.exits.some((g,p)=>e.exits.some((h,_)=>_>p&&Math.hypot(g.x-h.x,g.y-h.y)<7))&&l.push(["warn","Two openings overlap or sit side by side. Spread exits apart so one blocked doorway does not block both."]);const d=e.items.filter(g=>!g.fit);if(d.length&&l.push(["bad",`${[...new Set(d.map(g=>g.def.label))].join(", ")} ${d.length>1?"do":"does"} not fit cleanly. It is outlined in red; drag it somewhere open or pick a larger tent.`]),!pd(t,i,r,s.stake))l.push(["bad",`The tent plus its ${s.stake}' stake and guy line area is ${r+2*s.stake}' × ${i+2*s.stake}', which is larger than the ${t.siteL}' × ${t.siteW}' site.`]);else if(n)l.push(["info",`On the site plan, keep buildings and lot lines outside the dashed 20' clearance ring (IFC 3103.8). ${t.photo.calibrated?"":"Set the photo scale first so the ring is accurate."}`]);else{const g=Hr(t,e,n),p=g.x+r/2,h=g.y+i/2,{ex:_,ey:y}=da(t,r+2*s.stake,i+2*s.stake),S=Math.min(p-_,h-y,t.siteL-p-_,t.siteW-h-y);S<20&&l.push(["warn",`Tent sits ${Math.max(0,Math.floor(S))}' from the site edge. The fire code (IFC 3103.8) asks for 20' from lot lines and buildings; your local fire marshal can confirm exceptions.`])}const m=t.acc.dance||{};if(m.on&&m.size==="auto"){const g=fa(t),p=zo(g.sizes[g.sizes.length-1]);p[0]*p[1]<Ph(t)&&l.push(["warn",`About ${Ph(t)} sq ft of dance floor suits ${t.guests} guests. The largest ${g.label.toLowerCase()} floor is ${p[0]}' × ${p[1]}' (${p[0]*p[1]} sq ft). Pick a finish with larger sizes or enter a custom size.`])}const v=e.units.filter(g=>g.bad).length;return v&&l.push(["warn",`${v} ${o.kind==="chair"?"chair":"table"}${v>1?"s":""} overlap${v>1?"":"s"} another item, a pole or the tent wall (outlined in red). Drag ${v>1?"them":"it"} to open floor.`]),e.ok&&!e.auto&&l.push(["ok",`Everything fits in the ${i}' × ${r}'.`]),e.auto&&e.ok&&l.push(["ok",`${i}' × ${r}' is the smallest ${s.label.toLowerCase()} that fits this layout.`]),l.push(["info",o.kind==="none"?`${(a/t.guests).toFixed(1)} sq ft per guest overall. Standing receptions usually need ${o.sqft} sq ft per guest, more with buffets and bars.`:`${(a/t.guests).toFixed(1)} sq ft per guest overall. Seating alone usually needs ${o.sqft} sq ft per guest for ${o.label.toLowerCase()}.`]),a>400&&l.push(["info","Tents over 400 sq ft usually need a permit (700 sq ft for open-sided frame tents). Check with the local building or fire department."]),(t.surface==="asphalt"||t.surface==="concrete")&&l.push(["info",`On ${t.surface}, plan for ballast. Staking needs the owner's approval and patching afterward.`]),(t.surface==="grass"||t.surface==="gravel")&&l.push(["info","Call 811 to mark underground utilities before staking."]),t.climate.startsWith("heat")&&l.push(["info","Keep heaters and fuel outside the tent and at the clearances listed by the heater manufacturer."]),l}function cl({k:t,v:e,s:n,pill:i}){return x.jsxs("div",{className:"stat",children:[x.jsx("span",{className:"k",children:t}),x.jsx("span",{className:"v",children:e}),x.jsx("span",{className:"s",children:n}),i&&x.jsx("span",{className:`pill ${i[0]}`,children:i[1]})]})}function rb({st:t,lay:e,count:n=1}){const{W:i,L:r,T:s,S:o}=e,a=Math.round(e.area),l=o.kind==="chair",c=o.kind==="none",u=n>1,f=e.manual?Math.max(0,e.seated-e.seats):e.needed-Math.min(e.capacity,e.needed),d=c?e.area>=t.guests*ko?["ok","Standing room"]:["bad","Too tight"]:f>0?["bad",e.manual?`${f} without a seat`:`Short ${f}`]:["ok",e.manual?"Set by you":"Everyone seated"];return x.jsxs("div",{className:"stats",children:[x.jsx(cl,{k:u?t.name:"Tent",v:`${i}' × ${r}'`,s:`${s.label}${e.sh.oval?" (oval)":""} · ${a.toLocaleString()} sq ft`,pill:e.auto?["ok","Auto size"]:["warn","Size set by you"]}),x.jsx(cl,{k:"Seating",v:c?"No seating":l?`${e.units.length} chairs`:`${e.units.length} tables`,s:c?`standing room for ${t.guests} guests`:l?`for ${t.guests} guests`:`${e.seats} seats${e.headSeats?` + ${e.headSeats} at head table`:""}`,pill:d}),x.jsx(cl,{k:"Space per guest",v:(a/t.guests).toFixed(1),s:`sq ft · guide ${o.sqft} for seating`}),x.jsx(cl,{k:"Site",v:`${t.siteL}' × ${t.siteW}'`,s:`${u?`${n} tents · `:""}${Mc(t.guests)} exits required · ${t.surface}`,pill:pd(t,i,r,s.stake)?["ok","Tent fits site"]:["bad","Tent too big for site"]})]})}function sb({st:t,lay:e,view:n,tents:i}){const{W:r,L:s,T:o}=e,a=i&&i.length>1,l=new Date().toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}),c=a?i.reduce((f,d)=>f+d.st.guests,0):t.guests,u=[["Event / site",t.siteName||"Untitled layout"],["Location",`${t.address||Ch[t.sitePreset].label} · ${t.surface}`],["Guests",a&&n==="site"?`${c} total`:t.guests],["Tent",a&&n==="site"?`${i.length} tents`:`${a?`${t.name} · `:""}${r}' × ${s}' ${o.label.split(" (")[0]}`],["Date",l],["Sheet",n==="tent"?"L-1":"L-2"]];return x.jsxs("div",{className:"titleblock",children:[u.map(([f,d])=>x.jsxs("div",{children:[x.jsx("div",{className:"k",children:f}),x.jsx("div",{className:"v",children:d})]},f)),x.jsx("div",{className:"foot",children:"For planning only. Poles, exits and table counts are typical. Field-verify site, utilities, slope and code clearances before install."})]})}function ob({tents:t}){const[e,n]=ke.useState("Copy list"),[i,r]=ke.useState(null),s=gv(t),o=()=>{const a=nb(t),l=()=>{r(a),n("Select and copy below")};try{navigator.clipboard.writeText(a).then(()=>{n("Copied"),r(null),setTimeout(()=>n("Copy list"),1600)},l)}catch{l()}};return x.jsxs("section",{className:"card",children:[x.jsxs("div",{className:"cardhead",children:[x.jsxs("h2",{children:["Rental list",t.length>1?` · ${t.length} tents`:""]}),x.jsx("button",{className:"btn",onClick:o,children:e})]}),x.jsx("div",{className:"tablewrap",children:x.jsxs("table",{children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{children:"Item"}),x.jsx("th",{className:"q",children:"Qty"}),x.jsx("th",{children:"Notes"})]})}),x.jsx("tbody",{children:s.map((a,l)=>a.grp?x.jsx("tr",{className:"grp",children:x.jsx("td",{colSpan:3,children:a.grp})},l):x.jsxs("tr",{children:[x.jsx("td",{children:a.item}),x.jsx("td",{className:"q",children:a.qty}),x.jsx("td",{className:"n",children:a.note})]},l))})]})}),i!=null&&x.jsx("textarea",{className:"copyfall",readOnly:!0,"aria-label":"Rental list text",value:i,autoFocus:!0,onFocus:a=>a.target.select()})]})}function ab({st:t,lay:e,ph:n,tents:i}){const r=i&&i.length>1,s=r?pS(i.map(c=>c.st),i.map(c=>c.lay),n):[],o=ib(t,e,n).map(([c,u])=>[c,r?`${t.name}: ${u}`:u]),a={bad:0,warn:1,ok:2,info:3},l=[...s,...o].sort((c,u)=>a[c[0]]-a[u[0]]);return x.jsxs("section",{className:"card",children:[x.jsx("div",{className:"cardhead",children:x.jsx("h2",{children:"Checks & notes"})}),x.jsx("ul",{className:"notes",children:l.map(([c,u],f)=>x.jsx("li",{className:c,children:u},f))})]})}function lb(){const t=Sc("tlp-current"),e=L_(t&&(t.acc||t.tents)?t:null);let n=null;if(e.photo){try{n=localStorage.getItem("tlp-photo")}catch{}n||(e.photo=null)}return{model:e,photo:n}}function Uu(t){try{t?localStorage.setItem("tlp-photo",t):localStorage.removeItem("tlp-photo")}catch{}}function cb(){const[t]=ke.useState(lb),[e,n]=ke.useState(t.model),[i,r]=ke.useState(t.photo),[s,o]=ke.useState("tent"),[a,l]=ke.useState(null),[c,u]=ke.useState(null),[f,d]=ke.useState(!1),m=ke.useRef(null),v=ke.useRef(null),g=!!(e.photo&&i),p=e.active,h=ke.useMemo(()=>e.tents.map((D,L)=>Dr(e,L)),[e]),_=ke.useMemo(()=>h.map(D=>ra(D)),[h]),y=ke.useMemo(()=>h.map((D,L)=>({st:D,lay:_[L]})),[h,_]),S=h[p],T=_[p];ke.useEffect(()=>{Sc("tlp-current",e)},[e]);const b=ke.useCallback(D=>n(L=>{const G=jn(L),re=Dr(G,G.active);return D(re),aS(G,G.active,re),G}),[]),C=ke.useCallback(D=>n(L=>{const G=jn(L);return D(G),G}),[]),N=D=>{o(D),l(null),D!=="site"&&u(null)},w=D=>{D!==p&&(C(L=>{L.active=D}),l(null))},M=()=>{const D=vd(S,T,g);return{x:D.cx,y:D.cy}},I=D=>{const L=M();C(G=>{const re=D?{...jn(G.tents[G.active]),name:`${G.tents[G.active].name} (copy)`}:lS(G.tents.length+1);G.tents.push(re),G.active=G.tents.length-1,N_(G,G.active,g,L)}),l(null)},q=D=>{C(L=>{L.tents.length<2||(L.tents.splice(D,1),L.active=dt(L.active>D?L.active-1:L.active,0,L.tents.length-1))}),l(null)},U=()=>C(D=>nu(D,g)),W=`${T.W}x${T.L}`,$=D=>{D.tentSize==="auto"&&(D.tentSize=W)},j=D=>{if(D.tables&&D.tables.manual&&D.tables.t===W&&D.tables.s===Ao(D))return;$(D);const L=Ao(D),G=D.tables&&D.tables.t===W&&D.tables.s===L?D.tables.pts:[];D.tables={t:W,s:L,pts:[...T.units.map(re=>({x:re.x,y:re.y,rot:re.rot||0,type:re.type})),...G.slice(T.units.length)]}},O=D=>b(L=>{L.exits||(L.exits=R_(T)),D(L.exits,L)}),P=a&&a.startsWith("x:")?+a.slice(2):-1,k=D=>{O(L=>{L.splice(D,1)}),l(null)},Z=D=>b(L=>{L.chandList||(L.chandList=b_(T)),D(L.chandList,L)}),se=a&&a.startsWith("c:")?+a.slice(2):-1,fe=D=>{Z(L=>{L.splice(D,1)}),l(null)},Oe=(D,L,G)=>{const re=rS(T.sh,L,G);Z(ue=>{ue[D]&&(ue[D]={fx:re.x/T.L,fy:re.y/T.W})})},te=D=>{D&&s!=="tent"&&(o("tent"),u(null)),l(D)},le=D=>{D.tables&&D.tables.manual&&D.tables.t===W&&D.tables.s===Ao(D)||($(D),D.tables={t:W,s:Ao(D),manual:!0,pts:T.units.map(L=>({x:L.x,y:L.y,rot:L.rot||0,type:L.type,seats:L.seats}))})},ye=a&&a.startsWith("u:")?+a.slice(2):-1,_e=D=>{const L=typeof D=="string"?D:T.base;if(T.S.kind==="none"||!Ft[L])return;const G=(T.freeSpots[L]||[])[0]||{x:T.L/2,y:T.W/2},re=T.S.kind==="chair"?1:L===T.base?T.per:Ft[L].def;b(ue=>{le(ue),ue.tables.pts.push({x:G.x,y:G.y,rot:0,type:L,seats:re})}),s!=="tent"&&(o("tent"),u(null)),l("u:"+T.units.length)},Ue=D=>{T.units[D]&&(b(L=>{le(L),L.tables.pts.splice(D,1)}),l(null))},Fe=(D,L)=>{if(!T.units[D])return;const G=Ml[T.units[D].type]||12;L<0||L>G||b(re=>{le(re),re.tables.pts[D].seats=L})},ze=(D,L)=>{const G=T.units[D];!G||!Ml[L]||G.type===L||b(re=>{le(re),re.tables.pts[D]={...re.tables.pts[D],type:L,seats:Math.min(G.seats,Ml[L])}})},qe=()=>{b(D=>{D.tables=null,Object.keys(D.pos).length||(D.tentSize="auto")}),l(null)},$e=(D,L,G,re)=>{const{hx:ue,hy:ge}=Ft[T.units[L].type]||T.S;D.tables.pts[L]={...D.tables.pts[L],x:dt(G,ue,T.L-ue),y:dt(re,ge,T.W-ge)}},tt=D=>{const L=m.current,G=L.createSVGPoint();return G.x=D.clientX,G.y=D.clientY,G.matrixTransform(L.getScreenCTM().inverse())},z=D=>{const L=m.current;if(c&&s==="site"){const F=tt(D),me={x:F.x,y:F.y};u(Q=>({pts:Q.pts.length>=2?[me]:[...Q.pts,me]}));return}const G=D.target.closest("[data-chand]");if(G){const F=+G.dataset.chand,me=T.chands[F];if(!me)return;const Q=tt(D);v.current={chand:F,ox:me.x,oy:me.y,px:Q.x,py:Q.y,moved:!1},l("c:"+F),L.setPointerCapture(D.pointerId),d(!0),D.preventDefault();return}const re=D.target.closest("[data-exit]");if(re){const F=+re.dataset.exit;if(!T.exits[F])return;const me=tt(D);v.current={exit:F,px:me.x,py:me.y,moved:!1},l("x:"+F),L.setPointerCapture(D.pointerId),d(!0),D.preventDefault();return}const ue=D.target.closest("[data-unit]");if(ue){const F=+ue.dataset.unit,me=T.units[F];if(!me)return;const Q=tt(D);v.current={unit:F,ox:me.x,oy:me.y,px:Q.x,py:Q.y,moved:!1},l("u:"+F),L.setPointerCapture(D.pointerId),d(!0),D.preventDefault();return}const ge=D.target.closest("[data-key]");if(!ge){l(null);return}const Ie=ge.dataset.key,Ce=tt(D);if(Ie.startsWith("__tent")){const F=+(Ie.split(":")[1]||p),me=Hr(h[F],_[F],g);F!==p&&C(Q=>{Q.active=F}),v.current={key:"__tent",ox:me.x,oy:me.y,px:Ce.x,py:Ce.y,moved:!1},l("__tent"),L.setPointerCapture(D.pointerId),d(!0),D.preventDefault();return}const We=T.items.find(F=>F.key===Ie);We&&(v.current={key:Ie,ox:We.x,oy:We.y,px:Ce.x,py:Ce.y,moved:!1},l(Ie),L.setPointerCapture(D.pointerId),d(!0),D.preventDefault())},J=D=>{const L=v.current;if(!L)return;const G=tt(D),re=G.x-L.px,ue=G.y-L.py;if(!L.moved&&Math.hypot(re,ue)<.4)return;if(L.chand!=null){L.moved=!0,Oe(L.chand,Qn(L.ox+re),Qn(L.oy+ue));return}if(L.exit!=null){L.moved=!0;const{side:Ie,f:Ce}=Zy(T.sh,G.x,G.y);O(We=>{We[L.exit]&&(We[L.exit]={...We[L.exit],side:Ie,f:Ce})});return}if(L.unit!=null){const Ie=!L.moved;L.moved=!0,b(Ce=>{(Ie||!Ce.tables)&&j(Ce),$e(Ce,L.unit,Qn(L.ox+re),Qn(L.oy+ue))});return}if(L.moved=!0,L.key==="__tent"){b(Ie=>{Ie.tentPos={x:Qn(L.ox+re),y:Qn(L.oy+ue)}});return}const ge=T.items.find(Ie=>Ie.key===L.key);ge&&b(Ie=>{$(Ie),Ie.pos[L.key]={x:dt(Qn(L.ox+re),0,T.L-ge.w),y:dt(Qn(L.oy+ue),0,T.W-ge.h),rot:ge.rot,t:W}})},ae=()=>{v.current&&(v.current=null,d(!1))},de=()=>{if(a==="__tent")return S.tentAngle||0;if(a&&a.startsWith("u:")){const L=T.units[+a.slice(2)];return L&&L.rot||0}const D=T.items.find(L=>L.key===a);return D?D.rot:0},pe=D=>{if(!a||!Number.isFinite(D))return;if(a==="__tent"){b(Ce=>{Ce.tentAngle=Qy(D)});return}if(a.startsWith("u:")){const Ce=+a.slice(2);if(!T.units[Ce])return;b(We=>{j(We),We.tables.pts[Ce]={...We.tables.pts[Ce],rot:Rh(D)}});return}const L=T.items.find(Ce=>Ce.key===a);if(!L)return;const G=Rh(D),[re,ue]=wo(L.dims,G),ge=L.x+L.w/2,Ie=L.y+L.h/2;b(Ce=>{$(Ce),Ce.pos[a]={x:dt(Qn(ge-re/2),0,Math.max(0,T.L-re)),y:dt(Qn(Ie-ue/2),0,Math.max(0,T.W-ue)),rot:G,t:W}})},Se=D=>pe(de()+D),ce=()=>{const D=T.items.find(G=>G.key===a);if(!D)return;const L=D.def;b(G=>{const re=G.acc[L.id];if(L.qty){const ue=re.qty==="auto"?A_(L.id,G.guests):+re.qty;ue<=1?re.on=!1:re.qty=String(ue-1)}else re.on=!1;Object.keys(G.pos).filter(ue=>ue.startsWith(L.id)).forEach(ue=>delete G.pos[ue])}),l(null)},R=(D,L)=>{const G=T.items.find(re=>re.key===a);G&&b(re=>{$(re),re.pos[a]={x:dt(G.x+D,0,T.L-G.w),y:dt(G.y+L,0,T.W-G.h),rot:G.rot,t:W}})},E=D=>{if(!a||D.target.tagName==="INPUT")return;const L={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[D.key];if(D.key==="r"||D.key==="R"){D.preventDefault(),Se(D.shiftKey?15:90);return}if(a==="__tent"){if(L&&s==="site"){D.preventDefault();const G=Hr(S,T,g);b(re=>{re.tentPos={x:G.x+L[0],y:G.y+L[1]}})}return}if(s==="tent"){if(se>=0){const G=T.chands[se];if(!G)return;if(D.key==="Delete"||D.key==="Backspace"){D.preventDefault(),fe(se);return}L&&(D.preventDefault(),Oe(se,G.x+L[0],G.y+L[1]));return}if(P>=0){const G=T.exits[P];if(!G)return;if(D.key==="Delete"||D.key==="Backspace"){D.preventDefault(),k(P);return}if(!L)return;D.preventDefault();const re=G.side==="top"||G.side==="bottom",ue=re?L[0]/T.L:L[1]/T.W;ue&&O(ge=>{ge[P]={...ge[P],f:dt(G.c/(re?T.L:T.W)+ue,0,1)}});return}if(a.startsWith("u:")){const G=+a.slice(2),re=T.units[G];if(!re)return;if(D.key==="Delete"||D.key==="Backspace"){D.preventDefault(),Ue(G);return}if(D.key==="+"||D.key==="="){D.preventDefault(),Fe(G,re.seats+1);return}if(D.key==="-"||D.key==="_"){D.preventDefault(),Fe(G,re.seats-1);return}if(!L)return;D.preventDefault(),b(ue=>{j(ue),$e(ue,G,re.x+L[0],re.y+L[1])});return}L?(D.preventDefault(),R(...L)):(D.key==="Delete"||D.key==="Backspace")&&(D.preventDefault(),ce())}},B=()=>{s==="site"?e.tents.length>1?U():b(D=>{D.tentPos=null}):b(D=>{D.pos={},D.tables=null,D.tentSize="auto"}),l(null)},ne=ke.useCallback(D=>{if(!D||!D.type.startsWith("image/"))return;const L=new FileReader;L.onload=()=>{const G=new Image;G.onload=()=>{const re=Math.min(1,2e3/Math.max(G.width,G.height)),ue=document.createElement("canvas");ue.width=Math.round(G.width*re),ue.height=Math.round(G.height*re),ue.getContext("2d").drawImage(G,0,0,ue.width,ue.height);const ge=ue.toDataURL("image/jpeg",.85);r(ge),Uu(ge),n(Ie=>{const Ce=jn(Ie);Ce.photo={pw:ue.width,ph:ue.height,fpp:Math.max(Ce.siteL,60)/ue.width,calibrated:!1};for(const We of Ce.tents)We.tentAngle=0;return nu(Ce,!0),Ce}),u({pts:[]}),o("site"),l(null)},G.src=L.result},L.readAsDataURL(D)},[]);ke.useEffect(()=>{const D=L=>{const G=[...L.clipboardData&&L.clipboardData.files||[]].find(re=>re.type.startsWith("image/"));G&&(L.preventDefault(),ne(G))};return document.addEventListener("paste",D),()=>document.removeEventListener("paste",D)},[ne]);const ie=()=>{g&&(N("site"),u({pts:[]}))},ee=()=>{C(D=>{D.photo=null;for(const L of D.tents)L.tentAngle=0;nu(D,!1)}),u(null),r(null),Uu(null)},Ee=D=>{!(D>0)||!Number.isFinite(D)||C(L=>{L.photo.fpp*=D,L.photo.calibrated=!0;for(const G of L.tents)G.tentPos&&(G.tentPos={x:G.tentPos.x*D,y:G.tentPos.y*D})})},xe=D=>{const L=c&&c.pts;if(!(D>0)||!L||L.length<2)return;const G=Math.hypot(L[1].x-L[0].x,L[1].y-L[0].y);G<.01||(Ee(D/G),u(null))},Te=D=>{const L=L_(D),G=L.photo&&D.photoSrc?D.photoSrc:null;G||(L.photo=null),n(L),r(G),Uu(G),u(null),l(null)};return x.jsxs(x.Fragment,{children:[x.jsxs("header",{className:"top",children:[x.jsxs("svg",{className:"mark",viewBox:"0 0 42 42","aria-hidden":"true",children:[x.jsx("rect",{x:"3",y:"9",width:"36",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}),x.jsx("path",{d:"M3 9 L21 21 L39 9 M3 33 L21 21 L39 33",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),x.jsx("circle",{cx:"21",cy:"21",r:"2.6",fill:"currentColor"})]}),x.jsxs("div",{children:[x.jsx("h1",{children:"Tent Layout Planner"}),x.jsx("p",{children:"Set the site, guest count and extras. The tent size, plan and rental list update as you go. Drag any floor item to move it."})]})]}),x.jsxs("div",{className:"app",children:[x.jsx(xS,{st:S,lay:T,model:e,active:p,tents:y.map(D=>({name:D.st.name,guests:D.st.guests,lay:D.lay})),sel:a,onSelect:te,update:b,ph:g,photoSrc:i,onPhotoFile:ne,onCalib:ie,onPhotoDel:ee,onPhotoScale:Ee,onLoadLayout:Te,onPickTent:w,onAddTent:()=>I(!1),onDuplicateTent:()=>I(!0),onRemoveTent:q,onArrange:U,onAddTable:_e,onResetTables:qe}),x.jsxs("main",{className:"sheet",children:[x.jsx(rb,{st:S,lay:T,count:e.tents.length}),x.jsxs("section",{className:"card",children:[x.jsxs("div",{className:"tenttabs",role:"group","aria-label":"Tents",children:[e.tents.map((D,L)=>x.jsx("button",{className:"tab","aria-pressed":L===p,onClick:()=>w(L),children:D.name},L)),x.jsx("button",{className:"btn sm",onClick:()=>I(!1),children:"+ Add tent"})]}),x.jsxs("div",{className:"toolbar",children:[x.jsxs("div",{className:"seg",role:"group","aria-label":"Drawing view",children:[x.jsx("button",{"aria-pressed":s==="tent",onClick:()=>N("tent"),children:"Tent plan"}),x.jsx("button",{"aria-pressed":s==="site",onClick:()=>N("site"),children:"Site plan"})]}),x.jsx("button",{className:"btn",onClick:B,children:"Auto-arrange"}),x.jsx(TS,{view:s,calib:c,sel:a,lay:T,st:S,onCancelCalib:()=>u(null),onApplyCalib:xe,onRotate:Se,onSetAngle:pe,onRemove:ce,onReflow:()=>{b(D=>{D.tables=null}),l(null)},onExitKind:D=>O(L=>{L[P]&&(L[P]={...L[P],kind:D})}),onRemoveExit:()=>k(P),onAddExit:()=>{O(D=>{D.push(P_(D))})},onRemoveChand:()=>fe(se),onAddChand:()=>Z(D=>{D.push(C_(T))}),onSeats:D=>Fe(ye,D),onTableType:D=>ze(ye,D),onAddTable:_e,onRemoveTable:()=>Ue(ye)})]}),x.jsx("div",{className:"svgwrap",tabIndex:0,onKeyDown:E,"aria-label":"Layout drawing. Select an item, then use arrow keys to nudge, R to rotate, Delete to remove.",onDragOver:D=>D.preventDefault(),onDrop:D=>{const L=D.dataTransfer&&D.dataTransfer.files[0];L&&L.type.startsWith("image/")&&(D.preventDefault(),ne(L))},children:x.jsx(ES,{st:S,lay:T,tents:y,active:p,view:s,sel:a,calib:s==="site"?c:null,ph:g,photoSrc:i,svgRef:m,dragging:f,onPointerDown:z,onPointerMove:J,onPointerUp:ae,onPointerCancel:ae})}),x.jsx(sb,{st:S,lay:T,view:s,tents:y})]}),x.jsx(eb,{tents:y,active:p,photoSrc:g?i:null}),x.jsxs("div",{className:"two",children:[x.jsx(ob,{tents:y}),x.jsx(ab,{st:S,lay:T,ph:g,tents:y})]})]})]})]})}y_(document.getElementById("root")).render(x.jsx(ke.StrictMode,{children:x.jsx(cb,{})}));
