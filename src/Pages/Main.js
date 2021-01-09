import React from "react";
import TabPanel from "../Components/AppTab";
import "../Components/slide.css";
import Navbar from "../Components/Navbar";

export default function Main() {
  return (
    <div>
    <Navbar />
    <div className="App">
      <TabPanel />
    </div>
    </div>
  );
}
