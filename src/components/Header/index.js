import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem} from 'react-bootstrap'

import { Grid, Row, Col } from 'react-bootstrap';

function Sidebar () {
	return (
		<header>
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Application</Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem>
							<Link to="/departments">Departments</Link>
						</NavItem>
						<NavItem>
							<Link to="/employees">Employees</Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Sidebar;
