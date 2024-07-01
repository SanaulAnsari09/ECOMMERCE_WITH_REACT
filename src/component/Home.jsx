import React, { useEffect } from "react";
import "./Home.css";
import { NavLink, useLocation } from "react-router-dom";
import { TrendingProduct, productList } from "./Data";

const Home = ({ location, setLocation }) => {
  const locationVal = useLocation();
  const exactLocation = locationVal.pathname;

  useEffect(() => {
    setLocation(exactLocation);
  });

  return (
    <>
      {/* Carousel */}
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col">
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img
                    src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bf42fbdd3d37c8c3.jpg?q=20"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item active">
                  <img
                    src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/78e89d02375d5222.jpg?q=20"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Carousel */}

      {/* Category */}
      <div className="container-fluid mt-2">
        <div className="row my-4 justify-content-center r-gap-30">
          <h3>Categories</h3>
          <div className="col-6 col-lg-2 col-sm-4 d-flex justify-content-center image-scale">
            <NavLink to="/accessories">
              <div
                class="card d-flex justify-content-center align-items-center"
                style={{ height: "180px", width: "150px" }}
              >
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70"
                  className="card-img-top"
                  alt="mobile"
                  style={{ height: "140px", width: "110px" }}
                />
              </div>
            </NavLink>
          </div>
          <div className="col-6 col-lg-2 col-sm-4 d-flex justify-content-center image-scale">
            <NavLink to="/accessories">
              <div
                class="card d-flex justify-content-center align-items-center "
                style={{ height: "180px", width: "150px" }}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61t7DyFfewL._SX679_.jpg"
                  className="card-img-top"
                  alt="mobile"
                  style={{ height: "140px", width: "110px" }}
                />
              </div>
            </NavLink>
          </div>
          <div className="col-6 col-lg-2 col-sm-4 d-flex justify-content-center">
            <NavLink to="/accessories">
              <div
                class="card d-flex justify-content-center align-items-center image-scale"
                style={{ height: "180px", width: "150px" }}
              >
                <img
                  src="https://m.media-amazon.com/images/I/71lVVb3ImyL._SX679_.jpg"
                  className="card-img-top"
                  alt="mobile"
                  style={{ height: "140px", width: "110px" }}
                />
              </div>
            </NavLink>
          </div>
          <div className="col-6 col-lg-2 col-sm-4 d-flex justify-content-center">
            <NavLink to="/fashion">
              <div
                class="card d-flex justify-content-center align-items-center image-scale"
                style={{ height: "180px", width: "150px" }}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61T7wpZA6VL._SX679_.jpg"
                  className="card-img-top"
                  alt="mobile"
                  style={{ height: "140px", width: "110px" }}
                />
              </div>
            </NavLink>
          </div>
          <div className="col-6 col-lg-2 col-sm-4 d-flex justify-content-center">
            <NavLink to="/fashion">
              <div
                class="card d-flex justify-content-center align-items-center image-scale"
                style={{ height: "180px", width: "150px" }}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61+-S5UnFzL._SY695_.jpg"
                  className="card-img-top"
                  alt="mobile"
                  style={{ height: "140px", width: "110px" }}
                />
              </div>
            </NavLink>
          </div>
          <div className="col-6 col-lg-2 col-sm-4 d-flex justify-content-center">
            <NavLink to="/fashion">
              <div
                class="card d-flex justify-content-center align-items-center image-scale"
                style={{ height: "180px", width: "150px" }}
              >
                <img
                  src="https://m.media-amazon.com/images/I/71O1QaI-sbL._SY879_.jpg"
                  className="card-img-top"
                  alt="mobile"
                  style={{ height: "140px", width: "110px" }}
                />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* Category */}

      {/* Trending Products */}
      <div className="container-fluid mt-2">
        <h2>Trending Products</h2>
        <div className="row my-4 r-gap-30">
          {TrendingProduct.map((product) => {
            return (
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                <NavLink
                  to={`/singleproduct/${product.id}`}
                  className="text-dark"
                  state={product}
                >
                  <div className="d-flex align-items-center gap-10 shadow rounded py-sm-3 py-1 px-sm-2 image-scale home-trending-card">
                    <div style={{width:"30%"}} className="home-product-card-box">
                      <img
                        src={product.img}
                        alt="image"
                        className="home-product-card"
                        style={{ height: "80px" }}
                      />
                    </div>
                    <div className="py-2 p-0 home-product-card-box-info" style={{width:"70%"}}>
                      <div className="d-flex">
                        <p className="card-title font-weight-bold m-0 home-card-image-text overflow-text">
                          {product.brand}
                        </p>
                        <p className="m-0 pl-4 home-card-image-text overflow-text">
                          ₹ {product.price}
                        </p>
                      </div>
                      <div>
                        <p className=" m-0 home-card-image-text overflow-text">{product.model}</p>
                      </div>
                      <div className="home-card-star">
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
      {/* Trending Products */}

      {/* Gadget Sale */}
      <div className="container-fluid my-5">
        <h2 className="pl-5">Gadget Sale</h2>
        <div className="row r-gap-30">
          {productList
            .filter((p) => p.type == "bluetooth , airdopes")
            .map((prod) => {
              return (
                <div className="col-md-3 col-sm-4 col-6 px-lg-3 px-md-2 px-sm-1">
                  <NavLink
                    to={`/singleproduct/${prod.id}`}
                    className="text-dark"
                    state={prod}
                  >
                    <div className="p-2 h-100 w-100 rounded d-flex flex-column justify-content-center align-items-center sp-bg-color">
                      <div
                        className="img"
                        style={{ height: "70%", width: "70%" }}
                      >
                        <img
                          src={prod.img}
                          alt=""
                          style={{ height: "100%", width: "100%" }}
                          className="rounded"
                        />
                      </div>
                      <div
                        className="offer d-flex justify-content-center align-items-center"
                        style={{ height: "30%", width: "100%" }}
                      >
                        <p className="text-overflow">20% Discount</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
      {/* Gadget Sale */}

      {/* Fashion Sale */}
      <div className="container-fluid my-5">
        <h2 className="pl-5">Fashion Sale</h2>
        <div className="row r-gap-30">
          {productList
            .filter((p) => p.type == "Tshirts")
            .map((prod) => {
              return (
                <div className="col-md-3 col-sm-4 col-6 px-lg-3 px-md-2 px-sm-1">
                  <NavLink
                    to={`/singleproduct/${prod.id}`}
                    className="text-dark"
                    state={prod}
                  >
                    <div className="col p-2 h-100 w-100 rounded d-flex flex-column justify-content-center align-items-center fs-bg-color">
                      <div
                        className="img"
                        style={{ height: "70%", width: "70%" }}
                      >
                        <img
                          src={prod.img}
                          alt=""
                          style={{ height: "100%", width: "100%" }}
                          className="rounded"
                        />
                      </div>
                      <div
                        className="offer d-flex justify-content-center align-items-center"
                        style={{ height: "30%", width: "100%" }}
                      >
                        <p>20% Discount</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
      {/* Fashion Sale */}
    </>
  );
};

export default Home;
