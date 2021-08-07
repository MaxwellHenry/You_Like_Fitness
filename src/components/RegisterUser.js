import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { registerUser } from "../api";

const LoginRegister = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <div
      id="forms"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}

    >
      <h1 style={{ margin: "15px" }}>Register For An Account?</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          padding: "10px",
          marginTop: "10px",
        }}
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            await registerUser(username, password);
            history.push("/routines");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <div className="form-group">
          <h3>Register</h3>
          <label htmlFor="registerInputUsername">Username</label>
          <input
            type="text"
            id="registerInputUsername"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{ margin: "5px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerInputPassword">Password</label>
          <input
            type="password"
            id="registerInputPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ margin: "5px" }}
          />
        </div>
        <button type="submit">Register</button>
        <h6 style={{ marginTop: "5px" }}>
          Have an Account? <Link to="/login">Login Here</Link>
        </h6>
      </form>
    </div>
  );
};

export default LoginRegister;
