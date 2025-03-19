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
// import blog4 from '../assets/img/innerpage/comment-author-01.jpg'
import blog5 from '../assets/img/innerpage/blog-details-thumb-img.jpg'
import member from '../assets/img/innerpage/comment-author-02.jpg'
import blog6 from '../assets/img/innerpage/blog-details-img1.jpg'
import blog7 from '../assets/img/innerpage/blog-details-img2.jpg'
import blog8 from '../assets/img/innerpage/blog-details-img3.jpg'
import sliderblog1 from '../assets/img/innerpage/popular-post-img1.png'
import sliderblog2 from '../assets/img/innerpage/popular-post-img2.png'
import sliderblog3 from '../assets/img/innerpage/popular-post-img3.png'
import { useNavigate } from 'react-router-dom';


const Blog_details2 = () => {
  const navigate = useNavigate();
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
                <li>How Tankar Solution is Transforming Businesses with Cutting-Edge IT Services</li>
              </ul>
              <h1>
              Tankar Solution drives innovation with IT solutions for business digital growth.
              </h1>
            </div>
            <div className="scroll-down-btn">
              <a href="#blog-details">
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
  {/* Start Blog Details Section */}
  <div
    className="blog-details scroll-margin pt-120 mb-120 style-6"
    id="blog-details"
  >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="blog-details-thumb">
            <div className="batch">
              <span>Creative</span>
            </div>
            <img src={blog5} alt="" />
          </div>
          <div className="blog-details-author-meta">
            <div className="author-area">
              <div className="author-img">
                <img src={member} alt="" />
              </div>
              <div className="author-content">
                <h6>
                  By, <a href="blog-grid.html">Parth Savjadiya</a>
                </h6>
              </div>
            </div>
            <ul>
              <li>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z" />
                </svg>
                5 Jan, 2025
              </li>
              <li>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.15888 13.1844C8.73336 10.6029 8.07416 7.35423 5.59136 5.46029C5.58991 5.45922 5.58846 5.45788 5.5873 5.45708L5.59803 5.48172L5.59629 5.5002C6.08003 6.68033 6.01217 7.97589 5.41793 9.08745L4.99915 9.87117L4.87068 9.00522C4.78338 8.41784 4.54354 7.85751 4.17407 7.3778H4.11578L4.08503 7.29744C4.08938 8.19499 3.88464 9.07915 3.48297 9.91322C2.95602 11.0047 3.03345 12.2633 3.69033 13.2806L4.14362 13.9829L3.3281 13.6647C1.98331 13.1399 0.908237 12.1291 0.378384 10.8914C-0.215271 9.50931 -0.105357 7.90679 0.672747 6.6056C1.07847 5.92875 1.36269 5.21012 1.51784 4.46926L1.66952 3.74314L2.0564 4.39079C2.24113 4.69961 2.37715 5.03388 2.46154 5.38503L2.47024 5.39333L2.47923 5.44958L2.48765 5.44717C3.64654 4.02518 4.34083 2.25579 4.44204 0.464176L4.46814 0L4.88982 0.253917C6.61075 1.28967 7.80589 2.95139 8.17508 4.81853L8.18349 4.85684L8.18784 4.86273L8.20669 4.83809C8.54398 4.42668 8.72204 3.93732 8.72204 3.42226V2.62461L9.2432 3.26048C10.4549 4.73845 11.0761 6.57185 10.9926 8.42319C10.8899 10.6024 9.6031 12.5151 7.5501 13.5514L6.66121 14L7.15888 13.1844Z" />
                </svg>
                3.9K View
              </li>
              <li>
                <a href="#comment-area">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5662 14.9619C14.5908 15.0728 14.5903 15.1878 14.5648 15.2986C14.5393 15.4093 14.4895 15.513 14.419 15.6021C14.3484 15.6912 14.2589 15.7635 14.157 15.8136C14.055 15.8638 13.9432 15.8906 13.8295 15.8922C13.7123 15.8916 13.5967 15.8643 13.4916 15.8124L12.1473 15.1555C10.8911 15.6143 9.51546 15.6277 8.25052 15.1936C6.98557 14.7595 5.90806 13.9042 5.19824 12.7708C6.14928 12.8941 7.11563 12.8159 8.03447 12.5413C8.95331 12.2667 9.80408 11.8018 10.5315 11.1768C11.2589 10.5518 11.8466 9.78079 12.2565 8.91379C12.6664 8.0468 12.8892 7.10326 12.9106 6.14449C12.911 5.70944 12.8664 5.27551 12.7777 4.84961C13.6869 5.29062 14.4601 5.96909 15.0156 6.81329C15.571 7.65749 15.8881 8.63608 15.9332 9.64561C15.9633 10.4111 15.8336 11.1744 15.5525 11.887C15.2714 12.5996 14.845 13.2459 14.3004 13.7847L14.5662 14.9619Z"></path>
                    <path d="M6.0757 0.216195C4.48484 0.198449 2.95187 0.812289 1.81293 1.92312C0.673981 3.03395 0.0220199 4.5511 1.29169e-06 6.1419C-0.000538167 6.94954 0.167902 7.74837 0.494497 8.48703C0.821091 9.22569 1.29861 9.88786 1.89638 10.431L1.65183 11.7365C1.63148 11.8461 1.63545 11.9588 1.66346 12.0668C1.69147 12.1747 1.74285 12.2751 1.81395 12.361C1.88505 12.4469 1.97414 12.5161 2.07493 12.5638C2.17572 12.6114 2.28575 12.6364 2.39724 12.6368C2.52333 12.6366 2.64739 12.6052 2.75837 12.5453L4.19679 11.7726C4.8041 11.9674 5.43791 12.067 6.0757 12.068C7.66662 12.0857 9.19965 11.4718 10.3386 10.3609C11.4776 9.25002 12.1295 7.73277 12.1514 6.1419C12.1294 4.5511 11.4774 3.03395 10.3385 1.92312C9.19953 0.812289 7.66656 0.198449 6.0757 0.216195ZM3.79731 7.05136C3.64711 7.05136 3.50027 7.00681 3.37538 6.92336C3.25049 6.83991 3.15314 6.7213 3.09566 6.58253C3.03818 6.44375 3.02314 6.29105 3.05244 6.14373C3.08175 5.99641 3.15408 5.86109 3.26029 5.75487C3.36651 5.64866 3.50183 5.57633 3.64915 5.54702C3.79647 5.51772 3.94917 5.53276 4.08795 5.59024C4.22672 5.64772 4.34533 5.74507 4.42878 5.86996C4.51223 5.99485 4.55678 6.14169 4.55678 6.29189C4.55678 6.49332 4.47676 6.68649 4.33433 6.82891C4.19191 6.97134 3.99874 7.05136 3.79731 7.05136ZM6.0757 7.05136C5.92549 7.05136 5.77866 7.00681 5.65377 6.92336C5.52887 6.83991 5.43153 6.7213 5.37405 6.58253C5.31657 6.44375 5.30153 6.29105 5.33083 6.14373C5.36013 5.99641 5.43247 5.86109 5.53868 5.75487C5.64489 5.64866 5.78022 5.57633 5.92754 5.54702C6.07486 5.51772 6.22756 5.53276 6.36633 5.59024C6.50511 5.64772 6.62372 5.74507 6.70717 5.86996C6.79062 5.99485 6.83516 6.14169 6.83516 6.29189C6.83516 6.49332 6.75515 6.68649 6.61272 6.82891C6.47029 6.97134 6.27712 7.05136 6.0757 7.05136ZM8.35409 7.05136C8.20388 7.05136 8.05704 7.00681 7.93215 6.92336C7.80726 6.83991 7.70992 6.7213 7.65244 6.58253C7.59495 6.44375 7.57991 6.29105 7.60922 6.14373C7.63852 5.99641 7.71085 5.86109 7.81707 5.75487C7.92328 5.64866 8.0586 5.57633 8.20592 5.54702C8.35324 5.51772 8.50595 5.53276 8.64472 5.59024C8.78349 5.64772 8.90211 5.74507 8.98556 5.86996C9.06901 5.99485 9.11355 6.14169 9.11355 6.29189C9.11355 6.49332 9.03354 6.68649 8.89111 6.82891C8.74868 6.97134 8.55551 7.05136 8.35409 7.05136Z"></path>
                  </svg>
                  840 Comment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-lg-4 gy-5 mb-100">
        <div className="col-lg-8">
          <div className="blog-details-content mb-0">
            <p className="first-para">
            In today’s fast-paced digital landscape, businesses need innovative and reliable IT solutions to stay ahead. Tankar Solution is at the forefront of this transformation, providing world-class IT services that streamline operations, enhance security, and drive efficiency. From cloud computing and data analytics to AI-driven automation and custom software development, Tankar Solution helps businesses leverage the latest technologies to improve productivity and gain a competitive edge. With a client-centric approach, the company tailors IT strategies to meet the unique needs of enterprises across various industries.
            </p>
            <p className="second-para">
            Beyond technology implementation, Tankar Solution excels in IT consulting, helping businesses align their digital transformation goals with market demands. Their expertise in cybersecurity ensures that organizations are protected against evolving cyber threats, while their mobile and web development services create high-performing, user-friendly platforms. By integrating advanced IT solutions, Tankar Solution empowers businesses to scale, innovate, and achieve long-term success in the digital era.
            </p>
            <blockquote className="text-center mb-50">
              <p className="blockquote-text">
              "Their software development solutions were tailored to our needs, making our operations more streamlined and effective."
              </p>
              <h3 className="blockquote-author">Vikram Shah</h3>
              <svg
                className="quotes"
                xmlns="http://www.w3.org/2000/svg"
                width={93}
                height={90}
                viewBox="0 0 93 90"
              >
                <path d="M52.3886 44.806L92.5 88.7114V0.5H52.3886V44.806ZM0.5 44.806L40.61 88.7114V0.5H0.5V44.806Z" />
              </svg>
            </blockquote>
            <div className="row mb-50">
              <div className="col-lg-12">
                <img src={blog6} alt="" />
              </div>
            </div>
            <h3>Unveiling Digital Transformation
            </h3>
            <p>
            Explore how Tankar Solution is revolutionizing businesses with its advanced IT services. Our expertise in mobile app development, web solutions, and IT consulting empowers enterprises to optimize operations and drive growth. Stay ahead in the digital landscape with our tailored, cutting-edge solutions.


            </p>
            <div className="blog-details-img-grp">
              <div className="row g-4 mb-50">
                <div className="col-md-6 ">
                  <img
                    src={blog7}
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src={blog8}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h3>Exploring Our IT Innovations
            </h3>
            <p>
            Discover the impact of Tankar Solution’s services in transforming businesses globally. From UI/UX enhancements to seamless software development, our solutions are designed to boost efficiency, security, and scalability. Experience the power of technology-driven success with us.
            </p>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                >
                  <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                </svg>
                SmartCloud Integration              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                >
                  <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                </svg>
                AI-Powered Automation              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                >
                  <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                </svg>
                Next-Gen Cybersecurity              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                >
                  <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                </svg>
                Agile Software Solutions              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                >
                  <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                </svg>
                Seamless Mobile Experiences              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                >
                  <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                </svg>
                Data-Driven Decision Making              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-area">
            <div className="single-widget mb-30">
              <h5 className="widget-title">Search Here</h5>
              <form>
                <div className="search-box">
                  <input type="text" placeholder="Search Here" />
                  <button type="submit">
                    <i className="bx bx-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className="single-widget mb-30">
              <h5 className="widget-title">Category</h5>
              <ul className="category-list">
                <li>
                  <a href="blog-sidebar.html">
                    <span onClick={() => navigate("/software-devlopment")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>
                      Software Development
                    </span>
                    <span>(20)</span>
                  </a>
                </li>
                <li>
                  <a href="blog-sidebar.html">
                    <span onClick={() => navigate("/it-consulting")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>

                  It Consulting
                </span>
                    <span>(15)</span>
                  </a>
                </li>
                <li>
                  <a href="blog-sidebar.html">
                    <span onClick={() => navigate("/ui-ux")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>
                      UI/UX
                    </span>
                    <span>(25)</span>
                  </a>
                </li>
                <li>
                  <a href="blog-sidebar.html">
                    <span onClick={() => navigate("/web-devlopment")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>
                      Web Development
                    </span>
                    <span>(30)</span>
                  </a>
                </li>
                <li>
                  <a href="blog-sidebar.html">
                    <span   onClick={() => navigate("/mobile-app")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>
                      Mobile App                    </span>
                    <span>(32)</span>
                  </a>
                </li>
                <li>
                  <a href="blog-sidebar.html">
                    <span onClick={() => navigate("/custom-software")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>
                      Custom Software
                    </span>
                    <span>(35)</span>
                  </a>
                </li>
                <li>
                  <a href="blog-sidebar.html">
                    <span onClick={() => navigate("/digital-marketing-page")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>
                      Digital Marketing                    </span>
                    <span>(38)</span>
                  </a>
                </li>

                <li>
                  <a href="blog-sidebar.html">
                    <span onClick={() => navigate("/game-development")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>
                      Game Development    </span>
                    <span>(38)</span>
                  </a>
                </li>

                <li>
                  <a href="blog-sidebar.html">
                    <span onClick={() => navigate("/erp-solution")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={13}
                        height={14}
                        viewBox="0 0 13 14"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                        />
                      </svg>
                      ERP Solution                    </span>
                    <span>(38)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-widget mb-30">
              <h5 className="widget-title">Popular Post </h5>
              <div className="recent-post-widget mb-20">
                <div className="recent-post-img">
                  <a href="blog-details.html">
                    <img
                      src={sliderblog1}
                      alt=""
                    />
                  </a>
                </div>
                <div className="recent-post-content">
                  <a href="blog-grid.html">20 February, 2024</a>
                  <h6>
                    <a href="blog-details.html">
                      Looking Inspiration Traveling The World.
                    </a>
                  </h6>
                </div>
              </div>
              <div className="recent-post-widget mb-20">
                <div className="recent-post-img">
                  <a href="blog-details.html">
                    <img
                      src={sliderblog2}
                      alt=""
                    />
                  </a>
                </div>
                <div className="recent-post-content">
                  <a href="blog-grid.html">12 January, 2024</a>
                  <h6>
                    <a href="blog-details.html">
                      Challenges creating a multi-brand system.
                    </a>
                  </h6>
                </div>
              </div>
              <div className="recent-post-widget mb-20">
                <div className="recent-post-img">
                  <a href="blog-details.html">
                    <img
                      src={sliderblog3}
                      alt=""
                    />
                  </a>
                </div>
                <div className="recent-post-content">
                  <a href="blog-grid.html">04 January, 2024</a>
                  <h6>
                    <a href="blog-details.html">
                      Decoding the Cloud And Deep Dive Creative.
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="single-widget mb-30">
              <h5 className="widget-title">New Tags</h5>
              <ul className="tag-list">
                <li>
                  <a href="blog-grid.html ">Creative</a>
                </li>
                <li>
                  <a href="blog-grid.html ">Web Design</a>
                </li>
                <li>
                  <a href="blog-grid.html ">Software</a>
                </li>
                <li>
                  <a href="blog-grid.html ">Industry</a>
                </li>
                <li>
                  <a href="blog-grid.html ">Marketing</a>
                </li>
                <li>
                  <a href="blog-grid.html ">Product</a>
                </li>
                <li>
                  <a href="blog-grid.html ">Optimization</a>
                </li>
                <li>
                  <a href="blog-grid.html ">Graphic</a>
                </li>
                <li>
                  <a href="blog-grid.html ">Natural</a>
                </li>
              </ul>
            </div>
            <div className="single-widget">
              <h5 className="widget-title">Social Share</h5>
              <ul className="social-list">
                <li>
                  <a href="https://www.linkedin.com/">
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
                    <i className="bi bi-twitter-x" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="bi bi-instagram" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="blog-tag-and-social-area">
        <div className="blog-tag">
          <h6>Tag:</h6>
          <ul>
            <li>
              <a href="blog-grid.html">Industry,</a>
            </li>
            <li>
              <a href="blog-grid.html">Marketing,</a>
            </li>
            <li>
              <a href="blog-grid.html">Technology,</a>
            </li>
            <li>
              <a href="blog-grid.html">Health Care</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mb-120">
        <div className="col-lg-12">
          <div className="details-navigation">
            <div className="single-navigation">
              <div className="star-btn">
                <a href="#">
                  <div className="bg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={163}
                      height={80}
                      viewBox="0 0 163 80"
                    >
                      <path d="M2.83106 43.4757L2.50599 43.8556L2.83105 43.4757L2.51942 43.209C0.549281 41.5233 0.549281 38.4768 2.51942 36.791L2.83105 36.5243L2.50599 36.1444L2.83106 36.5243C4.3642 35.2125 4.87856 33.0628 4.10522 31.1991C3.34371 29.3639 4.18611 27.2563 6.00282 26.4516L10.271 24.5611C11.8256 23.8725 12.9744 22.5035 13.3826 20.8529L13.6874 19.621C14.0981 17.9605 15.4147 16.6764 17.085 16.3074L25.222 14.5098C26.2804 14.276 27.2461 13.7347 27.9978 12.9538L31.4198 9.3992C32.2068 8.58167 33.2736 8.09167 34.4066 8.02736L45.2063 7.41434C45.9803 7.37041 46.7363 7.16333 47.4247 6.80669L54.6193 3.07925C55.3877 2.68117 56.2545 2.51308 57.1159 2.59511L68.4067 3.67024C69.06 3.73244 69.719 3.67725 70.3528 3.50727L80.3343 0.830297C81.0979 0.625498 81.9021 0.625497 82.6657 0.830296L92.6472 3.50727C93.281 3.67725 93.94 3.73244 94.5933 3.67024L105.884 2.59511C106.746 2.51308 107.612 2.68117 108.381 3.07925L115.575 6.80669C116.264 7.16333 117.02 7.37041 117.794 7.41434L128.593 8.02736C129.726 8.09167 130.793 8.58167 131.58 9.39921L135.002 12.9538C135.754 13.7347 136.72 14.276 137.778 14.5098L145.915 16.3074C147.585 16.6764 148.902 17.9605 149.313 19.621L149.617 20.8529C150.026 22.5035 151.174 23.8725 152.729 24.5611L156.997 26.4516C158.814 27.2563 159.656 29.3639 158.895 31.1991C158.121 33.0628 158.636 35.2125 160.169 36.5243L160.481 36.791C162.451 38.4768 162.451 41.5232 160.481 43.209L160.169 43.4757C158.636 44.7875 158.121 46.9372 158.895 48.8009C159.656 50.6361 158.814 52.7437 156.997 53.5484L152.729 55.4389C151.174 56.1275 150.026 57.4965 149.617 59.1471L149.313 60.379C148.902 62.0395 147.585 63.3236 145.915 63.6926L137.778 65.4902C136.72 65.724 135.754 66.2654 135.002 67.0462L131.58 70.6008C130.793 71.4183 129.726 71.9083 128.593 71.9726L117.794 72.5857C117.02 72.6296 116.264 72.8367 115.575 73.1933L108.381 76.9208C107.612 77.3188 106.746 77.4869 105.884 77.4049L94.5933 76.3298C93.94 76.2676 93.281 76.3228 92.6472 76.4927L82.6657 79.1697C81.9021 79.3745 81.0979 79.3745 80.3343 79.1697L70.3528 76.4927C69.719 76.3228 69.06 76.2676 68.4067 76.3298L57.1159 77.4049C56.2545 77.4869 55.3876 77.3188 54.6193 76.9208L47.4247 73.1933C46.7363 72.8367 45.9803 72.6296 45.2063 72.5857L34.4066 71.9726C33.2736 71.9083 32.2068 71.4183 31.4198 70.6008L27.9978 67.0462C27.2461 66.2654 26.2804 65.724 25.222 65.4902L17.085 63.6926C15.4147 63.3236 14.0981 62.0395 13.6874 60.379L13.3826 59.1471C12.9744 57.4965 11.8256 56.1275 10.271 55.4389L6.00282 53.5484C4.18611 52.7437 3.34371 50.6361 4.10522 48.8009C4.87856 46.9372 4.3642 44.7875 2.83106 43.4757Z" />
                    </svg>
                  </div>
                  <div className="nav-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.51122 0.885308L10 9.37364L9.37364 10L0.885308 1.51122V7.38037H0V0H7.38037V0.885308H1.51122Z"
                      />
                    </svg>
                    <span>PRV PROJECT</span>
                  </div>
                </a>
              </div>
              <div className="content">
                <p>
                  The complete gu unlocking your team’s power of our unique
                  work.
                </p>
              </div>
            </div>
            <div className="single-navigation two text-end">
              <div className="content">
                <p>Challenges creating structure multiple brand system.</p>
              </div>
              <div className="star-btn">
                <a href="#">
                  <div className="bg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={163}
                      height={80}
                      viewBox="0 0 163 80"
                    >
                      <path d="M2.83106 43.4757L2.50599 43.8556L2.83105 43.4757L2.51942 43.209C0.549281 41.5233 0.549281 38.4768 2.51942 36.791L2.83105 36.5243L2.50599 36.1444L2.83106 36.5243C4.3642 35.2125 4.87856 33.0628 4.10522 31.1991C3.34371 29.3639 4.18611 27.2563 6.00282 26.4516L10.271 24.5611C11.8256 23.8725 12.9744 22.5035 13.3826 20.8529L13.6874 19.621C14.0981 17.9605 15.4147 16.6764 17.085 16.3074L25.222 14.5098C26.2804 14.276 27.2461 13.7347 27.9978 12.9538L31.4198 9.3992C32.2068 8.58167 33.2736 8.09167 34.4066 8.02736L45.2063 7.41434C45.9803 7.37041 46.7363 7.16333 47.4247 6.80669L54.6193 3.07925C55.3877 2.68117 56.2545 2.51308 57.1159 2.59511L68.4067 3.67024C69.06 3.73244 69.719 3.67725 70.3528 3.50727L80.3343 0.830297C81.0979 0.625498 81.9021 0.625497 82.6657 0.830296L92.6472 3.50727C93.281 3.67725 93.94 3.73244 94.5933 3.67024L105.884 2.59511C106.746 2.51308 107.612 2.68117 108.381 3.07925L115.575 6.80669C116.264 7.16333 117.02 7.37041 117.794 7.41434L128.593 8.02736C129.726 8.09167 130.793 8.58167 131.58 9.39921L135.002 12.9538C135.754 13.7347 136.72 14.276 137.778 14.5098L145.915 16.3074C147.585 16.6764 148.902 17.9605 149.313 19.621L149.617 20.8529C150.026 22.5035 151.174 23.8725 152.729 24.5611L156.997 26.4516C158.814 27.2563 159.656 29.3639 158.895 31.1991C158.121 33.0628 158.636 35.2125 160.169 36.5243L160.481 36.791C162.451 38.4768 162.451 41.5232 160.481 43.209L160.169 43.4757C158.636 44.7875 158.121 46.9372 158.895 48.8009C159.656 50.6361 158.814 52.7437 156.997 53.5484L152.729 55.4389C151.174 56.1275 150.026 57.4965 149.617 59.1471L149.313 60.379C148.902 62.0395 147.585 63.3236 145.915 63.6926L137.778 65.4902C136.72 65.724 135.754 66.2654 135.002 67.0462L131.58 70.6008C130.793 71.4183 129.726 71.9083 128.593 71.9726L117.794 72.5857C117.02 72.6296 116.264 72.8367 115.575 73.1933L108.381 76.9208C107.612 77.3188 106.746 77.4869 105.884 77.4049L94.5933 76.3298C93.94 76.2676 93.281 76.3228 92.6472 76.4927L82.6657 79.1697C81.9021 79.3745 81.0979 79.3745 80.3343 79.1697L70.3528 76.4927C69.719 76.3228 69.06 76.2676 68.4067 76.3298L57.1159 77.4049C56.2545 77.4869 55.3876 77.3188 54.6193 76.9208L47.4247 73.1933C46.7363 72.8367 45.9803 72.6296 45.2063 72.5857L34.4066 71.9726C33.2736 71.9083 32.2068 71.4183 31.4198 70.6008L27.9978 67.0462C27.2461 66.2654 26.2804 65.724 25.222 65.4902L17.085 63.6926C15.4147 63.3236 14.0981 62.0395 13.6874 60.379L13.3826 59.1471C12.9744 57.4965 11.8256 56.1275 10.271 55.4389L6.00282 53.5484C4.18611 52.7437 3.34371 50.6361 4.10522 48.8009C4.87856 46.9372 4.3642 44.7875 2.83106 43.4757Z" />
                    </svg>
                  </div>
                  <div className="nav-btn">
                    <span>NXT PROJECT</span>
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
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="row">
        <div className="col-lg-8">
          <div className="comment-area" id="comment-area">
            <div className="comment-title">
              <h4>Comments (03)</h4>
              <div className="dash" />
            </div>
            <ul className="comment">
              <li>
                <div className="single-comment-area">
                  <div className="author-img">
                    <img
                      src={blog4}
                      alt=""
                    />
                  </div>
                  <div className="comment-content">
                    <div className="author-name-deg">
                      <h6>Mr. Bowmik Haldar,</h6>
                      <span>05 January, 2024</span>
                    </div>
                    <p>
                      However, here are some well-regarded car dealerships known
                      for their customer service, inventory, and overall
                      reputation. It's always a good idea to research and read
                      reviews specific...
                    </p>
                    <div className="replay-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={11}
                        viewBox="0 0 14 11"
                      >
                        <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                      </svg>
                      Reply (02)
                    </div>
                  </div>
                </div>
                <ul className="comment-replay">
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="assets/img/innerpage/comment-author-02.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Jacoline Juie,</h6>
                          <span>05 January, 2024</span>
                        </div>
                        <p>
                          However, here are some well-regarded car dealerships
                          known for their customer service, inventory, and
                          overall reputation. It's always a good idea to
                          research and read reviews specific...
                        </p>
                        <div className="replay-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                          >
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-comment-area">
                      <div className="author-img">
                        <img
                          src="assets/img/innerpage/comment-author-03.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-content">
                        <div className="author-name-deg">
                          <h6>Robert Smith,</h6>
                          <span>05 January, 2024</span>
                        </div>
                        <p>
                          However, here are some well-regarded car dealerships
                          known for their customer service, inventory, and
                          overall reputation. It's always a good idea to
                          research and read reviews specific...
                        </p>
                        <div className="replay-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                          >
                            <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                          </svg>
                          Reply
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="single-comment-area">
                  <div className="author-img">
                    <img
                      src="assets/img/innerpage/comment-author-04.jpg"
                      alt=""
                    />
                  </div>
                  <div className="comment-content">
                    <div className="author-name-deg">
                      <h6>Srileka Panday,</h6>
                      <span>08 January, 2024</span>
                    </div>
                    <p>
                      However, here are some well-regarded car dealerships known
                      for their customer service, inventory, and overall
                      reputation. It's always a good idea to research and read
                      reviews specific...
                    </p>
                    <div className="replay-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={11}
                        viewBox="0 0 14 11"
                      >
                        <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                      </svg>
                      Reply (02)
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="single-comment-area">
                  <div className="author-img">
                    <img
                      src="assets/img/innerpage/comment-author-05.jpg"
                      alt=""
                    />
                  </div>
                  <div className="comment-content">
                    <div className="author-name-deg">
                      <h6>Mr. Bowmik Haldar,</h6>
                      <span>23 January, 2024</span>
                    </div>
                    <p>
                      However, here are some well-regarded car dealerships known
                      for their customer service, inventory, and overall
                      reputation. It's always a good idea to research and read
                      reviews specific...
                    </p>
                    <div className="replay-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={11}
                        viewBox="0 0 14 11"
                      >
                        <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                      </svg>
                      Reply (02)
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="inquiry-form mt-100">
              <div className="title">
                <h4>Leave Your Comment:</h4>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Your Name* :</label>
                      <input type="text" placeholder="Jackson Mile" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Your Email* :</label>
                      <input type="email" placeholder="example@gamil.com" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-50">
                      <label>Your Comments*</label>
                      <textarea
                        placeholder="Write Something..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-inner">
                  <button
                    className="primary-btn1"
                    data-text="Post Comment"
                    type="submit"
                  >
                    <span>Post Comment</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  {/* End Blog Details Section */}
  {/* Start Contact section */}
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
</>

<Footer />
    </div>
  )
}

export default Blog_details2;
