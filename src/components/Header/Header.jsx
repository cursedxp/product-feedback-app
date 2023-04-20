import "./Header.scss";
import MenuIcon from "../../assets/icons/icon-hamburger.svg";

export default function Header() {
  return (
    <div className="company">
      <div>
        <div>Frontend Mentor</div>
        <div className="board-name">Feedback Board</div>
      </div>
      <div>
        <img src={MenuIcon} alt="" />
      </div>
    </div>
  );
}
