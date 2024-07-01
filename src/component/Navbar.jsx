import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { productList } from "./Data";

const Navbar = ({ product, inputs, setInputs }) => {
  const navigate = useNavigate("/");
  const { pathname } = useLocation();

  const [slide, setSlide] = useState(false);

  const handleInput = (e) => {
    setInputs(e.target.value);
    console.log("input-event", e);
  };

  const handleRemoveSearch = () => {
    setInputs("");
  };

  const handleLogout = () => {
    localStorage.removeItem("userLoginDetails");
    navigate("/");
  };

  const loginData = localStorage.getItem("userLoginDetails");

  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img className="logo" src="clickShop.png" alt="image" />
          </NavLink>
        </div>
        <div className={slide ? "main-menu slider" : "main-menu"}>
          <div className="menu">
            <ul className="m-0">
              <li>
                <NavLink
                  className={pathname == "/" && "active-style"}
                  to="/"
                  onClick={() => setSlide(!slide)}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={pathname == "/accessories" && "active-style"}
                  to="/accessories"
                  onClick={() => setSlide(!slide)}
                >
                  ACCESSORIES
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={pathname == "/fashion" && "active-style"}
                  to="/fashion"
                  onClick={() => setSlide(!slide)}
                >
                  FASHION
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={pathname == "/about" && "active-style"}
                  to="/about"
                  onClick={() => setSlide(!slide)}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={pathname == "/contact" && "active-style"}
                  to="/contact"
                  onClick={() => setSlide(!slide)}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="cart">
            <NavLink to="/cart">
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => setSlide(!slide)}
              ></i>
            </NavLink>
            <p>{product.length}</p>
          </div>
          <div className="d-flex align-items-center gap-30">
            <div>
              {loginData != null ? (
                <span className="btn btn-warning m-0" onClick={handleLogout}>
                  Logout
                </span>
              ) : (
                <NavLink to="/login" className="btn btn-primary">
                  Login
                </NavLink>
              )}
            </div>
          </div>
          {slide ? (
            <i
              className="fa-solid fa-xmark icon"
              onClick={() => setSlide(!slide)}
            ></i>
          ) : (
            ""
          )}
        </div>
        <i
          className="fa-solid fa-bars menu-icon icon"
          onClick={() => setSlide(!slide)}
        ></i>
      </nav>
      
      {pathname == "/accessories" || pathname == "/fashion" ? (
        <div className="search-container">
          <div className="search">
            <input
              type="text"
              placeholder="Search here....."
              onChange={handleInput}
              value={inputs}
            />
            <i className="fa-solid fa-xmark" onClick={handleRemoveSearch}></i>
          </div>
        </div>
      ) : (
        ""
      )}

      {inputs != "" && pathname == "/" ? (
        <div className="search-map">
          <div className="row m-0">
            {productList
              .filter(
                (product) =>
                  product.brand.toLowerCase().includes(inputs.toLowerCase()) ||
                  product.type.toLowerCase().includes(inputs.toLowerCase()) ||
                  product.model.toLowerCase().includes(inputs.toLowerCase())
              )
              .map((product) => {
                return (
                  <div className="col-12 d-flex align-items-center py-2 search-map-item">
                    {product.model + " " + product.type}
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
