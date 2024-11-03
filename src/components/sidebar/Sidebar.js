import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  IoHomeOutline,
  IoAnalyticsSharp,
  IoStatsChartOutline,
} from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineAttachMoney, MdManageHistory } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";
import { RiMessage2Line } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Dashboard-Home");

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <div className="sidebar-main">
      {/* Dashboard Section */}
      <div className="menu-set">
        <h6 className="menu-heading">Dashboard</h6>
        <nav className="menu-list">
          <ul>
            <Link
              to="/dashboard"
              className={`icon-with-link ${
                activeLink === "Dashboard-Home" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Dashboard-Home")}
            >
              <IoHomeOutline />
              <li>Home</li>
            </Link>
            <Link
              to="/dashboard/analytics"
              className={`icon-with-link ${
                activeLink === "Dashboard-Analytics" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Dashboard-Analytics")}
            >
              <IoAnalyticsSharp />
              <li>Analytics</li>
            </Link>
            <Link
              to="/dashboard/sales"
              className={`icon-with-link ${
                activeLink === "Dashboard-Sales" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Dashboard-Sales")}
            >
              <GiProgression />
              <li>Sales</li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Quick Menu Section */}
      <div className="menu-set">
        <h6 className="menu-heading">Quick Menu</h6>
        <nav className="menu-list">
          <ul>
            <Link
              to="/dashboard/users"
              className={`icon-with-link ${
                activeLink === "QuickMenu-Users" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("QuickMenu-Users")}
            >
              <PiUsersThreeFill />
              <li>Users</li>
            </Link>
            <Link
              to="/dashboard/products"
              className={`icon-with-link ${
                activeLink === "QuickMenu-Products" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("QuickMenu-Products")}
            >
              <FiShoppingBag />
              <li>Products</li>
            </Link>
            <Link
              to="/dashboard/transactions"
              className={`icon-with-link ${
                activeLink === "QuickMenu-Transactions" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("QuickMenu-Transactions")}
            >
              <MdOutlineAttachMoney />
              <li>Transactions</li>
            </Link>
            <Link
              to="/dashboard/reports"
              className={`icon-with-link ${
                activeLink === "QuickMenu-Reports" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("QuickMenu-Reports")}
            >
              <IoStatsChartOutline />
              <li>Reports</li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Notifications Section */}
      <div className="menu-set">
        <h6 className="menu-heading">Notifications</h6>
        <nav className="menu-list">
          <ul>
            <Link
              to="/dashboard/mail"
              className={`icon-with-link ${
                activeLink === "Notifications-Mail" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Notifications-Mail")}
            >
              <CiMail />
              <li>Mail</li>
            </Link>
            <Link
              to="/dashboard/feedback"
              className={`icon-with-link ${
                activeLink === "Notifications-Feedback" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Notifications-Feedback")}
            >
              <VscFeedback />
              <li>Feedback</li>
            </Link>
            <Link
              to="/dashboard/messages"
              className={`icon-with-link ${
                activeLink === "Notifications-Messages" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Notifications-Messages")}
            >
              <RiMessage2Line />
              <li>Messages</li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Staff Section */}
      <div className="menu-set">
        <h6 className="menu-heading">Staff</h6>
        <nav className="menu-list">
          <ul>
            <Link
              to="/dashboard/manage"
              className={`icon-with-link ${
                activeLink === "Staff-Manage" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Staff-Manage")}
            >
              <MdManageHistory />
              <li>Manage</li>
            </Link>
            <Link
              to="/dashboard/staff-analytics"
              className={`icon-with-link ${
                activeLink === "Staff-Analytics" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Staff-Analytics")}
            >
              <IoAnalyticsSharp />
              <li>Analytics</li>
            </Link>
            <Link
              to="/dashboard/staff-reports"
              className={`icon-with-link ${
                activeLink === "Staff-Reports" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Staff-Reports")}
            >
              <TbReportSearch />
              <li>Reports</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
