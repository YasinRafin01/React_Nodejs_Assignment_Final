import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./amenities.css";

const amenityIcons = {
  Kitchen: "🍳",
  "Shower-gel": "🧴",
  Tv: "📺",
  "Washing-Machine": "🧺",
  "Hair Dryer": "💨",
  Wifi: "📶",
  Elevator: "🛗",
  Refrigerator: "🧊",
  "Carbon monoxide alarm": "🚨",
  "Smoke alarm": "🚨",
};

const AmenitiesComponent = () => {
  const [amenities, setAmenities] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/hotel/${slug}`); // Replace with your actual API endpoint
        const data = await response.json();

        let processedAmenities;
        if (Array.isArray(data.amenities)) {
          // If data.amenities is already an array, use it directly
          processedAmenities = data.amenities;
        } else if (typeof data.amenities === "string") {
          // If data.amenities is a string, process it as before
          processedAmenities = data.amenities
            .replace(/[{}]/g, "")
            .split(",")
            .map((item) => item.replace(/"/g, "").trim());
        } else {
          // If data.amenities is neither an array nor a string, throw an error
          throw new Error("Unexpected data format for amenities");
        }

        setAmenities(processedAmenities);
        setError(null);
      } catch (error) {
        console.error("Error fetching amenities:", error);
        setError("Failed to load amenities. Please try again later.");
      }
    };

    fetchAmenities();
  }, []);

  const displayedAmenities = showAll ? amenities : amenities.slice(0, 8);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="amenities-container">
      <h2 className="amenities-title">What this place offers</h2>
      <div className="amenities-grid">
        {displayedAmenities.map((amenity, index) => (
          <div key={index} className="amenity-item">
            <span className="amenity-icon">{amenityIcons[amenity] || "•"}</span>
            <span className="amenity-name">{amenity.replace(/-/g, " ")}</span>
          </div>
        ))}
      </div>
      {amenities.length > 8 && (
        <button
          className="show-all-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? `Show ${8} amenities`
            : `Show all ${amenities.length} amenities`}
        </button>
      )}
    </div>
  );
};

export default AmenitiesComponent;
