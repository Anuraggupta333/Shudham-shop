import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <nav>
        <div id="navbar">
          <div id="nav_img">
            <img src="images/logo.png" alt="Logo" />
          </div>

          <div id="nav_links">
            <ul>
              <li>Home</li>
              <li className="li_hover">
                Category
                <ul className="hover_style">
                  <li>Gifts Hampers</li>
                  <li>Dry Fruits</li>
                </ul>
              </li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="hero_section">
        <div id="hero">
          <h1 class="cursor typewriter-animation">
            Enrich with goodness and purity
          </h1>
          <p>- Tanish Enterprise</p>
        </div>
      </section>

      <section class="features">
        <h2>Why Choose Our Dried Fruits?</h2>
        <div class="feature-cards">
          <div class="feature-card">
            <img src="./images/natural.jpg" alt="Natural" />
            <h3>100% Natural</h3>
            <p>
              No added sugars, preservatives, or artificial flavors — just pure,
              natural fruit goodness.
            </p>
          </div>
          <div class="feature-card">
            <img src="./images/nutritient.jpg" alt="Nutritious" />
            <h3>Nutrient-Rich</h3>
            <p>
              Rich in vitamins, minerals, and fiber to help you maintain a
              healthy lifestyle.
            </p>
          </div>
          <div class="feature-card">
            <img src="./images/sustainable.jpg" alt="Sustainable" />
            <h3>Sustainably Sourced</h3>
            <p>
              Ethically sourced from local farmers who follow sustainable and
              eco-friendly farming practices.
            </p>
          </div>
          <div class="feature-card">
            <img src="./images/money.jpg" alt="Affordable" />
            <h3>Affordable & Fair Pricing</h3>
            <p>
              High-quality dried fruits at prices that offer great value without
              compromising on quality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
