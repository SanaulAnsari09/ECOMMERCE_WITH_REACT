import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa,
          eligendi fuga rem id commodi distinctio neque, inventore amet,
          voluptatum debitis ea minima placeat. Nemo veniam aliquid debitis quas
          odit? Harum, nulla odio commodi laudantium ad iure culpa qui doloribus
          itaque optio fugiat quasi porro expedita, fugit eum distinctio vero?
        </p>
      </section>

      <section className="about_second">
        <h3>Know More Here ...</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
          cum.
        </p>
        <div className="flexArea">
          <div className="firstFelx">
            <img src="shopping.jpg" alt="" />
          </div>
          <div className="secondFlex">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum
              est iure cupiditate quaerat quam consequuntur quis quos doloribus
              ipsam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              voluptatibus distinctio consequuntur earum quas ex!
            </p>
            {/* <p>Features</p> */}
            <div className="icons">
              <div>
                <i class="fa-solid fa-truck"></i>
                <span>Fast Delivery</span>
              </div>
              <div>
                <i class="fa-solid fa-arrow-rotate-left"></i>
                <span>Return Policy</span>
              </div>
              <div>
                <i class="fa-solid fa-handshake"></i>
                <span>Good Relation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
