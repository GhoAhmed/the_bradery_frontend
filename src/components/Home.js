// Home.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

import './assets/ProductList.css';

const Home = ({ setCartCount }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  

  const error = useSelector((state) => state.product.error); // Add this line
  

  useEffect(() => {
    // Dispatch the getProducts action
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    // Update the cart count based on the data in local storage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || {};
    const totalCount = Object.values(currentCart).reduce((acc, qty) => acc + qty, 0);
    setCartCount(totalCount);
  }, [setCartCount]);

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
              <button onClick={() => dispatch(addToCart(product.id))}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;





//import { addToCart } from '../redux/actions/cartActions';