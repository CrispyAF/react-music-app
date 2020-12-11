import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  isPlaying,
  audioRef,
  song,
  songs,
  setCurrentSong,
  id,
  setSongs,
  setIsPlaying,
}) => {
  const songSelectHandler = async () => {
    //check id so we have selected song from the Library whick is clicked
    // chapter 3, ep 14, 05:45  says this below line is redundant
    // const selectedSong = songs.filter((state) => state.id === id);

    //this line below does the trick
    await setCurrentSong(song);

    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    //check if song is playing if not then it wont play from library
    playAudio(isPlaying, audioRef);
    // audioRef.current.play();
    //change the status of the play/pause button
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
