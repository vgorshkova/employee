import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ContextGrid, Header, Spinner } from '../components';
import { Grid, Row, Col } from 'react-bootstrap';

class AppContainer extends React.Component {
	componentDidMount() {
		injectTapEventPlugin();
	}

	render() {
		return (
			<div>
				<Header />
				<ContextGrid>
						{this.props.app.isFetching ? <Spinner /> : null}
						{this.props.children}
				</ContextGrid>
			</div>
		);
	}
}

function mapStateToProps({app}) {
	return {
		app,
	};
}

export default connect(mapStateToProps, {})(AppContainer);
