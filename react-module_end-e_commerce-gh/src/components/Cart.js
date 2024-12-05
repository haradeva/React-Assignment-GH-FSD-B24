import React from 'react';
import { useCart } from '../context/cartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>Price: {item.price}</p>
          <p>Quantity: 
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;