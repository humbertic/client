import "./register.css";
import React, { useState } from "react";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    console.log(newUser)

  };

  return (
    <div className="register">
      <h2 className="register-h2">REGISTER</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="email-container">
          <label className="label">Email:</label>
          <input
            type="email"
            required
            value={email}
            className="input i-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="username-container">
          <label className="label">Username:</label>
          <input
            type="text"
            required
            value={username}
            className="input"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="password-container">
          <label className="label">Password:</label>
          <input
            className="input"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-register" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
