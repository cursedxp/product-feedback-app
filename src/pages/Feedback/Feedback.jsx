import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../data/dataSlice";
import { useEffect, useMemo } from "react";
import FeedbackComp from "../../components/Feedback/Feedback";
import "./Feedback.scss";
import Comment from "../../components/Comment/Comment";

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
          return <Comment comment={comment} />;
        })}
      </div>
    </div>
  );
}
