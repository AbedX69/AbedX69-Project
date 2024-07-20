// src/pages/categories/ToysPage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './ToysPage.css';

function ToysPage() {
  return (
    <div className="toys-page">
      <Header isSignedIn={false} />
      <h1>Toys</h1>
      <p>Welcome to the Toys category page!</p>
      {/* Add more content specific to Toys */}
    </div>
  );
}

export default ToysPage;
