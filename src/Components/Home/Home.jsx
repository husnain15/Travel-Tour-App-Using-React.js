import React,{useEffect} from "react";
import "./home.scss";
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbApps } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

//pakage used to scrool animation
useEffect(() => {
Aos.init({duration:2000})
}, [])


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
          <span data-aos="fade-up"  className="smallText">Our Package</span>
          <h1 data-aos="fade-up" className="homeTitle">Search Your Holidays</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
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
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
          </div>
          <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
