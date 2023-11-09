import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/the_bradery_logo.jpg';
import './NavBar.css';

const Navbar = ({ cartCount, setCartCount }) => {
  const [isCartOpen, setCartOpen] = useState(false);

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
              Cart <span className="cart-count">{cartCount}</span>
            </button>
          </Link>
          {cartCount > 0 && isCartOpen && (
            <div className="cart-dropdown">
              {/* Render the cart items here */}
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