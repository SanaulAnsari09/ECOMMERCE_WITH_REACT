import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";
import Accessories from "./component/Accessories";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Fashion from "./component/Fashion";
import Contact from "./component/Contact";
import About from "./component/About";
import SingleProduct from "./component/SingleProduct";
import "./component/global.css";
import Signup from "./component/auth/Signup";
import Login from "./component/auth/Login";

const App = () => {
  
  const [product, setProduct] = useState([]);
  const [inputs, setInputs] = useState("");
  const [location, setLocation] = useState();

  return (
    <>
      <BrowserRouter>
        <Navbar product={product} inputs={inputs} setInputs={setInputs} />
        <Routes>
          <Route
            path="/"
            element={<Home location={location} setLocation={setLocation} />}
          ></Route>
          <Route
            path="/accessories"
            element={
              <Accessories
                product={product}
                setProduct={setProduct}
                inputs={inputs}
                setInputs={setInputs}
                location={location}
                setLocation={setLocation}
              />
            }
          ></Route>
          <Route
            path="/fashion"
            element={
              <Fashion
                product={product}
                setProduct={setProduct}
                inputs={inputs}
                setInputs={setInputs}
                location={location}
                setLocation={setLocation}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/cart"
            element={<Cart product={product} setProduct={setProduct} />}
          ></Route>
          <Route
            path={`${location}/singleproduct/:name`}
            element={
              <SingleProduct product={product} setProduct={setProduct} />
            }
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
