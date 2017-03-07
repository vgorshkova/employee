import * as actions from '../actions/employees.actions';
import * as types from '../constants/ActionTypes'

const employee1 = {
  id: 1,
  firstName: 'Anna',
  lastName: 'Ivanova',
  departmentId: 1
};

const employee2 = {
  id: 2,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  departmentId: 2
};

const employee2Modified = {
  id: 2,
  firstName: 'Ivan',
  lastName: 'Ivanov-Petrov',
  departmentId: 1
};

const employee3 = {
  id: 3,
  firstName: 'John',
  lastName: 'Ivanov',
  departmentId: 1
};


describe('ADD_EMPLOYEE actions', () => {
  it('should add a employee', () => {
    const expectedAction = {
      type: types.ADD_EMPLOYEE,
      payload: {employee: employee1}
    };
    expect(actions.addEmployee(employee1)).toEqual(expectedAction);
  })
});


describe('EDIT_EMPLOYEE actions', () => {
  it('should edit existing employee', () => {
    const expectedAction = {
      type: types.EDIT_EMPLOYEE,
      payload: {employee: employee2Modified}
    };
    expect(actions.editEmployee(employee2Modified)).toEqual(expectedAction);
  })
});


describe('REMOVE_EMPLOYEE actions', () => {
  it('should delete employee', () => {
    const expectedAction = {
      type: types.REMOVE_EMPLOYEE,
      payload: {id: 2}
    };
    expect(actions.removeEmployee(2)).toEqual(expectedAction);
  })
});

describe('SET_EMPLOYEES actions', () => {
  it('should replace all existing employees', () => {
    const expectedAction = {
      type: types.SET_EMPLOYEES,
      payload: {
        employees: [employee1, employee3]
      }
    };
    expect(actions.setEmployees([employee1, employee3])).toEqual(expectedAction);
  })
});

//Async
describe('CREATE_EMPLOYEE actions', () => {
  it('should add a employee', () => {
    const expectedAction = {
      type: types.CREATE_EMPLOYEE,
      payload: {employee: employee1}
    };
    expect(actions.createEmployee(employee1)).toEqual(expectedAction);
  })
});


describe('UPDATE_EMPLOYEE actions', () => {
  it('should edit existing employee', () => {
    const expectedAction = {
      type: types.UPDATE_EMPLOYEE,
      payload: {employee: employee2Modified}
    };
    expect(actions.updateEmployee(employee2Modified)).toEqual(expectedAction);
  })
});


describe('DELETE_EMPLOYEE actions', () => {
  it('should delete employee', () => {
    const expectedAction = {
      type: types.DELETE_EMPLOYEE,
      payload: {id: 2}
    };
    expect(actions.deleteEmployee(employee2)).toEqual(expectedAction);
  })
});

describe('SET_EMPLOYEES actions', () => {
  it('should replace all existing employees', () => {
    const expectedAction = {
      type: types.GET_EMPLOYEES
    };
    expect(actions.getEmployees()).toEqual(expectedAction);
  })
});