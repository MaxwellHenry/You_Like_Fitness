import React from "react";
import { Link } from "react-router-dom";

const ActivitiesButton = () => {
  return (
    <Link to="/activities">
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          height: 75,
          width: 110,
          fontSize: 16,
          boxShadow: "1px 1px 1px black",
        }}
      >
        List of Activities
      </button>
    </Link>
  );
};

export default ActivitiesButton;
