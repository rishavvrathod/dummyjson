
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './components/action';
import axios from 'axios';

const Home = ({ token }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/api/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        // Process and display products on the page
        // ...

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [token]);

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      {/* Render products and implement search and filter functionality */}
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
