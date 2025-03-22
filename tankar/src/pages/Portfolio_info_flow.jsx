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
const Portfolio_info_flow = () => {
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
    className="portfolio-info-flow-section  scroll-margin pt-120 mb-120"
    id="portfolio-grid"
  >
    <div className="container">
      <div className="row g-4 mb-50">
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-01.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Unveiling Iconic Identities"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-02.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Navigating Digital Excellence"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-03.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Crafting Graphic Marvels"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-06.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Set the Industry Ablaze"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-07.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Works of Art in Our Portfolio"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-08.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Centric Designs Reshaping"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-09.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Unveiling Iconic Identities"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-10.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Captivating Digital Campaign"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="eg-card2 style-3">
            <div className="card-img">
              <img src="assets/img/home4/portfolio-img-11.jpg" alt="" />
            </div>
            <a
              href="portfolio-details.html"
              data-tooltip-tit="Digital Masterpieces Redfin"
              data-tooltip-sub="Client: Egenslab"
              className="card-content-wrap"
            />
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

export default Portfolio_info_flow
