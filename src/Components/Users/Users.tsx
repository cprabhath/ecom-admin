import { MDBDataTableV5 } from "mdbreact";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../Axios/axioConfig";
import { toast } from "react-toastify";

const Users = () => {

  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "Image",
        field: "image",
        width: 150,
      },
      {
        label: "Name",
        field: "Name",
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Position",
        field: "Position",
      },
      {
        label: "Email",
        field: "Email",
      },
      {
        label: "Email Verified",
        field: "Email_verified",
      },
      {
        label: "Created at",
        field: "create",
        sort: "disabled",
      },
      {
        label: "Updated At",
        field: "update",
        sort: "disabled",
      },
    ],
  });

  useEffect(() => {
    axiosInstance
      .get("/api/v1/users/find-all")
      .then((res) => {
        const data = res.data.message;
        const rows = data.map((user: any) => {
          return {
            image: (
              <img
                src={user.imageUrl}
                alt="user"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            ),
            Name: user.fullName,
            Position: user.role,
            Email: user.email,
            Email_verified:
              user.emailVerified == true ? (
                <span className="badge badge-success">Verified</span>
              ) : (
                <span className="badge badge-danger">Not Verified</span>
              ),
            create: user.createdAt,
            update: user.updatedAt,
          };
        });
        setDatatable({ ...datatable, rows });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  return (
    <>
      <div className="card shadow">
        <div className="card-header py-3 d-sm-flex align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">
            Total System Users
          </h6>
          <Link to="/dashboard/add-user" className="btn btn-sm btn-primary">
            Add User
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <MDBDataTableV5
              hover
              entriesOptions={[5, 20, 25]}
              entries={5}
              pagesAmount={4}
              data={datatable}
              searchTop
              searchBottom={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
