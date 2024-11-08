// App.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './styles.css';

function App() {
  const navigate = useNavigate();

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
        <button 
          className="button" 
          onClick={() => navigate('/user-info')}
        >
          Go to Second Page
        </button>
      </div>
    </div>
  );
}

export default App;





