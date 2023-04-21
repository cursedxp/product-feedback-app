import CommetIcon from "../../assets/icons/icon-comments.svg";
import ArrowIconUp from "../../assets/icons/icon-arrow-up.svg";
export default function Feedback({ request }) {
  const { title, description, category, upvotes, comments } = request;

  return (
    <div className="feedback">
      <div className="item-details">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="category">{category}</div>
      </div>
      <div className="upvotes">
        <img src={ArrowIconUp} alt="" />
        {upvotes}
      </div>
      <div className="comments">
        <img src={CommetIcon} alt="" />
        {comments && comments.length ? comments.length : 0}
      </div>
    </div>
  );
}
