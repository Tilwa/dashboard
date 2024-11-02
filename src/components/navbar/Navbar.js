import React from "react";
import "./Navbar.css";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import NavProfileImg from "../../resources/images/nav-profile-img.jpg";
import Sidebar from "../../components/sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="updates-container">
        <div className="icons-container">
          {" "}
          <span class="badge">25</span>
          <FaRegBell className="icons" />
        </div>
        <div className="icons-container">
          {" "}
          <span class="badge">13</span>
          <AiOutlineGlobal className="icons" />
        </div>
        <div className="icons-container">
          <IoSettings className="icons" />
        </div>

        <img src={NavProfileImg} id="nav-profile-img" />
      </div>
    </div>
  );
};

export default Navbar;
