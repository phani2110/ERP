import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import NavBar from './components/NavBar'; // Import NavBar component
import Slider from './components/Slider'; // Import Slider component
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> 
        <Slider/>
        <Routes>
          {/* Add a component or element to render for the root route */}
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




