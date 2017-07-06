import React, {Component} from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBook} from '../actions/bookActions';


class BookForm extends Component {
    handleSubmit() {
        const book = [{
          title: findDOMNode(this.refs.title).value,
          description: findDOMNode(this.refs.description).value, 
          price: findDOMNode(this.refs.price).value,   
        }];
        this.props.postBook(book);
    }
    render() {
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
            </Well>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({postBook},dispatch);

export default connect(null, mapDispatchToProps)(BookForm);