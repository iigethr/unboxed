define(["./core","./core/access","./var/isWindow","./css"],function(u,f,s){"use strict";return u.each({Height:"height",Width:"width"},function(r,d){u.each({padding:"inner"+r,content:d,"":"outer"+r},function(o,c){u.fn[c]=function(e,n){var t=arguments.length&&(o||"boolean"!=typeof e),i=o||(!0===e||!0===n?"margin":"border");return f(this,function(e,n,t){var o;return s(e)?0===c.indexOf("outer")?e["inner"+r]:e.document.documentElement["client"+r]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+r],o["scroll"+r],e.body["offset"+r],o["offset"+r],o["client"+r])):t===undefined?u.css(e,n,i):u.style(e,n,t,i)},d,t?e:undefined,t)}})}),u});