import React from "react";
import "./Dashboard.css";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import NavProfileImg from "../../resources/images/nav-profile-img.jpg";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
{
  /* <IoIosNotificationsOutline /> */
  //   <AiOutlineGlobal />;
  //   /<IoMdSettings />
}
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="sidebar-pages-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="sidebar-page-container">2</div>
      </div>
    </div>
  );
};

export default Dashboard;
