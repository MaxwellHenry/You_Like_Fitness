import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap'

const HomeButton = () => {
  return (
    <Link to="/">
      <Button color="primary"
      >
        Home
      </Button>
    </Link>
  );
};

export default HomeButton;
