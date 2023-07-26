import React from 'react'

import "./App.css"
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx';
import HomePage from './Pages/HomePage.jsx';
import Products from './components/Products/Products.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { ToastContainer } from 'react-toastify';
import CartContextProvider from './context/cartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AllOrders from './components/AllOrders/AllOrders';




export default function App() {
  let routes = createBrowserRouter([
    {
      path:'',
      element:<MainLayout />,
      children: [
        {index: true , element : <HomePage /> },
        {path: 'Products' , element : <Products /> },
        {path: 'cart' , element : <Cart /> },
        {path: 'allorders' , element : <AllOrders /> },
        {path: 'checkout' , element : <Checkout /> },
        {path: 'Product-details/:id' , element : <ProductDetails /> },
        {path: 'login' , element : <Login /> },
        {path: 'register' , element : <Register /> },
        
      ]
    }
  ])
  return (
    <>
        <ToastContainer theme='colored' />
  
   
   
  <CartContextProvider>
  <RouterProvider router={routes}/>
  </CartContextProvider>
 
    </>
  )
}
