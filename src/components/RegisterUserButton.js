import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap'

const RegisterUserButton = () => {
  return (
    <Link to="/register">
      <Button color='secondary'
      >
        Login / Register
      </Button>
    </Link>
  );
};

export default RegisterUserButton;
