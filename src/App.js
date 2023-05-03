import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import Feedback from "./pages/Feedback/Feedback";
import Header from "./components/Header/Header";
import EditFeedback from "./pages/EditFeedback/EditFeedback";
import NewFeedback from "./pages/NewFeedback/NewFeedback";

function App() {
  // Get the current URL location using the useLocation hook from react-router-dom
  const location = useLocation();
  const pathLocation = location.pathname;

  // Check if the current path is in the hideHeaderPaths array using the includes method
  const hideHeader = pathLocation.includes("/feedback/");

  return (
    <div className="App">
      {/* Conditionally render the Header component based on the value of hideHeader  */}
      {!hideHeader && <Header />}

      {/* Define the routes for the application using the Routes and Route components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/feedback/:id" element={<Feedback />} />
        <Route path="/feedback/edit/:id" element={<EditFeedback />} />
        <Route path="/feedback/newfeedback" element={<NewFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
