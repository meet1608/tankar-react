import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap-datetimepicker.min.css";
import "../assets/css/bootstrap-icons.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/jquery.fancybox.min.css";
import "../assets/css/slick-theme.css";
import "../assets/css/slick.css";
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/swiper-bundle.min.css";

import banner from "../assets/img/home2/home2-banner-img.png";
import Component from "./Component";
import comp1 from "../assets/img/home2/company-logo-01.png";
import comp2 from "../assets/img/home2/company-logo-02.png";
import comp3 from "../assets/img/home2/company-logo-03.png";
import comp4 from "../assets/img/home2/company-logo-04.png";
import comp5 from "../assets/img/home2/company-logo-05.png";
import comp6 from "../assets/img/home2/company-logo-06.png";
import comp7 from "../assets/img/home2/company-logo-07.png";
import feature from "../assets/img/home2/feature-img1.jpg";
import feature2 from "../assets/img/home2/feature-img2.jpg";
import feature3 from "../assets/img/home2/feature-img3.jpg";

import marketing from "../assets/img/home2/marketing-activity-graf-img.png";
import marketing_dark from "../assets/img/home2/marketing-activity-graf-img-dark.png";
import performance from "../assets/img/home2/marketing-performance-graf-img.png";
import case1 from "../assets/img/home2/case-study-img1.jpg";
import case2 from "../assets/img/home2/case-study-img2.jpg";
import case3 from "../assets/img/home2/case-study-img3.jpg";
import case4 from "../assets/img/home2/case-study-img4.jpg";
import case5 from "../assets/img/home2/case-study-img5.jpg";
import clutch from "../assets/img/home1/icon/clutch-logo.svg";
import clutch_white from "../assets/img/home1/icon/clutch-logo-white.svg";
import google from "../assets/img/home1/icon/google-logo.svg";
import blog1 from "../assets/img/home2/blog-img1.jpg";
import blog2 from "../assets/img/home2/blog-img2.jpg";
import auth1 from "../assets/img/home2/testi-author-01.png";
import auth2 from "../assets/img/home2/testi-author-02.png";
import auth3 from "../assets/img/home2/testi-author-03.png";
import auth4 from "../assets/img/home2/testi-author-04.png";
import Career1 from "../assets/img/Services/career1.png";
import Career2 from "../assets/img/Services/career2.png";
import Career3 from "../assets/img/Services/career3.png";
import Career4 from "../assets/img/Services/career4.png";
import Career5 from "../assets/img/Services/career5.png";
import Career6 from "../assets/img/Services/career6.png";
const Career = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <>
        {/* Start Banner section */}
        <div className="home2-banner-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="banner-content">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                    </svg>
                    Join Our Team at Tankar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                    </svg>
                  </span>
                  <h1>
                    Build the Future with Us
                    <span className="text-type" />
                  </h1>
                  <p>
                    At Tankar Solutions Pvt Ltd, innovation drives everything we
                    do. We are a team of passionate problem-solvers, dedicated
                    to building cutting-edge technology solutions. If you're
                    looking for a workplace that fosters creativity,
                    collaboration, and career growth, you're in the right place.
                  </p>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="banner-img">
                  <img src={banner} alt="" className="light-img" />
                  <img
                    src="assets/img/home2/home2-banner-img-dark.png"
                    alt=""
                    className="dark-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="home1-banner-bottom mb-110"
          style={{
            transform: "rotate(-2deg)", // Adjust the angle as needed
            transformOrigin: "center", // Ensures rotation occurs from the center
            overflow: "hidden", // Prevents content from spilling outside
          }}
        >
          <div
            className="marquee_text"
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                animation: "marquee 20s linear infinite",
                minWidth: "200%", // Added this line
              }}
            >
              {[...Array(2)].map((_, index) => (
                <div key={index} style={{ display: "flex" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    style={{ margin: "0 40px" }}
                  >
                    <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
                  </svg>
                  <h6 style={{ display: "inline-block", paddingLeft: "10px" }}>
                    Welcome to InnovateTech Solutions
                  </h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    style={{ margin: "0 40px" }}
                  >
                    <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
                  </svg>
                  <h6 style={{ display: "inline-block", paddingLeft: "10px" }}>
                    We thrive on creativity
                  </h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    style={{ margin: "0 40px" }}
                  >
                    <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
                  </svg>
                  <h6 style={{ display: "inline-block", paddingLeft: "10px" }}>
                    Your satisfaction is our priority
                  </h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    style={{ margin: "0 40px" }}
                  >
                    <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
                  </svg>
                  <h6 style={{ display: "inline-block", paddingLeft: "10px" }}>
                    We believe in the power of collaboration
                  </h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    style={{ margin: "0 40px" }}
                  >
                    <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
                  </svg>
                  <h6 style={{ display: "inline-block", paddingLeft: "10px" }}>
                    We invite you to join us on this excitin
                  </h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    style={{ margin: "0 40px" }}
                  >
                    <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
                  </svg>
                  <h6 style={{ display: "inline-block", paddingLeft: "10px" }}>
                    We thrive on creativity
                  </h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    style={{ margin: "0 40px" }}
                  >
                    <path d="M17 8.5L14.6578 6.84722L15.8666 4.25001L13.0051 3.99493L12.75 1.1334L10.1528 2.34215L8.5 0L6.84722 2.34215L4.25001 1.1334L3.99493 3.99493L1.1334 4.25001L2.34215 6.84722L0 8.5L2.34215 10.1528L1.1334 12.75L3.99493 13.0051L4.25001 15.8666L6.84722 14.6578L8.5 17L10.1528 14.6578L12.75 15.8666L13.0051 13.0051L15.8666 12.75L14.6578 10.1528L17 8.5Z" />
                  </svg>
                  <h6 style={{ display: "inline-block", paddingLeft: "10px" }}>
                    Welcome to InnovateTech Solutions
                  </h6>
                </div>
              ))}
            </div>
          </div>

          <style>
            {`
      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `}
          </style>
        </div>

        {/* End Banner section */}
        {/* Star About section */}
        <div className="home2-about-section mb-110">
          <div className="container">
            <div className="row mb-80">
              <div className="col-lg-12">
                <div className="about-content-wrap">
                  <div
                    className="about-title wow animate fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="2000ms"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                      >
                        <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                      </svg>
                      Discover Tankar
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                      >
                        <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                      </svg>
                    </span>
                    <h2>Join Our Team & Build the Future of Tech</h2>
                  </div>

                  <p>
                    At Tankar, we are passionate about technology, innovation,
                    and creativity. We are looking for talented professionals
                    who are eager to grow, build, and innovate in a dynamic work
                    environment.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {[
                {
                  title: "Web & App Development",
                  description:
                    "We specialize in building high-performance web and mobile applications using the latest technologies, including MERN stack, WordPress, and React Native.",
                  delay: "200ms",
                  icon:Career1,
                  bgColor: "bg-primary bg-light",
                },
                {
                  title: "UI/UX Design",
                  description:
                    "Our UI/UX experts craft intuitive and visually stunning designs, ensuring an engaging user experience for websites and mobile apps.",
                  delay: "400ms",
                  icon:Career2,
                  bgColor: "bg-secondary bg-light",
                },
                {
                  title: "Video Editing & Animation",
                  description:
                    "From professional video editing to motion graphics, our creative team delivers high-quality content for marketing and brand storytelling.",
                  delay: "600ms",
                  icon:Career3,
                  bgColor: "bg-success bg-light",
                },
                {
                  title: "Digital Marketing",
                  description:
                    "Our digital marketing services include SEO, PPC, social media marketing, and branding strategies to grow your online presence.",
                  delay: "200ms",
                  icon:Career4,
                  bgColor: "bg-danger bg-light",
                },
                {
                  title: "Cloud & DevOps",
                  description:
                    "We offer scalable cloud solutions and DevOps services using AWS, Azure, and CI/CD pipelines to optimize performance and security.",
                  delay: "400ms",
                  icon:Career5,
                  bgColor: "bg-warning bg-light",
                },
                {
                  title: "AI & Machine Learning",
                  description:
                    "Our AI and ML solutions help businesses automate tasks, analyze data, and make intelligent decisions with advanced algorithms.",
                  delay: "600ms",
                  icon:Career6,
                  bgColor: "bg-info bg-light",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 wow animate fadeInDown d-flex align-items-stretch"
                  data-wow-delay={item.delay}
                  data-wow-duration="1500ms"
                >
                  <div
                    className={`about-feature-card d-flex flex-column ${item.bgColor}`}
                  >
                    <div className="icon">
                      <img src={item.icon} width={50} height={50}/>
                    </div>
                    <div className="content flex-grow-1">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End About section */}
        {/* Start logo section */}
        <div
          className="logo-section mb-110 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
          style={{ overflow: "hidden" }} // Added overflow hidden to the parent container
        >
          <div className="container-fluid">
            <div className="logo-wrap">
              <div className="logo-title">
                <h6>We Worked With Global Largest Brand</h6>
              </div>
              <div
                className="logo-area"
                style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  position: "relative",
                }}
              >
                <div
                  className="marquee_text2"
                  style={{
                    display: "inline-block",
                    animation: "marquee 20s linear infinite",
                  }}
                >
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp1}
                      alt="Company 1"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp2}
                      alt="Company 2"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp3}
                      alt="Company 3"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp4}
                      alt="Company 4"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp5}
                      alt="Company 5"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp6}
                      alt="Company 6"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp7}
                      alt="Company 7"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp8}
                      alt="Company 7"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  {/* Duplicate the logos for seamless scrolling */}
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp1}
                      alt="Company 1"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp2}
                      alt="Company 2"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp3}
                      alt="Company 3"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp4}
                      alt="Company 4"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp5}
                      alt="Company 5"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp6}
                      alt="Company 6"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "inline-block", marginRight: "40px" }}
                  >
                    <img
                      src={comp7}
                      alt="Company 7"
                      style={{ height: "50px", width: "auto" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Define the marquee animation in a style tag */}
          <style>
            {`
           @keyframes marquee {
             0% {
               transform: translateX(0%);
             }
             100% {
               transform: translateX(-50%);
             }
           }
         `}
          </style>
        </div>
        {/* End logo section */}
        {/* Start Home2 Solution section */}
        {/* <div className="home2-service-section mb-110">
          <div className="container">
            <div className="row mb-60">
              <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div
                  className="section-title2 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                    Our Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                  </span>
                  <h2>Explore Our Solutions</h2>
                </div>
                <a
                  href="service-details.html"
                  className="primary-btn2 wow animate fadeInRight"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                  data-text="Explore More"
                >
                  <span>Explore More</span>
                </a>
              </div>
            </div>
            <div
              className="row wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-lg-12">
                <div className="sevices-wrap">
                  <div className="single-services">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                      >
                        <g>
                          <path d="M44.3411 37.0631C43.6398 36.3437 42.4835 36.3288 41.7634 37.0301L39.1586 39.5691L38.4661 38.8906C37.7473 38.1859 36.5936 38.1968 35.8882 38.9163C35.1831 39.6359 35.1945 40.7887 35.9141 41.4943L37.879 43.4201C38.5865 44.1136 39.7174 44.1155 40.4272 43.4236L44.308 39.6412C45.0299 38.9376 45.0446 37.7847 44.3411 37.0631ZM43.2858 38.5918L39.4051 42.3742C39.2703 42.5056 39.0393 42.5053 38.9049 42.3735L36.94 40.4477C36.9064 40.4148 36.8797 40.3756 36.8612 40.3324C36.8428 40.2891 36.833 40.2427 36.8326 40.1957C36.8321 40.1487 36.8409 40.1021 36.8584 40.0584C36.876 40.0148 36.9019 39.9751 36.9348 39.9415C36.9677 39.908 37.0069 39.8812 37.0502 39.8627C37.0934 39.8443 37.1399 39.8346 37.1869 39.8341C37.2339 39.8336 37.2805 39.8424 37.3241 39.86C37.3677 39.8776 37.4074 39.9035 37.441 39.9365L38.6448 41.1163C38.7815 41.2501 38.9652 41.3252 39.1565 41.3254C39.3479 41.3257 39.5317 41.2512 39.6688 41.1177L42.7862 38.0791C42.8543 38.013 42.9458 37.9766 43.0407 37.9778C43.1356 37.979 43.2261 38.0177 43.2925 38.0856C43.3586 38.1537 43.3951 38.2452 43.3938 38.3401C43.3926 38.435 43.3537 38.5255 43.2858 38.5918ZM30.7502 27.5148L26.4385 24.8533C26.4809 24.6777 26.5024 24.4978 26.5025 24.3172C26.5025 23.6727 26.2278 23.0548 25.749 22.6222C25.2684 22.1879 24.6257 21.9757 23.9858 22.0409C22.7285 22.1713 21.81 23.2945 21.9381 24.5441C22.0578 25.7191 23.0365 26.6051 24.2148 26.6051C24.7608 26.6051 25.2627 26.4125 25.6563 26.0921L29.9807 28.7615C30.0626 28.8121 30.1536 28.846 30.2485 28.8614C30.3435 28.8768 30.4406 28.8733 30.5342 28.8512C30.6278 28.829 30.7162 28.7886 30.7942 28.7323C30.8721 28.6759 30.9383 28.6048 30.9887 28.5229C31.0908 28.3576 31.1229 28.1585 31.0782 27.9694C31.0335 27.7804 30.9155 27.6169 30.7502 27.5148ZM24.9081 24.7582C24.9064 24.7609 24.9044 24.7633 24.9027 24.7661C24.9006 24.7696 24.8989 24.7733 24.8968 24.7769C24.8215 24.8887 24.72 24.9802 24.601 25.0436C24.4821 25.1069 24.3495 25.14 24.2147 25.1401C23.791 25.14 23.4388 24.82 23.3955 24.3949C23.3554 24.0046 23.6275 23.5505 24.1352 23.4979C24.1617 23.4953 24.1884 23.4939 24.2148 23.4939C24.4157 23.4939 24.6132 23.57 24.7667 23.7088C24.8523 23.7853 24.9207 23.879 24.9674 23.9838C25.014 24.0887 25.0379 24.2023 25.0374 24.317C25.0375 24.4735 24.9926 24.6266 24.9081 24.7582Z" />
                          <path d="M42.1373 30.4449C42.3546 29.8077 42.5376 29.1593 42.6856 28.5025H46.3079C47.4775 28.5025 48.429 27.5511 48.429 26.3815V26.026C48.429 25.6214 48.1012 25.2936 47.6966 25.2936C47.6004 25.2935 47.5051 25.3125 47.4163 25.3493C47.3274 25.3861 47.2467 25.44 47.1787 25.508C47.1106 25.5761 47.0567 25.6568 47.0199 25.7457C46.9831 25.8345 46.9641 25.9298 46.9642 26.026V26.3815C46.964 26.5555 46.8948 26.7223 46.7717 26.8452C46.6487 26.9682 46.482 27.0374 46.308 27.0376H42.3208C41.8413 27.0376 41.4234 27.3795 41.3273 27.8506C41.1607 28.6659 40.9358 29.4681 40.6541 30.2512C40.6541 30.2512 40.4029 30.2362 40.1132 30.2362C39.0554 30.2354 38.0044 30.4051 37.0006 30.7387C41.6881 21.4559 34.9489 10.0695 24.2426 10.0695C16.4283 10.0695 9.98975 16.4013 9.97139 24.3089C9.97139 24.3116 9.971 24.3143 9.971 24.317L9.97119 24.3275L9.971 24.3411C9.971 34.9956 21.2921 41.8882 30.7117 37.0627C30.3895 38.0508 30.2256 39.0838 30.2263 40.1231C30.2263 40.3425 30.2393 40.6367 30.2454 40.7363C29.4242 41.0387 28.5813 41.2785 27.7239 41.4538C27.253 41.5499 26.9111 41.9677 26.9111 42.4473V46.4347C26.9109 46.6086 26.8417 46.7753 26.7188 46.8983C26.5958 47.0213 26.429 47.0905 26.2551 47.0907H22.1741C22.0002 47.0905 21.8334 47.0213 21.7104 46.8983C21.5875 46.7753 21.5183 46.6086 21.5181 46.4347V42.4473C21.5181 41.9678 21.1762 41.5499 20.7051 41.4538C18.5172 41.0076 16.4616 40.1559 14.5954 38.9223C14.1948 38.6577 13.6577 38.7115 13.3187 39.0503L10.4987 41.8702C10.4378 41.9312 10.3655 41.9796 10.2859 42.0126C10.2063 42.0456 10.121 42.0625 10.0348 42.0625C9.94864 42.0625 9.86331 42.0456 9.78371 42.0126C9.70411 41.9796 9.63179 41.9312 9.5709 41.8702L6.68525 38.9846C6.62429 38.9237 6.57593 38.8513 6.54293 38.7717C6.50994 38.6921 6.49295 38.6068 6.49295 38.5206C6.49295 38.4344 6.50994 38.3491 6.54293 38.2695C6.57593 38.1899 6.62429 38.1175 6.68525 38.0566L9.50508 35.2368C9.84404 34.8978 9.89785 34.3606 9.63301 33.9597C8.39941 32.0937 7.54785 30.0383 7.10166 27.8503C7.00557 27.3794 6.58779 27.0375 6.1082 27.0375H2.121C1.94706 27.0373 1.78031 26.9681 1.65732 26.8451C1.53433 26.7221 1.46515 26.5554 1.46494 26.3814V22.3008C1.46512 22.1268 1.5343 21.9601 1.65729 21.837C1.78028 21.714 1.94705 21.6448 2.121 21.6446H6.1084C6.58779 21.6446 7.00566 21.3028 7.10186 20.8316C7.54785 18.6441 8.39961 16.5886 9.6333 14.7222C9.89814 14.3213 9.84424 13.7842 9.50527 13.4452L6.68535 10.6252C6.6244 10.5643 6.57605 10.492 6.54307 10.4124C6.51008 10.3328 6.49311 10.2475 6.49312 10.1613C6.49313 10.0751 6.51012 9.98983 6.54312 9.91024C6.57612 9.83065 6.62449 9.75835 6.68545 9.69746L9.57109 6.81182C9.69419 6.68889 9.86104 6.61985 10.035 6.61985C10.209 6.61985 10.3758 6.68889 10.4989 6.81182L13.3188 9.63164C13.6579 9.9707 14.1951 10.0243 14.596 9.75957C16.4619 8.52598 18.5174 7.67441 20.7053 7.22822C21.1763 7.13213 21.5183 6.71426 21.5183 6.23467V2.24766C21.5185 2.07372 21.5877 1.90697 21.7106 1.78398C21.8336 1.66099 22.0004 1.59181 22.1743 1.5916H26.2553C26.4292 1.59181 26.596 1.66099 26.7189 1.78398C26.8419 1.90697 26.9111 2.07372 26.9113 2.24766V6.23486C26.9113 6.71436 27.2532 7.13223 27.7244 7.22842C29.9119 7.67441 31.9674 8.52617 33.8334 9.75957C34.2345 10.0249 34.7718 9.971 35.1107 9.63184L37.9307 6.81201C37.9916 6.75104 38.0639 6.70267 38.1435 6.66967C38.2231 6.63667 38.3084 6.61968 38.3946 6.61968C38.4808 6.61968 38.5661 6.63667 38.6457 6.66967C38.7253 6.70267 38.7976 6.75104 38.8585 6.81201L41.7442 9.69766C41.8052 9.75856 41.8535 9.83087 41.8865 9.91047C41.9195 9.99007 41.9365 10.0754 41.9365 10.1615C41.9365 10.2477 41.9195 10.333 41.8865 10.4126C41.8535 10.4922 41.8051 10.5645 41.7441 10.6254L38.9242 13.4453C38.5851 13.7846 38.5314 14.3219 38.7964 14.7225C40.03 16.5886 40.8815 18.644 41.3277 20.8321C41.4239 21.3029 41.8417 21.6447 42.3213 21.6447H46.3085C46.4824 21.6449 46.6492 21.7141 46.7722 21.8371C46.8952 21.9601 46.9643 22.1268 46.9646 22.3008V22.608C46.9646 23.0126 47.2924 23.3404 47.697 23.3404C48.1016 23.3404 48.4294 23.0126 48.4294 22.608V22.3008C48.4294 21.1312 47.4779 20.1798 46.3084 20.1798H42.6861C42.2114 18.0609 41.3825 16.0603 40.2181 14.2231L42.7799 11.6613C43.6087 10.8323 43.609 9.49082 42.7799 8.66172L39.8943 5.77607C39.0653 4.94727 37.7238 4.94697 36.8947 5.77607L34.3328 8.33789C32.4956 7.17344 30.4952 6.34463 28.3763 5.86982V2.24746C28.3763 1.07783 27.4248 0.126465 26.2553 0.126465H22.1743C21.0047 0.126465 20.0533 1.07793 20.0533 2.24746V5.86973C17.9345 6.34443 15.9336 7.17344 14.0968 8.33779L11.535 5.77598C10.7079 4.94902 9.3624 4.94902 8.53525 5.77598L5.64951 8.66172C4.8207 9.49063 4.82041 10.8323 5.64951 11.6612L8.21133 14.2231C7.04678 16.0604 6.21807 18.0608 5.74326 20.1798H2.1209C0.951465 20.1797 0 21.1312 0 22.3008V26.3816C0 27.5513 0.951465 28.5026 2.121 28.5026H5.74326C6.21797 30.6217 7.04697 32.6224 8.21133 34.4592L5.64951 37.021C4.82061 37.8501 4.82051 39.1915 5.64951 40.0207L8.53516 42.9062C9.36426 43.7351 10.7057 43.7353 11.5349 42.9062L14.0966 40.3444C15.9335 41.5087 17.934 42.3375 20.0532 42.8125V46.4348C20.0532 47.6044 21.0047 48.5558 22.1742 48.5558H26.2552C27.4248 48.5558 28.3762 47.6043 28.3762 46.4348V42.8123C29.0782 42.6541 29.7705 42.4558 30.4498 42.2185C31.2813 46.0878 34.372 49.16 38.4058 49.8626C38.5965 49.8945 38.7922 49.8496 38.95 49.7379C39.1078 49.6261 39.215 49.4564 39.2482 49.2658C39.2814 49.0753 39.2379 48.8794 39.1272 48.7208C39.0165 48.5622 38.8475 48.4538 38.6572 48.4193C34.5924 47.7113 31.6914 44.1938 31.6914 40.1231C31.6914 35.4792 35.4694 31.7013 40.1133 31.7013C44.7474 31.7013 48.5352 35.4716 48.5352 40.1231C48.5352 44.1104 45.7041 47.5812 41.8034 48.3754C41.613 48.4142 41.4459 48.527 41.3387 48.6891C41.2315 48.8511 41.1931 49.0491 41.2318 49.2395C41.3126 49.6358 41.7006 49.8917 42.0958 49.811C46.6759 48.8782 50.0002 44.804 50.0002 40.1232C50 35.3651 46.6214 31.3816 42.1373 30.4449ZM37.0261 23.5846H35.3774C35.2784 22.1275 34.8938 20.7041 34.2457 19.3953L35.6723 18.5716C36.4612 20.1298 36.9249 21.8462 37.0261 23.5846ZM31.2458 13.6276C32.6924 14.5806 33.9418 15.7958 34.9371 17.3047L33.5236 18.1208C32.7503 16.9781 31.4733 15.7563 30.4282 15.0438L31.2458 13.6276ZM24.947 11.5542C24.9613 11.555 24.9756 11.5562 24.9899 11.5569C26.6762 11.6558 28.3837 12.0916 29.9781 12.8932L29.1538 14.3208C27.8386 13.6752 26.409 13.2952 24.9469 13.2025V11.5542H24.947ZM23.4579 11.5594L23.4822 11.5578V13.2064C22.023 13.306 20.5975 13.6919 19.2874 14.3422L18.5267 13.0244L18.4643 12.9163C20.0189 12.1283 21.7183 11.6665 23.4579 11.5594ZM17.1974 13.6523L17.581 14.3168L18.0212 15.0792C16.8109 15.8951 15.7709 16.9388 14.9593 18.1521L13.5322 17.3281C14.5208 15.8342 15.7515 14.6086 17.1974 13.6523ZM12.7991 18.5963L14.2054 19.4082L14.2267 19.4205C13.5883 20.7173 13.2079 22.1339 13.108 23.5848H11.4589C11.5589 21.8936 11.9899 20.201 12.7991 18.5963ZM11.4585 25.0737H13.1071C13.2047 26.5329 13.5796 27.9297 14.2263 29.2383L12.7981 30.0628C12.0176 28.5171 11.5612 26.8166 11.4585 25.0737ZM34.5235 31.9676C33.502 32.6672 32.6213 33.5528 31.9272 34.5781C26.0233 39.0244 17.5897 37.5519 13.5209 31.3369L15.1415 30.4013C15.7173 30.0688 15.9281 29.3439 15.6215 28.7513C14.9124 27.3801 14.5507 25.8925 14.5463 24.3297C14.5557 20.7881 16.4629 17.6551 19.3767 15.9572L19.3771 15.9569C20.8417 15.1034 22.5151 14.65 24.2164 14.6454H24.2169L24.2425 14.6451C26.6247 14.6451 28.0882 15.4441 29.1068 15.955C30.1203 16.4617 31.9696 18.1809 32.6122 19.4488L32.6313 19.4843C33.4848 20.9523 33.9365 22.6277 33.9383 24.3299C33.9365 25.8888 33.5738 27.3785 32.8598 28.7576C32.5479 29.3605 32.7616 30.0976 33.3467 30.4353L34.9469 31.3593C34.8116 31.5661 34.6705 31.7689 34.5235 31.9676ZM34.2459 29.2629C34.892 27.9603 35.2775 26.5282 35.3772 25.0736H37.0261C36.9254 26.8014 36.4651 28.5207 35.6723 30.0864L34.2459 29.2629Z" />
                        </g>
                      </svg>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Search engine<span>Optimization</span>
                      </a>
                    </h5>
                    <div className="services-img">
                      <img src="assets/img/home2/services-01.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p>
                        Health and care consulting refers to the practice of
                        providing expert advice and guidance.
                      </p>
                    </div>
                    <div className="button-area">
                      <a className="explore-btn" href="service-details.html">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="single-services">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.232544 5.94937C0.232544 3.24626 2.42336 1.05432 5.12759 1.05432H15.4847C15.7608 1.05432 15.9847 1.27818 15.9847 1.55432C15.9847 1.83046 15.7608 2.05432 15.4847 2.05432H5.12759C2.97579 2.05432 1.23254 3.7984 1.23254 5.94937V10.614H20.395C20.6711 10.614 20.895 10.8379 20.895 11.114C20.895 11.3902 20.6711 11.614 20.395 11.614H1.23254V39.8117C1.23254 41.9627 2.97579 43.7068 5.12759 43.7068H38.1705C38.4467 43.7068 38.6705 43.9306 38.6705 44.2068C38.6705 44.4829 38.4467 44.7068 38.1705 44.7068H5.12759C2.42336 44.7068 0.232544 42.5148 0.232544 39.8117V5.94937ZM17.8802 1.55432C17.8802 1.27818 18.1041 1.05432 18.3802 1.05432H44.8725C47.5757 1.05432 49.7675 3.24618 49.7675 5.94937V31.1127C49.7675 31.3888 49.5437 31.6127 49.2675 31.6127C48.9914 31.6127 48.7675 31.3888 48.7675 31.1127V11.614H29.6041C29.3279 11.614 29.1041 11.3902 29.1041 11.114C29.1041 10.8379 29.3279 10.614 29.6041 10.614H48.7675V5.94937C48.7675 3.79847 47.0234 2.05432 44.8725 2.05432H18.3802C18.1041 2.05432 17.8802 1.83046 17.8802 1.55432ZM49.2675 33.6361C49.5437 33.6361 49.7675 33.8599 49.7675 34.1361V39.8117C49.7675 41.483 48.9291 42.9593 47.6519 43.8408C47.4246 43.9977 47.1133 43.9406 46.9564 43.7134C46.7995 43.4861 46.8566 43.1747 47.0839 43.0178C48.1019 42.3152 48.7675 41.1408 48.7675 39.8117V34.1361C48.7675 33.8599 48.9914 33.6361 49.2675 33.6361Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.9997 18.7035C25.2758 18.7035 25.4997 18.9273 25.4997 19.2035V20.2025C26.216 20.2838 26.8695 20.5378 27.3798 20.9205C28.0068 21.3908 28.4413 22.0786 28.4413 22.8805C28.4413 23.1566 28.2175 23.3805 27.9413 23.3805C27.6652 23.3805 27.4413 23.1566 27.4413 22.8805C27.4413 22.4639 27.2174 22.0487 26.7798 21.7205C26.342 21.3922 25.7144 21.1744 24.9998 21.1744C24.2852 21.1744 23.6575 21.3922 23.2198 21.7205C22.7822 22.0487 22.5582 22.4639 22.5582 22.8805C22.5582 23.297 22.7822 23.7122 23.2198 24.0404C23.6575 24.3688 24.2852 24.5866 24.9998 24.5866C25.9098 24.5866 26.7529 24.8626 27.3798 25.3328C28.0068 25.803 28.4413 26.4909 28.4413 27.2927C28.4413 28.0946 28.0068 28.7824 27.3798 29.2527C26.8695 29.6354 26.216 29.8894 25.4998 29.9707L25.4997 30.9696C25.4997 31.2458 25.2758 31.4696 24.9997 31.4696C24.7235 31.4696 24.4997 31.2457 24.4997 30.9696L24.4998 29.9707C23.7835 29.8894 23.13 29.6354 22.6198 29.2527C21.9928 28.7824 21.5582 28.0946 21.5582 27.2927C21.5582 27.0166 21.7821 26.7927 22.0582 26.7927C22.3344 26.7927 22.5582 27.0166 22.5582 27.2927C22.5582 27.7093 22.7822 28.1245 23.2198 28.4527C23.6575 28.781 24.2852 28.9988 24.9998 28.9988C25.7144 28.9988 26.342 28.781 26.7798 28.4527C27.2174 28.1245 27.4413 27.7093 27.4413 27.2927C27.4413 26.8762 27.2174 26.461 26.7798 26.1328C26.342 25.8045 25.7144 25.5866 24.9998 25.5866C24.0898 25.5866 23.2467 25.3106 22.6198 24.8404C21.9928 24.3702 21.5582 23.6824 21.5582 22.8805C21.5582 22.0786 21.9928 21.3908 22.6198 20.9205C23.13 20.5379 23.7835 20.2838 24.4997 20.2025V19.2035C24.4997 18.9273 24.7235 18.7035 24.9997 18.7035ZM36.3788 33.865C36.5286 33.633 36.8381 33.5664 37.0701 33.7162C41.9961 36.8973 45.2604 39.441 46.8895 41.6172C47.7093 42.7124 48.1546 43.7658 48.1399 44.7983C48.1249 45.8442 47.6401 46.7746 46.7962 47.6184C45.9491 48.4656 45.0199 48.9466 43.9761 48.9456C42.9477 48.9446 41.9046 48.4748 40.8208 47.6316C38.6659 45.9551 36.1349 42.6291 32.9254 37.6505C32.7758 37.4184 32.8427 37.1089 33.0748 36.9593C33.3069 36.8097 33.6163 36.8765 33.7659 37.1086C36.983 42.0992 39.4321 45.2842 41.4348 46.8423C42.4298 47.6164 43.2599 47.9449 43.9771 47.9456C44.679 47.9463 45.3678 47.6326 46.0891 46.9113L46.4426 47.2649L46.0891 46.9113C46.8069 46.1935 47.1298 45.4978 47.14 44.784C47.1503 44.057 46.838 43.2172 46.0889 42.2165C44.58 40.2009 41.4607 37.7419 36.5276 34.5562C36.2956 34.4064 36.229 34.0969 36.3788 33.865Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.9997 10.8789C17.1531 10.8789 10.7921 17.2399 10.7921 25.0865C10.7921 32.9331 17.1531 39.2941 24.9997 39.2941C32.8463 39.2941 39.2073 32.9331 39.2073 25.0865C39.2073 17.2399 32.8463 10.8789 24.9997 10.8789ZM9.79211 25.0865C9.79211 16.6876 16.6008 9.87891 24.9997 9.87891C33.3986 9.87891 40.2073 16.6876 40.2073 25.0865C40.2073 33.4854 33.3986 40.2941 24.9997 40.2941C16.6008 40.2941 9.79211 33.4854 9.79211 25.0865Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.9996 16.0266C19.996 16.0266 15.9397 20.0829 15.9397 25.0865C15.9397 30.0902 19.996 34.1464 24.9996 34.1464C30.0033 34.1464 34.0595 30.0902 34.0595 25.0865C34.0595 20.0829 30.0033 16.0266 24.9996 16.0266ZM14.9397 25.0865C14.9397 19.5306 19.4437 15.0266 24.9996 15.0266C30.5555 15.0266 35.0595 19.5306 35.0595 25.0865C35.0595 30.6425 30.5555 35.1464 24.9996 35.1464C19.4437 35.1464 14.9397 30.6425 14.9397 25.0865Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.9005 4.7312C19.1767 4.7312 19.4005 4.95506 19.4005 5.2312V6.40321C19.4005 6.67936 19.1767 6.90321 18.9005 6.90321C18.6244 6.90321 18.4005 6.67936 18.4005 6.40321V5.2312C18.4005 4.95506 18.6244 4.7312 18.9005 4.7312ZM31.0989 4.7312C31.3751 4.7312 31.5989 4.95506 31.5989 5.2312V6.40321C31.5989 6.67936 31.3751 6.90321 31.0989 6.90321C30.8228 6.90321 30.5989 6.67936 30.5989 6.40321V5.2312C30.5989 4.95506 30.8228 4.7312 31.0989 4.7312ZM23.0632 5.99138C23.2714 5.80997 23.5872 5.83168 23.7686 6.03987C24.0689 6.38446 24.5087 6.60095 24.9997 6.60095C25.4906 6.60095 25.9304 6.38446 26.2307 6.03987C26.4121 5.83168 26.7279 5.80997 26.9361 5.99138C27.1443 6.17279 27.166 6.48863 26.9846 6.69682C26.503 7.2496 25.7924 7.60095 24.9997 7.60095C24.2069 7.60095 23.4964 7.2496 23.0147 6.69682C22.8333 6.48863 22.855 6.17279 23.0632 5.99138Z"
                        />
                      </svg>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Paid search<span>marketing</span>
                      </a>
                    </h5>
                    <div className="services-img">
                      <img src="assets/img/home2/services-02.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p>
                        Helping clients improve their marketing and sales
                        strategies to increase revenue and market share.
                      </p>
                    </div>
                    <div className="button-area">
                      <a className="explore-btn" href="service-details.html">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="single-services">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                      >
                        <g>
                          <path d="M25.4814 38.4606C25.4814 39.3548 26.4648 39.8091 27.2895 40.0332C29.0488 40.5104 30.0166 41.4958 30.0166 42.8071C30.0166 44.1307 29.0446 45.2396 27.749 45.5135V46.3423C27.749 46.6857 27.47 46.9647 27.1266 46.9647C26.7832 46.9647 26.5042 46.6857 26.5042 46.3423V45.5135C25.2085 45.2396 24.2366 44.1307 24.2366 42.8071C24.2366 42.4637 24.5156 42.1846 24.859 42.1846C25.2023 42.1846 25.4814 42.4637 25.4814 42.8071C25.4814 43.6494 26.22 44.334 27.1266 44.334C28.0332 44.334 28.7718 43.6494 28.7718 42.8071C28.7718 41.9129 27.7884 41.4585 26.9637 41.2344C25.2054 40.7573 24.2366 39.7728 24.2366 38.4606C24.2366 37.1369 25.2085 36.028 26.5042 35.7542V34.9253C26.5042 34.582 26.7832 34.3029 27.1266 34.3029C27.47 34.3029 27.749 34.582 27.749 34.9253V35.7542C29.0446 36.028 30.0166 37.1369 30.0166 38.4606C30.0166 38.8039 29.7376 39.083 29.3942 39.083C29.0509 39.083 28.7718 38.8039 28.7718 38.4606C28.7718 37.6183 28.0332 36.9336 27.1266 36.9336C26.2189 36.9336 25.4814 37.6183 25.4814 38.4606ZM17.7054 26.778C17.7054 29.0934 15.8216 30.9772 13.5063 30.9772C11.1909 30.9772 9.30709 29.0934 9.30709 26.778C9.30709 24.4627 11.1909 22.5788 13.5063 22.5788C15.8216 22.5788 17.7054 24.4627 17.7054 26.778ZM16.4606 26.778C16.4606 25.1483 15.1349 23.8237 13.5063 23.8237C11.8776 23.8237 10.5519 25.1494 10.5519 26.778C10.5519 28.4066 11.8776 29.7324 13.5063 29.7324C15.1349 29.7324 16.4606 28.4066 16.4606 26.778ZM45.8507 15.778C45.8507 17.1992 44.694 18.3558 43.2729 18.3558H41.9731L35.3787 32.3807L35.0197 35.5954C35.9523 37.0508 36.4928 38.7801 36.4928 40.6338C36.4928 45.7988 32.2905 50 27.1266 50C21.9627 50 17.7604 45.7977 17.7604 40.6338C17.7604 38.7811 18.3019 37.0519 19.2334 35.5954L19.0924 34.333C18.9253 34.416 18.7417 34.4606 18.5498 34.4606C18.2241 34.4606 17.9181 34.334 17.6878 34.1037L16.6764 33.0923C16.3705 33.2458 16.054 33.3772 15.7293 33.4855V34.9149C15.7293 35.5871 15.1826 36.1338 14.5104 36.1338H12.5021C11.8299 36.1338 11.2832 35.5871 11.2832 34.9149V33.4855C10.9585 33.3774 10.642 33.246 10.3361 33.0923L9.32473 34.1037C9.09443 34.334 8.78842 34.4606 8.46269 34.4606C8.13697 34.4606 7.83095 34.334 7.60066 34.1037L6.18053 32.6836C5.95024 32.4533 5.82369 32.1473 5.82369 31.8216C5.82369 31.4959 5.95024 31.1898 6.18053 30.9595L7.19195 29.9481C7.03865 29.6421 6.90727 29.3256 6.79879 29.001H5.36829C4.69609 29.001 4.14941 28.4544 4.14941 27.7822V25.7739C4.14941 25.1017 4.69609 24.555 5.36829 24.555H6.79775C6.90586 24.2302 7.03725 23.9137 7.19091 23.6079L6.1795 22.5965C5.94921 22.3662 5.82265 22.0602 5.82265 21.7344C5.82265 21.4087 5.94921 21.1027 6.1795 20.8724L7.59962 19.4523C8.07473 18.9772 8.84858 18.9772 9.32369 19.4523L10.3351 20.4637C10.6409 20.31 10.9575 20.1786 11.2822 20.0705V18.3558H10.9803C9.55917 18.3558 8.40253 17.1992 8.40253 15.778C8.40253 14.3568 9.55917 13.2002 10.9803 13.2002H43.2729C44.6951 13.2002 45.8507 14.3558 45.8507 15.778ZM18.5498 33.2054L19.9336 31.8216L18.9274 30.8154C18.554 30.4419 18.4627 29.8745 18.7023 29.4025C18.8341 29.1421 18.9471 28.8703 19.0374 28.5944C19.1175 28.3503 19.2726 28.1379 19.4808 27.9873C19.6889 27.8368 19.9392 27.7559 20.1961 27.7562H21.6183V25.7988H20.1961C19.6681 25.7988 19.2023 25.4616 19.0374 24.9606C18.9471 24.6846 18.8341 24.4129 18.7023 24.1525C18.5859 23.9234 18.5449 23.6633 18.5854 23.4095C18.6258 23.1557 18.7455 22.9212 18.9274 22.7396L19.9336 21.7334L18.5498 20.3496L17.5436 21.3558C17.1702 21.7293 16.6027 21.8205 16.1307 21.5809C15.8702 21.4489 15.6001 21.3369 15.3227 21.2459C15.0786 21.1658 14.8661 21.0106 14.7156 20.8025C14.565 20.5944 14.4841 20.344 14.4845 20.0871V18.3537H12.528V20.0871C12.528 20.6151 12.1909 21.0809 11.6899 21.2459C11.4126 21.3374 11.1425 21.4494 10.8818 21.5809C10.6526 21.6975 10.3924 21.7384 10.1385 21.6978C9.88468 21.6571 9.65023 21.5371 9.46892 21.3548L8.46269 20.3485L7.07887 21.7324L8.0851 22.7386C8.45854 23.112 8.54983 23.6795 8.3102 24.1515C8.17846 24.4108 8.06643 24.6826 7.97514 24.9595C7.89507 25.2036 7.73988 25.4161 7.53177 25.5666C7.32366 25.7172 7.07328 25.798 6.81643 25.7977H5.39423V27.7541H6.81643C7.34443 27.7541 7.8102 28.0913 7.97514 28.5923C8.06666 28.8696 8.17866 29.1397 8.3102 29.4004C8.54879 29.8714 8.45854 30.4388 8.0851 30.8133L7.07887 31.8195L8.46269 33.2033L9.46892 32.1971C9.84236 31.8237 10.4098 31.7324 10.8818 31.972C11.1411 32.1037 11.4129 32.2158 11.6899 32.3071C11.9339 32.3871 12.1464 32.5423 12.2969 32.7504C12.4475 32.9585 12.5284 33.2089 12.528 33.4658V34.889H14.4845V33.4668C14.4845 32.9388 14.8216 32.473 15.3227 32.3081C15.5986 32.2178 15.8704 32.1048 16.1307 31.973C16.3598 31.8565 16.6199 31.8156 16.8738 31.856C17.1276 31.8964 17.3621 32.0162 17.5436 32.1981L18.5498 33.2054ZM35.249 40.6338C35.249 36.1556 31.6058 32.5125 27.1276 32.5125C22.6494 32.5125 19.0063 36.1556 19.0063 40.6338C19.0063 45.112 22.6484 48.7552 27.1266 48.7552C31.6048 48.7552 35.249 45.112 35.249 40.6338ZM40.5975 18.3558H15.7293V20.0705C16.054 20.1786 16.3706 20.31 16.6764 20.4637L17.6878 19.4523C18.1629 18.9772 18.9368 18.9772 19.4119 19.4523L20.832 20.8724C21.3071 21.3475 21.3071 22.1214 20.832 22.5965L19.8206 23.6079C19.9741 23.9139 20.1069 24.2324 20.2137 24.555H21.6432C22.3154 24.555 22.8621 25.1017 22.8621 25.7739V27.7822C22.8621 28.4544 22.3154 29.001 21.6432 29.001H20.2137C20.1056 29.3258 19.9742 29.6423 19.8206 29.9481L20.832 30.9595C21.0623 31.1898 21.1888 31.4959 21.1888 31.8216C21.1888 32.1473 21.0623 32.4533 20.832 32.6836L20.2283 33.2873L20.3299 34.195C22.0384 32.3921 24.4534 31.2666 27.1266 31.2666C29.7998 31.2666 32.2158 32.3932 33.9233 34.195L34.1525 32.14C34.1598 32.0726 34.1785 32.0062 34.2075 31.944L40.5975 18.3558ZM44.6058 15.778C44.6058 15.0425 44.0083 14.445 43.2729 14.445H10.9803C10.2448 14.445 9.64734 15.0425 9.64734 15.778C9.64734 16.5135 10.2448 17.111 10.9803 17.111H43.2729C44.0083 17.111 44.6058 16.5124 44.6058 15.778ZM21.7729 5.35373C21.7729 2.40145 24.1743 0 27.1266 0C30.0789 0 32.4803 2.40145 32.4803 5.35373C32.4803 8.30602 30.0789 10.7075 27.1266 10.7075C24.1743 10.7075 21.7729 8.30602 21.7729 5.35373ZM23.0177 5.35373C23.0177 7.61929 24.861 9.46266 27.1266 9.46266C29.3922 9.46266 31.2355 7.61929 31.2355 5.35373C31.2355 3.08817 29.3932 1.24481 27.1266 1.24481C24.86 1.24481 23.0177 3.08817 23.0177 5.35373ZM26.6868 29.5187C26.7445 29.5765 26.813 29.6224 26.8885 29.6537C26.964 29.685 27.0449 29.7011 27.1266 29.7011C27.2083 29.7011 27.2892 29.685 27.3647 29.6537C27.4401 29.6224 27.5087 29.5765 27.5664 29.5187L29.6432 27.4419C29.8859 27.1992 29.8859 26.805 29.6432 26.5612C29.4005 26.3174 29.0063 26.3185 28.7625 26.5612L27.748 27.5757V19.9668C27.748 19.6234 27.4689 19.3444 27.1256 19.3444C26.7822 19.3444 26.5031 19.6234 26.5031 19.9668V27.5757L25.4886 26.5612C25.2459 26.3185 24.8517 26.3185 24.609 26.5612C24.4924 26.6779 24.4269 26.8361 24.4269 27.001C24.4269 27.166 24.4924 27.3242 24.609 27.4409L26.6868 29.5187ZM12.0727 8.15768C12.0727 5.88797 13.9191 4.04149 16.1888 4.04149C18.4585 4.04149 20.305 5.88797 20.305 8.15768C20.305 10.4274 18.4585 12.2739 16.1888 12.2739C13.9191 12.2739 12.0727 10.4274 12.0727 8.15768ZM13.3175 8.15768C13.3175 9.74066 14.6058 11.029 16.1888 11.029C17.7718 11.029 19.0602 9.74066 19.0602 8.15768C19.0602 6.57469 17.7718 5.28631 16.1888 5.28631C14.6058 5.28631 13.3175 6.57469 13.3175 8.15768ZM33.9482 8.15768C33.9482 5.88797 35.7946 4.04149 38.0644 4.04149C40.3341 4.04149 42.1805 5.88797 42.1805 8.15768C42.1805 10.4274 40.3341 12.2739 38.0644 12.2739C35.7946 12.2739 33.9482 10.4274 33.9482 8.15768ZM35.193 8.15768C35.193 9.74066 36.4814 11.029 38.0644 11.029C39.6473 11.029 40.9357 9.74066 40.9357 8.15768C40.9357 6.57469 39.6473 5.28631 38.0644 5.28631C36.4814 5.28631 35.193 6.57469 35.193 8.15768Z" />
                        </g>
                      </svg>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Conversion rate<span>optimization</span>
                      </a>
                    </h5>
                    <div className="services-img">
                      <img src="assets/img/home2/services-03.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p>
                        Health and care consulting refers to the practice of
                        providing expert advice and guidance.
                      </p>
                    </div>
                    <div className="button-area">
                      <a className="explore-btn" href="service-details.html">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="single-services">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                      >
                        <g>
                          <path d="M43.7328 31.0318C44.363 29.0867 44.683 27.058 44.683 24.9908C44.683 22.9312 44.3653 20.9099 43.739 18.9709C45.1164 18.4536 46.3688 17.6254 47.4087 16.5241C49.2058 14.6218 50.1541 12.133 50.0794 9.51729C49.9245 4.11689 45.4056 -0.149902 40.0044 0.00419922C37.3882 0.0790039 34.9583 1.16807 33.1611 3.0708C32.2536 4.03174 31.5632 5.14219 31.1111 6.34307C29.1717 5.71709 27.1504 5.39932 25.09 5.39932C23.0285 5.39932 21.0057 5.71787 19.0651 6.34463C17.6655 2.64092 14.0835 0 9.8957 0C4.49297 0 0.0976562 4.39531 0.0976562 9.79766C0.0976562 13.9851 2.73896 17.5667 6.44268 18.9659C5.81553 20.9068 5.49736 22.9298 5.49736 24.9908C5.49736 27.058 5.81738 29.0867 6.44756 31.0318C2.74121 32.4299 0.0976562 36.013 0.0976562 40.2023C0.0976562 41.6771 0.417285 43.095 1.04785 44.4164C1.08926 44.5032 1.14738 44.5811 1.21887 44.6454C1.29036 44.7098 1.37384 44.7594 1.46452 44.7915C1.55521 44.8237 1.65133 44.8376 1.7474 44.8325C1.84346 44.8275 1.9376 44.8035 2.02441 44.7621C2.19965 44.6783 2.33448 44.5284 2.39929 44.3453C2.46411 44.1623 2.45362 43.9609 2.37012 43.7855C1.83408 42.6625 1.5625 41.457 1.5625 40.2023C1.5625 35.6079 5.30088 31.8699 9.8957 31.8699C14.4909 31.8699 18.2293 35.6079 18.2293 40.2023C18.2293 44.7971 14.4909 48.5352 9.8957 48.5352C7.8 48.5352 5.79678 47.7543 4.25566 46.3363C3.95781 46.0625 3.49424 46.0819 3.2207 46.3795C3.15557 46.4503 3.10501 46.5332 3.07193 46.6235C3.03884 46.7138 3.02388 46.8098 3.02789 46.9059C3.0319 47.002 3.0548 47.0963 3.09529 47.1836C3.13578 47.2708 3.19306 47.3493 3.26387 47.4144C5.07617 49.0818 7.43145 50 9.8957 50C14.0896 50 17.6762 47.3511 19.0712 43.639C21.0095 44.2646 23.0305 44.5823 25.09 44.5823C27.15 44.5823 29.1714 44.2646 31.1096 43.6394C32.5048 47.3516 36.0913 50 40.2852 50C45.6879 50 50.0832 45.6047 50.0832 40.2023C50.0832 36.013 47.4396 32.4295 43.7328 31.0318ZM34.2263 4.07637C35.7544 2.4582 37.8216 1.53203 40.0467 1.46826C40.1273 1.46598 40.2079 1.46484 40.2886 1.46484C44.7739 1.46484 48.4859 5.04727 48.6148 9.55889C48.6786 11.7836 47.8722 13.9 46.344 15.5186C44.8158 17.1367 42.7486 18.063 40.5235 18.1267C40.4429 18.1289 40.3623 18.1301 40.2816 18.1301C35.7963 18.1301 32.0843 14.5478 31.9554 10.0361C31.8912 7.81133 32.698 5.69463 34.2263 4.07637ZM30.6987 42.2325C28.894 42.8192 27.0107 43.1175 25.09 43.1175C23.1701 43.1175 21.2868 42.8192 19.482 42.2325C19.6231 41.565 19.6942 40.8845 19.6941 40.2022C19.6941 34.7999 15.2984 30.4051 9.8957 30.4051C9.1957 30.4051 8.51289 30.4794 7.8541 30.6194C7.2624 28.8082 6.96221 26.9181 6.96221 24.9908C6.96221 23.0697 7.26094 21.1856 7.84873 19.379C8.52156 19.5227 9.20768 19.5951 9.8957 19.5949C11.5742 19.5949 13.2302 19.1631 14.6854 18.3464C15.038 18.1484 15.1634 17.7021 14.9654 17.3493C14.7675 16.9965 14.3211 16.8713 13.9684 17.0692C12.7315 17.7632 11.3231 18.1301 9.8957 18.1301C5.30049 18.1301 1.5625 14.3921 1.5625 9.79727C1.5625 5.20283 5.30088 1.46484 9.8957 1.46484C14.4909 1.46484 18.2293 5.20283 18.2293 9.79766C18.2293 11.7199 17.5591 13.5952 16.3422 15.0787C16.0854 15.3912 16.1312 15.8527 16.444 16.1095C16.5942 16.2326 16.7872 16.291 16.9805 16.2719C17.1737 16.2528 17.3515 16.1578 17.4747 16.0076C18.9057 14.2632 19.6941 12.0574 19.6941 9.79727C19.6941 9.0958 19.6189 8.41103 19.4782 7.75068C21.2845 7.16279 23.1689 6.86416 25.09 6.86416C27.0107 6.86416 28.8944 7.1625 30.6999 7.74951C30.5384 8.51469 30.4683 9.29632 30.4909 10.078C30.6431 15.3831 35.0071 19.5953 40.2812 19.5949C40.9704 19.595 41.6578 19.5232 42.332 19.3806C42.9195 21.1864 43.2183 23.0705 43.2183 24.9909C43.2183 26.9181 42.9177 28.8083 42.3264 30.6194C41.6554 30.4766 40.9712 30.4048 40.2852 30.4051C34.8823 30.4051 30.4871 34.8 30.4871 40.2023C30.4871 40.8985 30.5604 41.5775 30.6987 42.2325ZM40.2852 48.5352C35.6899 48.5352 31.952 44.7972 31.952 40.2027C31.952 35.6079 35.6899 31.8699 40.2852 31.8699C44.8803 31.8699 48.6184 35.6079 48.6184 40.2027C48.6184 44.7972 44.8803 48.5352 40.2852 48.5352Z" />
                          <path d="M14.883 5.47415C14.7597 5.39026 14.6138 5.346 14.4647 5.34729C14.3156 5.34859 14.1705 5.39536 14.0487 5.48137C13.8 5.65672 13.5326 5.80397 13.2515 5.92043C12.2452 5.13303 10.7868 5.14221 9.78779 6.01086C9.27243 6.4583 8.94423 7.0832 8.86835 7.76145C8.33197 7.68164 7.81747 7.49341 7.35622 7.20824C6.89497 6.92307 6.49665 6.54693 6.18554 6.10276C6.11095 5.99685 6.00964 5.91258 5.89192 5.85852C5.7742 5.80445 5.64427 5.78252 5.51533 5.79495C5.38629 5.80745 5.26288 5.85397 5.15771 5.92977C5.05253 6.00557 4.96936 6.10793 4.91669 6.22639C4.89579 6.27366 4.40292 7.39973 4.46581 8.77805C4.51396 9.83274 4.8912 11.1923 6.26718 12.2421C5.7702 12.403 5.24875 12.4751 4.72675 12.455C4.56221 12.4486 4.40033 12.4979 4.26721 12.5948C4.1341 12.6917 4.03752 12.8307 3.99305 12.9892C3.94857 13.1478 3.95881 13.3167 4.0221 13.4687C4.08539 13.6207 4.19804 13.7469 4.34189 13.8271C5.49091 14.4654 6.72187 14.7851 7.9246 14.7851C9.08007 14.7851 10.2093 14.4898 11.2141 13.8989C12.474 13.1576 13.3895 12.0229 13.8866 10.6369C13.9022 10.6018 13.9152 10.5653 13.9256 10.5275C14.1811 9.77483 14.315 8.95041 14.315 8.0761C14.315 8.03801 14.3139 7.99944 14.3124 7.96126C14.7314 7.46726 15.0295 6.88238 15.1829 6.25305C15.218 6.10814 15.2082 5.95595 15.1546 5.81679C15.101 5.67763 15.0063 5.5581 14.8831 5.47415H14.883ZM12.8276 7.84758C12.8422 7.92395 12.8498 8.00286 12.8498 8.07844C12.8498 8.79631 12.743 9.46126 12.5396 10.062C12.5285 10.0899 12.5192 10.1184 12.5118 10.1475C12.1315 11.2118 11.4392 12.0667 10.4714 12.6363C9.58564 13.1577 8.56904 13.3797 7.5329 13.3045C7.77033 13.187 7.99947 13.0535 8.21874 12.9048C8.32676 12.8314 8.4132 12.7304 8.46913 12.6124C8.52507 12.4944 8.54847 12.3635 8.53691 12.2334C8.5253 12.1033 8.4791 11.9787 8.40311 11.8724C8.32711 11.7661 8.22407 11.6822 8.10468 11.6291C6.7371 11.0214 6.00585 10.0548 5.93144 8.75666C5.91785 8.50474 5.9268 8.25211 5.9582 8.00178C6.96562 8.84358 8.25615 9.30295 9.60312 9.26819C9.79405 9.26332 9.97553 9.18407 10.1089 9.04732C10.2422 8.91057 10.3168 8.72715 10.3169 8.53616V8.08186C10.3142 7.89915 10.3515 7.71807 10.4261 7.55128C10.5008 7.3845 10.611 7.23605 10.749 7.11633C11.2725 6.66125 12.0682 6.71653 12.5232 7.23997C12.6126 7.34264 12.7289 7.41833 12.859 7.45852C12.8137 7.58302 12.8029 7.71745 12.8277 7.84758H12.8276ZM37.875 10.3752H38.9134V14.7427C38.9134 14.9369 38.9905 15.1232 39.1279 15.2606C39.2653 15.398 39.4515 15.4751 39.6458 15.4751C39.84 15.4751 40.0263 15.398 40.1637 15.2606C40.301 15.1232 40.3782 14.9369 40.3782 14.7427V10.3752H41.5093C41.9136 10.3752 42.2417 10.0471 42.2417 9.6428C42.2417 9.2385 41.9136 8.91038 41.5093 8.91038H40.3782V6.86116C40.3782 6.15774 40.9508 5.58508 41.6546 5.58508H42.6028C43.0073 5.58508 43.3352 5.25706 43.3352 4.85266C43.3352 4.65841 43.2581 4.47212 43.1207 4.33476C42.9834 4.1974 42.7971 4.12024 42.6028 4.12024H41.6546C40.1432 4.12024 38.9134 5.34973 38.9134 6.86116V8.91038H37.875C37.4707 8.91038 37.1426 9.2385 37.1426 9.6428C37.1426 10.0471 37.4707 10.3752 37.875 10.3752ZM8.23398 43.9903C8.40839 43.9903 8.58261 43.9453 8.73788 43.8557L13.7233 40.976C13.8764 40.8874 14.0035 40.7601 14.0919 40.6069C14.1803 40.4537 14.227 40.28 14.2272 40.1031C14.2272 39.7446 14.0343 39.4101 13.7233 39.2308L8.73798 36.351C8.58477 36.2627 8.41105 36.2162 8.23422 36.2162C8.05739 36.2162 7.88367 36.2627 7.73046 36.351C7.57736 36.4396 7.4502 36.5669 7.36171 36.7201C7.27321 36.8732 7.22647 37.047 7.22617 37.2239V42.9829C7.22617 43.3418 7.41953 43.6764 7.73046 43.8557C7.8835 43.9442 8.0572 43.9906 8.23398 43.9904V43.9903ZM8.69101 38.0157L12.3059 40.1036L8.69101 42.1913V38.0157ZM43.4678 35.0152H37.1025C35.9971 35.0152 35.0975 35.9146 35.0975 37.0205V43.3846C35.0975 44.4905 35.997 45.39 37.1025 45.39H43.4678C44.5732 45.39 45.4726 44.4905 45.4726 43.3846V37.0205C45.4726 35.9147 44.5732 35.0152 43.4678 35.0152ZM44.0078 43.3846C44.0078 43.5279 43.9509 43.6652 43.8496 43.7666C43.7484 43.8679 43.611 43.9249 43.4678 43.9251H37.1025C36.9592 43.925 36.8219 43.868 36.7206 43.7666C36.6193 43.6653 36.5624 43.5279 36.5623 43.3846V37.0205C36.5624 36.8773 36.6194 36.7399 36.7207 36.6386C36.8219 36.5372 36.9593 36.4802 37.1025 36.48H43.4678C43.611 36.4803 43.7483 36.5373 43.8495 36.6386C43.9508 36.74 44.0077 36.8773 44.0078 37.0205V43.3846Z" />
                          <path d="M40.2852 37.9887C39.0645 37.9887 38.0711 38.9821 38.0711 40.2028C38.0711 41.4235 39.0645 42.4165 40.2852 42.4165C41.5059 42.4165 42.4991 41.4235 42.4991 40.2028C42.4991 38.9821 41.5059 37.9887 40.2852 37.9887ZM40.2852 40.9516C39.8721 40.9516 39.536 40.6155 39.536 40.2028C39.536 39.7897 39.872 39.4536 40.2852 39.4536C40.6984 39.4536 41.0343 39.7896 41.0343 40.2028C41.0343 40.6155 40.6983 40.9516 40.2852 40.9516ZM30.3909 17.3921C30.1967 17.3921 30.0104 17.4692 29.873 17.6066C29.7357 17.7439 29.6585 17.9302 29.6585 18.1245V18.4529C28.6255 19.062 27.544 19.585 26.4251 20.0166C25.5284 20.3614 24.6098 20.6468 23.6755 20.8707C23.5277 20.7561 23.346 20.6938 23.159 20.6936H19.8055C18.9953 20.6936 18.3365 21.3528 18.3365 22.1627V26.0091C18.3365 26.8193 18.9953 27.4781 19.8056 27.4781H20.4758L20.7298 32.3617C20.7348 32.4577 20.7587 32.5518 20.8001 32.6387C20.8415 32.7255 20.8996 32.8033 20.971 32.8676C21.0425 32.932 21.1259 32.9816 21.2166 33.0137C21.3072 33.0459 21.4033 33.0598 21.4993 33.0548C21.6933 33.0447 21.8753 32.9579 22.0053 32.8137C22.1354 32.6694 22.2028 32.4794 22.1927 32.2854L21.9425 27.4781H23.159C23.3532 27.4781 23.5321 27.4117 23.6752 27.3014C24.2698 27.4448 24.8581 27.6129 25.4387 27.8053C25.53 27.8356 25.6264 27.8476 25.7223 27.8407C25.8182 27.8337 25.9119 27.8079 25.9978 27.7648C26.0838 27.7217 26.1604 27.662 26.2234 27.5892C26.2863 27.5165 26.3342 27.432 26.3645 27.3407C26.3948 27.2494 26.4068 27.1531 26.3999 27.0571C26.3929 26.9612 26.3671 26.8676 26.324 26.7816C26.2808 26.6956 26.2212 26.619 26.1484 26.5561C26.0757 26.4932 25.9912 26.4452 25.8999 26.4149C25.2764 26.2082 24.6445 26.0277 24.0059 25.874V22.2985C25.0069 22.0587 25.9909 21.753 26.9516 21.3834C27.8794 21.0256 28.7835 20.6089 29.6582 20.1358V28.0376C29.3372 27.8641 29.0121 27.6983 28.6832 27.5402C28.5966 27.4985 28.5025 27.4742 28.4065 27.4688C28.3105 27.4635 28.2143 27.4771 28.1235 27.5089C28.0328 27.5407 27.9492 27.5901 27.8775 27.6543C27.8058 27.7184 27.7475 27.7961 27.7059 27.8828C27.6642 27.9695 27.6399 28.0635 27.6346 28.1596C27.6292 28.2556 27.6429 28.3518 27.6747 28.4426C27.7065 28.5334 27.7559 28.617 27.82 28.6887C27.8841 28.7604 27.9618 28.8187 28.0485 28.8604C28.5966 29.1248 29.1337 29.4117 29.6582 29.7203V30.0472C29.6582 30.2415 29.7354 30.4278 29.8727 30.5651C30.0101 30.7025 30.1964 30.7797 30.3906 30.7797C30.5849 30.7797 30.7712 30.7025 30.9085 30.5651C31.0459 30.4278 31.1231 30.2415 31.1231 30.0472V18.1244C31.1231 18.0282 31.1042 17.933 31.0675 17.8441C31.0307 17.7553 30.9768 17.6745 30.9088 17.6065C30.8408 17.5385 30.7601 17.4845 30.6713 17.4477C30.5824 17.4109 30.4872 17.392 30.391 17.392L30.3909 17.3921ZM22.5414 26.0129L19.8014 26.0091L19.8056 22.1585H22.5414V26.0129Z" />
                        </g>
                      </svg>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Social media<span>marketing</span>
                      </a>
                    </h5>
                    <div className="services-img">
                      <img src="assets/img/home2/services-04.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p>
                        Health and care consulting refers to the practice of
                        providing expert advice and guidance.
                      </p>
                      <ul>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                          >
                            <g>
                              <path d="M6.84173 14.1066C6.79635 14.1066 6.75147 14.0972 6.7099 14.079C6.66833 14.0609 6.63098 14.0343 6.60018 14.0009L0.0873947 6.95598C0.0439788 6.90901 0.0151968 6.85041 0.00457124 6.78733C-0.00605429 6.72426 0.00193752 6.65946 0.0275687 6.60086C0.0531998 6.54226 0.0953585 6.49241 0.148885 6.4574C0.202411 6.42239 0.264983 6.40374 0.328943 6.40374H3.46384C3.51091 6.40374 3.55743 6.41385 3.60026 6.43336C3.64309 6.45288 3.68124 6.48135 3.71213 6.51686L5.88873 9.02096C6.12396 8.51813 6.57933 7.68089 7.37841 6.66068C8.55974 5.15244 10.7571 2.9343 14.5164 0.931913C14.5891 0.893219 14.6736 0.883176 14.7533 0.903768C14.833 0.92436 14.9021 0.974089 14.947 1.04314C14.9918 1.11218 15.0091 1.19553 14.9955 1.27672C14.9818 1.3579 14.9383 1.43103 14.8733 1.48165C14.859 1.49287 13.4095 2.63433 11.7413 4.7251C10.2061 6.64913 8.16519 9.79521 7.16094 13.8568C7.1433 13.9281 7.10227 13.9915 7.04439 14.0368C6.98652 14.0821 6.91513 14.1068 6.84163 14.1068L6.84173 14.1066Z" />
                            </g>
                          </svg>
                          Social Media Design
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                          >
                            <g>
                              <path d="M6.84173 14.1066C6.79635 14.1066 6.75147 14.0972 6.7099 14.079C6.66833 14.0609 6.63098 14.0343 6.60018 14.0009L0.0873947 6.95598C0.0439788 6.90901 0.0151968 6.85041 0.00457124 6.78733C-0.00605429 6.72426 0.00193752 6.65946 0.0275687 6.60086C0.0531998 6.54226 0.0953585 6.49241 0.148885 6.4574C0.202411 6.42239 0.264983 6.40374 0.328943 6.40374H3.46384C3.51091 6.40374 3.55743 6.41385 3.60026 6.43336C3.64309 6.45288 3.68124 6.48135 3.71213 6.51686L5.88873 9.02096C6.12396 8.51813 6.57933 7.68089 7.37841 6.66068C8.55974 5.15244 10.7571 2.9343 14.5164 0.931913C14.5891 0.893219 14.6736 0.883176 14.7533 0.903768C14.833 0.92436 14.9021 0.974089 14.947 1.04314C14.9918 1.11218 15.0091 1.19553 14.9955 1.27672C14.9818 1.3579 14.9383 1.43103 14.8733 1.48165C14.859 1.49287 13.4095 2.63433 11.7413 4.7251C10.2061 6.64913 8.16519 9.79521 7.16094 13.8568C7.1433 13.9281 7.10227 13.9915 7.04439 14.0368C6.98652 14.0821 6.91513 14.1068 6.84163 14.1068L6.84173 14.1066Z" />
                            </g>
                          </svg>
                          Custom ad strategy
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                          >
                            <g>
                              <path d="M6.84173 14.1066C6.79635 14.1066 6.75147 14.0972 6.7099 14.079C6.66833 14.0609 6.63098 14.0343 6.60018 14.0009L0.0873947 6.95598C0.0439788 6.90901 0.0151968 6.85041 0.00457124 6.78733C-0.00605429 6.72426 0.00193752 6.65946 0.0275687 6.60086C0.0531998 6.54226 0.0953585 6.49241 0.148885 6.4574C0.202411 6.42239 0.264983 6.40374 0.328943 6.40374H3.46384C3.51091 6.40374 3.55743 6.41385 3.60026 6.43336C3.64309 6.45288 3.68124 6.48135 3.71213 6.51686L5.88873 9.02096C6.12396 8.51813 6.57933 7.68089 7.37841 6.66068C8.55974 5.15244 10.7571 2.9343 14.5164 0.931913C14.5891 0.893219 14.6736 0.883176 14.7533 0.903768C14.833 0.92436 14.9021 0.974089 14.947 1.04314C14.9918 1.11218 15.0091 1.19553 14.9955 1.27672C14.9818 1.3579 14.9383 1.43103 14.8733 1.48165C14.859 1.49287 13.4095 2.63433 11.7413 4.7251C10.2061 6.64913 8.16519 9.79521 7.16094 13.8568C7.1433 13.9281 7.10227 13.9915 7.04439 14.0368C6.98652 14.0821 6.91513 14.1068 6.84163 14.1068L6.84173 14.1066Z" />
                            </g>
                          </svg>
                          Advanced demographic targeting
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                          >
                            <g>
                              <path d="M6.84173 14.1066C6.79635 14.1066 6.75147 14.0972 6.7099 14.079C6.66833 14.0609 6.63098 14.0343 6.60018 14.0009L0.0873947 6.95598C0.0439788 6.90901 0.0151968 6.85041 0.00457124 6.78733C-0.00605429 6.72426 0.00193752 6.65946 0.0275687 6.60086C0.0531998 6.54226 0.0953585 6.49241 0.148885 6.4574C0.202411 6.42239 0.264983 6.40374 0.328943 6.40374H3.46384C3.51091 6.40374 3.55743 6.41385 3.60026 6.43336C3.64309 6.45288 3.68124 6.48135 3.71213 6.51686L5.88873 9.02096C6.12396 8.51813 6.57933 7.68089 7.37841 6.66068C8.55974 5.15244 10.7571 2.9343 14.5164 0.931913C14.5891 0.893219 14.6736 0.883176 14.7533 0.903768C14.833 0.92436 14.9021 0.974089 14.947 1.04314C14.9918 1.11218 15.0091 1.19553 14.9955 1.27672C14.9818 1.3579 14.9383 1.43103 14.8733 1.48165C14.859 1.49287 13.4095 2.63433 11.7413 4.7251C10.2061 6.64913 8.16519 9.79521 7.16094 13.8568C7.1433 13.9281 7.10227 13.9915 7.04439 14.0368C6.98652 14.0821 6.91513 14.1068 6.84163 14.1068L6.84173 14.1066Z" />
                            </g>
                          </svg>
                          Social Media Management
                        </li>
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                          >
                            <g>
                              <path d="M6.84173 14.1066C6.79635 14.1066 6.75147 14.0972 6.7099 14.079C6.66833 14.0609 6.63098 14.0343 6.60018 14.0009L0.0873947 6.95598C0.0439788 6.90901 0.0151968 6.85041 0.00457124 6.78733C-0.00605429 6.72426 0.00193752 6.65946 0.0275687 6.60086C0.0531998 6.54226 0.0953585 6.49241 0.148885 6.4574C0.202411 6.42239 0.264983 6.40374 0.328943 6.40374H3.46384C3.51091 6.40374 3.55743 6.41385 3.60026 6.43336C3.64309 6.45288 3.68124 6.48135 3.71213 6.51686L5.88873 9.02096C6.12396 8.51813 6.57933 7.68089 7.37841 6.66068C8.55974 5.15244 10.7571 2.9343 14.5164 0.931913C14.5891 0.893219 14.6736 0.883176 14.7533 0.903768C14.833 0.92436 14.9021 0.974089 14.947 1.04314C14.9918 1.11218 15.0091 1.19553 14.9955 1.27672C14.9818 1.3579 14.9383 1.43103 14.8733 1.48165C14.859 1.49287 13.4095 2.63433 11.7413 4.7251C10.2061 6.64913 8.16519 9.79521 7.16094 13.8568C7.1433 13.9281 7.10227 13.9915 7.04439 14.0368C6.98652 14.0821 6.91513 14.1068 6.84163 14.1068L6.84173 14.1066Z" />
                            </g>
                          </svg>
                          Unique ads campaigns
                        </li>
                      </ul>
                    </div>
                    <div className="button-area">
                      <a className="explore-btn" href="service-details.html">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="single-services">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                      >
                        <path d="M21.8031 4.41406C21.6683 4.25678 21.6014 4.05238 21.6172 3.8458C21.633 3.63922 21.7302 3.44739 21.8875 3.31249L23.1172 2.25937C23.648 1.82392 24.3134 1.58594 25 1.58594C25.6866 1.58594 26.352 1.82392 26.8828 2.25937L28.1125 3.31327C28.2632 3.4499 28.3548 3.63994 28.3676 3.84299C28.3804 4.04604 28.3134 4.24607 28.181 4.40055C28.0487 4.55502 27.8612 4.65176 27.6586 4.67019C27.456 4.68861 27.2542 4.62727 27.0961 4.49921L25.8656 3.4453C25.6216 3.24496 25.3157 3.13545 25 3.13545C24.6843 3.13545 24.3784 3.24496 24.1344 3.4453L22.9047 4.49999C22.747 4.63429 22.5426 4.70064 22.3362 4.68454C22.1297 4.66843 21.938 4.57117 21.8031 4.41406ZM48.4375 22.5312V44.5312C48.4363 45.5669 48.0243 46.5597 47.292 47.292C46.5597 48.0243 45.5669 48.4363 44.5312 48.4375H5.46875C4.43313 48.4363 3.44028 48.0243 2.70799 47.292C1.97569 46.5597 1.56374 45.5669 1.5625 44.5312V22.5312C1.5621 21.9676 1.68383 21.4106 1.91931 20.8985C2.15479 20.3864 2.49842 19.9314 2.92656 19.5648L4.17969 18.4922C4.33706 18.3573 4.54156 18.2904 4.74822 18.3063C4.95488 18.3222 5.14675 18.4196 5.28164 18.5769C5.41653 18.7343 5.48338 18.9388 5.46748 19.1455C5.45158 19.3521 5.35424 19.544 5.19688 19.6789L3.94453 20.7523C3.81313 20.8654 3.69469 20.9928 3.59141 21.132L24.1344 38.7422C24.3784 38.9425 24.6843 39.052 25 39.052C25.3157 39.052 25.6216 38.9425 25.8656 38.7422L46.4094 21.1312C46.3061 20.992 46.1877 20.8646 46.0563 20.7516L44.8039 19.6781C44.726 19.6113 44.662 19.5298 44.6156 19.4383C44.5691 19.3468 44.5412 19.247 44.5333 19.1447C44.5254 19.0424 44.5378 18.9395 44.5697 18.8419C44.6016 18.7444 44.6524 18.6541 44.7191 18.5762C44.7859 18.4982 44.8674 18.4342 44.9589 18.3878C45.0505 18.3414 45.1502 18.3134 45.2526 18.3056C45.3549 18.2977 45.4578 18.31 45.5553 18.3419C45.6529 18.3738 45.7432 18.4246 45.8211 18.4914L47.0734 19.5648C47.5016 19.9314 47.8452 20.3864 48.0807 20.8985C48.3162 21.4106 48.4379 21.9676 48.4375 22.5312ZM46.875 44.5312V22.7898L33.3594 34.3766L46.5547 45.6906C46.7617 45.3391 46.8722 44.9392 46.875 44.5312ZM16.6406 34.3766L3.125 22.7906V44.5312C3.12759 44.9391 3.23781 45.339 3.44453 45.6906L16.6406 34.3766ZM44.5312 46.875C44.8127 46.8732 45.0914 46.8203 45.3539 46.7187L32.1586 35.4062L26.8828 39.9281C26.3585 40.3776 25.6906 40.6247 25 40.6247C24.3094 40.6247 23.6415 40.3776 23.1172 39.9281L17.8414 35.4062L4.64609 46.7187C4.90857 46.8203 5.18733 46.8732 5.46875 46.875H44.5312ZM7.8125 22.4445C8.0197 22.4445 8.21841 22.3622 8.36493 22.2157C8.51144 22.0692 8.59375 21.8705 8.59375 21.6633V10.1562C8.59437 9.53483 8.8415 8.93905 9.2809 8.49965C9.72031 8.06024 10.3161 7.81311 10.9375 7.81249H39.0625C39.6839 7.81311 40.2797 8.06024 40.7191 8.49965C41.1585 8.93905 41.4056 9.53483 41.4062 10.1562V21.6633C41.4062 21.8705 41.4886 22.0692 41.6351 22.2157C41.7816 22.3622 41.9803 22.4445 42.1875 22.4445C42.3947 22.4445 42.5934 22.3622 42.7399 22.2157C42.8864 22.0692 42.9688 21.8705 42.9688 21.6633V10.1562C42.9675 9.12062 42.5556 8.12777 41.8233 7.39548C41.091 6.66318 40.0981 6.25123 39.0625 6.24999H10.9375C9.90188 6.25123 8.90903 6.66318 8.17673 7.39548C7.44444 8.12777 7.03249 9.12062 7.03125 10.1562V21.6633C7.03125 21.8705 7.11356 22.0692 7.26007 22.2157C7.40659 22.3622 7.6053 22.4445 7.8125 22.4445ZM16.4063 27.3437V23.1641C15.3638 22.796 14.4852 22.0712 13.9256 21.1178C13.3661 20.1644 13.1618 19.0438 13.3488 17.9543C13.5359 16.8647 14.1022 15.8765 14.9477 15.1642C15.7932 14.452 16.8633 14.0618 17.9688 14.0625H20.3125C25.2852 14.0625 27.4141 11.3617 27.5023 11.2469C27.6014 11.1169 27.7387 11.0213 27.8949 10.9734C28.0512 10.9255 28.2185 10.9277 28.3734 10.9798C28.5283 11.0318 28.663 11.1311 28.7585 11.2636C28.8541 11.3962 28.9058 11.5553 28.9062 11.7187V16.4062H29.6875C30.3091 16.4062 30.9052 16.6532 31.3448 17.0927C31.7843 17.5322 32.0312 18.1284 32.0312 18.75C32.0312 19.3716 31.7843 19.9677 31.3448 20.4073C30.9052 20.8468 30.3091 21.0937 29.6875 21.0937H28.9062V25.7812C28.9062 25.9452 28.8547 26.105 28.7588 26.238C28.6629 26.3711 28.5276 26.4706 28.3721 26.5224C28.2165 26.5743 28.0486 26.5758 27.8921 26.527C27.7355 26.4781 27.5984 26.3812 27.5 26.25C27.4188 26.1445 25.5063 23.7266 21.0938 23.4641V27.3437C21.0938 27.9653 20.8468 28.5615 20.4073 29.001C19.9677 29.4406 19.3716 29.6875 18.75 29.6875C18.1284 29.6875 17.5323 29.4406 17.0927 29.001C16.6532 28.5615 16.4063 27.9653 16.4063 27.3437ZM28.9062 17.9687V19.5312H29.6875C29.8947 19.5312 30.0934 19.4489 30.2399 19.3024C30.3864 19.1559 30.4688 18.9572 30.4688 18.75C30.4688 18.5428 30.3864 18.3441 30.2399 18.1976C30.0934 18.0511 29.8947 17.9687 29.6875 17.9687H28.9062ZM19.5313 27.3437V23.4375H17.9688V27.3437C17.9688 27.5509 18.0511 27.7497 18.1976 27.8962C18.3441 28.0427 18.5428 28.125 18.75 28.125C18.9572 28.125 19.1559 28.0427 19.3024 27.8962C19.4489 27.7497 19.5313 27.5509 19.5313 27.3437ZM21.0938 15.5922V21.9078C23.3369 21.9768 25.5103 22.7035 27.3438 23.9976V13.5023C25.5103 14.7965 23.3369 15.5232 21.0938 15.5922ZM17.9688 21.875H19.5313V15.625H17.9688C17.1399 15.625 16.3451 15.9542 15.759 16.5403C15.173 17.1263 14.8438 17.9212 14.8438 18.75C14.8438 19.5788 15.173 20.3736 15.759 20.9597C16.3451 21.5458 17.1399 21.875 17.9688 21.875ZM35.9375 17.9687H34.375C34.1678 17.9687 33.9691 18.0511 33.8226 18.1976C33.6761 18.3441 33.5938 18.5428 33.5938 18.75C33.5938 18.9572 33.6761 19.1559 33.8226 19.3024C33.9691 19.4489 34.1678 19.5312 34.375 19.5312H35.9375C36.1447 19.5312 36.3434 19.4489 36.4899 19.3024C36.6364 19.1559 36.7188 18.9572 36.7188 18.75C36.7188 18.5428 36.6364 18.3441 36.4899 18.1976C36.3434 18.0511 36.1447 17.9687 35.9375 17.9687ZM34.7242 21.1758C34.5388 21.0832 34.3241 21.068 34.1275 21.1336C33.9309 21.1993 33.7684 21.3403 33.6758 21.5258C33.5832 21.7112 33.568 21.9259 33.6336 22.1225C33.6993 22.3191 33.8403 22.4816 34.0258 22.5742L35.5883 23.3555C35.7737 23.4481 35.9884 23.4632 36.185 23.3976C36.2823 23.3651 36.3723 23.3137 36.4499 23.2465C36.5274 23.1792 36.5909 23.0973 36.6367 23.0055C36.6826 22.9136 36.7099 22.8137 36.7171 22.7113C36.7244 22.6089 36.7114 22.5061 36.6789 22.4088C36.6464 22.3114 36.595 22.2214 36.5277 22.1439C36.4604 22.0664 36.3785 22.0029 36.2867 21.957L34.7242 21.1758ZM34.3758 16.4062C34.4967 16.4063 34.616 16.3783 34.7242 16.3242L36.2867 15.543C36.3785 15.4971 36.4604 15.4336 36.5277 15.3561C36.595 15.2786 36.6464 15.1886 36.6789 15.0912C36.7114 14.9939 36.7244 14.8911 36.7171 14.7887C36.7099 14.6863 36.6826 14.5863 36.6367 14.4945C36.5909 14.4027 36.5274 14.3208 36.4499 14.2535C36.3723 14.1862 36.2823 14.1349 36.185 14.1024C35.9884 14.0367 35.7737 14.0519 35.5883 14.1445L34.0258 14.9258C33.8681 15.0043 33.7417 15.1339 33.6669 15.2934C33.5921 15.4528 33.5734 15.6329 33.6139 15.8044C33.6543 15.9758 33.7515 16.1285 33.8897 16.2378C34.0278 16.347 34.1996 16.4064 34.3758 16.4062Z" />
                      </svg>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Email Marketing<span>Solutions</span>
                      </a>
                    </h5>
                    <div className="services-img">
                      <img src="assets/img/home2/services-05.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p>
                        Providing financial advice, including cost reduction
                        strategies, financial planning, and risk management.
                      </p>
                    </div>
                    <div className="button-area">
                      <a className="explore-btn" href="service-details.html">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="single-services">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                      >
                        <path d="M34.9929 44.9071C34.9571 44.9071 34.9214 44.9 34.8857 44.8928C34.841 44.8785 34.7996 44.8555 34.7639 44.825C34.7281 44.7946 34.6988 44.7574 34.6775 44.7155C34.6563 44.6737 34.6435 44.628 34.64 44.5812C34.6365 44.5344 34.6423 44.4874 34.6571 44.4428C34.7286 44.2143 34.7357 43.9643 34.6714 43.7357C34.5214 43.1786 33.9571 42.7786 33.3286 42.7786C32.8571 42.7786 32.3929 42.7 31.95 42.5357C31.8671 42.4991 31.8012 42.4323 31.7656 42.349C31.73 42.2656 31.7274 42.1719 31.7582 42.0867C31.789 42.0015 31.851 41.9311 31.9317 41.8898C32.0124 41.8485 32.1057 41.8394 32.1929 41.8643C32.5571 42 32.9429 42.0643 33.3286 42.0643C34.2857 42.0643 35.1214 42.6786 35.3571 43.55C35.4571 43.9214 35.45 44.3071 35.3286 44.6643C35.2857 44.8143 35.1429 44.9071 34.9929 44.9071ZM5.17143 36.5357C5.11428 36.5357 5.06428 36.5214 5.01428 36.5C4.13657 36.063 3.39853 35.3894 2.88355 34.555C2.36857 33.7207 2.09716 32.759 2.1 31.7786V7.02856C2.1 4.12141 4.46428 1.75713 7.37143 1.75713H40.45C41.428 1.75298 42.3875 2.02321 43.2196 2.5371C44.0517 3.051 44.7229 3.78796 45.1571 4.66427C45.2429 4.84284 45.1714 5.05713 45 5.14284C44.9578 5.16356 44.9119 5.17575 44.865 5.17871C44.8181 5.18166 44.7711 5.17533 44.7266 5.16007C44.6821 5.1448 44.6411 5.12091 44.6059 5.08976C44.5707 5.05862 44.542 5.02082 44.5214 4.97856C44.1469 4.22188 43.5673 3.58565 42.8487 3.14238C42.1301 2.69911 41.3014 2.46662 40.4571 2.47141H7.37143C4.85714 2.47141 2.81428 4.51427 2.81428 7.02856V31.7786C2.81428 33.5214 3.77857 35.0857 5.32857 35.8571C5.50714 35.9428 5.57857 36.1571 5.48571 36.3357C5.45817 36.3958 5.41386 36.4466 5.3581 36.4821C5.30234 36.5176 5.23752 36.5362 5.17143 36.5357ZM15.0071 46.0643H14.4929C13.4 46.0643 12.4786 45.2571 12.3929 44.2214C12.3429 43.6286 12.5571 43.0571 12.9786 42.6428C13.3429 42.2643 13.85 42.0571 14.3929 42.0571H14.6C16.3929 42.0571 17.8429 40.65 17.9 38.8571C17.9071 38.6571 18.0429 38.4857 18.2714 38.5143C18.4714 38.5214 18.6214 38.6857 18.6143 38.8857C18.5841 39.929 18.1475 40.9192 17.3975 41.6451C16.6476 42.371 15.6437 42.7752 14.6 42.7714H14.3929C14.0429 42.7714 13.7286 42.9 13.4857 43.15C13.3527 43.2813 13.2498 43.4402 13.1845 43.6153C13.1191 43.7905 13.0927 43.9778 13.1071 44.1643C13.1643 44.8286 13.7714 45.35 14.4929 45.35H15.0071C15.2071 45.35 15.3643 45.5071 15.3643 45.7071C15.3643 45.9071 15.2071 46.0643 15.0071 46.0643Z" />
                        <path d="M42.6286 39.2285H9.54285C6.64285 39.2285 4.27856 36.8642 4.27856 33.9571V9.2071C4.27856 6.29995 6.64285 3.93567 9.54285 3.93567H42.6286C45.5357 3.93567 47.9 6.29995 47.9 9.2071V33.9571C47.9 36.8642 45.5357 39.2285 42.6286 39.2285ZM9.54285 4.64995C7.03571 4.64995 4.99285 6.69281 4.99285 9.2071V33.9571C4.99285 36.4714 7.03571 38.5142 9.54285 38.5142H42.6286C45.1429 38.5142 47.1857 36.4714 47.1857 33.9571V9.2071C47.1857 6.69281 45.1429 4.64995 42.6286 4.64995H9.54285Z" />
                        <path d="M47.5429 32.9071H4.63571C4.43571 32.9071 4.27856 32.7499 4.27856 32.5499C4.27856 32.3499 4.43571 32.1928 4.63571 32.1928H47.5429C47.7429 32.1928 47.9 32.3499 47.9 32.5499C47.9 32.7499 47.7429 32.9071 47.5429 32.9071ZM35.5929 48.2428H16.6714C15.5786 48.2428 14.6571 47.4356 14.5714 46.3999C14.5214 45.8071 14.7357 45.2285 15.1571 44.8214C15.5357 44.4428 16.0357 44.2357 16.5714 44.2357H16.7714C17.648 44.2338 18.488 43.8847 19.1078 43.2649C19.7276 42.6451 20.0767 41.805 20.0786 40.9285V38.8785C20.0786 38.6785 20.2357 38.5214 20.4357 38.5214H31.8286C32.0286 38.5214 32.1857 38.6785 32.1857 38.8785V40.9285C32.1876 41.805 32.5366 42.6451 33.1564 43.2649C33.7762 43.8847 34.6163 44.2338 35.4928 44.2357C36.4571 44.2357 37.2929 44.8499 37.5214 45.7214C37.7071 46.4214 37.5071 47.1428 37 47.6499C36.6357 48.0285 36.1286 48.2428 35.5929 48.2428ZM16.5786 44.9499C16.2357 44.9499 15.9071 45.0857 15.6643 45.3285C15.3929 45.5928 15.2571 45.9571 15.2857 46.3428C15.3357 47.0071 15.95 47.5214 16.6714 47.5214H35.5929C35.9357 47.5214 36.2643 47.3857 36.5071 47.1428C36.8357 46.8142 36.9643 46.3499 36.8429 45.8999C36.7 45.3499 36.1357 44.9499 35.5071 44.9499C33.2857 44.9499 31.4857 43.1428 31.4857 40.9285V39.2357H20.8V40.9285C20.8 43.1499 18.9929 44.9499 16.7786 44.9499H16.5786ZM31.3571 36.0714H20.8214C20.6214 36.0714 20.4643 35.9142 20.4643 35.7142C20.4643 35.5142 20.6214 35.3571 20.8214 35.3571H31.3571C31.5571 35.3571 31.7143 35.5142 31.7143 35.7142C31.7143 35.9142 31.5571 36.0714 31.3571 36.0714ZM26.0928 28.9428C20.4571 28.9428 15.8786 24.3571 15.8786 18.7285C15.8786 13.0999 20.4643 8.52136 26.0928 8.52136C31.7214 8.52136 36.3 13.0999 36.3 18.7285C36.3 19.0356 36.2857 19.3285 36.2571 19.6285C36.2357 19.8214 36.0643 19.9642 35.8643 19.9499C35.7697 19.9402 35.6828 19.8934 35.6225 19.8198C35.5623 19.7462 35.5337 19.6517 35.5428 19.5571C35.5714 19.2856 35.5857 19.0071 35.5857 18.7285C35.5857 13.4928 31.3286 9.23565 26.0928 9.23565C20.8571 9.23565 16.5929 13.4928 16.5929 18.7285C16.5929 23.9642 20.8571 28.2285 26.0928 28.2285C28.2571 28.2285 30.2857 27.5214 31.9714 26.1856C32.1286 26.0642 32.35 26.0857 32.4714 26.2428C32.5929 26.3999 32.5714 26.6214 32.4143 26.7428C30.6154 28.1678 28.3878 28.9431 26.0928 28.9428Z" />
                        <path d="M26.0928 25.5786C22.3142 25.5786 19.2428 22.5072 19.2428 18.7286C19.2428 14.9572 22.3142 11.8857 26.0928 11.8857C29.8642 11.8857 32.9357 14.9572 32.9357 18.7286C32.9357 18.9143 32.9285 19.1 32.9142 19.2857C32.9003 19.3753 32.853 19.4563 32.7818 19.5125C32.7107 19.5686 32.6209 19.5958 32.5306 19.5886C32.4402 19.5814 32.3559 19.5402 32.2946 19.4735C32.2333 19.4067 32.1995 19.3192 32.1999 19.2286C32.2142 19.0572 32.2214 18.9 32.2214 18.7286C32.2214 15.35 29.4714 12.6 26.0928 12.6C22.7071 12.6 19.9571 15.35 19.9571 18.7286C19.9571 22.1143 22.7071 24.8643 26.0928 24.8643C27.8857 24.8643 29.5857 24.0786 30.7499 22.7143C30.8785 22.5643 31.1071 22.5429 31.2571 22.6715C31.4071 22.8 31.4285 23.0215 31.2999 23.1786C30.6572 23.9314 29.8588 24.5358 28.9598 24.9501C28.0608 25.3645 27.0827 25.5789 26.0928 25.5786Z" />
                        <path d="M24.3857 15.6286C24.7357 15.2429 25.2285 15.05 25.8642 15.0429V14.4143H26.3142V15.0357C26.9428 15.0786 27.4285 15.2643 27.7642 15.5929C28.0999 15.9214 28.2785 16.35 28.2928 16.8929H27.4642C27.4502 16.6734 27.3841 16.4604 27.2714 16.2714C27.0714 15.95 26.7571 15.7857 26.3214 15.7714V18.0786C27.0571 18.2857 27.5499 18.4786 27.8142 18.6572C28.2428 18.9572 28.4571 19.3929 28.4571 19.9786C28.4571 20.8214 28.1857 21.4143 27.6357 21.7714C27.3357 21.9643 26.8928 22.1 26.3214 22.1572V23.0786H25.8714V22.1429C24.9499 22.0857 24.3285 21.7572 23.9999 21.1643C23.8214 20.8429 23.7285 20.4143 23.7285 19.8714H24.5642C24.5928 20.3072 24.6571 20.6214 24.7714 20.8214C24.9642 21.1786 25.3285 21.3786 25.8642 21.4214V18.8357C25.1785 18.7072 24.6785 18.4929 24.3499 18.1857C24.0214 17.8857 23.8642 17.4643 23.8642 16.9214C23.8571 16.4429 24.0357 16.0143 24.3857 15.6286ZM25.0214 17.6C25.2285 17.7786 25.5071 17.9 25.8571 17.9714V15.7429C25.4428 15.7572 25.1499 15.8857 24.9714 16.1214C24.7928 16.3572 24.7071 16.6072 24.7071 16.8643C24.7142 17.1786 24.8142 17.4286 25.0214 17.6ZM27.4428 20.85C27.5499 20.6572 27.6071 20.4429 27.6071 20.1929C27.6071 19.8 27.4642 19.5 27.1714 19.2929C27.0071 19.1714 26.7214 19.0572 26.3285 18.95V21.4429C26.8642 21.4143 27.2357 21.2214 27.4428 20.85ZM39.4142 30.45C39.0714 30.45 38.7428 30.3357 38.4714 30.1143L35.0071 27.3357L34.6857 27.7357C34.3357 28.1786 33.7928 28.3786 33.2357 28.2786C32.9691 28.2326 32.7203 28.1144 32.5163 27.9368C32.3122 27.7592 32.1608 27.5291 32.0785 27.2715L29.9214 20.7643C29.7571 20.2786 29.8571 19.75 30.1785 19.35C30.4999 18.95 30.9999 18.7357 31.5071 18.7929L38.3285 19.4786C38.8857 19.5357 39.3499 19.8786 39.5642 20.4C39.7785 20.9143 39.6999 21.4857 39.3499 21.9214L38.8571 22.5429L42.3214 25.3215C42.6357 25.5715 42.8357 25.9357 42.8785 26.3357C42.9214 26.7357 42.8071 27.1357 42.5571 27.45L40.6071 29.8857C40.3499 30.2 39.9928 30.4 39.5928 30.4429C39.5285 30.45 39.4714 30.45 39.4142 30.45ZM34.9499 26.4857C35.0285 26.4857 35.1071 26.5143 35.1714 26.5643L38.9142 29.5643C39.0785 29.7 39.2928 29.7572 39.5071 29.7357C39.7214 29.7143 39.9142 29.6072 40.0428 29.4429L41.9928 27.0072C42.1285 26.8429 42.1857 26.6286 42.1642 26.4143C42.1428 26.2 42.0357 26.0072 41.8714 25.8786L38.1285 22.8786C38.0918 22.8496 38.0611 22.8137 38.0383 22.7728C38.0155 22.732 38.0011 22.687 37.9957 22.6405C37.9904 22.594 37.9944 22.5469 38.0074 22.502C38.0203 22.457 38.0421 22.4151 38.0714 22.3786L38.7928 21.4786C38.9785 21.25 39.0214 20.95 38.9071 20.6786C38.7928 20.4072 38.5499 20.2286 38.2571 20.1929L31.4285 19.5072C31.1571 19.4786 30.8999 19.5857 30.7285 19.8C30.5571 20.0143 30.5071 20.2857 30.5928 20.5429L32.7499 27.05C32.8428 27.3286 33.0714 27.5286 33.3571 27.5786C33.6499 27.6286 33.9357 27.5214 34.1214 27.2929L34.6642 26.6143C34.7428 26.5286 34.8499 26.4857 34.9499 26.4857Z" />
                      </svg>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Pay-Per-Click (PPC)<span>Advertising</span>
                      </a>
                    </h5>
                    <div className="services-img">
                      <img src="assets/img/home2/services-06.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p>
                        Health and care consulting refers to the practice of
                        providing expert advice and guidance.
                      </p>
                    </div>
                    <div className="button-area">
                      <a className="explore-btn" href="service-details.html">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Home2 Solution section */}
        {/* Start Home2 Feature section */}
        <div className="home2-feature-section mb-110">
          <div className="container">
            <div className="row g-xl-4 gy-5">
              <div className="col-xl-5">
                <div
                  className="section-title-wrap wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="section-title2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                      >
                        <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                      </svg>
                      How we Do
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                      >
                        <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                      </svg>
                    </span>
                    <h2>Why Tankar Solution  is your top-choice</h2>
                    <p>
                    At Tankar Solution Private Limited, we are committed to delivering cutting-edge IT solutions tailored to your business needs. Our expertise in software development, cybersecurity, ERP, and cloud computing ensures seamless digital transformation.</p>
                  </div>
                  <a
                    href="#"
                    className="primary-btn2"
                    data-text="Get Proposal"
                  >
                    <span>Get Proposal</span>
                  </a>
                </div>
              </div>
              <div className="col-xl-7">
                <ul className="feature-list">
                  <li>
                    <div
                      className="feature-card3 wow animate fadeInDown"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="feature-content">
                            <h3>Innovative & Scalable Solutions</h3>
                            <p>
                            At Tankar Solution, we develop future-ready IT solutions designed to scale with your business growth. Our approach combines cutting-edge technology, agile development, and seamless integration, ensuring your digital infrastructure evolves with market demands.
                            </p>
                            <ul>
                              <li>
                                <div className="check-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={17}
                                    viewBox="0 0 17 17"
                                  >
                                    <g>
                                      <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="content">
                                  <h5>Custom Software Development</h5>
                                  <p>
                                  Tailored solutions to meet unique business needs.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="check-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={17}
                                    viewBox="0 0 17 17"
                                  >
                                    <g>
                                      <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="content">
                                  <h5>AI & Automation</h5>
                                  <p>
                                  Smart solutions for enhanced efficiency and productivity.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="feature-img">
                            <img src={feature} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="feature-card3 wow animate fadeInDown"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="feature-content">
                            <h3>Robust Security Measures</h3>
                            <p>
                            At Tankar Solution, we prioritize cybersecurity and data protection to safeguard your business from potential threats. Our comprehensive security strategies ensure your systems remain secure, compliant, and resilient against cyber risks.
                            </p>
                            <ul>
                              <li>
                                <div className="check-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={17}
                                    viewBox="0 0 17 17"
                                  >
                                    <g>
                                      <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="content">
                                  <h5>Advanced Threat Detection</h5>
                                  <p>
                                  Real-time monitoring to identify and prevent cyber threats.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="check-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={17}
                                    viewBox="0 0 17 17"
                                  >
                                    <g>
                                      <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="content">
                                  <h5> Multi-Layered Security</h5>
                                  <p>
                                  Firewalls, intrusion detection, and access control mechanisms.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="feature-img">
                            <img src={feature2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="feature-card3 wow animate fadeInDown"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="feature-content">
                            <h3>Client-Centric Approach
                            </h3>
                            <p>
                            At Tankar Solution, our priority is delivering tailored IT solutions that align with our clients’ unique business goals. We believe in building long-term partnerships through innovation, transparency, and continuous support.
                            </p>
                            <ul>
                              <li>
                                <div className="check-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={17}
                                    viewBox="0 0 17 17"
                                  >
                                    <g>
                                      <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="content">
                                  <h5>Customized Solutions</h5>
                                  <p>
                                  We understand your needs and develop IT strategies that fit your business.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="check-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={17}
                                    height={17}
                                    viewBox="0 0 17 17"
                                  >
                                    <g>
                                      <path d="M7.75396 15.9875C7.70254 15.9875 7.65167 15.9769 7.60456 15.9563C7.55744 15.9357 7.51511 15.9055 7.48021 15.8678L0.0990473 7.88347C0.0498426 7.83025 0.017223 7.76383 0.00518074 7.69235C-0.00686153 7.62086 0.00219586 7.54742 0.0312445 7.48101C0.0602931 7.4146 0.108073 7.3581 0.168736 7.31842C0.229399 7.27874 0.300314 7.2576 0.372802 7.2576H3.92568C3.97903 7.25761 4.03175 7.26906 4.08029 7.29117C4.12884 7.31329 4.17207 7.34556 4.20708 7.38581L6.67389 10.2238C6.94049 9.65391 7.45657 8.70504 8.3622 7.5488C9.70104 5.83947 12.1913 3.32557 16.452 1.0562C16.5343 1.01235 16.6301 1.00097 16.7204 1.0243C16.8108 1.04764 16.8891 1.104 16.9399 1.18225C16.9907 1.26051 17.0103 1.35496 16.9949 1.44698C16.9794 1.53899 16.93 1.62186 16.8565 1.67924C16.8402 1.69195 15.1975 2.98561 13.3069 5.35515C11.5669 7.53572 9.25389 11.1013 8.11574 15.7044C8.09574 15.7852 8.04924 15.8571 7.98365 15.9084C7.91806 15.9598 7.83715 15.9877 7.75385 15.9877L7.75396 15.9875Z" />
                                    </g>
                                  </svg>
                                </div>
                                <div className="content">
                                  <h5>Dedicated Support</h5>
                                  <p>
                                  24/7 assistance to ensure smooth operations and quick issue resolution.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="feature-img">
                            <img src={feature3} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Home2 Feature section */}
        {/* <div className="horizontal-scrolling-section mb-120"> */}
          {/* <div className="horizontal-scrolling-wrapper"> */}
            {/* Start Home2 Process section */}
            {/* <div className="home2-process-section single-scroll">
              <div className="container">
                <div
                  className="section-title2 text-center wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                    5 Step Process
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                  </span>
                  <h2>Our Work Progress in Digital Mastery.</h2>
                </div>
              </div>
              <div className="container-fluid p-0">
                <div className="process-slider-area">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="swiper home2-process-slider">
                        <div className="swiper-wrapper">
                          <div
                            className="swiper-slide wow animate fadeInDown"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="single-process">
                              <div className="step">
                                <div className="number">
                                  <h6>Step</h6>
                                  <span>01</span>
                                </div>
                              </div>
                              <div className="content">
                                <h4>Client Consultation</h4>
                                <p>
                                  Sed accumsan sem cursus luctus porta. amem
                                  Phasellu du enim, efficitur quis velit ac,
                                  fringilla posuere leo fusci.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="swiper-slide wow animate fadeInDown"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="single-process">
                              <div className="step">
                                <div className="number">
                                  <h6>Step</h6>
                                  <span>02</span>
                                </div>
                              </div>
                              <div className="content">
                                <h4>Strategy Development</h4>
                                <p>
                                  Sed accumsan sem cursus luctus porta. amem
                                  Phasellu du enim, efficitur quis velit ac,
                                  fringilla posuere leo fusci.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="swiper-slide wow animate fadeInDown"
                            data-wow-delay="600ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="single-process">
                              <div className="step">
                                <div className="number">
                                  <h6>Step</h6>
                                  <span>03</span>
                                </div>
                              </div>
                              <div className="content">
                                <h4>Market Research</h4>
                                <p>
                                  Sed accumsan sem cursus luctus porta. amem
                                  Phasellu du enim, efficitur quis velit ac,
                                  fringilla posuere leo fusci.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="swiper-slide wow animate fadeInDown"
                            data-wow-delay="800ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="single-process">
                              <div className="step">
                                <div className="number">
                                  <h6>Step</h6>
                                  <span>04</span>
                                </div>
                              </div>
                              <div className="content">
                                <h4>Campaign Planning</h4>
                                <p>
                                  Sed accumsan sem cursus luctus porta. amem
                                  Phasellu du enim, efficitur quis velit ac,
                                  fringilla posuere leo fusci.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="single-process">
                              <div className="step">
                                <div className="number">
                                  <h6>Step</h6>
                                  <span>05</span>
                                </div>
                              </div>
                              <div className="content">
                                <h4>Campaign Planning</h4>
                                <p>
                                  Sed accumsan sem cursus luctus porta. amem
                                  Phasellu du enim, efficitur quis velit ac,
                                  fringilla posuere leo fusci.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider-btn-area">
                        <div className="slider-btn home2-process-prev">
                          <i className="bi bi-arrow-left" />
                        </div>
                        <div className="content">
                          <p>Our Marketing Challenge</p>
                        </div>
                        <div className="slider-btn home2-process-next">
                          <i className="bi bi-arrow-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* End Home2 Process section */}
            {/* Start Home2 Marketing Agency section */}
            {/* <div className="home2-marketing-agency-section single-scroll">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 d-flex align-items-center justify-content-between">
                    <div className="graf-img">
                      <img src={marketing} alt="" className="light" />
                      <img src={marketing_dark} alt="" className="dark" />
                    </div>
                    <div className="marketing-agency-content">
                      <div
                        className="section-title2 text-center mb-70 wow animate fadeInDown"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={11}
                            height={11}
                            viewBox="0 0 11 11"
                          >
                            <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                          </svg>
                          Marketing Agency Of The Year
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={11}
                            height={11}
                            viewBox="0 0 11 11"
                          >
                            <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                          </svg>
                        </span>
                        <h2>
                          <span>Expert Great Things</span> <br />
                          From Your Marketing Agency
                        </h2>
                        <p>
                          Sed accumsan sem cursus luctus porta. amem Phasellu du
                          enim, efficitur quis velit ac, fringilla posuere leo
                          fusci.
                        </p>
                      </div>
                      <div className="nav-and-tab-area">
                        <div className="nav-area mb-70">
                          <span>Before</span>
                          <nav>
                            <div
                              className="nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <button
                                className="nav-link active"
                                id="before-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#before"
                                type="button"
                                role="tab"
                                aria-controls="before"
                                aria-selected="true"
                              />
                              <button
                                className="nav-link yearly"
                                id="after-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#after"
                                type="button"
                                role="tab"
                                aria-controls="after"
                                aria-selected="false"
                              />
                            </div>
                          </nav>
                          <span>After</span>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="before"
                            role="tabpanel"
                            aria-labelledby="before-tab"
                            tabIndex={0}
                          >
                            <ul className="counter-wrap">
                              <li className="single-countdown">
                                <div className="number">
                                  <h5 className="counter">55</h5>
                                  <span>%</span>
                                </div>
                                <p>
                                  Average increase in sales for our clients.
                                </p>
                              </li>
                              <li className="single-countdown">
                                <div className="number">
                                  <h5 className="counter">830</h5>
                                </div>
                                <p>Google and Facebook -certified team.</p>
                              </li>
                              <li className="single-countdown">
                                <div className="number">
                                  <h5 className="counter">90</h5>
                                  <span>%</span>
                                </div>
                                <p>
                                  Results improved compared to previous
                                  agencies.
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="after"
                            role="tabpanel"
                            aria-labelledby="after-tab"
                            tabIndex={0}
                          >
                            <ul className="counter-wrap">
                              <li className="single-countdown">
                                <div className="number">
                                  <h5 className="counter">55</h5>
                                  <span>%</span>
                                </div>
                                <p>
                                  Average increase in sales for our clients.
                                </p>
                              </li>
                              <li className="single-countdown">
                                <div className="number">
                                  <h5 className="counter">830</h5>
                                </div>
                                <p>Google and Facebook -certified team.</p>
                              </li>
                              <li className="single-countdown">
                                <div className="number">
                                  <h5 className="counter">90</h5>
                                  <span>%</span>
                                </div>
                                <p>
                                  Results improved compared to previous
                                  agencies.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="graf-img">
                      <img src={performance} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* End Home2 Marketing Agency section */}
          {/* </div> */}
        {/* </div> */}
        {/* Start Home2 Case Study section */}
        {/* <div className="home2-case-study-section mb-110">
          <div className="container">
            <div className="row mb-60">
              <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div
                  className="section-title2 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                    Success Stories
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                  </span>
                  <h2>Stories of Growth Triumph</h2>
                </div>
                <a
                  onClick={() => navigate("/case-study2")}
                  className="primary-btn2 wow animate fadeInRight"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                  data-text="View All Stories"
                >
                  <span>View All Stories</span>
                </a>
              </div>
            </div>
            <div
              className="row wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-lg-12">
                <div className="swiper home2-case-study-slider mb-50">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="case-study-card2">
                        <div className="card-img">
                          <img src={case1} alt="" />
                        </div>
                        <div className="card-content">
                          <h4>
                            <a href="case-study-details.html">
                              Beautico E-commerce Growth rate.{" "}
                            </a>
                          </h4>
                          <div className="number">
                            <span>+</span>
                            <h5 className="counter">40</h5>
                            <span>%</span>
                          </div>
                          <ul className="tag-list">
                            <li>
                              <a href="case-study.html">Paid Search</a>
                            </li>
                            <li>
                              <a href="case-study.html">Paid Social</a>
                            </li>
                            <li>
                              <a href="case-study.html">SEO</a>
                            </li>
                          </ul>
                          <a
                            href="case-study-details.html"
                            className="read-more-btn"
                          >
                            Read The Success Stories
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-study-card2">
                        <div className="card-img">
                          <img src={case2} alt="" />
                        </div>
                        <div className="card-content">
                          <h4>
                            <a href="case-study-details.html">
                              Goldmiths Corpo Engagement rates.
                            </a>
                          </h4>
                          <div className="number">
                            <span>+</span>
                            <h5 className="counter">38</h5>
                            <span>%</span>
                          </div>
                          <ul className="tag-list">
                            <li>
                              <a href="case-study.html">Organic Social Meida</a>
                            </li>
                            <li>
                              <a href="case-study.html">Paid Social</a>
                            </li>
                            <li>
                              <a href="case-study.html">SEO</a>
                            </li>
                          </ul>
                          <a
                            href="case-study-details.html"
                            className="read-more-btn"
                          >
                            Read The Success Stories
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-study-card2">
                        <div className="card-img">
                          <img src={case3} alt="" />
                        </div>
                        <div className="card-content">
                          <h4>
                            <a href="case-study-details.html">
                              Fashion E-commerce Growth rate.
                            </a>
                          </h4>
                          <div className="number">
                            <span>+</span>
                            <h5 className="counter">50</h5>
                            <span>%</span>
                          </div>
                          <ul className="tag-list">
                            <li>
                              <a href="case-study.html">Paid Search</a>
                            </li>
                            <li>
                              <a href="case-study.html">Paid Social</a>
                            </li>
                            <li>
                              <a href="case-study.html">SEO</a>
                            </li>
                          </ul>
                          <a
                            href="case-study-details.html"
                            className="read-more-btn"
                          >
                            Read The Success Stories
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-study-card2">
                        <div className="card-img">
                          <img src={case4} alt="" />
                        </div>
                        <div className="card-content">
                          <h4>
                            <a href="case-study-details.html">
                              Health E-commerce Success rate.{" "}
                            </a>
                          </h4>
                          <div className="number">
                            <span>+</span>
                            <h5 className="counter">40</h5>
                            <span>%</span>
                          </div>
                          <ul className="tag-list">
                            <li>
                              <a href="case-study.html">Paid Search</a>
                            </li>
                            <li>
                              <a href="case-study.html">Paid Social</a>
                            </li>
                            <li>
                              <a href="case-study.html">SEO</a>
                            </li>
                          </ul>
                          <a
                            href="case-study-details.html"
                            className="read-more-btn"
                          >
                            Read The Success Stories
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-study-card2">
                        <div className="card-img">
                          <img src={case5} alt="" />
                        </div>
                        <div className="card-content">
                          <h4>
                            <a href="case-study-details.html">
                              Travel &amp; Tour Agency Growth rate.
                            </a>
                          </h4>
                          <div className="number">
                            <span>+</span>
                            <h5 className="counter">38</h5>
                            <span>%</span>
                          </div>
                          <ul className="tag-list">
                            <li>
                              <a href="case-study.html">Organic Social Meida</a>
                            </li>
                            <li>
                              <a href="case-study.html">Paid Social</a>
                            </li>
                            <li>
                              <a href="case-study.html">SEO</a>
                            </li>
                          </ul>
                          <a
                            href="case-study-details.html"
                            className="read-more-btn"
                          >
                            Read The Success Stories
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="case-study-card2">
                        <div className="card-img">
                          <img src={case2} alt="" />
                        </div>
                        <div className="card-content">
                          <h4>
                            <a href="case-study-details.html">
                              Goldmiths Corpo Engagement rates.
                            </a>
                          </h4>
                          <div className="number">
                            <span>+</span>
                            <h5 className="counter">38</h5>
                            <span>%</span>
                          </div>
                          <ul className="tag-list">
                            <li>
                              <a href="case-study.html">Organic Social Meida</a>
                            </li>
                            <li>
                              <a href="case-study.html">Paid Social</a>
                            </li>
                            <li>
                              <a href="case-study.html">SEO</a>
                            </li>
                          </ul>
                          <a
                            href="case-study-details.html"
                            className="read-more-btn"
                          >
                            Read The Success Stories
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-area">
                  <div className="swiper-pagination pagination1" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Home2 Case Study section */}
        {/* Start Home2 Testimonial section */}
        {/* <div className="home2-testimonial-section mb-110">
          <div className="row g-0">
            <div className="col-lg-5">
              <div className="testimonial-content">
                <div
                  className="section-title2 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                    Glowing Reviews
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                  </span>
                  <h2>They Say About Us</h2>
                  <p>
                    Sed accumsan sem cursus luctus porta. amem Phasellu du enim,
                    efficitur quis velit ac, fringilla posuere leo fusci
                    ullamcorper id porent gone this way.
                  </p>
                </div>
                <div
                  className="bottom-area wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                    >
                      <path d="M33.4778 2.58887H2.52211C1.44162 2.58887 0.5625 3.46798 0.5625 4.54848V27.3271C0.5625 28.4077 1.44162 29.2868 2.52211 29.2868H12.3782V32.8485C12.3782 32.9977 12.4374 33.1407 12.5429 33.2462C12.6484 33.3517 12.7915 33.411 12.9407 33.411H15.4517C15.6009 33.411 15.744 33.3517 15.8495 33.2462C15.955 33.1407 16.0142 32.9977 16.0142 32.8485V29.2868H17.7266V32.8485C17.7266 32.9977 17.7859 33.1407 17.8914 33.2462C17.9969 33.3517 18.1399 33.411 18.2891 33.411H20.8003C20.9494 33.411 21.0925 33.3517 21.198 33.2462C21.3035 33.1407 21.3628 32.9977 21.3628 32.8485V29.2868H23.0751V32.8485C23.0751 32.9977 23.1343 33.1407 23.2398 33.2462C23.3453 33.3517 23.4884 33.411 23.6376 33.411H26.1488C26.298 33.411 26.4411 33.3517 26.5465 33.2462C26.652 33.1407 26.7113 32.9977 26.7113 32.8485V29.2868H28.4237V32.8485C28.4237 32.9977 28.483 33.1407 28.5884 33.2462C28.6939 33.3517 28.837 33.411 28.9862 33.411H31.4973C31.6464 33.411 31.7895 33.3517 31.895 33.2462C32.0005 33.1407 32.0598 32.9977 32.0598 32.8485V29.2868H33.478C34.5585 29.2868 35.4376 28.4077 35.4376 27.3271V4.54848C35.4375 3.46798 34.5584 2.58887 33.4778 2.58887ZM2.52211 3.71387H33.4778C33.9381 3.71387 34.3125 4.08828 34.3125 4.54848V7.90245H1.6875V4.54848C1.6875 4.08835 2.06191 3.71387 2.52211 3.71387ZM14.8892 32.2861H13.5032V28.5936H14.8892V32.2861ZM20.2377 32.2861H18.8516V24.357H20.2377V32.2861ZM25.5862 32.2861H24.2V26.0696H25.5862V32.2861ZM30.9346 32.2861H29.5485V21.063H30.9346V32.2861ZM33.4778 28.1618H32.0596V20.5005C32.0596 20.3513 32.0004 20.2082 31.8949 20.1027C31.7894 19.9972 31.6463 19.938 31.4971 19.938H28.986C28.8369 19.938 28.6938 19.9972 28.5883 20.1027C28.4828 20.2082 28.4235 20.3513 28.4235 20.5005V28.1618H26.7112V25.507C26.7112 25.3578 26.6519 25.2148 26.5464 25.1093C26.4409 25.0038 26.2978 24.9445 26.1487 24.9445H23.6374C23.4883 24.9445 23.3452 25.0038 23.2397 25.1093C23.1342 25.2148 23.0749 25.3578 23.0749 25.507V28.1618H21.3626V23.7945C21.3626 23.6453 21.3034 23.5022 21.1979 23.3967C21.0924 23.2912 20.9493 23.232 20.8001 23.232H18.289C18.1398 23.232 17.9967 23.2912 17.8912 23.3967C17.7857 23.5022 17.7265 23.6453 17.7265 23.7945V28.1618H16.0141V28.0311C16.0141 27.8819 15.9548 27.7388 15.8493 27.6333C15.7439 27.5279 15.6008 27.4686 15.4516 27.4686H12.9405C12.7913 27.4686 12.6483 27.5279 12.5428 27.6333C12.4373 27.7388 12.378 27.8819 12.378 28.0311V28.1618H2.52211C2.06191 28.1618 1.6875 27.7874 1.6875 27.3271V9.02752H34.3125V27.3272C34.3125 27.7874 33.9381 28.1618 33.4778 28.1618ZM4.78941 5.8082C4.78941 5.35721 5.15496 4.99166 5.60595 4.99166C6.05693 4.99166 6.42248 5.35721 6.42248 5.8082C6.42248 6.25918 6.05693 6.62473 5.60595 6.62473C5.15496 6.62473 4.78941 6.25918 4.78941 5.8082ZM11.0582 5.8082C11.0582 5.35721 11.4237 4.99166 11.8747 4.99166C12.3257 4.99166 12.6913 5.35721 12.6913 5.8082C12.6913 6.25918 12.3257 6.62473 11.8747 6.62473C11.4237 6.62473 11.0582 6.25918 11.0582 5.8082ZM7.9238 5.8082C7.9238 5.35721 8.28935 4.99166 8.74034 4.99166C9.19132 4.99166 9.55688 5.35721 9.55688 5.8082C9.55688 6.25918 9.19132 6.62473 8.74034 6.62473C8.28935 6.62473 7.9238 6.25918 7.9238 5.8082ZM30.1783 16.6381C30.2313 16.7023 30.2694 16.7775 30.2898 16.8583C30.3102 16.939 30.3123 17.0233 30.2962 17.105L29.9087 19.0653C29.8834 19.193 29.8147 19.308 29.7142 19.3907C29.6137 19.4734 29.4877 19.5187 29.3575 19.5189C29.3207 19.5189 29.2839 19.5152 29.2478 19.5081C29.1754 19.4938 29.1064 19.4653 29.0449 19.4244C28.9835 19.3834 28.9307 19.3308 28.8896 19.2694C28.8484 19.208 28.8198 19.1392 28.8053 19.0668C28.7908 18.9943 28.7907 18.9198 28.8051 18.8473L28.862 18.5593L25.2717 21.8256C25.1918 21.8983 25.0927 21.9464 24.9862 21.9643C24.8796 21.9821 24.7702 21.969 24.671 21.9263L19.6237 19.7559L14.5363 23.6187C14.4387 23.6931 14.3193 23.7334 14.1966 23.7332C14.0788 23.7333 13.9639 23.6964 13.8682 23.6277C13.7725 23.559 13.7008 23.462 13.6632 23.3504C13.6255 23.2388 13.6239 23.1182 13.6585 23.0055C13.6931 22.8929 13.7622 22.794 13.856 22.7228L19.2044 18.6617C19.2836 18.6015 19.3775 18.5634 19.4763 18.5513C19.5751 18.5392 19.6753 18.5535 19.7667 18.5928L24.7826 20.7497L28.2843 17.564L27.7482 17.5659H27.7461C27.5969 17.5662 27.4537 17.5072 27.348 17.4019C27.2424 17.2966 27.1829 17.1536 27.1826 17.0044C27.1823 16.8552 27.2414 16.712 27.3467 16.6064C27.452 16.5007 27.5949 16.4412 27.7441 16.4409L29.7423 16.4336H29.7444C29.8273 16.4335 29.9092 16.4518 29.9843 16.4872C30.0593 16.5225 30.1256 16.5741 30.1783 16.6381ZM14.8839 19.7885C14.9367 19.7298 14.9765 19.6607 15.0007 19.5856C15.025 19.5105 15.0332 19.4311 15.0248 19.3526C14.9781 18.9128 14.8589 18.4836 14.6721 18.0826H18.6078C18.6867 18.0826 18.7647 18.066 18.8368 18.0339C18.9089 18.0018 18.9734 17.9548 19.0261 17.8961C19.0789 17.8374 19.1187 17.7683 19.143 17.6932C19.1672 17.6181 19.1754 17.5388 19.167 17.4603C19.0132 16.0221 18.1156 14.8342 16.88 14.2579C17.2562 13.8475 17.4862 13.3011 17.4862 12.7018C17.4862 11.4308 16.4521 10.3967 15.1811 10.3967C13.91 10.3967 12.8759 11.4308 12.8759 12.7018C12.8759 12.9182 12.9066 13.1274 12.9625 13.3261C12.5496 12.7018 11.8417 12.289 11.0388 12.289C10.2359 12.289 9.52791 12.7019 9.11503 13.3263C9.17246 13.1231 9.20161 12.913 9.20166 12.7018C9.20166 11.4308 8.16757 10.3967 6.89653 10.3967C5.62549 10.3967 4.59141 11.4308 4.59141 12.7018C4.59141 13.3011 4.8214 13.8475 5.19764 14.2579C3.96197 14.8342 3.06443 16.0222 2.91052 17.4604C2.90208 17.5389 2.91025 17.6182 2.93452 17.6933C2.95878 17.7684 2.99858 17.8376 3.05134 17.8963C3.10409 17.955 3.16862 18.0019 3.24071 18.0341C3.31281 18.0662 3.39086 18.0828 3.46978 18.0827H7.40545C7.21865 18.4837 7.09947 18.9128 7.05277 19.3527C7.04433 19.4312 7.0525 19.5105 7.07677 19.5856C7.10103 19.6608 7.14083 19.7299 7.19359 19.7886C7.24634 19.8473 7.31087 19.8943 7.38296 19.9264C7.45506 19.9585 7.53311 19.9751 7.61203 19.975H14.4656C14.5445 19.975 14.6225 19.9584 14.6946 19.9262C14.7666 19.8941 14.8311 19.8472 14.8839 19.7885ZM17.9117 16.9576H13.8864C13.5823 16.651 13.2306 16.3956 12.8449 16.2014C13.3808 15.462 14.246 15.0069 15.181 15.0069C16.441 15.0069 17.523 15.8111 17.9117 16.9576ZM15.181 11.5216C15.8318 11.5216 16.3612 12.051 16.3612 12.7017C16.3612 13.3524 15.8318 13.8818 15.181 13.8818C14.5303 13.8818 14.0008 13.3524 14.0008 12.7017C14.0008 12.051 14.5303 11.5216 15.181 11.5216ZM13.484 14.26C13.4318 14.2844 13.3803 14.3102 13.3292 14.3369C13.3153 14.2128 13.2913 14.09 13.2574 13.9699C13.3251 14.0724 13.4009 14.1694 13.484 14.26ZM11.0387 13.4139C11.6895 13.4139 12.2189 13.9433 12.2189 14.594C12.2189 15.2444 11.69 15.7737 11.0396 15.7741H11.0378C10.3875 15.7737 9.85859 15.2444 9.85859 14.594C9.85859 13.9434 10.388 13.4139 11.0387 13.4139ZM8.74828 14.3369C8.6972 14.3102 8.64556 14.2845 8.59338 14.26C8.67659 14.1694 8.75246 14.0723 8.82028 13.9696C8.78629 14.0899 8.76221 14.2127 8.74828 14.3369ZM5.71634 12.7017C5.71634 12.051 6.24572 11.5216 6.89646 11.5216C7.5472 11.5216 8.07659 12.051 8.07659 12.7017C8.07659 13.3524 7.5472 13.8818 6.89646 13.8818C6.24572 13.8818 5.71634 13.3524 5.71634 12.7017ZM4.16573 16.9576C4.55442 15.8111 5.63639 15.0069 6.89646 15.0069C7.83141 15.0069 8.69667 15.462 9.23252 16.2014C8.84683 16.3957 8.49511 16.6511 8.19098 16.9577H4.16573V16.9576ZM8.30798 18.85C8.69653 17.7039 9.7778 16.8999 11.0372 16.8992H11.0401C12.2996 16.8999 13.3807 17.7039 13.7693 18.85H8.30798Z" />
                    </svg>
                  </div>
                  <div className="text">
                    <p>Average Traffic Increase for Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-wrap">
                <div
                  className="swiper home2-testimonial-slider wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-card2">
                        <span>Great Digital Marketing!</span>
                        <p>
                          Feel free to customize the key features based on the
                          services and strategies you offer in each plan. This
                          breakdown helps potential clients understand the
                          specific value they'll receive at each pricing tier.
                        </p>
                        <div className="author-area">
                          <div className="author-img">
                            <img src={auth1} alt="" />
                          </div>
                          <div className="content">
                            <h6>Mr. Daniel Scoot</h6>
                            <span>Froxio, CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card2">
                        <span>Great Consulting!</span>
                        <p>
                          You can adjust the length and style of the line to
                          match the overall design and formatting of your
                          document. Some other divider options include dashes,
                          stars, or even a graphical element.
                        </p>
                        <div className="author-area">
                          <div className="author-img">
                            <img src={auth2} alt="" />
                          </div>
                          <div className="content">
                            <h6>Dani Alves</h6>
                            <span>Nurio, CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card2">
                        <span>Great Consulting!</span>
                        <p>
                          The information you might include in a Managing
                          Director's profile or information list typically
                          consists of the individual's background, experience,
                          and responsibilities within a company.
                        </p>
                        <div className="author-area">
                          <div className="author-img">
                            <img src={auth3} alt="" />
                          </div>
                          <div className="content">
                            <h6>Mrs. Flurance Miyagi</h6>
                            <span>Froxio, CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-card2">
                        <span>Great Consulting!</span>
                        <p>
                          The specific services offered by business consultants
                          can vary widely depending on the consultant's
                          expertise and the needs of the client. Consultants
                          typically work closely with their clients.
                        </p>
                        <div className="author-area">
                          <div className="author-img">
                            <img src={auth4} alt="" />
                          </div>
                          <div className="content">
                            <h6>Mr. Thomas Robert</h6>
                            <span>Maxcrio, HR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-btn-area">
                  <span className="dash" />
                  <div className="slider-btn-group w-100">
                    <div className="slider-btn prev-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                        />
                      </svg>
                    </div>
                    <div className="slider-btn next-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <ul
                  className="rating-area wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <li>
                    <a href="https://clutch.co" className="single-rating">
                      <div className="review">
                        <span>Review On</span>
                        <img className="logo-dark" src={clutch} alt="" />
                        <img className="logo-light" src={clutch_white} alt="" />
                      </div>
                      <div className="rating">
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-half" />
                          </li>
                        </ul>
                        <span>(50 reviews)</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/"
                      className="single-rating google"
                    >
                      <div className="review">
                        <span>Review On</span>
                        <img src={google} alt="" />
                      </div>
                      <div className="rating">
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-half" />
                          </li>
                        </ul>
                        <span>(50 reviews)</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Home2 Testimonial section */}
        {/* Start Home2 Pricing plan section */}
        {/* <div className="home2-pricing-plan-section mb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="section-title2 text-center mb-70 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                    Pricing Plan
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                    >
                      <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                    </svg>
                  </span>
                  <h2>Elevate Your Business.</h2>
                </div>
              </div>
            </div>
            <div className="pricing-plan-tab-area">
              <nav>
                <div className="nav nav-tabs" id="nav-tab2" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Billed Monthly
                  </button>
                  <button
                    className="nav-link yearly"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Billed Yearly
                    <span>-20 Off</span>
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tab2Content">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabIndex={0}
                >
                  <div className="row g-xl-3 gy-4 align-items-center justify-content-center">
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInLeft"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Basic Plan</span>
                          <h2>
                            $80<sub>/Monthly Investment</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Website Audit Identif opportunities optimization.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Social Media Management Establish a presence on
                              key platforms.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Basic SEO Optimization Improve search engine
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Monthly Analytics Report Track and measure your
                              online performance.
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Third-Party API Setup (All Google Map API).
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Bi-Monthly Analytics Review Actionable insights
                            </li>
                          </ul>
                          <div className="pay-btn-area">
                            <a
                              href="#"
                              className="pay-btn"
                              data-text="Pick This Package"
                            >
                              <span>Pick This Package</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInUp"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card two">
                        <div className="pricing-top">
                          <span>Standard Plan</span>
                          <h2>
                            $120<sub>/Monthly Investment</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Website Audit Identif opportunities optimization.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Social Media Management Establish a presence on
                              key platforms.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Basic SEO Optimization Improve search engine
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Monthly Analytics Report Track and measure your
                              online performance.
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Third-Party API Setup (All Google Map API).
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Bi-Monthly Analytics Review Actionable insights
                            </li>
                          </ul>
                          <div className="pay-btn-area">
                            <a
                              href="#"
                              className="pay-btn"
                              data-text="Pick This Package"
                            >
                              <span>Pick This Package</span>
                            </a>
                          </div>
                        </div>
                        <div className="batch">
                          <span>
                            <strong>30%</strong> Off
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-md-6 wow animate fadeInRight"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Premium Plan</span>
                          <h2>
                            $180<sub>/Monthly Investment</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Website Audit Identif opportunities optimization.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Social Media Management Establish a presence on
                              key platforms.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Basic SEO Optimization Improve search engine
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Monthly Analytics Report Track and measure your
                              online performance.
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Third-Party API Setup (All Google Map API).
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Bi-Monthly Analytics Review Actionable insights
                            </li>
                          </ul>
                          <div className="pay-btn-area">
                            <a
                              href="#"
                              className="pay-btn"
                              data-text="Pick This Package"
                            >
                              <span>Pick This Package</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabIndex={0}
                >
                  <div className="row g-xl-3 gy-4 align-items-center justify-content-center">
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Basic Plan</span>
                          <h2>
                            $150<sub>/Yearly Investment</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Website Audit Identif opportunities optimization.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Social Media Management Establish a presence on
                              key platforms.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Basic SEO Optimization Improve search engine
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Monthly Analytics Report Track and measure your
                              online performance.
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Third-Party API Setup (All Google Map API).
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Bi-Monthly Analytics Review Actionable insights
                            </li>
                          </ul>
                          <div className="pay-btn-area">
                            <a
                              href="#"
                              className="pay-btn"
                              data-text="Pick This Package"
                            >
                              <span>Pick This Package</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card two">
                        <div className="pricing-top">
                          <span>Standard Plan</span>
                          <h2>
                            $200<sub>/Yearly Investment</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Website Audit Identif opportunities optimization.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Social Media Management Establish a presence on
                              key platforms.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Basic SEO Optimization Improve search engine
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Monthly Analytics Report Track and measure your
                              online performance.
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Third-Party API Setup (All Google Map API).
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Bi-Monthly Analytics Review Actionable insights
                            </li>
                          </ul>
                          <div className="pay-btn-area">
                            <a
                              href="#"
                              className="pay-btn"
                              data-text="Pick This Package"
                            >
                              <span>Pick This Package</span>
                            </a>
                          </div>
                        </div>
                        <div className="batch">
                          <span>
                            <strong>30%</strong> Off
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="pricing-card">
                        <div className="pricing-top">
                          <span>Premium Plan</span>
                          <h2>
                            $500<sub>/Yearly Investment</sub>
                          </h2>
                        </div>
                        <div className="pricing-content">
                          <ul>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Website Audit Identif opportunities optimization.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Social Media Management Establish a presence on
                              key platforms.
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Basic SEO Optimization Improve search engine
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                  <path d="M10.312 5.61587L7.26668 8.6612L5.68802 7.08387C5.52338 6.91932 5.30013 6.82688 5.06735 6.82688C4.83458 6.82688 4.61133 6.91932 4.44668 7.08387C4.28213 7.24851 4.1897 7.47176 4.1897 7.70454C4.1897 7.93731 4.28213 8.16056 4.44668 8.3252L6.66135 10.5399C6.8216 10.6999 7.03885 10.7899 7.26535 10.7899C7.49186 10.7899 7.7091 10.6999 7.86935 10.5399L11.552 6.8572C11.7166 6.69256 11.809 6.46931 11.809 6.23654C11.809 6.00376 11.7166 5.78051 11.552 5.61587C11.4706 5.5344 11.374 5.46977 11.2676 5.42568C11.1612 5.38158 11.0472 5.35889 10.932 5.35889C10.8169 5.35889 10.7028 5.38158 10.5964 5.42568C10.4901 5.46977 10.3934 5.5344 10.312 5.61587Z" />
                                </g>
                              </svg>
                              Monthly Analytics Report Track and measure your
                              online performance.
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Third-Party API Setup (All Google Map API).
                            </li>
                            <li className="red">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8C16 8.68267 15.1613 9.24533 14.9933 9.87467C14.82 10.5253 15.2587 11.432 14.9293 12.0013C14.5947 12.58 13.588 12.6493 13.1187 13.1187C12.6493 13.588 12.58 14.5947 12.0013 14.9293C11.432 15.2587 10.5253 14.82 9.87467 14.9933C9.24533 15.1613 8.68267 16 8 16C7.31733 16 6.75467 15.1613 6.12533 14.9933C5.47467 14.82 4.568 15.2587 3.99867 14.9293C3.42 14.5947 3.35067 13.588 2.88133 13.1187C2.412 12.6493 1.40533 12.58 1.07067 12.0013C0.741333 11.432 1.18 10.5253 1.00667 9.87467C0.838667 9.24533 0 8.68267 0 8C0 7.31733 0.838667 6.75467 1.00667 6.12533C1.18 5.47467 0.741333 4.568 1.07067 3.99867C1.40533 3.42 2.412 3.35067 2.88133 2.88133C3.35067 2.412 3.42 1.40533 3.99867 1.07067C4.568 0.741333 5.47467 1.18 6.12533 1.00667C6.75467 0.838667 7.31733 0 8 0C8.68267 0 9.24533 0.838667 9.87467 1.00667C10.5253 1.18 11.432 0.741333 12.0013 1.07067C12.58 1.40533 12.6493 2.412 13.1187 2.88133C13.588 3.35067 14.5947 3.42 14.9293 3.99867C15.2587 4.568 14.82 5.47467 14.9933 6.12533C15.1613 6.75467 16 7.31733 16 8Z" />
                                <path d="M8.99 8.00021L10.8462 6.14402C11.0513 5.93893 11.0513 5.60642 10.8462 5.40165L10.5987 5.15421C10.3936 4.94907 10.0611 4.94907 9.8563 5.15421L8.0002 7.01034L6.14402 5.15382C5.93893 4.94873 5.60642 4.94873 5.40165 5.15382L5.15382 5.40128C4.94873 5.60644 4.94873 5.93894 5.15382 6.1437L7.01031 8.0002L5.15419 9.85634C4.94906 10.0615 4.94906 10.394 5.15419 10.5988L5.40165 10.8462C5.60673 11.0513 5.93924 11.0513 6.14402 10.8462L8.00018 8.99002L9.85633 10.8462C10.0615 11.0513 10.394 11.0513 10.5987 10.8462L10.8462 10.5987C11.0513 10.3936 11.0513 10.0611 10.8462 9.85631L8.99 8.00021Z" />
                              </svg>
                              Bi-Monthly Analytics Review Actionable insights
                            </li>
                          </ul>
                          <div className="pay-btn-area">
                            <a
                              href="#"
                              className="pay-btn"
                              data-text="Pick This Package"
                            >
                              <span>Pick This Package</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Home2 Pricing plan section */}
        {/* Start Home2 Contact section */}
        <div className="contact-section">
    <div className="container">
      <div className="row g-lg-4 gy-5">
        <div className="col-lg-5">
          <div className="contact-content">
            <div
              className="section-title white wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="500ms"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                >
                  <g>
                    <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                  </g>
                </svg>
                Send a Meassage
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                >
                  <g>
                    <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                  </g>
                </svg>
              </span>
              <h2>Connect Tankar Solution</h2>
              <p>Ready to unlock opportunities, achieve goals, and embrace innovation? Let's connect!</p>
            </div>
            <div
              className="contact-area wow animate fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1000ms"
            >
              <div className="hotline-area mb-40">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                  >
                    <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                    <path d="M15.8658 7.46734C18.699 7.47067 20.995 9.76666 20.9983 12.5999C20.9983 12.7237 21.0475 12.8424 21.135 12.9299C21.2225 13.0174 21.3412 13.0665 21.4649 13.0665C21.5887 13.0665 21.7073 13.0174 21.7948 12.9299C21.8823 12.8424 21.9315 12.7237 21.9315 12.5999C21.9276 9.25147 19.2142 6.53801 15.8658 6.53418C15.608 6.53418 15.3992 6.74306 15.3992 7.00076C15.3992 7.25846 15.608 7.46734 15.8658 7.46734Z" />
                    <path d="M15.8658 10.2671C17.1536 10.2687 18.1972 11.3123 18.1988 12.6001C18.1988 12.7239 18.2479 12.8426 18.3354 12.9301C18.4229 13.0176 18.5416 13.0667 18.6653 13.0667C18.7891 13.0667 18.9078 13.0176 18.9953 12.9301C19.0828 12.8426 19.1319 12.7239 19.1319 12.6001C19.1298 10.7972 17.6687 9.33601 15.8658 9.33398C15.608 9.33398 15.3992 9.54286 15.3992 9.80056C15.3992 10.0583 15.608 10.2671 15.8658 10.2671Z" />
                  </svg>
                </div>
                <div className="content">
                  <span>To More Inquiry</span>
                  <h6>
                    <a href="tel:+919909388561">+91 99093 88561</a>
                  </h6>
                </div>
              </div>
              <div className="hotline-area">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                  >
                    <path d="M13.5367 14.7299C12.5654 14.7253 11.6005 14.573 10.675 14.2784C9.94863 14.0353 9.29972 13.6039 8.79454 13.0282C8.28935 12.4524 7.94598 11.7529 7.79946 11.0011C7.47317 9.42986 8.06813 7.76849 9.43051 6.44251C9.57687 6.30005 9.72894 6.16358 9.88637 6.03345C10.5736 5.45807 11.3905 5.05858 12.2666 4.86946C13.1428 4.68035 14.0517 4.70729 14.9151 4.94797C15.7431 5.21236 16.469 5.72653 16.9932 6.4199C17.5174 7.11328 17.8141 7.95188 17.8427 8.82061C17.9062 9.84533 17.5722 10.8551 16.9102 11.6398C16.6597 11.9553 16.3272 12.1956 15.9491 12.3344C15.571 12.4732 15.162 12.5052 14.7669 12.4267C14.6039 12.3929 14.4494 12.3265 14.3126 12.2316C14.1758 12.1367 14.0596 12.0151 13.9709 11.8743C13.8913 11.7374 13.8401 11.5859 13.8205 11.4288C13.8008 11.2717 13.8131 11.1122 13.8565 10.9599C14.2357 9.52736 14.6209 7.35033 14.6248 7.32866C14.6347 7.27261 14.6555 7.21906 14.6861 7.17106C14.7167 7.12307 14.7565 7.08157 14.8031 7.04894C14.8498 7.0163 14.9024 6.99317 14.9579 6.98087C15.0135 6.96857 15.071 6.96733 15.127 6.97724C15.1831 6.98714 15.2366 7.00798 15.2846 7.03858C15.3326 7.06918 15.3741 7.10893 15.4067 7.15557C15.4394 7.2022 15.4625 7.25481 15.4748 7.31038C15.4871 7.36596 15.4883 7.42341 15.4784 7.47946C15.4624 7.57003 15.0828 9.71413 14.6946 11.1814C14.6809 11.2216 14.6756 11.2643 14.6789 11.3067C14.6823 11.3491 14.6942 11.3903 14.7141 11.4279C14.774 11.5108 14.8644 11.5664 14.9654 11.5826C15.2073 11.623 15.4557 11.5965 15.6836 11.506C15.9116 11.4155 16.1105 11.2645 16.2589 11.0691C16.773 10.4541 17.0306 9.66472 16.9782 8.86481C16.9575 8.17325 16.7233 7.50504 16.3078 6.95187C15.8923 6.3987 15.3157 5.98767 14.6573 5.77519C13.9319 5.57566 13.1689 5.55562 12.434 5.7168C11.6992 5.87798 11.0146 6.21553 10.4393 6.70034C10.3002 6.81604 10.1646 6.93694 10.0346 7.06347C9.36117 7.71866 8.28522 9.07844 8.64792 10.8247C8.76766 11.4243 9.04196 11.9821 9.44365 12.443C9.84535 12.9039 10.3605 13.2519 10.938 13.4524C12.9703 14.1007 15.891 14.1791 17.4293 12.266C17.5022 12.1793 17.6061 12.1246 17.7188 12.1136C17.8315 12.1025 17.944 12.1361 18.0323 12.207C18.1206 12.2779 18.1776 12.3805 18.1912 12.493C18.2047 12.6054 18.1737 12.7186 18.1048 12.8085C16.9669 14.2238 15.2353 14.7299 13.5367 14.7299Z" />
                    <path d="M12.0531 12.4837C11.595 12.4917 11.1481 12.3416 10.7878 12.0586C9.9562 11.393 9.93324 10.2365 10.1664 9.44911C10.2452 9.18694 10.3505 8.93345 10.4814 8.69295C10.8065 8.03693 11.3264 7.49738 11.9699 7.14814C12.3602 6.94569 12.8052 6.87413 13.2393 6.94404C13.6734 7.01396 14.0735 7.22164 14.3805 7.5364C14.6932 7.87907 14.9287 8.28484 15.0712 8.72632C15.107 8.83391 15.0992 8.95127 15.0495 9.05319C14.9998 9.15511 14.9121 9.23348 14.8052 9.27148C14.6984 9.30948 14.5809 9.30408 14.478 9.25643C14.3751 9.20879 14.295 9.1227 14.2548 9.01665C14.1521 8.69059 13.9813 8.39004 13.7539 8.13483C13.5751 7.95191 13.3414 7.83246 13.0884 7.79468C12.8354 7.7569 12.577 7.80284 12.3525 7.92553C11.8699 8.1977 11.4821 8.61094 11.241 9.10981C11.1398 9.2968 11.058 9.4937 10.9971 9.6974C10.8285 10.2668 10.8658 11.0104 11.3303 11.3822C11.8381 11.7904 12.6953 11.6179 13.1776 11.2019C13.5368 10.8783 13.8454 10.5026 14.0932 10.0874C14.1232 10.039 14.1624 9.99704 14.2087 9.96384C14.2549 9.93064 14.3073 9.90687 14.3627 9.8939C14.4181 9.88092 14.4756 9.87899 14.5317 9.88821C14.5879 9.89743 14.6417 9.91763 14.6901 9.94765C14.7384 9.97766 14.7804 10.0169 14.8136 10.0632C14.8468 10.1094 14.8706 10.1617 14.8836 10.2172C14.8966 10.2726 14.8985 10.33 14.8893 10.3862C14.88 10.4424 14.8598 10.4962 14.8298 10.5446C14.5361 11.0337 14.1705 11.4759 13.7452 11.8562C13.2714 12.256 12.673 12.4779 12.0531 12.4837Z" />
                    <path d="M24.6996 26.0015H1.29998C0.955309 26.0011 0.624854 25.864 0.381135 25.6203C0.137416 25.3766 0.000344239 25.0462 8.47364e-08 24.7015V8.66841C-5.14206e-05 8.58603 0.023378 8.50535 0.0675423 8.43581C0.111707 8.36628 0.174776 8.31077 0.249359 8.2758C0.323942 8.24083 0.406948 8.22784 0.488649 8.23836C0.57035 8.24887 0.647361 8.28246 0.710655 8.33518L11.3428 17.1716C11.8091 17.5569 12.3952 17.7677 13.0002 17.7677C13.6052 17.7677 14.1913 17.5569 14.6577 17.1716L25.2889 8.33474C25.3523 8.282 25.4293 8.24841 25.511 8.23791C25.5928 8.22741 25.6758 8.24043 25.7504 8.27546C25.825 8.31048 25.8881 8.36605 25.9322 8.43565C25.9763 8.50525 25.9997 8.58599 25.9996 8.66841V24.7015C25.9992 25.0462 25.8622 25.3766 25.6184 25.6203C25.3747 25.864 25.0443 26.0011 24.6996 26.0015ZM0.866653 9.59183V24.7015C0.866653 24.9407 1.06078 25.1348 1.29998 25.1348H24.6996C24.8145 25.1348 24.9247 25.0892 25.006 25.0079C25.0873 24.9266 25.1329 24.8164 25.1329 24.7015V9.59183L15.2106 17.838C14.5887 18.352 13.807 18.6333 13.0002 18.6335C12.1933 18.6336 11.4116 18.3527 10.7894 17.8389L0.866653 9.59183Z" />
                    <path d="M0.434172 9.10179C0.342147 9.10197 0.252454 9.07285 0.178087 9.01865C0.103719 8.96444 0.0485401 8.88797 0.020542 8.8003C-0.00745601 8.71264 -0.00681877 8.61834 0.0223615 8.53106C0.0515417 8.44379 0.10775 8.36807 0.182842 8.31487L4.08278 5.55025C4.17656 5.48377 4.29291 5.45726 4.40623 5.47656C4.51955 5.49586 4.62057 5.55939 4.68705 5.65316C4.75354 5.74694 4.78005 5.86329 4.76075 5.97662C4.74145 6.08994 4.67792 6.19095 4.58414 6.25744L0.684201 9.02206C0.611181 9.074 0.52378 9.10187 0.434172 9.10179ZM25.5662 9.10179C25.4766 9.10187 25.3892 9.074 25.3162 9.02206L21.4163 6.25744C21.3235 6.19062 21.2609 6.08984 21.242 5.97706C21.2232 5.86427 21.2498 5.74862 21.3159 5.65531C21.382 5.56201 21.4823 5.4986 21.5949 5.47892C21.7075 5.45924 21.8234 5.48488 21.9172 5.55025L25.8171 8.31487C25.8922 8.36802 25.9483 8.44367 25.9775 8.53086C26.0067 8.61805 26.0075 8.71227 25.9796 8.79989C25.9517 8.88751 25.8966 8.96399 25.8224 9.01826C25.7482 9.07253 25.6582 9.10179 25.5662 9.10179ZM17.0041 3.03522C16.9144 3.0353 16.8269 3.00744 16.7537 2.95549L14.6824 1.48651C14.2165 1.09272 13.6271 0.874976 13.0171 0.871254C12.4071 0.867532 11.8151 1.07807 11.3445 1.46615L9.24716 2.95549C9.15339 3.02198 9.03704 3.04848 8.92371 3.02918C8.81039 3.00988 8.70937 2.94635 8.64289 2.85258C8.57641 2.7588 8.5499 2.64245 8.5692 2.52912C8.5885 2.4158 8.65203 2.31479 8.7458 2.2483L10.8171 0.779325C11.4376 0.271931 12.2154 -0.00360176 13.017 3.55561e-05C13.8186 0.00367287 14.5938 0.286253 15.2097 0.799258L17.255 2.2483C17.3301 2.3015 17.3863 2.37722 17.4155 2.46449C17.4447 2.55177 17.4453 2.64607 17.4173 2.73373C17.3893 2.8214 17.3342 2.89787 17.2598 2.95208C17.1854 3.00628 17.0957 3.0354 17.0037 3.03522H17.0041ZM0.715401 25.7675C0.626173 25.7677 0.539066 25.7403 0.465979 25.6891C0.392892 25.638 0.337387 25.5655 0.307046 25.4815C0.276706 25.3976 0.273008 25.3064 0.296459 25.2203C0.31991 25.1342 0.369366 25.0575 0.438072 25.0005L10.3266 16.7847C10.3704 16.7483 10.4209 16.7209 10.4753 16.7041C10.5296 16.6873 10.5868 16.6813 10.6435 16.6865C10.7001 16.6918 10.7552 16.7082 10.8056 16.7347C10.8559 16.7612 10.9006 16.7974 10.9369 16.8412C10.9733 16.885 11.0007 16.9355 11.0175 16.9899C11.0343 17.0443 11.0403 17.1014 11.0351 17.1581C11.0298 17.2148 11.0134 17.2699 10.9869 17.3202C10.9604 17.3706 10.9242 17.4152 10.8804 17.4516L0.991863 25.6674C0.914246 25.7321 0.816424 25.7675 0.715401 25.7675ZM25.2846 25.7675C25.1835 25.7676 25.0857 25.7322 25.0081 25.6674L15.1196 17.4516C15.0747 17.4156 15.0374 17.371 15.0099 17.3204C14.9824 17.2699 14.9652 17.2143 14.9594 17.1571C14.9536 17.0998 14.9593 17.042 14.9761 16.9869C14.9929 16.9319 15.0205 16.8807 15.0573 16.8365C15.0941 16.7922 15.1393 16.7557 15.1903 16.7291C15.2414 16.7025 15.2972 16.6863 15.3546 16.6816C15.4119 16.6768 15.4697 16.6835 15.5244 16.7013C15.5791 16.719 15.6298 16.7475 15.6734 16.7851L25.5619 25.001C25.6306 25.0579 25.6801 25.1347 25.7035 25.2207C25.727 25.3068 25.7233 25.3981 25.6929 25.482C25.6626 25.5659 25.6071 25.6384 25.534 25.6896C25.4609 25.7408 25.3738 25.7677 25.2846 25.7675Z" />
                    <path d="M21.6668 12.3427C21.5518 12.3427 21.4416 12.2971 21.3604 12.2158C21.2791 12.1346 21.2334 12.0243 21.2334 11.9094V3.03836C21.2321 3.04703 21.2148 3.03489 21.1858 3.03489H4.81471C4.80523 3.03432 4.79574 3.03568 4.7868 3.03888C4.77786 3.04208 4.76967 3.04707 4.76271 3.05353L4.76704 11.9094C4.76704 12.0243 4.72139 12.1346 4.64013 12.2158C4.55886 12.2971 4.44864 12.3427 4.33372 12.3427C4.21879 12.3427 4.10857 12.2971 4.02731 12.2158C3.94604 12.1346 3.90039 12.0243 3.90039 11.9094V3.03489C3.9072 2.79889 4.00723 2.57519 4.17859 2.41276C4.34994 2.25033 4.57867 2.16241 4.81471 2.16824H21.1858C21.4218 2.16241 21.6505 2.25033 21.8219 2.41276C21.9933 2.57519 22.0933 2.79889 22.1001 3.03489V11.9094C22.1001 12.0243 22.0544 12.1346 21.9732 12.2158C21.8919 12.2971 21.7817 12.3427 21.6668 12.3427Z" />
                  </svg>
                </div>
                <div className="content">
                  <span>To Send Mail</span>
                  <h6>
                    <a href="mailto:info@example.com">info@tankarsolutions.com</a>
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="social-area wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <h6>Social Just You Connected Us!</h6>
              <ul className="social-list">
                <li>
                  <a href="https://www.linkedin.com/company/tankar-solutions-pvt-ltd/">
                    <i className="bi bi-linkedin" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="bi bi-facebook" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                    </svg>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/tankar_solutions_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i className="bi bi-instagram" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-lg-7 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="contact-form-wrap">
            <div className="contact-form-area">
              <h3>Your Success Starts Here!</h3>
              <form>
                <div className="row">
                  <div className="col-lg-6 mb-20">
                    <div className="form-inner">
                      <label>Full Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-20">
                    <div className="form-inner">
                      <label>Company / Organization *</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-20">
                    <div className="form-inner">
                      <label>Phone *</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-20">
                    <div className="form-inner">
                      <label>Company email *</label>
                      <input type="email" />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-20">
                    <div className="form-inner">
                      <label>Your Subject *</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12 mb-30">
                    <div className="form-inner">
                      <label>Message *</label>
                      <textarea defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <button
                        className="primary-btn2"
                        type="submit"
                        data-text="Submit Now"
                      >
                        <span>Submit Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        {/* End Home2 Contact section */}
        {/* Start Home2 Blog section */}
        {/* <div className="home2-blog-section mb-110">
          <div className="container">
            <div className="row g-lg-4 gy-5">
              <div
                className="col-lg-4 wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="blog-section-left">
                  <div className="section-title2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                      >
                        <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                      </svg>
                      Latest Blog
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={11}
                        height={11}
                        viewBox="0 0 11 11"
                      >
                        <path d="M11 5.5L9.48449 4.43056L10.2666 2.75L8.41505 2.58495L8.25 0.733376L6.56944 1.51551L5.5 0L4.43056 1.51551L2.75 0.733376L2.58495 2.58495L0.733376 2.75L1.51551 4.43056L0 5.5L1.51551 6.56944L0.733376 8.25L2.58495 8.41505L2.75 10.2666L4.43056 9.48449L5.5 11L6.56944 9.48449L8.25 10.2666L8.41505 8.41505L10.2666 8.25L9.48449 6.56944L11 5.5Z" />
                      </svg>
                    </span>
                    <h2>Marketing Insights</h2>
                    <p>
                      Sed accumsan sem cursus luctus porta. amem Phasellu du
                      enim, efficitur quis velit ac, fringilla posuere leo fusci
                      ullamcorper id porent gone this way.
                    </p>
                  </div>
                  <a href="blog-details.html" className="explore-btn">
                    View All Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4">
                  <div
                    className="col-md-6 wow animate fadeInLeft"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="blog-card style-2">
                      <div className="blog-card-img-wrap">
                        <a href="blog-details.html" className="card-img">
                          <img src={blog1} alt="" />
                        </a>
                        <a href="blog-grid.html" className="date">
                          <span>
                            <strong>15</strong> January
                          </span>
                        </a>
                      </div>
                      <div className="card-content">
                        <div className="blog-meta">
                          <ul className="category">
                            <li>
                              <a href="blog-grid.html">Development</a>
                            </li>
                          </ul>
                          <div className="blog-comment">
                            <span>Comment (20)</span>
                          </div>
                        </div>
                        <h4>
                          <a href="blog-details.html">
                            How to Been population the Startup Company of this.
                          </a>
                        </h4>
                        <a href="blog-details.html" className="read-more-btn">
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 wow animate fadeInRight"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="blog-card style-2">
                      <div className="blog-card-img-wrap">
                        <a href="blog-details.html" className="card-img">
                          <img src={blog2} alt="" />
                        </a>
                        <a href="blog-grid.html" className="date">
                          <span>
                            <strong>20</strong> April
                          </span>
                        </a>
                      </div>
                      <div className="card-content">
                        <div className="blog-meta">
                          <ul className="category">
                            <li>
                              <a href="blog-grid.html">Cyber Security</a>
                            </li>
                          </ul>
                          <div className="blog-comment">
                            <span>Comment (16)</span>
                          </div>
                        </div>
                        <h4>
                          <a href="blog-details.html">
                            How to Start and Grow Your Owner Startup Company.
                          </a>
                        </h4>
                        <a href="blog-details.html" className="read-more-btn">
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
      <Component />

      <Footer />
    </div>
  );
};

export default Career;
