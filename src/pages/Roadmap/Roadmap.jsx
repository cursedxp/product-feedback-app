import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData, setStatus, filteredByStatus } from "../../data/dataSlice";
import { useEffect, useMemo, useState } from "react";
import leftArrow from "../../assets/icons/icon-arrow-left.svg";

import "./Roadmap.scss";
import RoadmapCard from "../../components/RoadmapCard/RoadmapCard";

export default function Roadmap() {
  const dispatch = useDispatch();
  const feedbacksByStatus = useSelector(filteredByStatus);
  const [contentTitle, setContentTitle] = useState("in-progress");
  const [infoText, setInfoText] = useState("Currently being developed");
  const [numFeedbacks, setNumFeedbacks] = useState(3);
  const memoizedFeedbacksByStatus = useMemo(
    () => feedbacksByStatus,
    [feedbacksByStatus]
  );

  const statuses = useSelector((state) => {
    return state.data.data.productRequests?.map((feedback) => feedback.status);
  });

  const memoizedAllStatuses = useMemo(() => statuses, [statuses]);

  const allStatus = memoizedAllStatuses
    ? memoizedAllStatuses.reduce((statusCount, status) => {
        if (Object.hasOwnProperty.call(statusCount, status)) {
          statusCount[status] += 1;
        } else {
          statusCount[status] = 1;
        }
        return statusCount;
      }, {})
    : {};

  useEffect(() => {
    dispatch(setStatus("in-progress"));
    dispatch(getData());
  }, [dispatch, contentTitle]);

  useEffect(() => {
    if (contentTitle === "planned") {
      setInfoText("Ideas prioritized for research");
    } else if (contentTitle === "live") {
      setInfoText("Released features");
    } else if (contentTitle === "in-progress") {
      setInfoText("Released features");
    }
  }, [infoText]);

  const handleSort = (status) => {
    dispatch(setStatus(status));
  };

  console.log("feedbacksByStatus", feedbacksByStatus);
  console.log("memoizedFeedbacksByStatus", memoizedFeedbacksByStatus);

  return (
    <div className="road-map">
      <div className="nav">
        <Link to={"/"} className="link">
          <img src={leftArrow} alt="" />
          <span>Go Back</span>
          <div>Roadmap</div>
        </Link>
        <button>+ Add Feedback</button>
      </div>
      <div className="roadmap-filter">
        {Object.entries(allStatus).map(([key, value]) => {
          if (key !== "suggestion") {
            const isActive = key === contentTitle;
            const colorClassName = isActive ? `status-${key}` : "";
            return (
              <div
                className={`status-menu ${colorClassName}`}
                key={key}
                onClick={() => {
                  handleSort(key);
                  setContentTitle(key);
                  setNumFeedbacks(value);
                }}
              >
                {key} ({value}){isActive && <div className="indicator" />}
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="feedback-list">
        <h3>
          {contentTitle} ({numFeedbacks})
        </h3>

        <div className="info-text">{infoText}</div>
        <div className="items">
          {feedbacksByStatus &&
            feedbacksByStatus.map((item) => (
              <RoadmapCard item={item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
}
