import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../Utlis/baseUrl.js'
import Loading from '../../Loading/Loading.jsx'


export default function ProductDetails() {
    let {id} =useParams()
    console.log(id);

    
        const [Product, setProduct] = useState([])
        const getProduct=async()=>{
          let {data}=await axios.get(`${baseUrl}/products/${id}`)
          // console.log(data.data);
          setProduct(data.data)
        }
        
       useEffect(()=>{
        getProduct()
       },[])
      

  return (
    <>
     <div className="container">
       {Product.length !=0?  <div className="row">
            <div className="col-md-3">
            <img src={Product.imageCover} alt="" className='w-100' />
            </div>
            <div className="col-md-9">
                 <h3>{Product.title}</h3>
                 <p>{Product.description}</p>
            </div>
        </div>:<Loading/> }
     </div>
    </>
  )
}
