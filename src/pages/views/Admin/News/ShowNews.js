import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import PaginationNews from '../../../../components/PaginationNews';

const ShowNews = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/news/show")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(setList, []);

  const deleteNews = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/news/delete/" + id)
      .then(function (response) {
        setList();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="table-responsive">
      
      <div className="d-flex justify-content-end mb-2">
        <button type="button" className="btn btn-light">
          <Link to="/admin/add-news">Thêm mới tin tức </Link>
        </button>
      
      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên tin tức </th>
            <th scope="col">Danh mục tin tức</th>
            <th scope="col">Ảnh tin tức</th>
            <th scope="col">Thời gian</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {currentPosts.map((news, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
          <td>{news.name} <br/> Lượt xem: {news.views}</td>
              <td>{news.tendm}</td>
              <td><img src={news.images} alt="" width="180px" height="auto"/></td>
              <td>{news.created_at}</td>
              <td>
                {/* <button href='12' type="button" className="btn btn-success">
                  Sửa
                </button> */}
                <Link to={`news/${news.id}`}>   <button  type="button" className="btn btn-success">
                  Sửa
                </button> </Link>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm("Bạn có chắc chắn muốn xóa tin tức này")
                    ) {
                        deleteNews(news.id);
                    }
                  }}
                  className="btn btn-danger"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationNews
              postsPerPage={postsPerPage}
              totalPosts={items.length}
              paginate={paginate}
            />
    </div>
  );
};

export default ShowNews;
