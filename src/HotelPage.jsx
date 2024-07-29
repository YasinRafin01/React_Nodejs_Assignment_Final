import React from "react";
import AmenitiesComponent from "../components/amenities";
import CheckInDateSelection from "../components/CheckInDate";
import Description from "../components/description1";
import LimaExploreOptions from "../components/footer";
import HostProfile from "../components/host";
import RentalListing from "../components/hotel";
import Header from "../components/NavBar";
import Reviews from "../components/reviews";
import RoomDetailsGallery from "../components/rooms";
import ThingsToKnow from "../components/ThingsToknow";
import "./App.css";
import HotelMap from "../components/hotelMap";

const HotelPage = () => {


  return (
    <div>
      <Header />
      <RentalListing />
      <hr />
      <Description />
      <hr />
      <RoomDetailsGallery />
      <hr />
      <AmenitiesComponent />
      <hr />
      <CheckInDateSelection />
      <hr />
      <Reviews />
      <hr />
      &nbsp;
      <HotelMap />
      &nbsp;
      <hr />
      <HostProfile />
      <hr />
      <ThingsToKnow />
      <LimaExploreOptions />
    </div>
  );
};

export default HotelPage;
