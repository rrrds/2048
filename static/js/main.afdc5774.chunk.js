(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,n,r){e.exports=r(15)},,,,,,function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),i=r(3),o=r.n(i),u=(r(10),r(1));r(11),r(12),r(13);var c=function(e){var n=e.value,r="cell ".concat(n?"":"cell--transparent");return a.a.createElement("div",{className:r},n||"")};var f=function(e){var n=e.data,r=n.map(function(e){return e.map(function(e){return a.a.createElement(c,{value:e})})}),t=n.map(function(e){return e.map(function(e){return a.a.createElement("div",{className:"cell cell--empty"})})});return a.a.createElement("div",{className:"field-base"},a.a.createElement("div",{className:"field"},t),a.a.createElement("div",{className:"field field--transparent"},r))};r(14);var l=function(e){var n=e.value;return a.a.createElement("div",{className:"score"},"Score: ",n)};var m=function(e){var n=e.dispatch;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Game Over!"),a.a.createElement("button",{onClick:function(){n({type:"new"})}},"Restart"))},s=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"];function v(){return function(e){for(var n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),t=[e[r],e[n]];e[n]=t[0],e[r]=t[1]}return e}([2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0]).reduce(function(e,n,r){return e[r%4].push(n),e},[[],[],[],[]])}function d(e,n){var r=function(e,n){switch(n){case"ArrowUp":return function(e){var n=E(h(e));return{matrix:p(n.matrix),sum:n.sum}}(e);case"ArrowRight":return function(e){var n=E(h(h(e)));return{matrix:p(p(n.matrix)),sum:n.sum}}(e);case"ArrowDown":return function(e){var n=E(p(e));return{matrix:h(n.matrix),sum:n.sum}}(e);case"ArrowLeft":return E(e);default:return{matrix:e,sum:0}}}(e,n);return JSON.stringify(e)!==JSON.stringify(r.matrix)&&(r.matrix=function(e){var n=e.flat(),r=n.filter(function(e){return 0===e}).length;if(0===r)return e;var t=Math.floor(Math.random()*Math.floor(r)),a=function(e,n){if(0===n)return e.indexOf(0);var r=0,t=0;for(;r!==n;)t=e.indexOf(0,t+1),r++;return t}(n,t);return e[Math.floor(a/4)][a%4]=2,e}(r.matrix)),r.canMove=function(e){if(function(e){return e.flat().filter(function(e){return 0===e}).length>0}(e))return!0;for(var n=0;n<e.length;n++)for(var r=0;r<e[0].length;r++){var t=e[n][r];if(n>0&&e[n-1][r]===t||r<3&&e[n][r+1]===t||n<3&&e[n+1][r]===t||r>0&&e[n][r-1]===t)return!0}return!1}(r.matrix),r}function w(e){return e[0].map(function(n,r){return e.map(function(e){return e[r]})})}function p(e){return w(e.reverse())}function h(e){return w(e).reverse()}function E(e){var n=0;return{matrix:e.map(function(e){var r=[0,0,0,0],t=0;return e.map(function(e,a){0!==e&&(0===r[t]?r[t]+=e:r[t]===e?(r[t]+=e,t++,n+=2*e):r[++t]=e)}),r}),sum:n}}var g={field:v(),score:0,gameOver:!1};var x=function(){var e=Object(t.useReducer)(function(e,n){switch(n.type){case"move":var r=d(e.field,n.direction);return{field:r.matrix,score:e.score+r.sum,gameOver:!r.canMove};case"new":return{field:v(),score:0,gameOver:!1};default:return e}},g),n=Object(u.a)(e,2),r=n[0],i=n[1],o=function(){var e=Object(t.useState)(!1),n=Object(u.a)(e,2),r=n[0],a=n[1],i=function(e){var n=e.key;s.indexOf(n)>=0&&a(n)},o=function(e){var n=e.key;s.indexOf(n)>=0&&a(!1)};return Object(t.useEffect)(function(){return window.addEventListener("keydown",i),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",i),window.removeEventListener("keyup",o)}},[]),r}();return Object(t.useEffect)(function(){o&&i({type:"move",direction:o})},[o]),a.a.createElement("div",{className:"main"},r.gameOver&&a.a.createElement(m,{dispatch:i}),a.a.createElement(l,{value:r.score}),a.a.createElement(f,{data:r.field}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.afdc5774.chunk.js.map