import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import grid from "../images/grid.png";
import host from "../images/host.jpeg";
import "./hotel.css";

const Gallery = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-overlay">
      <button className="close-gallery" onClick={onClose}>
        X Close
      </button>
      <div className="gallery-content">
        <img
          src={`http://localhost:3000${images[currentIndex]}`}
          alt={`Gallery image ${currentIndex + 1}`}
          className="gallery-image"
        />
        <div className="gallery-controls">
          {currentIndex > 0 && (
            <button className="gallery-nav prev" onClick={handlePrev}>
              &#8249;
            </button>
          )}
          <span>
            {currentIndex + 1} / {images.length}
          </span>
          {currentIndex < images.length - 1 && (
            <button className="gallery-nav next" onClick={handleNext}>
              &#8250;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const RentalListing = () => {
  const [guests, setGuests] = useState(1);
  const [hotelData, setHotelData] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/hotel/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched hotel data:", data);
        setHotelData(data);
      })
      .catch((error) => console.error("Error fetching hotel data:", error));
  }, [slug]);

  if (!hotelData) return <div>Loading...</div>;

  return (
    <div className="rental-listing">
      <div>
        <h1>Comfy New Apt. in Pueblo Libre!</h1>
        <div className="action-buttons">
          <button className="share-button">
            <i className="fas fa-share"></i> Share
          </button>
          <button className="save-button">
            <i className="fas fa-heart"></i> Save
          </button>
        </div>

        <div className="image-grid">
          {hotelData.images && hotelData.images.length > 0 && (
            <img
              src={`http://localhost:3000${hotelData.images[0]}`}
              alt="Main room"
              className="main-image"
            />
          )}
          <div className="secondary-images">
            {hotelData.images &&
              hotelData.images.slice(1, 5).map((image, i) => (
                <div key={i} className="secondary-image-container">
                  <img
                    src={`http://localhost:3000${image}`}
                    alt={`Room ${i + 2}`}
                    className="secondary-image"
                  />
                  {i === 3 && (
                    <button
                      className="show-all-photos"
                      onClick={() => setShowGallery(true)}
                    >
                      <img src={grid} alt="grid" className="grid" /> Show all
                      photos
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>
        <div className="listing-details">
          <h2>Entire rental unit in {hotelData.address}</h2>
          <p>
            {hotelData.guest_count} guests · {hotelData.bedroom_count} bedroom ·{" "}
            {hotelData.bathroom_count} bath
          </p>
          <p>★ New</p>
          <div className="host-info-hotel">
            <img src={host} alt="Host" className="host-avatar" />
            <div>
              <p>
                <strong>Hosted by {hotelData.host_information}</strong>
              </p>
              <p>Superhost · 7 years hosting</p>
            </div>
          </div>

          <div className="features">
            <div className="feature">
              <span className="feature-icon">🔑</span>
              <div>
                <p>
                  <strong>Self check-in</strong>
                </p>
                <p>Check yourself in with the smartlock.</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🏆</span>
              <div>
                <p>
                  <strong>Fernando is a Superhost</strong>
                </p>
                <p>Superhosts are experienced, highly rated hosts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="availability-form">
          <h3>Add dates for prices</h3>
          <div className="form-grid">
            <div className="form-field">
              <label>CHECK-IN</label>
              <input type="text" placeholder="Add date" />
            </div>
            <div className="form-field">
              <label>CHECKOUT</label>
              <input type="text" placeholder="Add date" />
            </div>
          </div>
          <div className="form-field">
            <label>GUESTS</label>
            <div className="guest-select">
              <span>{guests} guest</span>
              <span>▼</span>
            </div>
          </div>
          <button className="check-availability-btn">Check availability</button>
        </div>

        <div className="report-listing">
          <button className="report-btn">
            <span className="report-icon">🚩</span>
            Report this listing
          </button>
        </div>
      </div>

      {showGallery && (
        <Gallery
          images={hotelData.images}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
};

export default RentalListing;
