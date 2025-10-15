import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import Cart from './Cart';

const Product = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Clothing', 'Accessories'];

  const products = [
    { id: 1, name: 'Smartphone', price: '$499', category: 'Electronics' },
    { id: 2, name: 'Laptop', price: '$899', category: 'Electronics' },
    { id: 3, name: 'T-Shirt', price: '$29', category: 'Clothing' },
    { id: 4, name: 'Jeans', price: '$49', category: 'Clothing' },
    { id: 5, name: 'Headphones', price: '$199', category: 'Accessories' },
    { id: 6, name: 'Watch', price: '$299', category: 'Accessories' },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Routes>
      <Route
        path="/product"
        element={
          <div>
            <Navbar cartCount={cart.length} />
            <div style={{ display: 'flex', padding: '20px 50px' }}>
              <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', flex: 1, paddingLeft: '20px' }}>
                {filteredProducts.map(product => (
                  <div key={product.id} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Category: {product.category}</p>
                    <button style={{ marginTop: '10px', padding: '8px 15px', border: 'none', borderRadius: '5px', backgroundColor: '#1976d2', color: 'white', cursor: 'pointer' }} onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
    </Routes>
  );
};

export default Product;
