import React,{useEffect} from 'react'
import "./footer.scss"
import video from "../../assets/video.mp4";
import {FiChevronRight, FiSend} from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration:2000})
    }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} muted
        autoPlay
        loop
        type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCJ</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
             Send <FiSend className="icon"/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>Travel. 
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ipsam illum ipsa expedita amet illo animi dolore aut perferendis? Laudantium adipisci neque quisquam harum qui voluptas quae illo. Nesciunt, velit.
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
 <div data-aos="fade-up" className="linkGroup">
  <span className="groupTitle">
    Our Agency
  </span>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Services
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Insurance
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Agency
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Tourism
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Payment
  </li>
 </div>
 {/* Group two */}
 <div data-aos="fade-up" className="linkGroup">
  <span className="groupTitle">
    Partners
  </span>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Booking
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>RentCars
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Hostel World
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Trivigo
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Trip Advisor
  </li>
 </div>

 {/* group three */}

 <div data-aos="fade-up" className="linkGroup">
  <span className="groupTitle">
    Last Minute
  </span>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>London
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>California
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Indonesia
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Europe
  </li>
  <li className="footerList flex">
    <FiChevronRight className='icon'/>Ocenia
  </li>
 </div>
          </div>
          <div className="footerDiv">
            <small>Best Travel Websites</small>
            <small>COPYRIGHT RESERVED - ISRATECH 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer