import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddProduct = () => {
  const [image, setImage] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();
  const [items, setItems] = useState([]);
  const [itemsForm, setItemsForm] = useState({});
  const [content, setContent] = useState('');
  let categoryDetail = 0;
  const uploadImage = e => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "reactjs");
    formData.append("file", files);
    axios
      .post("https://api.cloudinary.com/v1_1/dcjlyngwp/image/upload", formData)
      .then(res => setImage(res.data.secure_url))
      .catch(err => console.log(err));
  }
  const onSubmit = data =>
    axios
      .post("http://127.0.0.1:8000/api/products/add/", data)
      .then(function (response) {
        window.location.pathname = "/admin/products";
      })
      .catch(function (error) {
        console.log(error);
      });

  let htmlCategory = '<option value ="0">Chưa có danh mục</option>'
  const setListCate = () => {
    axios
      .get("http://127.0.0.1:8000/api/category/show/")
      .then(function (response) {
        setItems(response.data);
        response.data.map(
          (item, index) =>
            (htmlCategory += `<option ${
              item.id == categoryDetail ? "selected" : ""
              }  value =${item.id}>${item.name}</option>`)
        );
        document.getElementById("iddm").innerHTML = htmlCategory;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setListCate, []);

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

  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Danh mục</label>
            <select className="form-control" id="iddm" name="iddm" ref={register}>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
            <input type="text" className="form-control" name="name" ref={register({ required: true, maxLength: 100, pattern: /^[A-Za-z0-9]/ })} />
            {errors.name && <span style={{ color: "red" }}>Không được trống, không chứa ký tự đặc biệt, không vượt quá 100 ký tự</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"> Ảnh Sản Phẩm</label><br />
            <img src={image} alt="" width="200px" /><br />
            <input type="hidden" value={image} name="images" ref={register({ required: true })} />
            <input
              type="file"
              className="form-control"
              onChange={uploadImage}
            />
            {errors.images && <span style={{ color: "red" }}> Ảnh không được trống</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Giá sản phẩm</label>
            <input type="number" min={0} className="form-control" name="price" ref={register({ required: true })} />
            {errors.price && <span style={{ color: "red" }}>Giá không được để trống</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Giá khuyến mãi</label>
            <input type="number" min={0} className="form-control" name="sale" ref={register({ required: true })} />
            {errors.sale && <span style={{ color: "red" }}>Giá không được để trống</span>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Số Lượng</label>
            <input type="number" className="form-control" name="amount" ref={register({ required: true })} />
            {errors.amount && <span style={{ color: "red" }}>Số lượng không được để trống</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mô tả sản phẩm</label>
            <input type="text" className="form-control" name="description" ref={register({ required: true, minLength: 10, pattern: /^[A-Za-z0-9]/ })} />
            {errors.description && <span style={{ color: "red" }}>Không được trống, không chứa ký tự đặc biệt, phải lớn hơn 10 kí tự</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Chi tiết sản phẩm</label>
            <input type="hidden" className="form-control" name="detail" value={content} ref={register({ required: true, minLength: 10 })} />
            <CKEditor
              editor={ClassicEditor}
              data=""
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
                console.log(content);
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
            {errors.detail && <span style={{ color: "red" }}>Không được trống, phải lớn hơn 10 kí tự</span>}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            // onClick={() => addSanPham()}
            class="btn btn-primary"
          >
            Thêm mới sản phẩm
        </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
