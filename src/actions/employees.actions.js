import {
  SEND_REQUEST,
  RECEIVE_REQUEST,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  SET_EMPLOYEES,
  REMOVE_EMPLOYEE,

  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_EMPLOYEES,
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

export function createEmployee(employee) {
  return ({
    type: CREATE_EMPLOYEE,
    payload: {
      employee
    }
  });
}

export function getEmployees() {
  return ({
    type: GET_EMPLOYEES,
  });
}

export function deleteEmployee(employee) {
  return ({
    type: DELETE_EMPLOYEE,
    payload: {
      id: employee.id
    }
  });
}

export function updateEmployee(employee) {
  return ({
    type: UPDATE_EMPLOYEE,
    payload: {
      employee
    }
  });
}

