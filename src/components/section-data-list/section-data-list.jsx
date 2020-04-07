import React, { Fragment, Component } from 'react';
import BooksList from './books-list.jsx';
import ArrayBooksData from './array-data.js';
import './section-data-list.css';
import Spinner from '../spinner/spinner.jsx';
import SearchPanel from '../search-panel/search-panel.jsx';

export default class SectionDataList extends Component{
    constructor(){
        super();
        this.state = {
            filter: "",
            data: [
      {
        fname: "Jayne",
        lname: "Washington",
        email: "jaynewashington@exposa.com",
        gender: "female"
      },
      {
        fname: "Peterson",
        lname: "Dalton",
        email: "petersondalton@exposa.com",
        gender: "male"
      },
      {
        fname: "Velazquez",
        lname: "Calderon",
        email: "velazquezcalderon@exposa.com",
        gender: "male"
      },
      {
        fname: "Norman",
        lname: "Reed",
        email: "normanreed@exposa.com",
        gender: "male"
      }
    ],
            loading: true
        }
    }

    fetchBooks = () => {
        this.setState({
            loading: false
        })
    }

    componentDidMount(){
        this.timeout = setTimeout(() => {
            this.fetchBooks();
        }, 3000);
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    handleChange = (e) => {
        this.setState({
            filter: e.target.value
        });
    }

    render(){
        const{filter, data} = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter((item) => {
            return Object.keys(item).some((key) => {
                item[key].toLowerCase().includes(lowercasedFilter)
            })
        })

        const{loading} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <BooksList books={ArrayBooksData} /> : null;

        return(
            <Fragment>
                <h2 className="title-over-books">List of books</h2>
                    
                    <input value={filter} onChange={this.handleChange} />
                    {filteredData.map((item) => (
                    <div key={item.email}>
                    <div className="test">
                    {item.fname} - {item.lname} - {item.gender} - {item.email}
                    </div>
                    </div>
                     
                ))}
     
            </Fragment>
        )
    }
    }