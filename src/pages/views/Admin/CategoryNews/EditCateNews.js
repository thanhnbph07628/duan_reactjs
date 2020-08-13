import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const EditCateNews = () => {
  let { id } = useParams();
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const [detail, setDetail] = useState({});
  const [items, setItems] = useState([]);
  const [itemsForm, setItemsForm] = useState({});
  const [image, setImage] = useState('');
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

  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/catenews/edit/" + id)
      .then(function (response) {
        console.log(response)
        setDetail(response.data[0])
        console.log(detail)
        setValue('name', response.data[0].name, {
          shouldValidate: true,
          shouldDirty: true
        })
        setImage(response.data[0].images)
        setValue('description', response.data[0].description, {
          shouldValidate: true,
          shouldDirty: true
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(setList, []);

  const onSubmit = (data) =>
    axios
      .post("http://127.0.0.1:8000/api/catenews/update/" + id, data)
      .then(function (response) {
        window.location.pathname = "/admin/catenews";
      })
      .catch(function (error) {
        console.log(error);
      });

  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên Danh Mục</label>
          <input type="text" className="form-control" name="name" ref={register({ required: true, maxLength: 20, pattern:/^[A-Za-z0-9]/ })}/>
          {errors.name && <span style={{ color: "red" }}>Không được trống, không chứa ký tự đặc biệt, không vượt quá 20 ký tự</span>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"> Ảnh Sản Phẩm</label><br />
          <img src={image} alt="" width="200px" /><br />
          <input type="hidden" value={image} name="images" ref={register({ required: true })}/>
          <input
            type="file"
            className="form-control"
            onChange={uploadImage}
          />
          {errors.images && <span style={{ color: "red" }}> Ảnh không được trống</span>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mô tả danh mục</label>
          <input type="text" className="form-control" name="description" ref={register({ required: true, minLength: 10, pattern:/^[A-Za-z0-9]/ })}/>
          {errors.description && <span style={{ color: "red" }}>Không được trống, không chứa ký tự đặc biệt, phải lớn hơn 10 kí tự</span>}
        </div>
      </div>
      <div style={{ marginLeft: "100px" }}>
        <button
          type="submit"
          // onClick={() => addCategory()}
          class="btn btn-primary" 
        >
         Cập nhật danh mục
        </button>
      </div>
    </div>
  </form>
  );
};

export default EditCateNews;
