// redux/reducers/rootReducer.js

import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer'; // Correct import path

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer, // Add cartReducer here
  // Add more reducers here if you have them.
});

export default rootReducer;
