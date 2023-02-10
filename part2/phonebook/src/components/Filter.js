import React from "react";

const Filter = ({ filterName, onFilterChange }) => {

    return (
    <p>
      filter shown with <input onChange={onFilterChange} value={filterName} />
    </p>
  );
};

export default Filter;
