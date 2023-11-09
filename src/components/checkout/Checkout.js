// Checkout.js
import React, { useState, useEffect } from 'react';
import './Checkout.css';

const Checkout = ({ cartCount }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, [cartCount]);

  const calculateTotal = () => {
    // Calculate the total price of items in the cart
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="total">
        <p>Total: ${calculateTotal()}</p>
        <button className="payment-button">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Checkout;
