define(["./core","./core/toType","./manipulation/var/rcheckableType","./var/isFunction","./core/init","./traversing","./attributes/prop"],function(a,s,n,u){"use strict";function o(t,e,r,i){var n;if(Array.isArray(e))a.each(e,function(e,n){r||c.test(t)?i(t,n):o(t+"["+("object"==typeof n&&null!=n?e:"")+"]",n,r,i)});else if(r||"object"!==s(e))i(t,e);else for(n in e)o(t+"["+n+"]",e[n],r,i)}var c=/\[\]$/,r=/\r?\n/g,t=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;return a.param=function(e,n){var t,r=[],i=function(e,n){var t=u(n)?n():n;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==t?"":t)};if(Array.isArray(e)||e.jquery&&!a.isPlainObject(e))a.each(e,function(){i(this.name,this.value)});else for(t in e)o(t,e[t],n,i);return r.join("&")},a.fn.extend({serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=a.prop(this,"elements");return e?a.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!a(this).is(":disabled")&&i.test(this.nodeName)&&!t.test(e)&&(this.checked||!n.test(e))}).map(function(e,n){var t=a(this).val();return null==t?null:Array.isArray(t)?a.map(t,function(e){return{name:n.name,value:e.replace(r,"\r\n")}}):{name:n.name,value:t.replace(r,"\r\n")}}).get()}}),a});