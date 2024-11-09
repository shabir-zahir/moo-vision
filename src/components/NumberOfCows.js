import React from 'react';

const NumberInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label>Enter number of cows in farm:</label>
      <input
        type="number"
        id="number"
        value={value}
        onChange={onChange}
        className="input-box"
      />
    </div>
  );
};

export default NumberInput;

