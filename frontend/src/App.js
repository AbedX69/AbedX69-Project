// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ProfilePage from './pages/ProfilePage';
import NewProductPage from './pages/NewProductPage';
import ProductPage from './pages/ProductPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);

  const handleUserAuthenticated = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <Router>
      <div className="App">
        <Header isSignedIn={!!user} userName={user ? `${user.firstName} ${user.lastName}` : ''} />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/new-product" element={<NewProductPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/signin-signup" element={<SignInSignUpPage onUserAuthenticated={handleUserAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
