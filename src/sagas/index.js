import {
	SEND_REQUEST,
	RECEIVE_REQUEST,
  ADD_DEPARTMENT,
	EDIT_DEPARTMENT,
	SET_DEPARTMENTS,
	GET_DEPARTMENTS,
	DEPARTMENTS_RECEIVED,
	CREATE_DEPARTMENT,
	DELETE_DEPARTMENT,
	UPDATE_DEPARTMENT,
	REMOVE_DEPARTMENT,
  SET_EMPLOYEES,
  ADD_EMPLOYEE,
  REMOVE_EMPLOYEE,
  EDIT_EMPLOYEE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from '../constants/ActionTypes';
import { put, call, takeEvery } from 'redux-saga/effects'
import * as api from '../services/api';

function* fetchDepartments(action) {
	yield put({ type: SEND_REQUEST });
	const { response, error } = yield call( api.fetchDepartmentsApi );
	if (response)
		yield put({ type: SET_DEPARTMENTS, payload: { departments: response.data }});
	else
		yield put(console.error(error));
	yield put({ type: RECEIVE_REQUEST });
}

function* fetchCreateDepartment(action) {
	yield put({ type: SEND_REQUEST });
	const { response, error } = yield call( api.fetchCreateDepartmentApi, action.payload.department );
	if (response)
		yield put({ type: ADD_DEPARTMENT, payload: { department: response.data }});
	else
		yield put(console.error(error));
	yield put({ type: RECEIVE_REQUEST });
}

function* fetchDeleteDepartment(action) {
	yield put({ type: SEND_REQUEST });
	const { response, error } = yield call( api.fetchDeleteDepartmentApi, action.payload.id );
	if (response)
		yield put({ type: REMOVE_DEPARTMENT, payload: { id: action.payload.id }});
	else
		yield put(console.error(error));
	yield put({ type: RECEIVE_REQUEST });
}

function* fetchUpdateDepartment(action) {
	yield put({ type: SEND_REQUEST });
	const { response, error } = yield call( api.fetchUpdateDepartmentApi, action.payload.department );
	if (response)
		yield put({ type: EDIT_DEPARTMENT, payload: { department: action.payload.department }});
	else
		yield put(console.error(error));
	yield put({ type: RECEIVE_REQUEST });
}

// Employee
function* fetchEmployees(action) {
  yield put({ type: SEND_REQUEST });
  const { response, error } = yield call( api.fetchEmployeesApi );
  if (response)
    yield put({ type: SET_EMPLOYEES, payload: { employees: response.data }});
  else
    yield put(console.error(error));
  yield put({ type: RECEIVE_REQUEST });
}

function* fetchCreateEmployee(action) {
  yield put({ type: SEND_REQUEST });
  const { response, error } = yield call( api.fetchCreateEmployeeApi, action.payload.employee );
  if (response)
    yield put({ type: ADD_EMPLOYEE, payload: { employee: response.data }});
  else
    yield put(console.error(error));
  yield put({ type: RECEIVE_REQUEST });
}

function* fetchDeleteEmployee(action) {
  yield put({ type: SEND_REQUEST });
  const { response, error } = yield call( api.fetchDeleteEmployeeApi, action.payload.id );
  if (response)
    yield put({ type: REMOVE_EMPLOYEE, payload: { id: action.payload.id }});
  else
    yield put(console.error(error));
  yield put({ type: RECEIVE_REQUEST });
}

function* fetchUpdateEmployee(action) {
  yield put({ type: SEND_REQUEST });
  const { response, error } = yield call( api.fetchUpdateEmployeeApi, action.payload.employee );
  if (response)
    yield put({ type: EDIT_EMPLOYEE, payload: { employee: action.payload.employee }});
  else
    yield put(console.error(error));
  yield put({ type: RECEIVE_REQUEST });
}

export default function* rootSaga() {
	yield	takeEvery(GET_DEPARTMENTS, fetchDepartments);
	yield	takeEvery(CREATE_DEPARTMENT, fetchCreateDepartment);
	yield	takeEvery(DELETE_DEPARTMENT, fetchDeleteDepartment);
	yield	takeEvery(UPDATE_DEPARTMENT, fetchUpdateDepartment);

  yield	takeEvery(GET_EMPLOYEES, fetchEmployees);
  yield	takeEvery(CREATE_EMPLOYEE, fetchCreateEmployee);
  yield	takeEvery(DELETE_EMPLOYEE, fetchDeleteEmployee);
  yield	takeEvery(UPDATE_EMPLOYEE, fetchUpdateEmployee);
}