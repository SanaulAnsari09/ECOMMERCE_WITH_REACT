import React, { useEffect } from "react";
import "./Home.css";
import CardHeroComp from "./CardHeroComp";
import ProductScroller from "./ProductScroller";
import WatchScroller from "./WatchScroller";
import { useLocation } from "react-router-dom";

//mobiles---------------------------------------------------------------

let mobile =
  "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/n/p/-original-imagugptgsfbxauz.jpeg?q=70";
let mobile1 =
  "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/x/0/-original-imagszg3qxqgdx9c.jpeg?q=70";
let mobile2 =
  "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/s/y/narzo-60-5g-rmx3750-realme-original-imagrht2yzyc2jyj.jpeg?q=70";
let mobile3 =
  "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70";

// wathces---------------------------------------------------------------
let watch = "https://m.media-amazon.com/images/I/61t7DyFfewL._SX679_.jpg";
let watch1 = "https://m.media-amazon.com/images/I/61WQsMHoQhL._SX679_.jpg";
let watch2 = "https://m.media-amazon.com/images/I/61akt30bJsL._SX679_.jpg";
let watch3 = "https://m.media-amazon.com/images/I/61ZrPtiuqSL._SX679_.jpg";

// laptops ---------------------------------------------------------------

let laptops = "https://m.media-amazon.com/images/I/71lVVb3ImyL._SX679_.jpg";
let laptops1 = "https://m.media-amazon.com/images/I/813-FmU7N1L._SX679_.jpg";
let laptops2 = "https://m.media-amazon.com/images/I/61cgS33eaRL._SX679_.jpg";
let laptops3 = "https://m.media-amazon.com/images/I/51gkDWHPvQL._SX679_.jpg";

// books -------------------------------------------------------------------

let jeans = "https://m.media-amazon.com/images/I/61T7wpZA6VL._SX679_.jpg";
let jeans1 = "https://m.media-amazon.com/images/I/71P5qOkag+L._SY879_.jpg";
let jeans2 = "https://m.media-amazon.com/images/I/61SRj3IzD1L._SY879_.jpg";
let jeans3 = "https://m.media-amazon.com/images/I/61aXQfoUv+L._SY879_.jpg";

// camera-------------------------------------------------------------------

let boots = "https://m.media-amazon.com/images/I/61+-S5UnFzL._SY695_.jpg";
let boots1 = "https://m.media-amazon.com/images/I/71H7I-T+g8L._SY695_.jpg";
let boots2 = "https://m.media-amazon.com/images/I/71csCqLdKyL._SY695_.jpg";
let boots3 = "https://m.media-amazon.com/images/I/71c135VjaVL._SY695_.jpg";

// tshirt's ---------------------------------------------------------------

let tshirt = "https://m.media-amazon.com/images/I/71O1QaI-sbL._SY879_.jpg";
let tshirt1 = "https://m.media-amazon.com/images/I/815WjQKfE7L._SY879_.jpg";
let tshirt2 = "https://m.media-amazon.com/images/I/81aN1dXJ+CL._SY879_.jpg";
let tshirt3 = "https://m.media-amazon.com/images/I/81JUb2j7IXL._SY879_.jpg";

const Home = ({ location, setLocation }) => {
  const locationVal = useLocation();
  const exactLocation = locationVal.pathname;

  useEffect(() => {
    setLocation(exactLocation);
  });

  return (
    <>
      <section className="heroSection">
        <div className="imageArea">
          <img src="header1.jpg" alt="image" />
        </div>
        <div className="textArea">
          <h1>Summer is comming</h1>
          <h1 className="offer">Upto 80% OFF</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum modi
            non facilis quasi, id officiis repellendus.
          </p>
          <button>
            Shop Now | <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </section>
      {/* <HeroCarousel/> */}

      <section className="cardHero">
        <CardHeroComp
          accessories1={mobile}
          accessories2={mobile1}
          accessories3={mobile2}
          accessories4={mobile3}
          pColor={"orange"}
          bgColor={"linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)"}
          offer={"39%"}
          navlink={"accessories"}
        />
        <CardHeroComp
          accessories1={watch}
          accessories2={watch1}
          accessories3={watch2}
          accessories4={watch3}
          pColor={"yellow"}
          bgColor={"linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"}
          offer={"49%"}
          navlink={"accessories"}
        />
        <CardHeroComp
          accessories1={laptops}
          accessories2={laptops1}
          accessories3={laptops2}
          accessories4={laptops3}
          pColor={"pink"}
          bgColor={
            "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)"
          }
          offer={"29%"}
          navlink={"accessories"}
        />
        <CardHeroComp
          accessories1={jeans}
          accessories2={jeans1}
          accessories3={jeans2}
          accessories4={jeans3}
          pColor={"orange"}
          bgColor={"linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)"}
          offer={"11%"}
          navlink={"fashion"}
        />
        <CardHeroComp
          accessories1={boots}
          accessories2={boots1}
          accessories3={boots2}
          accessories4={boots3}
          pColor={"yellow"}
          bgColor={
            "linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)"
          }
          offer={"19%"}
          navlink={"fashion"}
        />
        <CardHeroComp
          accessories1={tshirt}
          accessories2={tshirt1}
          accessories3={tshirt2}
          accessories4={tshirt3}
          pColor={"pink"}
          bgColor={"linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)"}
          offer={"15%"}
          navlink={"fashion"}
        />
      </section>

      <section className="small-banner">
        <p> Repair Services</p>
        <h1>
          Up to <span>70% off</span> All t-Shirts & Accessories
        </h1>
        <button>Explore More</button>
      </section>

      <section className="product-scroller">
        <ProductScroller />
      </section>
      <section className="watch-scroller">
        <WatchScroller />
      </section>
    </>
  );
};

export default Home;
