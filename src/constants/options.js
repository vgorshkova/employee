//
// 'label' - the label name
// 'canEdit' - prop will be showen on the form/dialog for add/update item
// 'isRequired' - prop needs to be not empty
// 'sortId' - prop determines the fields sequence
// 'fieldType' : select - if field is selected from the list
//
export const departmentOptions = {
  id: {
    label: "id",
    sortId: 5,
    canEdit: false,
  },
  name: {
    label: "Name",
    sortId: 10,
    canEdit: true,
    isRequired: true,
  }
};

export const employeeOptions = {
  id: {
    label: "id",
    sortId: 5,
    canEdit: false,
  },
  departmentId: {
    label: "Department id",
    sortId: 7,
    canEdit: false,
  },
  firstName: {
    label: "First Name",
    sortId: 15,
    canEdit: true,
    isRequired: true,
  },
  lastName: {
    label: "Last Name",
    sortId: 10,
    canEdit: true,
    isRequired: true,
  },
  departmentName: {
    label: "Department Name",
    sortId: 20,
    canEdit: true,
    fieldType: "select",
    propId: 'departmentId'
  },
};
