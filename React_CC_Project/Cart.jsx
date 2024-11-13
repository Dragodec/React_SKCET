import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';
import './Cart.css';

const Cart = () => {
  const { currentUser } = useUser();
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchCartItems = () => {
    axios.get("http://localhost:3002/cart")
      .then(response => {
        const items = response.data;
        setCartItems(items);
        calculateTotal(items);
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
        setCartItems([]);
        setTotalAmount(0);
      });
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.offerPrice * item.quantity), 0);
    setTotalAmount(total);
  };

  useEffect(() => {
    fetchCartItems();
  });

  const handleRemove = (itemId) => {
    if (window.confirm("Remove from cart?")) {
      axios.delete(`http://localhost:3002/cart/${itemId}`)
        .then(() => {
          const updatedItems = cartItems.filter(item => item.id !== itemId);
          setCartItems(updatedItems);
          calculateTotal(updatedItems);
        })
        .catch(error => {
          console.error("Error updating cart:", error);
          alert("Failed to update cart.");
        });
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    calculateTotal(updatedItems);

    axios.put(`http://localhost:3002/cart/${itemId}`, { ...updatedItems.find(item => item.id === itemId), quantity: newQuantity })
      .catch(error => {
        console.error("Error updating quantity:", error);
        alert("Failed to update quantity.");
      });
  };

  const handlePay = () => {
    alert("Successfully paid!");
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>

      <div className="cart-items">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="gift-card" key={item.id}>
              <h4 className="gift-name">{item.name}</h4>
              <p className="actual-price">Actual Price: ${item.actualPrice.toFixed(2)}</p>
              <p className="offer-price">Offer Price: ${item.offerPrice.toFixed(2)}</p>
              <div className="quantity">
                <button 
                  className="minus" 
                  aria-label="Decrease" 
                  onClick={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))}
                >
                  −
                </button>
                
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(item.id, Math.max(parseInt(e.target.value), 1))}
                  className="quantity-input"
                />
                
                <button 
                  className="plus" 
                  aria-label="Increase" 
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>

      {/* Conditionally render the Pay button */}
      {currentUser && cartItems.length > 0 && (
        <button className="pay-button" onClick={handlePay}>Pay</button>
      )}
    </div>
  );
};

export default Cart;