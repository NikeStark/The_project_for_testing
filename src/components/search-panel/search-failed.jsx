import React from 'react';

const SearchFailed = () => {
    return(
        <div className="search-failed">
            <h3>Books was NOT found! Please, try again...</h3>
            <div className="img-failed">
            <img src="https://cdn.iconscout.com/icon/free/png-512/no-data-found-1965030-1662565.png" 
            alt="img-failed"
            height={100}/>
            </div>
        </div>
    )
}

export default SearchFailed;