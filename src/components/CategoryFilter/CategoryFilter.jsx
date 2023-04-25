import { setFilter } from "../../data/dataSlice";
import { useDispatch } from "react-redux";
import "./CategoryFilter.scss";
import React from "react";

export default function CategoryFilter({ categories }) {
  const dispatch = useDispatch();

  // Set filter category when user clicks on radio buttons
  const handleFilter = (categoryName) => {
    dispatch(setFilter(categoryName));
  };

  return (
    <div className="category-filter">
      <>
        <input
          type="radio"
          name="category"
          id="all"
          onChange={() => handleFilter("all")}
        />
        <label htmlFor="all">all</label>
      </>
      {categories.map((category) => (
        <React.Fragment key={category}>
          <input
            type="radio"
            name="category"
            id={category}
            value={category}
            onChange={() => handleFilter(category)}
          />
          <label htmlFor={category}>{category}</label>
        </React.Fragment>
      ))}
    </div>
  );
}
