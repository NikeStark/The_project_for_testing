import React from 'react';
import Pagination from './pagination.jsx';
import data from './arr.js';


export default class Ap extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
       /*const exampleItems = [...Array(4).keys()].map(i => ({ id: (i+1), name: 'Title ' + (i + 1)}));*/ 

        this.state = {
            exampleItems: data,
            pageOfItems: []
        };

    }

    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        {this.state.pageOfItems.map((item) => 
                        <div key={item.id}>{item.title}</div>
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
                <hr />
              
            </div>
        );
    }
}