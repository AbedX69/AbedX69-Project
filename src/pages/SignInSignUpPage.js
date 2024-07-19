// src/pages/SignInSignUpPage.js
import React from 'react';
import './SignInSignUpPage.css';

function SignInSignUpPage() {
  return (
    <div className="signin-signup-page">
      <div className="signin-section">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="signup-section">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignInSignUpPage;
