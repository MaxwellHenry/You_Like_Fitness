import React from "react";
import ActivitiesButton from "./ActivitiesButton";
import HomeButton from "./HomeButton";
import RoutinesButton from "./RoutinesButton";

const Navbar = () => {
  return (
    <div
      id="navbar"
      style={{
        display: "flex",
        
        backgroundColor: "white",

      }}
    >
      <div id="homebutton">
        <HomeButton />
      </div>
      <div id="routinebutton">
        <RoutinesButton />
      </div>
      <div id="activitybutton">
        <ActivitiesButton />
      </div>
    </div>
  );
};

export default Navbar;
