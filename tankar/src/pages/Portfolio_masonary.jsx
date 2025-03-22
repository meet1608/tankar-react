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
import Component from './Component';
const Portfolio_masonary = () => {
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
      <div className="row gy-lg-5 g-4 justify-content-between mb-60">
        <div
          className="col-lg-6 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="portfolio-card">
            <div className="image-and-tag">
              <ul className="tag">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Development</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Software</a>
                </li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home5/portfolio-01.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-content">
              <h4>
                <a href="portfolio-details.html">
                  Smart Design, Smarter Solutions.
                </a>
              </h4>
              <a className="details-btn" href="portfolio-details.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="portfolio-card">
            <div className="image-and-tag">
              <ul className="tag">
                <li>
                  <a href="portfolio-grid.html">Logo</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Color</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Typography</a>
                </li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home5/portfolio-02.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-content">
              <h4>
                <a href="portfolio-details.html">
                  Where Vision Meets Technology.
                </a>
              </h4>
              <a className="details-btn" href="portfolio-details.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="portfolio-card">
            <div className="image-and-tag">
              <ul className="tag">
                <li>
                  <a href="portfolio-grid.html">Logo</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Color</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Typography</a>
                </li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home5/portfolio-03.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-content">
              <h4>
                <a href="portfolio-details.html">
                  Studio Navigating the Digital Wave.
                </a>
              </h4>
              <a className="details-btn" href="portfolio-details.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="portfolio-card">
            <div className="image-and-tag">
              <ul className="tag">
                <li>
                  <a href="portfolio-grid.html">Logo</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Color</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Typography</a>
                </li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home5/portfolio-04.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-content">
              <h4>
                <a href="portfolio-details.html">
                  NexGen Pioneering Digital Solutions.
                </a>
              </h4>
              <a className="details-btn" href="portfolio-details.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="portfolio-card">
            <div className="image-and-tag">
              <ul className="tag">
                <li>
                  <a href="portfolio-grid.html">Logo</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Color</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Typography</a>
                </li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home5/portfolio-05.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-content">
              <h4>
                <a href="portfolio-details.html">Unveiling Iconic Identities</a>
              </h4>
              <a className="details-btn" href="portfolio-details.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="portfolio-card">
            <div className="image-and-tag">
              <ul className="tag">
                <li>
                  <a href="portfolio-grid.html">Logo</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Color</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Typography</a>
                </li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home5/portfolio-06.jpg" alt="" />
              </div>
            </div>
            <div className="portfolio-content">
              <h4>
                <a href="portfolio-details.html">
                  Innovative digital options from NexGen.
                </a>
              </h4>
              <a className="details-btn" href="portfolio-details.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
              </a>
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

export default Portfolio_masonary
