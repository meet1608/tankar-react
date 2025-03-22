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
const Industry = () => {
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
                <li>Industry</li>
              </ul>
              <h1>Challenge In Every Industry.</h1>
            </div>
            <div className="scroll-down-btn">
              <a href="#industry-card-section">
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
  {/* Start Industry Card Section */}
  <div
    className="industry-card-section scroll-margin pt-120 mb-120"
    id="industry-card-section"
  >
    <div className="container">
      <div className="row g-4">
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-01.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Finance and Banking</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-02.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Retail and E-commerce </h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-03.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Manufacturing</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-04.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Education</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-05.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Telecommunications</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-06.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Energy and Utilities</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-07.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Nonprofit and NGOs</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-08.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Industry Manufacturing</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-09.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Transportation Logistics</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-10.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Healthcare</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-11.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Banks &amp; Insurance</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-12.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Consulting Providers</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-13.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Hospitality and Tourism</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-14.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Construction</h5>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="industry-card">
            <div className="industry-img">
              <img src="assets/img/home5/industry-15.jpg" alt="" />
            </div>
            <div className="industry-content">
              <h5>Entertainment and Media</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Industry Card Section */}
  {/* Start Feature Section */}
  <div className="home1-about-section mb-110">
    <div className="container">
      <div className="row mb-60">
        <div
          className="col-lg-12 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="section-title5">
            <span className="sub-title5 two">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
              How We Do
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
            </span>
            <h2>
              How to Find an Industry Expertise{" "}
              <span> for IT Professionals.</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className="about-bottom-area">
      <div className="container-fluid">
        <div className="row g-5">
          <div
            className="col-lg-3 col-md-6 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="feature-card">
              <div className="icon">
                <img
                  src="assets/img/home1/icon/about-feature-card-icon1.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4>Expertise and Innovation</h4>
                <p>
                  We pride ourselves staying at the front of innovation,
                  constantly pushing boundaries a redefining what's possible.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="feature-card">
              <div className="icon">
                <img
                  src="assets/img/home1/icon/about-feature-card-icon2.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4>Transparent Process</h4>
                <p>
                  Our transparent process is designed to demystify the journey
                  from concept to delivery.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 wow animate fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="feature-card">
              <div className="icon">
                <img
                  src="assets/img/home1/icon/about-feature-card-icon3.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4>Client-Centric Approach</h4>
                <p>
                  Our dedicated team takes the time to listen, &amp;
                  collaborate, ensuring that every interaction a step towards
                  your success.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 wow animate fadeInUp"
            data-wow-delay="800ms"
            data-wow-duration="1500ms"
          >
            <div className="feature-card">
              <div className="icon">
                <img
                  src="assets/img/home1/icon/about-feature-card-icon4.svg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4>Cost-Effective</h4>
                <p>
                  Our commitment to providing cost-effective solutions is
                  ingrained in our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Feature Section */}
  {/* Start Contact section */}
 
</>
<Component />
      <Footer />
    </div>
  )
}

export default Industry;
