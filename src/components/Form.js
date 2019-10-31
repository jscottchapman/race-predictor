import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hooks-helper';

const Form = () => {
	const [ { minutes, miles, seconds }, setValue ] = useForm({
		miles: 0,
		minutes: 0,
		seconds: 0
	});
	console.log({ minutes, miles, seconds });
	return (
		<div>
			<FormTitle>Input your weekly mileage and average speed</FormTitle>
			<FormField>
				<input type="number" name="miles" onChange={setValue} />
				<Label>miles per week</Label>
			</FormField>
			<hr onChange={setValue} />
			<FormField>
				<input type="number" name="minutes" min="1" max="60" onChange={setValue} />minutes
				<input type="number" name="seconds" min="0" max="60" onChange={setValue} />seconds
				<Label>average pace for the week</Label>
			</FormField>
			<button>Calculate</button>
		</div>
	);
};

const FormTitle = styled.h3`
	font-family: "Courier New", Courier, monospace;
	font-size: 16pt;
`;

const FormField = styled.div`
	display: flex;
	flex-direction: row;
`;

const Label = styled.h4`
	margin-left: 1em;
	font-family: "Courier New", Courier, monospace;
`;

export default Form;
