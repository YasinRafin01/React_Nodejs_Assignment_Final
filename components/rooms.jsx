import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./rooms.css";

const RoomDetailsGallery = () => {
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const { slug, room_slug } = useParams();

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/hotel/${slug}/${room_slug}`
        );
        if (!response.ok) {
          throw new Error("Room not found");
        }
        const data = await response.json();
        setRoom(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [slug, room_slug]);

  const parseImages = (images) => {
    if (!images || !Array.isArray(images)) return [];
    const API_BASE_URL = "http://localhost:3000"; // Replace with your actual API URL
    return images.map((image) => `${API_BASE_URL}${image}`);
  };

  const toggleGallery = () => setShowAllPhotos(!showAllPhotos);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!room || !room.room_images) return <div>No room data available</div>;

  const images = parseImages(room.room_images);

  if (showAllPhotos) {
    return (
      <div className="gallery-fullscreen">
        <div className="gallery-content">
          <div className="gallery-header">
            <h2>Photos of {room.title}</h2>
            &nbsp;&nbsp;
            <button onClick={toggleGallery} className="close-button">
              <span className="close-icon">×</span>
              Close photos
            </button>
          </div>
          {images.map((image, index) => (
            <div key={index} className="gallery-image-container">
              <img
                src={image}
                alt={`Room view ${index + 1}`}
                className="gallery-image"
                onError={(e) => {
                  console.error(`Failed to load image: ${image}`);
                  e.target.style.border = "1px solid red";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="room-details">
      <h2>Where you'll sleep</h2>
      <div className="gallery-container">
        <div className="gallery-grid">
          <div className="gallery-main-image">
            {images[0] && (
              <img
                onClick={toggleGallery}
                src={images[0]}
                alt="Main room view"
                className="gallery-img"
                onError={(e) => {
                  console.error(`Failed to load image: ${images[0]}`);
                  e.target.style.border = "1px solid red";
                }}
              />
            )}
          </div>
          <div className="gallery-side-images">
            {images[1] && (
              <img
                onClick={toggleGallery}
                src={images[1]}
                alt="Room view 2"
                className="gallery-img"
                onError={(e) => {
                  console.error(`Failed to load image: ${images[1]}`);
                  e.target.style.border = "1px solid red";
                }}
              />
            )}
            {images[2] && (
              <img
                onClick={toggleGallery}
                src={images[2]}
                alt="Room view 3"
                className="gallery-img"
                onError={(e) => {
                  console.error(`Failed to load image: ${images[2]}`);
                  e.target.style.border = "1px solid red";
                }}
              />
            )}
          </div>
        </div>
        <button onClick={toggleGallery} className="show-more-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="button-icon"
          >
            <path
              fillRule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clipRule="evenodd"
            />
          </svg>
          Show more photos
        </button>
      </div>
      <p>Bedroom Count: {room.bedroom_count}</p>
      {/* Add more room details as needed */}
    </div>
  );
};

export default RoomDetailsGallery;
