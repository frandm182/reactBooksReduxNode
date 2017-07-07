'use strict';
import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';
import {deleteCartItem,updateCart} from '../actions/cartActions';

class Cart extends Component {
    
    onDelete(_id) {
        const currentBookToDelete = this.props.cart;
        const indexToDelete = currentBookToDelete.findIndex(cart => cart._id === _id)
        let cartAfterDelete = [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)];
        this.props.deleteCartItem(cartAfterDelete); 
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
        console.log(carItemList);
        return (
            <Panel header='Cart' bsStyle='primary'>
                {carItemList}
            </Panel>
        );        
    }

    renderEmpty() {
        return(<div>vacio</div>);
    }
}

const mapStateToProps = state => {return {cart: state.cart.cart}}
const mapDispatchToProps = dispatch => bindActionCreators({deleteCartItem,updateCart},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Cart);