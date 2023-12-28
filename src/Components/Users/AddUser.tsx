import { FileRejection, useDropzone } from "react-dropzone";
import { useCallback, useMemo, useState, useEffect } from "react";
import { axiosInstance, useAxiosLoader } from "../../Axios/axioConfig";
import { storage } from "../Config/firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const baseStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
  cursor: 'pointer',
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

type FileWithPreview = File & { preview: string };

const AddUser = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [role, setRole] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const [isloading] = useAxiosLoader();
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  // Dropzone Callback
  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
    const file: File[] = acceptedFiles;
      if (acceptedFiles.length > 0) {
        setImage(file[0]);
      }
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );

    fileRejections.map((file) => {
      toast.error(`${file.file.name} is not a valid image file`);
    });
  }, [setImage, setFiles]);

  // Dropzone
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  // Image Preview
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  // Upload Image
  useEffect(() => {
    const uploadImage = () => {
      if (image) {
        const ImageRef = ref(storage, `ecom/${Math.random()}-${image.name}`);
        const uploadTask = uploadBytesResumable(ImageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            // Handle unsuccessful uploads
            toast.error("Error uploading image" + error);
          },
          () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageUrl(downloadURL);
              toast.success("Image uploaded successfully");
            });
          }
        );
      }
    };

    uploadImage();
  }, [image]);


  // Validation
  const Validation = () => {
    if (firstName === "") {
      return false;
    }
    if (lastName === "") {
      return false;
    }
    if (email === "") {
      return false;
    }
    if (password === "") {
      return false;
    }
    if (confirmPassowrd === "") {
      return false;
    }
    if (role === "") {
      return false;
    }
    if (password !== confirmPassowrd) {
      toast.error("Password and Confirm Password must be same");
      return false;
    }
    return true;
  };

  const fullName = firstName + " " + lastName;
  const user = {
    fullName,
    email,
    password,
    role,
    imageUrl,
  };

  // Submit Form Data
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (Validation() === false) {
      toast.error("Please fill all the fields");
      return;
    }
    axiosInstance
      .post("/api/v1/users/register", user)
      .then((res) => {
        navigate("/dashboard/users");
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="card shadow">
      <div className="card-header py-3 d-sm-flex align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">Add new user</h6>
      </div>
      <div className="card-body">
        <div>
          <form>
            <div className="row mb-4">
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" htmlFor="form6Example1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" htmlFor="form6Example2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="form6Example2"
                    className="form-control"
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" htmlFor="form6Example6">
                    Email
                  </label>
                  <input
                    type="email"
                    id="form6Example6"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" htmlFor="form6Example7">
                    Select User Type
                  </label>
                  <select
                    className="form-control"
                    id="form6Example7"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Choose your option</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" htmlFor="form6Example8">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form6Example8"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="col">
                <div data-mdb-input-init className="form-outline">
                  <label className="form-label" htmlFor="form6Example9">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="form6Example9"
                    className="form-control"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label className="form-label" htmlFor="form6Example6">
                  Add User Image
                </label>
                <div data-mdb-input-init className="form-outline mb-4">
                  <div {...getRootProps({ style })} className="d-flex flex-column">
                    <input {...getInputProps()} />
                    {files.map((file) => (
                      <div key={file.name}>
                        <img src={file.preview} alt={file.name} width="150px" />
                      </div>
                    ))}
                    <div className="mt-2">{ uploadProgress ? "Uploading" : "Drag and drop your image here" }</div>
                  </div>
                  <div className="progress" style={{height:'3px'}}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-mdb-ripple-init
              type="button"
              className={
                isloading
                  ? "btn btn-primary btn-block disabled"
                  : "btn btn-primary btn-block"
              }
              onClick={(e) => handleSubmit(e)}
            >
              {isloading ? "Loading..." : "Add User"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
