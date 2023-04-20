import "./Filter.scss";
import ArrowIconDown from "../../assets/icons/icon-arrow-down.svg";

export default function Filter() {
  return (
    <div className="filter">
      <div>
        <div>Sortby :</div>
        <div>
          <span>Most Upvotes</span>
          <img src={ArrowIconDown} alt="" />
        </div>
      </div>
      <button>
        <img src="" alt="" />+ Add Feedback
      </button>
    </div>
  );
}
