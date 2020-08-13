import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../styleClient/img/menu/logo/2.jpg";
import english from "../../../styleClient/img/menu/flag-icon/1.jpg";
import français from "../../../styleClient/img/menu/flag-icon/2.jpg";
import shoppingcart1 from "../../../styleClient/img/product/small-size/1.jpg";
import shoppingcart2 from "../../../styleClient/img/product/small-size/2.jpg";

function Header() {
  return (
    <div>
      <header className="li-header-4">
        {/* Begin Header Top Area */}
        <div className="header-top">
          <div className="container">
            <div className="row">
              {/* Begin Header Top Left Area */}
              <div className="col-lg-3 col-md-4">
                <div className="header-top-left">
                  <ul className="phone-wrap">
                    <li>
                      <span>Telephone Enquiry:</span>
                      <a href="#">(+123) 123 321 345</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Header Top Left Area End Here */}
              {/* Begin Header Top Right Area */}
              <div className="col-lg-9 col-md-8">
                <div className="header-top-right">
                  <ul className="ht-menu">
                    {/* Begin Setting Area */}
                    <li>
                      <div className="ht-setting-trigger">
                        <span>Setting</span>
                      </div>
                      <div className="setting ht-setting">
                        <ul className="ht-setting-list">
                          <li>
                            <a href="login-register.html">My Account</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="login-register.html">Sign In</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Setting Area End Here */}
                    {/* Begin Currency Area */}
                    <li>
                      <span className="currency-selector-wrapper">
                        Currency :
                      </span>
                      <div className="ht-currency-trigger">
                        <span>USD $</span>
                      </div>
                      <div className="currency ht-currency">
                        <ul className="ht-setting-list">
                          <li>
                            <a href="#">EUR €</a>
                          </li>
                          <li className="active">
                            <a href="#">USD $</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Currency Area End Here */}
                    {/* Begin Language Area */}
                    <li>
                      <span className="language-selector-wrapper">
                        Language :
                      </span>
                      <div className="ht-language-trigger">
                        <span>English</span>
                      </div>
                      <div className="language ht-language">
                        <ul className="ht-setting-list">
                          <li className="active">
                            <a href="#">
                              <img src={english} alt />
                              English
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src={français} alt />
                              Français
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                    <span className="language-selector-wrapper">
                    <Link to="/admin">
                    <span>Quản trị web</span>
                  </Link>
                      </span>
                    </li>
                    {/* Language Area End Here */}
                  </ul>
                </div>
              </div>
              {/* Header Top Right Area End Here */}
            </div>
          </div>
        </div>
        {/* Header Top Area End Here */}
        {/* Begin Header Middle Area */}
        <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
          <div className="container">
            <div className="row">
              {/* Begin Header Logo Area */}
              <div className="col-lg-3">
                <div className="logo pb-sm-30 pb-xs-30">
                  <Link to="/">
                    <img src={logo} alt />
                  </Link>
                </div>
              </div>
              {/* Header Logo Area End Here */}
              {/* Begin Header Middle Right Area */}
              <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                {/* Begin Header Middle Searchbox Area */}
                <form action="#" className="hm-searchbox">
                  <input type="text" placeholder="Enter your search key ..." />
                  <button className="li-btn" type="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
                {/* Header Middle Searchbox Area End Here */}
                {/* Begin Header Middle Right Area */}
                <div className="header-middle-right">
                  <ul className="hm-menu">
                    {/* Begin Header Middle Wishlist Area */}
                    <li className="hm-wishlist">
                      <a href="wishlist.html">
                        <span className="cart-item-count wishlist-item-count">
                          0
                        </span>
                        <i className="fa fa-heart-o" />
                      </a>
                    </li>
                    {/* Header Middle Wishlist Area End Here */}
                    {/* Begin Header Mini Cart Area */}
                    <li className="hm-minicart">
                      <Link to="/shopping_cart">
                        <div className="hm-minicart-trigger">
                          <span className="item-icon" />
                          <span className="item-text">
                            £80.00
                            <span className="cart-item-count">2</span>
                          </span>
                        </div>
                      </Link>
                      <span />
                      <div className="minicart">
                        <ul className="minicart-product-list">
                          <li>
                            <a
                              href="single-product.html"
                              className="minicart-product-image"
                            >
                              <img src={shoppingcart1} alt="cart products" />
                            </a>
                            <div className="minicart-product-details">
                              <h6>
                                <a href="single-product.html">
                                  Aenean eu tristique
                                </a>
                              </h6>
                              <span>£40 x 1</span>
                            </div>
                            <button className="close">
                              <i className="fa fa-close" />
                            </button>
                          </li>
                          <li>
                            <a
                              href="single-product.html"
                              className="minicart-product-image"
                            >
                              <img src={shoppingcart2} alt="cart products" />
                            </a>
                            <div className="minicart-product-details">
                              <h6>
                                <a href="single-product.html">
                                  Aenean eu tristique
                                </a>
                              </h6>
                              <span>£40 x 1</span>
                            </div>
                            <button className="close">
                              <i className="fa fa-close" />
                            </button>
                          </li>
                        </ul>
                        <p className="minicart-total">
                          SUBTOTAL: <span>£80.00</span>
                        </p>
                        <div className="minicart-button">
                          <a
                            href="checkout.html"
                            className="li-button li-button-dark li-button-fullwidth li-button-sm"
                          >
                            <span>View Full Cart</span>
                          </a>
                          <a
                            href="checkout.html"
                            className="li-button li-button-fullwidth li-button-sm"
                          >
                            <span>Checkout</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* Header Mini Cart Area End Here */}
                  </ul>
                </div>
                {/* Header Middle Right Area End Here */}
              </div>
              {/* Header Middle Right Area End Here */}
            </div>
          </div>
        </div>
        {/* Header Middle Area End Here */}
        {/* Begin Header Bottom Area */}

        {/* Header Bottom Area End Here */}
        {/* Begin Mobile Menu Area */}
        <div className="mobile-menu-area mobile-menu-area-4 d-lg-none d-xl-none col-12">
          <div className="container">
            <div className="row">
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
        {/* Mobile Menu Area End Here */}
      </header>
    </div>
  );
}

export default Header;
