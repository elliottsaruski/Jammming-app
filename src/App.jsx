import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./App.css";
import Playlist from "./components/Playlist";
import LogInToSpotifyButton from "./components/LogInToSpotifyButton";
import SaveToSpotifyButton from "./components/SaveToSpotifyButton";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app-full">
      <LogInToSpotifyButton />
      <div className="app-header-container">
        <h1 className="app-header">
          Ja<strong>mmm</strong>ing
        </h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="results-playlist-container">
        <SearchResults
          playlist={playlist}
          setPlaylist={setPlaylist}
          searchQuery={searchQuery}
        />
        <Playlist
          playlist={playlist}
          setPlaylist={setPlaylist}
          playlistName={playlistName}
          setPlaylistName={setPlaylistName}
        />
      </div>
      <SaveToSpotifyButton playlist={playlist} playlistName={playlistName} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <footer
          style={{
            position: "absolute",
            bottom: "0",
            color: "white",
            opacity: ".1",
          }}>
          Created By: <strong>Elliott Saruski</strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
