import { Link } from "react-router-dom";
import "./Comment.scss";
import Reply from "../Reply/Reply";
import { v4 as uuidv4 } from "uuid";
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
        {comment.replies && (
          <div className="replies">
            {comment.replies.map((reply) => {
              const id = uuidv4();
              return <Reply reply={reply} key={id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
