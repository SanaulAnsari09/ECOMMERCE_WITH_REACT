import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="section-p1 footer">
        <div className="col">
          <img className="logo" src="clickShop.png" alt="image" />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong>Noida Sector 57
          </p>
          <p>
            <strong>Phone</strong>8252232266 / 8809451434
          </p>
          <p>
            <strong>Hours</strong>Noida Sector 57
          </p>
          <div class="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">Vew Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store Or Google Play</p>
          <div class="row">
            <img src="app.jpg" alt="image" />
            <img src="play.jpg" alt="image" />
          </div>
          <p>From App Store Or Google Play</p>
          <img src="pay.png" alt="image" />
        </div>

        <div className="copyright">
          <p>© 2023 cara E-commerce selling website</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
