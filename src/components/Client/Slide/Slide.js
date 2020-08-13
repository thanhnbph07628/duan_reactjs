import React from "react";
import img4 from "../../../styleClient/img/h4-slide4.png";
import img3 from "../../../styleClient/img/h4-slide3.png";
import img2 from "../../../styleClient/img/h4-slide2.png";
import img from "../../../styleClient/img/h4-slide.png";

function Slide() {
  return (
    <div className="slider-area">
      <div className="block-slider block-slider4">
        <div className="bx-wrapper" style={{ maxWidth: "100%" }}>
          <div
            className="bx-viewport"
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              height: "378px",
            }}
          >
            <ul
              className
              id="bxslider-home4"
              style={{
                width: "615%",
                position: "relative",
                transitionDuration: "0s",
                transform: "translate3d(-1246px, 0px, 0px)",
              }}
            >
              <li
                style={{
                  float: "left",
                  listStyle: "none",
                  position: "relative",
                  width: "1206px",
                }}
                className="bx-clone"
              >
                <img src={img2} alt="Slide" />
                <div className="caption-group">
                  <h2 className="caption title animated fadeInRight" 
                  style={{ display: "block" }}
                  >
                    Apple{" "}
                    <span className="primary">
                      Store <strong>Ipod</strong>
                    </span>
                  </h2>
                  <h4 className="caption subtitle animated fadeInRight">
                    &amp; Phone
                  </h4>
                  <a
                    className="caption button-radius animated fadeInRight"
                    href="#"
                  >
                    <span className="icon" />
                    Shop now
                  </a>
                </div>
              </li>
              <li
                style={{
                  float: "left",
                  listStyle: "none",
                  position: "relative",
                  width: "1206px",
                }}
              >
                <img src={img4} alt="Slide" />
                <div className="caption-group">
                  <h2
                    className="caption title animated fadeInRight"
                    style={{ display: "block" }}
                  >
                    by one, get one{" "}
                    <span className="primary">
                      50% <strong>off</strong>
                    </span>
                  </h2>
                  <h4
                    className="caption subtitle animated fadeInRight"
                    style={{ display: "block" }}
                  >
                    school supplies &amp; backpacks.*
                  </h4>
                  <a
                    className="caption button-radius animated fadeInRight"
                    href="#"
                    style={{ display: "inline-block" }}
                  >
                    <span className="icon" />
                    Shop now
                  </a>
                </div>
              </li>
              <li
                style={{
                  float: "left",
                  listStyle: "none",
                  position: "relative",
                  width: "1206px",
                }}
              >
                <img src={img3} alt="Slide" />
                <div className="caption-group">
                  <h2
                    className="caption title animated fadeInRight"
                    style={{ display: "block" }}
                  >
                    Apple{" "}
                    <span className="primary">
                      Store <strong>Ipod</strong>
                    </span>
                  </h2>
                  <h4
                    className="caption subtitle animated fadeInRight"
                    style={{ display: "block" }}
                  >
                    Select Item
                  </h4>
                  <a
                    className="caption button-radius animated fadeInRight"
                    href="#"
                    style={{ display: "inline-block" }}
                  >
                    <span className="icon" />
                    Shop now
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
