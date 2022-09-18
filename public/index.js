
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
	'use strict';

	function _mergeNamespaces(n, m) {
		m.forEach(function (e) {
			e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
				if (k !== 'default' && !(k in n)) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		});
		return Object.freeze(n);
	}

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	var objectAssign;
	var hasRequiredObjectAssign;

	function requireObjectAssign () {
		if (hasRequiredObjectAssign) return objectAssign;
		hasRequiredObjectAssign = 1;
		/* eslint-disable no-unused-vars */
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;

		function toObject(val) {
			if (val === null || val === undefined) {
				throw new TypeError('Object.assign cannot be called with null or undefined');
			}

			return Object(val);
		}

		function shouldUseNative() {
			try {
				if (!Object.assign) {
					return false;
				}

				// Detect buggy property enumeration order in older V8 versions.

				// https://bugs.chromium.org/p/v8/issues/detail?id=4118
				var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
				test1[5] = 'de';
				if (Object.getOwnPropertyNames(test1)[0] === '5') {
					return false;
				}

				// https://bugs.chromium.org/p/v8/issues/detail?id=3056
				var test2 = {};
				for (var i = 0; i < 10; i++) {
					test2['_' + String.fromCharCode(i)] = i;
				}
				var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
					return test2[n];
				});
				if (order2.join('') !== '0123456789') {
					return false;
				}

				// https://bugs.chromium.org/p/v8/issues/detail?id=3056
				var test3 = {};
				'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
					test3[letter] = letter;
				});
				if (Object.keys(Object.assign({}, test3)).join('') !==
						'abcdefghijklmnopqrst') {
					return false;
				}

				return true;
			} catch (err) {
				// We don't expect any of the above to throw, but better to be safe.
				return false;
			}
		}

		objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
			var from;
			var to = toObject(target);
			var symbols;

			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);

				for (var key in from) {
					if (hasOwnProperty.call(from, key)) {
						to[key] = from[key];
					}
				}

				if (getOwnPropertySymbols) {
					symbols = getOwnPropertySymbols(from);
					for (var i = 0; i < symbols.length; i++) {
						if (propIsEnumerable.call(from, symbols[i])) {
							to[symbols[i]] = from[symbols[i]];
						}
					}
				}
			}

			return to;
		};
		return objectAssign;
	}

	/** @license React v17.0.2
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReact_production_min;

	function requireReact_production_min () {
		if (hasRequiredReact_production_min) return react_production_min;
		hasRequiredReact_production_min = 1;
	var l=requireObjectAssign(),n=60103,p=60106;react_production_min.Fragment=60107;react_production_min.StrictMode=60108;react_production_min.Profiler=60114;var q=60109,r=60110,t=60112;react_production_min.Suspense=60113;var u=60115,v=60116;
		if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");react_production_min.Fragment=w("react.fragment");react_production_min.StrictMode=w("react.strict_mode");react_production_min.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");react_production_min.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
		function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
		var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
		function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
		function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
		function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
		function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
		0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
		function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
		react_production_min.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};react_production_min.Component=C;react_production_min.PureComponent=E;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
		react_production_min.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
		key:d,ref:k,props:e,_owner:h}};react_production_min.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};react_production_min.createElement=J;react_production_min.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};react_production_min.forwardRef=function(a){return {$$typeof:t,render:a}};react_production_min.isValidElement=L;
		react_production_min.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};react_production_min.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};react_production_min.useCallback=function(a,b){return S().useCallback(a,b)};react_production_min.useContext=function(a,b){return S().useContext(a,b)};react_production_min.useDebugValue=function(){};react_production_min.useEffect=function(a,b){return S().useEffect(a,b)};react_production_min.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
		react_production_min.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return S().useMemo(a,b)};react_production_min.useReducer=function(a,b,c){return S().useReducer(a,b,c)};react_production_min.useRef=function(a){return S().useRef(a)};react_production_min.useState=function(a){return S().useState(a)};react_production_min.version="17.0.2";
		return react_production_min;
	}

	(function (module) {

		{
		  module.exports = requireReact_production_min();
		}
	} (react));

	var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

	var React$1 = /*#__PURE__*/_mergeNamespaces({
		__proto__: null,
		'default': React
	}, [react.exports]);

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/** @license React v0.20.2
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredScheduler_production_min;

	function requireScheduler_production_min () {
		if (hasRequiredScheduler_production_min) return scheduler_production_min;
		hasRequiredScheduler_production_min = 1;
		(function (exports) {
	var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
			if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
			window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
			E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
			x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
			function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
			function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
			function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
			exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
			exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
			exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
			exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
	} (scheduler_production_min));
		return scheduler_production_min;
	}

	var hasRequiredScheduler;

	function requireScheduler () {
		if (hasRequiredScheduler) return scheduler.exports;
		hasRequiredScheduler = 1;
		(function (module) {

			{
			  module.exports = requireScheduler_production_min();
			}
	} (scheduler));
		return scheduler.exports;
	}

	/** @license React v17.0.2
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactDom_production_min;

	function requireReactDom_production_min () {
		if (hasRequiredReactDom_production_min) return reactDom_production_min;
		hasRequiredReactDom_production_min = 1;
	var aa=react.exports,m=requireObjectAssign(),r=requireScheduler();function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}
		function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a]);}
		var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
		ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
		function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});
		["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});
		["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
		pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});
		D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});
		function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
		var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
		if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}
		var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a}var Oa=!1;
		function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
		f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):""}
		function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return ""}}
		function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
		return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
		function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
		null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
		function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}
		function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
		function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
		function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
		function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
		function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
		function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
		function lb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
		var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
		function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
		var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
		floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
		function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
		function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
		function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
		function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}
		function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb();}}
		function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
		typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}
		function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
		function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
		c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
		function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId);}}
		function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
		function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return !1}
		function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c);});});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
		function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0}function zc(a,b,c){xc(a)&&c.delete(b);}
		function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}
		function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)));}
		function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift();}
		function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
		fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
		var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
		"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=r.unstable_now;Qc();var F=8;
		function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
		F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
		function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
		function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
		function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d));}
		function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d);}jd(a,b,d,null,c);}}}}
		function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
		function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
		function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
		(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
		var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
		a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
		Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
		119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
		var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
		a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
		deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
		function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
		function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
		var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
		function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}
		function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
		function Je(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return !1;return !0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
		function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Ke(c);}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
		function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
		var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
		function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
		Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
		0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
		ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
		da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
		function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}
		function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
		function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d));}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null);}));}
		function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h));}
		function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
		function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Nb(function(){var d=f,e=xb(c),g=[];
		a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
		Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
		t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return;}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
		x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
		gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u);}w=null;}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else {J=De;var K=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
		K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
		case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
		"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}se(g,b);});}function ef(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return;}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
		function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
		function nf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}
		function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var tf=0;function uf(a){return {$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
		function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[wf]||a[ff];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
		function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return {current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--);}function I(a,b){Af++;zf[Af]=a.current;a.current=b;}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
		function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M);}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c);}
		function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return !0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}
		var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
		function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a);}jg();}
		function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null;}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1;}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null;}
		function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b;}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null);}
		function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null};}else og=og.next=b;}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}
		function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function zg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
		function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
		b;c.lastBaseUpdate=b;}
		function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
		next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
		f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A;}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d);}}}var Fg=(new aa.Component).refs;
		function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
		var Kg={isMounted:function(a){return (a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
		b);Ag(a,e);Jg(a,d,c);}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
		function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
		function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null);}
		function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
		(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Pg=Array.isArray;
		function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode;}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
		function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
		function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
		c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
		Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
		a.mode,c,null),b.return=a,b;Rg(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c);}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
		null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d);}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
		n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
		h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
		u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
		d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
		Wg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
		function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H(ah);I(ah,b);}function fh(){H(ah);H(bh);H(ch);}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c));}function hh(a){bh.current===a&&(H(ah),H(bh));}var P=Bf(0);
		function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var jh=null,kh=null,lh=!1;
		function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
		function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c);}jh=a;kh=rf(b.firstChild);}else a.flags=a.flags&-1025|2,lh=!1,jh=a;}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a;}
		function rh(a){if(a!==jh)return !1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}kh=null;}}else kh=jh?rf(a.stateNode.nextSibling):null;return !0}
		function sh(){kh=jh=null;lh=!1;}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0;}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
		function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e);}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
		function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T}function Jh(a,b){return "function"===typeof b?b(a):b}
		function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
		eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
		function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
		function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
		function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
		e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
		function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return [b.memoizedState,a]}
		function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d);}
		function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d);}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
		function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
		function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0);});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b();}finally{wh.transition=c;}});}
		function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d);}}
		var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
		b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return [d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
		wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return [a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36));},
		void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return [Th().current,
		a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return [Th().current,
		a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d);}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
		function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
		function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
		function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
		function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
		function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b);}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
		"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
		typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
		"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
		x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
		h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return qi(a,b,c,d,f,e)}
		function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo);}
		var si={dehydrated:null,retryLane:0};
		function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
		b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
		{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
		function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
		function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b);}
		function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
		function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=
		null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
		function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}var Bi,Ci,Di,Ei;
		Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Ci=function(){};
		Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf);}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
		l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
		(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",
		c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4);};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
		function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
		b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
		{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
		jf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
		e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
		gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}switch(c){case "input":Va(a);cb(a,d,!1);
		break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf);}mf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
		c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=
		4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W);}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
		null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
		f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling;}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);}else {if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
		64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
		function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
		function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b);};return c}
		function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
		function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Wi(a,c);}else b.current=null;}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
		function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
		b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Eg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
		return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
		function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
		a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
		function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else {d=b;try{e();}catch(f){Wi(d,f);}}c=c.next;}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Wi(b,
		f);}break;case 5:Vi(b);break;case 4:cj(a,b);}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
		function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return;}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
		c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b);}
		function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling;}
		function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling;}
		function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return;}k.sibling.return=k.return;k=k.sibling;}f?(g=e,h=c.stateNode,
		8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
		function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
		2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
		b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
		function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500;}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
		function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
		function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a;}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
		function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c);}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
		c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
		function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h);}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
		a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
		c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}
		function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b));}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
		function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O());});}ig();}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function ni(a,b){I(rj,qj);qj|=b;tj|=b;}function Ki(){qj=rj.current;H(rj);}
		function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki();}c=c.return;}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0;}
		function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}yh=!1;}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
		(h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=zg(-1,1);t.tag=2;Ag(h,t);}h.lanes|=1;break a}k=
		void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Mi(k,h);p=
		g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return;}while(null!==p)}Zj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
		function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e);}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y);}function Rj(){for(;null!==Y&&!Qf();)bk(Y);}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null;}
		function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
		a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===V&&(V=5);}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
		function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
		Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;
		break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek();}catch(va){if(null===
		Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
		J&&dj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
		g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
		0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Z=null;$f();X=e;}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
		Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64));}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
		function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect;}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return !1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}
		function fk(){if(null===yj)return !1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
		null,h.stateNode=null),h=a;X=b;ig();return !0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b));}
		function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
		function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b);}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c));}var ck;
		ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else {ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
		b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
		typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c);}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
		a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
		d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else fi(a,b,d,c),sh();b=b.child;}return b;case 5:return gh(b),null===a&&
		ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
		c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
		k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}fi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
		f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
		};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return !(!a||!a.isReactComponent)}
		function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
		function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
		c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
		function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
		typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
		function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
		function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null;}
		function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
		function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h;}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
		d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b);}function pk(){return null}
		function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}
		qk.prototype.render=function(a){lk(a,this._internalRoot,null,null);};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null;});};function rk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
		function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
		function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a);};}lk(b,g,a,e);}else {f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a);};}Xj(function(){lk(b,g,a,e);});}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4);}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864);}};
		gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c);}};hc=function(a,b){return b()};
		yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Wj;
		Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig());}};Ib=function(){0===(X&49)&&(Vj(),Oj());};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
		var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
		pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;reactDom_production_min.createPortal=uk;
		reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig();}};reactDom_production_min.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
		reactDom_production_min.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Wj;reactDom_production_min.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
		reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};reactDom_production_min.version="17.0.2";
		return reactDom_production_min;
	}

	(function (module) {

		function checkDCE() {
		  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		  if (
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
		    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
		  ) {
		    return;
		  }
		  try {
		    // Verify that the code above has been dead code eliminated (DCE'd).
		    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		  } catch (err) {
		    // DevTools shouldn't crash React, no matter what.
		    // We should still report in case we break this code.
		    console.error(err);
		  }
		}

		{
		  // DCE check should happen before ReactDOM bundle executes so that
		  // DevTools can report bad minification during injection.
		  checkDCE();
		  module.exports = requireReactDom_production_min();
		}
	} (reactDom));

	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDom.exports);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$j =
	  // eslint-disable-next-line es-x/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$d = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$c = fails$d;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$c(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var fails$b = fails$d;

	var functionBindNative = !fails$b(function () {
	  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$3 = functionBindNative;

	var call$c = Function.prototype.call;

	var functionCall = NATIVE_BIND$3 ? call$c.bind(call$c) : function () {
	  return call$c.apply(call$c, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$3(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$3 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND$2 = functionBindNative;

	var FunctionPrototype$2 = Function.prototype;
	var bind$6 = FunctionPrototype$2.bind;
	var call$b = FunctionPrototype$2.call;
	var uncurryThis$h = NATIVE_BIND$2 && bind$6.bind(call$b, call$b);

	var functionUncurryThis = NATIVE_BIND$2 ? function (fn) {
	  return fn && uncurryThis$h(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$b.apply(fn, arguments);
	  };
	};

	var uncurryThis$g = functionUncurryThis;

	var toString$4 = uncurryThis$g({}.toString);
	var stringSlice = uncurryThis$g(''.slice);

	var classofRaw$1 = function (it) {
	  return stringSlice(toString$4(it), 8, -1);
	};

	var uncurryThis$f = functionUncurryThis;
	var fails$a = fails$d;
	var classof$7 = classofRaw$1;

	var $Object$3 = Object;
	var split = uncurryThis$f(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$a(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$7(it) == 'String' ? split(it, '') : $Object$3(it);
	} : $Object$3;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$4 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$3 = isNullOrUndefined$4;

	var $TypeError$d = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$3 = function (it) {
	  if (isNullOrUndefined$3(it)) throw $TypeError$d("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$2 = requireObjectCoercible$3;

	var toIndexedObject$3 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$2(it));
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$i = function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$h = isCallable$i;

	var documentAll = typeof document == 'object' && document.all;

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	var SPECIAL_DOCUMENT_ALL = typeof documentAll == 'undefined' && documentAll !== undefined;

	var isObject$a = SPECIAL_DOCUMENT_ALL ? function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$h(it) || it === documentAll;
	} : function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$h(it);
	};

	var global$i = global$j;
	var isCallable$g = isCallable$i;

	var aFunction = function (argument) {
	  return isCallable$g(argument) ? argument : undefined;
	};

	var getBuiltIn$8 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$i[namespace]) : global$i[namespace] && global$i[namespace][method];
	};

	var uncurryThis$e = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

	var getBuiltIn$7 = getBuiltIn$8;

	var engineUserAgent = getBuiltIn$7('navigator', 'userAgent') || '';

	var global$h = global$j;
	var userAgent$3 = engineUserAgent;

	var process$3 = global$h.process;
	var Deno$1 = global$h.Deno;
	var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match$1, version;

	if (v8) {
	  match$1 = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent$3) {
	  match$1 = userAgent$3.match(/Edge\/(\d+)/);
	  if (!match$1 || match$1[1] >= 74) {
	    match$1 = userAgent$3.match(/Chrome\/(\d+)/);
	    if (match$1) version = +match$1[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es-x/no-symbol -- required for testing */

	var V8_VERSION$3 = engineV8Version;
	var fails$9 = fails$d;

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$9(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
	});

	/* eslint-disable es-x/no-symbol -- required for testing */

	var NATIVE_SYMBOL$1 = symbolConstructorDetection;

	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$6 = getBuiltIn$8;
	var isCallable$f = isCallable$i;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$2 = Object;

	var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$6('Symbol');
	  return isCallable$f($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$2(it));
	};

	var $String$3 = String;

	var tryToString$4 = function (argument) {
	  try {
	    return $String$3(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$e = isCallable$i;
	var tryToString$3 = tryToString$4;

	var $TypeError$c = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$7 = function (argument) {
	  if (isCallable$e(argument)) return argument;
	  throw $TypeError$c(tryToString$3(argument) + ' is not a function');
	};

	var aCallable$6 = aCallable$7;
	var isNullOrUndefined$2 = isNullOrUndefined$4;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$3 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$2(func) ? undefined : aCallable$6(func);
	};

	var call$a = functionCall;
	var isCallable$d = isCallable$i;
	var isObject$9 = isObject$a;

	var $TypeError$b = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$d(fn = input.toString) && !isObject$9(val = call$a(fn, input))) return val;
	  if (isCallable$d(fn = input.valueOf) && !isObject$9(val = call$a(fn, input))) return val;
	  if (pref !== 'string' && isCallable$d(fn = input.toString) && !isObject$9(val = call$a(fn, input))) return val;
	  throw $TypeError$b("Can't convert object to primitive value");
	};

	var shared$3 = {exports: {}};

	var global$g = global$j;

	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$3 = Object.defineProperty;

	var defineGlobalProperty$3 = function (key, value) {
	  try {
	    defineProperty$3(global$g, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$g[key] = value;
	  } return value;
	};

	var global$f = global$j;
	var defineGlobalProperty$2 = defineGlobalProperty$3;

	var SHARED = '__core-js_shared__';
	var store$3 = global$f[SHARED] || defineGlobalProperty$2(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$3.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.25.1',
	  mode: 'global',
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var requireObjectCoercible$1 = requireObjectCoercible$3;

	var $Object$1 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$3 = function (argument) {
	  return $Object$1(requireObjectCoercible$1(argument));
	};

	var uncurryThis$d = functionUncurryThis;
	var toObject$2 = toObject$3;

	var hasOwnProperty = uncurryThis$d({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es-x/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$2(it), key);
	};

	var uncurryThis$c = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$3 = uncurryThis$c(1.0.toString);

	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
	};

	var global$e = global$j;
	var shared$2 = shared$3.exports;
	var hasOwn$9 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var WellKnownSymbolsStore = shared$2('wks');
	var Symbol$1 = global$e.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

	var wellKnownSymbol$d = function (name) {
	  if (!hasOwn$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL && hasOwn$9(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var call$9 = functionCall;
	var isObject$8 = isObject$a;
	var isSymbol$2 = isSymbol$3;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$c = wellKnownSymbol$d;

	var $TypeError$a = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$2 = function (input, pref) {
	  if (!isObject$8(input) || isSymbol$2(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$9(exoticToPrim, input, pref);
	    if (!isObject$8(result) || isSymbol$2(result)) return result;
	    throw $TypeError$a("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive$1 = toPrimitive$2;
	var isSymbol$1 = isSymbol$3;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$3 = function (argument) {
	  var key = toPrimitive$1(argument, 'string');
	  return isSymbol$1(key) ? key : key + '';
	};

	var global$d = global$j;
	var isObject$7 = isObject$a;

	var document$3 = global$d.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$7(document$3) && isObject$7(document$3.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$3.createElement(it) : {};
	};

	var DESCRIPTORS$8 = descriptors;
	var fails$8 = fails$d;
	var createElement$1 = documentCreateElement;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$8 && !fails$8(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement$1('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$7 = descriptors;
	var call$8 = functionCall;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var createPropertyDescriptor$2 = createPropertyDescriptor$3;
	var toIndexedObject$2 = toIndexedObject$3;
	var toPropertyKey$2 = toPropertyKey$3;
	var hasOwn$8 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$2(O);
	  P = toPropertyKey$2(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$8(O, P)) return createPropertyDescriptor$2(!call$8(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$6 = descriptors;
	var fails$7 = fails$d;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$7(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var isObject$6 = isObject$a;

	var $String$2 = String;
	var $TypeError$9 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$8 = function (argument) {
	  if (isObject$6(argument)) return argument;
	  throw $TypeError$9($String$2(argument) + ' is not an object');
	};

	var DESCRIPTORS$5 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var anObject$7 = anObject$8;
	var toPropertyKey$1 = toPropertyKey$3;

	var $TypeError$8 = TypeError;
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject$7(O);
	  P = toPropertyKey$1(P);
	  anObject$7(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$7(O);
	  P = toPropertyKey$1(P);
	  anObject$7(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$8('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$4 = descriptors;
	var definePropertyModule$4 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$3;

	var createNonEnumerableProperty$2 = DESCRIPTORS$4 ? function (object, key, value) {
	  return definePropertyModule$4.f(object, key, createPropertyDescriptor$1(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var makeBuiltIn$2 = {exports: {}};

	var DESCRIPTORS$3 = descriptors;
	var hasOwn$7 = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var uncurryThis$b = functionUncurryThis;
	var isCallable$c = isCallable$i;
	var store$1 = sharedStore;

	var functionToString = uncurryThis$b(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$c(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$3 = store$1.inspectSource;

	var global$c = global$j;
	var isCallable$b = isCallable$i;

	var WeakMap$2 = global$c.WeakMap;

	var weakMapBasicDetection = isCallable$b(WeakMap$2) && /native code/.test(String(WeakMap$2));

	var shared$1 = shared$3.exports;
	var uid = uid$2;

	var keys$1 = shared$1('keys');

	var sharedKey$1 = function (key) {
	  return keys$1[key] || (keys$1[key] = uid(key));
	};

	var hiddenKeys$3 = {};

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$b = global$j;
	var uncurryThis$a = functionUncurryThis;
	var isObject$5 = isObject$a;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
	var hasOwn$6 = hasOwnProperty_1;
	var shared = sharedStore;
	var sharedKey = sharedKey$1;
	var hiddenKeys$2 = hiddenKeys$3;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$3 = global$b.TypeError;
	var WeakMap$1 = global$b.WeakMap;
	var set$1, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set$1(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared.state) {
	  var store = shared.state || (shared.state = new WeakMap$1());
	  var wmget = uncurryThis$a(store.get);
	  var wmhas = uncurryThis$a(store.has);
	  var wmset = uncurryThis$a(store.set);
	  set$1 = function (it, metadata) {
	    if (wmhas(store, it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$2[STATE] = true;
	  set$1 = function (it, metadata) {
	    if (hasOwn$6(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$1(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$6(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$6(it, STATE);
	  };
	}

	var internalState = {
	  set: set$1,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var fails$6 = fails$d;
	var isCallable$a = isCallable$i;
	var hasOwn$5 = hasOwnProperty_1;
	var DESCRIPTORS$2 = descriptors;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
	var inspectSource$2 = inspectSource$3;
	var InternalStateModule$1 = internalState;

	var enforceInternalState = InternalStateModule$1.enforce;
	var getInternalState = InternalStateModule$1.get;
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$2 = Object.defineProperty;

	var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$6(function () {
	  return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
	  if (String(name).slice(0, 7) === 'Symbol(') {
	    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwn$5(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	    if (DESCRIPTORS$2) defineProperty$2(value, 'name', { value: name, configurable: true });
	    else value.name = name;
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwn$5(options, 'arity') && value.length !== options.arity) {
	    defineProperty$2(value, 'length', { value: options.arity });
	  }
	  try {
	    if (options && hasOwn$5(options, 'constructor') && options.constructor) {
	      if (DESCRIPTORS$2) defineProperty$2(value, 'prototype', { writable: false });
	    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
	    } else if (value.prototype) value.prototype = undefined;
	  } catch (error) { /* empty */ }
	  var state = enforceInternalState(value);
	  if (!hasOwn$5(state, 'source')) {
	    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn$1(function toString() {
	  return isCallable$a(this) && getInternalState(this).source || inspectSource$2(this);
	}, 'toString');

	var isCallable$9 = isCallable$i;
	var definePropertyModule$3 = objectDefineProperty;
	var makeBuiltIn = makeBuiltIn$2.exports;
	var defineGlobalProperty$1 = defineGlobalProperty$3;

	var defineBuiltIn$5 = function (O, key, value, options) {
	  if (!options) options = {};
	  var simple = options.enumerable;
	  var name = options.name !== undefined ? options.name : key;
	  if (isCallable$9(value)) makeBuiltIn(value, name, options);
	  if (options.global) {
	    if (simple) O[key] = value;
	    else defineGlobalProperty$1(key, value);
	  } else {
	    try {
	      if (!options.unsafe) delete O[key];
	      else if (O[key]) simple = true;
	    } catch (error) { /* empty */ }
	    if (simple) O[key] = value;
	    else definePropertyModule$3.f(O, key, {
	      value: value,
	      enumerable: false,
	      configurable: !options.nonConfigurable,
	      writable: !options.nonWritable
	    });
	  } return O;
	};

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es-x/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$2 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$1 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var toIntegerOrInfinity = toIntegerOrInfinity$2;

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$4 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$1 = toIndexedObject$3;
	var toAbsoluteIndex = toAbsoluteIndex$1;
	var lengthOfArrayLike$3 = lengthOfArrayLike$4;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$1($this);
	    var length = lengthOfArrayLike$3(O);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var uncurryThis$9 = functionUncurryThis;
	var hasOwn$4 = hasOwnProperty_1;
	var toIndexedObject = toIndexedObject$3;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$1 = hiddenKeys$3;

	var push$1 = uncurryThis$9([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$4(hiddenKeys$1, key) && hasOwn$4(O, key) && push$1(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$4(O, key = names[i++])) {
	    ~indexOf(result, key) || push$1(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$1 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$1;

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$5 = getBuiltIn$8;
	var uncurryThis$8 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject$6 = anObject$8;

	var concat = uncurryThis$8([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$3 = hasOwnProperty_1;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule$2 = objectDefineProperty;

	var copyConstructorProperties$1 = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule$2.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$5 = fails$d;
	var isCallable$8 = isCallable$i;

	var replacement = /#|\.prototype\./;

	var isForced$3 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$8(detection) ? fails$5(detection)
	    : !!detection;
	};

	var normalize = isForced$3.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$3.data = {};
	var NATIVE = isForced$3.NATIVE = 'N';
	var POLYFILL = isForced$3.POLYFILL = 'P';

	var isForced_1 = isForced$3;

	var global$a = global$j;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty = createNonEnumerableProperty$2;
	var defineBuiltIn$4 = defineBuiltIn$5;
	var defineGlobalProperty = defineGlobalProperty$3;
	var copyConstructorProperties = copyConstructorProperties$1;
	var isForced$2 = isForced_1;

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$a;
	  } else if (STATIC) {
	    target = global$a[TARGET] || defineGlobalProperty(TARGET, {});
	  } else {
	    target = (global$a[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$2(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn$4(target, key, sourceProperty, options);
	  }
	};

	var classof$6 = classofRaw$1;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es-x/no-array-isarray -- safe
	var isArray$2 = Array.isArray || function isArray(argument) {
	  return classof$6(argument) == 'Array';
	};

	var $TypeError$7 = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$1 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$7('Maximum allowed index exceeded');
	  return it;
	};

	var toPropertyKey = toPropertyKey$3;
	var definePropertyModule$1 = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$3;

	var createProperty$1 = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var wellKnownSymbol$b = wellKnownSymbol$d;

	var TO_STRING_TAG$2 = wellKnownSymbol$b('toStringTag');
	var test = {};

	test[TO_STRING_TAG$2] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$7 = isCallable$i;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$a = wellKnownSymbol$d;

	var TO_STRING_TAG$1 = wellKnownSymbol$a('toStringTag');
	var $Object = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable$7(O.callee) ? 'Arguments' : result;
	};

	var uncurryThis$7 = functionUncurryThis;
	var fails$4 = fails$d;
	var isCallable$6 = isCallable$i;
	var classof$4 = classof$5;
	var getBuiltIn$4 = getBuiltIn$8;
	var inspectSource$1 = inspectSource$3;

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn$4('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$7(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$6(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$6(argument)) return false;
	  switch (classof$4(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource$1(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$2 = !construct || fails$4(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isArray$1 = isArray$2;
	var isConstructor$1 = isConstructor$2;
	var isObject$4 = isObject$a;
	var wellKnownSymbol$9 = wellKnownSymbol$d;

	var SPECIES$4 = wellKnownSymbol$9('species');
	var $Array = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$1(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor$1(C) && (C === $Array || isArray$1(C.prototype))) C = undefined;
	    else if (isObject$4(C)) {
	      C = C[SPECIES$4];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$2 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$3 = fails$d;
	var wellKnownSymbol$8 = wellKnownSymbol$d;
	var V8_VERSION$2 = engineV8Version;

	var SPECIES$3 = wellKnownSymbol$8('species');

	var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$2 >= 51 || !fails$3(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$3] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$7 = _export;
	var fails$2 = fails$d;
	var isArray = isArray$2;
	var isObject$3 = isObject$a;
	var toObject$1 = toObject$3;
	var lengthOfArrayLike$2 = lengthOfArrayLike$4;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
	var createProperty = createProperty$1;
	var arraySpeciesCreate$1 = arraySpeciesCreate$2;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
	var wellKnownSymbol$7 = wellKnownSymbol$d;
	var V8_VERSION$1 = engineV8Version;

	var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable');

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$2(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject$3(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$$7({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$1(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$2(E);
	        doesNotExceedSafeInteger(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger(n + 1);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css_248z$6 = "/* Add a black background color to the top navigation */\r\ndiv.topnav {\r\n  background-color: #4a4f4f;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\ndiv a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n/* Change the color of links on hover */\r\ndiv a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\ndiv a.active {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n}\r\n";
	styleInject(css_248z$6);

	var isCallable$5 = isCallable$i;

	var $String$1 = String;
	var $TypeError$6 = TypeError;

	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$5(argument)) return argument;
	  throw $TypeError$6("Can't set " + $String$1(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */

	var uncurryThis$6 = functionUncurryThis;
	var anObject$5 = anObject$8;
	var aPossiblePrototype = aPossiblePrototype$1;

	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	    setter = uncurryThis$6(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject$5(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var isCallable$4 = isCallable$i;
	var isObject$2 = isObject$a;
	var setPrototypeOf$1 = objectSetPrototypeOf;

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    setPrototypeOf$1 &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    isCallable$4(NewTarget = dummy.constructor) &&
	    NewTarget !== Wrapper &&
	    isObject$2(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) setPrototypeOf$1($this, NewTargetPrototype);
	  return $this;
	};

	var uncurryThis$5 = functionUncurryThis;

	// `thisNumberValue` abstract operation
	// https://tc39.es/ecma262/#sec-thisnumbervalue
	var thisNumberValue$1 = uncurryThis$5(1.0.valueOf);

	var classof$3 = classof$5;

	var $String = String;

	var toString$2 = function (argument) {
	  if (classof$3(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String(argument);
	};

	// a string of all valid unicode whitespaces
	var whitespaces$1 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$4 = functionUncurryThis;
	var requireObjectCoercible = requireObjectCoercible$3;
	var toString$1 = toString$2;
	var whitespaces = whitespaces$1;

	var replace$1 = uncurryThis$4(''.replace);
	var whitespace$1 = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace$1 + whitespace$1 + '*');
	var rtrim = RegExp(whitespace$1 + whitespace$1 + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString$1(requireObjectCoercible($this));
	    if (TYPE & 1) string = replace$1(string, ltrim, '');
	    if (TYPE & 2) string = replace$1(string, rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$1(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$1(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$1(3)
	};

	var DESCRIPTORS$1 = descriptors;
	var global$9 = global$j;
	var uncurryThis$3 = functionUncurryThis;
	var isForced$1 = isForced_1;
	var defineBuiltIn$3 = defineBuiltIn$5;
	var hasOwn$2 = hasOwnProperty_1;
	var inheritIfRequired = inheritIfRequired$1;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var isSymbol = isSymbol$3;
	var toPrimitive = toPrimitive$2;
	var fails$1 = fails$d;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$1 = objectDefineProperty.f;
	var thisNumberValue = thisNumberValue$1;
	var trim$1 = stringTrim.trim;

	var NUMBER = 'Number';
	var NativeNumber = global$9[NUMBER];
	var NumberPrototype = NativeNumber.prototype;
	var TypeError$2 = global$9.TypeError;
	var arraySlice$2 = uncurryThis$3(''.slice);
	var charCodeAt = uncurryThis$3(''.charCodeAt);

	// `ToNumeric` abstract operation
	// https://tc39.es/ecma262/#sec-tonumeric
	var toNumeric = function (value) {
	  var primValue = toPrimitive(value, 'number');
	  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
	};

	// `ToNumber` abstract operation
	// https://tc39.es/ecma262/#sec-tonumber
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, 'number');
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (isSymbol(it)) throw TypeError$2('Cannot convert a Symbol value to a number');
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim$1(it);
	    first = charCodeAt(it, 0);
	    if (first === 43 || first === 45) {
	      third = charCodeAt(it, 2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (charCodeAt(it, 1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
	        default: return +it;
	      }
	      digits = arraySlice$2(it, 2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = charCodeAt(digits, index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	// `Number` constructor
	// https://tc39.es/ecma262/#sec-number-constructor
	if (isForced$1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
	  var NumberWrapper = function Number(value) {
	    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
	    var dummy = this;
	    // check on 1..constructor(foo) case
	    return isPrototypeOf$2(NumberPrototype, dummy) && fails$1(function () { thisNumberValue(dummy); })
	      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
	  };
	  for (var keys = DESCRIPTORS$1 ? getOwnPropertyNames(NativeNumber) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
	    // ESNext
	    'fromString,range'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (hasOwn$2(NativeNumber, key = keys[j]) && !hasOwn$2(NumberWrapper, key)) {
	      defineProperty$1(NumberWrapper, key, getOwnPropertyDescriptor$1(NativeNumber, key));
	    }
	  }
	  NumberWrapper.prototype = NumberPrototype;
	  NumberPrototype.constructor = NumberWrapper;
	  defineBuiltIn$3(global$9, NUMBER, NumberWrapper, { constructor: true });
	}

	var uncurryThis$2 = functionUncurryThis;
	var aCallable$5 = aCallable$7;
	var NATIVE_BIND$1 = functionBindNative;

	var bind$5 = uncurryThis$2(uncurryThis$2.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$5(fn);
	  return that === undefined ? fn : NATIVE_BIND$1 ? bind$5(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var bind$4 = functionBindContext;
	var uncurryThis$1 = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toObject = toObject$3;
	var lengthOfArrayLike$1 = lengthOfArrayLike$4;
	var arraySpeciesCreate = arraySpeciesCreate$2;

	var push = uncurryThis$1([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind$4(callbackfn, that);
	    var length = lengthOfArrayLike$1(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod(7)
	};

	var $$6 = _export;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

	// `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$$6({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var css_248z$5 = "form.container {\r\n    border-radius: 0px;\r\n    width: 50%;\r\n    padding: 1em;\r\n}\r\n.form-control {\r\n    width: auto !important;\r\n    margin-bottom: 1em;\r\n}\r\n.department-list {\r\n    margin-bottom: 1em;\r\n}\r\n.date-range {\r\n    display: flex;\r\n    padding: 0em;\r\n}\r\n.date-range .date-to {\r\n    margin-left: 1em;\r\n}\r\n.date-range .form-label {\r\n    margin-right: 0.4em;\r\n}\r\n.empCount {\r\n}\r\n\r\n.btn {\r\n    margin-bottom: 1em;\r\n}";
	styleInject(css_248z$5);

	var classnames = {exports: {}};

	/*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/

	(function (module) {
		/* global define */

		(function () {

			var hasOwn = {}.hasOwnProperty;

			function classNames() {
				var classes = [];

				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;

					var argType = typeof arg;

					if (argType === 'string' || argType === 'number') {
						classes.push(arg);
					} else if (Array.isArray(arg)) {
						if (arg.length) {
							var inner = classNames.apply(null, arg);
							if (inner) {
								classes.push(inner);
							}
						}
					} else if (argType === 'object') {
						if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
							classes.push(arg.toString());
							continue;
						}

						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					}
				}

				return classes.join(' ');
			}

			if (module.exports) {
				classNames.default = classNames;
				module.exports = classNames;
			} else {
				window.classNames = classNames;
			}
		}());
	} (classnames));

	var classNames = classnames.exports;

	function _extends$3() {
	  _extends$3 = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends$3.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose$2(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/** @license React v17.0.2
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var hasRequiredReactJsxRuntime_production_min;

	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	requireObjectAssign();var f=react.exports,g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
		function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	(function (module) {

		{
		  module.exports = requireReactJsxRuntime_production_min();
		}
	} (jsxRuntime));

	const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
	const DEFAULT_MIN_BREAKPOINT = 'xs';
	const ThemeContext$3 = /*#__PURE__*/react.exports.createContext({
	  prefixes: {},
	  breakpoints: DEFAULT_BREAKPOINTS,
	  minBreakpoint: DEFAULT_MIN_BREAKPOINT
	});

	function useBootstrapPrefix(prefix, defaultPrefix) {
	  const {
	    prefixes
	  } = react.exports.useContext(ThemeContext$3);
	  return prefix || prefixes[defaultPrefix] || defaultPrefix;
	}
	function useBootstrapBreakpoints() {
	  const {
	    breakpoints
	  } = react.exports.useContext(ThemeContext$3);
	  return breakpoints;
	}
	function useBootstrapMinBreakpoint() {
	  const {
	    minBreakpoint
	  } = react.exports.useContext(ThemeContext$3);
	  return minBreakpoint;
	}

	var propTypes$2 = {exports: {}};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret_1;
	var hasRequiredReactPropTypesSecret;

	function requireReactPropTypesSecret () {
		if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
		hasRequiredReactPropTypesSecret = 1;

		var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

		ReactPropTypesSecret_1 = ReactPropTypesSecret;
		return ReactPropTypesSecret_1;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var factoryWithThrowingShims;
	var hasRequiredFactoryWithThrowingShims;

	function requireFactoryWithThrowingShims () {
		if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
		hasRequiredFactoryWithThrowingShims = 1;

		var ReactPropTypesSecret = requireReactPropTypesSecret();

		function emptyFunction() {}
		function emptyFunctionWithReset() {}
		emptyFunctionWithReset.resetWarningCache = emptyFunction;

		factoryWithThrowingShims = function() {
		  function shim(props, propName, componentName, location, propFullName, secret) {
		    if (secret === ReactPropTypesSecret) {
		      // It is still safe when called from React.
		      return;
		    }
		    var err = new Error(
		      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
		      'Use PropTypes.checkPropTypes() to call them. ' +
		      'Read more at http://fb.me/use-check-prop-types'
		    );
		    err.name = 'Invariant Violation';
		    throw err;
		  }	  shim.isRequired = shim;
		  function getShim() {
		    return shim;
		  }	  // Important!
		  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
		  var ReactPropTypes = {
		    array: shim,
		    bigint: shim,
		    bool: shim,
		    func: shim,
		    number: shim,
		    object: shim,
		    string: shim,
		    symbol: shim,

		    any: shim,
		    arrayOf: getShim,
		    element: shim,
		    elementType: shim,
		    instanceOf: getShim,
		    node: shim,
		    objectOf: getShim,
		    oneOf: getShim,
		    oneOfType: getShim,
		    shape: getShim,
		    exact: getShim,

		    checkPropTypes: emptyFunctionWithReset,
		    resetWarningCache: emptyFunction
		  };

		  ReactPropTypes.PropTypes = ReactPropTypes;

		  return ReactPropTypes;
		};
		return factoryWithThrowingShims;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes$2.exports = requireFactoryWithThrowingShims()();
	}

	const _excluded$g = ["as", "disabled"];

	function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	function isTrivialHref(href) {
	  return !href || href.trim() === '#';
	}
	function useButtonProps({
	  tagName,
	  disabled,
	  href,
	  target,
	  rel,
	  role,
	  onClick,
	  tabIndex = 0,
	  type
	}) {
	  if (!tagName) {
	    if (href != null || target != null || rel != null) {
	      tagName = 'a';
	    } else {
	      tagName = 'button';
	    }
	  }

	  const meta = {
	    tagName
	  };

	  if (tagName === 'button') {
	    return [{
	      type: type || 'button',
	      disabled
	    }, meta];
	  }

	  const handleClick = event => {
	    if (disabled || tagName === 'a' && isTrivialHref(href)) {
	      event.preventDefault();
	    }

	    if (disabled) {
	      event.stopPropagation();
	      return;
	    }

	    onClick == null ? void 0 : onClick(event);
	  };

	  const handleKeyDown = event => {
	    if (event.key === ' ') {
	      event.preventDefault();
	      handleClick(event);
	    }
	  };

	  if (tagName === 'a') {
	    // Ensure there's a href so Enter can trigger anchor button.
	    href || (href = '#');

	    if (disabled) {
	      href = undefined;
	    }
	  }

	  return [{
	    role: role != null ? role : 'button',
	    // explicitly undefined so that it overrides the props disabled in a spread
	    // e.g. <Tag {...props} {...hookProps} />
	    disabled: undefined,
	    tabIndex: disabled ? undefined : tabIndex,
	    href,
	    target: tagName === 'a' ? target : undefined,
	    'aria-disabled': !disabled ? undefined : disabled,
	    rel: tagName === 'a' ? rel : undefined,
	    onClick: handleClick,
	    onKeyDown: handleKeyDown
	  }, meta];
	}
	const Button$2 = /*#__PURE__*/react.exports.forwardRef((_ref, ref) => {
	  let {
	    as: asProp,
	    disabled
	  } = _ref,
	      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$g);

	  const [buttonProps, {
	    tagName: Component
	  }] = useButtonProps(Object.assign({
	    tagName: asProp,
	    disabled
	  }, props));
	  return /*#__PURE__*/jsxRuntime.exports.jsx(Component, Object.assign({}, props, buttonProps, {
	    ref: ref
	  }));
	});
	Button$2.displayName = 'Button';

	var rHyphen = /-(.)/g;
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}

	const pascalCase = str => str[0].toUpperCase() + camelize(str).slice(1);

	// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
	function createWithBsPrefix(prefix, {
	  displayName = pascalCase(prefix),
	  Component,
	  defaultProps
	} = {}) {
	  const BsComponent = /*#__PURE__*/react.exports.forwardRef(({
	    className,
	    bsPrefix,
	    as: Tag = Component || 'div',
	    ...props
	  }, ref) => {
	    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
	    return /*#__PURE__*/jsxRuntime.exports.jsx(Tag, {
	      ref: ref,
	      className: classNames(className, resolvedPrefix),
	      ...props
	    });
	  });
	  BsComponent.defaultProps = defaultProps;
	  BsComponent.displayName = displayName;
	  return BsComponent;
	}

	const defaultProps$1 = {
	  variant: 'primary',
	  active: false,
	  disabled: false
	};
	const Button = /*#__PURE__*/react.exports.forwardRef(({
	  as,
	  bsPrefix,
	  variant,
	  size,
	  active,
	  className,
	  ...props
	}, ref) => {
	  const prefix = useBootstrapPrefix(bsPrefix, 'btn');
	  const [buttonProps, {
	    tagName
	  }] = useButtonProps({
	    tagName: as,
	    ...props
	  });
	  const Component = tagName;
	  return /*#__PURE__*/jsxRuntime.exports.jsx(Component, { ...buttonProps,
	    ...props,
	    ref: ref,
	    className: classNames(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
	  });
	});
	Button.displayName = 'Button';
	Button.defaultProps = defaultProps$1;
	var Button$1 = Button;

	/**
	 * Finds whether a component's `children` prop includes a React element of the
	 * specified type.
	 */


	function hasChildOfType(children, type) {
	  return react.exports.Children.toArray(children).some(child => /*#__PURE__*/react.exports.isValidElement(child) && child.type === type);
	}

	function useCol({
	  as,
	  bsPrefix,
	  className,
	  ...props
	}) {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'col');
	  const breakpoints = useBootstrapBreakpoints();
	  const minBreakpoint = useBootstrapMinBreakpoint();
	  const spans = [];
	  const classes = [];
	  breakpoints.forEach(brkPoint => {
	    const propValue = props[brkPoint];
	    delete props[brkPoint];
	    let span;
	    let offset;
	    let order;

	    if (typeof propValue === 'object' && propValue != null) {
	      ({
	        span,
	        offset,
	        order
	      } = propValue);
	    } else {
	      span = propValue;
	    }

	    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : '';
	    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
	    if (order != null) classes.push(`order${infix}-${order}`);
	    if (offset != null) classes.push(`offset${infix}-${offset}`);
	  });
	  return [{ ...props,
	    className: classNames(className, ...spans, ...classes)
	  }, {
	    as,
	    bsPrefix,
	    spans
	  }];
	}
	const Col = /*#__PURE__*/react.exports.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	(props, ref) => {
	  const [{
	    className,
	    ...colProps
	  }, {
	    as: Component = 'div',
	    bsPrefix,
	    spans
	  }] = useCol(props);
	  return /*#__PURE__*/jsxRuntime.exports.jsx(Component, { ...colProps,
	    ref: ref,
	    className: classNames(className, !spans.length && bsPrefix)
	  });
	});
	Col.displayName = 'Col';
	var Col$1 = Col;

	const propTypes$1 = {
	  /**
	   * Specify whether the feedback is for valid or invalid fields
	   *
	   * @type {('valid'|'invalid')}
	   */
	  type: propTypes$2.exports.string,

	  /** Display feedback as a tooltip. */
	  tooltip: propTypes$2.exports.bool,
	  as: propTypes$2.exports.elementType
	};
	const Feedback = /*#__PURE__*/react.exports.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	({
	  as: Component = 'div',
	  className,
	  type = 'valid',
	  tooltip = false,
	  ...props
	}, ref) => /*#__PURE__*/jsxRuntime.exports.jsx(Component, { ...props,
	  ref: ref,
	  className: classNames(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
	}));
	Feedback.displayName = 'Feedback';
	Feedback.propTypes = propTypes$1;
	var Feedback$1 = Feedback;

	const FormContext = /*#__PURE__*/react.exports.createContext({});
	var FormContext$1 = FormContext;

	const FormCheckInput = /*#__PURE__*/react.exports.forwardRef(({
	  id,
	  bsPrefix,
	  className,
	  type = 'checkbox',
	  isValid = false,
	  isInvalid = false,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'input',
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = react.exports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-input');
	  return /*#__PURE__*/jsxRuntime.exports.jsx(Component, { ...props,
	    ref: ref,
	    type: type,
	    id: id || controlId,
	    className: classNames(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
	  });
	});
	FormCheckInput.displayName = 'FormCheckInput';
	var FormCheckInput$1 = FormCheckInput;

	const FormCheckLabel = /*#__PURE__*/react.exports.forwardRef(({
	  bsPrefix,
	  className,
	  htmlFor,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = react.exports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check-label');
	  return /*#__PURE__*/jsxRuntime.exports.jsx("label", { ...props,
	    ref: ref,
	    htmlFor: htmlFor || controlId,
	    className: classNames(className, bsPrefix)
	  });
	});
	FormCheckLabel.displayName = 'FormCheckLabel';
	var FormCheckLabel$1 = FormCheckLabel;

	const FormCheck = /*#__PURE__*/react.exports.forwardRef(({
	  id,
	  bsPrefix,
	  bsSwitchPrefix,
	  inline = false,
	  reverse = false,
	  disabled = false,
	  isValid = false,
	  isInvalid = false,
	  feedbackTooltip = false,
	  feedback,
	  feedbackType,
	  className,
	  style,
	  title = '',
	  type = 'checkbox',
	  label,
	  children,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as = 'input',
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-check');
	  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, 'form-switch');
	  const {
	    controlId
	  } = react.exports.useContext(FormContext$1);
	  const innerFormContext = react.exports.useMemo(() => ({
	    controlId: id || controlId
	  }), [controlId, id]);
	  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel$1);

	  const input = /*#__PURE__*/jsxRuntime.exports.jsx(FormCheckInput$1, { ...props,
	    type: type === 'switch' ? 'checkbox' : type,
	    ref: ref,
	    isValid: isValid,
	    isInvalid: isInvalid,
	    disabled: disabled,
	    as: as
	  });

	  return /*#__PURE__*/jsxRuntime.exports.jsx(FormContext$1.Provider, {
	    value: innerFormContext,
	    children: /*#__PURE__*/jsxRuntime.exports.jsx("div", {
	      style: style,
	      className: classNames(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
	      children: children || /*#__PURE__*/jsxRuntime.exports.jsxs(jsxRuntime.exports.Fragment, {
	        children: [input, hasLabel && /*#__PURE__*/jsxRuntime.exports.jsx(FormCheckLabel$1, {
	          title: title,
	          children: label
	        }), feedback && /*#__PURE__*/jsxRuntime.exports.jsx(Feedback$1, {
	          type: feedbackType,
	          tooltip: feedbackTooltip,
	          children: feedback
	        })]
	      })
	    })
	  });
	});
	FormCheck.displayName = 'FormCheck';
	var FormCheck$1 = Object.assign(FormCheck, {
	  Input: FormCheckInput$1,
	  Label: FormCheckLabel$1
	});

	const FormControl = /*#__PURE__*/react.exports.forwardRef(({
	  bsPrefix,
	  type,
	  size,
	  htmlSize,
	  id,
	  className,
	  isValid = false,
	  isInvalid = false,
	  plaintext,
	  readOnly,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'input',
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = react.exports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-control');
	  let classes;

	  if (plaintext) {
	    classes = {
	      [`${bsPrefix}-plaintext`]: true
	    };
	  } else {
	    classes = {
	      [bsPrefix]: true,
	      [`${bsPrefix}-${size}`]: size
	    };
	  }
	  return /*#__PURE__*/jsxRuntime.exports.jsx(Component, { ...props,
	    type: type,
	    size: htmlSize,
	    ref: ref,
	    readOnly: readOnly,
	    id: id || controlId,
	    className: classNames(className, classes, isValid && `is-valid`, isInvalid && `is-invalid`, type === 'color' && `${bsPrefix}-color`)
	  });
	});
	FormControl.displayName = 'FormControl';
	var FormControl$1 = Object.assign(FormControl, {
	  Feedback: Feedback$1
	});

	var FormFloating = createWithBsPrefix('form-floating');

	const FormGroup = /*#__PURE__*/react.exports.forwardRef(({
	  controlId,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'div',
	  ...props
	}, ref) => {
	  const context = react.exports.useMemo(() => ({
	    controlId
	  }), [controlId]);
	  return /*#__PURE__*/jsxRuntime.exports.jsx(FormContext$1.Provider, {
	    value: context,
	    children: /*#__PURE__*/jsxRuntime.exports.jsx(Component, { ...props,
	      ref: ref
	    })
	  });
	});
	FormGroup.displayName = 'FormGroup';
	var FormGroup$1 = FormGroup;

	const defaultProps = {
	  column: false,
	  visuallyHidden: false
	};
	const FormLabel = /*#__PURE__*/react.exports.forwardRef(({
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'label',
	  bsPrefix,
	  column,
	  visuallyHidden,
	  className,
	  htmlFor,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = react.exports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-label');
	  let columnClass = 'col-form-label';
	  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
	  const classes = classNames(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
	  htmlFor = htmlFor || controlId;
	  if (column) return /*#__PURE__*/jsxRuntime.exports.jsx(Col$1, {
	    ref: ref,
	    as: "label",
	    className: classes,
	    htmlFor: htmlFor,
	    ...props
	  });
	  return (
	    /*#__PURE__*/
	    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
	    jsxRuntime.exports.jsx(Component, {
	      ref: ref,
	      className: classes,
	      htmlFor: htmlFor,
	      ...props
	    })
	  );
	});
	FormLabel.displayName = 'FormLabel';
	FormLabel.defaultProps = defaultProps;
	var FormLabel$1 = FormLabel;

	const FormRange = /*#__PURE__*/react.exports.forwardRef(({
	  bsPrefix,
	  className,
	  id,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = react.exports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-range');
	  return /*#__PURE__*/jsxRuntime.exports.jsx("input", { ...props,
	    type: "range",
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    id: id || controlId
	  });
	});
	FormRange.displayName = 'FormRange';
	var FormRange$1 = FormRange;

	const FormSelect = /*#__PURE__*/react.exports.forwardRef(({
	  bsPrefix,
	  size,
	  htmlSize,
	  className,
	  isValid = false,
	  isInvalid = false,
	  id,
	  ...props
	}, ref) => {
	  const {
	    controlId
	  } = react.exports.useContext(FormContext$1);
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-select');
	  return /*#__PURE__*/jsxRuntime.exports.jsx("select", { ...props,
	    size: htmlSize,
	    ref: ref,
	    className: classNames(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
	    id: id || controlId
	  });
	});
	FormSelect.displayName = 'FormSelect';
	var FormSelect$1 = FormSelect;

	const FormText = /*#__PURE__*/react.exports.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	({
	  bsPrefix,
	  className,
	  as: Component = 'small',
	  muted,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
	  return /*#__PURE__*/jsxRuntime.exports.jsx(Component, { ...props,
	    ref: ref,
	    className: classNames(className, bsPrefix, muted && 'text-muted')
	  });
	});
	FormText.displayName = 'FormText';
	var FormText$1 = FormText;

	const Switch = /*#__PURE__*/react.exports.forwardRef((props, ref) => /*#__PURE__*/jsxRuntime.exports.jsx(FormCheck$1, { ...props,
	  ref: ref,
	  type: "switch"
	}));
	Switch.displayName = 'Switch';
	var Switch$1 = Object.assign(Switch, {
	  Input: FormCheck$1.Input,
	  Label: FormCheck$1.Label
	});

	const FloatingLabel = /*#__PURE__*/react.exports.forwardRef(({
	  bsPrefix,
	  className,
	  children,
	  controlId,
	  label,
	  ...props
	}, ref) => {
	  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-floating');
	  return /*#__PURE__*/jsxRuntime.exports.jsxs(FormGroup$1, {
	    ref: ref,
	    className: classNames(className, bsPrefix),
	    controlId: controlId,
	    ...props,
	    children: [children, /*#__PURE__*/jsxRuntime.exports.jsx("label", {
	      htmlFor: controlId,
	      children: label
	    })]
	  });
	});
	FloatingLabel.displayName = 'FloatingLabel';
	var FloatingLabel$1 = FloatingLabel;

	const propTypes = {
	  /**
	   * The Form `ref` will be forwarded to the underlying element,
	   * which means, unless it's rendered `as` a composite component,
	   * it will be a DOM node, when resolved.
	   *
	   * @type {ReactRef}
	   * @alias ref
	   */
	  _ref: propTypes$2.exports.any,

	  /**
	   * Mark a form as having been validated. Setting it to `true` will
	   * toggle any validation styles on the forms elements.
	   */
	  validated: propTypes$2.exports.bool,
	  as: propTypes$2.exports.elementType
	};
	const Form = /*#__PURE__*/react.exports.forwardRef(({
	  className,
	  validated,
	  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
	  as: Component = 'form',
	  ...props
	}, ref) => /*#__PURE__*/jsxRuntime.exports.jsx(Component, { ...props,
	  ref: ref,
	  className: classNames(className, validated && 'was-validated')
	}));
	Form.displayName = 'Form';
	Form.propTypes = propTypes;
	var Form$1 = Object.assign(Form, {
	  Group: FormGroup$1,
	  Control: FormControl$1,
	  Floating: FormFloating,
	  Check: FormCheck$1,
	  Switch: Switch$1,
	  Label: FormLabel$1,
	  Text: FormText$1,
	  Range: FormRange$1,
	  Select: FormSelect$1,
	  FloatingLabel: FloatingLabel$1
	});

	var css_248z$4 = ".container {\r\n  text-align: center;\r\n}\r\n.toggle-switch {\r\n  position: relative;\r\n  width: 75px;\r\n  display: inline-block;\r\n  text-align: left;\r\n  top: 8px;\r\n}\r\n.checkbox {\r\n  display: none;\r\n}\r\n.label {\r\n  display: block;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  border: 0 solid #bbb;\r\n  border-radius: 20px;\r\n}\r\n.inner {\r\n  display: block;\r\n  width: 200%;\r\n  margin-left: -100%;\r\n  transition: margin 0.3s ease-in 0s;\r\n}\r\n.inner:before,\r\n.inner:after {\r\n  float: left;\r\n  width: 50%;\r\n  height: 36px;\r\n  padding: 0;\r\n  line-height: 36px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  box-sizing: border-box;\r\n}\r\n.inner:before {\r\n  content: \"YES\";\r\n  padding-left: 10px;\r\n  background-color: #060;\r\n  color: #fff;\r\n}\r\n.inner:after {\r\n  content: \"NO\";\r\n  padding-right: 10px;\r\n  background-color: #bbb;\r\n  color: #fff;\r\n  text-align: right;\r\n}\r\n.switch {\r\n  display: block;\r\n  width: 24px;\r\n  margin: 5px;\r\n  background: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 40px;\r\n  border: 0 solid #bbb;\r\n  border-radius: 20px;\r\n  transition: all 0.3s ease-in 0s;\r\n}\r\n.checkbox:checked + .label .inner {\r\n  margin-left: 0;\r\n}\r\n.checkbox:checked + .label .switch {\r\n  right: 0px;\r\n}";
	styleInject(css_248z$4);

	var Allocation = /*#__PURE__*/function (_React$Component) {
	  _inherits(Allocation, _React$Component);

	  var _super = _createSuper(Allocation);

	  function Allocation() {
	    var _this;

	    _classCallCheck(this, Allocation);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "state", {
	      user: _this.props.response.username,
	      role: _this.props.response.role,
	      employees: _this.props.response.response.emp,
	      seats: Number((_this.props.response.response.emp * 0.65).toFixed(0)),
	      departmentlist: _this.props.response.response.departments,
	      subDepartmentlist: _this.props.response.response.subDepartments,
	      officelist: _this.props.response.office
	    });

	    return _this;
	  }

	  _createClass(Allocation, [{
	    key: "render",
	    value: function render() {
	      console.log("test1:" + JSON.stringify(this.state.role));
	      var today = new Date();
	      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form$1, {
	        className: "container"
	      }, /*#__PURE__*/React.createElement(Form$1.Label, null, "Select department"), /*#__PURE__*/React.createElement(Form$1.Select, {
	        className: "department-list",
	        "aria-label": "Default select example"
	      }, /*#__PURE__*/React.createElement("option", null, "Select Department"), this.state.departmentlist.map(function (value) {
	        return /*#__PURE__*/React.createElement("option", {
	          value: value
	        }, value);
	      })), this.state.role === "manager" && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Form$1.Label, null, "Select sub-department"), /*#__PURE__*/React.createElement(Form$1.Select, {
	        className: "department-list",
	        "aria-label": "Default select example"
	      }, /*#__PURE__*/React.createElement("option", null, "Select sub-department"), this.state.subDepartmentlist.map(function (value) {
	        return /*#__PURE__*/React.createElement("option", {
	          value: value
	        }, value);
	      }))), /*#__PURE__*/React.createElement(Form$1.Label, null, "Office"), /*#__PURE__*/React.createElement(Form$1.Select, {
	        className: "department-list",
	        "aria-label": "Default select example"
	      }, /*#__PURE__*/React.createElement("option", null, "Select Office"), this.state.officelist.map(function (value) {
	        return /*#__PURE__*/React.createElement("option", {
	          value: value
	        }, value);
	      })), /*#__PURE__*/React.createElement(Form$1.Label, null, "Employee count"), /*#__PURE__*/React.createElement(Form$1.Control, {
	        type: "name",
	        placeholder: "",
	        value: this.state.employees,
	        className: "empCount",
	        disabled: true
	      }), /*#__PURE__*/React.createElement(Form$1.Label, null, "Allocate seats"), /*#__PURE__*/React.createElement(Form$1.Control, {
	        type: "number",
	        placeholder: "",
	        value: this.state.seats,
	        className: "empCount"
	      }), /*#__PURE__*/React.createElement("div", {
	        className: "date-range"
	      }, /*#__PURE__*/React.createElement(Form$1.Label, null, "Date from"), /*#__PURE__*/React.createElement(Form$1.Control, {
	        type: "date",
	        placeholder: "",
	        minValue: today
	      }), /*#__PURE__*/React.createElement(Form$1.Label, {
	        className: "date-to"
	      }, "Date to"), /*#__PURE__*/React.createElement(Form$1.Control, {
	        type: "date",
	        placeholder: ""
	      })), /*#__PURE__*/React.createElement(Button$1, {
	        className: "btn",
	        variant: "primary",
	        type: "submit"
	      }, "Submit")));
	    }
	  }]);

	  return Allocation;
	}(React.Component);

	var css_248z$3 = "form.container {\r\n    border-radius: 0px;\r\n    width: 50%;\r\n    padding: 1em;\r\n    text-align: left;\r\n}\r\n.form-control {\r\n    width: auto !important;\r\n    margin-bottom: 1em;\r\n}\r\n.department-list {\r\n    margin-bottom: 1em;\r\n}\r\n.date-range {\r\n    display: flex;\r\n    padding: 0em;\r\n}\r\n.date-range .date-to {\r\n    margin-left: 1em;\r\n}\r\n.date-range .form-label {\r\n    margin-right: 0.4em;\r\n}\r\n.empCount {\r\n}\r\n\r\n.btn {\r\n    margin-bottom: 1em;\r\n}";
	styleInject(css_248z$3);

	function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

	function isPlainObject(item) {
	  return item !== null && typeof item === 'object' && item.constructor === Object;
	}
	function deepmerge(target, source, options = {
	  clone: true
	}) {
	  const output = options.clone ? _extends$3({}, target) : target;

	  if (isPlainObject(target) && isPlainObject(source)) {
	    Object.keys(source).forEach(key => {
	      // Avoid prototype pollution
	      if (key === '__proto__') {
	        return;
	      }

	      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
	        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
	        output[key] = deepmerge(target[key], source[key], options);
	      } else {
	        output[key] = source[key];
	      }
	    });
	  }

	  return output;
	}

	/**
	 * WARNING: Don't import this directly.
	 * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
	 * @param {number} code
	 */
	function formatMuiErrorMessage(code) {
	  // Apply babel-plugin-transform-template-literals in loose mode
	  // loose mode is safe iff we're concatenating primitives
	  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

	  /* eslint-disable prefer-template */
	  let url = 'https://mui.com/production-error/?code=' + code;

	  for (let i = 1; i < arguments.length; i += 1) {
	    // rest params over-transpile for this case
	    // eslint-disable-next-line prefer-rest-params
	    url += '&args[]=' + encodeURIComponent(arguments[i]);
	  }

	  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
	  /* eslint-enable prefer-template */
	}

	// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
	//
	// A strict capitalization should uppercase the first letter of each word in the sentence.
	// We only handle the first word.
	function capitalize(string) {
	  if (typeof string !== 'string') {
	    throw new Error(formatMuiErrorMessage(7));
	  }

	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	/**
	 * Add keys, values of `defaultProps` that does not exist in `props`
	 * @param {object} defaultProps
	 * @param {object} props
	 * @returns {object} resolved props
	 */
	function resolveProps(defaultProps, props) {
	  const output = _extends$3({}, props);

	  Object.keys(defaultProps).forEach(propName => {
	    if (output[propName] === undefined) {
	      output[propName] = defaultProps[propName];
	    }
	  });
	  return output;
	}

	function composeClasses(slots, getUtilityClass, classes) {
	  const output = {};
	  Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
	  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
	  slot => {
	    output[slot] = slots[slot].reduce((acc, key) => {
	      if (key) {
	        acc.push(getUtilityClass(key));

	        if (classes && classes[key]) {
	          acc.push(classes[key]);
	        }
	      }

	      return acc;
	    }, []).join(' ');
	  });
	  return output;
	}

	const defaultGenerator = componentName => componentName;

	const createClassNameGenerator = () => {
	  let generate = defaultGenerator;
	  return {
	    configure(generator) {
	      generate = generator;
	    },

	    generate(componentName) {
	      return generate(componentName);
	    },

	    reset() {
	      generate = defaultGenerator;
	    }

	  };
	};

	const ClassNameGenerator = createClassNameGenerator();
	var ClassNameGenerator$1 = ClassNameGenerator;

	const globalStateClassesMapping = {
	  active: 'active',
	  checked: 'checked',
	  completed: 'completed',
	  disabled: 'disabled',
	  error: 'error',
	  expanded: 'expanded',
	  focused: 'focused',
	  focusVisible: 'focusVisible',
	  required: 'required',
	  selected: 'selected'
	};
	function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
	  const globalStateClass = globalStateClassesMapping[slot];
	  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator$1.generate(componentName)}-${slot}`;
	}

	function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
	  const result = {};
	  slots.forEach(slot => {
	    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
	  });
	  return result;
	}

	/**
	 * @ignore - internal component.
	 */

	const TableContext = /*#__PURE__*/react.exports.createContext();

	var TableContext$1 = TableContext;

	function memoize$1(fn) {
	  var cache = Object.create(null);
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

	var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  /* o */
	  && prop.charCodeAt(1) === 110
	  /* n */
	  && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */
	);

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);

	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }

	  tag.appendChild(document.createTextNode(''));
	  tag.setAttribute('data-s', '');
	  return tag;
	}

	var StyleSheet = /*#__PURE__*/function () {
	  // Using Node instead of HTMLElement since container may be a ShadowRoot
	  function StyleSheet(options) {
	    var _this = this;

	    this._insertTag = function (tag) {
	      var before;

	      if (_this.tags.length === 0) {
	        if (_this.insertionPoint) {
	          before = _this.insertionPoint.nextSibling;
	        } else if (_this.prepend) {
	          before = _this.container.firstChild;
	        } else {
	          before = _this.before;
	        }
	      } else {
	        before = _this.tags[_this.tags.length - 1].nextSibling;
	      }

	      _this.container.insertBefore(tag, before);

	      _this.tags.push(tag);
	    };

	    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.prepend = options.prepend;
	    this.insertionPoint = options.insertionPoint;
	    this.before = null;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.hydrate = function hydrate(nodes) {
	    nodes.forEach(this._insertTag);
	  };

	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      this._insertTag(createStyleElement(this));
	    }

	    var tag = this.tags[this.tags.length - 1];

	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);

	      try {
	        // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }

	    this.ctr++;
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode && tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };

	  return StyleSheet;
	}();

	var MS = '-ms-';
	var MOZ = '-moz-';
	var WEBKIT = '-webkit-';

	var COMMENT = 'comm';
	var RULESET = 'rule';
	var DECLARATION = 'decl';
	var IMPORT = '@import';
	var KEYFRAMES = '@keyframes';

	/**
	 * @param {number}
	 * @return {number}
	 */
	var abs = Math.abs;

	/**
	 * @param {number}
	 * @return {string}
	 */
	var from = String.fromCharCode;

	/**
	 * @param {object}
	 * @return {object}
	 */
	var assign = Object.assign;

	/**
	 * @param {string} value
	 * @param {number} length
	 * @return {number}
	 */
	function hash (value, length) {
		return (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3)
	}

	/**
	 * @param {string} value
	 * @return {string}
	 */
	function trim (value) {
		return value.trim()
	}

	/**
	 * @param {string} value
	 * @param {RegExp} pattern
	 * @return {string?}
	 */
	function match (value, pattern) {
		return (value = pattern.exec(value)) ? value[0] : value
	}

	/**
	 * @param {string} value
	 * @param {(string|RegExp)} pattern
	 * @param {string} replacement
	 * @return {string}
	 */
	function replace (value, pattern, replacement) {
		return value.replace(pattern, replacement)
	}

	/**
	 * @param {string} value
	 * @param {string} search
	 * @return {number}
	 */
	function indexof (value, search) {
		return value.indexOf(search)
	}

	/**
	 * @param {string} value
	 * @param {number} index
	 * @return {number}
	 */
	function charat (value, index) {
		return value.charCodeAt(index) | 0
	}

	/**
	 * @param {string} value
	 * @param {number} begin
	 * @param {number} end
	 * @return {string}
	 */
	function substr (value, begin, end) {
		return value.slice(begin, end)
	}

	/**
	 * @param {string} value
	 * @return {number}
	 */
	function strlen (value) {
		return value.length
	}

	/**
	 * @param {any[]} value
	 * @return {number}
	 */
	function sizeof (value) {
		return value.length
	}

	/**
	 * @param {any} value
	 * @param {any[]} array
	 * @return {any}
	 */
	function append (value, array) {
		return array.push(value), value
	}

	/**
	 * @param {string[]} array
	 * @param {function} callback
	 * @return {string}
	 */
	function combine (array, callback) {
		return array.map(callback).join('')
	}

	var line = 1;
	var column = 1;
	var length = 0;
	var position$1 = 0;
	var character = 0;
	var characters = '';

	/**
	 * @param {string} value
	 * @param {object | null} root
	 * @param {object | null} parent
	 * @param {string} type
	 * @param {string[] | string} props
	 * @param {object[] | string} children
	 * @param {number} length
	 */
	function node$1 (value, root, parent, type, props, children, length) {
		return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
	}

	/**
	 * @param {object} root
	 * @param {object} props
	 * @return {object}
	 */
	function copy (root, props) {
		return assign(node$1('', null, null, '', null, null, 0), root, {length: -root.length}, props)
	}

	/**
	 * @return {number}
	 */
	function char () {
		return character
	}

	/**
	 * @return {number}
	 */
	function prev () {
		character = position$1 > 0 ? charat(characters, --position$1) : 0;

		if (column--, character === 10)
			column = 1, line--;

		return character
	}

	/**
	 * @return {number}
	 */
	function next () {
		character = position$1 < length ? charat(characters, position$1++) : 0;

		if (column++, character === 10)
			column = 1, line++;

		return character
	}

	/**
	 * @return {number}
	 */
	function peek () {
		return charat(characters, position$1)
	}

	/**
	 * @return {number}
	 */
	function caret () {
		return position$1
	}

	/**
	 * @param {number} begin
	 * @param {number} end
	 * @return {string}
	 */
	function slice (begin, end) {
		return substr(characters, begin, end)
	}

	/**
	 * @param {number} type
	 * @return {number}
	 */
	function token (type) {
		switch (type) {
			// \0 \t \n \r \s whitespace token
			case 0: case 9: case 10: case 13: case 32:
				return 5
			// ! + , / > @ ~ isolate token
			case 33: case 43: case 44: case 47: case 62: case 64: case 126:
			// ; { } breakpoint token
			case 59: case 123: case 125:
				return 4
			// : accompanied token
			case 58:
				return 3
			// " ' ( [ opening delimit token
			case 34: case 39: case 40: case 91:
				return 2
			// ) ] closing delimit token
			case 41: case 93:
				return 1
		}

		return 0
	}

	/**
	 * @param {string} value
	 * @return {any[]}
	 */
	function alloc (value) {
		return line = column = 1, length = strlen(characters = value), position$1 = 0, []
	}

	/**
	 * @param {any} value
	 * @return {any}
	 */
	function dealloc (value) {
		return characters = '', value
	}

	/**
	 * @param {number} type
	 * @return {string}
	 */
	function delimit (type) {
		return trim(slice(position$1 - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
	}

	/**
	 * @param {number} type
	 * @return {string}
	 */
	function whitespace (type) {
		while (character = peek())
			if (character < 33)
				next();
			else
				break

		return token(type) > 2 || token(character) > 3 ? '' : ' '
	}

	/**
	 * @param {number} index
	 * @param {number} count
	 * @return {string}
	 */
	function escaping (index, count) {
		while (--count && next())
			// not 0-9 A-F a-f
			if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
				break

		return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
	}

	/**
	 * @param {number} type
	 * @return {number}
	 */
	function delimiter (type) {
		while (next())
			switch (character) {
				// ] ) " '
				case type:
					return position$1
				// " '
				case 34: case 39:
					if (type !== 34 && type !== 39)
						delimiter(character);
					break
				// (
				case 40:
					if (type === 41)
						delimiter(type);
					break
				// \
				case 92:
					next();
					break
			}

		return position$1
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @return {number}
	 */
	function commenter (type, index) {
		while (next())
			// //
			if (type + character === 47 + 10)
				break
			// /*
			else if (type + character === 42 + 42 && peek() === 47)
				break

		return '/*' + slice(index, position$1 - 1) + '*' + from(type === 47 ? type : next())
	}

	/**
	 * @param {number} index
	 * @return {string}
	 */
	function identifier (index) {
		while (!token(peek()))
			next();

		return slice(index, position$1)
	}

	/**
	 * @param {string} value
	 * @return {object[]}
	 */
	function compile (value) {
		return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {string[]} rule
	 * @param {string[]} rules
	 * @param {string[]} rulesets
	 * @param {number[]} pseudo
	 * @param {number[]} points
	 * @param {string[]} declarations
	 * @return {object}
	 */
	function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
		var index = 0;
		var offset = 0;
		var length = pseudo;
		var atrule = 0;
		var property = 0;
		var previous = 0;
		var variable = 1;
		var scanning = 1;
		var ampersand = 1;
		var character = 0;
		var type = '';
		var props = rules;
		var children = rulesets;
		var reference = rule;
		var characters = type;

		while (scanning)
			switch (previous = character, character = next()) {
				// (
				case 40:
					if (previous != 108 && characters.charCodeAt(length - 1) == 58) {
						if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
							ampersand = -1;
						break
					}
				// " ' [
				case 34: case 39: case 91:
					characters += delimit(character);
					break
				// \t \n \r \s
				case 9: case 10: case 13: case 32:
					characters += whitespace(previous);
					break
				// \
				case 92:
					characters += escaping(caret() - 1, 7);
					continue
				// /
				case 47:
					switch (peek()) {
						case 42: case 47:
							append(comment(commenter(next(), caret()), root, parent), declarations);
							break
						default:
							characters += '/';
					}
					break
				// {
				case 123 * variable:
					points[index++] = strlen(characters) * ampersand;
				// } ; \0
				case 125 * variable: case 59: case 0:
					switch (character) {
						// \0 }
						case 0: case 125: scanning = 0;
						// ;
						case 59 + offset:
							if (property > 0 && (strlen(characters) - length))
								append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
							break
						// @ ;
						case 59: characters += ';';
						// { rule/at-rule
						default:
							append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

							if (character === 123)
								if (offset === 0)
									parse(characters, root, reference, reference, props, rulesets, length, points, children);
								else
									switch (atrule) {
										// d m s
										case 100: case 109: case 115:
											parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
											break
										default:
											parse(characters, reference, reference, reference, [''], children, 0, points, children);
									}
					}

					index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
					break
				// :
				case 58:
					length = 1 + strlen(characters), property = previous;
				default:
					if (variable < 1)
						if (character == 123)
							--variable;
						else if (character == 125 && variable++ == 0 && prev() == 125)
							continue

					switch (characters += from(character), character * variable) {
						// &
						case 38:
							ampersand = offset > 0 ? 1 : (characters += '\f', -1);
							break
						// ,
						case 44:
							points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
							break
						// @
						case 64:
							// -
							if (peek() === 45)
								characters += delimit(next());

							atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
							break
						// -
						case 45:
							if (previous === 45 && strlen(characters) == 2)
								variable = 0;
					}
			}

		return rulesets
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {number} index
	 * @param {number} offset
	 * @param {string[]} rules
	 * @param {number[]} points
	 * @param {string} type
	 * @param {string[]} props
	 * @param {string[]} children
	 * @param {number} length
	 * @return {object}
	 */
	function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
		var post = offset - 1;
		var rule = offset === 0 ? rules : [''];
		var size = sizeof(rule);

		for (var i = 0, j = 0, k = 0; i < index; ++i)
			for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
				if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
					props[k++] = z;

		return node$1(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
	}

	/**
	 * @param {number} value
	 * @param {object} root
	 * @param {object?} parent
	 * @return {object}
	 */
	function comment (value, root, parent) {
		return node$1(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {number} length
	 * @return {object}
	 */
	function declaration (value, root, parent, length) {
		return node$1(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
	}

	/**
	 * @param {string} value
	 * @param {number} length
	 * @return {string}
	 */
	function prefix (value, length) {
		switch (hash(value, length)) {
			// color-adjust
			case 5103:
				return WEBKIT + 'print-' + value + value
			// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
			case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
			// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
			case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
			// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
			case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
			// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
			case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
				return WEBKIT + value + value
			// appearance, user-select, transform, hyphens, text-size-adjust
			case 5349: case 4246: case 4810: case 6968: case 2756:
				return WEBKIT + value + MOZ + value + MS + value + value
			// flex, flex-direction
			case 6828: case 4268:
				return WEBKIT + value + MS + value + value
			// order
			case 6165:
				return WEBKIT + value + MS + 'flex-' + value + value
			// align-items
			case 5187:
				return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
			// align-self
			case 5443:
				return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value
			// align-content
			case 4675:
				return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value
			// flex-shrink
			case 5548:
				return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
			// flex-basis
			case 5292:
				return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
			// flex-grow
			case 6060:
				return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
			// transition
			case 4554:
				return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
			// cursor
			case 6187:
				return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
			// background, background-image
			case 5495: case 3959:
				return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
			// justify-content
			case 4968:
				return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value
			// (margin|padding)-inline-(start|end)
			case 4095: case 3583: case 4068: case 2532:
				return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
			// (min|max)?(width|height|inline-size|block-size)
			case 8116: case 7059: case 5753: case 5535:
			case 5445: case 5701: case 4933: case 4677:
			case 5533: case 5789: case 5021: case 4765:
				// stretch, max-content, min-content, fill-available
				if (strlen(value) - 1 - length > 6)
					switch (charat(value, length + 1)) {
						// (m)ax-content, (m)in-content
						case 109:
							// -
							if (charat(value, length + 4) !== 45)
								break
						// (f)ill-available, (f)it-content
						case 102:
							return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
						// (s)tretch
						case 115:
							return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value
					}
				break
			// position: sticky
			case 4949:
				// (s)ticky?
				if (charat(value, length + 1) !== 115)
					break
			// display: (flex|inline-flex)
			case 6444:
				switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
					// stic(k)y
					case 107:
						return replace(value, ':', ':' + WEBKIT) + value
					// (inline-)?fl(e)x
					case 101:
						return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
				}
				break
			// writing-mode
			case 5936:
				switch (charat(value, length + 11)) {
					// vertical-l(r)
					case 114:
						return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
					// vertical-r(l)
					case 108:
						return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
					// horizontal(-)tb
					case 45:
						return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				}

				return WEBKIT + value + MS + value + value
		}

		return value
	}

	/**
	 * @param {object[]} children
	 * @param {function} callback
	 * @return {string}
	 */
	function serialize (children, callback) {
		var output = '';
		var length = sizeof(children);

		for (var i = 0; i < length; i++)
			output += callback(children[i], i, children, callback) || '';

		return output
	}

	/**
	 * @param {object} element
	 * @param {number} index
	 * @param {object[]} children
	 * @param {function} callback
	 * @return {string}
	 */
	function stringify (element, index, children, callback) {
		switch (element.type) {
			case IMPORT: case DECLARATION: return element.return = element.return || element.value
			case COMMENT: return ''
			case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
			case RULESET: element.value = element.props.join(',');
		}

		return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
	}

	/**
	 * @param {function[]} collection
	 * @return {function}
	 */
	function middleware (collection) {
		var length = sizeof(collection);

		return function (element, index, children, callback) {
			var output = '';

			for (var i = 0; i < length; i++)
				output += collection[i](element, index, children, callback) || '';

			return output
		}
	}

	/**
	 * @param {function} callback
	 * @return {function}
	 */
	function rulesheet (callback) {
		return function (element) {
			if (!element.root)
				if (element = element.return)
					callback(element);
		}
	}

	/**
	 * @param {object} element
	 * @param {number} index
	 * @param {object[]} children
	 * @param {function} callback
	 */
	function prefixer (element, index, children, callback) {
		if (element.length > -1)
			if (!element.return)
				switch (element.type) {
					case DECLARATION: element.return = prefix(element.value, element.length);
						break
					case KEYFRAMES:
						return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
					case RULESET:
						if (element.length)
							return combine(element.props, function (value) {
								switch (match(value, /(::plac\w+|:read-\w+)/)) {
									// :read-(only|write)
									case ':read-only': case ':read-write':
										return serialize([copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]})], callback)
									// :placeholder
									case '::placeholder':
										return serialize([
											copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}),
											copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}),
											copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]})
										], callback)
								}

								return ''
							})
				}
	}

	var weakMemoize = function weakMemoize(func) {
	  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
	  var cache = new WeakMap();
	  return function (arg) {
	    if (cache.has(arg)) {
	      // $FlowFixMe
	      return cache.get(arg);
	    }

	    var ret = func(arg);
	    cache.set(arg, ret);
	    return ret;
	  };
	};

	var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
	  var previous = 0;
	  var character = 0;

	  while (true) {
	    previous = character;
	    character = peek(); // &\f

	    if (previous === 38 && character === 12) {
	      points[index] = 1;
	    }

	    if (token(character)) {
	      break;
	    }

	    next();
	  }

	  return slice(begin, position$1);
	};

	var toRules = function toRules(parsed, points) {
	  // pretend we've started with a comma
	  var index = -1;
	  var character = 44;

	  do {
	    switch (token(character)) {
	      case 0:
	        // &\f
	        if (character === 38 && peek() === 12) {
	          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
	          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
	          // and when it should just concatenate the outer and inner selectors
	          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
	          points[index] = 1;
	        }

	        parsed[index] += identifierWithPointTracking(position$1 - 1, points, index);
	        break;

	      case 2:
	        parsed[index] += delimit(character);
	        break;

	      case 4:
	        // comma
	        if (character === 44) {
	          // colon
	          parsed[++index] = peek() === 58 ? '&\f' : '';
	          points[index] = parsed[index].length;
	          break;
	        }

	      // fallthrough

	      default:
	        parsed[index] += from(character);
	    }
	  } while (character = next());

	  return parsed;
	};

	var getRules = function getRules(value, points) {
	  return dealloc(toRules(alloc(value), points));
	}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


	var fixedElements = /* #__PURE__ */new WeakMap();
	var compat = function compat(element) {
	  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
	  // negative .length indicates that this rule has been already prefixed
	  element.length < 1) {
	    return;
	  }

	  var value = element.value,
	      parent = element.parent;
	  var isImplicitRule = element.column === parent.column && element.line === parent.line;

	  while (parent.type !== 'rule') {
	    parent = parent.parent;
	    if (!parent) return;
	  } // short-circuit for the simplest case


	  if (element.props.length === 1 && value.charCodeAt(0) !== 58
	  /* colon */
	  && !fixedElements.get(parent)) {
	    return;
	  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
	  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


	  if (isImplicitRule) {
	    return;
	  }

	  fixedElements.set(element, true);
	  var points = [];
	  var rules = getRules(value, points);
	  var parentRules = parent.props;

	  for (var i = 0, k = 0; i < rules.length; i++) {
	    for (var j = 0; j < parentRules.length; j++, k++) {
	      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	    }
	  }
	};
	var removeLabel = function removeLabel(element) {
	  if (element.type === 'decl') {
	    var value = element.value;

	    if ( // charcode for l
	    value.charCodeAt(0) === 108 && // charcode for b
	    value.charCodeAt(2) === 98) {
	      // this ignores label
	      element["return"] = '';
	      element.value = '';
	    }
	  }
	};

	var isBrowser$4 = typeof document !== 'undefined';
	var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
	  return memoize$1(function () {
	    var cache = {};
	    return function (name) {
	      return cache[name];
	    };
	  });
	});
	var defaultStylisPlugins = [prefixer];

	var createCache = function createCache(options) {
	  var key = options.key;

	  if (isBrowser$4 && key === 'css') {
	    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
	    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
	    // note this very very intentionally targets all style elements regardless of the key to ensure
	    // that creating a cache works inside of render of a React component

	    Array.prototype.forEach.call(ssrStyles, function (node) {
	      // we want to only move elements which have a space in the data-emotion attribute value
	      // because that indicates that it is an Emotion 11 server-side rendered style elements
	      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
	      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
	      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
	      // will not result in the Emotion 10 styles being destroyed
	      var dataEmotionAttribute = node.getAttribute('data-emotion');

	      if (dataEmotionAttribute.indexOf(' ') === -1) {
	        return;
	      }
	      document.head.appendChild(node);
	      node.setAttribute('data-s', '');
	    });
	  }

	  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

	  var inserted = {};
	  var container;
	  var nodesToHydrate = [];

	  if (isBrowser$4) {
	    container = options.container || document.head;
	    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
	    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
	    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
	      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

	      for (var i = 1; i < attrib.length; i++) {
	        inserted[attrib[i]] = true;
	      }

	      nodesToHydrate.push(node);
	    });
	  }

	  var _insert;

	  var omnipresentPlugins = [compat, removeLabel];

	  if (isBrowser$4) {
	    var currentSheet;
	    var finalizingPlugins = [stringify, rulesheet(function (rule) {
	      currentSheet.insert(rule);
	    })];
	    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

	    var stylis = function stylis(styles) {
	      return serialize(compile(styles), serializer);
	    };

	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      currentSheet = sheet;

	      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

	      if (shouldCache) {
	        cache.inserted[serialized.name] = true;
	      }
	    };
	  } else {
	    var _finalizingPlugins = [stringify];

	    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

	    var _stylis = function _stylis(styles) {
	      return serialize(compile(styles), _serializer);
	    }; // $FlowFixMe


	    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

	    var getRules = function getRules(selector, serialized) {
	      var name = serialized.name;

	      if (serverStylisCache[name] === undefined) {
	        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
	      }

	      return serverStylisCache[name];
	    };

	    _insert = function _insert(selector, serialized, sheet, shouldCache) {
	      var name = serialized.name;
	      var rules = getRules(selector, serialized);

	      if (cache.compat === undefined) {
	        // in regular mode, we don't set the styles on the inserted cache
	        // since we don't need to and that would be wasting memory
	        // we return them so that they are rendered in a style tag
	        if (shouldCache) {
	          cache.inserted[name] = true;
	        }

	        return rules;
	      } else {
	        // in compat mode, we put the styles on the inserted cache so
	        // that emotion-server can pull out the styles
	        // except when we don't want to cache it which was in Global but now
	        // is nowhere but we don't want to do a major right now
	        // and just in case we're going to leave the case here
	        // it's also not affecting client side bundle size
	        // so it's really not a big deal
	        if (shouldCache) {
	          cache.inserted[name] = rules;
	        } else {
	          return rules;
	        }
	      }
	    };
	  }

	  var cache = {
	    key: key,
	    sheet: new StyleSheet({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy,
	      prepend: options.prepend,
	      insertionPoint: options.insertionPoint
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  cache.sheet.hydrate(nodesToHydrate);
	  return cache;
	};

	var isBrowser$3 = typeof document !== 'undefined';
	function getRegisteredStyles(registered, registeredStyles, classNames) {
	  var rawClassName = '';
	  classNames.split(' ').forEach(function (className) {
	    if (registered[className] !== undefined) {
	      registeredStyles.push(registered[className] + ";");
	    } else {
	      rawClassName += className + " ";
	    }
	  });
	  return rawClassName;
	}
	var registerStyles = function registerStyles(cache, serialized, isStringTag) {
	  var className = cache.key + "-" + serialized.name;

	  if ( // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false || // we need to always store it if we're in compat mode and
	  // in node since emotion-server relies on whether a style is in
	  // the registered cache to know whether a style is global or not
	  // also, note that this check will be dead code eliminated in the browser
	  isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
	    cache.registered[className] = serialized.styles;
	  }
	};
	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	  registerStyles(cache, serialized, isStringTag);
	  var className = cache.key + "-" + serialized.name;

	  if (cache.inserted[serialized.name] === undefined) {
	    var stylesForSSR = '';
	    var current = serialized;

	    do {
	      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

	      if (!isBrowser$3 && maybeStyles !== undefined) {
	        stylesForSSR += maybeStyles;
	      }

	      current = current.next;
	    } while (current !== undefined);

	    if (!isBrowser$3 && stylesForSSR.length !== 0) {
	      return stylesForSSR;
	    }
	  }
	};

	/* eslint-disable */
	// Inspired by https://github.com/garycourt/murmurhash-js
	// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
	function murmur2(str) {
	  // 'm' and 'r' are mixing constants generated offline.
	  // They're not really 'magic', they just happen to work well.
	  // const m = 0x5bd1e995;
	  // const r = 24;
	  // Initialize the hash
	  var h = 0; // Mix 4 bytes at a time into the hash

	  var k,
	      i = 0,
	      len = str.length;

	  for (; len >= 4; ++i, len -= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^=
	    /* k >>> r: */
	    k >>> 24;
	    h =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
	    /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array


	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h =
	      /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.


	  h ^= h >>> 13;
	  h =
	  /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

	var isCustomProperty = function isCustomProperty(property) {
	  return property.charCodeAt(1) === 45;
	};

	var isProcessableValue = function isProcessableValue(value) {
	  return value != null && typeof value !== 'boolean';
	};

	var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
	  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});

	var processStyleValue = function processStyleValue(key, value) {
	  switch (key) {
	    case 'animation':
	    case 'animationName':
	      {
	        if (typeof value === 'string') {
	          return value.replace(animationRegex, function (match, p1, p2) {
	            cursor = {
	              name: p1,
	              styles: p2,
	              next: cursor
	            };
	            return p1;
	          });
	        }
	      }
	  }

	  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

	function handleInterpolation(mergedProps, registered, interpolation) {
	  if (interpolation == null) {
	    return '';
	  }

	  if (interpolation.__emotion_styles !== undefined) {

	    return interpolation;
	  }

	  switch (typeof interpolation) {
	    case 'boolean':
	      {
	        return '';
	      }

	    case 'object':
	      {
	        if (interpolation.anim === 1) {
	          cursor = {
	            name: interpolation.name,
	            styles: interpolation.styles,
	            next: cursor
	          };
	          return interpolation.name;
	        }

	        if (interpolation.styles !== undefined) {
	          var next = interpolation.next;

	          if (next !== undefined) {
	            // not the most efficient thing ever but this is a pretty rare case
	            // and there will be very few iterations of this generally
	            while (next !== undefined) {
	              cursor = {
	                name: next.name,
	                styles: next.styles,
	                next: cursor
	              };
	              next = next.next;
	            }
	          }

	          var styles = interpolation.styles + ";";

	          return styles;
	        }

	        return createStringFromObject(mergedProps, registered, interpolation);
	      }

	    case 'function':
	      {
	        if (mergedProps !== undefined) {
	          var previousCursor = cursor;
	          var result = interpolation(mergedProps);
	          cursor = previousCursor;
	          return handleInterpolation(mergedProps, registered, result);
	        }

	        break;
	      }
	  } // finalize string values (regular strings and functions interpolated into css calls)


	  if (registered == null) {
	    return interpolation;
	  }

	  var cached = registered[interpolation];
	  return cached !== undefined ? cached : interpolation;
	}

	function createStringFromObject(mergedProps, registered, obj) {
	  var string = '';

	  if (Array.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	    }
	  } else {
	    for (var _key in obj) {
	      var value = obj[_key];

	      if (typeof value !== 'object') {
	        if (registered != null && registered[value] !== undefined) {
	          string += _key + "{" + registered[value] + "}";
	        } else if (isProcessableValue(value)) {
	          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
	        }
	      } else {
	        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
	          throw new Error(noComponentSelectorMessage);
	        }

	        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
	          for (var _i = 0; _i < value.length; _i++) {
	            if (isProcessableValue(value[_i])) {
	              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
	            }
	          }
	        } else {
	          var interpolated = handleInterpolation(mergedProps, registered, value);

	          switch (_key) {
	            case 'animation':
	            case 'animationName':
	              {
	                string += processStyleName(_key) + ":" + interpolated + ";";
	                break;
	              }

	            default:
	              {

	                string += _key + "{" + interpolated + "}";
	              }
	          }
	        }
	      }
	    }
	  }

	  return string;
	}

	var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
	// keyframes are stored on the SerializedStyles object as a linked list


	var cursor;
	var serializeStyles = function serializeStyles(args, registered, mergedProps) {
	  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
	    return args[0];
	  }

	  var stringMode = true;
	  var styles = '';
	  cursor = undefined;
	  var strings = args[0];

	  if (strings == null || strings.raw === undefined) {
	    stringMode = false;
	    styles += handleInterpolation(mergedProps, registered, strings);
	  } else {

	    styles += strings[0];
	  } // we start at 1 since we've already handled the first arg


	  for (var i = 1; i < args.length; i++) {
	    styles += handleInterpolation(mergedProps, registered, args[i]);

	    if (stringMode) {

	      styles += strings[i];
	    }
	  }


	  labelPattern.lastIndex = 0;
	  var identifierName = '';
	  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

	  while ((match = labelPattern.exec(styles)) !== null) {
	    identifierName += '-' + // $FlowFixMe we know it's not null
	    match[1];
	  }

	  var name = murmur2(styles) + identifierName;

	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	React$1['useInsertion' + 'Effect'] ? React$1['useInsertion' + 'Effect'] : false;

	var isBrowser$2 = typeof document !== 'undefined';

	var EmotionCacheContext = /* #__PURE__ */react.exports.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
	// because this module is primarily intended for the browser and node
	// but it's also required in react native and similar environments sometimes
	// and we could have a special build just for that
	// but this is much easier and the native packages
	// might use a different theme context in the future anyway
	typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
	  key: 'css'
	}) : null);

	EmotionCacheContext.Provider;

	var withEmotionCache = function withEmotionCache(func) {
	  // $FlowFixMe
	  return /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
	    // the cache will never be null in the browser
	    var cache = react.exports.useContext(EmotionCacheContext);
	    return func(props, cache, ref);
	  });
	};

	if (!isBrowser$2) {
	  withEmotionCache = function withEmotionCache(func) {
	    return function (props) {
	      var cache = react.exports.useContext(EmotionCacheContext);

	      if (cache === null) {
	        // yes, we're potentially creating this on every render
	        // it doesn't actually matter though since it's only on the server
	        // so there will only every be a single render
	        // that could change in the future because of suspense and etc. but for now,
	        // this works and i don't want to optimise for a future thing that we aren't sure about
	        cache = createCache({
	          key: 'css'
	        });
	        return /*#__PURE__*/react.exports.createElement(EmotionCacheContext.Provider, {
	          value: cache
	        }, func(props, cache));
	      } else {
	        return func(props, cache);
	      }
	    };
	  };
	}

	var ThemeContext$2 = /* #__PURE__ */react.exports.createContext({});

	var testOmitPropsOnStringTag = isPropValid;

	var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
	  return key !== 'theme';
	};

	var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
	  return typeof tag === 'string' && // 96 is one less than the char code
	  // for "a" so this is checking that
	  // it's a lowercase character
	  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
	};
	var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
	  var shouldForwardProp;

	  if (options) {
	    var optionsShouldForwardProp = options.shouldForwardProp;
	    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
	      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
	    } : optionsShouldForwardProp;
	  }

	  if (typeof shouldForwardProp !== 'function' && isReal) {
	    shouldForwardProp = tag.__emotion_forwardProp;
	  }

	  return shouldForwardProp;
	};

	var isBrowser = typeof document !== 'undefined';
	var useInsertionEffect = React$1['useInsertion' + 'Effect'] ? React$1['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
	  create();
	};
	function useInsertionEffectMaybe(create) {
	  if (!isBrowser) {
	    return create();
	  }

	  useInsertionEffect(create);
	}
	var isBrowser$1 = typeof document !== 'undefined';

	var Insertion = function Insertion(_ref) {
	  var cache = _ref.cache,
	      serialized = _ref.serialized,
	      isStringTag = _ref.isStringTag;
	  registerStyles(cache, serialized, isStringTag);
	  var rules = useInsertionEffectMaybe(function () {
	    return insertStyles(cache, serialized, isStringTag);
	  });

	  if (!isBrowser$1 && rules !== undefined) {
	    var _ref2;

	    var serializedNames = serialized.name;
	    var next = serialized.next;

	    while (next !== undefined) {
	      serializedNames += ' ' + next.name;
	      next = next.next;
	    }

	    return /*#__PURE__*/react.exports.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
	      __html: rules
	    }, _ref2.nonce = cache.sheet.nonce, _ref2));
	  }

	  return null;
	};

	var createStyled$1 = function createStyled(tag, options) {

	  var isReal = tag.__emotion_real === tag;
	  var baseTag = isReal && tag.__emotion_base || tag;
	  var identifierName;
	  var targetClassName;

	  if (options !== undefined) {
	    identifierName = options.label;
	    targetClassName = options.target;
	  }

	  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
	  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
	  var shouldUseAs = !defaultShouldForwardProp('as');
	  return function () {
	    var args = arguments;
	    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

	    if (identifierName !== undefined) {
	      styles.push("label:" + identifierName + ";");
	    }

	    if (args[0] == null || args[0].raw === undefined) {
	      styles.push.apply(styles, args);
	    } else {

	      styles.push(args[0][0]);
	      var len = args.length;
	      var i = 1;

	      for (; i < len; i++) {

	        styles.push(args[i], args[0][i]);
	      }
	    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


	    var Styled = withEmotionCache(function (props, cache, ref) {
	      var FinalTag = shouldUseAs && props.as || baseTag;
	      var className = '';
	      var classInterpolations = [];
	      var mergedProps = props;

	      if (props.theme == null) {
	        mergedProps = {};

	        for (var key in props) {
	          mergedProps[key] = props[key];
	        }

	        mergedProps.theme = react.exports.useContext(ThemeContext$2);
	      }

	      if (typeof props.className === 'string') {
	        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
	      } else if (props.className != null) {
	        className = props.className + " ";
	      }

	      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
	      className += cache.key + "-" + serialized.name;

	      if (targetClassName !== undefined) {
	        className += " " + targetClassName;
	      }

	      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
	      var newProps = {};

	      for (var _key in props) {
	        if (shouldUseAs && _key === 'as') continue;

	        if ( // $FlowFixMe
	        finalShouldForwardProp(_key)) {
	          newProps[_key] = props[_key];
	        }
	      }

	      newProps.className = className;
	      newProps.ref = ref;
	      return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/react.exports.createElement(Insertion, {
	        cache: cache,
	        serialized: serialized,
	        isStringTag: typeof FinalTag === 'string'
	      }), /*#__PURE__*/react.exports.createElement(FinalTag, newProps));
	    });
	    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
	    Styled.defaultProps = tag.defaultProps;
	    Styled.__emotion_real = Styled;
	    Styled.__emotion_base = baseTag;
	    Styled.__emotion_styles = styles;
	    Styled.__emotion_forwardProp = shouldForwardProp;
	    Object.defineProperty(Styled, 'toString', {
	      value: function value() {
	        if (targetClassName === undefined && "production" !== 'production') {
	          return 'NO_COMPONENT_SELECTOR';
	        } // $FlowFixMe: coerce undefined to string


	        return "." + targetClassName;
	      }
	    });

	    Styled.withComponent = function (nextTag, nextOptions) {
	      return createStyled(nextTag, _extends$3({}, options, nextOptions, {
	        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
	      })).apply(void 0, styles);
	    };

	    return Styled;
	  };
	};

	var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

	var newStyled = createStyled$1.bind();
	tags.forEach(function (tagName) {
	  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
	  newStyled[tagName] = newStyled(tagName);
	});

	var emStyled = newStyled;

	/** @license MUI v5.10.5
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	function styled$2(tag, options) {
	  const stylesFactory = emStyled(tag, options);

	  return stylesFactory;
	} // eslint-disable-next-line @typescript-eslint/naming-convention

	const internal_processStyles = (tag, processor) => {
	  // Emotion attaches all the styles as `__emotion_styles`.
	  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
	  if (Array.isArray(tag.__emotion_styles)) {
	    tag.__emotion_styles = processor(tag.__emotion_styles);
	  }
	};

	function merge(acc, item) {
	  if (!item) {
	    return acc;
	  }

	  return deepmerge(acc, item, {
	    clone: false // No need to clone deep, it's way faster.

	  });
	}

	// For instance with the first breakpoint xs: [xs, sm[.

	const values = {
	  xs: 0,
	  // phone
	  sm: 600,
	  // tablet
	  md: 900,
	  // small laptop
	  lg: 1200,
	  // desktop
	  xl: 1536 // large screen

	};
	const defaultBreakpoints = {
	  // Sorted ASC by size. That's important.
	  // It can't be configured as it's used statically for propTypes.
	  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
	  up: key => `@media (min-width:${values[key]}px)`
	};
	function handleBreakpoints(props, propValue, styleFromPropValue) {
	  const theme = props.theme || {};

	  if (Array.isArray(propValue)) {
	    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
	    return propValue.reduce((acc, item, index) => {
	      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
	      return acc;
	    }, {});
	  }

	  if (typeof propValue === 'object') {
	    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
	    return Object.keys(propValue).reduce((acc, breakpoint) => {
	      // key is breakpoint
	      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
	        const mediaKey = themeBreakpoints.up(breakpoint);
	        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
	      } else {
	        const cssKey = breakpoint;
	        acc[cssKey] = propValue[cssKey];
	      }

	      return acc;
	    }, {});
	  }

	  const output = styleFromPropValue(propValue);
	  return output;
	}

	function createEmptyBreakpointObject(breakpointsInput = {}) {
	  var _breakpointsInput$key;

	  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
	    const breakpointStyleKey = breakpointsInput.up(key);
	    acc[breakpointStyleKey] = {};
	    return acc;
	  }, {});
	  return breakpointsInOrder || {};
	}
	function removeUnusedBreakpoints(breakpointKeys, style) {
	  return breakpointKeys.reduce((acc, key) => {
	    const breakpointOutput = acc[key];
	    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;

	    if (isBreakpointUnused) {
	      delete acc[key];
	    }

	    return acc;
	  }, style);
	}

	function getPath(obj, path, checkVars = true) {
	  if (!path || typeof path !== 'string') {
	    return null;
	  } // Check if CSS variables are used


	  if (obj && obj.vars && checkVars) {
	    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);

	    if (val != null) {
	      return val;
	    }
	  }

	  return path.split('.').reduce((acc, item) => {
	    if (acc && acc[item] != null) {
	      return acc[item];
	    }

	    return null;
	  }, obj);
	}

	function getValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
	  let value;

	  if (typeof themeMapping === 'function') {
	    value = themeMapping(propValueFinal);
	  } else if (Array.isArray(themeMapping)) {
	    value = themeMapping[propValueFinal] || userValue;
	  } else {
	    value = getPath(themeMapping, propValueFinal) || userValue;
	  }

	  if (transform) {
	    value = transform(value);
	  }

	  return value;
	}

	function style$1(options) {
	  const {
	    prop,
	    cssProperty = options.prop,
	    themeKey,
	    transform
	  } = options;

	  const fn = props => {
	    if (props[prop] == null) {
	      return null;
	    }

	    const propValue = props[prop];
	    const theme = props.theme;
	    const themeMapping = getPath(theme, themeKey) || {};

	    const styleFromPropValue = propValueFinal => {
	      let value = getValue$1(themeMapping, transform, propValueFinal);

	      if (propValueFinal === value && typeof propValueFinal === 'string') {
	        // Haven't found value
	        value = getValue$1(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
	      }

	      if (cssProperty === false) {
	        return value;
	      }

	      return {
	        [cssProperty]: value
	      };
	    };

	    return handleBreakpoints(props, propValue, styleFromPropValue);
	  };

	  fn.propTypes = {};
	  fn.filterProps = [prop];
	  return fn;
	}

	function compose(...styles) {
	  const handlers = styles.reduce((acc, style) => {
	    style.filterProps.forEach(prop => {
	      acc[prop] = style;
	    });
	    return acc;
	  }, {});

	  const fn = props => {
	    return Object.keys(props).reduce((acc, prop) => {
	      if (handlers[prop]) {
	        return merge(acc, handlers[prop](props));
	      }

	      return acc;
	    }, {});
	  };

	  fn.propTypes = {};
	  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
	  return fn;
	}

	function memoize(fn) {
	  const cache = {};
	  return arg => {
	    if (cache[arg] === undefined) {
	      cache[arg] = fn(arg);
	    }

	    return cache[arg];
	  };
	}

	const properties = {
	  m: 'margin',
	  p: 'padding'
	};
	const directions = {
	  t: 'Top',
	  r: 'Right',
	  b: 'Bottom',
	  l: 'Left',
	  x: ['Left', 'Right'],
	  y: ['Top', 'Bottom']
	};
	const aliases = {
	  marginX: 'mx',
	  marginY: 'my',
	  paddingX: 'px',
	  paddingY: 'py'
	}; // memoize() impact:
	// From 300,000 ops/sec
	// To 350,000 ops/sec

	const getCssProperties = memoize(prop => {
	  // It's not a shorthand notation.
	  if (prop.length > 2) {
	    if (aliases[prop]) {
	      prop = aliases[prop];
	    } else {
	      return [prop];
	    }
	  }

	  const [a, b] = prop.split('');
	  const property = properties[a];
	  const direction = directions[b] || '';
	  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
	});
	const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
	const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
	const spacingKeys = [...marginKeys, ...paddingKeys];
	function createUnaryUnit(theme, themeKey, defaultValue, propName) {
	  var _getPath;

	  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;

	  if (typeof themeSpacing === 'number') {
	    return abs => {
	      if (typeof abs === 'string') {
	        return abs;
	      }

	      return themeSpacing * abs;
	    };
	  }

	  if (Array.isArray(themeSpacing)) {
	    return abs => {
	      if (typeof abs === 'string') {
	        return abs;
	      }

	      return themeSpacing[abs];
	    };
	  }

	  if (typeof themeSpacing === 'function') {
	    return themeSpacing;
	  }

	  return () => undefined;
	}
	function createUnarySpacing(theme) {
	  return createUnaryUnit(theme, 'spacing', 8);
	}
	function getValue(transformer, propValue) {
	  if (typeof propValue === 'string' || propValue == null) {
	    return propValue;
	  }

	  const abs = Math.abs(propValue);
	  const transformed = transformer(abs);

	  if (propValue >= 0) {
	    return transformed;
	  }

	  if (typeof transformed === 'number') {
	    return -transformed;
	  }

	  return `-${transformed}`;
	}
	function getStyleFromPropValue(cssProperties, transformer) {
	  return propValue => cssProperties.reduce((acc, cssProperty) => {
	    acc[cssProperty] = getValue(transformer, propValue);
	    return acc;
	  }, {});
	}

	function resolveCssProperty(props, keys, prop, transformer) {
	  // Using a hash computation over an array iteration could be faster, but with only 28 items,
	  // it's doesn't worth the bundle size.
	  if (keys.indexOf(prop) === -1) {
	    return null;
	  }

	  const cssProperties = getCssProperties(prop);
	  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
	  const propValue = props[prop];
	  return handleBreakpoints(props, propValue, styleFromPropValue);
	}

	function style(props, keys) {
	  const transformer = createUnarySpacing(props.theme);
	  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
	}

	function spacing(props) {
	  return style(props, spacingKeys);
	}

	spacing.propTypes = {};
	spacing.filterProps = spacingKeys;

	function getBorder(value) {
	  if (typeof value !== 'number') {
	    return value;
	  }

	  return `${value}px solid`;
	}

	const border = style$1({
	  prop: 'border',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderTop = style$1({
	  prop: 'borderTop',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderRight = style$1({
	  prop: 'borderRight',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderBottom = style$1({
	  prop: 'borderBottom',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderLeft = style$1({
	  prop: 'borderLeft',
	  themeKey: 'borders',
	  transform: getBorder
	});
	const borderColor = style$1({
	  prop: 'borderColor',
	  themeKey: 'palette'
	});
	const borderTopColor = style$1({
	  prop: 'borderTopColor',
	  themeKey: 'palette'
	});
	const borderRightColor = style$1({
	  prop: 'borderRightColor',
	  themeKey: 'palette'
	});
	const borderBottomColor = style$1({
	  prop: 'borderBottomColor',
	  themeKey: 'palette'
	});
	const borderLeftColor = style$1({
	  prop: 'borderLeftColor',
	  themeKey: 'palette'
	});
	const borderRadius = props => {
	  if (props.borderRadius !== undefined && props.borderRadius !== null) {
	    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

	    const styleFromPropValue = propValue => ({
	      borderRadius: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
	  }

	  return null;
	};
	borderRadius.propTypes = {};
	borderRadius.filterProps = ['borderRadius'];
	const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
	var borders$1 = borders;

	const displayPrint = style$1({
	  prop: 'displayPrint',
	  cssProperty: false,
	  transform: value => ({
	    '@media print': {
	      display: value
	    }
	  })
	});
	const displayRaw = style$1({
	  prop: 'display'
	});
	const overflow = style$1({
	  prop: 'overflow'
	});
	const textOverflow = style$1({
	  prop: 'textOverflow'
	});
	const visibility = style$1({
	  prop: 'visibility'
	});
	const whiteSpace = style$1({
	  prop: 'whiteSpace'
	});
	var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

	const flexBasis = style$1({
	  prop: 'flexBasis'
	});
	const flexDirection = style$1({
	  prop: 'flexDirection'
	});
	const flexWrap = style$1({
	  prop: 'flexWrap'
	});
	const justifyContent = style$1({
	  prop: 'justifyContent'
	});
	const alignItems = style$1({
	  prop: 'alignItems'
	});
	const alignContent = style$1({
	  prop: 'alignContent'
	});
	const order = style$1({
	  prop: 'order'
	});
	const flex = style$1({
	  prop: 'flex'
	});
	const flexGrow = style$1({
	  prop: 'flexGrow'
	});
	const flexShrink = style$1({
	  prop: 'flexShrink'
	});
	const alignSelf = style$1({
	  prop: 'alignSelf'
	});
	const justifyItems = style$1({
	  prop: 'justifyItems'
	});
	const justifySelf = style$1({
	  prop: 'justifySelf'
	});
	const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
	var flexbox$1 = flexbox;

	const gap = props => {
	  if (props.gap !== undefined && props.gap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      gap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.gap, styleFromPropValue);
	  }

	  return null;
	};
	gap.propTypes = {};
	gap.filterProps = ['gap'];
	const columnGap = props => {
	  if (props.columnGap !== undefined && props.columnGap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      columnGap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
	  }

	  return null;
	};
	columnGap.propTypes = {};
	columnGap.filterProps = ['columnGap'];
	const rowGap = props => {
	  if (props.rowGap !== undefined && props.rowGap !== null) {
	    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

	    const styleFromPropValue = propValue => ({
	      rowGap: getValue(transformer, propValue)
	    });

	    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
	  }

	  return null;
	};
	rowGap.propTypes = {};
	rowGap.filterProps = ['rowGap'];
	const gridColumn = style$1({
	  prop: 'gridColumn'
	});
	const gridRow = style$1({
	  prop: 'gridRow'
	});
	const gridAutoFlow = style$1({
	  prop: 'gridAutoFlow'
	});
	const gridAutoColumns = style$1({
	  prop: 'gridAutoColumns'
	});
	const gridAutoRows = style$1({
	  prop: 'gridAutoRows'
	});
	const gridTemplateColumns = style$1({
	  prop: 'gridTemplateColumns'
	});
	const gridTemplateRows = style$1({
	  prop: 'gridTemplateRows'
	});
	const gridTemplateAreas = style$1({
	  prop: 'gridTemplateAreas'
	});
	const gridArea = style$1({
	  prop: 'gridArea'
	});
	const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
	var grid$1 = grid;

	const color = style$1({
	  prop: 'color',
	  themeKey: 'palette'
	});
	const bgcolor = style$1({
	  prop: 'bgcolor',
	  cssProperty: 'backgroundColor',
	  themeKey: 'palette'
	});
	const backgroundColor = style$1({
	  prop: 'backgroundColor',
	  themeKey: 'palette'
	});
	const palette = compose(color, bgcolor, backgroundColor);
	var palette$1 = palette;

	const position = style$1({
	  prop: 'position'
	});
	const zIndex$2 = style$1({
	  prop: 'zIndex',
	  themeKey: 'zIndex'
	});
	const top = style$1({
	  prop: 'top'
	});
	const right = style$1({
	  prop: 'right'
	});
	const bottom = style$1({
	  prop: 'bottom'
	});
	const left = style$1({
	  prop: 'left'
	});
	var positions = compose(position, zIndex$2, top, right, bottom, left);

	const boxShadow = style$1({
	  prop: 'boxShadow',
	  themeKey: 'shadows'
	});
	var shadows$2 = boxShadow;

	function transform(value) {
	  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
	}

	const width = style$1({
	  prop: 'width',
	  transform
	});
	const maxWidth = props => {
	  if (props.maxWidth !== undefined && props.maxWidth !== null) {
	    const styleFromPropValue = propValue => {
	      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

	      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
	      return {
	        maxWidth: breakpoint || transform(propValue)
	      };
	    };

	    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
	  }

	  return null;
	};
	maxWidth.filterProps = ['maxWidth'];
	const minWidth = style$1({
	  prop: 'minWidth',
	  transform
	});
	const height = style$1({
	  prop: 'height',
	  transform
	});
	const maxHeight = style$1({
	  prop: 'maxHeight',
	  transform
	});
	const minHeight = style$1({
	  prop: 'minHeight',
	  transform
	});
	style$1({
	  prop: 'size',
	  cssProperty: 'width',
	  transform
	});
	style$1({
	  prop: 'size',
	  cssProperty: 'height',
	  transform
	});
	const boxSizing = style$1({
	  prop: 'boxSizing'
	});
	const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
	var sizing$1 = sizing;

	const fontFamily = style$1({
	  prop: 'fontFamily',
	  themeKey: 'typography'
	});
	const fontSize = style$1({
	  prop: 'fontSize',
	  themeKey: 'typography'
	});
	const fontStyle = style$1({
	  prop: 'fontStyle',
	  themeKey: 'typography'
	});
	const fontWeight = style$1({
	  prop: 'fontWeight',
	  themeKey: 'typography'
	});
	const letterSpacing = style$1({
	  prop: 'letterSpacing'
	});
	const textTransform = style$1({
	  prop: 'textTransform'
	});
	const lineHeight = style$1({
	  prop: 'lineHeight'
	});
	const textAlign = style$1({
	  prop: 'textAlign'
	});
	const typographyVariant = style$1({
	  prop: 'typography',
	  cssProperty: false,
	  themeKey: 'typography'
	});
	const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
	var typography$1 = typography;

	const filterPropsMapping = {
	  borders: borders$1.filterProps,
	  display: display.filterProps,
	  flexbox: flexbox$1.filterProps,
	  grid: grid$1.filterProps,
	  positions: positions.filterProps,
	  palette: palette$1.filterProps,
	  shadows: shadows$2.filterProps,
	  sizing: sizing$1.filterProps,
	  spacing: spacing.filterProps,
	  typography: typography$1.filterProps
	};
	const styleFunctionMapping = {
	  borders: borders$1,
	  display,
	  flexbox: flexbox$1,
	  grid: grid$1,
	  positions,
	  palette: palette$1,
	  shadows: shadows$2,
	  sizing: sizing$1,
	  spacing,
	  typography: typography$1
	};
	Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
	  filterPropsMapping[styleFnName].forEach(propName => {
	    acc[propName] = styleFunctionMapping[styleFnName];
	  });
	  return acc;
	}, {});

	function objectsHaveSameKeys(...objects) {
	  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
	  const union = new Set(allKeys);
	  return objects.every(object => union.size === Object.keys(object).length);
	}

	function callIfFn(maybeFn, arg) {
	  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
	} // eslint-disable-next-line @typescript-eslint/naming-convention


	function unstable_createStyleFunctionSx(styleFunctionMapping$1 = styleFunctionMapping) {
	  const propToStyleFunction = Object.keys(styleFunctionMapping$1).reduce((acc, styleFnName) => {
	    styleFunctionMapping$1[styleFnName].filterProps.forEach(propName => {
	      acc[propName] = styleFunctionMapping$1[styleFnName];
	    });
	    return acc;
	  }, {});

	  function getThemeValue(prop, value, theme) {
	    const inputProps = {
	      [prop]: value,
	      theme
	    };
	    const styleFunction = propToStyleFunction[prop];
	    return styleFunction ? styleFunction(inputProps) : {
	      [prop]: value
	    };
	  }

	  function styleFunctionSx(props) {
	    const {
	      sx,
	      theme = {}
	    } = props || {};

	    if (!sx) {
	      return null; // Emotion & styled-components will neglect null
	    }
	    /*
	     * Receive `sxInput` as object or callback
	     * and then recursively check keys & values to create media query object styles.
	     * (the result will be used in `styled`)
	     */


	    function traverse(sxInput) {
	      let sxObject = sxInput;

	      if (typeof sxInput === 'function') {
	        sxObject = sxInput(theme);
	      } else if (typeof sxInput !== 'object') {
	        // value
	        return sxInput;
	      }

	      if (!sxObject) {
	        return null;
	      }

	      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
	      const breakpointsKeys = Object.keys(emptyBreakpoints);
	      let css = emptyBreakpoints;
	      Object.keys(sxObject).forEach(styleKey => {
	        const value = callIfFn(sxObject[styleKey], theme);

	        if (value !== null && value !== undefined) {
	          if (typeof value === 'object') {
	            if (propToStyleFunction[styleKey]) {
	              css = merge(css, getThemeValue(styleKey, value, theme));
	            } else {
	              const breakpointsValues = handleBreakpoints({
	                theme
	              }, value, x => ({
	                [styleKey]: x
	              }));

	              if (objectsHaveSameKeys(breakpointsValues, value)) {
	                css[styleKey] = styleFunctionSx({
	                  sx: value,
	                  theme
	                });
	              } else {
	                css = merge(css, breakpointsValues);
	              }
	            }
	          } else {
	            css = merge(css, getThemeValue(styleKey, value, theme));
	          }
	        }
	      });
	      return removeUnusedBreakpoints(breakpointsKeys, css);
	    }

	    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
	  }

	  return styleFunctionSx;
	}
	const styleFunctionSx = unstable_createStyleFunctionSx();
	styleFunctionSx.filterProps = ['sx'];
	var defaultStyleFunctionSx = styleFunctionSx;

	const _excluded$f = ["values", "unit", "step"];

	const sortBreakpointsValues = values => {
	  const breakpointsAsArray = Object.keys(values).map(key => ({
	    key,
	    val: values[key]
	  })) || []; // Sort in ascending order

	  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
	  return breakpointsAsArray.reduce((acc, obj) => {
	    return _extends$3({}, acc, {
	      [obj.key]: obj.val
	    });
	  }, {});
	}; // Keep in mind that @media is inclusive by the CSS specification.


	function createBreakpoints(breakpoints) {
	  const {
	    // The breakpoint **start** at this value.
	    // For instance with the first breakpoint xs: [xs, sm).
	    values = {
	      xs: 0,
	      // phone
	      sm: 600,
	      // tablet
	      md: 900,
	      // small laptop
	      lg: 1200,
	      // desktop
	      xl: 1536 // large screen

	    },
	    unit = 'px',
	    step = 5
	  } = breakpoints,
	        other = _objectWithoutPropertiesLoose$2(breakpoints, _excluded$f);

	  const sortedValues = sortBreakpointsValues(values);
	  const keys = Object.keys(sortedValues);

	  function up(key) {
	    const value = typeof values[key] === 'number' ? values[key] : key;
	    return `@media (min-width:${value}${unit})`;
	  }

	  function down(key) {
	    const value = typeof values[key] === 'number' ? values[key] : key;
	    return `@media (max-width:${value - step / 100}${unit})`;
	  }

	  function between(start, end) {
	    const endIndex = keys.indexOf(end);
	    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
	  }

	  function only(key) {
	    if (keys.indexOf(key) + 1 < keys.length) {
	      return between(key, keys[keys.indexOf(key) + 1]);
	    }

	    return up(key);
	  }

	  function not(key) {
	    // handle first and last key separately, for better readability
	    const keyIndex = keys.indexOf(key);

	    if (keyIndex === 0) {
	      return up(keys[1]);
	    }

	    if (keyIndex === keys.length - 1) {
	      return down(keys[keyIndex]);
	    }

	    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
	  }

	  return _extends$3({
	    keys,
	    values: sortedValues,
	    up,
	    down,
	    between,
	    only,
	    not,
	    unit
	  }, other);
	}

	const shape = {
	  borderRadius: 4
	};
	var shape$1 = shape;

	/* tslint:enable:unified-signatures */
	function createSpacing(spacingInput = 8) {
	  // Already transformed.
	  if (spacingInput.mui) {
	    return spacingInput;
	  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
	  // Smaller components, such as icons, can align to a 4dp grid.
	  // https://material.io/design/layout/understanding-layout.html#usage


	  const transform = createUnarySpacing({
	    spacing: spacingInput
	  });

	  const spacing = (...argsInput) => {

	    const args = argsInput.length === 0 ? [1] : argsInput;
	    return args.map(argument => {
	      const output = transform(argument);
	      return typeof output === 'number' ? `${output}px` : output;
	    }).join(' ');
	  };

	  spacing.mui = true;
	  return spacing;
	}

	const _excluded$e = ["breakpoints", "palette", "spacing", "shape"];

	function createTheme$1(options = {}, ...args) {
	  const {
	    breakpoints: breakpointsInput = {},
	    palette: paletteInput = {},
	    spacing: spacingInput,
	    shape: shapeInput = {}
	  } = options,
	        other = _objectWithoutPropertiesLoose$2(options, _excluded$e);

	  const breakpoints = createBreakpoints(breakpointsInput);
	  const spacing = createSpacing(spacingInput);
	  let muiTheme = deepmerge({
	    breakpoints,
	    direction: 'ltr',
	    components: {},
	    // Inject component definitions.
	    palette: _extends$3({
	      mode: 'light'
	    }, paletteInput),
	    spacing,
	    shape: _extends$3({}, shape$1, shapeInput)
	  }, other);
	  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
	  return muiTheme;
	}

	const ThemeContext = /*#__PURE__*/react.exports.createContext(null);

	var ThemeContext$1 = ThemeContext;

	function useTheme$2() {
	  const theme = react.exports.useContext(ThemeContext$1);

	  return theme;
	}

	function isObjectEmpty(obj) {
	  return Object.keys(obj).length === 0;
	}

	function useTheme$1(defaultTheme = null) {
	  const contextTheme = useTheme$2();
	  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
	}

	const systemDefaultTheme$1 = createTheme$1();

	function useTheme(defaultTheme = systemDefaultTheme$1) {
	  return useTheme$1(defaultTheme);
	}

	const _excluded$d = ["variant"];

	function isEmpty$1(string) {
	  return string.length === 0;
	}
	/**
	 * Generates string classKey based on the properties provided. It starts with the
	 * variant if defined, and then it appends all other properties in alphabetical order.
	 * @param {object} props - the properties for which the classKey should be created.
	 */


	function propsToClassKey(props) {
	  const {
	    variant
	  } = props,
	        other = _objectWithoutPropertiesLoose$2(props, _excluded$d);

	  let classKey = variant || '';
	  Object.keys(other).sort().forEach(key => {
	    if (key === 'color') {
	      classKey += isEmpty$1(classKey) ? props[key] : capitalize(props[key]);
	    } else {
	      classKey += `${isEmpty$1(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
	    }
	  });
	  return classKey;
	}

	const _excluded$c = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
	      _excluded2 = ["theme"],
	      _excluded3 = ["theme"];

	function isEmpty(obj) {
	  return Object.keys(obj).length === 0;
	} // https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40


	function isStringTag(tag) {
	  return typeof tag === 'string' && // 96 is one less than the char code
	  // for "a" so this is checking that
	  // it's a lowercase character
	  tag.charCodeAt(0) > 96;
	}

	const getStyleOverrides = (name, theme) => {
	  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
	    return theme.components[name].styleOverrides;
	  }

	  return null;
	};

	const getVariantStyles = (name, theme) => {
	  let variants = [];

	  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
	    variants = theme.components[name].variants;
	  }

	  const variantsStyles = {};
	  variants.forEach(definition => {
	    const key = propsToClassKey(definition.props);
	    variantsStyles[key] = definition.style;
	  });
	  return variantsStyles;
	};

	const variantsResolver = (props, styles, theme, name) => {
	  var _theme$components, _theme$components$nam;

	  const {
	    ownerState = {}
	  } = props;
	  const variantsStyles = [];
	  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

	  if (themeVariants) {
	    themeVariants.forEach(themeVariant => {
	      let isMatch = true;
	      Object.keys(themeVariant.props).forEach(key => {
	        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
	          isMatch = false;
	        }
	      });

	      if (isMatch) {
	        variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
	      }
	    });
	  }

	  return variantsStyles;
	}; // Update /system/styled/#api in case if this changes


	function shouldForwardProp(prop) {
	  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
	}
	const systemDefaultTheme = createTheme$1();

	function createStyled(input = {}) {
	  const {
	    defaultTheme = systemDefaultTheme,
	    rootShouldForwardProp = shouldForwardProp,
	    slotShouldForwardProp = shouldForwardProp,
	    styleFunctionSx = defaultStyleFunctionSx
	  } = input;

	  const systemSx = props => {
	    const theme = isEmpty(props.theme) ? defaultTheme : props.theme;
	    return styleFunctionSx(_extends$3({}, props, {
	      theme
	    }));
	  };

	  systemSx.__mui_systemSx = true;
	  return (tag, inputOptions = {}) => {
	    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
	    internal_processStyles(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));

	    const {
	      name: componentName,
	      slot: componentSlot,
	      skipVariantsResolver: inputSkipVariantsResolver,
	      skipSx: inputSkipSx,
	      overridesResolver
	    } = inputOptions,
	          options = _objectWithoutPropertiesLoose$2(inputOptions, _excluded$c); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


	    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
	    const skipSx = inputSkipSx || false;
	    let label;

	    let shouldForwardPropOption = shouldForwardProp;

	    if (componentSlot === 'Root') {
	      shouldForwardPropOption = rootShouldForwardProp;
	    } else if (componentSlot) {
	      // any other slot specified
	      shouldForwardPropOption = slotShouldForwardProp;
	    } else if (isStringTag(tag)) {
	      // for string (html) tag, preserve the behavior in emotion & styled-components.
	      shouldForwardPropOption = undefined;
	    }

	    const defaultStyledResolver = styled$2(tag, _extends$3({
	      shouldForwardProp: shouldForwardPropOption,
	      label
	    }, options));

	    const muiStyledResolver = (styleArg, ...expressions) => {
	      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
	        // On the server Emotion doesn't use React.forwardRef for creating components, so the created
	        // component stays as a function. This condition makes sure that we do not interpolate functions
	        // which are basically components used as a selectors.
	        return typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg ? _ref => {
	          let {
	            theme: themeInput
	          } = _ref,
	              other = _objectWithoutPropertiesLoose$2(_ref, _excluded2);

	          return stylesArg(_extends$3({
	            theme: isEmpty(themeInput) ? defaultTheme : themeInput
	          }, other));
	        } : stylesArg;
	      }) : [];
	      let transformedStyleArg = styleArg;

	      if (componentName && overridesResolver) {
	        expressionsWithDefaultTheme.push(props => {
	          const theme = isEmpty(props.theme) ? defaultTheme : props.theme;
	          const styleOverrides = getStyleOverrides(componentName, theme);

	          if (styleOverrides) {
	            const resolvedStyleOverrides = {};
	            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
	              resolvedStyleOverrides[slotKey] = typeof slotStyle === 'function' ? slotStyle(_extends$3({}, props, {
	                theme
	              })) : slotStyle;
	            });
	            return overridesResolver(props, resolvedStyleOverrides);
	          }

	          return null;
	        });
	      }

	      if (componentName && !skipVariantsResolver) {
	        expressionsWithDefaultTheme.push(props => {
	          const theme = isEmpty(props.theme) ? defaultTheme : props.theme;
	          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
	        });
	      }

	      if (!skipSx) {
	        expressionsWithDefaultTheme.push(systemSx);
	      }

	      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

	      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
	        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

	        transformedStyleArg = [...styleArg, ...placeholders];
	        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
	      } else if (typeof styleArg === 'function' && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
	      // component stays as a function. This condition makes sure that we do not interpolate functions
	      // which are basically components used as a selectors.
	      styleArg.__emotion_real !== styleArg) {
	        // If the type is function, we need to define the default theme.
	        transformedStyleArg = _ref2 => {
	          let {
	            theme: themeInput
	          } = _ref2,
	              other = _objectWithoutPropertiesLoose$2(_ref2, _excluded3);

	          return styleArg(_extends$3({
	            theme: isEmpty(themeInput) ? defaultTheme : themeInput
	          }, other));
	        };
	      }

	      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

	      return Component;
	    };

	    if (defaultStyledResolver.withConfig) {
	      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
	    }

	    return muiStyledResolver;
	  };
	}

	function getThemeProps(params) {
	  const {
	    theme,
	    name,
	    props
	  } = params;

	  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
	    return props;
	  }

	  return resolveProps(theme.components[name].defaultProps, props);
	}

	function useThemeProps$1({
	  props,
	  name,
	  defaultTheme
	}) {
	  const theme = useTheme(defaultTheme);
	  const mergedProps = getThemeProps({
	    theme,
	    name,
	    props
	  });
	  return mergedProps;
	}

	/**
	 * Returns a number whose value is limited to the given range.
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */
	function clamp(value, min = 0, max = 1) {

	  return Math.min(Math.max(min, value), max);
	}
	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 * @returns {string} A CSS rgb color string
	 */


	function hexToRgb(color) {
	  color = color.slice(1);
	  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
	  let colors = color.match(re);

	  if (colors && colors[0].length === 1) {
	    colors = colors.map(n => n + n);
	  }

	  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
	}
	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @returns {object} - A MUI color object: {type: string, values: number[]}
	 */


	function decomposeColor(color) {
	  // Idempotent
	  if (color.type) {
	    return color;
	  }

	  if (color.charAt(0) === '#') {
	    return decomposeColor(hexToRgb(color));
	  }

	  const marker = color.indexOf('(');
	  const type = color.substring(0, marker);

	  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
	    throw new Error(formatMuiErrorMessage(9, color));
	  }

	  let values = color.substring(marker + 1, color.length - 1);
	  let colorSpace;

	  if (type === 'color') {
	    values = values.split(' ');
	    colorSpace = values.shift();

	    if (values.length === 4 && values[3].charAt(0) === '/') {
	      values[3] = values[3].slice(1);
	    }

	    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
	      throw new Error(formatMuiErrorMessage(10, colorSpace));
	    }
	  } else {
	    values = values.split(',');
	  }

	  values = values.map(value => parseFloat(value));
	  return {
	    type,
	    values,
	    colorSpace
	  };
	}
	/**
	 * Converts a color object with type and values to a string.
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */

	function recomposeColor(color) {
	  const {
	    type,
	    colorSpace
	  } = color;
	  let {
	    values
	  } = color;

	  if (type.indexOf('rgb') !== -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
	  } else if (type.indexOf('hsl') !== -1) {
	    values[1] = `${values[1]}%`;
	    values[2] = `${values[2]}%`;
	  }

	  if (type.indexOf('color') !== -1) {
	    values = `${colorSpace} ${values.join(' ')}`;
	  } else {
	    values = `${values.join(', ')}`;
	  }

	  return `${type}(${values})`;
	}
	/**
	 * Converts a color from hsl format to rgb format.
	 * @param {string} color - HSL color values
	 * @returns {string} rgb color values
	 */

	function hslToRgb(color) {
	  color = decomposeColor(color);
	  const {
	    values
	  } = color;
	  const h = values[0];
	  const s = values[1] / 100;
	  const l = values[2] / 100;
	  const a = s * Math.min(l, 1 - l);

	  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

	  let type = 'rgb';
	  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

	  if (color.type === 'hsla') {
	    type += 'a';
	    rgb.push(values[3]);
	  }

	  return recomposeColor({
	    type,
	    values: rgb
	  });
	}
	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */

	function getLuminance(color) {
	  color = decomposeColor(color);
	  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
	  rgb = rgb.map(val => {
	    if (color.type !== 'color') {
	      val /= 255; // normalized
	    }

	    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
	  }); // Truncate at 3 digits

	  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
	}
	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21.
	 */

	function getContrastRatio(foreground, background) {
	  const lumA = getLuminance(foreground);
	  const lumB = getLuminance(background);
	  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
	}
	/**
	 * Sets the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} value - value to set the alpha channel to in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function alpha(color, value) {
	  color = decomposeColor(color);
	  value = clamp(value);

	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }

	  if (color.type === 'color') {
	    color.values[3] = `/${value}`;
	  } else {
	    color.values[3] = value;
	  }

	  return recomposeColor(color);
	}
	/**
	 * Darkens a color.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function darken(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }

	  return recomposeColor(color);
	}
	/**
	 * Lightens a color.
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */

	function lighten(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient);

	  if (color.type.indexOf('hsl') !== -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  } else if (color.type.indexOf('color') !== -1) {
	    for (let i = 0; i < 3; i += 1) {
	      color.values[i] += (1 - color.values[i]) * coefficient;
	    }
	  }

	  return recomposeColor(color);
	}

	function createMixins(breakpoints, mixins) {
	  return _extends$3({
	    toolbar: {
	      minHeight: 56,
	      [breakpoints.up('xs')]: {
	        '@media (orientation: landscape)': {
	          minHeight: 48
	        }
	      },
	      [breakpoints.up('sm')]: {
	        minHeight: 64
	      }
	    }
	  }, mixins);
	}

	const common = {
	  black: '#000',
	  white: '#fff'
	};
	var common$1 = common;

	const grey = {
	  50: '#fafafa',
	  100: '#f5f5f5',
	  200: '#eeeeee',
	  300: '#e0e0e0',
	  400: '#bdbdbd',
	  500: '#9e9e9e',
	  600: '#757575',
	  700: '#616161',
	  800: '#424242',
	  900: '#212121',
	  A100: '#f5f5f5',
	  A200: '#eeeeee',
	  A400: '#bdbdbd',
	  A700: '#616161'
	};
	var grey$1 = grey;

	const purple = {
	  50: '#f3e5f5',
	  100: '#e1bee7',
	  200: '#ce93d8',
	  300: '#ba68c8',
	  400: '#ab47bc',
	  500: '#9c27b0',
	  600: '#8e24aa',
	  700: '#7b1fa2',
	  800: '#6a1b9a',
	  900: '#4a148c',
	  A100: '#ea80fc',
	  A200: '#e040fb',
	  A400: '#d500f9',
	  A700: '#aa00ff'
	};
	var purple$1 = purple;

	const red = {
	  50: '#ffebee',
	  100: '#ffcdd2',
	  200: '#ef9a9a',
	  300: '#e57373',
	  400: '#ef5350',
	  500: '#f44336',
	  600: '#e53935',
	  700: '#d32f2f',
	  800: '#c62828',
	  900: '#b71c1c',
	  A100: '#ff8a80',
	  A200: '#ff5252',
	  A400: '#ff1744',
	  A700: '#d50000'
	};
	var red$1 = red;

	const orange = {
	  50: '#fff3e0',
	  100: '#ffe0b2',
	  200: '#ffcc80',
	  300: '#ffb74d',
	  400: '#ffa726',
	  500: '#ff9800',
	  600: '#fb8c00',
	  700: '#f57c00',
	  800: '#ef6c00',
	  900: '#e65100',
	  A100: '#ffd180',
	  A200: '#ffab40',
	  A400: '#ff9100',
	  A700: '#ff6d00'
	};
	var orange$1 = orange;

	const blue = {
	  50: '#e3f2fd',
	  100: '#bbdefb',
	  200: '#90caf9',
	  300: '#64b5f6',
	  400: '#42a5f5',
	  500: '#2196f3',
	  600: '#1e88e5',
	  700: '#1976d2',
	  800: '#1565c0',
	  900: '#0d47a1',
	  A100: '#82b1ff',
	  A200: '#448aff',
	  A400: '#2979ff',
	  A700: '#2962ff'
	};
	var blue$1 = blue;

	const lightBlue = {
	  50: '#e1f5fe',
	  100: '#b3e5fc',
	  200: '#81d4fa',
	  300: '#4fc3f7',
	  400: '#29b6f6',
	  500: '#03a9f4',
	  600: '#039be5',
	  700: '#0288d1',
	  800: '#0277bd',
	  900: '#01579b',
	  A100: '#80d8ff',
	  A200: '#40c4ff',
	  A400: '#00b0ff',
	  A700: '#0091ea'
	};
	var lightBlue$1 = lightBlue;

	const green = {
	  50: '#e8f5e9',
	  100: '#c8e6c9',
	  200: '#a5d6a7',
	  300: '#81c784',
	  400: '#66bb6a',
	  500: '#4caf50',
	  600: '#43a047',
	  700: '#388e3c',
	  800: '#2e7d32',
	  900: '#1b5e20',
	  A100: '#b9f6ca',
	  A200: '#69f0ae',
	  A400: '#00e676',
	  A700: '#00c853'
	};
	var green$1 = green;

	const _excluded$b = ["mode", "contrastThreshold", "tonalOffset"];
	const light = {
	  // The colors used to style the text.
	  text: {
	    // The most important text.
	    primary: 'rgba(0, 0, 0, 0.87)',
	    // Secondary text.
	    secondary: 'rgba(0, 0, 0, 0.6)',
	    // Disabled text have even lower visual prominence.
	    disabled: 'rgba(0, 0, 0, 0.38)'
	  },
	  // The color used to divide different elements.
	  divider: 'rgba(0, 0, 0, 0.12)',
	  // The background colors used to style the surfaces.
	  // Consistency between these values is important.
	  background: {
	    paper: common$1.white,
	    default: common$1.white
	  },
	  // The colors used to style the action elements.
	  action: {
	    // The color of an active action like an icon button.
	    active: 'rgba(0, 0, 0, 0.54)',
	    // The color of an hovered action.
	    hover: 'rgba(0, 0, 0, 0.04)',
	    hoverOpacity: 0.04,
	    // The color of a selected action.
	    selected: 'rgba(0, 0, 0, 0.08)',
	    selectedOpacity: 0.08,
	    // The color of a disabled action.
	    disabled: 'rgba(0, 0, 0, 0.26)',
	    // The background color of a disabled action.
	    disabledBackground: 'rgba(0, 0, 0, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(0, 0, 0, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.12
	  }
	};
	const dark = {
	  text: {
	    primary: common$1.white,
	    secondary: 'rgba(255, 255, 255, 0.7)',
	    disabled: 'rgba(255, 255, 255, 0.5)',
	    icon: 'rgba(255, 255, 255, 0.5)'
	  },
	  divider: 'rgba(255, 255, 255, 0.12)',
	  background: {
	    paper: '#121212',
	    default: '#121212'
	  },
	  action: {
	    active: common$1.white,
	    hover: 'rgba(255, 255, 255, 0.08)',
	    hoverOpacity: 0.08,
	    selected: 'rgba(255, 255, 255, 0.16)',
	    selectedOpacity: 0.16,
	    disabled: 'rgba(255, 255, 255, 0.3)',
	    disabledBackground: 'rgba(255, 255, 255, 0.12)',
	    disabledOpacity: 0.38,
	    focus: 'rgba(255, 255, 255, 0.12)',
	    focusOpacity: 0.12,
	    activatedOpacity: 0.24
	  }
	};

	function addLightOrDark(intent, direction, shade, tonalOffset) {
	  const tonalOffsetLight = tonalOffset.light || tonalOffset;
	  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

	  if (!intent[direction]) {
	    if (intent.hasOwnProperty(shade)) {
	      intent[direction] = intent[shade];
	    } else if (direction === 'light') {
	      intent.light = lighten(intent.main, tonalOffsetLight);
	    } else if (direction === 'dark') {
	      intent.dark = darken(intent.main, tonalOffsetDark);
	    }
	  }
	}

	function getDefaultPrimary(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: blue$1[200],
	      light: blue$1[50],
	      dark: blue$1[400]
	    };
	  }

	  return {
	    main: blue$1[700],
	    light: blue$1[400],
	    dark: blue$1[800]
	  };
	}

	function getDefaultSecondary(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: purple$1[200],
	      light: purple$1[50],
	      dark: purple$1[400]
	    };
	  }

	  return {
	    main: purple$1[500],
	    light: purple$1[300],
	    dark: purple$1[700]
	  };
	}

	function getDefaultError(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: red$1[500],
	      light: red$1[300],
	      dark: red$1[700]
	    };
	  }

	  return {
	    main: red$1[700],
	    light: red$1[400],
	    dark: red$1[800]
	  };
	}

	function getDefaultInfo(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: lightBlue$1[400],
	      light: lightBlue$1[300],
	      dark: lightBlue$1[700]
	    };
	  }

	  return {
	    main: lightBlue$1[700],
	    light: lightBlue$1[500],
	    dark: lightBlue$1[900]
	  };
	}

	function getDefaultSuccess(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: green$1[400],
	      light: green$1[300],
	      dark: green$1[700]
	    };
	  }

	  return {
	    main: green$1[800],
	    light: green$1[500],
	    dark: green$1[900]
	  };
	}

	function getDefaultWarning(mode = 'light') {
	  if (mode === 'dark') {
	    return {
	      main: orange$1[400],
	      light: orange$1[300],
	      dark: orange$1[700]
	    };
	  }

	  return {
	    main: '#ed6c02',
	    // closest to orange[800] that pass 3:1.
	    light: orange$1[500],
	    dark: orange$1[900]
	  };
	}

	function createPalette(palette) {
	  const {
	    mode = 'light',
	    contrastThreshold = 3,
	    tonalOffset = 0.2
	  } = palette,
	        other = _objectWithoutPropertiesLoose$2(palette, _excluded$b);

	  const primary = palette.primary || getDefaultPrimary(mode);
	  const secondary = palette.secondary || getDefaultSecondary(mode);
	  const error = palette.error || getDefaultError(mode);
	  const info = palette.info || getDefaultInfo(mode);
	  const success = palette.success || getDefaultSuccess(mode);
	  const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
	  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
	  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

	  function getContrastText(background) {
	    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

	    return contrastText;
	  }

	  const augmentColor = ({
	    color,
	    name,
	    mainShade = 500,
	    lightShade = 300,
	    darkShade = 700
	  }) => {
	    color = _extends$3({}, color);

	    if (!color.main && color[mainShade]) {
	      color.main = color[mainShade];
	    }

	    if (!color.hasOwnProperty('main')) {
	      throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
	    }

	    if (typeof color.main !== 'string') {
	      throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
	    }

	    addLightOrDark(color, 'light', lightShade, tonalOffset);
	    addLightOrDark(color, 'dark', darkShade, tonalOffset);

	    if (!color.contrastText) {
	      color.contrastText = getContrastText(color.main);
	    }

	    return color;
	  };

	  const modes = {
	    dark,
	    light
	  };

	  const paletteOutput = deepmerge(_extends$3({
	    // A collection of common colors.
	    common: _extends$3({}, common$1),
	    // prevent mutable object.
	    // The palette mode, can be light or dark.
	    mode,
	    // The colors used to represent primary interface elements for a user.
	    primary: augmentColor({
	      color: primary,
	      name: 'primary'
	    }),
	    // The colors used to represent secondary interface elements for a user.
	    secondary: augmentColor({
	      color: secondary,
	      name: 'secondary',
	      mainShade: 'A400',
	      lightShade: 'A200',
	      darkShade: 'A700'
	    }),
	    // The colors used to represent interface elements that the user should be made aware of.
	    error: augmentColor({
	      color: error,
	      name: 'error'
	    }),
	    // The colors used to represent potentially dangerous actions or important messages.
	    warning: augmentColor({
	      color: warning,
	      name: 'warning'
	    }),
	    // The colors used to present information to the user that is neutral and not necessarily important.
	    info: augmentColor({
	      color: info,
	      name: 'info'
	    }),
	    // The colors used to indicate the successful completion of an action that user triggered.
	    success: augmentColor({
	      color: success,
	      name: 'success'
	    }),
	    // The grey colors.
	    grey: grey$1,
	    // Used by `getContrastText()` to maximize the contrast between
	    // the background and the text.
	    contrastThreshold,
	    // Takes a background color and returns the text color that maximizes the contrast.
	    getContrastText,
	    // Generate a rich color object.
	    augmentColor,
	    // Used by the functions below to shift a color's luminance by approximately
	    // two indexes within its tonal palette.
	    // E.g., shift from Red 500 to Red 300 or Red 700.
	    tonalOffset
	  }, modes[mode]), other);
	  return paletteOutput;
	}

	const _excluded$a = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

	function round(value) {
	  return Math.round(value * 1e5) / 1e5;
	}

	const caseAllCaps = {
	  textTransform: 'uppercase'
	};
	const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
	/**
	 * @see @link{https://material.io/design/typography/the-type-system.html}
	 * @see @link{https://material.io/design/typography/understanding-typography.html}
	 */

	function createTypography(palette, typography) {
	  const _ref = typeof typography === 'function' ? typography(palette) : typography,
	        {
	    fontFamily = defaultFontFamily,
	    // The default font size of the Material Specification.
	    fontSize = 14,
	    // px
	    fontWeightLight = 300,
	    fontWeightRegular = 400,
	    fontWeightMedium = 500,
	    fontWeightBold = 700,
	    // Tell MUI what's the font-size on the html element.
	    // 16px is the default font-size used by browsers.
	    htmlFontSize = 16,
	    // Apply the CSS properties to all the variants.
	    allVariants,
	    pxToRem: pxToRem2
	  } = _ref,
	        other = _objectWithoutPropertiesLoose$2(_ref, _excluded$a);

	  const coef = fontSize / 14;

	  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

	  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$3({
	    fontFamily,
	    fontWeight,
	    fontSize: pxToRem(size),
	    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
	    lineHeight
	  }, fontFamily === defaultFontFamily ? {
	    letterSpacing: `${round(letterSpacing / size)}em`
	  } : {}, casing, allVariants);

	  const variants = {
	    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
	    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
	    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
	    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
	    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
	    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
	    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
	    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
	    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
	    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
	    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
	    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
	    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
	  };
	  return deepmerge(_extends$3({
	    htmlFontSize,
	    pxToRem,
	    fontFamily,
	    fontSize,
	    fontWeightLight,
	    fontWeightRegular,
	    fontWeightMedium,
	    fontWeightBold
	  }, variants), other, {
	    clone: false // No need to clone deep

	  });
	}

	const shadowKeyUmbraOpacity = 0.2;
	const shadowKeyPenumbraOpacity = 0.14;
	const shadowAmbientShadowOpacity = 0.12;

	function createShadow(...px) {
	  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
	} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


	const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
	var shadows$1 = shadows;

	const _excluded$9 = ["duration", "easing", "delay"];
	// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
	// to learn the context in which each easing should be used.
	const easing = {
	  // This is the most common easing curve.
	  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	  // Objects enter the screen at full velocity from off-screen and
	  // slowly decelerate to a resting point.
	  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
	  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
	  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
	  // The sharp curve is used by objects that may return to the screen at any time.
	  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
	}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
	// to learn when use what timing

	const duration = {
	  shortest: 150,
	  shorter: 200,
	  short: 250,
	  // most basic recommended timing
	  standard: 300,
	  // this is to be used in complex animations
	  complex: 375,
	  // recommended when something is entering screen
	  enteringScreen: 225,
	  // recommended when something is leaving screen
	  leavingScreen: 195
	};

	function formatMs(milliseconds) {
	  return `${Math.round(milliseconds)}ms`;
	}

	function getAutoHeightDuration(height) {
	  if (!height) {
	    return 0;
	  }

	  const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

	  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
	}

	function createTransitions(inputTransitions) {
	  const mergedEasing = _extends$3({}, easing, inputTransitions.easing);

	  const mergedDuration = _extends$3({}, duration, inputTransitions.duration);

	  const create = (props = ['all'], options = {}) => {
	    const {
	      duration: durationOption = mergedDuration.standard,
	      easing: easingOption = mergedEasing.easeInOut,
	      delay = 0
	    } = options;
	          _objectWithoutPropertiesLoose$2(options, _excluded$9);

	    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
	  };

	  return _extends$3({
	    getAutoHeightDuration,
	    create
	  }, inputTransitions, {
	    easing: mergedEasing,
	    duration: mergedDuration
	  });
	}

	// We need to centralize the zIndex definitions as they work
	// like global values in the browser.
	const zIndex = {
	  mobileStepper: 1000,
	  fab: 1050,
	  speedDial: 1050,
	  appBar: 1100,
	  drawer: 1200,
	  modal: 1300,
	  snackbar: 1400,
	  tooltip: 1500
	};
	var zIndex$1 = zIndex;

	const _excluded$8 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

	function createTheme(options = {}, ...args) {
	  const {
	    mixins: mixinsInput = {},
	    palette: paletteInput = {},
	    transitions: transitionsInput = {},
	    typography: typographyInput = {}
	  } = options,
	        other = _objectWithoutPropertiesLoose$2(options, _excluded$8);

	  if (options.vars) {
	    throw new Error(formatMuiErrorMessage(18));
	  }

	  const palette = createPalette(paletteInput);
	  const systemTheme = createTheme$1(options);
	  let muiTheme = deepmerge(systemTheme, {
	    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
	    palette,
	    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
	    shadows: shadows$1.slice(),
	    typography: createTypography(palette, typographyInput),
	    transitions: createTransitions(transitionsInput),
	    zIndex: _extends$3({}, zIndex$1)
	  });
	  muiTheme = deepmerge(muiTheme, other);
	  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);

	  return muiTheme;
	}

	const defaultTheme = createTheme();
	var defaultTheme$1 = defaultTheme;

	function useThemeProps({
	  props,
	  name
	}) {
	  return useThemeProps$1({
	    props,
	    name,
	    defaultTheme: defaultTheme$1
	  });
	}

	const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
	const styled = createStyled({
	  defaultTheme: defaultTheme$1,
	  rootShouldForwardProp
	});
	var styled$1 = styled;

	function getTableUtilityClass(slot) {
	  return generateUtilityClass('MuiTable', slot);
	}
	generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);

	const _excluded$7 = ["className", "component", "padding", "size", "stickyHeader"];

	const useUtilityClasses$6 = ownerState => {
	  const {
	    classes,
	    stickyHeader
	  } = ownerState;
	  const slots = {
	    root: ['root', stickyHeader && 'stickyHeader']
	  };
	  return composeClasses(slots, getTableUtilityClass, classes);
	};

	const TableRoot = styled$1('table', {
	  name: 'MuiTable',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$3({
	  display: 'table',
	  width: '100%',
	  borderCollapse: 'collapse',
	  borderSpacing: 0,
	  '& caption': _extends$3({}, theme.typography.body2, {
	    padding: theme.spacing(2),
	    color: (theme.vars || theme).palette.text.secondary,
	    textAlign: 'left',
	    captionSide: 'bottom'
	  })
	}, ownerState.stickyHeader && {
	  borderCollapse: 'separate'
	}));
	const defaultComponent$3 = 'table';
	const Table = /*#__PURE__*/react.exports.forwardRef(function Table(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiTable'
	  });

	  const {
	    className,
	    component = defaultComponent$3,
	    padding = 'normal',
	    size = 'medium',
	    stickyHeader = false
	  } = props,
	        other = _objectWithoutPropertiesLoose$2(props, _excluded$7);

	  const ownerState = _extends$3({}, props, {
	    component,
	    padding,
	    size,
	    stickyHeader
	  });

	  const classes = useUtilityClasses$6(ownerState);
	  const table = react.exports.useMemo(() => ({
	    padding,
	    size,
	    stickyHeader
	  }), [padding, size, stickyHeader]);
	  return /*#__PURE__*/jsxRuntime.exports.jsx(TableContext$1.Provider, {
	    value: table,
	    children: /*#__PURE__*/jsxRuntime.exports.jsx(TableRoot, _extends$3({
	      as: component,
	      role: component === defaultComponent$3 ? null : 'table',
	      ref: ref,
	      className: clsx(classes.root, className),
	      ownerState: ownerState
	    }, other))
	  });
	});
	var Table$1 = Table;

	/**
	 * @ignore - internal component.
	 */

	const Tablelvl2Context = /*#__PURE__*/react.exports.createContext();

	var Tablelvl2Context$1 = Tablelvl2Context;

	function getTableBodyUtilityClass(slot) {
	  return generateUtilityClass('MuiTableBody', slot);
	}
	generateUtilityClasses('MuiTableBody', ['root']);

	const _excluded$6 = ["className", "component"];

	const useUtilityClasses$5 = ownerState => {
	  const {
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root']
	  };
	  return composeClasses(slots, getTableBodyUtilityClass, classes);
	};

	const TableBodyRoot = styled$1('tbody', {
	  name: 'MuiTableBody',
	  slot: 'Root',
	  overridesResolver: (props, styles) => styles.root
	})({
	  display: 'table-row-group'
	});
	const tablelvl2$1 = {
	  variant: 'body'
	};
	const defaultComponent$2 = 'tbody';
	const TableBody = /*#__PURE__*/react.exports.forwardRef(function TableBody(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiTableBody'
	  });

	  const {
	    className,
	    component = defaultComponent$2
	  } = props,
	        other = _objectWithoutPropertiesLoose$2(props, _excluded$6);

	  const ownerState = _extends$3({}, props, {
	    component
	  });

	  const classes = useUtilityClasses$5(ownerState);
	  return /*#__PURE__*/jsxRuntime.exports.jsx(Tablelvl2Context$1.Provider, {
	    value: tablelvl2$1,
	    children: /*#__PURE__*/jsxRuntime.exports.jsx(TableBodyRoot, _extends$3({
	      className: clsx(classes.root, className),
	      as: component,
	      ref: ref,
	      role: component === defaultComponent$2 ? null : 'rowgroup',
	      ownerState: ownerState
	    }, other))
	  });
	});
	var TableBody$1 = TableBody;

	function getTableCellUtilityClass(slot) {
	  return generateUtilityClass('MuiTableCell', slot);
	}
	const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
	var tableCellClasses$1 = tableCellClasses;

	const _excluded$5 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];

	const useUtilityClasses$4 = ownerState => {
	  const {
	    classes,
	    variant,
	    align,
	    padding,
	    size,
	    stickyHeader
	  } = ownerState;
	  const slots = {
	    root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${capitalize(align)}`, padding !== 'normal' && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
	  };
	  return composeClasses(slots, getTableCellUtilityClass, classes);
	};

	const TableCellRoot = styled$1('td', {
	  name: 'MuiTableCell',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
	  }
	})(({
	  theme,
	  ownerState
	}) => _extends$3({}, theme.typography.body2, {
	  display: 'table-cell',
	  verticalAlign: 'inherit',
	  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
	  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
	  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
	  textAlign: 'left',
	  padding: 16
	}, ownerState.variant === 'head' && {
	  color: (theme.vars || theme).palette.text.primary,
	  lineHeight: theme.typography.pxToRem(24),
	  fontWeight: theme.typography.fontWeightMedium
	}, ownerState.variant === 'body' && {
	  color: (theme.vars || theme).palette.text.primary
	}, ownerState.variant === 'footer' && {
	  color: (theme.vars || theme).palette.text.secondary,
	  lineHeight: theme.typography.pxToRem(21),
	  fontSize: theme.typography.pxToRem(12)
	}, ownerState.size === 'small' && {
	  padding: '6px 16px',
	  [`&.${tableCellClasses$1.paddingCheckbox}`]: {
	    width: 24,
	    // prevent the checkbox column from growing
	    padding: '0 12px 0 16px',
	    '& > *': {
	      padding: 0
	    }
	  }
	}, ownerState.padding === 'checkbox' && {
	  width: 48,
	  // prevent the checkbox column from growing
	  padding: '0 0 0 4px'
	}, ownerState.padding === 'none' && {
	  padding: 0
	}, ownerState.align === 'left' && {
	  textAlign: 'left'
	}, ownerState.align === 'center' && {
	  textAlign: 'center'
	}, ownerState.align === 'right' && {
	  textAlign: 'right',
	  flexDirection: 'row-reverse'
	}, ownerState.align === 'justify' && {
	  textAlign: 'justify'
	}, ownerState.stickyHeader && {
	  position: 'sticky',
	  top: 0,
	  zIndex: 2,
	  backgroundColor: (theme.vars || theme).palette.background.default
	}));
	/**
	 * The component renders a `<th>` element when the parent context is a header
	 * or otherwise a `<td>` element.
	 */

	const TableCell = /*#__PURE__*/react.exports.forwardRef(function TableCell(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiTableCell'
	  });

	  const {
	    align = 'inherit',
	    className,
	    component: componentProp,
	    padding: paddingProp,
	    scope: scopeProp,
	    size: sizeProp,
	    sortDirection,
	    variant: variantProp
	  } = props,
	        other = _objectWithoutPropertiesLoose$2(props, _excluded$5);

	  const table = react.exports.useContext(TableContext$1);
	  const tablelvl2 = react.exports.useContext(Tablelvl2Context$1);
	  const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
	  let component;

	  if (componentProp) {
	    component = componentProp;
	  } else {
	    component = isHeadCell ? 'th' : 'td';
	  }

	  let scope = scopeProp;

	  if (!scope && isHeadCell) {
	    scope = 'col';
	  }

	  const variant = variantProp || tablelvl2 && tablelvl2.variant;

	  const ownerState = _extends$3({}, props, {
	    align,
	    component,
	    padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
	    size: sizeProp || (table && table.size ? table.size : 'medium'),
	    sortDirection,
	    stickyHeader: variant === 'head' && table && table.stickyHeader,
	    variant
	  });

	  const classes = useUtilityClasses$4(ownerState);
	  let ariaSort = null;

	  if (sortDirection) {
	    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
	  }

	  return /*#__PURE__*/jsxRuntime.exports.jsx(TableCellRoot, _extends$3({
	    as: component,
	    ref: ref,
	    className: clsx(classes.root, className),
	    "aria-sort": ariaSort,
	    scope: scope,
	    ownerState: ownerState
	  }, other));
	});
	var TableCell$1 = TableCell;

	function getTableContainerUtilityClass(slot) {
	  return generateUtilityClass('MuiTableContainer', slot);
	}
	generateUtilityClasses('MuiTableContainer', ['root']);

	const _excluded$4 = ["className", "component"];

	const useUtilityClasses$3 = ownerState => {
	  const {
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root']
	  };
	  return composeClasses(slots, getTableContainerUtilityClass, classes);
	};

	const TableContainerRoot = styled$1('div', {
	  name: 'MuiTableContainer',
	  slot: 'Root',
	  overridesResolver: (props, styles) => styles.root
	})({
	  width: '100%',
	  overflowX: 'auto'
	});
	const TableContainer = /*#__PURE__*/react.exports.forwardRef(function TableContainer(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiTableContainer'
	  });

	  const {
	    className,
	    component = 'div'
	  } = props,
	        other = _objectWithoutPropertiesLoose$2(props, _excluded$4);

	  const ownerState = _extends$3({}, props, {
	    component
	  });

	  const classes = useUtilityClasses$3(ownerState);
	  return /*#__PURE__*/jsxRuntime.exports.jsx(TableContainerRoot, _extends$3({
	    ref: ref,
	    as: component,
	    className: clsx(classes.root, className),
	    ownerState: ownerState
	  }, other));
	});
	var TableContainer$1 = TableContainer;

	function getTableHeadUtilityClass(slot) {
	  return generateUtilityClass('MuiTableHead', slot);
	}
	generateUtilityClasses('MuiTableHead', ['root']);

	const _excluded$3 = ["className", "component"];

	const useUtilityClasses$2 = ownerState => {
	  const {
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root']
	  };
	  return composeClasses(slots, getTableHeadUtilityClass, classes);
	};

	const TableHeadRoot = styled$1('thead', {
	  name: 'MuiTableHead',
	  slot: 'Root',
	  overridesResolver: (props, styles) => styles.root
	})({
	  display: 'table-header-group'
	});
	const tablelvl2 = {
	  variant: 'head'
	};
	const defaultComponent$1 = 'thead';
	const TableHead = /*#__PURE__*/react.exports.forwardRef(function TableHead(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiTableHead'
	  });

	  const {
	    className,
	    component = defaultComponent$1
	  } = props,
	        other = _objectWithoutPropertiesLoose$2(props, _excluded$3);

	  const ownerState = _extends$3({}, props, {
	    component
	  });

	  const classes = useUtilityClasses$2(ownerState);
	  return /*#__PURE__*/jsxRuntime.exports.jsx(Tablelvl2Context$1.Provider, {
	    value: tablelvl2,
	    children: /*#__PURE__*/jsxRuntime.exports.jsx(TableHeadRoot, _extends$3({
	      as: component,
	      className: clsx(classes.root, className),
	      ref: ref,
	      role: component === defaultComponent$1 ? null : 'rowgroup',
	      ownerState: ownerState
	    }, other))
	  });
	});
	var TableHead$1 = TableHead;

	function getTableRowUtilityClass(slot) {
	  return generateUtilityClass('MuiTableRow', slot);
	}
	const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
	var tableRowClasses$1 = tableRowClasses;

	const _excluded$2 = ["className", "component", "hover", "selected"];

	const useUtilityClasses$1 = ownerState => {
	  const {
	    classes,
	    selected,
	    hover,
	    head,
	    footer
	  } = ownerState;
	  const slots = {
	    root: ['root', selected && 'selected', hover && 'hover', head && 'head', footer && 'footer']
	  };
	  return composeClasses(slots, getTableRowUtilityClass, classes);
	};

	const TableRowRoot = styled$1('tr', {
	  name: 'MuiTableRow',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
	  }
	})(({
	  theme
	}) => ({
	  color: 'inherit',
	  display: 'table-row',
	  verticalAlign: 'middle',
	  // We disable the focus ring for mouse, touch and keyboard users.
	  outline: 0,
	  [`&.${tableRowClasses$1.hover}:hover`]: {
	    backgroundColor: (theme.vars || theme).palette.action.hover
	  },
	  [`&.${tableRowClasses$1.selected}`]: {
	    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
	    '&:hover': {
	      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
	    }
	  }
	}));
	const defaultComponent = 'tr';
	/**
	 * Will automatically set dynamic row height
	 * based on the material table element parent (head, body, etc).
	 */

	const TableRow = /*#__PURE__*/react.exports.forwardRef(function TableRow(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiTableRow'
	  });

	  const {
	    className,
	    component = defaultComponent,
	    hover = false,
	    selected = false
	  } = props,
	        other = _objectWithoutPropertiesLoose$2(props, _excluded$2);

	  const tablelvl2 = react.exports.useContext(Tablelvl2Context$1);

	  const ownerState = _extends$3({}, props, {
	    component,
	    hover,
	    selected,
	    head: tablelvl2 && tablelvl2.variant === 'head',
	    footer: tablelvl2 && tablelvl2.variant === 'footer'
	  });

	  const classes = useUtilityClasses$1(ownerState);
	  return /*#__PURE__*/jsxRuntime.exports.jsx(TableRowRoot, _extends$3({
	    as: component,
	    ref: ref,
	    className: clsx(classes.root, className),
	    role: component === defaultComponent ? null : 'row',
	    ownerState: ownerState
	  }, other));
	});
	var TableRow$1 = TableRow;

	function getPaperUtilityClass(slot) {
	  return generateUtilityClass('MuiPaper', slot);
	}
	generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

	const _excluded$1 = ["className", "component", "elevation", "square", "variant"];
	const getOverlayAlpha = elevation => {
	  let alphaValue;

	  if (elevation < 1) {
	    alphaValue = 5.11916 * elevation ** 2;
	  } else {
	    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
	  }

	  return (alphaValue / 100).toFixed(2);
	};

	const useUtilityClasses = ownerState => {
	  const {
	    square,
	    elevation,
	    variant,
	    classes
	  } = ownerState;
	  const slots = {
	    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
	  };
	  return composeClasses(slots, getPaperUtilityClass, classes);
	};

	const PaperRoot = styled$1('div', {
	  name: 'MuiPaper',
	  slot: 'Root',
	  overridesResolver: (props, styles) => {
	    const {
	      ownerState
	    } = props;
	    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
	  }
	})(({
	  theme,
	  ownerState
	}) => {
	  var _theme$vars$overlays;

	  return _extends$3({
	    backgroundColor: (theme.vars || theme).palette.background.paper,
	    color: (theme.vars || theme).palette.text.primary,
	    transition: theme.transitions.create('box-shadow')
	  }, !ownerState.square && {
	    borderRadius: theme.shape.borderRadius
	  }, ownerState.variant === 'outlined' && {
	    border: `1px solid ${(theme.vars || theme).palette.divider}`
	  }, ownerState.variant === 'elevation' && _extends$3({
	    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
	  }, !theme.vars && theme.palette.mode === 'dark' && {
	    backgroundImage: `linear-gradient(${alpha('#fff', getOverlayAlpha(ownerState.elevation))}, ${alpha('#fff', getOverlayAlpha(ownerState.elevation))})`
	  }, theme.vars && {
	    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
	  }));
	});
	const Paper = /*#__PURE__*/react.exports.forwardRef(function Paper(inProps, ref) {
	  const props = useThemeProps({
	    props: inProps,
	    name: 'MuiPaper'
	  });

	  const {
	    className,
	    component = 'div',
	    elevation = 1,
	    square = false,
	    variant = 'elevation'
	  } = props,
	        other = _objectWithoutPropertiesLoose$2(props, _excluded$1);

	  const ownerState = _extends$3({}, props, {
	    component,
	    elevation,
	    square,
	    variant
	  });

	  const classes = useUtilityClasses(ownerState);

	  return /*#__PURE__*/jsxRuntime.exports.jsx(PaperRoot, _extends$3({
	    as: component,
	    ownerState: ownerState,
	    className: clsx(classes.root, className),
	    ref: ref
	  }, other));
	});
	var Paper$1 = Paper;

	var Report = /*#__PURE__*/function (_React$Component) {
	  _inherits(Report, _React$Component);

	  var _super = _createSuper(Report);

	  function Report() {
	    var _this;

	    _classCallCheck(this, Report);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "state", {
	      user: _this.props.response.username,
	      role: _this.props.response.role,
	      employees: _this.props.response.response.emp,
	      seats: Number((_this.props.response.response.emp * 0.65).toFixed(0)),
	      departmentlist: _this.props.response.response.departments,
	      subDepartmentlist: _this.props.response.response.subDepartments
	    });

	    _defineProperty(_assertThisInitialized(_this), "rows", [_this.createData('Project 1', 32, 32, 32, 32, 32), _this.createData('Project 2', 32, 32, 32, 32, 32), _this.createData('Project 3', 46, 46, 46, 46, 46)]);

	    return _this;
	  }

	  _createClass(Report, [{
	    key: "createData",
	    value: function createData(prj, mon, tue, wed, thu, fri) {
	      return {
	        prj: prj,
	        mon: mon,
	        tue: tue,
	        wed: wed,
	        thu: thu,
	        fri: fri
	      };
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form$1, {
	        className: "container"
	      }, /*#__PURE__*/React.createElement(Form$1.Label, null, "Select department"), /*#__PURE__*/React.createElement(Form$1.Select, {
	        className: "department-list",
	        "aria-label": "Default select example"
	      }, /*#__PURE__*/React.createElement("option", null, "Select Department"), this.state.departmentlist.map(function (value) {
	        return /*#__PURE__*/React.createElement("option", {
	          value: value
	        }, value);
	      })), this.state.role === "manager" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form$1.Label, null, "Select sub-department"), /*#__PURE__*/React.createElement(Form$1.Select, {
	        className: "department-list",
	        "aria-label": "Default select example"
	      }, /*#__PURE__*/React.createElement("option", null, "Select sub-department"), this.state.subDepartmentlist.map(function (value) {
	        return /*#__PURE__*/React.createElement("option", {
	          value: value
	        }, value);
	      })), /*#__PURE__*/React.createElement("div", {
	        className: "date-range"
	      }, /*#__PURE__*/React.createElement(Form$1.Label, null, "Date "), /*#__PURE__*/React.createElement(Form$1.Control, {
	        type: "date",
	        placeholder: ""
	      }))), /*#__PURE__*/React.createElement(Button$1, {
	        className: "btn",
	        variant: "primary",
	        type: "submit"
	      }, "View allocation"), /*#__PURE__*/React.createElement(Form$1.Label, null, "Employee count"), /*#__PURE__*/React.createElement(Form$1.Control, {
	        type: "name",
	        placeholder: "",
	        value: this.state.employees,
	        className: "empCount",
	        disabled: true
	      }), /*#__PURE__*/React.createElement(Form$1.Label, null, "Allocate seats"), /*#__PURE__*/React.createElement(Form$1.Control, {
	        type: "number",
	        placeholder: "",
	        value: this.state.seats
	      })), this.state.role === "manager" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableContainer$1, {
	        component: Paper$1
	      }, /*#__PURE__*/React.createElement(Table$1, {
	        sx: {
	          minWidth: 650
	        },
	        size: "small",
	        "aria-label": "a dense table"
	      }, /*#__PURE__*/React.createElement(TableHead$1, null, /*#__PURE__*/React.createElement(TableRow$1, null, /*#__PURE__*/React.createElement(TableCell$1, null, "Project"), /*#__PURE__*/React.createElement(TableCell$1, {
	        align: "right"
	      }, "Mon"), /*#__PURE__*/React.createElement(TableCell$1, {
	        align: "right"
	      }, "Tue"), /*#__PURE__*/React.createElement(TableCell$1, {
	        align: "right"
	      }, "Wed"), /*#__PURE__*/React.createElement(TableCell$1, {
	        align: "right"
	      }, "Thu"), /*#__PURE__*/React.createElement(TableCell$1, {
	        align: "right"
	      }, "Fri"))), /*#__PURE__*/React.createElement(TableBody$1, null, this.rows.map(function (row) {
	        return /*#__PURE__*/React.createElement(TableRow$1, {
	          key: row.name,
	          sx: {
	            '&:last-child td, &:last-child th': {
	              border: 0
	            }
	          }
	        }, /*#__PURE__*/React.createElement(TableCell$1, {
	          component: "th",
	          scope: "row"
	        }, row.prj), /*#__PURE__*/React.createElement(TableCell$1, {
	          align: "right"
	        }, row.mon), /*#__PURE__*/React.createElement(TableCell$1, {
	          align: "right"
	        }, row.tue), /*#__PURE__*/React.createElement(TableCell$1, {
	          align: "right"
	        }, row.wed), /*#__PURE__*/React.createElement(TableCell$1, {
	          align: "right"
	        }, row.thu), /*#__PURE__*/React.createElement(TableCell$1, {
	          align: "right"
	        }, row.fri));
	      }))))));
	    }
	  }]);

	  return Report;
	}(React.Component);

	/**
	 * @remix-run/router v1.0.0
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */
	function _extends$2() {
	  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends$2.apply(this, arguments);
	}

	////////////////////////////////////////////////////////////////////////////////
	//#region Types and Constants
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * Actions represent the type of change to a location value.
	 */
	var Action;

	(function (Action) {
	  /**
	   * A POP indicates a change to an arbitrary index in the history stack, such
	   * as a back or forward navigation. It does not describe the direction of the
	   * navigation, only that the current index changed.
	   *
	   * Note: This is the default action for newly created history objects.
	   */
	  Action["Pop"] = "POP";
	  /**
	   * A PUSH indicates a new entry being added to the history stack, such as when
	   * a link is clicked and a new page loads. When this happens, all subsequent
	   * entries in the stack are lost.
	   */

	  Action["Push"] = "PUSH";
	  /**
	   * A REPLACE indicates the entry at the current index in the history stack
	   * being replaced by a new one.
	   */

	  Action["Replace"] = "REPLACE";
	})(Action || (Action = {}));

	const PopStateEventType = "popstate";
	/**
	 * Browser history stores the location in regular URLs. This is the standard for
	 * most web apps, but it requires some configuration on the server to ensure you
	 * serve the same app at multiple URLs.
	 *
	 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
	 */

	function createBrowserHistory(options) {
	  if (options === void 0) {
	    options = {};
	  }

	  function createBrowserLocation(window, globalHistory) {
	    var _globalHistory$state, _globalHistory$state2;

	    let {
	      pathname,
	      search,
	      hash
	    } = window.location;
	    return createLocation("", {
	      pathname,
	      search,
	      hash
	    }, // state defaults to `null` because `window.history.state` does
	    ((_globalHistory$state = globalHistory.state) == null ? void 0 : _globalHistory$state.usr) || null, ((_globalHistory$state2 = globalHistory.state) == null ? void 0 : _globalHistory$state2.key) || "default");
	  }

	  function createBrowserHref(window, to) {
	    return typeof to === "string" ? to : createPath(to);
	  }

	  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
	}

	function createKey() {
	  return Math.random().toString(36).substr(2, 8);
	}
	/**
	 * For browser-based histories, we combine the state and key into an object
	 */


	function getHistoryState(location) {
	  return {
	    usr: location.state,
	    key: location.key
	  };
	}
	/**
	 * Creates a Location object with a unique key from the given Path
	 */


	function createLocation(current, to, state, key) {
	  if (state === void 0) {
	    state = null;
	  }

	  let location = _extends$2({
	    pathname: typeof current === "string" ? current : current.pathname,
	    search: "",
	    hash: ""
	  }, typeof to === "string" ? parsePath(to) : to, {
	    state,
	    // TODO: This could be cleaned up.  push/replace should probably just take
	    // full Locations now and avoid the need to run through this flow at all
	    // But that's a pretty big refactor to the current test suite so going to
	    // keep as is for the time being and just let any incoming keys take precedence
	    key: (to == null ? void 0 : to.key) || key || createKey()
	  });

	  return location;
	}
	/**
	 * Creates a string URL path from the given pathname, search, and hash components.
	 */

	function createPath(_ref) {
	  let {
	    pathname = "/",
	    search = "",
	    hash = ""
	  } = _ref;
	  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	  return pathname;
	}
	/**
	 * Parses a string URL path into its separate pathname, search, and hash components.
	 */

	function parsePath(path) {
	  let parsedPath = {};

	  if (path) {
	    let hashIndex = path.indexOf("#");

	    if (hashIndex >= 0) {
	      parsedPath.hash = path.substr(hashIndex);
	      path = path.substr(0, hashIndex);
	    }

	    let searchIndex = path.indexOf("?");

	    if (searchIndex >= 0) {
	      parsedPath.search = path.substr(searchIndex);
	      path = path.substr(0, searchIndex);
	    }

	    if (path) {
	      parsedPath.pathname = path;
	    }
	  }

	  return parsedPath;
	}

	function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  let {
	    window = document.defaultView,
	    v5Compat = false
	  } = options;
	  let globalHistory = window.history;
	  let action = Action.Pop;
	  let listener = null;

	  function handlePop() {
	    action = Action.Pop;

	    if (listener) {
	      listener({
	        action,
	        location: history.location
	      });
	    }
	  }

	  function push(to, state) {
	    action = Action.Push;
	    let location = createLocation(history.location, to, state);
	    validateLocation == null ? void 0 : validateLocation(location, to);
	    let historyState = getHistoryState(location);
	    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

	    try {
	      globalHistory.pushState(historyState, "", url);
	    } catch (error) {
	      // They are going to lose state here, but there is no real
	      // way to warn them about it since the page will refresh...
	      window.location.assign(url);
	    }

	    if (v5Compat && listener) {
	      listener({
	        action,
	        location
	      });
	    }
	  }

	  function replace(to, state) {
	    action = Action.Replace;
	    let location = createLocation(history.location, to, state);
	    validateLocation == null ? void 0 : validateLocation(location, to);
	    let historyState = getHistoryState(location);
	    let url = history.createHref(location);
	    globalHistory.replaceState(historyState, "", url);

	    if (v5Compat && listener) {
	      listener({
	        action,
	        location: location
	      });
	    }
	  }

	  let history = {
	    get action() {
	      return action;
	    },

	    get location() {
	      return getLocation(window, globalHistory);
	    },

	    listen(fn) {
	      if (listener) {
	        throw new Error("A history only accepts one active listener");
	      }

	      window.addEventListener(PopStateEventType, handlePop);
	      listener = fn;
	      return () => {
	        window.removeEventListener(PopStateEventType, handlePop);
	        listener = null;
	      };
	    },

	    createHref(to) {
	      return createHref(window, to);
	    },

	    push,
	    replace,

	    go(n) {
	      return globalHistory.go(n);
	    }

	  };
	  return history;
	} //#endregion

	var ResultType;

	(function (ResultType) {
	  ResultType["data"] = "data";
	  ResultType["deferred"] = "deferred";
	  ResultType["redirect"] = "redirect";
	  ResultType["error"] = "error";
	})(ResultType || (ResultType = {})); // Walk the route tree generating unique IDs where necessary so we are working
	/**
	 * Matches the given routes to a location and returns the match data.
	 *
	 * @see https://reactrouter.com/docs/en/v6/utils/match-routes
	 */

	function matchRoutes(routes, locationArg, basename) {
	  if (basename === void 0) {
	    basename = "/";
	  }

	  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	  let pathname = stripBasename(location.pathname || "/", basename);

	  if (pathname == null) {
	    return null;
	  }

	  let branches = flattenRoutes(routes);
	  rankRouteBranches(branches);
	  let matches = null;

	  for (let i = 0; matches == null && i < branches.length; ++i) {
	    matches = matchRouteBranch(branches[i], pathname);
	  }

	  return matches;
	}

	function flattenRoutes(routes, branches, parentsMeta, parentPath) {
	  if (branches === void 0) {
	    branches = [];
	  }

	  if (parentsMeta === void 0) {
	    parentsMeta = [];
	  }

	  if (parentPath === void 0) {
	    parentPath = "";
	  }

	  routes.forEach((route, index) => {
	    let meta = {
	      relativePath: route.path || "",
	      caseSensitive: route.caseSensitive === true,
	      childrenIndex: index,
	      route
	    };

	    if (meta.relativePath.startsWith("/")) {
	      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
	      meta.relativePath = meta.relativePath.slice(parentPath.length);
	    }

	    let path = joinPaths([parentPath, meta.relativePath]);
	    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
	    // route tree depth-first and child routes appear before their parents in
	    // the "flattened" version.

	    if (route.children && route.children.length > 0) {
	      invariant(route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
	      flattenRoutes(route.children, branches, routesMeta, path);
	    } // Routes without a path shouldn't ever match by themselves unless they are
	    // index routes, so don't add them to the list of possible branches.


	    if (route.path == null && !route.index) {
	      return;
	    }

	    branches.push({
	      path,
	      score: computeScore(path, route.index),
	      routesMeta
	    });
	  });
	  return branches;
	}

	function rankRouteBranches(branches) {
	  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
	  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
	}

	const paramRe = /^:\w+$/;
	const dynamicSegmentValue = 3;
	const indexRouteValue = 2;
	const emptySegmentValue = 1;
	const staticSegmentValue = 10;
	const splatPenalty = -2;

	const isSplat = s => s === "*";

	function computeScore(path, index) {
	  let segments = path.split("/");
	  let initialScore = segments.length;

	  if (segments.some(isSplat)) {
	    initialScore += splatPenalty;
	  }

	  if (index) {
	    initialScore += indexRouteValue;
	  }

	  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
	}

	function compareIndexes(a, b) {
	  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
	  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
	  // first. This allows people to have fine-grained control over the matching
	  // behavior by simply putting routes with identical paths in the order they
	  // want them tried.
	  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
	  // so they sort equally.
	  0;
	}

	function matchRouteBranch(branch, pathname) {
	  let {
	    routesMeta
	  } = branch;
	  let matchedParams = {};
	  let matchedPathname = "/";
	  let matches = [];

	  for (let i = 0; i < routesMeta.length; ++i) {
	    let meta = routesMeta[i];
	    let end = i === routesMeta.length - 1;
	    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
	    let match = matchPath({
	      path: meta.relativePath,
	      caseSensitive: meta.caseSensitive,
	      end
	    }, remainingPathname);
	    if (!match) return null;
	    Object.assign(matchedParams, match.params);
	    let route = meta.route;
	    matches.push({
	      // TODO: Can this as be avoided?
	      params: matchedParams,
	      pathname: joinPaths([matchedPathname, match.pathname]),
	      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
	      route
	    });

	    if (match.pathnameBase !== "/") {
	      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
	    }
	  }

	  return matches;
	}
	/**
	 * Performs pattern matching on a URL pathname and returns information about
	 * the match.
	 *
	 * @see https://reactrouter.com/docs/en/v6/utils/match-path
	 */

	function matchPath(pattern, pathname) {
	  if (typeof pattern === "string") {
	    pattern = {
	      path: pattern,
	      caseSensitive: false,
	      end: true
	    };
	  }

	  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
	  let match = pathname.match(matcher);
	  if (!match) return null;
	  let matchedPathname = match[0];
	  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
	  let captureGroups = match.slice(1);
	  let params = paramNames.reduce((memo, paramName, index) => {
	    // We need to compute the pathnameBase here using the raw splat value
	    // instead of using params["*"] later because it will be decoded then
	    if (paramName === "*") {
	      let splatValue = captureGroups[index] || "";
	      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
	    }

	    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
	    return memo;
	  }, {});
	  return {
	    params,
	    pathname: matchedPathname,
	    pathnameBase,
	    pattern
	  };
	}

	function compilePath(path, caseSensitive, end) {
	  if (caseSensitive === void 0) {
	    caseSensitive = false;
	  }

	  if (end === void 0) {
	    end = true;
	  }

	  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
	  let paramNames = [];
	  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
	  .replace(/^\/*/, "/") // Make sure it has a leading /
	  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
	  .replace(/:(\w+)/g, (_, paramName) => {
	    paramNames.push(paramName);
	    return "([^\\/]+)";
	  });

	  if (path.endsWith("*")) {
	    paramNames.push("*");
	    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
	    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
	  } else {
	    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
	    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
	    // parent routes to matching only their own words and nothing more, e.g. parent
	    // route "/home" should not match "/home2".
	    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
	    // but do not consume the character in the matched path so they can match against
	    // nested paths.
	    "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
	  }

	  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
	  return [matcher, paramNames];
	}

	function safelyDecodeURIComponent(value, paramName) {
	  try {
	    return decodeURIComponent(value);
	  } catch (error) {
	    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
	    return value;
	  }
	}
	/**
	 * @private
	 */


	function stripBasename(pathname, basename) {
	  if (basename === "/") return pathname;

	  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
	    return null;
	  } // We want to leave trailing slash behavior in the user's control, so if they
	  // specify a basename with a trailing slash, we should support it


	  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
	  let nextChar = pathname.charAt(startIndex);

	  if (nextChar && nextChar !== "/") {
	    // pathname does not start with basename/
	    return null;
	  }

	  return pathname.slice(startIndex) || "/";
	}
	function invariant(value, message) {
	  if (value === false || value === null || typeof value === "undefined") {
	    throw new Error(message);
	  }
	}
	/**
	 * @private
	 */

	function warning(cond, message) {
	  if (!cond) {
	    // eslint-disable-next-line no-console
	    if (typeof console !== "undefined") console.warn(message);

	    try {
	      // Welcome to debugging React Router!
	      //
	      // This error is thrown as a convenience so you can more easily
	      // find the source for a warning that appears in the console by
	      // enabling "pause on exceptions" in your JavaScript debugger.
	      throw new Error(message); // eslint-disable-next-line no-empty
	    } catch (e) {}
	  }
	}
	/**
	 * Returns a resolved path object relative to the given pathname.
	 *
	 * @see https://reactrouter.com/docs/en/v6/utils/resolve-path
	 */

	function resolvePath(to, fromPathname) {
	  if (fromPathname === void 0) {
	    fromPathname = "/";
	  }

	  let {
	    pathname: toPathname,
	    search = "",
	    hash = ""
	  } = typeof to === "string" ? parsePath(to) : to;
	  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
	  return {
	    pathname,
	    search: normalizeSearch(search),
	    hash: normalizeHash(hash)
	  };
	}

	function resolvePathname(relativePath, fromPathname) {
	  let segments = fromPathname.replace(/\/+$/, "").split("/");
	  let relativeSegments = relativePath.split("/");
	  relativeSegments.forEach(segment => {
	    if (segment === "..") {
	      // Keep the root "" segment so the pathname starts at /
	      if (segments.length > 1) segments.pop();
	    } else if (segment !== ".") {
	      segments.push(segment);
	    }
	  });
	  return segments.length > 1 ? segments.join("/") : "/";
	}
	/**
	 * @private
	 */


	function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
	  if (isPathRelative === void 0) {
	    isPathRelative = false;
	  }

	  let to = typeof toArg === "string" ? parsePath(toArg) : _extends$2({}, toArg);
	  let isEmptyPath = toArg === "" || to.pathname === "";
	  let toPathname = isEmptyPath ? "/" : to.pathname;
	  let from; // Routing is relative to the current pathname if explicitly requested.
	  //
	  // If a pathname is explicitly provided in `to`, it should be relative to the
	  // route context. This is explained in `Note on `<Link to>` values` in our
	  // migration guide from v5 as a means of disambiguation between `to` values
	  // that begin with `/` and those that do not. However, this is problematic for
	  // `to` values that do not provide a pathname. `to` can simply be a search or
	  // hash string, in which case we should assume that the navigation is relative
	  // to the current location's pathname and *not* the route pathname.

	  if (isPathRelative || toPathname == null) {
	    from = locationPathname;
	  } else {
	    let routePathnameIndex = routePathnames.length - 1;

	    if (toPathname.startsWith("..")) {
	      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
	      // URL segment".  This is a key difference from how <a href> works and a
	      // major reason we call this a "to" value instead of a "href".

	      while (toSegments[0] === "..") {
	        toSegments.shift();
	        routePathnameIndex -= 1;
	      }

	      to.pathname = toSegments.join("/");
	    } // If there are more ".." segments than parent routes, resolve relative to
	    // the root / URL.


	    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	  }

	  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

	  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

	  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

	  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
	    path.pathname += "/";
	  }

	  return path;
	}
	/**
	 * @private
	 */

	const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
	/**
	 * @private
	 */

	const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
	/**
	 * @private
	 */

	const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
	/**
	 * @private
	 */

	const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
	/**
	 * @private
	 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
	 */

	class ErrorResponse {
	  constructor(status, statusText, data) {
	    this.status = status;
	    this.statusText = statusText || "";
	    this.data = data;
	  }

	}
	/**
	 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
	 * Response throw from an action/loader
	 */

	function isRouteErrorResponse(e) {
	  return e instanceof ErrorResponse;
	}

	/**
	 * React Router v6.4.0
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function _extends$1() {
	  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends$1.apply(this, arguments);
	}

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */

	function isPolyfill(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
	// dispatch for CommonJS interop named imports.

	const {
	  useState,
	  useEffect,
	  useLayoutEffect,
	  useDebugValue
	} = React$1;
	// because of a very particular set of implementation details and assumptions
	// -- change any one of them and it will break. The most important assumption
	// is that updates are always synchronous, because concurrent rendering is
	// only available in versions of React that also have a built-in
	// useSyncExternalStore API. And we only use this shim when the built-in API
	// does not exist.
	//
	// Do not assume that the clever hacks used by this hook also work in general.
	// The point of this shim is to replace the need for hacks by other libraries.

	function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	// React do not expose a way to check if we're hydrating. So users of the shim
	// will need to track that themselves and return the correct value
	// from `getSnapshot`.
	getServerSnapshot) {
	  // breaks the rules of React, and only works here because of specific
	  // implementation details, most importantly that updates are
	  // always synchronous.


	  const value = getSnapshot();
	  // re-render whenever the subscribed state changes by updating an some
	  // arbitrary useState hook. Then, during render, we call getSnapshot to read
	  // the current value.
	  //
	  // Because we don't actually use the state returned by the useState hook, we
	  // can save a bit of memory by storing other stuff in that slot.
	  //
	  // To implement the early bailout, we need to track some things on a mutable
	  // object. Usually, we would put that in a useRef hook, but we can stash it in
	  // our useState hook instead.
	  //
	  // To force a re-render, we call forceUpdate({inst}). That works because the
	  // new object always fails an equality check.


	  const [{
	    inst
	  }, forceUpdate] = useState({
	    inst: {
	      value,
	      getSnapshot
	    }
	  }); // Track the latest getSnapshot function with a ref. This needs to be updated
	  // in the layout phase so we can access it during the tearing check that
	  // happens on subscribe.

	  useLayoutEffect(() => {
	    inst.value = value;
	    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
	    // commit phase if there was an interleaved mutation. In concurrent mode
	    // this can happen all the time, but even in synchronous mode, an earlier
	    // effect may have mutated the store.

	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst
	      });
	    } // eslint-disable-next-line react-hooks/exhaustive-deps

	  }, [subscribe, value, getSnapshot]);
	  useEffect(() => {
	    // Check for changes right before subscribing. Subsequent changes will be
	    // detected in the subscription handler.
	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst
	      });
	    }

	    const handleStoreChange = () => {
	      // TODO: Because there is no cross-renderer API for batching updates, it's
	      // up to the consumer of this library to wrap their subscription event
	      // with unstable_batchedUpdates. Should we try to detect when this isn't
	      // the case and print a warning in development?
	      // The store changed. Check if the snapshot changed since the last time we
	      // read from the store.
	      if (checkIfSnapshotChanged(inst)) {
	        // Force a re-render.
	        forceUpdate({
	          inst
	        });
	      }
	    }; // Subscribe to the store and return a clean-up function.


	    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [subscribe]);
	  useDebugValue(value);
	  return value;
	}

	function checkIfSnapshotChanged(inst) {
	  const latestGetSnapshot = inst.getSnapshot;
	  const prevValue = inst.value;

	  try {
	    const nextValue = latestGetSnapshot();
	    return !is(prevValue, nextValue);
	  } catch (error) {
	    return true;
	  }
	}

	/**
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @flow
	 */
	function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
	  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	  // React do not expose a way to check if we're hydrating. So users of the shim
	  // will need to track that themselves and return the correct value
	  // from `getSnapshot`.
	  return getSnapshot();
	}

	/**
	 * Inlined into the react-router repo since use-sync-external-store does not
	 * provide a UMD-compatible package, so we need this to be able to distribute
	 * UMD react-router bundles
	 */
	const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
	const isServerEnvironment = !canUseDOM;
	const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
	"useSyncExternalStore" in React$1 ? (module => module.useSyncExternalStore)(React$1) : shim;

	// Contexts for data routers
	const DataStaticRouterContext = /*#__PURE__*/react.exports.createContext(null);

	const DataRouterContext = /*#__PURE__*/react.exports.createContext(null);

	const DataRouterStateContext = /*#__PURE__*/react.exports.createContext(null);

	const NavigationContext = /*#__PURE__*/react.exports.createContext(null);

	const LocationContext = /*#__PURE__*/react.exports.createContext(null);

	const RouteContext = /*#__PURE__*/react.exports.createContext({
	  outlet: null,
	  matches: []
	});

	const RouteErrorContext = /*#__PURE__*/react.exports.createContext(null);

	/**
	 * Returns the full href for the given "to" value. This is useful for building
	 * custom links that are also accessible and preserve right-click behavior.
	 *
	 * @see https://reactrouter.com/docs/en/v6/hooks/use-href
	 */

	function useHref(to, _temp) {
	  let {
	    relative
	  } = _temp === void 0 ? {} : _temp;
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    basename,
	    navigator
	  } = react.exports.useContext(NavigationContext);
	  let {
	    hash,
	    pathname,
	    search
	  } = useResolvedPath(to, {
	    relative
	  });
	  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
	  // to creating the href.  If this is a root navigation, then just use the raw
	  // basename which allows the basename to have full control over the presence
	  // of a trailing slash on root links

	  if (basename !== "/") {
	    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
	  }

	  return navigator.createHref({
	    pathname: joinedPathname,
	    search,
	    hash
	  });
	}
	/**
	 * Returns true if this component is a descendant of a <Router>.
	 *
	 * @see https://reactrouter.com/docs/en/v6/hooks/use-in-router-context
	 */

	function useInRouterContext() {
	  return react.exports.useContext(LocationContext) != null;
	}
	/**
	 * Returns the current location object, which represents the current URL in web
	 * browsers.
	 *
	 * Note: If you're using this it may mean you're doing some of your own
	 * "routing" in your app, and we'd like to know what your use case is. We may
	 * be able to provide something higher-level to better suit your needs.
	 *
	 * @see https://reactrouter.com/docs/en/v6/hooks/use-location
	 */

	function useLocation() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  return react.exports.useContext(LocationContext).location;
	}
	/**
	 * The interface for the navigate() function returned from useNavigate().
	 */

	/**
	 * When processing relative navigation we want to ignore ancestor routes that
	 * do not contribute to the path, such that index/pathless layout routes don't
	 * interfere.
	 *
	 * For example, when moving a route element into an index route and/or a
	 * pathless layout route, relative link behavior contained within should stay
	 * the same.  Both of the following examples should link back to the root:
	 *
	 *   <Route path="/">
	 *     <Route path="accounts" element={<Link to=".."}>
	 *   </Route>
	 *
	 *   <Route path="/">
	 *     <Route path="accounts">
	 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
	 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
	 *       </Route
	 *     </Route>
	 *   </Route>
	 */
	function getPathContributingMatches(matches) {
	  return matches.filter((match, index) => index === 0 || !match.route.index && match.pathnameBase !== matches[index - 1].pathnameBase);
	}
	/**
	 * Returns an imperative method for changing the location. Used by <Link>s, but
	 * may also be used by other elements to change the location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/hooks/use-navigate
	 */


	function useNavigate() {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let {
	    basename,
	    navigator
	  } = react.exports.useContext(NavigationContext);
	  let {
	    matches
	  } = react.exports.useContext(RouteContext);
	  let {
	    pathname: locationPathname
	  } = useLocation();
	  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
	  let activeRef = react.exports.useRef(false);
	  react.exports.useEffect(() => {
	    activeRef.current = true;
	  });
	  let navigate = react.exports.useCallback(function (to, options) {
	    if (options === void 0) {
	      options = {};
	    }
	    if (!activeRef.current) return;

	    if (typeof to === "number") {
	      navigator.go(to);
	      return;
	    }

	    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
	    // to handing off to history.  If this is a root navigation, then we
	    // navigate to the raw basename which allows the basename to have full
	    // control over the presence of a trailing slash on root links

	    if (basename !== "/") {
	      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
	    }

	    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
	  }, [basename, navigator, routePathnamesJson, locationPathname]);
	  return navigate;
	}
	/**
	 * Resolves the pathname of the given `to` value against the current location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/hooks/use-resolved-path
	 */

	function useResolvedPath(to, _temp2) {
	  let {
	    relative
	  } = _temp2 === void 0 ? {} : _temp2;
	  let {
	    matches
	  } = react.exports.useContext(RouteContext);
	  let {
	    pathname: locationPathname
	  } = useLocation();
	  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map(match => match.pathnameBase));
	  return react.exports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
	}
	/**
	 * Returns the element of the route that matched the current location, prepared
	 * with the correct context to render the remainder of the route tree. Route
	 * elements in the tree must render an <Outlet> to render their child route's
	 * element.
	 *
	 * @see https://reactrouter.com/docs/en/v6/hooks/use-routes
	 */

	function useRoutes(routes, locationArg) {
	  !useInRouterContext() ? invariant(false) : void 0;
	  let dataRouterStateContext = react.exports.useContext(DataRouterStateContext);
	  let {
	    matches: parentMatches
	  } = react.exports.useContext(RouteContext);
	  let routeMatch = parentMatches[parentMatches.length - 1];
	  let parentParams = routeMatch ? routeMatch.params : {};
	  routeMatch ? routeMatch.pathname : "/";
	  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
	  routeMatch && routeMatch.route;

	  let locationFromContext = useLocation();
	  let location;

	  if (locationArg) {
	    var _parsedLocationArg$pa;

	    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
	    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
	    location = parsedLocationArg;
	  } else {
	    location = locationFromContext;
	  }

	  let pathname = location.pathname || "/";
	  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
	  let matches = matchRoutes(routes, {
	    pathname: remainingPathname
	  });

	  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
	    params: Object.assign({}, parentParams, match.params),
	    pathname: joinPaths([parentPathnameBase, match.pathname]),
	    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
	  })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
	  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
	  // to use the scoped location instead of the global location.


	  if (locationArg) {
	    return /*#__PURE__*/react.exports.createElement(LocationContext.Provider, {
	      value: {
	        location: _extends$1({
	          pathname: "/",
	          search: "",
	          hash: "",
	          state: null,
	          key: "default"
	        }, location),
	        navigationType: Action.Pop
	      }
	    }, renderedMatches);
	  }

	  return renderedMatches;
	}

	function DefaultErrorElement() {
	  let error = useRouteError();
	  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
	  let stack = error instanceof Error ? error.stack : null;
	  let lightgrey = "rgba(200,200,200, 0.5)";
	  let preStyles = {
	    padding: "0.5rem",
	    backgroundColor: lightgrey
	  };
	  let codeStyles = {
	    padding: "2px 4px",
	    backgroundColor: lightgrey
	  };
	  return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/react.exports.createElement("h2", null, "Unhandled Thrown Error!"), /*#__PURE__*/react.exports.createElement("h3", {
	    style: {
	      fontStyle: "italic"
	    }
	  }, message), stack ? /*#__PURE__*/react.exports.createElement("pre", {
	    style: preStyles
	  }, stack) : null, /*#__PURE__*/react.exports.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react.exports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /*#__PURE__*/react.exports.createElement("code", {
	    style: codeStyles
	  }, "errorElement"), " props on\xA0", /*#__PURE__*/react.exports.createElement("code", {
	    style: codeStyles
	  }, "<Route>")));
	}

	class RenderErrorBoundary extends react.exports.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      location: props.location,
	      error: props.error
	    };
	  }

	  static getDerivedStateFromError(error) {
	    return {
	      error: error
	    };
	  }

	  static getDerivedStateFromProps(props, state) {
	    // When we get into an error state, the user will likely click "back" to the
	    // previous page that didn't have an error. Because this wraps the entire
	    // application, that will have no effect--the error page continues to display.
	    // This gives us a mechanism to recover from the error when the location changes.
	    //
	    // Whether we're in an error state or not, we update the location in state
	    // so that when we are in an error state, it gets reset when a new location
	    // comes in and the user recovers from the error.
	    if (state.location !== props.location) {
	      return {
	        error: props.error,
	        location: props.location
	      };
	    } // If we're not changing locations, preserve the location but still surface
	    // any new errors that may come through. We retain the existing error, we do
	    // this because the error provided from the app state may be cleared without
	    // the location changing.


	    return {
	      error: props.error || state.error,
	      location: state.location
	    };
	  }

	  componentDidCatch(error, errorInfo) {
	    console.error("React Router caught the following error during render", error, errorInfo);
	  }

	  render() {
	    return this.state.error ? /*#__PURE__*/react.exports.createElement(RouteErrorContext.Provider, {
	      value: this.state.error,
	      children: this.props.component
	    }) : this.props.children;
	  }

	}

	function RenderedRoute(_ref) {
	  let {
	    routeContext,
	    match,
	    children
	  } = _ref;
	  let dataStaticRouterContext = react.exports.useContext(DataStaticRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
	  // in a DataStaticRouter

	  if (dataStaticRouterContext && match.route.errorElement) {
	    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
	  }

	  return /*#__PURE__*/react.exports.createElement(RouteContext.Provider, {
	    value: routeContext
	  }, children);
	}

	function _renderMatches(matches, parentMatches, dataRouterState) {
	  if (parentMatches === void 0) {
	    parentMatches = [];
	  }

	  if (matches == null) {
	    if (dataRouterState != null && dataRouterState.errors) {
	      // Don't bail if we have data router errors so we can render them in the
	      // boundary.  Use the pre-matched (or shimmed) matches
	      matches = dataRouterState.matches;
	    } else {
	      return null;
	    }
	  }

	  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

	  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;

	  if (errors != null) {
	    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
	    !(errorIndex >= 0) ? invariant(false) : void 0;
	    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
	  }

	  return renderedMatches.reduceRight((outlet, match, index) => {
	    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

	    let errorElement = dataRouterState ? match.route.errorElement || /*#__PURE__*/react.exports.createElement(DefaultErrorElement, null) : null;

	    let getChildren = () => /*#__PURE__*/react.exports.createElement(RenderedRoute, {
	      match: match,
	      routeContext: {
	        outlet,
	        matches: parentMatches.concat(renderedMatches.slice(0, index + 1))
	      }
	    }, error ? errorElement : match.route.element !== undefined ? match.route.element : outlet); // Only wrap in an error boundary within data router usages when we have an
	    // errorElement on this route.  Otherwise let it bubble up to an ancestor
	    // errorElement


	    return dataRouterState && (match.route.errorElement || index === 0) ? /*#__PURE__*/react.exports.createElement(RenderErrorBoundary, {
	      location: dataRouterState.location,
	      component: errorElement,
	      error: error,
	      children: getChildren()
	    }) : getChildren();
	  }, null);
	}
	var DataRouterHook;

	(function (DataRouterHook) {
	  DataRouterHook["UseLoaderData"] = "useLoaderData";
	  DataRouterHook["UseActionData"] = "useActionData";
	  DataRouterHook["UseRouteError"] = "useRouteError";
	  DataRouterHook["UseNavigation"] = "useNavigation";
	  DataRouterHook["UseRouteLoaderData"] = "useRouteLoaderData";
	  DataRouterHook["UseMatches"] = "useMatches";
	  DataRouterHook["UseRevalidator"] = "useRevalidator";
	})(DataRouterHook || (DataRouterHook = {}));

	function useDataRouterState(hookName) {
	  let state = react.exports.useContext(DataRouterStateContext);
	  !state ? invariant(false) : void 0;
	  return state;
	}
	/**
	 * Returns the nearest ancestor Route error, which could be a loader/action
	 * error or a render error.  This is intended to be called from your
	 * errorElement to display a proper error message.
	 */

	function useRouteError() {
	  var _state$errors;

	  let error = react.exports.useContext(RouteErrorContext);
	  let state = useDataRouterState(DataRouterHook.UseRouteError);
	  let route = react.exports.useContext(RouteContext);
	  let thisRoute = route.matches[route.matches.length - 1]; // If this was a render error, we put it in a RouteError context inside
	  // of RenderErrorBoundary

	  if (error) {
	    return error;
	  }

	  !route ? invariant(false) : void 0;
	  !thisRoute.route.id ? invariant(false) : void 0; // Otherwise look for errors from our data router state

	  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
	}

	/**
	 * Declares an element that should be rendered at a certain URL path.
	 *
	 * @see https://reactrouter.com/docs/en/v6/components/route
	 */
	function Route(_props) {
	  invariant(false) ;
	}

	/**
	 * Provides location context for the rest of the app.
	 *
	 * Note: You usually won't render a <Router> directly. Instead, you'll render a
	 * router that is more specific to your environment such as a <BrowserRouter>
	 * in web browsers or a <StaticRouter> for server rendering.
	 *
	 * @see https://reactrouter.com/docs/en/v6/routers/router
	 */
	function Router(_ref4) {
	  let {
	    basename: basenameProp = "/",
	    children = null,
	    location: locationProp,
	    navigationType = Action.Pop,
	    navigator,
	    static: staticProp = false
	  } = _ref4;
	  !!useInRouterContext() ? invariant(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
	  // the enforcement of trailing slashes throughout the app

	  let basename = basenameProp.replace(/^\/*/, "/");
	  let navigationContext = react.exports.useMemo(() => ({
	    basename,
	    navigator,
	    static: staticProp
	  }), [basename, navigator, staticProp]);

	  if (typeof locationProp === "string") {
	    locationProp = parsePath(locationProp);
	  }

	  let {
	    pathname = "/",
	    search = "",
	    hash = "",
	    state = null,
	    key = "default"
	  } = locationProp;
	  let location = react.exports.useMemo(() => {
	    let trailingPathname = stripBasename(pathname, basename);

	    if (trailingPathname == null) {
	      return null;
	    }

	    return {
	      pathname: trailingPathname,
	      search,
	      hash,
	      state,
	      key
	    };
	  }, [basename, pathname, search, hash, state, key]);

	  if (location == null) {
	    return null;
	  }

	  return /*#__PURE__*/react.exports.createElement(NavigationContext.Provider, {
	    value: navigationContext
	  }, /*#__PURE__*/react.exports.createElement(LocationContext.Provider, {
	    children: children,
	    value: {
	      location,
	      navigationType
	    }
	  }));
	}

	/**
	 * A container for a nested tree of <Route> elements that renders the branch
	 * that best matches the current location.
	 *
	 * @see https://reactrouter.com/docs/en/v6/components/routes
	 */
	function Routes(_ref5) {
	  let {
	    children,
	    location
	  } = _ref5;
	  let dataRouterContext = react.exports.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
	  // directly.  If we have children, then we're in a descendant tree and we
	  // need to use child routes.

	  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
	  return useRoutes(routes, location);
	}
	var AwaitRenderStatus;

	(function (AwaitRenderStatus) {
	  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
	  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
	  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
	})(AwaitRenderStatus || (AwaitRenderStatus = {}));

	new Promise(() => {});
	// UTILS
	///////////////////////////////////////////////////////////////////////////////

	/**
	 * Creates a route config from a React "children" object, which is usually
	 * either a `<Route>` element or an array of them. Used internally by
	 * `<Routes>` to create a route config from its children.
	 *
	 * @see https://reactrouter.com/docs/en/v6/utils/create-routes-from-children
	 */


	function createRoutesFromChildren(children, parentPath) {
	  if (parentPath === void 0) {
	    parentPath = [];
	  }

	  let routes = [];
	  react.exports.Children.forEach(children, (element, index) => {
	    if (! /*#__PURE__*/react.exports.isValidElement(element)) {
	      // Ignore non-elements. This allows people to more easily inline
	      // conditionals in their route config.
	      return;
	    }

	    if (element.type === react.exports.Fragment) {
	      // Transparently support React.Fragment and its children.
	      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
	      return;
	    }

	    !(element.type === Route) ? invariant(false) : void 0;
	    let treePath = [...parentPath, index];
	    let route = {
	      id: element.props.id || treePath.join("-"),
	      caseSensitive: element.props.caseSensitive,
	      element: element.props.element,
	      index: element.props.index,
	      path: element.props.path,
	      loader: element.props.loader,
	      action: element.props.action,
	      errorElement: element.props.errorElement,
	      hasErrorBoundary: element.props.errorElement != null,
	      shouldRevalidate: element.props.shouldRevalidate,
	      handle: element.props.handle
	    };

	    if (element.props.children) {
	      route.children = createRoutesFromChildren(element.props.children, treePath);
	    }

	    routes.push(route);
	  });
	  return routes;
	}

	/**
	 * React Router DOM v6.4.0
	 *
	 * Copyright (c) Remix Software Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.md file in the root directory of this source tree.
	 *
	 * @license MIT
	 */

	function _extends() {
	  _extends = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };
	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	function shouldProcessLinkClick(event, target) {
	  return event.button === 0 && ( // Ignore everything but left clicks
	  !target || target === "_self") && // Let browser handle "target=_blank" etc.
	  !isModifiedEvent(event) // Ignore clicks with modifier keys
	  ;
	}

	const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
	/**
	 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
	 */

	function BrowserRouter(_ref) {
	  let {
	    basename,
	    children,
	    window
	  } = _ref;
	  let historyRef = react.exports.useRef();

	  if (historyRef.current == null) {
	    historyRef.current = createBrowserHistory({
	      window,
	      v5Compat: true
	    });
	  }

	  let history = historyRef.current;
	  let [state, setState] = react.exports.useState({
	    action: history.action,
	    location: history.location
	  });
	  react.exports.useLayoutEffect(() => history.listen(setState), [history]);
	  return /*#__PURE__*/react.exports.createElement(Router, {
	    basename: basename,
	    children: children,
	    location: state.location,
	    navigationType: state.action,
	    navigator: history
	  });
	}
	/**
	 * The public API for rendering a history-aware <a>.
	 */

	const Link = /*#__PURE__*/react.exports.forwardRef(function LinkWithRef(_ref4, ref) {
	  let {
	    onClick,
	    relative,
	    reloadDocument,
	    replace,
	    state,
	    target,
	    to,
	    preventScrollReset
	  } = _ref4,
	      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

	  let href = useHref(to, {
	    relative
	  });
	  let internalOnClick = useLinkClickHandler(to, {
	    replace,
	    state,
	    target,
	    preventScrollReset,
	    relative
	  });

	  function handleClick(event) {
	    if (onClick) onClick(event);

	    if (!event.defaultPrevented) {
	      internalOnClick(event);
	    }
	  }

	  return (
	    /*#__PURE__*/
	    // eslint-disable-next-line jsx-a11y/anchor-has-content
	    react.exports.createElement("a", _extends({}, rest, {
	      href: href,
	      onClick: reloadDocument ? onClick : handleClick,
	      ref: ref,
	      target: target
	    }))
	  );
	});
	////////////////////////////////////////////////////////////////////////////////
	//#region Hooks
	////////////////////////////////////////////////////////////////////////////////

	/**
	 * Handles the click behavior for router `<Link>` components. This is useful if
	 * you need to create custom `<Link>` components with the same click behavior we
	 * use in our exported `<Link>`.
	 */


	function useLinkClickHandler(to, _temp) {
	  let {
	    target,
	    replace: replaceProp,
	    state,
	    preventScrollReset,
	    relative
	  } = _temp === void 0 ? {} : _temp;
	  let navigate = useNavigate();
	  let location = useLocation();
	  let path = useResolvedPath(to, {
	    relative
	  });
	  return react.exports.useCallback(event => {
	    if (shouldProcessLinkClick(event, target)) {
	      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
	      // a push, so do the same here unless the replace prop is explicitly set

	      let replace = replaceProp !== undefined ? replaceProp : createPath(location) === createPath(path);
	      navigate(to, {
	        replace,
	        state,
	        preventScrollReset,
	        relative
	      });
	    }
	  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
	}

	var Home = /*#__PURE__*/function (_React$Component) {
	  _inherits(Home, _React$Component);

	  var _super = _createSuper(Home);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _super.apply(this, arguments);
	  }

	  _createClass(Home, [{
	    key: "render",
	    value: function render() {
	      return /*#__PURE__*/React.createElement("div", null, "This is home");
	    }
	  }]);

	  return Home;
	}(React.Component);

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$2 = classof$5;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$2(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineBuiltIn$2 = defineBuiltIn$5;
	var toString = objectToString;

	// `Object.prototype.toString` method
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  defineBuiltIn$2(Object.prototype, 'toString', toString, { unsafe: true });
	}

	var classof$1 = classofRaw$1;
	var global$8 = global$j;

	var engineIsNode = classof$1(global$8.process) == 'process';

	var defineProperty = objectDefineProperty.f;
	var hasOwn$1 = hasOwnProperty_1;
	var wellKnownSymbol$6 = wellKnownSymbol$d;

	var TO_STRING_TAG = wellKnownSymbol$6('toStringTag');

	var setToStringTag$1 = function (target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwn$1(target, TO_STRING_TAG)) {
	    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};

	var getBuiltIn$3 = getBuiltIn$8;
	var definePropertyModule = objectDefineProperty;
	var wellKnownSymbol$5 = wellKnownSymbol$d;
	var DESCRIPTORS = descriptors;

	var SPECIES$2 = wellKnownSymbol$5('species');

	var setSpecies$1 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule.f;

	  if (DESCRIPTORS && Constructor && !Constructor[SPECIES$2]) {
	    defineProperty(Constructor, SPECIES$2, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var isPrototypeOf$1 = objectIsPrototypeOf;

	var $TypeError$5 = TypeError;

	var anInstance$1 = function (it, Prototype) {
	  if (isPrototypeOf$1(Prototype, it)) return it;
	  throw $TypeError$5('Incorrect invocation');
	};

	var isConstructor = isConstructor$2;
	var tryToString$2 = tryToString$4;

	var $TypeError$4 = TypeError;

	// `Assert: IsConstructor(argument) is true`
	var aConstructor$1 = function (argument) {
	  if (isConstructor(argument)) return argument;
	  throw $TypeError$4(tryToString$2(argument) + ' is not a constructor');
	};

	var anObject$4 = anObject$8;
	var aConstructor = aConstructor$1;
	var isNullOrUndefined$1 = isNullOrUndefined$4;
	var wellKnownSymbol$4 = wellKnownSymbol$d;

	var SPECIES$1 = wellKnownSymbol$4('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor$1 = function (O, defaultConstructor) {
	  var C = anObject$4(O).constructor;
	  var S;
	  return C === undefined || isNullOrUndefined$1(S = anObject$4(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
	};

	var NATIVE_BIND = functionBindNative;

	var FunctionPrototype = Function.prototype;
	var apply$1 = FunctionPrototype.apply;
	var call$7 = FunctionPrototype.call;

	// eslint-disable-next-line es-x/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$7.bind(apply$1) : function () {
	  return call$7.apply(apply$1, arguments);
	});

	var getBuiltIn$2 = getBuiltIn$8;

	var html$1 = getBuiltIn$2('document', 'documentElement');

	var uncurryThis = functionUncurryThis;

	var arraySlice$1 = uncurryThis([].slice);

	var $TypeError$3 = TypeError;

	var validateArgumentsLength$1 = function (passed, required) {
	  if (passed < required) throw $TypeError$3('Not enough arguments');
	  return passed;
	};

	var userAgent$2 = engineUserAgent;

	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

	var global$7 = global$j;
	var apply = functionApply;
	var bind$3 = functionBindContext;
	var isCallable$3 = isCallable$i;
	var hasOwn = hasOwnProperty_1;
	var fails = fails$d;
	var html = html$1;
	var arraySlice = arraySlice$1;
	var createElement = documentCreateElement;
	var validateArgumentsLength = validateArgumentsLength$1;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$3 = engineIsNode;

	var set = global$7.setImmediate;
	var clear = global$7.clearImmediate;
	var process$2 = global$7.process;
	var Dispatch = global$7.Dispatch;
	var Function$1 = global$7.Function;
	var MessageChannel$1 = global$7.MessageChannel;
	var String$1 = global$7.String;
	var counter = 0;
	var queue$1 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var location, defer, channel, port;

	try {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  location = global$7.location;
	} catch (error) { /* empty */ }

	var run = function (id) {
	  if (hasOwn(queue$1, id)) {
	    var fn = queue$1[id];
	    delete queue$1[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global$7.postMessage(String$1(id), location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set || !clear) {
	  set = function setImmediate(handler) {
	    validateArgumentsLength(arguments.length, 1);
	    var fn = isCallable$3(handler) ? handler : Function$1(handler);
	    var args = arraySlice(arguments, 1);
	    queue$1[++counter] = function () {
	      apply(fn, undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue$1[id];
	  };
	  // Node.js 0.8-
	  if (IS_NODE$3) {
	    defer = function (id) {
	      process$2.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel$1 && !IS_IOS$1) {
	    channel = new MessageChannel$1();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = bind$3(port.postMessage, port);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global$7.addEventListener &&
	    isCallable$3(global$7.postMessage) &&
	    !global$7.importScripts &&
	    location && location.protocol !== 'file:' &&
	    !fails(post)
	  ) {
	    defer = post;
	    global$7.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function (id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$1 = {
	  set: set,
	  clear: clear
	};

	var userAgent$1 = engineUserAgent;
	var global$6 = global$j;

	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$6.Pebble !== undefined;

	var userAgent = engineUserAgent;

	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

	var global$5 = global$j;
	var bind$2 = functionBindContext;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var macrotask = task$1.set;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$2 = engineIsNode;

	var MutationObserver = global$5.MutationObserver || global$5.WebKitMutationObserver;
	var document$2 = global$5.document;
	var process$1 = global$5.process;
	var Promise$1 = global$5.Promise;
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$5, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify$1, toggle, node, promise, then;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE$2 && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify$1();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
	  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$1.resolve(undefined);
	    // workaround of WebKit ~ iOS Safari 10.1 bug
	    promise.constructor = Promise$1;
	    then = bind$2(promise.then, promise);
	    notify$1 = function () {
	      then(flush);
	    };
	  // Node.js without promises
	  } else if (IS_NODE$2) {
	    notify$1 = function () {
	      process$1.nextTick(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessage
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    // strange IE + webpack dev server bug - use .bind(global)
	    macrotask = bind$2(macrotask, global$5);
	    notify$1 = function () {
	      macrotask(flush);
	    };
	  }
	}

	var microtask$1 = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify$1();
	  } last = task;
	};

	var global$4 = global$j;

	var hostReportErrors$1 = function (a, b) {
	  var console = global$4.console;
	  if (console && console.error) {
	    arguments.length == 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform$3 = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var Queue$1 = function () {
	  this.head = null;
	  this.tail = null;
	};

	Queue$1.prototype = {
	  add: function (item) {
	    var entry = { item: item, next: null };
	    if (this.head) this.tail.next = entry;
	    else this.head = entry;
	    this.tail = entry;
	  },
	  get: function () {
	    var entry = this.head;
	    if (entry) {
	      this.head = entry.next;
	      if (this.tail === entry) this.tail = null;
	      return entry.item;
	    }
	  }
	};

	var queue = Queue$1;

	var global$3 = global$j;

	var promiseNativeConstructor = global$3.Promise;

	/* global Deno -- Deno case */

	var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

	var IS_DENO$1 = engineIsDeno;
	var IS_NODE$1 = engineIsNode;

	var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
	  && typeof window == 'object'
	  && typeof document == 'object';

	var global$2 = global$j;
	var NativePromiseConstructor$3 = promiseNativeConstructor;
	var isCallable$2 = isCallable$i;
	var isForced = isForced_1;
	var inspectSource = inspectSource$3;
	var wellKnownSymbol$3 = wellKnownSymbol$d;
	var IS_BROWSER = engineIsBrowser;
	var IS_DENO = engineIsDeno;
	var V8_VERSION = engineV8Version;

	NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
	var SPECIES = wellKnownSymbol$3('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$2(global$2.PromiseRejectionEvent);

	var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
	    // Detect correctness of subclassing with @@species support
	    var promise = new NativePromiseConstructor$3(function (resolve) { resolve(1); });
	    var FakePromise = function (exec) {
	      exec(function () { /* empty */ }, function () { /* empty */ });
	    };
	    var constructor = promise.constructor = {};
	    constructor[SPECIES] = FakePromise;
	    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
	    if (!SUBCLASSING) return true;
	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
	});

	var promiseConstructorDetection = {
	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
	  SUBCLASSING: SUBCLASSING
	};

	var newPromiseCapability$2 = {};

	var aCallable$4 = aCallable$7;

	var $TypeError$2 = TypeError;

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw $TypeError$2('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$4(resolve);
	  this.reject = aCallable$4(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var $$5 = _export;
	var IS_NODE = engineIsNode;
	var global$1 = global$j;
	var call$6 = functionCall;
	var defineBuiltIn$1 = defineBuiltIn$5;
	var setPrototypeOf = objectSetPrototypeOf;
	var setToStringTag = setToStringTag$1;
	var setSpecies = setSpecies$1;
	var aCallable$3 = aCallable$7;
	var isCallable$1 = isCallable$i;
	var isObject$1 = isObject$a;
	var anInstance = anInstance$1;
	var speciesConstructor = speciesConstructor$1;
	var task = task$1.set;
	var microtask = microtask$1;
	var hostReportErrors = hostReportErrors$1;
	var perform$2 = perform$3;
	var Queue = queue;
	var InternalStateModule = internalState;
	var NativePromiseConstructor$2 = promiseNativeConstructor;
	var PromiseConstructorDetection = promiseConstructorDetection;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;

	var PROMISE = 'Promise';
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
	var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
	var setInternalState = InternalStateModule.set;
	var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
	var PromiseConstructor = NativePromiseConstructor$2;
	var PromisePrototype = NativePromisePrototype$1;
	var TypeError$1 = global$1.TypeError;
	var document$1 = global$1.document;
	var process = global$1.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
	var newGenericPromiseCapability = newPromiseCapability$1;

	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;

	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject$1(it) && isCallable$1(then = it.then) ? then : false;
	};

	var callReaction = function (reaction, state) {
	  var value = state.value;
	  var ok = state.state == FULFILLED;
	  var handler = ok ? reaction.ok : reaction.fail;
	  var resolve = reaction.resolve;
	  var reject = reaction.reject;
	  var domain = reaction.domain;
	  var result, then, exited;
	  try {
	    if (handler) {
	      if (!ok) {
	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	        state.rejection = HANDLED;
	      }
	      if (handler === true) result = value;
	      else {
	        if (domain) domain.enter();
	        result = handler(value); // can throw
	        if (domain) {
	          domain.exit();
	          exited = true;
	        }
	      }
	      if (result === reaction.promise) {
	        reject(TypeError$1('Promise-chain cycle'));
	      } else if (then = isThenable(result)) {
	        call$6(then, result, resolve, reject);
	      } else resolve(result);
	    } else reject(value);
	  } catch (error) {
	    if (domain && !exited) domain.exit();
	    reject(error);
	  }
	};

	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  microtask(function () {
	    var reactions = state.reactions;
	    var reaction;
	    while (reaction = reactions.get()) {
	      callReaction(reaction, state);
	    }
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$1.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  call$6(task, global$1, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform$2(function () {
	        if (IS_NODE) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (state) {
	  call$6(task, global$1, function () {
	    var promise = state.facade;
	    if (IS_NODE) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$1 = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};

	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          call$6(then, value,
	            bind$1(internalResolve, wrapper, state),
	            bind$1(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED_PROMISE_CONSTRUCTOR$4) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromisePrototype);
	    aCallable$3(executor);
	    call$6(Internal, this);
	    var state = getInternalPromiseState(this);
	    try {
	      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };

	  PromisePrototype = PromiseConstructor.prototype;

	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: new Queue(),
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };

	  // `Promise.prototype.then` method
	  // https://tc39.es/ecma262/#sec-promise.prototype.then
	  Internal.prototype = defineBuiltIn$1(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
	    var state = getInternalPromiseState(this);
	    var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
	    state.parent = true;
	    reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
	    reaction.fail = isCallable$1(onRejected) && onRejected;
	    reaction.domain = IS_NODE ? process.domain : undefined;
	    if (state.state == PENDING) state.reactions.add(reaction);
	    else microtask(function () {
	      callReaction(reaction, state);
	    });
	    return reaction.promise;
	  });

	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalPromiseState(promise);
	    this.promise = promise;
	    this.resolve = bind$1(internalResolve, state);
	    this.reject = bind$1(internalReject, state);
	  };

	  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };

	  if (isCallable$1(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
	    nativeThen = NativePromisePrototype$1.then;

	    if (!NATIVE_PROMISE_SUBCLASSING) {
	      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
	      defineBuiltIn$1(NativePromisePrototype$1, 'then', function then(onFulfilled, onRejected) {
	        var that = this;
	        return new PromiseConstructor(function (resolve, reject) {
	          call$6(nativeThen, that, resolve, reject);
	        }).then(onFulfilled, onRejected);
	      // https://github.com/zloirock/core-js/issues/640
	      }, { unsafe: true });
	    }

	    // make `.constructor === Promise` work for native promise-based APIs
	    try {
	      delete NativePromisePrototype$1.constructor;
	    } catch (error) { /* empty */ }

	    // make `instanceof Promise` work for native promise-based APIs
	    if (setPrototypeOf) {
	      setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
	    }
	  }
	}

	$$5({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
	  Promise: PromiseConstructor
	});

	setToStringTag(PromiseConstructor, PROMISE, false);
	setSpecies(PROMISE);

	var iterators = {};

	var wellKnownSymbol$2 = wellKnownSymbol$d;
	var Iterators$1 = iterators;

	var ITERATOR$2 = wellKnownSymbol$2('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
	};

	var classof = classof$5;
	var getMethod$1 = getMethod$3;
	var isNullOrUndefined = isNullOrUndefined$4;
	var Iterators = iterators;
	var wellKnownSymbol$1 = wellKnownSymbol$d;

	var ITERATOR$1 = wellKnownSymbol$1('iterator');

	var getIteratorMethod$2 = function (it) {
	  if (!isNullOrUndefined(it)) return getMethod$1(it, ITERATOR$1)
	    || getMethod$1(it, '@@iterator')
	    || Iterators[classof(it)];
	};

	var call$5 = functionCall;
	var aCallable$2 = aCallable$7;
	var anObject$3 = anObject$8;
	var tryToString$1 = tryToString$4;
	var getIteratorMethod$1 = getIteratorMethod$2;

	var $TypeError$1 = TypeError;

	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable$2(iteratorMethod)) return anObject$3(call$5(iteratorMethod, argument));
	  throw $TypeError$1(tryToString$1(argument) + ' is not iterable');
	};

	var call$4 = functionCall;
	var anObject$2 = anObject$8;
	var getMethod = getMethod$3;

	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$2(iterator);
	  try {
	    innerResult = getMethod(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$4(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$2(innerResult);
	  return value;
	};

	var bind = functionBindContext;
	var call$3 = functionCall;
	var anObject$1 = anObject$8;
	var tryToString = tryToString$4;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var lengthOfArrayLike = lengthOfArrayLike$4;
	var isPrototypeOf = objectIsPrototypeOf;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$2;
	var iteratorClose = iteratorClose$1;

	var $TypeError = TypeError;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	var iterate$2 = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_RECORD = !!(options && options.IS_RECORD);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$1(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }

	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$3(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var wellKnownSymbol = wellKnownSymbol$d;

	var ITERATOR = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var NativePromiseConstructor$1 = promiseNativeConstructor;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
	var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

	var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
	  NativePromiseConstructor$1.all(iterable).then(undefined, function () { /* empty */ });
	});

	var $$4 = _export;
	var call$2 = functionCall;
	var aCallable$1 = aCallable$7;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$1 = perform$3;
	var iterate$1 = iterate$2;
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

	// `Promise.all` method
	// https://tc39.es/ecma262/#sec-promise.all
	$$4({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var $promiseResolve = aCallable$1(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$2($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$3 = _export;
	var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
	var NativePromiseConstructor = promiseNativeConstructor;
	var getBuiltIn$1 = getBuiltIn$8;
	var isCallable = isCallable$i;
	var defineBuiltIn = defineBuiltIn$5;

	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

	// `Promise.prototype.catch` method
	// https://tc39.es/ecma262/#sec-promise.prototype.catch
	$$3({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
	  'catch': function (onRejected) {
	    return this.then(undefined, onRejected);
	  }
	});

	// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
	if (isCallable(NativePromiseConstructor)) {
	  var method = getBuiltIn$1('Promise').prototype['catch'];
	  if (NativePromisePrototype['catch'] !== method) {
	    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
	  }
	}

	var $$2 = _export;
	var call$1 = functionCall;
	var aCallable = aCallable$7;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var perform = perform$3;
	var iterate = iterate$2;
	var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

	// `Promise.race` method
	// https://tc39.es/ecma262/#sec-promise.race
	$$2({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$1.f(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aCallable(C.resolve);
	      iterate(iterable, function (promise) {
	        call$1($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$1 = _export;
	var call = functionCall;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

	// `Promise.reject` method
	// https://tc39.es/ecma262/#sec-promise.reject
	$$1({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
	  reject: function reject(r) {
	    var capability = newPromiseCapabilityModule.f(this);
	    call(capability.reject, undefined, r);
	    return capability.promise;
	  }
	});

	var anObject = anObject$8;
	var isObject = isObject$a;
	var newPromiseCapability = newPromiseCapability$2;

	var promiseResolve$1 = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $ = _export;
	var getBuiltIn = getBuiltIn$8;
	var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
	var promiseResolve = promiseResolve$1;

	getBuiltIn('Promise');

	// `Promise.resolve` method
	// https://tc39.es/ecma262/#sec-promise.resolve
	$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
	  resolve: function resolve(x) {
	    return promiseResolve(this, x);
	  }
	});

	var css_248z$2 = "/* Bordered form */\r\nbody {\r\n    background-color: #111212;\r\n    text-align: center;\r\n    font-family: \"Segoe UI\";\r\n}\r\nform {\r\n  background: #4a4f4f;\r\n  color: #f1f1f1;\r\n  border-radius: 0.5em;\r\n  max-width: 40%;\r\n  display: inline-block;\r\n  text-align: left;\r\n  font-family: \"Segoe UI\";\r\n}\r\n\r\n/* Full-width inputs */\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\nbutton {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Add padding to containers */\r\ndiv {\r\n  padding: 16px;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n    display: block;\r\n    float: none;\r\n  }\r\n  .cancelbtn {\r\n    width: 100%;\r\n  }\r\n}";
	styleInject(css_248z$2);

	var LoginPage = /*#__PURE__*/function (_React$Component) {
	  _inherits(LoginPage, _React$Component);

	  var _super = _createSuper(LoginPage);

	  function LoginPage() {
	    var _this;

	    _classCallCheck(this, LoginPage);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "state", {
	      username: "",
	      password: "",
	      role: "",
	      loginsuccess: true
	    });

	    _defineProperty(_assertThisInitialized(_this), "onClickHandler", function (e) {
	      e.preventDefault();

	      var that = _assertThisInitialized(_this);

	      var body = {
	        username: e.target.uname.value,
	        password: e.target.upswd.value,
	        title: "This is POST request with body",
	        completed: true
	      };
	      fetch("https://jsonplaceholder.typicode.com/todos", {
	        method: "POST",
	        body: JSON.stringify(body)
	      }).then(function (response) {
	        var json = response.json();
	        console.log(json);
	        that.setState({
	          loginsuccess: true,
	          role: e.target.urole.value
	        });

	        if (!response.ok) {
	          throw new Error("Network response was not ok");
	        }

	        console.log("from login" + JSON.stringify(that.state));

	        _this.props.parentCallback(that.state);

	        return response.blob();
	      }).catch(function (error) {
	        console.error("There has been a problem with your fetch operation:", error);
	      });
	    });

	    return _this;
	  }

	  _createClass(LoginPage, [{
	    key: "render",
	    value: function render() {
	      return /*#__PURE__*/React.createElement("form", {
	        onSubmit: this.onClickHandler
	      }, /*#__PURE__*/React.createElement("div", {
	        className: css_248z$2.container
	      }, /*#__PURE__*/React.createElement("label", {
	        for: "uname"
	      }, /*#__PURE__*/React.createElement("b", null, "Username")), /*#__PURE__*/React.createElement("input", {
	        type: "text",
	        placeholder: "Enter Username",
	        name: "uname",
	        required: true
	      }), /*#__PURE__*/React.createElement("label", {
	        for: "upswd"
	      }, /*#__PURE__*/React.createElement("b", null, "Password")), /*#__PURE__*/React.createElement("input", {
	        type: "password",
	        placeholder: "Enter Password",
	        name: "upswd",
	        required: true
	      }), /*#__PURE__*/React.createElement("label", {
	        for: "urole"
	      }, /*#__PURE__*/React.createElement("b", null, "Role")), /*#__PURE__*/React.createElement("select", {
	        name: "urole"
	      }, /*#__PURE__*/React.createElement("option", {
	        value: "admin"
	      }, "Admin"), /*#__PURE__*/React.createElement("option", {
	        value: "manager"
	      }, "Manager")), /*#__PURE__*/React.createElement("button", {
	        type: "submit"
	      }, "Login")));
	    }
	  }]);

	  return LoginPage;
	}(React.Component);

	var css_248z$1 = "/* Add a black background color to the top navigation */\r\n.topnav {\r\n  background-color: #4a4f4f;\r\n  overflow: hidden;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n.topnav a {\r\n  float: left;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n/* Change the color of links on hover */\r\n.topnav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n.topnav a.active {\r\n  background-color: #04AA6D;\r\n  color: white;\r\n}\r\n";
	styleInject(css_248z$1);

	var App = /*#__PURE__*/function (_React$Component) {
	  _inherits(App, _React$Component);

	  var _super = _createSuper(App);

	  function App() {
	    var _this;

	    _classCallCheck(this, App);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));

	    _defineProperty(_assertThisInitialized(_this), "state", {
	      username: "",
	      role: "",
	      loginsuccess: "",
	      office: ["EON1"],
	      response: {
	        emp: 253,
	        departments: ["CTO", "FSG", "IWM"],
	        subDepartments: ["CTO1", "CTO2"]
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "handleCallback", function (obj) {
	      console.log("from app" + obj.role);

	      _this.setState({
	        username: obj.name,
	        role: obj.role,
	        loginsuccess: obj.loginsuccess,
	        response: {
	          emp: 200,
	          departments: ["CTO", "FSG", "IWM"],
	          subDepartments: ["CTO1", "CTO2", "CTO3"]
	        }
	      });
	    });

	    return _this;
	  }

	  _createClass(App, [{
	    key: "render",
	    value: function render() {
	      return /*#__PURE__*/React.createElement("div", null, this.state.loginsuccess ? /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
	        className: "topnav"
	      }, /*#__PURE__*/React.createElement(Link, {
	        to: "/"
	      }, "Home"), /*#__PURE__*/React.createElement(Link, {
	        to: "/allocation"
	      }, "Manage Allocation"), /*#__PURE__*/React.createElement(Link, {
	        to: "/report"
	      }, "View Allocation")), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
	        path: "/",
	        element: /*#__PURE__*/React.createElement(Home, null)
	      }), /*#__PURE__*/React.createElement(Route, {
	        path: "/report",
	        element: /*#__PURE__*/React.createElement(Report, {
	          response: this.state
	        })
	      }), /*#__PURE__*/React.createElement(Route, {
	        path: "/allocation",
	        element: /*#__PURE__*/React.createElement(Allocation, {
	          response: this.state
	        })
	      }))) : /*#__PURE__*/React.createElement(LoginPage, {
	        parentCallback: this.handleCallback
	      }));
	    }
	  }]);

	  return App;
	}(React.Component);

	var css_248z = "@charset \"UTF-8\";/*!\n * Bootstrap  v5.2.1 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, 0.175);--bs-border-radius:0.375rem;--bs-border-radius-sm:0.25rem;--bs-border-radius-lg:0.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-2xl:2rem;--bs-border-radius-pill:50rem;--bs-link-color:#0d6efd;--bs-link-hover-color:#0a58ca;--bs-code-color:#d63384;--bs-highlight-bg:#fff3cd}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:var(--bs-link-color);text-decoration:underline}a:hover{color:var(--bs-link-hover-color)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid var(--bs-border-color);border-radius:.375rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-color:var(--bs-body-color);--bs-table-bg:transparent;--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-body-color);--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:var(--bs-body-color);--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:var(--bs-body-color);--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-striped-columns>:not(caption)>tr>:nth-child(2n){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#bacbe6;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#cbccce;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#bcd0c7;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#badce3;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#e6dbb9;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#dfc2c4;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#dfe0e1;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#373b3e;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;border-radius:.25rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + .75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:calc(1.5em + .75rem + 2px);padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0!important;border-radius:.375rem}.form-control-color::-webkit-color-swatch{border-radius:.375rem}.form-control-color.form-control-sm{height:calc(1.5em + .5rem + 2px)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px)}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:.25rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.5rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem .75rem;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control-plaintext::-moz-placeholder,.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control-plaintext:not(:-moz-placeholder-shown),.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.375rem}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:.25rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.375rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(3rem + calc(1.5em + .75rem))}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.375rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(3rem + calc(1.5em + .75rem))}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}.btn{--bs-btn-padding-x:0.75rem;--bs-btn-padding-y:0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:#212529;--bs-btn-bg:transparent;--bs-btn-border-width:1px;--bs-btn-border-color:transparent;--bs-btn-border-radius:0.375rem;--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity:0.65;--bs-btn-focus-box-shadow:0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:first-child:hover,:not(.btn-check)+.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:none;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:0.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:0.5rem}.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:0.25rem;--bs-btn-padding-x:0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius:0.25rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:#212529;--bs-dropdown-bg:#fff;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:0.375rem;--bs-dropdown-border-width:1px;--bs-dropdown-inner-border-radius:calc(0.375rem - 1px);--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-dropdown-link-color:#212529;--bs-dropdown-link-hover-color:#1e2125;--bs-dropdown-link-hover-bg:#e9ecef;--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem}.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:#6c757d;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width:1px;--bs-nav-tabs-border-color:#dee2e6;--bs-nav-tabs-border-radius:0.375rem;--bs-nav-tabs-link-hover-border-color:#e9ecef #e9ecef #dee2e6;--bs-nav-tabs-link-active-color:#495057;--bs-nav-tabs-link-active-bg:#fff;--bs-nav-tabs-link-active-border-color:#dee2e6 #dee2e6 #fff;border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(-1 * var(--bs-nav-tabs-border-width));background:0 0;border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(-1 * var(--bs-nav-tabs-border-width));border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius:0.375rem;--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}.nav-pills .nav-link{background:0 0;border:0;border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:transparent;border-color:transparent}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:0.5rem;--bs-navbar-color:rgba(0, 0, 0, 0.55);--bs-navbar-hover-color:rgba(0, 0, 0, 0.7);--bs-navbar-disabled-color:rgba(0, 0, 0, 0.3);--bs-navbar-active-color:rgba(0, 0, 0, 0.9);--bs-navbar-brand-padding-y:0.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(0, 0, 0, 0.9);--bs-navbar-brand-hover-color:rgba(0, 0, 0, 0.9);--bs-navbar-nav-link-padding-x:0.5rem;--bs-navbar-toggler-padding-y:0.25rem;--bs-navbar-toggler-padding-x:0.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");--bs-navbar-toggler-border-color:rgba(0, 0, 0, 0.1);--bs-navbar-toggler-border-radius:0.375rem;--bs-navbar-toggler-focus-width:0.25rem;--bs-navbar-toggler-transition:box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link.active,.navbar-nav .show>.nav-link{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark{--bs-navbar-color:rgba(255, 255, 255, 0.55);--bs-navbar-hover-color:rgba(255, 255, 255, 0.75);--bs-navbar-disabled-color:rgba(255, 255, 255, 0.25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:rgba(255, 255, 255, 0.1);--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:0.5rem;--bs-card-border-width:1px;--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:0.375rem;--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(0.375rem - 1px);--bs-card-cap-padding-y:0.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(0, 0, 0, 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:#fff;--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{margin-top:calc(-.5 * var(--bs-card-title-spacer-y));margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-bottom:calc(-1 * var(--bs-card-cap-padding-y));margin-left:calc(-.5 * var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-left:calc(-.5 * var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:#fff;--bs-accordion-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:1px;--bs-accordion-border-radius:0.375rem;--bs-accordion-inner-border-radius:calc(0.375rem - 1px);--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='var%28--bs-body-color%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;--bs-accordion-btn-active-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-focus-border-color:#86b7fe;--bs-accordion-btn-focus-box-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:#0c63e4;--bs-accordion-active-bg:#e7f1ff}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed)::after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button::after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:\"\";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media (prefers-reduced-motion:reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:var(--bs-accordion-btn-focus-border-color);outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed{border-radius:0}.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:#6c757d;--bs-breadcrumb-item-padding-x:0.5rem;--bs-breadcrumb-item-active-color:#6c757d;display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, \"/\")}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x:0.75rem;--bs-pagination-padding-y:0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:#fff;--bs-pagination-border-width:1px;--bs-pagination-border-color:#dee2e6;--bs-pagination-border-radius:0.375rem;--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:#e9ecef;--bs-pagination-hover-border-color:#dee2e6;--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:#e9ecef;--bs-pagination-focus-box-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:#6c757d;--bs-pagination-disabled-bg:#fff;--bs-pagination-disabled-border-color:#dee2e6;display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.active>.page-link,.page-link.active{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.disabled>.page-link,.page-link.disabled{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:0.5rem}.pagination-sm{--bs-pagination-padding-x:0.5rem;--bs-pagination-padding-y:0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius:0.25rem}.badge{--bs-badge-padding-x:0.65em;--bs-badge-padding-y:0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:0.375rem;display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:1px solid var(--bs-alert-border-color);--bs-alert-border-radius:0.375rem;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color:#084298;--bs-alert-bg:#cfe2ff;--bs-alert-border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{--bs-alert-color:#41464b;--bs-alert-bg:#e2e3e5;--bs-alert-border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{--bs-alert-color:#0f5132;--bs-alert-bg:#d1e7dd;--bs-alert-border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{--bs-alert-color:#055160;--bs-alert-bg:#cff4fc;--bs-alert-border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{--bs-alert-color:#664d03;--bs-alert-bg:#fff3cd;--bs-alert-border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{--bs-alert-color:#842029;--bs-alert-bg:#f8d7da;--bs-alert-border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{--bs-alert-color:#636464;--bs-alert-bg:#fefefe;--bs-alert-border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{--bs-alert-color:#141619;--bs-alert-bg:#d3d3d4;--bs-alert-border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{--bs-progress-height:1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg:#e9ecef;--bs-progress-border-radius:0.375rem;--bs-progress-box-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.list-group{--bs-list-group-color:#212529;--bs-list-group-bg:#fff;--bs-list-group-border-color:rgba(0, 0, 0, 0.125);--bs-list-group-border-width:1px;--bs-list-group-border-radius:0.375rem;--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:0.5rem;--bs-list-group-action-color:#495057;--bs-list-group-action-hover-color:#495057;--bs-list-group-action-hover-bg:#f8f9fa;--bs-list-group-action-active-color:#212529;--bs-list-group-action-active-bg:#e9ecef;--bs-list-group-disabled-color:#6c757d;--bs-list-group-disabled-bg:#fff;--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item::before{content:counters(section, \".\") \". \";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(-1 * var(--bs-list-group-border-width));border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:0.75rem;--bs-toast-padding-y:0.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(255, 255, 255, 0.85);--bs-toast-border-width:1px;--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:0.375rem;--bs-toast-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-toast-header-color:#6c757d;--bs-toast-header-bg:rgba(255, 255, 255, 0.85);--bs-toast-header-border-color:rgba(0, 0, 0, 0.05);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{position:absolute;z-index:var(--bs-toast-zindex);width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(-.5 * var(--bs-toast-padding-x));margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:0.5rem;--bs-modal-color: ;--bs-modal-bg:#fff;--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:1px;--bs-modal-border-radius:0.5rem;--bs-modal-box-shadow:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-modal-inner-border-radius:calc(0.5rem - 1px);--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:1px;--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:1px;position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin) * 2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin) * 2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);margin:calc(-.5 * var(--bs-modal-header-padding-y)) calc(-.5 * var(--bs-modal-header-padding-x)) calc(-.5 * var(--bs-modal-header-padding-y)) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap) * .5)}@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (min-width:1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:0.5rem;--bs-tooltip-padding-y:0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color:#fff;--bs-tooltip-bg:#000;--bs-tooltip-border-radius:0.375rem;--bs-tooltip-opacity:0.9;--bs-tooltip-arrow-width:0.8rem;--bs-tooltip-arrow-height:0.4rem;z-index:var(--bs-tooltip-zindex);display:block;padding:var(--bs-tooltip-arrow-height);margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before,.bs-tooltip-top .tooltip-arrow::before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before,.bs-tooltip-end .tooltip-arrow::before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before,.bs-tooltip-bottom .tooltip-arrow::before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before,.bs-tooltip-start .tooltip-arrow::before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:0.875rem;--bs-popover-bg:#fff;--bs-popover-border-width:1px;--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:0.5rem;--bs-popover-inner-border-radius:calc(0.5rem - 1px);--bs-popover-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: ;--bs-popover-header-bg:#f0f0f0;--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:#212529;--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:0.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow::after,.popover .popover-arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid;border-width:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::after,.bs-popover-top>.popover-arrow::before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-top>.popover-arrow::after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::after,.bs-popover-end>.popover-arrow::before{border-width:calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-end>.popover-arrow::after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::before{border-width:0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(-.5 * var(--bs-popover-arrow-width));content:\"\";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::after,.bs-popover-start>.popover-arrow::before{border-width:calc(var(--bs-popover-arrow-width) * .5) 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-start>.popover-arrow::after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}.spinner-border,.spinner-grow{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;-webkit-animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-border-width:0.25em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:transparent}.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:0.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color: ;--bs-offcanvas-bg:#fff;--bs-offcanvas-border-width:1px;--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)}@media (max-width:575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:575.98px){.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{transform:none}}@media (max-width:575.98px){.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}@media (min-width:576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}@media (max-width:767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:767.98px){.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:767.98px){.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{transform:none}}@media (max-width:767.98px){.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}@media (min-width:768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:991.98px){.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{transform:none}}@media (max-width:991.98px){.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}@media (min-width:992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:1199.98px){.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{transform:none}}@media (max-width:1199.98px){.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}@media (min-width:1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}@media (max-width:1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media (max-width:1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media (max-width:1399.98px){.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{transform:none}}@media (max-width:1399.98px){.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}@media (min-width:1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);margin-top:calc(-.5 * var(--bs-offcanvas-padding-y));margin-right:calc(-.5 * var(--bs-offcanvas-padding-x));margin-bottom:calc(-.5 * var(--bs-offcanvas-padding-y))}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn::before{display:inline-block;content:\"\"}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{-webkit-animation:placeholder-glow 2s ease-in-out infinite;animation:placeholder-glow 2s ease-in-out infinite}@-webkit-keyframes placeholder-glow{50%{opacity:.2}}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,0.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,0.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%;-webkit-animation:placeholder-wave 2s linear infinite;animation:placeholder-wave 2s linear infinite}@-webkit-keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}.clearfix::after{display:block;clear:both;content:\"\"}.text-bg-primary{color:#fff!important;background-color:RGBA(13,110,253,var(--bs-bg-opacity,1))!important}.text-bg-secondary{color:#fff!important;background-color:RGBA(108,117,125,var(--bs-bg-opacity,1))!important}.text-bg-success{color:#fff!important;background-color:RGBA(25,135,84,var(--bs-bg-opacity,1))!important}.text-bg-info{color:#000!important;background-color:RGBA(13,202,240,var(--bs-bg-opacity,1))!important}.text-bg-warning{color:#000!important;background-color:RGBA(255,193,7,var(--bs-bg-opacity,1))!important}.text-bg-danger{color:#fff!important;background-color:RGBA(220,53,69,var(--bs-bg-opacity,1))!important}.text-bg-light{color:#000!important;background-color:RGBA(248,249,250,var(--bs-bg-opacity,1))!important}.text-bg-dark{color:#fff!important;background-color:RGBA(33,37,41,var(--bs-bg-opacity,1))!important}.link-primary{color:#0d6efd!important}.link-primary:focus,.link-primary:hover{color:#0a58ca!important}.link-secondary{color:#6c757d!important}.link-secondary:focus,.link-secondary:hover{color:#565e64!important}.link-success{color:#198754!important}.link-success:focus,.link-success:hover{color:#146c43!important}.link-info{color:#0dcaf0!important}.link-info:focus,.link-info:hover{color:#3dd5f3!important}.link-warning{color:#ffc107!important}.link-warning:focus,.link-warning:hover{color:#ffcd39!important}.link-danger{color:#dc3545!important}.link-danger:focus,.link-danger:hover{color:#b02a37!important}.link-light{color:#f8f9fa!important}.link-light:focus,.link-light:hover{color:#f9fafb!important}.link-dark{color:#212529!important}.link-dark:focus,.link-dark:hover{color:#1a1e21!important}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-0{border:0!important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top-0{border-top:0!important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-start-0{border-left:0!important}.border-primary{--bs-border-opacity:1;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}.border-secondary{--bs-border-opacity:1;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}.border-success{--bs-border-opacity:1;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}.border-info{--bs-border-opacity:1;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}.border-warning{--bs-border-opacity:1;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}.border-danger{--bs-border-opacity:1;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}.border-light{--bs-border-opacity:1;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.border-white{--bs-border-opacity:1;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}.border-1{--bs-border-width:1px}.border-2{--bs-border-width:2px}.border-3{--bs-border-width:3px}.border-4{--bs-border-width:4px}.border-5{--bs-border-width:5px}.border-opacity-10{--bs-border-opacity:0.1}.border-opacity-25{--bs-border-opacity:0.25}.border-opacity-50{--bs-border-opacity:0.5}.border-opacity-75{--bs-border-opacity:0.75}.border-opacity-100{--bs-border-opacity:1}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-semibold{font-weight:600!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:#6c757d!important}.text-black-50{--bs-text-opacity:1;color:rgba(0,0,0,.5)!important}.text-white-50{--bs-text-opacity:1;color:rgba(255,255,255,.5)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:0.25}.text-opacity-50{--bs-text-opacity:0.5}.text-opacity-75{--bs-text-opacity:0.75}.text-opacity-100{--bs-text-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}.bg-opacity-10{--bs-bg-opacity:0.1}.bg-opacity-25{--bs-bg-opacity:0.25}.bg-opacity-50{--bs-bg-opacity:0.5}.bg-opacity-75{--bs-bg-opacity:0.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:var(--bs-border-radius)!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:var(--bs-border-radius-sm)!important}.rounded-2{border-radius:var(--bs-border-radius)!important}.rounded-3{border-radius:var(--bs-border-radius-lg)!important}.rounded-4{border-radius:var(--bs-border-radius-xl)!important}.rounded-5{border-radius:var(--bs-border-radius-2xl)!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:var(--bs-border-radius-pill)!important}.rounded-top{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-end{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}";
	styleInject(css_248z);

	ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root'));

})();
