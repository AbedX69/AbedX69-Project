// src/pages/categories/HomeAppliancesPage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './HomeAppliancesPage.css';

function HomeAppliancesPage() {
  return (
    <div className="homeappliances-page">
      <Header isSignedIn={false} />
      <h1>Home Appliances</h1>
      <p>Welcome to the Home Appliances category page!</p>
      {/* Add more content specific to Home Appliances */}
    </div>
  );
}

export default HomeAppliancesPage;
