import React, {useEffect, useState} from 'react';

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
		</div>
	);
};

export default Services;
