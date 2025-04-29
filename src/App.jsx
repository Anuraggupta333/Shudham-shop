import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";


function App() {
  const [isOpen, setOpen] = useState(true);
  const [isOpencat, setOpenCat] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const handlehamburger = () => {
    setOpen(!isOpen);
    setOpenCat(true);
    console.log(isOpen);
  };
  const handleCategory = () => {
    setOpenCat(!isOpencat);
    console.log(isOpencat);
  };

  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
      },
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <nav>
        <div id="navbar">
          <div id="first_part">
            <div id="nav_img">
              <img src="./images/logo.png" alt="Logo" />
            </div>

            <div id="nav_links">
              <ul>
                <li>
                  {" "}
                  <a href="#hero_section"> Home</a>
                </li>
                <li className="li_hover">
                  <a>Category</a>
                  <ul className="hover_style">
                    <li>
                      {" "}
                      <a href="#gift_products"> Gift hampers</a>{" "}
                    </li>
                    <li>
                      <a href="#products"> Dry Fruits</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#products"> Products </a>
                </li>
                <li>
                  <a href="#testimonials"> Reviews </a>
                </li>
                <li>
                  <a href="#footer-section"> About Us </a>
                </li>
              </ul>
            </div>
            <div id="ham">
              <Hamburger onToggle={handlehamburger} direction="right" />
            </div>
          </div>
          <div className={isOpen ? "" : "hamtoggle"} id="ham_menu">
            <ul>
              <li>
                {" "}
                <a href="#hero_section">Home</a>
              </li>
              <li onClick={handleCategory} id="li_hover2">
                Category +
                <ul
                  className={isOpencat ? "catclose" : "catOpen"}
                  id="hover_style2"
                >
                  <li>
                    {" "}
                    <a href="#gift_products"> Gift hampers</a>{" "}
                  </li>
                  <li>
                    <a href="#products"> Dry Fruits</a>{" "}
                  </li>
                </ul>
              </li>
              <li>
                <a href="#products"> Products </a>
              </li>
            
              <li>
                {" "}
                <a href="#testimonials"> Reviews </a>
              </li>
              <li>
                {" "}
                <a href="#footer-section"> About Us </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="hero_section">
        <div id="hero">
          <h1 class="cursor typewriter-animation">
            Enrich with goodness and purity .
          </h1>
          <p>- Tanish Enterprise</p>
        </div>
        {/* <div id="producttest"></div> */}
      </section>

      {/* products */}
      <section id="products" class="products">
        <h2>Our Premium Products</h2>
        <div class="product-grid">
          <div class="product-card">
            <img src="images/static-img.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
            </div>
          </div>
          <div class="product-card">
            <img src="images/static-img.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
            </div>
          </div>
          <div class="product-card">
            <img src="images/static-img.jpg" alt="Dried Apricots" />
            <div class="product-info">
              <h3>Dried Apricots</h3>
              <p>Soft and chewy apricots with rich flavor.</p>
              <div class="price">$8.99</div>
            </div>
          </div>
          <div class="product-card">
            <img src="images/static-img.jpg" alt="Mixed Berries" />
            <div class="product-info">
              <h3>Mixed Berries</h3>
              <p>
                A delicious blend of strawberries, blueberries, and cherries.
              </p>
              <div class="price">$10.99</div>
            </div>
          </div>
          <div class="product-card">
            <img src="images/static-img.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
            </div>
          </div>
          <div class="product-card">
            <img src="images/static-img.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
            </div>
          </div>
          <div class="product-card">
            <img src="images/static-img.jpg" alt="Dried Apricots" />
            <div class="product-info">
              <h3>Dried Apricots</h3>
              <p>Soft and chewy apricots with rich flavor.</p>
              <div class="price">$8.99</div>
            </div>
          </div>
          <div class="product-card">
            <img src="images/static-img.jpg" alt="Mixed Berries" />
            <div class="product-info">
              <h3>Mixed Berries</h3>
              <p>
                A delicious blend of strawberries, blueberries, and cherries.
              </p>
              <div class="price">$10.99</div>
            </div>
          </div>
        </div>
      </section>

      <section id="gift_products" class="products">
        <h2>Our Gift Items</h2>
        <div class="product-grid">
          <div data-aos="flip-left" data-aos-delay="0" class="product-card">
            <img src="images/giftimage.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="100" class="product-card">
            <img src="images/giftimage.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="200" class="product-card">
            <img src="images/giftimage.jpg" alt="Dried Apricots" />
            <div class="product-info">
              <h3>Dried Apricots</h3>
              <p>Soft and chewy apricots with rich flavor.</p>
              <div class="price">$8.99</div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="300" class="product-card">
            <img src="images/giftimage.jpg" alt="Mixed Berries" />
            <div class="product-info">
              <h3>Mixed Berries</h3>
              <p>
                A delicious blend of strawberries, blueberries, and cherries.
              </p>
              <div class="price">$10.99</div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="400" class="product-card">
            <img src="images/giftimage.jpg" alt="Dried Mango" />
            <div class="product-info">
              <h3>Dried Mango</h3>
              <p>Sweet, tropical mango slices dried to perfection.</p>
              <div class="price">$9.99</div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="500" class="product-card">
            <img src="images/giftimage.jpg" alt="Dried Cranberries" />
            <div class="product-info">
              <h3>Dried Cranberries</h3>
              <p>Tangy and sweet cranberries, perfect for snacking.</p>
              <div class="price">$7.99</div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="600" class="product-card">
            <img src="images/giftimage.jpg" alt="Dried Apricots" />
            <div class="product-info">
              <h3>Dried Apricots</h3>
              <p>Soft and chewy apricots with rich flavor.</p>
              <div class="price">$8.99</div>
            </div>
          </div>
          <div data-aos="flip-left" data-aos-delay="700" class="product-card">
            <img src="images/giftimage.jpg" alt="Mixed Berries" />
            <div class="product-info">
              <h3>Mixed Berries</h3>
              <p>
                A delicious blend of strawberries, blueberries, and cherries.
              </p>
              <div class="price">$10.99</div>
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
        <div id="test"></div>
      </section>

      <section id="testimonials" class="testimonials">
        <h2>What Our Customers Say</h2>
        <div id="testimonial-cards1" class="testimonial-cards">
          <Slider {...settings}>
            <div>
              <div class="testimonial-card">
                <p>
                  "The dried fruits are so fresh and natural! You can really
                  taste the difference. No added sugars, just pure goodness.
                  Highly satisfied!"
                </p>
                <div class="author">- Ankush Sharma</div>
              </div>
            </div>
            <div>
              <div class="testimonial-card">
                <p>
                  "Amazing quality at such an affordable price! I’ve tried many
                  brands but these dried fruits are the best value for money."
                </p>
                <div class="author">- Anurag Gupta</div>
              </div>
            </div>
            <div>
              <div class="testimonial-card">
                <p>
                  "Top-notch quality! Each piece tastes so fresh and flavorful.
                  I always keep a pack in my bag for healthy snacking."
                </p>
                <div class="author">- Rahul Mahor</div>
              </div>
            </div>
            <div>
              <div class="testimonial-card">
                <p>
                  "The quality and taste of these dried fruits are unmatched.
                  It’s hard to believe something this good is also so
                  affordable. Highly recommend!"
                </p>
                <div class="author">- Raj Tomar</div>
              </div>
            </div>
            <div>
              <div class="testimonial-card">
                <p>
                  "Impressed by the super fast delivery! I placed my order and
                  it arrived within two days, perfectly packed and fresh."
                </p>
                <div class="author">- Neha Mehta</div>
              </div>
            </div>
            <div>
              <div class="testimonial-card">
                <p>
                  "The packaging is beautiful and keeps the fruits really fresh.
                  It also makes the products look very premium!"
                </p>
                <div class="author">- Ayushi Shukla</div>
              </div>
            </div>
            <div>
              <div class="testimonial-card">
                <p>
                  "Loved the variety! From mangoes to cranberries and figs,
                  there’s something for everyone. Great for healthy snacking."
                </p>
                <div class="author">- Diksha Jain</div>
              </div>
            </div>
            <div>
              <div class="testimonial-card">
                <p>
                  "These dried fruits make for such a perfect gift! I gave a box
                  to my friend and she absolutely loved it."
                </p>
                <div class="author">- Harshita Pathak</div>
              </div>
            </div>
          </Slider>
        </div>
        <div id="testimonial-cards2" class="testimonial-cards">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay, FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="testimonial-card">
                <p>
                  "The dried fruits are so fresh and natural! You can really
                  taste the difference. No added sugars, just pure goodness.
                  Highly satisfied!"
                </p>
                <div class="author">- Ankush Sharma</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-card">
                <p>
                  "Amazing quality at such an affordable price! I’ve tried many
                  brands but these dried fruits are the best value for money."
                </p>
                <div class="author">- Anurag Gupta</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-card">
                <p>
                  "Top-notch quality! Each piece tastes so fresh and flavorful.
                  I always keep a pack in my bag for healthy snacking."
                </p>
                <div class="author">- Rahul Mahor</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-card">
                <p>
                  "The quality and taste of these dried fruits are unmatched.
                  It’s hard to believe something this good is also so
                  affordable. Highly recommend!"
                </p>
                <div class="author">- Raj Tomar</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-card">
                <p>
                  "Impressed by the super fast delivery! I placed my order and
                  it arrived within two days, perfectly packed and fresh."
                </p>
                <div class="author">- Neha Mehta</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-card">
                <p>
                  "The packaging is beautiful and keeps the fruits really fresh.
                  It also makes the products look very premium!"
                </p>
                <div class="author">- Ayushi Shukla</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-card">
                <p>
                  "Loved the variety! From mangoes to cranberries and figs,
                  there’s something for everyone. Great for healthy snacking."
                </p>
                <div class="author">- Diksha Jain</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-card">
                <p>
                  "These dried fruits make for such a perfect gift! I gave a box
                  to my friend and she absolutely loved it."
                </p>
                <div class="author">- Harshita Pathak</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <footer>
        <div class="footer-content">
          <div id="footer-section" class="footer-section">
            <h3>About Us</h3>
            <p>
              At <b>Shudhham</b>, we believe that healthy eating should be
              simple, natural, and delicious. We are passionate about bringing
              you the finest quality dried fruits, sourced directly from trusted
              farms, and prepared with care to preserve their natural flavor and
              goodness. Our journey began with a simple mission — to offer
              healthy snacks that are free from artificial preservatives, added
              sugars, and harmful chemicals. Every product we deliver is a
              promise of freshness, quality, and authenticity. Whether you’re
              looking for a quick energy boost, a nutritious addition to your
              meals, or a thoughtful gift, our wide variety of dried fruits is
              perfect for every occasion. From sweet mango slices to tangy
              cranberries, we have something for every taste and lifestyle. We
              are proud to be a part of your healthy living journey and are
              committed to providing products that you and your family can
              trust. Thank you for choosing <b>Shudhham</b> — where nature meets
              taste!
            </p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#products">Products</a>

            <a href="#test">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="footer-section">
            <h3>Contact Us</h3>
            <p>Email: jaintanish@gmail.com</p>
            <p>
              Phone:<a href="tel:+918871452513"> +91-8871452513</a>
            </p>
            <p>
             <a href="https://www.google.co.in/maps/dir//Shudhham+by+TANISH+ENTERPRISES,+Building,+15,+MR+1,+near+medihub+clinic,+Mahalaxmi+Nagar,+Indore,+Madhya+Pradesh+452010/@22.7544968,75.9094014,17z/data=!4m17!1m7!3m6!1s0x3962e34683f4d993:0xaa8d0b229d2271d0!2sShudhham+by+TANISH+ENTERPRISES!8m2!3d22.7544968!4d75.9119763!16s%2Fg%2F11y9b5zv2f!4m8!1m0!1m5!1m1!1s0x3962e34683f4d993:0xaa8d0b229d2271d0!2m2!1d75.9119941!2d22.7544948!3e3?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D">
             Building, 15, MR 1, near medihub clinic, Mahalaxmi Nagar, Indore,
             Madhya Pradesh 452010
             </a>
            </p>
          </div>
        </div>

        <div class="social-links">
          <a href="https://www.instagram.com/shudhham_?igsh=MXJ4cWt2bGllYXJx" id="link_icon1">
            <FaFacebook size={28} />
          </a>
          <a href="https://www.instagram.com/shudhham_?igsh=MXJ4cWt2bGllYXJx" id="link_icon2">
            <IoLogoInstagram size={24} />
          </a>
          <a href="https://www.instagram.com/shudhham_?igsh=MXJ4cWt2bGllYXJx" id="link_icon3">
            <FaTwitter size={24} />
          </a>
          <a
            href="https://wa.me/918871452513?text=Hello%20Shudhham%2C%20I%20am%20interested%20in%20your%20products."
            id="link_icon4"
          >
            <IoLogoWhatsapp size={28} />
          </a>
        </div>
        <div class="copyright">&copy; 2025 Shudhham. All rights reserved.</div>
      </footer>

      <a id="top_arrow" href="#hero_section"><div id="topscroll">
      <FaArrowUp size={24}/>
    </div></a>
    </>
  );
}

export default App;
