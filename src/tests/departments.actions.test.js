import * as actions from '../actions/departments.actions';
import * as types from '../constants/ActionTypes'

const department1 = {
  id: 1,
  name: 'Department1',
};

const department2 = {
  id: 2,
  name: 'Department2',
};

const department2Modified = {
  id: 2,
  name: 'Department2 modified',
};

const department3 = {
  id: 3,
  name: 'Department3',
};


describe('ADD_DEPARTMENT actions', () => {
  it('should add a department', () => {
    const expectedAction = {
      type: types.ADD_DEPARTMENT,
      payload: {department: department1}
    };
    expect(actions.addDepartment(department1)).toEqual(expectedAction);
  })
});


describe('EDIT_DEPARTMENT actions', () => {
  it('should edit existing department', () => {
    const expectedAction = {
      type: types.EDIT_DEPARTMENT,
      payload: {department: department2Modified}
    };
    expect(actions.editDepartment(department2Modified)).toEqual(expectedAction);
  })
});


describe('REMOVE_DEPARTMENT actions', () => {
  it('should delete department', () => {
    const expectedAction = {
      type: types.REMOVE_DEPARTMENT,
      payload: {id: 2}
    };
    expect(actions.removeDepartment(2)).toEqual(expectedAction);
  })
});

describe('SET_DEPARTMENTS actions', () => {
  it('should replace all existing departments', () => {
    const expectedAction = {
      type: types.SET_DEPARTMENTS,
      payload: {
        departments: [department1, department3]
      }
    };
    expect(actions.setDepartments([department1, department3])).toEqual(expectedAction);
  })
});

//Async
describe('CREATE_DEPARTMENT actions', () => {
  it('should add a department', () => {
    const expectedAction = {
      type: types.CREATE_DEPARTMENT,
      payload: {department: department1}
    };
    expect(actions.createDepartment(department1)).toEqual(expectedAction);
  })
});


describe('UPDATE_DEPARTMENT actions', () => {
  it('should edit existing department', () => {
    const expectedAction = {
      type: types.UPDATE_DEPARTMENT,
      payload: {department: department2Modified}
    };
    expect(actions.updateDepartment(department2Modified)).toEqual(expectedAction);
  })
});


describe('DELETE_DEPARTMENT actions', () => {
  it('should delete department', () => {
    const expectedAction = {
      type: types.DELETE_DEPARTMENT,
      payload: {id: 2}
    };
    expect(actions.deleteDepartment(department2)).toEqual(expectedAction);
  })
});

describe('SET_DEPARTMENTS actions', () => {
  it('should replace all existing departments', () => {
    const expectedAction = {
      type: types.GET_DEPARTMENTS
    };
    expect(actions.getDepartments()).toEqual(expectedAction);
  })
});