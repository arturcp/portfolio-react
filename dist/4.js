(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);n(1);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,u(t).apply(this,arguments))}var o,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),o=t,(c=[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"polaroids large-block-grid-4 small-block-grid-2"},this.props.conference.photos.map((function(t,o){var c=n(30)("./".concat(e.props.conference.folder,"/").concat(t.url));return r.a.createElement("li",{key:"conference-".concat(e.props.conference.name,"-photo-").concat(o)},r.a.createElement("a",{href:c,title:t.title},r.a.createElement("img",{src:c,className:"glightbox"})))})))}}])&&i(o.prototype,c),l&&i(o,l),t}(r.a.Component);t.default=l}}]);