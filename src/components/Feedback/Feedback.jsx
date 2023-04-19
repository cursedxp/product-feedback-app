import CommetIcon from "../../assets/icons/icon-comments.svg";
import ArrowIconUp from "../../assets/icons/icon-arrow-up.svg";
export default function Feedback() {
  return (
    <div>
      <div>Add tags for solutions</div>
      <div>Easier to search for solutions based on a specific stack.</div>
      <div>Enhancement</div>
      <div>
        <div>
          <img src={ArrowIconUp} alt="" />
          112
        </div>
        <div>
          <img src={CommetIcon} alt="" />2
        </div>
      </div>
    </div>
  );
}
