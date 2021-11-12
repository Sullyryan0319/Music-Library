import React from 'react';

import "./AddMusic.css";

const AddMusic = (props) => {
   
  
    return(
        <div>
            <input
            placeholder="Artist Name..."
            value={props.ui}
            onChange={props.handleChange} />
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
        </div>
    )
}


export default AddMusic;