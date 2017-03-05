import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app.reducer';
import departments from './departments.reducer';
import employees from './employees.reducer';

const reducer = combineReducers({
	app,
	departments,
	employees,
	routing: routerReducer,
});

export default reducer;
