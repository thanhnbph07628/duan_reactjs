import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ChuongTrinh from "../../../components/Client/ChuongTrinh/ChuongTrinh";
import Slide from "../../../components/Client/Slide/Slide";

function TrangChu() {

  const [itemsPN, setItemsPN] = useState([]);
  const [itemsPHL, setItemsPHL] = useState([]);
  const [itemsTT, setItemsTT] = useState([]);
  const [itemsForm, setItemsForm] = useState({});

  const setListPN = () => {
    axios
      .get("http://127.0.0.1:8000/api/client/productsnew/")
      .then(function (response) {
        setItemsPN(response.data);
      })
      .catch(function (error) { 
        console.log(error);
      });
  };

  useEffect(setListPN, []);

  const setListPHL = () => {
    axios
      .get("http://127.0.0.1:8000/api/client/productshighlight/")
      .then(function (response) {
        setItemsPHL(response.data);
      })
      .catch(function (error) { 
        console.log(error);
      });
  };

  useEffect(setListPHL, []);

  const setListTT = () => {
    axios
      .get("http://127.0.0.1:8000/api/news/show/")
      .then(function (response) {
        setItemsTT(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(setListTT, []);

  return (
    <div>
      {/* <ChuongTrinh/> */}
      <Slide />
      <div className="container" style={{ marginTop: "50px" }}>
        <div class="row">
          <div class="col-lg-12">
            <div class="li-section-title">
              <h2>
                <span>Sản phẩm mới</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">

          {itemsPN.map((product, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mt-40">
              {/* single-product-wrap start */}
              <div className="single-product-wrap">
                <div className="product-image" style={{height:"290px"}}>
                <Link to={`single_product/${product.id}`} className="name">
                    <img src={product.images} alt="Li's Product Image" width="263px" height="auto" />
                  </Link>
                  <span className="sticker">New</span>
                </div>
                <div className="product_desc">
                  <div className="product_desc_info">
                    <div className="product-review">
                      <h5 className="manufacturer">
                        <span>{product.created_at}</span>
                      </h5>
                      <div className="rating-box">
                        <ul className="rating">
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li className="no-star"><i className="fa fa-star-o" /></li>
                          <li className="no-star"><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                    <h4><Link to={`single_product/${product.id}`} className="name">{product.name}</Link></h4>
                    <div className="price-box">
                      <del className="new-price">{product.price} VNĐ</del>
                      <span className="new-price" style={{ color: "red" }}>{product.sale} VNĐ</span>
                    </div>
                  </div>
                  <div className="add-actions">
                    <ul className="add-actions-link">
                      <li className="add-cart active"><a href="shopping-cart.html">Add to cart</a></li>
                      <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                      <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* single-product-wrap end */}
            </div>
          ))}

        </div>
      </div>

      {/* Sản phẩm nổi bật */}
      <div className="container" style={{ marginTop: "50px" }}>
        <div class="row">
          <div class="col-lg-12">
            <div class="li-section-title">
              <h2>
                <span>Sản phẩm nổi bật</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">

        {itemsPHL.map((product, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-40">
            {/* single-product-wrap start */}
              <div className="single-product-wrap">
                <div className="product-image" style={{height:"290px"}}>
                <Link to={`single_product/${product.id}`} className="name">
                    <img src={product.images} alt="Li's Product Image" width="263px" height="auto" />
                </Link>
                </div>
                <div className="product_desc">
                  <div className="product_desc_info">
                    <div className="product-review">
                      <h5 className="manufacturer">
                        <span>{product.created_at}</span>
                      </h5>
                      <div className="rating-box">
                        <ul className="rating">
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li><i className="fa fa-star-o" /></li>
                          <li className="no-star"><i className="fa fa-star-o" /></li>
                          <li className="no-star"><i className="fa fa-star-o" /></li>
                        </ul>
                      </div>
                    </div>
                    <h4><Link to={`single_product/${product.id}`} className="name">{product.name}</Link></h4>
                    <div className="price-box">
                      <del className="new-price">{product.price} VNĐ</del>
                      <span className="new-price" style={{ color: "red" }}>{product.sale} VNĐ</span>
                    </div>
                  </div>
                  <div className="add-actions">
                    <ul className="add-actions-link">
                      <li className="add-cart active"><a href="shopping-cart.html">Add to cart</a></li>
                      <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye" /></a></li>
                      <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* single-product-wrap end */}
          </div>
          ))}

        </div>
      </div>

      {/* Tin tức */}
      <div className="container" style={{ marginTop: "50px" }}>
        <div class="row">
          <div class="col-lg-12">
            <div class="li-section-title">
              <h2>
                <span>Tin tức mới nhất</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Begin Li's Main Blog Page Area */}
        <div className="li-main-blog-page pt-60 pb-55">
          <div className="container">
            <div className="row">
              {/* Begin Li's Main Content Area */}
              <div className="col-lg-12">
                <div className="row li-main-content">

                {itemsTT.map((news, index) => (
                  <div className="col-lg-4 col-md-6">
                    <div className="li-blog-single-item pb-25">
                      <div className="li-blog-banner">
                      <Link to={`detail_blog/${news.id}`} className="name"><img className="img-full" src={news.images} alt width="350px" height="250px"/></Link>
                      </div>
                      <div className="li-blog-content">
                        <div className="li-blog-details">
                        <span style={{fontSize:"23px"}}><Link to={`detail_blog/${news.id}`} className="name">{news.name}</Link></span>
                          <div className="li-blog-meta">
                            <a className="author" href="#"><i className="fa fa-user" />Admin</a>
                            <a className="comment" href="#"><i className="fa fa-comment-o" /> 3 comment</a>
                            <a className="post-time" href="#"><i className="fa fa-calendar" /> 25 nov 2018</a>
                          </div>
                          <p>{news.description}</p>
                          <a className="read-more" href="blog-details-left-sidebar.html">Read More...</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                  {/* Begin Li's Pagination Area */}
                  {/* Li's Pagination End Here Area */}
                </div>
              </div>
              {/* Li's Main Content Area End Here */}
            </div>
          </div>
        </div>
        {/* Li's Main Blog Page Area End Here */}
      </div>
    </div>
  );
}

export default TrangChu;
