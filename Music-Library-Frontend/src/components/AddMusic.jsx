import React, {useState} from 'react';

import "./AddMusic.css";


const AddMusicForm = (props) => {
  
    const [artistName,setArtistName] = useState("");
    const [songTitle,setSongTitle] = useState("");
    const [Album,setAlbum] = useState("");
    const [Genre,setGenre] = useState("");
    const [releaseDate,setReleaseDate] = useState("");

//todo   change state variables in form + import post method from app as props + set up handle submit for form (david's tutorial)
//

    const handleSubmit = (event) => {
        event.preventDefault();
        props.postNewSong({
            title: songTitle,
            album: Album,
            artist: artistName,
            genre: Genre,
            releaseDate: releaseDate,
        });
    }

    return(
        <div>
            <h2 className="form-heading">Add Music</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                placeholder="Artist Name..."
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)} />
                <input
                placeholder="Song Title..."
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)} />
                <input
                placeholder="Album..."
                value={Album}
                onChange={(e) => setAlbum(e.target.value)} />
                <input
                placeholder="Genre..."
                value={Genre}
                onChange={(e) => setGenre(e.target.value)} />
                <input
                placeholder="Release Date..."
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)} />
                <input 
                type= "submit"/>
            </form>

        </div>
    )
}



export default AddMusicForm;