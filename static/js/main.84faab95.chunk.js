(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),c=a(3),s=a(1),o=(a(14),a(8)),d=a.n(o),l=a(0),u=function(e){var t=e.user;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=function(e){var t=e.todo,a=m.find((function(e){return e.id===+t.userId}));return a?Object(l.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(l.jsx)(u,{user:a})]}):null},b=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(j,{todo:e},e.id)}))})},h=a(2),f=(a(16),{id:0,title:"",completed:!1,userId:0}),O=function(e){var t=e.users,a=e.onAdd,n=e.maxId,i=Object(s.useState)(!1),r=Object(c.a)(i,2),o=r[0],d=r[1],u=Object(s.useState)(!1),m=Object(c.a)(u,2),j=m[0],b=m[1],O=Object(s.useState)(f),p=Object(c.a)(O,2),x=p[0],v=p[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.title.trim()&&x.userId?(a(Object(h.a)(Object(h.a)({},x),{},{id:n+1})),v(f),d(!1),b(!1)):function(e){var t=""!==e.title.trim(),a=0!==e.userId;d(!t),b(!a)}(x)},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("input",{type:"text","data-cy":"titleInput",className:"input",placeholder:"Type a title of todo",value:x.title,onChange:function(e){return function(e){var t=Object(h.a)(Object(h.a)({},x),{},{title:e});v(t),d(!1)}(e.target.value)}}),o&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("select",{"data-cy":"userSelect",value:x.userId,onChange:function(e){return function(e){var t=Object(h.a)(Object(h.a)({},x),{},{userId:e});v(t),b(!1)}(+e.target.value)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),t.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),j&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]},n)},p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],x=function(){var e=Object(s.useState)(p),t=Object(c.a)(e,2),a=t[0],n=t[1],i=a.reduce((function(e,t){return t.id>e?t.id:e}),0);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsx)(O,{users:m,onAdd:function(e){n([].concat(Object(r.a)(a),[e]))},maxId:i}),Object(l.jsx)(b,{todos:a})]})};i.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.84faab95.chunk.js.map