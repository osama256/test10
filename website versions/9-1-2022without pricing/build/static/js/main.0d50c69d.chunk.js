(this.webpackJsonptest10=this.webpackJsonptest10||[]).push([[0],{41:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(33),r=s.n(c),i=(s(41),s(36)),o=s(15),l=s(2),d=s(0),j=function(e,t,s){var c=a.a.createContext();return{Context:c,Provider:function(a){var r=a.children,i=Object(n.useReducer)(e,s),j=Object(l.a)(i,2),h=j[0],u=j[1],b={};for(var p in t)b[p]=t[p](u);return Object(d.jsx)(c.Provider,{value:Object(o.a)({state:h},b),children:r})}}}((function(e,t){switch(t.type){case"add_token":return Object(o.a)(Object(o.a)({},e),{},{token:t.payload});default:return e}}),{addToken:function(e){return function(t){e({type:"add_token",payload:t})}}},{token:""}),h=j.Provider,u=j.Context,b=s(3),p=s(12),m=s(6),x=s.n(m),f=s(10),g=s(16);function O(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function y(){var e=Object(n.useState)(O()),t=Object(l.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){a(O())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),s}var v,w,S=s(34),k=s.n(S),C=s.p+"static/media/success.fc4f61e2.png",T=s.p+"static/media/invalid.b6559cf4.png",P=s(14),I=s(17),B=s.n(I),A=Object(P.css)(v||(v=Object(g.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));function E(e){for(var t=window.location.search.substring(1).split("&"),s=0;s<t.length;s++){var n=t[s].split("=");if(n[0]===e)return n[1]}return!1}function N(e){var t=e.history,s=(e.location,e.match,y()),a=s.height,c=s.width,r=Object(n.useState)(!0),i=Object(l.a)(r,2),o=i[0],j=i[1],h=Object(n.useState)(""),u=Object(l.a)(h,2),b=u[0],p=u[1],m=Object(n.useState)(""),g=Object(l.a)(m,2),O=g[0],v=g[1],w=Object(n.useState)(!1),S=Object(l.a)(w,2),P=S[0],I=S[1],N=Object(n.useState)(!1),z=Object(l.a)(N,2),F=z[0],L=z[1],M=Object(n.useState)(""),W=Object(l.a)(M,2),D=W[0],U=W[1],H=Object(n.useState)(""),R=Object(l.a)(H,2),J=R[0],_=R[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(x.a.mark((function e(){var s,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s=E("token"))){e.next=17;break}return e.prev=2,console.log("MASTERHOST :","https://mansourapp.com"),e.next=6,k.a.get("".concat("https://mansourapp.com","/api/web/verifytoken?token=").concat(s));case 6:n=e.sent,console.log("what we got : ",n.data),_(s),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("could not verify token"),t.push("/send");case 15:e.next=18;break;case 17:j(!1);case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),o?P?Object(d.jsxs)("div",{style:{flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",width:c-50,height:a-50},children:[Object(d.jsx)("img",{src:C,alt:"Success",style:{width:100,height:100,marginBottom:20}}),Object(d.jsx)("div",{style:{marginBottom:10},children:Object(d.jsx)("label",{style:{color:"#000",fontSize:20},children:"Password Changed!"})}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{style:{color:"#000",fontSize:14},children:"Your password has been changed successfully."})})]}):F?Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:c,height:a-50},children:[" ",Object(d.jsx)("div",{children:Object(d.jsx)(B.a,{color:"#fff",loading:F,css:A,size:100})})]}):Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{style:{marginTop:10,marginLeft:5},children:Object(d.jsx)("label",{style:{marginLeft:10,fontWeight:"bold",fontSize:20},children:"Reset Password"})}),Object(d.jsxs)("div",{style:{marginLeft:30,marginTop:20},children:[Object(d.jsxs)("div",{style:{marginBottom:10},children:[Object(d.jsx)("label",{className:"App-label",children:"Password"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"password",className:"App-input",value:b,onChange:function(e){e.target.value.length<6?U("short password"):e.target.value!==O?U("passwords do not match."):U(""),p(e.target.value)}}),Object(d.jsx)("br",{})]}),Object(d.jsx)("label",{className:"App-label",children:"Confirm Password"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"password",className:"App-input",value:O,onChange:function(e){b.length<6?U("short password"):b!==e.target.value?U("passwords do not match."):U(""),v(e.target.value)}}),Object(d.jsx)("div",{style:{color:"#a32121",marginTop:20,fontSize:14},children:D}),Object(d.jsx)("div",{style:{marginTop:40},children:Object(d.jsx)("button",{className:"button",onClick:Object(f.a)(x.a.mark((function e(){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,fetch("".concat("https://mansourapp.com","/api/web/resetpasswordtoken"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:b,token:J})}).then((function(e){return e.text()})).then((function(e){return L(!1),e})).catch((function(e){L(!1)}));case 3:s=e.sent,e.t0=s,e.next="saved"===e.t0?7:"failed"===e.t0?9:11;break;case 7:return I(!0),e.abrupt("return");case 9:case 11:return t.push("/send"),e.abrupt("return");case 13:case"end":return e.stop()}}),e)}))),disabled:!(!D&&0!==b.length),children:"Reset"})})]})]})}):Object(d.jsxs)("div",{style:{flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",width:c-63,height:a-50,marginTop:50,marginBottom:50},children:[Object(d.jsx)("img",{src:T,alt:"invalid",style:{width:147,height:100,marginBottom:10}}),Object(d.jsx)("div",{style:{marginBottom:0},children:Object(d.jsx)("label",{style:{color:"#b6b6b6",fontSize:20,fontWeight:"bold"},children:"404"})}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{style:{color:"#b6b6b6",fontSize:14},children:"Page Not Found"})})]})}s(31).config();var z=Object(P.css)(w||(w=Object(g.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));function F(){var e=y(),t=e.width,s=e.height,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(!1),j=Object(l.a)(o,2),h=j[0],u=j[1],b=Object(n.useState)(!1),p=Object(l.a)(b,2),m=p[0],g=p[1],O=Object(n.useState)(""),v=Object(l.a)(O,2),w=v[0],S=v[1],k=Object(n.useState)(""),T=Object(l.a)(k,2),P=T[0],I=T[1];return m?Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:t,height:s},children:[" ",Object(d.jsx)("div",{children:Object(d.jsx)(B.a,{color:"#fff",loading:m,css:z,size:100})})]}):h?Object(d.jsxs)("div",{style:{flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",width:t-50,height:s-50},children:[Object(d.jsx)("img",{src:C,alt:"Success",style:{width:100,height:100,marginBottom:20}}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{style:{color:"green",fontSize:16},children:"Thanks! If your username and email address match, you'll get an email with a link to reset your password shortly.."})})]}):Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{style:{marginTop:10,marginLeft:5},children:Object(d.jsx)("label",{style:{marginLeft:10,fontWeight:"bold",fontSize:25},children:"Reset Password"})}),Object(d.jsxs)("div",{style:{marginLeft:30,marginTop:20},children:[Object(d.jsxs)("div",{style:{marginBottom:10},children:[Object(d.jsx)("label",{className:"App-label",children:"Username"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:"App-input",value:r,onChange:function(e){i(e.target.value)}}),Object(d.jsx)("br",{})]}),Object(d.jsx)("label",{className:"App-label",children:"Email"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:"App-input",value:w,onChange:function(e){e.target.value.match(/^\S+@\S+\.\S+$/)?I(""):I("invalid email"),S(e.target.value)}}),Object(d.jsx)("div",{style:{color:"#a32121",marginTop:20,fontSize:14},children:P}),Object(d.jsx)("div",{style:{marginTop:40},children:Object(d.jsx)("button",{className:"button",disabled:!(r&&!P&&w.length>0),onClick:Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,fetch("".concat("https://mansourapp.com","/api/web/marketforgotpassword"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r,email:w,ip:21})}).then((function(e){return e.text()})).then((function(e){return g(!1),e})).catch((function(e){g(!1)}));case 3:t=e.sent,e.t0=t,e.next="Sent"===e.t0?7:9;break;case 7:return u(!0),e.abrupt("return");case 9:return I(JSON.parse(t).error),e.abrupt("return");case 11:case"end":return e.stop()}}),e)}))),children:"Send"})})]})]})})}function L(){var e=y(),t=e.height,s=e.width;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",width:s-50,height:t-50},children:[Object(d.jsx)("img",{src:C,alt:"Success",style:{width:100,height:100,marginBottom:20}}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{style:{color:"#b6b6b6",fontSize:16},children:"Thanks! If your username and email address match, you'll get an email with a link to reset your password shortly.."})})]})})}function M(e){var t=e.history;return Object(n.useEffect)((function(){var e=function(e){for(var t=window.location.search.substring(1).split("&"),s=0;s<t.length;s++){var n=t[s].split("=");if(n[0]===e)return n[1]}return!1}("token");e&&t.push("/reset?token=".concat(e))}),[]),Object(d.jsxs)("div",{class:"row d-flex App-home",style:{flex:1,alignItems:"center",justifyContent:"center"},children:[Object(d.jsxs)("div",{class:"col-12 col-sm-5  d-flex .App-home2",style:{alignItems:"center",justifyContent:"space-evenly",backgroundColor:"#dedede"},children:[Object(d.jsx)("img",{src:"a1.png",alt:"",class:"App-img",style:{width:"10%",height:"20%"}}),Object(d.jsx)("img",{src:"a2.png",alt:"",class:"App-img ",style:{width:"15%",height:"30%"}}),Object(d.jsx)("img",{src:"a3.png",alt:"",class:"App-img ",style:{width:"20%",height:"40%"}})]}),Object(d.jsx)("div",{class:"col col-sm-2 d-flex flex-column"}),Object(d.jsxs)("div",{class:"col-12 col-sm-5 d-flex flex-column",style:{alignItems:"center",justifyContent:"center"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{class:"txt",style:{fontFamily:"Roboto",justifyContent:"flex-start"},children:"Shop your city within a few minutes."})}),Object(d.jsx)("div",{class:"d-flex",style:{alignItems:"center",marginBottom:20,justifyContent:"flex-start"},children:Object(d.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.mansourclient",children:Object(d.jsx)("img",{alt:"",src:"256x256-android.png",class:"App-getit"})})}),Object(d.jsx)("div",{class:"d-flex",style:{alignItems:"center",justifyContent:"flex-start"},children:Object(d.jsx)("a",{href:"https://apps.apple.com/us/app/mansour/id1589666276#?platform=iphone",children:Object(d.jsx)("img",{alt:"",src:"256x256-ios.png",class:"App-getit"})})})]})]})}function W(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),r=Object(l.a)(c,2),i=r[0],o=r[1],j=Object(n.useState)(""),h=Object(l.a)(j,2),u=h[0],b=h[1],p=Object(n.useState)(!1),m=Object(l.a)(p,2),g=m[0],O=m[1],y=Object(n.useState)(""),v=Object(l.a)(y,2),w=v[0],S=v[1];return Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{class:"form-group",style:{marginBottom:60,marginTop:100},children:[Object(d.jsx)("h1",{style:{display:"flex",marginTop:20,marginBottom:30,alignItems:"center",justifyContent:"center"},children:"Contact Us"}),Object(d.jsx)("text",{class:"contact-header",children:"Fill the below contact form or email us at info@mansourapp.com."})]}),Object(d.jsxs)("div",{class:"form-group",style:{marginBottom:30},children:[Object(d.jsx)("label",{for:"exampleInputEmail1",children:"Name"}),Object(d.jsx)("input",{type:"text",class:"form-control",value:s,onChange:function(e){console.log(e.nativeEvent.data),a(e.target.value)},id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter name"})]}),Object(d.jsxs)("div",{class:"form-group",style:{marginBottom:30},children:[Object(d.jsx)("label",{for:"exampleInputPassword1",children:"Email"}),Object(d.jsx)("input",{type:"email",value:i,onChange:function(e){o(e.target.value)},class:"form-control",id:"exampleInputPassword1",placeholder:"Enter email"}),Object(d.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{class:"form-group",style:{marginBottom:30},children:[Object(d.jsx)("label",{for:"exampleFormControlTextarea1",children:"Message"}),Object(d.jsx)("textarea",{class:"form-control",value:u,onChange:function(e){b(e.target.value)},id:"exampleFormControlTextarea1",rows:"3"})]}),g?Object(d.jsx)("div",{class:"form-group",style:{marginBottom:30},children:Object(d.jsx)("div",{class:"spinner-border text-primary",role:"status"})}):null,"failed"===w?Object(d.jsx)("div",{class:"form-group",style:{marginBottom:30},children:Object(d.jsx)("div",{class:"alert alert-danger",role:"alert",children:"Couldn't send your message."})}):"sent"===w?Object(d.jsx)("div",{class:"alert alert-success",role:"alert",children:"Thank you, your message has been sent successfully."}):null,Object(d.jsx)("button",{type:"button",class:"btn btn-primary",style:{marginBottom:50},disabled:!(s&&u&&i.match(/^\S+@\S+\.\S+$/)),onClick:Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("".concat("https://mansourapp.com","/api/logs/message"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:i,message:u})}).then((function(e){return e.text()})).then((function(e){return O(!1),S("sent"),e})).catch((function(e){O(!1),S("failed")}));case 3:case"end":return e.stop()}}),e)}))),children:"Submit"})]})}function D(){return Object(d.jsxs)("div",{class:"row",style:{marginBottom:75,marginTop:75},children:[Object(d.jsx)("div",{class:"col-sm-6",children:Object(d.jsxs)("div",{class:"card mb-4 rounded-3 shadow-sm",children:[Object(d.jsx)("div",{class:"card-header py-3",children:"Mansour for Users"}),Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("img",{src:"mansour.png",alt:"Mansour",style:{width:150,height:150,marginBottom:10}}),Object(d.jsx)("div",{class:"d-flex",style:{alignItems:"center",marginBottom:10,justifyContent:"flex-start"},children:Object(d.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.mansourclient",children:Object(d.jsx)("img",{alt:"",src:"256x256-android.png",class:"App-getit2"})})}),Object(d.jsx)("div",{class:"d-flex",style:{alignItems:"center",justifyContent:"flex-start"},children:Object(d.jsx)("a",{href:"https://apps.apple.com/us/app/mansour/id1589666276#?platform=iphone",children:Object(d.jsx)("img",{alt:"",src:"256x256-ios.png",class:"App-getit2"})})})]})]})}),Object(d.jsx)("div",{class:"col-sm-6",children:Object(d.jsxs)("div",{class:"card mb-4 rounded-3 shadow-sm",children:[Object(d.jsx)("div",{class:"card-header py-3",children:"Mansour for Businesses"}),Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("img",{src:"mansour_market.png",style:{width:150,height:150,marginBottom:10},alt:"Mansour for businesses"}),Object(d.jsx)("div",{class:"d-flex",style:{alignItems:"center",justifyContent:"flex-start",marginBottom:10},children:Object(d.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.masourmarket",children:Object(d.jsx)("img",{alt:"",src:"256x256-android.png",class:"App-getit2"})})}),Object(d.jsx)("div",{class:"d-flex",style:{alignItems:"center",justifyContent:"flex-start"},children:Object(d.jsx)("a",{href:"https://apps.apple.com/us/app/mansour-business/id1590509030",children:Object(d.jsx)("img",{alt:"",src:"256x256-ios.png",class:"App-getit2"})})})]})]})})]})}function U(){Object(b.f)();return Object(d.jsxs)("div",{class:"row",style:{marginTop:100,marginBottom:50},children:[Object(d.jsx)("div",{class:"col-sm-6",children:Object(d.jsxs)("div",{class:"card mb-6 rounded-3 shadow-sm",children:[Object(d.jsx)("div",{class:"card-header py-3",children:Object(d.jsx)("h4",{class:"my-0 fw-normal",children:"Free"})}),Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsxs)("h1",{class:"card-title pricing-card-title",children:["$0",Object(d.jsx)("small",{class:"text-muted fw-light",children:"/yr"})]}),Object(d.jsxs)("ul",{class:"list-unstyled mt-3 mb-4",children:[Object(d.jsx)("li",{children:"Full Access to Mansour for Businessess App"}),Object(d.jsx)("li",{children:"One year free trial"})]})]})]})}),Object(d.jsx)("div",{class:"col-sm-6",children:Object(d.jsxs)("div",{class:"card mb-6 rounded-3 shadow-sm",children:[Object(d.jsx)("div",{class:"card-header py-3",children:Object(d.jsx)("h4",{class:"my-0 fw-normal",children:"Basic"})}),Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsxs)("h1",{class:"card-title pricing-card-title",children:["$14.50",Object(d.jsx)("small",{class:"text-muted fw-light",children:"/mo"})]}),Object(d.jsxs)("ul",{class:"list-unstyled mt-3 mb-4",children:[Object(d.jsx)("li",{children:"Full Access to Mansour for Businesses App"}),Object(d.jsx)("li",{children:"In-App Purchese"})]})]})]})})]})}function H(){return Object(d.jsxs)("div",{style:{marginTop:100,marginBottom:50},children:[Object(d.jsx)("h1",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:40},children:"Privacy Policy"})," ",Object(d.jsx)("p",{children:"Mansour Technology built the Mansour app as a Free app. This SERVICE is provided by Mansour Technology at no cost and is intended for use as is."})," ",Object(d.jsx)("p",{children:"This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service."})," ",Object(d.jsx)("p",{children:"If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy."})," ",Object(d.jsx)("p",{children:"The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Mansour unless otherwise defined in this Privacy Policy."})," ",Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Information Collection and Use"})})," ",Object(d.jsx)("p",{children:"For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to IP Address. The information that we request will be retained by us and used as described in this privacy policy."}),Object(d.jsx)("div",{}),Object(d.jsx)("p",{children:"The app does use third party services that may collect information used to identify you."})," ",Object(d.jsx)("p",{children:"Link to privacy policy of third party service providers used by the app"}),Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Log Data"})})," ",Object(d.jsx)("p",{children:"We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201cIP\u201d) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics."})," ",Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Cookies"})})," ",Object(d.jsx)("p",{children:"Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory."})," ",Object(d.jsx)("p",{children:"This Service does not use these \u201ccookies\u201d explicitly. However, the app may use third party code and libraries that use \u201ccookies\u201d to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."})," ",Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Service Providers"})})," ",Object(d.jsx)("p",{children:"We may employ third-party companies and individuals due to the following reasons:"})," ",Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"To facilitate our Service;"})," ",Object(d.jsx)("li",{children:"To provide the Service on our behalf;"})," ",Object(d.jsx)("li",{children:"To perform Service-related services; or"})," ",Object(d.jsx)("li",{children:"To assist us in analyzing how our Service is used."})]})," ",Object(d.jsx)("p",{children:"We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."})," ",Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Security"})})," ",Object(d.jsx)("p",{children:"We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."})," ",Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Links to Other Sites"})})," ",Object(d.jsx)("p",{children:"This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."})," ",Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Children\u2019s Privacy"})})," ",Object(d.jsx)("p",{children:"These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions."})," ",Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Changes to This Privacy Policy"})})," ",Object(d.jsx)("p",{children:"We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page."})," ",Object(d.jsx)("p",{children:"This policy is effective as of 2021-05-28"})," ",Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:"Contact Us"})})," ",Object(d.jsx)("p",{children:"If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@mansourapp.com."})]})}function R(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),r=Object(l.a)(c,2),i=r[0],o=r[1],j=Object(n.useState)(!1),h=Object(l.a)(j,2),u=h[0],b=h[1],p=Object(n.useState)(""),m=Object(l.a)(p,2),g=m[0],O=m[1];return Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{class:"form-group",style:{marginBottom:30},children:[Object(d.jsx)("label",{for:"exampleInputEmail1",children:"Username"}),Object(d.jsx)("input",{type:"text",class:"form-control",value:s,onChange:function(e){console.log(e.nativeEvent.data),a(e.target.value)},id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Username"})]}),Object(d.jsxs)("div",{class:"form-group",style:{marginBottom:30},children:[Object(d.jsx)("label",{for:"exampleInputPassword1",children:"Email"}),Object(d.jsx)("input",{type:"email",value:i,onChange:function(e){o(e.target.value)},class:"form-control",id:"exampleInputPassword1",placeholder:"Enter email"})]}),u?Object(d.jsx)("div",{class:"form-group",style:{marginBottom:30},children:Object(d.jsx)("div",{class:"spinner-border text-primary",role:"status"})}):null,g?Object(d.jsx)("div",{class:"form-group",style:{marginBottom:30},children:Object(d.jsx)("div",{class:"alert alert-danger",role:"alert",children:g})}):null,Object(d.jsxs)("button",{type:"button",style:{borderRadius:30,padding:0},disabled:!s||!i.match(/^\S+@\S+\.\S+$/),onClick:Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(""),b(!0),console.log("gonna to fetch ".concat("https://mansourapp.com","/api/payment/marketcreatepayment")),e.next=5,fetch("".concat("https://mansourapp.com","/api/payment/marketcreatepayment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:s,email:i})}).then((function(e){return e.json()})).then((function(e){if(e.error)console.log("errrror",e.error),b(!1),O("Payment failed, Try again later.");else if(e.url)return b(!1),window.location.replace(e.url),null})).catch((function(e){console.log(e),b(!1),O("failed",e)}));case 5:case"end":return e.stop()}}),e)}))),children:[Object(d.jsx)("img",{border:"0",src:"https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif",alt:"Buy Now"}),Object(d.jsx)("img",{alt:"",border:"0",width:"1",height:"1",src:"https://www.paypalobjects.com/en_US/i/scr/pixel.gif"})]})]})}function J(){var e=y(),t=e.height,s=e.width;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",width:s-50,height:t-50},children:[Object(d.jsx)("img",{src:C,alt:"Success",style:{width:100,height:100,marginBottom:20}}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{style:{color:"#9d9d9d",fontSize:16},children:"Thank you! Successful Payment."})})]})})}function _(){var e=y(),t=e.height,s=e.width;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{flexDirection:"column",display:"flex",alignItems:"center",justifyContent:"center",width:s-50,height:t-50},children:[Object(d.jsx)("img",{src:T,alt:"Success",style:{width:150,marginBottom:20}}),Object(d.jsx)("div",{children:Object(d.jsx)("label",{style:{color:"#e20000",fontSize:16},children:"Payment failed. Try again"})})]})})}s(31).config();s(74);function $(){var e=Object(b.f)(),t=Object(n.useContext)(u).addToken;return Object(n.useEffect)((function(){var e=function(e){var t=window.location.search.substring(1).split("&");console.log(t);for(var s=0;s<t.length;s++){var n=t[s].split("=");if(console.log(n),n[0]===e)return n[1]}return!1}("token");console.log("x : ",e),t(e)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{class:"navbar fixed-top navbar-dark bg-dark",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("img",{src:"logo.png",alt:"",class:"nav-item",width:"40",height:"40"}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsx)("div",{class:"collapse navbar-collapse",id:"navbarToggleExternalContent",children:Object(d.jsxs)("div",{class:"navbar-nav",children:[Object(d.jsx)(p.b,{exact:!0,to:"/",class:"nav-item nav-link .App-link","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",onClick:function(){e.push("/")},children:"Home"}),Object(d.jsx)(p.b,{exact:!0,to:"/apps",class:"nav-item nav-link .App-link","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",onClick:function(){e.push("/apps")},children:"Apps"}),Object(d.jsx)(p.b,{exact:!0,to:"/contact",class:"nav-item nav-link .App-link","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",onClick:function(){e.push("/contact")},children:"Contact Us"}),Object(d.jsx)(p.b,{exact:!0,to:"/privacy",class:"nav-item nav-link .App-link","data-bs-toggle":"collapse","data-bs-target":".navbar-collapse.show",onClick:function(){e.push("/privacy")},children:"Privacy"})]})})]})}),Object(d.jsx)("div",{class:"container-fluid d-flex  justify-content-start align-items-center  App-fill",style:{backgroundColor:"#dedede"},children:Object(d.jsx)("div",{class:"container-fluid App-container",style:{backgroundColor:"#dedede"},children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/paypalpayment",exact:!0,component:R}),Object(d.jsx)(b.a,{path:"/",exact:!0,component:M}),Object(d.jsx)(b.a,{path:"/pricing",exact:!0,component:U}),Object(d.jsx)(b.a,{path:"/apps",exact:!0,component:D}),Object(d.jsx)(b.a,{path:"/contact",exact:!0,component:W}),Object(d.jsx)(b.a,{path:"/privacy",exact:!0,component:H}),Object(d.jsx)(b.a,{path:"/reset",exact:!0,component:N}),Object(d.jsx)(b.a,{path:"/send",exact:!0,component:F}),Object(d.jsx)(b.a,{path:"/thanks",exact:!0,component:L}),Object(d.jsx)(b.a,{path:"/successfulpayment",exact:!0,component:J}),Object(d.jsx)(b.a,{path:"/failedpayment",exact:!0,component:_})]})})}),Object(d.jsx)("nav",{class:"navbar fixed-bottom navbar-light bg-dark",children:Object(d.jsx)("div",{class:"container-fluid d-flex",children:Object(d.jsxs)("div",{class:"col",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[Object(d.jsx)("text",{class:"nav-item d-flex justify-content-center App-footer",children:"\xa9 2021 Mansour Technology 470 Noor Ave S San Francisco, CA 94080"}),Object(d.jsx)("a",{href:"https://twitter.com/mansour76813891",children:Object(d.jsx)(i.a,{color:"#979a9a"})})]})})})]})}var q=function(){return Object(d.jsx)(h,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)($,{})})})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,76)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),Y()}},[[75,1,2]]]);
//# sourceMappingURL=main.0d50c69d.chunk.js.map