import { ADD_TO_CART } from './constants';

export const addToCart = (productId) => (dispatch) => {
    // Check if productId is valid
    if (!productId) {
      console.error('Invalid productId:', productId);
      return;
    }
  
    // Get the current cart data from local storage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || {};
  
    // Update the cart data with the new product
    currentCart[productId] = (currentCart[productId] || 0) + 1;
  
    // Save the updated cart data to local storage
    localStorage.setItem('cart', JSON.stringify(currentCart));
  
    // Log the updated cart data for debugging
    console.log('Updated cart in addToCart:', currentCart);

    dispatch({
      type: ADD_TO_CART,
      payload: productId,
    });
  };
  