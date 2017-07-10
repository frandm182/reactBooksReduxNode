import React, {Component} from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBook, deleteBook} from '../actions/bookActions';


class BookForm extends Component {
    handleSubmit() {
        const book = [{
          title: findDOMNode(this.refs.title).value,
          description: findDOMNode(this.refs.description).value, 
          price: findDOMNode(this.refs.price).value,   
        }];
        this.props.postBook(book);
    }

    onDelete() {
        let bookId = findDOMNode(this.refs.delete).value;
        this.props.deleteBook(bookId);
    }
    render() {
        const bookList = this.props.books.map(book => {
            return(
                <option key={book._id}>{book._id}</option>
            )
        });
        return(
            <Well>
                <Panel>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Title"
                            ref="title" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Description"
                            ref="description" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Price"
                            ref="price" />
                    </FormGroup>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle='primary'>Add</Button>
                </Panel>
                <Panel style={{marginTop: '25px'}}>
                    <FormGroup controlId='formControlSelect'>
                        <ControlLabel>Select book to delete</ControlLabel>
                        <FormControl ref="delete" componentClass="select" placeholder="select">
                            <option key="0" value="select">select</option>
                            {bookList}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Delete book</Button>
                </Panel>
            </Well>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.books
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    postBook,
    deleteBook
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);