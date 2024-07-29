import React from "react";
import "./reviews.css";

const Reviews = () => {
  return (
    <div className="reviews">
      &nbsp;<h3>&nbsp; No reviews (yet)</h3>
      <p>
        &nbsp; ★ This host has 310 reviews for other places to stay.
        <a href="#" className="show-reviews">
          Show other reviews
        </a>
      </p>
      &nbsp;
    </div>
  );
};

export default Reviews;
