import React from "react";
import "./Home.css";

import UserAnalyticsChart from "../../../UserAnalyticsChart/UserAnalyticsChart";
const Home = () => {
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
        <h4>User Analytics</h4>

        <UserAnalyticsChart />
      </div>
    </div>
  );
};

export default Home;
