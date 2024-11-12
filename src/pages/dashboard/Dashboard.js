import React from "react";
import "./Dashboard.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import NavProfileImg from "../../resources/images/nav-profile-img.jpg";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

// sidebar links paths starts from here
import Home from "../../components/sidebarLinksComponents/dashboard/Home/Home";
import Analytics from "../../components/sidebarLinksComponents/dashboard/analytics/Analytics";
import Sales from "../../components/sidebarLinksComponents/dashboard/sales/Sales";

import Users from "../../components/sidebarLinksComponents/quickMenu/users/Users";
import Products from "../../components/sidebarLinksComponents/quickMenu/products/Products";
import Transactions from "../../components/sidebarLinksComponents//quickMenu/transactions/Transactions";
import Reports from "../../components/sidebarLinksComponents/quickMenu/reports/Reports";

import Mail from "../../components/sidebarLinksComponents/notifications/mail/Mail";
import Feedback from "../../components/sidebarLinksComponents/notifications/feedback/Feedback";
import Messages from "../../components/sidebarLinksComponents/notifications/messages/Messages";

import Manage from "../../components/sidebarLinksComponents/staff/manage/Manage";
import StaffAnalytics from "../../components/sidebarLinksComponents/staff/analytics/Analytics";
import StaffReports from "../../components/sidebarLinksComponents/staff/reports/Reports";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="sidebar-pages-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="sidebar-page-container">
          <Routes>
            {/* Dashboard Related Links */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/sales" element={<Sales />} />

            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/products" element={<Products />} />
            <Route path="/dashboard/transactions" element={<Transactions />} />
            <Route path="/dashboard/reports" element={<Reports />} />

            <Route path="/dashboard/mail" element={<Mail />} />
            <Route path="/dashboard/feedback" element={<Feedback />} />
            <Route path="/dashboard/messages" element={<Messages />} />

            <Route path="/dashboard/manage" element={<Manage />} />
            <Route
              path="/dashboard/staff-analytics"
              element={<StaffAnalytics />}
            />
            <Route path="/dashboard/staff-reports" element={<StaffReports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
