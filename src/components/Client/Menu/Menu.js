import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Menu() {

  const [items, setItems] = useState([]);
  const [itemsForm, setItemsForm] = useState({});

  const setListCate = () => {
    axios
      .get("http://127.0.0.1:8000/api/category/show/")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(setListCate, []);

    return (
      <div>
      <nav className="navbar navbar-light navbar-expand-lg"  style={{backgroundColor: '#e3f2fd'}}>
      <div className="container">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link" >Trang chủ</Link>
      </li>
      <li className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Danh mục sản phẩm
          </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {items.map((category, index) => (
            <Link to={`/list_productcate/${category.id}`} key={index} className="dropdown-item" style={{fontSize:"14px"}}>
              <img src={category.images} alt="Li's Product Image" width="150px" height="auto" style={{marginRight:"20px"}}/>
            </Link>
          ))}
        </div>
      </li>
      <li className="nav-item">
        <Link to="/shop" className="nav-link">Cửa hàng</Link>
      </li>
      <li className="nav-item">
        <Link to="/blog" className="nav-link">Tin tức</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">Liên hệ</Link>
      </li>
      <li className="nav-item">
        <Link to="/introduce" className="nav-link">Giới thiệu</Link>
      </li>
    </ul>
  </div>
</div>

      </nav>
    </div>
    
    )
}

export default Menu
