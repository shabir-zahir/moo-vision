import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import axios from "axios"; // Import axios for making HTTP requests
import NumberInput from "./components/NumberOfCows";
import UrlInput from "./components/UserStream";
import PhoneNumberInput from "./components/UserNumber";

const UserInfo = () => {
  const [number, setNumber] = useState("");
  const [url, setUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [videoId, setVideoId] = useState(""); // New state to store the video ID

  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleUrlChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);

    // Extract video ID from YouTube URL
    const videoId = extractVideoId(inputUrl);
    setVideoId(videoId);
  };

  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const navigate = useNavigate(); // Initialize the navigate function

  // Send user info to Python backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = {
      number,
      url,
      phoneNumber,
      videoId,
    };

    try {
      // Send data to your Python backend
      const response = await axios.post(
        "http://127.0.0.1:8080/api/users",
        userInfo
      );
      console.log("Response from backend:", response.data);

      // Navigate to display-page and pass both videoId and url
      console.log("Navigating to display page");
      navigate("/display-page", { state: { videoId, url } });
    } catch (error) {
      console.error("Error sending user info:", error.response || error);
    }
  };

  // Function to extract video ID from a YouTube URL
  const extractVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : ""; // Return the video ID or an empty string if not found
  };

  return (
    <div>
      <h2>Enter your information:</h2>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* This is the form tag that wraps the inputs */}
        <NumberInput value={number} onChange={handleNumberChange} />
        <UrlInput value={url} onChange={handleUrlChange} />
        <PhoneNumberInput
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <button type="submit" className="button">
          Submit
        </button>
        <button
          onClick={() => navigate("/display-page", { state: { videoId, url } })}
          className="button"
        >
          Go to Display Page
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
