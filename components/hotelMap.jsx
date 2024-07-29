import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./hotelMap.css";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const HotelMap = () => {
  const [hotels, setHotels] = useState([]);
  const [mapCenter, setMapCenter] = useState([-12.0464, -77.0428]); // Lima, Peru coordinates

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch('/api/hotels'); // Adjust this endpoint to match your Express route
      const data = await response.json();
      setHotels(data);
      
      if (data.length > 0) {
        setMapCenter([data[0].latitude, data[0].longitude]);
      }
    } catch (error) {
      console.error('Error fetching hotel data:', error);
    }
  };

  return (
    <div>
    <h1>Where you'll be</h1>
    <p>Lima,Provincia de Lima, Peru</p>
    <div className="map-container">
      <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hotels.map((hotel) => (
          <Marker key={hotel.id} position={[hotel.latitude, hotel.longitude]}>
            <Popup>
              {hotel.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    </div>
  );
};

export default HotelMap;