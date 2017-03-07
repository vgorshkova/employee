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
import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from '../services/api';
import * as actions from '../actions';

export function* fetchDepartments() {
  yield put(actions.appActions.sendRequest());
  try {
    const { response } = yield call(api.fetchDepartmentsApi);
    yield put(actions.departmentsActions.setDepartments(response.data));
  }
  catch (error) {
    yield put(console.error(error));
  }
  yield put(actions.appActions.receiveRequest());
}

export function* fetchCreateDepartment(action) {
  yield put(actions.appActions.sendRequest());
  const { response } = yield call(api.fetchCreateDepartmentApi, action.payload.department);
  try {
    yield put(actions.departmentsActions.addDepartment(response.data));
  }
  catch (error) {
    yield put(console.error(error));
  }
  yield put(actions.appActions.receiveRequest());
}

export function* fetchDeleteDepartment(action) {
  yield put(actions.appActions.sendRequest());
  const { response, error } = yield call(api.fetchDeleteDepartmentApi, action.payload.id);
  if (response)
    yield put(actions.departmentsActions.removeDepartment(action.payload.id));
  else
    yield put(console.error(error));
  yield put(actions.appActions.receiveRequest());
}

export function* fetchUpdateDepartment(action) {
  yield put(actions.appActions.sendRequest());
  const { response, error } = yield call(api.fetchUpdateDepartmentApi, action.payload.department);
  if (response)
    yield put(actions.departmentsActions.editDepartment(action.payload.department));
  else
    yield put(console.error(error));
  yield put(actions.appActions.receiveRequest());
}

// Employee
export function* fetchEmployees() {
  yield put(actions.appActions.sendRequest());
  const { response, error } = yield call(api.fetchEmployeesApi);
  if (response)
    yield put(actions.employeesActions.setEmployees(response.data));
  else
    yield put(console.error(error));
  yield put(actions.appActions.receiveRequest());
}

export function* fetchCreateEmployee(action) {
  yield put(actions.appActions.sendRequest());
  const { response, error } = yield call(api.fetchCreateEmployeeApi, action.payload.employee);
  if (response)
    yield put(actions.employeesActions.addEmployee(response.data));
  else
    yield put(console.error(error));
  yield put(actions.appActions.receiveRequest());
}

export function* fetchDeleteEmployee(action) {
  yield put(actions.appActions.sendRequest());
  const { response, error } = yield call(api.fetchDeleteEmployeeApi, action.payload.id);
  if (response)
    yield put(actions.employeesActions.removeEmployee(action.payload.id));
  else
    yield put(console.error(error));
  yield put(actions.appActions.receiveRequest());
}

export function* fetchUpdateEmployee(action) {
  yield put(actions.appActions.sendRequest());
  const { response, error } = yield call(api.fetchUpdateEmployeeApi, action.payload.employee);
  if (response)
    yield put(actions.employeesActions.editEmployee(action.payload.employee));
  else
    yield put(console.error(error));
  yield put(actions.appActions.receiveRequest());
}

export default function* rootSaga() {
  yield  takeEvery(GET_DEPARTMENTS, fetchDepartments);
  yield  takeEvery(CREATE_DEPARTMENT, fetchCreateDepartment);
  yield  takeEvery(DELETE_DEPARTMENT, fetchDeleteDepartment);
  yield  takeEvery(UPDATE_DEPARTMENT, fetchUpdateDepartment);

  yield  takeEvery(GET_EMPLOYEES, fetchEmployees);
  yield  takeEvery(CREATE_EMPLOYEE, fetchCreateEmployee);
  yield  takeEvery(DELETE_EMPLOYEE, fetchDeleteEmployee);
  yield  takeEvery(UPDATE_EMPLOYEE, fetchUpdateEmployee);
}