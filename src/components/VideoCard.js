import React from "react";
import "../styles/VideoCard.css";
const playButton = "https://www.svgrepo.com/show/14574/play-button.svg";
const VideoCard = ({ image, index, name }) => {
  return (
    <div className="VideoCard" style={{ background: `url(${image})` }}>
      <a href="#/">
        <img src={playButton} alt="play Button" />
      </a>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
