import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "./Adminchart.css";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const Adminchart = () => {

  const doughnutData = {
    labels: ["Delivered", "Pending", "Cancelled"],
    datasets: [
      {
        label: "Orders",
        data: [45, 25, 10],
backgroundColor: [
  "#8b5cf6",   // soft purple
  "#14b8a6",   // teal
  "#fb7185"    // coral pink
],
borderWidth: 0,
hoverOffset: 14    },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [5000, 8000, 6000, 9000, 7500, 11000],
backgroundColor: "#6366f1", // indigo
borderRadius: 10,
hoverBackgroundColor: "#4f46e5",
borderRadius: 8,
barThickness: 30
   
 },
    ],
  };

  return (
    <div className="admin-chart-wrapper">
      <div className="admin-chart-container">

        <div className="admin-chart-box">
          <h3>Order Status</h3>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>

        <div className="admin-chart-box">
          <h3>Monthly Sales</h3>
          <Bar data={barData} options={barOptions} />
        </div>

      </div>
    </div>
  );
};

export default Adminchart;