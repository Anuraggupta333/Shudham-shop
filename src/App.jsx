import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Sling as Hamburger } from "hamburger-react";

function App() {
  return (
    <>
      <nav>
        <div id="navbar">
          <div id="nav_img">
            <img src="./images/logo.png" alt="Logo" />
          </div>

          <div id="nav_links">
            <ul>
              <li>Home</li>
              <li className="li_hover">
                Category
                <ul className="hover_style">
                  <li>Gift hampers</li>
                  <li>Dry Fruits</li>
                </ul>
              </li>
              <li>Products</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div id="ham">
            <Hamburger direction="right" />
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

      {/* products */}
      <section id="products" class="products">
        <h2>Our Premium Products</h2>
        <div class="product-grid">
          <div class="product-card">
            <img src="./images/static-img.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/static-img.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/static-img.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/static-img.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/static-img.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/static-img.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/static-img.jpg" alt="Dried Apricots" />
            <div class="product-info">
              <h3>Dried Apricots</h3>
              <p>Soft and chewy apricots with rich flavor.</p>
              <div class="price">$8.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/static-img.jpg" alt="Mixed Berries" />
            <div class="product-info">
              <h3>Mixed Berries</h3>
              <p>
                A delicious blend of strawberries, blueberries, and cherries.
              </p>
              <div class="price">$10.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Gift items */}
      <section id="products" class="products">
        <h2>Our Gift Items</h2>
        <div class="product-grid">
          <div class="product-card">
            <img src="./images/gift.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/gift.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/gift.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/gift.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/gift.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/gift.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/gift.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
          <div class="product-card">
            <img src="./images/gift.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
              {/* <button class="add-to-cart">Add to Cart</button> */}
            </div>
          </div>
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

      {/* <section id="testimonials" class="testimonials">
        <h2>What Our Customers Say</h2>
        <div class="testimonial-cards">

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
            delay: 2000, 
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> 
          <div class="testimonial-card">
                <p>"These dried fruits are absolutely delicious! The mangoes taste like candy but are completely natural. I'm a customer for life!"</p>
                <div class="author">- Sarah Johnson</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="testimonial-card">
                <p>"I love adding these dried fruits to my morning oatmeal. Great quality and the taste is incredible. Highly recommend!"</p>
                <div class="author">- Michael Rodriguez</div>
            </div>
        </SwiperSlide>
        <SwiperSlide><div class="testimonial-card">
                <p>"As someone who's always looking for healthy snacks, these dried fruits are perfect. No added sugar and they're still amazingly sweet!"</p>
                <div class="author">- Emma Thompson</div>
            </div>
            </SwiperSlide>
        <SwiperSlide><div class="testimonial-card">
                <p>"As someone who's always looking for healthy snacks, these dried fruits are perfect. No added sugar and they're still amazingly sweet!"</p>
                <div class="author">- Emma Thompson</div>
            </div>
            </SwiperSlide>
        
      </Swiper>

           
            
            
        </div>
    </section> */}
    </>
  );
}

export default App;
