import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import NumberInput from './components/NumberOfCows';
import UrlInput from './components/UserStream';
import PhoneNumberInput from './components/UserNumber';

const UserInfo = () => {
  const [number, setNumber] = useState('');
  const [url, setUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleUrlChange = (e) => setUrl(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation or data submission here if needed
    console.log('User Info Submitted:', { number, url, phoneNumber });
    setUrl(UrlInput)
    // Navigate to the thank you page or any other page
    navigate('/display-page', {state: {url}}); // Adjust the route to your needs
  };

  return (
    <div>
      <h2>Enter your information:</h2>
      <NumberInput value={number} onChange={handleNumberChange} />
      <UrlInput value={url} onChange={handleUrlChange} />
      <PhoneNumberInput value={phoneNumber} onChange={handlePhoneNumberChange} />

      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default UserInfo;

