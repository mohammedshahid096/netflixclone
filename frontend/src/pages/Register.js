import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "../styles/password.scss";
import Logo from "../assets/logo.png";
import { Typography, TextField, Button } from "@mui/material";
import { Create_with_Email_Password } from "../utils/FirebaseServices";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase_config";

const Register = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [error, seterror] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });

  const onchagnePasswordHanlder = (e) => {
    if (error) {
      seterror(false);
      seterrormessage("");
    }
    setpassword(e.target.value);
  };

  const SetpasswordHandler = () => {
    if (password === "") {
      seterror(true);
      seterrormessage("password is required");
    } else if (confirmpassword !== password) {
      seterror(true);
      seterrormessage("password are not matching");
    } else {
      seterror(false);
      seterrormessage("");
      Create_with_Email_Password(email, password);
    }
  };

  useEffect(() => {
    if (location.state === null) {
      navigate("/signup");
    } else {
      setemail(location.state.email);
    }
  }, [navigate, location]);

  return (
    <div className="passwordContainer">
      <section style={{ backgroundColor: "white" }}>
        <nav>
          <header>
            <div className="headerlogo">
              <img src={Logo} alt="netflixLogo" />
            </div>

            <div className="buttonOptions">
              <Typography variant="h6">
                <Link to="/login">Sign In</Link>
              </Typography>
            </div>
          </header>
        </nav>

        <main>
          <div className="passwordWrapper">
            <h1>Welcome back!</h1>
            <h1>joining Netflix is easy.</h1>
            <h3>
              Enter your password and you'll be watching in no <br /> time
            </h3>

            <div className="Details">
              Email
              <p>{email && email}</p>
            </div>

            <form className="formSubmit">
              <TextField
                error={error}
                id="standard-error-helper-text"
                label="Password"
                helperText={errormessage}
                variant="outlined"
                placeholder="Enter your Password"
                fullWidth
                onChange={onchagnePasswordHanlder}
              />

              <TextField
                label="Confirm Password"
                variant="outlined"
                placeholder="confirm your Password"
                fullWidth
                type="password"
                onChange={(e) => setconfirmpassword(e.target.value)}
              />

              <Button
                variant="contained"
                color="error"
                size="large"
                onClick={SetpasswordHandler}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Register;
