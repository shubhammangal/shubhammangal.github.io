(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/elec-waste.529f7321.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/plastic-waste.964b0be1.jpg"},104:function(e,t,a){e.exports=a.p+"static/media/paper-waste.13c6c990.jpg"},105:function(e,t,a){e.exports=a.p+"static/media/rubber-waste.914d752e.jpg"},107:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),o=(a(69),a(9)),s=a(10),i=a(12),u=a(11),m=a(15),d=a(13),E=a(59),h=(a(70),a(72),E.initializeApp({apiKey:"AIzaSyAjsrLnuEbmlIZhuga-uj_QVQKlo7VCmD0",authDomain:"evaste-818f6.firebaseapp.com",databaseURL:"https://evaste-818f6.firebaseio.com",projectId:"evaste-818f6",storageBucket:"evaste-818f6.appspot.com",messagingSenderId:"525105978473",appId:"1:525105978473:web:c0aa1a2e8f520569"})),p=a(108),g=a(109),f=a(61),b=a(119),y=a(112),v=a(111),w=a(116),j=a(115),C=a(110),k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w.a,{size:"sm",show:this.props.show,centered:!0,className:"loading-model",backdrop:"static"},l.a.createElement(w.a.Body,null,l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(g.a,{className:"align-items-center"},l.a.createElement(f.a,{className:"d-flex justify-content-center align-items-center"},l.a.createElement(C.a,{animation:"border",variant:"dark"}))),l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement("br",null))),l.a.createElement(g.a,null,l.a.createElement(f.a,{className:"d-flex justify-content-center align-items-center"},l.a.createElement("label",null,l.a.createElement("h3",null,"Loading ...")))),l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement("br",null)))))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.setState({loading:!0}),console.log(h.auth().currentUser.uid),a.writeData(a.props.category,a.state.description,h.auth().currentUser.uid)},a.writeData=function(e,t,n){h.database().ref("Request/").push({category:e,description:t,user_id:n}).then(function(e){console.log("data ",e),a.setState({loading:!1},a.props.callback())}).catch(function(e){console.log("error ",e),a.setState({loading:!1,error:e})})},a.handleChange=function(e){a.setState({description:e.target.value})},a.state={description:"",error:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,this.state.loading?l.a.createElement(k,{show:this.state.loading}):"",l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(v.a,{show:this.state.error.length>0,dismissible:!0,variant:"danger"},this.state.error,l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.dismissAlert()}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{show:!!this.props.category,onHide:this.props.callback},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(w.a.Title,null,"Add Request")),l.a.createElement(w.a.Body,null,l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(j.a,{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement(j.a.Group,{controlId:"formBasicName"},l.a.createElement(j.a.Label,null,"Category"),l.a.createElement(j.a.Control,{type:"text",placeholder:"",defaultValue:this.props.category})),l.a.createElement(j.a.Group,{controlId:"formBasicDescription"},l.a.createElement(j.a.Label,null,"Description"),l.a.createElement(j.a.Control,{as:"textarea",rows:"3",onChange:function(t){return e.handleChange(t)}})),l.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit"))))))))))}}]),t}(n.Component),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).categoryClicked=function(t){e.setState({category:t})},e.dismissModal=function(){e.setState({category:null})},e.state={category:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=h.auth().currentUser?6:3;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{category:this.state.category,callback:function(){return e.dismissModal()}}),l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,{className:"bg-dark"},l.a.createElement("div",{className:"py-2 text-white"},"Recycle Categories"))),l.a.createElement(g.a,null,l.a.createElement(f.a,{md:4,lg:t,className:"py-2"},l.a.createElement(b.a,null,l.a.createElement(b.a.Img,{variant:"top",src:a(102)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,{className:"text-primary"},"Electronics"),l.a.createElement(b.a.Text,null),l.a.createElement(y.a,{variant:"success",onClick:function(){return e.categoryClicked("Electronics")}},"Add Request")))),l.a.createElement(f.a,{md:4,lg:t,className:"py-2"},l.a.createElement(b.a,null,l.a.createElement(b.a.Img,{variant:"top",src:a(103)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,{className:"text-primary"},"Plastic"),l.a.createElement(b.a.Text,null),l.a.createElement(y.a,{variant:"success",onClick:function(){return e.categoryClicked("Plastic")}},"Add Request")))),l.a.createElement(f.a,{md:4,lg:t,className:"py-2"},l.a.createElement(b.a,null,l.a.createElement(b.a.Img,{variant:"top",src:a(104)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,{className:"text-primary"},"News Paper"),l.a.createElement(b.a.Text,null),l.a.createElement(y.a,{variant:"success",onClick:function(){return e.categoryClicked("News Paper")}},"Add Request")))),l.a.createElement(f.a,{md:4,lg:t,className:"py-2"},l.a.createElement(b.a,null,l.a.createElement(b.a.Img,{variant:"top",src:a(105)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,{className:"text-primary"},"Rubber"),l.a.createElement(b.a.Text,null),l.a.createElement(y.a,{variant:"success",onClick:function(){return e.categoryClicked("Rubber")}},"Add Request")))))))}}]),t}(n.Component),N=a(37),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){console.log(a.state.email+" - "+a.state.password),e.preventDefault(),a.setState({loading:!0}),h.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){console.log(e),a.setState({loading:!1}),a.props.callback()}).catch(function(e){console.log("error"),console.log(e.message),a.setState({loading:!1,error:e.message})})},a.handleChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.dismissAlert=function(){a.setState({error:""})},a.state={email:"",password:"",error:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,this.state.loading?l.a.createElement(k,{show:this.state.loading}):"",l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(v.a,{show:this.state.error.length>0,dismissible:!0,variant:"danger"},this.state.error,l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.dismissAlert()}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(j.a,{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement(j.a.Group,{controlId:"formBasicEmail"},l.a.createElement(j.a.Label,null,"Email address"),l.a.createElement(j.a.Control,{type:"email",name:"email",placeholder:"Enter email",onChange:function(t){return e.handleChange(t)}})),l.a.createElement(j.a.Group,{controlId:"formBasicPassword"},l.a.createElement(j.a.Label,null,"Password"),l.a.createElement(j.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:function(t){return e.handleChange(t)}})),l.a.createElement(y.a,{variant:"primary",type:"submit"},"LogIn")))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){console.log(a.state.email+" - "+a.state.password),e.preventDefault(),h.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.handleChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.state={email:"",password:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(j.a,{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement(j.a.Group,{controlId:"formBasicEmail"},l.a.createElement(j.a.Label,null,"Email address"),l.a.createElement(j.a.Control,{type:"email",name:"email",placeholder:"Enter email",onChange:function(t){return e.handleChange(t)}}),l.a.createElement(j.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(j.a.Group,{controlId:"formBasicPassword"},l.a.createElement(j.a.Label,null,"Password"),l.a.createElement(j.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:function(t){return e.handleChange(t)}})),l.a.createElement(y.a,{variant:"primary",type:"submit"},"SignUp")))))}}]),t}(n.Component),M=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e,a))).updateFlow=function(){n.setState(function(e){return{loginMode:!e.loginMode}})},n.apiCallback=function(){n.props.callback()},n.handleShow=n.handleShow.bind(Object(m.a)(n)),n.handleClose=n.handleClose.bind(Object(m.a)(n)),n.state={loginMode:!0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleClose",value:function(){this.props.callback()}},{key:"handleShow",value:function(){this.props.callback()}},{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{show:this.props.show,onHide:this.handleClose},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(w.a.Title,null,this.state.loginMode?"Login":"Register"," ")),l.a.createElement(w.a.Body,null,this.state.loginMode?l.a.createElement(L,{callback:function(){return e.apiCallback()}}):l.a.createElement(x,{callback:function(){return e.apiCallback()}})),l.a.createElement(w.a.Footer,null,l.a.createElement(y.a,{variant:"success",onClick:function(){return e.updateFlow()}},this.state.loginMode?"SignUp":"SignIn"))))))}}]),t}(n.Component),I=a(113),T=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).readUserData=function(){h.database().ref("Request/").on("value",function(t){console.log(t.val());var a=t.val();e.setState({request:a})})},e.state={request:null},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.readUserData()}},{key:"render",value:function(){var e=this.state.request;return l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(f.a,{className:"bg-dark"},l.a.createElement("div",{className:"py-2 text-white"},"My Requests"))),l.a.createElement(g.a,{className:"py-2"},l.a.createElement(f.a,null,l.a.createElement(I.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Category"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,e&&Object.keys(e).map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,a+1),l.a.createElement("td",null,e[t].category),l.a.createElement("td",null,e[t].description))}))))))}}]),t}(n.Component),B=a(117),R=a(118),D=a(114),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).login=function(){console.log("login clicked"),a.setState({loginModal:!0})},a.dismissLoginModal=function(){a.setState({loginModal:!1})},a.listRequest=function(){},a.logout=function(){h.auth().signOut()},a.loginHTML=function(){return l.a.createElement(B.a,null,l.a.createElement(R.a.Text,null,l.a.createElement("span",{onClick:function(){return a.login()}},"Log In")))},a.userHTML=function(){return l.a.createElement(B.a,null,l.a.createElement(R.a.Text,null,a.state.user?l.a.createElement("a",{href:"#"},h.auth().currentUser.email.split("@")[0]):a.loginHTML()),l.a.createElement(B.a.Link,null,l.a.createElement("span",{onClick:function(){return a.logout()}},"Logout")))},a.state={user:null,loginModal:!1},a.authListener=a.authListener.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;h.auth().onAuthStateChanged(function(t){console.log(t),t?(e.setState({user:t}),localStorage.setItem("user",t.uid)):(e.setState({user:null}),localStorage.removeItem("user"))})}},{key:"writeUserData",value:function(e,t,a){h.database().ref("Users/").set({email:e,fname:t,lname:a}).then(function(e){console.log("data ",e)}).catch(function(e){console.log("error ",e)})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,this.state.loginModal?l.a.createElement(M,{show:this.state.loginModal,callback:function(){return e.dismissLoginModal()}}):"",l.a.createElement(p.a,{className:"min-vh-100"},l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(R.a,{bg:"warning"},l.a.createElement(R.a.Brand,{href:"#home"},l.a.createElement("strong",null,"E-Waste Recycle")),l.a.createElement(R.a.Toggle,null),l.a.createElement(R.a.Collapse,{className:"justify-content-end"},this.state.user?this.userHTML():this.loginHTML())))),l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(D.a,{className:"rounded-0 bg-light"},l.a.createElement("h1",null,"E-Waste Recycle Process"),l.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),l.a.createElement("p",null,l.a.createElement(y.a,{variant:"primary"},"Learn more..."))))),l.a.createElement(g.a,null,this.state.user?l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,null,l.a.createElement(S,null)),l.a.createElement(f.a,null,l.a.createElement(T,null))):l.a.createElement(f.a,null,l.a.createElement(S,null))),l.a.createElement(g.a,null,l.a.createElement(f.a,null,l.a.createElement(D.a,{className:"rounded-0 bg-warning"})))))}}]),t}(n.Component);var P=function(){return l.a.createElement(A,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a(107)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.2e68afbc.chunk.js.map