// src/pages/categories/ElectronicsPage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './ElectronicsPage.css';

function ElectronicsPage() {
  return (
    <div className="electronics-page">
      <Header isSignedIn={false} />
      <h1>Electronics</h1>
      <p>Welcome to the Electronics category page!</p>
      {/* Add more content specific to Electronics */}
    </div>
  );
}

export default ElectronicsPage;
