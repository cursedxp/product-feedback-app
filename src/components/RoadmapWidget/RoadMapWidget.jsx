import { Link } from "react-router-dom";
import "./RoadMapWidget.scss";
export default function RoadMapWidget() {
  return (
    <div className="road-map-widget">
      <div className="flex space-between align-center">
        <span className="card-title">Roadmap</span>
        <Link to={"/roadmap"} className="link">
          View
        </Link>
      </div>
      <ul>
        <li>
          <div>
            <span className="orange"></span>
            <span className="status">Planned</span>
          </div>
          <span className="total">2</span>
        </li>
        <li>
          <div>
            <span className="violet"></span>
            <span className="status">In-Progress</span>
          </div>
          <span className="total">3</span>
        </li>
        <li>
          <div>
            <span className="blue"></span>
            <span className="status">Live</span>
          </div>
          <span className="total">1</span>
        </li>
      </ul>
    </div>
  );
}
