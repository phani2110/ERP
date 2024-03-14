// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../dashboard.css'; // Import Dashboard CSS file
/*import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';*/

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <p>Stay organized and manage your business efficiently.</p>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-metrics">
          <div className="metric">
          <i className="bi bi-boxes"></i><h3>Total Products</h3>
            <p>100</p>
          </div>
          <div className="metric">

          <i className="bi bi-cart"></i><h3>Total Orders</h3>
            <p>50</p>
          </div>
        </div>
        <div className="dashboard-actions">
          <Link to="/products">
            <button className="action-button">Manage Products</button>
          </Link>
          <Link to="/orders">
            <button className="action-button">Manage Orders</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
