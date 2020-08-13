import React from 'react';
import {Link} from "react-router-dom";
import sp1 from '../../../styleClient/img/product/small-size/5.jpg';
import sp2 from '../../../styleClient/img/product/small-size/6.jpg';

const ShoppingCart = () => {
    return (
        <div>
            {/*Shopping Cart Area Strat*/}
<div className="Shopping-cart-area pt-60 pb-60">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <form action="#">
          <div className="table-content table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="li-product-remove">remove</th>
                  <th className="li-product-thumbnail">images</th>
                  <th className="cart-product-name">Product</th>
                  <th className="li-product-price">Unit Price</th>
                  <th className="li-product-quantity">Quantity</th>
                  <th className="li-product-subtotal">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="li-product-remove"><a href="#"><i className="fa fa-times" /></a></td>
                  <td className="li-product-thumbnail"><a href="#"><img src={sp1} alt="Li's Product Image" /></a></td>
                  <td className="li-product-name"><a href="#">Accusantium dolorem1</a></td>
                  <td className="li-product-price"><span className="amount">$46.80</span></td>
                  <td className="quantity">
                    <label>Quantity</label>
                    <div className="cart-plus-minus">
                      <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                      <div className="dec qtybutton"><i className="fa fa-angle-down" /></div>
                      <div className="inc qtybutton"><i className="fa fa-angle-up" /></div>
                    </div>
                  </td>
                  <td className="product-subtotal"><span className="amount">$70.00</span></td>
                </tr>
                <tr>
                  <td className="li-product-remove"><a href="#"><i className="fa fa-times" /></a></td>
                  <td className="li-product-thumbnail"><a href="#"><img src={sp2} alt="Li's Product Image" /></a></td>
                  <td className="li-product-name"><a href="#">Mug Today is a good day</a></td>
                  <td className="li-product-price"><span className="amount">$71.80</span></td>
                  <td className="quantity">
                    <label>Quantity</label>
                    <div className="cart-plus-minus">
                      <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                      <div className="dec qtybutton"><i className="fa fa-angle-down" /></div>
                      <div className="inc qtybutton"><i className="fa fa-angle-up" /></div>
                    </div>
                  </td>
                  <td className="product-subtotal"><span className="amount">$60.50</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="coupon-all">
                <div className="coupon">
                  <input id="coupon_code" className="input-text" name="coupon_code" defaultValue placeholder="Coupon code" type="text" />
                  <input className="button" name="apply_coupon" defaultValue="Apply coupon" type="submit" />
                </div>
                <div className="coupon2">
                  <input className="button" name="update_cart" defaultValue="Update cart" type="submit" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 ml-auto">
              <div className="cart-page-total">
                <h2>Cart totals</h2>
                <ul>
                  <li>Subtotal <span>$130.00</span></li>
                  <li>Total <span>$130.00</span></li>
                </ul>
               <Link to="/checkout"> Proceed to checkout</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
{/*Shopping Cart Area End*/}
        </div>
    )
}

export default ShoppingCart
