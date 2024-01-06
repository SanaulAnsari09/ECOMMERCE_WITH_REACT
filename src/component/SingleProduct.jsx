import React from "react";
import "./SingleProduct.css";
import accessories, { fashionData } from "./Data";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  console.log(location.state);
  let singleProduct = location.state;
  let { img, model, brand, camera, price, space, type, battery } =
    singleProduct;
  let offer = price / 20;
  return (
    <>
      <div className="singleContainer">
        <div className="imageArea">
          <img src={img} alt="singleProduct" />
        </div>
        <div className="infoArea">
          <div className="heading">
            <h1>
              {brand}: {model}
            </h1>
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
              <p>
                <i className="fa-solid fa-tag"></i>Buy this product and Get
                Extra ₹100 Off on Select another product
              </p>
              <p>
                <i className="fa-solid fa-tag"></i>Buy this product and Get
                Extra ₹15 Off on Select coupon code
              </p>
              <p>
                <i class="fa-regular fa-calendar"></i>EMI starting from
                ₹422/month{" "}
                <span>
                  view plan<i class="fa-solid fa-chevron-right"></i>
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
            <button>AddToCart</button>
            <button>Buy Now</button>
          </div>

          <div className="features">
            <div>
              <i class="fa-solid fa-truck"></i>
              <span>Free Delivery</span>
            </div>
            <div>
              <i class="fa-solid fa-rotate-left"></i>
              <span>10 Days Replacement</span>
            </div>
            <div>
              <i class="fa-solid fa-money-check-dollar"></i>
              <span>Pay On Delivery</span>
            </div>
            <div>
              <i class="fa-solid fa-file-shield"></i>
              <span>Secured Transaction</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
