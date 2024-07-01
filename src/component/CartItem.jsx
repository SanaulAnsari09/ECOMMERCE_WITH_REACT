import React, { useState } from "react";

const CartItem = ({ product, setProduct }) => {

  const [quantity, setQuantity] = useState();
  const [checkout, setCheckout] = useState();


  let allPrice = 0;
  product.map((value) => {
    allPrice = allPrice + value.price * value.count;
  });
  const removeItmes = (id) => {
    let filteredItem = product.filter((v) => v.id !== id);
    setProduct(filteredItem);
  };

  const decrement = (id) => {
    product.map((val) => {
      if (val.id === id && val.count >= 2) {
        setQuantity((val.count = val.count - 1));
      }
    });
  };

  const increment = (id) => {
    product.map((val) => {
      if (val.id === id && val.count <= 19) {
        setQuantity((val.count = val.count + 1));
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 ">
            <div className="row px-3">
              {product.map((value) => {
                console.log(value);
                return (
                  <div
                    className="col-12 d-flex gap-3 mb-2 border flex-direction-change"
                    key={value.id}
                  >
                    <div className="p-0 cart-product-image mb-2">
                      <img
                        src={value.img}
                        alt="product"
                        style={{
                          height: "150px",
                          width: "150px",
                          padding: "10px",
                        }}
                      />
                      <div className="w-100 d-flex justify-content-between px-2 cart-product-count-button">
                        <button
                          onClick={() => decrement(value.id)}
                          className="inc-dec-button border "
                        >
                          -
                        </button>
                        <p className="product-length border m-0">{value.count}</p>
                        <button
                          onClick={() => increment(value.id)}
                          className="inc-dec-button border "
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="pt-1 ml-4">
                      <p className="cart-item-description">{value.description}</p>
                      <p className="m-0">
                        {value.type} {value.brand}
                      </p>
                      <p className="m-0">
                        ₹{value.price} :{" "}
                        <span className="text-secondary">20% of</span>
                      </p>
                      <p className="m-0">{value.space} </p>
                      <p className="text-secondary m-0">{value.type}</p>
                      <p className="mt-2 font-weight-bold cursor" onClick={()=>removeItmes(value.id)}>REMOVE</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-md-4 total-cart-amount">
            <div className="card">
              <div className="card-header">
                <p className="m-0 text-secondary">PRICE DETAIL'S</p>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p>Price ({product.length} Item's)</p>
                  <p>
                    {(allPrice + allPrice / 10).toLocaleString("en-IN", {
                      maximumFractionDigits: 1,
                      style: "currency",
                      currency: "INR",
                    })}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Discount</p>
                  <p className="text-success">
                    - {(allPrice / 10).toLocaleString("en-IN", {
                      maximumFractionDigits: 1,
                      style: "currency",
                      currency: "INR",
                    })}
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Delivery Charge</p>
                  <p className="text-secondary">
                    <span className="rupee-symbol delivery-charge">
                      ₹{product.length * 20}
                    </span>{" "}
                    <span className="text-success">Free</span>
                  </p>
                </div>
                <div className="d-flex justify-content-between border-top border-bottom pt-3">
                  <p className="total-amount font-weight-bold">Total Amount</p>
                  <p className="font-weight-bold">
                    {allPrice.toLocaleString("en-IN", {
                      maximumFractionDigits: 1,
                      style: "currency",
                      currency: "INR",
                    })}
                  </p>
                </div>
                <div>
                  <p className="font-weight-bold text-success mt-4">
                    You will save{" "}
                    {(allPrice / 10).toLocaleString("en-IN", {
                      maximumFractionDigits: 1,
                      style: "currency",
                      currency: "INR",
                    })}{" "}
                    on this order
                  </p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
