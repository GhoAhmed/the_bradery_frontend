// redux/actions/authActions.js
import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from './constants';

export const loginUser = (email, password, navigate) => async (dispatch) => {
  try {
    console.log('Attempting to log in...');

    const response = await axios.post('http://localhost:8000/api/signin', {
      email,
      password,
    });

    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem('accessToken', response.data.token);

    // Log the token and user reference
    console.log('Token:', response.data.token);
    console.log('User:', response.data.user);

    navigate('/home');
  } catch (error) {
    console.error('loginUser error:', error);
    // You can dispatch LOGIN_FAIL here if needed
  }
};

export const registerUser = (name, email, password, navigate) => async (dispatch) => {
  try {
    console.log('Attempting to register...');

    const response = await axios.post('http://localhost:8000/api/signup', {
      name,
      email,
      password,
    });

    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    localStorage.setItem('accessToken', response.data.token);

    // Log the token and user reference
    console.log('Token:', response.data.token);
    console.log('User:', response.data.user);

    navigate('/home');
  } catch (error) {
    // Handle any errors here, e.g., dispatch an error action
    console.error('registerUser error:', error);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
