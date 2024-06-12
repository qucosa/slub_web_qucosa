"use strict";(self.webpackChunkqsa=self.webpackChunkqsa||[]).push([[167],{629:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,o(a.key),a)}}function o(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:String(t)}n.r(t);var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.positionLabel(),this.changeDefaultLanguage(),this.createCustomSelects(),document.querySelectorAll(".qsa_select__custom-options");var e=new Event("change"),t=document.querySelector('select[name="tx_find_find[sort]"]');t&&t.closest("div").querySelectorAll(".qsa_select__custom-option").forEach((function(n){n.addEventListener("click",(function(n){t.dispatchEvent(e)}))}))}},{key:"createCustomSelects",value:function(){r(document.getElementsByClassName("js-selectNative")).forEach((function(e){for(var t=e.nextElementSibling.querySelector(".qsa_select__custom-options"),n=t.dataset.iconpath,a=0;a<e.length;a++)if(e.options[a].value){var r=document.createElement("div");r.classList.add("qsa_select__custom-option"),r.dataset.value=e.options[a].value,r.insertAdjacentHTML("beforeend","\n                    ".concat(e.options[a].text,'\n                    <svg class="qsa_icon icon--pdf-file icon--pdf-file--absolute icon--base" role="img" width="20" height="20" aria-hidden="true">\n                        <title class="sr-only">Icon Check</title>\n                        <desc class="sr-only"></desc>\n                        <use xlink:href="').concat(n,'icon-check"></use>\n                    </svg>')),t.appendChild(r)}})),this.styledSelect()}},{key:"styledSelect",value:function(){r(document.getElementsByClassName("js-selectNative")).forEach((function(e){var t=e.nextElementSibling,n=t.children[0],a=t.children[1],r=Array.from(a.children),i=r.length,c="",o=-1;function l(){t.classList.remove("isActive"),t.setAttribute("aria-hidden",!0),s(-1),document.removeEventListener("click",d),document.removeEventListener("keydown",f)}function s(e){var t=a.children[o],n=a.children[e];t&&t.classList.remove("isHover"),n&&n.classList.add("isHover"),o=e}function u(e,r){var i=c,o=a.querySelector('[data-value="'.concat(i,'"')),l=a.querySelector('[data-value="'.concat(e,'"')),s=document.querySelectorAll(".qsa_select__language");o&&o.classList.remove("isActive"),l&&l.classList.add("isActive");var u=n.querySelector("p");u.classList.contains("active")||u.classList.add("active"),u.innerText=r.trim(),c=e,t.isEqualNode(s[0])&&s.forEach((function(t){var n=t.previousElementSibling,a=t.children[0],s=t.children[1];o=s.querySelector('[data-value="'.concat(i,'"')),l=s.querySelector('[data-value="'.concat(e,'"')),o&&o.classList.remove("isActive"),l&&l.classList.add("isActive"),(u=a.querySelector("p")).classList.contains("active")||u.classList.add("active"),u.innerText=r.trim(),n.value=c,n.parentElement.querySelector("label").classList.add("qsa_select__label--filled")}))}function d(e){!t.contains(e.target)&&l()}function f(t){if(40===t.keyCode&&o<i-1&&(t.preventDefault(),s(o+1)),38===t.keyCode&&o>0&&(t.preventDefault(),s(o-1)),13===t.keyCode||32===t.keyCode){t.preventDefault();var n=a.children[o],r=n&&n.getAttribute("data-value");r&&(e.value=r,u(r,n.innerText)),l()}27===t.keyCode&&l()}n.addEventListener("click",(function(e){t.classList.contains("isActive")?l():(t.classList.add("isActive"),t.setAttribute("aria-hidden",!1),c&&s(r.findIndex((function(e){return e.getAttribute("data-value")===c}))),document.addEventListener("click",d),document.addEventListener("keydown",f))})),e.addEventListener("change",(function(e){var t=e.target.value;u(t,a.querySelectorAll('[data-value="'.concat(t,'"]'))[0].childNodes[0].nodeValue)})),r.forEach((function(t,n){t.addEventListener("click",(function(n){var a=n.target.getAttribute("data-value");t.parentElement.parentElement.parentElement.querySelector("label").classList.add("qsa_select__label--filled"),t.parentElement.parentElement.querySelector("p").classList.add("active"),e.value=a,u(a,n.target.innerText),l()})),t.addEventListener("mouseenter",(function(e){s(n)}))}))}))}},{key:"positionLabel",value:function(){var e=document.querySelectorAll(".qsa_select__native"),t=document.querySelectorAll(".qsa_select__custom-trigger"),n=this;e.forEach((function(e){e.addEventListener("focusin",(function(e){n.moveLabelOut(e.target)})),e.addEventListener("change",(function(e){e.target.parentElement.querySelector("label").classList.add("qsa_select__label--filled")}))})),t.forEach((function(e){e.addEventListener("click",(function(e){n.moveLabelOut(e.target.parentElement)}))})),e.forEach((function(e){e.addEventListener("focusout",(function(e){n.moveLabelIn(e.target)}))})),window.onclick=function(e){e.target.matches(".qsa_select__custom-trigger")||e.target.matches(".qsa_select__custom-option")||t.forEach((function(e){n.moveLabelIn(e.parentElement)}))}}},{key:"moveLabelOut",value:function(e){var t=e.parentElement.querySelector("label");t&&t.classList.add("qsa_select__label--focused")}},{key:"moveLabelIn",value:function(e){var t=e.parentElement.querySelector("label");t&&t.classList.remove("qsa_select__label--focused")}},{key:"changeDefaultLanguage",value:function(){}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=new l}}]);