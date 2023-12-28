import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosInstance, useAxiosLoader } from "../../Axios/axioConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading] = useAxiosLoader();
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.info("Please fill all the fields");
    } else {
      const data = { email, password };
      axiosInstance
        .post("/api/v1/users/login", data)
        .then((res) => {
          const authToken = res.data.message.token;
          const UserName = res.data.message.selectedUser.fullName;
          const Role = res.data.message.selectedUser.role;
          const image = res.data.message.selectedUser.imageUrl;

          if (authToken) {
            if (Role !== "admin") {
              toast.error("You are not authorized to access this page");
              return;
            }
            localStorage.setItem("token", authToken);
            localStorage.setItem("UserName", UserName);
            localStorage.setItem("image", image);

            navigate('/dashboard');
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          onClick={(e) => handleSubmit(e)}
                          className={
                            isloading
                              ? "btn btn-primary btn-user btn-block disabled"
                              : "btn btn-primary btn-user btn-block"
                          }
                        >
                          {isloading ? "Loading..." : "Login"}
                        </button>
                        <hr />
                        <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw"></i> Login with
                          Google
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="/forget-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/register">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
