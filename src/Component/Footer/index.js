import React from "react";

function Footer() {
    return (
        <>
        <footer id="fh5co-footer" role="contentinfo">
          <div class="container">
            <div class="row row-pb-md">
              <div class="col-md-4 fh5co-widget">
                <h3>Medisains Teknobio Indonesia</h3>
                <p>
                  Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
                  reprehenderit. Eos cumque dicta adipisci architecto culpa
                  amet.
                </p>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                <ul class="fh5co-footer-links">
                  <li>
                    <a >About</a>
                  </li>
                 
                  <li>
                    <a >Contact</a>
                  </li>
                  
                 
                </ul>
              </div>

              <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
              <h4>Our Services</h4>
                <ul class="fh5co-footer-links">
                  <li>Product Lines</li>
                  <li>Logistic Capability</li>
                </ul>
              </div>

              {/* <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
              <h4>Product Line</h4>
                <ul class="fh5co-footer-links">
                 
                   <li>Protein and Antibodies</li>
                  <li>SEPAX – HPLC Column</li>
                  <li>Preparation Sample</li>
                  <li>Biotechnology Testing</li>
                  <li>Lab Furniture</li>
                  <li>Covid-19 Support</li>
                  <li>Walk-in cold room, freezer and incubator room</li>
                </ul>
              </div> */}
            </div>

            <div class="row copyright">
              <div class="col-md-12 text-center">
              <p>
          <small>
            Copyright &copy;
            <script>
              document.write(new Date().getFullYear());
            </script>
            All rights MediSains
            </small>
          </p>
                <p>
                  <ul class="fh5co-social-icons">
                    <li>
                      <a >
                        <i class="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a >
                        <i class="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a >
                        <i class="icon-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a >
                        <i class="icon-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}
export default Footer