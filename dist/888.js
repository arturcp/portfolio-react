"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[888],{888:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var o=r(294);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function u(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}const a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(s,e);var t,r,n,a,p=(n=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(a){var r=l(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return u(this,e)});function s(){return c(this,s),p.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){var e=this;return o.createElement("ul",{className:"polaroids large-block-grid-4 small-block-grid-2"},this.props.conference.photos.map((function(t,r){var n="images/conferences/".concat(e.props.conference.folder,"/").concat(t.url);return o.createElement("li",{key:"conference-".concat(e.props.conference.name,"-photo-").concat(r)},o.createElement("a",{href:n,title:t.title,className:"glightbox"},o.createElement("img",{src:n})))})))}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.Component)}}]);