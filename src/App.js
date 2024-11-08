import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 



function App() {
  return (
    <div className="App">
      <div className="header-container">
      <img src="/cowLogo.png" alt="Moo Vision Logo" className="logo" />
        <h1 className="header-title">Moo Vision</h1>
      </div>
      <div className="content">
        <p className="header-blurb">
          Welcome to Moo Vision! Explore our features and learn more about our services.
        </p>
        <button className="button" onClick={() => window.location.href = '/second-page'}>
          Go to Second Page
        </button>
      </div>
    </div>
  );
}

export default App;


