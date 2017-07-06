'use strict';
import React, {Component}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Panel, Col, Row, Well, Button} from 'react-bootstrap';

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
                <Panel key={element.id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{element.title}</h6>
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