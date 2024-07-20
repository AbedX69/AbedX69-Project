// src/pages/categories/SportsPage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './SportsPage.css';

function SportsPage() {
  return (
    <div className="sports-page">
      <Header isSignedIn={false} />
      <h1>Sports</h1>
      <p>Welcome to the Sports category page!</p>
      {/* Add more content specific to Sports */}
    </div>
  );
}

export default SportsPage;
