import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';

export default function Checkout() {

let {generatOnlinePayment,cartId} = useContext(CartContext)



 async function hendelPayment(values){
 console.log(values);
 let  {data}= await generatOnlinePayment(cartId,values)
 console.log(data);
 if(data.session){
  // console.log(data.session.url);
  window.location.href = data.session.url
 }

}
//64493a434c08050033e9ee54


  let checkoutFormik = useFormik({
    initialValues:{
      details :'',
      phone : '',
      city : ''
    },
    onSubmit : (values)=>hendelPayment(values)
  })
  return (
    <>
     <div className="container">
     <div className="w-50 m-auto my-5">
        <form onSubmit={checkoutFormik.handleSubmit}>
          <label htmlFor="details">Details</label>
          <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur} type="text" name='details' id='details' className='form-control my-3' value={checkoutFormik.values.details}/>


          <label htmlFor="phone">phone</label>
          <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur} type="tel" name='phone' id='phone' className='form-control my-3' value={checkoutFormik.values.phone} />

          <label htmlFor="city">City</label>
          <input onChange={checkoutFormik.handleChange} onBlur={checkoutFormik.handleBlur} type="text" name='city' id='city' className='form-control my-3' value={checkoutFormik.values.city} />

           <button type='submit' className='btn bg-main'>Place order</button>
        
        </form>
      </div>
     </div>
    </>
  )
}
