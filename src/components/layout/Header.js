import React from 'react';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Button } from 'react-bootstrap';
import { Collapse, Navbar, NavbarToggler, NavDropdown,NavbarItem, Item, NavbarBrand, Nav, NavItem, NavLink, FormGroup, FormControl, Button,Link,Text,Form} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import bootstrap from 'bootstrap'
import FaIconPack from 'react-icons/lib/fa'

class Header extends React.Component{


render(){
    return(
      <Navbar>
                <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Aricent-OLX</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
        <Nav pullRight>
        <NavItem eventKey={1} href="#"><i class="fa fa-user" aria-hidden="true"></i> My Account</NavItem>
        <NavItem eventKey={2} href="/addpost">
        <Button className = "btn btn-success">Submit a Free Ad</Button>
        </NavItem>
      </Nav>
  </Navbar.Collapse>
        </Navbar>
    );
  }
}
export default Header;
