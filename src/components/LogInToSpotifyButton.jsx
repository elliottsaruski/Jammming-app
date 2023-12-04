import { useState, useEffect } from "react";
import Spotify from "../utils/Spotify";
import './styles/LogInToSpotifyButton.css'

function LogInToSpotifyButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    Spotify.getAccessToken();
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = Spotify.getAccessToken();
      if (token) {
        setLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <div
      className={loggedIn ? "display-no-login-button" : "display-login-button"}
      style={{ margin: "0 auto" }}>
      {!loggedIn && <button onClick={handleLogin}>Login to Spotify</button>}
    </div>
  );
}

export default LogInToSpotifyButton;
