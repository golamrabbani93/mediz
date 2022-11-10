import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';

const Home = () => {
	UseTitle('Home || Mediz');
	return (
		<div>
			<Banner></Banner>
			<Services></Services>
		</div>
	);
};

export default Home;
