(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){},29:function(e,a,t){e.exports=t.p+"static/media/refresh.a55a84b7.svg"},49:function(e,a,t){e.exports=t.p+"static/media/x.979a336c.svg"},52:function(e,a,t){e.exports=t.p+"static/media/Cloud.6496866f.png"},54:function(e,a,t){e.exports=t(91)},62:function(e,a,t){},63:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(48),r=t.n(l),o=(t(62),t(63),t(51)),m=t(1),i=t(5),s=t(21),u=t.n(s),d=(t(28),t(35),t(29)),h=t.n(d);function p(){var e=1900+(new Date).getYear();return c.a.createElement("footer",{className:"myFont bold"},c.a.createElement("a",{href:"https://nereidarondon.com/"},c.a.createElement("span",{role:"img","aria-label":"copyright"},"\xa9\ufe0f"),e," Nereida Rondon"))}var E="c32b649490f1417ec2b6d663c05a1a21";function f(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),m=o[0],s=o[1],d=Object(n.useState)(""),f=Object(i.a)(d,2),g=f[0],b=f[1],y="https://www.googleapis.com/geolocation/v1/geolocate?key=".concat("AIzaSyD0saJqBbzLgS4s1RmpJ-Vnw2SjiHnJBK8"),w="https://api.openweathermap.org/data/2.5/weather?lat=".concat(m,"&lon=").concat(g,"&appid=").concat(E,"&units=imperial");function N(e){u.a.get(e).then(function(e){l(e.data)}).catch(function(e){console.log("Error, missing location!")})}function v(){return c.a.createElement("div",null,t.main?c.a.createElement("img",{className:"static-map",src:"https://maps.googleapis.com/maps/api/staticmap?center=".concat(m,",").concat(g,"&zoom=").concat(10,"&size=").concat("500x400","&key=").concat("AIzaSyD0saJqBbzLgS4s1RmpJ-Vnw2SjiHnJBK8"),alt:"map of ".concat(t.name)}):null,t.sys?c.a.createElement("figcaption",null,t.name,", ",t.sys.country):null)}return Object(n.useEffect)(function(){u.a.post(y).then(function(e){console.log(e.data),s(e.data.location.lat),b(e.data.location.lng)})},[]),Object(n.useEffect)(function(){N(w)},[g]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"bg--div"},c.a.createElement("h1",{className:"home-box1 bold"},"Local Weather"),c.a.createElement("div",{className:"home"},c.a.createElement("button",{className:"refresh--btn home-box2",onClick:function(){return N(w)}},c.a.createElement("img",{className:"refresh",src:h.a,width:"40",alt:"refresh button"})),c.a.createElement("div",{className:"home-box3"},t.main?c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"temp bold mb-0"},Math.round(t.main.temp),c.a.createElement("sup",null,"o")),c.a.createElement("h5",null,"Feels like ",c.a.createElement("span",null,Math.round(t.main.feels_like)),c.a.createElement("sup",null,"o"))):null,t.weather?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{className:"mb-0"},t.weather[0].description),c.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:"weather clouds icon"})):null),c.a.createElement("div",{className:"home-box4"}),c.a.createElement("div",{className:"home-box5"},t.main?c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",null,"Low of ",Math.round(t.main.temp_min),c.a.createElement("sup",null,"o")),c.a.createElement("h5",{className:"mb-0"},"High of ",Math.round(t.main.temp_max),c.a.createElement("sup",null,"o"))):null),c.a.createElement("div",{className:"home-box6"},t.main?c.a.createElement("h5",null,"Humidity: ",Math.round(t.main.humidity),"%"):null,t.weather?c.a.createElement("h5",{className:"mb-0"},"Wind: ",Math.round(t.wind.speed)," mph"):null),c.a.createElement("div",{className:"home-map home-box7"},c.a.createElement(v,null)))),c.a.createElement(p,null))}var g=t(22),b=t(31);function y(){var e=Object(n.useRef)(null),a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),s=m[0],u=m[1],d=function(e){"Enter"===e.key&&h()};function h(){r(e.current.value),console.log(e),console.log(l),u(!0)}var p="https://www.google.com/maps/embed/v1/place?key=".concat("AIzaSyD0saJqBbzLgS4s1RmpJ-Vnw2SjiHnJBK8","&q=").concat(l);function E(){return c.a.createElement(g.a,{className:"d-flex"},c.a.createElement(g.a.Control,{ref:e,type:"search",placeholder:"Enter city or location",className:"ms-0 mt-2","aria-label":"Search",onKeyDown:d}),c.a.createElement(b.a,{className:"ms-2 mt-2 myFont bold",gap:1,variant:"dark",onClick:function(){return h()}},"Search"))}function f(){return c.a.createElement("iframe",{className:"interactive--map",title:"interactive map",style:{border:0},loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",src:p})}return c.a.createElement("div",{className:"bg--div"},c.a.createElement("h1",{className:"bold"},"Map"),c.a.createElement(E,null),s&&c.a.createElement(f,null))}var w=t(11),N=t(17),v=t(30),x=t(50),S=t(49),j=t.n(S);function O(e){var a=e.location,t=Object(n.useState)([]),l=Object(i.a)(t,2),r=l[0],o=l[1],m="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(E,"&units=imperial");function s(){console.log(r);var e=r.map(function(e){return c.a.createElement(d,{key:e.id,city:e})});return c.a.createElement(x.a,{xs:"auto",md:"auto",lg:"auto",className:"m-auto g-4 text-center center--items"},e)}function d(e){return c.a.createElement(v.a,null,c.a.createElement(N.a,{id:e.city.id,className:"mt-1 mb-1 my--card",text:"light",border:"light",style:{width:"16rem"}},c.a.createElement(N.a.Body,null,c.a.createElement(N.a.Title,{className:"bold m-auto spreadout",as:"h1"},c.a.createElement("button",{className:"icon",onClick:function(){return a=e.city.id,document.getElementById(a).remove(),o(function(e){return e.filter(function(e){return e.id!==a})}),void console.log("city deleted");var a}},c.a.createElement("img",{className:"icon--x",src:j.a,alt:"delete {cityprops.city.name} weather tile"})),c.a.createElement("button",{className:"icon",onClick:function(){return function(e,a){console.log("refresh weather data for ".concat(a,"..."));var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(E,"&units=imperial");return u.a.get(t).then(function(a){console.log(a.data),o(function(t){return t.map(function(t){return t.id===e?a.data:t})})}).catch(function(e){console.log(e),console.log("Error, can't get ".concat(a,"'s weather!"))}),r}(e.city.id,e.city.name)}},c.a.createElement("img",{className:"icon--update",src:h.a,alt:"update {cityprops.city.name} weather"}))),c.a.createElement(N.a.Title,{className:"bold m-auto spreadout",as:"h2"},e.city.name),e.city.main?c.a.createElement(N.a.Subtitle,{className:"bold text-center",as:"h1"},Math.round(e.city.main.temp),c.a.createElement("sup",null,"o")):null,c.a.createElement(N.a.Text,{as:"div"},e.city.weather?c.a.createElement("h3",{className:"text-center mb-0"},e.city.weather[0].description):null,e.city.weather?c.a.createElement("img",{className:"weather--icon m-auto",src:"https://openweathermap.org/img/wn/".concat(e.city.weather[0].icon,"@2x.png"),alt:"weather clouds icon"}):null,e.city.main?c.a.createElement("p",{className:"text-center mb-0"},"Humidity: ",Math.round(e.city.main.humidity),"%"):null,e.city.weather?c.a.createElement("p",{className:"text-center mb-0"},"Wind: ",Math.round(e.city.wind.speed)," mph"):null))))}return Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("items"));console.log(e),""===e?console.log("no cities"):(console.log("saving cities from local storage"),o(e))},[]),Object(n.useEffect)(function(){console.log("added to local storage"),localStorage.setItem("items",JSON.stringify(r))},[r]),Object(n.useEffect)(function(){""===a?console.log("no location"):u.a.get(m).then(function(e){console.log("weather response data",e.data),o([].concat(Object(w.a)(r),[e.data]))}).catch(function(e){console.log("Error, can't get ".concat(a,"'s weather!"))})},[e]),c.a.createElement(s,null)}var k=t(33);function J(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],r=Object(n.useRef)(null);Object(n.useEffect)(function(){r.current.focus()},[]);var o=function(e){console.log("User pressed: ",e.key),"Enter"===e.key&&(console.log("Enter key pressed \u2705"),m())};function m(){l(r.current.value),console.log(t),console.log("searching...")}function s(){return c.a.createElement(g.a,{className:"d-flex"},c.a.createElement(g.a.Control,{type:"search",ref:r,placeholder:"Enter city",className:"ms-0 mt-2","aria-label":"Search",onKeyDown:o}),c.a.createElement(b.a,{className:"ms-2 mt-2 myFont bold",gap:1,variant:"outline-dark",onClick:function(){return m()}},"Search"))}return c.a.createElement("div",null,c.a.createElement("h1",{className:"bold dashboard-title"},"Weather Dashboard"),c.a.createElement(s,null),c.a.createElement(k.a,{className:"mb-3",fluid:!0},c.a.createElement(O,{location:t})))}function F(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",element:c.a.createElement(f,null)}),c.a.createElement(m.a,{path:"/weatherdashboard",element:c.a.createElement(J,null)}),c.a.createElement(m.a,{path:"/map",element:c.a.createElement(y,null)}))))}var M=t(14),I=t(52),z=t.n(I);function B(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(M.a,{as:"h4",className:"mt-0 pt-5",variant:"tabs",defaultActiveKey:"/home"},c.a.createElement(M.a.Item,{className:""},c.a.createElement(M.a.Link,{href:"https://nereidarondon.github.io/Weather/"},"Home")),c.a.createElement(M.a.Item,null,c.a.createElement(M.a.Link,{href:"https://nereidarondon.github.io/Weather/weatherdashboard"},"Dashboard")),c.a.createElement(M.a.Item,null,c.a.createElement(M.a.Link,{href:"https://nereidarondon.github.io/Weather/map"},"Map")),c.a.createElement("img",{className:"cloud",src:z.a,alt:"sun and cloud icon"})))}function C(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(B,null),c.a.createElement(k.a,{fluid:!0,as:"div",className:"mt-4 m-auto landing"},c.a.createElement(F,null)))}r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)))}},[[54,1,2]]]);
//# sourceMappingURL=main.8a0ae2a8.chunk.js.map