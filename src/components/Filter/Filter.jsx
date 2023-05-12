import "./Filter.scss";
import { ReactComponent as ArrowIconDown } from "../../assets/icons/icon-arrow-down.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../data/dataSlice";
import checkIcon from "../../assets/icons/icon-check.svg";
import suggestionIcon from "../../assets/icons/icon-suggestions.svg";

export default function Filter({ items }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //I want to show check icon to clarify current sort order to user
  // when: after selection is done
  // what i need: to find which item is checked
  // how: show check icon on selected filter

  const handleSort = (sortOrder) => {
    dispatch(setSort(sortOrder));
    setIsOpen(false);
  };

  return (
    <div className="filter">
      <div className="flex">
        <div className="suggestions">
          <img src={suggestionIcon} alt="" />
          <span>{items} Suggestions</span>
        </div>
        <div>Sortby : </div>
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          <span>{selectedOption ? selectedOption : "Select an option"}</span>
          <ArrowIconDown className="arrow-icon" />
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            <li
              onClick={() => {
                setIsChecked("most-upvotes");
                handleSort("most-upvotes");
                setSelectedOption("Most Upvotes");
              }}
            >
              Most Upvotes
              {isChecked === "most-upvotes" && (
                <img src={checkIcon} alt={checkIcon}></img>
              )}
            </li>
            <li
              onClick={() => {
                setIsChecked("least-upvotes");
                handleSort("least-upvotes");
                setSelectedOption("Least Upvotes");
              }}
            >
              Least Upvotes
              {isChecked === "least-upvotes" && (
                <img src={checkIcon} alt={checkIcon}></img>
              )}
            </li>
            <li
              onClick={() => {
                setIsChecked("most-comments");
                handleSort("most-comments");
                setSelectedOption("Most Comments");
              }}
            >
              Most Comments
              {isChecked === "most-comments" && (
                <img src={checkIcon} alt={checkIcon}></img>
              )}
            </li>
            <li
              onClick={() => {
                setIsChecked("least-comments");
                handleSort("least-comments");
                setSelectedOption("Least Comments");
              }}
            >
              Least Comments
              {isChecked === "least-comments" && (
                <img src={checkIcon} alt={checkIcon}></img>
              )}
            </li>
          </ul>
        )}
      </div>
      <Link to={"/feedback/newfeedback"}>
        <button>
          <img src="" alt="" />+ Add Feedback
        </button>
      </Link>
    </div>
  );
}
