// src/pages/categories/ClothingPage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './ClothingPage.css';

function ClothingPage() {
  return (
    <div className="clothing-page">
      <Header isSignedIn={false} />
      <h1>Clothing</h1>
      <p>Welcome to the Clothing category page!</p>
      {/* Add more content specific to Clothing */}
    </div>
  );
}

export default ClothingPage;
