import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PaginationListProduct from '../../../components/PaginationListProduct';

const ListNewsCate = () => {
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

  const setListCate = () => {
    axios
      .get("http://127.0.0.1:8000/api/catenews/show/")
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
      .get("http://127.0.0.1:8000/api/news/show/")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, []);

  return (
    <div>
      <div className="li-main-blog-page pt-60 pb-55">
        <div className="container">
          <div className="row">
            {/* Begin Li's Blog Sidebar Area */}
            <div className="col-lg-3 order-lg-1 order-2">
              <div className="li-blog-sidebar-wrapper">
                <div className="li-blog-sidebar">
                  <div className="li-sidebar-search-form pt-xs-30 pt-sm-30">
                    <form action="#">
                      <input type="text" className="li-search-field" placeholder="search here" />
                      <button type="submit" className="li-search-btn"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                </div>
                <div className="li-blog-sidebar pt-25">
                  <h4 className="li-blog-sidebar-title">Danh mục tin tức</h4>
                  <ul className="li-blog-archive">
                    {itemsCate.map((catenews, index) => (
                      <li>
                        <Link to={`/list_newscate/${catenews.id}`} key={index}>
                          <img src={catenews.images} alt="Li's Product Image" width="70px" height="50px" style={{ marginRight: "20px" }} />{catenews.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Li's Blog Sidebar Area End Here */}
            {/* Begin Li's Main Content Area */}
            <div className="col-lg-9 order-lg-2 order-1">
              <div className="row li-main-content">
                <div className="col-lg-12">
                  <div className="li-blog-single-item mb-30">
                    {currentPosts.map((news, index) => (
                      <div className="row" key={index} style={{ marginBottom: "30px" }}>
                        <div className="col-lg-6">
                          <div className="li-blog-banner">
                          <Link to={`detail_blog/${news.id}`} className="name"><img className="img-full" src={news.images} alt="" /></Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="li-blog-content">
                            <div className="li-blog-details">
                              <h3 className="li-blog-heading pt-xs-25 pt-sm-25"><Link to={`detail_blog/${news.id}`} className="name">{news.name}</Link></h3>
                              <div className="li-blog-meta">
                                <a className="author" href="#"><i className="fa fa-user" />Admin</a>
                                <a className="comment" href="#"><i className="fa fa-comment-o" /> 3 comment</a>
                                <a className="post-time" href="#"><i className="fa fa-calendar" /> 25 nov 2018</a>
                              </div>
                              <p>{news.description}</p>
                              <Link to={`detail_blog/${news.id}`} className="name">Chi tiết</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Begin Li's Pagination Area */}
                <div className="col-lg-12">
                  <div className="li-paginatoin-area text-center pt-25">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="li-pagination-box">
                          <li><a className="Previous" href="#">Previous</a></li>
                          <li className="active"><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a className="Next" href="#">Next</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Li's Pagination End Here Area */}
              </div>
            </div>
            {/* Li's Main Content Area End Here */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ListNewsCate
