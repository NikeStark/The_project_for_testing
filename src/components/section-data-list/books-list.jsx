import React, {Fragment} from 'react';
import BookItem from './book-item.jsx';
import PropTypes from 'prop-types';

const BooksList = ({filteredData, getProductData}) => {
    
    const bookElements = filteredData.map((data) => {
        const{id, ...BooksProps} = data;

        return <li key={id} onClick={() => getProductData(data)}><BookItem {...BooksProps}/></li>
    })
    
    return(
        <Fragment>
        <div className="elfsight-app"> 
            <div className="elfsight-app-abade773-fb21-4e72-bea6-60b7acf901bf"></div>
        </div>
        <ul className="book-elements">
            {bookElements}
        </ul>  
        </Fragment>  
    )
}

export default BooksList;

BooksList.propTypes = {
    filteredData: PropTypes.array,
    getProductData: PropTypes.func
}