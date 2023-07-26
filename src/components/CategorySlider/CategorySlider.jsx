import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../Utlis/baseUrl.js'
import Slider from "react-slick";
export default function CategorySlider() {
  const [categories,setcategories] = useState([])
  const getAllCategories=async()=>{
    let {data}=await axios.get(`${baseUrl}/categories`)
    // console.log(data.data);
    setcategories(data.data)
  }
  
 useEffect(()=>{
  getAllCategories()
 },[])

 var settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows:false,
  autoplay:true,
};

  return <>
        <div className="my-5 container ">
      
      <h2>Shop Popular Categories</h2>
      <Slider {...settings} autoplaySpeed={3000} >
        
        {categories.map((item)=>{
          
          return <div key={item._id}>
            <img src={item.image} className='w-100' height={250} alt=""/>
            <h6>{item.name}</h6>
          </div>
        })}
      
      
    </Slider>
     
    </div>
    </>
  
}
