import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = ({ product = "", setProduct }) => {
  
  return (
    <>
      <div className="mainContainer">
        {product == "" ? (
          <h1>
            No product's available in Cart
            <i className="fa-solid fa-cart-plus"></i>
          </h1>
        ) : (
          <CartItem product={product} setProduct={setProduct} />
        )}
      </div>
    </>
  );
};

export default Cart;
