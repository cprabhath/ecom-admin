import "./App.css";
import {
  Route,
  Routes,
  HashRouter as Router,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { ReactNode, Suspense, lazy, useEffect } from "react";
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
  const [token, setToken] = React.useState<string | null>(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const PrivateRoute = ({ children }: { children: ReactNode }) => {
    return token ? children : <Navigate to="/dashboard" />;
  };

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard_Details />} />
            <Route path="users" element={<Users />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="categories" element={<Categories />} />
            <Route path="brands" element={<Brands />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </Router>
      <ToastContainer className="toast-position" position="top-right" />
    </Suspense>
  );
}

export default App;
