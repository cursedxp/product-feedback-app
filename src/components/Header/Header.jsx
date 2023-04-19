import MenuIcon from "../../assets/icons/Menu.svg";
export default function Header() {
  return (
    <header>
      <div className="header-mobile">
        <span>Frontend Mentor</span>
        <span>Feedback Board</span>
      </div>
      <div>
        <img src={MenuIcon} alt="" />
      </div>
    </header>
  );
}
