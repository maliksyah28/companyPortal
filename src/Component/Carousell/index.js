import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css"; //Allows for server-side rendering.
import "react-owl-carousel2/lib/OwlCarousel";
import "react-owl-carousel2/lib/OwlCarousel.min.js";

//2.Usage
function Carousel() {
  // const options = {
  //   items: 1,
  //   nav: true,
  //   rewind: true,
  //   autoplay: true,
  // };

  // const events = {
  //   onDragged: function (event) {},
  //   onChanged: function (event) {},
  // };
  return (
    <>
      <OwlCarousel className="owl-carousel owl-theme">
        <div class="item">
          <img src="./img_bg_1.jpg" alt="rencana instalasi" />
        </div>
        <div class="item">
          <img src="./img_bg_2.jpg" alt="rencana instalasi"/>
        </div>
        <div class="item">
          <img src="./img_bg_3.jpg" alt="rencana instalasi" />
        </div>
        <div class="item">
          <img src="./img_bg_4.jpg" alt="rencana instalasi" />
        </div>
      </OwlCarousel>
    </>
  );
}

export default Carousel;
