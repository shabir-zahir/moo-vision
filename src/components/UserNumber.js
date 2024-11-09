import React, { useState } from 'react';

const PhoneNumberInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label>Enter your phone number:</label>
      <input
        type="tel"
        id="phoneNumber"
        value={value}
        onChange={onChange}
        className="input-box"
      />
    </div>
  );
};

export default PhoneNumberInput;

