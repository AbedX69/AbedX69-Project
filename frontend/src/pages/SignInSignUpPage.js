// File path: C:\Users\AbedX69\Documents\GitHub\AbedX69-Project\frontend\src\pages\SignInSignUpPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignInSignUpPage.css';

const SignInSignUpPage = ({ onUserAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignUp ? 'http://localhost:5000/api/signup' : 'http://localhost:5000/api/signin';
      const response = await axios.post(url, formData);
      console.log('Response:', response.data);

      if (!isSignUp) {
        localStorage.setItem('token', response.data.token);
        onUserAuthenticated(response.data.user);
        navigate('/profile'); // Redirect to profile page
      } else {
        alert('Sign up successful! Redirecting...');
        onUserAuthenticated({ firstName: formData.firstName, lastName: formData.lastName });
        navigate('/profile'); // Redirect to profile page
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.error : 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="signin-signup-page">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="forms-container">
        <form onSubmit={handleSubmit} className={isSignUp ? 'signup-form' : 'signin-form'}>
          {isSignUp && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
      </div>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default SignInSignUpPage;
