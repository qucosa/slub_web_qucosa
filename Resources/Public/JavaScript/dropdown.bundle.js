"use strict";(self.webpackChunkqsa=self.webpackChunkqsa||[]).push([[493],{223:function(o,t,n){function e(o){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},e(o)}function r(o,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,(void 0,s=function(o,t){if("object"!==e(o)||null===o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var r=n.call(o,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(r.key),"symbol"===e(s)?s:String(s)),r)}var s}n.r(t);var s=function(){function o(){!function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.init()}var t,n;return t=o,(n=[{key:"init",value:function(){this.openDropdown(),this.closeDropdowns()}},{key:"openDropdown",value:function(){document.querySelectorAll(".qsa_dropdown__button-language").forEach((function(o){o.addEventListener("click",(function(o){o.target.classList.toggle("qsa_dropdown__button-language--show")}))}))}},{key:"closeDropdowns",value:function(){window.onclick=function(o){if(!o.target.matches(".qsa_dropdown__button")){var t=document.querySelectorAll(".qsa_dropdown__button");document.querySelectorAll(".qsa_dropdown__items").forEach((function(o){o.classList.contains("qsa_dropdown__items--show")&&o.classList.remove("qsa_dropdown__items--show")})),t.forEach((function(o){(o.classList.contains("qsa_dropdown__button--show")||o.classList.contains("qsa_dropdown__button-language--show")||o.classList.contains("qsa_dropdown__button--active"))&&(o.classList.remove("qsa_dropdown__button--show"),o.classList.remove("qsa_dropdown__button--active"),o.classList.remove("qsa_dropdown__button-language--show"))}))}}}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),o}();t.default=new s}}]);