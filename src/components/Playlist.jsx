import "./styles/Playlist.css";
import TrackList from "./Tracklist";
import PropTypes from "prop-types";

function Playlist({ playlist, setPlaylist, playlistName, setPlaylistName }) {
  const handleChange = (e) => {
    setPlaylistName(e.target.value);
    console.log(playlistName);
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
          <TrackList
            playlistName={playlistName}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        </div>
      </div>
    </div>
  );
}
Playlist.propTypes = {
  playlist: PropTypes.array,
  setPlaylist: PropTypes.func,
  playlistName: PropTypes.string,
  setPlaylistName: PropTypes.func,
};
export default Playlist;
