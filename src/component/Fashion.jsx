import React from "react";
import Product from "./Product";
import { fashionData } from "./Data";

const Fashion = ({ product, setProduct, inputs, location, setLocation }) => {
  return (
    <>
      <Product
        product={product}
        setProduct={setProduct}
        inputs={inputs}
        apiData={fashionData}
        location={location}
        setLocation={setLocation}
      />
    </>
  );
};

export default Fashion;
