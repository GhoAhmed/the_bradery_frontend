// productApi.js

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Update this with your actual API base URL

export const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data; // Assuming your API response contains the product details
  } catch (error) {
    console.error(`Error fetching product details for productId ${productId}:`, error);
    return null;
  }
};
