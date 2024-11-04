import React from "react";
import "./Home.css";
import NavProfileImg from "../../../../resources/images/nav-profile-img.jpg";

import UserAnalyticsChart from "../../../UserAnalyticsChart/UserAnalyticsChart";
import { FaEye } from "react-icons/fa";
const Home = () => {
  const transactions = [
    {
      id: 1,
      customer: "Susan Carol",
      date: "2 Jun 2021",
      amount: "$122.00",
      status: "Approved",
    },
    {
      id: 2,
      customer: "Susan Carol",
      date: "2 Jun 2021",
      amount: "$122.00",
      status: "Declined",
    },
    {
      id: 3,
      customer: "Susan Carol",
      date: "2 Jun 2021",
      amount: "$122.00",
      status: "Pending",
    },
    {
      id: 4,
      customer: "Susan Carol",
      date: "2 Jun 2021",
      amount: "$122.00",
      status: "Approved",
    },
    {
      id: 5,
      customer: "Susan Carol",
      date: "2 Jun 2021",
      amount: "$122.00",
      status: "Pending",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Approved") return "status-approved";
    if (status === "Declined") return "status-declined";
    if (status === "Pending") return "status-pending";
  };
  return (
    <div className="home-main">
      <div className="home-top">
        <div className="home-top-revenue">
          <h4 className="card-title">Revanue</h4>
          <div className="top-cards-middle-child">
            <h1>$2,415</h1>
            <div className="text-with-icon">
              <h5 className="small-number">-11.4</h5>
              ⬇️
            </div>
          </div>
          <p className="bottom-text">Compared to last month</p>
        </div>
        <div className="home-top-sales">
          <h4 className="card-title">Sales</h4>
          <div className="top-cards-middle-child">
            <h1>$4,415</h1>
            <div className="text-with-icon">
              <h5 className="small-number">-1.4</h5>
              ⬇️
            </div>
          </div>
          <p className="bottom-text">Compared to last month</p>
        </div>
        <div className="home-top-cost">
          {" "}
          <h4 className="card-title">Cost</h4>
          <div className="top-cards-middle-child">
            <h1>$2,225</h1>
            <div className="text-with-icon">
              <h5 className="small-number">+2.4</h5>
              ⬆️
            </div>
          </div>
          <p className="bottom-text">Compared to last month</p>
        </div>
      </div>

      {/* bar charts starts from here */}
      <div className="user-analytics-main">
        <h4 className="title-container">User Analytics</h4>

        <UserAnalyticsChart />
      </div>

      <div className="last-main-container">
        <div className="members-container">
          <h4 className="title-container">New Join Members</h4>
          <div className="members-div">
            <img src={NavProfileImg} id="members-img" />{" "}
            <div>
              <h6 className="member-title">Fatima Ahmed</h6>
              <p className="member-designation">Software Engineering</p>
            </div>
            <butto className="member-btn">
              <FaEye className="eye-icon" />
              Display
            </butto>
          </div>
          <div className="members-div">
            <img src={NavProfileImg} id="members-img" />{" "}
            <div>
              <h6 className="member-title">Fatima Ahmed</h6>
              <p className="member-designation">Software Engineering</p>
            </div>
            <butto className="member-btn">
              <FaEye className="eye-icon" />
              Display
            </butto>
          </div>
          <div className="members-div">
            <img src={NavProfileImg} id="members-img" />{" "}
            <div>
              <h6 className="member-title">Fatima Ahmed</h6>
              <p className="member-designation">Software Engineering</p>
            </div>
            <butto className="member-btn">
              <FaEye className="eye-icon" />
              Display
            </butto>
          </div>
          <div className="members-div">
            <img src={NavProfileImg} id="members-img" />{" "}
            <div>
              <h6 className="member-title">Fatima Ahmed</h6>
              <p className="member-designation">Software Engineering</p>
            </div>
            <butto className="member-btn">
              <FaEye className="eye-icon" />
              Display
            </butto>
          </div>
          <div className="members-div">
            <img src={NavProfileImg} id="members-img" />{" "}
            <div>
              <h6 className="member-title">Fatima Ahmed</h6>
              <p className="member-designation">Software Engineering</p>
            </div>
            <butto className="member-btn">
              <FaEye className="eye-icon" />
              Display
            </butto>
          </div>
          <div className="members-div">
            <img src={NavProfileImg} id="members-img" />{" "}
            <div>
              <h6 className="member-title">Fatima Ahmed</h6>
              <p className="member-designation">Software Engineering</p>
            </div>
            <butto className="member-btn">
              <FaEye className="eye-icon" />
              Display
            </butto>
          </div>{" "}
        </div>
        <div className="transaction-container">
          <h4 className="title-container">Latest transactions</h4>

          <table className="transactions-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="customer-info">
                    <img src={NavProfileImg} className="customer-img" />{" "}
                    <span>{transaction.customer}</span>
                  </td>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    <span
                      className={`status ${getStatusClass(transaction.status)}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
