import React from "react";
import Calendar from "./calendar";
import "./CheckInDate.css";
// import Reviews from './Reviews';

const CheckInDateSelection = () => {
  return (
    <div className="check-in-date-container">
      <h2>Select check-in date</h2>
      <p className="subtitle">Add your travel dates for exact pricing</p>
      <Calendar />
    </div>
  );
};

export default CheckInDateSelection;
