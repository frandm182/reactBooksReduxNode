import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Menu extends Component {
  render() {
    return(
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">About</NavItem>
            <NavItem eventKey={2} href="/contacts">Contact</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem componentClass="span" eventKey={3}><Link to='/admin'>Admin</Link></NavItem>
            <NavItem componentClass="span" eventKey={4}>
              <Link to='/cart'>Your Cart 
                {(this.props.cartItemNumber > 0) ? (<Badge className='badge'>{this.props.cartItemNumber}</Badge>) : ''  }              
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Menu;

