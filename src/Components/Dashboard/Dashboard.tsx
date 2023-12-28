import { useEffect, useState } from "react";
import { axiosInstance } from "../../Axios/axioConfig";
import Swal from "sweetalert2";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    getProdcuts();
    getUsers();
    setUserName(localStorage.getItem("UserName")!);
    setImage(localStorage.getItem("image")!);
  }, []);

  const navigate = useNavigate();
  const today = new Date();

  const [productsCount, setProductsCount] = useState<number>(0);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [usename, setUserName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [error, setError] = useState<Array<string>>([]);

  const Logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout from system",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "No, cancel",
      confirmButtonText: "Yes, Logout",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
      }
    });
  };

  const getProdcuts = async () => {
    await axiosInstance
      .get("/api/v1/products/count")
      .then((res) => {
        setProductsCount(res.data);
      })
      .catch((err) => {
        setError([`${err.response.data.message}, please refresh the page`]);
      });
  };

  const getUsers = async () => {
    await axiosInstance
      .get("/api/v1/users/count")
      .then((res) => {
        setUsersCount(res.data);
      })
      .catch((err) => {
        setError([`${err.response.data.message}, please refresh the page`]);
      });
  }

  return (
    <div id="page-top">
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="#"
          >
            <div className="sidebar-brand-text mx-3">Happy Shop Admin </div>
          </a>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">Interface</div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-user"></i>
              <span>Users</span>
            </a>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Components</h6>
                <Link className="collapse-item" to="/dashboard/users">
                  All Users
                </Link>
                <Link className="collapse-item" to="/dashboard/add-user">
                  Add User
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#Category"
              aria-expanded="true"
              aria-controls="Category"
            >
              <i className="fas fa-fw fa-user"></i>
              <span>Category</span>
            </a>
            <div
              id="Category"
              className="collapse"
              aria-labelledby="Category"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Components</h6>
                <Link className="collapse-item" to="/dashboard/categories">
                  All Categories
                </Link>
                <Link className="collapse-item" to="/dashboard/add-categories">
                  Add Category
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#Brands"
              aria-expanded="true"
              aria-controls="Brands"
            >
              <i className="fas fa-fw fa-user"></i>
              <span>Brands</span>
            </a>
            <div
              id="Brands"
              className="collapse"
              aria-labelledby="Brands"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Components</h6>
                <Link className="collapse-item" to="/dashboard/brands">
                  All Brands
                </Link>
                <Link className="collapse-item" to="/dashboard/add-brands">
                  Add Brands
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#Products"
              aria-expanded="true"
              aria-controls="Products"
            >
              <i className="fas fa-fw fa-user"></i>
              <span>Products</span>
            </a>
            <div
              id="Products"
              className="collapse"
              aria-labelledby="Products"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Components</h6>
                <Link className="collapse-item" to="/dashboard/products">
                  All Products
                </Link>
                <Link className="collapse-item" to="/dashboard/add-products">
                  Add Products
                </Link>
              </div>
            </div>
          </li>
        </ul>

        {/* <!-- End of Sidebar --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              {/* <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
                {/* <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="fas fa-bell fa-fw"
                      style={{ marginTop: "48px" }}
                    ></i>
                    {/* <!-- Counter - Alerts --> */}
                    <span className="badge badge-danger badge-counter">
                      {error.length == 0 ? "" : error.length}
                    </span>
                  </a>
                  {/* <!-- Dropdown - Alerts --> */}
                  <div
                    className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                    style={{ marginLeft: "-200px", marginTop: "-30px" }}
                  >
                    <h6 className="dropdown-header">Alerts Center</h6>
                    {error.length == 0 ? (
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-info">
                            <i className="fas fa-exclamation-triangle text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div
                            className="small text-gray-500"
                            style={{ fontStyle: "italic" }}
                          >
                            No issue founded!
                          </div>
                        </div>
                      </a>
                    ) : (
                      error.map((err, index) => (
                        <a
                          key={index}
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div className="mr-3">
                            <div className="icon-circle bg-warning">
                              <i className="fas fa-exclamation-triangle text-white"></i>
                            </div>
                          </div>
                          <div>
                            <div className="small text-gray-500">
                              {today.getDate() +
                                "-" +
                                (today.getMonth() + 1) +
                                "-" +
                                today.getFullYear()}
                            </div>
                            <span className="font-weight-bold">{err}</span>
                          </div>
                        </a>
                      ))
                    )}
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ marginTop: "40px" }}
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      {usename}
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src={image}
                    />
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"  style={{ marginTop: "-30px" }}
                  >
                    <button className="dropdown-item" onClick={() => Logout()}>
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Topbar --> */}
          </div>
          <div className="container-fluid">
            <Outlet context={{ productsCount, usersCount }} />
          </div>
          {/* <!-- End of Main Content -->

        <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Happy Shop | Admin 2023</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper -->

<!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
};

export default Dashboard;
