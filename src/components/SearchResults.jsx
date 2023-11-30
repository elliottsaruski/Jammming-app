import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles/SearchResults.css";
import Track from "./Track";
import Spotify from "../utils/Spotify";

function SearchResults({ searchQuery, playlist, setPlaylist }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkInPlaylist, setCheckInPlaylist] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery) {
        setLoading(true);
        try {
          const response = await Spotify.search(searchQuery);
          const tracks = Array.isArray(response) ? response : [];
          setResults(tracks);
        } catch (error) {
          console.error("Error fetching results:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchResults();
  }, [searchQuery]);

  const addToPlaylist = (track) => {
    if (!playlist) {
      setPlaylist([]);
    }

    const isInPlaylist = playlist.some((t) => t.id === track.id);

    if (!isInPlaylist) {
      setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
      setCheckInPlaylist(true);
    } else {
      return alert(
        `${track.name} by ${track.artist} is already in your playlist`
      );
    }
  };

  return (
    <div className="search-results">
      <h2>Results</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="results-container">
          <div className="results">
            {results.map((track) => (
              <Track
                id={track.id}
                name={track.name}
                artist={track.artist}
                album={track.album.name}
                uri={track.uri}
                key={track.id}
                checkInPlaylist={checkInPlaylist}
                addToPlaylist={() => addToPlaylist(track)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

SearchResults.propTypes = {
  searchQuery: PropTypes.string,
  playlist: PropTypes.array,
  setPlaylist: PropTypes.func,
};

export default SearchResults;
