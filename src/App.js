// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ElectronicsPage from './pages/categories/ElectronicsPage';
import ClothingPage from './pages/categories/ClothingPage';
import JewelryPage from './pages/categories/JewelryPage';
import SportsPage from './pages/categories/SportsPage';
import HomeAppliancesPage from './pages/categories/HomeAppliancesPage';
import BooksPage from './pages/categories/BooksPage';
import ToysPage from './pages/categories/ToysPage';
import BeautyPage from './pages/categories/BeautyPage';
import AutomotivePage from './pages/categories/AutomotivePage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/clothing" element={<ClothingPage />} />
          <Route path="/jewelry" element={<JewelryPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/home-appliances" element={<HomeAppliancesPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/toys" element={<ToysPage />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/automotive" element={<AutomotivePage />} />
          <Route path="/signin-signup" element={<SignInSignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
