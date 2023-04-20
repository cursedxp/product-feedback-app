import "./Filter.scss";
import { ReactComponent as ArrowIconDown } from "../../assets/icons/icon-arrow-down.svg";

export default function Filter() {
  return (
    <div className="filter">
      <div className="flex">
        <div>Sortby : </div>
        <div className="sort">
          <span>Most Upvotes</span>
          <ArrowIconDown className="arrow-icon" />
        </div>
      </div>
      <button>
        <img src="" alt="" />+ Add Feedback
      </button>
    </div>
  );
}
