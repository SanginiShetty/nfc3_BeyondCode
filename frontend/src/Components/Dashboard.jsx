import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSignOutAlt, faChartBar, faCogs, faShoppingCart, faBoxes, faUsers } from "@fortawesome/free-solid-svg-icons";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Dummy data for the charts
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Helped",
        backgroundColor: "#3E8B96",
        borderColor: "#3E8B96",
        borderWidth: 1,
        hoverBackgroundColor: "#34717f",
        hoverBorderColor: "#34717f",
        data: [40, 60, 80, 70, 60, 50],
      },
      {
        label: "NGO Connected",
        backgroundColor: "#a0aec0",
        borderColor: "#a0aec0",
        borderWidth: 1,
        hoverBackgroundColor: "#718096",
        hoverBorderColor: "#718096",
        data: [30, 50, 70, 60, 50, 40],
      },
    ],
  };

  const orderData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projects",
        borderColor: "#3E8B96",
        fill: false,
        data: [2000, 2500, 3000, 3500, 3200, 4000],
      },
      {
        label: "Events",
        borderColor: "#718096",
        fill: false,
        data: [1800, 2400, 2700, 3100, 2900, 3700],
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 text-center">
          <h1 className="text-xl font-bold text-[#3E8B96]">NGO Connec+</h1>
        </div>
        <ul className="mt-4">
          <li className="px-6 py-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faChartBar} className="mr-2 text-[#3E8B96]" />
            Dashboard
          </li>
          <li className="px-6 py-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faBoxes} className="mr-2 text-gray-600" />
            Inventory
          </li>
          <li className="px-6 py-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faUsers} className="mr-2 text-gray-600" />
            Suppliers
          </li>
          <li className="px-6 py-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-gray-600" />
            Projects
          </li>
          <li className="px-6 py-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faCogs} className="mr-2 text-gray-600" />
            Events
          </li>
        </ul>
        <div className="mt-auto">
          <ul>
            <li className="px-6 py-2 hover:bg-gray-100">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-gray-600" />
              Log Out
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search product, supplier, order"
            className="px-4 py-2 border rounded-md w-1/3"
          />
          <FontAwesomeIcon icon={faBell} className="text-gray-600 text-xl" />
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-gray-600">NGO Connect Overview</h2>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xl font-semibold text-[#3E8B96]">₹18,300</p>
                <p className="text-gray-600">Donation</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#3E8B96]">₹832</p>
                <p className="text-gray-600">Aid</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-gray-600">Donation Summary</h2>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xl font-semibold text-[#3E8B96]">₹13,573</p>
                <p className="text-gray-600">Crowd Funding</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#3E8B96]">82</p>
                <p className="text-gray-600">Fund Raising</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-gray-600">Inventory Summary</h2>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-xl font-semibold text-[#3E8B96]">868</p>
                <p className="text-gray-600">Quantity in Hand</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#3E8B96]">200</p>
                <p className="text-gray-600">To be received</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sales & Purchase Chart */}
        <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-gray-600">Sales & Purchase</h2>
          <Bar data={salesData} options={{ responsive: true }} />
        </div>

        {/* Order Summary Chart */}
        <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-gray-600">Order Summary</h2>
          <Bar data={orderData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
