import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import styles from './navbar.css'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import ModalMenu from '../modal/modalMenu';

class NavBar extends Component{

	render(){
		return(
			<Navbar className={styles.mynav}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">YWC Note</a>
					</Navbar.Brand>
				</Navbar.Header>

				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#/note">Your Note</NavItem>
						<NavItem eventKey={2} href="#">Explore Note</NavItem>
						{/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
							{/*<MenuItem eventKey={3.1}>Action</MenuItem>*/}
							{/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
							{/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
							{/*<MenuItem divider />*/}
							{/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
						{/*</NavDropdown>*/}
					</Nav>

					<Nav pullRight>
						<NavItem eventKey={1} href="#">Login with Facebook</NavItem>
						<NavItem eventKey={2} href="#">Login</NavItem>
					</Nav>
				</Navbar.Collapse>
				<ModalMenu/>
			</Navbar>
		)
	}
}


export default NavBar;
