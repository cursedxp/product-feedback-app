import "./Filter.scss";
import { ReactComponent as ArrowIconDown } from "../../assets/icons/icon-arrow-down.svg";
import { Link } from "react-router-dom";
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
      <Link to={"/feedback/newfeedback"}>
        <button>
          <img src="" alt="" />+ Add Feedback
        </button>
      </Link>
    </div>
  );
}
