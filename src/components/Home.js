
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Your Blogging Platform!</h1>
      <p>Start sharing your thoughts and experiences with the world.</p>

      <div className="action-buttons">
        <Link to="/login" className="btn">
          Log In
        </Link>
        <Link to="/posts" className="btn">
          Explore Blog Quotes
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
