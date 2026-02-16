import React from 'react'
import { useState } from 'react';
import "./Admin.css"

const Admin = () => {

          


  return (
    <div className='admin-container'>

        <div className="admin-add-product-btn">
            <button>+Add Product</button>
        </div>
        <div className="admin-delete-product-btn">
            <button>-Delete Product</button>
        </div>
        <div className="admin-view-order">
            <button>Orders</button>
        </div>
        <div className="admin-view-user-btn">
            <button>See User List</button>
        </div>
      
    </div>
  )
}

export default Admin
