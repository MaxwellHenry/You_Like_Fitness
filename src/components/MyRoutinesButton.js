import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap'

const MyRoutinesButton = () => {
  return (
      <Link to='/myroutines'>
      <Button color='secondary'>
        Your Routines
      </Button>
      </Link>
  );
};


export default MyRoutinesButton;
