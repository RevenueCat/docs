import React from "react";

const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="youtube-embed">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoId}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
