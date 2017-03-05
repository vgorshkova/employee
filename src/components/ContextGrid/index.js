import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Sidebar } from '../../components';

export default function ContextGrid ({children}) {
	return (
		<Grid>
			<Row>
				<Col xs={3} md={3}>
					<Sidebar />
				</Col>
				<Col xsOffset={1} xs={7} md={7}>
					{children}
				</Col>
			</Row>
		</Grid>
	);
}

