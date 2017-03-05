import React from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Button } from 'react-bootstrap';
import s from '../../styles/style.less';
import { defaultSelectValue } from '../../constants/common';

export default function SelectGroup({
	id,
	label,
	options,
	...props })
{
	const optionValue = 'id';
	const optionTitle = 'name';

	const optionItems = [
		<option
			key={'SelectGroup_option_default_id'}
			value={defaultSelectValue}
			className={s.selectDefaultOption}
		>
			{props.placeholder}
		</option>
	];

	optionItems.push(options.map( option => {
		return (
			<option
				key={`SelectGroup_option_${option[optionValue]}`}
				value={option[optionValue]}
			>
				{option[optionTitle]}
			</option>
		)
	}));


	return (
			<FormGroup controlId={id}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl componentClass="select" {...props}>
					{optionItems}
				</FormControl>
			</FormGroup>
	);
}
