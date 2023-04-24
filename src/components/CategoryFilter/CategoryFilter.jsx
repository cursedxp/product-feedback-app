import { v4 as uuidv4 } from "uuid";
import { setFilter } from "../../data/dataSlice";
import { useDispatch } from "react-redux";

export default function CategoryFilter({ categories }) {
  const dispatch = useDispatch();

  //Set filter category when user clicks on radio buttons
  const handleFilter = (categoryName) => {
    dispatch(setFilter(categoryName));
  };

  return (
    <div className="category-filter">
      <div>
        <input
          type="radio"
          name="category"
          value="all"
          onChange={() => {
            handleFilter("all");
          }}
        />
        <label htmlFor="all">all</label>
      </div>
      {categories.map((category) => {
        const uniqueId = uuidv4();
        return (
          <div key={uniqueId}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={() => {
                handleFilter(category);
              }}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        );
      })}
    </div>
  );
}
