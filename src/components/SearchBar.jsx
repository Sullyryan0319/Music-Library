import React, { Component } from 'react';

const SearchBar = (props) => {
   
  
    return(
        <fieldset>
            <legend>Search by: Artist, Song Title, Album, Genre or Release Date...</legend>
            <input
            value={props.ui}
            onChange={props.handleChange} />
        </fieldset>
    )
}


export default SearchBar;