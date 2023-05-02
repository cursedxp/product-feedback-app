import { Link, useParams } from "react-router-dom";
import arrowIconLeft from "../../assets/icons/icon-arrow-left.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { getData } from "../../data/dataSlice";
import { v4 as uuidv4 } from "uuid";
import "./EditFeedback.scss";
import EditImage from "../../assets/img/icon-edit-feedback.svg";

export default function EditFeedback() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState();
  const [description, setDescription] = useState("");

  const feedbacks = useSelector((state) => {
    return state.data.data.productRequests;
  });

  const memoizedFeedbacks = useMemo(() => feedbacks, [feedbacks]);

  const [feedback, setFeedback] = useState(
    memoizedFeedbacks.find((item) => {
      return item.id === Number(id);
    })
  );

  useEffect(() => {
    dispatch(getData());
    if (feedback) {
      setTitle(feedback.title);
      setDescription(feedback.description);
      setCategory(feedback.category);
      setStatus(feedback.status);
    } else {
      setFeedback(
        feedbacks.find((item) => {
          return item.id === Number(id);
        })
      );
    }
  }, [dispatch, feedbacks, id, feedback]);

  const statuses = useSelector((state) => {
    const allStatus = new Set(
      state.data?.data?.productRequests?.map((feedback) => {
        return feedback.status;
      })
    );
    return [...allStatus];
  });

  const categories = useSelector((state) => {
    const allCategories = new Set(
      state.data.data.productRequests?.map((request) => request.category)
    );
    return [...allCategories];
  });

  return (
    <div className="edit-feedback">
      <div className="page-nav">
        <div>
          <Link to={`/feedback/${id}`} className="link">
            <img src={arrowIconLeft} alt={arrowIconLeft} />

            <span>Go Back</span>
          </Link>
        </div>
      </div>
      <div className="edit">
        <img src={EditImage} alt="" className="container-image" />
        <div className="feedback-title">{feedback.title}</div>
        <form>
          <div className="title-section">
            <div className="title">Feedback Title</div>
            <div className="title-subtext">
              Add a short, descriptive headline
            </div>
            <input
              type="text"
              name=""
              id=""
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="category-section">
            <div className="category-name">Category</div>
            <div className="category-subtext">
              Choose a category for your feedback
            </div>
            <select
              name=""
              id=""
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {categories.map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item}
                    defaultValue={item === feedback.category}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="status-section">
            <div className="status-name">Update Status</div>
            <div className="status-subtext">Change feature state</div>
            <select
              name=""
              id=""
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              {statuses.map((status, index) => {
                return (
                  <option
                    key={index}
                    value={status}
                    defaultValue={status === feedback.status}
                  >
                    {status}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="detail-section">
            <div className="feedback-detail">Feedback detail</div>
            <div className="detail-subtext">
              Add a short, descriptive headline
            </div>
            <textarea
              name=""
              id=""
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="button-group">
            <button className="save">Save Changes</button>
            <button className="cancel">Cancel</button>
            <button className="delete">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}
