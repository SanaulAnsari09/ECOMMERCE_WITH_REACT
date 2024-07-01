import React from "react";
import "./SingleProduct.css";
import { useLocation, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productList } from "./Data";

const SingleProduct = ({ product, setProduct }) => {
  const location = useLocation();
  let singleProduct = location.state;
  let {pathname} = location;


  let exact = pathname.split("/");
  exact.pop();
  let pathString = exact.join("/")

  let { img, model, brand, camera, price, space, type, battery } =
    singleProduct;

  let offer = price / 20;

  const addToCart = ({ ...value }) => {
    let loginData = localStorage.getItem("userLoginDetails");
    if (loginData) {
      let checkingCartProduct = product.filter(
        (product) => product.id == value.id
      );
      console.log("checkingCartProduct", checkingCartProduct);
      if (checkingCartProduct.length == 0) {
        setProduct([...product, { ...value }]);
        toast.success("Product Added", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.warning("Product Available In Cart", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else {
      toast.warning("Please Login", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className="singleContainer border-bottom">
        <div className="imageArea p-1">
          <img src={img} alt="singleProduct" className="img-fit"/>
        </div>
        <div className="infoArea">
          <div className="heading">
            <h3 className="overflow-text">
              {brand}: {model}
            </h3>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
          </div>

          <div className="price">
            <h2>₹ {price}</h2>
            <p className="offer">{price + offer}</p>
            <p>20%off</p>
          </div>

          <div className="offers">
            <h4>Available Offer</h4>
            <div className="para">
              <p className="m-0">
                <i className="fa-solid fa-tag"></i>Buy this product and Get
                Extra ₹100 Off on Select another product
              </p>
              <p className="m-0">
                <i className="fa-solid fa-tag"></i>Buy this product and Get
                Extra ₹15 Off on Select coupon code
              </p>
              <p className="m-0">
                <i className="fa-regular fa-calendar"></i>EMI starting from
                ₹422/month{" "}
                <span>
                  view plan<i className="fa-solid fa-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>

          {type === "Mobile" ? (
            <div className="highlight">
              <h4>Highlight</h4>
              <div className="details">
                <ul>
                  <li>{space}</li>
                  <li>{camera}</li>
                  <li>{battery}</li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="Single-buttons">
            <button onClick={() => addToCart(singleProduct)}>AddToCart</button>
            <ToastContainer autoClose={700} />
            <button>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <div className="row mt-3 justify-content-center">
          <div className="col-md-8 col-sm-8 col-12 product">
            <h3>Recommended Product</h3>
            <div className="row">
              {productList
                .filter((p) => p.type == type)
                .map((product) => {
                  return (
                    <div
                      className="col-xl-3 col-md-3 col-6 px-1 mb-2"
                      key={product.id}
                    >
                      <NavLink
                        to={`${pathString}/${product.id}`}
                        state={product}
                        className="text-dark"
                      >
                        <div className="card">
                          <img
                            className="card-img-top m-auto pt-1 product-image img-fit"
                            src={product.img}
                            alt="image"
                            style={{ height: "140px", width: "130px" }}
                          />
                          <div className="card-body py-2 p-0 ">
                            <div className="d-flex justify-content-between px-2">
                              <p className="card-title font-weight-bold m-0">
                                {product.brand}
                              </p>
                              <p className="m-0">{`₹${product.price}`}</p>
                            </div>
                            <div>
                              <p className="pl-2 m-0 overflow-text">{product.model}</p>
                            </div>
                            <div className="px-2">
                              <i className="fa-solid fa-star m-0 text-warning"></i>
                              <i className="fa-solid fa-star m-0 text-warning"></i>
                              <i className="fa-solid fa-star m-0 text-warning"></i>
                              <i className="fa-solid fa-star m-0 text-warning"></i>
                              <i className="fa-solid fa-star m-0 text-warning"></i>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
