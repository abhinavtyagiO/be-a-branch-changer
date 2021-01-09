import React from "react";
import MSlider1 from "../Components/MSlider1";
import MSlider2 from "../Components/MSlider2";
import MSlider3 from "../Components/MSlider3";
import "../Components/mentor.css";
import Navbar from "../Components/Navbar";
import "../Components/slide.css";

export default function Mentors() {
  return (
    <div>
    <Navbar />
    <div className="complete">
      <h1 align="center">Contact Mentors</h1><br></br><br></br><br></br>
      <h2 className="topics">Branch Changers From PSE</h2>
      <MSlider1 />
      <br /><br></br>
      <h2 className="topics"> Branch Changers to Chemical</h2>
      <MSlider2 />
      <br /><br></br>
      <h2 className="topics">Branch Changers to ECE</h2>
      <MSlider3 />
    </div>
    </div>
  );
}
