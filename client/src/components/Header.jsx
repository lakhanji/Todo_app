import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useAuth } from "../components/Auth"; 
import "./Header.css";

const Header = () => {
  const { isAuthenticated, logout } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate("/home"); 
  };

  return (
    <header className="header">
      <div className="header-content">
        <ul className="header-nav">
          <li className="header-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>

          {isAuthenticated ? (
            <li className="header-item">
              <Link to="/tasks" className="nav-link">
                Task List
              </Link>
            </li>
          ) : (
            <li className="header-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          )}

          {isAuthenticated && (
            <li className="header-item">
              <Link to="/add-list" className="nav-link">
                Add List
              </Link>
            </li>
          )}
        </ul>

        <div className="auth-links">
          {!isAuthenticated ? (
            <>
              <Link to="/signin" className="auth-link">Sign In</Link>
              <Link to="/signup" className="auth-link">Sign Up</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="auth-link">
              Log Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
