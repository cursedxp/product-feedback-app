import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import Feedback from "./pages/Feedback/Feedback";
import Header from "./components/Header/Header";

function App() {
  // Get the current URL location using the useLocation hook from react-router-dom
  const location = useLocation();
  const pathLocation = location.pathname;

  // Define an array of paths where the header should be hidden
  const hideHeaderOnPaths = ["/feedback"];

  // Check if the current path is in the hideHeaderPaths array using the includes method
  const hideHeader = hideHeaderOnPaths.includes(pathLocation);

  return (
    <div className="App">
      {/* Conditionally render the Header component based on the value of hideHeader  */}
      {!hideHeader && <Header />}

      {/* Define the routes for the application using the Routes and Route components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/feedback/:id" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
