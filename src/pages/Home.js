import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';

const Home = () => {
	return (
		<React.Fragment>
			<Header>
				<Title>Race Predictor</Title>
			</Header>
			<FormContainer>
				<Form />
			</FormContainer>
		</React.Fragment>
	);
};

const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #fc4c02;
	height: 8em;
`;

const Title = styled.h1`
	margin: 0;
	font-family: "Courier New", Courier, monospace;
`;

const FormContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 3em;
`;

export default Home;
