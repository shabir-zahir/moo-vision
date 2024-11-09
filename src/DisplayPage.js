import React from 'react';
import YouTube from 'react-youtube';
import { useLocation } from 'react-router-dom';

const DisplayPage = () => {
  const location = useLocation();
  const { url, videoId } = location.state || {}; // Retrieve URL and Video ID

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <h2 className='video-title'> Your Stream </h2>
      {videoId ? (
        <YouTube videoId={videoId} opts={opts} />
      ) : url ? (
        <p>Playing video from URL: {url}</p> // Additional handling if URL is used in another way
      ) : (
        <p>No video selected</p>
      )}

    </div>
  );
};

export default DisplayPage;
