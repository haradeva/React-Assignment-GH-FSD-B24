import React from "react";
import ProductCard from "./ProductCard";

const stylesList = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const ProductList = ({ products, searchTerm, selectedCategory }) => {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div style={stylesList}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
