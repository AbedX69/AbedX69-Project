// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import ShoppingPage from './pages/ShoppingPage';
import SignInSignUpPage from './pages/SignInSignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="/signin-signup" element={<SignInSignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
