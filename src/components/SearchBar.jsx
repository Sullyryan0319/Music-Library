import React, { Component } from 'react';

const SearchBar = (props) => {
   
  
    return(
        <div className="search-layout">
            <legend>Search by: Artist, Song Title, Album, Genre or Release Date...</legend>
            <input
            value={props.ui}
            onChange={props.handleChange} />
        </div>
    )
}


export default SearchBar;