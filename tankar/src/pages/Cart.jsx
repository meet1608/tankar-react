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

const Cart = () => {
  return (
    <div>
      <Navbar />
      <>
  {/* scroll top */}
  <div className="circle-container">
    <svg
      className="circle-progress svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
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
                <li>Cart</li>
              </ul>
              <h1>Instant Purchase.</h1>
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
  {/* Start Cart Page section */}
  <div className="cart-page scroll-margin pt-120 pb-120" id="shop">
    <div className="container">
      <div className="row g-lg-4 gy-5">
        <div className="col-xl-8 col-lg-7">
          <div className="cart-shopping-wrapper">
            <div className="cart-widget-title">
              <h4>My Shopping</h4>
            </div>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product Info</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Product Info">
                    <div className="product-info-wrapper">
                      <div className="product-info-img">
                        <img src="assets/img/innerpage/cart-img1.png" alt="" />
                      </div>
                      <div className="product-info-content">
                        <h6>ZARA Crimson</h6>
                        <p>
                          <span>SKU: </span>D32-5H23
                        </p>
                        <ul>
                          <li>remove</li>
                          <li>
                            <div className="qty-btn">quantity</div>
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Price">
                    <span>$214.00</span>
                  </td>
                  <td data-label="Total">$214.00</td>
                </tr>
                <tr>
                  <td data-label="Product Info">
                    <div className="product-info-wrapper">
                      <div className="product-info-img">
                        <img src="assets/img/innerpage/cart-img2.png" alt="" />
                      </div>
                      <div className="product-info-content">
                        <h6>Fashion Forward</h6>
                        <p>
                          <span>SKU: </span>D32-5H23
                        </p>
                        <ul>
                          <li>remove</li>
                          <li>
                            <div className="qty-btn">quantity</div>
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Price">
                    <span>$214.00</span>
                  </td>
                  <td data-label="Total">$214.00</td>
                </tr>
              </tbody>
            </table>
            <a href="shop.html" className="details-button">
              Continue Shoping
              <svg viewBox="0 0 13 20">
                <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 ">
          <div className="cart-order-sum-area">
            <div className="cart-widget-title">
              <h4>Order Summary</h4>
            </div>
            <div className="order-summary-wrap">
              <ul className="order-summary-list">
                <li>
                  <span>Sub Total</span>
                  <span>$214.00</span>
                </li>
                <li>
                  <span>Shipping</span>
                  <div className="order-info">
                    <p>Shipping Free*</p>
                    <strong> Pickup fee $10.00</strong>
                  </div>
                </li>
                <li>
                  <div className="coupon-area">
                    <span>Coupon Code</span>
                    <form>
                      <div className="form-inner">
                        <input type="text" placeholder="Your code" />
                        <button type="submit" className="apply-btn">
                          Apply
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
                <li>
                  <span>Total</span>
                  <span>$214.00</span>
                </li>
              </ul>
              <a
                href="checkout.html"
                className="primary-btn1"
                data-text="Processed Checkout"
              >
                <span>Processed Checkout</span>
              </a>
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

export default Cart;
