(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{62:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(23),a=r(10),s=r(73),i=r(44),o=(r(53),r(63),r(64),i.a.initializeApp({apiKey:"AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",authDomain:"taxis-e44d6.firebaseapp.com",projectId:"taxis-e44d6",storageBucket:"taxis-e44d6.appspot.com",messagingSenderId:"603667662446",appId:"1:603667662446:web:0014b763a2a4acca92487f"})),j=(i.a.firestore.FieldValue.serverTimestamp,o.firestore()),u=(o.storage(),o.auth()),l=r(2),b=Object(c.createContext)(),d=function(e){var t=e.children,r=Object(c.useState)(null),n=Object(a.a)(r,2),s=n[0],i=n[1],o=Object(c.useState)(!0),d=Object(a.a)(o,2),O=d[0],x=d[1],h=Object(c.useState)(""),f=Object(a.a)(h,2),p=f[0],m=f[1];return Object(c.useEffect)((function(){return u.onAuthStateChanged((function(e){i(e),x(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return m("")}),5e3);return function(){return clearTimeout(e)}}),[p]),Object(l.jsx)(b.Provider,{value:{currentUser:s,register:function(e,t){return u.createUserWithEmailAndPassword(e,t)},login:function(e,t){return u.signInWithEmailAndPassword(e,t)},logout:function(){return u.signOut()},bidAuction:function(e){return j.collection("oxxoLider").doc(e).update({acuerdo:!0})},noteContext:function(e,t){return j.collection("oxxoLider").doc(e).update({note:t})},endAuction:function(e){return j.collection("oxxoLider").doc(e).delete()},globalMsg:p},children:!O&&t})},O=r(70),x=r(30),h=function(e){var t=Object(c.useState)(0),r=Object(a.a)(t,2),n=r[0],s=(r[1],Object(c.useState)(!0)),i=Object(a.a)(s,2),o=i[0];i[1];return Object(c.useState)((function(){j.collection("oxxoLider").add(Object(x.a)({},e))}),[e]),{progress:n,isCompleted:o}},f=function(e){var t=e.auction,r=e.setAuction,n=h(t),a=n.progress,s=n.isCompleted;return Object(c.useEffect)((function(){s&&r(null)}),[s,r]),Object(l.jsx)(O.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(a,"%")}})},p=r(48),m=Object(c.createContext)(),v=function(e){var t=e.children,r=function(e){var t=Object(c.useState)([]),r=Object(a.a)(t,2),n=r[0],s=r[1];return Object(c.useEffect)((function(){var t=j.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{docs:n}}("oxxoLider").docs,n=Object(p.a)(r),s=Object(c.useState)(n),i=Object(a.a)(s,2),o=i[0],u=i[1];return Object(l.jsx)(m.Provider,{value:{handleDB:function(e){u(e)},DB:o},children:t})},g=r(20),y=r.n(g),C=r(24),w=r(71),S=r(68),N=r(47),R=r(72),L=r(69),k=function(e){var t=e.setAuction,r=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useRef)(),s=Object(c.useRef)(),i=Object(c.useRef)(),o=Object(c.useRef)(),j=Object(c.useContext)(b).currentUser,u=function(){var e=Object(C.a)(y.a.mark((function e(c){var u,l,b;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),u=new Date,l=u.setHours(u.getHours()),b={email:j.email,tienda:r.current.value,hora:n.current.value,destino:a.current.value,pasajeros:s.current.value,description:i.current.value,duration:l},t(b),o.current.reset();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=!!j;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:u,className:d?"w-100 border border-top mt-1":"d-none",ref:o,children:[Object(l.jsxs)(w.a.Body,{children:[Object(l.jsx)(S.a,{children:Object(l.jsx)(N.a,{children:Object(l.jsx)(R.a.Group,{className:"mb-4",children:Object(l.jsx)(R.a.Control,{type:"text",required:!0,ref:r,placeholder:"Tienda"})})})}),Object(l.jsx)(S.a,{children:Object(l.jsx)(N.a,{children:Object(l.jsx)(R.a.Group,{className:"mb-3",children:Object(l.jsx)(R.a.Control,{type:"text",required:!0,ref:n,placeholder:"Horario"})})})}),Object(l.jsx)(S.a,{children:Object(l.jsx)(N.a,{children:Object(l.jsxs)(R.a.Group,{className:"mb-3",children:[Object(l.jsx)(R.a.Label,{children:"Destino"}),Object(l.jsx)(R.a.Control,{type:"text",required:!0,ref:a})]})})}),Object(l.jsx)(S.a,{children:Object(l.jsx)(N.a,{children:Object(l.jsxs)(R.a.Group,{className:"mb-3",children:[Object(l.jsx)(R.a.Label,{children:"Nombre/Telefono/Direccion"}),Object(l.jsx)(R.a.Control,{as:"textarea",type:"text",required:!0,ref:s})]})})}),Object(l.jsx)(S.a,{children:Object(l.jsx)(N.a,{children:Object(l.jsxs)(R.a.Group,{children:[Object(l.jsx)(R.a.Label,{children:"Comentarios"}),Object(l.jsx)(R.a.Control,{type:"text",required:!0,ref:i})]})})})]}),Object(l.jsx)(w.a.Footer,{children:Object(l.jsx)(L.a,{variant:"secondary",type:"submit",className:"w-100",children:"Pedir Orden"})})]})})},A=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),r=t[0],n=t[1];console.log(r);var i=Object(c.useContext)(b),o=(i.currentUser,i.globalMsg),j=(Object(c.useContext)(m).DB,Object(c.useState)()),u=Object(a.a)(j,2);u[0],u[1];return Object(l.jsxs)("div",{className:"container-fluid",children:[r&&Object(l.jsx)(f,{auction:r,setAuction:n}),Object(l.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:o&&Object(l.jsx)(s.a,{variant:"danger",children:o})}),Object(l.jsx)("div",{children:Object(l.jsx)(k,{setAuction:n})})]})},E=r.p+"static/media/canal10.24a72002.png",D=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),r=(t[0],t[1]),n=Object(c.useState)(""),i=Object(a.a)(n,2),o=i[0],j=i[1],u=Object(c.useRef)(),d=Object(c.useRef)(),O=Object(c.useContext)(b).login,x=function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(""),e.prev=2,e.next=5,O(u.current.value,d.current.value);case 5:r(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),j("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:x,className:"border mt-5",children:[Object(l.jsx)(w.a.Header,{children:Object(l.jsx)(w.a.Title,{children:"OXXO TRANSPORTE"})}),Object(l.jsxs)(w.a.Body,{children:[o&&Object(l.jsx)(s.a,{variant:"danger",children:o}),Object(l.jsxs)(R.a.Group,{children:[Object(l.jsx)(R.a.Label,{children:"Email "}),Object(l.jsx)(R.a.Control,{type:"email",required:!0,ref:u,className:"mb-3"})]}),Object(l.jsxs)(R.a.Group,{children:[Object(l.jsx)(R.a.Label,{children:"Password"}),Object(l.jsx)(R.a.Control,{type:"password",required:!0,ref:d,className:"mb-4"})]})]}),Object(l.jsx)(w.a.Footer,{children:Object(l.jsx)(L.a,{variant:"dark",type:"submit",className:"w-100",children:"Entrar"})})]})})},P=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),r=t[0],n=t[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),j=o[0],u=o[1],d=Object(c.useRef)(),O=Object(c.useRef)(),x=Object(c.useRef)(),h=Object(c.useContext)(b).register,f=function(){return n(!1)},p=function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(""),O.current.value===x.current.value){e.next=4;break}return e.abrupt("return",u("Passwords does not match"));case 4:return e.prev=4,e.next=7,h(d.current.value,O.current.value);case 7:f(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),u(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(w.a,{centered:!0,show:r,onHide:f,children:Object(l.jsxs)("form",{onSubmit:p,children:[Object(l.jsx)(w.a.Header,{children:Object(l.jsx)(w.a.Title,{children:"Registro"})}),Object(l.jsxs)(w.a.Body,{children:[j&&Object(l.jsx)(s.a,{variant:"danger",children:j}),Object(l.jsxs)(R.a.Group,{children:[Object(l.jsx)(R.a.Label,{children:"Email"}),Object(l.jsx)(R.a.Control,{type:"email",required:!0,ref:d})]}),Object(l.jsxs)(R.a.Group,{children:[Object(l.jsx)(R.a.Label,{children:"Password"}),Object(l.jsx)(R.a.Control,{type:"password",required:!0,ref:O})]}),Object(l.jsxs)(R.a.Group,{children:[Object(l.jsx)(R.a.Label,{children:"Confirmar Password"}),Object(l.jsx)(R.a.Control,{type:"password",required:!0,ref:x})]})]}),Object(l.jsxs)(w.a.Footer,{children:[Object(l.jsx)(L.a,{variant:"secondary",onClick:f,children:"Cancelar"}),Object(l.jsx)(L.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})})},q=function(){var e=Object(c.useContext)(b),t=e.currentUser,r=e.logout;return Object(l.jsx)("nav",{className:"container navbar navbar-light ",children:Object(l.jsxs)("div",{className:"container d-flex flex-column",children:[Object(l.jsx)("div",{className:"navbar-brand mb-4",children:Object(l.jsx)("img",{src:E,alt:"logo",height:"50"})}),Object(l.jsx)("div",{className:"d-flex",children:Object(l.jsx)("div",{className:"col mb-4",children:t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"btn btn-secondary mx-2 disabled px-4",children:t.email.slice(0,-10)}),Object(l.jsx)("div",{onClick:function(){return r()},className:"btn btn-outline-secondary mx-2",children:"SALIR"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(D,{}),Object(l.jsx)(P,{})]})})})]})})},G=function(){return Object(l.jsx)(d,{children:Object(l.jsxs)(v,{children:[Object(l.jsx)(q,{}),Object(l.jsx)(A,{})]})})};r(61);Object(n.render)(Object(l.jsx)(G,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.4d522a52.chunk.js.map