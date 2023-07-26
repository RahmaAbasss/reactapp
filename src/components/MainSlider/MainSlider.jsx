import React, { useContext } from 'react'
import Slider from "react-slick";
import slider1 from "../../images/slider-image-1.jpeg"
import slider2 from "../../images/slider-image-2.jpeg"
import slider3 from "../../images/slider-image-3.jpeg"


export default function MainSlider() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return <>
    <div className="my-3 ">
      
      {/* <div className="container bg-danger">
      <Slider {...settings}>
      <img src={slider1} alt=""/>
      <img src={slider2} alt=""/>
      <img src={slider3} alt=""/>
    </Slider>
      </div> */}
    </div>
    </>
  
}
