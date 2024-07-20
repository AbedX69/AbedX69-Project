// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isSignedIn, userName, userProfilePicture }) {
  return (
    <div className="header">
      <div className="header-left">
        {isSignedIn ? (
          <div className="profile-info">
            <img src={userProfilePicture} alt="Profile" className="profile-picture" />
            <span>{userName}</span>
          </div>
        ) : (
          <Link to="/signin-signup">
            <button className="button">Sign In / Sign Up</button>
          </Link>
        )}
      </div>
      <div className="header-center">
        <Link to="/">
          <button className="button">Logo</button>
        </Link>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="button">🔎</button>
      </div>
      <hr />
    </div>
  );
}

export default Header;
