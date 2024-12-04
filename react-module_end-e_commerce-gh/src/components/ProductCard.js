import React from 'react';
import { useCart } from '../context/cartContext';


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

const { addToCart } = useCart();

  return (
    <div style={stylesContainer}>
      <img src={product.image} style={stylesImage} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
