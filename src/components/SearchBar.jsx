import React, { Component } from 'react';
import "./SearchBar.css";

const SearchBar = (props) => {
   
  
    return(
        <div className="search-layout">
            <legend className="grid">Search</legend>
            <div className="grid ">
            <input
            value={props.ui}
            onChange={props.handleChange} />
            </div>
        </div>
    )
}


export default SearchBar;