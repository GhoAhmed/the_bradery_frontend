// redux/reducers/productReducer.js

import { UPDATE_PRODUCTS, SET_ERROR } from '../actions/constants';

const initialState = {
  products: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    // Other cases...
    default:
      return state;
  }
};

export default productReducer;
