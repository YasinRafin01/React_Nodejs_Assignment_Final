import React from "react";
import cohost from "../images/cohost.jpeg";
import hostImage from "../images/host.jpeg";
import "./HostProfile.css";

const HostProfile = () => {
  return (
    <div className="host-profile">
      <h2 className="title">Meet your Host</h2>

      <div className="profile-container">
        <div className="host-card">
          <div className="profile-image">
            <img src={hostImage} alt="Fernando" className="avatar" />
            <div className="badge">
              <img
                src="https://cdn3.iconfinder.com/data/icons/user-interface-2326/24/badge-64.png"
                alt="Superhost badge"
              />
            </div>
          </div>
          <h3 className="host-name">Fernando</h3>
          <p className="superhost-tag">⚑ Superhost</p>
          <div className="stats">
            <div className="stat-item">
              <p className="stat-value">310</p>
              <p className="stat-label">Reviews</p>
            </div>
            <div className="stat-item">
              <p className="stat-value rating">
                4.92 <span className="star-icon">★</span>
              </p>
              <p className="stat-label">Rating</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">7</p>
              <p className="stat-label">Years hosting</p>
            </div>
          </div>
        </div>

        <div className="host-info">
          <div className="info-section">
            <h3>Fernando is a Superhost</h3>
            <p>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
          </div>
          <div className="info-section">
            <h4>Co-hosts</h4>
            <div className="co-hosts">
              <div className="co-host">
                <img src={cohost} alt="Percy" />
                <span>Percy</span>
              </div>
              <div className="co-host">
                <div className="initial-avatar">R</div>
                <span>Raul</span>
              </div>
            </div>
          </div>
          <div className="info-section">
            <h4>Host details</h4>
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>
          &nbsp; <button className="message-button">Message Host</button>
        </div>
      </div>

      <div className="additional-info">
        <p>
          <span className="icon">📍</span> Born in the 80s
        </p>
        <p>
          <span className="icon">💼</span> My work: Hospitality
        </p>
        <p className="description">
          Hello world! I love traveling and I also love welcoming guests in my
          home country, Perú, meeting new...
        </p>
        <button className="show-more">Show more ›</button>
      </div>
    </div>
  );
};

export default HostProfile;
