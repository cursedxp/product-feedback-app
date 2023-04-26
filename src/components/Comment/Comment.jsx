import { Link } from "react-router-dom";
import "./Comment.scss";
export default function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="author-details">
        <img src={comment.user.image} alt={comment.user.name} />
        <div className="flex column">
          <div className="author-name">{comment.user.name}</div>
          <div className="author-username">@{comment.user.username}</div>
        </div>
        <Link className="link">Reply</Link>
      </div>
      <div className="comment-content">
        <p>{comment.content}</p>
      </div>
    </div>
  );
}
