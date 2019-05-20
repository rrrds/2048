(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(5),o=n.n(u),i=(n(13),n(1)),c=(n(14),n(15),n(6)),f=n(3),l=(n(16),40);var v=function(e){var t=e.value,n=e.x,u=e.y,o="cell ".concat(t?"":"cell--transparent"),v=Object(f.b)(function(){return{top:n*l,left:u*l,from:{xys:[0,0,0]},to:{xys:[0,0,1]}}}),s=Object(i.a)(v,3),m=s[0],d=s[1],w=s[2];return Object(r.useEffect)(function(){w(),d({top:n*l,left:u*l})},[n,u]),a.a.createElement(f.a.div,{className:o,style:Object(c.a)({},m,{transform:m.xys.interpolate(function(e,t,n){return"scale(".concat(n,")")})})},t||"")};function s(e){return e.map(function(e,t){return e.map(function(e,n){return Object.assign(e,{x:t,y:n})})}).flat().filter(function(e){return 0!==e.value})}var m=function(e){var t=e.data,n=Object(r.useState)(s(t)),u=Object(i.a)(n,2),o=u[0],c=u[1];Object(r.useEffect)(function(){c(s(t))},[t]);var f=o.map(function(e){return a.a.createElement(v,{value:e.value,x:e.x,y:e.y,key:e.id})});return a.a.createElement("div",{className:"field-base"},a.a.createElement("div",{className:"field"},f))};n(17);var d=function(e){var t=e.value;return a.a.createElement("div",{className:"score"},"Score: ",t)};var w=function(e){var t=e.dispatch;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Game Over!"),a.a.createElement("button",{onClick:function(){t({type:"new"})}},"Restart"))},p=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"];function h(e){return e[0].map(function(t,n){return e.map(function(e){return e[n]})})}function x(e){return h(e.slice(0).reverse())}function O(e){return h(e.slice(0)).reverse()}function g(){return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}([2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0]).reduce(function(e,t,n){return e[n%4].push(b(t)),e},[[],[],[],[]])}function y(e,t){var n=function(e,t){switch(t){case"ArrowUp":return function(e){var t=E(O(e));return{matrix:x(t.matrix),sum:t.sum}}(e);case"ArrowRight":return function(e){var t=E(O(O(e)));return{matrix:x(x(t.matrix)),sum:t.sum}}(e);case"ArrowDown":return function(e){var t=E(x(e));return{matrix:O(t.matrix),sum:t.sum}}(e);case"ArrowLeft":return E(e);default:return{matrix:e,sum:0}}}(e,t);return JSON.stringify(e)!==JSON.stringify(n.matrix)&&(n.matrix=function(e){var t=e.flat(),n=t.filter(function(e){return 0===e.value}).length;if(0===n)return e;var r=Math.floor(Math.random()*Math.floor(n)),a=function(e,t){if(0===t)return e.findIndex(function(e){return 0===e.value});var n=e.filter(function(e){return 0===e.value})[t];return e.findIndex(function(e){return e.id===n.id})}(t,r);return e[Math.floor(a/4)][a%4]=b(2),e}(n.matrix)),n.canMove=function(e){if(function(e){return e.flat().filter(function(e){return 0===e.value}).length>0}(e))return!0;for(var t=0;t<e.length;t++)for(var n=0;n<e[0].length;n++){var r=e[t][n];if(t>0&&e[t-1][n].value===r.value||n<3&&e[t][n+1].value===r.value||t<3&&e[t+1][n].value===r.value||n>0&&e[t][n-1].value===r.value)return!0}return!1}(n.matrix),n}function E(e){var t=0;return{matrix:e.map(function(e){var n=[{value:0},{value:0},{value:0},{value:0}],r=0;return e.map(function(e,a){0!==e.value&&(0===n[r].value?n[r]=e:n[r].value===e.value?(e.value=2*e.value,n[r]=e,r++,t+=2*e.value):n[++r]=e)}),n}),sum:t}}function b(){return{value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,id:(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase()}}var j={field:g(),score:0,gameOver:!1};var k=function(){var e=Object(r.useReducer)(function(e,t){switch(t.type){case"move":var n=y(e.field,t.direction);return{field:n.matrix,score:e.score+n.sum,gameOver:!n.canMove};case"new":return{field:g(),score:0,gameOver:!1};default:return e}},j),t=Object(i.a)(e,2),n=t[0],u=t[1],o=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],u=function(e){var t=e.key;p.indexOf(t)>=0&&a(t)},o=function(e){var t=e.key;p.indexOf(t)>=0&&a(!1)};return Object(r.useEffect)(function(){return window.addEventListener("keydown",u),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",u),window.removeEventListener("keyup",o)}},[]),n}();return Object(r.useEffect)(function(){o&&u({type:"move",direction:o})},[o]),a.a.createElement("div",{className:"main"},n.gameOver&&a.a.createElement(w,{dispatch:u}),a.a.createElement(d,{value:n.score}),a.a.createElement(m,{data:n.field}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.4854e940.chunk.js.map