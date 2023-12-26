import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("./Components/Login/Login"));
const Register = lazy(() => import("./Components/Register/Register"));
const ForgetPassword = lazy(() => import("./Components/ForgetPassword/ForgetPassword"));

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        className="toast-position"
        position="top-right"
      />
    </Suspense>
  );
}

export default App;
