import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({id, imageLink, imgHeight, title, author}) => {
    return(
        <div className='wrapper-book'>
            <img src={imageLink} height={imgHeight} alt={id}/>
            <div className="title-and-author">
                <h3>{title}</h3>
                <span>{author}</span>
            </div>
        </div>
    )
}

export default BookItem;

BookItem.propTypes = {
    id: PropTypes.number,
    imageLink: PropTypes.string,
    imgHeight: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string
}