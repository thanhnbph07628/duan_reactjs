import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import {Link} from "react-router-dom";

const DetailBlog = () => {

  let { id } = useParams();
  const [detail, setDetail] = useState({});
  const [itemsCate, setItemsCate] = useState([]);

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
      .get("http://127.0.0.1:8000/api/news/news-detail/" + id)
      .then(function (response) {
        console.log(response)
        setDetail(response.data[0])

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(setList, []);

  return (
    <div className="li-main-blog-page li-main-blog-details-page pt-60 pb-60 pb-sm-45 pb-xs-45">
      <div className="container">
        <div className="row">
          {/* Begin Li's Blog Sidebar Area */}
          <div className="col-lg-3 order-lg-2 order-2">
            <div className="li-blog-sidebar-wrapper">
              <div className="li-blog-sidebar pt-25">
                <h4 className="li-blog-sidebar-title">Danh mục tin tức</h4>
                <ul>
                  {itemsCate.map((category, index) => (
                      <li>
                        <Link to={`/list_newscate/${category.id}`} key={index}>
                        <img src={category.images} alt="Li's Product Image" width="70px" height="50px" style={{marginRight:"20px"}}/>{category.name}
                        </Link>
                      </li>
                  ))}
                  </ul>
              </div>

              <div className="li-blog-sidebar">
                <h4 className="li-blog-sidebar-title">Tags</h4>
                <ul className="li-blog-tags">
                  <li><a href="#">Gaming</a></li>
                  <li><a href="#">Chromebook</a></li>
                  <li><a href="#">Refurbished</a></li>
                  <li><a href="#">Touchscreen</a></li>
                  <li><a href="#">Ultrabooks</a></li>
                  <li><a href="#">Sound Cards</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Li's Blog Sidebar Area End Here */}
          {/* Begin Li's Main Content Area */}
          <div className="col-lg-9 order-lg-1 order-1">
            <div className="row li-main-content">
              <div className="col-lg-12">
                <div className="li-blog-single-item pb-30">
                  <div className="li-blog-banner">
                    <a href="blog-details.html"><img className="img-full" src={detail.images} alt="" width="848px" height="380px" /></a>
                  </div>
                  <div className="li-blog-content">
                    <div className="li-blog-details">
                      <h3 className="li-blog-heading pt-25"><a href="#">{detail.name}</a></h3>
                      <div className="li-blog-meta">
                        <a className="author" href="#"><i className="fa fa-user" />Admin</a>
                        <a className="comment" href="#"><i className="fa fa-comment-o" /> 3 comment</a>
                        <a className="post-time" href="#"><i className="fa fa-calendar" /> 25 nov 2018</a>
                      </div>
                      <p>{parse(String(detail.detail))}</p>
                      <div className="li-blog-sharing text-center pt-30">
                        <h4>share this post:</h4>
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-pinterest" /></a>
                        <a href="#"><i className="fa fa-google-plus" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Begin Li's Blog Comment Section */}
                <div className="li-comment-section">
                  <h3>03 comment</h3>
                  <ul>
                    <li>
                      <div className="author-avatar pt-15">
                        <img src="images/product-details/user.png" alt="User" />
                      </div>
                      <div className="comment-body pl-15">
                        <span className="reply-btn pt-15 pt-xs-5"><a href="#">reply</a></span>
                        <h5 className="comment-author pt-15">admin</h5>
                        <div className="comment-post-date">
                          20 nov, 2018 at 9:30pm
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                      </div>
                    </li>
                    <li className="comment-children">
                      <div className="author-avatar pt-15">
                        <img src="images/product-details/admin.png" alt="Admin" />
                      </div>
                      <div className="comment-body pl-15">
                        <span className="reply-btn pt-15 pt-xs-5"><a href="#">reply</a></span>
                        <h5 className="comment-author pt-15">admin</h5>
                        <div className="comment-post-date">
                          20 nov, 2018 at 9:30pm
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                      </div>
                    </li>
                    <li>
                      <div className="author-avatar pt-15">
                        <img src="images/product-details/admin.png" alt="Admin" />
                      </div>
                      <div className="comment-body pl-15">
                        <span className="reply-btn pt-15 pt-xs-5"><a href="#">reply</a></span>
                        <h5 className="comment-author pt-15">admin</h5>
                        <div className="comment-post-date">
                          20 nov, 2018 at 9:30pm
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Li's Blog Comment Section End Here */}
                {/* Begin Blog comment Box Area */}
                <div className="li-blog-comment-wrapper">
                  <h3>leave a reply</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <form action="#">
                    <div className="comment-post-box">
                      <div className="row">
                        <div className="col-lg-12">
                          <label>comment</label>
                          <textarea name="commnet" placeholder="Write a comment" defaultValue={""} />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 mt-5 mb-sm-20 mb-xs-20">
                          <label>Name</label>
                          <input type="text" className="coment-field" placeholder="Name" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 mt-5 mb-sm-20 mb-xs-20">
                          <label>Email</label>
                          <input type="text" className="coment-field" placeholder="Email" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 mt-5 mb-sm-20">
                          <label>Website</label>
                          <input type="text" className="coment-field" placeholder="Website" />
                        </div>
                        <div className="col-lg-12">
                          <div className="coment-btn pt-30 pb-xs-30 pb-sm-30 f-left">
                            <input className="li-btn-2" type="submit" name="submit" defaultValue="post comment" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Blog comment Box Area End Here */}
              </div>
            </div>
          </div>
          {/* Li's Main Content Area End Here */}
        </div>
      </div>
    </div>

  )
}

export default DetailBlog
