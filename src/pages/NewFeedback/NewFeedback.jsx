import { Link } from "react-router-dom";
import "./NewFeedback.scss";
import arrowIconLeft from "../../assets/icons/icon-arrow-left.svg";
import { useState, useEffect } from "react";
import newImage from "../../assets/img/icon-new-feedback.svg";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../data/dataSlice";
export default function NewFeedback() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => {
    return state.data.data.productRequests;
  });

  useEffect(() => {
    dispatch(getData());
  }, [dispatch, feedbacks]);

  const categories = useSelector((state) => {
    const allCategories = new Set(
      state.data.data.productRequests?.map((request) => request.category)
    );
    return [...allCategories];
  });

  return (
    <div className="create-feedback">
      <div className="page-nav">
        <div>
          <Link to={`/`} className="link">
            <img src={arrowIconLeft} alt={arrowIconLeft} />
            <span>Go Back</span>
          </Link>
        </div>
      </div>
      <div className="new">
        <img src={newImage} alt="" className="container-image" />
        <div className="feedback-title">Create New Feedback</div>
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
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="detail-section">
            <div className="feedback-detail">Feedback detail</div>
            <div className="detail-subtext">
              Include any specific comments on what should be improved, added,
              etc.
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
            <button className="save">Add Feedback</button>
            <button className="cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
