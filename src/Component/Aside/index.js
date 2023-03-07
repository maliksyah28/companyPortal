import React from "react";
// import Carousel from "../Carousell";
import OwlCarousel from "react-owl-carousel2";
function Aside() {
  return (
    <>
      <aside id="fh5co-hero" className="js-fullheight">
        <div className="js-fullheight">
        {/* <ul className="slides"> */}
        <OwlCarousel className="owl-theme" loop>
          <div
            style={{ backgroundImage: "url(/img_bg_1.jpg)" }}
            // className="flex-active-slide tes"
          >
            <div className="overlay-gradient"></div>
            <div className="container:before">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <span className="price">$800</span>
                    <h2>Alato Cabinet</h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url(/img_bg_2.jpg)" }}
            // className="flex-active-slide tes"
          >
            <div className="overlay-gradient"></div>
            <div className="container:before">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <span className="price">$530</span>
                    <h2>The Haluz Rocking Chair</h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url(/img_bg_3.jpg)" }}
            // className="flex-active-slide tes"
          >
            <div className="overlay-gradient"></div>
            <div className="container::before">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <span className="price">$750</span>
                    <h2>Alato Cabinet</h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: "url(/img_bg_4.jpg)" }}
            // className="flex-active-slide tes"
          >
            <div className="overlay-gradient"></div>
            <div className="container::before">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 js-fullheight slider-text animated fadeInUp">
                <div className="slider-text-inner">
                  <div className="desc">
                    <span className="price">$540</span>
                    <h2>The WW Chair</h2>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </OwlCarousel>
        {/* </ul> */}
        <ol class="flex-control-nav flex-control-paging">
          <li>
            <a href="#" class="">
              1
            </a>
          </li>
          <li>
            <a href="#" class="">
              2
            </a>
          </li>
          <li>
            <a href="#" class="flex-active">
              3
            </a>
          </li>
          <li>
            <a href="#" class="">
              4
            </a>
          </li>
        </ol>
        <ul class="flex-direction-nav">
          <li class="flex-nav-prev">
            <a class="flex-prev" href="#">
              Previous
            </a>
          </li>
          <li class="flex-nav-next">
            <a class="flex-next" href="#">
              Next
            </a>
          </li>
        </ul>
        </div>
      
      </aside>
     
    </>
  );
}
export default Aside;
