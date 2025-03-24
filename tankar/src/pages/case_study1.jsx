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
import case1 from '../assets/img/innerpage/case-study-img1.jpg'
import case2 from '../assets/img/innerpage/case-study-img1.jpg'
import case3 from '../assets/img/innerpage/case-study-img1.jpg'
import case4 from '../assets/img/innerpage/case-study-img1.jpg'
import case5 from '../assets/img/innerpage/case-study-img1.jpg'
import case6 from '../assets/img/innerpage/case-study-img1.jpg'
import case7 from '../assets/img/innerpage/case-study-img1.jpg'
import case8 from '../assets/img/innerpage/case-study-img1.jpg'
import case9 from '../assets/img/innerpage/case-study-img1.jpg'
const case_study1 = () => {
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
                <li>Case Study</li>
              </ul>
              <h1>Success In The Field.</h1>
            </div>
            <div className="scroll-down-btn">
              <a href="#case-study-card-section">
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
    className="case-study-card-section scroll-margin pt-120 mb-120"
    id="case-study-card-section"
  >
    <div className="container">
      <div className="row g-4 mb-50">
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case1} alt="" />
            </div>
            <div className="card-content">
              <a href="#">Startup Company</a>
              <h4>
                <a href="#">
                  Navigating Growth A Startup Agency Success Story.
                </a>
              </h4>
              <p>
                In this case study, we dissect the challenges faci the
                strategies employed, and the remarkable oun achieved through our
                collaborative efforts.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case2} alt="" />
            </div>
            <div className="card-content">
              <a href="#">Design Agency</a>
              <h4>
                <a href="#">
                  Customer Centric Strategies Acquiring Retaining.
                </a>
              </h4>
              <p>
                This case study unveils the strategic roadmap, the technology
                stack deployed, and the tangible benefits reaped by Egenslab.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case3} alt="" />
            </div>
            <div className="card-content">
              <a href="#">Digital Transformation</a>
              <h4>
                <a href="#">
                  Tech Breakthroughs Solution Pioneering Digital Age.
                </a>
              </h4>
              <p>
                In this case study, we dissect the challenges faci the
                strategies employed, and the remarkable oun achieved through our
                collaborative efforts.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case4} alt="" />
            </div>
            <div className="card-content">
              <a href="#">Startup Company</a>
              <h4>
                <a href="#">
                  Navigating Growth A Startup Agency Success Story.
                </a>
              </h4>
              <p>
                In this case study, we dissect the challenges faci the
                strategies employed, and the remarkable oun achieved through our
                collaborative efforts.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case5} alt="" />
            </div>
            <div className="card-content">
              <a href="#">It Agency</a>
              <h4>
                <a href="#">
                  Digital Transformation Long Journey to Industry.
                </a>
              </h4>
              <p>
                This case study unveils the strategic roadmap, the technology
                stack deployed, and the tangible benefits reaped by Egenslab.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case6} alt="" />
            </div>
            <div className="card-content">
              <a href="#">Creative Agency</a>
              <h4>
                <a href="#">
                  Overcoming Expansion An Initial Agency's Triumph
                </a>
              </h4>
              <p>
                In this case study, we dissect the challenges faci the
                strategies employed, and the remarkable oun achieved through our
                collaborative efforts.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case7} alt="" />
            </div>
            <div className="card-content">
              <a href="#">Marketing</a>
              <h4>
                <a href="#">
                  A Business Consulting to Increase Marketing Analaytic
                </a>
              </h4>
              <p>
                This case study unveils the strategic roadmap, the technology
                stack deployed, and the tangible benefits reaped by Egenslab.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case8} alt="" />
            </div>
            <div className="card-content">
              <a href="#">Global Impact</a>
              <h4>
                <a href="#">
                  Small Business Triumph Over coming Challenges.
                </a>
              </h4>
              <p>
                In this case study, we dissect the challenges faci the
                strategies employed, and the remarkable oun achieved through our
                collaborative efforts.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="case-study-card style-2">
            <div className="card-img">
              <img src={case9} alt="" />
            </div>
            <div className="card-content">
              <a href="#">Global Impact</a>
              <h4>
                <a href="#">
                  Global Impact Scaling Across Operations Borders.
                </a>
              </h4>
              <p>
                In this case study, we dissect the challenges faci the
                strategies employed, and the remarkable oun achieved through our
                collaborative efforts.
              </p>
              <a href="#" className="learn-more-btn">
                Learn MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={9}
                  viewBox="0 0 17 9"
                >
                  <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                  <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
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
          <a href="#" className="load-btn">
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

export default case_study1;
