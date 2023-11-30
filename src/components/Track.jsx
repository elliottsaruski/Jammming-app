import PropTypes from "prop-types";
import "./styles/Track.css";

function Track({ id, name, artist, addToPlaylist }) {
  const handleAddToPlaylist = () => {
    addToPlaylist({ id, name, artist });
  };

  return (
    <div style={{ fontWeight: "500", width: "90%" }} className="track">
      <div>{name}</div>

      <div
        style={{
          fontWeight: "200",
          paddingBottom: "2%",
          borderBottom: "2px solid #378bcf86",
        }}>
        {artist}
        <button className="add-button" onClick={handleAddToPlaylist}>
          +
        </button>
      </div>
    </div>
  );
}

Track.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  addToPlaylist: PropTypes.func,
  checkInPlaylist: PropTypes.bool,
};

export default Track;
