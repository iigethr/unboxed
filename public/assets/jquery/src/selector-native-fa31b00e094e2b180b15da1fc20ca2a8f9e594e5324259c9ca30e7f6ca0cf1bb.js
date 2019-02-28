define(["./core","./var/document","./var/documentElement","./var/hasOwn","./var/indexOf"],function(i,a,e,r,o){"use strict";function c(e,n){if(e===n)return u=!0,0;var t=!e.compareDocumentPosition-!n.compareDocumentPosition;return t||(1&(t=(e.ownerDocument||e)===(n.ownerDocument||n)?e.compareDocumentPosition(n):1)?e===a||e.ownerDocument===a&&i.contains(a,e)?-1:n===a||n.ownerDocument===a&&i.contains(a,n)?1:l?o.call(l,e)-o.call(l,n):0:4&t?-1:1)}function n(e){var n,t=[],o=0,r=0;if(u=!1,l=!s&&e.slice(0),e.sort(c),u){for(;n=e[r++];)n===e[r]&&(o=t.push(r));for(;o--;)e.splice(t[o],1)}return l=null,e}function t(e){return(e+"").replace(f,m)}var u,l,s=i.expando.split("").sort(c).join("")===i.expando,d=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.msMatchesSelector,f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,m=function(e,n){return n?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e};i.extend({uniqueSort:n,unique:n,escapeSelector:t,find:function(e,n,t,o){var r,c,u=0;if(t=t||[],!e||"string"!=typeof e)return t;if(1!==(c=(n=n||a).nodeType)&&9!==c)return[];if(o)for(;r=o[u++];)i.find.matchesSelector(r,e)&&t.push(r);else i.merge(t,n.querySelectorAll(e));return t},text:function(e){var n,t="",o=0,r=e.nodeType;if(r){if(1===r||9===r||11===r)return e.textContent;if(3===r||4===r)return e.nodeValue}else for(;n=e[o++];)t+=i.text(n);return t},contains:function(e,n){var t=9===e.nodeType?e.documentElement:e,o=n&&n.parentNode;return e===o||!(!o||1!==o.nodeType||!t.contains(o))},isXMLDoc:function(e){var n=e&&(e.ownerDocument||e).documentElement;return!!n&&"HTML"!==n.nodeName},expr:{attrHandle:{},match:{bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),i.extend(i.find,{matches:function(e,n){return i.find(e,null,null,n)},matchesSelector:function(e,n){return d.call(e,n)},attr:function(e,n){var t=i.expr.attrHandle[n.toLowerCase()],o=t&&r.call(i.expr.attrHandle,n.toLowerCase())?t(e,n,i.isXMLDoc(e)):undefined;return o!==undefined?o:e.getAttribute(n)}})});