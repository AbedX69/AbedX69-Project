// src/pages/categories/AutomotivePage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './AutomotivePage.css';

function AutomotivePage() {
  return (
    <div className="automotive-page">
      <Header isSignedIn={false} />
      <h1>Automotive</h1>
      <p>Welcome to the Automotive category page!</p>
      {/* Add more content specific to Automotive */}
    </div>
  );
}

export default AutomotivePage;
