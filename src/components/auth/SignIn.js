import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        // Authentication successful
        console.log('Authentication successful', response.data);

        // Redirect to /home
        navigate('/home');
      } else {
        console.error('Authentication failed', response.data.error);
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
