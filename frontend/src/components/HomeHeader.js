import React, { useState } from "react";
import NetflixLogo from "../assets/logo.png";
import "../styles/homeheader.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Logout } from "../utils/FirebaseServices";

const HomeHeader = () => {
  const [show_search, setshow_search] = useState(false);
  return (
    <nav>
      <header>
        <img src={NetflixLogo} alt="netflix" />

        <div>
          <Link>Home</Link>
          <Link>TV Shows</Link>
          <Link>Movies</Link>
          <Link>New & Popular</Link>
          <Link>My List</Link>
        </div>

        <section>
          <div className={show_search ? "search show_srearch" : "search"}>
            <IconButton onClick={() => setshow_search(!show_search)}>
              <SearchIcon />
            </IconButton>
            <input type="text" placeholder="search..." />
          </div>

          <IconButton onClick={Logout}>
            <PowerSettingsNewIcon />
          </IconButton>
        </section>
      </header>
    </nav>
  );
};

export default HomeHeader;
