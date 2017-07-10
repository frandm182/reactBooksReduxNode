'use strict';
import React, {Component} from 'react';
import BookList from './components/BookList';
import Cart from './components/Cart';
import BookForm from './components/BookForm';

import {Switch, Route} from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={BookList}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/admin' component={BookForm}/>
    </Switch>
  </main>
)
export default Main;