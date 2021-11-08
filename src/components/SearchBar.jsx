import React, { Component } from 'react';

const SearchBar = (props) => {
   
  
    return(
        <div>
            <legend>Search</legend>
            <input
            value={props.ui}
            onChange={props.handleChange} />
        </div>
    )
}


export default SearchBar;