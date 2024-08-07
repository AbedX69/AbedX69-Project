// src/pages/categories/JewelryPage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './JewelryPage.css';

function JewelryPage() {
  return (
    <div className="jewelry-page">
      <Header isSignedIn={false} />
      <h1>Jewelry</h1>
      <p>Welcome to the Jewelry category page!</p>
      {/* Add more content specific to Jewelry */}
    </div>
  );
}

export default JewelryPage;
