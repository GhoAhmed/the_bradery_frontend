// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Navbar from './components/navbar/NavBar';
import Checkout from './components/checkout/Checkout';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleCheckout = () => {
    // Implement logic for checkout
    console.log('Checking out...');
  };

  return (
    <Router>
      <div>
        <Navbar cartCount={cartCount} onCheckout={handleCheckout} setCartCount={setCartCount}/>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={<Home setCartCount={setCartCount} />} // Pass setCartCount to Home
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
