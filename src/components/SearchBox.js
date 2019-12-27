import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return(
        <div className="pa2">
            <input
                className="search pa2 ba b--orange bg-white"
                type="search"
                placeholder="Search Robots..."
                onChange = { searchChange }
            />
        </div>
    );
}

export default SearchBox;