import React, { useState } from "react";
import BackgroundImage from "../assets/login.jpg";
import "../styles/signup.scss";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { TextField, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase_config";

const Signup = () => {
  const [getEmail, setgetEmail] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });

  const GetStartedHandler = () => {
    if (getEmail === "") {
      return;
    }
    if (!getEmail.includes("@gmail.com")) {
      return;
    }
    navigate("/signup/password", { state: { email: getEmail } });
  };

  return (
    <div className="signupContainer">
      <div className="backgroundWrapper">
        <img src={BackgroundImage} alt="background" />
      </div>
      <section>
        <nav>
          <Header />
        </nav>

        <main>
          <div className="mainWrapper">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>
              Ready to watch Enter your email to create or restart membership
            </h6>
          </div>

          <form className="formWrapper">
            <TextField
              label="Email Address"
              id="filled-size-normal"
              variant="filled"
              color="success"
              type="email"
              fullWidth
              onChange={(e) => setgetEmail(e.target.value)}
              required
              focused
            />
            <Button
              variant="contained"
              color="error"
              endIcon={<ArrowForwardIosIcon />}
              onClick={GetStartedHandler}
            >
              Get Started
            </Button>
          </form>
        </main>
      </section>
    </div>
  );
};

export default Signup;
