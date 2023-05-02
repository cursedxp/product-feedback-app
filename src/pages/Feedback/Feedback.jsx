import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../data/dataSlice";
import { useEffect, useMemo, useState } from "react";
import FeedbackComp from "../../components/Feedback/Feedback";
import "./Feedback.scss";
import Comment from "../../components/Comment/Comment";
import arrowIconLeft from "../../assets/icons/icon-arrow-left.svg";

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

  const [charCount, setCharCount] = useState(250);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCharCount(charCount - value.length);
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="feedback-details">
      <div className="page-nav">
        <div>
          <Link to={"/"} className="link">
            <img src={arrowIconLeft} alt={arrowIconLeft} />

            <span>Go Back</span>
          </Link>
        </div>
        <Link to={`/feedback/edit/${id}`}>
          <button>Edit feedback</button>
        </Link>
      </div>
      <FeedbackComp item={feedback} />
      <div className="comments">
        <div className="section-header">
          <span>{feedback.comments.length}</span>
          <span>Comments</span>
        </div>
        {feedback.comments.map((comment) => {
          return <Comment comment={comment} key={comment.id} />;
        })}
      </div>
      <div className="add-comment">
        <div className="section-header">
          <span>Add Comment</span>
        </div>
        <form>
          <div>
            <textarea
              onChange={handleInputChange}
              placeholder="Type your comment here"
            />
          </div>
          <div className="char-count">
            <p>{charCount} Characters left</p>
            <button type="submit">Post Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
}
