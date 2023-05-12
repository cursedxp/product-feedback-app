import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import Feedback from "../../components/Feedback/Feedback";
import Filter from "../../components/Filter/Filter";
import { useEffect } from "react";
import { getData, sortAndFilterFeedbacks } from "../../data/dataSlice";
import { Link } from "react-router-dom";

export default function Home() {
  const filteredItems = useSelector(sortAndFilterFeedbacks);

  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getData action creator function to get the data from the server and update the Redux store
    dispatch(getData());
  }, [dispatch]);

  // Render a Feedback component for each request in the productRequests array
  const feedback = filteredItems?.map((item) => {
    return (
      <Link to={`/feedback/${item.id}`} key={item.id} className="link">
        <Feedback item={item} />
      </Link>
    );
  });

  return (
    <div className="home">
      <Filter />
      <div className="feedbacks">{feedback}</div>
    </div>
  );
}
