import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../data/dataSlice";
import { useEffect, useMemo } from "react";
import FeedbackComp from "../../components/Feedback/Feedback";
import "./Feedback.scss";
import { Link } from "react-router-dom";

export default function Feedback() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const feedbacks = useSelector((state) => {
    return state.data.data.productRequests;
  });

  const feedback = useMemo(() => {
    return feedbacks.find((item) => item.id === Number(id));
  }, [feedbacks, id]);

  return (
    <div className="feedback-details">
      <FeedbackComp item={feedback} />
      <div className="comments">
        <div className="section-header">
          <span>{feedback.comments.length}</span>
          <span>Comments</span>
        </div>
        {feedback.comments.map((comment) => {
          return (
            <div className="comment">
              <div className="author-details">
                <img src={comment.user.image} alt={comment.user.name} />
                <div className="flex column">
                  <div className="author-name">{comment.user.name}</div>
                  <div className="author-username">
                    @{comment.user.username}
                  </div>
                </div>
                <Link>Reply</Link>
                {console.log(feedback.comments)}
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
