import reducer from '../../src/reducers/employees.reducer';
import * as types from '../../src/constants/ActionTypes';


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


describe('employee reducer', () => {

  it('should return the initial empty state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  });

  it('should handle ADD_EMPLOYEE', () => {
    expect(
      reducer([], {
        type: types.ADD_EMPLOYEE,
        payload: {
          employee: employee1
        }
      })
    ).toEqual([employee1]);

    expect(
      reducer(
        [employee1], {
          type: types.ADD_EMPLOYEE,
          payload: {
            employee: employee2
          }
        }
      )
    ).toEqual([employee1, employee2])
  });

  it('should handle EDIT_EMPLOYEE', () => {
    expect(
      reducer([employee2], {
        type: types.EDIT_EMPLOYEE,
        payload: {
          employee: employee2Modified
        }
      })
    ).toEqual([employee2Modified]);
  });

  it('should remove employee with id=1', () => {
    expect(
      reducer(
        [employee1, employee2],
        {
          type: types.REMOVE_EMPLOYEE,
          payload: {id: 1}
        }
      )
    ).toEqual([employee2])
  });

  it('should set new employees', () => {
    expect(
      reducer(
        [employee2],
        {
          type: types.SET_EMPLOYEES,
          payload: {
            employees: [employee1, employee2, employee3]
          }
        }
      )
    ).toEqual([employee1, employee2, employee3])
  });
});


