!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";(function(e){function o(){}n.d(t,"a",function(){return ie});function r(e,t){for(const n in t)e[n]=t[n];return e}function l(e){return e()}function c(){return Object.create(null)}function i(e){e.forEach(l)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t,n){if(e){const o=d(e,t,n);return e[0](o)}}function d(e,t,n){return e[1]?r({},r(t.$$scope.ctx,e[1](n?n(t):{}))):t.$$scope.ctx}function f(e,t,n,o){return e[1]?r({},r(t.$$scope.changed||{},e[1](o?o(n):{}))):t.$$scope.changed||{}}function p(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}new Set;function $(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function g(e){return document.createTextNode(e)}function v(){return g("")}function x(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function w(e){return Array.from(e.childNodes)}function k(e,t,n,o){for(let o=0;o<e.length;o+=1){const r=e[o];if(r.nodeName===t){for(let e=0;e<r.attributes.length;e+=1){const t=r.attributes[e];n[t.name]||r.removeAttribute(t.name)}return e.splice(o,1)[0]}}return o?y(t):m(t)}function L(e,t){for(let n=0;n<e.length;n+=1){const o=e[n];if(3===o.nodeType)return o.data=t,e.splice(n,1)[0]}return g(t)}function A(e,t){t=""+t,e.data!==t&&(e.data=t)}let E;function N(e){E=e}function O(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(e=>e(t))}const S=[],j=[],C=[],P=[],T=Promise.resolve();let z=!1;function M(e){C.push(e)}function B(){const e=new Set;do{for(;S.length;){const e=S.shift();N(e),H(e.$$)}for(;j.length;)j.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];e.has(n)||(n(),e.add(n))}C.length=0}while(S.length);for(;P.length;)P.pop()();z=!1}function H(e){e.fragment&&(e.update(e.dirty),i(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(M))}const q=new Set;let I;function D(){I={r:0,c:[],p:I}}function F(){I.r||i(I.c),I=I.p}function U(e,t){e&&e.i&&(q.delete(e),e.i(t))}function W(e,t,n,o){if(e&&e.o){if(q.has(e))return;q.add(e),I.c.push(()=>{q.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}const G="undefined"!=typeof window?window:e;function J(e,t,n){const{fragment:o,on_mount:r,on_destroy:c,after_update:s}=e.$$;o.m(t,n),M(()=>{const t=r.map(l).filter(a);c?c.push(...t):i(t),e.$$.on_mount=[]}),s.forEach(M)}function K(e,t){e.$$.fragment&&(i(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function Q(e,t,n,r,l,a){const s=E;N(e);const u=t.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:o,not_equal:l,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:c(),dirty:null};let f=!1;d.ctx=n?n(e,u,(t,n)=>{d.ctx&&l(d.ctx[t],d.ctx[t]=n)&&(d.bound[t]&&d.bound[t](n),f&&function(e,t){e.$$.dirty||(S.push(e),z||(z=!0,T.then(B)),e.$$.dirty=c()),e.$$.dirty[t]=!0}(e,t))}):u,d.update(),f=!0,i(d.before_update),d.fragment=r(d.ctx),t.target&&(t.hydrate?d.fragment.l(w(t.target)):d.fragment.c(),t.intro&&U(e.$$.fragment),J(e,t.target,t.anchor),B()),N(s)}class R{$destroy(){K(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function V(e){var t,n,o="";if(e)if("object"==typeof e)if(e.push)for(t=0;t<e.length;t++)e[t]&&(n=V(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(n=V(t))&&(o&&(o+=" "),o+=n);else"boolean"==typeof e||e.call||(o&&(o+=" "),o+=e);return o}function X(){for(var e,t=0,n="";t<arguments.length;)(e=V(arguments[t++]))&&(n&&(n+=" "),n+=e);return n}function Y(e){var t,n,o,r,l,c;const i=e.$$slots.default,a=u(i,e,null);var s=[ne,te,ee],p=[];function $(e){return e.close?0:e.children?1:2}return n=$(e),o=p[n]=s[n](e),{c(){t=m("button"),a||o.c(),a&&a.c(),this.h()},l(e){var n=w(t=k(e,"BUTTON",{id:!0,class:!0,disabled:!0,value:!0,"aria-label":!0,style:!0},!1));a||o.l(n),a&&a.l(n),n.forEach(b),this.h()},h(){_(t,"id",e.id),_(t,"class",e.classes),t.disabled=e.disabled,t.value=e.value,_(t,"aria-label",r=e.ariaLabel||e.defaultAriaLabel),_(t,"style",e.style),c=x(t,"click",e.click_handler_1)},m(e,o){h(e,t,o),a?a.m(t,null):p[n].m(t,null),l=!0},p(e,c){if(!a){var u=n;(n=$(c))===u?p[n].p(e,c):(D(),W(p[u],1,1,()=>{p[u]=null}),F(),(o=p[n])||(o=p[n]=s[n](c)).c(),U(o,1),o.m(t,null))}a&&a.p&&e.$$scope&&a.p(f(i,c,e,null),d(i,c,null)),l&&!e.id||_(t,"id",c.id),l&&!e.classes||_(t,"class",c.classes),l&&!e.disabled||(t.disabled=c.disabled),l&&!e.value||(t.value=c.value),l&&!e.ariaLabel&&!e.defaultAriaLabel||r===(r=c.ariaLabel||c.defaultAriaLabel)||_(t,"aria-label",r),l&&!e.style||_(t,"style",c.style)},i(e){l||(U(o),U(a,e),l=!0)},o(e){W(o),W(a,e),l=!1},d(e){e&&b(t),a||p[n].d(),a&&a.d(e),c()}}}function Z(e){var t,n,o,r,l,c,i=[re,oe],a=[];function s(e){return e.children?0:1}return n=s(e),o=a[n]=i[n](e),{c(){t=m("a"),o.c(),this.h()},l(e){var n=w(t=k(e,"A",{id:!0,class:!0,disabled:!0,href:!0,"aria-label":!0,style:!0},!1));o.l(n),n.forEach(b),this.h()},h(){_(t,"id",e.id),_(t,"class",e.classes),_(t,"disabled",e.disabled),_(t,"href",e.href),_(t,"aria-label",r=e.ariaLabel||e.defaultAriaLabel),_(t,"style",e.style),c=x(t,"click",e.click_handler)},m(e,o){h(e,t,o),a[n].m(t,null),l=!0},p(e,c){var u=n;(n=s(c))===u?a[n].p(e,c):(D(),W(a[u],1,1,()=>{a[u]=null}),F(),(o=a[n])||(o=a[n]=i[n](c)).c(),U(o,1),o.m(t,null)),l&&!e.id||_(t,"id",c.id),l&&!e.classes||_(t,"class",c.classes),l&&!e.disabled||_(t,"disabled",c.disabled),l&&!e.href||_(t,"href",c.href),l&&!e.ariaLabel&&!e.defaultAriaLabel||r===(r=c.ariaLabel||c.defaultAriaLabel)||_(t,"aria-label",r),l&&!e.style||_(t,"style",c.style)},i(e){l||(U(o),l=!0)},o(e){W(o),l=!1},d(e){e&&b(t),a[n].d(),c()}}}function ee(e){var t;const n=e.$$slots.default,o=u(n,e,null);return{c(){o&&o.c()},l(e){o&&o.l(e)},m(e,n){o&&o.m(e,n),t=!0},p(e,t){o&&o.p&&e.$$scope&&o.p(f(n,t,e,null),d(n,t,null))},i(e){t||(U(o,e),t=!0)},o(e){W(o,e),t=!1},d(e){o&&o.d(e)}}}function te(e){var t;return{c(){t=g(e.children)},l(n){t=L(n,e.children)},m(e,n){h(e,t,n)},p(e,n){e.children&&A(t,n.children)},i:o,o:o,d(e){e&&b(t)}}}function ne(e){var t,n;return{c(){t=m("span"),n=g("×"),this.h()},l(e){var o=w(t=k(e,"SPAN",{"aria-hidden":!0},!1));n=L(o,"×"),o.forEach(b),this.h()},h(){_(t,"aria-hidden","true")},m(e,o){h(e,t,o),$(t,n)},p:o,i:o,o:o,d(e){e&&b(t)}}}function oe(e){var t;const n=e.$$slots.default,o=u(n,e,null);return{c(){o&&o.c()},l(e){o&&o.l(e)},m(e,n){o&&o.m(e,n),t=!0},p(e,t){o&&o.p&&e.$$scope&&o.p(f(n,t,e,null),d(n,t,null))},i(e){t||(U(o,e),t=!0)},o(e){W(o,e),t=!1},d(e){o&&o.d(e)}}}function re(e){var t;return{c(){t=g(e.children)},l(n){t=L(n,e.children)},m(e,n){h(e,t,n)},p(e,n){e.children&&A(t,n.children)},i:o,o:o,d(e){e&&b(t)}}}function le(e){var t,n,o,r,l=[Z,Y],c=[];function i(e){return e.href?0:1}return t=i(e),n=c[t]=l[t](e),{c(){n.c(),o=v()},l(e){n.l(e),o=v()},m(e,n){c[t].m(e,n),h(e,o,n),r=!0},p(e,r){var a=t;(t=i(r))===a?c[t].p(e,r):(D(),W(c[a],1,1,()=>{c[a]=null}),F(),(n=c[t])||(n=c[t]=l[t](r)).c(),U(n,1),n.m(o.parentNode,o))},i(e){r||(U(n),r=!0)},o(e){W(n),r=!1},d(e){c[t].d(e),e&&b(o)}}}function ce(e,t,n){let o,l,c,{class:i="",active:a=!1,block:s=!1,children:u,close:d=!1,color:f="secondary",disabled:$=!1,href:h="",id:b="",outline:m=!1,size:y="",style:g="",value:v=""}=t,{$$slots:x={},$$scope:_}=t;return e.$set=e=>{n("$$props",t=r(r({},t),e)),"class"in e&&n("className",i=e.class),"active"in e&&n("active",a=e.active),"block"in e&&n("block",s=e.block),"children"in e&&n("children",u=e.children),"close"in e&&n("close",d=e.close),"color"in e&&n("color",f=e.color),"disabled"in e&&n("disabled",$=e.disabled),"href"in e&&n("href",h=e.href),"id"in e&&n("id",b=e.id),"outline"in e&&n("outline",m=e.outline),"size"in e&&n("size",y=e.size),"style"in e&&n("style",g=e.style),"value"in e&&n("value",v=e.value),"$$scope"in e&&n("$$scope",_=e.$$scope)},e.$$.update=(e={$$props:1,className:1,close:1,outline:1,color:1,size:1,block:1,active:1})=>{n("ariaLabel",o=t["aria-label"]),(e.className||e.close||e.outline||e.color||e.size||e.block||e.active)&&n("classes",l=X(i,{close:d},d||"btn",d||`btn${m?"-outline":""}-${f}`,!!y&&`btn-${y}`,!!s&&"btn-block",{active:a})),e.close&&n("defaultAriaLabel",c=d?"Close":null)},{className:i,active:a,block:s,children:u,close:d,color:f,disabled:$,href:h,id:b,outline:m,size:y,style:g,value:v,ariaLabel:o,classes:l,defaultAriaLabel:c,click_handler:function(t){O(e,t)},click_handler_1:function(t){O(e,t)},$$props:t=p(t),$$slots:x,$$scope:_}}class ie extends R{constructor(e){super(),Q(this,e,ce,le,s,["class","active","block","children","close","color","disabled","href","id","outline","size","style","value"])}}const ae=[];function se(e,t=o){let n;const r=[];function l(t){if(s(e,t)&&(e=t,n)){const t=!ae.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),ae.push(n,e)}if(t){for(let e=0;e<ae.length;e+=2)ae[e][0](ae[e+1]);ae.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(c,i=o){const a=[c,i];return r.push(a),1===r.length&&(n=t(l)||o),c(e),()=>{const e=r.indexOf(a);-1!==e&&r.splice(e,1),0===r.length&&(n(),n=null)}}}}const{window:ue}=G;const{window:de}=G;parseInt,Object.prototype.toString;se({})}).call(this,n(3))},function(e,t,n){e.exports=n(5)},function(e,t,n){},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(2);function o(){}function r(e){return e()}function l(){return Object.create(null)}function c(e){e.forEach(r)}function i(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}new Set;function s(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function $(){return p(" ")}function h(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}let b;function m(e){b=e}const y=[],g=[],v=[],x=[],_=Promise.resolve();let w=!1;function k(){w||(w=!0,_.then(A))}function L(e){v.push(e)}function A(){const e=new Set;do{for(;y.length;){const e=y.shift();m(e),E(e.$$)}for(;g.length;)g.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];e.has(n)||(n(),e.add(n))}v.length=0}while(y.length);for(;x.length;)x.pop()();w=!1}function E(e){e.fragment&&(e.update(e.dirty),c(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(L))}const N=new Set;let O;function S(e,t){e&&e.i&&(N.delete(e),e.i(t))}function j(e,t,n,o){if(e&&e.o){if(N.has(e))return;N.add(e),O.c.push(()=>{N.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}"undefined"!=typeof window?window:global;let C;function P(e,t,n){const{fragment:o,on_mount:l,on_destroy:a,after_update:s}=e.$$;o.m(t,n),L(()=>{const t=l.map(r).filter(i);a?a.push(...t):c(t),e.$$.on_mount=[]}),s.forEach(L)}function T(e,t){e.$$.fragment&&(c(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function z(e,t,n,r,i,a){const s=b;m(e);const u=t.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:o,not_equal:i,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:l(),dirty:null};let f=!1;var p;d.ctx=n?n(e,u,(t,n)=>{d.ctx&&i(d.ctx[t],d.ctx[t]=n)&&(d.bound[t]&&d.bound[t](n),f&&function(e,t){e.$$.dirty||(y.push(e),k(),e.$$.dirty=l()),e.$$.dirty[t]=!0}(e,t))}):u,d.update(),f=!0,c(d.before_update),d.fragment=r(d.ctx),t.target&&(t.hydrate?d.fragment.l((p=t.target,Array.from(p.childNodes))):d.fragment.c(),t.intro&&S(e.$$.fragment),P(e,t.target,t.anchor),A()),m(s)}"undefined"!=typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){T(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class M{$destroy(){T(this,1),this.$destroy=o}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}var B=n(0);n(4);function H(e){var t;return{c(){t=p("Do Not Press")},m(e,n){u(e,t,n)},d(e){e&&d(t)}}}function q(e){var t,n,o,r,l,c,i,a=new B.a({props:{color:"danger",$$slots:{default:[H]},$$scope:{ctx:e}}});return a.$on("click",e.handleClick),{c(){t=$(),n=f("h1"),o=p("Hello "),r=p(e.name),l=p("!"),c=$(),a.$$.fragment.c(),document.title="Wat",h(n,"class","svelte-o015nm")},m(e,d){u(e,t,d),u(e,n,d),s(n,o),s(n,r),s(n,l),u(e,c,d),P(a,e,d),i=!0},p(e,t){var n,o;i&&!e.name||(n=r,o=""+(o=t.name),n.data!==o&&(n.data=o));var l={};e.$$scope&&(l.$$scope={changed:e,ctx:t}),a.$set(l)},i(e){i||(S(a.$$.fragment,e),i=!0)},o(e){j(a.$$.fragment,e),i=!1},d(e){e&&(d(t),d(n),d(c)),T(a,e)}}}function I(e,t,n){let{name:o}=t;return e.$set=e=>{"name"in e&&n("name",o=e.name)},{name:o,handleClick:()=>alert("I warned you!")}}const D=new class extends M{constructor(e){super(),z(this,e,I,q,a,["name"])}}({target:document.body,props:{name:"world"}});window.app=D;t.default=D}]);