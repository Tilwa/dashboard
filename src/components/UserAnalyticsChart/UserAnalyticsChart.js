import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./UserAnalyticsChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserAnalyticsBarChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "User Analytics",
        data: [
          1200, 1500, 1000, 2200, 1800, 2500, 3000, 2800, 2300, 3200, 2000,
          2700,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Customize bar color
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "User Analytics for the Year",
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.3)", // x-axis grid line color
          lineWidth: 1,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(200, 200, 200, 0.3)", // y-axis grid line color
          lineWidth: 1,
          tickLength: 10,
        },
        ticks: {
          stepSize: 400, // Set y-axis increments by 400 for a total of 10 values
          callback: (value) => `${value}`, // Display integers only
        },
        min: 0,
        max: 4000, // Set max to 4000 for a 10-point range
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserAnalyticsBarChart;
