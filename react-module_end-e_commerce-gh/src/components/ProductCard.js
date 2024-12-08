import React from "react";
import { useCart } from "../context/cartContext";

const ProductCard = ({ product }) => {
  const stylesContainer = {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "16px",
  };
  const stylesImage = {
    width: "150px",
    height: "150px",
  };

  const { dispatch } = useCart();
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div style={stylesContainer}>
      <img
        src={product.image || "https://via.placeholder.com/150"}
        style={stylesImage}
        alt={product.name || "Product Image"}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
