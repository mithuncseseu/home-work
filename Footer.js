const Footer = () => {
  return (
    <footer className="footer-section footer-pading-top">
      <div className="footer__top footer__top-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer__left">
                <div className="footer__img">
                  <img src="img/footerlogo.png" />
                </div>
                <div className="footer__txt">
                  <p>
                    We give value to the excellence and top class engineers, but
                    in terms of accurate service.
                  </p>
                </div>
                <div className="footer_socila-icon">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-skype" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer__right">
                <div className="row">
                  <div className="col-md-4 pad0">
                    <div className="footer__menu-item">
                      <h5>Quick Link</h5>
                      <ul>
                        <li>
                          <a href="">About Us</a>
                        </li>
                        <li>
                          <a href="">Blog & News</a>
                        </li>
                        <li>
                          <a href="">Projects</a>
                        </li>
                        <li>
                          <a href="">Testimonials</a>
                        </li>
                        <li>
                          <a href="">Event</a>
                        </li>
                        <li>
                          <a href="">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 pad0">
                    <div className="footer__menu-item">
                      <h5>Quick Link</h5>
                      <ul>
                        <li>
                          <a className="text-red-r" href="">Membership registration</a>
                        </li>
                        <li>
                          <a className="text-red-r" href="">Membership Login</a>
                        </li>
                        <li>
                          <a href="">Projects</a>
                        </li>
                        <li>
                          <a href="">Testimonials</a>
                        </li>
                        <li>
                          <a href="">Event</a>
                        </li>
                        <li>
                          <a href="">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 pad0">
                    <div className="footer__menu-item">
                      <h5>Contact Info</h5>
                      <ul className="footer_address">
                        <li>
                          <i className="fa fa-forward" aria-hidden="true"></i>
                          <span>
                            House- 15, Road- 02, Block-j, Dhaka Bangladesh
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-forward" aria-hidden="true"></i>
                          <span>Mon - Fri: 8am - 6pm Sat - Sun: 9am - 3pm</span>
                        </li>
                        <li>
                          <i className="fa fa-forward" aria-hidden="true"></i>
                          <span>+880 15 - 28386 </span>
                        </li>
                        <li>
                          <i className="fa fa-forward" aria-hidden="true"></i>
                          <span>info@ctoforum.org</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer_copy">
          <p>Copyright © 2019 Doodle inc. All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
