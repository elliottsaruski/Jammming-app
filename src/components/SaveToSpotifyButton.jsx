import "./styles/SaveToSpotifyButton.css";
import PropTypes from "prop-types";
import Spotify from "../utils/Spotify";

function SaveToSpotifyButton({ playlist, playlistName }) {
  let name = playlistName;
  const handleSaveToSpotify = () => {
    const playlistURIs = playlist.map((track) => track.uri);

    Spotify.savePlaylist(name, playlistURIs.reverse()).then(() => {
      alert(
        `Your new playlist, ${name}, has been created and posted to Spotify. The Playlist currently contains ${playlist.length} songs.`
      );
    });
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
