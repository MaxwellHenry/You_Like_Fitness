import React from "react";
import ActivitiesButton from "./ActivitiesButton";
import HomeButton from "./HomeButton";
import RoutinesButton from "./RoutinesButton";
import RegisterUserButton from './RegisterUserButton'
import LogoutButton from "./LogoutButton"
import MyRoutinesButton from "./MyRoutinesButton"

const Navbar = ({data}) => {

  return (
    <div
      id="navbar"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: 'center',
        backgroundColor: "black",
        height: '50px',
      

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
      {data
      ? <div id="myroutinesbutton"><MyRoutinesButton /></div>
      : ""
      }
      {data
      ? <div id="logoutbutton"><LogoutButton /></div>
      : <div id="registerbutton"><RegisterUserButton /></div>
      }
      
    </div>
  );
};

export default Navbar;
