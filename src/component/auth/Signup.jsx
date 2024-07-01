import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [signupFormData, setSignupFormData] = useState({
    UserName: "",
    UserEmail: "",
    CreatePassword: "",
    ConfirmPassword: "",
  });
  const [showError, setShowError] = useState({
    userNameError: false,
    userEmailError: false,
    createPasswordError: false,
    confirmPasswordError: false,
  });
  const hanldeSignupForm = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };
  const handleSignupForm = (e) => {
    e.preventDefault();

    if (signupFormData.UserName != "") {
      if (signupFormData.UserEmail != "") {
        if (signupFormData.CreatePassword != "") {
          if (signupFormData.ConfirmPassword != "") {
            localStorage.setItem(
              "userSignupDetails",
              JSON.stringify(signupFormData)
            );
            toast.success("Sign-Up Successfully", {
              position: toast.POSITION.TOP_CENTER,
            });
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          } else {
            setShowError({ ...showError, confirmPasswordError: true });
          }
        } else {
          setShowError({ ...showError, createPasswordError: true });
        }
      } else {
        setShowError({ ...showError, userEmailError: true });
      }
    } else {
      setShowError({ ...showError, userNameError: true });
    }
  };

  useEffect(() => {
    if (signupFormData.UserName != "") {
      setShowError({ ...showError, userNameError: false });
    }
    if (signupFormData.UserEmail != "") {
      setShowError({ ...showError, userEmailError: false });
    }
    if (signupFormData.CreatePassword != "") {
      setShowError({ ...showError, createPasswordError: false });
    }
    if (signupFormData.ConfirmPassword != "") {
      setShowError({ ...showError, confirmPasswordError: false });
    }
  }, [signupFormData]);

  return (
    <>
      <div className="container-fluid h-100">
        <div className="row py-5 justify-content-center">
          <div className="col-md-3">
            <div className="card px-3 py-2">
              <form onSubmit={handleSignupForm} className="py-2">
                <div className="form-group">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="fullname">Enter Name</label>
                    {showError.userNameError && (
                      <span className="font-size-10 text-danger">Required</span>
                    )}
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    placeholder="Enter Name"
                    name="UserName"
                    onChange={hanldeSignupForm}
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="emailaddress">Enter Email</label>
                    {showError.userEmailError && (
                      <span className="font-size-10 text-danger">Required</span>
                    )}
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    id="emailaddress"
                    placeholder="example@gmail.com"
                    name="UserEmail"
                    onChange={hanldeSignupForm}
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="createpassword">Create Password</label>
                    {showError.createPasswordError && (
                      <span className="font-size-10 text-danger">Required</span>
                    )}
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="createpassword"
                    placeholder="**********"
                    name="CreatePassword"
                    onChange={hanldeSignupForm}
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    {showError.confirmPasswordError && (
                      <span className="font-size-10 text-danger">Required</span>
                    )}
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    placeholder="**********"
                    name="ConfirmPassword"
                    onChange={hanldeSignupForm}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-end">
                  <button type="submit" className="submit-button">
                    Signup
                  </button>
                  <NavLink to="/login" className="text-dec">
                    Login
                  </NavLink>
                </div>
                <ToastContainer autoClose={700} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
