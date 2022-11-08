import React, {useEffect, useState} from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {
	const [services, setServices] = useState([]);
	const limit = 3;
	useEffect(() => {
		const url = `http://localhost:5000/services?limit=${limit}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
			});
	}, []);
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
				{services.map((service) => (
					<SingleService key={service._id} service={service}></SingleService>
				))}
			</div>
		</div>
	);
};

export default Services;
