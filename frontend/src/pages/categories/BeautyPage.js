// src/pages/categories/BeautyPage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './BeautyPage.css';

function BeautyPage() {
  return (
    <div className="beauty-page">
      <Header isSignedIn={false} />
      <h1>Beauty</h1>
      <p>Welcome to the Beauty category page!</p>
      {/* Add more content specific to Beauty */}
    </div>
  );
}

export default BeautyPage;
