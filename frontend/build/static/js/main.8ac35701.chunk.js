(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){},31:function(e,a,t){e.exports=t(62)},54:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),c=t(9),o=t(3),s=(t(20),t(4)),m=t(8),i=t(17),u=t(14),p=t.n(u);t(54);function b(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),b=u[0],d=u[1],E=Object(n.useState)(""),g=Object(s.a)(E,2),f=g[0],h=g[1],v=Object(n.useState)([]),N=Object(s.a)(v,2),j=N[0],k=N[1],O=Object(n.useState)(null),w=Object(s.a)(O,2);w[0],w[1];var C=function(e){return h(e)};return r.a.createElement("div",{className:"box-form"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"overlay"},r.a.createElement("h1",null,"Stili."),r.a.createElement("p",{className:"promo"},"Ekte turglede!"),r.a.createElement("p",{className:"promo2"}," Finn turer som passer for deg, og knytt vennskap for livet!"))),r.a.createElement("div",{className:"Login"},r.a.createElement("h5",null,"Login"),r.a.createElement("p",null,r.a.createElement(c.b,{to:"/home"},"Don't")," have an account? ",r.a.createElement(c.b,{to:"/register"},"Click here")," to sign up!"),r.a.createElement(m.a,null,r.a.createElement(m.a.Group,{size:"lg",controlId:"phoneNumber"},r.a.createElement(m.a.Control,{autoFocus:!0,type:"phoneNumber",placeholder:"Phone Number",value:t,onChange:function(e){return l(e.target.value)}})),r.a.createElement(m.a.Group,{size:"lg",controlId:"password"},r.a.createElement(m.a.Control,{type:"password",placeholder:"Password",value:b,onChange:function(e){return d(e.target.value)}})),r.a.createElement(i.a,{block:!0,size:"lg",type:"button",className:"Button",onClick:(p.a.get("user.json").then(function(e){0===j.length&&k(e.data.data[0])}),t===j.phoneNumber&&b===j.password?function(){return C("Success! Redirecting...")}:function(){return C("Incorrect phone number/password, please try again.")})},"Login"),r.a.createElement("p",{className:"errormsg"},f)))))}t(58);function d(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),b=u[0],d=u[1],E=Object(n.useState)(""),g=Object(s.a)(E,2),f=g[0],h=g[1],v=Object(n.useState)(""),N=Object(s.a)(v,2),j=N[0],k=N[1],O=Object(n.useState)(""),w=Object(s.a)(O,2),C=w[0],y=w[1],S=Object(n.useState)(""),z=Object(s.a)(S,2),x=z[0],_=z[1],F=Object(n.useState)(""),I=Object(s.a)(F,2),G=I[0],P=I[1],R=Object(n.useState)(""),L=Object(s.a)(R,2),K=L[0],A=L[1],B=Object(n.useState)({firstName:"",surname:"",phoneNumber:"",age:"",experience:"",location:"",password:""}),D=Object(s.a)(B,2),H=(D[0],D[1]);return r.a.createElement("div",{className:"box-form"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"overlay"},r.a.createElement("h1",null,"Stili."),r.a.createElement("p",{className:"joinFun"},"Registrer deg n\xe5 og bli med p\xe5 morroa!"))),r.a.createElement("div",{className:"Register"},r.a.createElement("h5",null,"Register"),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(c.b,{to:"/"},"Click here")," to log in!"),r.a.createElement(m.a,null,r.a.createElement(m.a.Group,{size:"lg",controlId:"firstName"},r.a.createElement(m.a.Control,{autoFocus:!0,type:"firstName",placeholder:"First name",value:t,onChange:function(e){return l(e.target.value)}})),r.a.createElement(m.a.Group,{size:"lg",controlId:"surname"},r.a.createElement(m.a.Control,{autoFocus:!0,type:"surname",placeholder:"Surname",value:b,onChange:function(e){return d(e.target.value)}})),r.a.createElement(m.a.Group,{size:"lg",controlId:"phoneNumber"},r.a.createElement(m.a.Control,{autoFocus:!0,type:"phoneNumber",placeholder:"Phone Number",value:f,onChange:function(e){return h(e.target.value)}}),r.a.createElement(m.a.Group,{size:"lg",controlId:"age"},r.a.createElement(m.a.Control,{autoFocus:!0,type:"age",placeholder:"Age",value:j,onChange:function(e){return k(e.target.value)}}))),r.a.createElement(m.a.Group,{size:"lg",controlId:"experience"},r.a.createElement(m.a.Control,{type:"experience",placeholder:"Experience",value:C,onChange:function(e){return y(e.target.value)}})),r.a.createElement(m.a.Group,{size:"lg",controlId:"location"},r.a.createElement(m.a.Control,{type:"location",placeholder:"Location",value:x,onChange:function(e){return _(e.target.value)}})),r.a.createElement(m.a.Group,{size:"lg",controlId:"password"},r.a.createElement(m.a.Control,{type:"password",placeholder:"Password",value:G,onChange:function(e){return P(e.target.value)}})),r.a.createElement("p",{className:"errormsg"},K),r.a.createElement(i.a,{block:!0,size:"lg",type:"button",className:"Button",onClick:t.length<101&&b.length<101&&8===f.length?function(){return A(""),p()({method:"POST",url:"/users/",data:{firstName:t,surname:b,phoneNumber:f,age:j,experience:C,location:x,password:G}}).then(function(e){console.log(e)}),H({firstName:"",surname:"",phoneNumber:"",age:"",experience:"",location:"",password:""}),void e.preventDefault();var e}:function(){return A("Make sure all the fields are filled in.")}},"Register")))))}t(59);var E=function(e){var a=e.children,t=e.type,n=e.onClick,l=e.button;return r.a.createElement(c.b,{to:"/contact",className:"btn"},r.a.createElement("button",{className:l,onClick:n,type:t},a))};t(60);function g(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),l=t[0],o=t[1],m=Object(n.useState)(!0),i=Object(s.a)(m,2),u=i[0],p=i[1];function b(){o(!1)}function d(){window.innerWidth<=979?p(!1):p(!0)}return Object(n.useEffect)(function(){d()},[]),window.addEventListener("resize",d),r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",{"data-aos":e.fade,"data-aos-duration":e.duration,"data-aos-offset":e.offset},r.a.createElement("nav",{className:"navbar"},r.a.createElement(c.b,{to:"/",className:"navbar-logo",onClick:b},"Hafskjold"),r.a.createElement("ul",{className:l?"navbar-hamburger active":"navbar-hamburger"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/",className:"navbar-links",onClick:b},"Hjem")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/salads",className:"navbar-links",onClick:b},"Salater")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/recipes",className:"navbar-links",onClick:b},"Oppskrifter")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/about",className:"navbar-links",onClick:b},"Om Oss")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/contact",className:"navbar-links-mobile",onClick:b},"Kontakt"))),u&&r.a.createElement(E,{button:"btn--outline"},"Kontakt"),r.a.createElement("div",{className:"hamburger-icon"},r.a.createElement("button",{onClick:function(){o(!l)},className:l?"hamburger hamburger--spring is-active":"hamburger hamburger--spring",type:"button"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"})))))))}function f(e){return r.a.createElement("div",{className:e.name},r.a.createElement("li",{className:"card"},r.a.createElement(c.b,{className:"card_link",to:e.path},r.a.createElement("figure",{className:e.wrapper,"data-category":e.label},r.a.createElement("img",{src:e.src,alt:"test",className:"card_image"})),r.a.createElement("div",{className:"card_info"},r.a.createElement("h5",{className:"card_text"},e.text)))))}t(61);function h(e){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,e.text),r.a.createElement("div",{className:"card_container"},r.a.createElement("div",{className:"card_wrapper"},r.a.createElement("ul",{className:"card_items"},r.a.createElement(f,{name:"card-body",wrapper:"card_picture_wrapper-pizza",src:"",text:"Pizzaoppskrifter",label:"Pizza",path:"/pizza"}),r.a.createElement(f,{name:"card-body",wrapper:"card_picture_wrapper",src:"images/gorgonzola.jpg",text:"Pastaoppskrifter",label:"Pasta",path:"/pasta"}),r.a.createElement(f,{name:"card-body",wrapper:"card_picture_wrapper-meat",src:"images/taco.jpg",text:"Kj\xf8ttoppskrifter",label:"Kj\xf8tt",path:"/meat"}),r.a.createElement(f,{name:"card-body",wrapper:"card_picture_wrapper-rice",src:"images/rice.jpg",text:"Risoppskrifter",label:"Ris",path:"/"}),r.a.createElement(f,{name:"card-body",wrapper:"card_picture_wrapper-fish",src:"images/salmon.jpg",text:"Fiskeoppskrifter",label:"Fisk",path:"/fish"})))))}function v(){return r.a.createElement("div",null,r.a.createElement(g,{fade:"fade-in",duration:"1000",offset:"200"}),r.a.createElement(h,null))}function N(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,element:r.a.createElement(b,null)}),r.a.createElement(o.a,{path:"/register",element:r.a.createElement(d,null)}),r.a.createElement(o.a,{path:"/home",element:r.a.createElement(v,null)}))))}Object(l.render)(r.a.createElement(N,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8ac35701.chunk.js.map