import React from 'react'
import { useState } from 'react';
import "./Admin.css"
import { useShopContext } from '../../context/shopContext';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();

          const { role } = useShopContext();

useEffect(() => {
  if (role !== "admin") {
    navigate("/login");
  }
}, [role]);



  return (
    <>
    hjkj
    </>
    
  )

}

export default Admin
