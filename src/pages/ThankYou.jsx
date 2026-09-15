import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thankyou-page">
      <div className="thankyou-card">
        <div className="thankyou-svg-wrapper">
          <svg className="thankyou-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="23" fill="none" />
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>

        <span className="thankyou-badge">Submission Confirmed</span>
        <h1 className="thankyou-title">Thank You!</h1>
        <p className="thankyou-description">
          We have received your message and appreciate you reaching out to Skull Solution. 
          Our team is reviewing your inquiry and will get back to you within 24 business hours.
        </p>

        <div className="thankyou-actions">
          <Link to="/" className="thankyou-btn primary">
            Back to Home
          </Link>
          <Link to="/services" className="thankyou-btn secondary">
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
