// src/components/Filter.js
import React from "react";

const Filter = ({ handleTitleFilter, handleRatingFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => handleTitleFilter(e.target.value)}
      />
      <input
        type="number"
        min="1"
        max="10"
        placeholder="Filter by rating"
        onChange={(e) => handleRatingFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
