import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
        <MenuBar></MenuBar>
          <div className="col-md-6">
            <h1 className="title">
              Welcome Our Music School
            </h1>
            <p className="banner-text text-white text-center mt-3">
            Such an institution can also be known as a school of music  <br /> 
              music academy, music faculty, college of music, music department <br /> conservatory and conservatoire.
            </p>
            <button className="mt-3 about-btn">Read More</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;