// src/pages/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './WelcomePage.css';

function WelcomePage() {
  const categories = [
    { name: 'Electronics', path: '/electronics' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Jewelry', path: '/jewelry' },
    { name: 'Sports', path: '/sports' },
    { name: 'Home Appliances', path: '/home-appliances' },
    { name: 'Books', path: '/books' },
    { name: 'Toys', path: '/toys' },
    { name: 'Beauty', path: '/beauty' },
    { name: 'Automotive', path: '/automotive' }
  ];

  return (
    <div className="welcome-page">
      <Header isSignedIn={false} />
      <h1>Welcome</h1>
      <div className="categories">
        {categories.map(category => (
          <Link to={category.path} key={category.name}>
            <button className="category-button">
              <span>{category.name}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WelcomePage;
