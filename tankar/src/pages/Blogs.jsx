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
import { useNavigate } from 'react-router-dom';
import blog1 from '../assets/img/blog/blog1.jpg'
import blog2 from '../assets/img/blog/blog2.jpg'
import blog3 from '../assets/img/blog/blog3.jpg'
import blog4 from '../assets/img/blog/blog4.jpg'
import blog5 from '../assets/img/blog/blog5.jpg'
import pop1 from '../assets/img/blog/blog1-5.jpg'
import pop2 from '../assets/img/blog/blog2-5.jpg'
import pop3 from '../assets/img/blog/blog3-5.jpg'
import Component from './Component';

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
                <div
                  className="blog-card2 style-3 mb-50 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card-img-wrap">
                    <a href="blog-details.html" className="card-img">
                      <img src={blog1} alt="" />
                    </a>
                    <a href="blog-grid.html" className="date">
                      <span>
                        <strong>05</strong> January
                      </span>
                    </a>
                  </div>
                  <div className="blog-card-content-wrap">
                    <div className="blog-card-content">
                      {/* <div className="blog-meta">
                  <ul className="category">
                    <li>
                      <a href="blog-grid.html">Development</a>
                    </li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (20)</span>
                  </div>
                </div> */}
                      <h4>
                        <a onClick={() => navigate('/blog/how-tankar-solution')} style={{ cursor: 'pointer' }}>
                          How Tankar Solutions Private Limited is Transforming Businesses with Cutting-Edge IT Services
                        </a>
                      </h4>
                      <p>
                        Tankar Solutions Private Limited is revolutionizing businesses with cutting-edge IT services, including software development, ERP solutions, and IT consulting, ensuring seamless digital transformation, enhanced efficiency, and sustainable growth for enterprises worldwide.</p>
                    </div>
                    <div className="star-btn">
                      <a onClick={() => navigate('/blog/how-tankar-solution')} style={{ cursor: 'pointer' }}>


                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-card2 style-3 mb-50 wow animate fadeInDown"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card-img-wrap">
                    <a href="blog-details.html" className="card-img">
                      <img src={blog2} alt="" />
                    </a>
                    <a href="blog-grid.html" className="date">
                      <span>
                        <strong>05</strong> January
                      </span>
                    </a>
                  </div>
                  <div className="blog-card-content-wrap">
                    <div className="blog-card-content">
                      {/* <div className="blog-meta">
                  <ul className="category">
                    <li>
                      <a href="blog-grid.html">Graphic Design</a>
                    </li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (15)</span>
                  </div>
                </div> */}
                      <h4>
                        <a onClick={() => navigate('/blog/the-future-of-it-consulting')} style={{ cursor: 'pointer' }}>
                          The Future of IT Consulting: How Tankar Solutions Private Limited Helps Companies Stay Ahead
                        </a>
                      </h4>
                      <p>
                        Tankar Solutions Private Limited drives the future of IT consulting by providing innovative strategies, advanced technologies, and tailored solutions, helping businesses optimize operations, enhance security, and stay ahead in the ever-evolving digital landscape.</p>
                    </div>
                    <div className="star-btn">
                      <a onClick={() => navigate('/blog/the-future-of-it-consulting')} style={{ cursor: 'pointer' }}>


                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-card2 style-3 mb-60 wow animate fadeInDown"
                  data-wow-delay="800ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card-img-wrap">
                    <a href="blog-details.html" className="card-img">
                      <img src={blog3} alt="" />
                    </a>
                    <a href="blog-grid.html" className="date">
                      <span>
                        <strong>05</strong> January
                      </span>
                    </a>
                  </div>
                  <div className="blog-card-content-wrap">
                    <div className="blog-card-content">
                      {/* <div className="blog-meta">
                  <ul className="category">
                    <li>
                      <a href="blog-grid.html">Development</a>
                    </li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (25)</span>
                  </div>
                </div> */}
                      <h4>
                        <a onClick={() => navigate('/blog/revolutionizing-mobile')} style={{ cursor: 'pointer' }}>
                          Revolutionizing Mobile and Web Development: Tankar Solutions Private Limited’s Expertise                  </a>
                      </h4>
                      <p>
                        Tankar Solutions Private Limited revolutionizes mobile and web development with cutting-edge technologies, user-centric designs, and scalable solutions, ensuring seamless performance, enhanced security, and exceptional user experiences for businesses across diverse industries.</p>
                    </div>
                    <div className="star-btn">
                      <a onClick={() => navigate('/blog/revolutionizing-mobile')} style={{ cursor: 'pointer' }}>


                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-card2 style-3 mb-60 wow animate fadeInDown"
                  data-wow-delay="800ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card-img-wrap">
                    <a href="blog-details.html" className="card-img">
                      <img src={blog4} alt="" />
                    </a>
                    <a href="blog-grid.html" className="date">
                      <span>
                        <strong>05</strong> January
                      </span>
                    </a>
                  </div>
                  <div className="blog-card-content-wrap">
                    <div className="blog-card-content">
                      {/* <div className="blog-meta">
                  <ul className="category">
                    <li>
                      <a href="blog-grid.html">Development</a>
                    </li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (25)</span>
                  </div>
                </div> */}
                      <h4>
                        <a onClick={() => navigate('/blog/strengthening-cybersecurity')} style={{ cursor: 'pointer' }}>
                          Strengthening Cybersecurity: How Tankar Solutions Private Limited Protects Your Digital Assets                 </a>
                      </h4>
                      <p>
                        Tankar Solutions Private Limited strengthens cybersecurity with advanced threat detection, robust encryption, and proactive security measures, safeguarding your digital assets from cyber threats while ensuring data integrity, compliance, and business continuity.</p>
                    </div>
                    <div className="star-btn">
                      <a onClick={() => navigate('/blog/strengthening-cybersecurity')} style={{ cursor: 'pointer' }}>


                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-card2 style-3 mb-60 wow animate fadeInDown"
                  data-wow-delay="800ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card-img-wrap">
                    <a href="blog-details.html" className="card-img">
                      <img src={blog5} alt="" />
                    </a>
                    <a href="blog-grid.html" className="date">
                      <span>
                        <strong>05</strong> January
                      </span>
                    </a>
                  </div>
                  <div className="blog-card-content-wrap">
                    <div className="blog-card-content">
                      {/* <div className="blog-meta">
                  <ul className="category">
                    <li>
                      <a href="blog-grid.html">Development</a>
                    </li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (25)</span>
                  </div>
                </div> */}
                      <h4>
                        <a onClick={() => navigate('/blog/the-role-of-ui-ux')} style={{ cursor: 'pointer' }}>
                          The Role of UI/UX in Digital Success: Tankar Solutions Private Limited’s Design Approach                </a>
                      </h4>
                      <p>
                        Tankar Solutions Private Limited enhances digital success with intuitive UI/UX design, creating seamless, engaging, and user-friendly experiences that drive customer satisfaction, improve conversions, and optimize business growth across web and mobile platforms.</p>
                    </div>
                    <div className="star-btn">
                      <a onClick={() => navigate('/blog/the-role-of-ui-ux')} style={{ cursor: 'pointer' }}>


                      </a>
                    </div>
                  </div>
                </div>

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
                        { name: "Software Development", path: "/software-development", count: 20 },
                        { name: "IT Consulting", path: "/it-consulting", count: 15 },
                        { name: "UI/UX", path: "/ui-ux", count: 25 },
                        { name: "Web Development", path: "/web-development", count: 30 },
                        { name: "Mobile App", path: "/mobile-app", count: 32 },
                        { name: "Custom Software", path: "/custom-software", count: 35 },
                        { name: "Digital Marketing", path: "/digital-marketing-page", count: 38 },
                        { name: "Game Development", path: "/game-development", count: 38 },
                        { name: "ERP Solution", path: "/erp-solution", count: 38 }
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
                          <img
                            src={pop1}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-post-content">
                        <a href="#">05 January, 2025</a>
                        <h6>
                          <a href="#">
                            How Tankar Solutions Private Limited is Transforming Businesses with Cutting-Edge IT Services
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-post-widget mb-20">
                      <div className="recent-post-img">
                        <a href="#">
                          <img
                            src={pop2}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-post-content">
                        <a href="#">05 January, 2025</a>
                        <h6>
                          <a href="#">
                            Revolutionizing Mobile and Web Development: Tankar Solutions Private Limited’s Expertise
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-post-widget mb-20">
                      <div className="recent-post-img">
                        <a href="#">
                          <img
                            src={pop3}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="recent-post-content">
                        <a href="#">05 January, 2025</a>
                        <h6>
                          <a href="#">
                            The Role of UI/UX in Digital Success: Tankar Solutions Private Limited’s Design Approach                    </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/*{/* <div className="single-widget mb-30">
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
            </div> */}
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
        {/* Start Contact section */}

      </>
      <Component />

      <Footer />
    </div>
  )
}

export default Blogs;
