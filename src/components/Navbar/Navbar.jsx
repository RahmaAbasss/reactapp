import React, { useContext } from 'react'
import logo from "../../images/freshcart-logo.svg"
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

// import styles from './Navbar.module.css';
export default function Navbar() {
  
 let {count} = useContext(CartContext)

  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-main-light ">
  <div className="container">
    <NavLink className="navbar-brand" to="/">
      <img src={logo} alt=''/>
    </NavLink>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav me-auto mt-2 mb-lg-0">
        
        <li className="nav-item ">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
      
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Cart</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Products">Products </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/">Categories</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/">Brands</NavLink>
        </li>

      </ul>
      

      <ul className="navbar-nav ms-auto mt-2 mb-lg-0 mb-2">
        
      {/* <li className="nav-item d-flex algn-items-center">
         <i className=' fab mx-2 fa-facebook'></i>
         <i className=' fab mx-2 fa-twitter'></i>
         <i className=' fab mx-2 fa-instagram'></i>
         <i className=' fab mx-2 fa-tiktok'></i>
         <i className=' fab mx-2 fa-linkedin'></i>
         <i className=' fab mx-2 fa-youtube'></i>
        </li> */}
        
   <NavLink to='/cart' className="p-2 me-3 position-relative">
  Cart <i className="fa-solid fa-cart-shopping" />
  <span className="position-absolute top-0 start-100 ms-1 translate-middle badge rounded-pill bg-success">
    {count}
    <span className="visually-hidden ">unread messages</span>
  </span>
</NavLink>


      
      
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/">Logout</NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>


      </ul>

    </div>
  </div>
</nav>

    

    </>
  )
  
}
