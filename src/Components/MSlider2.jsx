import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MSlider2() {
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
            <img src="./profilPic/Rohan.jpg" alt="" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/">
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
              <a href="https:www.gmail.com">
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
              src="./profilPic/Yash Bhanushali.jpg"
              alt=""
            />
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/">
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
              <a href="https:www.gmail.com">
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
            <a href="https://www.google.com/search?q=cars&rlz=1C1JZAP_enIN927IN928&sxsrf=ALeKk005DPkkJmrBQWSy7QlXVVvtbH60_w:1610166792852&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjp193dgo7uAhVWU30KHQwoA_cQ_AUoAXoECAUQAw&biw=1280&bih=610">
              <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d3703e2f1176b00089761a6%2F960x0.jpg%3FcropX1%3D836%26cropX2%3D5396%26cropY1%3D799%26cropY2%3D3364&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fjimgorzelany%2F2019%2F07%2F23%2Fhere-are-the-coolest-new-cars-for-2020%2F&tbnid=2HR6gA81oIwMTM&vet=12ahUKEwipg_Pego7uAhWqoUsFHbQbATQQMygAegUIARDOAQ..i&docid=HZLLyFhoQjvNCM&w=960&h=540&q=cars&ved=2ahUKEwipg_Pego7uAhWqoUsFHbQbATQQMygAegUIARDOAQ"
                alt=""
              />
            </a>
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/">
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
              <a href="https:www.gmail.com">
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
              Name <span className="job-title">Branch</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="./images/4.jpg" alt="" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/">
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
              <a href="https:www.gmail.com">
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
              Name <span className="job-title">Branch</span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
}