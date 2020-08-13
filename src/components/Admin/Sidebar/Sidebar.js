import React from 'react';
import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
      <div>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{width:"500px"}}>
          {/* Sidebar - Brand */}
          <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
            <span>Admin</span> 
              </div>
              </Link>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item">
              <Link className="nav-link" to="/admin">Thông báo</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/admin/categories">Danh mục sản phẩm</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/admin/products">Sản phẩm</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/admin/catenews">Danh mục tin tức</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/admin/news">Tin tức</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/admin/contact">Liên hệ - Phản hồi</Link>
          </li>
        </ul>
              </div>
    )
}

export default Sidebar;
