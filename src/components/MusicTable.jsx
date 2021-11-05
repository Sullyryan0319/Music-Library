import React from "react";

import "./MusicTable.css";

const MusicTable = ({ music }) => {
  return (
    <div>
      <ul>
        {music.map((music, index) => (
          <li>
            <ul>
              <li>Artist: {music.artist}</li> <li>Song Title: {music.title}</li>{" "}
              <li>Album: {music.album}</li> <li>Genre: {music.genre}</li>{" "}
              <li>Release Date: {music.releaseDate}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicTable;
