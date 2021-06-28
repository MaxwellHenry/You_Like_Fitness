import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap'


const ActivitiesButton = () => {
  return (
    <Link to="/activities">
      <Button color="secondary"
      >
        List of Activities
      </Button>
    </Link>
  );
};

export default ActivitiesButton;
