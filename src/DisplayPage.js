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

  return (
    <div>
      <h2 className='video-title'>Your Stream</h2>
      {/* If videoId exists, display the YouTube video */}
      {videoId ? (
        <YouTube videoId={videoId} opts={opts} />
      ) : url ? (
        // If videoId doesn't exist but url does, show the URL (You can implement another way to display the stream if needed)
        <p>Playing video from URL: {url}</p>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default DisplayPage;

