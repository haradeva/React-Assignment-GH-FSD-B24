import React from "react";
import { useCart } from "../context/cartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: Number(quantity) },
    });
  };

  const stylesCart = {
    border: "1px solid #ccc",
    padding: "8px",
    margin: "8px 0",
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={stylesCart}>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
