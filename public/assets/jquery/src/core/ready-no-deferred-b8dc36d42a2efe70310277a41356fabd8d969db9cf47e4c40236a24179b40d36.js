define(["../core","../var/document","../var/isFunction"],function(n,t,d){"use strict";function e(){t.removeEventListener("DOMContentLoaded",e),window.removeEventListener("load",e),n.ready()}var i=[],o=function(e){i.push(e)},a=function(e){window.setTimeout(function(){e.call(t,n)})};n.fn.ready=function(e){return o(e),this},n.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--n.readyWait:n.isReady)||(n.isReady=!0)!==e&&0<--n.readyWait||(o=function(e){for(i.push(e);i.length;)e=i.shift(),d(e)&&a(e)})()}}),n.ready.then=n.fn.ready,"complete"===t.readyState||"loading"!==t.readyState&&!t.documentElement.doScroll?window.setTimeout(n.ready):(t.addEventListener("DOMContentLoaded",e),window.addEventListener("load",e))});