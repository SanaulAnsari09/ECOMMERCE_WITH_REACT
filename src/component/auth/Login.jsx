import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [showError, setShowError] = useState({
    userEmailError: false,
    userPasswordError: false,
  });
  const handleLoginForm = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginFormData.userEmail != "") {
      if (loginFormData.userPassword != "") {
        let authData = localStorage.getItem("userSignupDetails");
        if (authData != null) {
          let { UserEmail, ConfirmPassword } = JSON.parse(authData);
          console.log(JSON.parse(authData));
          if (
            loginFormData.userEmail == UserEmail &&
            loginFormData.userPassword == ConfirmPassword
          ) {
            localStorage.setItem(
              "userLoginDetails",
              JSON.stringify({
                loginEmail: UserEmail,
                loginPassword: ConfirmPassword,
              })
            );
            toast.success("Login Successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else {
            toast.warning("Email or Password was wrong !", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        } else {
          toast.success("User Doesn't Exist !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        setShowError({ ...loginFormData, userPasswordError: true });
      }
    } else {
      setShowError({ ...showError, userEmailError: true });
    }
  };

  useEffect(() => {
    if (loginFormData.userEmail != "") {
      setShowError({ ...showError, userEmailError: false });
    }

    if (loginFormData.userPassword) {
      setShowError({ ...loginFormData, userPasswordError: false });
    }
  }, [loginFormData]);

  console.log("login-form-data", loginFormData);

  return (
    <div className="container-fluid h-100">
      <div className="row py-5 justify-content-center">
        <div className="col-md-3">
          <div className="card px-3 py-5">
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <div className="d-flex justify-content-between align-items-center">
                  <label htmlFor="useremail">Email</label>
                  {showError.userEmailError && (
                    <span className="font-size-10 text-danger">Required</span>
                  )}
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="useremail"
                  placeholder="Enter Email"
                  name="userEmail"
                  onChange={handleLoginForm}
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between align-items-center">
                  <label htmlFor="userpassword">Password</label>
                  {showError.userPasswordError && (
                    <span className="font-size-10 text-danger">Required</span>
                  )}
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="userpassword"
                  placeholder="**********"
                  name="userPassword"
                  onChange={handleLoginForm}
                />
              </div>

              <div className="d-flex justify-content-between align-items-end">
                <button className="submit-button">Login</button>
                <NavLink to="/signup" className="text-dec">
                  Signup
                </NavLink>
              </div>
              <ToastContainer autoClose={700} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
