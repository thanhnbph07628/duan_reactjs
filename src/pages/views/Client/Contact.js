import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>
        axios
            .post("http://127.0.0.1:8000/api/contact/add/", data)
            .then(function (response) {
                window.location.pathname = "/contact";
            })
            .catch(function (error) {
                console.log(error);
            });

    return (

        <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
            <div className="container mb-60">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29799.521996492414!2d105.7996267754958!3d20.99503210505099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac927ce95957%3A0xe230355f8983adb9!2zVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1596900838161!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                        <div className="contact-page-side-content">
                            <h3 className="contact-page-title">Địa chỉ liên hệ</h3>
                            <p className="contact-page-message mb-25">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                            <div className="single-contact-block">
                                <h4><i className="fa fa-fax" /> Address</h4>
                                <p>123 Main Street, Anytown, CA 12345 – USA</p>
                            </div>
                            <div className="single-contact-block">
                                <h4><i className="fa fa-phone" /> Phone</h4>
                                <p>Mobile: (08) 123 456 789</p>
                                <p>Hotline: 1009 678 456</p>
                            </div>
                            <div className="single-contact-block last-child">
                                <h4><i className="fa fa-envelope-o" /> Email</h4>
                                <p>yourmail@domain.com</p>
                                <p>support@hastech.company</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                        <div className="contact-form-content pt-sm-55 pt-xs-55">
                            <h3 className="contact-page-title">Thông tin của bạn</h3>
                            <div className="contact-form">
                                <form id="contact-form" method="post" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Họ Tên <span className="required">*</span></label>
                                        <input type="text" name="name" id="name" ref={register({ required: true, maxLength: 20 })} />
                                        {errors.name && <span style={{ color: "red" }}>Không được trống, không vượt quá 20 ký tự</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Email <span className="required">*</span></label>
                                        <input type="email" name="email" id="email" ref={register({ required: true })} />
                                        {errors.email && <span style={{ color: "red" }}>Không được trống, phải nhập đúng định dạng email</span>}
                                    </div>
                                    <div className="form-group">
                                        <label>Tiêu đề</label>
                                        <input type="text" name="title" id="title" ref={register({ required: true })} />
                                        {errors.title && <span style={{ color: "red" }}>Không được trống</span>}
                                    </div>
                                    <div className="form-group mb-30">
                                        <label>Nội dung</label>
                                        <textarea name="content" id="content" ref={register({ required: true })} />
                                        {errors.content && <span style={{ color: "red" }}>Không được trống</span>}
                                    </div>
                                    <button type="submit" class="btn btn-primary">
                                        Gửi ngay
                                    </button>
                                </form>
                            </div>
                            <p className="form-messege" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
