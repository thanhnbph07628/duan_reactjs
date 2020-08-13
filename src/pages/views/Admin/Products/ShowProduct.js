import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import PaginationProducts from '../../../../components/PaginationProducts';

const ShowProducts = () => {
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
      .get("http://127.0.0.1:8000/api/products/show")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(setList, []);

  const deleteProduct = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/products/delete/" + id)
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
          <Link to="/admin/add-product">Thêm mới sản phẩm </Link>
        </button>
      
      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên sản phẩm </th>
            <th scope="col">Danh mục</th>
            <th scope="col">Ảnh sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Thời gian</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {currentPosts.map((product, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
          <td>{product.name} <br/> Lượt xem: {product.views}</td>
              <td>{product.tendm}</td>
              <td><img src={product.images} alt="" width="120px" height="auto"/></td>
              <td>
                Giá gốc: {product.price} VNĐ<br/>
                Giá khuyến mãi: {product.sale} VNĐ<br/>
                Số lượng: {product.amount} sản phẩm
              </td>
              <td>{product.created_at}</td>
              <td>
                <Link to={`product/${product.id}`}>
                <button  type="button" className="btn btn-success">
                  Sửa
                </button>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này")
                    ) {
                      deleteProduct(product.id);
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
      <PaginationProducts
              postsPerPage={postsPerPage}
              totalPosts={items.length}
              paginate={paginate}
            />
    </div>
  );
};

export default ShowProducts;
