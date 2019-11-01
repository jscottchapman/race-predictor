import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hooks-helper';

const Form = () => {
	const [ { minutes, miles, seconds }, setValue ] = useForm({
		miles: 0,
		minutes: 0,
		seconds: 0
	});

	const kmPerWeek = miles * 1.60934;
	const minutesPerMile = parseInt(minutes) + parseInt(seconds) / 60;
	const KM_TO_MILES = 0.6214;
	const minmi2minkm = () => {
		return minutesPerMile * KM_TO_MILES;
	};
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
				<Label>average minutes per mile for the week</Label>
			</FormField>
			<button>Calculate</button>

			<h4>{kmPerWeek.toFixed(2)}kms per week</h4>
			<h4>{minmi2minkm()}minutes per km</h4>
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
