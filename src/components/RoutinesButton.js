import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap'

const RoutinesButton = () => {
  return (
    <Link to="/routines">
      <Button color='secondary'
      >
        List of Routines
      </Button>
    </Link>
  );
};

export default RoutinesButton;
