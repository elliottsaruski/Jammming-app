import "./styles/Playlist.css";
import TrackList from "./Tracklist";
import { useState } from "react";
import PropTypes from "prop-types";

function Playlist({ playlist, setPlaylist }) {
  const [playlistName, setPlaylistName] = useState("");

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div className="playlist-container">
      <div className="playlist">
        <h2>
          <input
            id="playlist-name-input"
            className="playlist-name"
            value={playlistName}
            onChange={handleChange}
            type="text"
            placeholder="Playlist Name"></input>
        </h2>
        <div className="playlist-items-container">
          <TrackList playlist={playlist} setPlaylist={setPlaylist} />
        </div>
      </div>
    </div>
  );
}
Playlist.propTypes = {
  playlist: PropTypes.array,
  setPlaylist: PropTypes.func,
  selectedTracks: PropTypes.array,
};
export default Playlist;
