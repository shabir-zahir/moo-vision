import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import NumberInput from './components/NumberOfCows';
import UrlInput from './components/UserStream';
import PhoneNumberInput from './components/UserNumber';

const UserInfo = () => {
  const [number, setNumber] = useState('');
  const [url, setUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [videoId, setVideoId] = useState(''); // New state to store the video ID

  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleUrlChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);

    // Extract video ID from YouTube URL
    const videoId = extractVideoId(inputUrl);
    setVideoId(videoId);
  };
  
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info Submitted:', { number, url, phoneNumber, videoId });
    
    // Navigate to display-page and pass the videoId
    navigate('/display-page', { state: { videoId } });
  };

  // Function to extract video ID from a YouTube URL
  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : ''; // Return the video ID or an empty string if not found
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



