import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/the_bradery_logo.jpg';
import './NavBar.css';

const Navbar = ({ cartCount, setCartCount }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, [cartCount]);

  const handleCartClick = () => {
    setCartOpen((prev) => !prev);
  };

  const handleClearCart = () => {
    // Clear the cart data from local storage
    localStorage.removeItem('cart');

    // Reset the cart count using local state
    setCartCount(0);
    // Update local storage with the new cart count
    localStorage.setItem('cartCount', '0');
    setCartOpen(false);
  };

  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="cart-container">
        <div className="cart-button-container">
          <Link to="/checkout">
            <button className="cart-button" onClick={handleCartClick}>
              Cart <span className="cart-count">{isNaN(cartCount) ? 0 : cartCount}</span>
            </button>
          </Link>
          {cartCount > 0 && isCartOpen && (
            <div className="cart-dropdown">
              {cartItems.map((item) => (
                <div key={item.productId} className="cart-item">
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {cartCount > 0 && (
          <button onClick={handleClearCart} className="clear-cart-button">
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
