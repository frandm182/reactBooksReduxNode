'use strict';
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import BookList from './components/BookList';
import Cart from './components/Cart';
import BookForm from './components/BookForm';
import Menu from './components/Menu';
import Footer from './components/Footer';

class Main extends Component {
    render() {
        console.log(this.props)
        return(
            <main>
                <Menu cartItemNumber={this.props.totalQty}/>
                <Switch>
                    <Route exact path='/' component={BookList}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/admin' component={BookForm}/>
                </Switch>
                <Footer />
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        totalQty: state.cart.totalQuantity
    }
}
export default connect(mapStateToProps,null)(Main);