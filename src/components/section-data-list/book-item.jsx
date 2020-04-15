import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({id, imageLink, imgHeight, title, author, sale}) => {
    return(
        <div className='wrapper-book'>
            <div className="book-sale">
            <img src={sale} height={70} alt={id}/>
            </div>
            {
             imageLink == null || imageLink.length == 0 ? 
             <img src='https://goldvision.in/ClientPhotoGallery/goldvision.in/ProductImages/100_241220191654110.jpg' 
             height={260} alt={id} style={{marginTop:"70px"}}/> : 
             <img src={imageLink} height={imgHeight} alt={id} />
             }
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
    author: PropTypes.string,
    sale: PropTypes.string
}