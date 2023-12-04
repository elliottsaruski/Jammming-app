import "./styles/Tracklist.css";
import Track from "./Track";
import PropTypes from "prop-types";

function TrackList({ playlist, setPlaylist, playlistName }) {
  const removeFromPlaylist = (trackToRemove) => {
    const updatedPlaylist = playlist.filter(
      (track) => track.id !== trackToRemove.id
    );
    setPlaylist(updatedPlaylist);
  };

  return (
    <div className="track-list" id={playlistName}>
      {/* Render tracks from playlist */}
      {playlist &&
        playlist.map((track) => (
          <div className="track" key={track.id}>
            <button
              className="remove-button"
              onClick={() => removeFromPlaylist(track)}>
              -
            </button>
            <Track id={track.id} name={track.name} artist={track.artist} />
          </div>
        ))}
    </div>
  );
}

TrackList.propTypes = {
  playlist: PropTypes.array,
  setPlaylist: PropTypes.func,
  playlistName: PropTypes.string,
};

export default TrackList;
