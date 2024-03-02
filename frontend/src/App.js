import { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import webfont from "webfontloader";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Register from "./pages/Register";
import Player from "./pages/Player";

function App() {
  useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Poppins"],
      },
    });
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/password" element={<Register />} />
          <Route path="/" element={<Netflix />} />
          <Route path="/player/video" element={<Player />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
