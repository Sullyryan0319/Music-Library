import React, { Component } from 'react';
import "./SearchBar.css";

const SearchBar = (props) => {
   
  
    return(
        <div className="search-layout">
            <div className="grid ">
            <input
            placeholder="Search: Artist, Title..."
            value={props.ui}
            onChange={props.handleChange} />
            </div>
        </div>
    )
}


export default SearchBar;