import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; 
import UserInfo from './UserInfo';

// Main app component
function App() {
  const navigate = useNavigate(); // Use navigate to handle programmatic navigation
  
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
          onClick={() => navigate('/second-page')} // Corrected the path to match the route
        >
          Go to Second Page
        </button>
      </div>
    </div>
  );
}

// Main app setup with routing
const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* The main homepage */}
      <Route path="/second-page" element={<UserInfo />} /> {/* The second page */}
    </Routes>
  </BrowserRouter>
);

export default Root;




