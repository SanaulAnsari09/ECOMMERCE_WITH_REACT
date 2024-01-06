import React from "react";
import "./watchscroller.css";
import { fashionData } from "./Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

const WatchScroller = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="WScontainer">
        <h1>Trending Fashion</h1>
        <Slider {...settings}>
          {fashionData
            .filter((value) => value.isTrending === true)

            .map((value, index) => {
              return (
                <div className="product" key={value.id}>
                  <div className="cardImg">
                    <img src={value.img} alt="mobile" />
                  </div>
                  <div className="cardDetail">
                    <div className="mobileInfo">
                      <h5>{value.model}</h5>
                      <p>{`₹${value.price}`}</p>
                    </div>
                    <div className="sapce_camera">
                      <p>{value.brand}</p>
                      <p>{value.color}</p>
                    </div>
                    <div className="buttons">
                      <NavLink to={`singleproduct/${value.id}`} state={value}>
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default WatchScroller;
