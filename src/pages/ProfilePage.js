// src/pages/ProfilePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile data
    axios.get('http://localhost:5000/api/profile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h2>{user.firstName} {user.lastName}'s Profile</h2>
      <p>Email: {user.email}</p>
      <div className="profile-content">
        <div className="profile-section">
          <h3>Purchases</h3>
          {/* List purchases */}
        </div>
        <div className="profile-section">
          <h3>Sales</h3>
          {/* List sales */}
          <button className="add-product-button" onClick={() => navigate('/new-product')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
