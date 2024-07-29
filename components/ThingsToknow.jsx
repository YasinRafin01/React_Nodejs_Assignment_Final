import React from "react";
import "./ThingsToKnow.css";

const ThingsToKnow = () => {
  return (
    <div className="things-to-know">
      <h2>Things to know</h2>
      <div className="content-grid">
        <div className="section">
          <h3>House rules</h3>
          <ul>
            <li>Check-in after 4:00 PM</li>
            <li>Checkout before 11:00 AM</li>
            <li>2 guests maximum</li>
          </ul>
          <button className="show-more">Show more &gt;</button>
        </div>
        <div className="section">
          <h3>Safety &amp; property</h3>
          <ul>
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Not suitable for children and infants</li>
          </ul>
          <button className="show-more">Show more &gt;</button>
        </div>
        <div className="section">
          <h3>Cancellation policy</h3>
          <p>
            Add your trip dates to get the cancellation details for this stay.
          </p>
          <button className="add-dates">Add dates &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
