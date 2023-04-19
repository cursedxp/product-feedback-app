import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import Feedback from "./pages/Feedback/Feedback";
import Header from "./components/Header/Header";

function App() {
  //This hook returns the current location object
  const location = useLocation();
  const pathLocation = location.pathname;

  //List of paths to hide header
  const hideHeaderOnPaths = ["/feedback"];
  const hideHeader = hideHeaderOnPaths.includes(pathLocation);

  return (
    <div className="App">
      {/* Hides header for specific routes */}
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
