import React from "react";
import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";
import { RiMessage2Line } from "react-icons/ri";
import { MdManageHistory } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className="sidebar-main">
      {/* set 1 */}
      <div className="menu-set">
        <h6 className="menu-heading">Dashboard</h6>
        <nav className="menu-list">
          <ul>
            <div className="icon-with-link">
              <IoHomeOutline />
              <li>Home</li>
            </div>
            <div className="icon-with-link">
              <IoAnalyticsSharp />
              <li>Analytics</li>
            </div>
            <div className="icon-with-link">
              <GiProgression />
              <li>Sales</li>
            </div>
          </ul>
        </nav>
      </div>

      {/* set 2 */}
      <div className="menu-set">
        <h6 className="menu-heading">Quick Menu</h6>
        <nav className="menu-list">
          <ul>
            <div className="icon-with-link">
              <PiUsersThreeFill />
              <li>Users</li>
            </div>
            <div className="icon-with-link">
              <FiShoppingBag />
              <li>Products</li>
            </div>
            <div className="icon-with-link">
              <MdOutlineAttachMoney />
              <li>Transactions</li>
            </div>
            <div className="icon-with-link">
              <IoStatsChartOutline />
              <li>Reports</li>
            </div>
          </ul>
        </nav>
      </div>

      {/* set 3 */}
      <div className="menu-set">
        <h6 className="menu-heading">Notifications</h6>
        <nav className="menu-list">
          <ul>
            <div className="icon-with-link">
              <CiMail />
              <li>Mail</li>
            </div>
            <div className="icon-with-link">
              <VscFeedback />
              <li>Feedback</li>
            </div>
            <div className="icon-with-link">
              <RiMessage2Line />
              <li>Messages</li>
            </div>
          </ul>
        </nav>
      </div>

      {/* set 4 */}
      <div className="menu-set">
        <h6 className="menu-heading">Staff</h6>
        <nav className="menu-list">
          <ul>
            <div className="icon-with-link">
              <MdManageHistory />
              <li>Manage</li>
            </div>
            <div className="icon-with-link">
              <IoAnalyticsSharp />
              <li>Analytics</li>
            </div>
            <div className="icon-with-link">
              <TbReportSearch />
              <li>Reports</li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
