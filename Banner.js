import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';

const customStyles = {
  content : {
    
  }
};

const Banner = () => {

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [overlay,stoverlay] = React.useState(false);

  function openModal() {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
    stoverlay(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    document.body.style.overflow = 'unset';
    setIsOpen(false);
    stoverlay(false);
  }

  return (
    <header className="header-top">
      <div>
        
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"

          className="login-modal"
        >
 
          <div className="login-btn-21">
          <h2 className="text-black" ref={_subtitle => (subtitle = _subtitle)}>Login</h2>
          <button className="close-modal-btn" onClick={closeModal}>X</button>
          <div className="registar-form">
              <form >
                <div className="row">
                  <div className="col-md-12 form-control-r">
                    <input
                     
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                
                </div>
                <div className="row">
                  <div className="col-md-12 form-control-r">
                    <input
                     
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                
                </div>
                <div className="row ">
                  <div className="col-md-12 text-center login-r-btn">
                  <button type="submit" className="combtn regbtn">
                      LOGIN
                    </button>
                  </div>
                </div>
               
              </form>
            </div>
          </div>
        </Modal>
      </div>
      <section className="navbar-section">
        <div className="container-fluid container-fluid-custom">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand logo-1" href="#">
              <span>CTO FURUM LOGO</span>
            </a>
            <a className="navbar-brand logo-2" href="#">
              <span>CTO FURUM LOGO</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-auto text-center" id="navbarSupportedContent">
              <ul className="navbar-nav  topnav">

                <li className="nav-item active">
                  <a className="nav-link" href="#about">ABOUT <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#challanges">CHALLANGES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#awards">AWARDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#evenschelule">SCHEDULE </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#processs">PROCESS </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#partners">PARTNERS </a>
                </li>
              </ul>
            </div>
            <div className="right-bar-menu-log">
              <span className="navbar-text">
                <a className="login-now-btn" onClick={openModal}><span>LOGIN</span></a>
                <a className="register-now-btn" href=""><span>REGISTER NOW</span></a>
              </span>
            </div>
          </nav>

          {/* <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand logo-1" href="#">
              <span>CTO FURUM LOGO</span>
            </a>
            <a className="navbar-brand logo-2" href="#">
              <span>CTO FURUM LOGO</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarText">
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  <a className="nav-link" href="#">ABOUT <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CHALLANGES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">AWARDS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">SCHEDULE </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">PROCESS </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">PARTNERS </a>
                </li>
              </ul>
              
            </div>
            <div className="right-bar-menu-log">
            <span className="navbar-text">
                <a className="login-now-btn" href=""><span>LOGIN</span></a>
                <a className="register-now-btn" href=""><span>REGISTER NOW</span></a>
            </span>
            </div>
          </nav> */}
        </div>
      </section>
      <section className="slider-section">
        <div className="slider_content slider_content-slider">
          
          <div className={overlay?"banner_overlay banner_overlay-blur":"banner_overlay"}>
            <div className="item">
              <div className="upcomming ">
                <a className="upcomming_btn" href="">
                  Upcoming New 2021 event
                </a>
              </div>
              <div className="slider-txt text-center">
                <p>Hurryup! Don’t waste time</p>
                <h1 className="text-center">
                  biggest digital <br />
                  event 2021
                </h1>
              </div>
              <div className="icon">
                <div className="icon_left text-right">
                  <img src="/img/glogicon.png" />
                  <span>dhaka, bangladesh</span>
                </div>
                <div className="icon_right">
                  <img src="/img/icon1.png" />
                  <span>January 5 to 9, 2019</span>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 offset-md-8 banner_play area">
                    <div className="play-sub-area">
                      <div className="banner_play_txt">
                        <p> Watch Promo</p>
                        <p>of last innovation hackathon</p>
                      </div>
                      <div className="banner_play_btn">
                        <a href="https://www.youtube.com/watch?v=X5BcTHARlto" target="_blank">
                          <img src="img/btnbg.png" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </header>
  );
};

export default Banner;
