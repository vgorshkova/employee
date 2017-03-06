import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Nav, NavItem } from 'react-bootstrap'
import s from './styles.less';

function Sidebar() {
	const handleSelect = (selectedKey) => {
		switch (selectedKey) {
			case 1:
				browserHistory.push('/departments');
				break;
			case 2:
				browserHistory.push('/employees');
				break;
		}
	};

	return (
		<Nav bsStyle="pills" stacked onSelect={handleSelect} >

				<NavItem eventKey={1} >
					Departments
				</NavItem>

				<NavItem eventKey={2} >
					Employees
				</NavItem>

		</Nav>
	)
}

export default Sidebar;
