// App.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./styles.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="homepage-header-container">
        <img
          src="/cowLogo.png"
          alt="Moo Vision Logo"
          className="homepage-logo"
        />
        <h1 className="homepage-header-title">Moo Vision</h1>
      </div>
      <div className="homepage-content">
        <div className="cow-image-container">
          <img src="/cowImage.png" alt="Cow" className="cow-image" />
        </div>
        <p className="homepage-header-blurb">
          Welcome to Moo Vision! Do you have a farm full of cows that always
          somehow seem to get lost? Well we have the perfect solution for you!
          Our model detects the number of cows in your farm and lets you know
          when one is missing. Just give us your number, in order to send
          alerts, the numbers of cows in your farm, and a link to a stream of
          your cows!
        </p>
        <button
          className="homepage-button"
          onClick={() => navigate("/user-info")}
        >
          Get Started!
        </button>
      </div>
    </div>
  );
}

export default App;
