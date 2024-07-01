import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa,
          eligendi fuga rem id commodi distinctio neque, inventore amet,
          voluptatum debitis ea minima placeat. Nemo veniam aliquid debitis quas
          odit? Harum, nulla odio commodi laudantium ad iure culpa qui doloribus
          itaque optio fugiat quasi porro expedita, fugit eum distinctio vero?
        </p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locatioins or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <p>56 Glassford Street Glasgow G1 1UL New Yourk</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>091-8809451434</p>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <p>Monday to Saturday: 9:00 AM to 16 PM</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50125142033!2d77.23700863253411!3d28.52210234415207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1693550650591!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="img">
          <img src="doubt.jpg" alt="" />
        </div>
      </section>
    </>
  );
};

export default Contact;
