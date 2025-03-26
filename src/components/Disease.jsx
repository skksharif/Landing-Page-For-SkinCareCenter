import { useParams, useLocation } from "react-router-dom";
import "./Disease.css";

const Disease = () => {
  const { treatmentName } = useParams();
  const location = useLocation();
  const { details, image } = location.state || {};

  return (
    <div className="disease-container">
      <h1 className="disease-title">
        {treatmentName ? treatmentName.replace("-", " ") : "Treatment"}
      </h1>
      <div className="disease-content">
        {image && (
          <img src={image} alt={treatmentName} className="disease-image" />
        )}
        <p className="disease-details">{details || "No details available"}</p>
      </div>
    </div>
  );
};

export default Disease;
