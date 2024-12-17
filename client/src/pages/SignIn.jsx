
import React, { useState } from "react";
import "./Auth.css";
import { useAuth } from "../components/Auth";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../services/Auth";

const SignIn = ({ onSignIn }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInUser(credentials);

      if (response.success) {
        login();
        if (onSignIn) {
          onSignIn();
        }
        navigate("/add-list");
      } else {
        alert("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Sign-In Failed:", error.message);
      alert("Error during sign-in. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
