(this.webpackJsonptest_table=this.webpackJsonptest_table||[]).push([[0],{37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(12),r=a.n(n),s=(a(37),a(32)),i=a(25),l=a.n(i),j=a(28),d=a(8),o=a(29),b=a(1),u=function(){return Object(b.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(b.jsx)("strong",{children:"Loading... please wait"}),Object(b.jsx)(o.a,{animation:"border",variant:"primary"})]})},h=a(11),x=a(13),O=function(e){var t=e.handleToggleSizeData;return Object(b.jsxs)("div",{className:"d-flex justify-content-end p-3",children:[Object(b.jsx)(x.a,{onClick:function(){return t("big")},variant:"outline-primary",children:"\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 (1000 \u0441\u0442\u0440\u043e\u043a)"}),Object(b.jsx)(x.a,{onClick:function(){return t("small")},className:"ml-2",variant:"outline-primary",children:"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 (32 \u0441\u0442\u0440\u043e\u043a\u0438)"})]})},m=a(31),f=a(27),p=function(e){var t=e.direction;return Object(b.jsx)(b.Fragment,{children:"asc"===t?Object(b.jsx)(f.b,{}):"desc"===t?Object(b.jsx)(f.a,{}):null})},g=a(10),N=a(17),v=function(e){var t=e.addContactData,a=Object(c.useState)(!1),n=Object(d.a)(a,2),r=n[0],s=n[1],i=function(){return s(!1)},l=Object(c.useState)(""),j=Object(d.a)(l,2),o=j[0],u=j[1],h=Object(c.useState)(""),O=Object(d.a)(h,2),m=O[0],f=O[1],p=Object(c.useState)(""),v=Object(d.a)(p,2),C=v[0],S=v[1],B=Object(c.useState)(""),y=Object(d.a)(B,2),D=y[0],k=y[1],P=Object(c.useState)(""),w=Object(d.a)(P,2),T=w[0],I=w[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x.a,{variant:"primary",onClick:function(){return s(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(b.jsxs)(N.a,{show:r,onHide:i,children:[Object(b.jsx)(N.a.Header,{closeButton:!0,children:Object(b.jsx)(N.a.Title,{children:"Add user"})}),Object(b.jsx)(N.a.Body,{children:Object(b.jsxs)(g.a,{onChange:function(e){var t=e.target.value;switch(e.target.id){case"formBasicId":return u(t);case"formBasicFirstName":return f(t);case"formBasicLastName":return S(t);case"formBasicEmail":return k(t);case"formBasicPhone":return I(t)}},onSubmit:function(e){e.preventDefault(),t({id:o,firstName:m,lastName:C,email:D,phone:T,address:{streetAddress:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d",city:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d",state:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430",zip:"\u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"},description:"et lacus magna dolor..."}),i()},children:[Object(b.jsxs)(g.a.Group,{controlId:"formBasicId",children:[Object(b.jsx)(g.a.Label,{children:"Id"}),Object(b.jsx)(g.a.Control,{type:"number",placeholder:"Enter id here"})]}),Object(b.jsxs)(g.a.Group,{controlId:"formBasicFirstName",children:[Object(b.jsx)(g.a.Label,{children:"FirstName"}),Object(b.jsx)(g.a.Control,{type:"text",placeholder:"Enter FirstName here"})]}),Object(b.jsxs)(g.a.Group,{controlId:"formBasicLastName",children:[Object(b.jsx)(g.a.Label,{children:"LastName"}),Object(b.jsx)(g.a.Control,{type:"text",placeholder:"Enter LastName here"})]}),Object(b.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(b.jsx)(g.a.Label,{children:"Email"}),Object(b.jsx)(g.a.Control,{type:"email",placeholder:"Enter email here"})]}),Object(b.jsxs)(g.a.Group,{controlId:"formBasicPhone",children:[Object(b.jsx)(g.a.Label,{children:"Phone"}),Object(b.jsx)(g.a.Control,{type:"text",placeholder:"Enter phone here"})]}),o&&m&&C&&D&&T&&Object(b.jsx)(x.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})]})},C=function(e){var t=e.direction,a=e.sortTable,c=e.data,n=e.targetValue,r=e.setAddContact,s=e.addContactData,i=e.getTableRowId;return Object(b.jsxs)(h.a,{fluid:"xl",children:[Object(b.jsx)("div",{className:"d-flex justify-content-end",children:Object(b.jsx)(v,{setAddContact:r,addContactData:s})}),Object(b.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{id:"id",onClick:function(e){return a("id")},children:["id","id"===n?Object(b.jsx)(p,{direction:t}):null]}),Object(b.jsxs)("th",{id:"firstName",onClick:function(e){return a("firstName")},children:["First Name","firstName"===n?Object(b.jsx)(p,{direction:t}):null]}),Object(b.jsxs)("th",{id:"lastName",onClick:function(e){return a("lastName")},children:["Last Name","lastName"===n?Object(b.jsx)(p,{direction:t}):null]}),Object(b.jsxs)("th",{id:"email",onClick:function(e){return a("email")},children:["Email","email"===n?Object(b.jsx)(p,{direction:t}):null]}),Object(b.jsxs)("th",{id:"phone",onClick:function(e){return a("phone")},children:["Phone","phone"===n?Object(b.jsx)(p,{direction:t}):null]})]})}),Object(b.jsx)("tbody",{children:c.map((function(e){return Object(b.jsxs)("tr",{id:e.id,onClick:function(){return i(e)},children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.firstName}),Object(b.jsx)("td",{children:e.lastName}),Object(b.jsx)("td",{children:e.email}),Object(b.jsx)("td",{children:e.phone})]},e.id)}))})]})]})},S=a(26),B=a(19),y=function(e){var t=e.handlerSearchInput,a=Object(c.useState)(""),n=Object(d.a)(a,2),r=n[0],s=n[1];return Object(b.jsx)(h.a,{fluid:"xl",children:Object(b.jsxs)(S.a,{className:"mb-3",children:[Object(b.jsx)(B.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a...","aria-label":"Search by","aria-describedby":"basic-addon2",onChange:function(e){var t;t=e.target.value,s(t)},value:r}),Object(b.jsx)(S.a.Append,{children:Object(b.jsx)(x.a,{variant:"outline-secondary",onClick:function(){t(r)},children:"\u041d\u0430\u0439\u0442\u0438"})})]})})},D=function(e){var t=e.pages,a=e.handleClickPage,c=e.handlePaginationPages,n=e.currentPage;return Object(b.jsx)(h.a,{className:"d-flex justify-content-center",fluid:"xl",children:Object(b.jsx)("nav",{"aria-label":"Page navigation",onClick:c,children:Object(b.jsxs)("ul",{className:"pagination",children:[Object(b.jsx)("li",{className:1===n?"page-item disabled":"page-item",children:Object(b.jsx)("a",{className:"page-link",href:"#section",children:"Previous"})}),t.map((function(e){return Object(b.jsx)("li",{className:n===e?"page-item active":"page-item",onClick:function(){return a(e)},children:Object(b.jsx)("a",{className:"page-link",href:"#section",children:e})},e)})),Object(b.jsx)("li",{className:n===t.length?"page-item disabled":"page-item",children:Object(b.jsx)("a",{className:"page-link",href:"#section",children:"Next"})})]})})})},k=a(46),P=a(47),w=function(e){var t=e.data;return Object(b.jsx)(k.a,{children:Object(b.jsx)(P.a,{children:Object(b.jsxs)(P.a.Body,{className:"d-flex flex-column justify-content-between ",children:[Object(b.jsxs)(P.a.Text,{children:["\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c:",Object(b.jsxs)("b",{children:[t.firstName," ",t.lastName]})]}),Object(b.jsxs)(P.a.Text,{children:[Object(b.jsx)("b",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),Object(b.jsx)("br",{})," ",t.description]}),Object(b.jsxs)(P.a.Text,{children:["\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",Object(b.jsxs)("b",{children:[" ",t.address.streetAddress," "]})]}),Object(b.jsxs)(P.a.Text,{children:["\u0413\u043e\u0440\u043e\u0434: ",Object(b.jsxs)("b",{children:[" ",t.address.city," "]})]}),Object(b.jsxs)(P.a.Text,{children:["\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f: ",Object(b.jsxs)("b",{children:[" ",t.address.state," "]})]}),Object(b.jsxs)(P.a.Text,{children:["\u0418\u043d\u0434\u0435\u043a\u0441: ",Object(b.jsxs)("b",{children:[" ",t.address.zip," "]})]})]})})})},T=function(e){var t=e.data,a=e.handleToggleSizeData,n=e.pages,r=e.handleClickPage,s=e.sortTable,i=e.direction,l=e.targetValue,j=e.handlerSearchInput,o=e.handlePaginationPages,u=e.currentPage,h=e.setAddContact,x=e.addContactData,m=Object(c.useState)({}),f=Object(d.a)(m,2),p=f[0],g=f[1],N=Object(c.useState)(!1),v=Object(d.a)(N,2),S=v[0],B=v[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{handleToggleSizeData:a}),Object(b.jsx)(y,{handlerSearchInput:j}),Object(b.jsx)(C,{data:t,sortTable:s,direction:i,targetValue:l,setAddContact:h,addContactData:x,getTableRowId:function(e){e&&g(e),B(!0)}}),Object(b.jsx)(D,{pages:n,handleClickPage:r,handlePaginationPages:o,currentPage:u}),S&&Object(b.jsx)(w,{data:p})]})},I="http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";var E=function(){var e=Object(c.useState)(I),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(d.a)(r,2),o=i[0],x=i[1],O=Object(c.useState)(!0),m=Object(d.a)(O,2),f=m[0],p=m[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,x(c),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:return e.prev=13,p(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,11,13,16]])})));return function(){return e.apply(this,arguments)}})()()}),[a]);for(var g=Object(c.useState)(""),N=Object(d.a)(g,2),v=N[0],C=N[1],S=v?o.filter((function(e){return Object.values(e).some((function(e){return String(e).includes(v)}))})):o,B=Object(c.useState)(1),y=Object(d.a)(B,2),D=y[0],k=y[1],P=Object(c.useMemo)((function(){return 7*D}),[D,7]),w=Object(c.useMemo)((function(){return P-7}),[P,7]),E=Object(c.useMemo)((function(){return S.slice(w,P)}),[P,w,S]),L=Object(c.useMemo)((function(){return Math.ceil(S.length/7)}),[S,7]),A=[],F=1;F<=L;F++)A.push(F);var z=Object(c.useState)(""),M=Object(d.a)(z,2),G=M[0],V=M[1],H=Object(c.useState)(""),J=Object(d.a)(H,2),R=J[0],_=J[1],q=Object(c.useState)(),K=Object(d.a)(q,2),Q=K[0],U=K[1],W=Object(c.useMemo)((function(){return[Q].concat(Object(s.a)(S)).slice(w,P)}),[Q,S,w,P]);return Object(b.jsx)(h.a,{children:f?Object(b.jsx)(u,{}):Object(b.jsx)(T,{data:Q?W:E,handleToggleSizeData:function(e){switch(e){case"big":return n("http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D");case"small":return n(I)}},pages:A,handleClickPage:function(e){k(e)},sortTable:function(e){if(V(e),""===R||"asc"===R){var t=S.slice().sort((function(t,a){return t[e]>a[e]?1:-1}));x(t),_("desc")}if("desc"===R){var a=S.slice().sort((function(t,a){return t[e]<a[e]?1:-1}));x(a),_("asc")}},direction:R,targetValue:G,handlerSearchInput:function(e){C(e)},handlePaginationPages:function(e){switch(e.target.innerText){case"Previous":if(D>1)return k(D-1);break;case"Next":if(D<A.length)return k(D+1)}},currentPage:D,setAddContact:U,addContactData:function(e){U(e)}})})};r.a.render(Object(b.jsx)(E,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.76b089b8.chunk.js.map