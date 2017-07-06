'use strict';
import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';

class Cart extends Component {
    render() {
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
                            <h6>qty. <Label bsStyle='success'></Label></h6>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{ minWidth: '300px' }} >
                                <Button bsStyle='default' bsSize='small'>-</Button>
                                <Button bsStyle='default' bsSize='small'>+</Button>
                                <span>  </span>
                                <Button bsStyle='danger' bsSize='small'>Delete</Button>
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
export default connect(mapStateToProps)(Cart);