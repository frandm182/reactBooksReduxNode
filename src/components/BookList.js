'use strict';
import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../actions/bookActions';

class BookList extends Component {
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        const books = this.props.books.map(book => <div key={book.id}>{book.title}</div>);
        return(
            <div>{books}</div>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books.books
    }
};
function mapDispathToProps(dispatch) {
    return bindActionCreators({
        getBooks
    }, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(BookList);

