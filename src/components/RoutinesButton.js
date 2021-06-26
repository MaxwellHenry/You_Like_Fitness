import React from "react";
import { Link } from "react-router-dom";

const RoutinesButton = () => {
  return (
    <Link to="/routines">
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          height: 75,
          width: 110,
          fontSize: 16,
          boxShadow: "1px 1px 1px black",
          marginRight: "10px",
        }}
      >
        List of Routines
      </button>
    </Link>
  );
};

export default RoutinesButton;
