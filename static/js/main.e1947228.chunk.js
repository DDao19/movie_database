(this.webpackJsonpmovie_database=this.webpackJsonpmovie_database||[]).push([[0],{15:function(e,t,a){e.exports=a(38)},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),l=(a(20),a(2)),s=a(14),i=a(3),u=a.n(i),m=function(e){var t=e.handleInput,a=e.search;return c.a.createElement("section",{className:"searchbox-wrap"},c.a.createElement("input",{className:"search-box",type:"text",placeholder:"search movie...",onChange:t,onKeyPress:a}))},p=function(e){var t=e.result,a=e.openPopup;return c.a.createElement("div",{className:"result",onClick:function(){return a(t.imdbID)}},c.a.createElement("img",{src:t.Poster,alt:"movie poster"}),c.a.createElement("h3",null,t.Title))},d=function(e){var t=e.results,a=e.openPopup;return c.a.createElement("section",{className:"results"},t.map((function(e){return c.a.createElement(p,{key:e.imdbID,result:e,openPopup:a})})))},v=function(e){var t=e.selected,a=e.closePopup;return c.a.createElement("section",{className:"popup"},c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,t.Title," ",c.a.createElement("span",null,"(",t.Year,")")),c.a.createElement("p",{className:"rating"},"Rating: ",t.imdbRating),c.a.createElement("div",{className:"plot"},c.a.createElement("img",{src:t.Poster,alt:"movie poster"}),c.a.createElement("p",null,t.Plot)),c.a.createElement("button",{className:"close",onClick:a},"Close")))},h=function(){var e=Object(n.useState)({s:"",results:[],selected:{}}),t=Object(s.a)(e,2),a=t[0],r=t[1],o="https://www.omdbapi.com/?apikey=1f82700e";return c.a.createElement("div",{className:"App"},c.a.createElement("video",{playsInline:!0,autoPlay:"autoplay",muted:!0,loop:!0,id:"bg-video"},c.a.createElement("source",{src:"https://aegwebprod.blob.core.windows.net/content/video/multiverse/multiverse.mp4",type:"video/mp4"})),c.a.createElement("header",null,c.a.createElement("h1",null,"Movie Search")),c.a.createElement("main",null,c.a.createElement(m,{handleInput:function(e){var t=e.target.value;r((function(e){return Object(l.a)(Object(l.a)({},e),{},{s:t})}))},search:function(e){"Enter"===e.key&&u.a.get(o+"&s="+a.s).then((function(e){var t=e.data.Search;r((function(e){return Object(l.a)(Object(l.a)({},e),{},{results:t})}))}))}}),c.a.createElement(d,{results:a.results,openPopup:function(e){u.a.get(o+"&i="+e).then((function(e){var t=e.data;r((function(e){return Object(l.a)(Object(l.a)({},e),{},{selected:t})}))}))}}),"undefined"!=typeof a.selected.Title&&c.a.createElement(v,{selected:a.selected,closePopup:function(){r((function(e){return Object(l.a)(Object(l.a)({},e),{},{selected:{}})}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e1947228.chunk.js.map