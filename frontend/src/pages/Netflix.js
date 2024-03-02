import React from "react";
import "../styles/netflix.scss";
import HomeHeader from "../components/HomeHeader";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
import HomeMovies from "../components/HomeMovies";

const Netflix = () => {
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate("/signup");
    }
  });

  return (
    <div className="HomeWrapper">
      <HomeHeader />

      <HomeMovies />
    </div>
  );
};

export default Netflix;
