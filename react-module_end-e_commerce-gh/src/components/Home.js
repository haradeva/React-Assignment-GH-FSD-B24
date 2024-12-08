import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import ProductList from "./ProductList";
import productsData from "../products.json";
import Cart from "./Cart";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = productsData.length
    ? [...new Set(productsData.map((product) => product.category))]
    : [];
  return (
    <div>
      <h1>Welcome to My E-commerce Store!</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList
        products={filteredProducts}
        searchTerm={searchQuery}
        selectedCategory={selectedCategory}
      />
      <Cart />
    </div>
  );
};

export default Home;
