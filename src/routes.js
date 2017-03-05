import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, IndexRedirect, Link } from 'react-router';
import {
	AppContainer,
	DepartmentContainer,
	EmployeeContainer,
	Home,
} from './containers';

function createRoutes(browserHistory, store) {
	const history = syncHistoryWithStore(browserHistory, store);

	return (
		<Router history={history}>
			<Route path="/" component={AppContainer} >
				<IndexRoute component={Home}/>
				<Route path="departments" component={DepartmentContainer} />
				<Route path="employees" component={EmployeeContainer} />
			</Route>
		</Router>
	);
}

export default createRoutes;
