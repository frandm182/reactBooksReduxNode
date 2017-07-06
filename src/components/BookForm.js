import React, {Component} from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class BookForm extends Component {
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
                    <Button bsStyle='primary'>Add</Button>
                </Panel>
            </Well>
        )
    }
}

export default BookForm;