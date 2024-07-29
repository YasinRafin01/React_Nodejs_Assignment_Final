import React, { useState } from "react";
import "./calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 6)); // July 2024
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dates = Array(firstDay)
      .fill("")
      .concat([...Array(daysInMonth)].map((_, i) => i + 1));
    return dates;
  };

  const renderMonth = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = date.getMonth();
    const year = date.getFullYear();
    const dates = getMonthData(year, month);

    return (
      <div className="month">
        <h3>{`${monthNames[month]} ${year}`}</h3>
        <div className="weekdays">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="dates">
          {dates.map((date, index) => (
            <span key={index} className={date === "" ? "empty" : ""}>
              {date}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
  };

  const nextMonth = new Date(currentDate);
  nextMonth.setMonth(currentDate.getMonth() + 1);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => navigateMonth(-1)} className="nav-button">
          &lt;
        </button>
        <button onClick={() => navigateMonth(1)} className="nav-button">
          &gt;
        </button>
      </div>
      <div className="months-container">
        {renderMonth(currentDate)}
        {renderMonth(nextMonth)}
      </div>
      <div className="calendar-footer">
        <button className="keyboard-button">
          <span className="keyboard-icon">⌨</span>
        </button>
        <button className="clear-dates">Clear dates</button>
      </div>
    </div>
  );
};

export default Calendar;
