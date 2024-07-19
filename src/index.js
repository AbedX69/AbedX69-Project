// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './GlobalStyles.css'; // Import global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
