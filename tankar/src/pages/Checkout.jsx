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
const Checkout = () => {
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
                <li>Checkout</li>
              </ul>
              <h1>Secure Checkout.</h1>
            </div>
            <div className="scroll-down-btn">
              <a href="#shop">
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
  {/* Start Checkout section */}
  <div className="checkout-page scroll-margin pt-120 pb-120" id="shop">
    <div className="container">
      <div className="row g-lg-4 gy-5">
        <div className="col-lg-7">
          <div className="checkout-form-wrapper">
            <div className="checkout-form-title">
              <h4>Billing Information</h4>
            </div>
            <div className="checkout-form">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Full Name*</label>
                      <input type="text" placeholder="Daniel Scoot" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Phone*</label>
                      <input type="text" placeholder="(212)+ 455 645 678" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Email Address (Optional)</label>
                      <input type="email" placeholder="info@gmail.com" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Your Location</label>
                      <input type="text" placeholder="Type Location" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Street Address*</label>
                      <input type="text" placeholder="Street address" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner mb-30">
                      <label>Postal Code*</label>
                      <input type="text" placeholder="Postal code" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner mb-30">
                      <label>Short Notes*</label>
                      <textarea
                        placeholder="Write Something..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="contactCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="contactCheck1"
                      >
                        Save my information for next time when I purchased
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="checkout-form-wrapper">
            <div className="checkout-form-title">
              <h4>Order Summary</h4>
            </div>
            <div className="checkout-form">
              <form>
                <div className="cart-menu">
                  <div className="cart-body">
                    <ul>
                      <li className="single-item">
                        <div className="item-area">
                          <div className="main-item">
                            <div className="item-img">
                              <img
                                src="assets/img/innerpage/product-img1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content-and-quantity">
                              <div className="content">
                                <div className="price-and-btn d-flex align-items-center justify-content-between">
                                  <span>$234</span>
                                  <button type="reset" className="close-btn">
                                    <i className="bi bi-x" />
                                  </button>
                                </div>
                                <h6>
                                  <a href="product-details.html">Air Pod Pro</a>
                                </h6>
                              </div>
                              <div className="quantity-area">
                                <div className="quantity">
                                  <a className="quantity__minus">
                                    <span>
                                      <i className="bi bi-dash" />
                                    </span>
                                  </a>
                                  <input
                                    name="quantity"
                                    type="text"
                                    className="quantity__input"
                                    defaultValue={1}
                                  />
                                  <a className="quantity__plus">
                                    <span>
                                      <i className="bi bi-plus" />
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="single-item">
                        <div className="item-area">
                          <div className="main-item">
                            <div className="item-img">
                              <img
                                src="assets/img/innerpage/product-img6.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content-and-quantity">
                              <div className="content">
                                <div className="price-and-btn d-flex align-items-center justify-content-between">
                                  <span>$150</span>
                                  <button type="reset" className="close-btn">
                                    <i className="bi bi-x" />
                                  </button>
                                </div>
                                <h6>
                                  <a href="#">Dove Beauty Cream</a>
                                </h6>
                              </div>
                              <div className="quantity-area">
                                <div className="quantity">
                                  <a className="quantity__minus">
                                    <span>
                                      <i className="bi bi-dash" />
                                    </span>
                                  </a>
                                  <input
                                    name="quantity"
                                    type="text"
                                    className="quantity__input"
                                    defaultValue={1}
                                  />
                                  <a className="quantity__plus">
                                    <span>
                                      <i className="bi bi-plus" />
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="cart-footer">
                    <div className="pricing-area">
                      <ul>
                        <li>
                          <span>Sub Total</span>
                          <span>$468</span>
                        </li>
                        <li>
                          <span>Offer (20%)</span>
                          <span>$56</span>
                        </li>
                      </ul>
                      <ul className="total">
                        <li>
                          <span>Total</span>
                          <span>$425</span>
                        </li>
                      </ul>
                    </div>
                    <div className="choose-payment-method">
                      <h6>Select Payment Method</h6>
                      <div className="payment-option">
                        <ul>
                          <li className="paypal active">
                            <img
                              src="assets/img/innerpage/icon/payPal.svg"
                              alt=""
                            />
                            <div className="checked">
                              <i className="bi bi-check" />
                            </div>
                          </li>
                          <li className="stripe">
                            <img
                              src="assets/img/innerpage/icon/stripe.svg"
                              alt=""
                            />
                            <div className="checked">
                              <i className="bi bi-check" />
                            </div>
                          </li>
                          <li className="offline">
                            <img
                              src="assets/img/innerpage/icon/offline.svg"
                              alt=""
                            />
                            <div className="checked">
                              <i className="bi bi-check" />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="pt-25"
                        id="StripePayment"
                        style={{ display: "none" }}
                      >
                        <div className="row g-4">
                          <div className="col-md-12">
                            <div className="form-inner">
                              <label>Card Number</label>
                              <input
                                type="text"
                                placeholder="1234 1234 1234 1234"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner">
                              <label>Expiry</label>
                              <input type="text" placeholder="MM/YY" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner">
                              <label>CVC</label>
                              <input type="text" placeholder="CVC" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="primary-btn1"
                      data-text="Place Your Order"
                    >
                      <span>Place Your Order</span>
                    </button>
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
<Component />
        <Footer />
      
    </div>
  )
}

export default Checkout;
