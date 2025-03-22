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
import Software_img1 from '../assets/img/innerpage/service-details-feature-img.jpg';
import Software_img2 from '../assets/img/innerpage/service-details-faq-img.jpg';
import Component from './Component';
const service_details = () => {
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
                <li>Service Details</li>
              </ul>
              <h1>
                We are a IT service Company working with talents on delivering
                unique ideas.
              </h1>
            </div>
            <div className="scroll-down-btn">
              <a href="#service-details-section">
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
  {/* Start Service Details Section */}
  <div
    className="service-details-page pt-120 mb-120"
    id="service-details-section"
  >
    <div className="container">
      <div className="service-details-top-area mb-80">
        <div className="row g-lg-4 gy-5 align-items-center">
          <div
            className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="service-details-top-content">
              <h2>
                Software <span>Development.</span>
              </h2>
              <p>
                Where innovation meets passion in a journey that started with a
                simple idea and a shared dream. Founded in recent year we
                embarked on a mission to bring the new innovation and introduce
                the technology. From humble beginnings to our current
                aspirations, every step has been fueled by a relentless
                commitment.
              </p>
              <ul className="key-features">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                  >
                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                  </svg>
                  Custom Software
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                  >
                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                  </svg>
                  Mobile Application
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                  >
                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                  </svg>
                  Software Consulting
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                  >
                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                  </svg>
                  Web Application
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                  >
                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                  </svg>
                  Enterprise Software
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                  >
                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                  </svg>
                  Maintenance and Support
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="service-details-img">
              <img
                src="../assets/img/innerpage/service-details-feature-img.jpg"
                alt=""
              />
              <img
                              className="black"
                              src={Software_img1}
                              alt=""
                            />
            </div>
          </div>
        </div>
      </div>
      <div
        className="service-details-faq-area wow animate fadeInDown"
        data-wow-delay="400ms"
        data-wow-duration="1500ms"
      >
        <div className="row g-lg-4 gy-5 align-items-xl-center">
          <div className="col-lg-6">
            <div className="service-details-faq-img">
            <img className="black" src={Software_img2} alt=""/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="accordion" id="accordionTravel">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqheadingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqcollapseOne"
                      aria-expanded="true"
                      aria-controls="faqcollapseOne"
                    >
                      01. What is Task Management and how does it work?
                    </button>
                  </h2>
                  <div
                    id="faqcollapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="faqheadingOne"
                    data-bs-parent="#accordionTravel"
                  >
                    <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inci only Integer purus onthis felis non
                      aliquam.Mauris nec just vitae ann auctor tol euismod sit
                      amet non ipsul growing this
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqheadingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqcollapseTwo"
                      aria-expanded="false"
                      aria-controls="faqcollapseTwo"
                    >
                      02. Is Zenfy suitable for my business?
                    </button>
                  </h2>
                  <div
                    id="faqcollapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqheadingTwo"
                    data-bs-parent="#accordionTravel"
                  >
                    <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos only Integer purus onthis placerat
                      felis non aliquam.Mauris nec justo vitae ante auctor tol
                      euismod sit amet non ipsul growing this Praesent commodo
                      at massa eget suscipit. Utani vitae enim velit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqheadingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqcollapseThree"
                      aria-expanded="false"
                      aria-controls="faqcollapseThree"
                    >
                      03. The system requirements using Task Management?
                    </button>
                  </h2>
                  <div
                    id="faqcollapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqheadingThree"
                    data-bs-parent="#accordionTravel"
                  >
                    <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos only Integer purus onthis placerat
                      felis non aliquam.Mauris nec justo vitae ante auctor tol
                      euismod sit amet non ipsul growing this Praesent commodo
                      at massa eget suscipit. Utani vitae enim velit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqheadingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqcollapseFour"
                      aria-expanded="false"
                      aria-controls="faqcollapseFour"
                    >
                      04. How can I upgrade my subscription?
                    </button>
                  </h2>
                  <div
                    id="faqcollapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqheadingFour"
                    data-bs-parent="#accordionTravel"
                  >
                    <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos only Integer purus onthis placerat
                      felis non aliquam.Mauris nec justo vitae ante auctor tol
                      euismod sit amet non ipsul growing this Praesent commodo
                      at massa eget suscipit. Utani vitae enim velit.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faqheadingFive">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqcollapseFive"
                      aria-expanded="true"
                      aria-controls="faqcollapseFive"
                    >
                      05. How can I upgrade my subscription?
                    </button>
                  </h2>
                  <div
                    id="faqcollapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqheadingFive"
                    data-bs-parent="#accordionTravel"
                  >
                    <div className="accordion-body">
                      Aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inci only Integer purus onthis felis non
                      aliquam.Mauris nec just vitae ann auctor tol euismod sit
                      amet non ipsul growing this
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Service Details Section */}
  {/* Start Service Details Process section */}
  <div className="home2-process-section two mb-120">
    <div className="container">
      <div
        className="section-title5 text-center mb-70 wow animate fadeInDown"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <span className="sub-title5 two">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            viewBox="0 0 14 14"
          >
            <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
          </svg>
          Working Process
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
          Bringing the best IT <span> Vendors To You.</span>
        </h2>
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
                        Sed accumsan sem cursus luctus porta. amem Phasellu du
                        enim, efficitur quis velit ac, fringilla posuere leo
                        fusci.
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
                        Sed accumsan sem cursus luctus porta. amem Phasellu du
                        enim, efficitur quis velit ac, fringilla posuere leo
                        fusci.
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
                        Sed accumsan sem cursus luctus porta. amem Phasellu du
                        enim, efficitur quis velit ac, fringilla posuere leo
                        fusci.
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
                        Sed accumsan sem cursus luctus porta. amem Phasellu du
                        enim, efficitur quis velit ac, fringilla posuere leo
                        fusci.
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
                        Sed accumsan sem cursus luctus porta. amem Phasellu du
                        enim, efficitur quis velit ac, fringilla posuere leo
                        fusci.
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
                <p>Overcome the IT Challenges</p>
              </div>
              <div className="slider-btn home2-process-next">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Service Details Process section */}
  {/* Start Service Details Feature Section */}
  <div className="service-details-feature-section mb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div
            className="section-title5 mb-70 wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <span className="sub-title5 two">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
              Service Features
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
              Edge tools Drive That <span> performance.</span>
            </h2>
            <p>
              Feel free adapt this based on the specific managed services,
              features, and unique selling points your IT service company
              provides.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="service-feature-list">
            <li
              className="single-feature wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                >
                  <g>
                    <path d="M-0.00146484 16.0002C-0.00146484 24.8226 7.17676 32 15.9999 32C17.9787 32.0031 19.9408 31.6375 21.7856 30.9219C21.8359 30.9039 21.8821 30.876 21.9215 30.8399C21.9608 30.8037 21.9925 30.7601 22.0147 30.7115C22.0369 30.6629 22.0491 30.6104 22.0507 30.557C22.0523 30.5036 22.0431 30.4504 22.0238 30.4006C22.0045 30.3508 21.9754 30.3053 21.9382 30.267C21.9011 30.2286 21.8566 30.198 21.8074 30.1771C21.7583 30.1562 21.7054 30.1454 21.652 30.1452C21.5986 30.1451 21.5457 30.1556 21.4964 30.1762C19.7437 30.8558 17.8798 31.2031 15.9999 31.2003C7.618 31.2003 0.798605 24.3813 0.798605 16.0002C0.798605 11.353 2.94279 6.9574 6.56831 4.08275V6.75419C6.56831 6.86028 6.61045 6.96203 6.68547 7.03705C6.7605 7.11208 6.86225 7.15422 6.96834 7.15422C7.07444 7.15422 7.17619 7.11208 7.25121 7.03705C7.32623 6.96203 7.36838 6.86028 7.36838 6.75419V3.26868C7.36838 3.26268 7.36518 3.25748 7.36438 3.25108C7.36147 3.19171 7.34491 3.1338 7.31597 3.08187C7.30877 3.06947 7.30717 3.05547 7.29877 3.04346C7.29197 3.03426 7.28197 3.02946 7.27477 3.02066C7.25371 2.9953 7.22951 2.97272 7.20276 2.95346C7.19036 2.94426 7.17876 2.93546 7.16556 2.92825C7.13065 2.9084 7.09286 2.89409 7.05355 2.88585C7.04515 2.88425 7.03755 2.88185 7.02875 2.88105C7.00835 2.87785 6.98994 2.86905 6.96834 2.86905H3.48244C3.37634 2.86905 3.27459 2.9112 3.19957 2.98622C3.12455 3.06124 3.0824 3.16299 3.0824 3.26908C3.0824 3.37518 3.12455 3.47693 3.19957 3.55195C3.27459 3.62697 3.37634 3.66912 3.48244 3.66912H5.81104C2.15392 6.69578 -0.00146484 11.2214 -0.00146484 15.9998V16.0002ZM15.9999 0C14.1354 0 12.308 0.318028 10.5699 0.944882C10.47 0.980849 10.3886 1.055 10.3434 1.15103C10.2982 1.24706 10.2931 1.35709 10.329 1.45693C10.365 1.55676 10.4392 1.63822 10.5352 1.68339C10.6312 1.72855 10.7412 1.73371 10.8411 1.69775C12.4956 1.10149 14.2413 0.797736 15.9999 0.80007C24.3819 0.80007 31.2013 7.61866 31.2013 16.0002C31.2013 20.5206 29.1527 24.8386 25.6848 27.7132V25.0662C25.6848 24.9601 25.6426 24.8583 25.5676 24.7833C25.4926 24.7083 25.3908 24.6661 25.2847 24.6661C25.1786 24.6661 25.0769 24.7083 25.0019 24.7833C24.9268 24.8583 24.8847 24.9601 24.8847 25.0662V28.4761C24.8807 28.4981 24.8847 28.5201 24.8847 28.5429V28.5517L24.8851 28.5541C24.8866 28.6178 24.9037 28.6802 24.9351 28.7357C24.9431 28.7501 24.9459 28.7669 24.9563 28.7805C24.9619 28.7885 24.9711 28.7913 24.9775 28.7985C25.0109 28.8405 25.0526 28.8752 25.0999 28.9005L25.1007 28.9013C25.1567 28.9309 25.2171 28.9517 25.2847 28.9517H28.7702C28.8763 28.9517 28.9781 28.9096 29.0531 28.8346C29.1281 28.7595 29.1703 28.6578 29.1703 28.5517C29.1703 28.4456 29.1281 28.3438 29.0531 28.2688C28.9781 28.1938 28.8763 28.1516 28.7702 28.1516H26.4016C29.9247 25.1278 32.0013 20.6674 32.0013 16.0002C32.0013 7.17742 24.8231 0 15.9999 0Z" />
                    <path d="M16.0001 10.2202C12.8122 10.2202 10.2188 12.8136 10.2188 16.0015C10.2188 19.1894 12.8118 21.7828 16.0001 21.7828C19.1883 21.7828 21.7814 19.1894 21.7814 16.0015C21.7814 12.8136 19.1883 10.2202 16.0001 10.2202ZM16.0001 20.9828C13.2534 20.9828 11.0188 18.7482 11.0188 16.0015C11.0188 13.2549 13.2534 11.0203 16.0001 11.0203C18.7467 11.0203 20.9813 13.2549 20.9813 16.0015C20.9813 18.7482 18.7467 20.9828 16.0001 20.9828Z" />
                    <path d="M22.2149 6.91739C22.2062 6.86193 22.1858 6.80894 22.1552 6.76187C22.1246 6.71479 22.0844 6.67469 22.0373 6.64416C20.9107 5.91405 19.6604 5.39552 18.3478 5.11403C18.2929 5.10221 18.2362 5.10208 18.1813 5.11365C18.1264 5.12521 18.0745 5.14822 18.029 5.18116C17.9836 5.21411 17.9456 5.25626 17.9176 5.30486C17.8895 5.35347 17.872 5.40744 17.8662 5.46326C17.7649 6.41934 16.9629 7.141 16 7.141C15.0371 7.141 14.235 6.41974 14.1338 5.46326C14.1281 5.40741 14.1106 5.35341 14.0826 5.30477C14.0545 5.25613 14.0165 5.21396 13.9711 5.181C13.9256 5.14805 13.8737 5.12505 13.8188 5.11351C13.7638 5.10197 13.7071 5.10214 13.6522 5.11403C12.3396 5.39552 11.0893 5.91405 9.96267 6.64416C9.91552 6.67461 9.8753 6.71464 9.84463 6.76165C9.81396 6.80866 9.79353 6.8616 9.78466 6.91703C9.7758 6.97246 9.77869 7.02913 9.79317 7.08336C9.80764 7.13759 9.83336 7.18817 9.86866 7.23181C10.1602 7.59178 10.3079 8.04711 10.2832 8.50969C10.2584 8.97227 10.063 9.40923 9.73465 9.73603C9.40781 10.0643 8.97086 10.2597 8.5083 10.2844C8.04575 10.3092 7.59044 10.1615 7.23043 9.87004C7.18679 9.83474 7.13621 9.80902 7.08198 9.79455C7.02775 9.78007 6.97108 9.77718 6.91565 9.78604C6.86022 9.79491 6.80728 9.81534 6.76027 9.84601C6.71326 9.87668 6.67323 9.9169 6.64278 9.96405C5.91263 11.0906 5.3941 12.3409 5.11265 13.6536C5.1007 13.7085 5.10047 13.7653 5.11198 13.8203C5.12349 13.8753 5.14648 13.9272 5.17945 13.9727C5.21241 14.0182 5.2546 14.0562 5.30327 14.0843C5.35194 14.1124 5.40599 14.1299 5.46188 14.1356C6.41796 14.236 7.13962 15.0381 7.13962 16.0014C7.13962 16.9647 6.41836 17.7667 5.46188 17.8671C5.40601 17.873 5.352 17.8905 5.30337 17.9186C5.25473 17.9467 5.21256 17.9847 5.17961 18.0302C5.14666 18.0756 5.12366 18.1276 5.11212 18.1825C5.10059 18.2375 5.10077 18.2943 5.11265 18.3492C5.3941 19.6618 5.91263 20.9121 6.64278 22.0387C6.67323 22.0859 6.71328 22.1262 6.76032 22.1569C6.80737 22.1876 6.86035 22.2081 6.91583 22.2169C6.97131 22.2258 7.02803 22.2229 7.0823 22.2084C7.13657 22.1939 7.18718 22.1681 7.23083 22.1327C7.59067 21.841 8.04596 21.6932 8.50853 21.718C8.97109 21.7427 9.40801 21.9383 9.73465 22.2667C10.063 22.5935 10.2584 23.0305 10.2832 23.4931C10.3079 23.9556 10.1602 24.411 9.86866 24.7709C9.83336 24.8146 9.80764 24.8652 9.79317 24.9194C9.77869 24.9736 9.7758 25.0303 9.78466 25.0857C9.79353 25.1411 9.81396 25.1941 9.84463 25.2411C9.8753 25.2881 9.91552 25.3281 9.96267 25.3586C11.0893 26.0887 12.3396 26.6072 13.6522 26.8887C13.7071 26.9006 13.7638 26.9008 13.8188 26.8892C13.8737 26.8777 13.9256 26.8547 13.9711 26.8217C14.0165 26.7888 14.0545 26.7466 14.0826 26.698C14.1106 26.6493 14.1281 26.5953 14.1338 26.5395C14.235 25.5834 15.0371 24.8617 16 24.8617C16.9629 24.8617 17.7649 25.583 17.8662 26.5395C17.8719 26.5953 17.8894 26.6493 17.9174 26.698C17.9455 26.7466 17.9835 26.7888 18.0289 26.8217C18.0744 26.8547 18.1263 26.8777 18.1812 26.8892C18.2362 26.9008 18.2929 26.9006 18.3478 26.8887C19.6604 26.6072 20.9107 26.0887 22.0373 25.3586C22.0845 25.3281 22.1247 25.2881 22.1554 25.2411C22.186 25.1941 22.2065 25.1411 22.2153 25.0857C22.2242 25.0303 22.2213 24.9736 22.2068 24.9194C22.1924 24.8652 22.1666 24.8146 22.1313 24.7709C21.5273 24.0237 21.5849 22.9468 22.2653 22.2667C22.9458 21.5867 24.0223 21.5283 24.7696 22.1327C24.8132 22.168 24.8638 22.1937 24.918 22.2082C24.9722 22.2227 25.0289 22.2256 25.0843 22.2167C25.1398 22.2078 25.1927 22.1874 25.2397 22.1567C25.2867 22.1261 25.3268 22.0859 25.3572 22.0387C26.0874 20.9121 26.6059 19.6618 26.8873 18.3492C26.8993 18.2943 26.8995 18.2375 26.888 18.1825C26.8765 18.1275 26.8535 18.0755 26.8205 18.03C26.7876 17.9845 26.7454 17.9465 26.6967 17.9184C26.648 17.8904 26.594 17.8729 26.5381 17.8671C25.582 17.7667 24.8604 16.9647 24.8604 16.0014C24.8604 15.0381 25.5816 14.236 26.5381 14.1356C26.594 14.1298 26.648 14.1123 26.6966 14.0842C26.7453 14.0561 26.7874 14.0181 26.8204 13.9726C26.8533 13.9271 26.8763 13.8752 26.8879 13.8202C26.8994 13.7652 26.8992 13.7085 26.8873 13.6536C26.6059 12.3409 26.0874 11.0906 25.3572 9.96405C25.3268 9.91684 25.2867 9.87656 25.2397 9.84586C25.1926 9.81515 25.1396 9.79469 25.0842 9.78582C25.0287 9.77696 24.972 9.77987 24.9177 9.79438C24.8634 9.80889 24.8128 9.83467 24.7692 9.87004C24.4091 10.1613 23.9539 10.3089 23.4915 10.2841C23.0291 10.2594 22.5922 10.0641 22.2653 9.73603C21.937 9.40923 21.7416 8.97227 21.7168 8.50969C21.6921 8.04711 21.8398 7.59178 22.1313 7.23181C22.1666 7.18822 22.1923 7.1377 22.2068 7.08353C22.2212 7.02936 22.2238 6.97276 22.2149 6.91739ZM24.9 10.7457C25.3956 11.5812 25.7698 12.483 26.0113 13.424C24.8732 13.7412 24.0607 14.7813 24.0607 16.0014C24.0607 17.2215 24.8736 18.2616 26.0117 18.5788C25.7702 19.5199 25.3961 20.4218 24.9004 21.2574C24.3918 20.9714 23.8035 20.8599 23.2255 20.94C22.6475 21.0201 22.1117 21.2875 21.7001 21.7011C21.2865 22.1127 21.0191 22.6484 20.9389 23.2264C20.8587 23.8044 20.9701 24.3927 21.2561 24.9014C20.4205 25.3972 19.5186 25.7714 18.5774 26.0126C18.2602 24.8745 17.2205 24.0621 16 24.0621C14.7795 24.0621 13.7398 24.8749 13.423 26.013C12.4817 25.7718 11.5796 25.3976 10.7439 24.9018C11.0299 24.3931 11.1414 23.8048 11.0613 23.2269C10.9811 22.6489 10.7138 22.1131 10.3003 21.7015C9.88861 21.288 9.35285 21.0208 8.77493 20.9406C8.197 20.8604 7.60872 20.9717 7.10002 21.2574C6.60437 20.4219 6.23018 19.5202 5.98872 18.5792C7.12682 18.2616 7.93929 17.2215 7.93929 16.0014C7.93929 14.7813 7.12642 13.7412 5.98832 13.424C6.22975 12.4829 6.60393 11.5809 7.09962 10.7453C7.60825 11.0312 8.19653 11.1427 8.77448 11.0625C9.35244 10.9824 9.88823 10.7152 10.2999 10.3017C10.7135 9.89009 10.9809 9.35432 11.0611 8.77635C11.1413 8.19838 11.0299 7.61005 10.7439 7.1014C11.5795 6.60559 12.4814 6.23139 13.4226 5.9901C13.7398 7.1282 14.7791 7.94107 15.9996 7.94107C17.2201 7.94107 18.2598 7.1282 18.5766 5.9901C19.5179 6.23136 20.42 6.60555 21.2557 7.1014C20.9697 7.61001 20.8582 8.19831 20.9383 8.77628C21.0185 9.35425 21.2857 9.89004 21.6993 10.3017C22.1108 10.7154 22.6466 10.9828 23.2246 11.0629C23.8026 11.1431 24.3913 11.0317 24.9 10.7457Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <h5>Technical Implementation</h5>
                <p>
                  Seamless integration of cutting-edge solutions. Our technical
                  implementation ensures robust systems, and optimal performance
                  in every detail.
                </p>
              </div>
            </li>
            <li
              className="single-feature wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                >
                  <g>
                    <path d="M7.31081 5.90445C7.43513 5.90445 7.55436 5.85506 7.64227 5.76715C7.73018 5.67925 7.77956 5.56002 7.77956 5.4357C7.77956 5.31138 7.73018 5.19215 7.64227 5.10424C7.55436 5.01633 7.43513 4.96695 7.31081 4.96695C7.18649 4.96695 7.06726 5.01633 6.97936 5.10424C6.89145 5.19215 6.84206 5.31138 6.84206 5.4357C6.84206 5.56002 6.89145 5.67925 6.97936 5.76715C7.06726 5.85506 7.18649 5.90445 7.31081 5.90445ZM3.56081 5.90445C3.68513 5.90445 3.80436 5.85506 3.89227 5.76715C3.98018 5.67925 4.02956 5.56002 4.02956 5.4357C4.02956 5.31138 3.98018 5.19215 3.89227 5.10424C3.80436 5.01633 3.68513 4.96695 3.56081 4.96695C3.43649 4.96695 3.31726 5.01633 3.22936 5.10424C3.14145 5.19215 3.09206 5.31138 3.09206 5.4357C3.09206 5.56002 3.14145 5.67925 3.22936 5.76715C3.31726 5.85506 3.43649 5.90445 3.56081 5.90445ZM5.43581 5.90445C5.56013 5.90445 5.67936 5.85506 5.76727 5.76715C5.85518 5.67925 5.90456 5.56002 5.90456 5.4357C5.90456 5.31138 5.85518 5.19215 5.76727 5.10424C5.67936 5.01633 5.56013 4.96695 5.43581 4.96695C5.31149 4.96695 5.19226 5.01633 5.10436 5.10424C5.01645 5.19215 4.96706 5.31138 4.96706 5.4357C4.96706 5.56002 5.01645 5.67925 5.10436 5.76715C5.19226 5.85506 5.31149 5.90445 5.43581 5.90445ZM5.333 10.8703L5.34163 10.8703L9.57969 10.8714H9.57994C9.87275 10.8714 10.1213 10.6817 10.1986 10.3993C10.276 10.1168 10.1586 9.82689 9.90656 9.67782L9.262 9.29645C9.77625 8.78705 10.1835 8.18003 10.4599 7.51104C10.7363 6.84205 10.8762 6.12458 10.8714 5.40076C10.8529 2.46526 8.45025 0.0428231 5.51562 0.000573077C2.47469 -0.0431144 0 2.4167 0 5.43582C0 8.33101 2.3855 10.8076 5.333 10.8703ZM2.27813 2.23207C3.1425 1.38007 4.285 0.921011 5.50219 0.937948C7.9305 0.972886 9.91856 2.97751 9.93394 5.40664C9.93819 6.05397 9.80263 6.69459 9.53651 7.28471C9.27039 7.87483 8.87999 8.40053 8.392 8.82589C8.31045 8.8972 8.24693 8.98681 8.20664 9.08737C8.16635 9.18794 8.15043 9.29661 8.16019 9.40451C8.17023 9.51228 8.20564 9.61614 8.26352 9.70761C8.32139 9.79907 8.4001 9.87554 8.49319 9.93076L8.49788 9.93351L5.34625 9.93276C2.90988 9.88601 0.9375 7.87889 0.9375 5.43582C0.9375 4.22201 1.41363 3.08426 2.27813 2.23207ZM31.5312 31.0625H31.0625V24.0819C31.0625 22.253 29.9818 20.5923 28.3041 19.8486L25.8337 18.7898C26.4348 18.6001 26.9779 18.2618 27.4198 17.7926C28.0864 17.0848 28.4688 16.1244 28.4688 15.1576C28.4688 14.2692 28.1584 13.4307 27.5711 12.7325C26.8358 11.8584 26.4324 10.7529 26.4319 9.6107V7.36445C26.4319 5.39707 25.6657 3.54782 24.2746 2.15739C22.8834 0.766136 21.034 1.05769e-05 19.0669 1.05769e-05C15.0061 1.05769e-05 11.7025 3.30364 11.7025 7.36439V9.53751C11.7028 10.718 11.2388 11.8448 10.4849 12.7531C9.53613 13.8963 9.339 15.4418 9.97056 16.7866C10.4393 17.7849 11.2848 18.5021 12.297 18.8056L9.84387 19.8724C8.12281 20.5966 7.01069 22.2711 7.01069 24.1382V29.6563C7.01069 29.9152 7.2205 30.1251 7.47944 30.1251C7.73837 30.1251 7.94819 29.9152 7.94819 29.6563V24.1382C7.94819 22.6493 8.835 21.314 10.2126 20.7343L13.2875 19.3972V22.2188H11.8748C11.6777 22.2189 11.4827 22.2604 11.3026 22.3406C11.1225 22.4209 10.9613 22.538 10.8293 22.6845C10.6976 22.8312 10.5981 23.0039 10.5373 23.1914C10.4765 23.3789 10.4558 23.5771 10.4764 23.7732L11.2491 31.0625H0.46875C0.209812 31.0625 0 31.2724 0 31.5313C0 31.7901 0.209812 32 0.46875 32H31.5312C31.7902 32 32 31.7901 32 31.5313C32 31.2724 31.7902 31.0625 31.5312 31.0625ZM26.8538 13.3361C27.297 13.863 27.5312 14.4928 27.5312 15.1575C27.5312 15.8879 27.2419 16.6141 26.7373 17.1498C26.2031 17.717 25.4691 18.0294 24.6707 18.0294H24.0598L23.2574 17.6854C22.9163 17.5393 22.619 17.307 22.3949 17.0112C22.1707 16.7155 22.0274 16.3665 21.9789 15.9986C23.4252 15.2198 24.4107 13.6914 24.4107 11.9369V8.41295C24.5475 8.42238 24.6845 8.42717 24.8216 8.42732C25.0471 8.42732 25.2716 8.41451 25.4944 8.38926V9.61064C25.495 10.9737 25.9764 12.293 26.8538 13.3361ZM19.1808 20.7362C17.5071 20.7659 15.8379 20.5535 14.225 20.1056V18.9895L14.3606 18.9306L14.3638 18.9292L15.2001 18.5656C15.6529 18.3688 16.0517 18.066 16.3629 17.6827C16.6741 17.2995 16.8886 16.847 16.9882 16.3634C17.4057 16.4851 17.8383 16.5469 18.2732 16.5469H19.8006C20.2371 16.5469 20.6714 16.4846 21.0903 16.362C21.1932 16.8435 21.4102 17.2933 21.723 17.6735C22.0358 18.0537 22.4353 18.3533 22.8879 18.5471L23.7804 18.9296L23.7821 18.9303L23.8482 18.9586V20.0134C22.3325 20.4654 20.7622 20.7085 19.1808 20.7362ZM23.8481 20.9894V22.2188H14.225V21.0763C15.8472 21.5021 17.5203 21.703 19.1972 21.6736C20.7704 21.6461 22.3336 21.4161 23.8481 20.9894ZM25.4944 7.44401C24.2032 7.61845 22.7478 7.27257 21.745 6.49564C21.6467 6.42051 21.5226 6.38732 21.3999 6.40332C21.2771 6.41932 21.1657 6.4832 21.0899 6.58104C21.0141 6.67887 20.9801 6.80271 20.9952 6.92554C21.0104 7.04837 21.0735 7.16023 21.1708 7.2367C21.8264 7.74457 22.6171 8.10232 23.4732 8.2827V10.8346C23.2479 11.348 22.9972 11.7749 22.4319 12.2413C22.1947 12.4368 21.9334 12.6011 21.6544 12.7301C21.4266 12.2856 20.9639 11.9804 20.431 11.9804H19.3325C18.5748 11.9804 17.9584 12.5969 17.9584 13.3545C17.9584 14.1121 18.5748 14.7286 19.3325 14.7286H20.431C21.0686 14.7286 21.6061 14.2919 21.7604 13.7021C22.3875 13.4631 23.4099 12.6108 23.4102 12.6104C23.0927 14.3146 21.5955 15.6092 19.8007 15.6092H18.2731C16.2481 15.6092 14.6006 13.9618 14.6006 11.9367V8.31332C16.1927 8.06376 17.6967 7.52501 19.0761 6.70914C21.1764 5.46682 22.5236 3.84345 23.3366 2.56089C24.7276 3.79982 25.5189 5.57601 25.4944 7.44401ZM20.8674 13.3558C20.8668 13.596 20.6712 13.7912 20.4309 13.7912H19.3324C19.0917 13.7912 18.8959 13.5953 18.8959 13.3546C18.8959 13.1139 19.0917 12.9181 19.3324 12.9181H20.4309C20.6712 12.9181 20.8666 13.1131 20.8674 13.3532V13.3558ZM12.64 7.36439C12.64 3.82057 15.5231 0.937511 19.0669 0.937511C20.3378 0.937511 21.5523 1.30439 22.5901 1.98739C21.8419 3.1867 20.5826 4.72895 18.5988 5.90245C17.2379 6.70745 15.7451 7.22139 14.1617 7.43001H12.6399V7.36439H12.64ZM10.8191 16.3881C10.3438 15.3758 10.4921 14.2123 11.2058 13.3526C12.1012 12.2738 12.641 10.9408 12.64 9.53751V8.36751H13.6631V11.9369C13.6631 13.6924 14.6498 15.2216 16.0974 15.9999C16.0527 16.3704 15.9118 16.7227 15.6888 17.022C15.4658 17.3212 15.1684 17.5569 14.8262 17.7058L14.0819 18.0294H13.4025C12.2844 18.0294 11.2945 17.4005 10.8191 16.3881ZM27.137 23.6744L26.3538 31.0625H12.1919L11.4087 23.6744C11.4014 23.6091 11.4081 23.5429 11.4284 23.4803C11.4487 23.4178 11.4821 23.3602 11.5263 23.3116C11.57 23.2624 11.6237 23.2232 11.6838 23.1964C11.7439 23.1696 11.809 23.156 11.8748 23.1563H26.6709C26.8055 23.1563 26.9293 23.2114 27.0194 23.3116C27.0636 23.3602 27.097 23.4178 27.1173 23.4803C27.1376 23.5429 27.1443 23.6091 27.137 23.6744ZM30.125 31.0625H27.2966L28.0693 23.7733C28.0899 23.5773 28.0692 23.379 28.0084 23.1915C27.9476 23.0039 27.8481 22.8312 27.7164 22.6846C27.5844 22.5381 27.4232 22.4209 27.2431 22.3407C27.063 22.2605 26.868 22.2189 26.6709 22.2188H24.7856V19.3605L27.9294 20.7079C29.2632 21.2992 30.125 22.6235 30.125 24.0819V31.0625ZM19.2728 25.3281C18.2906 25.3281 17.4916 26.1272 17.4916 27.1094C17.4916 28.0916 18.2906 28.8906 19.2728 28.8906C20.255 28.8906 21.0541 28.0916 21.0541 27.1094C21.0541 26.1272 20.255 25.3281 19.2728 25.3281ZM19.2728 27.9531C18.8076 27.9531 18.4291 27.5746 18.4291 27.1094C18.4291 26.6441 18.8076 26.2656 19.2728 26.2656C19.7381 26.2656 20.1166 26.6441 20.1166 27.1094C20.1166 27.5746 19.7381 27.9531 19.2728 27.9531Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <h5>IT Helpdesk Support</h5>
                <p>
                  Responsive IT helpdesk support ensuring seamless operations,
                  resolving issues promptly, and maximizing user productivity
                  with expertise.
                </p>
              </div>
            </li>
            <li
              className="single-feature wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                >
                  <path d="M27.9398 4.40669H26.4543C26.3522 4.14313 26.0967 3.95538 25.7975 3.95538C25.5115 3.95538 25.3987 3.73663 25.3708 3.66957C25.343 3.6025 25.2682 3.368 25.4704 3.16582C25.536 3.10053 25.5881 3.02287 25.6235 2.93733C25.6589 2.85179 25.677 2.76008 25.6768 2.6675C25.6768 2.47932 25.6035 2.30238 25.4704 2.16919L24.8953 1.59407C24.6205 1.31938 24.1735 1.31932 23.8987 1.59407C23.6965 1.79638 23.462 1.7215 23.395 1.69369C23.3279 1.66594 23.1092 1.55307 23.1092 1.267C23.1092 0.878503 22.793 0.562378 22.4045 0.562378H21.5912C21.2027 0.562378 20.8867 0.878503 20.8867 1.267C20.8867 1.55307 20.6679 1.66594 20.6008 1.69369C20.5338 1.72144 20.2993 1.79632 20.097 1.59394C19.8222 1.31938 19.3752 1.31938 19.1005 1.594L18.5253 2.16919C18.4597 2.23449 18.4077 2.31214 18.3723 2.39766C18.3369 2.48319 18.3188 2.57488 18.319 2.66744C18.3188 2.76001 18.3369 2.85171 18.3723 2.93724C18.4077 3.02276 18.4598 3.10041 18.5254 3.16569C18.7277 3.36794 18.6528 3.60244 18.625 3.6695C18.5973 3.73657 18.4844 3.95532 18.1983 3.95532C17.8992 3.95532 17.6437 4.143 17.5416 4.40663H4.56878C3.27078 4.40663 2.21484 5.46263 2.21484 6.76057V22.0844C2.21484 23.3824 3.27084 24.4383 4.56878 24.4383H12.103C12.0808 25.8906 11.7317 27.3521 11.3398 28.2293H9.76016C8.87572 28.2293 8.15609 28.9488 8.15609 29.8333C8.15609 30.7178 8.87572 31.4374 9.76016 31.4374H22.2397C23.1242 31.4374 23.8437 30.7179 23.8437 29.8334C23.8437 28.9489 23.1242 28.2293 22.2397 28.2293H20.6555C20.2452 27.3369 19.8735 25.8704 19.8381 24.4384H27.4311C28.7291 24.4384 29.7851 23.3824 29.7851 22.0844V6.25225C29.785 5.23457 28.9572 4.40669 27.9398 4.40669ZM18.3687 4.82013C18.8454 4.76194 19.2445 4.46057 19.4334 4.00444C19.6223 3.54838 19.5533 3.05307 19.2573 2.67482L19.6061 2.32607C19.9843 2.622 20.4796 2.69107 20.9357 2.50219C21.3918 2.31325 21.6933 1.91419 21.7514 1.43744H22.2445C22.3027 1.91413 22.6042 2.31325 23.0602 2.50219C23.5163 2.69113 24.0117 2.622 24.3898 2.32607L24.7386 2.67482C24.4427 3.05307 24.3736 3.54838 24.5625 4.00444C24.7514 4.4605 25.1505 4.76194 25.6272 4.82013V5.31325C25.1505 5.37144 24.7515 5.67282 24.5625 6.12894C24.3736 6.585 24.4427 7.08038 24.7386 7.45857L24.3898 7.80732C24.0117 7.51138 23.5163 7.44238 23.0602 7.63119C22.6042 7.82013 22.3027 8.21919 22.2445 8.69588H21.7515C21.6933 8.21869 21.392 7.81944 20.936 7.63057C20.48 7.44163 19.9845 7.51094 19.6061 7.80732L19.2573 7.45857C19.5533 7.08032 19.6223 6.585 19.4334 6.12894C19.2445 5.67288 18.8454 5.37144 18.3687 5.31325V4.82013ZM4.56878 5.28169H17.4937V5.47332C17.4937 5.86182 17.8098 6.17794 18.1983 6.17794C18.4844 6.17794 18.5972 6.39669 18.625 6.46375C18.6528 6.53082 18.7277 6.76532 18.5254 6.96757C18.2507 7.24232 18.2507 7.68932 18.5254 7.96407L19.1005 8.53919C19.3753 8.81394 19.8222 8.81394 20.097 8.53919C20.2998 8.33644 20.5342 8.41119 20.6011 8.43894C20.6681 8.46669 20.8867 8.5795 20.8867 8.86625C20.8867 9.25475 21.2027 9.57088 21.5912 9.57088H22.4045C22.793 9.57088 23.1092 9.25475 23.1092 8.86625C23.1092 8.58019 23.3279 8.46738 23.395 8.43957C23.462 8.41182 23.6965 8.33688 23.8988 8.53925C24.1737 8.814 24.6207 8.81394 24.8953 8.53919L25.4705 7.96407C25.7452 7.68932 25.7452 7.24232 25.4705 6.96757C25.2682 6.76532 25.3431 6.53082 25.3708 6.46375C25.3986 6.39669 25.5115 6.17794 25.7975 6.17794C26.186 6.17794 26.5022 5.86182 26.5022 5.47332V5.28169H27.9397C28.4747 5.28169 28.91 5.71707 28.91 6.25225V19.7514H3.08978V6.76063C3.08978 5.94513 3.75328 5.28169 4.56878 5.28169ZM22.9687 29.8334C22.9687 30.2354 22.6417 30.5624 22.2397 30.5624H9.76016C9.35816 30.5624 9.03109 30.2354 9.03109 29.8334C9.03109 29.4314 9.35816 29.1043 9.76016 29.1043H22.2397C22.6417 29.1043 22.9687 29.4314 22.9687 29.8334ZM19.7035 28.2293H12.2872C12.6961 27.1586 12.9582 25.7349 12.9778 24.4384H18.963C18.9935 25.7197 19.2744 27.1443 19.7035 28.2293ZM27.431 23.5634H4.56878C3.75328 23.5634 3.08984 22.8999 3.08984 22.0844V20.6263H28.91V22.0844C28.91 22.8999 28.2465 23.5634 27.431 23.5634ZM17.491 22.0949C17.491 22.2109 17.4449 22.3222 17.3629 22.4042C17.2808 22.4863 17.1696 22.5324 17.0535 22.5324H14.9463C14.8302 22.5324 14.719 22.4863 14.6369 22.4042C14.5549 22.3222 14.5088 22.2109 14.5088 22.0949C14.5088 21.9788 14.5549 21.8676 14.6369 21.7855C14.719 21.7035 14.8302 21.6574 14.9463 21.6574H17.0535C17.1696 21.6574 17.2808 21.7035 17.3629 21.7855C17.4449 21.8676 17.491 21.9788 17.491 22.0949ZM21.998 7.45813C23.3167 7.45813 24.3895 6.38532 24.3895 5.06669C24.3895 3.748 23.3167 2.67519 21.998 2.67519C20.6793 2.67519 19.6065 3.748 19.6065 5.06669C19.6065 6.38532 20.6793 7.45813 21.998 7.45813ZM21.998 3.55019C22.8342 3.55019 23.5145 4.2305 23.5145 5.06669C23.5145 5.90288 22.8342 6.58313 21.998 6.58313C21.1618 6.58313 20.4815 5.90288 20.4815 5.06669C20.4815 4.2305 21.1618 3.55019 21.998 3.55019ZM6.02828 13.8539C6.34753 13.8539 6.61128 14.0304 6.73378 14.3262C6.85628 14.6219 6.79466 14.9333 6.56897 15.1591C6.49497 15.2327 6.4363 15.3202 6.39636 15.4166C6.35642 15.513 6.336 15.6164 6.33628 15.7208C6.33628 15.9329 6.41891 16.1324 6.56891 16.2824L7.33703 17.0505C7.64672 17.3602 8.15066 17.3602 8.46034 17.0505C8.68659 16.8243 8.99809 16.7624 9.29353 16.8848C9.58909 17.0072 9.76553 17.2713 9.76553 17.5911C9.76553 18.0291 10.1218 18.3854 10.5598 18.3854H11.646C12.0839 18.3854 12.4402 18.0291 12.4402 17.5911C12.4402 17.2719 12.6168 17.0081 12.9125 16.8856C13.2083 16.7632 13.5197 16.8248 13.7453 17.0504C13.8953 17.2004 14.0948 17.2831 14.307 17.2831C14.5192 17.2831 14.7187 17.2005 14.8687 17.0505L15.6367 16.2824C15.7867 16.1324 15.8694 15.9329 15.8694 15.7208C15.8694 15.5085 15.7868 15.3091 15.6368 15.1591C15.411 14.9334 15.3494 14.622 15.4719 14.3263C15.5944 14.0305 15.8582 13.8539 16.1774 13.8539C16.6153 13.8539 16.9717 13.4976 16.9717 13.0597V11.9735C16.9717 11.5356 16.6153 11.1793 16.1774 11.1793C15.8582 11.1793 15.5944 11.0027 15.4719 10.7069C15.3494 10.4112 15.411 10.0998 15.6368 9.87407C15.9465 9.56438 15.9465 9.0605 15.6368 8.75075L14.8687 7.98263C14.559 7.673 14.055 7.673 13.7454 7.98263C13.5197 8.20832 13.2084 8.27 12.9125 8.1475C12.6168 8.025 12.4402 7.76125 12.4402 7.44207C12.4402 7.00413 12.0839 6.64782 11.646 6.64782H10.5598C10.1218 6.64782 9.76553 7.00413 9.76553 7.44207C9.76553 7.76125 9.58897 8.025 9.29322 8.1475C8.99747 8.27 8.68609 8.20844 8.46028 7.98263C8.15059 7.67307 7.64672 7.673 7.33703 7.98263L6.56891 8.75075C6.25922 9.0605 6.25928 9.56438 6.56891 9.87407C6.79466 10.0998 6.85628 10.4111 6.73378 10.7069C6.61128 11.0026 6.34753 11.1793 6.02828 11.1793C5.59034 11.1793 5.23403 11.5356 5.23403 11.9735V13.0597C5.23403 13.4976 5.59034 13.8539 6.02828 13.8539ZM6.10903 12.0523C6.74941 12.0226 7.29391 11.6411 7.54216 11.0416C7.79047 10.4421 7.67522 9.78738 7.24341 9.31363L7.89997 8.657C8.37372 9.08888 9.02853 9.20407 9.62803 8.95582C10.2275 8.7075 10.609 8.163 10.6386 7.52269H11.5671C11.5967 8.16307 11.9782 8.7075 12.5777 8.95582C13.1771 9.20407 13.8319 9.08888 14.3057 8.657L14.9623 9.31363C14.5304 9.78738 14.4152 10.4421 14.6635 11.0416C14.9118 11.6411 15.4563 12.0226 16.0967 12.0523V12.9807C15.4563 13.0103 14.9118 13.3918 14.6635 13.9913C14.4152 14.5908 14.5304 15.2455 14.9623 15.7193L14.3057 16.3759C13.832 15.9441 13.1772 15.8288 12.5777 16.0772C11.9782 16.3255 11.5967 16.8699 11.5671 17.5103H10.6387C10.6091 16.8693 10.2277 16.3246 9.62834 16.0763C9.02909 15.8281 8.37416 15.9436 7.89997 16.3759L7.24341 15.7193C7.67528 15.2456 7.79047 14.5908 7.54216 13.9913C7.29384 13.3918 6.74941 13.0103 6.10903 12.9807V12.0523ZM11.1029 15.5636C12.7831 15.5636 14.15 14.1967 14.15 12.5165C14.15 10.8363 12.7831 9.46938 11.1029 9.46938C9.42272 9.46938 8.05578 10.8363 8.05578 12.5165C8.05578 14.1967 9.42272 15.5636 11.1029 15.5636ZM11.1029 10.3444C12.3007 10.3444 13.275 11.3188 13.275 12.5165C13.275 13.7143 12.3007 14.6886 11.1029 14.6886C9.90516 14.6886 8.93078 13.7143 8.93078 12.5165C8.93078 11.3188 9.90516 10.3444 11.1029 10.3444ZM18.3737 17.9478C18.3737 17.8318 18.4198 17.7205 18.5019 17.6385C18.5839 17.5564 18.6952 17.5103 18.8112 17.5103H22.9408C23.0569 17.5103 23.1682 17.5564 23.2502 17.6385C23.3323 17.7205 23.3783 17.8318 23.3783 17.9478C23.3783 18.0638 23.3323 18.1751 23.2502 18.2572C23.1682 18.3392 23.0569 18.3853 22.9408 18.3853H18.8112C18.6952 18.3853 18.5839 18.3392 18.5019 18.2572C18.4198 18.1751 18.3737 18.0638 18.3737 17.9478ZM18.3737 12.5165C18.3737 12.4005 18.4198 12.2892 18.5019 12.2071C18.5839 12.1251 18.6952 12.079 18.8112 12.079H27.0705C27.1866 12.079 27.2978 12.1251 27.3799 12.2071C27.4619 12.2892 27.508 12.4005 27.508 12.5165C27.508 12.6325 27.4619 12.7438 27.3799 12.8259C27.2978 12.9079 27.1866 12.954 27.0705 12.954H18.8112C18.6952 12.954 18.5839 12.9079 18.5019 12.8259C18.4198 12.7438 18.3737 12.6325 18.3737 12.5165ZM18.3737 15.2321C18.3737 15.1161 18.4198 15.0048 18.5019 14.9228C18.5839 14.8407 18.6952 14.7946 18.8112 14.7946H27.0705C27.1866 14.7946 27.2978 14.8407 27.3799 14.9228C27.4619 15.0048 27.508 15.1161 27.508 15.2321C27.508 15.3482 27.4619 15.4594 27.3799 15.5415C27.2978 15.6235 27.1866 15.6696 27.0705 15.6696H18.8112C18.6952 15.6696 18.5839 15.6235 18.5019 15.5415C18.4198 15.4594 18.3737 15.3482 18.3737 15.2321Z" />
                </svg>
              </div>
              <div className="content">
                <h5>Managed IT Services</h5>
                <p>
                  Efficient, proactive, and secure IT solutions tailored to
                  optimize your business operations with our managed IT
                  services.
                </p>
              </div>
            </li>
            <li
              className="single-feature wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                >
                  <g>
                    <path d="M18.4261 27.19C18.265 27.19 18.1105 27.254 17.9966 27.3679C17.8827 27.4818 17.8187 27.6363 17.8187 27.7974V30.471C17.8183 30.5244 17.7968 30.5755 17.7588 30.6132C17.7209 30.6509 17.6696 30.672 17.6162 30.672H14.3764C14.3227 30.672 14.2712 30.6507 14.2332 30.6127C14.1953 30.5747 14.1739 30.5232 14.1739 30.4695V27.8004C14.174 27.6602 14.1256 27.5243 14.0369 27.4157C13.9482 27.3071 13.8246 27.2326 13.6872 27.2047C12.2411 26.9107 10.8658 26.3388 9.63754 25.5208C9.52059 25.4437 9.38064 25.4093 9.24128 25.4234C9.10193 25.4375 8.97169 25.4992 8.87252 25.5981L6.97652 27.4897C6.93842 27.5277 6.88678 27.5491 6.83294 27.5491C6.7791 27.5491 6.72747 27.5277 6.68936 27.4897L4.39871 25.199C4.36085 25.1608 4.33961 25.1092 4.33961 25.0554C4.33961 25.0016 4.36085 24.95 4.39871 24.9118L6.29323 23.0181C6.39181 22.9186 6.45299 22.7881 6.46641 22.6487C6.47983 22.5093 6.44466 22.3695 6.36686 22.253C5.54883 21.0248 4.97694 19.6495 4.68292 18.2033C4.65593 18.0659 4.58225 17.942 4.47436 17.8526C4.36648 17.7632 4.23102 17.7139 4.09093 17.713H1.41739C1.36369 17.713 1.31219 17.6916 1.27422 17.6536C1.23624 17.6157 1.21491 17.5642 1.21491 17.5105V14.2707C1.21549 14.2173 1.23705 14.1663 1.27494 14.1287C1.31283 14.0911 1.364 14.0699 1.41739 14.0697H4.09903C4.23904 14.0698 4.37477 14.0214 4.4832 13.9329C4.59164 13.8443 4.6661 13.7209 4.69397 13.5837C4.98645 12.1385 5.5555 10.7634 6.36981 9.53404C6.44774 9.41763 6.48299 9.27783 6.46957 9.13838C6.45615 8.99893 6.39488 8.86842 6.29617 8.76901L4.39871 6.87228C4.36085 6.83409 4.33961 6.78248 4.33961 6.7287C4.33961 6.67492 4.36085 6.62332 4.39871 6.58512L6.68936 4.29447C6.72747 4.25643 6.7791 4.23506 6.83294 4.23506C6.88678 4.23506 6.93842 4.25643 6.97652 4.29447L8.87031 6.18899C8.96948 6.28789 9.09972 6.34959 9.23907 6.36367C9.37843 6.37775 9.51838 6.34336 9.63533 6.2663C10.8637 5.44857 12.239 4.8767 13.685 4.58236C13.8224 4.55449 13.946 4.47995 14.0347 4.37138C14.1234 4.26281 14.1718 4.12689 14.1717 3.98669V1.31315C14.1718 1.2864 14.1772 1.25994 14.1876 1.23527C14.1979 1.2106 14.213 1.18822 14.232 1.16941C14.2511 1.1506 14.2736 1.13572 14.2984 1.12564C14.3232 1.11556 14.3497 1.11047 14.3764 1.11067H17.6162C17.6698 1.11086 17.7212 1.13226 17.7591 1.17019C17.7971 1.20812 17.8185 1.25951 17.8187 1.31315V3.98669C17.8187 4.1478 17.8827 4.30231 17.9966 4.41622C18.1105 4.53014 18.265 4.59414 18.4261 4.59414C18.5872 4.59414 18.7417 4.53014 18.8557 4.41622C18.9696 4.30231 19.0336 4.1478 19.0336 3.98669V1.31315C19.0334 0.937162 18.884 0.576603 18.6183 0.310599C18.3526 0.0445941 17.9922 -0.105128 17.6162 -0.105713H14.3764C14.0007 -0.105129 13.6405 0.044391 13.3748 0.310077C13.1091 0.575764 12.9596 0.935944 12.959 1.31168V3.5022C11.6985 3.81016 10.4932 4.31112 9.38573 4.98733L7.83506 3.43593C7.56508 3.1782 7.20619 3.0344 6.83294 3.0344C6.4597 3.0344 6.1008 3.1782 5.83083 3.43593L3.54017 5.72659C3.27462 5.99248 3.12546 6.35291 3.12546 6.7287C3.12546 7.1045 3.27462 7.46492 3.54017 7.73082L5.08642 9.28149C4.41514 10.3896 3.91799 11.5943 3.61233 12.8533H1.41739C1.04166 12.8539 0.681477 13.0034 0.41579 13.2691C0.150104 13.5348 0.000584199 13.895 0 14.2707V17.5105C0.000194562 17.8865 0.149542 18.247 0.415271 18.513C0.680999 18.779 1.0414 18.9287 1.41739 18.9293H3.60497C3.91293 20.1898 4.41389 21.3952 5.0901 22.5026L3.54385 24.0533C3.2783 24.3192 3.12915 24.6796 3.12915 25.0554C3.12915 25.4312 3.2783 25.7916 3.54385 26.0575L5.83451 28.3482C6.10423 28.6064 6.46322 28.7506 6.83663 28.7506C7.21003 28.7506 7.56902 28.6064 7.83874 28.3482L9.38941 26.8019C10.497 27.4777 11.7023 27.9784 12.9627 28.2863V30.4739C12.9641 30.8485 13.1134 31.2074 13.3782 31.4723C13.643 31.7373 14.0018 31.8868 14.3764 31.8884H17.6162C17.9919 31.8878 18.3521 31.7383 18.6178 31.4726C18.8835 31.2069 19.033 30.8467 19.0336 30.471V27.8004C19.034 27.7204 19.0185 27.6411 18.9882 27.567C18.9578 27.493 18.9131 27.4257 18.8567 27.3689C18.8003 27.3122 18.7332 27.2672 18.6593 27.2365C18.5854 27.2058 18.5061 27.19 18.4261 27.19Z" />
                    <path d="M21.4631 11.0325C21.4628 10.227 21.1427 9.45451 20.5732 8.88476C20.0037 8.31502 19.2314 7.99457 18.4259 7.99379H11.1364C10.4978 7.99203 9.875 8.1922 9.35699 8.56567C8.83898 8.93915 8.45229 9.46681 8.25218 10.0733C8.05208 10.6797 8.0488 11.3339 8.24282 11.9423C8.43684 12.5507 8.81822 13.0822 9.33246 13.4609C8.95025 13.7403 8.63935 14.106 8.42503 14.5282C8.21071 14.9504 8.09902 15.4172 8.09902 15.8907C8.09902 16.3642 8.21071 16.831 8.42503 17.2532C8.63935 17.6754 8.95025 18.0411 9.33246 18.3205C8.8176 18.699 8.43563 19.2306 8.24122 19.8393C8.04681 20.448 8.04992 21.1026 8.2501 21.7094C8.45028 22.3162 8.83727 22.8442 9.3557 23.2177C9.87413 23.5913 10.4974 23.7913 11.1364 23.7891H18.4259C19.0645 23.7908 19.6873 23.5907 20.2053 23.2172C20.7233 22.8437 21.11 22.3161 21.3101 21.7096C21.5102 21.1032 21.5135 20.449 21.3195 19.8406C21.1254 19.2321 20.7441 18.7006 20.2298 18.322C20.612 18.0425 20.9229 17.6768 21.1373 17.2546C21.3516 16.8324 21.4633 16.3656 21.4633 15.8922C21.4633 15.4187 21.3516 14.9519 21.1373 14.5297C20.9229 14.1075 20.612 13.7418 20.2298 13.4623C20.611 13.1819 20.9212 12.8161 21.1354 12.3941C21.3495 11.9721 21.4618 11.5058 21.4631 11.0325ZM20.2482 20.7518C20.2475 21.2347 20.0552 21.6977 19.7135 22.039C19.3719 22.3804 18.9088 22.5723 18.4259 22.5727H11.1364C10.6531 22.5727 10.1896 22.3807 9.84781 22.0389C9.50605 21.6972 9.31405 21.2337 9.31405 20.7503C9.31405 20.267 9.50605 19.8035 9.84781 19.4617C10.1896 19.12 10.6531 18.928 11.1364 18.928H18.4259C18.9093 18.9284 19.3728 19.1207 19.7146 19.4627C20.0563 19.8047 20.2482 20.2683 20.2482 20.7518ZM20.2482 15.8922C20.2475 16.3751 20.0552 16.838 19.7135 17.1794C19.3719 17.5207 18.9088 17.7127 18.4259 17.7131H11.1364C10.6531 17.7131 10.1896 17.5211 9.84781 17.1793C9.50605 16.8375 9.31405 16.374 9.31405 15.8907C9.31405 15.4074 9.50605 14.9438 9.84781 14.6021C10.1896 14.2603 10.6531 14.0683 11.1364 14.0683H18.4259C18.9093 14.0687 19.3728 14.261 19.7146 14.603C20.0563 14.945 20.2482 15.4087 20.2482 15.8922ZM18.4259 12.8534H11.1364C10.6531 12.8534 10.1896 12.6614 9.84781 12.3197C9.50605 11.9779 9.31405 11.5144 9.31405 11.0311C9.31405 10.5477 9.50605 10.0842 9.84781 9.74245C10.1896 9.40069 10.6531 9.20869 11.1364 9.20869H18.4259C18.9092 9.20869 19.3727 9.40069 19.7145 9.74245C20.0562 10.0842 20.2482 10.5477 20.2482 11.0311C20.2482 11.5144 20.0562 11.9779 19.7145 12.3197C19.3727 12.6614 18.9092 12.8534 18.4259 12.8534Z" />
                    <path d="M17.6163 10.4235H14.3765C14.2154 10.4235 14.0609 10.4875 13.947 10.6014C13.833 10.7153 13.769 10.8698 13.769 11.0309C13.769 11.192 13.833 11.3465 13.947 11.4605C14.0609 11.5744 14.2154 11.6384 14.3765 11.6384H17.6163C17.7774 11.6384 17.9319 11.5744 18.0458 11.4605C18.1597 11.3465 18.2237 11.192 18.2237 11.0309C18.2237 10.8698 18.1597 10.7153 18.0458 10.6014C17.9319 10.4875 17.7774 10.4235 17.6163 10.4235Z" />
                    <path d="M11.9467 11.8423C12.394 11.8423 12.7566 11.4797 12.7566 11.0324C12.7566 10.585 12.394 10.2224 11.9467 10.2224C11.4993 10.2224 11.1367 10.585 11.1367 11.0324C11.1367 11.4797 11.4993 11.8423 11.9467 11.8423Z" />
                    <path d="M14.3765 16.4995H17.6163C17.7774 16.4995 17.9319 16.4355 18.0458 16.3215C18.1597 16.2076 18.2237 16.0531 18.2237 15.892C18.2237 15.7309 18.1597 15.5764 18.0458 15.4625C17.9319 15.3485 17.7774 15.2845 17.6163 15.2845H14.3765C14.2154 15.2845 14.0609 15.3485 13.947 15.4625C13.833 15.5764 13.769 15.7309 13.769 15.892C13.769 16.0531 13.833 16.2076 13.947 16.3215C14.0609 16.4355 14.2154 16.4995 14.3765 16.4995Z" />
                    <path d="M11.9467 16.7019C12.394 16.7019 12.7566 16.3393 12.7566 15.892C12.7566 15.4447 12.394 15.082 11.9467 15.082C11.4993 15.082 11.1367 15.4447 11.1367 15.892C11.1367 16.3393 11.4993 16.7019 11.9467 16.7019Z" />
                    <path d="M14.3765 21.3591H17.6163C17.7774 21.3591 17.9319 21.2951 18.0458 21.1812C18.1597 21.0672 18.2237 20.9127 18.2237 20.7516C18.2237 20.5905 18.1597 20.436 18.0458 20.3221C17.9319 20.2082 17.7774 20.1442 17.6163 20.1442H14.3765C14.2154 20.1442 14.0609 20.2082 13.947 20.3221C13.833 20.436 13.769 20.5905 13.769 20.7516C13.769 20.9127 13.833 21.0672 13.947 21.1812C14.0609 21.2951 14.2154 21.3591 14.3765 21.3591Z" />
                    <path d="M11.9467 21.5615C12.394 21.5615 12.7566 21.1989 12.7566 20.7516C12.7566 20.3043 12.394 19.9417 11.9467 19.9417C11.4993 19.9417 11.1367 20.3043 11.1367 20.7516C11.1367 21.1989 11.4993 21.5615 11.9467 21.5615Z" />
                    <path d="M20.856 6.78024C20.9504 6.78042 21.0436 6.75854 21.1281 6.71636C21.2126 6.67417 21.2861 6.61285 21.3427 6.53726L23.5899 3.54049H27.63C27.7768 4.0576 28.1056 4.50418 28.5559 4.79785C29.0061 5.09152 29.5473 5.21246 30.0797 5.13837C30.6121 5.06427 31.0998 4.80013 31.4527 4.39468C31.8057 3.98924 32.0001 3.46983 32.0001 2.93229C32.0001 2.39476 31.8057 1.87535 31.4527 1.46991C31.0998 1.06446 30.6121 0.800321 30.0797 0.726224C29.5473 0.652127 29.0061 0.77307 28.5559 1.06674C28.1056 1.36041 27.7768 1.80699 27.63 2.3241H23.2858C23.1915 2.32427 23.0986 2.34631 23.0143 2.38847C22.9299 2.43063 22.8565 2.49177 22.7998 2.56709L20.37 5.80684C20.3024 5.89704 20.2612 6.00429 20.251 6.11658C20.2408 6.22887 20.2621 6.34177 20.3125 6.44265C20.3629 6.54352 20.4403 6.62839 20.5362 6.68776C20.632 6.74712 20.7425 6.77863 20.8553 6.77877L20.856 6.78024ZM29.7653 1.92061C29.9656 1.92061 30.1613 1.97998 30.3278 2.09123C30.4943 2.20248 30.6241 2.3606 30.7007 2.54559C30.7773 2.73059 30.7974 2.93415 30.7583 3.13055C30.7192 3.32694 30.6228 3.50733 30.4812 3.64892C30.3396 3.79051 30.1592 3.88694 29.9628 3.926C29.7664 3.96507 29.5629 3.94502 29.3779 3.86839C29.1929 3.79176 29.0348 3.662 28.9235 3.4955C28.8123 3.32901 28.7529 3.13327 28.7529 2.93303C28.7533 2.66464 28.8601 2.40735 29.0499 2.21757C29.2396 2.02779 29.4969 1.921 29.7653 1.92061ZM29.7653 18.5229C29.2816 18.5238 28.8114 18.6825 28.4261 18.9748C28.0407 19.2672 27.7612 19.6772 27.63 20.1428H25.0529L23.5612 19.3969C23.4898 19.3612 23.4121 19.3399 23.3326 19.3343C23.253 19.3286 23.1731 19.3387 23.0974 19.3639C23.0217 19.3892 22.9517 19.429 22.8914 19.4813C22.8312 19.5336 22.7818 19.5972 22.7461 19.6686C22.7104 19.7399 22.6891 19.8176 22.6835 19.8972C22.6778 19.9768 22.6879 20.0567 22.7131 20.1324C22.7384 20.2081 22.7783 20.2781 22.8305 20.3383C22.8828 20.3986 22.9464 20.448 23.0178 20.4837L24.6377 21.2936C24.7221 21.3357 24.8151 21.3577 24.9094 21.3577H27.6337C27.7475 21.7552 27.97 22.1131 28.2761 22.3912C28.5822 22.6692 28.9597 22.8564 29.3664 22.9316C29.773 23.0068 30.1925 22.9672 30.5778 22.817C30.9631 22.6669 31.2989 22.4123 31.5474 22.0818C31.7959 21.7513 31.9474 21.358 31.9846 20.9461C32.0219 20.5343 31.9435 20.1202 31.7584 19.7505C31.5732 19.3807 31.2886 19.07 30.9365 18.8531C30.5844 18.6362 30.1788 18.5219 29.7653 18.5229ZM29.7653 21.7626C29.5651 21.7626 29.3693 21.7033 29.2028 21.592C29.0364 21.4808 28.9066 21.3227 28.83 21.1377C28.7533 20.9527 28.7333 20.7491 28.7724 20.5527C28.8114 20.3563 28.9078 20.1759 29.0494 20.0343C29.191 19.8927 29.3714 19.7963 29.5678 19.7573C29.7642 19.7182 29.9678 19.7382 30.1528 19.8149C30.3378 19.8915 30.4959 20.0213 30.6071 20.1877C30.7184 20.3542 30.7777 20.55 30.7777 20.7502C30.7776 21.0187 30.6708 21.2761 30.481 21.4659C30.2912 21.6557 30.0338 21.7625 29.7653 21.7626ZM29.7653 8.80362C29.2816 8.80455 28.8114 8.96321 28.4261 9.25555C28.0407 9.54789 27.7612 9.95794 27.63 10.4235H24.9057C24.8259 10.4234 24.7469 10.4392 24.6733 10.4697C24.5996 10.5003 24.5327 10.5452 24.4764 10.6017L23.6665 11.4116C23.5526 11.5255 23.4887 11.6799 23.4887 11.8409C23.4887 12.0019 23.5526 12.1563 23.6665 12.2702C23.7803 12.384 23.9347 12.448 24.0957 12.448C24.2568 12.448 24.4112 12.384 24.525 12.2702L25.1575 11.6384H27.63C27.7438 12.0358 27.9661 12.3936 28.2721 12.6716C28.578 12.9496 28.9553 13.1368 29.3618 13.2122C29.7682 13.2876 30.1876 13.2481 30.5728 13.0983C30.9581 12.9484 31.2939 12.6941 31.5426 12.364C31.7913 12.0338 31.9431 11.6408 31.9807 11.2292C32.0184 10.8175 31.9406 10.4035 31.7559 10.0337C31.5713 9.66385 31.2872 9.35282 30.9356 9.13552C30.5839 8.91823 30.1787 8.80329 29.7653 8.80362ZM29.7653 12.0434C29.5651 12.0434 29.3693 11.984 29.2028 11.8728C29.0364 11.7615 28.9066 11.6034 28.83 11.4184C28.7533 11.2334 28.7333 11.0298 28.7724 10.8334C28.8114 10.637 28.9078 10.4566 29.0494 10.3151C29.191 10.1735 29.3714 10.077 29.5678 10.038C29.7642 9.99892 29.9678 10.019 30.1528 10.0956C30.3378 10.1722 30.4959 10.302 30.6071 10.4685C30.7184 10.635 30.7777 10.8307 30.7777 11.031C30.7776 11.2994 30.6708 11.5568 30.481 11.7466C30.2912 11.9365 30.0338 12.0432 29.7653 12.0434ZM29.7653 26.6223C29.2816 26.6232 28.8114 26.7819 28.4261 27.0742C28.0407 27.3666 27.7612 27.7766 27.63 28.2422H23.5892L21.342 25.2454C21.2941 25.1816 21.2341 25.1278 21.1655 25.0872C21.0968 25.0465 21.0209 25.0198 20.9419 25.0085C20.8629 24.9972 20.7825 25.0016 20.7052 25.0214C20.628 25.0412 20.5553 25.076 20.4915 25.1239C20.4277 25.1718 20.3739 25.2317 20.3333 25.3004C20.2926 25.369 20.2659 25.445 20.2546 25.524C20.2434 25.6029 20.2477 25.6833 20.2675 25.7606C20.2873 25.8379 20.3222 25.9105 20.37 25.9743L22.7998 29.2141C22.8564 29.2895 22.9298 29.3508 23.0141 29.3929C23.0985 29.4351 23.1915 29.4571 23.2858 29.4571H27.63C27.7438 29.8545 27.9661 30.2123 28.2721 30.4903C28.578 30.7683 28.9553 30.9555 29.3618 31.0308C29.7682 31.1062 30.1876 31.0668 30.5728 30.9169C30.9581 30.7671 31.2939 30.5128 31.5426 30.1826C31.7913 29.8525 31.9431 29.4595 31.9807 29.0478C32.0184 28.6362 31.9406 28.2222 31.7559 27.8524C31.5713 27.4825 31.2872 27.1715 30.9356 26.9542C30.5839 26.7369 30.1787 26.622 29.7653 26.6223ZM29.7653 29.862C29.5651 29.862 29.3693 29.8027 29.2028 29.6914C29.0364 29.5802 28.9066 29.4221 28.83 29.2371C28.7533 29.0521 28.7333 28.8485 28.7724 28.6521C28.8114 28.4557 28.9078 28.2753 29.0494 28.1337C29.191 27.9921 29.3714 27.8957 29.5678 27.8566C29.7642 27.8176 29.9678 27.8376 30.1528 27.9143C30.3378 27.9909 30.4959 28.1207 30.6071 28.2871C30.7184 28.4536 30.7777 28.6494 30.7777 28.8496C30.7776 29.1181 30.6708 29.3755 30.481 29.5653C30.2912 29.7551 30.0338 29.8618 29.7653 29.862Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <h5>IT Consulting</h5>
                <p>
                  Strategic IT Consulting tailored solutions to optimize
                  performance, enhance security, and drive innovation for
                  business success.
                </p>
              </div>
            </li>
            <li
              className="single-feature wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                >
                  <path d="M29.6145 21.5C29.5341 21.5 29.4548 21.4805 29.3834 21.4433C29.3121 21.406 29.2508 21.3521 29.2047 21.2861C29.1587 21.22 29.1293 21.1439 29.119 21.0641C29.1087 20.9842 29.1178 20.9031 29.1455 20.8275C29.9132 18.7322 30.1688 16.4836 29.8912 14.2694C29.6135 12.0552 28.8105 9.93944 27.5492 8.09853C26.2879 6.25761 24.6048 4.74488 22.6402 3.68645C20.6756 2.62802 18.4864 2.05455 16.2552 2.01386C14.024 1.97317 11.8154 2.46644 9.81357 3.45254C7.81169 4.43863 6.07455 5.88899 4.74695 7.68269C3.41935 9.4764 2.53977 11.5615 2.18154 13.7641C1.8233 15.9667 1.99679 18.2231 2.68754 20.345C2.71077 20.4081 2.72105 20.4753 2.71774 20.5424C2.71443 20.6096 2.69761 20.6754 2.66829 20.7359C2.63897 20.7964 2.59775 20.8504 2.54709 20.8946C2.49643 20.9388 2.43737 20.9723 2.37345 20.9932C2.30953 21.014 2.24206 21.0218 2.17508 21.016C2.1081 21.0101 2.04297 20.9909 1.98361 20.9593C1.92424 20.9277 1.87185 20.8845 1.82957 20.8322C1.78729 20.78 1.75599 20.7197 1.73754 20.655C0.998075 18.3816 0.812723 15.9643 1.19693 13.6047C1.58114 11.2451 2.52378 9.01151 3.94629 7.09009C5.36879 5.16867 7.22995 3.61508 9.37464 2.55883C11.5193 1.50258 13.8854 0.974247 16.2757 1.01788C18.666 1.06151 21.0112 1.67584 23.116 2.80966C25.2207 3.94349 27.0239 5.56396 28.3753 7.53601C29.7268 9.50807 30.5873 11.7746 30.8851 14.1466C31.1829 16.5187 30.9095 18.9276 30.0875 21.1725C30.052 21.2692 29.9875 21.3525 29.9029 21.4111C29.8182 21.4698 29.7175 21.5008 29.6145 21.5Z" />
                  <path d="M24.808 19.5C24.7861 19.5002 24.7642 19.4988 24.7425 19.496C24.611 19.4788 24.4918 19.4101 24.4109 19.305C24.3301 19.1999 24.2943 19.067 24.3115 18.9355C24.4375 17.9621 24.5005 16.9815 24.5 16C24.5 8.2805 20.687 2 16 2C11.313 2 7.5 8.2805 7.5 16C7.49982 16.8172 7.54338 17.6339 7.6305 18.4465C7.63753 18.5118 7.63162 18.5778 7.61312 18.6409C7.59462 18.7039 7.56389 18.7626 7.52269 18.8138C7.48148 18.8649 7.43061 18.9074 7.37297 18.9389C7.31533 18.9704 7.25205 18.9902 7.18675 18.9972C7.12145 19.0043 7.05541 18.9984 6.99239 18.9799C6.92937 18.9614 6.87061 18.9306 6.81947 18.8894C6.76833 18.8482 6.7258 18.7974 6.69432 18.7397C6.66284 18.6821 6.64303 18.6188 6.636 18.5535C6.54531 17.7054 6.49991 16.853 6.5 16C6.5 7.729 10.7615 1 16 1C21.2385 1 25.5 7.729 25.5 16C25.5004 17.0247 25.4346 18.0483 25.303 19.0645C25.2874 19.1848 25.2285 19.2953 25.1374 19.3754C25.0464 19.4555 24.9293 19.4998 24.808 19.5Z" />
                  <path d="M16 18C15.8674 18 15.7402 17.9473 15.6464 17.8536C15.5527 17.7598 15.5 17.6326 15.5 17.5V1.5C15.5 1.36739 15.5527 1.24021 15.6464 1.14645C15.7402 1.05268 15.8674 1 16 1C16.1326 1 16.2598 1.05268 16.3536 1.14645C16.4473 1.24021 16.5 1.36739 16.5 1.5V17.5C16.5 17.6326 16.4473 17.7598 16.3536 17.8536C16.2598 17.9473 16.1326 18 16 18Z" />
                  <path d="M28.5 9.5H3.5C3.36739 9.5 3.24021 9.44732 3.14645 9.35355C3.05268 9.25979 3 9.13261 3 9C3 8.86739 3.05268 8.74021 3.14645 8.64645C3.24021 8.55268 3.36739 8.5 3.5 8.5H28.5C28.6326 8.5 28.7598 8.55268 28.8536 8.64645C28.9473 8.74021 29 8.86739 29 9C29 9.13261 28.9473 9.25979 28.8536 9.35355C28.7598 9.44732 28.6326 9.5 28.5 9.5ZM15.5 25.5C14.8078 25.5 14.1311 25.2947 13.5555 24.9101C12.9799 24.5256 12.5313 23.9789 12.2664 23.3394C12.0015 22.6999 11.9322 21.9961 12.0673 21.3172C12.2023 20.6383 12.5356 20.0146 13.0251 19.5251C13.5146 19.0356 14.1383 18.7023 14.8172 18.5673C15.4961 18.4322 16.1999 18.5015 16.8394 18.7664C17.4789 19.0313 18.0256 19.4799 18.4101 20.0555C18.7947 20.6311 19 21.3078 19 22C18.9989 22.9279 18.6299 23.8176 17.9737 24.4737C17.3176 25.1299 16.4279 25.4989 15.5 25.5ZM15.5 19.5C15.0055 19.5 14.5222 19.6466 14.1111 19.9213C13.7 20.196 13.3795 20.5865 13.1903 21.0433C13.0011 21.5001 12.9516 22.0028 13.048 22.4877C13.1445 22.9727 13.3826 23.4181 13.7322 23.7678C14.0819 24.1174 14.5273 24.3555 15.0123 24.452C15.4972 24.5484 15.9999 24.4989 16.4567 24.3097C16.9135 24.1205 17.304 23.8 17.5787 23.3889C17.8534 22.9778 18 22.4945 18 22C17.9992 21.3372 17.7356 20.7018 17.2669 20.2331C16.7982 19.7644 16.1628 19.5008 15.5 19.5ZM20.5 31C20.3674 31 20.2402 30.9473 20.1464 30.8536C20.0527 30.7598 20 30.6326 20 30.5V28.5C20 27.7545 18.4545 27 15.5 27C12.5455 27 11 27.7545 11 28.5V30.5C11 30.6326 10.9473 30.7598 10.8536 30.8536C10.7598 30.9473 10.6326 31 10.5 31C10.3674 31 10.2402 30.9473 10.1464 30.8536C10.0527 30.7598 10 30.6326 10 30.5V28.5C10 26.9345 12.056 26 15.5 26C18.944 26 21 26.9345 21 28.5V30.5C21 30.6326 20.9473 30.7598 20.8536 30.8536C20.7598 30.9473 20.6326 31 20.5 31ZM24.5 26C23.9067 26 23.3266 25.8241 22.8333 25.4944C22.3399 25.1648 21.9554 24.6962 21.7284 24.1481C21.5013 23.5999 21.4419 22.9967 21.5576 22.4147C21.6734 21.8328 21.9591 21.2982 22.3787 20.8787C22.7982 20.4591 23.3328 20.1734 23.9147 20.0576C24.4967 19.9419 25.0999 20.0013 25.6481 20.2284C26.1962 20.4554 26.6648 20.8399 26.9944 21.3333C27.3241 21.8266 27.5 22.4067 27.5 23C27.4992 23.7954 27.1829 24.558 26.6204 25.1204C26.058 25.6829 25.2954 25.9992 24.5 26ZM24.5 21C24.1044 21 23.7178 21.1173 23.3889 21.3371C23.06 21.5568 22.8036 21.8692 22.6522 22.2346C22.5009 22.6001 22.4613 23.0022 22.5384 23.3902C22.6156 23.7781 22.8061 24.1345 23.0858 24.4142C23.3655 24.6939 23.7219 24.8844 24.1098 24.9616C24.4978 25.0387 24.8999 24.9991 25.2654 24.8478C25.6308 24.6964 25.9432 24.44 26.1629 24.1111C26.3827 23.7822 26.5 23.3956 26.5 23C26.5 22.4696 26.2893 21.9609 25.9142 21.5858C25.5391 21.2107 25.0304 21 24.5 21Z" />
                  <path d="M28.5 31C28.3674 31 28.2402 30.9473 28.1464 30.8536C28.0527 30.7598 28 30.6326 28 30.5V29C28 28.513 28 27.5 24.5 27.5C21 27.5 21 28.513 21 29V30.5C21 30.6326 20.9473 30.7598 20.8536 30.8536C20.7598 30.9473 20.6326 31 20.5 31C20.3674 31 20.2402 30.9473 20.1464 30.8536C20.0527 30.7598 20 30.6326 20 30.5V29C20 26.784 22.405 26.5 24.5 26.5C26.595 26.5 29 26.784 29 29V30.5C29 30.6326 28.9473 30.7598 28.8536 30.8536C28.7598 30.9473 28.6326 31 28.5 31ZM6.5 26C5.90666 26 5.32664 25.8241 4.83329 25.4944C4.33994 25.1648 3.95542 24.6962 3.72836 24.1481C3.5013 23.5999 3.44189 22.9967 3.55764 22.4147C3.6734 21.8328 3.95912 21.2982 4.37868 20.8787C4.79824 20.4591 5.33279 20.1734 5.91473 20.0576C6.49667 19.9419 7.09987 20.0013 7.64805 20.2284C8.19623 20.4554 8.66476 20.8399 8.99441 21.3333C9.32405 21.8266 9.5 22.4067 9.5 23C9.49921 23.7954 9.18288 24.558 8.62044 25.1204C8.05801 25.6829 7.29541 25.9992 6.5 26ZM6.5 21C6.10444 21 5.71776 21.1173 5.38886 21.3371C5.05996 21.5568 4.80362 21.8692 4.65224 22.2346C4.50087 22.6001 4.46126 23.0022 4.53843 23.3902C4.6156 23.7781 4.80608 24.1345 5.08579 24.4142C5.36549 24.6939 5.72186 24.8844 6.10982 24.9616C6.49778 25.0387 6.89991 24.9991 7.26537 24.8478C7.63082 24.6964 7.94318 24.44 8.16294 24.1111C8.3827 23.7822 8.5 23.3956 8.5 23C8.5 22.4696 8.28929 21.9609 7.91421 21.5858C7.53914 21.2107 7.03043 21 6.5 21ZM10.5 31C10.3674 31 10.2402 30.9473 10.1464 30.8536C10.0527 30.7598 10 30.6326 10 30.5V29C10 28.513 10 27.5 6.5 27.5C3 27.5 3 28.513 3 29V30.5C3 30.6326 2.94732 30.7598 2.85355 30.8536C2.75979 30.9473 2.63261 31 2.5 31C2.36739 31 2.24021 30.9473 2.14645 30.8536C2.05268 30.7598 2 30.6326 2 30.5V29C2 26.784 4.405 26.5 6.5 26.5C8.595 26.5 11 26.784 11 29V30.5C11 30.6326 10.9473 30.7598 10.8536 30.8536C10.7598 30.9473 10.6326 31 10.5 31ZM30.5 16.5H1.5C1.36739 16.5 1.24021 16.4473 1.14645 16.3536C1.05268 16.2598 1 16.1326 1 16C1 15.8674 1.05268 15.7402 1.14645 15.6464C1.24021 15.5527 1.36739 15.5 1.5 15.5H30.5C30.6326 15.5 30.7598 15.5527 30.8536 15.6464C30.9473 15.7402 31 15.8674 31 16C31 16.1326 30.9473 16.2598 30.8536 16.3536C30.7598 16.4473 30.6326 16.5 30.5 16.5Z" />
                </svg>
              </div>
              <div className="content">
                <h5>Network Support</h5>
                <p>
                  Reliable network support ensuring seamless connectivity and
                  optimizing performance for uninterrupted business operations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End Service Details Feature Section */}
  {/* Start Service Details Tools section */}
  <div className="service-details-tools-section mb-120">
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
              Our Tools
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
              Our Design Technology <span>Tools Stack.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div
          className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="tools-card">
            <div className="tools-icon">
              <img src="assets/img/innerpage/icon/figma-icon.svg" alt="" />
            </div>
            <div className="tools-name">
              <span>Figma</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="tools-card">
            <div className="tools-icon">
              <img src="assets/img/innerpage/icon/vs-icon.svg" alt="" />
            </div>
            <div className="tools-name">
              <span>Visual Studio</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="tools-card">
            <div className="tools-icon">
              <img src="assets/img/innerpage/icon/git-icon.svg" alt="" />
            </div>
            <div className="tools-name">
              <span>Git</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="tools-card">
            <div className="tools-icon">
              <img src="assets/img/innerpage/icon/react-icon.svg" alt="" />
            </div>
            <div className="tools-name">
              <span>React</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
          data-wow-delay="800ms"
          data-wow-duration="1500ms"
        >
          <div className="tools-card">
            <div className="tools-icon">
              <img src="assets/img/innerpage/icon/php-icon.svg" alt="" />
            </div>
            <div className="tools-name">
              <span>Php</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
          data-wow-delay="600ms"
          data-wow-duration="1500ms"
        >
          <div className="tools-card">
            <div className="tools-icon">
              <img src="assets/img/innerpage/icon/mysql-icon.svg" alt="" />
            </div>
            <div className="tools-name">
              <span>MySQL</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="tools-card">
            <div className="tools-icon">
              <img src="assets/img/innerpage/icon/gitlab-icon.svg" alt="" />
            </div>
            <div className="tools-name">
              <span>Gitlab</span>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="tools-card">
            <div className="tools-icon">
              <img src="assets/img/innerpage/icon/aws-icon.svg" alt="" />
            </div>
            <div className="tools-name">
              <span>AWS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Service Details Tools section */}
  {/* Start Contact section */}
 
</>
<Component />
      <Footer />
    </div>
  )
}

export default service_details;
