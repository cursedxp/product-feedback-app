import CommetIcon from "../../assets/icons/icon-comments.svg";
import ArrowIconUp from "../../assets/icons/icon-arrow-up.svg";

import "./RoadmapCard.scss";

export default function RoadmapCard({ item }) {
  const { title, description, category, upvotes, comments, status } = item;

  let cardColorClass = {};
  if (status === "in-progress") {
    cardColorClass.backgroundColor = "#AD1FEA";
  } else if (status === "planned") {
    cardColorClass.backgroundColor = "#F49F85";
  } else if (status === "live") {
    cardColorClass.backgroundColor = "#62BCFA";
  }

  console.log(status);

  return (
    <div className="roadmap-card">
      <div className="card-color" style={cardColorClass}></div>
      <div className="card-status">
        <span className="circle" style={cardColorClass}></span>
        <span className="status">{status}</span>
      </div>
      <div className="item-details">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="category">{category}</div>
      </div>
      <div className="upvotes-comments">
        <div className="upvotes">
          <img src={ArrowIconUp} alt="" />
          {upvotes}
        </div>
        <div className="total-comments">
          <img src={CommetIcon} alt="" />
          {comments && comments.length ? comments.length : 0}
        </div>
      </div>
    </div>
  );
}
