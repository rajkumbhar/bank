(this.webpackJsonpbank=this.webpackJsonpbank||[]).push([[0],{48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(30),c=t.n(s),r=t(7),i=t.n(r),l=t(13),o=t(18),d=t(16),u=t(9),b=t(10),j=t(19),m=t(28);m.a.initializeApp({apiKey:"AIzaSyBiXanQt-1gh3NiUYVc2tDDSrvJT-xHWJo",authDomain:"new-india-bank.firebaseapp.com",projectId:"new-india-bank",storageBucket:"new-india-bank.appspot.com",messagingSenderId:"270442361083",appId:"1:270442361083:web:788450cf467989354e805e"});var p=m.a,h=t(2);var x=function(){var e=!0;null===localStorage.getItem("token")&&(e=!1);var a=Object(n.useState)({username:"",password:"",loggedIn:e}),t=Object(u.a)(a,2),s=t[0],c=t[1];function r(e){var a=e.target,t=a.name,n=a.value;c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},t,n))}))}function m(){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(i.a.mark((function e(){var a,t,n,c,r,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.username,t=s.password,n=p.database().ref("RegistrationTable"),e.next=4,n.once("value");case 4:return c=e.sent,e.next=7,c.val();case 7:r=e.sent,l=0,e.t0=i.a.keys(r);case 10:if((e.t1=e.t0()).done){e.next=22;break}if(o=e.t1.value,l+=1,a!==r[o].details.username||t!==r[o].details.password){e.next=18;break}return localStorage.setItem("loggedInUser",r[o].details.username),e.abrupt("return",!0);case 18:if(l!==c.numChildren()){e.next=20;break}return e.abrupt("return",!1);case 20:e.next=10;break;case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:e.sent?c({loggedIn:!0}):alert("username or password wrong"),a.preventDefault();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.loggedIn?(localStorage.setItem("token","weuifg2232gu23gy"),Object(h.jsx)(b.a,{to:"/home"})):Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"login-form",children:[Object(h.jsx)("h1",{className:"h1",children:"User Login"}),Object(h.jsx)("input",{className:"l-input",name:"username",id:"username",type:"text",placeholder:"Username",value:s.username,onChange:r}),Object(h.jsx)("input",{className:"l-input",name:"password",id:"password",type:"password",placeholder:"Password",value:s.password,onChange:r}),Object(h.jsx)("a",{href:"#",className:"button",onClick:function(e){return O.apply(this,arguments)},children:"Login"}),Object(h.jsx)(j.b,{className:"button",to:"/registration",children:"Open New Account"})]})})};var O=function(e){var a=localStorage.getItem("loggedInUser"),t=(new Date).toDateString(),s=Object(n.useState)(!1),c=Object(u.a)(s,2),r=c[0],b=c[1],j=Object(n.useState)({amount:"",cardNumber:"",expiryDate:"",CVV:"",nameOnCard:"",note:"",username:a,date:t}),m=Object(u.a)(j,2),x=m[0],O=m[1],N={date:t,pType:"Deposit",accountNumber:!1,benificiaryCardNumber:x.cardNumber,userNote:x.note,sentAmount:"0",addAmount:x.amount};function v(e){var a=e.target,t=a.name,n=a.value;O((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},t,n))}))}return Object(n.useEffect)((function(){var t=p.database().ref("Transaction/AddMoneyTransaction/"+a),n=p.database().ref("Transaction/AccountStatement/"+a);function s(){return(s=Object(l.a)(i.a.mark((function s(c,l){var o,d,u,j,m;return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,!r){s.next=31;break}return o=p.database().ref("RegistrationTable"),s.next=5,o.once("value");case 5:return d=s.sent,s.next=8,d.val();case 8:u=s.sent,j=0,s.t0=i.a.keys(u);case 11:if((s.t1=s.t0()).done){s.next=31;break}if(m=s.t1.value,a!==u[m].details.username){s.next=29;break}return j=parseInt(u[m].details.amount)+parseInt(x.amount),s.next=17,p.database().ref("RegistrationTable/"+m+"/details").update({amount:j});case 17:x.balance=j,N.balance=j,n.push(N),t.push(x),b(!1),e.seeAmount(),x.amount="",x.cardNumber="",x.expiryDate="",x.CVV="",x.nameOnCard="",x.note="";case 29:s.next=11;break;case 31:s.next=36;break;case 33:s.prev=33,s.t2=s.catch(0),"AbortError"===s.t2.name||b(!1);case 36:case"end":return s.stop()}}),s,null,[[0,33]])})))).apply(this,arguments)}return function(e,a){s.apply(this,arguments)}(),function(){return b(!1)}}),[r,x.amount,x,a,e]),Object(h.jsx)("div",{className:"r-body",children:Object(h.jsxs)("div",{className:"r-container",children:[Object(h.jsx)("div",{className:"r-title",children:"Add Money"}),Object(h.jsxs)("form",{action:"#",children:[Object(h.jsxs)("div",{className:"r-user-details",children:[Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Amount"}),Object(h.jsx)("input",{className:"r-input",type:"number",name:"amount",id:"amount",onChange:v,value:x.amount,placeholder:"Amount",autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Card Number"}),Object(h.jsx)("input",{className:"r-input",type:"number",name:"cardNumber",id:"cardNumber",onChange:v,value:x.cardNumber,placeholder:"Card Number",autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Expiry Date"}),Object(h.jsx)("input",{className:"r-input",type:"date",name:"expiryDate",id:"expiryDate",onChange:v,value:x.expiryDate,placeholder:"Expiry Date",autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"CVV Number"}),Object(h.jsx)("input",{className:"r-input",type:"numebr",name:"CVV",id:"CVV",onChange:v,value:x.CVV,placeholder:"CVV Number",autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Name on Card"}),Object(h.jsx)("input",{className:"r-input",type:"text",name:"nameOnCard",id:"nameOnCard",onChange:v,value:x.nameOnCard,placeholder:"Name On card",autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Note"}),Object(h.jsx)("input",{className:"r-input",type:"text",name:"note",id:"note",onChange:v,value:x.note,placeholder:"Note",autoComplete:"nope"})]})]}),Object(h.jsx)("div",{className:"r-button",children:Object(h.jsx)("input",{type:"submit",name:"",onClick:function(e){e.preventDefault(),""===x.amount||""===x.cardNumber||""===x.expiryDate||""===x.CVV||""===x.nameOnCard||""===x.note?alert("Please Enter all the values"):x.amount<=0?alert("Amount can not be zero or less than that"):16!==x.cardNumber.length?alert("Card number should be 16 digit"):3!==x.CVV.length?alert("CVV should be 3 digit"):(b(!0),alert("Money Added Successfully"))},value:"Add Money"})})]})]})})};var N=function(e){var a=localStorage.getItem("loggedInUser"),t=(new Date).toDateString(),s=Object(n.useState)(!1),c=Object(u.a)(s,2),r=c[0],b=c[1],j=Object(n.useState)({bName:"",bAccNumber:"",amount:"",bPhoneNumber:"",cBAccNumber:"",pType:"",note:"",user:a,date:t}),m=Object(u.a)(j,2),x=m[0],O=m[1],N={date:t,pType:"Withdrawal",accountNumber:x.bAccNumber,benificiaryCardNumber:!1,userNote:x.note,sentAmount:x.amount,addAmount:"0"};function v(e){var a=e.target,t=a.name,n=a.value;O((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},t,n))}))}var g=p.database().ref("Transaction/SendMoneyTransaction/"+a),f=p.database().ref("Transaction/AccountStatement/"+a);return Object(n.useEffect)((function(){function t(){return(t=Object(l.a)(i.a.mark((function t(n,s){var c,l,o,d,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!r){t.next=31;break}return c=p.database().ref("RegistrationTable"),t.next=5,c.once("value");case 5:return l=t.sent,t.next=8,l.val();case 8:o=t.sent,d=0,t.t0=i.a.keys(o);case 11:if((t.t1=t.t0()).done){t.next=31;break}if(u=t.t1.value,a!==o[u].details.username){t.next=29;break}return d=o[u].details.amount-x.amount,t.next=17,p.database().ref("RegistrationTable/"+u+"/details").update({amount:d});case 17:x.balance=d,N.balance=d,f.push(N),g.push(x),b(!1),e.seeAmount(),x.bName="",x.bAccNumber="",x.cBAccNumber="",x.bPhoneNumber="",x.note="",x.amount="";case 29:t.next=11;break;case 31:t.next=36;break;case 33:t.prev=33,t.t2=t.catch(0),"AbortError"===t.t2.name||b(!1);case 36:case"end":return t.stop()}}),t,null,[[0,33]])})))).apply(this,arguments)}return function(e,a){t.apply(this,arguments)}(),function(){return b(!1)}}),[r,x.amount,a,e]),Object(h.jsx)("div",{className:"r-body",children:Object(h.jsxs)("div",{className:"r-container",children:[Object(h.jsx)("div",{className:"r-title",children:"Send Money"}),Object(h.jsxs)("form",{action:"#",children:[Object(h.jsxs)("div",{className:"r-user-details",children:[Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Beneficiary name"}),Object(h.jsx)("input",{className:"r-input",type:"text",placeholder:"Beneficiary name",name:"bName",value:x.bName,onChange:v,autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Beneficiary Account Number"}),Object(h.jsx)("input",{className:"r-input",type:"number",placeholder:"Beneficiary Account Number",name:"bAccNumber",value:x.bAccNumber,onChange:v,autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Confirm Account Number"}),Object(h.jsx)("input",{className:"r-input",type:"number",placeholder:"Confirm Account Number",name:"cBAccNumber",value:x.cBAccNumber,onChange:v,autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Amount"}),Object(h.jsx)("input",{className:"r-input",type:"number",placeholder:"Amount",name:"amount",value:x.amount,onChange:v,autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Phone Number"}),Object(h.jsx)("input",{className:"r-input",type:"numeber",placeholder:"Phone Number",name:"bPhoneNumber",value:x.bPhoneNumber,onChange:v,autoComplete:"nope"})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Note"}),Object(h.jsx)("input",{className:"r-input",type:"text",placeholder:"Note",name:"note",value:x.note,onChange:v,autoComplete:"nope"})]})]}),Object(h.jsxs)("div",{className:"r-gender-details",children:[Object(h.jsx)("input",{type:"radio",name:"pType",id:"NEFT",value:"NEFT",onChange:v}),Object(h.jsx)("input",{type:"radio",name:"pType",id:"RTGS",value:"RTGS",onChange:v}),Object(h.jsx)("input",{type:"radio",name:"pType",id:"IMPS",value:"IMPS",onChange:v}),Object(h.jsx)("span",{className:"r-gender-title",children:"Payment Type"}),Object(h.jsxs)("div",{className:"r-catagory",children:[Object(h.jsxs)("label",{htmlFor:"NEFT",children:[Object(h.jsx)("span",{className:"r-dot one"}),Object(h.jsx)("span",{className:"r-gender",children:"NEFT"})]}),Object(h.jsxs)("label",{htmlFor:"RTGS",children:[Object(h.jsx)("span",{className:"r-dot two"}),Object(h.jsx)("span",{className:"r-gender",children:"RTGS"})]}),Object(h.jsxs)("label",{htmlFor:"IMPS",children:[Object(h.jsx)("span",{className:"r-dot three"}),Object(h.jsx)("span",{className:"r-gender",children:"IMPS"})]})]})]}),Object(h.jsx)("div",{className:"r-button",children:Object(h.jsx)("input",{type:"submit",name:"",onClick:function(e){""===x.bName||""===x.bAccNumber||""===x.cBAccNumber||""===x.amount||""===x.note||""===x.pType?alert("Please Enter all the details"):16!==x.bAccNumber.length?alert("Please enter valid account number, should be 16 digit"):x.cBAccNumber!==x.bAccNumber?alert("Both account number input field should match"):x.amount<=0?alert("Amount Can not be 0"):(b(!0),alert("Money Sent")),e.preventDefault()},value:"Send Money"})})]})]})})};var v=function(){var e=Object(n.useState)(),a=Object(u.a)(e,2),t=a[0],s=a[1],c=Object(n.useState)(!1),r=Object(u.a)(c,2),b=r[0],m=r[1],x=Object(n.useState)([]),O=Object(u.a)(x,2),N=O[0],v=O[1],g=Object(n.useState)(!0),f=Object(u.a)(g,2),y=f[0],C=f[1],S=Object(n.useState)({accType:"",name:"",phoneNumber:"",DOB:"",address:"",citizenship:"",maritalStatus:"",occupation:"",aadharCard:"",panCard:"",username:"",password:"",gender:"",amount:"",accNumber:""}),k=Object(u.a)(S,2),A=k[0],w=k[1];function D(e){var a=e.target,t=a.name,n=a.value;w((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},t,n))}))}var T=p.database().ref("RegistrationTable");function I(){return(I=Object(l.a)(i.a.mark((function e(a){var n,s,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),""!==A.accType&&""!==A.name&&""!==A.phoneNumber&&""!==A.DOB&&""!==A.address&&""!==A.citizenship&&""!==A.maritalStatus&&""!==A.occupation&&""!==A.aadharCard&&""!==A.panCard&&""!==A.username&&""!==A.password&&""!==A.gender&&""!==A.amount){e.next=5;break}alert("Please fill all the details"),e.next=48;break;case 5:if(A.username!==t[0]){e.next=9;break}alert("Please Choose Different Username"),e.next=48;break;case 9:if(!(A.phoneNumber.length<10)){e.next=13;break}alert("Enter Valid Phone number"),e.next=48;break;case 13:if(!1!==b){e.next=17;break}alert("Your age should be more than 18 years"),e.next=48;break;case 17:if(12===A.aadharCard.length){e.next=21;break}alert("Enter Valid Aadhar Card Number, 12 digits required"),e.next=48;break;case 21:if(10===A.panCard.length){e.next=25;break}alert("Enter Valid Pan Card Number, 10 digits required"),e.next=48;break;case 25:if(!(A.password.length<7)){e.next=29;break}alert("Password length should be more than 7"),e.next=48;break;case 29:if(!(A.amount<5e3)){e.next=33;break}alert("Amount should be more than Rs. 5000/-"),e.next=48;break;case 33:e.prev=33,n=!1;case 35:if(!1!==n){e.next=44;break}return s=Math.floor(1e12*Math.random()+1),c=s+"7875",e.next=40,N;case 40:-1===e.sent.indexOf(c)&&(n=!0,A.accNumber=c,r={details:A},T.push(r),alert("Successfully Registered"),alert("Please Login")),e.next=35;break;case 44:e.next=48;break;case 46:e.prev=46,e.t0=e.catch(33);case 48:a.preventDefault();case 49:case"end":return e.stop()}}),e,null,[[33,46]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=p.database().ref("RegistrationTable");if(y){var a=document.getElementById("DOB").value,t=new Date(a),n=t.getFullYear(),c=t.getMonth(),r=t.getDate(),o=parseInt(n)+18,d=new Date;d.getFullYear()>o?m(!0):d.getFullYear()===o?d.getMonth()>c?m(!0):d.getMonth()===c?d.getDate()>r?m(!0):(d.getDate(),m(!1)):m(!1):m(!1)}var u="";function b(){return(b=Object(l.a)(i.a.mark((function a(t,n){var c,r,l,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!y){a.next=13;break}return a.next=4,e.once("value");case 4:return c=a.sent,a.next=7,c.val();case 7:for(o in u=a.sent,r=[],l=[],u)l.push(u[o].details.accNumber),A.username===u[o].details.username&&r.push(u[o].details.username);v(l),s(r);case 13:a.next=17;break;case 15:a.prev=15,a.t0=a.catch(0);case 17:case"end":return a.stop()}}),a,null,[[0,15]])})))).apply(this,arguments)}return function(e,a){b.apply(this,arguments)}(),function(){return C(!1)}}),[y,A.username,A.DOB]),Object(h.jsx)("div",{className:"r-body",children:Object(h.jsxs)("div",{className:"r-container",children:[Object(h.jsx)("div",{className:"r-title",children:"Registration"}),Object(h.jsxs)("form",{action:"#",children:[Object(h.jsxs)("div",{className:"r-user-details",children:[Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Account Type"}),Object(h.jsxs)("select",{onChange:D,value:A.accType,className:"r-option",name:"accType",id:"accType",required:!0,children:[Object(h.jsx)("option",{value:"",defaultValue:!0,disabled:!0,children:"Select Account Type"}),Object(h.jsx)("option",{value:"Savings",children:"Savings"}),Object(h.jsx)("option",{value:"Current",children:"Current"})]})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Full Name"}),Object(h.jsx)("input",{onChange:D,value:A.name,name:"name",className:"r-input",type:"text",placeholder:"Enter Full Name",autoComplete:"nope",required:!0})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Phone Number"}),Object(h.jsx)("input",{onChange:D,value:A.phoneNumber,name:"phoneNumber",className:"r-input",type:"number",placeholder:"Phone Number",autoComplete:"nope",required:!0})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Date of Birth"}),Object(h.jsx)("input",{onChange:D,value:A.DOB,name:"DOB",id:"DOB",className:"r-input",type:"date",placeholder:"Date of Birth",autoComplete:"nope",required:!0})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Address"}),Object(h.jsx)("input",{onChange:D,value:A.address,name:"address",className:"r-input",type:"text",placeholder:"Address",autoComplete:"nope",required:!0})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Citizenship"}),Object(h.jsxs)("select",{onChange:D,value:A.citizenship,className:"r-option",name:"citizenship",id:"citizenship",required:!0,children:[Object(h.jsx)("option",{value:"",defaultValue:!0,disabled:!0,children:"Select Country"}),Object(h.jsx)("option",{value:"India",children:"India"}),Object(h.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Marital Status"}),Object(h.jsxs)("select",{onChange:D,value:A.maritalStatus,className:"r-option",name:"maritalStatus",id:"maritalStatus",required:!0,children:[Object(h.jsx)("option",{value:"",defaultValue:!0,disabled:!0,children:"Select Status"}),Object(h.jsx)("option",{value:"Single",children:"Single"}),Object(h.jsx)("option",{value:"Married",children:"Married"}),Object(h.jsx)("option",{value:"Divorsed",children:"Divorsed"})]})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Occupation"}),Object(h.jsxs)("select",{onChange:D,value:A.occupation,className:"r-option",name:"occupation",id:"occupation",required:!0,children:[Object(h.jsx)("option",{value:"",defaultValue:!0,disabled:!0,children:"Select Occupation"}),Object(h.jsx)("option",{value:"Student",children:"Student"}),Object(h.jsx)("option",{value:"Employee",children:"Employee"}),Object(h.jsx)("option",{value:"Business",children:"Business"})]})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Aadhar Card Number"}),Object(h.jsx)("input",{onChange:D,value:A.aadharCard,name:"aadharCard",className:"r-input",type:"number",placeholder:"Enter your Aadhar card number",autoComplete:"nope",required:!0})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Pan Card Number"}),Object(h.jsx)("input",{onChange:D,value:A.panCard,name:"panCard",className:"r-input",type:"name",placeholder:"Enter your Pan card number",autoComplete:"nope",required:!0})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Username"}),Object(h.jsx)("input",{onChange:D,value:A.username,name:"username",className:"r-input",type:"text",placeholder:"Username",autoComplete:"nope",required:!0})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Password"}),Object(h.jsx)("input",{onChange:D,value:A.password,name:"password",className:"r-input",type:"password",placeholder:"Password",autoComplete:"nope",required:!0})]}),Object(h.jsxs)("div",{className:"r-input-box",children:[Object(h.jsx)("span",{className:"r-details",children:"Enter Amount to credit on your account"}),Object(h.jsx)("input",{onChange:D,value:A.amount,name:"amount",className:"r-input",type:"number",placeholder:"Amount should be greater than 5000",autoComplete:"nope",required:!0})]})]}),Object(h.jsxs)("div",{className:"r-gender-details",children:[Object(h.jsx)("input",{type:"radio",name:"gender",id:"dot-1",checked:"Male"===A.gender,onChange:D,value:"Male"}),Object(h.jsx)("input",{type:"radio",name:"gender",id:"dot-2",checked:"Female"===A.gender,onChange:D,value:"Female"}),Object(h.jsx)("input",{type:"radio",name:"gender",id:"dot-3",checked:"PNS"===A.gender,onChange:D,value:"PNS"}),Object(h.jsx)("span",{className:"r-gender-title",children:"Gender"}),Object(h.jsxs)("div",{className:"r-catagory",children:[Object(h.jsxs)("label",{htmlFor:"dot-1",children:[Object(h.jsx)("span",{className:"r-dot one"}),Object(h.jsx)("span",{className:"r-gender",children:"Male"})]}),Object(h.jsxs)("label",{htmlFor:"dot-2",children:[Object(h.jsx)("span",{className:"r-dot two"}),Object(h.jsx)("span",{className:"r-gender",children:"Female"})]}),Object(h.jsxs)("label",{htmlFor:"dot-3",children:[Object(h.jsx)("span",{className:"r-dot three"}),Object(h.jsx)("span",{className:"r-gender",children:"Prefer Not to Say"})]})]})]}),Object(h.jsx)("div",{className:"r-button",children:Object(h.jsx)("input",{type:"submit",name:"",value:"Register",id:"registerButton",onClick:function(e){return I.apply(this,arguments)}})}),Object(h.jsx)("div",{className:"r-reg-btn",children:Object(h.jsx)(j.b,{to:"/",children:Object(h.jsx)("input",{type:"submit",name:"",value:"Log In"})})})]})]})})},g=t.p+"static/media/bank.43f58ca8.png";var f=function(e){var a=localStorage.getItem("loggedInUser"),t=((new Date).toDateString(),Object(n.useState)(!0)),s=Object(u.a)(t,2),c=(s[0],s[1]),r=Object(n.useState)([]),o=Object(u.a)(r,2),d=o[0],b=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n,s,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.database().ref("Transaction/AccountStatement/"+a),e.next=3,t.once("value");case 3:return n=e.sent,e.next=6,n.val();case 6:for(r in s=e.sent,c=[],s)c.push(s[r]);b(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),c(!1)}),[a]),Object(h.jsxs)("div",{className:"statement-container",children:[Object(h.jsx)("div",{className:"s-title top",children:"Account Statement"}),Object(h.jsx)("div",{className:"s-header",children:Object(h.jsxs)("div",{className:"s-heading-left",children:[Object(h.jsx)("img",{className:"s-logo",src:g}),Object(h.jsx)("div",{className:"s-title",children:"New India Bank"}),Object(h.jsx)("div",{className:"s-bank-address",children:"Modern Building, 128, Wodehouse Road, Colaba, Mumbai, Maharashtra 400005, India"})]})}),Object(h.jsx)("div",{className:"s-table",children:Object(h.jsxs)("table",{className:"customers",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Date"}),Object(h.jsx)("th",{children:"Description"}),Object(h.jsx)("th",{children:"Withdrawals"}),Object(h.jsx)("th",{children:"Deposits"}),Object(h.jsx)("th",{children:"Balance"})]})}),Object(h.jsx)("tbody",{children:d?d.map((function(e,a){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.date}),Object(h.jsxs)("td",{children:[e.pType," ",e.accountNumber?e.accountNumber:e.benificiaryCardNumber," - ",e.userNote]}),Object(h.jsxs)("td",{children:[e.sentAmount,"/-"]}),Object(h.jsxs)("td",{children:[e.addAmount,"/-"]}),Object(h.jsxs)("td",{children:[e.balance,"/-"]})]},a)})):""})]})})]})};var y=function(){var e=Object(n.useState)("SendMoney"),a=Object(u.a)(e,2),t=a[0],s=a[1],c=Object(n.useState)(!1),r=Object(u.a)(c,2),o=r[0],d=r[1],m=Object(n.useState)([]),x=Object(u.a)(m,2),g=x[0],y=x[1],C=Object(n.useState)(!1),S=Object(u.a)(C,2),k=S[0],A=S[1],w=localStorage.getItem("loggedInUser"),D=!0;function T(){d(!0)}if(null==localStorage.getItem("token")&&(D=!1),Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var a,t,n,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.database().ref("RegistrationTable"),e.next=3,a.once("value");case 3:return t=e.sent,e.next=6,t.val();case 6:for(c in n=e.sent,s=[],n)w===n[c].details.username&&s.push(n[c]);y(s),A(!0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),d(!1)}),[w,o]),!1===D)return Object(h.jsx)(b.a,{to:"/"});var I=(new Date).toDateString();return k?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"h-welcomePlate",children:Object(h.jsxs)("div",{className:"h-welcomePlate-details",children:[Object(h.jsxs)("h1",{className:"h-title",children:["Welcome ",g[0].details.name]}),Object(h.jsxs)("div",{className:"h-time-logout",children:[Object(h.jsx)("p",{className:"h-time",children:I}),Object(h.jsx)(j.b,{className:"h-logout-btn",to:"/logout",children:"Logout"})]})]})}),Object(h.jsx)("div",{className:"h-acc",children:Object(h.jsxs)("div",{className:"h-acc-details",children:[Object(h.jsxs)("p",{className:"h-details",children:[Object(h.jsx)("span",{children:"Account Name:"})," ",g[0].details.name]}),Object(h.jsxs)("p",{className:"h-details",children:[Object(h.jsx)("span",{children:"Account Number:"})," ",g[0].details.accNumber]}),Object(h.jsxs)("p",{className:"h-details",children:[Object(h.jsx)("span",{children:"Account Type:"})," ",g[0].details.accType]}),Object(h.jsxs)("p",{className:"h-details",children:[Object(h.jsx)("span",{children:"IFSC Code:"})," NIB00007875"]}),Object(h.jsxs)("p",{className:"h-details",children:[Object(h.jsx)("span",{children:"Account Balance:"})," Rs. ",g[0].details.amount,"/-"]}),Object(h.jsxs)("p",{className:"h-details",children:[Object(h.jsx)("span",{children:"Address:"})," ",g[0].details.address]})]})}),Object(h.jsxs)("div",{className:"h-btn",children:[Object(h.jsx)("button",{className:"h-action-btn",onClick:function(){return s("SendMoney")},children:"Send Moeny"}),Object(h.jsx)("button",{className:"h-action-btn",onClick:function(){return s("AddMoney")},children:"Add Money"}),Object(h.jsx)("button",{className:"h-action-btn",onClick:function(){return s("Registration")},children:"New Account"}),Object(h.jsx)("button",{className:"h-action-btn",onClick:function(){return s("Statement")},children:"Statement"})]}),Object(h.jsxs)("div",{children:["SendMoney"===t&&Object(h.jsx)(N,{seeAmount:T}),"AddMoney"===t&&Object(h.jsx)(O,{seeAmount:T}),"Registration"===t&&Object(h.jsx)(v,{}),"Statement"===t&&Object(h.jsx)(f,{name:g[0].details.name,address:g[0].details.address,accountNumber:g[0].details.accNumber})]})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Loading..."})})};var C=function(){return localStorage.removeItem("token"),Object(h.jsxs)("div",{className:"logout-container",children:[Object(h.jsx)("h1",{children:"You are logged out"}),Object(h.jsx)(j.b,{className:"logout-button",to:"/",children:"Log in again"})]})};var S=function(){return Object(h.jsxs)("div",{className:"logo-card",children:[Object(h.jsx)("img",{className:"medicine-logo",alt:"NIB-Logo",src:g}),Object(h.jsx)("span",{className:"company-name",children:"New India Bank"})]})};var k=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{}),Object(h.jsx)(j.a,{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{exact:!0,path:"/",component:x}),Object(h.jsx)(b.b,{path:"/registration",component:v}),Object(h.jsx)(b.b,{path:"/home",component:y}),Object(h.jsx)(b.b,{path:"/logout",component:C})]})})]})};t(48);c.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.aeb7c483.chunk.js.map