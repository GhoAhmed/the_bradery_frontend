import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to The Bradery</h1>
      <p>
        <Link to="/signin">Sign In</Link>
      </p>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LandingPage;
