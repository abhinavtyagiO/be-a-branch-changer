import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MSlider1() {
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
            <img src="../images/Rohan.jpg" alt="" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/Rohan5800">
                <img
                  src="./logos/facebook.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rohan-mishra-aa56291b9">
                <img
                  src="./logos/linkedin.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:rohan_km@ch.iitr.ac.in">
                <img
                  src="./logos/gmail.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-email"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Rohan Mishra{" "}
              <span className="job-title">Polymer Science and Engineering</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img
              src="../images/Yash.jpg"
              alt=""
            />
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://m.facebook.com/yash.bhanushali.779">
                <img
                  src="./logos/facebook.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/">
                <img
                  src="./logos/linkedin.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:yash_b1@ch.iitr.ac.in">
                <img
                  src="./logos/gmail.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-email"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Yash Bhanushali{" "}
              <span className="job-title">Polymer Science and Engineering</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
              <img
                src="../images/Harshit.jpg"
                alt=""
              />
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100005894829572">
                <img
                  src="./logos/facebook.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/harshit-jain-334966199/</li>">
                <img
                  src="./logos/linkedin.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:jainh335@gmail.com">
                <img
                  src="./logos/gmail.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-email"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Harshit Jain <span className="job-title">Computer Science and Engineering</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="../images/Abhinav.jpg" alt="" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/abhinav.tyagi.712161">
                <img
                  src="./logos/facebook.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/abhinav-tyagi-00851719b">
                <img
                  src="./logos/linkedin.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:abhinav_t@pp.iitr.ac.in">
                <img
                  src="./logos/gmail.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <i className="fa fa-email"></i>
              </a>
            </li>
          </ul>
          <div className="details">
            <h2>
              Abhinav Tyagi <span className="job-title">Electronics and Communication Engineering</span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
}