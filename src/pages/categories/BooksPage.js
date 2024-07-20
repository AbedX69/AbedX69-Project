// src/pages/categories/BooksPage.js
import React from 'react';
import Header from '../../components/Header'; // Correct path to Header
import './BooksPage.css';

function BooksPage() {
  return (
    <div className="books-page">
      <Header isSignedIn={false} />
      <h1>Books</h1>
      <p>Welcome to the Books category page!</p>
      {/* Add more content specific to Books */}
    </div>
  );
}

export default BooksPage;
