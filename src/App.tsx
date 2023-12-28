import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader/Loader";

const Login = lazy(() => import("./Components/Login/Login"));
const Register = lazy(() => import("./Components/Register/Register"));
const ForgetPassword = lazy(
  () => import("./Components/ForgetPassword/ForgetPassword")
);
const Dashboard_Details = lazy(
  () => import("./Components/Dashboard/Dashboard_Details")
);
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const Users = lazy(() => import("./Components/Users/Users"));
const Categories = lazy(() => import("./Components/Category/Categories"));
const Brands = lazy(() => import("./Components/Brands/Brands"));
const Products = lazy(() => import("./Components/Products/Products"));
const AddUser = lazy(() => import("./Components/Users/AddUser"));


function App() {
  const token = sessionStorage.getItem("token");
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route path="/dashboard" element={token ? <Dashboard /> : <Login />}>
            <Route index element={<Dashboard_Details />} />
            <Route path="users" element={<Users />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="categories" element={<Categories />} />
            <Route path="brands" element={<Brands />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position" position="top-right" />
    </Suspense>
  );
}

export default App;
