import { Link } from "react-router-dom";
import "./Reply.scss";
export default function Reply({ reply }) {
  return (
    <div className="reply">
      <div className="author-details">
        <img src={reply.user.image} alt={reply.user.name} />
        <div className="flex column">
          <div className="author-name">{reply.user.name}</div>
          <div className="author-username">{reply.user.username}</div>
        </div>
        <Link className="link">Reply</Link>
      </div>
      <p>{reply.content}</p>
    </div>
  );
}
