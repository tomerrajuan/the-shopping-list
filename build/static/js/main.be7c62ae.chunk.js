(this["webpackJsonpthe-shopping-list"]=this["webpackJsonpthe-shopping-list"]||[]).push([[0],{20:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n(0),r=n.n(c),a=n(7),o=n.n(a),s=(n(20),n(13)),u=n(3),l=n(5),d=n.n(l),j=n(12),f=n(4),b=Object(f.b)({name:"items",initialState:[],reducers:{addTodo:function(t,e){t.push(e.payload)},deleteTodo:function(t,e){t.splice(t.findIndex((function(t){return t.id===e.payload.id})),1)},toggleTodo:function(t,e){var n=t.find((function(t){return t.id===e.payload.id}));n&&(n.completed=!n.completed)}}}),p=(b.actions.toggleTodo,function(t){return function(){var e=Object(j.a)(d.a.mark((function e(n){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={id:Math.random().toString(36).substr(2,9),completed:!1,text:t},n(b.actions.addTodo(i));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),h=b.reducer;function m(t){var e=t.id,n=Object(u.b)();function c(t){console.log("id is: ",t),n(function(t){return function(){var e=Object(j.a)(d.a.mark((function e(n){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={id:t,text:"text",completed:!1},n(b.actions.deleteTodo(i));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t))}return Object(i.jsx)("button",{className:"delete__button",onClick:function(){return c(e)},children:"Remove"})}function O(t){t.completed;var e=t.text,n=t.id;return Object(i.jsxs)("li",{className:"items-list__item",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"checkbox"}),Object(i.jsxs)("p",{children:[" ",e]})]}),Object(i.jsx)(m,{id:n})]})}function x(){var t=Object(u.c)((function(t){return t.items}));return Object(i.jsx)("div",{className:"list__item",id:"style-1",children:Object(i.jsx)("ul",{className:"items-list",children:t.map((function(t){return Object(i.jsx)(O,Object(s.a)(Object(s.a)({},t),{},{id:t.id}),t.id)}))})})}var g=n(6);function v(){var t=Object(u.b)(),e=r.a.useState(""),n=Object(g.a)(e,2),a=n[0],o=n[1],s=r.a.useState([]),l=Object(g.a)(s,2),d=l[0],j=l[1],f=r.a.useState([]),b=Object(g.a)(f,2),h=b[0],m=b[1],O=r.a.useState(!1),x=Object(g.a)(O,2),v=x[0],S=x[1],y=Object(c.useRef)(null);return Object(c.useEffect)((function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return console.log(t),t.json()})).then((function(t){j(t)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("form",{className:"form-group ",onSubmit:function(e){e.preventDefault(),a?p(a):alert("plaese enter item to list"),a.trim()&&(t(p(a)),o(""))},children:[Object(i.jsx)("input",{className:"form-field",id:"search",ref:function(t){return t&&t.focus()},value:a,onChange:function(t){""!==t.target.value?function(t){console.log("data is: ",d);var e=d.filter((function(e){var n=new RegExp("^".concat(t),"gi");return e.name.match(n)}));0===d.length&&(e=[],o("")),m(e),S(!0)}(t.target.value):S(!1),o(t.target.value)},placeholder:"add something to the list..",autoComplete:"off",name:"myInput",autoFocus:!0,maxLength:20}),Object(i.jsx)("button",{type:"submit",children:"Add"})]}),v&&Object(i.jsx)("ul",{className:"list-group list-group-flush match-list",ref:y,id:"style-1",children:h.map((function(t,e){return Object(i.jsxs)("li",{className:"match-list__item ",onClick:function(){return function(t){o(t),S(!1)}(t.name)},children:[Object(i.jsx)("img",{src:"cart-outline.svg",alt:"",height:"15px"}),t.name]},e)}))})]})}var S,y=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)("h1",{children:"Shopping List"}),Object(i.jsx)(v,{}),Object(i.jsx)(x,{})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))},C=n(2);!function(t){t.ShowAll="SHOW_ALL",t.ShowCompleted="SHOW_COMPLETED",t.ShowActive="SHOW_ACTIVE"}(S||(S={}));var T=S.ShowAll,_=Object(f.b)({name:"visibilityFilter",initialState:T,reducers:{setVisibilityFilter:function(t,e){return e.payload}}}),F=(_.actions.setVisibilityFilter,_.reducer),N=Object(C.c)({items:h,visibilityFilter:F});var k=Object(f.a)({reducer:N});o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(u.a,{store:k,children:Object(i.jsx)(y,{})})}),document.getElementById("root")),w()}},[[28,1,2]]]);
//# sourceMappingURL=main.be7c62ae.chunk.js.map