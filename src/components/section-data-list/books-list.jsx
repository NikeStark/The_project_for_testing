import React from 'react';
import BookItem from './book-item.jsx';
import PropTypes from 'prop-types';

const BooksList = ({filteredData, getProductData}) => {
    
    const bookElements = filteredData.map((data) => {
        const{id, ...BooksProps} = data;

        return <li key={id} onClick={() => getProductData(data)}><BookItem {...BooksProps}/></li>
    })
    
    return(   
        <ul className="book-elements">
            {bookElements}
        </ul>  
    )
}

export default BooksList;

BooksList.propTypes = {
    filteredData: PropTypes.array,
    getProductData: PropTypes.func
}