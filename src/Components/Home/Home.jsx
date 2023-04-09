import React from "react";
import "./home.scss";
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video
        className="videoTemp"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      ></video>

      <div className="home-content container">
        <div className="textDiv">
          <span className="smallText">Our Package</span>
          <h1 className="homeTitle">Search Your Holidays</h1>
        </div>
        <div className="cardDiv">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination</label>
            <div className="input flex">
              <input type="text" placeholder="Enter Your Name here..." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="city">Select Your date:</label>
            <div className="input flex">
              <input type="date" placeholder="Enter Your Name here..." />
            </div>
          </div>
          <div className="priceInput">
            <div className="labe_total flex">
              <label htmlFor="prive">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

<div className="searchOptions flex">
  <HiFilter className="icon"/>
  <span>More Filters</span>
</div>

        </div>
      </div>
    </section>
  );
};

export default Home;
