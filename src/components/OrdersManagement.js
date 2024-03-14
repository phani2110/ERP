import React, { useState } from 'react';
import '../om.css';

const OrderManagement = () => {
  // Mock order data
  const initialOrders = [
    { id: 1, customerName: 'John Doe', orderDate: '2022-03-01', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', orderDate: '2022-03-02', status: 'Shipped' },
    // Add more mock orders here
  ];

  // State variables for managing orders and selected order
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  // Function to view order details
  const viewOrderDetails = (order) => {
    console.log('Selected order:', order); // Check selected order
    setSelectedOrder(order);
  };

  // Function to update order status
  const updateOrderStatus = (id) => {
    if (newStatus === '') {
      alert('Please select a status');
      return;
    }
    setOrders(orders.map(order => (order.id === id ? { ...order, status: newStatus } : order)));
    setShowStatusDropdown(false); // Hide the dropdown after updating status
  };

  // Function to delete order
  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div>
      <ul>
        {orders.map(order => (
          <li key={order.id} class="oc">
            <div>Order ID: {order.id}</div>
            <div>Customer Name: {order.customerName}</div>
            <div>Order Date: {order.orderDate}</div>
            <div>Status: {order.status}</div>
            <button onClick={() => viewOrderDetails(order)} id='vd'>View Details</button>
            <button onClick={() => setShowStatusDropdown(true)} id='us'>Update Status</button>
            {showStatusDropdown && (
              <div>
                <select onChange={(e) => setNewStatus(e.target.value)}>
                  <option value="">Select Status</option>
                  <option value="Packed">Packed</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Canceled">Canceled</option>
                </select>
                <button onClick={() => updateOrderStatus(order.id)} id='s'>Save</button>
              </div>
            )}
            <button onClick={() => deleteOrder(order.id)} id='d'>Delete</button>
          </li>
        ))}
      </ul>

      {/* Modal to display order details */}
      <div className="modal" style={{ display: selectedOrder ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={() => setSelectedOrder(null)}>&times;</span>
          <h2>Order Details</h2>
          {selectedOrder && (
            <div>
              <p>Order ID: {selectedOrder.id}</p>
              <p>Customer Name: {selectedOrder.customerName}</p>
              <p>Order Date: {selectedOrder.orderDate}</p>
              <p>Status: {selectedOrder.status}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;

