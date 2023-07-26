import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cartContext';
import { notify } from '../../utils/notfiy';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';




export default function Cart() {
   let {getUserCart,removeCartItem,getCartCount,updateQty} = useContext(CartContext)

   let [cart , setCart] = useState([])
   let [totalprice , setTotalPrice] = useState([])

  async function getCart(){
    let token = localStorage.getItem('token')
    if(token){
    let response = await    getUserCart(token)
    console.log(response);
    setCart(response.data.data.products)
    setTotalPrice(response.data.data.totalCartPrice)
    }
   }



   async function deletProduct(productId){
    let token = localStorage.getItem('token')
    if(token){
    let response = await    removeCartItem(token,productId)
    console.log(response);
    setCart(response.data.data.products)
    setTotalPrice(response.data.data.totalCartPrice)
    notify('product deleted','success')
    getCartCount()
    }
   }


   async function updateQtyProduct(productId,count){
    let token = localStorage.getItem('token')
    if(token){
    let response = await    updateQty(token,productId,count)
    console.log(response);
    setCart(response.data.data.products)
    setTotalPrice(response.data.data.totalCartPrice)
    notify('product updated','success')
    }
   }






useEffect(()=>{
    getCart()
},[])

  return (
    <>
     {cart.length != 0 ? 
      <div className="container">
        <div className="bg-main-light p-3 my-4">
          <h3>Shop Cart </h3>
          <h5 className='text-main my-3 fw-bold'>Total Cart Price : {totalprice } EGP</h5>
          {cart.map((item)=>{
              return <div key={item._id} className="row border-bottom my-3">
                <div className="col-md-1">
                  <img src={item.product.imageCover} className='w-100' alt="" />
                  
                </div>
                <div className="col-md-11 d-flex justify-content-between">
                <div>
                <h5>{item.product.title}</h5>
                  <h5 className='text-main mx-2 fw-bolder'>{item.price} EGP</h5>
                  <button onClick={()=>deletProduct(item.product._id)} className='btn text-danger'>Remove <i className='fa-solid fa-trash'></i> </button>
                </div>

                 <div>
                  <button onClick={()=>updateQtyProduct(item.product._id,item.count+1)} className='btn btn-bolder'>+</button>
                  <span className='mx-2'>{item.count}</span>
                  <button onClick={()=>updateQtyProduct(item.product._id,item.count-1)} className='btn btn-bolder'>-</button>
                 </div>

                </div>
              </div>
          })}
         
        </div>
       
        <Link to='/checkout' className='btn bg-main text-white'>Check Out</Link>
      </div>  :  <Loading />} 
    </>
  )
}
