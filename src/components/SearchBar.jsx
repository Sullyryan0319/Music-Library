import React, { Component } from 'react';
import "./SearchBar.css";

const SearchBar = (props) => {
   
  
    return(
        <div className="search-layout">
            <legend className="center">Search</legend>
            <input className="grid"
            value={props.ui}
            onChange={props.handleChange} />
        </div>
    )
}


export default SearchBar;