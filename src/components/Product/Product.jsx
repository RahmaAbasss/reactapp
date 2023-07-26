import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { notify } from '../../utils/notfiy';

export default function Product({Products}) {
 

  let {addToCart,getCartCount} = useContext(CartContext)

async function addPro(productId){
   
    let token = localStorage.getItem('token')
    if(token){
      let response = await addToCart(token,productId)
      if(response.status==200){
        getCartCount()
        notify('Product added successfully','success')
      }
      console.log(response);
    }else{
      alert('you are not loggg')
    }
  
}

  console.log(Products);
  return(
    <>
     {Products.map((item)=>{
      return <div key={item._id} className='col-md-2'>
       <div className="product">

       <Link to={'/Product-details/'+item._id}>
       <img src={item.imageCover} alt=""className='w-100 my-5 mb-2' />
        <h6 className='text-main'> {item.category.name} </h6>
       <p className='fw-bolder ' > {item.title.split(' ').slice(0,2).join(' ')}</p>
       <div className='d-flex justify-content-between align-items-center my-' >
        <span>{item.price}EGP</span>
       
       <div>
        <i className='fas fa-star rating-color'></i>
        {item.ratingsAverage}
       </div>
       </div>
       </Link>
       
       <button onClick={()=>addPro(item._id)} className='btn bg-main text-white w-100 ' >Add To Cart</button>

      

       </div>
      </div>
     })}
     </>
  )

    
  
}
