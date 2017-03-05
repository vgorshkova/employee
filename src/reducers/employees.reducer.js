import {
	ADD_EMPLOYEE,
	EDIT_EMPLOYEE,
	REMOVE_EMPLOYEE,
	SET_EMPLOYEES,
	DELETE_ALL_EMPLOYEES
} from '../constants/ActionTypes';

const initialState = [];

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_EMPLOYEE:
			return state.concat([action.payload.employee]);
		case EDIT_EMPLOYEE:
			return state.map(employee => (employee.id === action.payload.employee.id ? action.payload.employee : employee));
		case REMOVE_EMPLOYEE:
			return state.filter(employee => employee.id !== action.payload.id);
		case SET_EMPLOYEES:
			return action.payload.employees;
		case DELETE_ALL_EMPLOYEES:
				return [];
		default:
			return state;
	}
};
