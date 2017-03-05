import * as http from '../services/http-request';

import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
	ADD_EMPLOYEE,
	EDIT_EMPLOYEE,
	SET_EMPLOYEES,
	REMOVE_EMPLOYEE,
	DELETE_ALL_EMPLOYEES
} from '../constants/ActionTypes';

export function addEmployee(employee) {
	return ({
		type: ADD_EMPLOYEE,
		payload: {
			employee
		}
	});
}

export function setEmployees(employees) {
	return ({
		type: SET_EMPLOYEES,
		payload: {
			employees
		}
	});
}

export function editEmployee(employee) {
	return ({
		type: EDIT_EMPLOYEE,
		payload: {
			employee
		}
	});
}

export function removeEmployee(id) {
	return ({
		type: REMOVE_EMPLOYEE,
		payload: {
			id
		}
	});
}

export function deleteAllEmployees () {
	return ({type: DELETE_ALL_EMPLOYEES});
}

export function sendRequest() {
	return ({
		type: SEND_REQUEST,
	});
}

export function receiveRequest() {
	return ({
		type: RECEIVE_REQUEST,
	});
}

export function createEmployee( employee ) {
	return dispatch => {
		dispatch(sendRequest());
		http.post("/employees", employee)
			.then(response => {
				debugger;
					dispatch(addEmployee(response.data));
					dispatch(receiveRequest());
				}
			)
	}
}

export function getEmployees() {
	return dispatch => {
		dispatch(sendRequest());
		http.get("/employees")
			.then(response => {
					dispatch(setEmployees(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function deleteEmployee(employee) {
	return dispatch => {
		dispatch(sendRequest());
		http.del(`/employees/${employee.id}`)
			.then(response => {
					dispatch(removeEmployee(employee.id));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function updateEmployee(employee) {
	return dispatch => {
		dispatch(sendRequest());
		http.put(`/employees/${employee.id}`, employee)
			.then(response => {
				debugger;
					dispatch(editEmployee(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

