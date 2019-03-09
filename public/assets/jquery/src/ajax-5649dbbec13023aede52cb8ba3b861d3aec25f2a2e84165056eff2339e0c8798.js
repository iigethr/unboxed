define(["./core","./var/document","./var/isFunction","./var/rnothtmlwhite","./ajax/var/location","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseXML","./event/trigger","./deferred","./serialize"],function(S,C,s,H,M,L,R){"use strict";function e(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var a,r=0,n=e.toLowerCase().match(H)||[];if(s(t))for(;a=n[r++];)"+"===a[0]?(a=a.slice(1)||"*",(o[a]=o[a]||[]).unshift(t)):(o[a]=o[a]||[]).push(t)}}function D(t,n,o,s){function i(e){var r;return c[e]=!0,S.each(t[e]||[],function(e,t){var a=t(n,o,s);return"string"!=typeof a||d||c[a]?d?!(r=a):void 0:(n.dataTypes.unshift(a),i(a),!1)}),r}var c={},d=t===W;return i(n.dataTypes[0])||!c["*"]&&i("*")}function a(e,t){var a,r,n=S.ajaxSettings.flatOptions||{};for(a in t)t[a]!==undefined&&((n[a]?e:r||(r={}))[a]=t[a]);return r&&S.extend(!0,e,r),e}function q(e,t,a){for(var r,n,o,s,i=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(n in i)if(i[n]&&i[n].test(r)){c.unshift(n);break}if(c[0]in a)o=c[0];else{for(n in a){if(!c[0]||e.converters[n+" "+c[0]]){o=n;break}s||(s=n)}o=o||s}if(o)return o!==c[0]&&c.unshift(o),a[o]}function E(e,t,a,r){var n,o,s,i,c,d={},f=e.dataTypes.slice();if(f[1])for(s in e.converters)d[s.toLowerCase()]=e.converters[s];for(o=f.shift();o;)if(e.responseFields[o]&&(a[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=f.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(!(s=d[c+" "+o]||d["* "+o]))for(n in d)if((i=n.split(" "))[1]===o&&(s=d[c+" "+i[0]]||d["* "+i[0]])){!0===s?s=d[n]:!0!==d[n]&&(o=i[0],f.unshift(i[1]));break}if(!0!==s)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(u){return{state:"parsererror",error:s?u:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}var F=/%20/g,O=/#.*$/,N=/([?&])_=[^&]*/,$=/^(.*?):[ \t]*([^\r\n]*)$/gm,t=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,k=/^(?:GET|HEAD)$/,A=/^\/\//,J={},W={},X="*/".concat("*"),G=C.createElement("a");return G.href=M.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:M.href,type:"GET",isLocal:t.test(M.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":X,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?a(a(e,S.ajaxSettings),t):a(S.ajaxSettings,e)},ajaxPrefilter:e(J),ajaxTransport:e(W),ajax:function(e,t){function a(e,t,a,r){var n,o,s,i,c,d=t;h||(h=!0,l&&window.clearTimeout(l),f=undefined,p=r||"",w.readyState=0<e?4:0,n=200<=e&&e<300||304===e,a&&(i=q(y,w,a)),i=E(y,i,w,n),n?(y.ifModified&&((c=w.getResponseHeader("Last-Modified"))&&(S.lastModified[u]=c),(c=w.getResponseHeader("etag"))&&(S.etag[u]=c)),204===e||"HEAD"===y.type?d="nocontent":304===e?d="notmodified":(d=i.state,o=i.data,n=!(s=i.error))):(s=d,!e&&d||(d="error",e<0&&(e=0))),w.status=e,w.statusText=(t||d)+"",n?v.resolveWith(m,[o,d,w]):v.rejectWith(m,[w,d,s]),w.statusCode(T),T=undefined,x&&g.trigger(n?"ajaxSuccess":"ajaxError",[w,y,n?o:s]),j.fireWith(m,[w,d]),x&&(g.trigger("ajaxComplete",[w,y]),--S.active||S.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=undefined),t=t||{};var f,u,p,r,l,n,h,x,o,s,y=S.ajaxSetup({},t),m=y.context||y,g=y.context&&(m.nodeType||m.jquery)?S(m):S.event,v=S.Deferred(),j=S.Callbacks("once memory"),T=y.statusCode||{},i={},c={},d="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(h){if(!r)for(r={};t=$.exec(p);)r[t[1].toLowerCase()]=t[2];t=r[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=c[e.toLowerCase()]=c[e.toLowerCase()]||e,i[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)w.always(e[w.status]);else for(t in e)T[t]=[T[t],e[t]];return this},abort:function(e){var t=e||d;return f&&f.abort(t),a(0,t),this}};if(v.promise(w),y.url=((e||y.url||M.href)+"").replace(A,M.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(H)||[""],null==y.crossDomain){n=C.createElement("a");try{n.href=y.url,n.href=n.href,y.crossDomain=G.protocol+"//"+G.host!=n.protocol+"//"+n.host}catch(b){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),D(J,y,t,w),h)return w;for(o in(x=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!k.test(y.type),u=y.url.replace(O,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(F,"+")):(s=y.url.slice(u.length),y.data&&(y.processData||"string"==typeof y.data)&&(u+=(R.test(u)?"&":"?")+y.data,delete y.data),!1===y.cache&&(u=u.replace(N,"$1"),s=(R.test(u)?"&":"?")+"_="+L+++s),y.url=u+s),y.ifModified&&(S.lastModified[u]&&w.setRequestHeader("If-Modified-Since",S.lastModified[u]),S.etag[u]&&w.setRequestHeader("If-None-Match",S.etag[u])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&w.setRequestHeader("Content-Type",y.contentType),w.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+X+"; q=0.01":""):y.accepts["*"]),y.headers)w.setRequestHeader(o,y.headers[o]);if(y.beforeSend&&(!1===y.beforeSend.call(m,w,y)||h))return w.abort();if(d="abort",j.add(y.complete),w.done(y.success),w.fail(y.error),f=D(W,y,t,w)){if(w.readyState=1,x&&g.trigger("ajaxSend",[w,y]),h)return w;y.async&&0<y.timeout&&(l=window.setTimeout(function(){w.abort("timeout")},y.timeout));try{h=!1,f.send(i,a)}catch(b){if(h)throw b;a(-1,b)}}else a(-1,"No Transport");return w},getJSON:function(e,t,a){return S.get(e,t,a,"json")},getScript:function(e,t){return S.get(e,undefined,t,"script")}}),S.each(["get","post"],function(e,n){S[n]=function(e,t,a,r){return s(t)&&(r=r||a,a=t,t=undefined),S.ajax(S.extend({url:e,type:n,dataType:r,data:t,success:a},S.isPlainObject(e)&&e))}}),S});