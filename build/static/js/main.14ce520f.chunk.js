(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('{"LoginPage":{"Welcome":"Welcome","Change-Languaje":"Change language:","Enter-mail":"Enter Email Address","Password":"Password","Remember":"Remember","Login":"Login","Login-with":"Login with","Create-Account":"Create Account","Forgot-Password":"Forgot Password"},"ForgotPasswordPage":{"Have-Acount":"Already have an account? Login!","Forgot-Password":"Forgot Your Password?","Consuelo-Sentence":"We get it, stuff happens, dont worry. Just enter your email address below and we\'ll send you a link to reset your password!","Reset-Password":"Reset Password"},"RegisterPage":{"Create-Account":"Create an Account!","Repeat-Password":"Repeat Password","Name":"Name","Surname":"Surname"},"NotFoundPage":{"Not-Found":"Page Not Found","Matrix":"It looks like you found a glitch in the matrix...","Go-Back":"Back to Dashboard","Made-With":"Web application made with \u2764\ufe0f\u200d\ud83d\udd25 by Talent-Mu."}}')},31:function(e){e.exports=JSON.parse('{"LoginPage":{"Welcome":"Bienvenido","Change-Languaje":"Cambiar idioma:","Enter-mail":"Introduce tu email","Password":"Contrase\xf1a","Remember":"Recu\xe9rdame","Login":"Iniciar sesi\xf3n","Login-with":"Iniciar sesi\xf3n","Create-Account":"\xbfNo tienes cuenta? \xa1Hazte una!","Forgot-Password":"\xbfOlvidaste la contrase\xf1a?"},"ForgotPasswordPage":{"Have-Acount":"\xbfYa tienes una cuenta? \xa1Inicia sesi\xf3n!","Forgot-Passwor":"\xbfOlvidaste la contrase\xf1a?","Consuelo-Sentence":"Lo entendemos, estas cosas pasan. S\xf3lo tienes que introducir tu correo electr\xf3nico y te enviaremos un enlace para restablecer tu contrase\xf1a \ud83d\ude0a.","Reset-Password":"Reiniciar contrse\xf1a"},"RegisterPage":{"Create-Account":"\xa1Registra una cuenta!","Repeat-Password":"Repite la contrase\xf1a","Name":"Nombre","Surname":"Apellidos"},"NotFoundPage":{"Not-Found":"P\xe1gina no econtrada","Matrix":"Ouch! Parece que has encontrado un fallo en matrix...","Go-Back":"Vuelve al inicio de la web, para el \xa1rescate!","Made-With":"Aplicacion web hecha con \u2764\ufe0f\u200d\ud83d\udd25 por Talent-Mu."}}')},32:function(e){e.exports=JSON.parse('{"LoginPage":{"Welcome":"Bem-vindo","Change-Languaje":"Mudar idioma","Enter-mail":"Introduz o teu e-mail","Password":"Senha","Remember":"Lembra-me","Login":"Iniciar Sess\xe3o","Login-with":"Iniciar sess\xe3o com","Create-Account":"N\xe3o tem uma conta? Crie uma!","Forgot-Password":"Esqueceu-se sua senha?"},"ForgotPasswordPage":{"Have-Acount":"J\xe1 tem uma conta? Entre!","Forgot-Password":"\xbfOlvidaste la contrase\xf1a?","Consuelo-Sentence":"Compreendemos que estas coisas acontecem. Basta introduzir o seu e-mail e enviar-lhe-emos um link para redefinir a sua palavra-passe \ud83d\ude0a","Reset-Password":"Redefinir senha"},"RegisterPage":{"Create-Account":"Registe uma conta!","Repeat-Password":"Repita a senha","Name":"Nome","Surname":"Apelidos"},"NotFoundPage":{"Not-Found":"P\xe1gina n\xe3o encontrada","Matrix":"Ai! Parece que encontrou um insecto na matriz...","Go-Back":"Volte para o topo da web, para o salvamento!","Made-With":"Aplica\xe7\xe3o Web feita com  \u2764\ufe0f\u200d\ud83d\udd25 por Talent-Mu."}}')},38:function(e,a,s){},39:function(e,a,s){},53:function(e,a,s){"use strict";s.r(a);s(1);var t=s(22),c=s.n(t),n=s(4),r=s(54),i=s(16),l=s(3),o=(s(38),s(39),s(11)),d=s(55),j=s(0),b=function(){var e=Object(d.a)("global"),a=e.t,s=e.i18n;return Object(j.jsxs)("div",{className:"text-center small",children:[a("LoginPage.Change-Languaje"),Object(j.jsx)("button",{className:"btn bg-transparent",onClick:function(){return s.changeLanguage("es")},children:"\ud83c\uddea\ud83c\uddf8"}),Object(j.jsx)("button",{className:"btn bg-transparent",onClick:function(){return s.changeLanguage("en")},children:"\ud83c\uddec\ud83c\udde7"}),Object(j.jsx)("button",{className:"btn bg-transparent",onClick:function(){return s.changeLanguage("pt")},children:"\ud83c\uddf5\ud83c\uddf9"})]})},m=function(e){var a=e.text;return Object(j.jsx)("input",{type:"email",name:"email",className:"form-control form-control-user","aria-describedby":"emailHelp",placeholder:a})},h=function(e){var a=e.text;return Object(j.jsx)("input",{type:"password",name:"password",className:"form-control form-control-user",placeholder:a})},x=function(e){var a=e.text,s=e.path;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)(n.b,{to:s,className:"small",children:a})})})},g=s(20),u=s(33),O=s(29),p=function(e){var a=e.children,s=e.startIcon,t=e.variant,c=Object(u.a)(e,["children","startIcon","variant"]),n="btn-primary btn-user btn-block",r="btn-google btn-user btn-block",i="btn-facebook btn-user btn-block";return Object(j.jsxs)("button",Object(g.a)(Object(g.a)({className:Object(O.a)("btn","primary"===t&&n,"google"===t&&r,"facebook"===t&&i)},c),{},{children:[s?Object(j.jsx)("i",{className:s}):"",a]}))},N=function(e){var a=e.text;return Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("div",{className:"custom-control custom-checkbox small",children:[Object(j.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck"}),Object(j.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck",children:a})]})})},v=function(){return Object(j.jsxs)("nav",{className:"pl-5 navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(j.jsx)(n.b,{className:"navbar-brand",to:"/",children:"Navbar"}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item active",children:Object(j.jsx)(n.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(n.b,{className:"nav-link",to:"/registro",children:"Registro"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(n.b,{className:"nav-link",to:"/recuperar-pass",children:"Recuperar Contrase\xf1a"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(n.b,{className:"nav-link",to:"/404",children:"404"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(n.b,{className:"nav-link disabled",to:"/404",children:"ONLY FOR DEV AND JOB!"})})]})})]})},f=function(){var e=Object(d.a)("global").t;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(o.a,{bodyAttributes:{class:"bg-gradient-primary"}}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsx)("div",{className:"col-xl-10 col-lg-12 col-md-9",children:Object(j.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(j.jsx)("div",{className:"card-body p-0",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6 d-none d-lg-block bg-login-image"}),Object(j.jsxs)("div",{className:"col-lg-6",children:[Object(j.jsxs)("div",{className:"p-5",children:[Object(j.jsx)("div",{className:"text-center",children:Object(j.jsxs)("h1",{className:"h4 text-gray-900 mb-4",children:[e("LoginPage.Welcome"),"!"]})}),Object(j.jsxs)("form",{className:"user",children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)(m,{text:e("LoginPage.Enter-mail")})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)(h,{text:e("LoginPage.Password")})}),Object(j.jsx)(N,{text:e("LoginPage.Remember")}),Object(j.jsx)(p,{type:"submit",variant:"primary",onClick:function(e){return e.preventDefault(),console.log("click")},children:e("LoginPage.Login")}),Object(j.jsx)("hr",{}),Object(j.jsxs)(p,{type:"submit",variant:"google",startIcon:"fab fa-google fa-fw",onClick:function(e){return e.preventDefault(),console.log("click google")},children:[e("LoginPage.Login-with")," Google"]}),Object(j.jsxs)(p,{type:"submit",variant:"facebook",startIcon:"fab fa-facebook-f fa-fw",onClick:function(e){return e.preventDefault(),console.log("click facebook")},children:[e("LoginPage.Login-with")," Facebook"]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(x,{path:"/registro",text:e("LoginPage.Create-Account")}),Object(j.jsx)(x,{path:"/recuperar-pass",text:e("LoginPage.Forgot-Password")})]}),Object(j.jsx)(b,{})]})]})})})})})]})]})},P=function(e){var a=e.text;return Object(j.jsx)("input",{type:"text",name:"text",className:"form-control form-control-user",placeholder:a})},w=function(){var e=Object(d.a)("global").t;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(o.a,{bodyAttributes:{class:"bg-gradient-success"}}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(j.jsx)("div",{className:"card-body p-0",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-5 d-none d-lg-block bg-register-image"}),Object(j.jsxs)("div",{className:"col-lg-7",children:[Object(j.jsxs)("div",{className:"p-5",children:[Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("h1",{className:"h4 text-gray-900 mb-4",children:e("RegisterPage.Create-Account")})}),Object(j.jsxs)("form",{className:"user",children:[Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-sm-6 mb-3 mb-sm-0",children:Object(j.jsx)(P,{text:e("RegisterPage.Name")})}),Object(j.jsx)("div",{className:"col-sm-6",children:Object(j.jsx)(P,{text:e("RegisterPage.Surname")})})]}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)(m,{text:e("LoginPage.Enter-mail")})}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-sm-6 mb-3 mb-sm-0",children:Object(j.jsx)(h,{text:e("LoginPage.Password")})}),Object(j.jsx)("div",{className:"col-sm-6",children:Object(j.jsx)(h,{text:e("RegisterPage.Repeat-Password")})})]}),Object(j.jsx)(p,{type:"submit",variant:"primary",onClick:function(e){return e.preventDefault(),console.log("click")},children:e("LoginPage.Login")}),Object(j.jsx)("hr",{}),Object(j.jsxs)(p,{type:"submit",variant:"google",startIcon:"fab fa-google fa-fw",onClick:function(e){return e.preventDefault(),console.log("click google")},children:[e("LoginPage.Login-with")," Google"]}),Object(j.jsxs)(p,{type:"submit",variant:"facebook",startIcon:"fab fa-facebook-f fa-fw",onClick:function(e){return e.preventDefault(),console.log("click facebook")},children:[e("LoginPage.Login-with")," Facebook"]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(x,{path:"/login",text:e("ForgotPasswordPage.Have-Acount")}),Object(j.jsx)(x,{path:"/recuperar-pass",text:e("LoginPage.Forgot-Password")})]}),Object(j.jsx)(b,{})]})]})})})})]})]})},k=function(){var e=Object(d.a)("global").t;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"content-wrapper",className:"mt-xl-5 d-flex flex-column",children:[Object(j.jsxs)("div",{id:"content",children:[Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsxs)("div",{className:"text-center mt-xl-5",children:[Object(j.jsx)("div",{className:"error mx-auto","data-text":"404",children:"404"}),Object(j.jsx)("p",{className:"lead text-gray-800 mb-5",children:e("NotFoundPage.Not-Found")}),Object(j.jsx)("p",{className:"text-gray-500 mb-0",children:e("NotFoundPage.Matrix")}),Object(j.jsxs)(n.b,{to:"/",children:["\u2190 ",e("NotFoundPage.Go-Back")]})]})}),Object(j.jsx)("footer",{className:"sticky-footer bg-white",children:Object(j.jsx)("div",{className:"container my-auto",children:Object(j.jsx)("div",{className:"copyright text-center my-auto",children:Object(j.jsx)("span",{children:e("NotFoundPage.Made-With")})})})})]}),Object(j.jsx)(b,{})]})})},y=function(){var e=Object(d.a)("global").t;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(o.a,{bodyAttributes:{class:"bg-gradient-info"}}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsx)("div",{className:"col-xl-10 col-lg-12 col-md-9",children:Object(j.jsx)("div",{className:"card o-hidden border-0 shadow-lg my-5",children:Object(j.jsx)("div",{className:"card-body p-0",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-6 d-none d-lg-block bg-password-image"}),Object(j.jsxs)("div",{className:"col-lg-6",children:[Object(j.jsxs)("div",{className:"p-5",children:[Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("h1",{className:"h4 text-gray-900 mb-2",children:e("LoginPage.Forgot-Password")}),Object(j.jsx)("p",{className:"mb-4",children:e("ForgotPasswordPage.Consuelo-Sentence")})]}),Object(j.jsxs)("form",{className:"user",children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)(m,{text:e("LoginPage.Enter-mail")})}),Object(j.jsx)(p,{type:"submit",variant:"primary",onClick:function(e){return e.preventDefault(),console.log("click Reiniciar Contrase\xf1a")},children:e("ForgotPasswordPage.Reset-Password")})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(x,{path:"/login",text:e("ForgotPasswordPage.Have-Acount")}),Object(j.jsx)(x,{path:"/registro",text:e("LoginPage.Create-Account")})]}),Object(j.jsx)(b,{})]})]})})})})})})]})},L=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{}),Object(j.jsxs)("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar",children:[Object(j.jsxs)("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"index.html",children:[Object(j.jsx)("div",{className:"sidebar-brand-icon rotate-n-15",children:Object(j.jsx)("i",{className:"fas fa-laugh-wink"})}),Object(j.jsx)("div",{className:"sidebar-brand-text mx-3",children:"egestion"})]}),Object(j.jsx)("hr",{className:"sidebar-divider my-0"}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("a",{className:"nav-link",href:"index.html",children:[Object(j.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(j.jsx)("span",{children:"Panel de Control"})]})}),Object(j.jsx)("hr",{className:"sidebar-divider"}),Object(j.jsx)("div",{className:"sidebar-heading",children:"Interface"}),Object(j.jsxs)("li",{className:"nav-item",children:[Object(j.jsxs)("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo",children:[Object(j.jsx)("i",{className:"fas fa-fw fa-cog"}),Object(j.jsx)("span",{children:"Components"})]}),Object(j.jsx)("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar",children:Object(j.jsxs)("div",{className:"bg-white py-2 collapse-inner rounded",children:[Object(j.jsx)("h6",{className:"collapse-header",children:"Custom Components:"}),Object(j.jsx)("a",{className:"collapse-item",href:"buttons.html",children:"Buttons"}),Object(j.jsx)("a",{className:"collapse-item",href:"cards.html",children:"Cards"})]})})]}),Object(j.jsxs)("li",{className:"nav-item",children:[Object(j.jsxs)("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseUtilities","aria-expanded":"true","aria-controls":"collapseUtilities",children:[Object(j.jsx)("i",{className:"fas fa-fw fa-wrench"}),Object(j.jsx)("span",{children:"Utilities"})]}),Object(j.jsx)("div",{id:"collapseUtilities",className:"collapse","aria-labelledby":"headingUtilities","data-parent":"#accordionSidebar",children:Object(j.jsxs)("div",{className:"bg-white py-2 collapse-inner rounded",children:[Object(j.jsx)("h6",{className:"collapse-header",children:"Custom Utilities:"}),Object(j.jsx)("a",{className:"collapse-item",href:"utilities-color.html",children:"Colors"}),Object(j.jsx)("a",{className:"collapse-item",href:"utilities-border.html",children:"Borders"}),Object(j.jsx)("a",{className:"collapse-item",href:"utilities-animation.html",children:"Animations"}),Object(j.jsx)("a",{className:"collapse-item",href:"utilities-other.html",children:"Other"})]})})]}),Object(j.jsx)("hr",{className:"sidebar-divider"}),Object(j.jsx)("div",{className:"sidebar-heading",children:"Addons"}),Object(j.jsxs)("li",{className:"nav-item active",children:[Object(j.jsxs)("a",{className:"nav-link",href:"#","data-toggle":"collapse","data-target":"#collapsePages","aria-expanded":"true","aria-controls":"collapsePages",children:[Object(j.jsx)("i",{className:"fas fa-fw fa-folder"}),Object(j.jsx)("span",{children:"Pages"})]}),Object(j.jsx)("div",{id:"collapsePages",className:"collapse show","aria-labelledby":"headingPages","data-parent":"#accordionSidebar",children:Object(j.jsxs)("div",{className:"bg-white py-2 collapse-inner rounded",children:[Object(j.jsx)("h6",{className:"collapse-header",children:"Login Screens:"}),Object(j.jsx)(n.b,{className:"collapse-item",to:"/login",children:"Login"}),Object(j.jsx)(n.b,{className:"collapse-item",to:"/registro",children:"Registro"}),Object(j.jsx)(n.b,{className:"collapse-item",to:"/recuperar-pass",children:"Recuperar Contrase\xf1a"}),Object(j.jsx)("div",{className:"collapse-divider"}),Object(j.jsx)("h6",{className:"collapse-header",children:"Other Pages:"}),Object(j.jsx)(n.b,{className:"collapse-item",to:"/404",children:"404 Page"})]})})]}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("a",{className:"nav-link",href:"charts.html",children:[Object(j.jsx)("i",{className:"fas fa-fw fa-chart-area"}),Object(j.jsx)("span",{children:"Charts"})]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)("a",{className:"nav-link",href:"tables.html",children:[Object(j.jsx)("i",{className:"fas fa-fw fa-table"}),Object(j.jsx)("span",{children:"Tables"})]})}),Object(j.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(j.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(j.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle"})})]}),Object(j.jsx)("hr",{})]})},C=function(){return Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/",exact:!0,component:L}),Object(j.jsx)(l.b,{path:"/login",exact:!0,component:f}),Object(j.jsx)(l.b,{path:"/registro",exact:!0,component:w}),Object(j.jsx)(l.b,{path:"/404",exact:!0,component:k}),Object(j.jsx)(l.b,{path:"/recuperar-pass",exact:!0,component:y}),Object(j.jsx)(l.b,{path:"/navbar",exact:!0,component:L}),Object(j.jsx)(l.a,{to:"/404"})]})},F=s(30),R=s(31),A=s(32);i.a.init({interpolation:{escapeValue:!1},lng:"es",resources:{en:{global:F},es:{global:R},pt:{global:A}}}),c.a.render(Object(j.jsx)(r.a,{i18n:i.a,children:Object(j.jsx)(n.a,{children:Object(j.jsx)(C,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.14ce520f.chunk.js.map