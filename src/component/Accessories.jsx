import React from "react";
import Product from "./Product";
import accessories from "./Data";

const Accessories = ({
  product,
  setProduct,
  inputs,
  location,
  setLocation,
}) => {
  return (
    <>
      <Product
        product={product}
        setProduct={setProduct}
        inputs={inputs}
        apiData={accessories}
        location={location}
        setLocation={setLocation}
      />
    </>
  );
};

export default Accessories;
