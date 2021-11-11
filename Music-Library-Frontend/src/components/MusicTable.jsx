import React from "react";

import "./MusicTable.css";

const MusicTable = ({ music, ui }) => {
  return (
    <div className="table-styles">
      <ul>
        {music.map((song, i) =>
          song.title.toLowerCase().includes(ui) ||
          song.artist.toLowerCase().includes(ui) ||
          song.genre.toLowerCase().includes(ui) ||
          song.releaseDate.toLowerCase().includes(ui) ||
          song.album.toLowerCase().includes(ui) ? (
            <li>
              {" "}        
              <ul className="ul-style">
                <li>Artist: {song.artist}</li>{" "}
                <li>Song Title: {song.title}</li>{" "}
                <li>Album: {song.album}</li>{" "}  
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
