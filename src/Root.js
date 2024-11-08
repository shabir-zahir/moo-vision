import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import UserInfo from './UserInfo';
import DisplayPage from './DisplayPage';

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user-info" element={<UserInfo />} />
      <Route path="/display-page" element={<DisplayPage />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
