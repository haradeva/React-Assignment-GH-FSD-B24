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

  return (
    <div style={stylesContainer}>
      <img src={product.image} style={stylesImage} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
