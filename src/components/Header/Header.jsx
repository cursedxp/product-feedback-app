import "./Header.scss";
import OpenMenuIcon from "../../assets/icons/icon-hamburger.svg";
import CloseMenuIcon from "../../assets/icons/icon-close.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import RoadMapWidget from "../RoadmapWidget/RoadMapWidget";
import { createPortal } from "react-dom";

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
    <div className="filters-section">
      <div className="company">
        <div>
          <div>Frontend Mentor</div>
          <div className="board-name">Feedback Board</div>
        </div>
        <div className="menu" onClick={handleMenu}>
          <img src={showMobileMenu ? CloseMenuIcon : OpenMenuIcon} alt="" />
        </div>
      </div>
      <CategoryFilter categories={categories} />
      <RoadMapWidget />
      {showMobileMenu &&
        createPortal(
          <div className="mobile-menu">
            <div className="wrapper">
              <CategoryFilter categories={categories} />
              <RoadMapWidget />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
