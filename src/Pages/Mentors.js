import React from "react";
import MSlider1 from "../Components/MSlider1";
import MSlider2 from "../Components/MSlider2";
import MSlider3 from "../Components/MSlider3";
import "../Components/mentor.css";

export default function Mentors() {
  return (
    <div className="App">
      <br />
      <h1 align="center">Contact Mentors</h1>
      <h2>Branch Changers From PSE</h2>
      <br />
      <MSlider1 />
      <br />
      <h2> Branch Changers to Chemical</h2>
      <br />
      <MSlider2 />
      <br />
      <h2>Branch Changers to ECE</h2>
      <br />
      <MSlider3 />
    </div>
  );
}
