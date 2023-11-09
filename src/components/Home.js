import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './assets/ProductList.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await axios.get('http://127.0.0.1:8000/api/products', {
          headers,
        });

        if (response.status === 200) {
          setProducts(response.data.products); // Assuming products are nested under 'products'
        } else {
          console.error('Error fetching products', response.data.error);
          setError(response.data.error); // Set the error state
        }
      } catch (error) {
        console.error('Error fetching products', error);
        setError('An error occurred while fetching products.'); // Set a generic error message
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    // Implement the logic to add the product to the cart
    console.log(`Product added to cart: ${productId}`);
  };

  return (
    <div>
      <h2>Welcome to The Bradery - Home</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <div className="product-container">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h4>{product.name}</h4>
                <p>Price: ${product.price}</p>
                <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
