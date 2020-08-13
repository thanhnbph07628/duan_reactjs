import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PaginationCateProduct from '../../../../components/PaginationCateProduct';

const ShowCategories = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/category/show/")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(setList, []);

  const deleteCategory = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/category/delete/" + id)
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
          <Link to="/admin/add-category">Thêm mới danh mục sản phẩm </Link>
        </button>

      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên danh mục </th>
            <th scope="col">Ảnh danh mục</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Số lượng sản phẩm</th>
            <th scope="col">Thời gian</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {currentPosts.map((category, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{category.name}</td>
              <td><img src={category.images} width="150px" height="auto" /></td>
              <td><details><summary>Nội dung mô tả</summary>{category.description}</details></td>
              <td>{category.slsp}</td>
              <td>{category.created_at}</td>
              <td>

                <Link to={`category/${category.id}`}><button type="button" className="btn btn-success">
                  Sửa
                </button> </Link>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm("Bạn có chắc chắn muốn xóa danh mục này")
                    ) {
                      deleteCategory(category.id);
                    }
                  }}
                  className="btn btn-danger">
                  Xóa
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationCateProduct
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ShowCategories;
