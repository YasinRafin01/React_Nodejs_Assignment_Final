import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HotelPage from "./HotelPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:slug/:room_slug" element={<HotelPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
