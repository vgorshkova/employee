import * as http from '../services/http-request';

export function fetchDepartmentsApi() {
  return http.get('/departments')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function fetchCreateDepartmentApi(department) {
  return http.post("/departments", department)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function fetchDeleteDepartmentApi(id) {
  return http.del(`/departments/${id}`)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function fetchUpdateDepartmentApi(department) {
  return http.put(`/departments/${department.id}`, department)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function fetchEmployeesApi() {
  return http.get('/employees')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function fetchCreateEmployeeApi( employee ) {
  return http.post("/employees", employee)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function fetchDeleteEmployeeApi(id) {
  return http.del(`/employees/${id}`)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

export function fetchUpdateEmployeeApi( employee ) {
  return http.put(`/employees/${employee.id}`, employee)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}