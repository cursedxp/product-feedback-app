import { useSelector, useDispatch } from "react-redux";
import Feedback from "../../components/Feedback/Feedback";
import Filter from "../../components/Filter/Filter";
import { useEffect } from "react";
import { getData } from "../../data/dataSlice";

export default function Home() {
  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the getData action creator function to get the data from the server and update the Redux store
    dispatch(getData());
  }, [dispatch]);

  // Select the data slice of the Redux store
  const feedbacks = useSelector((state) => {
    return state.data;
  });

  // Get the productRequests array from the feedbacks data, or use an empty array if it doesn't exist
  const requests = feedbacks?.data?.productRequests || [];

  // Render a Feedback component for each request in the productRequests array
  const feedback = requests.map((request) => {
    return <Feedback request={request} key={request.id} />;
  });

  return (
    <div>
      <Filter />
      <h1>Home</h1>
      {feedback}
    </div>
  );
}
