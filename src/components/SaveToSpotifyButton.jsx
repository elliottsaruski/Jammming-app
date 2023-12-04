import "./styles/SaveToSpotifyButton.css";
import PropTypes from "prop-types";
import Spotify from "../utils/Spotify";

function SaveToSpotifyButton({ playlist, playlistName }) {
  let name = playlistName;
  const handleSaveToSpotify = () => {
    const playlistURIs = playlist.map((track) => track.uri);
    console.log(playlistURIs, name);
    Spotify.savePlaylist(name, playlistURIs.reverse());
  };
  return (
    <button onClick={handleSaveToSpotify} className="save-to-spotify-button">
      Save To Spotify
    </button>
  );
}

export default SaveToSpotifyButton;

SaveToSpotifyButton.propTypes = {
  playlist: PropTypes.array,
  playlistName: PropTypes.string,
};

