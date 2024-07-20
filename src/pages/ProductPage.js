// src/pages/ProductPage.js
import React from 'react';
import Header from '../components/Header';
import './ProductPage.css';

function ProductPage() {
  return (
    <div className="product-page">
      <Header isSignedIn={false} />
      <h1>Product Title</h1>
      <div className="product-details">
        {/* Add elements like images, description, price, etc. */}
      </div>
    </div>
  );
}

export default ProductPage;
