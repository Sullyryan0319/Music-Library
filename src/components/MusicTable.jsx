import React from "react";

import "./MusicTable.css";

const MusicTable = ({ music, ui }) => {
  return (
    <div>
      <ul>
        {music.map((song, i) =>
          song.title.includes(ui) ||
          song.artist.includes(ui) ||
          song.genre.includes(ui) ||
          song.releaseDate.includes(ui) ||
          song.album.includes(ui) ? (
            <li>
              {" "}
              <ul>
                <li>Artist: {song.artist}</li>{" "}
                <li>Song Title: {song.title}</li> <li>Album: {song.album}</li>{" "}
                <li>Genre: {song.genre}</li>{" "}
                <li>Release Date: {song.releaseDate}</li>
              </ul>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default MusicTable;
