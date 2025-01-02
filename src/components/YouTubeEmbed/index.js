import React from "react";
import "./styles.css";

const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="youtube-embed">
      <div className="video-container">
        <iframe
          src={"https://www.youtube.com/embed/" + videoId}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;
