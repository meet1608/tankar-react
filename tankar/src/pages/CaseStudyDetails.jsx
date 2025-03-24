import React from "react";
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
import case3 from "../assets/img/about_us/case_study.jpg";
import case4 from "../assets/img/about_us/case_study1.jpg";
import case5 from "../assets/img/about_us/case_study2.jpg";
import Component from "./Component";
import { useParams } from "react-router-dom";
import { caseStudies } from "../constant/caseStudy";
const CaseStudyDetails = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === parseInt(id));

  return (
    <div>
      <Navbar />
      <>
        <div
          className="breadcrumb-section"
          style={{
            backgroundImage:
              "url(assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
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
                    <h1>{caseStudy.title}</h1>
                  </div>
                  <div className="scroll-down-btn">
                    <a href="#case-details-section">
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
        {/* Start Case Study Details Section */}
        <div
          className="case-study-details-page pt-120 mb-120"
          id="case-details-section"
        >
          <div className="container">
            <div className="row g-lg-4 gy-5 mb-80 ">
              <div className="col-lg-8">
                <div className="case-thumb">
                  <img src={caseStudy.image} alt="" />
                </div>
                <div className="case-details-content">
                  <p>{caseStudy.description}</p>
                  <p>{caseStudy.introduction}</p>
                  <ul className="features">
                    <h3>Project Overview</h3>
                    {caseStudy.ProjectOverview.map((item, index) => (
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                        >
                          <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                          <path
                            d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                            fill="white"
                          />
                        </svg>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="case-img-group">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="case-img">
                          <img src={case4} alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="case-img">
                          <img src={case5} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="features">
                    <h3>Challenges Objectives</h3>
                    {caseStudy.ChallengesObjectives.map((item, index) => (
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                        >
                          <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                          <path
                            d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                            fill="white"
                          />
                        </svg>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="features">
                    <h3>Solution Implementation</h3>
                    <p>{caseStudy.SolutionImplementation.overview}</p>
                    {caseStudy.SolutionImplementation.points.map(
                      (item, index) => (
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                          >
                            <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                            <path
                              d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                              fill="white"
                            />
                          </svg>{" "}
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                  <ul className="features">
                    <h3>The Results</h3>
                    <p>{caseStudy.ResultsImpact.overview}</p>
                    {caseStudy.ResultsImpact.points.map(
                      (item, index) => (
                        <li>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                          >
                            <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                            <path
                              d="M9.97229 4.96979C9.96517 4.9767 9.95849 4.98404 9.95229 4.99179L6.47929 9.41679L4.38629 7.32279C4.24412 7.19031 4.05607 7.11819 3.86177 7.12162C3.66747 7.12505 3.48208 7.20376 3.34467 7.34117C3.20726 7.47858 3.12855 7.66397 3.12512 7.85827C3.12169 8.05257 3.19381 8.24062 3.32629 8.38279L5.97229 11.0298C6.04357 11.1009 6.12846 11.157 6.22188 11.1946C6.3153 11.2323 6.41534 11.2507 6.51604 11.2488C6.61674 11.247 6.71603 11.2249 6.80799 11.1838C6.89995 11.1427 6.9827 11.0835 7.05129 11.0098L11.0433 6.01979C11.1792 5.87712 11.2535 5.68669 11.2502 5.48966C11.2468 5.29263 11.1661 5.10484 11.0253 4.96689C10.8846 4.82893 10.6953 4.7519 10.4982 4.75244C10.3012 4.75299 10.1122 4.83106 9.97229 4.96979Z"
                              fill="white"
                            />
                          </svg>{" "}
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="case-sidebar">
                  <div className="case-info-wrap mb-40">
                    <h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                      >
                        <path d="M4.06197 17.9316C3.62773 18.1692 3.13498 17.7528 3.22273 17.2212L4.15647 11.5454L0.19311 7.51835C-0.177014 7.14156 0.0153601 6.45279 0.511484 6.37839L6.02172 5.54322L8.47871 0.350988C8.70034 -0.116996 9.29996 -0.116996 9.52158 0.350988L11.9786 5.54322L17.4888 6.37839C17.9849 6.45279 18.1773 7.14156 17.8061 7.51835L13.8438 11.5454L14.7776 17.2212C14.8653 17.7528 14.3726 18.1692 13.9383 17.9316L8.99846 15.2245L4.06197 17.9316Z" />
                      </svg>{" "}
                      Case Study Info
                    </h4>
                    <ul className="case-info">
                      <li>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={34}
                            height={23}
                            viewBox="0 0 34 23"
                            fill="none"
                          >
                            <path
                              d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                              strokeWidth={2}
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          <span>Category:</span>
                          <h5>Software</h5>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={34}
                            height={23}
                            viewBox="0 0 34 23"
                            fill="none"
                          >
                            <path
                              d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                              strokeWidth={2}
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          <span>Client:</span>
                          <h5>Egens Lab</h5>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={34}
                            height={23}
                            viewBox="0 0 34 23"
                            fill="none"
                          >
                            <path
                              d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                              strokeWidth={2}
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          <span>Location:</span>
                          <h5>7 Lake Street, London</h5>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={34}
                            height={23}
                            viewBox="0 0 34 23"
                            fill="none"
                          >
                            <path
                              d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                              strokeWidth={2}
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          <span>Industry:</span>
                          <h5>IT &amp; Consulting</h5>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={34}
                            height={23}
                            viewBox="0 0 34 23"
                            fill="none"
                          >
                            <path
                              d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                              strokeWidth={2}
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          <span>Stack:</span>
                          <h5>Android, Realm, Dagger 2, Java</h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="social-share-area">
                    <h4>Social Share</h4>
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/company/tankar-solutions-pvt-ltd/">
                          <i className="bi bi-linkedin" />
                          <span>LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-facebook" />
                          <span>Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-twitter-x" />
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
            </div>
          </div>
        </div>
      </>
      <Component />
      <Footer />
    </div>
  );
};

export default CaseStudyDetails;
