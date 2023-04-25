import "./Header.scss";
import OpenMenuIcon from "../../assets/icons/icon-hamburger.svg";
import CloseMenuIcon from "../../assets/icons/icon-close.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import { Link } from "react-router-dom";

export default function Header() {
  //Get all feedback categories from the store
  const categories = useSelector((state) => {
    const allCategories = new Set(
      state.data.data.productRequests?.map((request) => request.category)
    );
    return [...allCategories];
  });

  //Make mobile menu hidden on mobile views when the view is loaded
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  //Show and hide mobile menu
  const handleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <div className="company">
        <div>
          <div>Frontend Mentor</div>
          <div className="board-name">Feedback Board</div>
        </div>
        <div className="menu" onClick={handleMenu}>
          <img src={showMobileMenu ? CloseMenuIcon : OpenMenuIcon} alt="" />
        </div>
      </div>
      <div className="sort-categories"></div>
      {showMobileMenu && (
        <div className="mobile-menu">
          <div className="wrapper">
            <CategoryFilter categories={categories} />
            <div className="road-map">
              <div className="flex space-between">
                <span className="card-title">Roadmap</span>
                <Link>View</Link>
              </div>
              <ul>
                <li>
                  <div>
                    <span className="orange"></span>
                    <span className="status">Planned</span>
                  </div>
                  <span className="total">2</span>
                </li>
                <li>
                  <div>
                    <span className="violet"></span>
                    <span className="status">In-Progress</span>
                  </div>
                  <span className="total">3</span>
                </li>
                <li>
                  <div>
                    <span className="blue"></span>
                    <span className="status">Live</span>
                  </div>
                  <span className="total">1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
