import * as http from '../services/http-request';

import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
	ADD_DEPARTMENT,
	EDIT_DEPARTMENT,
	SET_DEPARTMENTS,
	REMOVE_DEPARTMENT,
	DELETE_ALL_DEPARTMENTS
} from '../constants/ActionTypes';

export function addDepartment(department) {
	return ({
		type: ADD_DEPARTMENT,
		payload: {
			department
		}
	});
}

export function setDepartments(departments) {
	return ({
		type: SET_DEPARTMENTS,
		payload: {
			departments
		}
	});
}

export function editDepartment(department) {
	return ({
		type: EDIT_DEPARTMENT,
		payload: {
			department
		}
	});
}

export function removeDepartment(id) {
	return ({
		type: REMOVE_DEPARTMENT,
		payload: {
			id
		}
	});
}

export function deleteAllDepartments () {
	return ({type: DELETE_ALL_DEPARTMENTS});
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

export function createDepartment( department ) {
	return dispatch => {
		dispatch(sendRequest());
		http.post("/departments", department)
			.then(response => {
					dispatch(addDepartment(response.data));
					dispatch(receiveRequest());
				}
			)
	}
}

export function getDepartments() {
	return dispatch => {
		dispatch(sendRequest());
		http.get("/departments")
			.then(response => {
					dispatch(setDepartments(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function deleteDepartment(department) {
	return dispatch => {
		dispatch(sendRequest());
		http.del(`/departments/${department.id}`)
			.then(response => {
					dispatch(removeDepartment(department.id));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

export function updateDepartment(department) {
	return dispatch => {
		dispatch(sendRequest());
		http.put(`/departments/${department.id}`, department)
			.then(response => {
					dispatch(editDepartment(response.data));
					dispatch(receiveRequest());
				}
			)
			.catch( error => (console.log(error)))
	}
}

