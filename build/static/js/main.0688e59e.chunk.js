(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c,i,r,a,o,s,h,d,j,l=n(0),f=n.n(l),p=n(25),b=n.n(p),u=(n(37),n(6)),m=n.n(u),v=n(8),g=n(7),O=(n(39),n(4)),x=n(5),w=n(1),y=x.a.div(c||(c=Object(O.a)(["\n  background: transparent;\n  padding: .5em 1em;\n  position: fixed;\n  top: 0;\n  width: 100%;  \n  z-index: 99;\n"]))),k=x.a.img(i||(i=Object(O.a)(["\n  boder-radius: .25em;\n  height: 35px;\n  width: 35px;\n"]))),_=x.a.img(r||(r=Object(O.a)(["\nboder-radius: .25em;\nheight: 25px;\nwidth: 25px;\n"]))),M=x.a.div(a||(a=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),U=function(){return Object(w.jsx)(y,{className:"header",children:Object(w.jsxs)(M,{children:[Object(w.jsx)(k,{src:"media/netflix-big.png"}),Object(w.jsx)(_,{src:"media/color-user.png"})]})})},R=x.a.div(o||(o=Object(O.a)(["\n    height: 450px;\n    object-fit: contain;\n    position: relative;\n    margin-bottom: .5em;\n"]))),N=x.a.img(s||(s=Object(O.a)(["\n    width: 100%;\n    height: 450px;\n    max-height: 450px;\n"]))),S=x.a.div(h||(h=Object(O.a)(["\n    position: absolute;\n    top: 50%;\n    left: 1%;\n    width: 600px;\n    color: white;\n"]))),L=x.a.button(d||(d=Object(O.a)(["\n    padding: .5em 1em;\n    margin: .25em;\n    color: #fff !important;\n    background: rgba(0,0,0,0.4);\n    border: none;\n    border-radius: .25em;\n    outline:none;\n    &:hover{\n        color: #000 !important;\n        background: #fff;\n    }\n"]))),C=x.a.h1(j||(j=Object(O.a)(["\n    color: white;\n"]))),T=function(e){var t=e.random;return Object(w.jsxs)(R,{children:[Object(w.jsx)(N,{src:"https://image.tmdb.org/t/p/original/"+t.poster_path}),Object(w.jsxs)(S,{children:[Object(w.jsx)(C,{children:t.original_title}),Object(w.jsx)("br",{}),Object(w.jsx)(L,{children:"Play"}),Object(w.jsx)(L,{children:"My List"}),Object(w.jsx)("p",{children:t.overview})]})]})},A=n(10),D=n.n(A),E="02684aad9559f0e07b9211530fb7f2c8",H={fetchtrending:"/trending/all/week?api_key=".concat(E,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(E,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(E,"&language=en=US"),fetchActionMovies:"/discover/movie?api_key=".concat(E,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(E,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(E,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(E,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(E,"&with_genres=99")},I=n(29),J=n(32),P=n.n(J),z=(n(81),function(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,i=Object(l.useState)([]),r=Object(g.a)(i,2),a=r[0],o=r[1],s=Object(l.useState)(""),h=Object(g.a)(s,2),d=h[0],j=h[1];Object(l.useEffect)((function(){function e(){return(e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(n);case 2:return t=e.sent,o(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("h2",{children:t}),Object(w.jsx)("div",{className:"row-posters",children:a.map((function(e){return Object(w.jsx)("img",{onClick:function(){return function(e){d?j(""):P()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);j(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row-poster ".concat(c&&"row-posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),d&&Object(w.jsx)(I.a,{videoId:d,opts:{height:"300",width:"100%",playerVars:{autoplay:1}}})]})}),B="https://api.themoviedb.org/3";var V=function(){var e=Object(l.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],i=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(500*Math.random()),e.next=3,D.a.get("".concat(B,"/movie/").concat(t,"?api_key=02684aad9559f0e07b9211530fb7f2c8")).then((function(e){c(e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){i()}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(U,{}),Object(w.jsx)(T,{random:n}),Object(w.jsx)(z,{title:"Netfilx Orginals",fetchUrl:B+H.fetchNetflixOriginals,isLargeRow:!0}),Object(w.jsx)(z,{title:"Trending Now",fetchUrl:B+H.fetchtrending}),Object(w.jsx)(z,{title:"Top Rated",fetchUrl:B+H.fetchTopRated}),Object(w.jsx)(z,{title:"Action Movies",fetchUrl:B+H.fetchActionMovies}),Object(w.jsx)(z,{title:"Comedy Movies",fetchUrl:B+H.fetchComedyMovies}),Object(w.jsx)(z,{title:"Horror Movies",fetchUrl:B+H.fetchHorrorMovies}),Object(w.jsx)(z,{title:"Romantic Movies",fetchUrl:B+H.fetchRomanceMovies}),Object(w.jsx)(z,{title:"Documentaries Movies",fetchUrl:B+H.fetchDocumentaries})]})};b.a.render(Object(w.jsx)(f.a.StrictMode,{children:Object(w.jsx)(V,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.0688e59e.chunk.js.map