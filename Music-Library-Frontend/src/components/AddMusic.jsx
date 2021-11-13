import React, {useState} from 'react';

import "./AddMusic.css";


const AddMusicForm = (props) => {
  
    const [artistName,setArtistName] = useState("Ryan")

    
    return(
        <form>
            <input
            placeholder="Artist Name..."
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)} />
            <input
            placeholder="Song Title..."
            value={props.ui}
            onChange={props.handleChange} />
            <input
            placeholder="Album..."
            value={props.ui}
            onChange={props.handleChange} />
            <input
            placeholder="Genre..."
            value={props.ui}
            onChange={props.handleChange} />
            <input
            placeholder="Release Date..."
            value={props.ui}
            onChange={props.handleChange} />
            <input 
            type= "submit"/>
        </form>
    )
}


export default AddMusicForm;