"use strict";(self.webpackChunkqsa=self.webpackChunkqsa||[]).push([[897],{597:function(e,t,r){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,u(o.key),o)}}function u(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}r.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,r;return t=e,(r=[{key:"init",value:function(){$(".carousel").carousel({interval:!1,touch:!0}),this.switchFocus()}},{key:"switchFocus",value:function(){var e=this,t=document.querySelectorAll(".carousel-control-prev"),r=document.querySelectorAll(".carousel-control-next");t.forEach((function(t){e.focusFirstCarouselEl(t)})),r.forEach((function(t){e.focusFirstCarouselEl(t)}))}},{key:"focusFirstCarouselEl",value:function(e){e.addEventListener("click",(function(){e.closest(".carousel").querySelector(".active .qsa_carousel-item_wrapper").querySelectorAll("figure")[0].querySelector(".qsa_carousel-item_el-link").focus()}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=new i}}]);