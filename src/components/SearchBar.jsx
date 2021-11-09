import React from 'react';

import "./SearchBar.css";

const SearchBar = (props) => {
   
  
    return(
        <div className="search-layout grid">
            <input
            placeholder="Search: Artist, Title..."
            value={props.ui}
            onChange={props.handleChange} />
        </div>
    )
}


export default SearchBar;