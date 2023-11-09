// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Navbar from './components/navbar/NavBar';
import Checkout from './components/checkout/Checkout';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar cartCount={cartCount} setCartCount={setCartCount} />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={<Home setCartCount={setCartCount} />}
            />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
