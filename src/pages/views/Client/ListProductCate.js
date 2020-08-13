import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PaginationListProduct from '../../../components/PaginationListProduct';
import Slide from "../../../components/Client/Slide/Slide";
import banner from "../../../styleClient/img/bg-banner/2.jpg";

const ListProductCate = () => {

  const [itemsCate, setItemsCate] = useState([]);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  let { id } = useParams();

  const setListCate = () => {
    axios
      .get("http://127.0.0.1:8000/api/category/show/")
      .then(function (response) {
        setItemsCate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(setListCate, []);

  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/client/list_product_cate/" + id)
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, [id]);


  return (
    <div>
      <div className="content-wraper pt-60 pb-60 pt-sm-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-1 order-lg-2">
              {/* Begin Li's Banner Area */}
              <div className="single-banner shop-page-banner">
                <a href="#">
                  <img src={banner} alt="Li's Static Banner" />
                </a>
              </div>
              {/* Li's Banner Area End Here */}
              {/* shop-top-bar start */}
              <div className="shop-top-bar mt-30">
                <div className="shop-bar-inner">
                  <div className="product-view-mode">
                    {/* shop-item-filter-list start */}
                    <ul className="nav shop-item-filter-list" role="tablist">
                      <li className="active" role="presentation"><a aria-selected="true" className="active show" data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i className="fa fa-th" /></a></li>
                      <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i className="fa fa-th-list" /></a></li>
                    </ul>
                    {/* shop-item-filter-list end */}
                  </div>
                  <div className="toolbar-amount">
                    <span>Showing 1 to 9 of 15</span>
                  </div>
                </div>
              </div>
              {/* shop-top-bar end */}
              {/* shop-products-wrapper start */}
              <div className="shop-products-wrapper">
                <div className="tab-content">
                  <div id="grid-view" className="tab-pane fade active show" role="tabpanel">
                    <div className="product-area shop-product-area">
                      <div className="row">

                        {currentPosts.map((list_product, index) => (
                          <div className="col-lg-4 col-md-4 col-sm-6 mt-40" key={index}>
                            {/* single-product-wrap start */}
                            <div className="single-product-wrap">
                              <div className="product-image">
            
                                  <Link to={`/single_product/${list_product.id}`} className="name"><img src={list_product.images} alt="Li's Product Image" width="263px" height="280px" /></Link>
                             
                                <span className="sticker">New</span>
                              </div>
                              <div className="product_desc">
                                <div className="product_desc_info">
                                  <div className="product-review">
                                    <h5 className="manufacturer">
                                      <span>{list_product.created_at}</span>
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
                                  <h4><Link to={`/single_product/${list_product.id}`} className="name">{list_product.name}</Link></h4>
                                  <div className="price-box">
                                    <del className="new-price">{list_product.price} VNĐ</del>
                                    <span className="new-price" style={{ color: "red" }}>{list_product.sale} VNĐ</span>
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
                  </div>
                  <br /><br />
                  <PaginationListProduct
                    postsPerPage={postsPerPage}
                    totalPosts={items.length}
                    paginate={paginate}
                  />
                </div>
              </div>
              {/* shop-products-wrapper end */}
            </div>
            <div className="col-lg-3 order-2 order-lg-1">
              {/*sidebar-categores-box start  */}
              <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
                <div className="sidebar-title">
                  <h2>Danh mục Sản phẩm</h2>
                </div>
                {/* category-sub-menu start */}
                <div className="category-sub-menu">
                  <ul>
                    {itemsCate.map((category, index) => (
                      <li className="" key={index}>
                        <Link to={`/list_productcate/${category.id}`} key={index}>
                          <img src={category.images} alt="Li's Product Image" width="150px" height="auto" style={{ marginRight: "50px", marginBottom: "10px" }} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* category-sub-menu end */}
              </div>
              {/*sidebar-categores-box end  */}
              {/*sidebar-categores-box start  */}
              <div className="sidebar-categores-box">
                <div className="sidebar-title">
                  <h2>Filter By</h2>
                </div>
                {/* btn-clear-all start */}
                <button className="btn-clear-all mb-sm-30 mb-xs-30">Clear all</button>
                {/* btn-clear-all end */}
                {/* filter-sub-area start */}
                <div className="filter-sub-area">
                  <h5 className="filter-sub-titel">Brand</h5>
                  <div className="categori-checkbox">
                    <form action="#">
                      <ul>
                        <li><input type="checkbox" name="product-categori" /><a href="#">Prime Video (13)</a></li>
                        <li><input type="checkbox" name="product-categori" /><a href="#">Computers (12)</a></li>
                        <li><input type="checkbox" name="product-categori" /><a href="#">Electronics (11)</a></li>
                      </ul>
                    </form>
                  </div>
                </div>
                {/* filter-sub-area end */}
                {/* filter-sub-area start */}
                <div className="filter-sub-area pt-sm-10 pt-xs-10">
                  <h5 className="filter-sub-titel">Categories</h5>
                  <div className="categori-checkbox">
                    <form action="#">
                      <ul>
                        <li><input type="checkbox" name="product-categori" /><a href="#">Graphic Corner (10)</a></li>
                        <li><input type="checkbox" name="product-categori" /><a href="#"> Studio Design (6)</a></li>
                      </ul>
                    </form>
                  </div>
                </div>
                {/* filter-sub-area end */}
                {/* filter-sub-area start */}
                <div className="filter-sub-area pt-sm-10 pt-xs-10">
                  <h5 className="filter-sub-titel">Size</h5>
                  <div className="size-checkbox">
                    <form action="#">
                      <ul>
                        <li><input type="checkbox" name="product-size" /><a href="#">S (3)</a></li>
                        <li><input type="checkbox" name="product-size" /><a href="#">M (3)</a></li>
                        <li><input type="checkbox" name="product-size" /><a href="#">L (3)</a></li>
                        <li><input type="checkbox" name="product-size" /><a href="#">XL (3)</a></li>
                      </ul>
                    </form>
                  </div>
                </div>
                {/* filter-sub-area end */}
                {/* filter-sub-area start */}
                <div className="filter-sub-area pt-sm-10 pt-xs-10">
                  <h5 className="filter-sub-titel">Color</h5>
                  <div className="color-categoriy">
                    <form action="#">
                      <ul>
                        <li><span className="white" /><a href="#">White (1)</a></li>
                        <li><span className="black" /><a href="#">Black (1)</a></li>
                        <li><span className="Orange" /><a href="#">Orange (3) </a></li>
                        <li><span className="Blue" /><a href="#">Blue  (2) </a></li>
                      </ul>
                    </form>
                  </div>
                </div>
                {/* filter-sub-area end */}
                {/* filter-sub-area start */}
                <div className="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15">
                  <h5 className="filter-sub-titel">Dimension</h5>
                  <div className="categori-checkbox">
                    <form action="#">
                      <ul>
                        <li><input type="checkbox" name="product-categori" /><a href="#">40x60cm (6)</a></li>
                        <li><input type="checkbox" name="product-categori" /><a href="#">60x90cm (6)</a></li>
                        <li><input type="checkbox" name="product-categori" /><a href="#">80x120cm (6)</a></li>
                      </ul>
                    </form>
                  </div>
                </div>
                {/* filter-sub-area end */}
              </div>
              {/*sidebar-categores-box end  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductCate;
