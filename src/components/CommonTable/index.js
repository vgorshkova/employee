import React from 'react';
import { Button, Glyphicon, Table } from 'react-bootstrap';
import { ButtonWithDialog, CommonTableTitle } from '../../components';
import { Link } from 'react-router';
import { mode, tableType } from '../../constants/common';
import s from './styles.less';
import commonS from '../../styles/style.less';

export default function CommonTable({
  title,
  items,
  options,
  fieldsOptions,
  onCreateItem, onDeleteItem, onUpdateItem,
  }) {

  const commonTableTitle =
    <CommonTableTitle
      title={title}
      fieldsOptions={fieldsOptions}
      onCreateItem={onCreateItem}
      options={options}
      mode={mode.create}
    />;

  if (!(items && items.length)) {
    return commonTableTitle;
  }

  const propNames =
    Object.keys(fieldsOptions)
      .filter(__ => ( fieldsOptions[__].canEdit ))
      .sort((a, b) => ( fieldsOptions[a].sortId - fieldsOptions[b].sortId ));

  const tableHead = (
    <tr>
      <th>#</th>
      {
        propNames.map(propname => {
          return (<th key={`th_${propname}`}>{fieldsOptions[propname].label}</th>);
        })
      }
      <th/>
    </tr>
  );

  const editIcon = <Glyphicon glyph="edit"/>;
  const deleteIcon = <Glyphicon glyph="trash"/>;

  const tableBody = items.map((item, idx) => {
    return (
      <tr key={`tableItem_${item.id}`}>
        <td>{idx + 1}</td>
        {
          propNames.map(propname => {
            return (<td key={propname}>{item[propname]}</td>);
          })
        }
        <td key={`ButtonGroup_${item.id}`} className={s.tdButtons}>

          <ButtonWithDialog
            key='ButtonWithDialog_update'
            onAction={onUpdateItem}
            fieldsOptions={fieldsOptions}
            options={options}
            mode={mode.update}
            icon={editIcon}
            item={item}
          />

          <ButtonWithDialog
            key='ButtonWithDialog_delete'
            onAction={onDeleteItem}
            mode={mode.delete}
            icon={deleteIcon}
            item={item}
          />
        </td>
      </tr>
    );
  });

  return (
    <div>
      {commonTableTitle}
      <Table striped condensed hover>
        <thead>
        {tableHead}
        </thead>
        <tbody>
        {tableBody}
        </tbody>
      </Table>
    </div>
  )
}
