(self.webpackChunkqsa=self.webpackChunkqsa||[]).push([[861],{861:function(e,t,n){"use strict";function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function s(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function c(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function u(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function f(e){return r(p(e)).left+i(e).scrollLeft}function d(e){return o(e).getComputedStyle(e)}function l(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function m(e,t,n){void 0===n&&(n=!1);var a,c,d=p(t),m=r(e),v=s(t),h={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(v||!v&&!n)&&(("body"!==u(t)||l(d))&&(h=(a=t)!==o(a)&&s(a)?{scrollLeft:(c=a).scrollLeft,scrollTop:c.scrollTop}:i(a)),s(t)?((g=r(t)).x+=t.clientLeft,g.y+=t.clientTop):d&&(g.x=f(d))),{x:m.left+h.scrollLeft-g.x,y:m.top+h.scrollTop-g.y,width:m.width,height:m.height}}function v(e){var t=r(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function h(e){return"html"===u(e)?e:e.assignedSlot||e.parentNode||(c(e)?e.host:null)||p(e)}function g(e){return["html","body","#document"].indexOf(u(e))>=0?e.ownerDocument.body:s(e)&&l(e)?e:g(h(e))}function b(e,t){var n;void 0===t&&(t=[]);var r=g(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],l(r)?r:[]):r,c=t.concat(s);return i?c:c.concat(b(h(s)))}function y(e){return["table","td","th"].indexOf(u(e))>=0}function w(e){return s(e)&&"fixed"!==d(e).position?e.offsetParent:null}function x(e){for(var t=o(e),n=w(e);n&&y(n)&&"static"===d(n).position;)n=w(n);return n&&("html"===u(n)||"body"===u(n)&&"static"===d(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&s(e)&&"fixed"===d(e).position)return null;for(var n=h(e);s(n)&&["html","body"].indexOf(u(n))<0;){var r=d(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}n.d(t,{ZP:function(){return Je}});var O="top",E="bottom",T="right",A="left",D="auto",j=[O,E,T,A],L="start",k="end",C="viewport",M="popper",S=j.reduce((function(e,t){return e.concat([t+"-"+L,t+"-"+k])}),[]),P=[].concat(j,[D]).reduce((function(e,t){return e.concat([t,t+"-"+L,t+"-"+k])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function H(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var W={placement:"bottom",modifiers:[],strategy:"absolute"};function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function R(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?W:o;return function(e,t,n){void 0===n&&(n=i);var o,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},W,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},u=[],p=!1,f={state:c,setOptions:function(n){d(),c.options=Object.assign({},i,c.options,n),c.scrollParents={reference:a(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)};var o,s,p=function(e){var t=H(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((o=[].concat(r,c.options.modifiers),s=o.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(s).map((function(e){return s[e]}))));return c.orderedModifiers=p.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:c,name:t,instance:f,options:r});u.push(i||function(){})}})),f.update()},forceUpdate:function(){if(!p){var e=c.elements,t=e.reference,n=e.popper;if(B(t,n)){c.rects={reference:m(t,x(n),"fixed"===c.options.strategy),popper:v(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,u=o.name;"function"==typeof i&&(c=i({state:c,options:s,name:u,instance:f})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(o())}))}))),s}),destroy:function(){d(),p=!0}};if(!B(e,t))return f;function d(){u.forEach((function(e){return e()})),u=[]}return f.setOptions(n).then((function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var I={passive:!0},N={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,c=void 0===s||s,u=o(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,I)})),c&&u.addEventListener("resize",n.update,I),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,I)})),c&&u.removeEventListener("resize",n.update,I)}},data:{}};function q(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function _(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function F(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?q(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case O:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:c};break;case A:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?_(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case L:t[u]=t[u]-(n[p]/2-r[p]/2);break;case k:t[u]=t[u]+(n[p]/2-r[p]/2)}}return t}var z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=F({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},$=Math.max,X=Math.min,Y=Math.round,J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,l=!0===f?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Y(Y(t*r)/r)||0,y:Y(Y(n*r)/r)||0}}(a):"function"==typeof f?f(a):a,m=l.x,v=void 0===m?0:m,h=l.y,g=void 0===h?0:h,b=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),w=A,D=O,j=window;if(u){var L=x(n),k="clientHeight",C="clientWidth";L===o(n)&&"static"!==d(L=p(n)).position&&(k="scrollHeight",C="scrollWidth"),L=L,i===O&&(D=E,g-=L[k]-r.height,g*=c?1:-1),i===A&&(w=T,v-=L[C]-r.width,v*=c?1:-1)}var M,S=Object.assign({position:s},u&&J);return c?Object.assign({},S,((M={})[D]=y?"0":"",M[w]=b?"0":"",M.transform=(j.devicePixelRatio||1)<2?"translate("+v+"px, "+g+"px)":"translate3d("+v+"px, "+g+"px, 0)",M)):Object.assign({},S,((t={})[D]=y?g+"px":"",t[w]=b?v+"px":"",t.transform="",t))}var G={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&u(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&u(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},K={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,(function(e){return K[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function ne(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&c(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t){return t===C?re(function(e){var t=o(e),n=p(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,c=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,c=r.offsetTop)),{width:i,height:a,x:s+f(e),y:c}}(e)):s(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):re(function(e){var t,n=p(e),r=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=$(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=$(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+f(e),u=-r.scrollTop;return"rtl"===d(o||n).direction&&(c+=$(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:c,y:u}}(p(e)))}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ae(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function se(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,c=n.boundary,f=void 0===c?"clippingParents":c,l=n.rootBoundary,m=void 0===l?C:l,v=n.elementContext,g=void 0===v?M:v,y=n.altBoundary,w=void 0!==y&&y,A=n.padding,D=void 0===A?0:A,L=ie("number"!=typeof D?D:ae(D,j)),k=g===M?"reference":M,S=e.elements.reference,P=e.rects.popper,V=e.elements[w?k:g],H=function(e,t,n){var r="clippingParents"===t?function(e){var t=b(h(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&s(e)?x(e):e;return a(n)?t.filter((function(e){return a(e)&&ne(e,n)&&"body"!==u(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],c=o.reduce((function(t,n){var r=oe(e,n);return t.top=$(r.top,t.top),t.right=X(r.right,t.right),t.bottom=X(r.bottom,t.bottom),t.left=$(r.left,t.left),t}),oe(e,i));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}(a(V)?V:V.contextElement||p(e.elements.popper),f,m),W=r(S),B=F({reference:W,element:P,strategy:"absolute",placement:i}),R=re(Object.assign({},P,B)),I=g===M?R:W,N={top:H.top-I.top+L.top,bottom:I.bottom-H.bottom+L.bottom,left:H.left-I.left+L.left,right:I.right-H.right+L.right},q=e.modifiersData.offset;if(g===M&&q){var U=q[i];Object.keys(N).forEach((function(e){var t=[T,E].indexOf(e)>=0?1:-1,n=[O,E].indexOf(e)>=0?"y":"x";N[e]+=U[n]*t}))}return N}function ce(e,t,n){return $(e,X(t,n))}function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function pe(e){return[O,T,E,A].some((function(t){return e[t]>=0}))}var fe=R({defaultModifiers:[N,z,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},G,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=P.reduce((function(e,n){return e[n]=function(e,t,n){var r=q(e),o=[A,O].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[A,T].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=q(h),b=c||(g!==h&&m?function(e){if(q(e)===D)return[];var t=Q(e);return[te(e),t,te(t)]}(h):[Q(h)]),y=[h].concat(b).reduce((function(e,n){return e.concat(q(n)===D?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?P:c,p=U(r),f=p?s?S:S.filter((function(e){return U(e)===p})):j,d=f.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=f);var l=d.reduce((function(t,n){return t[n]=se(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[q(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,k=new Map,C=!0,M=y[0],V=0;V<y.length;V++){var H=y[V],W=q(H),B=U(H)===L,R=[O,E].indexOf(W)>=0,I=R?"width":"height",N=se(t,{placement:H,boundary:p,rootBoundary:f,altBoundary:d,padding:u}),_=R?B?T:A:B?E:O;w[I]>x[I]&&(_=Q(_));var F=Q(_),z=[];if(i&&z.push(N[W]<=0),s&&z.push(N[_]<=0,N[F]<=0),z.every((function(e){return e}))){M=H,C=!1;break}k.set(H,z)}if(C)for(var $=function(e){var t=y.find((function(t){var n=k.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},X=m?3:1;X>0&&"break"!==$(X);X--);t.placement!==M&&(t.modifiersData[r]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,d=n.tether,l=void 0===d||d,m=n.tetherOffset,h=void 0===m?0:m,g=se(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:p}),b=q(t.placement),y=U(t.placement),w=!y,D=_(b),j="x"===D?"y":"x",k=t.modifiersData.popperOffsets,C=t.rects.reference,M=t.rects.popper,S="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,P={x:0,y:0};if(k){if(i||s){var V="y"===D?O:A,H="y"===D?E:T,W="y"===D?"height":"width",B=k[D],R=k[D]+g[V],I=k[D]-g[H],N=l?-M[W]/2:0,F=y===L?C[W]:M[W],z=y===L?-M[W]:-C[W],Y=t.elements.arrow,J=l&&Y?v(Y):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=Z[V],K=Z[H],Q=ce(0,C[W],J[W]),ee=w?C[W]/2-N-Q-G-S:F-Q-G-S,te=w?-C[W]/2+N+Q+K+S:z+Q+K+S,ne=t.elements.arrow&&x(t.elements.arrow),re=ne?"y"===D?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][D]:0,ie=k[D]+ee-oe-re,ae=k[D]+te-oe;if(i){var ue=ce(l?X(R,ie):R,B,l?$(I,ae):I);k[D]=ue,P[D]=ue-B}if(s){var pe="x"===D?O:A,fe="x"===D?E:T,de=k[j],le=de+g[pe],me=de-g[fe],ve=ce(l?X(le,ie):le,de,l?$(me,ae):me);k[j]=ve,P[j]=ve-de}}t.modifiersData[r]=P}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=q(n.placement),c=_(s),u=[A,T].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ae(e,j))}(o.padding,n),f=v(i),d="y"===c?O:A,l="y"===c?E:T,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],g=x(i),b=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=m/2-h/2,w=p[d],D=b-f[u]-p[l],L=b/2-f[u]/2+y,k=ce(w,L,D),C=c;n.modifiersData[r]=((t={})[C]=k,t.centerOffset=k-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&ne(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=se(t,{elementContext:"reference"}),s=se(t,{altBoundary:!0}),c=ue(a,r),u=ue(s,o,i),p=pe(c),f=pe(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]}),de="tippy-content",le="tippy-arrow",me="tippy-svg-arrow",ve={passive:!0,capture:!0};function he(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function ge(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function be(e,t){return"function"==typeof e?e.apply(void 0,t):e}function ye(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function we(e){return[].concat(e)}function xe(e,t){-1===e.indexOf(t)&&e.push(t)}function Oe(e){return[].slice.call(e)}function Ee(){return document.createElement("div")}function Te(e){return["Element","Fragment"].some((function(t){return ge(e,t)}))}function Ae(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function De(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function je(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var Le={isTouch:!1},ke=0;function Ce(){Le.isTouch||(Le.isTouch=!0,window.performance&&document.addEventListener("mousemove",Me))}function Me(){var e=performance.now();e-ke<20&&(Le.isTouch=!1,document.removeEventListener("mousemove",Me)),ke=e}function Se(){var e,t=document.activeElement;if((e=t)&&e._tippy&&e._tippy.reference===e){var n=t._tippy;t.blur&&!n.state.isVisible&&t.blur()}}var Pe="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",Ve=/MSIE |Trident\//.test(Pe),He=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),We=Object.keys(He);function Be(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,o=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:o),t}),{});return Object.assign({},e,{},t)}function Re(e,t){var n=Object.assign({},t,{content:be(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Be(Object.assign({},He,{plugins:t}))):We).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},He.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Ie(e,t){e.innerHTML=t}function Ne(e){var t=Ee();return!0===e?t.className=le:(t.className=me,Te(e)?t.appendChild(e):Ie(t,e)),t}function qe(e,t){Te(t.content)?(Ie(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Ie(e,t.content):e.textContent=t.content)}function Ue(e){var t=e.firstElementChild,n=Oe(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(de)})),arrow:n.find((function(e){return e.classList.contains(le)||e.classList.contains(me)})),backdrop:n.find((function(e){return e.classList.contains("tippy-backdrop")}))}}function _e(e){var t=Ee(),n=Ee();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Ee();function o(n,r){var o=Ue(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||qe(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(Ne(r.arrow))):i.appendChild(Ne(r.arrow)):s&&i.removeChild(s)}return r.className=de,r.setAttribute("data-state","hidden"),qe(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}_e.$$tippy=!0;var Fe=1,ze=[],$e=[];function Xe(e,t){var n,r,o,i,a,s,c,u,p,f=Re(e,Object.assign({},He,{},Be((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],g=ye(Y,f.interactiveDebounce),b=Fe++,y=(p=f.plugins).filter((function(e,t){return p.indexOf(e)===t})),w={id:b,reference:e,popper:Ee(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(o),cancelAnimationFrame(i)},setProps:function(t){if(!w.state.isDestroyed){V("onBeforeUpdate",[w,t]),$();var n=w.props,r=Re(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=r,z(),n.interactiveDebounce!==r.interactiveDebounce&&(B(),g=ye(Y,r.interactiveDebounce)),n.triggerTarget&&!r.triggerTarget?we(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded"),W(),P(),E&&E(n,r),w.popperInstance&&(K(),ee().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)}))),V("onAfterUpdate",[w,t])}},setContent:function(e){w.setProps({content:e})},show:function(){var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=Le.isTouch&&!w.props.touch,o=he(w.props.duration,0,He.duration);if(!(e||t||n||r||k().hasAttribute("disabled")||(V("onShow",[w],!1),!1===w.props.onShow(w)))){if(w.state.isVisible=!0,L()&&(O.style.visibility="visible"),P(),q(),w.state.isMounted||(O.style.transition="none"),L()){var i=M();Ae([i.box,i.content],0)}var a,s,u;c=function(){var e;if(w.state.isVisible&&!v){if(v=!0,O.offsetHeight,O.style.transition=w.props.moveTransition,L()&&w.props.animation){var t=M(),n=t.box,r=t.content;Ae([n,r],o),De([n,r],"visible")}H(),W(),xe($e,w),null==(e=w.popperInstance)||e.forceUpdate(),w.state.isMounted=!0,V("onMount",[w]),w.props.animation&&L()&&function(e,t){_(e,(function(){w.state.isShown=!0,V("onShown",[w])}))}(o)}},s=w.props.appendTo,u=k(),(a=w.props.interactive&&s===He.appendTo||"parent"===s?u.parentNode:be(s,[u])).contains(O)||a.appendChild(O),K()}},hide:function(){var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=he(w.props.duration,1,He.duration);if(!(e||t||n)&&(V("onHide",[w],!1),!1!==w.props.onHide(w))){if(w.state.isVisible=!1,w.state.isShown=!1,v=!1,d=!1,L()&&(O.style.visibility="hidden"),B(),U(),P(),L()){var o=M(),i=o.box,a=o.content;w.props.animation&&(Ae([i,a],r),De([i,a],"hidden"))}H(),W(),w.props.animation?L()&&function(e,t){_(e,(function(){!w.state.isVisible&&O.parentNode&&O.parentNode.contains(O)&&t()}))}(r,w.unmount):w.unmount()}},hideWithInteractivity:function(e){C().addEventListener("mousemove",g),xe(ze,g),g(e)},enable:function(){w.state.isEnabled=!0},disable:function(){w.hide(),w.state.isEnabled=!1},unmount:function(){w.state.isVisible&&w.hide(),w.state.isMounted&&(Q(),ee().forEach((function(e){e._tippy.unmount()})),O.parentNode&&O.parentNode.removeChild(O),$e=$e.filter((function(e){return e!==w})),w.state.isMounted=!1,V("onHidden",[w]))},destroy:function(){w.state.isDestroyed||(w.clearDelayTimeouts(),w.unmount(),$(),delete e._tippy,w.state.isDestroyed=!0,V("onDestroy",[w]))}};if(!f.render)return w;var x=f.render(w),O=x.popper,E=x.onUpdate;O.setAttribute("data-tippy-root",""),O.id="tippy-"+w.id,w.popper=O,e._tippy=w,O._tippy=w;var T=y.map((function(e){return e.fn(w)})),A=e.hasAttribute("aria-expanded");return z(),W(),P(),V("onCreate",[w]),f.showOnCreate&&te(),O.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),O.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(C().addEventListener("mousemove",g),g(e))})),w;function D(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===D()[0]}function L(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function k(){return u||e}function C(){var e,t,n=k().parentNode;return n?(null==(t=we(n)[0])||null==(e=t.ownerDocument)?void 0:e.body)?t.ownerDocument:document:document}function M(){return Ue(O)}function S(e){return w.state.isMounted&&!w.state.isVisible||Le.isTouch||a&&"focus"===a.type?0:he(w.props.delay,e?0:1,He.delay)}function P(){O.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",O.style.zIndex=""+w.props.zIndex}function V(e,t,n){var r;void 0===n&&(n=!0),T.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n&&(r=w.props)[e].apply(r,t)}function H(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=O.id;we(w.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function W(){!A&&w.props.aria.expanded&&we(w.props.triggerTarget||e).forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===k()?"true":"false"):e.removeAttribute("aria-expanded")}))}function B(){C().removeEventListener("mousemove",g),ze=ze.filter((function(e){return e!==g}))}function R(e){if(!(Le.isTouch&&(m||"mousedown"===e.type)||w.props.interactive&&O.contains(e.target))){if(k().contains(e.target)){if(Le.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else V("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),l=!0,setTimeout((function(){l=!1})),w.state.isMounted||U())}}function I(){m=!0}function N(){m=!1}function q(){var e=C();e.addEventListener("mousedown",R,!0),e.addEventListener("touchend",R,ve),e.addEventListener("touchstart",N,ve),e.addEventListener("touchmove",I,ve)}function U(){var e=C();e.removeEventListener("mousedown",R,!0),e.removeEventListener("touchend",R,ve),e.removeEventListener("touchstart",N,ve),e.removeEventListener("touchmove",I,ve)}function _(e,t){var n=M().box;function r(e){e.target===n&&(je(n,"remove",r),t())}if(0===e)return t();je(n,"remove",s),je(n,"add",r),s=r}function F(t,n,r){void 0===r&&(r=!1),we(w.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function z(){var e;j()&&(F("touchstart",X,{passive:!0}),F("touchend",J,{passive:!0})),(e=w.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(F(e,X),e){case"mouseenter":F("mouseleave",J);break;case"focus":F(Ve?"focusout":"blur",Z);break;case"focusin":F("focusout",Z)}}))}function $(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),h=[]}function X(e){var t,n=!1;if(w.state.isEnabled&&!G(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,W(),!w.state.isVisible&&ge(e,"MouseEvent")&&ze.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||d)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:te(e),"click"===e.type&&(d=!n),n&&!r&&ne(e)}}function Y(e){var t=e.target,n=k().contains(t)||O.contains(t);"mousemove"===e.type&&n||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=o.placement.split("-")[0],s=o.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,p="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=t.top-r+c>i,l=r-t.bottom-u>i,m=t.left-n+p>i,v=n-t.right-f>i;return d||l||m||v}))}(ee().concat(O).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean),e)&&(B(),ne(e))}function J(e){G(e)||w.props.trigger.indexOf("click")>=0&&d||(w.props.interactive?w.hideWithInteractivity(e):ne(e))}function Z(e){w.props.trigger.indexOf("focusin")<0&&e.target!==k()||w.props.interactive&&e.relatedTarget&&O.contains(e.relatedTarget)||ne(e)}function G(e){return!!Le.isTouch&&j()!==e.type.indexOf("touch")>=0}function K(){Q();var t=w.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,s=L()?Ue(O).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||k()}:e,p=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(L()){var n=M().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];L()&&s&&p.push({name:"arrow",options:{element:s,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),w.popperInstance=fe(u,O,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:p}))}function Q(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ee(){return Oe(O.querySelectorAll("[data-tippy-root]"))}function te(e){w.clearDelayTimeouts(),e&&V("onTrigger",[w,e]),q();var t=S(!0),n=D(),o=n[0],i=n[1];Le.isTouch&&"hold"===o&&i&&(t=i),t?r=setTimeout((function(){w.show()}),t):w.show()}function ne(e){if(w.clearDelayTimeouts(),V("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=S(!1);t?o=setTimeout((function(){w.state.isVisible&&w.hide()}),t):i=requestAnimationFrame((function(){w.hide()}))}}else U()}}function Ye(e,t){void 0===t&&(t={});var n=He.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Ce,ve),window.addEventListener("blur",Se);var r,o=Object.assign({},t,{plugins:n}),i=(r=e,Te(r)?[r]:function(e){return ge(e,"NodeList")}(r)?Oe(r):Array.isArray(r)?r:Oe(document.querySelectorAll(r))).reduce((function(e,t){var n=t&&Xe(t,o);return n&&e.push(n),e}),[]);return Te(e)?i[0]:i}Ye.defaultProps=He,Ye.setDefaultProps=function(e){Object.keys(e).forEach((function(t){He[t]=e[t]}))},Ye.currentInput=Le,Object.assign({},G,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}}),Ye.setDefaultProps({render:_e});var Je=Ye}}]);