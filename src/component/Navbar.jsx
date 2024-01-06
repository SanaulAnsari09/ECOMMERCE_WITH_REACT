import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ product, inputs, setInputs }) => {
  const handleInput = (e) => {
    setInputs(e.target.value);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img className="logo" src="clickShop.png" alt="image" />
          </NavLink>
        </div>

        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/accessories">ACCESSORIES</NavLink>
            </li>
            <li>
              <NavLink to="/fashion">FASHION</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search here....."
            onChange={handleInput}
            value={inputs}
          />
          <i className="fa-solid fa-xmark" onClick={() => setInputs("")}></i>
        </div>
        <div className="cart">
          <NavLink to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <p>{product.length}</p>
        </div>
        <i className="fa-solid fa-bars menu-icon"></i>
      </nav>
    </>
  );
};

export default Navbar;
