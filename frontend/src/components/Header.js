import React from "react";
import Logo from "../assets/logo.png";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="headerlogo">
        <img src={Logo} alt="netflixLogo" />
      </div>

      <div className="buttonOptions">
        <select id="selectLanguage">
          <option value="" defaultChecked>
            English
          </option>
        </select>

        <NavLink to="/login">
          <Button variant="contained" color="error">
            Sign In
          </Button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
