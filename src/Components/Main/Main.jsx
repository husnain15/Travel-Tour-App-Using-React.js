import React,{useEffect} from 'react'
import "./main.scss"
import hmg1 from "../../assets/img/img1.jpg";
import hmg2 from "../../assets/img/img2.jpg"
import hmg3 from "../../assets/img/img3.jpg"
import hmg4 from "../../assets/img/img4.jpg"
import hmg5 from "../../assets/img/img3.jpg"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data=[
  {
    id:1,
    imgsrc:hmg1,
    destitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"The epitome of roamnce of that stucture that follow the part of the stucture and the beliving of that romace place of the new York because every year most the couple should be celebrate the couple of nights that spend here and enjoy the part of the stucture"
  },
  {
    id:2,
    imgsrc:hmg2,
    destitle:"Second Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$300",
    description:"The epitome of roamnce of that stucture that follow the part of the stucture and the beliving of that romace place of the new York because every year most the couple should be celebrate the couple of nights that spend here and enjoy the part of the stucture"
  },
  {
    id:3,
    imgsrc:hmg3,
    destitle:"Second Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$800",
    description:"The epitome of roamnce of that stucture that follow the part of the stucture and the beliving of that romace place of the new York because every year most the couple should be celebrate the couple of nights that spend here and enjoy the part of the stucture"
  },
  {
    id:4,
    imgsrc:hmg4,
    destitle:"Second Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$900",
    description:"The epitome of roamnce of that stucture that follow the part of the stucture and the beliving of that romace place of the new York because every year most the couple should be celebrate the couple of nights that spend here and enjoy the part of the stucture"
  },
  {
    id:5,
    imgsrc:hmg5,
    destitle:"Second Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"The epitome of roamnce of that stucture that follow the part of the stucture and the beliving of that romace place of the new York because every year most the couple should be celebrate the couple of nights that spend here and enjoy the part of the stucture"
  }
]

//pakage used to scrool animation




const Main = () => {

  useEffect(() => {
    Aos.init({duration:2000})
    }, [])
  return (
    <section className='main container seciton'>
      <div className="sectTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
{
  Data.map(({id,imgsrc,destitle,location,grade,fees,
    description})=>{
    return (
      <div data-aos="fade-up" key={id} className="singleDestinaton">
        <div className="imageDiv">
          <img src={imgsrc} alt={destitle}/>
        </div>
        <div className="cardInfo">
          <h4 className="destTitle">{destitle}</h4>
          <span className="continent flex">
            <HiOutlineLocationMarker className='icon'/>
           
          <span className="name">{location}</span> </span>
          <div className="fees flex">
            <div className="grade">
              <span> {grade} <small> +1 </small></span>
            </div>
            <div className="price">
              <h5>{fees}</h5>
            </div>
          </div>
          <div className="desc">
            <p>{description}</p>
          </div>

<button className="btn flex">
  Details<HiOutlineClipboardCheck className="icon"/>
</button>

        </div>
      </div>
    )
  })
}
      </div>

    </section>
  )
}

export default Main;