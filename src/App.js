import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import Feedback from "./pages/Feedback/Feedback";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
