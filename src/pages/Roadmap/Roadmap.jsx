import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData, setStatus, filteredByStatus } from "../../data/dataSlice";
import { useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Roadmap() {
  const dispatch = useDispatch();
  const feedbacksByStatus = useSelector(filteredByStatus);
  const memoizedFeedbacksByStatus = useMemo(
    () => feedbacksByStatus,
    [feedbacksByStatus]
  );
  const statuses = new Set(
    useSelector((state) => {
      return state.data.data.productRequests?.map(
        (feedback) => feedback.status
      );
    })
  );
  const memoizedStatuses = useMemo(() => statuses, [statuses]);

  useEffect(() => {
    dispatch(setStatus("planned"));
    dispatch(getData());
  }, [dispatch]);

  const handleSort = (status) => {
    dispatch(setStatus(status));
  };

  console.log(memoizedFeedbacksByStatus);

  return (
    <div>
      <div className="nav">
        <Link>
          <img src="" alt="" />
          <span>Go Back</span>
        </Link>
        <button>+ Add Feedback</button>
      </div>
      <div className="roadmap-filter">
        {Array.from(memoizedStatuses).map((status) => {
          const uuid = uuidv4();
          return (
            <div
              key={uuid}
              onClick={() => {
                handleSort(status);
              }}
            >
              {status}
            </div>
          );
        })}
      </div>
      <div className="feedback-list"></div>
    </div>
  );
}
