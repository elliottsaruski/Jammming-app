import "./styles/Tracklist.css";
import Track from "./Track";
import PropTypes from "prop-types";

function TrackList({ playlist, setPlaylist, selectedTracks }) {
  const removeFromPlaylist = (trackToRemove) => {
    const updatedPlaylist = playlist.filter(
      (track) => track.id !== trackToRemove.id
    );
    setPlaylist(updatedPlaylist);
  };

  return (
    <div className="track-list-container">
      <div className="track-list">
        {/* Render tracks from playlist */}
        {playlist &&
          playlist.map((track) => (
            <div key={track.id}>
              <Track id={track.id} name={track.name} artist={track.artist} />
              <button onClick={() => removeFromPlaylist(track)}>Remove</button>
            </div>
          ))}

        {/* Render selected tracks from SearchResults */}
        {selectedTracks &&
          selectedTracks.map((track) => (
            <div key={track.id}>
              <Track id={track.id} name={track.name} artist={track.artist} />
              <button
                className="remove-button"
                onClick={() => removeFromPlaylist(track)}>
                -
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

TrackList.propTypes = {
  playlist: PropTypes.array,
  setPlaylist: PropTypes.func,
  selectedTracks: PropTypes.array,
};

export default TrackList;
