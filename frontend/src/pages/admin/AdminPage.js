// src/pages/admin/AdminPage.js

import React from 'react';
import Sidebar from '../../components/Sidebar';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <h1>DOTMART Admin Dashboard</h1>
        <p>
          Welcome to the DOTMART Admin Dashboard. This is the central hub for managing and overseeing the operations of your supermarket app. Designed for ease of use and efficiency, this dashboard allows you to control every aspect of your store’s functionality.
        </p>
        <div className="key-features">
          <h2>Key Features:</h2>
          <ul>
            <li><strong>Product Management:</strong> Add/Remove Products, Update Product Details</li>
            <li><strong>Order Management:</strong> View Orders, Manage Order Status</li>
            <li><strong>User Management:</strong> View Users, Manage Roles and Permissions</li>
            <li><strong>Reports and Analytics:</strong> Sales Analytics, Product Performance</li>
            <li><strong>Settings and Configurations:</strong> App Settings, Promotions and Discounts</li>
          </ul>
        </div>
        <p>
          Utilize the DOTMART Admin Dashboard to streamline your store management, enhance operational efficiency, and provide a seamless shopping experience for your customers.
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
