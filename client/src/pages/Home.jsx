import React from 'react';
import { useAuth } from '../components/Auth';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-page">
      <div className="home-overlay">
        <div className="home-container">
          <h1 className="home-title">Welcome to the Todo App</h1>
          <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="home-container">
          Organize your <br /> work and life, finally.
        </h1>
        <p>
          Become focused, organized, and calm with 
          todo app.
        </p>
        
        </div>
          {isAuthenticated ? (
            <Link to="/add-list">
              <button className="home-button">Add List</button>
            </Link>
          ) : (
            <p className="home-message">Please sign in to add a list</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
