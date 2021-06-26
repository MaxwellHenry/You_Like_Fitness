import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
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
        HomePage
      </button>
    </Link>
  );
};

export default HomeButton;
