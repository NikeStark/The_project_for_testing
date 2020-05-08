import React, { Fragment, Component } from 'react';
import BooksList from './books-list.jsx';
import ArrayBooksData from './array-data.js';
import './section-data-list.css';
import Spinner from '../spinner/spinner.jsx';
import SearchPanel from '../search-panel/search-panel.jsx';
import SearchFailed from '../search-panel/search-failed.jsx';
import SectionDataListProduct from '../section-data-list-product/section-data-list-product.jsx';
import Pagination from '../pagination/pagination.jsx';

const titleOverBooks = <h2 className="title-over-books">Book's Store</h2>

export default class SectionDataList extends Component{
    constructor(){
        super();
        this.state = {
            filter: "",
            data: ArrayBooksData,
            loading: true,
            showProduct: false,
            dataProduct: this.productData,
            pageOfItems: ArrayBooksData
        }
    }

    productData = {
        imageLink:"",
        imgHeight:"",
        title:"",
        author:"",
        describeBook:{
            firstIndent:"",
            secondIndent:""
        },
    }
    
    fetchBooks = () => {
        this.setState({
            loading: false
        })
    }

    componentDidMount(){
        this.timeout = setTimeout(() => {
            this.fetchBooks();
        }, 100);
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    handleChange = (event) => {
        this.setState({ 
            filter: event.target.value 
        });
        
    };

    getProductData = (data) => {
        this.setState({
            showProduct: true,
            dataProduct: data 
        })
    }

    hideProductData = () => {
        this.setState({
            showProduct: false
        })
    }

    onChangePage = (pageOfItems) => {
        this.setState({
           pageOfItems: pageOfItems
        });
    }

    render(){
        const { filter, data, showProduct, dataProduct, pageOfItems} = this.state;
        
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = pageOfItems.filter(item => {
          return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(lowercasedFilter)
          );
        });

        const{loading} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <BooksList filteredData={filteredData} getProductData={this.getProductData} /> : null;
        const search = !loading ? <SearchPanel handleChange={this.handleChange}/> : null;
        const pagination = !loading ? <Pagination items={data} onChangePage={this.onChangePage} /> : null;

        if(filteredData === undefined || filteredData.length == 0){
            return(
            <Fragment>
                {titleOverBooks}
                <SearchFailed />
                {search}
                {content} 
            </Fragment>
            )
        }     

        return(
            <Fragment>
                {titleOverBooks}
                {spinner}
                {search}
                {content} 
                {pagination}
                <SectionDataListProduct
                    show={showProduct}
                    onHide={this.hideProductData}
                    dataProduct={dataProduct}
                />
            </Fragment>
        )
    }
    }