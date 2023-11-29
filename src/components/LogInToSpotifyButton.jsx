import { useState, useEffect } from "react";
import Spotify from "../utils/Spotify";

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
    <div style={{ margin: "0 auto" }}>
      {!loggedIn && <button onClick={handleLogin}>Login to Spotify</button>}
    </div>
  );
}

export default LogInToSpotifyButton;
