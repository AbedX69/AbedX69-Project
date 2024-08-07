// src/pages/ShoppingPage.js
import React from 'react';
import Header from '../components/Header';
import './ShoppingPage.css';

function ShoppingPage() {
  return (
    <div className="shopping-page">
      <Header isSignedIn={false} />
      <h1>Shopping</h1>
      {/* Add shopping elements here */}
    </div>
  );
}

export default ShoppingPage;
