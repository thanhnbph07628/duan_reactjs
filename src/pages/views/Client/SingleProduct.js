import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import sanpham2 from "../../../styleClient/img/product/large-size/3.jpg";
import dt1 from "../../../styleClient/img/product-details/1.jpg";
import dt2 from "../../../styleClient/img/product/large-size/3.jpg";

const SingleProduct = () => {

  let { id } = useParams();
  let limit = 4;
  const [detail, setDetail] = useState({});
  const [items, setDetailLQ] = useState({});

  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/products/product-detail/" + id)
      .then(function (response) {
        console.log(response)
        setDetail(response.data[0])
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(setList, []);

  const setListLQ = () => {
    axios
      .get("http://127.0.0.1:8000/api/products/product-involve/")
      .then(function (response) {
        console.log(response.data[0])
        setDetailLQ(response.data[0])
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(setListLQ, []);
  console.log(items)
  return (
    <div>
      <div className="content-wraper">
        <div className="container">
          <div className="row single-product-area">
            <div className="col-lg-5 col-md-6">
              {/* Product Details Left */}
              <div className="product-details-left">
                <div className="product-details-images slider-navigation-1 slick-initialized slick-slider">
                  <div aria-live="polite" className="slick-list draggable">
                    <div
                      className="slick-track"
                      role="listbox"
                      style={{
                        opacity: "1",
                        width: "3760px",
                        "-webkit-transform": "translate3d(-470px, 0px, 0px)",
                        "-ms-transform": "translate3d(-470px, 0px, 0px)",
                        transform: "translate3d(-470px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="lg-image slick-slide slick-cloned"
                        data-slick-index={-1}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: "470px" }}
                      ></div>
                      <div
                        className="lg-image slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide00"
                        style={{ width: "470px" }}
                      >
                        <img src={detail.images} alt="product image" width="470px" height="500px"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*// Product Details Left */}
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="product-details-view-content sp-affiliate-content pt-60">
                <div className="product-info" style={{marginTop:"-40px"}}>
                    <h2>{detail.name}</h2>
                  <div className="price-box pt-20">
                    <del className="new-price-2" style={{fontSize:"24px", marginRight:"15px"}}>{detail.price} VNĐ</del>
                    <span className="new-price new-price-2">{detail.sale} VNĐ</span>
                  </div>
                  <div className="product-desc">
                    <p>
                      <span>{detail.description}</span>
                    </p>
                  </div>
                  <div className="single-add-to-cart">
                    <form action="#" className="cart-quantity">
                      <div className="quantity">
                        <label>Quantity</label>
                        <div className="cart-plus-minus">
                          <input
                            className="cart-plus-minus-box"
                            defaultValue={1}
                            type="text"
                          />
                          <div className="dec qtybutton">
                            <i className="fa fa-angle-down" />
                          </div>
                          <div className="inc qtybutton">
                            <i className="fa fa-angle-up" />
                          </div>
                          <div className="dec qtybutton">
                            <i className="fa fa-angle-down" />
                          </div>
                          <div className="inc qtybutton">
                            <i className="fa fa-angle-up" />
                          </div>
                        </div>
                      </div>
                      <button className="add-to-cart" type="submit">
                        Add to cart
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-area pt-35">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-product-tab">
                <ul className="nav li-product-menu">
                  <li>
                    <a className="active" data-toggle="tab" href="#description">
                      <span>Mô Tả</span>
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#product-details">
                      <span>Chi Tiết Sản Phẩm</span>
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#reviews">
                      <span>Bình luận</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Begin Li's Tab Menu Content Area */}
            </div>
          </div>
          <div className="tab-content">
            <div
              id="description"
              className="tab-pane active show"
              role="tabpanel"
            >
              <div className="product-description">
                <span>
                {detail.description}
                </span>
              </div>
            </div>
            <div id="product-details" className="tab-pane" role="tabpanel">
              <div className="product-details-manufacturer">
              {parse(String(detail.detail))}
              </div>
            </div>
            <div id="reviews" className="tab-pane" role="tabpanel">
              <div className="product-reviews">
                <div className="product-details-comment-block">
                  <div className="comment-review">
                    <span>Grade</span>
                    <ul className="rating">
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                      <li>
                        <i className="fa fa-star-o" />
                      </li>
                      <li className="no-star">
                        <i className="fa fa-star-o" />
                      </li>
                      <li className="no-star">
                        <i className="fa fa-star-o" />
                      </li>
                    </ul>
                  </div>
                  <div className="comment-author-infos pt-25">
                    <span>HTML 5</span>
                    <em>01-12-18</em>
                  </div>
                  <div className="comment-details">
                    <h4 className="title-block">Demo</h4>
                    <p>Plaza</p>
                  </div>
                  <div className="review-btn">
                    <a
                      className="review-links"
                      href="#"
                      data-toggle="modal"
                      data-target="#mymodal"
                    >
                      Write Your Review!
                    </a>
                  </div>
                  {/* Begin Quick View | Modal Area */}
                  <div className="modal fade modal-wrapper" id="mymodal">
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-body">
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <h3 className="review-page-title">
                            Write Your Review
                          </h3>
                          <div className="modal-inner-area row">
                            <div className="col-lg-6">
                              <div className="li-review-product">
                                <img src={dt2} alt="Li's Product" />
                                <div className="li-review-product-desc">
                                  <p className="li-product-name">
                                    Today is a good day Framed poster
                                  </p>
                                  <p>
                                    <span>
                                      Beach Camera Exclusive Bundle - Includes
                                      Two Samsung Radiant 360 R3 Wi-Fi Bluetooth
                                      Speakers. Fill The Entire Room With
                                      Exquisite Sound via Ring Radiator
                                      Technology. Stream And Control R3 Speakers
                                      Wirelessly With Your Smartphone.
                                      Sophisticated, Modern Design{" "}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="li-review-content">
                                {/* Begin Feedback Area */}
                                <div className="feedback-area">
                                  <div className="feedback">
                                    <h3 className="feedback-title">
                                      Our Feedback
                                    </h3>
                                    <form action="#">
                                      <p className="your-opinion">
                                        <label>Your Rating</label>
                                        <span></span>
                                      </p>
                                      <div className="br-wrapper br-theme-fontawesome-stars">
                                        <select
                                          className="star-rating"
                                          style={{ display: "none" }}
                                        >
                                          <option value={1}>1</option>
                                          <option value={2}>2</option>
                                          <option value={3}>3</option>
                                          <option value={4}>4</option>
                                          <option value={5}>5</option>
                                        </select>
                                        <div className="br-widget">
                                          <a
                                            href="#"
                                            data-rating-value={1}
                                            data-rating-text={1}
                                            className="br-selected br-current"
                                          />
                                          <a
                                            href="#"
                                            data-rating-value={2}
                                            data-rating-text={2}
                                          />
                                          <a
                                            href="#"
                                            data-rating-value={3}
                                            data-rating-text={3}
                                          />
                                          <a
                                            href="#"
                                            data-rating-value={4}
                                            data-rating-text={4}
                                          />
                                          <a
                                            href="#"
                                            data-rating-value={5}
                                            data-rating-text={5}
                                          />
                                          <div className="br-current-rating">
                                            1
                                          </div>
                                        </div>
                                      </div>
                                      <p />
                                      <p className="feedback-form">
                                        <label htmlFor="feedback">
                                          Nội dung
                                        </label>
                                        <textarea
                                          id="feedback"
                                          name="comment"
                                          cols={45}
                                          rows={8}
                                          aria-required="true"
                                          defaultValue={""}
                                        />
                                      </p>
                                      <div className="feedback-input">
                                        <p className="feedback-form-author">
                                          <label htmlFor="author">
                                            Họ Tên
                                            <span className="required">*</span>
                                          </label>
                                          <input
                                            id="author"
                                            name="author"
                                            defaultValue
                                            size={30}
                                            aria-required="true"
                                            type="text"
                                          />
                                        </p>
                                        <p className="feedback-form-author feedback-form-email">
                                          <label htmlFor="email">
                                            Email
                                            <span className="required">*</span>
                                          </label>
                                          <input
                                            id="email"
                                            name="email"
                                            defaultValue
                                            size={30}
                                            aria-required="true"
                                            type="text"
                                          />
                                          <span className="required">
                                            <sub>*</sub> Required fields
                                          </span>
                                        </p>
                                        <div className="feedback-btn">
                                          <a
                                            href="#"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            Close
                                          </a>
                                          <a href="#">Submit</a>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                {/* Feedback Area End Here */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Quick View | Modal Area End Here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      {/* <div className="container" style={{ marginTop: "50px" }}>
        <div class="row">
          <div class="col-lg-12">
            <div class="li-section-title">
              <h2>
                <span>Sản phẩm liên quan</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">

        {items.map((products_involves, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mt-40">
      <div className="single-product-wrap" key={index}>
        <div className="product-image">
          <a href="single-product.html">
            <img src={products_involves.images} alt="Li's Product Image" />
          </a>
          <span className="sticker">New</span>
        </div>
        <div className="product_desc">
          <div className="product_desc_info">
            <div className="product-review">
              <h5 className="manufacturer">
                <a href="product-details.html">Graphic Corner</a>
              </h5>
              <div className="rating-box">
                <ul className="rating">
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li className="no-star">
                    <i className="fa fa-star-o" />
                  </li>
                  <li className="no-star">
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
              </div>
            </div>
            <h4>
              <a className="product_name" href="single-product.html">
                Accusantium dolorem1
              </a>
            </h4>
            <div className="price-box">
              <span className="new-price">$46.80</span>
            </div>
          </div>
          <div className="add-actions">
            <ul className="add-actions-link">
              <li className="add-cart active">
                <a href="shopping-cart.html">Add to cart</a>
              </li>
              <li>
                <a
                  href="#"
                  title="quick view"
                  className="quick-view-btn"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <i className="fa fa-eye" />
                </a>
              </li>
              <li>
                <a className="links-details" href="wishlist.html">
                  <i className="fa fa-heart-o" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    ))}
        </div>
      </div> */}
      <br />
      <br />
    </div>
  );
};

export default SingleProduct;
