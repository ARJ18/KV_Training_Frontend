// import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/HomeLayout.css";
export const HomeLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="employee-action">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
