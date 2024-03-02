import React, { useState } from "react";
import BackgroundImage from "../assets/login.jpg";
import "../styles/signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Alert } from "@mui/material";
import Logo from "../assets/logo.png";
import { Login_with_Email_Password } from "../utils/FirebaseServices";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase_config";

const Header = () => {
  return (
    <header>
      <div className="headerlogo">
        <img src={Logo} alt="netflixLogo" />
      </div>
    </header>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState(false);
  const [errormessage, seterrormessage] = useState("");

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });

  const onchangeHandler = (e) => {
    if (error) {
      seterror(false);
    }

    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    if (formData.email === "" || formData.password === "") {
      seterror(true);
      seterrormessage("Email or Password is required");
    } else {
      seterror(false);
      let result = await Login_with_Email_Password(
        formData.email,
        formData.password
      );
      if (!result) {
        seterror(true);
        seterrormessage("email or password not match");
      }
    }
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

        <div className="LoginMain">
          <h1>Sign In</h1>
          {error ? <Alert severity="error">{errormessage}</Alert> : null}
          <TextField
            focused
            label="Email"
            variant="outlined"
            placeholder="Enter the email"
            name="email"
            fullWidth
            color="warning"
            onChange={onchangeHandler}
          />

          <TextField
            focused
            label="Password"
            variant="outlined"
            placeholder="Password"
            fullWidth
            type="password"
            color="warning"
            name="password"
            onChange={onchangeHandler}
          />

          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={submitHandler}
          >
            Sign Up
          </Button>

          <p>
            New To Netflix? <Link to="/signup">Sign up now.</Link>
            <br />
            <br />
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </small>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
