import "./login.css";
import React, { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault()
    const user = {username,password}
  }

  return (
    <div className="login">
      <h2 className="welcome">Welcome to Eat <span className="red-letter">With</span> Us</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="username-container">
          <label className="label">Username:</label>
          <input
            type="text"
            required
            value={username}
            className="input"
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div className="password-container">
          <label className="label">Password:</label>
          <input
            className="input"
            type="password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
