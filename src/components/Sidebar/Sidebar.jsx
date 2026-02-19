import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useShopContext } from "../../context/shopContext";
import "./Sidebar.css"


const Sidebar = () => {

      const { logout } = useShopContext();  
    

  return (
    
      <>
      <div className="sidebar">
      <div className="sidebar-heading">
        <h1>Admin Panel</h1>
      </div>
      <nav>
      <NavLink to ="/admin" end>Dashboard</NavLink>

      <NavLink to="/admin/add-product" className="siderbar-dashboard">Add Products</NavLink>

      <NavLink to="/admin/view-orders" className="sidebar-orders">Orders</NavLink>

      <NavLink to="/admin/product-list" className="sidebar-product">Products</NavLink>

       <div className="admin-Logout">
      <button onClick={logout}>Logout</button>
       </div>
      </nav>
      </div>
      </>

  )
}

export default Sidebar
