import React from 'react';
import BookItem from './book-item.jsx';
import PropTypes from 'prop-types';

const BooksList = ({books}) => {
    
    const bookElements = books.map((item) => {
        const{id, ...BooksProps} = item;

        return <li key={id}><BookItem {...BooksProps}/></li>
    })

    return(
        <ul className="book-elements">
            {bookElements}
        </ul>
    )
}

export default BooksList;

BooksList.propTypes = {
    books: PropTypes.array
}