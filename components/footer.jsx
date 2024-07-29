import React from "react";
import "./footer.css";

const LimaExploreOptions = () => {
  return (
    <div className="lima-explore-container">
      <div className="breadcrumb">
        <span>Peru</span> &gt; <span>Lima Province</span> &gt;{" "}
        <span>Jesús María</span>
      </div>

      <h2>Explore other options in and around Lima</h2>

      <div className="options-grid">
        <div className="option-column">
          <div className="option-item">
            <h3>Cieneguilla</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option-item">
            <h3>Chaclacayo</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option-item">
            <h3>San Isidro</h3>
            <p>Vacation rentals</p>
          </div>
        </div>
        <div className="option-column">
          <div className="option-item">
            <h3>Punta Hermosa</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option-item">
            <h3>Barranco</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option-item">
            <h3>San Miguel</h3>
            <p>Vacation rentals</p>
          </div>
        </div>
        <div className="option-column">
          <div className="option-item">
            <h3>Asia</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option-item">
            <h3>Santiago de Surco</h3>
            <p>Vacation rentals</p>
          </div>
          <div className="option-item">
            <h3>Lunahuaná</h3>
            <p>Vacation rentals</p>
          </div>
        </div>
      </div>

      <h2>Other types of stays on Airbnb</h2>

      <div className="stay-types">
        <div className="stay-type">Jesús María vacation rentals</div>
        <div className="stay-type">Jesús María monthly stays</div>
        <div className="stay-type">
          Apartment vacation rentals in Jesús María
        </div>
        <div className="stay-type">
          Apartment vacation rentals in Lima Province
        </div>
      </div>
    </div>
  );
};

export default LimaExploreOptions;
