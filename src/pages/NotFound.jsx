import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-wrapper">
        <div className="notfound-number">404</div>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-description">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-btn primary">
            Back to Home
          </Link>
          <Link to="/services" className="notfound-btn secondary">
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
