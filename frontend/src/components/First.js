import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Btn } from "./Btn";
import "./style.css";
import axios from "axios";

export const First = () => {
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Assuming a login API endpoint
    axios
      .post("http://localhost:8000/login", {
        usernameEmail,
        password,
      })
      .then((response) => {
        // Handle successful login
        navigate("/attendance"); // Redirect to AttendancePage
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  return (
    <div className="android-small">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <form onSubmit={handleLogin}>
            <Btn className="btn-instance" property1="default" text="Username, Email" />
            <input
              type="text"
              value={usernameEmail}
              onChange={(e) => setUsernameEmail(e.target.value)}
              placeholder="Username, Email"
            />
            <Btn className="design-component-instance-node" property1="default" text="Password" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">LOGIN</button>
          </form>
          <div className="text-wrapper">LOGIN</div>
          <div className="overlap">
            <div className="div">LOGIN</div>
          </div>
          <div className="overlap-2">
            <div className="rectangle" />
            <div className="text-wrapper-2">SIGN UP</div>
          </div>
          <div className="text-wrapper-3">Forgotten Password?</div>
        </div>
      </div>
    </div>
  );
};
