import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
const AdminLayout = () => {


  return (
     <div className="admin-layout">

      <div className="admin-sidebar">
        <Sidebar />
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    
    </div>
  );
};

export default AdminLayout;
