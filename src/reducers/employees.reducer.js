import {
	ADD_DEPARTMENT,
	EDIT_DEPARTMENT,
	REMOVE_DEPARTMENT,
	SET_DEPARTMENTS,
	DELETE_ALL_DEPARTMENTS
} from '../constants/ActionTypes';

const initialState = [];

export default function (state=initialState, action) {
	switch (action.type) {
		case ADD_DEPARTMENT:
			return state.concat([action.payload.department]);
		case EDIT_DEPARTMENT:
			return state.map(department => (department.id === action.payload.department.id ? action.payload.department : department));
		case REMOVE_DEPARTMENT:
			return state.filter(department => department.id !== action.payload.id);
		case SET_DEPARTMENTS:
			return action.payload.departments;
		case DELETE_ALL_DEPARTMENTS:
				return [];
		default:
			return state;
	}
};
