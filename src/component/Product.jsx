import React, { useEffect, useState } from "react";
import "./Product.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({
  product,
  setProduct,
  inputs,
  apiData,
  location,
  setLocation,
}) => {
  let [objects, setObjects] = useState(apiData);

  const navigate = useNavigate();

  const addToCart = ({ ...value }) => {
    setProduct([...product, { ...value }]);

    toast.success("Product Added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const locationVal = useLocation();
  const exactLocation = locationVal.pathname;

  useEffect(() => {
    setLocation(exactLocation);
  });

  const GoToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="Pcontainer">
        {apiData
          .filter((v, i) => {
            if (inputs !== "") {
              return (
                v.brand
                  .toLocaleLowerCase()
                  .includes(inputs.toLocaleLowerCase()) ||
                v.model
                  .toLocaleLowerCase()
                  .includes(inputs.toLocaleLowerCase()) ||
                v.price
                  .toString()
                  .toLocaleLowerCase()
                  .includes(inputs.toLocaleLowerCase()) ||
                v.type.toLocaleLowerCase().includes(inputs.toLocaleLowerCase())
              );
            } else {
              return apiData;
            }
          })
          .map((value, index) => {
            console.log(value.isAdded);
            return (
              <div className="product" key={value.id}>
                <NavLink to={`singleproduct/${value.id}`} state={value}>
                  <div className="cardImg">
                    <img src={value.img} alt="mobile" />
                  </div>
                </NavLink>
                <div className="cardDetail">
                  <div className="mobileInfo">
                    <div className="names">
                      <h5>{value.brand}</h5>
                      <p>{value.model}</p>
                    </div>
                    <p>{`₹${value.price}`}</p>
                  </div>
                  <div className="buttons">
                    <button onClick={() => addToCart({ ...value })}>
                      AddToCart
                    </button>
                    <ToastContainer autoClose={700} />
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Product;
