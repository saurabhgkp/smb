import React from 'react'

const Footer = () => {
  return (
    <div>    <footer class="section " id="footer">
      <div class="overlay footer-overlay"></div>

      <div class="container">
        <div class="row justify-content-start">
          <div class="col-lg-4 col-sm-12">
            <div class="footer-widget">

              <a href="index.html" class="footer-brand text-white">
                Rappo
              </a>
              <p>Each theme featured at the Bootstrap marketplace has been reviewed by Bootstrap's
                creators.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          <div class="col-lg-3 ml-lg-auto col-sm-12">
            <div class="footer-widget">
              <h3>Account</h3>

              <ul class="footer-links ">
                <li>
                  <a href="#!">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a href="#!">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#!">
                    Affiliate services
                  </a>
                </li>
                <li>
                  <a href="#!">
                    Help and support
                  </a>
                </li>
                <li>
                  <a href="#!">
                    Frequently Asked Question
                  </a>
                </li>
              </ul>
            </div>
          </div>


          <div class="col-lg-2 col-sm-6">
            <div class="footer-widget">
              <h3>About</h3>

              <ul class="footer-links">
                <li>
                  <a href="about.html">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="service.html">
                    Services
                  </a>
                </li>
                <li>
                  <a href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="project.html">
                    Recent Projects
                  </a>
                </li>

                <li>
                  <a href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-sm-6">
            <div class="footer-widget">
              <h3>Socials</h3>

              <ul class="list-unstyled footer-links">
                <li><a href="https://www.facebook.com/themefisher"><i
                  class="fab fa-facebook-f"></i>Facebook</a></li>
                <li>
                  <a href="https://www.twitter.com/themefisher"><i class="fab fa-twitter"></i>Twitter
                  </a>
                </li>
                <li><a href="https://www.pinterest.com/themefisher/"><i
                  class="fab fa-pinterest-p"></i>Pinterest
                </a></li>
                <li><a href="https://themefisher.com/"><i class="fab fa-linkedin"></i>linkedin
                </a></li>
                <li><a href="https://www.youtube.com/channel/UCx9qVW8VF0LmTi4OF2F8YdA"><i
                  class="fab fa-youtube"></i>YouTube
                </a></li>
              </ul>
            </div>
          </div>
        </div>


        <div class="row text-right pt-5">
          <div class="col-lg-12">
            <div class="overflow-hidden">

              <p class="footer-copy">
                Copyright &copy;
                <script>var CurrentYear = new Date().getFullYear()
                  document.write(CurrentYear)
                </script>. Designed &amp; Developed by <a class="current-year"
                  href="https://themefisher.com/">Themefisher</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>


      <a id="scroll-to-top" class="scroll-to-top js-scroll-trigger" href="#top-header">
        <i class="fa fa-angle-up"></i>
      </a></div>
  )
}

export default Footer