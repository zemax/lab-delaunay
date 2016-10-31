!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){(0,a.size)();s.default.clear(),E.forEach(function(e){var t=e.triangle,n=e.color,r="hsl("+(g+n.hue)+","+n.saturation+"%,"+n.luminance+"%)";s.default.draw(t,r)})}function o(){g=Math.floor(360*Math.random()),I(),i()}function u(){g-=1,i(),window.requestAnimationFrame(u)}var a=n(2),c=n(3),d=r(c),l=n(4),s=r(l),h=n(5),f=n(6),v=50,m=.06,w=.03,p=15,g=void 0,y=[],E=[],x=document.createElement("div");x.className="ui",x.innerHTML=' \n    <button class="fullscreen">Fullscreen</button>\n';var M=function(e,t){return{x:e,y:t}},I=function(){var e=(0,a.size)(),t=Math.floor(e.width*e.height/(v*v));y=[M(0,0),M(e.width>>1,0),M(e.width,0),M(e.width,e.height>>1),M(e.width,e.height),M(e.width>>1,e.height),M(0,e.height>>1),M(0,e.height)];for(var n=0;n<t;n++)y.push(M(Math.round((e.width+2*v)*Math.random()-v),Math.round((e.height+2*v)*Math.random()-v)));var r=f.triangulate(y.map(function(e){return[e.x,e.y]}));E=[];for(var i=0,o=r.length;i<o;i+=3){var u=r.slice(i,i+3).map(function(e){return y[e]}),c=u.reduce(function(e,t){return{x:e.x+t.x/3,y:e.y+t.y/3}},{x:0,y:0}),d=Math.round(w*c.x+m*c.y),l=100,s=Math.round(50+p*(2*Math.random()-1));E.push({triangle:u,color:{hue:d,saturation:l,luminance:s}})}};h(function(){document.body.appendChild(x),x.querySelector(".fullscreen").addEventListener("click",function(){(0,d.default)(s.default.canvas)}),window.addEventListener("resize",o,!1),s.default.canvas.addEventListener("click",o,!1),o(),u()})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.size=function(){return{width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},function(e,t,n){"use strict";function r(){c.clearRect(0,0,a.width,a.height)}function i(e,t){c.fillStyle=t,c.beginPath(),c.moveTo(e[0].x*d,e[0].y*d),c.lineTo(e[1].x*d,e[1].y*d),c.lineTo(e[2].x*d,e[2].y*d),c.lineTo(e[0].x*d,e[0].y*d),c.closePath(),c.fill()}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),u=n(5),a=document.createElement("canvas"),c=a.getContext("2d"),d=window.devicePixelRatio||1,l=function(){var e=(0,o.size)();a&&(a.style.with=e.width+"px",a.style.height=e.height+"px",a.width=e.width*d,a.height=e.height*d)};window.addEventListener("resize",l,!1),u(function(){l(),document.body.appendChild(a)});var s={canvas:a,clear:r,draw:i};t.default=s},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";function e(){if(document.addEventListener||"load"===event.type||"complete"===document.readyState){document.addEventListener?(document.removeEventListener("DOMContentLoaded",e,!1),window.removeEventListener("load",e,!1)):(document.detachEvent("onreadystatechange",e),window.detachEvent("onload",e));for(var t;t=r.shift();)setTimeout(t,0);n=!0}}function t(t){if("function"==typeof t){if(n||"complete"===document.readyState)return void setTimeout(t,0);r.length<=0&&(document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):(document.attachEvent("onreadystatechange",e),window.attachEvent("onload",e))),r.push(t)}}var n=!1,r=[];return t})},function(e,t,n){var r;!function(){"use strict";function t(e){var t,n,r,i,o,u,a=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;for(t=e.length;t--;)e[t][0]<a&&(a=e[t][0]),e[t][0]>d&&(d=e[t][0]),e[t][1]<c&&(c=e[t][1]),e[t][1]>l&&(l=e[t][1]);return n=d-a,r=l-c,i=Math.max(n,r),o=a+.5*n,u=c+.5*r,[[o-20*i,u-i],[o,u+20*i],[o+20*i,u-i]]}function n(e,t,n,r){var i,u,a,c,d,l,s,h,f,v,m=e[t][0],w=e[t][1],p=e[n][0],g=e[n][1],y=e[r][0],E=e[r][1],x=Math.abs(w-g),M=Math.abs(g-E);if(x<o&&M<o)throw new Error("Eek! Coincident points!");return x<o?(c=-((y-p)/(E-g)),l=(p+y)/2,h=(g+E)/2,i=(p+m)/2,u=c*(i-l)+h):M<o?(a=-((p-m)/(g-w)),d=(m+p)/2,s=(w+g)/2,i=(y+p)/2,u=a*(i-d)+s):(a=-((p-m)/(g-w)),c=-((y-p)/(E-g)),d=(m+p)/2,l=(p+y)/2,s=(w+g)/2,h=(g+E)/2,i=(a*d-c*l+h-s)/(a-c),u=x>M?a*(i-d)+s:c*(i-l)+h),f=p-i,v=g-u,{i:t,j:n,k:r,x:i,y:u,r:f*f+v*v}}function i(e){var t,n,r,i,o,u;for(n=e.length;n;)for(i=e[--n],r=e[--n],t=n;t;)if(u=e[--t],o=e[--t],r===o&&i===u||r===u&&i===o){e.splice(n,2),e.splice(t,2);break}}var o=1/1048576;r={triangulate:function(e,r){var u,a,c,d,l,s,h,f,v,m,w,p,g=e.length;if(g<3)return[];if(e=e.slice(0),r)for(u=g;u--;)e[u]=e[u][r];for(c=new Array(g),u=g;u--;)c[u]=u;for(c.sort(function(t,n){return e[n][0]-e[t][0]}),d=t(e),e.push(d[0],d[1],d[2]),l=[n(e,g+0,g+1,g+2)],s=[],h=[],u=c.length;u--;h.length=0){for(p=c[u],a=l.length;a--;)f=e[p][0]-l[a].x,f>0&&f*f>l[a].r?(s.push(l[a]),l.splice(a,1)):(v=e[p][1]-l[a].y,f*f+v*v-l[a].r>o||(h.push(l[a].i,l[a].j,l[a].j,l[a].k,l[a].k,l[a].i),l.splice(a,1)));for(i(h),a=h.length;a;)w=h[--a],m=h[--a],l.push(n(e,m,w,p))}for(u=l.length;u--;)s.push(l[u]);for(l.length=0,u=s.length;u--;)s[u].i<g&&s[u].j<g&&s[u].k<g&&l.push(s[u].i,s[u].j,s[u].k);return l},contains:function(e,t){if(t[0]<e[0][0]&&t[0]<e[1][0]&&t[0]<e[2][0]||t[0]>e[0][0]&&t[0]>e[1][0]&&t[0]>e[2][0]||t[1]<e[0][1]&&t[1]<e[1][1]&&t[1]<e[2][1]||t[1]>e[0][1]&&t[1]>e[1][1]&&t[1]>e[2][1])return null;var n=e[1][0]-e[0][0],r=e[2][0]-e[0][0],i=e[1][1]-e[0][1],o=e[2][1]-e[0][1],u=n*o-r*i;if(0===u)return null;var a=(o*(t[0]-e[0][0])-r*(t[1]-e[0][1]))/u,c=(n*(t[1]-e[0][1])-i*(t[0]-e[0][0]))/u;return a<0||c<0||a+c>1?null:[a,c]}},e.exports=r}()}]);