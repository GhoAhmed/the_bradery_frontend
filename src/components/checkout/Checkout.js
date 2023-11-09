import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { getProductDetails } from '../../redux/actions/'; // Update the path

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      // Fetch cart items from local storage
      const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
    
      // Convert the cart object into an array for easier rendering
      const storedCartItems = Object.keys(storedCart).map((productId) => ({
        productId,
        quantity: storedCart[productId],
      }));
    
      // Fetch additional product details (name, price, etc.) from your API or local storage
      const detailedCartItems = await Promise.all(
        storedCartItems.map(async ({ productId, quantity }) => {
          try {
            const productDetails = await getProductDetails(productId);
            return {
              ...productDetails,
              quantity,
            };
          } catch (error) {
            console.error(`Error fetching product details for productId ${productId}:`, error);
            // Return a default product object in case of an error
            return {
              productId,
              name: 'Unknown Product',
              price: 0,
              quantity,
            };
          }
        })
      );
    
      // Filter out any items that had an error fetching details
      const validCartItems = detailedCartItems.filter((item) => item !== null);
    
      setCartItems(validCartItems);
    };
    
  
    fetchCartItems();
  }, []);
  

  const calculateTotal = () => {
    // Calculate the total price of items in the cart
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.productId} className="cart-item">
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