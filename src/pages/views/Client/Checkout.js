import React from "react";

const Checkout = () => {
  return (
    <div>
      {/*Checkout Area Strat*/}
      <div className="checkout-area pt-60 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="coupon-accordion">
                {/*Accordion Start*/}
                <h3>
                  Phản hồi của bạn?{" "}
                  <span id="showlogin">Nhấn vào đây để đăng nhập</span>
                </h3>
                <div id="checkout-login" className="coupon-content">
                  <div className="coupon-info">
                    <p className="coupon-text">
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                      Cras sed est sit amet ipsum luctus.
                    </p>
                    <form action="#">
                      <p className="form-row-first">
                        <label>
                          Username or email <span className="required">*</span>
                        </label>
                        <input type="text" />
                      </p>
                      <p className="form-row-last">
                        <label>
                          Password <span className="required">*</span>
                        </label>
                        <input type="text" />
                      </p>
                      <p className="form-row">
                        <input defaultValue="Login" type="submit" />
                        <label>
                          <input type="checkbox" />
                          Remember me
                        </label>
                      </p>
                      <p className="lost-password">
                        <a href="#">Lost your password?</a>
                      </p>
                    </form>
                  </div>
                </div>
                {/*Accordion End*/}
                {/*Accordion Start*/}
                <h3>
                  Có phiếu giảm giá?{" "}
                  <span id="showcoupon">Nhấn vào đây để nhập mã của bạn</span>
                </h3>
                <div id="checkout_coupon" className="coupon-checkout-content">
                  <div className="coupon-info">
                    <form action="#">
                      <p className="checkout-coupon">
                        <input placeholder="Coupon code" type="text" />
                        <input defaultValue="Apply Coupon" type="submit" />
                      </p>
                    </form>
                  </div>
                </div>
                {/*Accordion End*/}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <form action="#">
                <div className="checkbox-form">
                  <h3>Chi tiết thanh toán</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select clearfix">
                        <label>
                          Thành phố <span className="required">*</span>
                        </label>
                        <select className="nice-select wide">
                          <option data-display="Bangladesh">Hà Nội</option>
                          <option value="uk">Hồ Chí Minh</option>
                          <option value="rou">Bắc Giang</option>
                          <option value="fr">Dak Lak</option>
                          <option value="de">Vũng Tàu</option>
                          <option value="aus">Thái Bình</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Tên <span className="required">*</span>
                        </label>
                        <input placeholder type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Họ <span className="required">*</span>
                        </label>
                        <input placeholder type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Địa chỉ <span className="required">*</span>
                        </label>
                        <input placeholder="Street address" type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <input
                          placeholder="Apartment, suite, unit etc. (optional)"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Thị trấn / Thành phố{" "}
                          <span className="required">*</span>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Quận / Huyện <span className="required">*</span>
                        </label>
                        <input placeholder type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Mã bưu điện / Zip <span className="required">*</span>
                        </label>
                        <input placeholder type="text" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Địa chỉ Email<span className="required">*</span>
                        </label>
                        <input placeholder type="email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Số điện thoại <span className="required">*</span>
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list create-acc">
                        <input id="cbox" type="checkbox" />
                        <label>Tạo một tài khoản?</label>
                      </div>
                      <div
                        id="cbox-info"
                        className="checkout-form-list create-account"
                      >
                        <p>
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <label>
                          Account password <span className="required">*</span>
                        </label>
                        <input placeholder="password" type="password" />
                      </div>
                    </div>
                  </div>
                  <div className="different-address">
                    <div id="ship-box-info" className="row">
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input placeholder type="email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Ghi chú đặt hàng</label>
                        <textarea
                          id="checkout-mess"
                          cols={30}
                          rows={10}
                          placeholder="Ghi chú về đơn đặt hàng của bạn."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-12">
              <div className="your-order">
                <h3>Đơn đặt hàng của bạn</h3>
                <div className="your-order-table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="cart-product-name">Sản phẩm</th>
                        <th className="cart-product-total">Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="cart-product-name">
                          {" "}
                          Vestibulum suscipit
                          <strong className="product-quantity"> × 1</strong>
                        </td>
                        <td className="cart-product-total">
                          <span className="amount">£165.00</span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="cart-product-name">
                          {" "}
                          Vestibulum suscipit
                          <strong className="product-quantity"> × 1</strong>
                        </td>
                        <td className="cart-product-total">
                          <span className="amount">£165.00</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td>
                          <span className="amount">£215.00</span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td>
                          <strong>
                            <span className="amount">£215.00</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="payment-method">
                  <div className="payment-accordion">
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header" id="#payment-1">
                          <h5 className="panel-title">
                            <a
                              className
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Direct Bank Transfer.
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="#payment-2">
                          <h5 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Cheque Payment
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="#payment-3">
                          <h5 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              PayPal
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order won’t be shipped until the funds have
                              cleared in our account.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment">
                      <input defaultValue="Place order" type="submit" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Checkout Area End*/}
    </div>
  );
};

export default Checkout;
