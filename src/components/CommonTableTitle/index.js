import React from 'react';
import { Link } from 'react-router';
import { Button, PageHeader } from 'react-bootstrap';
import { ButtonWithDialog } from '../../components';
import s from '../../styles/style.less';

export default function CommonTableTitle({ title, fieldsOptions, onCreateItem, mode, options }) {
	return (
		<div>
			<PageHeader>{`${title} `}
				<ButtonWithDialog
					key='ButtonWithDialog_create'
					onAction={onCreateItem}
					fieldsOptions={fieldsOptions}
					mode={mode}
					options={options}
				/>
			</PageHeader>
		</div>
	)
}
