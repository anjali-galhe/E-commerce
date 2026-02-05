import React from 'react'
import logo from '../Assets/logo2.png'
import cart from '../Assets/cart1.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {

  const {getTotalCartItems} = useContext(ShopContext);
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
        <div className="nav-login-cart">
          <Link to="/login"><button className='login-btn'>Login</button></Link>
          {/* <img src={heart} alt="Heart" className='heart-icon'/> */}
          <Link to="/cart"><img src={cart} alt="Cart" className='cart-icon'/></Link>
          <div className="nav-cart-count">
            {getTotalCartItems()}
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
