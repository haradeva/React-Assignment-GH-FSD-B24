import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import ProductCard from "./ProductCard";

const stylesList = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
};

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

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
      <SearchBar onSearchChange={handleSearchChange} />
      <Filter onFilterChange={handleFilterChange} />
      <div style={stylesList}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
