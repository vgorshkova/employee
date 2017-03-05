import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { CommonTable, Spinner } from '../components';
import { departmentsActions } from '../actions';
import { departmentOptions } from '../constants/options';

class DepartmentContainer extends React.Component {
	componentWillMount() {
		this.props.onGetAllEmployees();
	}

	render() {
		const { departments, onCreate, onDelete,  onUpdate } = this.props;

		return (
			<DocumentTitle title="Departments">
				<CommonTable
					title="Departments list"
					items={departments}
					fieldsOptions={departmentOptions}
					onCreateItem={onCreate}
					onDeleteItem={onDelete}
					onUpdateItem={onUpdate}
				/>
			</DocumentTitle>
		);
	}
}

function mapStateToProps({departments}) {
	return {
		departments,
	};
}

export default connect(mapStateToProps, {
	onCreate: departmentsActions.createDepartment,
	onGetAllEmployees: departmentsActions.getDepartments,
	onUpdate: departmentsActions.updateDepartment,
	onDelete: departmentsActions.deleteDepartment,
})(DepartmentContainer);