import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap'

import { logoutUser } from "../api/index"

const LogoutButton = () => {
    const history = useHistory()
  return (
      <Button color='secondary'
      onClick={() => {logoutUser(); history.push('/login')}}>
        LogOut
      </Button>
  );
};

export default LogoutButton;
