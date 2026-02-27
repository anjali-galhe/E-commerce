import React from 'react'
// import all_product from '../Assets/all_product'
import { BsFillBagHeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { useShopContext } from "../../context/ShopContext";
import "./AdminDashboard.css"
import Adminchart from '../Adminchart/Adminchart';

const AdminDashboard = () => {
  // const products = all_product

const { products } = useShopContext();
  const totalProducts = products.length;

  const users = JSON.parse(localStorage.getItem("users")) || [];

const orders = JSON.parse(localStorage.getItem("orders")) || [];



  return (
    <div className="dashboard">
    <div className='admin-dashboard'>
      <div className="admin-total-products">
        <div className="icon">
        <BsFillBagHeartFill />
</div>
     <h2>Total Products: {totalProducts}</h2>

      </div>
      <div className="admin-total-users">
        <div className="user-icon">
        <FaUser />
</div>
  <h2>Total Users: {users.length}</h2>


      </div>
      <div className="admin-total-orders">
        <div className="order-icon">
           <BsFillBoxSeamFill/>
        </div>

       <h2>Orders{orders.length}</h2>
      </div>
    </div>
      <Adminchart/>
    </div>
  )
}

export default AdminDashboard
