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
const Portfolio_list = () => {
  return (
    <div>
      <Navbar />
      <>
  {/* Start Breadcrumb section */}
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
    className="portfolio-list-section scroll-margin pt-120 mb-120"
    id="portfolio-grid"
  >
    <div className="container">
      <div
        className="eg-card2 style-2 mb-60 wow animate fadeInDown"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="card-img">
              <img src="assets/img/innerpage/portfolio-list-img1.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">
                  Designing a Stylish Online Presence.
                </a>
              </h5>
              <p>
                There are many variations of simply free text passages of
                available bumo the majority have suffered alteration in some
                form, by injected humanjort randomised words which don't
                slightly.
              </p>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Development</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Graphic Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Software</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="eg-card2 style-2 mb-60 wow animate fadeInDown"
        data-wow-delay="400ms"
        data-wow-duration="1500ms"
      >
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="card-img">
              <img src="assets/img/innerpage/portfolio-list-img2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">
                  Visual Dynamics Creating A Striking Brand
                </a>
              </h5>
              <p>
                Here are several variations of the readily available free text
                passages, most of which have undergone some sort of modification
                due to the introduction of humanjort randomised words that don't
                quite fit in.
              </p>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Development</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Graphic Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Software</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="eg-card2 style-2 mb-60 wow animate fadeInDown"
        data-wow-delay="600ms"
        data-wow-duration="1500ms"
      >
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="card-img">
              <img src="assets/img/innerpage/portfolio-list-img3.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">
                  Tech Fusion Integrate One Solutions.
                </a>
              </h5>
              <p>
                The bulk of the simply free text sections that are provided have
                been altered in some way, usually by adding humanjort randomised
                words that don't change much.
              </p>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Development</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Graphic Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Software</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="eg-card2 style-2 mb-60 wow animate fadeInDown"
        data-wow-delay="800ms"
        data-wow-duration="1500ms"
      >
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="card-img">
              <img src="assets/img/innerpage/portfolio-list-img4.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">
                  Interctive Wonderland An Immersive Expo.
                </a>
              </h5>
              <p>
                A significant number of the readily available free text passages
                have had some sort of alteration, with the majority undergoing
                small modifications due to the introduction of human-curated
                random words.
              </p>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Development</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Graphic Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Software</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="eg-card2 style-2 mb-60 wow animate fadeInDown"
        data-wow-delay="800ms"
        data-wow-duration="1500ms"
      >
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="card-img">
              <img src="assets/img/innerpage/portfolio-list-img5.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-content">
              <span>Client: Egenslab</span>
              <h5>
                <a href="portfolio-details.html">
                  Code Crafed Magic Digital Landscape.
                </a>
              </h5>
              <p>
                There are several versions of the readily available free text
                passages, most of which have been altered in some way by the
                addition of humanjort randomised words that don't quite fit in.
              </p>
              <ul className="tag-list">
                <li>
                  <a href="portfolio-grid.html">Web Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Development</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Graphic Design</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Software</a>
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

export default Portfolio_list
