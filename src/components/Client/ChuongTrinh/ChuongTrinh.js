import React from 'react'

function ChuongTrinh() {
    return (
        <div className="promo-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo1">
                <i className="fa fa-refresh" />
                <p>30 ngày đổi trả </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo2">
                <i className="fa fa-truck" />
                <p>Miễn phí vận chuyển</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo3">
                <i className="fa fa-lock" />
                <p>Thanh toán an toàn</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo4">
                <i className="fa fa-gift" />
                <p>Sản phẩm mới</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ChuongTrinh
