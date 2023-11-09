import axios from 'axios';
import { UPDATE_PRODUCTS,  SET_ERROR} from './constants';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    //console.log('API Response:', response.data); // Log the response

    dispatch({ type: UPDATE_PRODUCTS, payload: response.data.products });
  } catch (error) {
    console.error('getProducts error:', error);
    dispatch({ type: SET_ERROR, payload: 'Error fetching products' });
  }
};



export const getProductDetails = async (productIds) => {
  try {
    const promises = productIds.map(async (productId) => {
      const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
      return response.data;
    });

    const productDetails = await Promise.all(promises);
    return productDetails;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return [];
  }
};