import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import s from './styles.less';

function Sidebar() {
	return (
		<ListGroup className={s.listGroup}>
			<Link className={s.link} to="/departments">
				<ListGroupItem className={s.listGroupItem}>
					Departments
				</ListGroupItem>
			</Link>
			<Link className={s.link} to="/employees">
				<ListGroupItem className={s.listGroupItem}>
					Employees
				</ListGroupItem>
			</Link>
		</ListGroup>
	);
}

export default Sidebar;
