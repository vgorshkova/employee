import {
  SEND_REQUEST,
  RECEIVE_REQUEST,

  ADD_DEPARTMENT,
  EDIT_DEPARTMENT,
  REMOVE_DEPARTMENT,
  SET_DEPARTMENTS,

  GET_DEPARTMENTS,
  DEPARTMENTS_RECEIVED,
  CREATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  UPDATE_DEPARTMENT,
} from '../constants/ActionTypes';

export function setDepartments(departments) {
  return ({
    type: SET_DEPARTMENTS,
    payload: {
      departments
    }
  });
}

export function addDepartment(department) {
  return ({
    type: ADD_DEPARTMENT,
    payload: {
      department
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

export function createDepartment(department) {
  return ({
    type: CREATE_DEPARTMENT,
    payload: {
      department
    }
  });
}

export function getDepartments() {
  return ({
    type: GET_DEPARTMENTS,
  });
}

export function deleteDepartment(department) {
  return ({
    type: DELETE_DEPARTMENT,
    payload: {
      id: department.id
    }
  });
}

export function updateDepartment(department) {
  return ({
    type: UPDATE_DEPARTMENT,
    payload: {
      department
    }
  });
}

