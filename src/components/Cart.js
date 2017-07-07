'use strict';
import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';
import {deleteCartItem,updateCart} from '../actions/cartActions';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    open() {
        this.setState({showModal:true});
    }

    close() {
        this.setState({showModal:false});
    }
    onDelete(_id) {
        this.props.deleteCartItem(_id); 
    }

    onIncrement(_id) {
        this.props.updateCart(_id,1)
    }

    onDecrement(_id,quantity) {
        if (quantity > 1){
            this.props.updateCart(_id,-1)
        }        
    }

    render() {
        console.log('cart**************',this.props)
        if(this.props.cart[0]) {
            return(this.renderCart());
        } else {
            return(this.renderEmpty());
        }       
    }

    renderCart() {
        const carItemList = this.props.cart.map(element => {
            return(
                <Panel key={element._id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{element.title}</h6><span>   </span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>usd. {element.price}</h6>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>qty. <Label bsStyle='success'>{element.quantity}</Label></h6>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{ minWth: '300px' }} >
                                <Button onClick={this.onDecrement.bind(this,element._id,element.quantity)} bsStyle='default' bsSize='small'>-</Button>
                                <Button onClick={this.onIncrement.bind(this,element._id)} bsStyle='default' bsSize='small'>+</Button>
                                <span>  </span>
                                <Button onClick={this.onDelete.bind(this,element._id)} bsStyle='danger' bsSize='small'>Delete</Button>
                            </ButtonGroup>
                        </Col>                        
                    </Row>                    
                </Panel>
            )
        });
        return (
            <Panel header='Cart' bsStyle='primary'>           
                {carItemList}
                <Row>
                    <Col xs={12}>
                        <h6>Total amount: {this.props.totalAmount}</h6>
                        <Button onClick={this.open.bind(this)} bsStyle="success" bsSize="small">
                            Checkout
                        </Button>
                    </Col>
                </Row>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h1>Test</h1>
                    </Modal.Body>
                    <Modal.Footer>
                        <Col xs={6}>
                            <h6>Total amount $: {this.props.totalAmount}</h6>
                        </Col>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Panel>
        );        
    }

    renderEmpty() {
        return(<div></div>);
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({deleteCartItem,updateCart},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Cart);