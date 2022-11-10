import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import About from '../About/About';
import Agent from '../Agent/Agent';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';

const Home = () => {
	UseTitle('Home || Mediz');
	return (
		<div>
			<Banner></Banner>
			<Services></Services>
			<About></About>
			<Agent></Agent>
		</div>
	);
};

export default Home;
