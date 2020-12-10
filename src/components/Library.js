import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  setSongs,
  isPlaying,
  audioRef,
  songs,
  setCurrentSong,
  libraryStatus,
  setIsPlaying,
}) => {
  return (
    <div>
      <div className={`library ${libraryStatus ? "active-library" : ""}`}>
        <h2>Library</h2>
        <div className="library-songs">
          {songs.map((song) => (
            <LibrarySong
              songs={songs}
              setCurrentSong={setCurrentSong}
              song={song}
              id={song.id}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              setIsPlaying={setIsPlaying}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
