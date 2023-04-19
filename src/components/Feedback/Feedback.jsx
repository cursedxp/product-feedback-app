import CommetIcon from "../../assets/icons/icon-comments.svg";
import ArrowIconUp from "../../assets/icons/icon-arrow-up.svg";
export default function Feedback({ request }) {
  const { title, description, category, upvotes, comments } = request;

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{category}</div>
      <div>
        <div>
          <img src={ArrowIconUp} alt="" />
          {upvotes}
        </div>
        <div>
          <img src={CommetIcon} alt="" />
          {comments && comments.length}
        </div>
      </div>
    </div>
  );
}
