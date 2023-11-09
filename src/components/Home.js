// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/ProductList.css';

const Home = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await axios.get('http://127.0.0.1:8000/api/products', {
          headers,
        });

        if (response.status === 200) {
          setProducts(response.data.products);
        } else {
          console.error('Error fetching products', response.data.error);
          setError(response.data.error);
        }
      } catch (error) {
        console.error('Error fetching products', error);
        setError('An error occurred while fetching products.');
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Update the cart count based on the data in local storage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || {};
    const totalCount = Object.values(currentCart).reduce((acc, qty) => acc + qty, 0);
    setCartCount(totalCount);
  }, [setCartCount]);

  const addToCart = (productId) => {
    // Check if productId is valid
    if (!productId) {
      console.error('Invalid productId:', productId);
      return;
    }
  
    // Get the current cart data from local storage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || {};
  
    // Update the cart data with the new product
    currentCart[productId] = (currentCart[productId] || 0) + 1;
  
    // Save the updated cart data to local storage
    localStorage.setItem('cart', JSON.stringify(currentCart));
  
    // Log the updated cart data for debugging
    console.log('Updated cart in addToCart:', currentCart);
  };
  

  return (
    <div>
      <h2>Welcome to The Bradery - Home</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="product-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;