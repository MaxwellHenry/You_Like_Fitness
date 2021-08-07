import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { loginUser } from "../api";

const LoginUser = () => {
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
      <h1 style={{ margin: "15px" }}>Login To Your Account?</h1>
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
            await loginUser(username, password);
            history.push("/routines");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <div className="form-group">
          <h3>Login</h3>
          <label htmlFor="loginInputUsername">Username</label>
          <input
            type="text"
            id="loginInputUsername"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={{ margin: "5px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginInputPassword">Password</label>
          <input
            type="password"
            id="loginInputPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{ margin: "5px" }}
          />
        </div>
        <button type="submit">Login</button>
        <h6 style={{ marginTop: "5px" }}>
          Need an Account? <Link to="/register">Register Here</Link>
        </h6>
      </form>
    </div>
  );
};

export default LoginUser;
