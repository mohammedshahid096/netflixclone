import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../styles/videoplayer.scss";
import { Link } from "react-router-dom";

const Player = () => {
  const video =
    "https://player.vimeo.com/external/371824640.sd.mp4?s=00d75e016db1ee1e770d54065676f5bc841e106b&profile_id=164&oauth2_token_id=57447761";
  return (
    <div className="videoWrapper">
      <span className="back">
        <Link to="/">
          <ArrowBackIcon />
        </Link>
      </span>

      <video src={video} autoPlay loop controls></video>
    </div>
  );
};

export default Player;
