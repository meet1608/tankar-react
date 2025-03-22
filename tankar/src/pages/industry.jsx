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
import industry1 from '../assets/img/industry/industry.jpg'
import industry2 from '../assets/img/industry/industry1.jpg'
import industry3 from '../assets/img/industry/industry2.jpg'
import industry4 from '../assets/img/industry/industry3.jpg'
import industry5 from '../assets/img/industry/industry4.jpg'
import industry6 from '../assets/img/industry/industry5.jpg'
import industry7 from '../assets/img/industry/industry6.jpg'
import industry8 from '../assets/img/industry/industry7.jpg'
import industry9 from '../assets/img/industry/industry8.jpg'
import industry10 from '../assets/img/industry/industry9.jpg'
import industry11 from '../assets/img/industry/industry10.jpg'
import industry12 from '../assets/img/industry/industry11.jpg'
import industry13 from '../assets/img/industry/industry12.jpg'
import industry14 from '../assets/img/industry/industry13.jpg'
import industry15 from '../assets/img/industry/industry14.jpg'
import industry16 from '../assets/img/industry/industry15.jpg'
import industry17 from '../assets/img/industry/industry16.jpg'
import industry18 from '../assets/img/industry/industry17.jpg'
import industry19 from '../assets/img/industry/industry18.jpg'
import industry20 from '../assets/img/industry/industry19.jpg'
import industry21 from '../assets/img/industry/industry20.jpg'
import industry22 from '../assets/img/industry/industry21.jpg'
import industry23 from '../assets/img/industry/industry22.jpg'

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
              <h1>In Every Industry.</h1>
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
              <img src={industry1} alt="" />
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
              <img src={industry2} alt="" />
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
              <img src={industry3} alt="" />
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
              <img src={industry4} alt="" />
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
              <img src={industry5} alt="" />
            </div>
            <div className="industry-content">
              <h5>Healthcare</h5>
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
              <img src={industry6} alt="" />
            </div>
            <div className="industry-content">
              <h5>Fashion</h5>
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
              <img src={industry7} alt="" />
            </div>
            <div className="industry-content">
              <h5>Nonprofit</h5>
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
              <img src={industry8} alt="" />
            </div>
            <div className="industry-content">
              <h5>Startup</h5>
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
              <img src={industry9} alt="" />
            </div>
            <div className="industry-content">
              <h5>Restaurent</h5>
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
              <img src={industry10} alt="" />
            </div>
            <div className="industry-content">
              <h5>Builder</h5>
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
              <img src={industry11}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Logistic &
              Distribution</h5>
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
              <img src={industry12}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Travel &
              Hospitality</h5>
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
              <img src={industry13}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Retail &
              Ecommerce</h5>
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
              <img src={industry14}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Retail Franchise
              Store</h5>
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
              <img src={industry15}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Hotel &
              Resort</h5>
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
              <img src={industry16}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Solar Panel &
              Industry</h5>
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
              <img src={industry17} alt="" />
            </div>
            <div className="industry-content">
              <h5>Resource
Management
</h5>
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
              <img src={industry18}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Machinary</h5>
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
              <img src={industry19}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Contractor</h5>
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
              <img src={industry20}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Agri Culture</h5>
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
              <img src={industry21}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Government</h5>
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
              <img src={industry22}  alt="" />
            </div>
            <div className="industry-content">
              <h5>Finance</h5>
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
              <img src={industry23}  alt="" />
            </div>
            <div className="industry-content">
              <h5>IT Sector</h5>
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
            Finding the Right Industry Expert:{" "}
              <span> A Guide for IT Professionals</span>
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
                We combine expertise and innovation to deliver cutting-edge IT solutions, ensuring scalability, security, and efficiency for long-term business success.</p>
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
                Our Transparent Process ensures clear communication, real-time updates, and client involvement at every stage, fostering trust, efficiency, and seamless project execution for successful IT solutions.
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
                Our Client-Centric Approach focuses on understanding unique business needs, delivering tailored solutions, ensuring seamless communication, and providing dedicated support for long-term success and customer satisfaction.
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
                Our Cost-Effective Solutions provide high-quality IT services at competitive prices, ensuring maximum value, scalability, and efficiency without compromising on innovation, security, or performance.
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
