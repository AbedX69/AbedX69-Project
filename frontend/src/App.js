// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ProfilePage from './pages/ProfilePage';
import NewProductPage from './pages/NewProductPage';
import ProductPage from './pages/ProductPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/new-product" element={<NewProductPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/signin-signup" element={<SignInSignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
