import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Service = () => {
	const service = useLoaderData();
	console.log('🚀🚀: Service -> service', service);
	const {id, img, title, price, description} = service;
	return (
		<div>
			{/* //*service details section */}
			<div className="hero h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className=" text-white">
						<h1 className="text-5xl font-bold">{title}</h1>
						<p className="py-6">
							Price:
							<span className="text-5xl font-bold  text-yellow-500">${price}</span>
						</p>
						<p className="pb-6 w-3/4 mx-auto">{description}</p>
						<PhotoProvider>
							<PhotoView src={img}>
								<img className="p-4 rounded-3xl cursor-pointer mx-auto" src={img} alt="Shoes" />
							</PhotoView>
						</PhotoProvider>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
