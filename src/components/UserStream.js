import React, { useState } from 'react';

const UrlInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor="url">Enter a URL:</label>
      <input
        type="url"
        id="url"
        value={value}
        onChange={onChange}
        className="input-box"
      />
    </div>
  );
};

export default UrlInput;
