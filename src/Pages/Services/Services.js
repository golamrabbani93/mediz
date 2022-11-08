import React, {useEffect, useState} from 'react';
import SingleService from '../Home/Services/SingleService/SingleService';

const Services = () => {
	const [services, setServices] = useState([]);
	console.log('🚀🚀: Services -> services', services);
	useEffect(() => {
		const url = `http://localhost:5000/services`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
			});
	}, []);
	return (
		<div>
			<div className="breadcum bg-base-300 h-80 w-full flex justify-center items-center">
				<h2 className="text-8xl font-bold text-white">Services</h2>
			</div>
			<div className="container mx-auto my-20 ">
				<h5 className="text-4xl font-bold text-white text-center">
					Total Services {services.length}
				</h5>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
					{services.map((service) => (
						<SingleService key={service._id} service={service}></SingleService>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
