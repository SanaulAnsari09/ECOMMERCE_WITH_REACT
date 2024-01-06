import React, { useState } from "react";

const CartItem = ({ product, setProduct }) => {
  const [quantity, setQuantity] = useState();

  const removeItmes = (id) => {
    let filteredItem = product.filter((v, i) => i !== id);
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
      {product.map((value, ind) => {
        console.log(value.isAdded);
        return (
          <div className="cartContainer" key={value.id}>
            <div className="cartProduct">
              <div className="img">
                <img src={value.img} alt="" />
              </div>

              <div className="info">
                <h2>
                  {value.model}
                  {value.brand}
                </h2>
                <p>{value.price}</p>
              </div>
              <div className="total">
                <p>{`Total : ${value.price * value.count}`}</p>
              </div>

              <div className="increase">
                <button onClick={() => decrement(value.id)}>-</button>
                <p>{value.count}</p>
                <button onClick={() => increment(value.id)}>+</button>
              </div>

              <button onClick={() => removeItmes(ind)}>Remove</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
