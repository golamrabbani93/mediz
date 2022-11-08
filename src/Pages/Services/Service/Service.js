import React, {useContext} from 'react';
import {useLoaderData} from 'react-router-dom';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {FaQuoteRight} from 'react-icons/fa';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';
const Service = () => {
	const {user} = useContext(AuthContext);
	const service = useLoaderData();
	console.log('🚀🚀: Service -> service', service);
	const {_id, img, title, price, description} = service;
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

			{/* //*testimonial section */}
			<div className="testimonial container mx-auto my-20">
				<div className="testimonial-text text-center">
					<h2 className="text-4xl font-bold text-white">Testimonial</h2>
					<p className="text-6xl mt-5 text-warning font-bold ">
						<FaQuoteRight className="mx-auto" />
					</p>
					<button className="btn btn-primary mt-7">Add Review</button>
					{user?.uid ? '' : <p className="text-red-700 font-bold">Please login to add a review</p>}
				</div>

				<div className="testimonial mt-7">
					<div className="single-testimonial flex border w-3/4 mx-auto justify-center items-center rounded-xl border-warning">
						<div className="text p-10 text-white">
							<p className="w-3/4 font-bold">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo placeat
								iste tempore cum quo eligendi, beatae nostrum dolore nihil?
							</p>
							<h2 className="text-4xl text-warning font-bold">name</h2>
							<h5 className="text-xl text-warning font-bold">date</h5>
						</div>
						<div className="img p-10 ">
							<img className="rounded-full" src="https://placeimg.com/200/200/people" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
