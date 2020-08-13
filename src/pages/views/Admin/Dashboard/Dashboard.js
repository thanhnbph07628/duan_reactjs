import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [cateproduct, setCateProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const [catenews, setCateNews] = useState([]);
    const [news, setNews] = useState([]);
    const [contact, setContact] = useState([]);
    // console.log(items)
    const setListCateProduct = () => {
        axios
            .get("http://127.0.0.1:8000/api/category/show/")
            .then(function (response) {
                setCateProduct(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(setListCateProduct, []);

    const setListProduct = () => {
        axios
            .get("http://127.0.0.1:8000/api/products/show/")
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(setListProduct, []);

    const setListCateNews = () => {
        axios
            .get("http://127.0.0.1:8000/api/catenews/show/")
            .then(function (response) {
                setCateNews(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(setListCateNews, []);

    const setListNews = () => {
        axios
            .get("http://127.0.0.1:8000/api/news/show/")
            .then(function (response) {
                setNews(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(setListNews, []);

    
    useEffect(setListCateNews, []);

    const setListContact = () => {
        axios
            .get("http://127.0.0.1:8000/api/contact/show/")
            .then(function (response) {
                setContact(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(setListContact, []);

    return (
        <div>
            <h2>Thông báo</h2>
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <Link className="nav-link" to="/admin/categories">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={{ fontSize: "18px", marginLeft: "15px" }}>Danh mục sản phẩm</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ fontSize: "15px", marginLeft: "15px" }}>Số lượng: {cateproduct.length} danh mục sản phẩm</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <Link className="nav-link" to="/admin/products">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={{ fontSize: "18px", marginLeft: "15px" }}>Sản phẩm</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ fontSize: "15px", marginLeft: "15px" }}>Số lượng: {products.length} sản phẩm</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <Link className="nav-link" to="/admin/catenews">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={{ fontSize: "18px", marginLeft: "15px" }}>Danh mục tin tức</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ fontSize: "15px", marginLeft: "15px" }}>Số lượng: {catenews.length} danh mục tin tức</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <Link className="nav-link" to="/admin/news">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={{ fontSize: "18px", marginLeft: "15px" }}>Tin tức</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ fontSize: "15px", marginLeft: "15px" }}>Số lượng: {news.length} tin tức</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <Link className="nav-link" to="/admin/contact">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={{ fontSize: "18px", marginLeft: "15px" }}>Liên hệ - Phản hồi</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ fontSize: "15px", marginLeft: "15px" }}>Số lượng: {contact.length} liên hệ - phản hồi</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard
