import React, { useEffect, useMemo, useState } from "react";
// import "./global.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productList } from "./Data";

const Accessories = ({
  product,
  setProduct,
  inputs,
  setInputs,
  setLocation,
}) => {
  const navigate = useNavigate();

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

  let accessoriesList = productList.filter(
    (product) =>
      product?.type?.toLowerCase() == "mobile" ||
      product?.type?.toLowerCase() == "laptop" ||
      product?.type?.toLowerCase() == "watch" ||
      product?.type?.toLowerCase() == "bluetooth , airdopes"
  );

  let inputFilteredProduct = accessoriesList.filter((v, i) => {
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
      return accessoriesList;
    }
  });

  let sidebarFilteredProduct = accessoriesList.filter((v, i) => {
    if (filterProduct == "allproduct") {
      return accessoriesList;
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
      case "fiveToOne":
        return product.price >= 500 && product.price <= 1000;
      case "oneToTwo":
        return product.price >= 1000 && product.price <= 2000;
      case "oneToFive":
        return product.price >= 1000 && product.price <= 5000;
      case "fiveToTen":
        return product.price >= 5000 && product.price <= 10000;
      case "tenToTwenty":
        return product.price >= 10000 && product.price <= 20000;
      case "tentToThirty":
        return product.price >= 10000 && product.price <= 30000;
      case "twentyToThirty":
        return product.price >= 20000 && product.price <= 30000;
      case "thirtyToFivety":
        return product.price >= 30000 && product.price <= 50000;
      case "fivetyToSeventy":
        return product.price >= 50000 && product.price <= 70000;
      case "seventyToHundred":
        return product.price >= 70000 && product.price <= 10000;
    }
  });

  let productBrandName = sidebarFilteredProduct.map((product) => product.brand);

  let uniqueBrandName = [...new Set(productBrandName)];

  function handleFilterProductChange(e) {
    setFilterProduct(e.target.value);
  }

  function hanldeFilterPriceChagnge(e) {
    setFilterPrice(e.target.value);
  }

  function handleFilterBrandChange(e) {
    setFilterBrand(e.target.value);
  }

  useEffect(()=>{
    if(inputs !=""){
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
            <div className="col-md-2 col-4 d-sm-block d-none filter-sidebar">
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
                          value="mobile"
                          name="product"
                          onChange={handleFilterProductChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="jeanscheck"
                        >
                          Mobile
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="tshirtcheck"
                          value="laptop"
                          name="product"
                          onChange={handleFilterProductChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="tshirtcheck"
                        >
                          Laptop
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="shoescheck"
                          value="watch"
                          name="product"
                          onChange={handleFilterProductChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shoescheck"
                        >
                          Watch
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="bluetoothcheck"
                          value="bluetooth"
                          name="product"
                          onChange={handleFilterProductChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="bluetoothcheck"
                        >
                          Bluetooth
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
                      {filterProduct === "mobile" && (
                        <>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="tenToTwenty"
                              name="price"
                              value="tenToTwenty"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="tenToTwenty"
                            >
                              10k - 20k
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="twentyToThirty"
                              name="price"
                              value="twentyToThirty"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="twentyToThirty"
                            >
                              20k - 30k
                            </label>
                          </div>
                        </>
                      )}
                      {filterProduct === "laptop" && (
                        <>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="thirtyToFivety"
                              name="price"
                              value="thirtyToFivety"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="thirtyToFivety"
                            >
                              30k - 50k
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="fivetyToSeventy"
                              name="price"
                              value="fivetyToSeventy"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="fivetyToSeventy"
                            >
                              50k - 70k
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="seventyToHundred"
                              name="price"
                              value="seventyToHundred"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="seventyToHundred"
                            >
                              70k - 100k
                            </label>
                          </div>
                        </>
                      )}
                      {filterProduct === "watch" && (
                        <>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="oneToFive"
                              name="price"
                              value="oneToFive"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="oneToFive"
                            >
                              1k - 5k
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="fiveToTen"
                              name="price"
                              value="fiveToTen"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="fiveToTen"
                            >
                              5k - 10k
                            </label>
                          </div>
                        </>
                      )}
                      {filterProduct === "bluetooth" && (
                        <>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="fiveToOne"
                              name="price"
                              value="fiveToOne"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="fiveToOne"
                            >
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
                            <label
                              className="form-check-label"
                              htmlFor="oneToTwo"
                            >
                              1k - 2k
                            </label>
                          </div>
                        </>
                      )}
                      {filterProduct === "allproduct" && (
                        <>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="oneToFive"
                              name="price"
                              value="oneToFive"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="oneToFive"
                            >
                              1k - 5k
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="fiveToTen"
                              name="price"
                              value="fiveToTen"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="fiveToTen"
                            >
                              5k - 10k
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="tentToThirty"
                              name="price"
                              value="tentToThirty"
                              onChange={hanldeFilterPriceChagnge}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="tentToThirty"
                            >
                              10k - 30k
                            </label>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {inputFilteredProduct != "" ? (
            <div className="col-md-10 col-sm-8 col-12 product Empty-Product-Text">
              {priceFiltering != "" ? (
                <div className="row">
                  {(inputs == "" ? priceFiltering : inputFilteredProduct).map(
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
                            <div className="card ">
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

export default Accessories;
