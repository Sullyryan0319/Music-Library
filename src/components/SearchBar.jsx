import React, { Component } from 'react';

const SearchBar = (props) => {
   
  
    return(
        <div className="search-layout">
            <legend className="center">Search</legend>
            <input
            value={props.ui}
            onChange={props.handleChange} />
        </div>
    )
}


export default SearchBar;