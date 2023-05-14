import React from "react";
import "../App.css";
import "./HeroSection.css";
import videobg from "../../src/videos/videobg.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={videobg} autoPlay loop muted />
      <h1>PROJECT PORTAL</h1>
      <p>
        This portal belongs to ITC and contains all information about the
        <br /> ongoing ITSP(Institute Technical Summer Projects).{" "}
      </p>
      <h3>Innovate.Tinker.Create</h3>
      <div className="col-md-10">
        {/* <p style={{fontSize: 18}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem ftware like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
        <p className="font">Scroll down to know more </p>
      </div>
    </div>
  );
}

export default HeroSection;
