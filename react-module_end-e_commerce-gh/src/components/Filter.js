import React, { useState } from "react";

const Filter = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleFilterChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
