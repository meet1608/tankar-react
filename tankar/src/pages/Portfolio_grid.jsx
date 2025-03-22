import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/animate.min.css';
import '../assets/css/bootstrap-datetimepicker.min.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/boxicons.min.css';
import '../assets/css/jquery-ui.css';
import '../assets/css/jquery.fancybox.min.css';
import '../assets/css/slick-theme.css';
import '../assets/css/slick.css';
import '../assets/css/style.css';
import '../assets/css/style.css.map';
import '../assets/css/swiper-bundle.min.css';
import port1 from '../assets/img/home4/portfolio-img-01.jpg'
import port2 from '../assets/img/home4/portfolio-img-02.jpg'
import port3 from '../assets/img/home4/portfolio-img-03.jpg'
import port6 from '../assets/img/home4/portfolio-img-06.jpg'
import port7 from '../assets/img/home4/portfolio-img-07.jpg'
import port8 from '../assets/img/home4/portfolio-img-08.jpg'
import port9 from '../assets/img/home4/portfolio-img-09.jpg'
import port10 from '../assets/img/home4/portfolio-img-10.jpg'
import port11 from '../assets/img/home4/portfolio-img-11.jpg'
import Component from './Component';




const Portfolio_grid = () => {
  return (
    <div>
      <Navbar />
      <>
  <div
    className="breadcrumb-section"
    style={{
      backgroundImage:
        "url(assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)"
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-wrapper">
            <div className="banner-content">
              <ul className="breadcrumb-list">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Portfolio</li>
              </ul>
              <h1>Showcase Our Portfolio.</h1>
            </div>
            <div className="scroll-down-btn">
              <a href="#portfolio-grid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={19}
                  height={29}
                  viewBox="0 0 19 29"
                >
                  <path d="M9.5 0V28M9.5 28C10 24.3333 12.4 17.1 18 17.5M9.5 28C8.5 24.1667 5.4 16.7 1 17.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Breadcrumb section */}
  {/* Start Team Section */}
  <div
    className="portfolio-grid-section scroll-margin pt-120 mb-120"
    id="portfolio-grid"
  >
    <div className="container">
      <div className="row g-4 mb-50">
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port1} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">Unveiling Iconic Identities</a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Development</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port2} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">
                  Navigating Digital Excellence
                </a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Logo Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Digital Graphics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port3} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">Crafting Graphic Marvels</a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Print Collateral</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Digital Graphics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port6} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">Set the Industry Ablaze </a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Print Collateral</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Digital Graphics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port7} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">
                  Works of Art in Our Portfolio
                </a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Logo Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Digital Graphics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port8} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">Centric Designs Reshaping</a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Print Collateral</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Digital Graphics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port9} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">Unveiling Iconic Identities</a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Print Collateral</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Digital Graphics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port10} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">
                  Captivating Digital Campaign
                </a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Digital Graphics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2">
            <div className="card-img">
              <img src={port11} alt="" />
            </div>
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">Digital Masterpieces Redfin</a>
              </h5>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Development</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-12 d-flex justify-content-center wow animate fadeInUp"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <a href="package-grid.html" className="load-btn">
            <span>
              Load More
              <svg viewBox="0 0 13 20">
                <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* End Team Section */}
  {/* Start Contact section */}
 
</>
<Component />
      <Footer />
    </div>
  )
}

export default Portfolio_grid
