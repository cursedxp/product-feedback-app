import { v4 as uuidv4 } from "uuid";
export default function CategoryFilter({ categories }) {
  return (
    <div className="category-filter">
      {categories.map((category) => {
        const uniqueId = uuidv4();
        return (
          <div key={uniqueId}>
            <input type="radio" name="category" value={category} />
            <label htmlFor={category}>{category}</label>
          </div>
        );
      })}
    </div>
  );
}
