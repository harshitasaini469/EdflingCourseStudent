import React from 'react';

const EmbeddedVideo = () => {
  return (
    <div className="video-container ">
      <iframe
      className='w-full h-[50vh] sm:h-[75vh]'
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Embedded YouTube Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedVideo;
