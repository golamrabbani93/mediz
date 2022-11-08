import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Service = () => {
	const service = useLoaderData();
	console.log('🚀🚀: Service -> service', service);
	return (
		<div>
			<h2>this is services detail page</h2>
		</div>
	);
};

export default Service;
