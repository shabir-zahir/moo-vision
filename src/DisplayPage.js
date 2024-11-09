import React from 'react';
import YouTube from 'react-youtube';
import { useLocation } from 'react-router-dom';

const DisplayPage = () => {
  const location = useLocation();
  const { videoId, url } = location.state || {}; // Retrieve videoId and url from the location state

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,  // Autoplay the video
    },
  };

  // Helper function to validate if the URL is a valid YouTube URL
  const isValidYouTubeUrl = (url) => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
  };

  return (
    <div>
      <h2 className="video-title">Your Stream</h2>
      {/* If videoId exists, display the YouTube video */}
      {videoId ? (
        <YouTube videoId={videoId} opts={opts} />
      ) : url ? (
        // If videoId doesn't exist but URL is valid, display it
        isValidYouTubeUrl(url) ? (
          <YouTube videoId={url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1]} opts={opts} />
        ) : (
          <p>Invalid YouTube URL: {url}</p>
        )
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default DisplayPage;


