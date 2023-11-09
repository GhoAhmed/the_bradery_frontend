// redux/reducers/cartReducer.js

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/constants';

const initialState = {
  items: {}, // Object to store cart items with productId as key and quantity as value
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.productId]: (state.items[action.payload.productId] || 0) + 1,
        },
      };
    case REMOVE_FROM_CART:
      // Implement logic to remove item from the cart
      // You may decrement the quantity or completely remove the item based on your requirements
      return state;
    case CLEAR_CART:
      return {
        ...state,
        items: {},
      };
    // Add more cases as needed for your specific cart actions

    default:
      return state;
  }
};

export default cartReducer;
