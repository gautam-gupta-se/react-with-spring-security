import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ({ token }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/cart', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(response.data);
      } catch (error) {
        console.error('Cart data error:', error.response.data);
      }
    };
    fetchCartItems();
  }, [token]);

  return (
    <div>
      <h2>Cart Page</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
