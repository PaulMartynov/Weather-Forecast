!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function d(){}function m(){}function w(){}var g={};u(g,i,(function(){return this}));var b=Object.getPrototypeOf,O=b&&b(b(_([])));O&&O!==r&&n.call(O,i)&&(g=O);var x=w.prototype=d.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=w,u(x,"constructor",w),u(w,"constructor",m),m.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}var n=r(757),o=r.n(n);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),t}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?u(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w,g="9bc64e60c42456231fa0ac2eca228e78";function b(t){return O.apply(this,arguments)}function O(){return(O=e(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r={cod:503,message:"Service is unavailable"};case 12:return t.abrupt("return",r);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function x(t){return j.apply(this,arguments)}function j(){return(j=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(g)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,e){return S.apply(this,arguments)}function S(){return(S=e(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(r,"&appid=").concat(g)));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;function r(){w=new ymaps.Map("map",{center:[t,e],zoom:12})}ymaps.ready(r)}function P(t){return k.apply(this,arguments)}function k(){return(k=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("listOfTowns",JSON.stringify(e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,JSON.parse(localStorage.getItem("listOfTowns"));case 2:return e=t.sent,t.abrupt("return",null!=e?e:[]);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t,e){t.includes(e)&&t.splice(t.indexOf(e),1),t.length>=10&&t.pop(),t.unshift(e)}function I(t,e){return t.replace(/{{for (\w+)}}([\s\S]+?){{endfor}}/g,(function(t,r,n){return e[r].map((function(t){return I(n,t)})).join("")})).replace(/{{for (\w+) as (\w+)}}([\s\S]+?){{endfor}}/g,(function(t,r,n,o){return e[r].map((function(t){var e={};return e[n]=t,I(o,e)})).join("")})).replace(/{{(\w*)}}/g,(function(t,r){return e[r]?e[r]:""}))}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(f,t);var r,n,a=(r=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(n){var o=h(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return l(this,t)});function f(t){var e;return i(this,f),p(u(e=a.call(this,t)),"state",{cityName:"",temp:"",weatherImg:"",towns:[]}),p(u(e),"isMounted",!1),p(u(e),"submit",(function(t){t.preventDefault();var r=t.target.querySelector("input");if(r){var n=r.value;x(n).then((function(t){200===t.cod&&(T(e.state.towns,n),P(e.state.towns)),e.showWeather(t)})),r.value=""}})),p(u(e),"selectCity",(function(t){t.preventDefault();var r=t.target,n=r.value;e.state.towns.includes(n)&&(x(n).then((function(t){200===t.cod&&(T(e.state.towns,n),P(e.state.towns)),e.showWeather(t)})),r.value="")})),p(u(e),"events",{"submit@form":e.submit,"change@input":e.selectCity}),e.getWeatherByLocation(),setTimeout((function(){t.querySelector("datalist")&&function(){return _.apply(this,arguments)}().then((function(r){e.state.towns=r,e.onMount(t)}))}),1),e}return c(f,[{key:"showWeather",value:function(t){if(200===t.cod){this.setState({cityName:t.name,temp:"".concat(Math.round(t.main.temp-273.15),"°C"),weatherImg:I('<img src="http://openweathermap.org/img/wn/{{icon}}@2x.png" alt={{description}}>',t.weather[0]),towns:this.state.towns});var e=t.coord,r=e.lon;!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;void 0===w?L(t,e):w.setCenter([t,e],12)}(e.lat,r)}else this.setState({cityName:t.message,temp:"",weatherImg:"",towns:this.state.towns})}},{key:"getWeatherByLocation",value:function(){var t=this;navigator.geolocation.getCurrentPosition(function(){var r=e(o().mark((function e(r){var n,i,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.coords,i=n.latitude,a=n.longitude,e.next=4,E(i,a);case 4:c=e.sent,t.showWeather(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return r.apply(this,arguments)}}(),(function(t){var e=t.message;console.log(e)}),{enableHighAccuracy:!0})}},{key:"onMount",value:function(t){this.webEl=t,this.isMounted||(this.isMounted=!0)}},{key:"render",value:function(){return I('\n        <form>\n          <input\n            id="userInput"\n            placeholder="Type city and press enter"\n            list="towns"\n            required\n            autofocus\n            autocomplete="off"\n          />\n          <datalist id="towns">\n            {{for towns as town}}<option value={{town}} />{{endfor}}\n          </datalist>\n          <button>Get weather</button>\n        </form>\n        <table>\n          <tr>\n            <td colspan="2"><h1>{{cityName}}</h1></td>\n          </tr>\n          <tr>\n            <td><h2>{{temp}}</h2></td>\n            <td>{{weatherImg}}</td>\n          </tr>\n        </table>',this.state)}}]),f}(function(){function t(e){var r=this;i(this,t),p(this,"state",{}),p(this,"events",{}),this.el=e,setTimeout((function(){r.el.innerHTML=r.render(),r.subscribeToEvents()}),0)}return c(t,[{key:"setState",value:function(t){this.state=m(m({},this.state),t),this.el.innerHTML=this.render(),this.subscribeToEvents()}},{key:"subscribeToEvents",value:function(){var t=this;Object.keys(this.events).forEach((function(e){var r,n,o=(r=e.split("@"),n=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(r,n)||v(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];(function(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(t.el.querySelectorAll("".concat(a))).forEach((function(r){r.addEventListener("".concat(i),t.events[e])}))}))}}]),t}());e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=document.querySelector("#weatherInfo"))&&new N(e);case 2:case"end":return t.stop()}}),t)})))()}()}();