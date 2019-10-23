import React from 'react';
import styled from 'styled-components';

const Form = () => {
	return (
		<div>
			<FormTitle>Input your weekly mileage and average speed</FormTitle>
			<FormField>
				<input type="number" name="mileage" />
				<Label>miles per week</Label>
			</FormField>
			<hr />
			<FormField>
				<input type="number" name="pace" />
				<Label>average minutes per mile</Label>
			</FormField>
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
