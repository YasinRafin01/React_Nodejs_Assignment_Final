import React, { useEffect, useState } from "react";
import "./description1.css"; // Make sure to import the CSS file

const Description = () => {
  const [showOriginal, setShowOriginal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/hotel/Lima-peru")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched hotel data:", data); // For debugging
        setHotelData(data);
      })
      .catch((error) => console.error("Error fetching hotel data:", error));
  }, []);

  const handleToggleOriginal = () => {
    setShowOriginal(!showOriginal);
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (!hotelData) {
    return <div>Loading...</div>;
  }

  const translatedText = hotelData.description;
  const originalText =
    "Bienvenido a nuestro nuevo apartamento de 1 dormitorio, en una ubicación tranquila y céntrica junto a un parque!";
  const additionalText =
    "It’s conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from Clínica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and Alas Peruanas University. It’s also very close to La ...";

  return (
    <div className="description">
      <div className="translation-info">
        Some info has been automatically translated.
        <button onClick={handleToggleOriginal} className="toggle-button">
          {showOriginal ? "Show translated" : "Show original"}
        </button>
      </div>
      <p className="description-text">
        {showOriginal ? originalText : translatedText}
      </p>
      <p className="additional-text">
        {additionalText.substring(0, showMore ? additionalText.length : 150)}
        {!showMore && additionalText.length > 150 && "..."}
      </p>
      {additionalText.length > 150 && (
        <button onClick={handleToggleShowMore} className="show-more-button1">
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default Description;
