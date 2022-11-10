import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';

const Home = () => {
	UseTitle('Home || Mediz');
	return (
		<div>
			<Banner></Banner>
			<Services></Services>
			<About></About>
		</div>
	);
};

export default Home;
