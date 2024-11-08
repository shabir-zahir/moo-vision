import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';  // Import Root component
import reportWebVitals from './reportWebVitals';

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render Root component inside React.StrictMode
root.render(
  <React.StrictMode>
    <Root />  {/* Render Root instead of App */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
