import React from 'react';

const SIngleReview = ({MyReview}) => {
	console.log('🚀🚀: SIngleReview -> MyReview', MyReview);
	const {date, serviceImg, service_name, message} = MyReview;
	return (
		<div className="card w-72 mx-auto md:w-96 bg-base-100 shadow-xl image-full">
			<figure>
				<img src={serviceImg} alt="Shoes" />
			</figure>
			<div className="card-body ">
				<h2 className="card-title text-white">{service_name}</h2>
				<p className="text-white">{message}</p>
				<p className="text-white">{date}</p>
				<div className="card-actions mt-5 grid grid-cols-2 ">
					<button className="btn btn-circle btn-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<button className="btn btn-secondary">Edit</button>
				</div>
			</div>
		</div>
	);
};

export default SIngleReview;
