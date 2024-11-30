import ProductCard from "./ProductCard";
import products from "../products.json";

const stylesList = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const ProductList = () => {
  return (
    <div style={stylesList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
