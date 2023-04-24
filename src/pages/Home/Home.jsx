import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import Feedback from "../../components/Feedback/Feedback";
import Filter from "../../components/Filter/Filter";
import { useEffect } from "react";
import { getData, filteredFeedbacks } from "../../data/dataSlice";

export default function Home() {
  const filteredItems = useSelector(filteredFeedbacks);

  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getData action creator function to get the data from the server and update the Redux store
    dispatch(getData());
  }, [dispatch]);

  // Get the productRequests array from the feedbacks data, or use an empty array if it doesn't exist

  // Render a Feedback component for each request in the productRequests array
  const feedback = filteredItems?.map((item) => {
    return <Feedback item={item} key={item.id} />;
  });

  return (
    <div>
      <Filter />
      <div className="feedbacks">{feedback}</div>
    </div>
  );
}
