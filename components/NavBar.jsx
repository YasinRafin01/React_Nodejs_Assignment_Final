import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./NavBar.css";

const regions = [
  {
    name: "I'm flexible",
    img: "https://media.istockphoto.com/id/936410448/vector/black-outlined-world-map.jpg?s=612x612&w=0&k=20&c=4NC6zyuo9Bcz6W9MBsUHbTTj5f4vP1JRpyKJL7mdEvY=",
  },
  {
    name: "Southeast Asia",
    img: "https://c8.alamy.com/comp/2C58G60/asean-economic-community-aec-map-grey-map-with-dark-gray-highlighted-member-countries-southeast-asia-vector-illustration-2C58G60.jpg",
  },
  {
    name: "Canada",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmebMhUa8hUtYB6kVF7A4BdANOgV3f34UjQ&s",
  },
  {
    name: "Europe",
    img: "https://thumbs.dreamstime.com/b/austria-map-black-white-detailed-outline-regions-country-austria-map-black-white-detailed-outline-regions-184772805.jpg",
  },
  {
    name: "Thailand",
    img: "https://cdn2.vectorstock.com/i/1000x1000/07/51/thailand-black-white-map-vector-950751.jpg",
  },
  {
    name: "Middle East",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0mvV0LzryT0eeiN2HQl-9JrsgX-dioT9Bg&s",
  },
];

const Header = () => {
  const [showDestinationSearch, setShowDestinationSearch] = useState(false);
  const [showRegionGrid, setShowRegionGrid] = useState(false);
  const [selectedDestination, setSelectedDestination] =
    useState("Search Destination");
  const destinationSearchRef = useRef(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [initialDate, setInitialDate] = useState(null);
  const [isSettingCheckIn, setIsSettingCheckIn] = useState(true);
  const [checkInRange, setCheckInRange] = useState(null);
  const [checkOutRange, setCheckOutRange] = useState(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [totalGuests, setTotalGuests] = useState(0); // State for total guests
  const [activeItem, setActiveItem] = useState(null);

  const toggleDestinationSearch = (e) => {
    e.preventDefault();
    setShowDestinationSearch((prevState) => !prevState);
  };

  const handleWhereButtonClick = () => {
    setActiveItem("where");
    setShowRegionGrid((prevState) => !prevState);
  };

  const handleRegionClick = (regionName) => {
    setSelectedDestination(regionName);
    setShowRegionGrid(false);
  };

  const handleDateChange = (date) => {
    if (isSettingCheckIn) {
      setStartDate(date);
      setCheckInRange(null);
      // Only switch to check-out if an end date hasn't been set yet
      if (!endDate) {
        setIsSettingCheckIn(false);
      }
    } else {
      setEndDate(date);
      setCheckOutRange(null);
      // Don't switch back to check-in automatically
    }
  };

  const handleFlexibleRangeChange = (range) => {
    if (isSettingCheckIn) {
      setCheckInRange(range);
      setStartDate(new Date(startDate.getTime()));
    } else {
      setCheckOutRange(range);
      setEndDate(new Date(endDate.getTime()));
    }
    // Don't toggle isSettingCheckIn here
  };

  const handleCheckInClick = () => {
    setActiveItem("checkIn");
    setIsSettingCheckIn(true);
    setCalendarVisible(!calendarVisible);
  };

  const handleCheckOutClick = () => {
    setActiveItem("checkOut");
    setIsSettingCheckIn(false);
    setCalendarVisible(!calendarVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        destinationSearchRef.current &&
        !destinationSearchRef.current.contains(event.target)
      ) {
        setShowRegionGrid(false);
        //setShowGuestOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const total = adults + children + infants + pets;
    setTotalGuests(total);
  }, [adults, children, infants, pets]);

  const formatGuestCount = () => {
    let guestText = `${adults} adults`;
    if (children > 0) guestText += `, ${children} children`;
    if (infants > 0) guestText += `, ${infants} infants`;
    if (pets > 0) guestText += `, ${pets} pets`;
    return guestText;
  };

  const formatDateString = (date, range) => {
    if (!date) return "Add dates";
    return `${date.toDateString()}${range !== null ? ` ±${range} days` : ""}`;
  };

  const incrementCount = (setter, count) => {
    setter(count + 1);
  };

  const decrementCount = (setter, count) => {
    if (count > 0) {
      setter(count - 1);
    }
  };

  const toggleGuestOptions = () => {
    setActiveItem("who");
    setShowGuestOptions(!showGuestOptions);
  };

  return (
    <div className="header-menu-container">
      <nav>
        <div className="search-menu">
          <button onClick={toggleDestinationSearch}>Anywhere</button>
          <button onClick={toggleDestinationSearch}>Any week</button>
          <button onClick={toggleDestinationSearch}>Add guests</button>
          <button>
            <img
              src="https://cdn4.iconfinder.com/data/icons/web-icons-19/711/search-icon-tm-512.png"
              alt="Search"
            />
          </button>
        </div>
        <div className="user-menu">
          <img
            src="https://cdn2.iconfinder.com/data/icons/thin-line-icons-for-seo-and-development-1/64/SEO_international-512.png"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginLeft: "290px",
            }}
            alt="globe"
          />
          <button className="user-menu-button">
            <span className="menu-icon">☰</span>
            <img
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
              alt="User"
              className="user-icon"
            />
          </button>
        </div>
      </nav>
      <div
        className={`destination-search ${showDestinationSearch ? "show" : ""}`}
        ref={destinationSearchRef}
      >
        <div className="navbar">
          <button
            className={`navbar-item ${showRegionGrid ? "active" : ""} ${
              selectedDestination !== "Search Destination"
                ? "item-selected"
                : ""
            }`}
            onClick={handleWhereButtonClick}
          >
            Where
            <br />
            <span style={{ color: "slategray" }}>{selectedDestination}</span>
          </button>
          <button
            className={`navbar-item ${isSettingCheckIn ? "active" : ""}`}
            onClick={handleCheckInClick}
          >
            Check in
            <br />
            <span style={{ color: "slategray" }}>
              {formatDateString(startDate, checkInRange)}
            </span>
          </button>
          <button
            className={`navbar-item ${!isSettingCheckIn ? "active" : ""}`}
            onClick={handleCheckOutClick}
          >
            Check out
            <br />
            <span style={{ color: "slategray" }}>
              {formatDateString(endDate, checkOutRange)}
            </span>
          </button>
          <button
            className={`navbar-item ${showGuestOptions ? "active" : ""} ${
              totalGuests > 0 ? "item-selected" : ""
            }`}
            onClick={toggleGuestOptions}
          >
            Who
            <br />
            <span style={{ color: "slategray" }}>
              {totalGuests > 0 ? formatGuestCount() : "Add guests"}
            </span>
          </button>
          <button className="search-button">Search</button>
          {showGuestOptions && (
            <div className="guest-selection">
              <div className="guest-item">
                <span>
                  Adults
                  <br />
                  <small>Ages 13 or above</small>
                </span>

                <div className="counter">
                  <button
                    onClick={() => decrementCount(setAdults, adults)}
                    disabled={adults === 0}
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button onClick={() => incrementCount(setAdults, adults)}>
                    +
                  </button>
                </div>
              </div>
              <div className="guest-item">
                <span>
                  Children
                  <br />
                  <small>Ages 2–12</small>
                </span>

                <div className="counter">
                  <button
                    onClick={() => decrementCount(setChildren, children)}
                    disabled={children === 0}
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button onClick={() => incrementCount(setChildren, children)}>
                    +
                  </button>
                </div>
              </div>
              <div className="guest-item">
                <span>
                  Infants
                  <br />
                  <small>Under 2</small>
                </span>

                <div className="counter">
                  <button
                    onClick={() => decrementCount(setInfants, infants)}
                    disabled={infants === 0}
                  >
                    -
                  </button>
                  <span>{infants}</span>
                  <button onClick={() => incrementCount(setInfants, infants)}>
                    +
                  </button>
                </div>
              </div>
              <div className="guest-item">
                <span>
                  Pets
                  <br />
                  <small>Bringing a service a animal?</small>
                </span>
                <div className="counter">
                  <button
                    onClick={() => decrementCount(setPets, pets)}
                    disabled={pets === 0}
                  >
                    -
                  </button>
                  <span>{pets}</span>
                  <button onClick={() => incrementCount(setPets, pets)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`region-grid ${showRegionGrid ? "show" : ""}`}>
          {regions.map((region, index) => (
            <div
              key={index}
              className="region-item"
              onClick={() => handleRegionClick(region.name)}
            >
              <img
                src={region.img}
                alt={region.name}
                style={{ width: "130px", height: "100px" }}
              />
              <span>{region.name}</span>
            </div>
          ))}
        </div>
      </div>

      {calendarVisible && (
        <div className="calendar-container">
          <DatePicker
            selected={isSettingCheckIn ? startDate : endDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsStart={isSettingCheckIn}
            selectsEnd={!isSettingCheckIn}
            inline
          />
          {(startDate || endDate) && (
            <div className="flexible-options">
              <button onClick={() => handleFlexibleRangeChange(0)}>
                Exact dates
              </button>
              <button onClick={() => handleFlexibleRangeChange(1)}>
                ± 1 day
              </button>
              <button onClick={() => handleFlexibleRangeChange(2)}>
                ± 2 days
              </button>
              <button onClick={() => handleFlexibleRangeChange(3)}>
                ± 3 days
              </button>
              <button onClick={() => handleFlexibleRangeChange(7)}>
                ± 7 days
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
