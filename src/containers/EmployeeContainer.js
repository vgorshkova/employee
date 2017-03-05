import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { CommonTable, Spinner } from '../components';
import { employeesActions, departmentsActions } from '../actions';
import { employeeOptions } from '../constants/options';
import { findItemById } from '../utils/common';

class EmployeeContainer extends React.Component {
	componentWillMount() {
		this.props.onGetAllEmployees();
		this.props.onGetAllDepartments();
	}

	render() {
		const { employees, departments, onCreate, onDelete,  onUpdate } = this.props;

		const items = employees.map( employee => {
			return {...employee, departmentName: findItemById(departments, employee.departmentId, 'name')}
		});

		return (
			<DocumentTitle title="Employees">
				<CommonTable
					title="Employees list"
					items={items}
					fieldsOptions={employeeOptions}
					options={{departmentName:departments}}
					onCreateItem={onCreate}
					onDeleteItem={onDelete}
					onUpdateItem={onUpdate}
				/>
			</DocumentTitle>
		);
	}
}

function mapStateToProps({ employees, departments }) {
	return {
		employees,
		departments,
	};
}

export default connect(mapStateToProps, {
	onCreate: employeesActions.createEmployee,
	onGetAllEmployees: employeesActions.getEmployees,
	onUpdate: employeesActions.updateEmployee,
	onDelete: employeesActions.deleteEmployee,

	onGetAllDepartments: departmentsActions.getDepartments,
})(EmployeeContainer);
