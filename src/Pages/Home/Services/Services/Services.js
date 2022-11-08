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
	return <div></div>;
};

export default Services;
