import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productList } from "./Data";

const Fashion = ({ product, setProduct, inputs, setLocation, setInputs }) => {
  const [filterProduct, setFilterProduct] = useState("allproduct");
  const [filterPrice, setFilterPrice] = useState("allprice");
  const [filterBrand, setFilterBrand] = useState("allbrand");

  const { pathname } = useLocation();

  useEffect(() => {
    setLocation(pathname);
  });

  useEffect(() => {
    setInputs("");
  }, []);

  const fashionList = productList.filter(
    (product) =>
      product.type.toLowerCase() == "tshirts" ||
      product?.type?.toLowerCase() == "jeans" ||
      product?.type?.toLowerCase() == "shoes" ||
      product?.type?.toLowerCase() == "hoody" 
  );

  const inputFilteredProduct = fashionList.filter((v, i) => {
    if (inputs !== "") {
      return (
        v.brand.toLocaleLowerCase().includes(inputs.toLocaleLowerCase()) ||
        v.model.toLocaleLowerCase().includes(inputs.toLocaleLowerCase()) ||
        v.price
          .toString()
          .toLocaleLowerCase()
          .includes(inputs.toLocaleLowerCase()) ||
        v.type.toLocaleLowerCase().includes(inputs.toLocaleLowerCase())
      );
    } else {
      return fashionList;
    }
  });

  let sidebarFilteredProduct = fashionList.filter((v, i) => {
    if (filterProduct == "allproduct") {
      return fashionList;
    } else {
      return v.type
        .toLocaleLowerCase()
        .includes(filterProduct.toLocaleLowerCase());
    }
  });

  let brandFiltering = sidebarFilteredProduct.filter((product) => {
    if (filterBrand == "allbrand") {
      return sidebarFilteredProduct;
    } else {
      return product?.brand?.toLowerCase() == filterBrand?.toLowerCase();
    }
  });

  let priceFiltering = brandFiltering.filter((product) => {
    switch (filterPrice) {
      case "allprice":
        return brandFiltering;
      case "halfToOne":
        return product.price >= 500 && product.price <= 1000;
      case "oneToTwo":
        return product.price >= 1000 && product.price <= 2000;
      case "twoToThree":
        return product.price >= 2000 && product.price <= 3000;
    }
  });

  let productBrandName = sidebarFilteredProduct.map((product) => product.brand);

  let uniqueBrandName = [...new Set(productBrandName)];

  const handleFilterProductChange = (e) => {
    setFilterProduct(e.target.value);
  };

  const handleFilterBrandChange = (e) => {
    setFilterBrand(e.target.value);
  };

  const hanldeFilterPriceChagnge = (e) => {
    setFilterPrice(e.target.value);
  };

  useEffect(() => {
    if (inputs != "") {
      setFilterProduct("allproduct");
      setFilterBrand("allbrand");
      setFilterPrice("allprice");
    }
  }, [inputs]);

  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          {inputFilteredProduct != "" && (
            <div className="col-md-2 col-4 d-sm-block d-none">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">Filter Product</div>
                    <div className="card-body">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="allproduct"
                          value="allproduct"
                          name="product"
                          onChange={handleFilterProductChange}
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="allproduct"
                        >
                          All
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="jeanscheck"
                          value="jeans"
                          name="product"
                          onChange={handleFilterProductChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="jeanscheck"
                        >
                          Jeans
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="tshirtcheck"
                          value="tshirt"
                          name="product"
                          onChange={handleFilterProductChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="tshirtcheck"
                        >
                          T'shirt
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="shoescheck"
                          value="shoes"
                          name="product"
                          onChange={handleFilterProductChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shoescheck"
                        >
                          Shoe's
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="hoodycheck"
                          value="hoody"
                          name="product"
                          onChange={handleFilterProductChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="hoodycheck"
                        >
                          Hoody
                        </label>
                      </div>
                    </div>
                    <div className="card-header">Filter Brand</div>
                    <div className="card-body">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="allbrand"
                          name="brand"
                          value="allbrand"
                          onChange={handleFilterBrandChange}
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="allbrand">
                          All
                        </label>
                      </div>
                      {uniqueBrandName.map((brand, index) => {
                        return (
                          <div className="form-check" key={index + 1}>
                            <input
                              type="radio"
                              className="form-check-input"
                              id={brand + index}
                              name="brand"
                              value={brand}
                              onChange={handleFilterBrandChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={brand + index}
                            >
                              {brand}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                    <div className="card-header">Filter Price</div>
                    <div className="card-body">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="allprice"
                          name="price"
                          value="allprice"
                          onChange={hanldeFilterPriceChagnge}
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="allprice">
                          All
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="halfToOne"
                          name="price"
                          value="halfToOne"
                          onChange={hanldeFilterPriceChagnge}
                        />
                        <label className="form-check-label" htmlFor="halfToOne">
                          500 - 1k
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="oneToTwo"
                          name="price"
                          value="oneToTwo"
                          onChange={hanldeFilterPriceChagnge}
                        />
                        <label className="form-check-label" htmlFor="oneToTwo">
                          1k - 2k
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="twoToThree"
                          name="price"
                          value="twoToThree"
                          onChange={hanldeFilterPriceChagnge}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="twoToThree"
                        >
                          2k - 3k
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {inputFilteredProduct != "" ? (
            <div className="col-md-10 col-sm-8 col-12">
              {priceFiltering != "" ? (
                <div className="row">
                  {(inputs != "" ? inputFilteredProduct : priceFiltering).map(
                    (product) => {
                      return (
                        <div
                          className="col-xl-2 col-md-3 col-6 px-1 mb-2"
                          key={product.id}
                        >
                          <NavLink
                            to={`singleproduct/${product.id}`}
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
                                  <p className="pl-2 m-0">{product.model}</p>
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
                    }
                  )}
                </div>
              ) : (
                <h1 className="empty-text">No Product Match</h1>
              )}
            </div>
          ) : (
            <div className="col-12">
              <h1 className="empty-text">No Product Match</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Fashion;
