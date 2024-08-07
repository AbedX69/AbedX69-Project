// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import './index.css';
import './GlobalStyles.css'; // Import global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create the root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
