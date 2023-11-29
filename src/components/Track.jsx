import PropTypes from "prop-types";
import "./styles/Track.css";

function Track({ id, name, artist, addToPlaylist }) {
  const handleAddToPlaylist = () => {
    addToPlaylist({ id, name, artist });
  };

  return (
    <div
      style={{ borderBottom: "2px solid #378bcf86", fontWeight: "500" }}
      className="track">
      <div>{name}</div>
      <div style={{ fontWeight: "200", paddingBottom: "2%" }}>
        {artist}
        <button className="add-song-button" onClick={handleAddToPlaylist}>
          +
        </button>
        {/* check if in playlist and render - if in playlist instead */}
      </div>
    </div>
  );
}

Track.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  addToPlaylist: PropTypes.func,
};

export default Track;
