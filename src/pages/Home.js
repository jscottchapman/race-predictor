import React from 'react';
import styled from 'styled-components';

const Home = () => {
	return (
		<Header>
			<Title>Race Predictor</Title>
		</Header>
	);
};

const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #fc4c02;
`;

const Title = styled.h1`
	margin: 0;
	font-family: "Courier New", Courier, monospace;
`;

export default Home;
