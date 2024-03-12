// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../nav.css'; 
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Product Management</Link></li>
        <li><Link to="/orders">Order Management</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
