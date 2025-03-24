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
import { useNavigate } from "react-router-dom";
import pop1 from "../assets/img/blog/blog1-5.jpg";
import pop2 from "../assets/img/blog/blog2-5.jpg";
import pop3 from "../assets/img/blog/blog3-5.jpg";
import Component from "./Component";
import { blogsList } from "../constant/blogsList";


const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <>
        {/* Start Breadcrumb section */}
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
                      <li>Blog</li>
                    </ul>
                    <h1>Latest News Blog &amp; Article. </h1>
                  </div>
                  <div className="scroll-down-btn">
                    <a href="#blog-grid">
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
        {/* Start Blog Grid Section */}
        <div
          className="blog-standard-section scroll-margin pt-120 mb-120"
          id="blog-grid"
        >
          <div className="container">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-8">
                {blogsList.map((blog, index) => (
                  <div
                    className="blog-card2 style-3 mb-50 wow animate fadeInDown"
                    data-wow-delay={`${200 * (index + 1)}ms`}
                    data-wow-duration="1500ms"
                    key={index}
                  >
                    <div className="blog-card-img-wrap">
                      <a
                        onClick={() => navigate(blog.link)}
                        className="card-img"
                        style={{ cursor: "pointer" }}
                      >
                        <img src={blog.image} alt={blog.title} />
                      </a>
                      <a href="blog-grid.html" className="date">
                        <span>
                          <strong>05</strong> January
                        </span>
                      </a>
                    </div>
                    <div className="blog-card-content-wrap">
                      <div className="blog-card-content">
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
                          <a
                            onClick={() => navigate(blog.link)}
                            style={{ cursor: "pointer" }}
                          >
                            {blog.title}
                          </a>
                        </h4>
                        <p>{blog.description}</p>
                      </div>
                      <div className="star-btn">
                        <a
                          onClick={() => navigate(`/blogs/${blog.id}`)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="bg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={136}
                              height={90}
                              viewBox="0 0 136 90"
                            >
                              <path d="M66.4566 1.09581C67.4534 0.731877 68.5466 0.731878 69.5434 1.09581L76.72 3.71616C77.5489 4.0188 78.4384 4.11757 79.3135 4.00413L87.4541 2.94882C88.5725 2.80382 89.7047 3.0841 90.6263 3.73416L95.7198 7.32676C96.5294 7.89783 97.4783 8.23958 98.4661 8.31592L106.177 8.91181C107.512 9.01497 108.732 9.70716 109.505 10.8003L111.973 14.2907C112.681 15.2926 113.704 16.0288 114.88 16.3822L120.746 18.1466C122.366 18.6337 123.575 19.9876 123.878 21.6515L124.28 23.8681C124.563 25.4218 125.499 26.7793 126.852 27.5948L130.028 29.5102C131.794 30.575 132.61 32.7035 132.009 34.6758L131.703 35.6784C131.154 37.4793 131.565 39.4358 132.791 40.8644L133.825 42.0689C135.272 43.7549 135.272 46.2451 133.825 47.9311L132.791 49.1356C131.564 50.5642 131.154 52.5207 131.703 54.3216L132.009 55.3242C132.61 57.2965 131.794 59.425 130.028 60.4898L126.851 62.4052C125.499 63.2207 124.563 64.5782 124.28 66.1319L123.878 68.3485C123.575 70.0124 122.366 71.3663 120.746 71.8534L114.88 73.6178C113.704 73.9712 112.681 74.7074 111.973 75.7093L109.505 79.1997C108.732 80.2928 107.512 80.985 106.177 81.0882L98.4661 81.6841C97.4783 81.7604 96.5294 82.1022 95.7198 82.6732L90.6263 86.2658C89.7047 86.9159 88.5725 87.1962 87.4541 87.0512L79.3135 85.9959C78.4384 85.8824 77.5489 85.9812 76.72 86.2838L69.5434 88.9042C68.5466 89.2681 67.4534 89.2681 66.4566 88.9042L59.28 86.2838C58.4511 85.9812 57.5616 85.8824 56.6865 85.9959L48.5459 87.0512C47.4275 87.1962 46.2953 86.9159 45.3737 86.2658L40.2802 82.6732C39.4706 82.1022 38.5217 81.7604 37.5339 81.6841L29.8227 81.0882C28.4878 80.985 27.2682 80.2928 26.4952 79.1997L24.0271 75.7093C23.3186 74.7074 22.2955 73.9712 21.1205 73.6178L15.2539 71.8534C13.6344 71.3663 12.4248 70.0124 12.1224 68.3485L11.7197 66.132C11.4374 64.5782 10.5009 63.2207 9.14851 62.4052L5.97213 60.4898C4.20646 59.425 3.39029 57.2965 3.99142 55.3242L4.297 54.3216C4.8459 52.5207 4.43549 50.5642 3.20917 49.1356L2.17516 47.9311C0.727774 46.2451 0.727773 43.7549 2.17516 42.0689L3.20917 40.8644C4.43549 39.4358 4.8459 37.4793 4.297 35.6784L3.99142 34.6758C3.39029 32.7035 4.20646 30.575 5.97213 29.5102L9.14851 27.5948C10.5009 26.7793 11.4374 25.4218 11.7197 23.8681L12.1224 21.6515C12.4248 19.9876 13.6344 18.6337 15.2539 18.1466L21.1205 16.3822C22.2955 16.0288 23.3186 15.2926 24.0271 14.2907L26.4952 10.8003C27.2682 9.70716 28.4878 9.01497 29.8227 8.91181L37.5339 8.31592C38.5217 8.23958 39.4706 7.89783 40.2802 7.32676L45.3737 3.73416C46.2953 3.0841 47.4275 2.80382 48.5459 2.94882L56.6865 4.00413C57.5616 4.11757 58.4511 4.0188 59.28 3.71616L66.4566 1.09581Z"
                              />
                            </svg>
                          </div>
                          <div className="details-button">
                            Read More
                            <svg viewBox="0 0 13 20">
                              <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="col-lg-4 wow animate fadeInRight"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
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
                    <h5 className="widget-title">Services</h5>
                    <ul className="category-list">
                      {[
                        {
                          name: "Software Development",
                          path: "/software-development",
                          count: 20,
                        },
                        {
                          name: "IT Consulting",
                          path: "/it-consulting",
                          count: 15,
                        },
                        { name: "UI/UX", path: "/ui-ux", count: 25 },
                        {
                          name: "Web Development",
                          path: "/web-development",
                          count: 30,
                        },
                        { name: "Mobile App", path: "/mobile-app", count: 32 },
                        {
                          name: "Custom Software",
                          path: "/custom-software",
                          count: 35,
                        },
                        {
                          name: "Digital Marketing",
                          path: "/digital-marketing-page",
                          count: 38,
                        },
                        {
                          name: "Game Development",
                          path: "/game-development",
                          count: 38,
                        },
                        {
                          name: "ERP Solution",
                          path: "/erp-solution",
                          count: 38,
                        },
                      ].map((service, index) => (
                        <li key={index}>
                          <a>
                            <span
                              onClick={() => navigate(service.path)}
                              style={{ cursor: "pointer" }}
                            >
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
                              {service.name}
                            </span>
                            <span>({service.count})</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="single-widget mb-30">
                    <h5 className="widget-title">Popular Post </h5>
                    <div className="recent-post-widget mb-20">
                      <div className="recent-post-img">
                        <a href="#">
                          <img src={pop1} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-content">
                        <a href="#">05 January, 2025</a>
                        <h6>
                          <a href="#">
                            How Tankar Solutions Private Limited is Transforming
                            Businesses with Cutting-Edge IT Services
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-post-widget mb-20">
                      <div className="recent-post-img">
                        <a href="#">
                          <img src={pop2} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-content">
                        <a href="#">05 January, 2025</a>
                        <h6>
                          <a href="#">
                            Revolutionizing Mobile and Web Development: Tankar
                            Solutions Private Limited’s Expertise
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-post-widget mb-20">
                      <div className="recent-post-img">
                        <a href="#">
                          <img src={pop3} alt="" />
                        </a>
                      </div>
                      <div className="recent-post-content">
                        <a href="#">05 January, 2025</a>
                        <h6>
                          <a href="#">
                            The Role of UI/UX in Digital Success: Tankar
                            Solutions Private Limited’s Design Approach{" "}
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
                  <div class="single-widget">
                    <h5 class="widget-title">Social Share</h5>
                    <ul class="social-list">
                      <li>
                        <a href="https://www.linkedin.com/">
                          <i class="bi bi-linkedin"></i>
                          <span>LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i class="bi bi-facebook"></i>
                          <span>Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i class="bi bi-twitter-x"></i>
                          <span>Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i class="bi bi-instagram"></i>
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
        {/* End Blog Grid Section */}
      </>
      <Footer />
    </div>
  );
};

export default Blogs;
