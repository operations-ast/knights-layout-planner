const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SiteMap3D-BOmz2a1J.js","./_commonjsHelpers-Cpj98o6Y.js","./SiteMap3D-CYq10Fru.css"])))=>i.map(i=>d[i]);
var tv=Object.defineProperty;var nv=(t,e,n)=>e in t?tv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var hp=(t,e,n)=>nv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Og={exports:{}},Pc={},zg={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),iv=Symbol.for("react.portal"),rv=Symbol.for("react.fragment"),sv=Symbol.for("react.strict_mode"),av=Symbol.for("react.profiler"),ov=Symbol.for("react.provider"),lv=Symbol.for("react.context"),cv=Symbol.for("react.forward_ref"),uv=Symbol.for("react.suspense"),hv=Symbol.for("react.memo"),dv=Symbol.for("react.lazy"),dp=Symbol.iterator;function fv(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var Bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,Vg={};function fa(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Bg}fa.prototype.isReactComponent={};fa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jg(){}jg.prototype=fa.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Bg}var Gd=jd.prototype=new jg;Gd.constructor=jd;Hg(Gd,fa.prototype);Gd.isPureReactComponent=!0;var fp=Array.isArray,Gg=Object.prototype.hasOwnProperty,Wd={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function $g(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Gg.call(e,i)&&!Wg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ao,type:t,key:s,ref:a,props:r,_owner:Wd.current}}function pv(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pp=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mv(""+t.key):e.toString(36)}function Nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ao:case iv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Zc(a,0):i,fp(r)?(n="",t!=null&&(n=t.replace(pp,"$&/")+"/"),Nl(r,e,n,"",function(c){return c})):r!=null&&($d(r)&&(r=pv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(pp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",fp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Zc(s,o);a+=Nl(s,e,n,l,r)}else if(l=fv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Zc(s,o++),a+=Nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ho(t,e,n){if(t==null)return t;var i=[],r=0;return Nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function gv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},Dl={transition:null},_v={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:Wd};function Xg(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Ho,forEach:function(t,e,n){Ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ho(t,function(){e++}),e},toArray:function(t){return Ho(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=fa;tt.Fragment=rv;tt.Profiler=av;tt.PureComponent=jd;tt.StrictMode=sv;tt.Suspense=uv;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v;tt.act=Xg;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Gg.call(e,l)&&!Wg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ao,type:t.type,key:r,ref:s,props:i,_owner:a}};tt.createContext=function(t){return t={$$typeof:lv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ov,_context:t},t.Consumer=t};tt.createElement=$g;tt.createFactory=function(t){var e=$g.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:cv,render:t}};tt.isValidElement=$d;tt.lazy=function(t){return{$$typeof:dv,_payload:{_status:-1,_result:t},_init:gv}};tt.memo=function(t,e){return{$$typeof:hv,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=Dl.transition;Dl.transition={};try{t()}finally{Dl.transition=e}};tt.unstable_act=Xg;tt.useCallback=function(t,e){return ln.current.useCallback(t,e)};tt.useContext=function(t){return ln.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};tt.useEffect=function(t,e){return ln.current.useEffect(t,e)};tt.useId=function(){return ln.current.useId()};tt.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return ln.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};tt.useRef=function(t){return ln.current.useRef(t)};tt.useState=function(t){return ln.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return ln.current.useTransition()};tt.version="18.3.1";zg.exports=tt;var Ie=zg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv=Ie,vv=Symbol.for("react.element"),yv=Symbol.for("react.fragment"),Sv=Object.prototype.hasOwnProperty,Mv=xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ev={key:!0,ref:!0,__self:!0,__source:!0};function qg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Sv.call(e,i)&&!Ev.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vv,type:t,key:s,ref:a,props:r,_owner:Mv.current}}Pc.Fragment=yv;Pc.jsx=qg;Pc.jsxs=qg;Og.exports=Pc;var m=Og.exports,Yg={exports:{}},Ln={},Kg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,W){var X=U.length;U.push(W);e:for(;0<X;){var te=X-1>>>1,ce=U[te];if(0<r(ce,W))U[te]=W,U[X]=ce,X=te;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var W=U[0],X=U.pop();if(X!==W){U[0]=X;e:for(var te=0,ce=U.length,ze=ce>>>1;te<ze;){var J=2*(te+1)-1,he=U[J],ye=J+1,fe=U[ye];if(0>r(he,X))ye<ce&&0>r(fe,he)?(U[te]=fe,U[ye]=X,te=ye):(U[te]=he,U[J]=X,te=J);else if(ye<ce&&0>r(fe,X))U[te]=fe,U[ye]=X,te=ye;else break e}}return W}function r(U,W){var X=U.sortIndex-W.sortIndex;return X!==0?X:U.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,f=3,p=!1,x=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=U)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function S(U){if(_=!1,y(U),!x)if(n(l)!==null)x=!0,O(N);else{var W=n(c);W!==null&&ee(S,W.startTime-U)}}function N(U,W){x=!1,_&&(_=!1,h(D),D=-1),p=!0;var X=f;try{for(y(W),d=n(l);d!==null&&(!(d.expirationTime>W)||U&&!P());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var ce=te(d.expirationTime<=W);W=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(l)&&i(l),y(W)}else i(l);d=n(l)}if(d!==null)var ze=!0;else{var J=n(c);J!==null&&ee(S,J.startTime-W),ze=!1}return ze}finally{d=null,f=X,p=!1}}var b=!1,A=null,D=-1,T=5,M=-1;function P(){return!(t.unstable_now()-M<T)}function V(){if(A!==null){var U=t.unstable_now();M=U;var W=!0;try{W=A(!0,U)}finally{W?L():(b=!1,A=null)}}else b=!1}var L;if(typeof v=="function")L=function(){v(V)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,G=z.port2;z.port1.onmessage=V,L=function(){G.postMessage(null)}}else L=function(){g(V,0)};function O(U){A=U,b||(b=!0,L())}function ee(U,W){D=g(function(){U(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,O(N))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var X=f;f=W;try{return U()}finally{f=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=f;f=U;try{return W()}finally{f=X}},t.unstable_scheduleCallback=function(U,W,X){var te=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?te+X:te):X=te,U){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=X+ce,U={id:u++,callback:W,priorityLevel:U,startTime:X,expirationTime:ce,sortIndex:-1},X>te?(U.sortIndex=X,e(c,U),n(l)===null&&U===n(c)&&(_?(h(D),D=-1):_=!0,ee(S,X-te))):(U.sortIndex=ce,e(l,U),x||p||(x=!0,O(N))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var W=f;return function(){var X=f;f=W;try{return U.apply(this,arguments)}finally{f=X}}}})(Zg);Kg.exports=Zg;var wv=Kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=Ie,Pn=wv;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qg=new Set,ro={};function rs(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(ro[t]=e,t=0;t<e.length;t++)Qg.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mp={},gp={};function Av(t){return rh.call(gp,t)?!0:rh.call(mp,t)?!1:bv.test(t)?gp[t]=!0:(mp[t]=!0,!1)}function Cv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Rv(t,e,n,i){if(e===null||typeof e>"u"||Cv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,qd);qt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,qd);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,qd);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rv(e,n,r,i)&&(n=null),i||r===null?Av(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),Jg=Symbol.for("react.provider"),e0=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),_p=Symbol.iterator;function Ma(t){return t===null||typeof t!="object"?null:(t=_p&&t[_p]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Qc;function Oa(t){if(Qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qc=e&&e[1]||""}return`
`+Qc+t}var Jc=!1;function eu(t,e){if(!t||Jc)return"";Jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oa(t):""}function Pv(t){switch(t.tag){case 5:return Oa(t.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return t=eu(t.type,!1),t;case 11:return t=eu(t.type.render,!1),t;case 1:return t=eu(t.type,!0),t;default:return""}}function lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Cs:return"Portal";case sh:return"Profiler";case Kd:return"StrictMode";case ah:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Jg:return(t._context.displayName||"Context")+".Provider";case Zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qd:return e=t.displayName||null,e!==null?e:lh(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return lh(t(e))}catch{}}return null}function Lv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lh(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nv(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jo(t){t._valueTracker||(t._valueTracker=Nv(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ch(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function uh(t,e){r0(t,e);var n=xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&hh(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hh(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var za=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(za(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function s0(t,e){var n=xr(e.value),i=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function a0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?a0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,o0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dv=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(t){Dv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xa[e]=Xa[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xa.hasOwnProperty(t)&&Xa[t]?(""+e).trim():e+"px"}function c0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Iv=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ph(t,e){if(e){if(Iv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _h=null,Gs=null,Ws=null;function Mp(t){if(t=Po(t)){if(typeof _h!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=Uc(e),_h(t.stateNode,t.type,e))}}function u0(t){Gs?Ws?Ws.push(t):Ws=[t]:Gs=t}function h0(){if(Gs){var t=Gs,e=Ws;if(Ws=Gs=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function d0(t,e){return t(e)}function f0(){}var tu=!1;function p0(t,e,n){if(tu)return t(e,n);tu=!0;try{return d0(t,e,n)}finally{tu=!1,(Gs!==null||Ws!==null)&&(f0(),h0())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var i=Uc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var xh=!1;if(Oi)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){xh=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{xh=!1}function Uv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var qa=!1,ec=null,tc=!1,vh=null,Fv={onError:function(t){qa=!0,ec=t}};function kv(t,e,n,i,r,s,a,o,l){qa=!1,ec=null,Uv.apply(Fv,arguments)}function Ov(t,e,n,i,r,s,a,o,l){if(kv.apply(this,arguments),qa){if(qa){var c=ec;qa=!1,ec=null}else throw Error(ge(198));tc||(tc=!0,vh=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ep(t){if(ss(t)!==t)throw Error(ge(188))}function zv(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ep(r),t;if(s===i)return Ep(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function g0(t){return t=zv(t),t!==null?_0(t):null}function _0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_0(t);if(e!==null)return e;t=t.sibling}return null}var x0=Pn.unstable_scheduleCallback,wp=Pn.unstable_cancelCallback,Bv=Pn.unstable_shouldYield,Hv=Pn.unstable_requestPaint,Rt=Pn.unstable_now,Vv=Pn.unstable_getCurrentPriorityLevel,ef=Pn.unstable_ImmediatePriority,v0=Pn.unstable_UserBlockingPriority,nc=Pn.unstable_NormalPriority,jv=Pn.unstable_LowPriority,y0=Pn.unstable_IdlePriority,Lc=null,xi=null;function Gv(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Lc,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:Xv,Wv=Math.log,$v=Math.LN2;function Xv(t){return t>>>=0,t===0?32:31-(Wv(t)/$v|0)|0}var Wo=64,$o=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ic(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ba(o):(s&=a,s!==0&&(i=Ba(s)))}else a=n&~r,a!==0?i=Ba(a):s!==0&&(i=Ba(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function qv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-si(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=qv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S0(){var t=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),t}function nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function Kv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function M0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,nf,w0,T0,b0,Sh=!1,Xo=[],lr=null,cr=null,ur=null,oo=new Map,lo=new Map,ir=[],Zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tp(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function wa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Po(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Qv(t,e,n,i,r){switch(e){case"focusin":return lr=wa(lr,t,e,n,i,r),!0;case"dragenter":return cr=wa(cr,t,e,n,i,r),!0;case"mouseover":return ur=wa(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,wa(oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,wa(lo.get(s)||null,t,e,n,i,r)),!0}return!1}function A0(t){var e=zr(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,b0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gh=i,n.target.dispatchEvent(i),gh=null}else return e=Po(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function bp(t,e,n){Il(t)&&n.delete(e)}function Jv(){Sh=!1,lr!==null&&Il(lr)&&(lr=null),cr!==null&&Il(cr)&&(cr=null),ur!==null&&Il(ur)&&(ur=null),oo.forEach(bp),lo.forEach(bp)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Sh||(Sh=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,Jv)))}function co(t){function e(r){return Ta(r,t)}if(0<Xo.length){Ta(Xo[0],t);for(var n=1;n<Xo.length;n++){var i=Xo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&Ta(lr,t),cr!==null&&Ta(cr,t),ur!==null&&Ta(ur,t),oo.forEach(e),lo.forEach(e),n=0;n<ir.length;n++)i=ir[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&ir.shift()}var $s=ji.ReactCurrentBatchConfig,rc=!0;function ey(t,e,n,i){var r=ht,s=$s.transition;$s.transition=null;try{ht=1,rf(t,e,n,i)}finally{ht=r,$s.transition=s}}function ty(t,e,n,i){var r=ht,s=$s.transition;$s.transition=null;try{ht=4,rf(t,e,n,i)}finally{ht=r,$s.transition=s}}function rf(t,e,n,i){if(rc){var r=Mh(t,e,n,i);if(r===null)du(t,e,i,sc,n),Tp(t,i);else if(Qv(r,t,e,n,i))i.stopPropagation();else if(Tp(t,i),e&4&&-1<Zv.indexOf(t)){for(;r!==null;){var s=Po(r);if(s!==null&&E0(s),s=Mh(t,e,n,i),s===null&&du(t,e,i,sc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else du(t,e,i,null,n)}}var sc=null;function Mh(t,e,n,i){if(sc=null,t=Jd(i),t=zr(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sc=t,null}function C0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vv()){case ef:return 1;case v0:return 4;case nc:case jv:return 16;case y0:return 536870912;default:return 16}default:return 16}}var ar=null,sf=null,Ul=null;function R0(){if(Ul)return Ul;var t,e=sf,n=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ul=r.slice(t,1<i?1-i:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Ap(){return!1}function Nn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qo:Ap,this.isPropagationStopped=Ap,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Nn(pa),Ro=Tt({},pa,{view:0,detail:0}),ny=Nn(Ro),iu,ru,ba,Nc=Tt({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ba&&(ba&&t.type==="mousemove"?(iu=t.screenX-ba.screenX,ru=t.screenY-ba.screenY):ru=iu=0,ba=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),Cp=Nn(Nc),iy=Tt({},Nc,{dataTransfer:0}),ry=Nn(iy),sy=Tt({},Ro,{relatedTarget:0}),su=Nn(sy),ay=Tt({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=Nn(ay),ly=Tt({},pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cy=Nn(ly),uy=Tt({},pa,{data:0}),Rp=Nn(uy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function py(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fy[t])?!!e[t]:!1}function of(){return py}var my=Tt({},Ro,{key:function(t){if(t.key){var e=hy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gy=Nn(my),_y=Tt({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Nn(_y),xy=Tt({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),vy=Nn(xy),yy=Tt({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=Nn(yy),My=Tt({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=Nn(My),wy=[9,13,27,32],lf=Oi&&"CompositionEvent"in window,Ya=null;Oi&&"documentMode"in document&&(Ya=document.documentMode);var Ty=Oi&&"TextEvent"in window&&!Ya,P0=Oi&&(!lf||Ya&&8<Ya&&11>=Ya),Lp=" ",Np=!1;function L0(t,e){switch(t){case"keyup":return wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function by(t,e){switch(t){case"compositionend":return N0(e);case"keypress":return e.which!==32?null:(Np=!0,Lp);case"textInput":return t=e.data,t===Lp&&Np?null:t;default:return null}}function Ay(t,e){if(Ps)return t==="compositionend"||!lf&&L0(t,e)?(t=R0(),Ul=sf=ar=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P0&&e.locale!=="ko"?null:e.data;default:return null}}var Cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cy[t.type]:e==="textarea"}function D0(t,e,n,i){u0(i),e=ac(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ka=null,uo=null;function Ry(t){G0(t,0)}function Dc(t){var e=Ds(t);if(i0(e))return t}function Py(t,e){if(t==="change")return e}var I0=!1;if(Oi){var au;if(Oi){var ou="oninput"in document;if(!ou){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),ou=typeof Ip.oninput=="function"}au=ou}else au=!1;I0=au&&(!document.documentMode||9<document.documentMode)}function Up(){Ka&&(Ka.detachEvent("onpropertychange",U0),uo=Ka=null)}function U0(t){if(t.propertyName==="value"&&Dc(uo)){var e=[];D0(e,uo,t,Jd(t)),p0(Ry,e)}}function Ly(t,e,n){t==="focusin"?(Up(),Ka=e,uo=n,Ka.attachEvent("onpropertychange",U0)):t==="focusout"&&Up()}function Ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dc(uo)}function Dy(t,e){if(t==="click")return Dc(e)}function Iy(t,e){if(t==="input"||t==="change")return Dc(e)}function Uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:Uy;function ho(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!rh.call(e,r)||!li(t[r],e[r]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,e){var n=Fp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fp(n)}}function F0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k0(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fy(t){var e=k0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&F0(n.ownerDocument.documentElement,n)){if(i!==null&&cf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=kp(n,s);var a=kp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ky=Oi&&"documentMode"in document&&11>=document.documentMode,Ls=null,Eh=null,Za=null,wh=!1;function Op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wh||Ls==null||Ls!==Jl(i)||(i=Ls,"selectionStart"in i&&cf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Za&&ho(Za,i)||(Za=i,i=ac(Eh,"onSelect"),0<i.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ls)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ns={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},lu={},O0={};Oi&&(O0=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Ic(t){if(lu[t])return lu[t];if(!Ns[t])return t;var e=Ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in O0)return lu[t]=e[n];return t}var z0=Ic("animationend"),B0=Ic("animationiteration"),H0=Ic("animationstart"),V0=Ic("transitionend"),j0=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){j0.set(t,e),rs(e,[t])}for(var cu=0;cu<zp.length;cu++){var uu=zp[cu],Oy=uu.toLowerCase(),zy=uu[0].toUpperCase()+uu.slice(1);Er(Oy,"on"+zy)}Er(z0,"onAnimationEnd");Er(B0,"onAnimationIteration");Er(H0,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(V0,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function Bp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ov(i,e,void 0,t),t.currentTarget=null}function G0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Bp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Bp(r,o,c),s=l}}}if(tc)throw t=vh,tc=!1,vh=null,t}function yt(t,e){var n=e[Rh];n===void 0&&(n=e[Rh]=new Set);var i=t+"__bubble";n.has(i)||(W0(e,t,2,!1),n.add(i))}function hu(t,e,n){var i=0;e&&(i|=4),W0(n,t,i,e)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[Ko]){t[Ko]=!0,Qg.forEach(function(n){n!=="selectionchange"&&(By.has(n)||hu(n,!1,t),hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ko]||(e[Ko]=!0,hu("selectionchange",!1,e))}}function W0(t,e,n,i){switch(C0(e)){case 1:var r=ey;break;case 4:r=ty;break;default:r=rf}n=r.bind(null,e,n,t),r=void 0,!xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function du(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=zr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}p0(function(){var c=s,u=Jd(n),d=[];e:{var f=j0.get(t);if(f!==void 0){var p=af,x=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":p=gy;break;case"focusin":x="focus",p=su;break;case"focusout":x="blur",p=su;break;case"beforeblur":case"afterblur":p=su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vy;break;case z0:case B0:case H0:p=oy;break;case V0:p=Sy;break;case"scroll":p=ny;break;case"wheel":p=Ey;break;case"copy":case"cut":case"paste":p=cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pp}var _=(e&4)!==0,g=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,h!==null&&(S=ao(v,h),S!=null&&_.push(po(v,S,y)))),g)break;v=v.return}0<_.length&&(f=new p(f,x,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==gh&&(x=n.relatedTarget||n.fromElement)&&(zr(x)||x[zi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?zr(x):null,x!==null&&(g=ss(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(_=Cp,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Pp,S="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?f:Ds(p),y=x==null?f:Ds(x),f=new _(S,v+"leave",p,n,u),f.target=g,f.relatedTarget=y,S=null,zr(u)===c&&(_=new _(h,v+"enter",x,n,u),_.target=y,_.relatedTarget=g,S=_),g=S,p&&x)t:{for(_=p,h=x,v=0,y=_;y;y=hs(y))v++;for(y=0,S=h;S;S=hs(S))y++;for(;0<v-y;)_=hs(_),v--;for(;0<y-v;)h=hs(h),y--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=hs(_),h=hs(h)}_=null}else _=null;p!==null&&Hp(d,f,p,_,!1),x!==null&&g!==null&&Hp(d,g,x,_,!0)}}e:{if(f=c?Ds(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var N=Py;else if(Dp(f))if(I0)N=Iy;else{N=Ny;var b=Ly}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Dy);if(N&&(N=N(t,c))){D0(d,N,n,u);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&hh(f,"number",f.value)}switch(b=c?Ds(c):window,t){case"focusin":(Dp(b)||b.contentEditable==="true")&&(Ls=b,Eh=c,Za=null);break;case"focusout":Za=Eh=Ls=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,Op(d,n,u);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":Op(d,n,u)}var A;if(lf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ps?L0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(P0&&n.locale!=="ko"&&(Ps||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ps&&(A=R0()):(ar=u,sf="value"in ar?ar.value:ar.textContent,Ps=!0)),b=ac(c,D),0<b.length&&(D=new Rp(D,t,null,n,u),d.push({event:D,listeners:b}),A?D.data=A:(A=N0(n),A!==null&&(D.data=A)))),(A=Ty?by(t,n):Ay(t,n))&&(c=ac(c,"onBeforeInput"),0<c.length&&(u=new Rp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=A))}G0(d,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ac(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ao(t,n),s!=null&&i.unshift(po(t,s,r)),s=ao(t,e),s!=null&&i.push(po(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ao(n,s),l!=null&&a.unshift(po(n,l,o))):r||(l=ao(n,s),l!=null&&a.push(po(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Hy=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(Hy,`
`).replace(Vy,"")}function Zo(t,e,n){if(e=Vp(e),Vp(t)!==e&&n)throw Error(ge(425))}function oc(){}var Th=null,bh=null;function Ah(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ch=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(t){return jp.resolve(null).then(t).catch(Wy)}:Ch;function Wy(t){setTimeout(function(){throw t})}function fu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ma=Math.random().toString(36).slice(2),pi="__reactFiber$"+ma,mo="__reactProps$"+ma,zi="__reactContainer$"+ma,Rh="__reactEvents$"+ma,$y="__reactListeners$"+ma,Xy="__reactHandles$"+ma;function zr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gp(t);t!==null;){if(n=t[pi])return n;t=Gp(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[pi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function Uc(t){return t[mo]||null}var Ph=[],Is=-1;function wr(t){return{current:t}}function St(t){0>Is||(t.current=Ph[Is],Ph[Is]=null,Is--)}function _t(t,e){Is++,Ph[Is]=t.current,t.current=e}var vr={},tn=wr(vr),gn=wr(!1),qr=vr;function ea(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function lc(){St(gn),St(tn)}function Wp(t,e,n){if(tn.current!==vr)throw Error(ge(168));_t(tn,e),_t(gn,n)}function $0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,Lv(t)||"Unknown",r));return Tt({},n,i)}function cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,qr=tn.current,_t(tn,t),_t(gn,gn.current),!0}function $p(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=$0(t,e,qr),i.__reactInternalMemoizedMergedChildContext=t,St(gn),St(tn),_t(tn,t)):St(gn),_t(gn,n)}var Li=null,Fc=!1,pu=!1;function X0(t){Li===null?Li=[t]:Li.push(t)}function qy(t){Fc=!0,X0(t)}function Tr(){if(!pu&&Li!==null){pu=!0;var t=0,e=ht;try{var n=Li;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,Fc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),x0(ef,Tr),r}finally{ht=e,pu=!1}}return null}var Us=[],Fs=0,uc=null,hc=0,kn=[],On=0,Yr=null,Ni=1,Di="";function Ir(t,e){Us[Fs++]=hc,Us[Fs++]=uc,uc=t,hc=e}function q0(t,e,n){kn[On++]=Ni,kn[On++]=Di,kn[On++]=Yr,Yr=t;var i=Ni;t=Di;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ni=1<<32-si(e)+r|n<<r|i,Di=s+t}else Ni=1<<s|n<<r|i,Di=t}function uf(t){t.return!==null&&(Ir(t,1),q0(t,1,0))}function hf(t){for(;t===uc;)uc=Us[--Fs],Us[Fs]=null,hc=Us[--Fs],Us[Fs]=null;for(;t===Yr;)Yr=kn[--On],kn[On]=null,Di=kn[--On],kn[On]=null,Ni=kn[--On],kn[On]=null}var Rn=null,Cn=null,Mt=!1,Jn=null;function Y0(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Ni,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function Lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nh(t){if(Mt){var e=Cn;if(e){var n=e;if(!Xp(t,e)){if(Lh(t))throw Error(ge(418));e=hr(n.nextSibling);var i=Rn;e&&Xp(t,e)?Y0(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Rn=t)}}else{if(Lh(t))throw Error(ge(418));t.flags=t.flags&-4097|2,Mt=!1,Rn=t}}}function qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Qo(t){if(t!==Rn)return!1;if(!Mt)return qp(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ah(t.type,t.memoizedProps)),e&&(e=Cn)){if(Lh(t))throw K0(),Error(ge(418));for(;e;)Y0(t,e),e=hr(e.nextSibling)}if(qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?hr(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=Cn;t;)t=hr(t.nextSibling)}function ta(){Cn=Rn=null,Mt=!1}function df(t){Jn===null?Jn=[t]:Jn.push(t)}var Yy=ji.ReactCurrentBatchConfig;function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function Jo(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yp(t){var e=t._init;return e(t._payload)}function Z0(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=mr(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,y,S){return v===null||v.tag!==6?(v=Su(y,h.mode,S),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,S){var N=y.type;return N===Rs?u(h,v,y.props.children,S,y.key):v!==null&&(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===er&&Yp(N)===v.type)?(S=r(v,y.props),S.ref=Aa(h,v,y),S.return=h,S):(S=jl(y.type,y.key,y.props,null,h.mode,S),S.ref=Aa(h,v,y),S.return=h,S)}function c(h,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Mu(y,h.mode,S),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function u(h,v,y,S,N){return v===null||v.tag!==7?(v=Wr(y,h.mode,S,N),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Su(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vo:return y=jl(v.type,v.key,v.props,null,h.mode,y),y.ref=Aa(h,null,v),y.return=h,y;case Cs:return v=Mu(v,h.mode,y),v.return=h,v;case er:var S=v._init;return d(h,S(v._payload),y)}if(za(v)||Ma(v))return v=Wr(v,h.mode,y,null),v.return=h,v;Jo(h,v)}return null}function f(h,v,y,S){var N=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:o(h,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vo:return y.key===N?l(h,v,y,S):null;case Cs:return y.key===N?c(h,v,y,S):null;case er:return N=y._init,f(h,v,N(y._payload),S)}if(za(y)||Ma(y))return N!==null?null:u(h,v,y,S,null);Jo(h,y)}return null}function p(h,v,y,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(y)||null,o(v,h,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vo:return h=h.get(S.key===null?y:S.key)||null,l(v,h,S,N);case Cs:return h=h.get(S.key===null?y:S.key)||null,c(v,h,S,N);case er:var b=S._init;return p(h,v,y,b(S._payload),N)}if(za(S)||Ma(S))return h=h.get(y)||null,u(v,h,S,N,null);Jo(v,S)}return null}function x(h,v,y,S){for(var N=null,b=null,A=v,D=v=0,T=null;A!==null&&D<y.length;D++){A.index>D?(T=A,A=null):T=A.sibling;var M=f(h,A,y[D],S);if(M===null){A===null&&(A=T);break}t&&A&&M.alternate===null&&e(h,A),v=s(M,v,D),b===null?N=M:b.sibling=M,b=M,A=T}if(D===y.length)return n(h,A),Mt&&Ir(h,D),N;if(A===null){for(;D<y.length;D++)A=d(h,y[D],S),A!==null&&(v=s(A,v,D),b===null?N=A:b.sibling=A,b=A);return Mt&&Ir(h,D),N}for(A=i(h,A);D<y.length;D++)T=p(A,h,D,y[D],S),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?D:T.key),v=s(T,v,D),b===null?N=T:b.sibling=T,b=T);return t&&A.forEach(function(P){return e(h,P)}),Mt&&Ir(h,D),N}function _(h,v,y,S){var N=Ma(y);if(typeof N!="function")throw Error(ge(150));if(y=N.call(y),y==null)throw Error(ge(151));for(var b=N=null,A=v,D=v=0,T=null,M=y.next();A!==null&&!M.done;D++,M=y.next()){A.index>D?(T=A,A=null):T=A.sibling;var P=f(h,A,M.value,S);if(P===null){A===null&&(A=T);break}t&&A&&P.alternate===null&&e(h,A),v=s(P,v,D),b===null?N=P:b.sibling=P,b=P,A=T}if(M.done)return n(h,A),Mt&&Ir(h,D),N;if(A===null){for(;!M.done;D++,M=y.next())M=d(h,M.value,S),M!==null&&(v=s(M,v,D),b===null?N=M:b.sibling=M,b=M);return Mt&&Ir(h,D),N}for(A=i(h,A);!M.done;D++,M=y.next())M=p(A,h,D,M.value,S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?D:M.key),v=s(M,v,D),b===null?N=M:b.sibling=M,b=M);return t&&A.forEach(function(V){return e(h,V)}),Mt&&Ir(h,D),N}function g(h,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Rs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Vo:e:{for(var N=y.key,b=v;b!==null;){if(b.key===N){if(N=y.type,N===Rs){if(b.tag===7){n(h,b.sibling),v=r(b,y.props.children),v.return=h,h=v;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===er&&Yp(N)===b.type){n(h,b.sibling),v=r(b,y.props),v.ref=Aa(h,b,y),v.return=h,h=v;break e}n(h,b);break}else e(h,b);b=b.sibling}y.type===Rs?(v=Wr(y.props.children,h.mode,S,y.key),v.return=h,h=v):(S=jl(y.type,y.key,y.props,null,h.mode,S),S.ref=Aa(h,v,y),S.return=h,h=S)}return a(h);case Cs:e:{for(b=y.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Mu(y,h.mode,S),v.return=h,h=v}return a(h);case er:return b=y._init,g(h,v,b(y._payload),S)}if(za(y))return x(h,v,y,S);if(Ma(y))return _(h,v,y,S);Jo(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=Su(y,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return g}var na=Z0(!0),Q0=Z0(!1),dc=wr(null),fc=null,ks=null,ff=null;function pf(){ff=ks=fc=null}function mf(t){var e=dc.current;St(dc),t._currentValue=e}function Dh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){fc=t,ff=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(fc===null)throw Error(ge(308));ks=t,fc.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Br=null;function gf(t){Br===null?Br=[t]:Br.push(t)}function J0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,gf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,gf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tf(t,n)}}function Kp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pc(t,e,n,i){var r=t.updateQueue;tr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,_=o;switch(f=e,p=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){d=x.call(p,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,f=typeof x=="function"?x.call(p,d,f):x,f==null)break e;d=Tt({},d,f);break e;case 2:tr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=a,t.lanes=a,t.memoizedState=d}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var Lo={},vi=wr(Lo),go=wr(Lo),_o=wr(Lo);function Hr(t){if(t===Lo)throw Error(ge(174));return t}function xf(t,e){switch(_t(_o,e),_t(go,t),_t(vi,Lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fh(e,t)}St(vi),_t(vi,e)}function ia(){St(vi),St(go),St(_o)}function t_(t){Hr(_o.current);var e=Hr(vi.current),n=fh(e,t.type);e!==n&&(_t(go,t),_t(vi,n))}function vf(t){go.current===t&&(St(vi),St(go))}var Et=wr(0);function mc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mu=[];function yf(){for(var t=0;t<mu.length;t++)mu[t]._workInProgressVersionPrimary=null;mu.length=0}var Ol=ji.ReactCurrentDispatcher,gu=ji.ReactCurrentBatchConfig,Kr=0,wt=null,Ut=null,Vt=null,gc=!1,Qa=!1,xo=0,Ky=0;function Yt(){throw Error(ge(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Mf(t,e,n,i,r,s){if(Kr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?eS:tS,t=n(i,r),Qa){s=0;do{if(Qa=!1,xo=0,25<=s)throw Error(ge(301));s+=1,Vt=Ut=null,e.updateQueue=null,Ol.current=nS,t=n(i,r)}while(Qa)}if(Ol.current=_c,e=Ut!==null&&Ut.next!==null,Kr=0,Vt=Ut=wt=null,gc=!1,e)throw Error(ge(300));return t}function Ef(){var t=xo!==0;return xo=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?wt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Gn(){if(Ut===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Vt===null?wt.memoizedState:Vt.next;if(e!==null)Vt=e,Ut=t;else{if(t===null)throw Error(ge(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Vt===null?wt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function vo(t,e){return typeof e=="function"?e(t):e}function _u(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,wt.lanes|=u,Zr|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,li(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,Zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xu(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);li(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function n_(){}function i_(t,e){var n=wt,i=Gn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,wf(a_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,yo(9,s_.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(ge(349));Kr&30||r_(n,e,r)}return r}function r_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s_(t,e,n,i){e.value=n,e.getSnapshot=i,o_(e)&&l_(t)}function a_(t,e,n){return n(function(){o_(e)&&l_(t)})}function o_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function l_(t){var e=Bi(t,1);e!==null&&ai(e,t,1,-1)}function Qp(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=Jy.bind(null,wt,t),[e.memoizedState,t]}function yo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function c_(){return Gn().memoizedState}function zl(t,e,n,i){var r=hi();wt.flags|=t,r.memoizedState=yo(1|e,n,void 0,i===void 0?null:i)}function kc(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Sf(i,a.deps)){r.memoizedState=yo(e,n,s,i);return}}wt.flags|=t,r.memoizedState=yo(1|e,n,s,i)}function Jp(t,e){return zl(8390656,8,t,e)}function wf(t,e){return kc(2048,8,t,e)}function u_(t,e){return kc(4,2,t,e)}function h_(t,e){return kc(4,4,t,e)}function d_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f_(t,e,n){return n=n!=null?n.concat([t]):null,kc(4,4,d_.bind(null,e,t),n)}function Tf(){}function p_(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function m_(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function g_(t,e,n){return Kr&21?(li(n,e)||(n=S0(),wt.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Zy(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=gu.transition;gu.transition={};try{t(!1),e()}finally{ht=n,gu.transition=i}}function __(){return Gn().memoizedState}function Qy(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x_(t))v_(e,n);else if(n=J0(t,e,n,i),n!==null){var r=an();ai(n,t,i,r),y_(n,e,i)}}function Jy(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x_(t))v_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,li(o,a)){var l=e.interleaved;l===null?(r.next=r,gf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=J0(t,e,r,i),n!==null&&(r=an(),ai(n,t,i,r),y_(n,e,i))}}function x_(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function v_(t,e){Qa=gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tf(t,n)}}var _c={readContext:jn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},eS={readContext:jn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,d_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Qy.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Qp,useDebugValue:Tf,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Qp(!1),e=t[0];return t=Zy.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=hi();if(Mt){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),jt===null)throw Error(ge(349));Kr&30||r_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jp(a_.bind(null,i,s,t),[t]),i.flags|=2048,yo(9,s_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=jt.identifierPrefix;if(Mt){var n=Di,i=Ni;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ky++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tS={readContext:jn,useCallback:p_,useContext:jn,useEffect:wf,useImperativeHandle:f_,useInsertionEffect:u_,useLayoutEffect:h_,useMemo:m_,useReducer:_u,useRef:c_,useState:function(){return _u(vo)},useDebugValue:Tf,useDeferredValue:function(t){var e=Gn();return g_(e,Ut.memoizedState,t)},useTransition:function(){var t=_u(vo)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:n_,useSyncExternalStore:i_,useId:__,unstable_isNewReconciler:!1},nS={readContext:jn,useCallback:p_,useContext:jn,useEffect:wf,useImperativeHandle:f_,useInsertionEffect:u_,useLayoutEffect:h_,useMemo:m_,useReducer:xu,useRef:c_,useState:function(){return xu(vo)},useDebugValue:Tf,useDeferredValue:function(t){var e=Gn();return Ut===null?e.memoizedState=t:g_(e,Ut.memoizedState,t)},useTransition:function(){var t=xu(vo)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:n_,useSyncExternalStore:i_,useId:__,unstable_isNewReconciler:!1};function Kn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ih(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oc={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=pr(t),s=Fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(ai(e,t,r,i),kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=pr(t),s=Fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(ai(e,t,r,i),kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=pr(t),r=Fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(ai(e,t,i,n),kl(e,t,i))}};function em(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ho(n,i)||!ho(r,s):!0}function S_(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=_n(e)?qr:tn.current,i=e.contextTypes,s=(i=i!=null)?ea(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Oc.enqueueReplaceState(e,e.state,null)}function Uh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_f(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=_n(e)?qr:tn.current,r.context=ea(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ih(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Oc.enqueueReplaceState(r,r.state,null),pc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ra(t,e){try{var n="",i=e;do n+=Pv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iS=typeof WeakMap=="function"?WeakMap:Map;function M_(t,e,n){n=Fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vc||(vc=!0,$h=i),Fh(t,e)},n}function E_(t,e,n){n=Fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Fh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fh(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_S.bind(null,t,e,n),e.then(t,t))}function im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fi(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var rS=ji.ReactCurrentOwner,mn=!1;function rn(t,e,n,i){e.child=t===null?Q0(e,null,n,i):na(e,t.child,n,i)}function sm(t,e,n,i,r){n=n.render;var s=e.ref;return Xs(e,r),i=Mf(t,e,n,i,s,r),n=Ef(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(Mt&&n&&uf(e),e.flags|=1,rn(t,e,i,r),e.child)}function am(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w_(t,e,s,i,r)):(t=jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(a,i)&&t.ref===e.ref)return Hi(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function w_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ho(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Hi(t,e,r)}return kh(t,e,n,i,r)}function T_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(zs,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(zs,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(zs,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(zs,Tn),Tn|=i;return rn(t,e,r,n),e.child}function b_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kh(t,e,n,i,r){var s=_n(n)?qr:tn.current;return s=ea(e,s),Xs(e,r),n=Mf(t,e,n,i,s,r),i=Ef(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(Mt&&i&&uf(e),e.flags|=1,rn(t,e,n,r),e.child)}function om(t,e,n,i,r){if(_n(n)){var s=!0;cc(e)}else s=!1;if(Xs(e,r),e.stateNode===null)Bl(t,e),S_(e,n,i),Uh(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=_n(n)?qr:tn.current,c=ea(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&tm(e,a,i,c),tr=!1;var f=e.memoizedState;a.state=f,pc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||gn.current||tr?(typeof u=="function"&&(Ih(e,n,u,i),l=e.memoizedState),(o=tr||em(e,n,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,e_(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Kn(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=_n(n)?qr:tn.current,l=ea(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&tm(e,a,i,l),tr=!1,f=e.memoizedState,a.state=f,pc(e,i,a,r);var x=e.memoizedState;o!==d||f!==x||gn.current||tr?(typeof p=="function"&&(Ih(e,n,p,i),x=e.memoizedState),(c=tr||em(e,n,c,i,f,x,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Oh(t,e,n,i,s,r)}function Oh(t,e,n,i,r,s){b_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&$p(e,n,!1),Hi(t,e,s);i=e.stateNode,rS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=na(e,t.child,null,s),e.child=na(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&$p(e,n,!0),e.child}function A_(t){var e=t.stateNode;e.pendingContext?Wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wp(t,e.context,!1),xf(t,e.containerInfo)}function lm(t,e,n,i,r){return ta(),df(r),e.flags|=256,rn(t,e,n,i),e.child}var zh={dehydrated:null,treeContext:null,retryLane:0};function Bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function C_(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(Et,r&1),t===null)return Nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Hc(a,i,0,null),t=Wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bh(n),e.memoizedState=zh,t):bf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return sS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=mr(o,s):(s=Wr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Bh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zh,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bf(t,e){return e=Hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,i){return i!==null&&df(i),na(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=vu(Error(ge(422))),el(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Hc({mode:"visible",children:i.children},r,0,null),s=Wr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&na(e,t.child,null,a),e.child.memoizedState=Bh(a),e.memoizedState=zh,s);if(!(e.mode&1))return el(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ge(419)),i=vu(s,i,void 0),el(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(t,r),ai(i,t,r,-1))}return Nf(),i=vu(Error(ge(421))),el(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=xS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=hr(r.nextSibling),Rn=e,Mt=!0,Jn=null,t!==null&&(kn[On++]=Ni,kn[On++]=Di,kn[On++]=Yr,Ni=t.id,Di=t.overflow,Yr=e),e=bf(e,i.children),e.flags|=4096,e)}function cm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Dh(t.return,e,n)}function yu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function R_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,n,e);else if(t.tag===19)cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&mc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&mc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yu(e,!0,n,null,s);break;case"together":yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aS(t,e,n){switch(e.tag){case 3:A_(e),ta();break;case 5:t_(e);break;case 1:_n(e.type)&&cc(e);break;case 4:xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(dc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?C_(t,e,n):(_t(Et,Et.current&1),t=Hi(t,e,n),t!==null?t.sibling:null);_t(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return R_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,T_(t,e,n)}return Hi(t,e,n)}var P_,Hh,L_,N_;P_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hh=function(){};L_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(vi.current);var s=null;switch(n){case"input":r=ch(t,r),i=ch(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=dh(t,r),i=dh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=oc)}ph(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};N_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ca(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oS(t,e,n){var i=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return _n(e.type)&&lc(),Kt(e),null;case 3:return i=e.stateNode,ia(),St(gn),St(tn),yf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Yh(Jn),Jn=null))),Hh(t,e),Kt(e),null;case 5:vf(e);var r=Hr(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)L_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return Kt(e),null}if(t=Hr(vi.current),Qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[mo]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Ha.length;r++)yt(Ha[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":xp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":yp(i,s),yt("invalid",i)}ph(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Zo(i.textContent,o,t),r=["children",""+o]):ro.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(n){case"input":jo(i),vp(i,s,!0);break;case"textarea":jo(i),Sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=a0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[pi]=e,t[mo]=i,P_(t,e,!1,!1),e.stateNode=t;e:{switch(a=mh(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ha.length;r++)yt(Ha[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":xp(t,i),r=ch(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),yt("invalid",t);break;case"textarea":yp(t,i),r=dh(t,i),yt("invalid",t);break;default:r=i}ph(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?c0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&o0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&Yd(t,s,l,a))}switch(n){case"input":jo(t),vp(t,i,!1);break;case"textarea":jo(t),Sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+xr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)N_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=Hr(_o.current),Hr(vi.current),Qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:Zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return Kt(e),null;case 13:if(St(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Cn!==null&&e.mode&1&&!(e.flags&128))K0(),ta(),e.flags|=98560,s=!1;else if(s=Qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[pi]=e}else ta(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else Jn!==null&&(Yh(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ft===0&&(Ft=3):Nf())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return ia(),Hh(t,e),t===null&&fo(e.stateNode.containerInfo),Kt(e),null;case 10:return mf(e.type._context),Kt(e),null;case 17:return _n(e.type)&&lc(),Kt(e),null;case 19:if(St(Et),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ca(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=mc(t),a!==null){for(e.flags|=128,Ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>sa&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=mc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return Kt(e),null}else 2*Rt()-s.renderingStartTime>sa&&n!==1073741824&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=Et.current,_t(Et,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Lf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function lS(t,e){switch(hf(e),e.tag){case 1:return _n(e.type)&&lc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ia(),St(gn),St(tn),yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vf(e),null;case 13:if(St(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Et),null;case 4:return ia(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var tl=!1,Jt=!1,cS=typeof WeakSet=="function"?WeakSet:Set,De=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Vh(t,e,n){try{n()}catch(i){bt(t,e,i)}}var um=!1;function uS(t,e){if(Th=rc,t=k0(),cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bh={focusedElem:t,selectionRange:n},rc=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,g=x.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Kn(e.type,_),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return x=um,um=!1,x}function Ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vh(e,n,s)}r=r.next}while(r!==i)}}function zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D_(t){var e=t.alternate;e!==null&&(t.alternate=null,D_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[mo],delete e[Rh],delete e[$y],delete e[Xy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function hm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}function Wh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}var Gt=null,Zn=!1;function $i(t,e,n){for(n=n.child;n!==null;)U_(t,e,n),n=n.sibling}function U_(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Lc,n)}catch{}switch(n.tag){case 5:Jt||Os(n,e);case 6:var i=Gt,r=Zn;Gt=null,$i(t,e,n),Gt=i,Zn=r,Gt!==null&&(Zn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Zn?(t=Gt,n=n.stateNode,t.nodeType===8?fu(t.parentNode,n):t.nodeType===1&&fu(t,n),co(t)):fu(Gt,n.stateNode));break;case 4:i=Gt,r=Zn,Gt=n.stateNode.containerInfo,Zn=!0,$i(t,e,n),Gt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Vh(n,e,a),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!Jt&&(Os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,$i(t,e,n),Jt=i):$i(t,e,n);break;default:$i(t,e,n)}}function dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cS),e.forEach(function(i){var r=vS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Zn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Zn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Zn=!0;break e}o=o.return}if(Gt===null)throw Error(ge(160));U_(s,a,r),Gt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F_(e,t),e=e.sibling}function F_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ui(t),i&4){try{Ja(3,t,t.return),zc(3,t)}catch(_){bt(t,t.return,_)}try{Ja(5,t,t.return)}catch(_){bt(t,t.return,_)}}break;case 1:$n(e,t),ui(t),i&512&&n!==null&&Os(n,n.return);break;case 5:if($n(e,t),ui(t),i&512&&n!==null&&Os(n,n.return),t.flags&32){var r=t.stateNode;try{so(r,"")}catch(_){bt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&r0(r,s),mh(o,a);var c=mh(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?c0(r,d):u==="dangerouslySetInnerHTML"?o0(r,d):u==="children"?so(r,d):Yd(r,u,d,c)}switch(o){case"input":uh(r,s);break;case"textarea":s0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(_){bt(t,t.return,_)}}break;case 6:if($n(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){bt(t,t.return,_)}}break;case 3:if($n(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(_){bt(t,t.return,_)}break;case 4:$n(e,t),ui(t);break;case 13:$n(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rf=Rt())),i&4&&dm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||u,$n(e,t),Jt=c):$n(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(De=t,u=t.child;u!==null;){for(d=De=u;De!==null;){switch(f=De,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ja(4,f,f.return);break;case 1:Os(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){bt(i,n,_)}}break;case 5:Os(f,f.return);break;case 22:if(f.memoizedState!==null){pm(d);continue}}p!==null?(p.return=f,De=p):pm(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=l0("display",a))}catch(_){bt(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){bt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),ui(t),i&4&&dm(t);break;case 21:break;default:$n(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I_(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=hm(t);Wh(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=hm(t);Gh(t,o,a);break;default:throw Error(ge(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hS(t,e,n){De=t,k_(t)}function k_(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||tl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=tl;var c=Jt;if(tl=a,(Jt=l)&&!c)for(De=r;De!==null;)a=De,l=a.child,a.tag===22&&a.memoizedState!==null?mm(r):l!==null?(l.return=a,De=l):mm(r);for(;s!==null;)De=s,k_(s),s=s.sibling;De=r,tl=o,Jt=c}fm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):fm(t)}}function fm(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||zc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&co(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}Jt||e.flags&512&&jh(e)}catch(f){bt(e,e.return,f)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function pm(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function mm(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{jh(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{jh(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){De=null;break}var o=e.sibling;if(o!==null){o.return=e.return,De=o;break}De=e.return}}var dS=Math.ceil,xc=ji.ReactCurrentDispatcher,Af=ji.ReactCurrentOwner,Hn=ji.ReactCurrentBatchConfig,at=0,jt=null,Dt=null,$t=0,Tn=0,zs=wr(0),Ft=0,So=null,Zr=0,Bc=0,Cf=0,eo=null,pn=null,Rf=0,sa=1/0,Pi=null,vc=!1,$h=null,fr=null,nl=!1,or=null,yc=0,to=0,Xh=null,Hl=-1,Vl=0;function an(){return at&6?Rt():Hl!==-1?Hl:Hl=Rt()}function pr(t){return t.mode&1?at&2&&$t!==0?$t&-$t:Yy.transition!==null?(Vl===0&&(Vl=S0()),Vl):(t=ht,t!==0||(t=window.event,t=t===void 0?16:C0(t.type)),t):1}function ai(t,e,n,i){if(50<to)throw to=0,Xh=null,Error(ge(185));Co(t,n,i),(!(at&2)||t!==jt)&&(t===jt&&(!(at&2)&&(Bc|=n),Ft===4&&rr(t,$t)),xn(t,i),n===1&&at===0&&!(e.mode&1)&&(sa=Rt()+500,Fc&&Tr()))}function xn(t,e){var n=t.callbackNode;Yv(t,e);var i=ic(t,t===jt?$t:0);if(i===0)n!==null&&wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&wp(n),e===1)t.tag===0?qy(gm.bind(null,t)):X0(gm.bind(null,t)),Gy(function(){!(at&6)&&Tr()}),n=null;else{switch(M0(i)){case 1:n=ef;break;case 4:n=v0;break;case 16:n=nc;break;case 536870912:n=y0;break;default:n=nc}n=W_(n,O_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O_(t,e){if(Hl=-1,Vl=0,at&6)throw Error(ge(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=ic(t,t===jt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sc(t,i);else{e=i;var r=at;at|=2;var s=B_();(jt!==t||$t!==e)&&(Pi=null,sa=Rt()+500,Gr(t,e));do try{mS();break}catch(o){z_(t,o)}while(!0);pf(),xc.current=s,at=r,Dt!==null?e=0:(jt=null,$t=0,e=Ft)}if(e!==0){if(e===2&&(r=yh(t),r!==0&&(i=r,e=qh(t,r))),e===1)throw n=So,Gr(t,0),rr(t,i),xn(t,Rt()),n;if(e===6)rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!fS(r)&&(e=Sc(t,i),e===2&&(s=yh(t),s!==0&&(i=s,e=qh(t,s))),e===1))throw n=So,Gr(t,0),rr(t,i),xn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:Ur(t,pn,Pi);break;case 3:if(rr(t,i),(i&130023424)===i&&(e=Rf+500-Rt(),10<e)){if(ic(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ch(Ur.bind(null,t,pn,Pi),e);break}Ur(t,pn,Pi);break;case 4:if(rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dS(i/1960))-i,10<i){t.timeoutHandle=Ch(Ur.bind(null,t,pn,Pi),i);break}Ur(t,pn,Pi);break;case 5:Ur(t,pn,Pi);break;default:throw Error(ge(329))}}}return xn(t,Rt()),t.callbackNode===n?O_.bind(null,t):null}function qh(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=pn,pn=n,e!==null&&Yh(e)),t}function Yh(t){pn===null?pn=t:pn.push.apply(pn,t)}function fS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Cf,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function gm(t){if(at&6)throw Error(ge(327));qs();var e=ic(t,0);if(!(e&1))return xn(t,Rt()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var i=yh(t);i!==0&&(e=i,n=qh(t,i))}if(n===1)throw n=So,Gr(t,0),rr(t,e),xn(t,Rt()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,pn,Pi),xn(t,Rt()),null}function Pf(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(sa=Rt()+500,Fc&&Tr())}}function Qr(t){or!==null&&or.tag===0&&!(at&6)&&qs();var e=at;at|=1;var n=Hn.transition,i=ht;try{if(Hn.transition=null,ht=1,t)return t()}finally{ht=i,Hn.transition=n,at=e,!(at&6)&&Tr()}}function Lf(){Tn=zs.current,St(zs)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jy(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(hf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lc();break;case 3:ia(),St(gn),St(tn),yf();break;case 5:vf(i);break;case 4:ia();break;case 13:St(Et);break;case 19:St(Et);break;case 10:mf(i.type._context);break;case 22:case 23:Lf()}n=n.return}if(jt=t,Dt=t=mr(t.current,null),$t=Tn=e,Ft=0,So=null,Cf=Bc=Zr=0,pn=eo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Br=null}return t}function z_(t,e){do{var n=Dt;try{if(pf(),Ol.current=_c,gc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gc=!1}if(Kr=0,Vt=Ut=wt=null,Qa=!1,xo=0,Af.current=null,n===null||n.return===null){Ft=1,So=e,Dt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=$t,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=im(a);if(p!==null){p.flags&=-257,rm(p,a,o,s,e),p.mode&1&&nm(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){nm(s,c,e),Nf();break e}l=Error(ge(426))}}else if(Mt&&o.mode&1){var g=im(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),rm(g,a,o,s,e),df(ra(l,o));break e}}s=l=ra(l,o),Ft!==4&&(Ft=2),eo===null?eo=[s]:eo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=M_(s,l,e);Kp(s,h);break e;case 1:o=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(fr===null||!fr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=E_(s,o,e);Kp(s,S);break e}}s=s.return}while(s!==null)}V_(n)}catch(N){e=N,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function B_(){var t=xc.current;return xc.current=_c,t===null?_c:t}function Nf(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),jt===null||!(Zr&268435455)&&!(Bc&268435455)||rr(jt,$t)}function Sc(t,e){var n=at;at|=2;var i=B_();(jt!==t||$t!==e)&&(Pi=null,Gr(t,e));do try{pS();break}catch(r){z_(t,r)}while(!0);if(pf(),at=n,xc.current=i,Dt!==null)throw Error(ge(261));return jt=null,$t=0,Ft}function pS(){for(;Dt!==null;)H_(Dt)}function mS(){for(;Dt!==null&&!Bv();)H_(Dt)}function H_(t){var e=G_(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?V_(t):Dt=e,Af.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lS(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Dt=null;return}}else if(n=oS(n,e,Tn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Ur(t,e,n){var i=ht,r=Hn.transition;try{Hn.transition=null,ht=1,gS(t,e,n,i)}finally{Hn.transition=r,ht=i}return null}function gS(t,e,n,i){do qs();while(or!==null);if(at&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kv(t,s),t===jt&&(Dt=jt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,W_(nc,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var a=ht;ht=1;var o=at;at|=4,Af.current=null,uS(t,n),F_(n,t),Fy(bh),rc=!!Th,bh=Th=null,t.current=n,hS(n),Hv(),at=o,ht=a,Hn.transition=s}else t.current=n;if(nl&&(nl=!1,or=t,yc=r),s=t.pendingLanes,s===0&&(fr=null),Gv(n.stateNode),xn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vc)throw vc=!1,t=$h,$h=null,t;return yc&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===Xh?to++:(to=0,Xh=t):to=0,Tr(),null}function qs(){if(or!==null){var t=M0(yc),e=Hn.transition,n=ht;try{if(Hn.transition=null,ht=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,yc=0,at&6)throw Error(ge(331));var r=at;for(at|=4,De=t.current;De!==null;){var s=De,a=s.child;if(De.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(De=c;De!==null;){var u=De;switch(u.tag){case 0:case 11:case 15:Ja(8,u,s)}var d=u.child;if(d!==null)d.return=u,De=d;else for(;De!==null;){u=De;var f=u.sibling,p=u.return;if(D_(u),u===c){De=null;break}if(f!==null){f.return=p,De=f;break}De=p}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}De=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,De=a;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,De=h;break e}De=s.return}}var v=t.current;for(De=v;De!==null;){a=De;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,De=y;else e:for(a=v;De!==null;){if(o=De,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:zc(9,o)}}catch(N){bt(o,o.return,N)}if(o===a){De=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,De=S;break e}De=o.return}}if(at=r,Tr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Lc,t)}catch{}i=!0}return i}finally{ht=n,Hn.transition=e}}return!1}function _m(t,e,n){e=ra(n,e),e=M_(t,e,1),t=dr(t,e,1),e=an(),t!==null&&(Co(t,1,e),xn(t,e))}function bt(t,e,n){if(t.tag===3)_m(t,t,n);else for(;e!==null;){if(e.tag===3){_m(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=ra(n,t),t=E_(e,t,1),e=dr(e,t,1),t=an(),e!==null&&(Co(e,1,t),xn(e,t));break}}e=e.return}}function _S(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&($t&n)===n&&(Ft===4||Ft===3&&($t&130023424)===$t&&500>Rt()-Rf?Gr(t,0):Cf|=n),xn(t,e)}function j_(t,e){e===0&&(t.mode&1?(e=$o,$o<<=1,!($o&130023424)&&($o=4194304)):e=1);var n=an();t=Bi(t,e),t!==null&&(Co(t,e,n),xn(t,n))}function xS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j_(t,n)}function vS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),j_(t,n)}var G_;G_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,aS(t,e,n);mn=!!(t.flags&131072)}else mn=!1,Mt&&e.flags&1048576&&q0(e,hc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(t,e),t=e.pendingProps;var r=ea(e,tn.current);Xs(e,n),r=Mf(null,e,i,t,r,n);var s=Ef();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_f(e),r.updater=Oc,e.stateNode=r,r._reactInternals=e,Uh(e,i,t,n),e=Oh(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&uf(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=SS(i),t=Kn(i,t),r){case 0:e=kh(null,e,i,t,n);break e;case 1:e=om(null,e,i,t,n);break e;case 11:e=sm(null,e,i,t,n);break e;case 14:e=am(null,e,i,Kn(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),kh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),om(t,e,i,r,n);case 3:e:{if(A_(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,e_(t,e),pc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ra(Error(ge(423)),e),e=lm(t,e,i,n,r);break e}else if(i!==r){r=ra(Error(ge(424)),e),e=lm(t,e,i,n,r);break e}else for(Cn=hr(e.stateNode.containerInfo.firstChild),Rn=e,Mt=!0,Jn=null,n=Q0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ta(),i===r){e=Hi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return t_(e),t===null&&Nh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ah(i,r)?a=null:s!==null&&Ah(i,s)&&(e.flags|=32),b_(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&Nh(e),null;case 13:return C_(t,e,n);case 4:return xf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=na(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),sm(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(dc,i._currentValue),i._currentValue=a,s!==null)if(li(s.value,a)){if(s.children===r.children&&!gn.current){e=Hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dh(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ge(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Dh(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xs(e,n),r=jn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),am(t,e,i,r,n);case 15:return w_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Bl(t,e),e.tag=1,_n(i)?(t=!0,cc(e)):t=!1,Xs(e,n),S_(e,i,r),Uh(e,i,r,n),Oh(null,e,i,!0,t,n);case 19:return R_(t,e,n);case 22:return T_(t,e,n)}throw Error(ge(156,e.tag))};function W_(t,e){return x0(t,e)}function yS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new yS(t,e,n,i)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SS(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zd)return 11;if(t===Qd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Df(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Rs:return Wr(n.children,r,s,e);case Kd:a=8,r|=8;break;case sh:return t=Bn(12,n,e,r|2),t.elementType=sh,t.lanes=s,t;case ah:return t=Bn(13,n,e,r),t.elementType=ah,t.lanes=s,t;case oh:return t=Bn(19,n,e,r),t.elementType=oh,t.lanes=s,t;case t0:return Hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jg:a=10;break e;case e0:a=9;break e;case Zd:a=11;break e;case Qd:a=14;break e;case er:a=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=Bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Wr(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Hc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function Su(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nu(0),this.expirationTimes=nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function If(t,e,n,i,r,s,a,o,l){return t=new MS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(s),t}function ES(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $_(t){if(!t)return vr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(_n(n))return $0(t,n,e)}return e}function X_(t,e,n,i,r,s,a,o,l){return t=If(n,i,!0,t,r,s,a,o,l),t.context=$_(null),n=t.current,i=an(),r=pr(n),s=Fi(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,Co(t,r,i),xn(t,i),t}function Vc(t,e,n,i){var r=e.current,s=an(),a=pr(r);return n=$_(n),e.context===null?e.context=n:e.pendingContext=n,e=Fi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,a),t!==null&&(ai(t,r,a,s),kl(t,r,a)),a}function Mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uf(t,e){xm(t,e),(t=t.alternate)&&xm(t,e)}function wS(){return null}var q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ff(t){this._internalRoot=t}jc.prototype.render=Ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));Vc(t,e,null,null)};jc.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Vc(null,t,null,null)}),e[zi]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=T0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&A0(t)}};function kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vm(){}function TS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Mc(a);s.call(c)}}var a=X_(e,i,t,0,null,!1,!1,"",vm);return t._reactRootContainer=a,t[zi]=a.current,fo(t.nodeType===8?t.parentNode:t),Qr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Mc(l);o.call(c)}}var l=If(t,0,!1,null,null,!1,!1,"",vm);return t._reactRootContainer=l,t[zi]=l.current,fo(t.nodeType===8?t.parentNode:t),Qr(function(){Vc(e,l,n,i)}),l}function Wc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Mc(a);o.call(l)}}Vc(e,a,t,r)}else a=TS(n,e,t,r,i);return Mc(a)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ba(e.pendingLanes);n!==0&&(tf(e,n|1),xn(e,Rt()),!(at&6)&&(sa=Rt()+500,Tr()))}break;case 13:Qr(function(){var i=Bi(t,1);if(i!==null){var r=an();ai(i,t,1,r)}}),Uf(t,1)}};nf=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=an();ai(e,t,134217728,n)}Uf(t,134217728)}};w0=function(t){if(t.tag===13){var e=pr(t),n=Bi(t,e);if(n!==null){var i=an();ai(n,t,e,i)}Uf(t,e)}};T0=function(){return ht};b0=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};_h=function(t,e,n){switch(e){case"input":if(uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Uc(i);if(!r)throw Error(ge(90));i0(i),uh(i,r)}}}break;case"textarea":s0(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};d0=Pf;f0=Qr;var bS={usingClientEntryPoint:!1,Events:[Po,Ds,Uc,u0,h0,Pf]},Ra={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AS={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||wS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Lc=il.inject(AS),xi=il}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(e))throw Error(ge(200));return ES(t,e,null,n)};Ln.createRoot=function(t,e){if(!kf(t))throw Error(ge(299));var n=!1,i="",r=q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=If(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,fo(t.nodeType===8?t.parentNode:t),new Ff(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=g0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return Qr(t)};Ln.hydrate=function(t,e,n){if(!Gc(e))throw Error(ge(200));return Wc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!kf(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=X_(e,null,t,1,n??null,r,!1,s,a),t[zi]=e.current,fo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new jc(e)};Ln.render=function(t,e,n){if(!Gc(e))throw Error(ge(200));return Wc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(ge(40));return t._reactRootContainer?(Qr(function(){Wc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};Ln.unstable_batchedUpdates=Pf;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gc(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return Wc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function Y_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y_)}catch(t){console.error(t)}}Y_(),Yg.exports=Ln;var CS=Yg.exports,K_,ym=CS;K_=ym.createRoot,ym.hydrateRoot;const RS="modulepreload",PS=function(t,e){return new URL(t,e).href},Sm={},Z_=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=PS(c,i),c in Sm)return;Sm[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!i)for(let x=a.length-1;x>=0;x--){const _=a[x];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":RS,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((x,_)=>{p.addEventListener("load",x),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},LS=""+new URL("knights-logo-lJDnesvl.png",import.meta.url).href,NS=""+new URL("ast-logo-B7y51IMY.png",import.meta.url).href,Of=globalThis.__EDITION__==="festival",Ht=Of?{id:"festival",title:"Festival Layout Planner",intro:"Set the grounds, attendance and festival features. Tent sizes, the site plan and the rental list update as you go. Drag anything to move it.",company:"American Structure Tent",logo:NS,logoAlt:"American Structure Tent",logoMode:"color",guestsWord:"Attendees",standingWord:"General admission (standing)",other:{label:"Wedding planner",href:"./index.html"}}:{id:"wedding",title:"Wedding Layout Planner",intro:"Set the site, guest count and extras. The tent size, plan and rental list update as you go. Drag any floor item to move it.",company:"Knights Tent & Party Rental",logo:LS,logoAlt:"Knights Tent & Party Rental",logoMode:"mono",guestsWord:"Guests",standingWord:"Standing reception",other:{label:"Festival planner",href:"./festival.html"}},An=Of,ni=t=>Of?t.replace(/^tlp-/,"flp-"):t;async function DS(t=700){const e=await new Promise((l,c)=>{const u=new Image;u.onload=()=>l(u),u.onerror=()=>c(new Error("Could not load the logo.")),u.src=Ht.logo}),n=Math.min(t,Math.max(e.width,480)),i=Math.round(n*e.height/e.width),r=document.createElement("canvas");r.width=n,r.height=i;const s=r.getContext("2d");s.imageSmoothingQuality="high",s.drawImage(e,0,0,n,i);const a=s.getImageData(0,0,n,i),o=a.data;for(let l=0;l<o.length;l+=4){const c=o[l],u=o[l+1],d=o[l+2],f=Math.max(c,u,d),p=Math.min(c,u,d),x=f?(f-p)/f:0,_=255-(c*.299+u*.587+d*.114);Ht.logoMode==="color"&&x>.35||(o[l]=o[l+1]=o[l+2]=255,o[l+3]=Math.round(_*o[l+3]/255))}return s.putImageData(a,0,0),{url:r.toDataURL("image/png"),ar:i/n}}const IS={backyard:{label:"Backyard",l:100,w:70,surface:"grass"},church:{label:"Church or school lawn",l:160,w:120,surface:"grass"},park:{label:"Park or open field",l:250,w:180,surface:"grass"},lot:{label:"Parking lot",l:300,w:150,surface:"asphalt"},patio:{label:"Venue patio",l:90,w:60,surface:"concrete"},custom:{label:"Custom size"}},US={fairgrounds:{label:"Fairgrounds",l:600,w:400,surface:"grass"},park:{label:"Park or open field",l:400,w:300,surface:"grass"},athletic:{label:"Athletic field",l:360,w:160,surface:"grass"},lot:{label:"Parking lot",l:400,w:200,surface:"asphalt"},street:{label:"Downtown street closure",l:600,w:70,surface:"asphalt"},custom:{label:"Custom size"}},Kh=An?US:IS,mi={frame:{label:"Frame tent",stake:3,sizes:[[10,10],[10,20],[10,30],[10,40],[15,15],[20,20],[20,30],[20,40],[20,60],[30,30],[30,45],[30,60],[40,40],[40,60],[40,80],[40,100],[40,120]]},cleartop:{label:"Clear-top frame tent",stake:3,sizes:[[20,20],[20,40],[30,30],[30,45],[30,60],[40,40],[40,60],[40,80]]},pole:{label:"High-peak pole tent",stake:6,sizes:[[30,45],[40,60],[40,80],[40,100],[60,60],[60,90],[60,120],[80,120]]},sailcloth:{label:"Sailcloth tent",stake:8,shape:"oval",ends:{44:21.5,59:19.5},sizes:[[44,43],[44,63],[44,83],[44,103],[59,39],[59,79],[59,99]]},structure:{label:"Structure tent (clearspan)",stake:3,sizes:[[40,45],[40,60],[40,75],[40,90],[40,120],[40,150],[60,60],[60,90],[60,120],[60,150],[60,180]]}},Wt={rounds60:{label:'60" round tables',kind:"round",r:2.5,seats:[8,10],def:8,cx:10,cy:10,hx:4.25,hy:4.25,table:'60" round table',linen:'120" round, floor length',sqft:"10–12"},rounds72:{label:'72" round tables',kind:"round",r:3,seats:[10,12],def:10,cx:11.5,cy:11.5,hx:4.75,hy:4.75,table:'72" round table',linen:'132" round, floor length',sqft:"11–13"},banquet:{label:"8' banquet rows",kind:"banquet",seats:[8],def:8,cx:8,cy:7.5,hx:4,hy:3,table:`8' × 30" banquet table`,linen:'90" × 156" banquet, floor length',sqft:"8–10"},mixed:{label:"Mixed rounds + banquet tables",kind:"mixed",seats:[8,10],def:8,cx:10,cy:10,hx:4.25,hy:4.25,sqft:"9–12"},theater:{label:An?"Theater rows (chairs only)":"Ceremony rows (chairs only)",kind:"chair",seats:[1],def:1,cx:3,cy:2,hx:.8,hy:.8,sqft:"6–8"},none:{label:An?"No seating (general admission)":"No seating (standing / cocktail)",kind:"none",seats:[0],def:0,cx:10,cy:10,hx:0,hy:0,sqft:"6–8"}},Gl={rounds60:10,rounds72:12,banquet:8},FS={rounds60:'60" round',rounds72:'72" round',banquet:"8' banquet"},no=6,kS=[{id:"stage",label:"Stage",short:"STAGE",sizes:{"8×8":[8,8],"12×8":[12,8],"16×12":[16,12],"24×16":[24,16]},def:"12×8",walls:["left","top"],f:.5},{id:"head",label:"Head table",short:"HEAD TABLE",sizes:{"Sweetheart · 2":[6,5,2],"Head table · 8":[16,6,8],"Head table · 12":[24,6,12],"Head table · 16":[32,6,16]},def:"Head table · 8",walls:["left","top"],f:.5},{id:"dance",label:"Dance floor",short:"DANCE FLOOR",dance:!0},{id:"dj",label:"DJ booth",short:"DJ",dims:[8,6],walls:["top","left"],f:"dance"},{id:"buffet",label:"Buffet line",short:"BUFFET",dims:[16,9],qty:!0,walls:["right","top","bottom"],f:.5},{id:"bar",label:"Bar",short:"BAR",dims:[10,6],qty:!0,walls:["bottom","top"],f:1},{id:"cake",label:"Cake table",short:"CAKE",dims:[6,6],walls:["bottom","top"],f:"dance"},{id:"gift",label:"Gift & card table",short:"GIFTS",dims:[8,5],walls:["bottom","top"],f:.64},{id:"photo",label:"Photo booth",short:"PHOTO",dims:[10,10],walls:["bottom","top"],f:.3},{id:"lounge",label:"Lounge seating",short:"LOUNGE",dims:[14,10],walls:["top","bottom"],f:1},{id:"highboy",label:"Cocktail tables",short:"",dims:[5,5],qty:!0,qtyOpts:[2,4,6,8,10,12,16,20],free:!0,walls:["bottom"],f:1}],OS=[{id:"stage",label:"Stage",short:"STAGE",sizes:{"16×12":[16,12],"20×16":[20,16],"24×16":[24,16],"32×24":[32,24],"40×24":[40,24]},def:"24×16",walls:["left","top"],f:.5},{id:"foh",label:"Sound booth (FOH)",short:"FOH",dims:[8,8],walls:["right","bottom","top"],f:.5},{id:"dance",label:"Dance floor",short:"DANCE FLOOR",dance:!0},{id:"booth",label:"Vendor booths (10×10)",short:"VENDOR",dims:[10,10],qty:!0,qtyOpts:[2,4,6,8,10,12,16,20,24,30],walls:["top","bottom","right"],f:.5},{id:"buffet",label:"Food service line",short:"FOOD",dims:[16,9],qty:!0,walls:["right","top","bottom"],f:.5},{id:"bar",label:"Beer & wine bar",short:"BAR",dims:[10,6],qty:!0,qtyOpts:[1,2,3,4,6,8],walls:["bottom","top"],f:1},{id:"info",label:"Ticket & info table",short:"INFO",dims:[8,5],walls:["bottom","top"],f:.12},{id:"merch",label:"Merch table",short:"MERCH",dims:[12,6],walls:["bottom","top"],f:.75},{id:"firstaid",label:"First aid station",short:"FIRST AID",dims:[10,10],walls:["right","top","bottom"],f:.9},{id:"photo",label:"Photo op wall",short:"PHOTO",dims:[10,10],walls:["bottom","top"],f:.3},{id:"lounge",label:"VIP lounge",short:"VIP",dims:[14,10],walls:["top","bottom"],f:1},{id:"highboy",label:"Cocktail tables",short:"",dims:[5,5],qty:!0,qtyOpts:[2,4,6,8,10,12,16,20,30,40],free:!0,walls:["bottom"],f:1}],zf=An?OS:kS,Mm={top:0,right:90,bottom:180,left:270},Ei=1.5,Bs={cherry:{label:"Cherry",desc:"Rich cherry wood-tone finish",sizes:["12x12","12x16","16x16","20x20","24x24"],colors:["#7c3c27","#6c3320"],tile:4},birch:{label:"Birch",desc:"Light birch wood-tone finish",sizes:["12x12","12x16","16x16","20x20","24x24"],colors:["#e2c797","#d5b985"],tile:4},black:{label:"Black",desc:"Matte black finish",sizes:["12x12","12x16"],colors:["#1f2226","#272b30"],tile:4},white:{label:"White",desc:"Bright white high-gloss finish",sizes:["12x12","12x16"],colors:["#f8f8f6","#eeeeeb"],tile:4},bw:{label:"Black & white checkered",desc:"Classic black & white checkerboard",sizes:["12x12","12x16","16x16","20x20"],colors:["#1f2226","#f8f8f6"],tile:4},birchwhite:{label:"Birch & white checkered",desc:"Birch & white checkerboard",sizes:["12x12","16x16","20x20","20x24"],colors:["#e2c797","#f8f8f6"],tile:4}},zS=[["bottom",.5],["top",.7],["right",.5],["top",.3],["bottom",.2],["bottom",.8]],BS={"White folding":"#f1f2f2",Chiavari:"#c9a457","Cross-back":"#8a6340","Padded banquet":"#3b414a"},HS={swag:"Swag (zigzag across ceiling)",perimeter:"Inside perimeter",both:"Swag + perimeter"},Ec=1.5,Q_=[-3,-1,1,3].flatMap(t=>[[t,-1],[t,1]]),VS=["White folding","Chiavari","Cross-back","Padded banquet"],J_={siteName:"Example: Hartwell wedding reception",sitePreset:"church",siteL:160,siteW:120,surface:"grass",guests:150,seating:"rounds60",seatsPer:8,mixRound:"rounds60",mixBanquet:4,spacing:"comfortable",chairStyle:"Chiavari",name:"Tent 1",tentType:"frame",tentSize:"auto",tentCustom:!1,walls:"window",acc:{stage:{on:!1,size:"12×8",cl:12,cw:8},head:{on:!0,size:"Head table · 8"},dance:{on:!0,size:"auto",cl:20,cw:20,finish:"cherry",wrap:!1},dj:{on:!0},buffet:{on:!0,qty:"auto"},bar:{on:!0,qty:"auto"},cake:{on:!0},gift:{on:!0},photo:{on:!1},lounge:{on:!1},highboy:{on:!0,qty:"auto"}},climate:"none",stringLights:!0,lightStyle:"swag",chandeliers:!1,uplights:!0,generator:!0,chandList:null,exits:null,pos:{},tentPos:null,tables:null,address:"",photo:null,tentAngle:0,siteItems:[]},jS={...J_,siteName:"Example: Riverfront Music Festival",sitePreset:"park",siteL:400,siteW:300,surface:"grass",guests:400,seating:"banquet",seatsPer:8,chairStyle:"White folding",tentType:"structure",walls:"none",acc:{stage:{on:!0,size:"24×16",cl:24,cw:16},foh:{on:!0},dance:{on:!1,size:"auto",cl:20,cw:20,finish:"black",wrap:!1},booth:{on:!0,qty:"6"},buffet:{on:!1,qty:"auto"},bar:{on:!0,qty:"auto"},info:{on:!0},merch:{on:!0},firstaid:{on:!1},photo:{on:!1},lounge:{on:!1},highboy:{on:!0,qty:"auto"}},stringLights:!0,lightStyle:"perimeter",chandeliers:!1,uplights:!1,generator:!0},wc=An?jS:J_;function ex(t,e,n){const i=mi[t];if(!i||i.shape!=="oval")return{oval:!1,W:e,L:n,e:0};const r=Math.min(n/2,i.ends&&i.ends[e]||Math.min(e,n)/2);return{oval:!0,W:e,L:n,e:r}}function di(t,e){if(!t.oval)return 0;const{W:n,L:i,e:r}=t,s=e<r?r-e:e>i-r?e-(i-r):0;return s?n/2-n/2*Math.sqrt(Math.max(0,1-(s/r)**2)):0}function Em(t,e){if(!t.oval)return 0;const{W:n,e:i}=t,r=Math.abs(e-n/2);return i-i*Math.sqrt(Math.max(0,1-(r/(n/2))**2))}function GS(t,e,n){const{W:i,L:r,e:s}=t;let a;if(t.oval&&(e<s||e>r-s)){const l=e<s?s:r-s,c=Math.atan2((n-i/2)/(i/2),(e-l)/s);a=Math.abs(Math.sin(c))<Math.SQRT1_2?e<s?"left":"right":n<i/2?"top":"bottom"}else if(t.oval)a=n<i/2?"top":"bottom";else{const l={top:n,bottom:i-n,left:e,right:r-e};a=Object.keys(l).reduce((c,u)=>l[u]<l[c]?u:c)}return{side:a,f:Math.min(1,Math.max(0,a==="top"||a==="bottom"?e/r:n/i))}}function rl(t,e,n,i=0){const{W:r,L:s,e:a}=t;if(e<i-1e-6||e>s-i+1e-6||n<i-1e-6||n>r-i+1e-6)return!1;if(!t.oval||e>=a&&e<=s-a)return!0;const o=a-i,l=r/2-i;if(o<=0||l<=0)return!1;const c=e<a?a-e:e-(s-a),u=n-r/2;return(c/o)**2+(u/l)**2<=1+1e-6}const Pa=(t,e,n=0)=>rl(t,e.x,e.y,n)&&rl(t,e.x+e.w,e.y,n)&&rl(t,e.x,e.y+e.h,n)&&rl(t,e.x+e.w,e.y+e.h,n);function Bf(t,e=0,n=360){const{W:i,L:r,e:s}=t;if(!t.oval)return[[-e,-e],[r+e,-e],[r+e,i+e],[-e,i+e]];const a=s+e,o=i/2+e,l=[],c=Math.ceil(n/2);for(let u=0;u<=c;u++){const d=-Math.PI/2+Math.PI*u/c;l.push([r-s+a*Math.cos(d),i/2+o*Math.sin(d)])}for(let u=0;u<=c;u++){const d=Math.PI/2+Math.PI*u/c;l.push([s+a*Math.cos(d),i/2+o*Math.sin(d)])}return l}function Eu(t,e=0){const{W:n,L:i,e:r}=t,s=r+e,a=n/2+e;return t.oval?`M${r} ${-e}H${i-r}A${s} ${a} 0 0 1 ${i-r} ${n+e}H${r}A${s} ${a} 0 0 1 ${r} ${-e}Z`:`M${-e} ${-e}H${i+e}V${n+e}H${-e}Z`}function Mo(t,e=0){if(!t.oval)return 2*(t.W+t.L+4*e);const n=Bf(t,e);let i=0;for(let r=0;r<n.length;r++){const[s,a]=n[r],[o,l]=n[(r+1)%n.length];i+=Math.hypot(o-s,l-a)}return i}function wm(t){return t.oval?(t.L-2*t.e)*t.W+Math.PI*t.e*(t.W/2):t.W*t.L}function tx(t,e,n=0){const i=Bf(t,n),r=[],s=[...i,i[0]];let a=0;for(let u=0;u<i.length;u++){const d=Math.hypot(s[u+1][0]-s[u][0],s[u+1][1]-s[u][1]);r.push(d),a+=d}const o=[];let l=0,c=0;for(let u=0;u<e;u++){const d=u*a/e;for(;c+r[l]<d;)c+=r[l],l++;const f=r[l]?(d-c)/r[l]:0;o.push({x:s[l][0]+(s[l+1][0]-s[l][0])*f,y:s[l][1]+(s[l+1][1]-s[l][1])*f})}return o}function nx(t,e,n=3){const i=Bf(t),r=l=>e.some(c=>Math.hypot(l[0]-c.x,l[1]-c.y)<n),s=[];let a=[];const o=Math.max(0,i.findIndex(l=>!r(l)));for(let l=0;l<=i.length;l++){const c=i[(o+l)%i.length];r(c)?(a.length>1&&s.push(a),a=[]):a.push(c)}return a.length>1&&s.push(a),s}const ii=t=>JSON.parse(JSON.stringify(t)),rt=(t,e,n)=>Math.min(n,Math.max(e,t)),je=t=>Math.round(t*100)/100,Pt=t=>Math.round(t*2)/2;function sl(t){const e=Math.floor(t+1e-6),n=Math.round((t-e)*12);return`${e}'-${n}"`}function aa(t,e){try{if(e===void 0)return JSON.parse(localStorage.getItem(t)||"null");localStorage.setItem(t,JSON.stringify(e))}catch{return null}}function wu(t){const e=Object.assign(ii(wc),ii(t),{acc:Object.assign(ii(wc.acc),ii(t.acc||{}))});Wt[e.seating]||(e.seating="rounds60",e.seatsPer=8),e.mixRound!=="rounds60"&&e.mixRound!=="rounds72"&&(e.mixRound="rounds60"),mi[e.tentType]||(e.tentType="frame");const n=e.tentCustom&&!mi[e.tentType].shape&&/^\d+(\.\d+)?x\d+(\.\d+)?$/.test(e.tentSize);return n||(e.tentCustom=!1),e.tentSize!=="auto"&&!n&&!mi[e.tentType].sizes.some(([i,r])=>`${i}x${r}`===e.tentSize)&&(e.tentSize="auto",e.pos={},e.tables=null),e.siteItems=(Array.isArray(e.siteItems)?e.siteItems:[]).filter(i=>i&&typeof i.type=="string"&&[i.x,i.y,i.l,i.w].every(Number.isFinite)).map(i=>({...i,l:rt(i.l,2,1e3),w:rt(i.w,2,1e3),rot:Number.isFinite(i.rot)?i.rot:0})),delete e.photoSrc,e}const Va=(t,e)=>{const n=e*Math.PI/180,i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n));return[je(t[0]*i+t[1]*r),je(t[0]*r+t[1]*i)]},Zh=t=>(Math.round(t)%360+360)%360,Tm=t=>{const e=Zh(t);return e>180?e-360:e},Xi=(t,e)=>t.x<e.x+e.w-1e-6&&t.x+t.w>e.x+1e-6&&t.y<e.y+e.h-1e-6&&t.y+t.h>e.y+1e-6,ds=(t,e)=>({x:t.x-e,y:t.y-e,w:t.w+2*e,h:t.h+2*e}),No=t=>Bs[(t.acc.dance||{}).finish]||Bs.cherry,io=t=>{const[e,n]=t.split("x").map(Number);return[Math.max(e,n),Math.min(e,n)]},Qh=t=>Math.round(t.guests*1.5);function WS(t,e){if(e.size==="custom")return[Math.ceil((e.cl||20)/4)*4,Math.ceil((e.cw||20)/4)*4];const n=No(t),i=n.sizes.includes(e.size)?e.size:n.sizes.find(r=>io(r)[0]*io(r)[1]>=Qh(t))||n.sizes[n.sizes.length-1];return io(i)}const ix=(t,e)=>t==="highboy"?Math.max(2,Math.ceil(e/25)):t==="booth"?rt(Math.ceil(e/50),2,30):t==="buffet"?rt(Math.ceil(e/(An?250:125)),1,4):rt(Math.ceil(e/150),1,An?8:4);function $c(t){return t<10?1:t<200?2:t<500?3:t<1e3?4:t<2e3?5:6}function bm(t,e){const n=Math.max(1,Math.ceil(t/e-1e-6));return Array.from({length:n+1},(i,r)=>r*t/n)}function $S(t,e,n,i=ex(t,e,n)){const r=[],s=t==="structure"?15:10;if(i.oval)r.push(...tx(i,Math.max(8,Math.round(Mo(i)/s))));else{for(const a of bm(n,s))r.push({x:a,y:0},{x:a,y:e});for(const a of bm(e,s).slice(1,-1))r.push({x:0,y:a},{x:n,y:a})}if(t==="pole"||t==="sailcloth"){const a=Math.max(1,Math.round(n/20)),o=a===1?[n/2]:Array.from({length:a-1},(c,u)=>(u+1)*n/a),l=t==="pole"?e>=60?[e/4,e/2,3*e/4]:[e/2]:e>50?[e/3,2*e/3]:[e/2];for(const c of l)for(const u of o)r.push({x:u,y:c,inner:!0})}return r}const Ar=6,XS=t=>zS.slice(0,$c(t)).map(([e,n],i)=>({side:e,f:n,kind:i===0?"entrance":"exit"})),qS=(t,e)=>{const n=Math.max(1,Math.round(e/20));return Array.from({length:n},(i,r)=>({x:(r+.5)*e/n,y:t/2}))},YS=(t,e,n)=>t.chandeliers?t.chandList?t.chandList.map(i=>({x:i.fx*n,y:i.fy*e})):qS(e,n):[],rx=t=>t.chands.map(e=>({fx:e.x/t.L,fy:e.y/t.W}));function KS(t,e,n){const i=rt(e,1,t.L-1),r=di(t,i);return{x:i,y:rt(n,Math.min(r+1,t.W/2),Math.max(t.W-r-1,t.W/2))}}function sx(t){const{W:e,L:n,chands:i}=t;let r={x:n/2,y:e/2},s=-1;for(let a=2;a<=n-2;a+=.5){const o=i.length?Math.min(...i.map(l=>Math.hypot(l.x-a,l.y-e/2))):n;o>s&&(s=o,r={x:a,y:e/2})}return{fx:r.x/n,fy:r.y/e}}const ax=t=>t.exits.map(e=>({side:e.side,f:e.c/(e.side==="top"||e.side==="bottom"?t.L:t.W),kind:e.kind}));function ox(t){const e=s=>t.filter(a=>a.side===s).length,n=["bottom","top","right","left"].reduce((s,a)=>e(a)<e(s)?a:s),i=t.filter(s=>s.side===n).map(s=>s.f),r=[.5,.25,.75,.15,.85,.35,.65].find(s=>i.every(a=>Math.abs(a-s)>.12))??.5;return{side:n,f:r,kind:t.some(s=>s.kind==="entrance")?"exit":"entrance"}}function ZS(t,e,n,i={oval:!1,W:e,L:n,e:0},r=null){const s=r||XS(t),a=Ar/2;return s.map(({side:o,f:l,kind:c})=>{const u=o==="top"||o==="bottom",d=!r&&i.oval&&n-2*i.e>=8,f=d?i.e+a:a+1,p=d?n-i.e-a:n-a-1,x=u?rt(l*n,f,Math.max(f,p)):rt(l*e,a+1,e-a-1),_=o==="top"?di(i,x):o==="bottom"?e-di(i,x):o==="left"?Em(i,x):n-Em(i,x),g=u?{x:x-a,y:o==="top"?_:_-Ar,w:Ar,h:Ar}:{x:o==="left"?_:_-Ar,y:x-a,w:Ar,h:Ar};return{side:o,f:l,kind:c,c:x,p:_,x:u?x:_,y:u?_:x,zone:g,main:c==="entrance"}})}const Wl=40,gi=.55,lx=t=>rt(Math.round(t)||8,1,Wl),cx=t=>Math.max(2,Math.floor(t/1.5));function ux(t){const e=zf.find(c=>c.id==="head");let n,i,r,s=!1;t.size==="custom"?(r=lx(t.seats),n=Math.max(8,Math.ceil(r/4)*8),i=6):([n,i,r]=e.sizes[t.size]||e.sizes[e.def],s=t.size==="Sweetheart · 2");const a=Array.from({length:r},(c,u)=>({x:je((u+.5)*n/r),y:i-4.45})),o=Array.isArray(t.chairs),l=o?t.chairs.map(c=>({x:rt(+c.x||0,gi,n-gi),y:rt(+c.y||0,gi,i-gi)})):a;return{dims:[n,i],seats:l.length,chairs:l,custom:o,sweet:s,front:i-4.45}}function QS(t){const[e]=t.dims,n=t.front??t.dims[1]-4.45;let i={x:e/2,y:n},r=-1;for(let s=gi+.35;s<=e-gi-.35+1e-6;s+=.5){const a=Math.min(1/0,...t.chairs.map(o=>Math.hypot(o.x-s,o.y-n)));a>r&&(r=a,i={x:je(s),y:n})}return i}function JS(t){const e=[];for(const n of zf){const i=t.acc[n.id];if(!i||!i.on)continue;let r,s=0,a=1,o=null;if(n.dance)r=WS(t,i);else if(n.id==="head"){const l=ux(i);r=l.dims,s=l.seats,o={chairs:l.chairs,customChairs:l.custom,sweet:l.sweet,front:l.front}}else if(n.id==="stage"&&i.size==="custom")r=[i.cl||12,i.cw||8];else if(n.sizes){const l=n.sizes[i.size]||n.sizes[n.def];r=[l[0],l[1]],s=l[2]||0}else r=n.dims;n.qty&&(a=i.qty==="auto"||!i.qty?ix(n.id,t.guests):+i.qty);for(let l=0;l<a;l++)e.push({key:n.qty?n.id+"-"+l:n.id,def:n,dims:r,seats:s,idx:l,n:a,...o})}return e}const ja=t=>t.seating+"/"+t.seatsPer+"/"+t.spacing+(t.seating==="mixed"?"/"+t.mixRound+"/"+t.mixBanquet:"");function Tu(t,e,n){const i=mi[t.tentType],r=Wt[t.seating],s=e+"x"+n,a=ex(t.tentType,e,n),o=ZS(t.guests,e,n,a,t.exits),l=$S(t.tentType,e,n,a).filter(Z=>Z.inner||!a.oval||!o.some(oe=>Math.hypot(Z.x-oe.x,Z.y-oe.y)<2.5)),c=l.filter(Z=>Z.inner),u=o.map(Z=>Z.zone),d=[];let f=!0;const p=Z=>Pa(a,Z,.5),x=Z=>!d.some(oe=>Xi(Z,ds(oe,1)))&&!u.some(oe=>Xi(Z,oe))&&!c.some(oe=>oe.x>Z.x&&oe.x<Z.x+Z.w&&oe.y>Z.y&&oe.y<Z.y+Z.h),_=(Z,oe)=>{if(p(Z)&&x(Z))return Z;const _e=Math.max(e,n);for(let me=.5;me<=_e;me+=.5)for(const Me of[me,-me]){const de={...Z};if(de[oe]+=Me,p(de)&&x(de))return de}if(a.oval){const me=oe==="x"?"y":"x";for(let Me=1;Me<=20;Me+=1)for(let de=0;de<=_e;de+=1)for(const C of[de,-de])for(const E of[Me,-Me]){const j={...Z};if(j[oe]+=C,j[me]+=E,p(j)&&x(j))return j}}return null},g=(Z,oe,_e,me,Me,de)=>{const C=Z==="top"||Z==="bottom",E=C?n:e,j=C?Me:de,se=me*j+(me-1),ne=E-2*Ei-se;if(oe==="dance"){const Ae=d.find(Ce=>Ce.def.id==="dance"),Se=Ae?C?Ae.x+Ae.w/2:Ae.y+Ae.h/2:E/2;oe=ne>0?(Se-se/2-Ei)/ne:.5}const Q=Ei+rt(oe,0,1)*Math.max(0,ne)+_e*(j+1);return C?{x:Q,y:Z==="top"?Ei:e-Ei-de,axis:"x"}:{x:Z==="left"?Ei:n-Ei-Me,y:Q,axis:"y"}},h=[];for(const Z of JS(t)){const oe=Z.def,_e=t.pos[Z.key];let me=null,Me=0;if(oe.free&&!(_e&&_e.t===s)){h.push(Z);continue}if(_e&&_e.t===s){Me=_e.rot;const[de,C]=Va(Z.dims,Me);me={x:_e.x,y:_e.y,w:de,h:C,fit:de<=n&&C<=e&&Pa(a,{x:_e.x,y:_e.y,w:de,h:C})}}else if(oe.dance){const[de,C]=Z.dims,E=d.filter(Q=>Q.wall==="left"),j=E.length?Math.max(...E.map(Q=>Q.x+Q.w))+2:(n-de)/2,se=(e-C)/2,ne=_({x:j,y:se,w:de,h:C},"x");me=ne?{...ne,fit:!0}:{x:j,y:se,w:de,h:C,fit:!1}}else{for(const de of oe.walls){Me=Mm[de];const[C,E]=Va(Z.dims,Me),j=g(de,oe.f,Z.idx,Z.n,C,E),se=_({x:j.x,y:j.y,w:C,h:E},j.axis);if(se){me={...se,fit:!0,wall:de};break}}if(!me){const de=oe.walls[0];Me=Mm[de];const[C,E]=Va(Z.dims,Me),j=g(de,oe.f,Z.idx,Z.n,C,E);me={x:j.x,y:j.y,w:C,h:E,fit:!1,wall:de}}}d.push({...me,key:Z.key,def:oe,dims:Z.dims,seats:Z.seats,rot:Me,chairs:Z.chairs,customChairs:Z.customChairs,sweet:Z.sweet,front:Z.front}),me.fit||(f=!1)}const v=d.filter(Z=>Z.def.id==="head").reduce((Z,oe)=>Z+oe.seats,0),y=r.kind==="none",S=r.kind==="mixed",N=r.kind==="chair",b=S?t.mixRound:t.seating,A=Z=>Z===b?t.seatsPer:Wt[Z].def,D=N?1:y?0:t.seatsPer,T=Math.max(0,t.guests-v),M=S?Math.min(Math.max(0,Math.floor(t.mixBanquet)||0),Math.ceil(T/8)):0,P=S?Math.ceil(Math.max(0,T-M*8)/t.seatsPer):0,V=S?M+P:D?Math.ceil(T/D):0,L=t.spacing==="tight"?.9:1,z=Z=>Z.def.id==="dance"?1.5:Z.def.id==="stage"&&N?6:1,G=[...d.map(Z=>ds(Z,z(Z))),...u,...c.map(Z=>({x:Z.x-.4,y:Z.y-.4,w:.8,h:.8}))];N&&G.push({x:0,y:e/2-2.5,w:n,h:5});const O=N?3:.5,ee=Z=>{const oe=Wt[Z.type||b],[_e,me]=Va([2*oe.hx,2*oe.hy],Z.rot||0);return{x:Z.x-_e/2,y:Z.y-me/2,w:_e,h:me}},U=!y&&t.tables&&t.tables.t===s&&t.tables.s===ja(t)?t.tables.pts:null,W=!!(U&&t.tables.manual),X=W?U.length:V;if(U)for(const Z of U.slice(0,X))G.push(ee(Z));const te=(Z,oe)=>{const _e=Wt[Z],me=_e.kind==="banquet",Me=me?_e.cx:_e.cx*L,de=_e.cy*L,{hx:C,hy:E}=_e;let j=[],se=-1e9;for(let ne=0;ne<de-1e-6;ne+=.5){const Q=[],Ae=[];for(let qe=O+E+ne;qe<=e-O-E+1e-6;qe+=de)Ae.push(qe);for(const qe of Ae){let pe=O+C,Ne=0;for(;pe<=n-O-C+1e-6;){const Ve={x:pe-C,y:qe-E,w:2*C,h:2*E};let Ue=null;if(a.oval&&!Pa(a,Ve,O)){pe+=.5;continue}for(const Le of oe)Xi(Ve,Le)&&(!Ue||Le.x+Le.w>Ue.x+Ue.w)&&(Ue=Le);Ue?pe=Math.max(pe+.5,Ue.x+Ue.w+C):(Q.push({x:pe,y:qe,type:Z}),Ne++,pe+=Me,me&&Ne%4===0&&(pe+=4))}}const Se=Ae.length?Math.abs(Ae[0]-E-O-(e-O-Ae[Ae.length-1]-E)):0,Ce=Q.length*100-Se;Ce>se&&(se=Ce,j=Q)}return j},ce=d.find(Z=>Z.def.id==="dance")||d.find(Z=>Z.def.id==="stage")||d.find(Z=>Z.def.id==="head"),ze=N?{x:0,y:e/2}:ce?{x:ce.x+ce.w/2,y:ce.y+ce.h/2}:{x:n/2,y:e/2},J=Z=>Math.hypot(Z.x-ze.x,Z.y-ze.y),he=(Z,oe)=>J(Z)-J(oe),ye=y?[]:te(b,G),fe=U?U.slice(0,X).map(Z=>({x:Z.x,y:Z.y,rot:Z.rot||0,type:Z.type||b,pinned:!0,set:Z.seats})):[],Fe=[...ye].sort(he);let He=[],Ge=fe.length+ye.length;if(!W&&S){const Z=Math.max(0,M-fe.filter(Me=>Me.type==="banquet").length),oe=Math.max(0,P-fe.filter(Me=>Me.type!=="banquet").length),_e=Z?te("banquet",G).sort((Me,de)=>he(de,Me)).slice(0,Z):[],me=_e.length?te(b,[...G,..._e.map(Me=>ds(ee(Me),1.5))]).sort(he):Fe;He=[..._e,...me.slice(0,oe)],Ge=fe.length+_e.length+(_e.length<Z?Math.min(me.length,oe):me.length)}else W||(He=Fe.slice(0,Math.max(0,V-fe.length)));const We=(U?[...fe,...He]:He.sort((Z,oe)=>Z.y-oe.y||Z.x-oe.x)).map((Z,oe)=>({...Z,type:Z.type||b,n:oe+1}));for(const Z of We)Z.seats=Z.set??A(Z.type);if(!W&&We.length===V&&V){let Z=We.reduce((_e,me)=>_e+me.seats,0)-T;const oe=[...We].reverse().sort((_e,me)=>(_e.type==="banquet")-(me.type==="banquet"));for(const _e of oe){if(Z<=0)break;if(_e.set!=null)continue;const me=Math.min(Z,_e.seats-1);_e.seats-=me,Z-=me}}const re=We.reduce((Z,oe)=>Z+oe.seats,0);W&&(Ge=We.length);const be=Z=>Z.filter(oe=>!We.some(_e=>Xi(ee(oe),ds(ee(_e),-.05)))),F={[b]:be(Fe)};S&&(F.banquet=be(te("banquet",G).sort(he)));for(const Z of We){if(!Z.pinned)continue;const oe=ee(Z);Z.bad=!Pa(a,oe)||d.some(_e=>Xi(oe,_e))||c.some(_e=>_e.x>oe.x&&_e.x<oe.x+oe.w&&_e.y>oe.y&&_e.y<oe.y+oe.h)||We.some(_e=>_e!==Z&&Xi(ds(oe,-.05),ee(_e)))}if(h.length){const Z=[...We.map(ee),...u,...c.map(Me=>({x:Me.x-.4,y:Me.y-.4,w:.8,h:.8}))],oe=d.find(Me=>Me.def.id==="bar")||d.find(Me=>Me.def.id==="dance"),_e=oe?{x:oe.x+oe.w/2,y:oe.y+oe.h/2}:{x:n/2,y:e},me=[];for(let Me=.5;Me<=e-5.5+1e-6;Me+=1)for(let de=.5;de<=n-5.5+1e-6;de+=1)me.push({x:de,y:Me});me.sort((Me,de)=>Math.hypot(Me.x+2.5-_e.x,Me.y+2.5-_e.y)-Math.hypot(de.x+2.5-_e.x,de.y+2.5-_e.y));for(const Me of h){const[de,C]=Me.dims,E=me.find(se=>{const ne={x:se.x,y:se.y,w:de,h:C};return Pa(a,ne,.5)&&!d.some(Q=>Xi(ne,ds(Q,.5)))&&!Z.some(Q=>Xi(ne,Q))}),j=E?{x:E.x,y:E.y,w:de,h:C,fit:!0}:{x:Ei,y:Ei,w:de,h:C,fit:!1};d.push({...j,key:Me.key,def:Me.def,dims:Me.dims,seats:0,rot:0}),j.fit||(f=!1)}}return{W:e,L:n,T:i,S:r,sh:a,area:wm(a),perim:Mo(a),poles:l,exits:o,chands:YS(t,e,n),items:d,units:We,needed:V,per:D,base:b,nB:M,seated:T,headSeats:v,capacity:Ge,seats:re,manual:W,freeSpots:F,allFit:f,ok:f&&(y?wm(a)>=t.guests*no:W||Ge>=V)}}function Do(t,e,n){const i=(t.tentAngle||0)*Math.PI/180,r=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i));return{ex:(e*r+n*s)/2,ey:(e*s+n*r)/2}}const Hf=(t,e,n,i)=>{const{ex:r,ey:s}=Do(t,n+2*i,e+2*i);return 2*r<=t.siteL+1e-6&&2*s<=t.siteW+1e-6};function Eo(t){const e=mi[t.tentType];if(t.tentSize!=="auto"){const[s,a]=t.tentSize.split("x").map(Number);return{...Tu(t,s,a),auto:!1}}const n=[...e.sizes].sort((s,a)=>s[0]*s[1]-a[0]*a[1]||s[0]-a[0]);let i=null;for(const[s,a]of n){const o=Tu(t,s,a);if(o.ok){if(Hf(t,s,a,e.stake))return{...o,auto:!0};i||(i=o)}}const r=n[n.length-1];return{...i||Tu(t,r[0],r[1]),auto:!0}}function Vf(t,e){return t.climate==="fans"?Math.ceil(e/600):t.climate==="heat-mild"?Math.max(1,Math.ceil(e*80/15e4)):t.climate==="heat-cold"?Math.max(1,Math.ceil(e*160/15e4)):0}function as(t,e){return e?{l:t.photo.pw*t.photo.fpp,w:t.photo.ph*t.photo.fpp}:{l:t.siteL,w:t.siteW}}function Jr(t,e,n){const{W:i,L:r}=e,s=as(t,n),{ex:a,ey:o}=Do(t,r,i);let l=s.l/2,c=s.w/2;return t.tentPos&&(l=t.tentPos.x+r/2,c=t.tentPos.y+i/2,n?(l=rt(l,0,s.l),c=rt(c,0,s.w)):(l=s.l<2*a?s.l/2:rt(l,a,s.l-a),c=s.w<2*o?s.w/2:rt(c,o,s.w-o))),{x:l-r/2,y:c-i/2}}const jf=["siteName","sitePreset","siteL","siteW","surface","address","photo","siteItems"],Tc=t=>Object.fromEntries(jf.map(e=>[e,t[e]])),Gf=t=>Object.fromEntries(Object.keys(t).filter(e=>!jf.includes(e)&&e!=="tents"&&e!=="active").map(e=>[e,t[e]]));function $r(t,e=t.active){return{...Tc(t),...t.tents[e]}}function eM(t,e,n){for(const i of Object.keys(n))jf.includes(i)?t[i]=n[i]:t.tents[e][i]=n[i]}function Jh(t){if(!t)return Am(ii(wc));if(Array.isArray(t.tents)&&t.tents.length){const e=Tc(wu(Tc(t))),n=t.tents.map((i,r)=>({...Gf(wu({...e,...i})),name:i.name||`Tent ${r+1}`}));return{...e,tents:n,active:rt(t.active|0,0,n.length-1)}}return Am(wu(t))}function Am(t){return{...Tc(t),tents:[{...Gf(t),name:t.name||"Tent 1"}],active:0}}function tM(t){const e=Gf(ii(wc));for(const n of Object.keys(e.acc))e.acc[n].on=!1;return{...e,name:`Tent ${t}`,guests:50,stringLights:!1,generator:!1}}function Wf(t,e,n){const i=Jr(t,e,n),r=e.T.stake,{ex:s,ey:a}=Do(t,e.L+2*r,e.W+2*r);return{cx:i.x+e.L/2,cy:i.y+e.W/2,ex:s,ey:a}}const nM=(t,e,n,i,r)=>Math.max(0,Math.min(t+n,r.cx+r.ex)-Math.max(t-n,r.cx-r.ex))*Math.max(0,Math.min(e+i,r.cy+r.ey)-Math.max(e-i,r.cy-r.ey));function La(t,e,n,i,r,s,a,o=!1){let l=null,c=1/0;const u=(h,v)=>Math.min(h+a,v/2),d=(h,v)=>Math.max(v-h-a,v/2),f=u(e,t.l),p=d(e,t.l),x=u(n,t.w),_=d(n,t.w),g=Math.max(1,Math.min(t.l,t.w)/80);for(let h=x;h<=_+1e-6;h+=g)for(let v=f;v<=p+1e-6;v+=g){let y;if(o)y=i.reduce((S,N)=>S+nM(v,h,e,n,N),0)*1e3+Math.hypot(v-r.x,h-r.y);else{if(i.some(S=>Math.abs(v-S.cx)<e+S.ex+s&&Math.abs(h-S.cy)<n+S.ey+s))continue;y=Math.hypot(v-r.x,h-r.y)}y<c&&(c=y,l={x:v,y:h})}return l}function hx(t,e,n,i){const r=$r(t,e),s=Eo(r),a=as(r,n),o=t.tents.map((x,_)=>_).filter(x=>x!==e).map(x=>{const _=$r(t,x);return Wf(_,Eo(_),n)}),l=s.T.stake,{ex:c,ey:u}=Do(r,s.L+2*l,s.W+2*l),d=i||{x:a.l/2,y:a.w/2},f=n?0:20,p=La(a,c,u,o,d,20,f)||La(a,c,u,o,d,12,f)||La(a,c,u,o,d,12,0)||La(a,c,u,o,d,0,0)||La(a,c,u,o,d,0,0,!0);t.tents[e].tentPos=p?{x:p.x-s.L/2,y:p.y-s.W/2}:null}function bu(t,e){for(const p of t.tents)p.tentPos=null;if(t.tents.length<2)return;const n=t.tents.map((p,x)=>({i:x,a:Eo($r(t,x)).area})).sort((p,x)=>x.a-p.a).map(p=>p.i),i=new Set,r={x:0,y:0};for(const p of n){const x=t.tents;t.tents=x.filter((_,g)=>g===p||i.has(g)),hx(t,t.tents.indexOf(x[p]),e,r),t.tents=x,i.add(p)}const s=t.tents.map((p,x)=>{const _=$r(t,x);return Wf(_,Eo(_),e)}),a=Math.min(...s.map(p=>p.cx-p.ex)),o=Math.max(...s.map(p=>p.cx+p.ex)),l=Math.min(...s.map(p=>p.cy-p.ey)),c=Math.max(...s.map(p=>p.cy+p.ey)),u=as($r(t,0),e),d=u.l/2-(a+o)/2,f=u.w/2-(l+c)/2;if(o-a<=u.l&&c-l<=u.w)for(const p of t.tents)p.tentPos&&(p.tentPos={x:p.tentPos.x+d,y:p.tentPos.y+f})}function $f(t,e,n){const i=Jr(t,e,n),r=e.T.stake,s=i.x+e.L/2,a=i.y+e.W/2,o=(t.tentAngle||0)*Math.PI/180,l=Math.cos(o),c=Math.sin(o),u=e.L/2+r,d=e.W/2+r;return[[-u,-d],[u,-d],[u,d],[-u,d]].map(([f,p])=>[s+f*l-p*c,a+f*c+p*l])}function wo(t,e){for(const n of[t,e])for(let i=0;i<n.length;i++){const[r,s]=n[i],[a,o]=n[(i+1)%n.length],l=o-s,c=r-a,u=t.map(([f,p])=>f*l+p*c),d=e.map(([f,p])=>f*l+p*c);if(Math.max(...u)<Math.min(...d)||Math.max(...d)<Math.min(...u))return!1}return!0}function iM([t,e],[n,i],[r,s]){const a=r-n,o=s-i,l=rt(((t-n)*a+(e-i)*o)/(a*a+o*o||1),0,1);return Math.hypot(t-n-l*a,e-i-l*o)}function rM(t,e){let n=1/0;for(const[i,r]of[[t,e],[e,t]])for(const s of i)for(let a=0;a<r.length;a++)n=Math.min(n,iM(s,r[a],r[(a+1)%r.length]));return n}function sM(t,e,n){const i=[];if(t.length<2)return i;const r=t.map((o,l)=>$f(o,e[l],n));for(let o=0;o<t.length;o++)for(let l=o+1;l<t.length;l++){const c=t[o].name,u=t[l].name;if(wo(r[o],r[l]))i.push(["bad",`${c} and ${u} overlap on the site (including stake and guy line areas). Drag one apart on the site plan.`]);else{const d=rM(r[o],r[l]);d<20&&i.push(["warn",`${c} and ${u} are ${Math.floor(d)}' apart between stake lines. The fire code generally asks for 20' between tents, with exceptions for smaller combined areas; confirm with the local fire marshal.`])}}const s=e.reduce((o,l)=>o+l.area,0),a=t.reduce((o,l)=>o+l.guests,0);return i.push(["info",`${t.length} tents on site: ${Math.round(s).toLocaleString()} sq ft under cover for ${a} guests in total.`]),i}function fn({value:t,onValue:e,valid:n=()=>!0,parse:i=parseFloat,...r}){const[s,a]=Ie.useState(String(t)),[o,l]=Ie.useState(!1);return Ie.useEffect(()=>{o||a(String(t))},[t,o]),m.jsx("input",{type:"number",...r,value:s,onFocus:()=>l(!0),onBlur:()=>l(!1),onChange:c=>{const u=c.target.value;a(u);const d=i(u,10);n(d)&&e(d)}})}const aM={foodtruck:{label:"Food truck",short:"FOOD TRUCK",l:26,w:8.5,h:11,color:"#e8893a"},vehicle:{label:"Show vehicle",short:"SHOW VEHICLE",l:18,w:7,h:6,color:"#4f8fd6"},vendor:{label:"Vendor station (10×10 canopy)",short:"VENDOR",l:10,w:10,h:9,color:"#f2f2ee"},stage:{label:"Stage area",short:"STAGE",l:32,w:24,h:4,color:"#59606b",roof:22},restroom:{label:"Restroom station",short:"RESTROOMS",l:24,w:4,h:7.5,color:"#2f9e6a",unit:4},handwash:{label:"Hand-wash station",short:"WASH",l:4,w:4,h:4.5,color:"#6fc1d8"},parking:{label:"Parking area",short:"PARKING",l:120,w:60,h:0,color:"#2f6fd6",parking:!0},seating:{label:"Picnic seating area",short:"SEATING",l:40,w:30,h:0,color:"#b58a52",flat:!0},gate:{label:"Entry gate / tickets",short:"ENTRY",l:20,w:8,h:8,color:"#d64545"},firstaid:{label:"First aid",short:"FIRST AID",l:10,w:10,h:9,color:"#ffffff",cross:!0},generator:{label:"Generator",short:"GEN",l:14,w:7,h:7,color:"#c9b03a"},trash:{label:"Trash & recycling",short:"TRASH",l:8,w:6,h:4,color:"#3e4752"}},yr=An?aM:{},es=t=>yr[t.type]||{label:t.type,short:"",l:t.l,w:t.w,h:0,color:"#999"};function bc(t,e){const n=t[e];if(n.name)return n.name;const i=t.filter(s=>s.type===n.type),r=es(n).label.split(" (")[0];return i.length>1?`${r} ${i.indexOf(n)+1}`:r}const Xf={rect:"Rectangle",thrust:"Thrust (runway)",arc:"Rounded front",round:"Round",octagon:"Octagon",L:"L-shape (side wing)"},oM=24,Cm=(t,e,n,i,r,s,a=oM)=>Array.from({length:a+1},(o,l)=>{const c=r+(s-r)*l/a;return[t+n*Math.cos(c),e+i*Math.sin(c)]});function Xc(t){const{l:e,w:n}=t,i=t.type==="stage"?t.shape:"rect";if(i==="thrust"){const r=n*.6,s=Math.min(e,Math.max(6,e*.22)),a=(e-s)/2;return[[0,0],[e,0],[e,r],[a+s,r],[a+s,n],[a,n],[a,r],[0,r]]}if(i==="arc"){const r=n*.45;return[[0,0],[e,0],...Cm(e/2,r,e/2,n-r,0,Math.PI)]}if(i==="round")return Cm(e/2,n/2,e/2,n/2,0,2*Math.PI,40).slice(0,-1);if(i==="octagon"){const r=Math.min(e,n)*.29;return[[r,0],[e-r,0],[e,r],[e,n-r],[e-r,n],[r,n],[0,n-r],[0,r]]}if(i==="L"){const r=e*.45,s=n*.5;return[[0,0],[e,0],[e,n],[r,n],[r,s],[0,s]]}return[[0,0],[e,0],[e,n],[0,n]]}function _A(t){return t.shape==="thrust"?[[0,0],[t.l,0],[t.l,t.w*.6],[0,t.w*.6]]:Xc(t)}function xA(t,e=Xc(t)){const n=(t.rot||0)*Math.PI/180,i=Math.cos(n),r=Math.sin(n);return e.map(([s,a])=>{const o=s-t.l/2,l=a-t.w/2;return[t.x+o*i-l*r,t.y+o*r+l*i]})}const lM=t=>Math.abs(t.reduce((e,[n,i],r)=>{const[s,a]=t[(r+1)%t.length];return e+n*a-s*i},0))/2;function dx(t){const e=lM(Xc(t)),n=(t.shape||"rect")!=="rect";return{area:Math.round(e),decks:Math.ceil(e/32*(n?1.1:1))}}function Ac(t){const e=(t.rot||0)*Math.PI/180,n=Math.cos(e),i=Math.sin(e),r=t.l/2,s=t.w/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([a,o])=>[t.x+a*n-o*i,t.y+a*i+o*n])}function vA(t,e,n=0){for(let i=(t||[]).length-1;i>=0;i--){const r=t[i],s=-(r.rot||0)*Math.PI/180,a=e.x-r.x,o=e.y-r.y,l=a*Math.cos(s)-o*Math.sin(s),c=a*Math.sin(s)+o*Math.cos(s);if(Math.abs(l)<=r.l/2+n&&Math.abs(c)<=r.w/2+n)return i}return-1}function cM(t,e,n,i){const r=yr[t],s=e[0],a=as(s,i),o=s.siteItems||[],l=e.map((p,x)=>$f(p,n[x],i)),c={type:t,l:r.l,w:r.w,rot:0},u=p=>{const x=Ac({...p,l:p.l+6,w:p.w+6});return!l.some(_=>wo(x,_))&&!o.some(_=>wo(x,Ac(_)))},d=Math.max(2,Math.min(a.l,a.w)/60),f=i?0:5;for(let p=a.w-f-r.w/2;p>=f+r.w/2;p-=d)for(let x=f+r.l/2;x<=a.l-f-r.l/2;x+=d){const _={...c,x:Math.round(x),y:Math.round(p)};if(u(_))return _}return{...c,x:Math.round(a.l/2),y:Math.round(a.w/2)}}const qf=t=>{var e;return Math.max(1,Math.round(t.l/(((e=yr[t.type])==null?void 0:e.unit)||4)))},fx=t=>Math.max(0,Math.floor(t.l*t.w/330));function ed(t){const e=es(t),n=`${Math.round(t.l)}' × ${Math.round(t.w)}'`;if(e.unit)return`${n} · ${qf(t)} units`;if(e.parking)return`${n} · about ${fx(t)} cars`;if(t.type==="stage"){const i=t.shape||"rect";return`${n}${i!=="rect"?` · ${Xf[i].split(" (")[0].replace(/^[A-Z](?=[a-z])/,r=>r.toLowerCase())}`:""} · ${dx(t).area} sq ft`}return n}function uM(t){if(!t||!t.length)return[];const e={};for(const r of t)(e[r.type]=e[r.type]||[]).push(r);const n=[{grp:"Outdoor site items"}],i=(r,s,a="")=>n.push({item:r,qty:s,note:a});for(const[r,s]of Object.entries(e)){const a=yr[r];if(a)if(r==="restroom")i("Portable restroom units",s.reduce((o,l)=>o+qf(l),0),`${s.length} station${s.length>1?"s":""}; plan 1 unit per 50–100 attendees, plus ADA units`);else if(r==="parking")i("Parking areas",s.length,`About ${s.reduce((o,l)=>o+fx(l),0)} cars in all · cones, signs and attendants`);else if(r==="foodtruck")i("Food truck spaces",s.length,"Spaces only; trucks come with the vendors · power and grey-water plan");else if(r==="vehicle")i("Show vehicle spaces",s.length,"Display spots; drip pans under each vehicle");else if(r==="vendor")i("10' × 10' canopy, vendor station",s.length,"With weights, one 6' table and 2 chairs each");else if(r==="stage")for(const o of s){const l=o.shape||"rect",{area:c,decks:u}=dx(o);i(`Outdoor stage, ${l==="rect"?"":Xf[l].replace(/^[A-Z](?=[a-z])/,d=>d.toLowerCase())+", "}${Math.round(o.l)}' × ${Math.round(o.w)}'`,1,`${c} sq ft · about ${u} 4' × 8' decks${l==="rect"?"":" (shaped stage: allow for decks cut to fit)"} · skirting, steps${yr.stage.roof?", roof":""}`)}else r==="handwash"?i("Hand-wash stations",s.length,"Near restrooms and food"):r==="seating"?i("Picnic tables",s.reduce((o,l)=>o+Math.max(1,Math.floor(l.l*l.w/120)),0),"About 1 per 120 sq ft of seating area · seats 8 each"):r==="gate"?i("Entry gate / ticket booth",s.length,"With barricades and signage"):r==="firstaid"?i("First aid station",s.length,"10' × 10' canopy with cot, table and chairs"):r==="generator"?i("Generator, towable",s.length,"Size to the load; keep 20'+ from tents"):r==="trash"?i("Trash & recycling stations",s.length,"Barrels with liners, emptied through the day"):i(a.label,s.length)}return n}function hM(t,e,n){const i=t[0],r=i.siteItems||[],s=[];if(!r.length)return s;const a=as(i,n),o=t.map((f,p)=>$f(f,e[p],n));r.forEach((f,p)=>{const x=Ac(f),_=bc(r,p),g=o.findIndex(h=>wo(x,h));g>=0&&s.push(["bad",`${_} sits on ${t[g].name}'s stake and guy line area. Drag it clear on the site plan.`]),x.some(([h,v])=>h<-.5||v<-.5||h>a.l+.5||v>a.w+.5)&&s.push(["warn",`${_} runs past the edge of the site.`]),f.type==="generator"&&o.some(h=>wo(Ac({...f,l:f.l+40,w:f.w+40}),h))&&s.push(["warn",`${_} is within 20' of a tent. Keep generators 20' or more away.`])});const l=t.reduce((f,p)=>f+p.guests,0),c=r.filter(f=>f.type==="restroom").reduce((f,p)=>f+qf(p),0);c&&l&&c*100<l&&s.push(["warn",`${c} restroom units for ${l} attendees under the tents. Plan on about 1 unit per 50–100 attendees, more with alcohol or long hours.`]);const u={};for(const f of r)u[f.type]=(u[f.type]||0)+1;const d=(f,p)=>{var _;const x=(((_=yr[f])==null?void 0:_.label)||f).split(" (")[0].split(" / ")[0].toLowerCase();return p===1?x:/recycling|aid$/.test(x)?x+" stations":x+"s"};return s.push(["info",`Outdoors: ${Object.entries(u).map(([f,p])=>`${p} ${d(f,p)}`).join(", ")}.`]),s}const Na=()=>aa(ni("tlp-saved"))||{},dM=()=>{const t=aa(ni("tlp-current-name"));return typeof t=="string"?t:""};function fM({model:t,ph:e,photoSrc:n,onLoad:i,onNew:r}){const[s,a]=Ie.useState(Na),[o,l]=Ie.useState(dM),[c,u]=Ie.useState(o),[d,f]=Ie.useState(o),[p,x]=Ie.useState("Layouts save in this browser only."),[_,g]=Ie.useState(null),h=Ie.useRef(0),v=Object.keys(s).sort(),y=v.includes(d)?d:v[0]||"";Ie.useEffect(()=>()=>clearTimeout(h.current),[]);const S=L=>{l(L),aa(ni("tlp-current-name"),L)},N=()=>{clearTimeout(h.current),g(null)},b=(L,z)=>_===L?(N(),!0):(clearTimeout(h.current),g(L),x(z),h.current=setTimeout(()=>g(null),4e3),!1),A=()=>{b("new",o?`Click “Confirm new” to start a blank layout. Unsaved changes to “${o}” will be lost.`:"Click “Confirm new” to start a blank layout. This unsaved plan will be lost.")&&(r(),S(""),u(""),x("Started a new layout. Name it and click Save."))},D=()=>{const L=c.trim();if(!L){N(),x("Type a name for this layout, then click Save.");return}const z=Na();if(z[L]&&L!==o&&!b("save",`“${L}” already exists. Click “Overwrite” to replace it, or change the name.`))return;N();let G=z[L]?`Updated “${L}”.`:`Saved “${L}” in this browser.`;z[L]={...ii(t),photoSrc:e?n:null};try{localStorage.setItem(ni("tlp-saved"),JSON.stringify(z))}catch{z[L].photoSrc=null,z[L].photo=null,G=`Saved “${L}” without the photo; browser storage is full.`;try{localStorage.setItem(ni("tlp-saved"),JSON.stringify(z))}catch{x("This browser will not save layouts.");return}}a(Na()),f(L),S(L),x(G)},T=()=>{const L=Na()[y];L&&(N(),i(L),S(y),u(y),x(`Loaded “${y}”. Save updates it; change the name to save a copy.`))},M=()=>{if(!y||!b("delete",`Click “Confirm delete” to delete “${y}”.`))return;const L=Na();delete L[y],aa(ni("tlp-saved"),L),y===o&&S(""),a(L),x(`Deleted “${y}”.`)},P=c.trim(),V=_==="save"?"Overwrite":s[P]&&P===o?"Update":"Save";return m.jsxs("section",{children:[m.jsx("h2",{children:"Saved layouts"}),m.jsx("p",{className:"hint",children:o?m.jsxs(m.Fragment,{children:["Editing ",m.jsx("strong",{children:o})]}):"New layout (not saved yet)"}),m.jsxs("div",{className:"btnrow",children:[m.jsx("input",{type:"text",placeholder:"Layout name",style:{flex:1},value:c,onChange:L=>{u(L.target.value),_==="save"&&N()},onKeyDown:L=>{L.key==="Enter"&&D()}}),m.jsx("button",{className:_==="save"?"btn danger":"btn primary",onClick:D,children:V}),m.jsx("button",{className:_==="new"?"btn danger":"btn",onClick:A,children:_==="new"?"Confirm new":"New"})]}),m.jsxs("div",{className:"btnrow",children:[m.jsx("select",{style:{flex:1},"aria-label":"Saved layouts",value:y,onChange:L=>f(L.target.value),children:v.length?v.map(L=>m.jsx("option",{value:L,children:L},L)):m.jsx("option",{value:"",children:"No saved layouts yet"})}),m.jsx("button",{className:"btn",disabled:!v.length,onClick:T,children:"Load"}),m.jsx("button",{className:"btn danger",disabled:!v.length,onClick:M,children:_==="delete"?"Confirm delete":"Delete"})]}),m.jsx("p",{className:"hint",children:p})]})}const px={bottom:"Bottom side",top:"Top side",left:"Left end",right:"Right end"},mx={entrance:"Entrance",exit:"Exit only"};function pM({st:t,lay:e,update:n,sel:i,onSelect:r}){const s=$c(t.guests),a=e.exits.length,o=!!t.exits,l=c=>n(u=>{u.exits||(u.exits=ax(e)),c(u.exits,u)});return m.jsxs("section",{children:[m.jsx("h2",{children:"Entrances & exits"}),m.jsxs("p",{className:"hint",children:[a," opening",a===1?"":"s"," · ",s," required for ",t.guests," guests."," ",o?"Placed by you.":"Placed automatically; any change below switches to your own layout.",a<s&&m.jsxs("b",{style:{color:"var(--bad)"},children:[" Add ",s-a," more."]})]}),m.jsx("div",{className:"exits",children:e.exits.map((c,u)=>m.jsxs("div",{className:"exitrow",style:i==="x:"+u?{background:"var(--accent-soft)"}:void 0,children:[m.jsx("button",{className:"btn sm no",title:"Select in the plan",onClick:()=>r("x:"+u),children:u+1}),m.jsx("select",{"aria-label":`Opening ${u+1} side`,value:c.side,onChange:d=>{const f=d.target.value;l(p=>{p[u]={...p[u],side:f}})},children:Object.entries(px).map(([d,f])=>m.jsx("option",{value:d,children:f},d))}),m.jsx("select",{"aria-label":`Opening ${u+1} type`,value:c.kind,onChange:d=>{const f=d.target.value;l(p=>{p[u]={...p[u],kind:f}})},children:Object.entries(mx).map(([d,f])=>m.jsx("option",{value:d,children:f},d))}),m.jsx("button",{className:"btn sm danger","aria-label":`Remove opening ${u+1}`,title:"Remove",onClick:()=>{l(d=>{d.splice(u,1)}),i&&i.startsWith("x:")&&r(null)},children:"✕"}),m.jsxs("span",{className:"pos",title:"Distance from the left or top corner",children:[Math.round(c.c),"'"]}),m.jsx("input",{type:"range",min:0,max:100,step:1,"aria-label":`Opening ${u+1} position along the wall`,value:Math.round(c.f*100),onChange:d=>{const f=+d.target.value/100;l(p=>{p[u]={...p[u],f}})}})]},u))}),m.jsxs("div",{className:"btnrow",children:[m.jsx("button",{className:"btn",onClick:()=>l(c=>{c.push(ox(c))}),children:"+ Add exit"}),o&&m.jsx("button",{className:"btn",onClick:()=>{n(c=>{c.exits=null}),r(null)},children:"Reset to auto"})]}),m.jsx("p",{className:"hint",children:"Tip: click an exit in the tent plan and drag it along the wall, or press Delete to remove it."})]})}function mM({tents:t,active:e,st:n,update:i,onPick:r,onAdd:s,onDuplicate:a,onRemove:o}){const[l,c]=Ie.useState(-1),u=Ie.useRef(0);Ie.useEffect(()=>()=>clearTimeout(u.current),[]);const d=f=>{if(l!==f){c(f),clearTimeout(u.current),u.current=setTimeout(()=>c(-1),3e3);return}clearTimeout(u.current),c(-1),o(f)};return m.jsxs("section",{children:[m.jsx("h2",{children:"Tents"}),t.map((f,p)=>m.jsxs("div",{className:"tentrow",children:[m.jsxs("button",{className:"btn pick","aria-pressed":p===e,onClick:()=>r(p),title:"Edit this tent",children:[f.name," ",m.jsxs("span",{className:"hint",style:{display:"inline"},children:["· ",f.lay.W,"' × ",f.lay.L,"' · ",f.guests]})]}),t.length>1?m.jsx("button",{className:"btn sm danger",onClick:()=>d(p),"aria-label":`Remove ${f.name}`,children:l===p?"Confirm":"✕"}):m.jsx("span",{}),m.jsx("span",{})]},p)),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Name of selected tent"}),m.jsx("input",{type:"text",value:n.name||"",onChange:f=>{const p=f.target.value;i(x=>{x.name=p})}})]}),m.jsxs("div",{className:"btnrow",children:[m.jsx("button",{className:"btn",onClick:s,children:"+ Add tent"}),m.jsx("button",{className:"btn",onClick:a,children:"Duplicate selected"})]}),m.jsx("p",{className:"hint",children:"The settings below apply to the selected tent. On the site plan, click a tent to select it and drag it into place."})]})}function gM({items:t,sel:e,onAdd:n,onPick:i,onRemove:r}){return m.jsxs("section",{children:[m.jsx("h2",{children:"Outdoor site items"}),m.jsx("p",{className:"hint",children:"Add what goes around the tents. Each one lands on open ground on the site plan; drag it into place, and use the bar above the plan to resize, turn or remove it."}),m.jsx("div",{className:"siteadd",children:Object.entries(yr).map(([s,a])=>m.jsxs("button",{className:"btn sm",onClick:()=>n(s),title:`Add a ${a.label.toLowerCase()} (${a.l}' × ${a.w}')`,children:[m.jsx("span",{className:"sw",style:{background:a.color},"aria-hidden":"true"}),"+ ",a.label.split(" (")[0]]},s))}),t.length>0&&m.jsx("div",{className:"sitelist",children:t.map((s,a)=>m.jsxs("div",{className:"row"+(e==="s:"+a?" sel":""),role:"button",tabIndex:0,onClick:()=>i(a),onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),i(a))},children:[m.jsx("span",{className:"sw",style:{background:es(s).color},"aria-hidden":"true"}),m.jsx("span",{className:"nm",children:bc(t,a)}),m.jsx("span",{className:"sz",children:ed(s)}),m.jsx("button",{className:"btn sm danger","aria-label":`Remove ${bc(t,a)}`,onClick:o=>{o.stopPropagation(),r(a)},children:"×"})]},a))})]})}const wn=t=>t.map(([e,n])=>m.jsx("option",{value:e,children:n},e));function _M({st:t,update:e}){return m.jsx("div",{className:"acc",children:zf.map(n=>{const i=t.acc[n.id]||{on:!1},r=l=>e(c=>{c.acc[n.id]=c.acc[n.id]||{},l(c.acc[n.id],c)}),s=m.jsxs("label",{className:"chk",children:[m.jsx("input",{type:"checkbox",checked:!!i.on,onChange:l=>{const c=l.target.checked;r(u=>{u.on=c})}})," ",n.label]}),a=l=>r((c,u)=>{c.size=l,delete u.pos[n.id]});if(n.dance){const l=Bs[i.finish]||Bs.cherry,c=i.size==="auto"||i.size==="custom"||l.sizes.includes(i.size)?i.size:"auto";return m.jsxs(Ie.Fragment,{children:[m.jsxs("div",{className:"accrow",children:[s,m.jsxs("select",{"aria-label":"Dance floor size",value:c||"auto",disabled:!i.on,onChange:u=>a(u.target.value),children:[m.jsx("option",{value:"auto",children:"Auto size"}),l.sizes.map(u=>m.jsx("option",{value:u,children:`${u.replace("x","' × ")}'`},u)),m.jsx("option",{value:"custom",children:"Custom size"})]})]}),i.on&&m.jsxs("div",{className:"dsub",children:[m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Finish"}),m.jsx("select",{value:i.finish||"cherry",onChange:u=>{const d=u.target.value;r((f,p)=>{f.finish=d,f.size!=="auto"&&f.size!=="custom"&&!Bs[d].sizes.includes(f.size)&&(f.size="auto"),delete p.pos.dance})},children:wn(Object.entries(Bs).map(([u,d])=>[u,d.label]))})]}),m.jsxs("label",{className:"chk",children:[m.jsx("input",{type:"checkbox",checked:!!i.wrap,onChange:u=>{const d=u.target.checked;r(f=>{f.wrap=d})}})," Vinyl wrap"]})]}),i.on&&i.size==="custom"&&m.jsxs("div",{className:"dcustom",children:[m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Length (ft)"}),m.jsx(fn,{min:4,max:100,step:4,value:i.cl||20,valid:u=>u>=4,onValue:u=>r((d,f)=>{d.cl=Math.min(100,u),delete f.pos.dance})})]}),m.jsx("span",{className:"x",children:"×"}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Width (ft)"}),m.jsx(fn,{min:4,max:100,step:4,value:i.cw||20,valid:u=>u>=4,onValue:u=>r((d,f)=>{d.cw=Math.min(100,u),delete f.pos.dance})})]})]})]},n.id)}if(n.id==="stage")return m.jsxs(Ie.Fragment,{children:[m.jsxs("div",{className:"accrow",children:[s,m.jsxs("select",{"aria-label":"Stage size",value:i.size||n.def,disabled:!i.on,onChange:l=>a(l.target.value),children:[Object.keys(n.sizes).map(l=>m.jsx("option",{value:l,children:l},l)),m.jsx("option",{value:"custom",children:"Custom size"})]})]}),i.on&&i.size==="custom"&&m.jsxs("div",{className:"dcustom",children:[m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Front width (ft)"}),m.jsx(fn,{min:4,max:80,step:1,value:i.cl||12,valid:l=>l>=4,onValue:l=>r((c,u)=>{c.cl=Math.min(100,l),delete u.pos.stage})})]}),m.jsx("span",{className:"x",children:"×"}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Depth (ft)"}),m.jsx(fn,{min:4,max:60,step:1,value:i.cw||8,valid:l=>l>=4,onValue:l=>r((c,u)=>{c.cw=Math.min(100,l),delete u.pos.stage})})]})]})]},n.id);if(n.id==="head"){const l=c=>r((u,d)=>{c(u),delete u.chairs,delete d.pos.head});return m.jsxs(Ie.Fragment,{children:[m.jsxs("div",{className:"accrow",children:[s,m.jsxs("select",{"aria-label":"Head table size",value:i.size||n.def,disabled:!i.on,onChange:c=>{const u=c.target.value;l(d=>{u==="custom"&&!d.seats&&(d.seats=(n.sizes[d.size]||n.sizes[n.def])[2]),d.size=u})},children:[Object.keys(n.sizes).map(c=>m.jsx("option",{value:c,children:c},c)),m.jsx("option",{value:"custom",children:"Custom seats"})]})]}),i.on&&i.size==="custom"&&m.jsxs("div",{className:"dcustom",children:[m.jsxs("label",{className:"field",children:[m.jsxs("span",{children:["Seats (1–",Wl,")"]}),m.jsx(fn,{min:1,max:Wl,step:1,value:lx(i.seats),parse:parseInt,valid:c=>Number.isInteger(c)&&c>=1&&c<=Wl,onValue:c=>l(u=>{u.seats=c})})]}),m.jsxs("span",{className:"hint",children:[ux(i).dims[0],"' long"]})]}),i.on&&Array.isArray(i.chairs)&&m.jsxs("div",{className:"dsub",children:[m.jsxs("span",{className:"hint",children:[i.chairs.length," seat",i.chairs.length===1?"":"s",", arranged by hand"]}),m.jsx("button",{className:"btn sm",onClick:()=>r(c=>{delete c.chairs}),children:"Reset seats"})]})]},n.id)}let o=m.jsx("span",{});return n.sizes?o=m.jsx("select",{"aria-label":`${n.label} size`,value:i.size||n.def,disabled:!i.on,onChange:l=>{const c=l.target.value;r(u=>{u.size=c})},children:Object.keys(n.sizes).map(l=>m.jsx("option",{value:l,children:l},l))}):n.qty&&(o=m.jsxs("select",{"aria-label":`${n.label} count`,value:i.qty||"auto",disabled:!i.on,onChange:l=>{const c=l.target.value;r(u=>{u.qty=c})},children:[m.jsx("option",{value:"auto",children:"Auto count"}),(n.qtyOpts||[1,2,3,4]).map(l=>m.jsx("option",{value:String(l),children:l},l))]})),m.jsxs("div",{className:"accrow",children:[s,o]},n.id)})})}function xM({st:t,lay:e,model:n,tents:i,active:r,sel:s,onSelect:a,update:o,ph:l,photoSrc:c,onPhotoFile:u,onSatellite:d,onCalib:f,onPhotoDel:p,onPhotoScale:x,onLoadLayout:_,onNewLayout:g,onPickTent:h,onAddTent:v,onDuplicateTent:y,onRemoveTent:S,onArrange:N,onAddTable:b,onResetTables:A,siteItems:D=[],onAddSiteItem:T,onPickSiteItem:M,onRemoveSiteItem:P}){const V=Ie.useRef(null),L=Math.round(Math.min(2e3,Math.max(250,Math.max(t.siteL,t.siteW)*1.5))/50)*50,[z,G]=Ie.useState("auto"),[O,ee]=Ie.useState({busy:!1,msg:"",err:!1}),U=async()=>{if(!O.busy){ee({busy:!0,msg:"Finding the address…",err:!1});try{const re=await d(t.address,z==="auto"?L:+z);ee({busy:!1,msg:`Loaded the satellite view of ${re.label}.`,err:!1})}catch(re){ee({busy:!1,msg:re.message||"Could not load the satellite image.",err:!0})}}},W=re=>be=>{const F=be.target.value;o(Z=>{Z[re]=F})},X=re=>be=>{const F=be.target.checked;o(Z=>{Z[re]=F})},te=Wt[t.seating],ce=te.kind==="mixed",ze=ce?Wt[t.mixRound].seats:te.seats,J=e?e.units.filter(re=>re.type==="banquet").length:0,he=e?e.units.length-J:0,ye=l?t.photo.calibrated?`Scale set: 1 ft = ${(1/t.photo.fpp).toFixed(1)} photo pixels. Drag the tent on the site plan to place it.`:"Scale is a rough guess. Click Set scale and mark two points a known distance apart (for example, a distance you paced out or measured).":"Type the site address and click Get satellite image; the scale is set for you. Or upload a photo or paste one here (Ctrl+V) and set the scale by clicking two points a known distance apart.",fe=!!t.tentCustom&&t.tentSize!=="auto"&&!mi[t.tentType].shape,[Fe,He]=t.tentSize==="auto"?[e?e.W:20,e?e.L:20]:t.tentSize.split("x").map(Number),Ge=(re,be)=>o(F=>{F.tentCustom=!0,F.tentSize=`${re}x${be}`}),We=t.tentSize!=="auto"&&(Object.keys(t.pos).length>0||!!t.tables);return m.jsxs("aside",{className:"rail","aria-label":"Layout settings",children:[m.jsxs("section",{children:[m.jsx("h2",{children:"Location"}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Event or site name"}),m.jsx("input",{type:"text",value:t.siteName,onChange:W("siteName")})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Site type"}),m.jsx("select",{value:t.sitePreset,onChange:re=>{const be=re.target.value;o(F=>{F.sitePreset=be;const Z=Kh[be];Z.l&&(F.siteL=Z.l,F.siteW=Z.w,F.surface=Z.surface),F.tentPos=null}),i.length>1&&N()},children:wn(Object.entries(Kh).map(([re,be])=>[re,be.label]))})]}),m.jsxs("div",{className:"row2",children:[m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Usable length (ft)"}),m.jsx(fn,{min:20,max:2e3,step:5,value:t.siteL,valid:re=>re>=20,onValue:re=>o(be=>{be.siteL=Math.min(2e3,re),be.sitePreset="custom"})})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Usable depth (ft)"}),m.jsx(fn,{min:20,max:2e3,step:5,value:t.siteW,valid:re=>re>=20,onValue:re=>o(be=>{be.siteW=Math.min(2e3,re),be.sitePreset="custom"})})]})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Ground surface"}),m.jsx("select",{value:t.surface,onChange:W("surface"),children:wn([["grass","Grass / lawn"],["gravel","Gravel"],["asphalt","Asphalt"],["concrete","Concrete"]])})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Site address"}),m.jsx("input",{type:"text",value:t.address||"",onChange:W("address"),placeholder:"Street, city, state",onKeyDown:re=>{re.key==="Enter"&&U()}})]}),m.jsxs("div",{className:"btnrow",children:[m.jsx("button",{className:"btn primary",disabled:O.busy||!(t.address||"").trim(),onClick:U,children:O.busy?"Loading…":"Get satellite image"}),m.jsxs("select",{"aria-label":"Satellite image width",style:{flex:1},value:z,onChange:re=>G(re.target.value),children:[m.jsxs("option",{value:"auto",children:["Auto: ",L," ft wide"]}),[150,250,400,600,1e3,1500].map(re=>m.jsxs("option",{value:re,children:[re," ft wide"]},re))]})]}),O.msg&&m.jsx("p",{className:"hint"+(O.err?" err":""),role:"status",children:O.msg}),m.jsxs("div",{className:"field",children:[m.jsx("span",{children:"Site photo"}),m.jsxs("div",{className:"btnrow",children:[m.jsx("button",{className:"btn",onClick:()=>V.current.click(),children:"Upload photo"}),m.jsx("input",{type:"file",ref:V,accept:"image/*",hidden:!0,onChange:re=>{u(re.target.files&&re.target.files[0]),re.target.value=""}}),m.jsx("button",{className:"btn",disabled:!l,onClick:f,children:"Set scale"}),m.jsx("button",{className:"btn danger",disabled:!l,onClick:p,children:"Remove"})]}),m.jsx("p",{className:"hint",children:ye})]}),l&&m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Photo scale: width covered (ft)"}),m.jsx(fn,{min:10,max:5e3,step:1,value:Math.round(t.photo.pw*t.photo.fpp),valid:re=>re>=10,onValue:re=>x(re/(t.photo.pw*t.photo.fpp))})]}),m.jsxs("label",{className:"field",children:[m.jsxs("span",{children:[i.length>1?`${t.name} rotation`:"Tent rotation"," on site: ",m.jsxs("b",{children:[t.tentAngle||0,"°"]})]}),m.jsx("input",{type:"range",min:-180,max:180,step:1,value:t.tentAngle||0,onChange:re=>{const be=+re.target.value;o(F=>{F.tentAngle=be})}})]})]}),m.jsx(mM,{tents:i,active:r,st:t,update:o,onPick:h,onAdd:v,onDuplicate:y,onRemove:S}),Object.keys(yr).length>0&&m.jsx(gM,{items:D,sel:s,onAdd:T,onPick:M,onRemove:P}),m.jsxs("section",{children:[m.jsxs("h2",{children:[Ht.guestsWord," & seating",i.length>1?` · ${t.name}`:""]}),m.jsxs("div",{className:"field",children:[m.jsx("span",{children:Ht.guestsWord==="Guests"?"Guest count":"Attendance (per tent)"}),m.jsxs("div",{className:"guests",children:[m.jsx(fn,{min:1,max:2e3,"aria-label":"Guest count",value:t.guests,parse:parseInt,valid:re=>re>=1,onValue:re=>o(be=>{be.guests=Math.min(2e3,re)})}),m.jsx("input",{type:"range",min:10,max:Ht.id==="festival"?2e3:600,step:5,"aria-label":"Guest count slider",value:Math.min(Ht.id==="festival"?2e3:600,t.guests),onChange:re=>{const be=parseInt(re.target.value,10);o(F=>{F.guests=be})}})]})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Seating style"}),m.jsx("select",{value:t.seating,onChange:re=>{const be=re.target.value;o(F=>{F.seating=be,F.seatsPer=Wt[be==="mixed"?F.mixRound||"rounds60":be].def})},children:wn(Object.entries(Wt).map(([re,be])=>[re,be.label]))})]}),ce&&m.jsxs("div",{className:"row2",children:[m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Round tables"}),m.jsx("select",{value:t.mixRound,onChange:re=>{const be=re.target.value;o(F=>{F.mixRound=be,F.seatsPer=Wt[be].def})},children:wn([["rounds60",'60" rounds'],["rounds72",'72" rounds']])})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Banquet tables (8 seats)"}),m.jsx(fn,{min:0,max:250,"aria-label":"Banquet tables",value:t.mixBanquet,parse:parseInt,valid:re=>re>=0,onValue:re=>o(be=>{be.mixBanquet=Math.min(250,re)})})]})]}),te.kind!=="none"&&m.jsxs("div",{className:"row2",children:[m.jsxs("label",{className:"field",children:[m.jsx("span",{children:ce?"Seats per round":"Seats per table"}),m.jsx("select",{value:t.seatsPer,disabled:ze.length<2,onChange:re=>{const be=+re.target.value;o(F=>{F.seatsPer=be})},children:wn(ze.map(re=>[re,re===1?"—":re]))})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Spacing"}),m.jsx("select",{value:t.spacing,onChange:W("spacing"),children:wn([["comfortable","Comfortable"],["tight","Tight"]])})]})]}),te.kind==="none"?m.jsx("p",{className:"hint",children:"No tables or chairs are planned. The tent is sized for standing room (about 6–8 sq ft per guest) plus the floor items below."}):e&&m.jsxs("div",{className:"field",children:[m.jsxs("span",{children:[te.kind==="chair"?`${e.units.length} chairs`:ce?`${he} rounds · ${J} banquet · ${e.seats} seats`:`${e.units.length} tables · ${e.seats} seats`," · ",e.manual?"set by you":"auto from guest count"]}),m.jsxs("div",{className:"btnrow",children:[ce?m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"btn sm",onClick:()=>b(t.mixRound),children:"+ Add round"}),m.jsx("button",{className:"btn sm",onClick:()=>b("banquet"),children:"+ Add banquet"})]}):m.jsx("button",{className:"btn sm",onClick:()=>b(),children:te.kind==="chair"?"+ Add chair":"+ Add table"}),t.tables&&m.jsx("button",{className:"btn sm",onClick:A,children:"Reset to auto"})]}),m.jsx("p",{className:"hint",children:te.kind==="chair"?"Click a chair in the tent plan to move or remove it.":"Click a table in the tent plan to move it, switch it between round and banquet, add or remove chairs, or remove it."})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Chair style"}),m.jsx("select",{value:t.chairStyle,onChange:W("chairStyle"),children:wn(VS.map(re=>[re,re]))})]})]}),m.jsxs("section",{children:[m.jsxs("h2",{children:["Tent",i.length>1?` · ${t.name}`:""]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Tent style"}),m.jsx("select",{value:t.tentType,onChange:re=>{const be=re.target.value;o(F=>{F.tentType=be,F.tentSize="auto",F.tentCustom=!1,F.pos={}})},children:wn(Object.entries(mi).map(([re,be])=>[re,be.label]))})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Size"}),m.jsx("select",{value:fe?"custom":t.tentSize,onChange:re=>{const be=re.target.value;o(F=>{be==="custom"?(F.tentCustom=!0,F.tentSize==="auto"&&e&&(F.tentSize=`${e.W}x${e.L}`)):(F.tentCustom=!1,F.tentSize=be)})},children:wn([["auto","Auto (smallest that fits)"],...mi[t.tentType].sizes.map(([re,be])=>[`${re}x${be}`,`${re}' × ${be}'`]),...mi[t.tentType].shape?[]:[["custom","Custom size…"]]])})]}),fe&&m.jsxs("div",{className:"row2",children:[m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Width (ft)"}),m.jsx(fn,{min:10,max:200,step:5,value:Fe,valid:re=>re>=10,onValue:re=>Ge(Math.min(200,re),He)})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Length (ft)"}),m.jsx(fn,{min:10,max:400,step:5,value:He,valid:re=>re>=10,onValue:re=>Ge(Fe,Math.min(400,re))})]})]}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Sidewalls"}),m.jsx("select",{value:t.walls,onChange:W("walls"),children:wn([["none","None (open sides)"],["solid","Solid white"],["window","Cathedral window"],["clear","Clear"]])})]}),We&&m.jsx("p",{className:"hint",children:"Size locked because you moved an item. Pick Auto to resize again."})]}),e&&m.jsx(pM,{st:t,lay:e,update:o,sel:s,onSelect:a}),m.jsxs("section",{children:[m.jsx("h2",{children:"Floor items"}),m.jsx(_M,{st:t,update:o})]}),m.jsxs("section",{children:[m.jsx("h2",{children:"Comfort, lighting & power"}),m.jsxs("label",{className:"field",children:[m.jsx("span",{children:"Climate control"}),m.jsx("select",{value:t.climate,onChange:W("climate"),children:wn([["none","None"],["fans","Summer: industrial fans"],["heat-mild","Cool evening: heat (50s °F)"],["heat-cold","Cold: heat (30s–40s °F)"]])})]}),m.jsxs("label",{className:"chk",children:[m.jsx("input",{type:"checkbox",checked:!!t.stringLights,onChange:X("stringLights")})," Bistro string lights"]}),t.stringLights&&m.jsxs("label",{className:"field",style:{paddingLeft:24},children:[m.jsx("span",{children:"String light layout"}),m.jsx("select",{value:t.lightStyle||"swag",onChange:W("lightStyle"),children:wn(Object.entries(HS))})]}),m.jsxs("label",{className:"chk",children:[m.jsx("input",{type:"checkbox",checked:!!t.chandeliers,onChange:X("chandeliers")})," Chandeliers"]}),t.chandeliers&&e&&m.jsxs("div",{className:"field",style:{paddingLeft:24},children:[m.jsxs("span",{children:[e.chands.length," chandelier",e.chands.length===1?"":"s"," · ",t.chandList?"placed by you":"auto, one per 20' bay"]}),m.jsxs("div",{className:"btnrow",children:[m.jsx("button",{className:"btn sm",onClick:()=>o(re=>{re.chandList||(re.chandList=rx(e)),re.chandList.push(sx(e))}),children:"+ Add chandelier"}),t.chandList&&m.jsx("button",{className:"btn sm",onClick:()=>{o(re=>{re.chandList=null}),a(null)},children:"Reset to auto"})]}),m.jsx("p",{className:"hint",children:"Click a chandelier in the tent plan to drag it, or press Delete to remove it."})]}),m.jsxs("label",{className:"chk",children:[m.jsx("input",{type:"checkbox",checked:!!t.uplights,onChange:X("uplights")})," LED uplighting"]}),m.jsxs("label",{className:"chk",children:[m.jsx("input",{type:"checkbox",checked:!!t.generator,onChange:X("generator")})," Generator"]})]}),m.jsx(fM,{model:n,ph:l,photoSrc:c,onLoad:_,onNew:g})]})}const vM=()=>m.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:m.jsx("path",{d:"M10 3v9m0 0-3.5-3.5M10 12l3.5-3.5M4 14v2.5h12V14",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})});function yM({doc:t,onClose:e}){const n=Ie.useMemo(()=>URL.createObjectURL(t.blob),[t]),i=Ie.useRef(null),r=navigator.pdfViewerEnabled!==!1;Ie.useEffect(()=>()=>URL.revokeObjectURL(n),[n]),Ie.useEffect(()=>{var u;const o=document.activeElement;(u=i.current)==null||u.focus();const l=d=>{d.key==="Escape"&&e()};document.addEventListener("keydown",l);const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{var d;document.removeEventListener("keydown",l),document.body.style.overflow=c,(d=o==null?void 0:o.focus)==null||d.call(o)}},[e]);const s=()=>{const o=URL.createObjectURL(t.blob),l=document.createElement("a");l.href=o,l.download=t.filename,document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(o),6e4)},a=Math.max(1,Math.round(t.blob.size/1024));return m.jsx("div",{className:"pdfmodal",onMouseDown:o=>{o.target===o.currentTarget&&e()},children:m.jsxs("div",{className:"pdfbox",role:"dialog","aria-modal":"true","aria-labelledby":"pdfprev-title",children:[m.jsxs("div",{className:"pdfhead",children:[m.jsx("h2",{id:"pdfprev-title",children:"PDF preview"}),m.jsxs("span",{className:"fname",title:t.filename,children:[t.filename," · ",a.toLocaleString()," KB"]}),m.jsxs("button",{className:"btn primary",onClick:s,children:[m.jsx(vM,{}),"Download"]}),m.jsx("button",{className:"btn",ref:i,onClick:e,children:"Close"})]}),r?m.jsx("iframe",{className:"pdfframe",title:"PDF preview",src:`${n}#view=FitH`}):m.jsxs("div",{className:"pdffall",children:[m.jsx("p",{children:"This browser can't show the PDF here."}),m.jsx("p",{children:m.jsx("a",{className:"btn",href:n,target:"_blank",rel:"noopener",children:"Open in a new tab"})})]})]})})}const gx="pk.eyJ1IjoiYnJhbmRvbi1ydXN6IiwiYSI6ImNtd2R2b3NkbjA4ZHUyem90cHBzNm9yejAifQ.KihkXRppp9PQT0rvZLk6_A",SM="© Mapbox © OpenStreetMap © Maxar",td=1e3,MM=700,_x=3.28084,xx=40075016686e-3/512;function EM(t){const e=t.trim().match(/^(-?\d+(?:\.\d+)?)\s*[, ]\s*(-?\d+(?:\.\d+)?)$/);if(!e)return null;const n=+e[1],i=+e[2];return Math.abs(n)<=90&&Math.abs(i)<=180?{lat:n,lng:i,label:`${n.toFixed(6)}, ${i.toFixed(6)}`}:null}async function wM(t){var l,c,u;const e=(t||"").trim();if(!e)throw new Error("Type the site address first.");const n=EM(e);if(n)return n;const i=`https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(e)}&limit=1&country=us&access_token=${gx}`;let r;try{r=await fetch(i)}catch{throw new Error("Could not reach Mapbox. Check the internet connection.")}if(r.status===401||r.status===403)throw new Error("Mapbox refused the access token.");if(!r.ok)throw new Error(`Mapbox address search failed (${r.status}).`);const s=(l=(await r.json()).features)==null?void 0:l[0];if(!s)throw new Error("Mapbox could not find that address. Try adding the city and state.");const[a,o]=s.geometry.coordinates;return{lat:o,lng:a,label:((c=s.properties)==null?void 0:c.full_address)||((u=s.properties)==null?void 0:u.name)||e}}const TM=(t,e)=>Math.log2(xx*Math.cos(t*Math.PI/180)*td/(e/_x));async function bM(t,e,n){const i=Math.min(22,Math.max(12,+TM(t,n).toFixed(2))),r=`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${e.toFixed(6)},${t.toFixed(6)},${i}/${td}x${MM}@2x?attribution=false&access_token=${gx}`;let s;try{s=await fetch(r)}catch{throw new Error("Could not reach Mapbox. Check the internet connection.")}if(s.status===401||s.status===403)throw new Error("Mapbox refused the access token.");if(!s.ok)throw new Error(`Mapbox satellite image failed (${s.status}).`);const a=await createImageBitmap(await s.blob()),o=document.createElement("canvas");o.width=a.width,o.height=a.height,o.getContext("2d").drawImage(a,0,0);const c=xx*Math.cos(t*Math.PI/180)/2**i*_x*td/a.width;return{src:o.toDataURL("image/jpeg",.85),pw:a.width,ph:a.height,fpp:c,zoom:i}}function Rm({it:t,i:e,sel:n,fs:i}){const r=es(t),{l:s,w:a}=t,o=n==="s:"+e,l=`translate(${je(t.x)} ${je(t.y)}) rotate(${t.rot||0}) translate(${je(-s/2)} ${je(-a/2)})`,c=Math.min(i*.75,a*.55,s/Math.max(3,(r.short||"").length)*1.6),u=[];let d=0;if(r.parking){if(u.push(m.jsx("rect",{className:"parkhalo",width:s,height:a},"h"),m.jsx("rect",{className:"sitem park",width:s,height:a},"b")),a>=30)for(let f=9;f<s-.1;f+=9)u.push(m.jsx("line",{className:"stall",x1:f,y1:0,x2:f,y2:18},"a"+f),m.jsx("line",{className:"stall",x1:f,y1:a-18,x2:f,y2:a},"b"+f));d=Math.min(i*2.4,s*.5,a*.5),d>1&&u.push(m.jsxs("g",{className:"parksign",children:[m.jsx("rect",{x:s/2-d/2,y:a/2-d/2,width:d,height:d,rx:d*.16}),m.jsx("text",{x:s/2,y:a/2+d*.04,fontSize:d*.78,children:"P"})]},"p"))}else if(r.flat)u.push(m.jsx("rect",{className:"sitem flat",width:s,height:a,style:{fill:r.color}},"b"));else if(t.type==="stage")u.push(m.jsx("polygon",{className:"sitem",points:Xc(t).map(([f,p])=>`${je(f)},${je(p)}`).join(" "),style:{fill:r.color}},"b"),m.jsx("path",{className:"stagefront",d:`M${je(s/2-2)} ${je(a+1)} L${je(s/2+2)} ${je(a+1)} L${je(s/2)} ${je(a+3)} Z`},"f"));else{if(u.push(m.jsx("rect",{className:"sitem",width:s,height:a,rx:Math.min(s,a)*.08,style:{fill:r.color}},"b")),t.type==="foodtruck"&&u.push(m.jsx("rect",{className:"cab",x:s-6,y:.6,width:5.4,height:a-1.2,rx:1},"c")),t.type==="vehicle"&&u.push(m.jsx("rect",{className:"cab",x:s*.3,y:.8,width:s*.4,height:a-1.6,rx:1.2},"c")),r.unit)for(let f=r.unit;f<s-.1;f+=r.unit)u.push(m.jsx("line",{className:"unitln",x1:f,y1:0,x2:f,y2:a},"u"+f));r.cross&&u.push(m.jsx("rect",{className:"cross",x:s/2-2,y:a/2-.6,width:4,height:1.2},"x1"),m.jsx("rect",{className:"cross",x:s/2-.6,y:a/2-2,width:1.2,height:4},"x2"))}return m.jsxs("g",{className:"siteitem"+(o?" sel":""),"data-site":e,transform:l,children:[u,o&&m.jsx("rect",{className:"selbox",x:-1,y:-1,width:s+2,height:a+2}),d>1&&a/2+d/2+c*1.3<a&&m.jsx("text",{className:"sitemt",x:s/2,y:a/2+d/2+c*.75,fontSize:c,children:r.short}),r.short&&!r.cross&&!(d>1)&&c>.5&&m.jsx("text",{className:"sitemt",x:s/2,y:t.type==="stage"&&t.shape==="thrust"?a*.3:a/2,fontSize:c,transform:a>s*1.4?`rotate(-90 ${s/2} ${a/2})`:void 0,children:r.short})]})}function AM({id:t,w:e,h:n,chairs:i,st:r,interactive:s,sel:a}){const o=[];let l=0;const c=()=>l++;if(t==="stage"){o.push(m.jsx("rect",{className:"stage",width:e,height:n},c()));for(let u=4;u<e-.1;u+=4)o.push(m.jsx("line",{className:"deck",x1:u,y1:0,x2:u,y2:n},c()));for(let u=8;u<n-.1;u+=8)o.push(m.jsx("line",{className:"deck",x1:0,y1:u,x2:e,y2:u},c()))}else if(t==="dance"){const u=No(r),d=u.tile;for(let f=0;f<e/d-.01;f++)for(let p=0;p<n/d-.01;p++)o.push(m.jsx("rect",{fill:u.colors[(f+p)%2],x:f*d,y:p*d,width:je(Math.min(d,e-f*d)),height:je(Math.min(d,n-p*d))},c()));o.push(m.jsx("rect",{className:"dfedge",width:e,height:n},c())),(r.acc.dance||{}).wrap&&o.push(m.jsx("circle",{className:"wrap",cx:e/2,cy:n/2,r:Math.min(e,n)*.3},c()))}else if(t==="head"){o.push(m.jsx("rect",{className:"tbl",x:0,y:n-3.5,width:e,height:2.5},c()));for(let u=8;u<e-.1;u+=8)o.push(m.jsx("line",{className:"tbl",x1:u,y1:n-3.5,x2:u,y2:n-1},c()));(i||[]).forEach((u,d)=>o.push(m.jsx("rect",{className:"chair"+(s?" hseat":"")+(s&&a==="h:"+d?" sel":""),"data-hseat":s?d:void 0,x:je(u.x-.65),y:je(u.y-.65),width:1.3,height:1.3,rx:.3},c())))}else if(t==="dj")o.push(m.jsx("rect",{className:"zone",width:e,height:n},c()),m.jsx("rect",{className:"tbl",x:1,y:2.8,width:e-2,height:2},c()),m.jsx("rect",{className:"stage",x:.3,y:n-1.5,width:1.2,height:1.2},c()),m.jsx("rect",{className:"stage",x:e-1.5,y:n-1.5,width:1.2,height:1.2},c()));else if(t==="buffet"){o.push(m.jsx("rect",{className:"zone",width:e,height:n},c()),m.jsx("rect",{className:"tbl",x:0,y:n/2-1.25,width:e,height:2.5},c()),m.jsx("line",{className:"tbl",x1:8,y1:n/2-1.25,x2:8,y2:n/2+1.25},c()));for(let u=1;u<e-1;u+=2.6)o.push(m.jsx("rect",{className:"chafer",x:u,y:n/2-.6,width:1.8,height:1.2,rx:.3},c()))}else t==="bar"?o.push(m.jsx("rect",{className:"zone",width:e,height:n},c()),m.jsx("rect",{className:"tbl",x:2,y:.5,width:e-4,height:1.5},c()),m.jsx("rect",{className:"stage",x:1,y:3,width:e-2,height:2.5},c())):t==="cake"?o.push(m.jsx("circle",{className:"tbl",cx:e/2,cy:n/2,r:2},c()),m.jsx("circle",{className:"chafer",cx:e/2,cy:n/2,r:.9},c())):t==="highboy"?o.push(m.jsx("circle",{className:"zone",cx:e/2,cy:n/2,r:2.3},c()),m.jsx("circle",{className:"tbl",cx:e/2,cy:n/2,r:1.25},c())):t==="gift"?o.push(m.jsx("rect",{className:"tbl",x:1,y:1.2,width:e-2,height:2.5},c())):t==="photo"?o.push(m.jsx("rect",{className:"zone",width:e,height:n},c()),m.jsx("rect",{className:"stage",x:1,y:.4,width:e-2,height:.7},c()),m.jsx("rect",{className:"stage",x:e/2-.6,y:n-2.2,width:1.2,height:1.2},c())):t==="booth"?o.push(m.jsx("rect",{className:"zone",width:e,height:n},c()),m.jsx("line",{className:"deck",x1:0,y1:0,x2:e,y2:n},c()),m.jsx("line",{className:"deck",x1:e,y1:0,x2:0,y2:n},c()),m.jsx("rect",{className:"tbl",x:2,y:n-3,width:e-4,height:2.5},c())):t==="foh"?o.push(m.jsx("rect",{className:"stage",width:e,height:n},c()),m.jsx("rect",{className:"tbl",x:1,y:2,width:e-2,height:2.5},c())):t==="info"||t==="merch"?o.push(m.jsx("rect",{className:"zone",width:e,height:n},c()),m.jsx("rect",{className:"tbl",x:1,y:1.2,width:e-2,height:2.5},c())):t==="firstaid"?o.push(m.jsx("rect",{className:"zone",width:e,height:n},c()),m.jsx("rect",{className:"tbl",x:1.5,y:1.5,width:6.5,height:2.5},c()),m.jsx("rect",{className:"cross",x:e/2-1.5,y:n-3,width:3,height:.8},c()),m.jsx("rect",{className:"cross",x:e/2-.4,y:n-4.1,width:.8,height:3},c())):t==="lounge"&&o.push(m.jsx("rect",{className:"zone",width:e,height:n},c()),m.jsx("rect",{className:"sofa",x:2,y:.6,width:e-4,height:2.6,rx:.6},c()),m.jsx("rect",{className:"sofa",x:1,y:5.6,width:2.6,height:2.6,rx:.5},c()),m.jsx("rect",{className:"sofa",x:e-3.6,y:5.6,width:2.6,height:2.6,rx:.5},c()),m.jsx("rect",{className:"tbl",x:e/2-2.5,y:4.6,width:5,height:2.4,rx:.3},c()));return m.jsx(m.Fragment,{children:o})}function CM({u:t,S:e,seatsPer:n}){const{x:i,y:r}=t,s=t.seats??n,a=[];let o=0;const l=()=>o++;if(e.kind==="round"){const c=e.r+.85;for(let u=0;u<s;u++){const d=u*2*Math.PI/s-Math.PI/2;a.push(m.jsx("circle",{className:"chair",cx:je(i+c*Math.cos(d)),cy:je(r+c*Math.sin(d)),r:.62},l()))}a.push(m.jsx("circle",{className:"tbl",cx:i,cy:r,r:e.r},l()),m.jsx("text",{className:"num seats",x:i,y:r,fontSize:e.r*.7,children:s},l()))}else if(e.kind==="banquet"){for(const[c,u]of Q_.slice(0,s))a.push(m.jsx("rect",{className:"chair",x:i+c-.6,y:r+u*2.05-.55,width:1.2,height:1.1,rx:.25},l()));a.push(m.jsx("rect",{className:"tbl",x:i-4,y:r-1.25,width:8,height:2.5},l()),m.jsx("text",{className:"num seats",x:i,y:r,fontSize:1.5,children:s},l()))}else e.kind==="chair"?a.push(m.jsx("rect",{className:"chair",x:i-.75,y:r-.75,width:1.5,height:1.5,rx:.3},l())):a.push(m.jsx("circle",{className:"tbl",cx:i,cy:r,r:e.r},l()),m.jsx("circle",{className:"chair",cx:i,cy:r,r:.4},l()));return m.jsx(m.Fragment,{children:a})}function vx({st:t,l:e,interactive:n,fs:i,sel:r}){const{W:s,L:a,sh:o}=e,l=e.T.stake,c=[];let u=0;const d=()=>u++,f="floor"+(t.tentType==="cleartop"?" clear":"");if(o.oval?(c.push(m.jsx("path",{className:"stake",d:Eu(o,l)},d())),c.push(m.jsx("path",{className:f,d:Eu(o)},d()))):(c.push(m.jsx("rect",{className:"stake",x:-l,y:-l,width:a+2*l,height:s+2*l,rx:l/2},d())),c.push(m.jsx("rect",{className:f,x:0,y:0,width:a,height:s},d()))),t.climate.startsWith("heat")){const _=Vf(t,e.area),g=Math.ceil(_/2),h=_-g,v=(y,S)=>{for(let N=0;N<y;N++){const b=(N+1)*a/(y+1),A=S?-7:s+3;c.push(m.jsx("line",{className:"duct",x1:b,y1:S?-3:s,x2:b,y2:S?0:s+3},d()),m.jsx("rect",{className:"heater",x:b-1.5,y:A,width:3,height:4},d()))}};v(g,!1),v(h,!0)}for(const _ of e.items){const[g,h]=_.dims,v=_.x+_.w/2,y=_.y+_.h/2;c.push(m.jsxs("g",{className:"item"+(n&&r===_.key?" sel":"")+(_.fit?"":" bad"),"data-key":n?_.key:void 0,transform:`translate(${je(v)} ${je(y)}) rotate(${_.rot}) translate(${-g/2} ${-h/2})`,children:[m.jsx("rect",{className:"hit",width:g,height:h}),m.jsx(AM,{id:_.def.id,w:g,h,chairs:_.chairs,st:t,interactive:n,sel:r})]},"i-"+_.key))}e.units.forEach((_,g)=>{const h=m.jsx(CM,{u:_,S:Wt[_.type]||e.S,seatsPer:t.seatsPer});if(!n){c.push(_.rot?m.jsx("g",{transform:`rotate(${_.rot} ${_.x} ${_.y})`,children:h},"u-"+g):m.jsx("g",{children:h},"u-"+g));return}const{hx:v,hy:y}=Wt[_.type]||e.S;c.push(m.jsxs("g",{className:"unit"+(r==="u:"+g?" sel":"")+(_.bad?" bad":""),"data-unit":g,transform:_.rot?`rotate(${_.rot} ${_.x} ${_.y})`:void 0,children:[m.jsx("rect",{className:"hit",x:je(_.x-v),y:je(_.y-y),width:2*v,height:2*y}),h]},"u-"+g))});for(const _ of e.poles)c.push(_.inner?m.jsx("circle",{className:"pole inner",cx:je(_.x),cy:je(_.y),r:.55},d()):m.jsx("rect",{className:"pole",x:je(_.x)-.35,y:je(_.y)-.35,width:.7,height:.7},d()));const p=t.walls==="none"?"wall open":"wall";if(o.oval)for(const _ of nx(o,e.exits))c.push(m.jsx("polyline",{className:p,fill:"none",points:_.map(([g,h])=>`${je(g)},${je(h)}`).join(" ")},d()));else for(const _ of["top","bottom","left","right"]){const g=_==="top"||_==="bottom",h=g?a:s,v=e.exits.filter(N=>N.side===_).map(N=>[N.c-3,N.c+3]).sort((N,b)=>N[0]-b[0]);let y=0;const S=[];for(const[N,b]of v)S.push([y,N]),y=b;S.push([y,h]);for(const[N,b]of S){if(b-N<.01)continue;const A=_==="top"||_==="left"?0:g?s:a;c.push(g?m.jsx("line",{className:p,x1:je(N),y1:A,x2:je(b),y2:A},d()):m.jsx("line",{className:p,x1:A,y1:je(N),x2:A,y2:je(b)},d()))}}const x=t.lightStyle||"swag";if(t.stringLights&&x!=="swag"&&c.push(m.jsx("path",{className:"light",d:Eu(o,-Ec)},d())),t.stringLights&&x!=="perimeter"){const _=Math.max(1,Math.round(a/10)),g=[];for(let h=0;h<=_;h++){const v=h*a/_,y=di(o,v);g.push(`${je(v)},${je(h%2?s-y:y)}`)}c.push(m.jsx("polyline",{className:"light",points:g.join(" ")},d()))}e.chands.forEach((_,g)=>{const h=je(_.x),v=je(_.y);c.push(m.jsxs("g",{className:n?"chandg"+(r==="c:"+g?" sel":""):void 0,"data-chand":n?g:void 0,children:[n&&m.jsx("circle",{className:"hit",cx:h,cy:v,r:Math.max(1.6,i*1.2)}),m.jsx("circle",{className:"chand",cx:h,cy:v,r:i*.45}),m.jsx("circle",{className:"light",cx:h,cy:v,r:i*.95,style:{strokeDasharray:"none",strokeWidth:1}})]},"c-"+g))}),e.exits.forEach((_,g)=>{const h=_.main?"ENTRANCE · EXIT":"EXIT",v=[];if(_.side==="bottom")v.push(m.jsx("line",{className:"exitarrow",x1:_.c,y1:_.p-2,x2:_.c,y2:_.p+2,markerEnd:"url(#arr)"},"a"),m.jsx("text",{className:"exitt",x:_.c,y:_.p+2.6+i,fontSize:i*.9,children:h},"t"));else if(_.side==="top")v.push(m.jsx("line",{className:"exitarrow",x1:_.c,y1:_.p+2,x2:_.c,y2:_.p-2,markerEnd:"url(#arr)"},"a"),m.jsx("text",{className:"exitt",x:_.c,y:_.p-2.8,fontSize:i*.9,children:h},"t"));else{const y=_.p,S=_.side==="right"?1:-1;v.push(m.jsx("line",{className:"exitarrow",x1:y-2*S,y1:_.c,x2:y+2*S,y2:_.c,markerEnd:"url(#arr)"},"a"),m.jsx("text",{className:"exitt",transform:`translate(${y+S*(2.8+i*.5)} ${_.c}) rotate(${S*90})`,fontSize:i*.9,children:h},"t"))}c.push(m.jsxs("g",{className:n?"exitg"+(r==="x:"+g?" sel":""):void 0,"data-exit":n?g:void 0,children:[n&&m.jsx("circle",{className:"hit",cx:je(_.x),cy:je(_.y),r:4}),v]},"x-"+g))});for(const _ of e.items){if(!_.def.short)continue;const g=_.x+_.w/2,h=_.y+_.h/2,v=_.def.id,y=_.h>_.w*1.25;let S=_.def.short;(v==="dance"||v==="stage")&&(S+=` ${_.dims[0]}×${_.dims[1]}`);const N=Math.min(i,(y?_.h:_.w)/(S.length*.5));c.push(m.jsx("text",{className:"lbl"+(v==="stage"?" inv":""),fontSize:je(N),transform:`translate(${je(g)} ${je(h)})${y?" rotate(-90)":""}`,children:S},d()))}return m.jsx(m.Fragment,{children:c})}function Pm({x:t,y:e,maxLen:n,fs:i}){const r=n<=40?5:n<=90?10:n<=180?20:50;return m.jsxs(m.Fragment,{children:[m.jsx("rect",{className:"sb1",x:t,y:e,width:r,height:i*.45}),m.jsx("rect",{className:"sb2",x:t+r,y:e,width:r,height:i*.45}),m.jsx("text",{className:"sbt",x:t,y:e+i*1.4,fontSize:i*.75,children:"0"}),m.jsx("text",{className:"sbt",x:t+r,y:e+i*1.4,fontSize:i*.75,children:r}),m.jsxs("text",{className:"sbt",x:t+2*r,y:e+i*1.4,fontSize:i*.75,children:[2*r," FT"]})]})}function al({x0:t,y0:e,len:n,horiz:i,off:r,fs:s,label:a}){if(i){const l=e-r;return m.jsxs(m.Fragment,{children:[m.jsx("line",{className:"ext",x1:t,y1:e,x2:t,y2:l-1}),m.jsx("line",{className:"ext",x1:t+n,y1:e,x2:t+n,y2:l-1}),m.jsx("line",{className:"dim",x1:t,y1:l,x2:t+n,y2:l}),m.jsx("line",{className:"dim",x1:t-.7,y1:l+.7,x2:t+.7,y2:l-.7}),m.jsx("line",{className:"dim",x1:t+n-.7,y1:l+.7,x2:t+n+.7,y2:l-.7}),m.jsx("text",{className:"dimt",x:t+n/2,y:l-.6,fontSize:s*.85,children:a})]})}const o=t-r;return m.jsxs(m.Fragment,{children:[m.jsx("line",{className:"ext",x1:t,y1:e,x2:o-1,y2:e}),m.jsx("line",{className:"ext",x1:t,y1:e+n,x2:o-1,y2:e+n}),m.jsx("line",{className:"dim",x1:o,y1:e,x2:o,y2:e+n}),m.jsx("line",{className:"dim",x1:o-.7,y1:e+.7,x2:o+.7,y2:e-.7}),m.jsx("line",{className:"dim",x1:o-.7,y1:e+n+.7,x2:o+.7,y2:e+n-.7}),m.jsx("text",{className:"dimt",transform:`translate(${o-.6} ${e+n/2}) rotate(-90)`,fontSize:s*.85,children:a})]})}const Lm=()=>m.jsx("defs",{children:m.jsx("marker",{id:"arr",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"5",markerHeight:"5",orient:"auto-start-reverse",children:m.jsx("path",{d:"M0 0 L10 5 L0 10 z",fill:"var(--ok)"})})});function RM({t,i:e,active:n,sel:i,ph:r,fs:s,multi:a}){const{st:o,lay:l}=t,{W:c,L:u}=l,d=l.T.stake,f=Jr(o,l,r),p=`translate(${je(f.x+u/2)} ${je(f.y+c/2)}) rotate(${o.tentAngle||0}) translate(${-u/2} ${-c/2})`,x=u+d+20,_=c/2-2,g=e===n&&i==="__tent";return m.jsxs(m.Fragment,{children:[r&&m.jsxs("g",{transform:p,children:[m.jsx("rect",{className:"setback",x:-20,y:-20,width:u+40,height:c+40,rx:20,style:{strokeWidth:2}}),m.jsx("text",{className:"sett",x:u/2,y:-20-s*.5,fontSize:s*.8,textAnchor:"middle",style:{paintOrder:"stroke",stroke:"var(--tent)",strokeWidth:"3px"},children:"20' CLEARANCE"})]}),m.jsx("g",{className:"tentg"+(g?" sel":"")+(a&&e===n?" active":""),"data-key":`__tent:${e}`,transform:p,children:m.jsx(vx,{st:o,l,interactive:!1,fs:Math.min(s,rt(Math.max(u,c)/50,.9,2.4)),sel:i})}),o.generator&&m.jsxs("g",{transform:p,children:[m.jsx("line",{className:"dim",x1:u,y1:_+2,x2:x,y2:_+2,style:{strokeDasharray:"4 3"}}),m.jsx("rect",{className:"gen",x,y:_,width:7,height:4}),m.jsx("text",{className:"dimt",x:x+3.5,y:_-1,fontSize:s*.7,children:"GENERATOR · 20' MIN."})]}),a&&m.jsx("text",{className:"tentname",x:je(f.x+u/2),y:je(f.y+c/2),fontSize:s*1.1,children:o.name})]})}function PM({st:t,lay:e,tents:n,active:i=0,view:r,sel:s,calib:a,ph:o,photoSrc:l,svgRef:c,dragging:u,...d}){const{W:f,L:p}=e,x=e.T.stake,_=[u?"dragging":"",a&&r==="site"?"calibrating":""].filter(Boolean).join(" ")||void 0;if(r==="tent"){const A=rt(Math.max(p,f)/50,.9,2.4),D=x+6+A*2.2;return m.jsxs("svg",{id:"plan",ref:c,className:_,xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:`${-D} ${-D} ${p+2*D} ${f+2*D+A*1.5}`,"aria-label":`Tent plan, ${f} by ${p} foot ${e.T.label}`,...d,children:[m.jsx(Lm,{}),m.jsx(vx,{st:t,l:e,interactive:!0,fs:A,sel:s}),m.jsx(al,{x0:0,y0:-x,len:p,horiz:!0,off:3+A*.4,fs:A,label:sl(p)}),m.jsx(al,{x0:-x,y0:0,len:f,horiz:!1,off:3+A*.4,fs:A,label:sl(f)}),m.jsx(Pm,{x:0,y:f+x+3+A*.6,maxLen:p,fs:A})]})}const g=as(t,o),h=g.l,v=g.w,y=Math.max(h,v)/55,S=Math.max(h,v)*.07+y*2,N=n&&n.length?n:[{st:t,lay:e}],b=N.length>1;return m.jsxs("svg",{id:"plan",ref:c,className:_,xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:`${-S} ${-S} ${h+2*S} ${v+2*S}`,"aria-label":o?"Site plan over satellite photo":`Site plan, ${h} by ${v} foot site`,...d,children:[m.jsx(Lm,{}),o?m.jsx("image",{href:l,x:0,y:0,width:je(h),height:je(v),preserveAspectRatio:"none"}):m.jsxs(m.Fragment,{children:[m.jsx("rect",{className:t.surface==="grass"||t.surface==="gravel"?"soft":"hard",x:0,y:0,width:h,height:v}),h>45&&v>45&&m.jsxs(m.Fragment,{children:[m.jsx("rect",{className:"setback",x:20,y:20,width:h-40,height:v-40}),m.jsx("text",{className:"sett",x:22,y:20+y*1.1,fontSize:y*.7,children:"20' SETBACK FROM LOT LINES"})]}),m.jsx("rect",{className:"siteline",x:0,y:0,width:h,height:v})]}),(t.siteItems||[]).filter(A=>es(A).h===0).map(A=>m.jsx(Rm,{it:A,i:t.siteItems.indexOf(A),sel:s,fs:y},"f"+t.siteItems.indexOf(A))),N.map((A,D)=>m.jsx(RM,{t:A,i:D,active:i,sel:s,ph:o,fs:y,multi:b},D)),(t.siteItems||[]).map((A,D)=>es(A).h===0?null:m.jsx(Rm,{it:A,i:D,sel:s,fs:y},D)),!o&&m.jsxs(m.Fragment,{children:[m.jsx(al,{x0:0,y0:0,len:h,horiz:!0,off:y*1.6,fs:y,label:`SITE ${sl(h)}`}),m.jsx(al,{x0:0,y0:0,len:v,horiz:!1,off:y*1.6,fs:y,label:sl(v)})]}),m.jsx(Pm,{x:0,y:v+y*1.2,maxLen:h,fs:y}),o&&m.jsxs("text",{className:"attr",x:h-y*.5,y:v-y*.5,fontSize:y*.6,children:[t.photo.source==="mapbox"?SM:"Imagery: site photo",t.photo.calibrated?"":" · scale not set"]}),a&&m.jsxs(m.Fragment,{children:[a.pts.length===2&&m.jsx("line",{className:"calib",x1:a.pts[0].x,y1:a.pts[0].y,x2:a.pts[1].x,y2:a.pts[1].y}),a.pts.map((A,D)=>m.jsx("circle",{className:"calibpt",cx:A.x,cy:A.y,r:y*.35},D))]})]})}function Nm({item:t,onAddHeadSeat:e,onResetHeadSeats:n}){const i=t.chairs.length,r=i>=cx(t.dims[0]);return m.jsxs(m.Fragment,{children:[m.jsxs("span",{className:"hint",children:[i," seat",i===1?"":"s"]}),m.jsx("button",{className:"btn",disabled:r,title:r?"No more room along this table":void 0,onClick:e,children:"+ Add seat"}),t.customChairs&&m.jsx("button",{className:"btn",onClick:n,children:"Reset seats"})]})}function ol({angle:t,selKey:e,onRotate:n,onSetAngle:i}){const r=Math.round(t);return m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"btn","aria-label":"Rotate 15 degrees left",onClick:()=>n(-15),children:"⟲ 15°"}),m.jsx("button",{className:"btn","aria-label":"Rotate 15 degrees right",onClick:()=>n(15),children:"⟳ 15°"}),m.jsx("button",{className:"btn",onClick:()=>n(90),children:"Turn 90°"}),m.jsxs("label",{className:"hint",children:["Angle"," ",m.jsx("input",{type:"number",step:1,defaultValue:r,onKeyDown:s=>{s.key==="Enter"&&i(parseFloat(s.target.value))},onBlur:s=>{const a=parseFloat(s.target.value);a!==r&&i(a)}},e+":"+r)," °"]})]})}function LM({view:t,calib:e,sel:n,lay:i,st:r,siteItem:s,siteIdx:a,onSiteEdit:o,onSiteDuplicate:l,onSiteRemove:c,onCancelCalib:u,onApplyCalib:d,onRotate:f,onSetAngle:p,onRemove:x,onReflow:_,onExitKind:g,onRemoveExit:h,onAddExit:v,onRemoveChand:y,onAddChand:S,onSeats:N,onTableType:b,onAddTable:A,onRemoveTable:D,onAddHeadSeat:T,onRemoveHeadSeat:M,onResetHeadSeats:P}){const V=Ie.useRef(null);let L;if(t==="site"&&e)L=e.pts.length<2?m.jsxs(m.Fragment,{children:[m.jsxs("span",{className:"hint",children:["Click ",e.pts.length?"the second point":"two points a known distance apart"," on the photo."]}),m.jsx("button",{className:"btn",onClick:u,children:"Cancel"})]}):m.jsxs(m.Fragment,{children:[m.jsxs("label",{className:"hint",children:["Real distance"," ",m.jsx("input",{ref:V,type:"number",min:1,step:.5,"aria-label":"Real distance in feet",autoFocus:!0,onKeyDown:z=>{z.key==="Enter"&&d(parseFloat(z.target.value))}})," ft"]}),m.jsx("button",{className:"btn primary",onClick:()=>d(parseFloat(V.current&&V.current.value)),children:"Apply scale"}),m.jsx("button",{className:"btn",onClick:u,children:"Cancel"})]});else if(t==="site"&&s){const z=es(s);L=m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"sw",style:{background:z.color},"aria-hidden":"true"}),m.jsx("input",{className:"sitename","aria-label":"Item name",value:s.name??bc(r.siteItems||[s],r.siteItems?a:0),onChange:G=>{const O=G.target.value;o(ee=>{ee.name=O})}}),m.jsxs("label",{className:"field inline",children:[m.jsx("span",{children:"L"}),m.jsx(fn,{min:2,max:1e3,"aria-label":"Length (ft)",value:Math.round(s.l*10)/10,valid:G=>G>=2,onValue:G=>o(O=>{O.l=Math.min(1e3,G)})})]}),m.jsx("span",{className:"x",children:"×"}),m.jsxs("label",{className:"field inline",children:[m.jsx("span",{children:"W"}),m.jsx(fn,{min:2,max:1e3,"aria-label":"Width (ft)",value:Math.round(s.w*10)/10,valid:G=>G>=2,onValue:G=>o(O=>{O.w=Math.min(1e3,G)})})]}),m.jsxs("span",{className:"hint",children:["ft · ",s.type==="stage"?ed(s).split(" · ").pop():ed(s).split(" · ").slice(1).join(" · ")||"drag to move"]}),s.type==="stage"&&m.jsx("select",{"aria-label":"Stage shape",value:s.shape||"rect",style:{width:"auto"},onChange:G=>{const O=G.target.value;o(ee=>{ee.shape=O})},children:Object.entries(Xf).map(([G,O])=>m.jsx("option",{value:G,children:O},G))}),m.jsx(ol,{angle:s.rot||0,selKey:n,onRotate:f,onSetAngle:p}),m.jsx("button",{className:"btn",onClick:l,children:"Duplicate"}),m.jsx("button",{className:"btn danger",onClick:c,children:"Remove"})]})}else if(t==="site"&&n==="__tent")L=m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"name",children:"Tent"}),m.jsx(ol,{angle:r.tentAngle||0,selKey:n,onRotate:f,onSetAngle:p})]});else{const z=t==="tent"&&n&&n.startsWith("x:")?i.exits[+n.slice(2)]:null,G=t==="tent"&&n&&n.startsWith("c:")?i.chands[+n.slice(2)]:null,O=t==="tent"&&n&&n.startsWith("u:")?i.units[+n.slice(2)]:null,ee=t==="tent"&&n&&n.startsWith("h:")?i.items.find(X=>X.def.id==="head"):null,U=ee?ee.chairs[+n.slice(2)]:null,W=t==="tent"&&n&&!O&&!z&&!G&&!ee?i.items.find(X=>X.key===n):null;if(U)L=m.jsxs(m.Fragment,{children:[m.jsxs("span",{className:"name",children:["Head table seat ",+n.slice(2)+1]}),m.jsx("span",{className:"hint",children:'Drag to move · arrows nudge 6"'}),m.jsx(Nm,{item:ee,onAddHeadSeat:T,onResetHeadSeats:P}),m.jsx("button",{className:"btn danger",onClick:M,children:"Remove seat"})]});else if(G)L=m.jsxs(m.Fragment,{children:[m.jsxs("span",{className:"name",children:["Chandelier ",+n.slice(2)+1]}),m.jsxs("span",{className:"hint",children:[Math.round(G.x),"' along · ",Math.round(G.y),"' across"]}),m.jsx("button",{className:"btn",onClick:S,children:"+ Add another"}),m.jsx("button",{className:"btn danger",onClick:y,children:"Remove"})]});else if(z)L=m.jsxs(m.Fragment,{children:[m.jsxs("span",{className:"name",children:[z.main?"Entrance":"Exit"," ",+n.slice(2)+1]}),m.jsxs("span",{className:"hint",children:[px[z.side]," · ",Math.round(z.c),"' in"]}),m.jsx("select",{"aria-label":"Opening type",value:z.kind,onChange:X=>g(X.target.value),style:{width:"auto"},children:Object.entries(mx).map(([X,te])=>m.jsx("option",{value:X,children:te},X))}),m.jsx("button",{className:"btn danger",onClick:h,children:"Remove"})]});else if(O){const X=i.S.kind==="chair",te=O.seats??i.per,ce=Gl[O.type]||12;L=m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"name",children:X?"Chair":"Table"}),!X&&m.jsx("select",{"aria-label":"Table type",value:O.type,onChange:ze=>b(ze.target.value),style:{width:"auto"},children:Object.entries(FS).map(([ze,J])=>m.jsx("option",{value:ze,children:J},ze))}),!X&&m.jsxs("span",{className:"stepper",role:"group","aria-label":"Chairs at this table",children:[m.jsx("button",{className:"btn sm","aria-label":"Remove a chair",disabled:te<=0,onClick:()=>N(te-1),children:"−"}),m.jsxs("span",{className:"cnt",children:[te," chair",te===1?"":"s"]}),m.jsx("button",{className:"btn sm","aria-label":"Add a chair",disabled:te>=ce,onClick:()=>N(te+1),children:"+"})]}),m.jsx(ol,{angle:O.rot||0,selKey:n,onRotate:f,onSetAngle:p}),m.jsx("button",{className:"btn",onClick:()=>A(O.type),children:X?"+ Add chair":"+ Add table"}),m.jsx("button",{className:"btn danger",onClick:D,children:X?"Remove chair":"Remove table"}),r.tables&&m.jsx("button",{className:"btn",onClick:_,children:"Reset to auto"})]})}else W?L=m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"name",children:W.def.label}),m.jsx(ol,{angle:W.rot,selKey:n,onRotate:f,onSetAngle:p}),W.def.id==="head"&&m.jsx(Nm,{item:W,onAddHeadSeat:T,onResetHeadSeats:P}),m.jsx("button",{className:"btn danger",onClick:x,children:"Remove"})]}):L=t==="site"?m.jsx("span",{className:"hint",children:"Drag a tent or outdoor item to place it on the site."}):m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"hint",children:"Drag any item, table, exit or chandelier to move it."}),m.jsx("button",{className:"btn",onClick:v,children:"+ Add exit"})]})}return m.jsx("div",{className:"selinfo",children:L})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="170",Ys={ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NM=0,Dm=1,DM=2,yx=1,IM=2,Ri=3,Sr=0,vn=1,ei=2,gr=0,Ks=1,Im=2,Um=3,Fm=4,UM=5,kr=100,FM=101,kM=102,OM=103,zM=104,BM=200,HM=201,VM=202,jM=203,nd=204,id=205,GM=206,WM=207,$M=208,XM=209,qM=210,YM=211,KM=212,ZM=213,QM=214,rd=0,sd=1,ad=2,oa=3,od=4,ld=5,cd=6,ud=7,Kf=0,JM=1,eE=2,_r=0,tE=1,nE=2,iE=3,rE=4,sE=5,aE=6,oE=7,Sx=300,la=301,ca=302,hd=303,dd=304,qc=306,fd=1e3,Vr=1001,pd=1002,oi=1003,lE=1004,ll=1005,_i=1006,Au=1007,jr=1008,Vi=1009,Mx=1010,Ex=1011,To=1012,Zf=1013,ts=1014,Ii=1015,Io=1016,Qf=1017,Jf=1018,ua=1020,wx=35902,Tx=1021,bx=1022,ri=1023,Ax=1024,Cx=1025,Zs=1026,ha=1027,Rx=1028,ep=1029,Px=1030,tp=1031,np=1033,$l=33776,Xl=33777,ql=33778,Yl=33779,md=35840,gd=35841,_d=35842,xd=35843,vd=36196,yd=37492,Sd=37496,Md=37808,Ed=37809,wd=37810,Td=37811,bd=37812,Ad=37813,Cd=37814,Rd=37815,Pd=37816,Ld=37817,Nd=37818,Dd=37819,Id=37820,Ud=37821,Kl=36492,Fd=36494,kd=36495,Lx=36283,Od=36284,zd=36285,Bd=36286,cE=3200,uE=3201,Nx=0,hE=1,sr="",bn="srgb",ga="srgb-linear",Yc="linear",ft="srgb",fs=7680,km=519,dE=512,fE=513,pE=514,Dx=515,mE=516,gE=517,_E=518,xE=519,Om=35044,zm="300 es",Ui=2e3,Cc=2001;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=Math.PI/180,Hd=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function vE(t,e){return(t%e+e)%e}function Cu(t,e,n){return(1-n)*t+n*e}function Da(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const yE={DEG2RAD:Zl};class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,r,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],x=i[8],_=r[0],g=r[3],h=r[6],v=r[1],y=r[4],S=r[7],N=r[2],b=r[5],A=r[8];return s[0]=a*_+o*v+l*N,s[3]=a*g+o*y+l*b,s[6]=a*h+o*S+l*A,s[1]=c*_+u*v+d*N,s[4]=c*g+u*y+d*b,s[7]=c*h+u*S+d*A,s[2]=f*_+p*v+x*N,s[5]=f*g+p*y+x*b,s[8]=f*h+p*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,p=c*s-a*l,x=n*d+i*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new Qe;function Ix(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function SE(){const t=bo("canvas");return t.style.display="block",t}const Bm={};function Ga(t){t in Bm||(Bm[t]=!0,console.warn(t))}function ME(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function EE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ft&&(t.r=ki(t.r),t.g=ki(t.g),t.b=ki(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ft&&(t.r=Qs(t.r),t.g=Qs(t.g),t.b=Qs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===sr?Yc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Hm=[.64,.33,.3,.6,.15,.06],Vm=[.2126,.7152,.0722],jm=[.3127,.329],Gm=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wm=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[ga]:{primaries:Hm,whitePoint:jm,transfer:Yc,toXYZ:Gm,fromXYZ:Wm,luminanceCoefficients:Vm,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:Hm,whitePoint:jm,transfer:ft,toXYZ:Gm,fromXYZ:Wm,luminanceCoefficients:Vm,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let ps;class TE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=bo("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bE=0;class Ux{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pu(r[a].image)):s.push(Pu(r[a]))}else s=Pu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AE=0;class on extends os{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Vr,r=Vr,s=_i,a=jr,o=ri,l=Vi,c=on.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Uo(),this.name="",this.source=new Ux(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fd:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fd:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Sx;on.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],x=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,N=(h+1)/2,b=(u+f)/4,A=(d+_)/4,D=(x+g)/4;return y>S&&y>N?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=A/i):S>N?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=D/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=A/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ux(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends CE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Fx extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RE extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],x=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=x,e[n+3]=_;return}if(d!==_||l!==f||c!==p||u!==x){let g=1-o;const h=l*f+c*p+u*x+d*_,v=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const N=Math.sqrt(y),b=Math.atan2(N,h*v);g=Math.sin(g*b)/N,o=Math.sin(o*b)/N}const S=o*v;if(l=l*g+f*S,c=c*g+p*S,u=u*g+x*S,d=d*g+_*S,g===1-o){const N=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=N,c*=N,u*=N,d*=N}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+u*d+l*p-c*f,e[n+1]=l*x+u*f+c*d-o*p,e[n+2]=c*x+u*p+o*f-l*d,e[n+3]=u*x-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"YXZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"ZXY":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"ZYX":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"YZX":this._x=f*u*d+c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d-f*p*x;break;case"XZY":this._x=f*u*d-c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($m.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($m.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new $,$m=new is;class Fo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),ul.subVectors(this.max,Ia),ms.subVectors(e.a,Ia),gs.subVectors(e.b,Ia),_s.subVectors(e.c,Ia),qi.subVectors(gs,ms),Yi.subVectors(_s,gs),Cr.subVectors(ms,_s);let n=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Cr.z,Cr.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Cr.z,0,-Cr.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Cr.y,Cr.x,0];return!Nu(n,ms,gs,_s,ul)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,ms,gs,_s,ul))?!1:(hl.crossVectors(qi,Yi),n=[hl.x,hl.y,hl.z],Nu(n,ms,gs,_s,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new $,new $,new $,new $,new $,new $,new $,new $],Xn=new $,cl=new Fo,ms=new $,gs=new $,_s=new $,qi=new $,Yi=new $,Cr=new $,Ia=new $,ul=new $,hl=new $,Rr=new $;function Nu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Rr.fromArray(t,s);const o=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),c=n.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const PE=new Fo,Ua=new $,Du=new $;class ip{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):PE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const n=Ua.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Du)),this.expandByPoint(Ua.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new $,Iu=new $,dl=new $,Ki=new $,Uu=new $,fl=new $,Fu=new $;class kx{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Iu.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(Iu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(dl),o=Ki.dot(this.direction),l=-Ki.dot(dl),c=Ki.lengthSq(),u=Math.abs(1-a*a);let d,f,p,x;if(u>0)if(d=a*l-o,f=a*o-l,x=s*u,d>=0)if(f>=-x)if(f<=x){const _=1/u;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Iu).addScaledVector(dl,f),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){Uu.subVectors(n,e),fl.subVectors(i,e),Fu.crossVectors(Uu,fl);let a=this.direction.dot(Fu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,e);const l=o*this.direction.dot(fl.crossVectors(Ki,fl));if(l<0)return null;const c=o*this.direction.dot(Uu.cross(Ki));if(c<0||l+c>a)return null;const u=-o*Ki.dot(Fu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,a,o,l,c,u,d,f,p,x,_,g){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,f,p,x,_,g)}set(e,n,i,r,s,a,o,l,c,u,d,f,p,x,_,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=x,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,x=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=f-_*c,n[9]=-o*l,n[2]=_-f*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,x=c*u,_=c*d;n[0]=f+_*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-x,n[6]=_+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,x=c*u,_=c*d;n[0]=f-_*o,n[4]=-a*d,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*u,n[9]=_-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,x=o*u,_=o*d;n[0]=l*u,n[4]=x*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,x=o*l,_=o*c;n[0]=l*u,n[4]=_-f*d,n[8]=x*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+x,n[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,p=a*c,x=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=a*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=o*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,NE)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Zi.crossVectors(i,Mn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Zi.crossVectors(i,Mn)),Zi.normalize(),pl.crossVectors(Mn,Zi),r[0]=Zi.x,r[4]=pl.x,r[8]=Mn.x,r[1]=Zi.y,r[5]=pl.y,r[9]=Mn.y,r[2]=Zi.z,r[6]=pl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],x=i[2],_=i[6],g=i[10],h=i[14],v=i[3],y=i[7],S=i[11],N=i[15],b=r[0],A=r[4],D=r[8],T=r[12],M=r[1],P=r[5],V=r[9],L=r[13],z=r[2],G=r[6],O=r[10],ee=r[14],U=r[3],W=r[7],X=r[11],te=r[15];return s[0]=a*b+o*M+l*z+c*U,s[4]=a*A+o*P+l*G+c*W,s[8]=a*D+o*V+l*O+c*X,s[12]=a*T+o*L+l*ee+c*te,s[1]=u*b+d*M+f*z+p*U,s[5]=u*A+d*P+f*G+p*W,s[9]=u*D+d*V+f*O+p*X,s[13]=u*T+d*L+f*ee+p*te,s[2]=x*b+_*M+g*z+h*U,s[6]=x*A+_*P+g*G+h*W,s[10]=x*D+_*V+g*O+h*X,s[14]=x*T+_*L+g*ee+h*te,s[3]=v*b+y*M+S*z+N*U,s[7]=v*A+y*P+S*G+N*W,s[11]=v*D+y*V+S*O+N*X,s[15]=v*T+y*L+S*ee+N*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],x=e[3],_=e[7],g=e[11],h=e[15];return x*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*p-i*l*p)+_*(+n*l*p-n*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+g*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-n*l*d+n*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],x=e[12],_=e[13],g=e[14],h=e[15],v=d*g*c-_*f*c+_*l*p-o*g*p-d*l*h+o*f*h,y=x*f*c-u*g*c-x*l*p+a*g*p+u*l*h-a*f*h,S=u*_*c-x*d*c+x*o*p-a*_*p-u*o*h+a*d*h,N=x*d*l-u*_*l-x*o*f+a*_*f+u*o*g-a*d*g,b=n*v+i*y+r*S+s*N;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(_*f*s-d*g*s-_*r*p+i*g*p+d*r*h-i*f*h)*A,e[2]=(o*g*s-_*l*s+_*r*c-i*g*c-o*r*h+i*l*h)*A,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*p-i*l*p)*A,e[4]=y*A,e[5]=(u*g*s-x*f*s+x*r*p-n*g*p-u*r*h+n*f*h)*A,e[6]=(x*l*s-a*g*s-x*r*c+n*g*c+a*r*h-n*l*h)*A,e[7]=(a*f*s-u*l*s+u*r*c-n*f*c-a*r*p+n*l*p)*A,e[8]=S*A,e[9]=(x*d*s-u*_*s-x*i*p+n*_*p+u*i*h-n*d*h)*A,e[10]=(a*_*s-x*o*s+x*i*c-n*_*c-a*i*h+n*o*h)*A,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*A,e[12]=N*A,e[13]=(u*_*r-x*d*r+x*i*f-n*_*f-u*i*g+n*d*g)*A,e[14]=(x*o*r-a*_*r-x*i*l+n*_*l+a*i*g-n*o*g)*A,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,f=s*c,p=s*u,x=s*d,_=a*u,g=a*d,h=o*d,v=l*c,y=l*u,S=l*d,N=i.x,b=i.y,A=i.z;return r[0]=(1-(_+h))*N,r[1]=(p+S)*N,r[2]=(x-y)*N,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(f+h))*b,r[6]=(g+v)*b,r[7]=0,r[8]=(x+y)*A,r[9]=(g-v)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xs.set(r[0],r[1],r[2]).length();const a=xs.set(r[4],r[5],r[6]).length(),o=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,u=1/a,d=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,n.setFromRotationMatrix(qn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Ui){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,x;if(o===Ui)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Cc)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Ui){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),f=(n+e)*c,p=(i+r)*u;let x,_;if(o===Ui)x=(a+s)*d,_=-2*d;else if(o===Cc)x=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xs=new $,qn=new Ct,LE=new $(0,0,0),NE=new $(1,1,1),Zi=new $,pl=new $,Mn=new $,Xm=new Ct,qm=new is;class Si{constructor(e=0,n=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Ox{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DE=0;const Ym=new $,vs=new is,bi=new Ct,ml=new $,Fa=new $,IE=new $,UE=new is,Km=new $(1,0,0),Zm=new $(0,1,0),Qm=new $(0,0,1),Jm={type:"added"},FE={type:"removed"},ys={type:"childadded",child:null},ku={type:"childremoved",child:null};class Xt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new $,n=new Si,i=new is,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Qe}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ox,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,n){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Fa,ml,this.up):bi.lookAt(ml,Fa,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(bi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FE),ku.child=e,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,UE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new $(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new $,Ai=new $,Ou=new $,Ci=new $,Ss=new $,Ms=new $,eg=new $,zu=new $,Bu=new $,Hu=new $,Vu=new At,ju=new At,Gu=new At;class ti{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yn.subVectors(r,n),Ai.subVectors(i,n),Ou.subVectors(e,n);const a=Yn.dot(Yn),o=Yn.dot(Ai),l=Yn.dot(Ou),c=Ai.dot(Ai),u=Ai.dot(Ou),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,x=(a*u-o*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Vu.setScalar(0),ju.setScalar(0),Gu.setScalar(0),Vu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,i),Gu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vu,s.x),a.addScaledVector(ju,s.y),a.addScaledVector(Gu,s.z),a}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Ai.subVectors(e,n),Yn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Yn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ss.subVectors(r,i),Ms.subVectors(s,i),zu.subVectors(e,i);const l=Ss.dot(zu),c=Ms.dot(zu);if(l<=0&&c<=0)return n.copy(i);Bu.subVectors(e,r);const u=Ss.dot(Bu),d=Ms.dot(Bu);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Ss,a);Hu.subVectors(e,s);const p=Ss.dot(Hu),x=Ms.dot(Hu);if(x>=0&&p<=x)return n.copy(s);const _=p*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Ms,o);const g=u*x-p*d;if(g<=0&&d-u>=0&&p-x>=0)return eg.subVectors(s,r),o=(d-u)/(d-u+(p-x)),n.copy(r).addScaledVector(eg,o);const h=1/(g+_+f);return a=_*h,o=f*h,n.copy(i).addScaledVector(Ss,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=vE(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Wu(a,s,e+1/3),this.g=Wu(a,s,e),this.b=Wu(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=zx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return st.fromWorkingColorSpace(Qt.copy(this),e),Math.round(sn(Qt.r*255,0,255))*65536+Math.round(sn(Qt.g*255,0,255))*256+Math.round(sn(Qt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=bn){st.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(gl);const i=Cu(Qi.h,gl.h,n),r=Cu(Qi.s,gl.s,n),s=Cu(Qi.l,gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new et;et.NAMES=zx;let kE=0;class ko extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Uo(),this.name="",this.blending=Ks,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nd&&(i.blendSrc=this.blendSrc),this.blendDst!==id&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==km&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rc extends ko{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new $,_l=new Ke;class yi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Om,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Da(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Da(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Da(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Da(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Da(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Om&&(e.usage=this.usage),e}}class Bx extends yi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hx extends yi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class en extends yi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let OE=0;const Fn=new Ct,$u=new Xt,Es=new $,En=new Fo,ka=new Fo,Bt=new $;class Vn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ix(e)?Hx:Bx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ip);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(En.min,ka.min),En.expandByPoint(Bt),Bt.addVectors(En.max,ka.max),En.expandByPoint(Bt)):(En.expandByPoint(ka.min),En.expandByPoint(ka.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),Bt.add(Es)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new $,l[D]=new $;const c=new $,u=new $,d=new $,f=new Ke,p=new Ke,x=new Ke,_=new $,g=new $;function h(D,T,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,T),x.fromBufferAttribute(s,M),u.sub(c),d.sub(c),p.sub(f),x.sub(f);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(P),o[D].add(_),o[T].add(_),o[M].add(_),l[D].add(g),l[T].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,T=v.length;D<T;++D){const M=v[D],P=M.start,V=M.count;for(let L=P,z=P+V;L<z;L+=3)h(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new $,S=new $,N=new $,b=new $;function A(D){N.fromBufferAttribute(r,D),b.copy(N);const T=o[D];y.copy(T),y.sub(N.multiplyScalar(N.dot(T))).normalize(),S.crossVectors(b,T);const P=S.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,T=v.length;D<T;++D){const M=v[D],P=M.start,V=M.count;for(let L=P,z=P+V;L<z;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,d=new $;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let h=0;h<u;h++)f[x++]=c[p++]}return new yi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tg=new Ct,Pr=new kx,xl=new ip,ng=new $,vl=new $,yl=new $,Sl=new $,Xu=new $,Ml=new $,ig=new $,El=new $;class Nt extends Xt{constructor(e=new Vn,n=new Rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Xu.fromBufferAttribute(d,e),a?Ml.addScaledVector(Xu,u):Ml.addScaledVector(Xu.sub(n),u))}n.add(Ml)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),Pr.copy(e.ray).recast(e.near),!(xl.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(xl,ng)===null||Pr.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(s).invert(),Pr.copy(e.ray).applyMatrix4(tg),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const g=f[x],h=a[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,N=y;S<N;S+=3){const b=o.getX(S),A=o.getX(S+1),D=o.getX(S+2);r=wl(this,h,e,i,c,u,d,b,A,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=x,h=_;g<h;g+=3){const v=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);r=wl(this,a,e,i,c,u,d,v,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){const g=f[x],h=a[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,N=y;S<N;S+=3){const b=S,A=S+1,D=S+2;r=wl(this,h,e,i,c,u,d,b,A,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=x,h=_;g<h;g+=3){const v=g,y=g+1,S=g+2;r=wl(this,a,e,i,c,u,d,v,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function zE(t,e,n,i,r,s,a,o){let l;if(e.side===vn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Sr,o),l===null)return null;El.copy(o),El.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(El);return c<n.near||c>n.far?null:{distance:c,point:El.clone(),object:t}}function wl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,vl),t.getVertexPosition(l,yl),t.getVertexPosition(c,Sl);const u=zE(t,e,n,i,vl,yl,Sl,ig);if(u){const d=new $;ti.getBarycoord(ig,vl,yl,Sl,d),r&&(u.uv=ti.getInterpolatedAttribute(r,o,l,c,d,new Ke)),s&&(u.uv1=ti.getInterpolatedAttribute(s,o,l,c,d,new Ke)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,l,c,d,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new $,materialIndex:0};ti.getNormal(vl,yl,Sl,f.normal),u.face=f,u.barycoord=d}return u}class _a extends Vn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(d,2));function x(_,g,h,v,y,S,N,b,A,D,T){const M=S/A,P=N/D,V=S/2,L=N/2,z=b/2,G=A+1,O=D+1;let ee=0,U=0;const W=new $;for(let X=0;X<O;X++){const te=X*P-L;for(let ce=0;ce<G;ce++){const ze=ce*M-V;W[_]=ze*v,W[g]=te*y,W[h]=z,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[h]=b>0?1:-1,u.push(W.x,W.y,W.z),d.push(ce/A),d.push(1-X/D),ee+=1}}for(let X=0;X<D;X++)for(let te=0;te<A;te++){const ce=f+te+G*X,ze=f+te+G*(X+1),J=f+(te+1)+G*(X+1),he=f+(te+1)+G*X;l.push(ce,ze,he),l.push(ze,J,he),U+=6}o.addGroup(p,U,T),p+=U,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function da(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=da(t[n]);for(const r in i)e[r]=i[r]}return e}function BE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const HE={clone:da,merge:nn};var VE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends ko{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VE,this.fragmentShader=jE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=BE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jx extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new $,rg=new Ke,sg=new Ke;class zn extends jx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,rg,sg),n.subVectors(sg,rg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ws=-90,Ts=1;class GE extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(ws,Ts,e,n);r.layers=this.layers,this.add(r);const s=new zn(ws,Ts,e,n);s.layers=this.layers,this.add(s);const a=new zn(ws,Ts,e,n);a.layers=this.layers,this.add(a);const o=new zn(ws,Ts,e,n);o.layers=this.layers,this.add(o);const l=new zn(ws,Ts,e,n);l.layers=this.layers,this.add(l);const c=new zn(ws,Ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Gx extends on{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:la,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WE extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _a(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:gr});s.uniforms.tEquirect.value=n;const a=new Nt(r,s),o=n.minFilter;return n.minFilter===jr&&(n.minFilter=_i),new GE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const qu=new $,$E=new $,XE=new Qe;class nr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qu.subVectors(i,n).cross($E.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XE.getNormalMatrix(e),r=this.coplanarPoint(qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new ip,Tl=new $;class rp{constructor(e=new nr,n=new nr,i=new nr,r=new nr,s=new nr,a=new nr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],_=r[10],g=r[11],h=r[12],v=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,g-p,S-h).normalize(),i[1].setComponents(l+s,f+c,g+p,S+h).normalize(),i[2].setComponents(l+a,f+u,g+x,S+v).normalize(),i[3].setComponents(l-a,f-u,g-x,S-v).normalize(),i[4].setComponents(l-o,f-d,g-_,S-y).normalize(),n===Ui)i[5].setComponents(l+o,f+d,g+_,S+y).normalize();else if(n===Cc)i[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Tl.x=r.normal.x>0?e.max.x:e.min.x,Tl.y=r.normal.y>0?e.max.y:e.min.y,Tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qE(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],_=d[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const _=d[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Xr extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=n/l,p=[],x=[],_=[],g=[];for(let h=0;h<u;h++){const v=h*f-a;for(let y=0;y<c;y++){const S=y*d-s;x.push(S,-v,0),_.push(0,0,1),g.push(y/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const y=v+c*h,S=v+c*(h+1),N=v+1+c*(h+1),b=v+1+c*h;p.push(y,S,b),p.push(S,N,b)}this.setIndex(p),this.setAttribute("position",new en(x,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}var YE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KE=`#ifdef USE_ALPHAHASH
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
#endif`,ZE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
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
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
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
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l1=`#ifdef USE_IRIDESCENCE
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
#endif`,c1=`#ifdef USE_BUMPMAP
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
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,x1=`#define PI 3.141592653589793
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
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y1=`vec3 transformedNormal = objectNormal;
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
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
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
}`,k1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
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
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$1=`PhysicalMaterial material;
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
#endif`,X1=`struct PhysicalMaterial {
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
}`,q1=`
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
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ew=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rw=`#if defined( USE_POINTS_UV )
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
#endif`,sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ow=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uw=`#ifdef USE_MORPHTARGETS
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
#endif`,hw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_w=`#ifdef USE_NORMALMAP
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
#endif`,xw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ew=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ww=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dw=`float getShadowMask() {
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
}`,Iw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uw=`#ifdef USE_SKINNING
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
#endif`,Fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kw=`#ifdef USE_SKINNING
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
#endif`,Ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vw=`#ifdef USE_TRANSMISSION
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
#endif`,jw=`#ifdef USE_TRANSMISSION
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yw=`uniform sampler2D t2D;
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
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
}`,tT=`#if DEPTH_PACKING == 3200
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
}`,nT=`#define DISTANCE
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
}`,iT=`#define DISTANCE
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`uniform float scale;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#define LAMBERT
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
}`,hT=`#define LAMBERT
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
}`,dT=`#define MATCAP
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
}`,fT=`#define MATCAP
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
}`,pT=`#define NORMAL
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
}`,mT=`#define NORMAL
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
}`,gT=`#define PHONG
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
}`,_T=`#define PHONG
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
}`,xT=`#define STANDARD
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
}`,vT=`#define STANDARD
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
}`,yT=`#define TOON
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
}`,ST=`#define TOON
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
}`,MT=`uniform float size;
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
}`,ET=`uniform vec3 diffuse;
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
}`,wT=`#include <common>
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
}`,TT=`uniform vec3 color;
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
}`,bT=`uniform float rotation;
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
}`,AT=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:YE,alphahash_pars_fragment:KE,alphamap_fragment:ZE,alphamap_pars_fragment:QE,alphatest_fragment:JE,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:r1,begin_vertex:s1,beginnormal_vertex:a1,bsdfs:o1,iridescence_fragment:l1,bumpmap_pars_fragment:c1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:f1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:g1,color_vertex:_1,common:x1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:y1,displacementmap_pars_vertex:S1,displacementmap_vertex:M1,emissivemap_fragment:E1,emissivemap_pars_fragment:w1,colorspace_fragment:T1,colorspace_pars_fragment:b1,envmap_fragment:A1,envmap_common_pars_fragment:C1,envmap_pars_fragment:R1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:H1,envmap_vertex:L1,fog_vertex:N1,fog_pars_vertex:D1,fog_fragment:I1,fog_pars_fragment:U1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:k1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:z1,lights_pars_begin:B1,lights_toon_fragment:V1,lights_toon_pars_fragment:j1,lights_phong_fragment:G1,lights_phong_pars_fragment:W1,lights_physical_fragment:$1,lights_physical_pars_fragment:X1,lights_fragment_begin:q1,lights_fragment_maps:Y1,lights_fragment_end:K1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:Q1,logdepthbuf_pars_vertex:J1,logdepthbuf_vertex:ew,map_fragment:tw,map_pars_fragment:nw,map_particle_fragment:iw,map_particle_pars_fragment:rw,metalnessmap_fragment:sw,metalnessmap_pars_fragment:aw,morphinstance_vertex:ow,morphcolor_vertex:lw,morphnormal_vertex:cw,morphtarget_pars_vertex:uw,morphtarget_vertex:hw,normal_fragment_begin:dw,normal_fragment_maps:fw,normal_pars_fragment:pw,normal_pars_vertex:mw,normal_vertex:gw,normalmap_pars_fragment:_w,clearcoat_normal_fragment_begin:xw,clearcoat_normal_fragment_maps:vw,clearcoat_pars_fragment:yw,iridescence_pars_fragment:Sw,opaque_fragment:Mw,packing:Ew,premultiplied_alpha_fragment:ww,project_vertex:Tw,dithering_fragment:bw,dithering_pars_fragment:Aw,roughnessmap_fragment:Cw,roughnessmap_pars_fragment:Rw,shadowmap_pars_fragment:Pw,shadowmap_pars_vertex:Lw,shadowmap_vertex:Nw,shadowmask_pars_fragment:Dw,skinbase_vertex:Iw,skinning_pars_vertex:Uw,skinning_vertex:Fw,skinnormal_vertex:kw,specularmap_fragment:Ow,specularmap_pars_fragment:zw,tonemapping_fragment:Bw,tonemapping_pars_fragment:Hw,transmission_fragment:Vw,transmission_pars_fragment:jw,uv_pars_fragment:Gw,uv_pars_vertex:Ww,uv_vertex:$w,worldpos_vertex:Xw,background_vert:qw,background_frag:Yw,backgroundCube_vert:Kw,backgroundCube_frag:Zw,cube_vert:Qw,cube_frag:Jw,depth_vert:eT,depth_frag:tT,distanceRGBA_vert:nT,distanceRGBA_frag:iT,equirect_vert:rT,equirect_frag:sT,linedashed_vert:aT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:fT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:_T,meshphysical_vert:xT,meshphysical_frag:vT,meshtoon_vert:yT,meshtoon_frag:ST,points_vert:MT,points_frag:ET,shadow_vert:wT,shadow_frag:TT,sprite_vert:bT,sprite_frag:AT},Te={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},fi={basic:{uniforms:nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:nn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:nn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:nn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:nn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:nn([Te.points,Te.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:nn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:nn([Te.common,Te.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:nn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:nn([Te.sprite,Te.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:nn([Te.common,Te.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:nn([Te.lights,Te.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};fi.physical={uniforms:nn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const bl={r:0,b:0,g:0},Nr=new Si,CT=new Ct;function RT(t,e,n,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function _(v){let y=!1;const S=x(v);S===null?h(o,l):S&&S.isColor&&(h(S,1),y=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,y){const S=x(y);S&&(S.isCubeTexture||S.mapping===qc)?(u===void 0&&(u=new Nt(new _a(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:da(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Nr.copy(y.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(Nr)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==ft,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Nt(new Xr(2,2),new Mr({name:"BackgroundMaterial",uniforms:da(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB(bl,Vx(t)),i.buffers.color.setClear(bl.r,bl.g,bl.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(o,l)},render:_,addToRenderList:g}}function PT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,P,V,L,z){let G=!1;const O=d(L,V,P);s!==O&&(s=O,c(s.object)),G=p(M,L,V,z),G&&x(M,L,V,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(M,P,V,L),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,P,V){const L=V.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let G=z[P.id];G===void 0&&(G={},z[P.id]=G);let O=G[L];return O===void 0&&(O=f(l()),G[L]=O),O}function f(M){const P=[],V=[],L=[];for(let z=0;z<n;z++)P[z]=0,V[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,P,V,L){const z=s.attributes,G=P.attributes;let O=0;const ee=V.getAttributes();for(const U in ee)if(ee[U].location>=0){const X=z[U];let te=G[U];if(te===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),X===void 0||X.attribute!==te||te&&X.data!==te.data)return!0;O++}return s.attributesNum!==O||s.index!==L}function x(M,P,V,L){const z={},G=P.attributes;let O=0;const ee=V.getAttributes();for(const U in ee)if(ee[U].location>=0){let X=G[U];X===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(X=M.instanceColor));const te={};te.attribute=X,X&&X.data&&(te.data=X.data),z[U]=te,O++}s.attributes=z,s.attributesNum=O,s.index=L}function _(){const M=s.newAttributes;for(let P=0,V=M.length;P<V;P++)M[P]=0}function g(M){h(M,0)}function h(M,P){const V=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;V[M]=1,L[M]===0&&(t.enableVertexAttribArray(M),L[M]=1),z[M]!==P&&(t.vertexAttribDivisor(M,P),z[M]=P)}function v(){const M=s.newAttributes,P=s.enabledAttributes;for(let V=0,L=P.length;V<L;V++)P[V]!==M[V]&&(t.disableVertexAttribArray(V),P[V]=0)}function y(M,P,V,L,z,G,O){O===!0?t.vertexAttribIPointer(M,P,V,z,G):t.vertexAttribPointer(M,P,V,L,z,G)}function S(M,P,V,L){_();const z=L.attributes,G=V.getAttributes(),O=P.defaultAttributeValues;for(const ee in G){const U=G[ee];if(U.location>=0){let W=z[ee];if(W===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){const X=W.normalized,te=W.itemSize,ce=e.get(W);if(ce===void 0)continue;const ze=ce.buffer,J=ce.type,he=ce.bytesPerElement,ye=J===t.INT||J===t.UNSIGNED_INT||W.gpuType===Zf;if(W.isInterleavedBufferAttribute){const fe=W.data,Fe=fe.stride,He=W.offset;if(fe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<U.locationSize;Ge++)h(U.location+Ge,fe.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ge=0;Ge<U.locationSize;Ge++)g(U.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ge=0;Ge<U.locationSize;Ge++)y(U.location+Ge,te/U.locationSize,J,X,Fe*he,(He+te/U.locationSize*Ge)*he,ye)}else{if(W.isInstancedBufferAttribute){for(let fe=0;fe<U.locationSize;fe++)h(U.location+fe,W.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let fe=0;fe<U.locationSize;fe++)g(U.location+fe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let fe=0;fe<U.locationSize;fe++)y(U.location+fe,te/U.locationSize,J,X,te*he,te/U.locationSize*fe*he,ye)}}else if(O!==void 0){const X=O[ee];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(U.location,X);break;case 3:t.vertexAttrib3fv(U.location,X);break;case 4:t.vertexAttrib4fv(U.location,X);break;default:t.vertexAttrib1fv(U.location,X)}}}}v()}function N(){D();for(const M in i){const P=i[M];for(const V in P){const L=P[V];for(const z in L)u(L[z].object),delete L[z];delete P[V]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const V in P){const L=P[V];for(const z in L)u(L[z].object),delete L[z];delete P[V]}delete i[M.id]}function A(M){for(const P in i){const V=i[P];if(V[M.id]===void 0)continue;const L=V[M.id];for(const z in L)u(L[z].object),delete L[z];delete V[M.id]}}function D(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function LT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let x=0;for(let _=0;_<d;_++)x+=u[_]*f[_];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function NT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ri&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Vi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ii&&!D)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:N,maxSamples:b}}function DT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new nr,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,y=v*4;let S=h.clippingState||null;l.value=S,S=u(x,f,y,p);for(let N=0;N!==y;++N)S[N]=n[N];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,x){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,x!==!0||g===null){const h=p+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let y=0,S=p;y!==_;++y,S+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function IT(t){let e=new WeakMap;function n(a,o){return o===hd?a.mapping=la:o===dd&&(a.mapping=ca),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===hd||o===dd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new WE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $x extends jx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=4,ag=[.125,.215,.35,.446,.526,.582],Or=20,Yu=new $x,og=new et;let Ku=null,Zu=0,Qu=0,Ju=!1;const Fr=(1+Math.sqrt(5))/2,bs=1/Fr,lg=[new $(-Fr,bs,0),new $(Fr,bs,0),new $(-bs,0,Fr),new $(bs,0,Fr),new $(0,Fr,-bs),new $(0,Fr,bs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),this._renderer.xr.enabled=Ju,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===la||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Io,format:ri,colorSpace:ga,depthBuffer:!1},r=ug(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UT(s)),this._blurMaterial=FT(s,e,n)}return r}_compileMaterial(e){const n=new Nt(this._lodPlanes[0],e);this._renderer.compile(n,Yu)}_sceneToCubeUV(e,n,i,r){const o=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(og),u.toneMapping=_r,u.autoClear=!1;const p=new Rc({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),x=new Nt(new _a,p);let _=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,_=!0):(p.color.copy(og),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;Al(r,v*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===la||e.mapping===ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=lg[(r-s-1)%lg.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),_=s/x,g=isFinite(s)?1+Math.floor(u*_):Or;g>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Or}`);const h=[];let v=0;for(let A=0;A<Or;++A){const D=A/_,T=Math.exp(-D*D/2);h.push(T),A===0?v+=T:A<g&&(v+=2*T)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-i;const S=this._sizeLods[r],N=3*S*(r>y-Vs?r-y+Vs:0),b=4*(this._cubeSize-S);Al(n,N,b,3*S,2*S),l.setRenderTarget(n),l.render(d,Yu)}}function UT(t){const e=[],n=[],i=[];let r=t;const s=t-Vs+1+ag.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Vs?l=ag[a-t+Vs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,_=3,g=2,h=1,v=new Float32Array(_*x*p),y=new Float32Array(g*x*p),S=new Float32Array(h*x*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,D=b>2?0:-1,T=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(T,_*x*b),y.set(f,g*x*b);const M=[b,b,b,b,b,b];S.set(M,h*x*b)}const N=new Vn;N.setAttribute("position",new yi(v,_)),N.setAttribute("uv",new yi(y,g)),N.setAttribute("faceIndex",new yi(S,h)),e.push(N),r>Vs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ug(t,e,n){const i=new ns(t,e,n);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function FT(t,e,n){const i=new Float32Array(Or),r=new $(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function hg(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function dg(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function sp(){return`

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
	`}function kT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===hd||l===dd,u=l===la||l===ca;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new cg(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new cg(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function OT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ga("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zT(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let g=0,h=_.length;g<h;g++)e.remove(_[g])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const _=p[x];for(let g=0,h=_.length;g<h;g++)e.update(_[g],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,x=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,S=v.length;y<S;y+=3){const N=v[y+0],b=v[y+1],A=v[y+2];f.push(N,b,b,A,A,N)}}else if(x!==void 0){const v=x.array;_=x.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const N=y+0,b=y+1,A=y+2;f.push(N,b,b,A,A,N)}}else return;const g=new(Ix(f)?Hx:Bx)(f,1);g.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function BT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function c(f,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,f*a,x),n.update(p,i,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,x);let g=0;for(let h=0;h<x;h++)g+=p[h];n.update(g,i,1)}function d(f,p,x,_){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],_[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,x);let h=0;for(let v=0;v<x;v++)h+=p[v]*_[v];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function HT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function VT(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),_===!0&&(y=3);let S=o.attributes.position.count*y,N=1;S>e.maxTextureSize&&(N=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*N*4*d),A=new Fx(b,S,N,d);A.type=Ii,A.needsUpdate=!0;const D=y*4;for(let M=0;M<d;M++){const P=g[M],V=h[M],L=v[M],z=S*N*4*M;for(let G=0;G<P.count;G++){const O=G*D;p===!0&&(r.fromBufferAttribute(P,G),b[z+O+0]=r.x,b[z+O+1]=r.y,b[z+O+2]=r.z,b[z+O+3]=0),x===!0&&(r.fromBufferAttribute(V,G),b[z+O+4]=r.x,b[z+O+5]=r.y,b[z+O+6]=r.z,b[z+O+7]=0),_===!0&&(r.fromBufferAttribute(L,G),b[z+O+8]=r.x,b[z+O+9]=r.y,b[z+O+10]=r.z,b[z+O+11]=L.itemSize===4?r.w:1)}}f={count:d,texture:A,size:new Ke(S,N)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function jT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Xx extends on{constructor(e,n,i,r,s,a,o,l,c,u=Zs){if(u!==Zs&&u!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zs&&(i=ts),i===void 0&&u===ha&&(i=ua),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:oi,this.minFilter=l!==void 0?l:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const qx=new on,fg=new Xx(1,1),Yx=new Fx,Kx=new RE,Zx=new Gx,pg=[],mg=[],gg=new Float32Array(16),_g=new Float32Array(9),xg=new Float32Array(4);function xa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pg[r];if(s===void 0&&(s=new Float32Array(r),pg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kc(t,e){let n=mg[e];n===void 0&&(n=new Int32Array(e),mg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function qT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(kt(n,i))return;xg.set(i),t.uniformMatrix2fv(this.addr,!1,xg),Ot(n,i)}}function YT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(kt(n,i))return;_g.set(i),t.uniformMatrix3fv(this.addr,!1,_g),Ot(n,i)}}function KT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(kt(n,i))return;gg.set(i),t.uniformMatrix4fv(this.addr,!1,gg),Ot(n,i)}}function ZT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function tb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function sb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(fg.compareFunction=Dx,s=fg):s=qx,n.setTexture2D(e||s,r)}function ab(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kx,r)}function ob(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zx,r)}function lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yx,r)}function cb(t){switch(t){case 5126:return GT;case 35664:return WT;case 35665:return $T;case 35666:return XT;case 35674:return qT;case 35675:return YT;case 35676:return KT;case 5124:case 35670:return ZT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(t,e){t.uniform1fv(this.addr,e)}function hb(t,e){const n=xa(e,this.size,2);t.uniform2fv(this.addr,n)}function db(t,e){const n=xa(e,this.size,3);t.uniform3fv(this.addr,n)}function fb(t,e){const n=xa(e,this.size,4);t.uniform4fv(this.addr,n)}function pb(t,e){const n=xa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mb(t,e){const n=xa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gb(t,e){const n=xa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _b(t,e){t.uniform1iv(this.addr,e)}function xb(t,e){t.uniform2iv(this.addr,e)}function vb(t,e){t.uniform3iv(this.addr,e)}function yb(t,e){t.uniform4iv(this.addr,e)}function Sb(t,e){t.uniform1uiv(this.addr,e)}function Mb(t,e){t.uniform2uiv(this.addr,e)}function Eb(t,e){t.uniform3uiv(this.addr,e)}function wb(t,e){t.uniform4uiv(this.addr,e)}function Tb(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||qx,s[a])}function bb(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Kx,s[a])}function Ab(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Zx,s[a])}function Cb(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Yx,s[a])}function Rb(t){switch(t){case 5126:return ub;case 35664:return hb;case 35665:return db;case 35666:return fb;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return vb;case 35669:case 35673:return yb;case 5125:return Sb;case 36294:return Mb;case 36295:return Eb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Cb}}class Pb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cb(n.type)}}class Lb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Rb(n.type)}}class Nb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function vg(t,e){t.seq.push(e),t.map[e.id]=e}function Db(t,e,n){const i=t.name,r=i.length;for(eh.lastIndex=0;;){const s=eh.exec(i),a=eh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vg(n,c===void 0?new Pb(o,t,e):new Lb(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Nb(o),vg(n,d)),n=d}}}class Ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Db(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function yg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ib=37297;let Ub=0;function Fb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Sg=new Qe;function kb(t){st._getMatrix(Sg,st.workingColorSpace,t);const e=`mat3( ${Sg.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Yc:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Mg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Fb(t.getShaderSource(e),a)}else return r}function Ob(t,e){const n=kb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function zb(t,e){let n;switch(e){case tE:n="Linear";break;case nE:n="Reinhard";break;case iE:n="Cineon";break;case rE:n="ACESFilmic";break;case aE:n="AgX";break;case oE:n="Neutral";break;case sE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new $;function Bb(){st.getLuminanceCoefficients(Cl);const t=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function Vb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Wa(t){return t!==""}function Eg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(t){return t.replace(Gb,$b)}const Wb=new Map;function $b(t,e){let n=Je[e];if(n===void 0){const i=Wb.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vd(n)}const Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(t){return t.replace(Xb,qb)}function qb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Yb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===IM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Kb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case la:case ca:e="ENVMAP_TYPE_CUBE";break;case qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ca:e="ENVMAP_MODE_REFRACTION";break}return e}function Qb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kf:e="ENVMAP_BLENDING_MULTIPLY";break;case JM:e="ENVMAP_BLENDING_MIX";break;case eE:e="ENVMAP_BLENDING_ADD";break}return e}function Jb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function e2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Yb(n),c=Kb(n),u=Zb(n),d=Qb(n),f=Jb(n),p=Hb(n),x=Vb(s),_=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Wa).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Wa).join(`
`),h.length>0&&(h+=`
`)):(g=[bg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),h=[bg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?Je.tonemapping_pars_fragment:"",n.toneMapping!==_r?zb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Ob("linearToOutputTexel",n.outputColorSpace),Bb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),a=Vd(a),a=Eg(a,n),a=wg(a,n),o=Vd(o),o=Eg(o,n),o=wg(o,n),a=Tg(a),o=Tg(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+g+a,S=v+h+o,N=yg(r,r.VERTEX_SHADER,y),b=yg(r,r.FRAGMENT_SHADER,S);r.attachShader(_,N),r.attachShader(_,b),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(N).trim(),z=r.getShaderInfoLog(b).trim();let G=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,N,b);else{const ee=Mg(r,N,"vertex"),U=Mg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ee+`
`+U)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||z==="")&&(O=!1);O&&(P.diagnostics={runnable:G,programLog:V,vertexShader:{log:L,prefix:g},fragmentShader:{log:z,prefix:h}})}r.deleteShader(N),r.deleteShader(b),D=new Ql(r,_),T=jb(r,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Ib)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ub++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=b,this}let t2=0;class n2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new i2(e),n.set(e,i)),i}}class i2{constructor(e){this.id=t2++,this.code=e,this.usedTimes=0}}function r2(t,e,n,i,r,s,a){const o=new Ox,l=new n2,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,M,P,V,L){const z=V.fog,G=L.geometry,O=T.isMeshStandardMaterial?V.environment:null,ee=(T.isMeshStandardMaterial?n:e).get(T.envMap||O),U=ee&&ee.mapping===qc?ee.image.height:null,W=x[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const X=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=X!==void 0?X.length:0;let ce=0;G.morphAttributes.position!==void 0&&(ce=1),G.morphAttributes.normal!==void 0&&(ce=2),G.morphAttributes.color!==void 0&&(ce=3);let ze,J,he,ye;if(W){const lt=fi[W];ze=lt.vertexShader,J=lt.fragmentShader}else ze=T.vertexShader,J=T.fragmentShader,l.update(T),he=l.getVertexShaderID(T),ye=l.getFragmentShaderID(T);const fe=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),He=L.isInstancedMesh===!0,Ge=L.isBatchedMesh===!0,We=!!T.map,re=!!T.matcap,be=!!ee,F=!!T.aoMap,Z=!!T.lightMap,oe=!!T.bumpMap,_e=!!T.normalMap,me=!!T.displacementMap,Me=!!T.emissiveMap,de=!!T.metalnessMap,C=!!T.roughnessMap,E=T.anisotropy>0,j=T.clearcoat>0,se=T.dispersion>0,ne=T.iridescence>0,Q=T.sheen>0,Ae=T.transmission>0,Se=E&&!!T.anisotropyMap,Ce=j&&!!T.clearcoatMap,qe=j&&!!T.clearcoatNormalMap,pe=j&&!!T.clearcoatRoughnessMap,Ne=ne&&!!T.iridescenceMap,Ve=ne&&!!T.iridescenceThicknessMap,Ue=Q&&!!T.sheenColorMap,Le=Q&&!!T.sheenRoughnessMap,nt=!!T.specularMap,Ye=!!T.specularColorMap,dt=!!T.specularIntensityMap,B=Ae&&!!T.transmissionMap,Ee=Ae&&!!T.thicknessMap,ie=!!T.gradientMap,ae=!!T.alphaMap,Pe=T.alphaTest>0,Re=!!T.alphaHash,$e=!!T.extensions;let mt=_r;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(mt=t.toneMapping);const zt={shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:ze,fragmentShader:J,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&L._colorsTexture!==null,instancing:He,instancingColor:He&&L.instanceColor!==null,instancingMorph:He&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ga,alphaToCoverage:!!T.alphaToCoverage,map:We,matcap:re,envMap:be,envMapMode:be&&ee.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:Z,bumpMap:oe,normalMap:_e,displacementMap:f&&me,emissiveMap:Me,normalMapObjectSpace:_e&&T.normalMapType===hE,normalMapTangentSpace:_e&&T.normalMapType===Nx,metalnessMap:de,roughnessMap:C,anisotropy:E,anisotropyMap:Se,clearcoat:j,clearcoatMap:Ce,clearcoatNormalMap:qe,clearcoatRoughnessMap:pe,dispersion:se,iridescence:ne,iridescenceMap:Ne,iridescenceThicknessMap:Ve,sheen:Q,sheenColorMap:Ue,sheenRoughnessMap:Le,specularMap:nt,specularColorMap:Ye,specularIntensityMap:dt,transmission:Ae,transmissionMap:B,thicknessMap:Ee,gradientMap:ie,opaque:T.transparent===!1&&T.blending===Ks&&T.alphaToCoverage===!1,alphaMap:ae,alphaTest:Pe,alphaHash:Re,combine:T.combine,mapUv:We&&_(T.map.channel),aoMapUv:F&&_(T.aoMap.channel),lightMapUv:Z&&_(T.lightMap.channel),bumpMapUv:oe&&_(T.bumpMap.channel),normalMapUv:_e&&_(T.normalMap.channel),displacementMapUv:me&&_(T.displacementMap.channel),emissiveMapUv:Me&&_(T.emissiveMap.channel),metalnessMapUv:de&&_(T.metalnessMap.channel),roughnessMapUv:C&&_(T.roughnessMap.channel),anisotropyMapUv:Se&&_(T.anisotropyMap.channel),clearcoatMapUv:Ce&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(T.sheenRoughnessMap.channel),specularMapUv:nt&&_(T.specularMap.channel),specularColorMapUv:Ye&&_(T.specularColorMap.channel),specularIntensityMapUv:dt&&_(T.specularIntensityMap.channel),transmissionMapUv:B&&_(T.transmissionMap.channel),thicknessMapUv:Ee&&_(T.thicknessMap.channel),alphaMapUv:ae&&_(T.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(_e||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(We||ae),fog:!!z,useFog:T.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Fe,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&st.getTransfer(T.map.colorSpace)===ft,decodeVideoTextureEmissive:Me&&T.emissiveMap.isVideoTexture===!0&&st.getTransfer(T.emissiveMap.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ei,flipSided:T.side===vn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function h(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(v(M,T),y(M,T),M.push(t.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function v(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function S(T){const M=x[T.type];let P;if(M){const V=fi[M];P=HE.clone(V.uniforms)}else P=T.uniforms;return P}function N(T,M){let P;for(let V=0,L=u.length;V<L;V++){const z=u[V];if(z.cacheKey===M){P=z,++P.usedTimes;break}}return P===void 0&&(P=new e2(t,M,T,s),u.push(P)),P}function b(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:N,releaseProgram:b,releaseShaderCache:A,programs:u,dispose:D}}function s2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function a2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ag(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,p,x,_,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=x,h.renderOrder=d.renderOrder,h.z=_,h.group=g),e++,h}function o(d,f,p,x,_,g){const h=a(d,f,p,x,_,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,x,_,g){const h=a(d,f,p,x,_,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||a2),i.length>1&&i.sort(f||Ag),r.length>1&&r.sort(f||Ag)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function o2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Cg,t.set(i,[a])):r>=s.length?(a=new Cg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function l2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new et};break;case"SpotLight":n={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function c2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let u2=0;function h2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function d2(t){const e=new l2,n=c2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Ct,a=new Ct;function o(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,_=0,g=0,h=0,v=0,y=0,S=0,N=0,b=0,A=0;c.sort(h2);for(let T=0,M=c.length;T<M;T++){const P=c[T],V=P.color,L=P.intensity,z=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=V.r*L,d+=V.g*L,f+=V.b*L;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],L);A++}else if(P.isDirectionalLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,U=n.get(P);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=O,p++}else if(P.isSpotLight){const O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(V).multiplyScalar(L),O.distance=z,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[_]=O;const ee=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,ee.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[_]=ee.matrix,P.castShadow){const U=n.get(P);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=G,S++}_++}else if(P.isRectAreaLight){const O=e.get(P);O.color.copy(V).multiplyScalar(L),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=O,g++}else if(P.isPointLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const ee=P.shadow,U=n.get(P);U.shadowIntensity=ee.intensity,U.shadowBias=ee.bias,U.shadowNormalBias=ee.normalBias,U.shadowRadius=ee.radius,U.shadowMapSize=ee.mapSize,U.shadowCameraNear=ee.camera.near,U.shadowCameraFar=ee.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=G,i.pointShadowMatrix[x]=P.shadow.matrix,y++}i.point[x]=O,x++}else if(P.isHemisphereLight){const O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(L),O.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[h]=O,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==h||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==S||D.numSpotMaps!==N||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+N-b,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,D.directionalLength=p,D.pointLength=x,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=h,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=S,D.numSpotMaps=N,D.numLightProbes=A,i.version=u2++)}function l(c,u){let d=0,f=0,p=0,x=0,_=0;const g=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const y=c[h];if(y.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function Rg(t){const e=new d2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function f2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rg(t),e.set(r,[o])):s>=a.length?(o=new Rg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class p2 extends ko{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m2 extends ko{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const g2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_2=`uniform sampler2D shadow_pass;
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
}`;function x2(t,e,n){let i=new rp;const r=new Ke,s=new Ke,a=new At,o=new p2({depthPacking:uE}),l=new m2,c={},u=n.maxTextureSize,d={[Sr]:vn,[vn]:Sr,[ei]:ei},f=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:g2,fragmentShader:_2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Vn;x.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yx;let h=this.type;this.render=function(b,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const T=t.getRenderTarget(),M=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),V=t.state;V.setBlending(gr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const L=h!==Ri&&this.type===Ri,z=h===Ri&&this.type!==Ri;for(let G=0,O=b.length;G<O;G++){const ee=b[G],U=ee.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const W=U.getFrameExtents();if(r.multiply(W),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,U.mapSize.y=s.y)),U.map===null||L===!0||z===!0){const te=this.type!==Ri?{minFilter:oi,magFilter:oi}:{};U.map!==null&&U.map.dispose(),U.map=new ns(r.x,r.y,te),U.map.texture.name=ee.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const X=U.getViewportCount();for(let te=0;te<X;te++){const ce=U.getViewport(te);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),V.viewport(a),U.updateMatrices(ee,te),i=U.getFrustum(),S(A,D,U.camera,ee,this.type)}U.isPointLightShadow!==!0&&this.type===Ri&&v(U,D),U.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(T,M,P)};function v(b,A){const D=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ns(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,D,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,D,p,_,null)}function y(b,A,D,T){let M=null;const P=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=D.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=M.uuid,L=A.uuid;let z=c[V];z===void 0&&(z={},c[V]=z);let G=z[L];G===void 0&&(G=M.clone(),z[L]=G,A.addEventListener("dispose",N)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,T===Ri?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=D}return M}function S(b,A,D,T,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Ri)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const L=e.update(b),z=b.material;if(Array.isArray(z)){const G=L.groups;for(let O=0,ee=G.length;O<ee;O++){const U=G[O],W=z[U.materialIndex];if(W&&W.visible){const X=y(b,W,T,M);b.onBeforeShadow(t,b,A,D,L,X,U),t.renderBufferDirect(D,null,L,X,b,U),b.onAfterShadow(t,b,A,D,L,X,U)}}}else if(z.visible){const G=y(b,z,T,M);b.onBeforeShadow(t,b,A,D,L,G,null),t.renderBufferDirect(D,null,L,G,b,null),b.onAfterShadow(t,b,A,D,L,G,null)}}const V=b.children;for(let L=0,z=V.length;L<z;L++)S(V[L],A,D,T,M)}function N(b){b.target.removeEventListener("dispose",N);for(const D in c){const T=c[D],M=b.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const v2={[rd]:sd,[ad]:cd,[od]:ud,[oa]:ld,[sd]:rd,[cd]:ad,[ud]:od,[ld]:oa};function y2(t,e){function n(){let B=!1;const Ee=new At;let ie=null;const ae=new At(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!B&&(t.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,Re,$e,mt,zt){zt===!0&&(Pe*=mt,Re*=mt,$e*=mt),Ee.set(Pe,Re,$e,mt),ae.equals(Ee)===!1&&(t.clearColor(Pe,Re,$e,mt),ae.copy(Ee))},reset:function(){B=!1,ie=null,ae.set(-1,0,0,0)}}}function i(){let B=!1,Ee=!1,ie=null,ae=null,Pe=null;return{setReversed:function(Re){if(Ee!==Re){const $e=e.get("EXT_clip_control");Ee?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const mt=Pe;Pe=null,this.setClear(mt)}Ee=Re},getReversed:function(){return Ee},setTest:function(Re){Re?fe(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(Re){ie!==Re&&!B&&(t.depthMask(Re),ie=Re)},setFunc:function(Re){if(Ee&&(Re=v2[Re]),ae!==Re){switch(Re){case rd:t.depthFunc(t.NEVER);break;case sd:t.depthFunc(t.ALWAYS);break;case ad:t.depthFunc(t.LESS);break;case oa:t.depthFunc(t.LEQUAL);break;case od:t.depthFunc(t.EQUAL);break;case ld:t.depthFunc(t.GEQUAL);break;case cd:t.depthFunc(t.GREATER);break;case ud:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Re}},setLocked:function(Re){B=Re},setClear:function(Re){Pe!==Re&&(Ee&&(Re=1-Re),t.clearDepth(Re),Pe=Re)},reset:function(){B=!1,ie=null,ae=null,Pe=null,Ee=!1}}}function r(){let B=!1,Ee=null,ie=null,ae=null,Pe=null,Re=null,$e=null,mt=null,zt=null;return{setTest:function(lt){B||(lt?fe(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(lt){Ee!==lt&&!B&&(t.stencilMask(lt),Ee=lt)},setFunc:function(lt,yn,Dn){(ie!==lt||ae!==yn||Pe!==Dn)&&(t.stencilFunc(lt,yn,Dn),ie=lt,ae=yn,Pe=Dn)},setOp:function(lt,yn,Dn){(Re!==lt||$e!==yn||mt!==Dn)&&(t.stencilOp(lt,yn,Dn),Re=lt,$e=yn,mt=Dn)},setLocked:function(lt){B=lt},setClear:function(lt){zt!==lt&&(t.clearStencil(lt),zt=lt)},reset:function(){B=!1,Ee=null,ie=null,ae=null,Pe=null,Re=null,$e=null,mt=null,zt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],x=null,_=!1,g=null,h=null,v=null,y=null,S=null,N=null,b=null,A=new et(0,0,0),D=0,T=!1,M=null,P=null,V=null,L=null,z=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,ee=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(U)[1]),O=ee>=1):U.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),O=ee>=2);let W=null,X={};const te=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),ze=new At().fromArray(te),J=new At().fromArray(ce);function he(B,Ee,ie,ae){const Pe=new Uint8Array(4),Re=t.createTexture();t.bindTexture(B,Re),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<ie;$e++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Ee,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(Ee+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return Re}const ye={};ye[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),a.setFunc(oa),oe(!1),_e(Dm),fe(t.CULL_FACE),F(gr);function fe(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function Fe(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function He(B,Ee){return d[B]!==Ee?(t.bindFramebuffer(B,Ee),d[B]=Ee,B===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Ee),B===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Ge(B,Ee){let ie=p,ae=!1;if(B){ie=f.get(Ee),ie===void 0&&(ie=[],f.set(Ee,ie));const Pe=B.textures;if(ie.length!==Pe.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,$e=Pe.length;Re<$e;Re++)ie[Re]=t.COLOR_ATTACHMENT0+Re;ie.length=Pe.length,ae=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,ae=!0);ae&&t.drawBuffers(ie)}function We(B){return x!==B?(t.useProgram(B),x=B,!0):!1}const re={[kr]:t.FUNC_ADD,[FM]:t.FUNC_SUBTRACT,[kM]:t.FUNC_REVERSE_SUBTRACT};re[OM]=t.MIN,re[zM]=t.MAX;const be={[BM]:t.ZERO,[HM]:t.ONE,[VM]:t.SRC_COLOR,[nd]:t.SRC_ALPHA,[qM]:t.SRC_ALPHA_SATURATE,[$M]:t.DST_COLOR,[GM]:t.DST_ALPHA,[jM]:t.ONE_MINUS_SRC_COLOR,[id]:t.ONE_MINUS_SRC_ALPHA,[XM]:t.ONE_MINUS_DST_COLOR,[WM]:t.ONE_MINUS_DST_ALPHA,[YM]:t.CONSTANT_COLOR,[KM]:t.ONE_MINUS_CONSTANT_COLOR,[ZM]:t.CONSTANT_ALPHA,[QM]:t.ONE_MINUS_CONSTANT_ALPHA};function F(B,Ee,ie,ae,Pe,Re,$e,mt,zt,lt){if(B===gr){_===!0&&(Fe(t.BLEND),_=!1);return}if(_===!1&&(fe(t.BLEND),_=!0),B!==UM){if(B!==g||lt!==T){if((h!==kr||S!==kr)&&(t.blendEquation(t.FUNC_ADD),h=kr,S=kr),lt)switch(B){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.ONE,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,y=null,N=null,b=null,A.set(0,0,0),D=0,g=B,T=lt}return}Pe=Pe||Ee,Re=Re||ie,$e=$e||ae,(Ee!==h||Pe!==S)&&(t.blendEquationSeparate(re[Ee],re[Pe]),h=Ee,S=Pe),(ie!==v||ae!==y||Re!==N||$e!==b)&&(t.blendFuncSeparate(be[ie],be[ae],be[Re],be[$e]),v=ie,y=ae,N=Re,b=$e),(mt.equals(A)===!1||zt!==D)&&(t.blendColor(mt.r,mt.g,mt.b,zt),A.copy(mt),D=zt),g=B,T=!1}function Z(B,Ee){B.side===ei?Fe(t.CULL_FACE):fe(t.CULL_FACE);let ie=B.side===vn;Ee&&(ie=!ie),oe(ie),B.blending===Ks&&B.transparent===!1?F(gr):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ae=B.stencilWrite;o.setTest(ae),ae&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function oe(B){M!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),M=B)}function _e(B){B!==NM?(fe(t.CULL_FACE),B!==P&&(B===Dm?t.cullFace(t.BACK):B===DM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),P=B}function me(B){B!==V&&(O&&t.lineWidth(B),V=B)}function Me(B,Ee,ie){B?(fe(t.POLYGON_OFFSET_FILL),(L!==Ee||z!==ie)&&(t.polygonOffset(Ee,ie),L=Ee,z=ie)):Fe(t.POLYGON_OFFSET_FILL)}function de(B){B?fe(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function C(B){B===void 0&&(B=t.TEXTURE0+G-1),W!==B&&(t.activeTexture(B),W=B)}function E(B,Ee,ie){ie===void 0&&(W===null?ie=t.TEXTURE0+G-1:ie=W);let ae=X[ie];ae===void 0&&(ae={type:void 0,texture:void 0},X[ie]=ae),(ae.type!==B||ae.texture!==Ee)&&(W!==ie&&(t.activeTexture(ie),W=ie),t.bindTexture(B,Ee||ye[B]),ae.type=B,ae.texture=Ee)}function j(){const B=X[W];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(B){ze.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),ze.copy(B))}function Le(B){J.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function nt(B,Ee){let ie=c.get(Ee);ie===void 0&&(ie=new WeakMap,c.set(Ee,ie));let ae=ie.get(B);ae===void 0&&(ae=t.getUniformBlockIndex(Ee,B.name),ie.set(B,ae))}function Ye(B,Ee){const ae=c.get(Ee).get(B);l.get(Ee)!==ae&&(t.uniformBlockBinding(Ee,ae,B.__bindingPointIndex),l.set(Ee,ae))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},W=null,X={},d={},f=new WeakMap,p=[],x=null,_=!1,g=null,h=null,v=null,y=null,S=null,N=null,b=null,A=new et(0,0,0),D=0,T=!1,M=null,P=null,V=null,L=null,z=null,ze.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:Fe,bindFramebuffer:He,drawBuffers:Ge,useProgram:We,setBlending:F,setMaterial:Z,setFlipSided:oe,setCullFace:_e,setLineWidth:me,setPolygonOffset:Me,setScissorTest:de,activeTexture:C,bindTexture:E,unbindTexture:j,compressedTexImage2D:se,compressedTexImage3D:ne,texImage2D:Ne,texImage3D:Ve,updateUBOMapping:nt,uniformBlockBinding:Ye,texStorage2D:qe,texStorage3D:pe,texSubImage2D:Q,texSubImage3D:Ae,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ce,scissor:Ue,viewport:Le,reset:dt}}function Pg(t,e,n,i){const r=S2(i);switch(n){case Tx:return t*e;case Ax:return t*e;case Cx:return t*e*2;case Rx:return t*e/r.components*r.byteLength;case ep:return t*e/r.components*r.byteLength;case Px:return t*e*2/r.components*r.byteLength;case tp:return t*e*2/r.components*r.byteLength;case bx:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case np:return t*e*4/r.components*r.byteLength;case $l:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ql:case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:case xd:return Math.max(t,16)*Math.max(e,8)/4;case md:case _d:return Math.max(t,8)*Math.max(e,8)/2;case vd:case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Fd:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Lx:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zd:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function S2(t){switch(t){case Vi:case Mx:return{byteLength:1,components:1};case To:case Ex:case Io:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case ts:case Zf:case Ii:return{byteLength:4,components:1};case wx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function M2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return p?new OffscreenCanvas(C,E):bo("canvas")}function _(C,E,j){let se=1;const ne=de(C);if((ne.width>j||ne.height>j)&&(se=j/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(se*ne.width),Ae=Math.floor(se*ne.height);d===void 0&&(d=x(Q,Ae));const Se=E?x(Q,Ae):d;return Se.width=Q,Se.height=Ae,Se.getContext("2d").drawImage(C,0,0,Q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+Ae+")."),Se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function g(C){return C.generateMipmaps}function h(C){t.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(C,E,j,se,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=E;if(E===t.RED&&(j===t.FLOAT&&(Q=t.R32F),j===t.HALF_FLOAT&&(Q=t.R16F),j===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.R8UI),j===t.UNSIGNED_SHORT&&(Q=t.R16UI),j===t.UNSIGNED_INT&&(Q=t.R32UI),j===t.BYTE&&(Q=t.R8I),j===t.SHORT&&(Q=t.R16I),j===t.INT&&(Q=t.R32I)),E===t.RG&&(j===t.FLOAT&&(Q=t.RG32F),j===t.HALF_FLOAT&&(Q=t.RG16F),j===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.RG8UI),j===t.UNSIGNED_SHORT&&(Q=t.RG16UI),j===t.UNSIGNED_INT&&(Q=t.RG32UI),j===t.BYTE&&(Q=t.RG8I),j===t.SHORT&&(Q=t.RG16I),j===t.INT&&(Q=t.RG32I)),E===t.RGB_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),j===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),j===t.UNSIGNED_INT&&(Q=t.RGB32UI),j===t.BYTE&&(Q=t.RGB8I),j===t.SHORT&&(Q=t.RGB16I),j===t.INT&&(Q=t.RGB32I)),E===t.RGBA_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),j===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),j===t.UNSIGNED_INT&&(Q=t.RGBA32UI),j===t.BYTE&&(Q=t.RGBA8I),j===t.SHORT&&(Q=t.RGBA16I),j===t.INT&&(Q=t.RGBA32I)),E===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),E===t.RGBA){const Ae=ne?Yc:st.getTransfer(se);j===t.FLOAT&&(Q=t.RGBA32F),j===t.HALF_FLOAT&&(Q=t.RGBA16F),j===t.UNSIGNED_BYTE&&(Q=Ae===ft?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(C,E){let j;return C?E===null||E===ts||E===ua?j=t.DEPTH24_STENCIL8:E===Ii?j=t.DEPTH32F_STENCIL8:E===To&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ts||E===ua?j=t.DEPTH_COMPONENT24:E===Ii?j=t.DEPTH_COMPONENT32F:E===To&&(j=t.DEPTH_COMPONENT16),j}function N(C,E){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==oi&&C.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){const E=C.target;E.removeEventListener("dispose",b),D(E),E.isVideoTexture&&u.delete(E)}function A(C){const E=C.target;E.removeEventListener("dispose",A),M(E)}function D(C){const E=i.get(C);if(E.__webglInit===void 0)return;const j=C.source,se=f.get(j);if(se){const ne=se[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(C),Object.keys(se).length===0&&f.delete(j)}i.remove(C)}function T(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const j=C.source,se=f.get(j);delete se[E.__cacheKey],a.memory.textures--}function M(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ne=0;ne<E.__webglFramebuffer[se].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[se][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)t.deleteFramebuffer(E.__webglFramebuffer[se]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=C.textures;for(let se=0,ne=j.length;se<ne;se++){const Q=i.get(j[se]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(j[se])}i.remove(C)}let P=0;function V(){P=0}function L(){const C=P;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function G(C,E){const j=i.get(C);if(C.isVideoTexture&&me(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const se=C.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,C,E);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+E)}function O(C,E){const j=i.get(C);if(C.version>0&&j.__version!==C.version){J(j,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+E)}function ee(C,E){const j=i.get(C);if(C.version>0&&j.__version!==C.version){J(j,C,E);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+E)}function U(C,E){const j=i.get(C);if(C.version>0&&j.__version!==C.version){he(j,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+E)}const W={[fd]:t.REPEAT,[Vr]:t.CLAMP_TO_EDGE,[pd]:t.MIRRORED_REPEAT},X={[oi]:t.NEAREST,[lE]:t.NEAREST_MIPMAP_NEAREST,[ll]:t.NEAREST_MIPMAP_LINEAR,[_i]:t.LINEAR,[Au]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},te={[dE]:t.NEVER,[xE]:t.ALWAYS,[fE]:t.LESS,[Dx]:t.LEQUAL,[pE]:t.EQUAL,[_E]:t.GEQUAL,[mE]:t.GREATER,[gE]:t.NOTEQUAL};function ce(C,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===Au||E.magFilter===ll||E.magFilter===jr||E.minFilter===_i||E.minFilter===Au||E.minFilter===ll||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,W[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,W[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,W[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,X[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,X[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==ll&&E.minFilter!==jr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ze(C,E){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",b));const se=E.source;let ne=f.get(se);ne===void 0&&(ne={},f.set(se,ne));const Q=z(E);if(Q!==C.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ne[Q].usedTimes++;const Ae=ne[C.__cacheKey];Ae!==void 0&&(ne[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(E)),C.__cacheKey=Q,C.__webglTexture=ne[Q].texture}return j}function J(C,E,j){let se=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=t.TEXTURE_3D);const ne=ze(C,E),Q=E.source;n.bindTexture(se,C.__webglTexture,t.TEXTURE0+j);const Ae=i.get(Q);if(Q.version!==Ae.__version||ne===!0){n.activeTexture(t.TEXTURE0+j);const Se=st.getPrimaries(st.workingColorSpace),Ce=E.colorSpace===sr?null:st.getPrimaries(E.colorSpace),qe=E.colorSpace===sr||Se===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let pe=_(E.image,!1,r.maxTextureSize);pe=Me(E,pe);const Ne=s.convert(E.format,E.colorSpace),Ve=s.convert(E.type);let Ue=y(E.internalFormat,Ne,Ve,E.colorSpace,E.isVideoTexture);ce(se,E);let Le;const nt=E.mipmaps,Ye=E.isVideoTexture!==!0,dt=Ae.__version===void 0||ne===!0,B=Q.dataReady,Ee=N(E,pe);if(E.isDepthTexture)Ue=S(E.format===ha,E.type),dt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Ue,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Ue,pe.width,pe.height,0,Ne,Ve,null));else if(E.isDataTexture)if(nt.length>0){Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,Ee,Ue,nt[0].width,nt[0].height);for(let ie=0,ae=nt.length;ie<ae;ie++)Le=nt[ie],Ye?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ne,Ve,Le.data):n.texImage2D(t.TEXTURE_2D,ie,Ue,Le.width,Le.height,0,Ne,Ve,Le.data);E.generateMipmaps=!1}else Ye?(dt&&n.texStorage2D(t.TEXTURE_2D,Ee,Ue,pe.width,pe.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe.width,pe.height,Ne,Ve,pe.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,pe.width,pe.height,0,Ne,Ve,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,Ue,nt[0].width,nt[0].height,pe.depth);for(let ie=0,ae=nt.length;ie<ae;ie++)if(Le=nt[ie],E.format!==ri)if(Ne!==null)if(Ye){if(B)if(E.layerUpdates.size>0){const Pe=Pg(Le.width,Le.height,E.format,E.type);for(const Re of E.layerUpdates){const $e=Le.data.subarray(Re*Pe/Le.data.BYTES_PER_ELEMENT,(Re+1)*Pe/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Re,Le.width,Le.height,1,Ne,$e)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,pe.depth,Ne,Le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Ue,Le.width,Le.height,pe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,pe.depth,Ne,Ve,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Ue,Le.width,Le.height,pe.depth,0,Ne,Ve,Le.data)}else{Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,Ee,Ue,nt[0].width,nt[0].height);for(let ie=0,ae=nt.length;ie<ae;ie++)Le=nt[ie],E.format!==ri?Ne!==null?Ye?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ne,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Le.width,Le.height,Ne,Ve,Le.data):n.texImage2D(t.TEXTURE_2D,ie,Ue,Le.width,Le.height,0,Ne,Ve,Le.data)}else if(E.isDataArrayTexture)if(Ye){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ee,Ue,pe.width,pe.height,pe.depth),B)if(E.layerUpdates.size>0){const ie=Pg(pe.width,pe.height,E.format,E.type);for(const ae of E.layerUpdates){const Pe=pe.data.subarray(ae*ie/pe.data.BYTES_PER_ELEMENT,(ae+1)*ie/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,pe.width,pe.height,1,Ne,Ve,Pe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ne,Ve,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,pe.width,pe.height,pe.depth,0,Ne,Ve,pe.data);else if(E.isData3DTexture)Ye?(dt&&n.texStorage3D(t.TEXTURE_3D,Ee,Ue,pe.width,pe.height,pe.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ne,Ve,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,pe.width,pe.height,pe.depth,0,Ne,Ve,pe.data);else if(E.isFramebufferTexture){if(dt)if(Ye)n.texStorage2D(t.TEXTURE_2D,Ee,Ue,pe.width,pe.height);else{let ie=pe.width,ae=pe.height;for(let Pe=0;Pe<Ee;Pe++)n.texImage2D(t.TEXTURE_2D,Pe,Ue,ie,ae,0,Ne,Ve,null),ie>>=1,ae>>=1}}else if(nt.length>0){if(Ye&&dt){const ie=de(nt[0]);n.texStorage2D(t.TEXTURE_2D,Ee,Ue,ie.width,ie.height)}for(let ie=0,ae=nt.length;ie<ae;ie++)Le=nt[ie],Ye?B&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Ne,Ve,Le):n.texImage2D(t.TEXTURE_2D,ie,Ue,Ne,Ve,Le);E.generateMipmaps=!1}else if(Ye){if(dt){const ie=de(pe);n.texStorage2D(t.TEXTURE_2D,Ee,Ue,ie.width,ie.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ne,Ve,pe)}else n.texImage2D(t.TEXTURE_2D,0,Ue,Ne,Ve,pe);g(E)&&h(se),Ae.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function he(C,E,j){if(E.image.length!==6)return;const se=ze(C,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+j);const Q=i.get(ne);if(ne.version!==Q.__version||se===!0){n.activeTexture(t.TEXTURE0+j);const Ae=st.getPrimaries(st.workingColorSpace),Se=E.colorSpace===sr?null:st.getPrimaries(E.colorSpace),Ce=E.colorSpace===sr||Ae===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const qe=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let ae=0;ae<6;ae++)!qe&&!pe?Ne[ae]=_(E.image[ae],!0,r.maxCubemapSize):Ne[ae]=pe?E.image[ae].image:E.image[ae],Ne[ae]=Me(E,Ne[ae]);const Ve=Ne[0],Ue=s.convert(E.format,E.colorSpace),Le=s.convert(E.type),nt=y(E.internalFormat,Ue,Le,E.colorSpace),Ye=E.isVideoTexture!==!0,dt=Q.__version===void 0||se===!0,B=ne.dataReady;let Ee=N(E,Ve);ce(t.TEXTURE_CUBE_MAP,E);let ie;if(qe){Ye&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,nt,Ve.width,Ve.height);for(let ae=0;ae<6;ae++){ie=Ne[ae].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe];E.format!==ri?Ue!==null?Ye?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Re.width,Re.height,Ue,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,nt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,0,0,Re.width,Re.height,Ue,Le,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe,nt,Re.width,Re.height,0,Ue,Le,Re.data)}}}else{if(ie=E.mipmaps,Ye&&dt){ie.length>0&&Ee++;const ae=de(Ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,nt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(pe){Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne[ae].width,Ne[ae].height,Ue,Le,Ne[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,Ne[ae].width,Ne[ae].height,0,Ue,Le,Ne[ae].data);for(let Pe=0;Pe<ie.length;Pe++){const $e=ie[Pe].image[ae].image;Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,$e.width,$e.height,Ue,Le,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,nt,$e.width,$e.height,0,Ue,Le,$e.data)}}else{Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,Le,Ne[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,Ue,Le,Ne[ae]);for(let Pe=0;Pe<ie.length;Pe++){const Re=ie[Pe];Ye?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,0,0,Ue,Le,Re.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Pe+1,nt,Ue,Le,Re.image[ae])}}}g(E)&&h(t.TEXTURE_CUBE_MAP),Q.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ye(C,E,j,se,ne,Q){const Ae=s.convert(j.format,j.colorSpace),Se=s.convert(j.type),Ce=y(j.internalFormat,Ae,Se,j.colorSpace),qe=i.get(E),pe=i.get(j);if(pe.__renderTarget=E,!qe.__hasExternalTextures){const Ne=Math.max(1,E.width>>Q),Ve=Math.max(1,E.height>>Q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Q,Ce,Ne,Ve,E.depth,0,Ae,Se,null):n.texImage2D(ne,Q,Ce,Ne,Ve,0,Ae,Se,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),_e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,pe.__webglTexture,0,oe(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,pe.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(C,E,j){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const se=E.depthTexture,ne=se&&se.isDepthTexture?se.type:null,Q=S(E.stencilBuffer,ne),Ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=oe(E);_e(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,Q,E.width,E.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,Q,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Q,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,C)}else{const se=E.textures;for(let ne=0;ne<se.length;ne++){const Q=se[ne],Ae=s.convert(Q.format,Q.colorSpace),Se=s.convert(Q.type),Ce=y(Q.internalFormat,Ae,Se,Q.colorSpace),qe=oe(E);j&&_e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Ce,E.width,E.height):_e(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,Ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Fe(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(E.depthTexture);se.__renderTarget=E,(!se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const ne=se.__webglTexture,Q=oe(E);if(E.depthTexture.format===Zs)_e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===ha)_e(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function He(C){const E=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const se=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=se}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Fe(E.__webglFramebuffer,C)}else if(j){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=t.createRenderbuffer(),fe(E.__webglDepthbuffer[se],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),fe(E.__webglDepthbuffer,C,!1);else{const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(C,E,j){const se=i.get(C);E!==void 0&&ye(se.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&He(C)}function We(C){const E=C.texture,j=i.get(C),se=i.get(E);C.addEventListener("dispose",A);const ne=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=E.version,a.memory.textures++),Q){j.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[Se]=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)j.__webglFramebuffer[Se][Ce]=t.createFramebuffer()}else j.__webglFramebuffer[Se]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)j.__webglFramebuffer[Se]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let Se=0,Ce=ne.length;Se<Ce;Se++){const qe=i.get(ne[Se]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&_e(C)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Se=0;Se<ne.length;Se++){const Ce=ne[Se];j.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[Se]);const qe=s.convert(Ce.format,Ce.colorSpace),pe=s.convert(Ce.type),Ne=y(Ce.internalFormat,qe,pe,Ce.colorSpace,C.isXRRenderTarget===!0),Ve=oe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Ne,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,j.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(j.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ce(t.TEXTURE_CUBE_MAP,E);for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)ye(j.__webglFramebuffer[Se][Ce],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ce);else ye(j.__webglFramebuffer[Se],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let Se=0,Ce=ne.length;Se<Ce;Se++){const qe=ne[Se],pe=i.get(qe);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),ce(t.TEXTURE_2D,qe),ye(j.__webglFramebuffer,C,qe,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,0),g(qe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let Se=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,se.__webglTexture),ce(Se,E),E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)ye(j.__webglFramebuffer[Ce],C,E,t.COLOR_ATTACHMENT0,Se,Ce);else ye(j.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,Se,0);g(E)&&h(Se),n.unbindTexture()}C.depthBuffer&&He(C)}function re(C){const E=C.textures;for(let j=0,se=E.length;j<se;j++){const ne=E[j];if(g(ne)){const Q=v(C),Ae=i.get(ne).__webglTexture;n.bindTexture(Q,Ae),h(Q),n.unbindTexture()}}}const be=[],F=[];function Z(C){if(C.samples>0){if(_e(C)===!1){const E=C.textures,j=C.width,se=C.height;let ne=t.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(C),Se=E.length>1;if(Se)for(let Ce=0;Ce<E.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);const qe=i.get(E[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,j,se,0,0,j,se,ne,t.NEAREST),l===!0&&(be.length=0,F.length=0,be.push(t.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(be.push(Q),F.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let Ce=0;Ce<E.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);const qe=i.get(E[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function oe(C){return Math.min(r.maxSamples,C.samples)}function _e(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function me(C){const E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Me(C,E){const j=C.colorSpace,se=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||j!==ga&&j!==sr&&(st.getTransfer(j)===ft?(se!==ri||ne!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=ee,this.setTextureCube=U,this.rebindTextures=Ge,this.setupRenderTarget=We,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=_e}function E2(t,e){function n(i,r=sr){let s;const a=st.getTransfer(r);if(i===Vi)return t.UNSIGNED_BYTE;if(i===Qf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===wx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mx)return t.BYTE;if(i===Ex)return t.SHORT;if(i===To)return t.UNSIGNED_SHORT;if(i===Zf)return t.INT;if(i===ts)return t.UNSIGNED_INT;if(i===Ii)return t.FLOAT;if(i===Io)return t.HALF_FLOAT;if(i===Tx)return t.ALPHA;if(i===bx)return t.RGB;if(i===ri)return t.RGBA;if(i===Ax)return t.LUMINANCE;if(i===Cx)return t.LUMINANCE_ALPHA;if(i===Zs)return t.DEPTH_COMPONENT;if(i===ha)return t.DEPTH_STENCIL;if(i===Rx)return t.RED;if(i===ep)return t.RED_INTEGER;if(i===Px)return t.RG;if(i===tp)return t.RG_INTEGER;if(i===np)return t.RGBA_INTEGER;if(i===$l||i===Xl||i===ql||i===Yl)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$l)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$l)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===md||i===gd||i===_d||i===xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vd||i===yd||i===Sd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vd||i===yd)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Md||i===Ed||i===wd||i===Td||i===bd||i===Ad||i===Cd||i===Rd||i===Pd||i===Ld||i===Nd||i===Dd||i===Id||i===Ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Md)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ed)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Td)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Id)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ud)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===Fd||i===kd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kl)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lx||i===Od||i===zd||i===Bd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class w2 extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qn extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T2={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const b2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A2=`
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

}`;class C2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Mr({vertexShader:b2,fragmentShader:A2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nt(new Xr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R2 extends os{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,x=null;const _=new C2,g=n.getContextAttributes();let h=null,v=null;const y=[],S=[],N=new Ke;let b=null;const A=new zn;A.viewport=new At;const D=new zn;D.viewport=new At;const T=[A,D],M=new w2;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=y[J];return he===void 0&&(he=new th,y[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=y[J];return he===void 0&&(he=new th,y[J]=he),he.getGripSpace()},this.getHand=function(J){let he=y[J];return he===void 0&&(he=new th,y[J]=he),he.getHandSpace()};function L(J){const he=S.indexOf(J.inputSource);if(he===-1)return;const ye=y[he];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||a),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",G);for(let J=0;J<y.length;J++){const he=S[J];he!==null&&(S[J]=null,y[J].disconnect(he))}P=null,V=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ns(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,ye=null,fe=null;g.depth&&(fe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=g.stencil?ha:Zs,ye=g.stencil?ua:ts);const Fe={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ns(f.textureWidth,f.textureHeight,{format:ri,type:Vi,depthTexture:new Xx(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(J){for(let he=0;he<J.removed.length;he++){const ye=J.removed[he],fe=S.indexOf(ye);fe>=0&&(S[fe]=null,y[fe].disconnect(ye))}for(let he=0;he<J.added.length;he++){const ye=J.added[he];let fe=S.indexOf(ye);if(fe===-1){for(let He=0;He<y.length;He++)if(He>=S.length){S.push(ye),fe=He;break}else if(S[He]===null){S[He]=ye,fe=He;break}if(fe===-1)break}const Fe=y[fe];Fe&&Fe.connect(ye)}}const O=new $,ee=new $;function U(J,he,ye){O.setFromMatrixPosition(he.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const fe=O.distanceTo(ee),Fe=he.projectionMatrix.elements,He=ye.projectionMatrix.elements,Ge=Fe[14]/(Fe[10]-1),We=Fe[14]/(Fe[10]+1),re=(Fe[9]+1)/Fe[5],be=(Fe[9]-1)/Fe[5],F=(Fe[8]-1)/Fe[0],Z=(He[8]+1)/He[0],oe=Ge*F,_e=Ge*Z,me=fe/(-F+Z),Me=me*-F;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Me),J.translateZ(me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const de=Ge+me,C=We+me,E=oe-Me,j=_e+(fe-Me),se=re*We/C*de,ne=be*We/C*de;J.projectionMatrix.makePerspective(E,j,se,ne,de,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function W(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let he=J.near,ye=J.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),M.near=D.near=A.near=he,M.far=D.far=A.far=ye,(P!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,V=M.far),A.layers.mask=J.layers.mask|2,D.layers.mask=J.layers.mask|4,M.layers.mask=A.layers.mask|D.layers.mask;const fe=J.parent,Fe=M.cameras;W(M,fe);for(let He=0;He<Fe.length;He++)W(Fe[He],fe);Fe.length===2?U(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),X(J,M,fe)};function X(J,he,ye){ye===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let te=null;function ce(J,he){if(u=he.getViewerPose(c||a),x=he,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let fe=!1;ye.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let He=0;He<ye.length;He++){const Ge=ye[He];let We=null;if(p!==null)We=p.getViewport(Ge);else{const be=d.getViewSubImage(f,Ge);We=be.viewport,He===0&&(e.setRenderTargetTextures(v,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(v))}let re=T[He];re===void 0&&(re=new zn,re.layers.enable(He),re.viewport=new At,T[He]=re),re.matrix.fromArray(Ge.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ge.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(We.x,We.y,We.width,We.height),He===0&&(M.matrix.copy(re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(re)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const He=d.getDepthInformation(ye[0]);He&&He.isValid&&He.texture&&_.init(e,He,r.renderState)}}for(let ye=0;ye<y.length;ye++){const fe=S[ye],Fe=y[ye];fe!==null&&Fe!==void 0&&Fe.update(fe,he,c||a)}te&&te(J,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),x=null}const ze=new Wx;ze.setAnimationLoop(ce),this.setAnimationLoop=function(J){te=J},this.dispose=function(){}}}const Dr=new Si,P2=new Ct;function L2(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Vx(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,y,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),x(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),_(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,v,y):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===vn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===vn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,S=v.envMapRotation;y&&(g.envMap.value=y,Dr.copy(S),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),g.envMapRotation.value.setFromMatrix4(P2.makeRotationFromEuler(Dr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,y){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=y*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===vn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function N2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=r[v.id];S===void 0&&(x(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",g));const N=y.program;i.updateUBOMapping(v,N);const b=e.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function u(v){const y=d();v.__bindingPointIndex=y;const S=t.createBuffer(),N=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,N,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],S=v.uniforms,N=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let b=0,A=S.length;b<A;b++){const D=Array.isArray(S[b])?S[b]:[S[b]];for(let T=0,M=D.length;T<M;T++){const P=D[T];if(p(P,b,T,N)===!0){const V=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let G=0;G<L.length;G++){const O=L[G],ee=_(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,V+z,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,z),z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,y,S,N){const b=v.value,A=y+"_"+S;if(N[A]===void 0)return typeof b=="number"||typeof b=="boolean"?N[A]=b:N[A]=b.clone(),!0;{const D=N[A];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return N[A]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function x(v){const y=v.uniforms;let S=0;const N=16;for(let A=0,D=y.length;A<D;A++){const T=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,P=T.length;M<P;M++){const V=T[M],L=Array.isArray(V.value)?V.value:[V.value];for(let z=0,G=L.length;z<G;z++){const O=L[z],ee=_(O),U=S%N,W=U%ee.boundary,X=U+W;S+=W,X!==0&&N-X<ee.storage&&(S+=N-X),V.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=ee.storage}}}const b=S%N;return b>0&&(S+=N-b),v.__size=S,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class D2{constructor(e={}){const{canvas:n=SE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=_r,this.toneMappingExposure=1;const S=this;let N=!1,b=0,A=0,D=null,T=-1,M=null;const P=new At,V=new At;let L=null;const z=new et(0);let G=0,O=n.width,ee=n.height,U=1,W=null,X=null;const te=new At(0,0,O,ee),ce=new At(0,0,O,ee);let ze=!1;const J=new rp;let he=!1,ye=!1;const fe=new Ct,Fe=new Ct,He=new $,Ge=new At,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function be(){return D===null?U:1}let F=i;function Z(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yf}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Re,!1),F===null){const k="webgl2";if(F=Z(k,w),F===null)throw Z(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,_e,me,Me,de,C,E,j,se,ne,Q,Ae,Se,Ce,qe,pe,Ne,Ve,Ue,Le,nt,Ye,dt,B;function Ee(){oe=new OT(F),oe.init(),Ye=new E2(F,oe),_e=new NT(F,oe,e,Ye),me=new y2(F,oe),_e.reverseDepthBuffer&&f&&me.buffers.depth.setReversed(!0),Me=new HT(F),de=new s2,C=new M2(F,oe,me,de,_e,Ye,Me),E=new IT(S),j=new kT(S),se=new qE(F),dt=new PT(F,se),ne=new zT(F,se,Me,dt),Q=new jT(F,ne,se,Me),Ue=new VT(F,_e,C),pe=new DT(de),Ae=new r2(S,E,j,oe,_e,dt,pe),Se=new L2(S,de),Ce=new o2,qe=new f2(oe),Ve=new RT(S,E,j,me,Q,p,l),Ne=new x2(S,Q,_e),B=new N2(F,Me,_e,me),Le=new LT(F,oe,Me),nt=new BT(F,oe,Me),Me.programs=Ae.programs,S.capabilities=_e,S.extensions=oe,S.properties=de,S.renderLists=Ce,S.shadowMap=Ne,S.state=me,S.info=Me}Ee();const ie=new R2(S,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(O,ee,!1))},this.getSize=function(w){return w.set(O,ee)},this.setSize=function(w,k,Y=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,ee=k,n.width=Math.floor(w*U),n.height=Math.floor(k*U),Y===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(O*U,ee*U).floor()},this.setDrawingBufferSize=function(w,k,Y){O=w,ee=k,U=Y,n.width=Math.floor(w*Y),n.height=Math.floor(k*Y),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,k,Y,K){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,k,Y,K),me.viewport(P.copy(te).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,k,Y,K){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,k,Y,K),me.scissor(V.copy(ce).multiplyScalar(U).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(w){me.setScissorTest(ze=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(w=!0,k=!0,Y=!0){let K=0;if(w){let H=!1;if(D!==null){const xe=D.texture.format;H=xe===np||xe===tp||xe===ep}if(H){const xe=D.texture.type,ue=xe===Vi||xe===ts||xe===To||xe===ua||xe===Qf||xe===Jf,ve=Ve.getClearColor(),we=Ve.getClearAlpha(),Xe=ve.r,Ze=ve.g,Oe=ve.b;ue?(x[0]=Xe,x[1]=Ze,x[2]=Oe,x[3]=we,F.clearBufferuiv(F.COLOR,0,x)):(_[0]=Xe,_[1]=Ze,_[2]=Oe,_[3]=we,F.clearBufferiv(F.COLOR,0,_))}else K|=F.COLOR_BUFFER_BIT}k&&(K|=F.DEPTH_BUFFER_BIT),Y&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),Ce.dispose(),qe.dispose(),de.dispose(),E.dispose(),j.dispose(),Q.dispose(),dt.dispose(),B.dispose(),Ae.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Oo),ie.removeEventListener("sessionend",br),In.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const w=Me.autoReset,k=Ne.enabled,Y=Ne.autoUpdate,K=Ne.needsUpdate,H=Ne.type;Ee(),Me.autoReset=w,Ne.enabled=k,Ne.autoUpdate=Y,Ne.needsUpdate=K,Ne.type=H}function Re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const k=w.target;k.removeEventListener("dispose",$e),mt(k)}function mt(w){zt(w),de.remove(w)}function zt(w){const k=de.get(w).programs;k!==void 0&&(k.forEach(function(Y){Ae.releaseProgram(Y)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Y,K,H,xe){k===null&&(k=We);const ue=H.isMesh&&H.matrixWorld.determinant()<0,ve=le(w,k,Y,K,H);me.setMaterial(K,ue);let we=Y.index,Xe=1;if(K.wireframe===!0){if(we=ne.getWireframeAttribute(Y),we===void 0)return;Xe=2}const Ze=Y.drawRange,Oe=Y.attributes.position;let ot=Ze.start*Xe,gt=(Ze.start+Ze.count)*Xe;xe!==null&&(ot=Math.max(ot,xe.start*Xe),gt=Math.min(gt,(xe.start+xe.count)*Xe)),we!==null?(ot=Math.max(ot,0),gt=Math.min(gt,we.count)):Oe!=null&&(ot=Math.max(ot,0),gt=Math.min(gt,Oe.count));const xt=gt-ot;if(xt<0||xt===1/0)return;dt.setup(H,K,ve,Y,we);let un,ct=Le;if(we!==null&&(un=se.get(we),ct=nt,ct.setIndex(un)),H.isMesh)K.wireframe===!0?(me.setLineWidth(K.wireframeLinewidth*be()),ct.setMode(F.LINES)):ct.setMode(F.TRIANGLES);else if(H.isLine){let Be=K.linewidth;Be===void 0&&(Be=1),me.setLineWidth(Be*be()),H.isLineSegments?ct.setMode(F.LINES):H.isLineLoop?ct.setMode(F.LINE_LOOP):ct.setMode(F.LINE_STRIP)}else H.isPoints?ct.setMode(F.POINTS):H.isSprite&&ct.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ct.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,Mi=H._multiDrawCounts,ut=H._multiDrawCount,Wn=we?se.get(we).bytesPerElement:1,us=de.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<ut;Sn++)us.setValue(F,"_gl_DrawID",Sn),ct.render(Be[Sn]/Wn,Mi[Sn])}else if(H.isInstancedMesh)ct.renderInstances(ot,xt,H.count);else if(Y.isInstancedBufferGeometry){const Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Mi=Math.min(Y.instanceCount,Be);ct.renderInstances(ot,xt,Mi)}else ct.render(ot,xt)};function lt(w,k,Y){w.transparent===!0&&w.side===ei&&w.forceSinglePass===!1?(w.side=vn,w.needsUpdate=!0,R(w,k,Y),w.side=Sr,w.needsUpdate=!0,R(w,k,Y),w.side=ei):R(w,k,Y)}this.compile=function(w,k,Y=null){Y===null&&(Y=w),h=qe.get(Y),h.init(k),y.push(h),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),w!==Y&&w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights();const K=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xe=H.material;if(xe)if(Array.isArray(xe))for(let ue=0;ue<xe.length;ue++){const ve=xe[ue];lt(ve,Y,H),K.add(ve)}else lt(xe,Y,H),K.add(xe)}),y.pop(),h=null,K},this.compileAsync=function(w,k,Y=null){const K=this.compile(w,k,Y);return new Promise(H=>{function xe(){if(K.forEach(function(ue){de.get(ue).currentProgram.isReady()&&K.delete(ue)}),K.size===0){H(w);return}setTimeout(xe,10)}oe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let yn=null;function Dn(w){yn&&yn(w)}function Oo(){In.stop()}function br(){In.start()}const In=new Wx;In.setAnimationLoop(Dn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(w){yn=w,ie.setAnimationLoop(w),w===null?In.stop():In.start()},ie.addEventListener("sessionstart",Oo),ie.addEventListener("sessionend",br),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,k,D),h=qe.get(w,y.length),h.init(k),y.push(h),Fe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(Fe),ye=this.localClippingEnabled,he=pe.init(this.clippingPlanes,ye),g=Ce.get(w,v.length),g.init(),v.push(g),ie.enabled===!0&&ie.isPresenting===!0){const xe=S.xr.getDepthSensingMesh();xe!==null&&ls(xe,k,-1/0,S.sortObjects)}ls(w,k,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(W,X),re=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,re&&Ve.addToRenderList(g,w),this.info.render.frame++,he===!0&&pe.beginShadows();const Y=h.state.shadowsArray;Ne.render(Y,w,k),he===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,H=g.transmissive;if(h.setupLights(),k.isArrayCamera){const xe=k.cameras;if(H.length>0)for(let ue=0,ve=xe.length;ue<ve;ue++){const we=xe[ue];zo(K,H,w,we)}re&&Ve.render(w);for(let ue=0,ve=xe.length;ue<ve;ue++){const we=xe[ue];va(g,w,we,we.viewport)}}else H.length>0&&zo(K,H,w,k),re&&Ve.render(w),va(g,w,k);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(S,w,k),dt.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(h=y[y.length-1],he===!0&&pe.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ls(w,k,Y,K){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){K&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Fe);const ue=Q.update(w),ve=w.material;ve.visible&&g.push(w,ue,ve,Y,Ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const ue=Q.update(w),ve=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ge.copy(ue.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(Fe)),Array.isArray(ve)){const we=ue.groups;for(let Xe=0,Ze=we.length;Xe<Ze;Xe++){const Oe=we[Xe],ot=ve[Oe.materialIndex];ot&&ot.visible&&g.push(w,ue,ot,Y,Ge.z,Oe)}}else ve.visible&&g.push(w,ue,ve,Y,Ge.z,null)}}const xe=w.children;for(let ue=0,ve=xe.length;ue<ve;ue++)ls(xe[ue],k,Y,K)}function va(w,k,Y,K){const H=w.opaque,xe=w.transmissive,ue=w.transparent;h.setupLightsView(Y),he===!0&&pe.setGlobalState(S.clippingPlanes,Y),K&&me.viewport(P.copy(K)),H.length>0&&cs(H,k,Y),xe.length>0&&cs(xe,k,Y),ue.length>0&&cs(ue,k,Y),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function zo(w,k,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[K.id]===void 0&&(h.state.transmissionRenderTarget[K.id]=new ns(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Io:Vi,minFilter:jr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const xe=h.state.transmissionRenderTarget[K.id],ue=K.viewport||P;xe.setSize(ue.z,ue.w);const ve=S.getRenderTarget();S.setRenderTarget(xe),S.getClearColor(z),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),re&&Ve.render(Y);const we=S.toneMapping;S.toneMapping=_r;const Xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),h.setupLightsView(K),he===!0&&pe.setGlobalState(S.clippingPlanes,K),cs(w,Y,K),C.updateMultisampleRenderTarget(xe),C.updateRenderTargetMipmap(xe),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Oe=0,ot=k.length;Oe<ot;Oe++){const gt=k[Oe],xt=gt.object,un=gt.geometry,ct=gt.material,Be=gt.group;if(ct.side===ei&&xt.layers.test(K.layers)){const Mi=ct.side;ct.side=vn,ct.needsUpdate=!0,Bo(xt,Y,K,un,ct,Be),ct.side=Mi,ct.needsUpdate=!0,Ze=!0}}Ze===!0&&(C.updateMultisampleRenderTarget(xe),C.updateRenderTargetMipmap(xe))}S.setRenderTarget(ve),S.setClearColor(z,G),Xe!==void 0&&(K.viewport=Xe),S.toneMapping=we}function cs(w,k,Y){const K=k.isScene===!0?k.overrideMaterial:null;for(let H=0,xe=w.length;H<xe;H++){const ue=w[H],ve=ue.object,we=ue.geometry,Xe=K===null?ue.material:K,Ze=ue.group;ve.layers.test(Y.layers)&&Bo(ve,k,Y,we,Xe,Ze)}}function Bo(w,k,Y,K,H,xe){w.onBeforeRender(S,k,Y,K,H,xe),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(S,k,Y,K,w,xe),H.transparent===!0&&H.side===ei&&H.forceSinglePass===!1?(H.side=vn,H.needsUpdate=!0,S.renderBufferDirect(Y,k,K,H,w,xe),H.side=Sr,H.needsUpdate=!0,S.renderBufferDirect(Y,k,K,H,w,xe),H.side=ei):S.renderBufferDirect(Y,k,K,H,w,xe),w.onAfterRender(S,k,Y,K,H,xe)}function R(w,k,Y){k.isScene!==!0&&(k=We);const K=de.get(w),H=h.state.lights,xe=h.state.shadowsArray,ue=H.state.version,ve=Ae.getParameters(w,H.state,xe,k,Y),we=Ae.getProgramCacheKey(ve);let Xe=K.programs;K.environment=w.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(w.isMeshStandardMaterial?j:E).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",$e),Xe=new Map,K.programs=Xe);let Ze=Xe.get(we);if(Ze!==void 0){if(K.currentProgram===Ze&&K.lightsStateVersion===ue)return q(w,ve),Ze}else ve.uniforms=Ae.getUniforms(w),w.onBeforeCompile(ve,S),Ze=Ae.acquireProgram(ve,we),Xe.set(we,Ze),K.uniforms=ve.uniforms;const Oe=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=pe.uniform),q(w,ve),K.needsLights=it(w),K.lightsStateVersion=ue,K.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=Ze,K.uniformsList=null,Ze}function I(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Ql.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function q(w,k){const Y=de.get(w);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function le(w,k,Y,K,H){k.isScene!==!0&&(k=We),C.resetTextureUnits();const xe=k.fog,ue=K.isMeshStandardMaterial?k.environment:null,ve=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ga,we=(K.isMeshStandardMaterial?j:E).get(K.envMap||ue),Xe=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ze=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Oe=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,gt=!!Y.morphAttributes.color;let xt=_r;K.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xt=S.toneMapping);const un=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ct=un!==void 0?un.length:0,Be=de.get(K),Mi=h.state.lights;if(he===!0&&(ye===!0||w!==M)){const Un=w===M&&K.id===T;pe.setState(K,w,Un)}let ut=!1;K.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Mi.state.version||Be.outputColorSpace!==ve||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==we||K.fog===!0&&Be.fog!==xe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==pe.numPlanes||Be.numIntersection!==pe.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==Ze||Be.morphTargets!==Oe||Be.morphNormals!==ot||Be.morphColors!==gt||Be.toneMapping!==xt||Be.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Be.__version=K.version);let Wn=Be.currentProgram;ut===!0&&(Wn=R(K,k,H));let us=!1,Sn=!1,ya=!1;const vt=Wn.getUniforms(),ci=Be.uniforms;if(me.useProgram(Wn.program)&&(us=!0,Sn=!0,ya=!0),K.id!==T&&(T=K.id,Sn=!0),us||M!==w){me.buffers.depth.getReversed()?(fe.copy(w.projectionMatrix),EE(fe),wE(fe),vt.setValue(F,"projectionMatrix",fe)):vt.setValue(F,"projectionMatrix",w.projectionMatrix),vt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Gi=vt.map.cameraPosition;Gi!==void 0&&Gi.setValue(F,He.setFromMatrixPosition(w.matrixWorld)),_e.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&vt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Sn=!0,ya=!0)}if(H.isSkinnedMesh){vt.setOptional(F,H,"bindMatrix"),vt.setOptional(F,H,"bindMatrixInverse");const Un=H.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),vt.setValue(F,"boneTexture",Un.boneTexture,C))}H.isBatchedMesh&&(vt.setOptional(F,H,"batchingTexture"),vt.setValue(F,"batchingTexture",H._matricesTexture,C),vt.setOptional(F,H,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",H._indirectTexture,C),vt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",H._colorsTexture,C));const Sa=Y.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0)&&Ue.update(H,Y,Wn),(Sn||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,vt.setValue(F,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ci.envMap.value=we,ci.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(ci.envMapIntensity.value=k.environmentIntensity),Sn&&(vt.setValue(F,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&ke(ci,ya),xe&&K.fog===!0&&Se.refreshFogUniforms(ci,xe),Se.refreshMaterialUniforms(ci,K,U,ee,h.state.transmissionRenderTarget[w.id]),Ql.upload(F,I(Be),ci,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ql.upload(F,I(Be),ci,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&vt.setValue(F,"center",H.center),vt.setValue(F,"modelViewMatrix",H.modelViewMatrix),vt.setValue(F,"normalMatrix",H.normalMatrix),vt.setValue(F,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Un=K.uniformsGroups;for(let Gi=0,Wi=Un.length;Gi<Wi;Gi++){const up=Un[Gi];B.update(up,Wn),B.bind(up,Wn)}}return Wn}function ke(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function it(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,k,Y){de.get(w.texture).__webglTexture=k,de.get(w.depthTexture).__webglTexture=Y;const K=de.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const Y=de.get(w);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,Y=0){D=w,b=k,A=Y;let K=!0,H=null,xe=!1,ue=!1;if(w){const we=de.get(w);if(we.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(we.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(we.__hasExternalTextures)C.rebindTextures(w,de.get(w.texture).__webglTexture,de.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(we.__boundDepthTexture!==Oe){if(Oe!==null&&de.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ue=!0);const Ze=de.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[k])?H=Ze[k][Y]:H=Ze[k],xe=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?H=de.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?H=Ze[Y]:H=Ze,P.copy(w.viewport),V.copy(w.scissor),L=w.scissorTest}else P.copy(te).multiplyScalar(U).floor(),V.copy(ce).multiplyScalar(U).floor(),L=ze;if(me.bindFramebuffer(F.FRAMEBUFFER,H)&&K&&me.drawBuffers(w,H),me.viewport(P),me.scissor(V),me.setScissorTest(L),xe){const we=de.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,Y)}else if(ue){const we=de.get(w.texture),Xe=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,Y||0,Xe)}T=-1},this.readRenderTargetPixels=function(w,k,Y,K,H,xe,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){me.bindFramebuffer(F.FRAMEBUFFER,ve);try{const we=w.texture,Xe=we.format,Ze=we.type;if(!_e.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-K&&Y>=0&&Y<=w.height-H&&F.readPixels(k,Y,K,H,Ye.convert(Xe),Ye.convert(Ze),xe)}finally{const we=D!==null?de.get(D).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,k,Y,K,H,xe,ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=de.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){const we=w.texture,Xe=we.format,Ze=we.type;if(!_e.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-K&&Y>=0&&Y<=w.height-H){me.bindFramebuffer(F.FRAMEBUFFER,ve);const Oe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Oe),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(k,Y,K,H,Ye.convert(Xe),Ye.convert(Ze),0);const ot=D!==null?de.get(D).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,ot);const gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ME(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Oe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(Oe),F.deleteSync(gt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,Y=0){w.isTexture!==!0&&(Ga("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-Y),H=Math.floor(w.image.width*K),xe=Math.floor(w.image.height*K),ue=k!==null?k.x:0,ve=k!==null?k.y:0;C.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,ue,ve,H,xe),me.unbindTexture()},this.copyTextureToTexture=function(w,k,Y=null,K=null,H=0){w.isTexture!==!0&&(Ga("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],k=arguments[2],H=arguments[3]||0,Y=null);let xe,ue,ve,we,Xe,Ze,Oe,ot,gt;const xt=w.isCompressedTexture?w.mipmaps[H]:w.image;Y!==null?(xe=Y.max.x-Y.min.x,ue=Y.max.y-Y.min.y,ve=Y.isBox3?Y.max.z-Y.min.z:1,we=Y.min.x,Xe=Y.min.y,Ze=Y.isBox3?Y.min.z:0):(xe=xt.width,ue=xt.height,ve=xt.depth||1,we=0,Xe=0,Ze=0),K!==null?(Oe=K.x,ot=K.y,gt=K.z):(Oe=0,ot=0,gt=0);const un=Ye.convert(k.format),ct=Ye.convert(k.type);let Be;k.isData3DTexture?(C.setTexture3D(k,0),Be=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Be=F.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Be=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Mi=F.getParameter(F.UNPACK_ROW_LENGTH),ut=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Wn=F.getParameter(F.UNPACK_SKIP_PIXELS),us=F.getParameter(F.UNPACK_SKIP_ROWS),Sn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,we),F.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze);const ya=w.isDataArrayTexture||w.isData3DTexture,vt=k.isDataArrayTexture||k.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const ci=de.get(w),Sa=de.get(k),Un=de.get(ci.__renderTarget),Gi=de.get(Sa.__renderTarget);me.bindFramebuffer(F.READ_FRAMEBUFFER,Un.__webglFramebuffer),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Wi=0;Wi<ve;Wi++)ya&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,de.get(w).__webglTexture,H,Ze+Wi),w.isDepthTexture?(vt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,de.get(k).__webglTexture,H,gt+Wi),F.blitFramebuffer(we,Xe,xe,ue,Oe,ot,xe,ue,F.DEPTH_BUFFER_BIT,F.NEAREST)):vt?F.copyTexSubImage3D(Be,H,Oe,ot,gt+Wi,we,Xe,xe,ue):F.copyTexSubImage2D(Be,H,Oe,ot,gt+Wi,we,Xe,xe,ue);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Be,H,Oe,ot,gt,xe,ue,ve,un,ct,xt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Be,H,Oe,ot,gt,xe,ue,ve,un,xt.data):F.texSubImage3D(Be,H,Oe,ot,gt,xe,ue,ve,un,ct,xt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,Oe,ot,xe,ue,un,ct,xt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,Oe,ot,xt.width,xt.height,un,xt.data):F.texSubImage2D(F.TEXTURE_2D,H,Oe,ot,xe,ue,un,ct,xt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mi),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Wn),F.pixelStorei(F.UNPACK_SKIP_ROWS,us),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Sn),H===0&&k.generateMipmaps&&F.generateMipmap(Be),me.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Y=null,K=null,H=0){return w.isTexture!==!0&&(Ga("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,w=arguments[2],k=arguments[3],H=arguments[4]||0),Ga('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,Y,K,H)},this.initRenderTarget=function(w){de.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){b=0,A=0,D=null,me.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}class I2 extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ap extends Vn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let x=0;const _=[],g=i/2;let h=0;v(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new en(d,3)),this.setAttribute("normal",new en(f,3)),this.setAttribute("uv",new en(p,2));function v(){const S=new $,N=new $;let b=0;const A=(n-e)/i;for(let D=0;D<=s;D++){const T=[],M=D/s,P=M*(n-e)+e;for(let V=0;V<=r;V++){const L=V/r,z=L*l+o,G=Math.sin(z),O=Math.cos(z);N.x=P*G,N.y=-M*i+g,N.z=P*O,d.push(N.x,N.y,N.z),S.set(G,A,O).normalize(),f.push(S.x,S.y,S.z),p.push(L,1-M),T.push(x++)}_.push(T)}for(let D=0;D<r;D++)for(let T=0;T<s;T++){const M=_[T][D],P=_[T+1][D],V=_[T+1][D+1],L=_[T][D+1];(e>0||T!==0)&&(u.push(M,P,L),b+=3),(n>0||T!==s-1)&&(u.push(P,V,L),b+=3)}c.addGroup(h,b,0),h+=b}function y(S){const N=x,b=new Ke,A=new $;let D=0;const T=S===!0?e:n,M=S===!0?1:-1;for(let V=1;V<=r;V++)d.push(0,g*M,0),f.push(0,M,0),p.push(.5,.5),x++;const P=x;for(let V=0;V<=r;V++){const z=V/r*l+o,G=Math.cos(z),O=Math.sin(z);A.x=T*O,A.y=g*M,A.z=T*G,d.push(A.x,A.y,A.z),f.push(0,M,0),b.x=G*.5+.5,b.y=O*.5*M+.5,p.push(b.x,b.y),x++}for(let V=0;V<r;V++){const L=N+V,z=P+V;S===!0?u.push(z,z+1,L):u.push(z+1,z,L),D+=3}c.addGroup(h,D,S===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class op extends Vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new $,f=new $,p=[],x=[],_=[],g=[];for(let h=0;h<=i;h++){const v=[],y=h/i;let S=0;h===0&&a===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let N=0;N<=n;N++){const b=N/n;d.x=-e*Math.cos(r+b*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+b*s)*Math.sin(a+y*o),x.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(b+S,1-y),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const y=u[h][v+1],S=u[h][v],N=u[h+1][v],b=u[h+1][v+1];(h!==0||a>0)&&p.push(y,S,b),(h!==i-1||l<Math.PI)&&p.push(S,N,b)}this.setIndex(p),this.setAttribute("position",new en(x,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lg extends ko{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nx,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ng={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class U2{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const F2=new U2;class lp{constructor(e){this.manager=e!==void 0?e:F2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lp.DEFAULT_MATERIAL_NAME="__DEFAULT";class k2 extends lp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ng.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=bo("img");function l(){u(),Ng.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class O2 extends lp{constructor(e){super(e)}load(e,n,i,r){const s=new on,a=new k2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Qx extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class z2 extends Qx{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const nh=new Ct,Dg=new $,Ig=new $;class B2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Dg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dg),Ig.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ig),n.updateMatrixWorld(),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class H2 extends B2{constructor(){super(new $x(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V2 extends Qx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new H2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ug{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(sn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class j2 extends os{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);const Fg={type:"change"},cp={type:"start"},Jx={type:"end"},Rl=new kx,kg=new nr,G2=Math.cos(70*yE.DEG2RAD),It=new $,dn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ih=1e-6;class W2 extends j2{constructor(e,n=null){super(e,n),this.state=pt.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new is,this._lastTargetPosition=new $,this._quat=new is().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ug,this._sphericalDelta=new Ug,this._scale=1,this._panOffset=new $,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new $,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X2.bind(this),this._onPointerDown=$2.bind(this),this._onPointerUp=q2.bind(this),this._onContextMenu=tA.bind(this),this._onMouseWheel=Z2.bind(this),this._onKeyDown=Q2.bind(this),this._onTouchStart=J2.bind(this),this._onTouchMove=eA.bind(this),this._onMouseDown=Y2.bind(this),this._onMouseMove=K2.bind(this),this._interceptControlDown=nA.bind(this),this._interceptControlUp=iA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fg),this.update(),this.state=pt.NONE}update(e=null){const n=this.object.position;It.copy(n).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),r<-Math.PI?r+=dn:r>Math.PI&&(r-=dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),n.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=It.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Rl.origin.copy(this.object.position),Rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rl.direction))<G2?this.object.lookAt(this.target):(kg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rl.intersectPlane(kg,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ih||this._lastTargetPosition.distanceToSquared(this.target)>ih?(this.dispatchEvent(Fg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){It.setFromMatrixColumn(n,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,n){this.screenSpacePanning===!0?It.setFromMatrixColumn(n,1):(It.setFromMatrixColumn(n,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;It.copy(r).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-dn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ke,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function X2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function q2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jx),this.state=pt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Y2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=pt.DOLLY;break;case Ys.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=pt.ROTATE}break;case Ys.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(cp)}function K2(t){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Z2(t){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(t.preventDefault(),this.dispatchEvent(cp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Jx))}function Q2(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function J2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=pt.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=pt.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(cp)}function eA(t){switch(this._trackPointer(t),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=pt.NONE}}function tA(t){this.enabled!==!1&&t.preventDefault()}function nA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const As=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim()||"#888888";class $a{constructor(e){this.box=e,this.r=new D2({antialias:!0}),this.r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),e.appendChild(this.r.domElement),this.scene=new I2,this.cam=new zn(50,1,.3,6e3),this.draw=this.draw.bind(this),this.ctl=new W2(this.cam,this.r.domElement),this.ctl.maxPolarAngle=Math.PI*.495,this.ctl.addEventListener("change",this.draw),this.scene.add(new z2(16777215,8226167,.8*Math.PI));const n=new V2(16777215,.6*Math.PI);n.position.set(-60,120,80),this.scene.add(n),this.root=new Qn,this.scene.add(this.root),this.boxG=new _a(1,1,1),this.cylG=new ap(1,1,1,28),this.sphG=new op(1,10,8),this.mats={},this.geoms=[],this.tex=null,this.texSrc=null,this.first=!0,this.camMode="corner",this.inner=null,this.dims=null,this.lay=null,this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize()}resize(){const e=this.box.clientWidth,n=this.box.clientHeight;!e||!n||(this.r.setSize(e,n,!1),this.cam.aspect=e/n,this.cam.updateProjectionMatrix(),this.draw())}draw(){this.r.render(this.scene,this.cam)}geo(e){return this.geoms.push(e),e}mat(e,n={}){const i=e+JSON.stringify(n);if(!this.mats[i]){const{basic:r,...s}=n;this.mats[i]=r?new Rc({color:new et(e),...s}):new Lg({color:new et(e),...s})}return this.mats[i]}boxAt(e,n,i,r,s,a,o,l,c){const u=new Nt(this.boxG,this.mat(l,c));return u.scale.set(r,a,s),u.position.set(n+r/2,o+a/2,i+s/2),e.add(u),u}cylAt(e,n,i,r,s,a,o,l){const c=new Nt(this.cylG,this.mat(o,l));return c.scale.set(r,s,r),c.position.set(n,a+s/2,i),e.add(c),c}chair3D(e,n,i,r,s){const a=new Qn,o=BS[s]||"#cccccc";a.position.set(n,0,i),a.rotation.y=-r,this.boxAt(a,-.65,-.65,1.3,1.3,.18,1.42,o),this.boxAt(a,-.72,-.65,.16,1.3,1.7,1.5,o);for(const[l,c]of[[-.55,-.55],[-.55,.45],[.45,-.55],[.45,.45]])this.boxAt(a,l,c,.1,.1,1.42,0,o);e.add(a)}item3D(e,n,i){const[r,s]=n.dims,a=n.def.id,o=new Qn,l=new Qn;o.position.set(n.x+n.w/2,0,n.y+n.h/2),o.rotation.y=-n.rot*Math.PI/180,l.position.set(-r/2,0,-s/2),o.add(l),e.add(o);const c="#fbfbfa",u="#262d36";if(a==="stage")this.boxAt(l,0,0,r,s,2,0,As("--stage"));else if(a==="dance"){const d=No(i),f=d.tile;for(let p=0;p<r/f-.01;p++)for(let x=0;x<s/f-.01;x++)this.boxAt(l,p*f,x*f,Math.min(f,r-p*f),Math.min(f,s-x*f),.15,0,d.colors[(p+x)%2]);if((i.acc.dance||{}).wrap){const p=this.cylAt(l,r/2,s/2,Math.min(r,s)*.3,.02,.15,"#c9b37a");p.scale.y=.02}}else if(a==="head"){this.boxAt(l,0,s-3.5,r,2.5,2.5,0,c);for(const d of n.chairs||[])this.chair3D(l,d.x,d.y,Math.PI/2,i.chairStyle)}else if(a==="dj")this.boxAt(l,1,2.8,r-2,2,3,0,u),this.boxAt(l,.3,s-1.5,1.2,1.2,4.5,0,u),this.boxAt(l,r-1.5,s-1.5,1.2,1.2,4.5,0,u);else if(a==="buffet"){this.boxAt(l,0,s/2-1.25,r,2.5,2.5,0,c);for(let d=1;d<r-1;d+=2.6)this.boxAt(l,d,s/2-.6,1.8,1.2,.5,2.5,"#b9c0c7")}else if(a==="bar")this.boxAt(l,2,.5,r-4,1.5,3,0,u),this.boxAt(l,1,3,r-2,2.5,3.5,0,"#3a434e");else if(a==="cake")this.cylAt(l,r/2,s/2,2,2.5,0,c),this.cylAt(l,r/2,s/2,.8,1.3,2.5,"#efe4d0");else if(a==="gift")this.boxAt(l,1,1.2,r-2,2.5,2.5,0,c);else if(a==="photo")this.boxAt(l,1,.4,r-2,.4,8,0,"#3a434e"),this.boxAt(l,r/2-.6,s-2.2,1.2,1.2,5,0,u);else if(a==="lounge"){const d="#8e9ba7";this.boxAt(l,2,.6,r-4,2.6,2.6,0,d),this.boxAt(l,1,5.6,2.6,2.6,2.4,0,d),this.boxAt(l,r-3.6,5.6,2.6,2.6,2.4,0,d),this.boxAt(l,r/2-2.5,4.6,5,2.4,1.4,0,"#5d4b3a")}else if(a==="highboy")this.cylAt(l,r/2,s/2,1.25,3.5,0,c);else if(a==="booth"){for(const[d,f]of[[.3,.3],[r-.6,.3],[.3,s-.6],[r-.6,s-.6]])this.boxAt(l,d,f,.3,.3,7,0,"#9aa3ad");this.boxAt(l,0,0,r,s,.4,7,"#f4f4f2"),this.boxAt(l,r*.2,s*.2,r*.6,s*.6,.8,7.4,"#f4f4f2"),this.boxAt(l,2,s-3,r-4,2.5,2.5,0,c)}else a==="foh"?(this.boxAt(l,0,0,r,s,1,0,As("--stage")),this.boxAt(l,1,2,r-2,2.5,3,1,u)):a==="info"||a==="merch"?(this.boxAt(l,1,1.2,r-2,2.5,2.5,0,a==="merch"?u:c),a==="merch"&&this.boxAt(l,1,.2,r-2,.3,5.5,0,"#3a434e")):a==="firstaid"&&(this.boxAt(l,.5,.5,r-1,s-1,.1,0,"#f4f4f2"),this.boxAt(l,1.5,1.5,6.5,2.5,2,0,"#e8ecef"),this.boxAt(l,r/2-1.5,s-3,3,.8,.12,.1,"#d64545"),this.boxAt(l,r/2-.4,s-4.1,.8,3,.12,.1,"#d64545"))}unit3D(e,n,i,r){const s=new Qn;s.position.set(n.x,0,n.y),s.rotation.y=-(n.rot||0)*Math.PI/180,e.add(s);const a="#fbfbfa";if(i.kind==="round"){this.cylAt(s,0,0,i.r,2.5,0,a);const o=n.seats??r.seatsPer,l=i.r+.95;for(let c=0;c<o;c++){const u=c*2*Math.PI/o-Math.PI/2;this.chair3D(s,l*Math.cos(u),l*Math.sin(u),u+Math.PI,r.chairStyle)}}else if(i.kind==="banquet"){this.boxAt(s,-4,-1.25,8,2.5,2.5,0,a);for(const[o,l]of Q_.slice(0,n.seats??8))this.chair3D(s,o,l*2.15,l<0?Math.PI/2:-Math.PI/2,r.chairStyle)}else i.kind==="chair"?this.chair3D(s,0,0,Math.PI,r.chairStyle):this.cylAt(s,0,0,i.r||1.25,3.5,0,a)}build(e,n,i,r){const s=e[n]||e[0],a=this.root;for(;a.children.length;)a.remove(a.children[0]);Object.values(this.mats).forEach(x=>x.dispose()),this.mats={},this.geoms.forEach(x=>x.dispose()),this.geoms=[],this.scene.background=new et(As("--paper"));const o=s.st,l=!!i,c=as(o,l);this.site={l:c.l,w:c.w,multi:e.length>1};let u;l?(this.texSrc!==i&&(this.tex&&this.tex.dispose(),this.tex=new O2().load(i,this.draw),this.tex.colorSpace=bn,this.texSrc=i),u=new Rc({map:this.tex}),this.mats._photo=u):u=this.mat(As(o.surface==="grass"||o.surface==="gravel"?"--grass":"--hard"));const d=new Nt(this.geo(new Xr(c.l,c.w)),u);d.rotation.x=-Math.PI/2,d.position.set(c.l/2,0,c.w/2),a.add(d),this.ground=l?null:d,this.groundSoft=o.surface==="grass"||o.surface==="gravel";const f=new Nt(this.geo(new Xr(c.l*4+400,c.w*4+400)),this.mat(As("--soft")));f.rotation.x=-Math.PI/2,f.position.set(c.l/2,-.05,c.w/2),this.far=f,a.add(f);for(const x of e){const _=this.buildTent(x.st,x.lay,l,r);x===s&&(this.inner=_.T,this.dims=_.dims,this.lay=x.lay)}const p=this.first||this.lastActive!==n;this.first=!1,this.lastActive=n,p?this.setCam(this.camMode):this.draw()}buildTent(e,n,i,{roof:r,walls:s}){const a=this.root,{W:o,L:l,sh:c}=n,u=e.tentType,d=Jr(e,n,i),f=(e.tentAngle||0)*Math.PI/180,p=n.T.stake,x=new Qn;x.position.set(d.x+l/2,0,d.y+o/2),x.rotation.y=-f,a.add(x);const _=new Qn;_.position.set(-l/2,0,-o/2),x.add(_);const g=u==="structure"?o>=60?12:10:8,h=u==="frame"||u==="cleartop"?g+o*.25:u==="structure"?g+o*.2:u==="pole"?g+o*.5:g+o*.45,v=[...new Set(n.poles.filter(L=>L.inner).map(L=>je(L.x)))].sort((L,z)=>L-z),y=v.length>1?v[1]-v[0]:l,S=u==="pole"||u==="sailcloth",N=L=>o/2-di(c,L),b=(L,z)=>{const G=N(L),O=G<.01?0:Math.max(0,1-Math.abs(z-o/2)/G);if(S){const ee=c.oval?1:Math.max(0,Math.min(1,L/(o*.5),(l-L)/(o*.5)));let U=1e9;for(const X of v)U=Math.min(U,Math.abs(L-X));const W=v.length?.55+.45*Math.pow(Math.max(0,1-U/(y/2)),1.5):1;return g+(h-g)*Math.pow(O,u==="sailcloth"?1.8:1.3)*Math.min(ee,W)}return g+(h-g)*O},A=u==="sailcloth"?"#f7f1e3":"#ffffff",D=u==="cleartop",T=this.mat(D?"#d7ebf7":A,{transparent:!0,opacity:D?.2:.88,side:ei,depthWrite:!D});if(r){const L=Math.max(8,Math.round(l/1.5)),z=Math.max(8,Math.round(o/1.5)),G=[],O=[];for(let U=0;U<=z;U++)for(let W=0;W<=L;W++){const X=W*l/L,te=di(c,X),ce=te+U*(o-2*te)/z;G.push(X,b(X,ce),ce)}for(let U=0;U<z;U++)for(let W=0;W<L;W++){const X=U*(L+1)+W,te=X+1,ce=X+L+1,ze=ce+1;O.push(X,ce,te,te,ce,ze)}const ee=this.geo(new Vn);if(ee.setAttribute("position",new en(G,3)),ee.setIndex(O),ee.computeVertexNormals(),_.add(new Nt(ee,T)),!S)for(const U of[0,l]){const W=this.geo(new Vn);W.setAttribute("position",new en([U,g,0,U,h,o/2,U,g,o],3)),W.computeVertexNormals(),_.add(new Nt(W,T))}}const M="#b9c0c6";for(const L of n.poles)L.inner?this.cylAt(_,L.x,L.y,.3,b(L.x,L.y),0,"#d9d2c3"):this.cylAt(_,L.x,L.y,.17,g,0,M);if(S||(this.boxAt(_,0,-.1,l,.2,.3,g-.3,M),this.boxAt(_,0,o-.1,l,.2,.3,g-.3,M),this.boxAt(_,0,o/2-.15,l,.3,.3,h-.3,M)),s&&e.walls!=="none"){const L={solid:.92,window:.62,clear:.16}[e.walls],z=this.mat(e.walls==="clear"?"#d7ebf7":A,{transparent:!0,opacity:L,side:ei,depthWrite:e.walls==="solid"});if(c.oval)for(const G of nx(c,n.exits)){const O=[],ee=[];G.forEach(([W,X],te)=>{if(O.push(W,0,X,W,g,X),te){const ce=2*(te-1);ee.push(ce,ce+2,ce+1,ce+1,ce+2,ce+3)}});const U=this.geo(new Vn);U.setAttribute("position",new en(O,3)),U.setIndex(ee),U.computeVertexNormals(),_.add(new Nt(U,z))}else for(const G of["top","bottom","left","right"]){const O=G==="top"||G==="bottom",ee=O?l:o,U=n.exits.filter(te=>te.side===G).map(te=>[te.c-3,te.c+3]).sort((te,ce)=>te[0]-ce[0]);let W=0;const X=[];for(const[te,ce]of U)X.push([W,te]),W=ce;X.push([W,ee]);for(const[te,ce]of X){if(ce-te<.05)continue;const ze=new Nt(this.geo(new Xr(ce-te,g)),z);O?ze.position.set((te+ce)/2,g/2,G==="top"?0:o):(ze.rotation.y=Math.PI/2,ze.position.set(G==="left"?0:l,g/2,(te+ce)/2)),_.add(ze)}}}for(const L of n.exits){const z=g-.9;L.side==="top"||L.side==="bottom"?this.boxAt(_,L.c-.5,L.p-.08,1,.16,.4,z,"#2f9a5c",{basic:!0}):this.boxAt(_,L.p-.08,L.c-.5,.16,1,.4,z,"#2f9a5c",{basic:!0})}for(const L of n.items)this.item3D(_,L,e);for(const L of n.units)this.unit3D(_,L,Wt[L.type]||n.S,e);const P=this.mat(As("--light"),{basic:!0}),V=e.lightStyle||"swag";if(e.stringLights&&V!=="swag"){const L=n.poles.filter(G=>!G.inner),z=L.length>1?Mo(c)/L.length:10;for(const G of tx(c,Math.max(12,Math.round(Mo(c)/2.5)),-Ec)){let O=1e9;for(const W of L)O=Math.min(O,Math.hypot(W.x-G.x,W.y-G.y));const ee=Math.sin(Math.PI/2*Math.min(1,O/(z/2)))*.9,U=new Nt(this.sphG,P);U.scale.setScalar(.16),U.position.set(G.x,g-.4-ee,G.y),_.add(U)}}if(e.stringLights&&V!=="perimeter"){const L=Math.max(1,Math.round(l/10));for(let z=0;z<L;z++){const G=z*l/L,O=(z+1)*l/L,ee=z%2?o-di(c,G):di(c,G),U=(z+1)%2?o-di(c,O):di(c,O),W=Math.hypot(O-G,U-ee),X=Math.max(2,Math.round(W/2.5));for(let te=0;te<=X;te++){const ce=te/X,ze=G+(O-G)*ce,J=ee+(U-ee)*ce,he=Math.sin(Math.PI*ce)*1.2,ye=new Nt(this.sphG,P);ye.scale.setScalar(.16),ye.position.set(ze,b(ze,J)-.5-he,J),_.add(ye)}}}for(const{x:L,y:z}of n.chands){const G=b(L,z),O=new Nt(this.sphG,P);O.scale.setScalar(.9),O.position.set(L,G-3.6,z),_.add(O),this.boxAt(_,L-.03,z-.03,.06,.06,2.7,G-2.7,M)}if(e.climate.startsWith("heat")){const L=Vf(e,n.area),z=Math.ceil(L/2),G=L-z;for(let O=0;O<z;O++)this.boxAt(_,(O+1)*l/(z+1)-1.5,o+3,3,4,3,0,"#a8443b");for(let O=0;O<G;O++)this.boxAt(_,(O+1)*l/(G+1)-1.5,-7,3,4,3,0,"#a8443b")}return e.generator&&this.boxAt(_,l+p+20,o/2-2,7,4,4,0,"#2d343d"),{T:_,dims:{L:l,W:o,peak:h}}}setCam(e){if(this.camMode=e,!this.inner||!this.dims)return;const{L:n,W:i,peak:r}=this.dims,s=Math.max(n,i);this.root.updateMatrixWorld(!0);const a=(c,u,d)=>this.inner.localToWorld(new $(c,u,d));let o,l;if(e==="top"&&this.site&&this.site.multi){const{l:c,w:u}=this.site;o=new $(c/2,Math.max(c,u)*1.1+30,u/2+.5),l=new $(c/2,0,u/2)}else if(e==="top")o=a(n/2,s*1.15+r+20,i/2+.5),l=a(n/2,0,i/2);else if(e==="eye"){const c=this.lay.exits.find(g=>g.main)||this.lay.exits[0],u=this.lay.items.find(g=>g.def.id==="dance")||this.lay.items.find(g=>g.def.id==="stage"),d=u?u.x+u.w/2:n/2,f=u?u.y+u.h/2:i/2,p={bottom:[0,-2.5],top:[0,2.5],left:[2.5,0],right:[-2.5,0]},[x,_]=c?p[c.side]:[0,0];o=c?a(c.x+x,5.5,c.y+_):a(n/2,5.5,i-2.5),l=a(d,3.5,f)}else o=a(-n*.35,s*.5+r,i+s*.75),l=a(n/2,2,i/2);this.cam.position.copy(o),this.ctl.target.copy(l),this.ctl.update(),this.draw()}snapshot(e,n,{light:i=!0}={}){if(!this.inner)return null;const r={pos:this.cam.position.clone(),tgt:this.ctl.target.clone(),bg:this.scene.background,mode:this.camMode,pr:this.r.getPixelRatio()},s=[],a=(l,c)=>{l&&(s.push([l,l.material]),l.material=new Lg({color:new et(c)}))};if(i){this.scene.background=new et("#e8eef4");const l=this.groundSoft?"#a7bf93":"#cdd1d6";a(this.far,this.ground?l:"#d9dfd3"),a(this.ground,l)}let o=null;try{this.r.setPixelRatio(1),this.r.setSize(e,n,!1),this.cam.aspect=e/n,this.cam.updateProjectionMatrix(),this.setCam("corner");const l=this.cam.position.clone().sub(this.ctl.target);this.cam.position.copy(this.ctl.target).addScaledVector(l,.8),this.ctl.update(),this.draw(),o=this.r.domElement.toDataURL("image/jpeg",.92)}finally{for(const[l,c]of s)l.material.dispose(),l.material=c;this.scene.background=r.bg,this.camMode=r.mode,this.r.setPixelRatio(r.pr),this.cam.position.copy(r.pos),this.ctl.target.copy(r.tgt),this.ctl.update(),this.resize()}return o}dispose(){this.ro.disconnect(),this.ctl.dispose(),Object.values(this.mats).forEach(e=>e.dispose()),this.geoms.forEach(e=>e.dispose()),[this.boxG,this.cylG,this.sphG].forEach(e=>e.dispose()),this.tex&&this.tex.dispose(),this.r.dispose(),this.r.domElement.remove()}}hp($a,"current",null);const rA=[["corner","Corner"],["top","Overhead"],["eye","Eye level"]];function sA({tents:t,active:e,photoSrc:n}){const i=Ie.useRef(null),r=Ie.useRef(null),[s,a]=Ie.useState("Loading 3D view…"),[o,l]=Ie.useState("corner"),[c,u]=Ie.useState(!0),[d,f]=Ie.useState(!0);Ie.useEffect(()=>{let x;try{x=new $a(i.current)}catch{a("The 3D view needs WebGL, which is turned off in this browser.");return}return r.current=x,$a.current=x,a(null),()=>{$a.current===x&&($a.current=null),x.dispose(),r.current=null}},[]),Ie.useEffect(()=>{const x=setTimeout(()=>{const _=r.current;_&&_.build(t,e,n,{roof:c,walls:d})},180);return()=>clearTimeout(x)},[t,e,n,c,d]);const p=x=>{l(x),r.current&&r.current.setCam(x)};return m.jsxs("section",{className:"card",children:[m.jsxs("div",{className:"toolbar",children:[m.jsx("h2",{className:"t3",children:"3D view"}),m.jsx("div",{className:"seg",role:"group","aria-label":"Camera",children:rA.map(([x,_])=>m.jsx("button",{"aria-pressed":o===x,onClick:()=>p(x),children:_},x))}),m.jsxs("label",{className:"chk",children:[m.jsx("input",{type:"checkbox",checked:c,onChange:x=>u(x.target.checked)})," Roof"]}),m.jsxs("label",{className:"chk",children:[m.jsx("input",{type:"checkbox",checked:d,onChange:x=>f(x.target.checked)})," Sidewalls"]}),m.jsx("span",{className:"hint hint3",children:"Drag to orbit · scroll or pinch to zoom · right-drag to pan"})]}),m.jsx("div",{className:"stage3d",ref:i,children:s&&m.jsx("p",{className:"hint msg3d",children:s})})]})}function aA(t,e){const{W:n,L:i,S:r}=e,s=Math.round(e.area),a=Math.round(e.perim),o=e.poles.filter(g=>!g.inner).length,l=e.poles.filter(g=>g.inner).length,c=[],u=g=>c.push({grp:g}),d=(g,h,v="")=>c.push({item:g,qty:h,note:v}),f=g=>e.items.filter(h=>h.def.id===g);if(u("Tent"),d(`${n}' × ${i}' ${e.T.label}${e.sh.oval?" (oval)":""}`,1,`${s.toLocaleString()} sq ft${e.sh.oval?" floor inside the oval":""} · ${o} perimeter ${e.sh.oval?"poles":"legs"}${l?` · ${l} center poles`:""}`),t.walls!=="none"&&d(`Sidewalls, ${{solid:"solid white",window:"cathedral window",clear:"clear"}[t.walls]}`,Math.ceil(a/20),`20' sections · ${a} lin ft perimeter`),t.surface==="grass"||t.surface==="gravel"?d("Stakes and ratchet straps",o*2,"2 per leg; locate utilities (call 811) before staking"):d("Ballast (water barrels or concrete blocks)",o,"1 per leg minimum; size weight to the tent's wind load rating"),e.exits.length){const g=e.exits.filter(h=>h.main).length;d("Lighted exit signs",e.exits.length,`${e.exits.length} openings × 72"${g?` (${g} entrance${g>1?"s":""})`:""} for ${t.guests} occupants`)}if(r.kind==="chair")u("Seating"),d(`${t.chairStyle} chairs`,e.units.length,"Ceremony rows with 5' center aisle");else if(e.units.length+e.headSeats>0){u("Seating");const g=[...new Set(e.units.map(v=>v.type))].map(v=>[Wt[v],e.units.filter(y=>y.type===v)]);for(const[v,y]of g){const S=y.reduce((b,A)=>b+A.seats,0),N=y.some(b=>b.seats!==y[0].seats);d(v.table,y.length,N?`${S} seats in all; chair counts vary by table`:`${y[0].seats} guests each`)}const h=e.seats+e.headSeats;h&&d(`${t.chairStyle} chairs`,h,e.headSeats?`Includes ${e.headSeats} at the head table`:"");for(const[v,y]of g)d(`Tablecloths, ${v.linen}`,y.length);r.kind!=="none"&&d("Napkins",t.guests)}const p=[];for(const g of f("dance")){const h=No(t),v=t.acc.dance,y=h.sizes.some(N=>io(N).join()===g.dims.join()),S=v.size==="custom"&&((v.cl||20)%4||(v.cw||20)%4);p.push([`${h.label} dance floor, ${g.dims[0]}' × ${g.dims[1]}'`,1,`${h.desc} · ${g.dims[0]/4*(g.dims[1]/4)} sections (4' × 4')${S?" · rounded up to whole sections":""}${y?"":`; custom size, confirm with ${Ht.company.split(" ")[0]} (stock sizes: ${h.sizes.map(N=>N.replace("x","×")).join(", ")})`}`]),v.wrap&&p.push(["Dance floor vinyl wrap",1,"Custom graphic, full or partial coverage"])}for(const g of f("stage"))p.push([`Stage ${g.dims[0]}' × ${g.dims[1]}'`,Math.ceil(g.dims[0]*g.dims[1]/32),`4' × 8' decks${g.dims[0]%4||g.dims[1]%4?" (size rounds up to full decks)":""} · ${g.dims[0]+2*g.dims[1]} lin ft skirting · steps`]);for(const g of f("head"))p.push(g.sweet?[`Sweetheart table${g.seats!==2?`, ${g.seats} seat${g.seats===1?"":"s"}`:""}`,1,"With linen"]:[`Head table, ${g.seats} seat${g.seats===1?"":"s"}`,Math.ceil(g.dims[0]/8),`8' banquet tables (${g.dims[0]}' long), linens and skirting`]);f("booth").length&&p.push(["Vendor booth, 10' × 10' pop-up canopy",f("booth").length,"With weights, one 6' table and 2 chairs each"]),An&&f("buffet").length?p.push(["8' tables for food service",f("buffet").length*2,`${f("buffet").length} serving line${f("buffet").length>1?"s":""}, hand-wash station nearby`]):f("buffet").length&&p.push(["8' banquet tables for buffet",f("buffet").length*2,`${f("buffet").length} double-sided line${f("buffet").length>1?"s":""}, linens`]),f("bar").length&&p.push([An?"Beer & wine bar with back bar":"Bar with back bar",f("bar").length,An?"About 1 bar per 150 attendees · ice and cooler space":"About 1 bar per 150 guests"]),f("foh").length&&p.push(["Sound booth (FOH) riser",1,"8' × 8' riser, cable ramps to the stage, power drop"]),f("info").length&&p.push(["Ticket & info table, 8'",1,"Near the entrance, with 2 chairs"]),f("merch").length&&p.push(["Merch tables, 6'",2,"With linens and a display rack"]),f("firstaid").length&&p.push(["First aid station",1,"10' × 10' with cot, table and chairs"]),f("dj").length&&p.push(["DJ table",1,"6' table, black linen, power drop"]),f("cake").length&&p.push(['Cake table, 48" round',1,"With linen"]),f("gift").length&&p.push(["Gift & card table, 6'",1,"Near the entrance"]),f("photo").length&&p.push([An?"Photo op wall":"Photo booth area",1,"10' × 10' with backdrop"]),f("lounge").length&&p.push([An?"VIP lounge furniture set":"Lounge furniture set",1,"Sofa, 2 chairs, coffee table"]),f("highboy").length&&p.push(['Cocktail tables, 30" highboy',f("highboy").length,'42" tall · 120" round cinched linens']),p.length&&(u("Floor items"),p.forEach(g=>d(...g)));const x=[];if(t.stringLights){const g=t.lightStyle||"swag",h=g==="both";if(g!=="perimeter"){const v=Math.max(1,Math.round(i/10)),y=Math.hypot(n,i/v);x.push([`Bistro string lights${h?", swag":""}`,Math.ceil(v*y/10)*10+" ft",`${v} zigzag runs across the ceiling`])}if(g!=="swag"){const v=Mo(e.sh,-Ec);x.push([`Bistro string lights${h?", perimeter":""}`,Math.ceil(v*1.1/10)*10+" ft",`Around the inside of the ${e.sh.oval?"oval ":""}perimeter, ${Ec}' in from the walls · includes 10% for drape between poles`])}}e.chands.length&&x.push(["Chandeliers",e.chands.length,t.chandList?"Placed as shown on the plan":"Centerline, one per 20' bay"]),t.uplights&&x.push(["LED uplights",Math.ceil(a/15),"Around the perimeter, about every 15'"]);const _=Vf(t,s);return t.climate==="fans"&&x.push(["Industrial fans",_,"About 1 per 600 sq ft"]),t.climate.startsWith("heat")&&x.push(["Forced-air heaters, 150,000 BTU",_,`Estimate for ${t.climate==="heat-cold"?"cold":"cool"} weather; set outside with ducts`]),t.generator&&x.push(["Generator",1,"Size to the load (lights, DJ, heaters); place 20'+ from the tent"]),x.length&&(u("Lighting, climate & power"),x.forEach(g=>d(...g))),c}function ev(t){const e=t.length>1;return[...t.flatMap(({st:n,lay:i})=>aA(n,i).map(r=>r.grp&&e?{...r,grp:`${n.name} · ${r.grp}`,tent:!0}:r)),...uM(t[0].st.siteItems)]}function oA(t){const e=t[0].st,n=t.reduce((r,s)=>r+s.st.guests,0),i=[`${e.siteName||"Tent layout"}${e.address?` · ${e.address}`:""}`,`${e.siteL}' x ${e.siteW}' ${e.surface} site · ${n} guests`];for(const{st:r,lay:s}of t)i.push(`${t.length>1?`${r.name}: `:""}${r.guests} guests · ${s.W}' x ${s.L}' ${s.T.label}`);i.push("");for(const r of ev(t))i.push(r.grp?`
${r.grp.toUpperCase()}`:`${r.qty}  ${r.item}${r.note?`  (${r.note})`:""}`);return i.join(`
`).replace(/\n{3,}/g,`

`)}function lA(t,e,n){const{W:i,L:r,T:s,S:a}=e,o=e.area,l=[];if(a.kind==="none")o<t.guests*no&&l.push(["bad",`${Math.round(o)} sq ft is tight for ${t.guests} standing guests. Plan on at least ${no}–8 sq ft per guest (${t.guests*no}+ sq ft); pick a larger tent.`]);else if(e.manual){const _=e.seated-e.seats;_>0?l.push(["warn",`${_} guest${_>1?"s":""} without a seat: the plan has ${e.seats} seats for ${e.seated} guests${e.headSeats?" (plus the head table)":""}. Add a table or chairs, or reset tables to auto.`]):_<0&&l.push(["info",`${-_} more seat${_<-1?"s":""} than guests. Fine for extra room; remove chairs or tables to trim the rental.`])}else e.capacity<e.needed&&l.push(["bad",`Only ${e.capacity} of ${e.needed} ${a.kind==="chair"?"chairs":"tables"} fit. Choose a larger tent, switch spacing to Tight, or turn off a floor item.`]);const c=$c(t.guests),u=e.exits.length;u<c&&l.push(["bad",`${t.guests} guests need at least ${c} exits under the fire code (IFC Ch. 31, tents); the plan has ${u}. Add ${c-u} more under Entrances & exits.`]),u&&!e.exits.some(_=>_.main)&&l.push(["warn","No opening is marked as the entrance. Set one to “Entrance” so guests know where to come in."]),e.exits.some((_,g)=>e.exits.some((h,v)=>v>g&&Math.hypot(_.x-h.x,_.y-h.y)<7))&&l.push(["warn","Two openings overlap or sit side by side. Spread exits apart so one blocked doorway does not block both."]);const f=e.items.filter(_=>!_.fit);if(f.length&&l.push(["bad",`${[...new Set(f.map(_=>_.def.label))].join(", ")} ${f.length>1?"do":"does"} not fit cleanly. It is outlined in red; drag it somewhere open or pick a larger tent.`]),!Hf(t,i,r,s.stake))l.push(["bad",`The tent plus its ${s.stake}' stake and guy line area is ${r+2*s.stake}' × ${i+2*s.stake}', which is larger than the ${t.siteL}' × ${t.siteW}' site.`]);else if(n)l.push(["info",`On the site plan, keep buildings and lot lines outside the dashed 20' clearance ring (IFC 3103.8). ${t.photo.calibrated?"":"Set the photo scale first so the ring is accurate."}`]);else{const _=Jr(t,e,n),g=_.x+r/2,h=_.y+i/2,{ex:v,ey:y}=Do(t,r+2*s.stake,i+2*s.stake),S=Math.min(g-v,h-y,t.siteL-g-v,t.siteW-h-y);S<20&&l.push(["warn",`Tent sits ${Math.max(0,Math.floor(S))}' from the site edge. The fire code (IFC 3103.8) asks for 20' from lot lines and buildings; your local fire marshal can confirm exceptions.`])}const p=t.acc.dance||{};if(p.on&&p.size==="auto"){const _=No(t),g=io(_.sizes[_.sizes.length-1]);g[0]*g[1]<Qh(t)&&l.push(["warn",`About ${Qh(t)} sq ft of dance floor suits ${t.guests} guests. The largest ${_.label.toLowerCase()} floor is ${g[0]}' × ${g[1]}' (${g[0]*g[1]} sq ft). Pick a finish with larger sizes or enter a custom size.`])}const x=e.units.filter(_=>_.bad).length;return x&&l.push(["warn",`${x} ${a.kind==="chair"?"chair":"table"}${x>1?"s":""} overlap${x>1?"":"s"} another item, a pole or the tent wall (outlined in red). Drag ${x>1?"them":"it"} to open floor.`]),e.ok&&!e.auto&&l.push(["ok",`Everything fits in the ${i}' × ${r}'.`]),e.auto&&e.ok&&l.push(["ok",`${i}' × ${r}' is the smallest ${s.label.toLowerCase()} that fits this layout.`]),l.push(["info",a.kind==="none"?`${(o/t.guests).toFixed(1)} sq ft per guest overall. Standing receptions usually need ${a.sqft} sq ft per guest, more with buffets and bars.`:`${(o/t.guests).toFixed(1)} sq ft per guest overall. Seating alone usually needs ${a.sqft} sq ft per guest for ${a.label.toLowerCase()}.`]),o>400&&l.push(["info","Tents over 400 sq ft usually need a permit (700 sq ft for open-sided frame tents). Check with the local building or fire department."]),(t.surface==="asphalt"||t.surface==="concrete")&&l.push(["info",`On ${t.surface}, plan for ballast. Staking needs the owner's approval and patching afterward.`]),(t.surface==="grass"||t.surface==="gravel")&&l.push(["info","Call 811 to mark underground utilities before staking."]),t.climate.startsWith("heat")&&l.push(["info","Keep heaters and fuel outside the tent and at the clearances listed by the heater manufacturer."]),l}function Pl({k:t,v:e,s:n,pill:i}){return m.jsxs("div",{className:"stat",children:[m.jsx("span",{className:"k",children:t}),m.jsx("span",{className:"v",children:e}),m.jsx("span",{className:"s",children:n}),i&&m.jsx("span",{className:`pill ${i[0]}`,children:i[1]})]})}function cA({st:t,lay:e,count:n=1}){const{W:i,L:r,T:s,S:a}=e,o=Math.round(e.area),l=a.kind==="chair",c=a.kind==="none",u=n>1,d=e.manual?Math.max(0,e.seated-e.seats):e.needed-Math.min(e.capacity,e.needed),f=c?e.area>=t.guests*no?["ok","Standing room"]:["bad","Too tight"]:d>0?["bad",e.manual?`${d} without a seat`:`Short ${d}`]:["ok",e.manual?"Set by you":"Everyone seated"];return m.jsxs("div",{className:"stats",children:[m.jsx(Pl,{k:u?t.name:"Tent",v:`${i}' × ${r}'`,s:`${s.label}${e.sh.oval?" (oval)":""} · ${o.toLocaleString()} sq ft`,pill:e.auto?["ok","Auto size"]:["warn","Size set by you"]}),m.jsx(Pl,{k:"Seating",v:c?"No seating":l?`${e.units.length} chairs`:`${e.units.length} tables`,s:c?`standing room for ${t.guests} guests`:l?`for ${t.guests} guests`:`${e.seats} seats${e.headSeats?` + ${e.headSeats} at head table`:""}`,pill:f}),m.jsx(Pl,{k:"Space per guest",v:(o/t.guests).toFixed(1),s:`sq ft · guide ${a.sqft} for seating`}),m.jsx(Pl,{k:"Site",v:`${t.siteL}' × ${t.siteW}'`,s:`${u?`${n} tents · `:""}${$c(t.guests)} exits required · ${t.surface}`,pill:Hf(t,i,r,s.stake)?["ok","Tent fits site"]:["bad","Tent too big for site"]})]})}function uA({st:t,lay:e,view:n,tents:i}){const{W:r,L:s,T:a}=e,o=i&&i.length>1,l=new Date().toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}),c=o?i.reduce((d,f)=>d+f.st.guests,0):t.guests,u=[["Event / site",t.siteName||"Untitled layout"],["Location",`${t.address||Kh[t.sitePreset].label} · ${t.surface}`],[Ht.guestsWord,o&&n==="site"?`${c} total`:t.guests],["Tent",o&&n==="site"?`${i.length} tents`:`${o?`${t.name} · `:""}${r}' × ${s}' ${a.label.split(" (")[0]}`],["Date",l],["Sheet",n==="tent"?"L-1":"L-2"]];return m.jsxs("div",{className:"titleblock",children:[u.map(([d,f])=>m.jsxs("div",{children:[m.jsx("div",{className:"k",children:d}),m.jsx("div",{className:"v",children:f})]},d)),m.jsx("div",{className:"foot",children:"For planning only. Poles, exits and table counts are typical. Field-verify site, utilities, slope and code clearances before install."})]})}function hA({tents:t}){const[e,n]=Ie.useState("Copy list"),[i,r]=Ie.useState(null),s=ev(t),a=()=>{const o=oA(t),l=()=>{r(o),n("Select and copy below")};try{navigator.clipboard.writeText(o).then(()=>{n("Copied"),r(null),setTimeout(()=>n("Copy list"),1600)},l)}catch{l()}};return m.jsxs("section",{className:"card",children:[m.jsxs("div",{className:"cardhead",children:[m.jsxs("h2",{children:["Rental list",t.length>1?` · ${t.length} tents`:""]}),m.jsx("button",{className:"btn",onClick:a,children:e})]}),m.jsx("div",{className:"tablewrap",children:m.jsxs("table",{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Item"}),m.jsx("th",{className:"q",children:"Qty"}),m.jsx("th",{children:"Notes"})]})}),m.jsx("tbody",{children:s.map((o,l)=>o.grp?m.jsx("tr",{className:"grp",children:m.jsx("td",{colSpan:3,children:o.grp})},l):m.jsxs("tr",{children:[m.jsx("td",{children:o.item}),m.jsx("td",{className:"q",children:o.qty}),m.jsx("td",{className:"n",children:o.note})]},l))})]})}),i!=null&&m.jsx("textarea",{className:"copyfall",readOnly:!0,"aria-label":"Rental list text",value:i,autoFocus:!0,onFocus:o=>o.target.select()})]})}function dA({st:t,lay:e,ph:n,tents:i}){const r=i&&i.length>1,s=[...r?sM(i.map(c=>c.st),i.map(c=>c.lay),n):[],...i&&i.length?hM(i.map(c=>c.st),i.map(c=>c.lay),n):[]],a=lA(t,e,n).map(([c,u])=>[c,r?`${t.name}: ${u}`:u]),o={bad:0,warn:1,ok:2,info:3},l=[...s,...a].sort((c,u)=>o[c[0]]-o[u[0]]);return m.jsxs("section",{className:"card",children:[m.jsx("div",{className:"cardhead",children:m.jsx("h2",{children:"Checks & notes"})}),m.jsx("ul",{className:"notes",children:l.map(([c,u],d)=>m.jsx("li",{className:c,children:u},d))})]})}const fA=Ie.lazy(()=>Z_(()=>import("./SiteMap3D-BOmz2a1J.js"),__vite__mapDeps([0,1,2]),import.meta.url));function pA(){const t=aa(ni("tlp-current")),e=Jh(t&&(t.acc||t.tents)?t:null);let n=null;if(e.photo){try{n=localStorage.getItem(ni("tlp-photo"))}catch{}n||(e.photo=null)}return{model:e,photo:n}}function Ll(t){try{t?localStorage.setItem(ni("tlp-photo"),t):localStorage.removeItem(ni("tlp-photo"))}catch{}}function mA(){const[t]=Ie.useState(pA),[e,n]=Ie.useState(Ht.logoMode==="mono"?Ht.logo:null);Ie.useEffect(()=>{Ht.logoMode!=="mono"&&DS(720).then(R=>n(R.url),()=>n(Ht.logo))},[]);const[i,r]=Ie.useState(t.model),[s,a]=Ie.useState(t.photo),[o,l]=Ie.useState("tent"),[c,u]=Ie.useState(null),[d,f]=Ie.useState(null),[p,x]=Ie.useState(!1),_=Ie.useRef(null),g=Ie.useRef(null),h=!!(i.photo&&s),[v,y]=Ie.useState("3d"),S=h&&i.photo.source==="mapbox"&&Number.isFinite(i.photo.lat)&&Number.isFinite(i.photo.lng),N=o==="site"&&S&&v==="3d"&&!d,b=i.active,A=Ie.useMemo(()=>i.tents.map((R,I)=>$r(i,I)),[i]),D=Ie.useMemo(()=>A.map(R=>Eo(R)),[A]),T=Ie.useMemo(()=>A.map((R,I)=>({st:R,lay:D[I]})),[A,D]),M=A[b],P=D[b];Ie.useEffect(()=>{aa(ni("tlp-current"),i)},[i]);const V=Ie.useCallback(R=>r(I=>{const q=ii(I),le=$r(q,q.active);return R(le),eM(q,q.active,le),q}),[]),L=Ie.useCallback(R=>r(I=>{const q=ii(I);return R(q),q}),[]),z=R=>{l(R),u(null),R!=="site"&&f(null)},G=R=>{R!==b&&(L(I=>{I.active=R}),u(null))},O=()=>{const R=Wf(M,P,h);return{x:R.cx,y:R.cy}},ee=R=>{const I=O();L(q=>{const le=R?{...ii(q.tents[q.active]),name:`${q.tents[q.active].name} (copy)`}:tM(q.tents.length+1);q.tents.push(le),q.active=q.tents.length-1,hx(q,q.active,h,I)}),u(null)},U=R=>{L(I=>{I.tents.length<2||(I.tents.splice(R,1),I.active=rt(I.active>R?I.active-1:I.active,0,I.tents.length-1))}),u(null)},W=()=>L(R=>bu(R,h)),X=c&&c.startsWith("s:")?+c.slice(2):-1,te=X>=0?(i.siteItems||[])[X]:null,ce=(R,I)=>L(q=>{q.siteItems&&q.siteItems[R]&&I(q.siteItems[R],q)}),ze=R=>{o!=="site"&&(l("site"),f(null)),u(R==null?null:"s:"+R)},J=R=>{const I=(i.siteItems||[]).length,q=cM(R,A,D,h);L(le=>{le.siteItems=[...le.siteItems||[],q]}),ze(I)},he=R=>{const I=(i.siteItems||[])[R];if(!I)return;const q=i.siteItems.length,le=(I.rot||0)*Math.PI/180,ke=I.l+4;L(it=>{it.siteItems=[...it.siteItems,{...I,name:void 0,x:Pt(I.x+ke*Math.cos(le)),y:Pt(I.y+ke*Math.sin(le))}]}),u("s:"+q)},ye=R=>{L(I=>{I.siteItems=(I.siteItems||[]).filter((q,le)=>le!==R)}),u(null)},fe=`${P.W}x${P.L}`,Fe=R=>{R.tentSize==="auto"&&(R.tentSize=fe)},He=R=>{if(R.tables&&R.tables.manual&&R.tables.t===fe&&R.tables.s===ja(R))return;Fe(R);const I=ja(R),q=R.tables&&R.tables.t===fe&&R.tables.s===I?R.tables.pts:[];R.tables={t:fe,s:I,pts:[...P.units.map(le=>({x:le.x,y:le.y,rot:le.rot||0,type:le.type})),...q.slice(P.units.length)]}},Ge=R=>V(I=>{I.exits||(I.exits=ax(P)),R(I.exits,I)}),We=c&&c.startsWith("x:")?+c.slice(2):-1,re=R=>{Ge(I=>{I.splice(R,1)}),u(null)},be=R=>V(I=>{I.chandList||(I.chandList=rx(P)),R(I.chandList,I)}),F=c&&c.startsWith("c:")?+c.slice(2):-1,Z=R=>{be(I=>{I.splice(R,1)}),u(null)},oe=(R,I,q)=>{const le=KS(P.sh,I,q);be(ke=>{ke[R]&&(ke[R]={fx:le.x/P.L,fy:le.y/P.W})})},_e=R=>{R&&o!=="tent"&&(l("tent"),f(null)),u(R)},me=R=>{R.tables&&R.tables.manual&&R.tables.t===fe&&R.tables.s===ja(R)||(Fe(R),R.tables={t:fe,s:ja(R),manual:!0,pts:P.units.map(I=>({x:I.x,y:I.y,rot:I.rot||0,type:I.type,seats:I.seats}))})},Me=c&&c.startsWith("u:")?+c.slice(2):-1,de=R=>{const I=typeof R=="string"?R:P.base;if(P.S.kind==="none"||!Wt[I])return;const q=(P.freeSpots[I]||[])[0]||{x:P.L/2,y:P.W/2},le=P.S.kind==="chair"?1:I===P.base?P.per:Wt[I].def;V(ke=>{me(ke),ke.tables.pts.push({x:q.x,y:q.y,rot:0,type:I,seats:le})}),o!=="tent"&&(l("tent"),f(null)),u("u:"+P.units.length)},C=R=>{P.units[R]&&(V(I=>{me(I),I.tables.pts.splice(R,1)}),u(null))},E=(R,I)=>{if(!P.units[R])return;const q=Gl[P.units[R].type]||12;I<0||I>q||V(le=>{me(le),le.tables.pts[R].seats=I})},j=(R,I)=>{const q=P.units[R];!q||!Gl[I]||q.type===I||V(le=>{me(le),le.tables.pts[R]={...le.tables.pts[R],type:I,seats:Math.min(q.seats,Gl[I])}})},se=()=>{V(R=>{R.tables=null,Object.keys(R.pos).length||(R.tentSize="auto")}),u(null)},ne=P.items.find(R=>R.def.id==="head"),Q=c&&c.startsWith("h:")?+c.slice(2):-1,Ae=R=>{ne&&V(I=>{const q=I.acc.head;Array.isArray(q.chairs)||(q.chairs=ne.chairs.map(le=>({x:le.x,y:le.y}))),R(q.chairs)})},Se=(R,I,q)=>{const[le,ke]=ne.dims;Ae(it=>{it[R]&&(it[R]={x:rt(I,gi,le-gi),y:rt(q,gi,ke-gi)})})},Ce=R=>{Ae(I=>{I.splice(R,1)}),u(ne?"head":null)},qe=()=>{if(!ne||ne.chairs.length>=cx(ne.dims[0]))return;const R=QS(ne);Ae(I=>{I.push(R)}),u("h:"+ne.chairs.length)},pe=()=>{V(R=>{delete R.acc.head.chairs}),c&&c.startsWith("h:")&&u("head")},Ne=(R,I)=>{const q=(ne?ne.rot:0)*Math.PI/180,le=Math.cos(q),ke=Math.sin(q);return[R*le+I*ke,-R*ke+I*le]},Ve=(R,I,q,le)=>{const{hx:ke,hy:it}=Wt[P.units[I].type]||P.S;R.tables.pts[I]={...R.tables.pts[I],x:rt(q,ke,P.L-ke),y:rt(le,it,P.W-it)}},Ue=R=>{const I=_.current,q=I.createSVGPoint();return q.x=R.clientX,q.y=R.clientY,q.matrixTransform(I.getScreenCTM().inverse())},Le=R=>{const I=_.current,q=I.closest(".svgwrap");if(q&&document.activeElement!==q&&q.focus({preventScroll:!0}),d&&o==="site"){const ue=Ue(R),ve={x:ue.x,y:ue.y};f(we=>({pts:we.pts.length>=2?[ve]:[...we.pts,ve]}));return}const le=R.target.closest("[data-chand]");if(le){const ue=+le.dataset.chand,ve=P.chands[ue];if(!ve)return;const we=Ue(R);g.current={chand:ue,ox:ve.x,oy:ve.y,px:we.x,py:we.y,moved:!1},u("c:"+ue),I.setPointerCapture(R.pointerId),x(!0),R.preventDefault();return}const ke=R.target.closest("[data-exit]");if(ke){const ue=+ke.dataset.exit;if(!P.exits[ue])return;const ve=Ue(R);g.current={exit:ue,px:ve.x,py:ve.y,moved:!1},u("x:"+ue),I.setPointerCapture(R.pointerId),x(!0),R.preventDefault();return}const it=R.target.closest("[data-unit]");if(it){const ue=+it.dataset.unit,ve=P.units[ue];if(!ve)return;const we=Ue(R);g.current={unit:ue,ox:ve.x,oy:ve.y,px:we.x,py:we.y,moved:!1},u("u:"+ue),I.setPointerCapture(R.pointerId),x(!0),R.preventDefault();return}const w=R.target.closest("[data-hseat]");if(w&&ne){const ue=+w.dataset.hseat,ve=ne.chairs[ue];if(!ve)return;const we=Ue(R);g.current={hseat:ue,ox:ve.x,oy:ve.y,px:we.x,py:we.y,moved:!1},u("h:"+ue),I.setPointerCapture(R.pointerId),x(!0),R.preventDefault();return}const k=R.target.closest("[data-site]");if(k){const ue=+k.dataset.site,ve=(i.siteItems||[])[ue];if(!ve)return;const we=Ue(R);g.current={site:ue,ox:ve.x,oy:ve.y,px:we.x,py:we.y,moved:!1},u("s:"+ue),I.setPointerCapture(R.pointerId),x(!0),R.preventDefault();return}const Y=R.target.closest("[data-key]");if(!Y){u(null);return}const K=Y.dataset.key,H=Ue(R);if(K.startsWith("__tent")){const ue=+(K.split(":")[1]||b),ve=Jr(A[ue],D[ue],h);ue!==b&&L(we=>{we.active=ue}),g.current={key:"__tent",ox:ve.x,oy:ve.y,px:H.x,py:H.y,moved:!1},u("__tent"),I.setPointerCapture(R.pointerId),x(!0),R.preventDefault();return}const xe=P.items.find(ue=>ue.key===K);xe&&(g.current={key:K,ox:xe.x,oy:xe.y,px:H.x,py:H.y,moved:!1},u(K),I.setPointerCapture(R.pointerId),x(!0),R.preventDefault())},nt=R=>{const I=g.current;if(!I)return;const q=Ue(R),le=q.x-I.px,ke=q.y-I.py;if(!I.moved&&Math.hypot(le,ke)<.4)return;if(I.chand!=null){I.moved=!0,oe(I.chand,Pt(I.ox+le),Pt(I.oy+ke));return}if(I.hseat!=null){I.moved=!0;const[w,k]=Ne(le,ke);Se(I.hseat,Pt(I.ox+w),Pt(I.oy+k));return}if(I.exit!=null){I.moved=!0;const{side:w,f:k}=GS(P.sh,q.x,q.y);Ge(Y=>{Y[I.exit]&&(Y[I.exit]={...Y[I.exit],side:w,f:k})});return}if(I.unit!=null){const w=!I.moved;I.moved=!0,V(k=>{(w||!k.tables)&&He(k),Ve(k,I.unit,Pt(I.ox+le),Pt(I.oy+ke))});return}if(I.site!=null){I.moved=!0,ce(I.site,w=>{w.x=Pt(I.ox+le),w.y=Pt(I.oy+ke)});return}if(I.moved=!0,I.key==="__tent"){V(w=>{w.tentPos={x:Pt(I.ox+le),y:Pt(I.oy+ke)}});return}const it=P.items.find(w=>w.key===I.key);it&&V(w=>{Fe(w),w.pos[I.key]={x:rt(Pt(I.ox+le),0,P.L-it.w),y:rt(Pt(I.oy+ke),0,P.W-it.h),rot:it.rot,t:fe}})},Ye=()=>{g.current&&(g.current=null,x(!1))},dt=()=>{if(c==="__tent")return M.tentAngle||0;if(te)return te.rot||0;if(c&&c.startsWith("u:")){const I=P.units[+c.slice(2)];return I&&I.rot||0}const R=P.items.find(I=>I.key===c);return R?R.rot:0},B=R=>{if(!c||!Number.isFinite(R))return;if(c==="__tent"){V(k=>{k.tentAngle=Tm(R)});return}if(te){ce(X,k=>{k.rot=Tm(R)});return}if(c.startsWith("u:")){const k=+c.slice(2);if(!P.units[k])return;V(Y=>{He(Y),Y.tables.pts[k]={...Y.tables.pts[k],rot:Zh(R)}});return}const I=P.items.find(k=>k.key===c);if(!I)return;const q=Zh(R),[le,ke]=Va(I.dims,q),it=I.x+I.w/2,w=I.y+I.h/2;V(k=>{Fe(k),k.pos[c]={x:rt(Pt(it-le/2),0,Math.max(0,P.L-le)),y:rt(Pt(w-ke/2),0,Math.max(0,P.W-ke)),rot:q,t:fe}})},Ee=R=>B(dt()+R),ie=()=>{const R=P.items.find(q=>q.key===c);if(!R)return;const I=R.def;V(q=>{const le=q.acc[I.id];if(I.qty){const ke=le.qty==="auto"?ix(I.id,q.guests):+le.qty;if(ke<=1){le.on=!1,Object.keys(q.pos).filter(w=>w.startsWith(I.id+"-")).forEach(w=>delete q.pos[w]);return}le.qty=String(ke-1),Fe(q);const it=P.items.filter(w=>w.def.id===I.id&&w.key!==c);Object.keys(q.pos).filter(w=>w.startsWith(I.id+"-")).forEach(w=>delete q.pos[w]),it.forEach((w,k)=>{q.pos[I.id+"-"+k]={x:w.x,y:w.y,rot:w.rot,t:fe}})}else le.on=!1,delete q.pos[I.id]}),u(null)},ae=(R,I)=>{const q=P.items.find(le=>le.key===c);q&&V(le=>{Fe(le),le.pos[c]={x:rt(q.x+R,0,P.L-q.w),y:rt(q.y+I,0,P.W-q.h),rot:q.rot,t:fe}})},Pe=R=>{if(!c||R.target.tagName==="INPUT")return;const I={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[R.key];if(R.key==="r"||R.key==="R"){R.preventDefault(),Ee(R.shiftKey?15:90);return}if(c==="__tent"){if(I&&o==="site"){R.preventDefault();const q=Jr(M,P,h);V(le=>{le.tentPos={x:q.x+I[0],y:q.y+I[1]}})}return}if(te&&o==="site"){if(R.key==="Delete"||R.key==="Backspace"){R.preventDefault(),ye(X);return}I&&(R.preventDefault(),ce(X,q=>{q.x+=I[0],q.y+=I[1]}));return}if(o==="tent"){if(F>=0){const q=P.chands[F];if(!q)return;if(R.key==="Delete"||R.key==="Backspace"){R.preventDefault(),Z(F);return}I&&(R.preventDefault(),oe(F,q.x+I[0],q.y+I[1]));return}if(We>=0){const q=P.exits[We];if(!q)return;if(R.key==="Delete"||R.key==="Backspace"){R.preventDefault(),re(We);return}if(!I)return;R.preventDefault();const le=q.side==="top"||q.side==="bottom",ke=le?I[0]/P.L:I[1]/P.W;ke&&Ge(it=>{it[We]={...it[We],f:rt(q.c/(le?P.L:P.W)+ke,0,1)}});return}if(Q>=0){const q=ne&&ne.chairs[Q];if(!q)return;if(R.key==="Delete"||R.key==="Backspace"){R.preventDefault(),Ce(Q);return}if(R.key==="+"||R.key==="="){R.preventDefault(),qe();return}if(!I)return;R.preventDefault();const[le,ke]=Ne(I[0]*.5,I[1]*.5);Se(Q,q.x+le,q.y+ke);return}if(c.startsWith("u:")){const q=+c.slice(2),le=P.units[q];if(!le)return;if(R.key==="Delete"||R.key==="Backspace"){R.preventDefault(),C(q);return}if(R.key==="+"||R.key==="="){R.preventDefault(),E(q,le.seats+1);return}if(R.key==="-"||R.key==="_"){R.preventDefault(),E(q,le.seats-1);return}if(!I)return;R.preventDefault(),V(ke=>{He(ke),Ve(ke,q,le.x+I[0],le.y+I[1])});return}I?(R.preventDefault(),ae(...I)):(R.key==="Delete"||R.key==="Backspace")&&(R.preventDefault(),ie())}},Re=()=>{o==="site"?i.tents.length>1?W():V(R=>{R.tentPos=null}):V(R=>{R.pos={},R.tables=null,R.tentSize="auto"}),u(null)},$e=Ie.useCallback((R,I)=>{a(R),Ll(R),r(q=>{const le=ii(q);le.photo=I;for(const ke of le.tents)ke.tentAngle=0;if(bu(le,!0),le.siteItems){const ke={l:I.pw*I.fpp,w:I.ph*I.fpp};le.siteItems=le.siteItems.map(it=>({...it,x:rt(it.x,it.l/2,Math.max(it.l/2,ke.l-it.l/2)),y:rt(it.y,it.w/2,Math.max(it.w/2,ke.w-it.w/2))}))}return le}),f(I.calibrated?null:{pts:[]}),l("site"),u(null)},[]),mt=Ie.useCallback(R=>{if(!R||!R.type.startsWith("image/"))return;const I=new FileReader;I.onload=()=>{const q=new Image;q.onload=()=>{const le=Math.min(1,2e3/Math.max(q.width,q.height)),ke=document.createElement("canvas");ke.width=Math.round(q.width*le),ke.height=Math.round(q.height*le),ke.getContext("2d").drawImage(q,0,0,ke.width,ke.height),$e(ke.toDataURL("image/jpeg",.85),{pw:ke.width,ph:ke.height,fpp:Math.max(i.siteL,60)/ke.width,calibrated:!1,source:"upload"})},q.src=I.result},I.readAsDataURL(R)},[$e,i.siteL]),zt=async(R,I)=>{const q=await wM(R),le=await bM(q.lat,q.lng,I);return $e(le.src,{pw:le.pw,ph:le.ph,fpp:le.fpp,calibrated:!0,source:"mapbox",lat:q.lat,lng:q.lng,zoom:le.zoom}),q};Ie.useEffect(()=>{const R=I=>{const q=[...I.clipboardData&&I.clipboardData.files||[]].find(le=>le.type.startsWith("image/"));q&&(I.preventDefault(),mt(q))};return document.addEventListener("paste",R),()=>document.removeEventListener("paste",R)},[mt]);const lt=()=>{h&&(z("site"),f({pts:[]}))},yn=()=>{L(R=>{R.photo=null;for(const I of R.tents)I.tentAngle=0;bu(R,!1)}),f(null),a(null),Ll(null)},Dn=R=>{!(R>0)||!Number.isFinite(R)||L(I=>{I.photo.fpp*=R,I.photo.calibrated=!0;for(const q of I.tents)q.tentPos&&(q.tentPos={x:q.tentPos.x*R,y:q.tentPos.y*R})})},Oo=R=>{const I=d&&d.pts;if(!(R>0)||!I||I.length<2)return;const q=Math.hypot(I[1].x-I[0].x,I[1].y-I[0].y);q<.01||(Dn(R/q),f(null))},[br,In]=Ie.useState("idle"),[ls,va]=Ie.useState(null),zo=async()=>{if(br!=="busy"){In("busy");try{const{makeClientPdf:R}=await Z_(async()=>{const{makeClientPdf:I}=await import("./pdf-Co_ArmAH.js").then(q=>q.p);return{makeClientPdf:I}},[],import.meta.url);va(await R({model:i,tents:T,active:b,ph:h,photoSrc:s})),In("idle")}catch(R){console.error(R),In("error"),setTimeout(()=>In("idle"),4e3)}}},cs=R=>{const I=Jh(R),q=I.photo&&R.photoSrc?R.photoSrc:null;q||(I.photo=null),r(I),a(q),Ll(q),f(null),u(null)},Bo=()=>{r(Jh(null)),a(null),Ll(null),f(null),u(null),l("tent")};return m.jsxs(m.Fragment,{children:[m.jsxs("header",{className:"top",children:[e?m.jsx("img",{className:"logo"+(Ht.logoMode==="mono"?"":" color"),src:e,alt:Ht.logoAlt}):m.jsx("span",{className:"logo color","aria-hidden":"true"}),m.jsxs("div",{children:[m.jsx("h1",{children:Ht.title}),m.jsxs("p",{children:[Ht.intro," ",m.jsxs("a",{className:"otherplanner",href:Ht.other.href,children:["Open the ",Ht.other.label.toLowerCase()," →"]})]})]}),m.jsxs("button",{className:"btn primary pdfbtn",onClick:zo,disabled:br==="busy","aria-live":"polite",title:"Download a client-ready PDF: overview, 3D preview, floor plans and rental summary",children:[m.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",children:m.jsx("path",{d:"M10 3v9m0 0-3.5-3.5M10 12l3.5-3.5M4 14v2.5h12V14",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),br==="busy"?"Preparing PDF…":br==="error"?"PDF failed, try again":"Download PDF"]})]}),ls&&m.jsx(yM,{doc:ls,onClose:()=>va(null)}),m.jsxs("div",{className:"app",children:[m.jsx(xM,{st:M,lay:P,model:i,active:b,tents:T.map(R=>({name:R.st.name,guests:R.st.guests,lay:R.lay})),sel:c,onSelect:_e,update:V,ph:h,photoSrc:s,onPhotoFile:mt,onSatellite:zt,onCalib:lt,onPhotoDel:yn,onPhotoScale:Dn,onLoadLayout:cs,onNewLayout:Bo,onPickTent:G,onAddTent:()=>ee(!1),onDuplicateTent:()=>ee(!0),onRemoveTent:U,onArrange:W,onAddTable:de,onResetTables:se,siteItems:i.siteItems||[],onAddSiteItem:J,onPickSiteItem:ze,onRemoveSiteItem:ye}),m.jsxs("main",{className:"sheet",children:[m.jsx(cA,{st:M,lay:P,count:i.tents.length}),m.jsxs("section",{className:"card",children:[m.jsxs("div",{className:"tenttabs",role:"group","aria-label":"Tents",children:[i.tents.map((R,I)=>m.jsx("button",{className:"tab","aria-pressed":I===b,onClick:()=>G(I),children:R.name},I)),m.jsx("button",{className:"btn sm",onClick:()=>ee(!1),children:"+ Add tent"})]}),m.jsxs("div",{className:"toolbar",children:[m.jsxs("div",{className:"seg",role:"group","aria-label":"Drawing view",children:[m.jsx("button",{"aria-pressed":o==="tent",onClick:()=>z("tent"),children:"Tent plan"}),m.jsx("button",{"aria-pressed":o==="site",onClick:()=>z("site"),children:"Site plan"})]}),o==="site"&&S&&m.jsxs("div",{className:"seg",role:"group","aria-label":"Site plan style",children:[m.jsx("button",{"aria-pressed":v==="3d",onClick:()=>y("3d"),children:"3D map"}),m.jsx("button",{"aria-pressed":v==="2d",onClick:()=>y("2d"),children:"2D plan"})]}),m.jsx("button",{className:"btn",onClick:Re,children:"Auto-arrange"}),m.jsx(LM,{view:o,calib:d,sel:c,lay:P,st:M,siteItem:te,siteIdx:X,onSiteEdit:R=>ce(X,R),onSiteDuplicate:()=>he(X),onSiteRemove:()=>ye(X),onCancelCalib:()=>f(null),onApplyCalib:Oo,onRotate:Ee,onSetAngle:B,onRemove:ie,onReflow:()=>{V(R=>{R.tables=null}),u(null)},onExitKind:R=>Ge(I=>{I[We]&&(I[We]={...I[We],kind:R})}),onRemoveExit:()=>re(We),onAddExit:()=>{Ge(R=>{R.push(ox(R))})},onRemoveChand:()=>Z(F),onAddChand:()=>be(R=>{R.push(sx(P))}),onSeats:R=>E(Me,R),onTableType:R=>j(Me,R),onAddTable:de,onRemoveTable:()=>C(Me),onAddHeadSeat:qe,onRemoveHeadSeat:()=>Ce(Q),onResetHeadSeats:pe})]}),m.jsx("div",{className:"svgwrap",tabIndex:0,onKeyDown:Pe,"aria-label":"Layout drawing. Select an item, then use arrow keys to nudge, R to rotate, Delete to remove.",onDragOver:R=>R.preventDefault(),onDrop:R=>{const I=R.dataTransfer&&R.dataTransfer.files[0];I&&I.type.startsWith("image/")&&(R.preventDefault(),mt(I))},children:N?m.jsx(Ie.Suspense,{fallback:m.jsx("p",{className:"hint map3dload",children:"Loading 3D map…"}),children:m.jsx(fA,{tents:T,active:b,sel:c,photo:i.photo,photoSrc:s,onPickTent:R=>{R!==b&&L(I=>{I.active=R}),u("__tent")},onMoveTent:(R,I,q)=>L(le=>{le.tents[R]&&(le.tents[R].tentPos={x:Pt(I),y:Pt(q)})}),onDeselect:()=>u(null),siteItems:i.siteItems||[],onPickItem:R=>u("s:"+R),onMoveItem:(R,I,q)=>ce(R,le=>{le.x=Pt(I),le.y=Pt(q)})})}):m.jsx(PM,{st:M,lay:P,tents:T,active:b,view:o,sel:c,calib:o==="site"?d:null,ph:h,photoSrc:s,svgRef:_,dragging:p,onPointerDown:Le,onPointerMove:nt,onPointerUp:Ye,onPointerCancel:Ye})}),m.jsx(uA,{st:M,lay:P,view:o,tents:T})]}),m.jsx(sA,{tents:T,active:b,photoSrc:h?s:null}),m.jsxs("div",{className:"two",children:[m.jsx(hA,{tents:T}),m.jsx(dA,{st:M,lay:P,ph:h,tents:T})]})]})]})]})}K_(document.getElementById("root")).render(m.jsx(Ie.StrictMode,{children:m.jsx(mA,{})}));export{_a as B,jx as C,V2 as D,Ht as E,Qn as G,z2 as H,HS as L,gx as M,PM as P,I2 as S,$ as V,D2 as W,Z_ as _,Ct as a,_A as b,An as c,vA as d,ap as e,op as f,$a as g,Kh as h,xA as i,m as j,Wt as k,DS as l,ev as m,No as n,Bf as o,Ie as r,es as s,Jr as t};
