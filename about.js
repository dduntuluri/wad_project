import React from "react";
import Navbar from "./Navbar";
import "./mainStyles.css";
import Add from "./Add";

import img3 from "./img/f7.jpg";

function About() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <section className="about-section">
          <div className="about-content">
            <h1>About Us</h1>
            <p>Welcome to our store! We are dedicated to providing the best products for the Royal Bee Family.</p>
            <p>Our mission is to offer high-quality apparel and accessories that reflect the unique style and personality of our customers.</p>
            <p>With a focus on creativity and innovation, we strive to exceed expectations and inspire confidence in every purchase.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
