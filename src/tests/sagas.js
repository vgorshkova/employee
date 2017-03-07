import test from 'tape';
import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import {
  fetchDepartments,
  fetchCreateDepartment,
} from '../sagas';
import * as api from '../services/api';

const department1 = {
  id: 1,
  name: 'Department1',
};

const department2 = {
  id: 2,
  name: 'Department2',
};

test('fetchDepartments Saga', (t) => {
  const generator = fetchDepartments();
  const mockDepartments = {response: {data: [department1, department2]}};
  const error = {};

  t.deepEqual(
    generator.next().value,
    put( actions.appActions.sendRequest() ),
    'must dispatch a sendRequest action'
  );
  t.deepEqual(
    generator.next().value,
    call( api.fetchDepartmentsApi ),
    'must call fetchDepartmentsApi'
  );
  t.deepEqual(
    generator.next(mockDepartments).value,
    put( actions.departmentsActions.setDepartments( mockDepartments.response.data )),
    'must dispatch a setDepartments action with departments'
  );
  t.deepEqual(
    generator.next().value,
    put( actions.appActions.receiveRequest() ),
    'must dispatch a receiveRequest action'
  );

  t.ok(generator.next().done, 'must finish');
  t.end();
});


test('fetchCreateDepartment Saga', (t) => {

  const sendDepartment = {payload: {department: department1 }};
  const mockDepartment = {response: {data: department1 }};
  const generator = fetchCreateDepartment(sendDepartment);
  const error = {};

  t.deepEqual(
    generator.next().value,
    put( actions.appActions.sendRequest() ),
    'must dispatch a sendRequest action'
  );
  t.deepEqual(
    generator.next().value,
    call( api.fetchCreateDepartmentApi, sendDepartment.payload.department ),
    'must call fetchDepartmentsApi'
  );
  t.deepEqual(
    generator.next(mockDepartment).value,
    put( actions.departmentsActions.addDepartment( sendDepartment.payload.department )),
    'must dispatch a addDepartment action with department'
  );
  t.deepEqual(
    generator.next().value,
    put( actions.appActions.receiveRequest() ),
    'must dispatch a receiveRequest action'
  );
  /*t.deepEqual(
   generator.throw( error ).value,
   put( console.error( error )),
   'must dispatch a console log with error action'
   );*/
  t.ok(generator.next().done, 'must finish');
  t.end();
});
