(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={recipe:"Recipe_recipe__cJhBG",image:"Recipe_image__1Us0k"}},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(5),i=a.n(r),s=(a(12),a(2)),l=a.n(s),p=a(6),o=a(1),u=(a(14),a(3)),m=a.n(u),f=function(e){var t=e.title,a=e.calories,c=e.image,r=e.ingredients;return n.a.createElement("div",{className:m.a.recipe},n.a.createElement("h1",null,t),n.a.createElement("ol",null,r.map((function(e){return n.a.createElement("li",null,e.text)}))),n.a.createElement("p",null,a),n.a.createElement("img",{className:m.a.image,src:c,alt:"whatever"}))},h=function(){var e="4cd3b38a1da68d9ac7a3fe8628561b68",t=("https://api.edamam.com/search?q=chicken&app_id=".concat("45c9f5b9","&app_key=").concat(e),Object(c.useState)([])),a=Object(o.a)(t,2),r=a[0],i=a[1],s=Object(c.useState)(""),u=Object(o.a)(s,2),m=u[0],h=u[1],b=Object(c.useState)("chicken"),d=Object(o.a)(b,2),E=d[0],v=d[1];Object(c.useEffect)((function(){g()}),[E]);var g=function(){var t=Object(p.a)(l.a.mark((function t(){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("45c9f5b9","&app_key=").concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:c=t.sent,i(c.hits);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"header"},"Find Recipe"),n.a.createElement("p",{className:"header1"},'On search bar below, input a  type of food then click "Search" button'),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(m),h("")},className:"search-form"},n.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){h(e.target.value)}}),n.a.createElement("button",{className:"search-button",type:"submit"},"Search")),n.a.createElement("div",{className:"recipes"},r.map((function(e){return n.a.createElement(f,{key:Math.floor(2e3*Math.random()),title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.f8952dc3.chunk.js.map