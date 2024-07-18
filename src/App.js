// src/App.js
import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './App.css';

function App() {
  useEffect(() => {
    anime({
      targets: '.anime-element',
      translateX: 40,
      rotate: '3turn',
      backgroundColor: 'yellow', // Change this to yellow to match your CSS keyframes
      duration: 4000
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fuck u NIGGAAAAAA</h1>
        <h2> s</h2>
        <div className="anime-element" style={{ width: '30px', height: '100px', backgroundColor: 'magenta' }}></div>
      </header>
    </div>
  );
}

export default App;
