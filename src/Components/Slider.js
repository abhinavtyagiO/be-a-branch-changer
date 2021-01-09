import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <a href="https://drive.google.com/file/d/1AvBufOPnik44i5inN1Lgi4lmXiDBnpt1/view?usp=sharing" target="_blank">
              {""}
            <img src="../slide images/3.jpg" alt="" />
            </a>
          </div>
          {/* <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
    </ul>*/}
          <div className="details">
            <h2>Tutorial-1</h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
          <a href="../tutorials/tut2.pdf" target="_blank">
            {""}
            <img src="../slide images/1.jpg" alt="" />
            </a>
          </div>

          <div className="details">
            <h2>Tutorial-2</h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="../slide images/2.jpg" alt="" />
          </div>
          {/*<ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>*/}

          {/*<ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>*/}
          <div className="details">
            <h2>Tutorial-3</h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="../slide images/4.jpg" alt="" />
          </div>
          {/* <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>*/}
          <div className="details">
            <h2>
              John Doe <span className="job-title">UI Developer</span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;

//... is called spread operator

//thanks for watching
//pleae subscribe my channel
