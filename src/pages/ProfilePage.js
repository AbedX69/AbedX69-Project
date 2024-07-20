// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please sign in.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        setError(error.response ? error.response.data.error : 'An error occurred while fetching data.');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div className="profile-page"><p className="error-message">{error}</p></div>;
  }

  if (!userData) {
    return <div className="profile-page"><p>Loading...</p></div>;
  }

  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <p><strong>First Name:</strong> {userData.firstName}</p>
      <p><strong>Last Name:</strong> {userData.lastName}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      {/* Add form to update profile here */}
    </div>
  );
};

export default ProfilePage;
