(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},108:function(e,a,t){e.exports=t.p+"static/media/401-error.feaf6de1.svg"},209:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(35),o=t.n(l),s=t(5),c=t(8),i=t(14),m=t(22),d=t(74),u=t(75),g=t(12),E="[Auth] Login",p="[Auth] Logout",b="[UI] Set Error",h="[UI] Remove Error",v="[UI] Start Loading",N="[UI] Finish Loading",f="[LOCAL] Local default",P="[LNG] Set Castellano",w="[LNG] Set Ingles",y="[LNG] Set Portugues",A="[rmb] Set Remember Check",C="[rmb] Remove Remember Check",x={uid:"",displayName:"",token:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(g.a)({},e,a.payload);case p:return{};default:return e}},R={languaje:window.navigator.language.split("-")[0]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case P:case w:case y:return Object(g.a)({},e,{languaje:a.payload});default:return e}},L={loading:!1,msgError:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(g.a)({},e,{msgError:a.payload});case h:return Object(g.a)({},e,{msgError:null});case v:return Object(g.a)({},e,{loading:!0});case N:return Object(g.a)({},e,{loading:!1});default:return e}},F={locale:window.navigator.language},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f:return Object(g.a)({},e,{locale:a.payload});default:return e}},I={check:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:case C:return{check:a.payload};default:return e}},_=t(76);var U=t(77),D=(t(210),t(99),Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_APIKEY:"AIzaSyBya1j-F-gP1HElfgrGb4zoXq5eYYtfuuE",REACT_APP_AUTHDOMAIN:"react-talentmu.firebaseapp.com",REACT_APP_PROJECTID:"react-talentmu",REACT_APP_STORAGEBUCKET:"react-talentmu.appspot.com",REACT_APP_MESSAGINGSENDERID:"194773713019",REACT_APP_APPID:"1:194773713019:web:313ff3b0ca0a703670a2d"})),B={apiKey:D.REACT_APP_APIKEY,authDomain:D.REACT_APP_AUTHDOMAIN,projectId:D.REACT_APP_PROJECTID,storageBucket:D.REACT_APP_STORAGEBUCKET,messagingSenderId:D.REACT_APP_MESSAGINGSENDERID,appId:D.REACT_APP_APPID},z=U.a.initializeApp(B),M=(z.auth().createUserWithEmailAndPassword,t(211)),G=t(39),W=t(9),q=(t(101),t(102),t(50),t(212)),V=function(e){return e.languaje},H=function(e){return e.ui},Y=function(e){return!!e.auth.uid},J=function(e){return e.auth.displayName},K=function(){var e=Object(q.a)("global"),a=e.t,t=e.i18n,l=Object(c.b)(),o=Object(c.c)(V).languaje,s=function(e){var a=e.target.name;"es"===a&&l({type:P,payload:"es"}),"en"===a&&l({type:w,payload:"en"}),"pt"===a&&l({type:y,payload:"pt"})};return Object(r.useEffect)(function(){t.changeLanguage(o)},[o]),n.a.createElement("div",{className:"text-center small"},a("LoginPage.Change-Languaje"),n.a.createElement("button",{className:"btn bg-transparent",name:"es",onClick:s},a("ChangeLanguaje.Spanish")),n.a.createElement("button",{className:"btn bg-transparent",name:"en",onClick:s},a("ChangeLanguaje.English")),n.a.createElement("button",{className:"btn bg-transparent",name:"pt",onClick:s},a("ChangeLanguaje.Portuguese")))},X=(t(108),function(){return n.a.createElement("nav",{className:"pl-5 navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Inicio"),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement(s.b,{className:"nav-link",to:"/login"},"Login")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/registro"},"Registro")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/recuperar-pass"},"Recuperar Contrase\xf1a")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/404"},"404")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link disabled",to:"/404"},"ONLY FOR DEV AND JOB!")))))}),Q=function(){var e=Object(q.a)("global").t;return n.a.createElement(n.a.Fragment,null,n.a.createElement(X,null),n.a.createElement("div",{className:"container pt-5"},n.a.createElement("div",{id:"content-wrapper",className:"mt-xl-5 d-flex flex-column"},n.a.createElement("div",{id:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"text-center mt-xl-5"},n.a.createElement("div",{className:"error mx-auto","data-text":"401"},"401"),n.a.createElement("p",{className:"lead text-gray-800 mb-5"},e("UnauthorizedPage.Unauthorized")),n.a.createElement("p",{className:"text-gray-500 mb-0"},e("UnauthorizedPage.Message")),n.a.createElement(s.b,{to:"/login"},"\u2190 ",e("NotFoundPage.Go-Back")))),n.a.createElement("footer",{className:"sticky-footer bg-white"},n.a.createElement("div",{className:"container my-auto"},n.a.createElement("div",{className:"copyright text-center my-auto"},n.a.createElement("span",null,e("NotFoundPage.Made-With")))))),n.a.createElement(K,null))))},Z=function(e){return Object(c.c)(Y)?n.a.createElement(W.b,e):n.a.createElement(Q,null)},$=t(21),ee=t(27),ae=t(28),te=t.n(ae),re=t(36),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object($.a)(a,2),n=t[0],l=t[1];return[n,function(e){var a=e.target,t=a.name,r=a.type,o=a.value,s=a.checked;l(Object(g.a)({},n,Object(re.a)({},t,"checkbox"===r?s:o)))},function(){l(e)}]},le=function(e){var a=e.text,t=e.value,r=e.onChange,l=e.name;return n.a.createElement("input",Object.assign({},e,{className:"form-control form-control-user",type:"email",placeholder:a,name:l,value:t,onChange:r}))},oe=function(e){var a=e.text,t=e.value,r=e.onChange,l=e.name;return n.a.createElement("input",Object.assign({},e,{"aria-describedby":"password",type:"password",name:l,className:"form-control form-control-user",placeholder:a,value:t,onChange:r}))},se=function(e){var a=e.text,t=e.path;return n.a.createElement("div",null,n.a.createElement("div",{className:"text-center"},n.a.createElement(s.b,{to:t,className:"small"},a)))},ce=t(40),ie=t(31),me=function(e){var a=e.children,t=e.startIcon,r=e.variant,l=Object(ce.a)(e,["children","startIcon","variant"]),o="btn-primary btn-user btn-block",s="btn-google btn-user btn-block alert-error mb-3";return n.a.createElement("button",Object.assign({},l,{className:Object(ie.a)("btn","primary"===r&&o,"alert"===r&&s)},l),t?n.a.createElement("i",{className:t}):"",a)},de=function(e){var a=Object(q.a)("global").t,t=e.msgError;return n.a.createElement(n.a.Fragment,null,t&&n.a.createElement("div",null,n.a.createElement(me,{disabled:!0,variant:"alert",startIcon:"fas fa-exclamation-triangle"}," ",a(t)),n.a.createElement("hr",null)))},ue=function(e){return{type:b,payload:e}},ge=function(){return{type:h}},Ee=function(){return{type:v,payload:!0}},pe=function(){return{type:N,payload:!1}},be=t(25),he=t.n(be),ve=t(41),Ne=t(32),fe=t.n(Ne),Pe=t(83),we=t.n(Pe),ye=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_APIKEY:"AIzaSyBya1j-F-gP1HElfgrGb4zoXq5eYYtfuuE",REACT_APP_AUTHDOMAIN:"react-talentmu.firebaseapp.com",REACT_APP_PROJECTID:"react-talentmu",REACT_APP_STORAGEBUCKET:"react-talentmu.appspot.com",REACT_APP_MESSAGINGSENDERID:"194773713019",REACT_APP_APPID:"1:194773713019:web:313ff3b0ca0a703670a2d"}),Ae=ye.REACT_APP_NODE,Ce=ye.REACT_APP_API_VERSION,xe="".concat(Ae,"/").concat(Ce),Oe=we.a.create({baseURL:xe}),Re=function(e){Oe.defaults.headers.common.Authorization="Bearer ".concat(e)};Oe.login=function(e){return Oe.post("/auth/login",e).then(function(e){return Re(e.token),e})},Oe.logout=function(){return new Promise(function(e){delete Oe.defaults.headers.common.Authorization,e()})},Oe.interceptors.response.use(function(e){var a=e.data,t=a.ok,r=Object(ce.a)(a,["ok"]);return t?Promise.resolve(r):Promise.reject(r.error)},function(e){return e.response?Promise.reject(e.response.data.error):Promise.reject(e)});var je=function(e){e&&Re(e)},Le=function(e,a,t){return{type:E,payload:{uid:e,displayName:a,token:t}}},Se=function(e){var a=e.handlerOnFocus,t=Object(q.a)("global").t,r=Object(c.b)(),l=Object(c.c)(H),o=l.msgError,s=l.loading,i=ne({email:"",password:""}),m=Object($.a)(i,2),d=m[0],u=m[1],g=d.email,E=d.password,p=function(){return console.log(E),te.a.isEmail(g)?E<=5?(r(ue("LoginPage.Password-Error")),!1):(r(ge()),!0):(r(ue("RegisterPage.Email-NotValid")),!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement(ee.a,{bodyAttributes:{class:"bg-gradient-primary"}}),n.a.createElement("div",{className:"row justify-content-center pt-5"},n.a.createElement("div",{className:"col-xl-10 col-lg-12 col-md-9"},n.a.createElement("div",{className:"card o-hidden border-0 shadow-lg my-5"},n.a.createElement("div",{className:"card-body p-0"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 d-none d-lg-block bg-login-image"}),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"p-5"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"h4 text-gray-900 mb-4"},t("LoginPage.Welcome"))),n.a.createElement("form",{className:"user",onSubmit:function(e){e.preventDefault(),p()&&r(function(e,a){return function(){var t=Object(ve.a)(he.a.mark(function t(r,n,l){var o,s,c;return he.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l.history,r(Ee()),console.log("user: ",z.auth().currentUser),t.prev=3,t.next=6,z.auth().signInWithEmailAndPassword(e,a);case 6:return o=t.sent,s=o.user,t.next=10,s.getIdToken();case 10:c=t.sent,r(Le(s.uid,s.displayName,c)),je(c),r(pe()),fe.a.fire("Success","Bienvenido","success"),t.next=22;break;case 17:t.prev=17,t.t0=t.catch(3),console.error("Error ->",t.t0),r(pe()),fe.a.fire("Error",t.t0.message,"error");case 22:case"end":return t.stop()}},t,null,[[3,17]])}));return function(e,a,r){return t.apply(this,arguments)}}()}(g,E))}},n.a.createElement("div",{className:"form-group"},n.a.createElement(le,{text:t("LoginPage.Enter-mail"),name:"email",value:g,onFocus:a,onChange:u})),n.a.createElement("div",{className:"form-group"},n.a.createElement(oe,{text:t("LoginPage.Password"),name:"password",value:E,onFocus:a,onChange:u})),n.a.createElement(de,{msgError:o}),n.a.createElement(me,{type:"submit",variant:"primary",startIcon:"fas fa-sign-in-alt",disabled:s}," ",t("LoginPage.Login"))),n.a.createElement("hr",null),n.a.createElement(se,{path:"/registro",text:t("LoginPage.Create-Account")}),n.a.createElement(se,{path:"/recuperar-pass",text:t("LoginPage.Forgot-Password")})),n.a.createElement(K,null)))))))))},Fe=function(e){var a=e.text,t=e.value,r=e.onChange,l=e.name;return n.a.createElement("input",Object.assign({},e,{"aria-describedby":"enterText",type:"text",name:l,className:"form-control form-control-user",placeholder:a,value:t,onChange:r}))},ke=function(e){var a=e.handlerOnFocus,t=Object(q.a)("global").t,r=Object(c.b)(),l=Object(c.c)(H),o=l.msgError,s=l.loading,i=ne({username:"",email:"",password:"",password2:""}),m=Object($.a)(i,2),d=m[0],u=m[1],g=d.username,E=d.email,p=d.password,b=d.password2,h=function(){return g.length<=2?(r(ue("RegisterPage.Name-Required")),!1):te.a.isEmail(E)?p!==b||p.length<5?(r(ue("RegisterPage.Password-Error")),!1):(r(ge()),!0):(r(ue("RegisterPage.Email-NotValid")),!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(X,null),n.a.createElement("div",{className:"container"},n.a.createElement(ee.a,{bodyAttributes:{class:"bg-gradient-success"}}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card o-hidden border-0 shadow-lg my-5"},n.a.createElement("div",{className:"card-body p-0"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-5 d-none d-lg-block bg-register-image"}),n.a.createElement("div",{className:"col-lg-7"},n.a.createElement("div",{className:"p-5"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"h4 text-gray-900 mb-4"},t("RegisterPage.Create-Account"))),n.a.createElement("form",{className:"user",onSubmit:function(e){e.preventDefault(),h()&&r(function(e,a,t){return function(r){r(Ee()),z.auth().createUserWithEmailAndPassword(e,a).then(function(){var e=Object(ve.a)(he.a.mark(function e(a){var n;return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.user,e.next=3,n.updateProfile({displayName:t});case 3:r(Le(n.uid,n.displayName)),r(pe()),fe.a.fire("Success","Bienvenido","success");case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()).catch(function(e){console.error("Error ->",e),r(pe()),fe.a.fire("Error",e.message,"error")})}}(E,p,g))}},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"col-sm-6 mb-3 mb-sm-0"}),n.a.createElement(Fe,{text:t("RegisterPage.Name"),name:"username",value:g,onFocus:a,onChange:u})),n.a.createElement("div",{className:"form-group"},n.a.createElement(le,{text:t("LoginPage.Enter-mail"),name:"email",value:E,onFocus:a,onChange:u})),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-6 mb-3 mb-sm-0"},n.a.createElement(oe,{text:t("LoginPage.Password"),name:"password",value:p,onFocus:a,onChange:u})),n.a.createElement("div",{className:"col-sm-6"},n.a.createElement(oe,{text:t("RegisterPage.Repeat-Password"),name:"password2",value:b,onFocus:a,onChange:u}))),n.a.createElement(de,{msgError:o}),n.a.createElement(me,{type:"submit",variant:"primary",startIcon:"fas fa-id-card",disabled:s}," ",t("RegisterPage.Register-Account"))),n.a.createElement("hr",null),n.a.createElement(se,{path:"/login",text:t("ForgotPasswordPage.Have-Acount")}),n.a.createElement(se,{path:"/recuperar-pass",text:t("LoginPage.Forgot-Password")})),n.a.createElement(K,null))))))))},Ie=function(){var e=Object(q.a)("global").t;return n.a.createElement(n.a.Fragment,null,n.a.createElement(X,null),n.a.createElement("div",{className:"container pt-5"},n.a.createElement("div",{id:"content-wrapper",className:"mt-xl-5 d-flex flex-column"},n.a.createElement("div",{id:"content"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"text-center mt-xl-5"},n.a.createElement("div",{className:"error mx-auto","data-text":"404"},"404"),n.a.createElement("p",{className:"lead text-gray-800 mb-5"},e("NotFoundPage.Not-Found")),n.a.createElement("p",{className:"text-gray-500 mb-0"},e("NotFoundPage.Matrix")),n.a.createElement(s.b,{to:"/"},"\u2190 ",e("NotFoundPage.Go-Back")))),n.a.createElement("footer",{className:"sticky-footer bg-white"},n.a.createElement("div",{className:"container my-auto"},n.a.createElement("div",{className:"copyright text-center my-auto"},n.a.createElement("span",null,e("NotFoundPage.Made-With")))))),n.a.createElement(K,null))))},Te=function(e){var a=e.handlerOnFocus,t=Object(q.a)("global").t,r=Object(c.b)(),l=Object(c.c)(H).msgError,o=ne({email:""}),s=Object($.a)(o,2),i=s[0],m=s[1],d=i.email;return n.a.createElement(n.a.Fragment,null,n.a.createElement(X,null),n.a.createElement(ee.a,{bodyAttributes:{class:"bg-gradient-info"}}),n.a.createElement("div",{className:"container pt-5"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-xl-10 col-lg-12 col-md-9"},n.a.createElement("div",{className:"card o-hidden border-0 shadow-lg my-5"},n.a.createElement("div",{className:"card-body p-0"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 d-none d-lg-block bg-password-image"}),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("div",{className:"p-5"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"h4 text-gray-900 mb-2"},t("LoginPage.Forgot-Password")),n.a.createElement("p",{className:"mb-4"},t("ForgotPasswordPage.Consuelo-Sentence"))),n.a.createElement("form",{className:"user",onSubmit:function(e){return e.preventDefault(),te.a.isEmail(d)?(r(ge()),!0):(r(ue("RegisterPage.Email-NotValid")),!1)}},n.a.createElement("div",{className:"form-group"},n.a.createElement(le,{text:t("LoginPage.Enter-mail"),name:"email",value:d,onFocus:a,onChange:m})),n.a.createElement(de,{msgError:l}),n.a.createElement(me,{type:"submit",variant:"primary",startIcon:"fas fa-redo"}," ",t("ForgotPasswordPage.Reset-Password"))),n.a.createElement("hr",null),n.a.createElement(se,{path:"/login",text:t("ForgotPasswordPage.Have-Acount")}),n.a.createElement(se,{path:"/registro",text:t("LoginPage.Create-Account")})),n.a.createElement(K,null)))))))))},_e=function(){var e=Object(q.a)("global").t;return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{className:"sticky-footer bg-white"},n.a.createElement("div",{className:"container my-auto"},n.a.createElement("div",{className:"copyright text-center my-auto"},n.a.createElement("span",null,e("NotFoundPage.Made-With")))),n.a.createElement(K,null)))},Ue=t(84),De=t.n(Ue),Be=function(){var e=Object(q.a)("global").t,a=Object(c.c)(J),t=Object(r.useState)(!1),l=Object($.a)(t,2),o=l[0],i=l[1];return n.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},n.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3"},n.a.createElement("i",{className:"fa fa-bars"})),n.a.createElement("form",{className:"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-primary",type:"button"},n.a.createElement("i",{className:"fas fa-search fa-sm"}))))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item dropdown no-arrow d-sm-none"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("i",{className:"fas fa-search fa-fw"})),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in","aria-labelledby":"searchDropdown"},n.a.createElement("form",{className:"form-inline mr-auto w-100 navbar-search"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-primary",type:"button"},n.a.createElement("i",{className:"fas fa-search fa-sm"}))))))),n.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),n.a.createElement("li",{className:Object(ie.a)("nav-item dropdown no-arrow",o&&"show")},n.a.createElement("div",{className:"nav-link dropdown-toggle",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":o,onClick:function(){return i(!o)}},n.a.createElement("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small"},a),n.a.createElement("img",{className:"img-profile rounded-circle",src:De.a})),n.a.createElement("div",{className:Object(ie.a)("dropdown-menu dropdown-menu-right shadow animated--grow-in",o&&"show"),"aria-labelledby":"userDropdown"},n.a.createElement(s.b,{className:"dropdown-item",to:"/profile"},n.a.createElement("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),e("NavBars.Profile")),n.a.createElement(s.b,{className:"dropdown-item",to:"/settings"},n.a.createElement("i",{className:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),e("NavBars.Settings")),n.a.createElement("div",{className:"dropdown-divider"}),n.a.createElement(s.b,{className:"dropdown-item","data-toggle":"modal","data-target":"#logoutModal",to:"/logout"},n.a.createElement("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),e("NavBars.Logout"))))))},ze=function(){var e=Object(q.a)("global").t;return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},n.a.createElement(s.b,{className:"sidebar-brand d-flex align-items-center justify-content-center",to:"/"},n.a.createElement("div",{className:"sidebar-brand-icon rotate-n-15"},n.a.createElement("i",{className:"fas fa-laugh-wink"})),n.a.createElement("div",{className:"sidebar-brand-text mx-3"},"egestion")),n.a.createElement("hr",{className:"sidebar-divider my-0"}),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/"},n.a.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),n.a.createElement("span",null,e("NavBars.Dashboard")))),n.a.createElement("hr",{className:"sidebar-divider"}),n.a.createElement("div",{className:"sidebar-heading"},e("NavBars.Interface")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"},n.a.createElement("i",{className:"fas fa-fw fa-cog"}),n.a.createElement("span",null,e("NavBars.Components"))),n.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar"},n.a.createElement("div",{className:"bg-white py-2 collapse-inner rounded"},n.a.createElement("h6",{className:"collapse-header"},"Custom Components:"),n.a.createElement("a",{className:"collapse-item",href:"buttons.html"},"Buttons"),n.a.createElement("a",{className:"collapse-item",href:"cards.html"},"Cards")))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseUtilities","aria-expanded":"true","aria-controls":"collapseUtilities"},n.a.createElement("i",{className:"fas fa-fw fa-wrench"}),n.a.createElement("span",null,"Utilities")),n.a.createElement("div",{id:"collapseUtilities",className:"collapse","aria-labelledby":"headingUtilities","data-parent":"#accordionSidebar"},n.a.createElement("div",{className:"bg-white py-2 collapse-inner rounded"},n.a.createElement("h6",{className:"collapse-header"},"Custom Utilities:"),n.a.createElement("a",{className:"collapse-item",href:"utilities-color.html"},"Colors"),n.a.createElement("a",{className:"collapse-item",href:"utilities-border.html"},"Borders"),n.a.createElement("a",{className:"collapse-item",href:"utilities-animation.html"},"Animations"),n.a.createElement("a",{className:"collapse-item",href:"utilities-other.html"},"Other")))),n.a.createElement("hr",{className:"sidebar-divider"}),n.a.createElement("div",{className:"sidebar-heading"},"Addons"),n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"#","data-toggle":"collapse","data-target":"#collapsePages","aria-expanded":"true","aria-controls":"collapsePages"},n.a.createElement("i",{className:"fas fa-fw fa-folder"}),n.a.createElement("span",null,"Pages")),n.a.createElement("div",{id:"collapsePages",className:"collapse show","aria-labelledby":"headingPages","data-parent":"#accordionSidebar"},n.a.createElement("div",{className:"bg-white py-2 collapse-inner rounded"},n.a.createElement("h6",{className:"collapse-header"},"Login Screens:"),n.a.createElement(s.b,{className:"collapse-item",to:"/login"},"Login"),n.a.createElement(s.b,{className:"collapse-item",to:"/registro"},"Registro"),n.a.createElement(s.b,{className:"collapse-item",to:"/recuperar-pass"},"Recuperar Contrase\xf1a"),n.a.createElement("div",{className:"collapse-divider"}),n.a.createElement("h6",{className:"collapse-header"},"Other Pages:"),n.a.createElement(s.b,{className:"collapse-item",to:"/404"},"404 Page")))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"charts.html"},n.a.createElement("i",{className:"fas fa-fw fa-chart-area"}),n.a.createElement("span",null,"Charts"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"tables.html"},n.a.createElement("i",{className:"fas fa-fw fa-table"}),n.a.createElement("span",null,"Tables"))),n.a.createElement("hr",{className:"sidebar-divider d-none d-md-block"}),n.a.createElement("div",{className:"text-center d-none d-md-inline"},n.a.createElement("button",{className:"rounded-circle border-0",id:"sidebarToggle"}))),n.a.createElement("hr",null))},Me=function(e){var a=e.children;Object(q.a)("global").t;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"wrapper"},n.a.createElement(ze,null),n.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},n.a.createElement("div",{id:"content"},n.a.createElement(Be,null),a),n.a.createElement(_e,null))),n.a.createElement("a",{className:"scroll-to-top rounded",href:"#page-top"},n.a.createElement("i",{className:"fas fa-angle-up"})),n.a.createElement("div",{className:"modal fade",id:"logoutModal",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Ready to Leave?"),n.a.createElement("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{className:"modal-body"},"Sel you are ready to end your current session."),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal"},"Cancel"),n.a.createElement("a",{className:"btn btn-primary",href:"login.html"},"Logout"))))))},Ge=function(){return n.a.createElement(Me,null,n.a.createElement("div",{className:"container-fluid"},n.a.createElement("h1",{className:"h3 mb-4 text-gray-800"},"Blank Page")))},We=function(){var e=Object(c.b)(),a=function(a){a.preventDefault(),e(ge())};return n.a.createElement(W.d,null,n.a.createElement(W.b,{path:"/",exact:!0},Object(c.c)(Y)?n.a.createElement(W.a,{to:"/dashboard"}):n.a.createElement(Se,{handlerOnFocus:a})),n.a.createElement(Z,{path:"/dashboard",exact:!0,component:Ge}),n.a.createElement(W.b,{path:"/login",exact:!0},Object(c.c)(Y)?n.a.createElement(W.a,{to:"/dashboard"}):n.a.createElement(Se,{handlerOnFocus:a})),n.a.createElement(W.b,{path:"/registro",exact:!0},n.a.createElement(ke,{handlerOnFocus:a})),n.a.createElement(W.b,{path:"/recuperar-pass",exact:!0},n.a.createElement(Te,{handlerOnFocus:a})),n.a.createElement(W.b,{path:"/404",exact:!0,component:Ie}),n.a.createElement(W.a,{to:"/404"}))},qe=t(85),Ve=t(86),He=t(87),Ye=window.navigator.language.split("-")[0];"es"!==Ye&&"en"!==Ye&&"pt"!==Ye&&(Ye="es"),G.a.init({interpolation:{escapeValue:!1},lng:Ye,resources:{en:{global:qe},es:{global:Ve},pt:{global:He}}});var Je=function(e,a){var t=Object(m.combineReducers)({auth:O,ui:S,languaje:j,locale:k,remember:T}),r=[u.a.withExtraArgument({history:a,api:_})];return Object(m.createStore)(t,e,Object(d.composeWithDevTools)(m.applyMiddleware.apply(void 0,r)))}({},Object(i.a)());z.auth().onAuthStateChanged(function(e){e&&e.getIdToken().then(function(a){Je.dispatch(Le(e.uid,e.displayName,a)),je(a)})}),o.a.render(n.a.createElement(c.a,{store:Je},n.a.createElement(M.a,{i18n:G.a},n.a.createElement(s.a,null,n.a.createElement(We,null)))),document.getElementById("root"))},50:function(e,a,t){},76:function(e,a){},84:function(e,a,t){e.exports=t.p+"static/media/undraw_profile_1.5bb10981.svg"},85:function(e){e.exports={LoginPage:{Welcome:"Welcome!","Change-Languaje":"Change language:","Enter-mail":"Enter Email Address",Password:"Password",Remember:"Remember",Login:"Login","Login-with":"Login with","Create-Account":"Create Account","Forgot-Password":"Forgot Password","Password-Error":"Password should be at least 6 characters"},ForgotPasswordPage:{"Have-Acount":"Already have an account? Login!","Forgot-Password":"Forgot Your Password?","Consuelo-Sentence":"We get it, stuff happens, dont worry. Just enter your email address below and we'll send you a link to reset your password!","Reset-Password":"Reset Password"},RegisterPage:{"Create-Account":"Create an Account!","Register-Account":"Register Account","Register-With":"Register with","Repeat-Password":"Repeat Password",Name:"Name",Surname:"Surname",Fiscal:"Fiscal Number",Organization:"Organization","Name-Required":"Name is required, to contain at least 3 characters.","Surname-Required":"Surname is required, to contain at least 3 characters.","Email-NotValid":"Email is not valid","Fiscal-NotValid":"Fiscal id, is not valid","Password-Error":"Password should be at least 6 characters and match each other"},NotFoundPage:{"Not-Found":"Page Not Found",Matrix:"It looks like you found a glitch in the matrix...","Go-Back":"Back to Dashboard","Made-With":"Web application made with \u2764\ufe0f\u200d\ud83d\udd25 by Talent-Mu."},UnauthorizedPage:{Unauthorized:"Unauthorized access",Message:"Seems you got here by accident, please login"},NavBars:{Dashboard:"Dashboard",Interface:"Interface",Components:"Components",Utilities:"Utilities",Tables:"Tables",Page:"Page",Charts:"Charts",Profile:"Profile",Settings:"Settings","Activity-Log":"Activity-Log",Logout:"Logout",Cancel:"Cancel"},ErrorSwal:{"Email-InUse":"The email address is already in use by another account."},ChangeLanguaje:{Spanish:"\ud83c\uddea\ud83c\uddf8",English:"\ud83c\uddec\ud83c\udde7",Portuguese:"\ud83c\uddf5\ud83c\uddf9"}}},86:function(e){e.exports={LoginPage:{Welcome:"\xa1Bienvenido!","Change-Languaje":"Cambiar idioma:","Enter-mail":"Introduce tu email",Password:"Contrase\xf1a",Remember:"Recu\xe9rdame",Login:"Iniciar sesi\xf3n","Login-with":"Iniciar sesi\xf3n","Create-Account":"\xbfNo tienes cuenta? \xa1Hazte una!","Forgot-Password":"\xbfOlvidaste la contrase\xf1a?","Password-Error":"La contrase\xf1a debe tener al menos 6 caracteres"},ForgotPasswordPage:{"Have-Acount":"\xbfYa tienes una cuenta? \xa1Inicia sesi\xf3n!","Forgot-Passwor":"\xbfOlvidaste la contrase\xf1a?","Consuelo-Sentence":"Lo entendemos, estas cosas pasan. S\xf3lo tienes que introducir tu correo electr\xf3nico y te enviaremos un enlace para restablecer tu contrase\xf1a \ud83d\ude0a.","Reset-Password":"Reiniciar contrse\xf1a"},RegisterPage:{"Create-Account":"\xa1Registra una cuenta!","Register-Account":"Registrar cuenta","Register-With":"Registrar con","Repeat-Password":"Repite la contrase\xf1a",Name:"Nombre",Surname:"Apellidos",Fiscal:"N\xfamero Fiscal",Organization:"Organizaci\xf3n","Name-Required":"El nombre es requerido, debe contener al menos 3 caracteres","Surname-Required":"El apellido es requerido, debe contener al menos 3 caracteres","Email-NotValid":"El email no es v\xe1lido","Fiscal-NotValid":"El N\xfamero fiscal no es v\xe1lido","Password-Error":"La contrase\xf1a debe tener al menos 6 caracteres y coincidir ambas"},NotFoundPage:{"Not-Found":"P\xe1gina no econtrada",Matrix:"Ouch! Parece que has encontrado un fallo en matrix...","Go-Back":"Vuelve al inicio de la web, para el \xa1rescate!","Made-With":"Aplicaci\xf3n web hecha con \u2764\ufe0f\u200d\ud83d\udd25 por Talent-Mu."},UnauthorizedPage:{Unauthorized:"Acceso no autorizado",Message:"Al parecer llegaste ac\xe1 por accidente. Por favor haz login."},NavBars:{Dashboard:"Panel de Control",Interface:"Interfaz",Components:"Componentes",Utilities:"Utilidades",Tables:"Tablas",Page:"P\xe1gina",Charts:"Gr\xe1ficos",Profile:"Perfil",Settings:"Configuraci\xf3n","Activity-Log":"Actividad",Logout:"Cerrar sesi\xf3n",Cancel:"Cancenlar"},ErrorSwal:{"Email-InUse":"Este email ya est\xe1 siendo utilizado por otro usuario."},ChangeLanguaje:{Spanish:"\ud83c\uddea\ud83c\uddf8",English:"\ud83c\uddec\ud83c\udde7",Portuguese:"\ud83c\uddf5\ud83c\uddf9"}}},87:function(e){e.exports={LoginPage:{Welcome:"Bem-vindo!","Change-Languaje":"Mudar idioma","Enter-mail":"Introduz o teu e-mail",Password:"Senha",Remember:"Lembra-me",Login:"Iniciar Sess\xe3o","Login-with":"Iniciar sess\xe3o com","Create-Account":"N\xe3o tem uma conta? Crie uma!","Forgot-Password":"Esqueceu-se sua senha?","Password-Error":"A senha deve ter pelo menos 6 caracteres"},ForgotPasswordPage:{"Have-Acount":"J\xe1 tem uma conta? Entre!","Forgot-Password":"\xbfOlvidaste la contrase\xf1a?","Consuelo-Sentence":"Compreendemos que estas coisas acontecem. Basta introduzir o seu e-mail e enviar-lhe-emos um link para redefinir a sua palavra-passe \ud83d\ude0a","Reset-Password":"Redefinir senha"},RegisterPage:{"Create-Account":"Registe uma conta!","Register-Account":"Registar a conta","Register-With":"Registe-se com","Repeat-Password":"Repita a senha",Name:"Nome",Surname:"Apelidos",Fiscal:"N\xfamero de contribuinte",Organization:"Organiza\xe7\xe3o","Name-Required":"O nome \xe9 obrigat\xf3rio, deve conter pelo menos 3 caracteres.","Surname-Required":"O apelido \xe9 obrigat\xf3rio, deve conter pelo menos 3 caracteres.","Email-NotValid":"O email \xe9 inv\xe1lido","Fiscal-NotValid":"O N\xfamero de Contribuinte \xe9 inv\xe1lido","Password-Error":"A senha deve ter pelo menos 6 caracteres e os campos devem corresponder"},NotFoundPage:{"Not-Found":"P\xe1gina n\xe3o encontrada",Matrix:"Ai! Parece que encontrou um falho na matriz...","Go-Back":"Volte para o topo da web, para o salvamento!","Made-With":"Aplica\xe7\xe3o Web feita com  \u2764\ufe0f\u200d\ud83d\udd25 por Talent-Mu."},UnauthorizedPage:{Unauthorized:"Unauthorized access",Message:"Seems you got here by accident, please login"},NavBars:{Dashboard:"Painel de controlo",Interface:"Interface",Components:"Componentes",Utilities:"Utilidades",Tables:"Tabelas",Page:"P\xe1gina",Charts:"Gr\xe1ficos",Profile:"Perfil",Settings:"Defini\xe7\xf5es","Activity-Log":"Di\xe1rio de actividades",Logout:"Sair",Cancel:"Cancenlar"},ErrorSwal:{"Email-InUse":"Este e-mail j\xe1 est\xe1 a ser utilizado por outra pessoa."},ChangeLanguaje:{Spanish:"\ud83c\uddea\ud83c\uddf8",English:"\ud83c\uddec\ud83c\udde7",Portuguese:"\ud83c\uddf5\ud83c\uddf9"}}},88:function(e,a,t){e.exports=t(209)}},[[88,1,2]]]);
//# sourceMappingURL=main.c7f1bf52.chunk.js.map