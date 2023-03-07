import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "./style.css";
import "react-owl-carousel2/lib/OwlCarousel.js";
import "react-owl-carousel2/lib/OwlCarousel.min.js";
import "react-owl-carousel2/src/owl.carousel";
import "react-owl-carousel2/src/owl.theme.default.css";

import "react-owl-carousel2/lib/styles.css"; //Allows for server-side rendering.
function CostumerDone() {
  const options = {
    items: 5,
    autoWidth:true,
    rewind: true,
    autoplay: true,
    loop:true,
    smartSpeed:900
};
  return (
    <>
      <header>
        <h1>Our Costumer</h1>
      </header>
      <div className="logo-section spad">
        <div className="logo-items">
          <OwlCarousel className="owl-carousel logo-item" options={options} >
            {/* <div className="try" > */}
            <div className="item">
              <img src="./images/download.png" alt="" />
            </div>
            <div className="item">
              <img src="./images/index.png" alt="" />
            </div>
            <div className="item">
              <img src="./images/gosowong.png" alt="" />
            </div>
            <div className="item">
              <img src="./images/biofarma-logo.png" alt="" />
            </div>
            <div className="item">
              <img src="./images/qualis-2.png" alt="" />
            </div>
            {/* </div> */}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
export default CostumerDone;
