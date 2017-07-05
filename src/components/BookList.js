'use strict';
import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../actions/bookActions';
import {Grid, Col, Row, Button} from 'react-bootstrap';

class BookList extends Component {
    componentDidMount() {
        this.props.getBooks();
    }
    render() {
        const books = this.props.books.map(book => {
            return(
                <div>
                    <div key={book.id}>{book.title}</div>
                    <Button bsStyle='primary'>Boton</Button>
                </div>             
            )            
        }); 
        return(
            <Grid>
                <Row style={{marginRight: '15px'}}>
                    {books}
                </Row>
            </Grid>
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

