import React from 'react';
import PropTypes from 'prop-types';

import "./search-panel.css";

const SearchPanel = ({filter, handleChange}) => {
    return(
        <div className="search-area">
            <input type="text" value={filter}  placeholder="Searching of books..."  onChange={handleChange} />
            <i className="fas fa-search"></i>
        </div>
    )
}

export default SearchPanel;

SearchPanel.propTypes = {
    filter: PropTypes.string,
    handleChange: PropTypes.func
}