import reducer from '../../src/reducers/departments.reducer';
import * as types from '../../src/constants/ActionTypes';


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


describe('department reducer', () => {

  it('should return the initial empty state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  });

  it('should handle ADD_DEPARTMENT', () => {
    expect(
      reducer([], {
        type: types.ADD_DEPARTMENT,
        payload: {
          department: department1
        }
      })
    ).toEqual([department1]);

    expect(
      reducer(
        [department1], {
          type: types.ADD_DEPARTMENT,
          payload: {
            department: department2
          }
        }
      )
    ).toEqual([department1, department2])
  });

  it('should handle EDIT_DEPARTMENT', () => {
    expect(
      reducer([department2], {
        type: types.EDIT_DEPARTMENT,
        payload: {
          department: department2Modified
        }
      })
    ).toEqual([department2Modified]);
  });

  it('should remove department with id=1', () => {
    expect(
      reducer(
        [department1, department2],
        {
          type: types.REMOVE_DEPARTMENT,
          payload: {id: 1}
        }
      )
    ).toEqual([department2])
  });

  it('should set new departments', () => {
    expect(
      reducer(
        [department2],
        {
          type: types.SET_DEPARTMENTS,
          payload: {
            departments: [department1, department2, department3]
          }
        }
      )
    ).toEqual([department1, department2, department3])
  });
});


