import React from 'react'
import logo from '../Assets/logo2.png'
import cart from '../Assets/cart1.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext'
// import { TbTruckDelivery } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";


import { useState, useEffect } from "react";
import { RiUserHeartLine } from "react-icons/ri";
import { useShopContext } from '../../context/shopContext'




const Navbar = () => {
  const { role } = useShopContext();

  const {getTotalCartItems} = useContext(ShopContext);

  const [isLogin, setIsLogin] = useState(false);

useEffect(() => {
  const loginStatus = localStorage.getItem("isLoggedIn");
  if (loginStatus === "true") {
    setIsLogin(true);
  }
}, []);


  return (
    <div className="navbar">
    <div className='navbar-1'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        </div>
        
        <div className="search">
          <input type="text" placeholder='Search..' />
          <button>⌕</button>
        </div>
        <div className="admin">
        {role === "admin" &&(
          <Link to= "/admin">
               <button>admin</button>
          </Link>)}

  
        </div>

        
        <div className="nav-login-cart">
{isLogin ? (
  <Link to="/profile">
    <div className="profile-img">
    <RiUserHeartLine />
    </div>

  </Link>
) : (
  <Link to="/login">
    <button className='login-btn'>Login</button>
  </Link>
)}
          {/* <img src={heart} alt="Heart" className='heart-icon'/> */}
          <Link to="/cart" ><img src={cart} alt="Cart" className='cart-icon' /></Link>
          <div className="nav-cart-count">
            {getTotalCartItems()}
          </div>
        <div className="delivery-box">
          <Link to="/orders"> <TfiLocationPin/></Link>
        </div>
        </div>
        
      
    </div>
    <div className='navbar-2'>
           <ul className='nav-menu'>
                    <li> <Link to="/" style={{ textDecoration: "none" }}><span></span>SHOP </Link></li>
          
                    <li><Link to ="/mens" style={{ textDecoration: "none" }}><span></span>MEN </Link></li>
                    <li> <Link to="/womens" style={{ textDecoration: "none" }}><span></span>WOMEN </Link></li>
                    <li><Link to="/kids"style={{ textDecoration: "none" }}><span></span>KIDS</Link></li>
                  </ul>
        </div>
    </div>
    

  )
}

export default Navbar
