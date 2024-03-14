// ProductsManagement.js
import React, { useState } from 'react';
import '../pm.css'; // Import Product Management CSS file

const ProductsManagement = () => {
  // Example initial products data
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100, quantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 200, quantity: 50 },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 100, quantity: 10 },
    { id: 4, name: 'Product 4', category: 'Category 4', price: 200, quantity: 30 },
    { id: 5, name: 'Product 5', category: 'Category 5', price: 1000, quantity: 40 },
    { id: 6, name: 'Product 6', category: 'Category 6', price: 2000, quantity: 60 },
    { id: 7, name: 'Product 7', category: 'Category 7', price: 100, quantity: 70 },
    { id: 8, name: 'Product 8', category: 'Category 8', price: 2000, quantity: 20 },
    { id: 9, name: 'Product 9', category: 'Category 9', price: 1000, quantity: 100 },
    { id: 10, name: 'Product 10', category: 'Category 10', price: 200, quantity: 60 },
    { id: 11, name: 'Product 11', category: 'Category 11', price: 100, quantity: 80 },
    { id: 12, name: 'Product 12', category: 'Category 12', price: 2000, quantity: 90 },
    // Add more initial products here
  ]);

  // State variables for editing a product and adding a new product
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  // Function to handle editing a product
  const editProduct = (id) => {
    setEditProductId(id);
    // Find the product with the given ID and set it as the edited product
    const productToEdit = products.find(product => product.id === id);
    setEditedProduct({ ...productToEdit });
  };

  // Function to save the edited product details
  const saveEditedProduct = (id) => {
    // Find the index of the edited product in the products array
    const index = products.findIndex(product => product.id === id);
    // Update the products array with the edited product
    const updatedProducts = [...products];
    updatedProducts[index] = editedProduct;
    setProducts(updatedProducts);
    // Reset edit state
    setEditProductId(null);
    setEditedProduct({});
  };

  // Function to handle input changes when editing a product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  // Function to handle input changes when adding a new product
  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Function to add a new product
  const addProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.quantity) {
      const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
      const addedProduct = { id, ...newProduct };
      setProducts([...products, addedProduct]);
      setNewProduct({
        name: '',
        category: '',
        price: '',
        quantity: ''
      });
      setShowAddForm(false);
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Function to delete a product
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="products-management-container">
      <h2>Product Management</h2>
      {showAddForm ? (
        <div className="add-form">
          <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleNewProductChange} />
          <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleNewProductChange} />
          <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleNewProductChange} />
          <input type="number" name="quantity" placeholder="Quantity" value={newProduct.quantity} onChange={handleNewProductChange} />
          <button onClick={addProduct}>Add Product</button>
        </div>
      ) : (
        <button className='ad' onClick={() => setShowAddForm(true)}>Add Product</button>
      )}
      <div className="products-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{editProductId === product.id ? <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} /> : product.name}</h3>
            <p>Category: {editProductId === product.id ? <input type="text" name="category" value={editedProduct.category} onChange={handleInputChange} /> : product.category}</p>
            <p>Price: {editProductId === product.id ? <input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} /> : `${product.price}`}</p>
            <p>Quantity: {editProductId === product.id ? <input type="number" name="quantity" value={editedProduct.quantity} onChange={handleInputChange} /> : product.quantity}</p>
            {editProductId === product.id ? <button onClick={() => saveEditedProduct(product.id)}>Save</button> : <button className="edit-button" onClick={() => editProduct(product.id)}>Edit</button>}
            <button className="delete-button" onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsManagement;
