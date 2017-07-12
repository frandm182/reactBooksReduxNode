'use strict';
import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../actions/bookActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from './BookItem';
import BookForm from './BookForm';
import Cart from './Cart';


class BookList extends Component {
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        const books = this.props.books.map((book) => {
            return(
                <Col xs={12} sm={6} md={4} key={book._id}>
                    <BookItem                         
                        _id={book._id}
                        title={book.title}
                        description={book.description}
                        price={book.price} />
                </Col>           
            )            
        }); 
        return(
            <Grid>
                <Row >
                    <Cart />
                </Row>
                <Row style={{marginRight: '15px'}}>
                    <Col xs={12} sm={6}>
                        <BookForm />                        
                    </Col>
                    {books}                    
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => { return {books: state.books.books}}
const mapDispatchToProps = dispatch => bindActionCreators({getBooks},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

