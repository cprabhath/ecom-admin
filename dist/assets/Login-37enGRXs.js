import{u as f,r as o,j as e,L as i,Q as t}from"./index-eLorXjxZ.js";import{u as N,a as v}from"./axioConfig-VE0MvLD2.js";const y=()=>{const d=f(),[l,m]=o.useState(""),[r,h]=o.useState(""),[c]=N();o.useEffect(()=>{g()},[]);const g=()=>{sessionStorage.getItem("token")&&d("/dashboard")},x=s=>{if(s.preventDefault(),l===""||r==="")t.info("Please fill all the fields");else{const u={email:l,password:r};v.post("/api/v1/users/login",u).then(a=>{const n=a.data.message.token,p=a.data.message.selectedUser.fullName,b=a.data.message.selectedUser.role,j=a.data.message.selectedUser.imageUrl;if(n){if(b!=="admin"){t.error("You are not authorized to access this page");return}sessionStorage.setItem("token",n),sessionStorage.setItem("UserName",p),sessionStorage.setItem("image",j),window.location.href="/dashboard"}}).catch(a=>{t.error(a.response.data.message)})}};return e.jsx("div",{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-xl-10 col-lg-12 col-md-9",children:e.jsx("div",{className:"card o-hidden border-0 shadow-lg my-5",children:e.jsx("div",{className:"card-body p-0",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6 d-none d-lg-block bg-login-image"}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"h4 text-gray-900 mb-4",children:"Welcome Back!"})}),e.jsxs("form",{className:"user",children:[e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"email",className:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address...",onChange:s=>m(s.target.value)})}),e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"password",className:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Password",onChange:s=>h(s.target.value)})}),e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"custom-control custom-checkbox small",children:[e.jsx("input",{type:"checkbox",className:"custom-control-input",id:"customCheck"}),e.jsx("label",{className:"custom-control-label",htmlFor:"customCheck",children:"Remember Me"})]})}),e.jsx("button",{onClick:s=>x(s),className:c?"btn btn-primary btn-user btn-block disabled":"btn btn-primary btn-user btn-block",children:c?"Loading...":"Login"}),e.jsx("hr",{}),e.jsxs("a",{href:"index.html",className:"btn btn-google btn-user btn-block",children:[e.jsx("i",{className:"fab fa-google fa-fw"})," Login with Google"]})]}),e.jsx("hr",{}),e.jsx("div",{className:"text-center",children:e.jsx(i,{className:"small",to:"/forget-password",children:"Forgot Password?"})}),e.jsx("div",{className:"text-center",children:e.jsx(i,{className:"small",to:"/register",children:"Create an Account!"})})]})})]})})})})})})})};export{y as default};
