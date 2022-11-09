import React from 'react';

const Review = ({review}) => {
	console.log('🚀🚀: Review -> review', review);
	const {name, message, email, img} = review;
	return (
		<div className="single-testimonial flex border w-3/4 mx-auto justify-between items-center rounded-xl border-warning mt-5">
			<div className="text p-10 text-white">
				<p className="w-3/4 font-bold">{message}</p>
				<h2 className="text-4xl text-warning font-bold">{name}</h2>
				<h5 className="text-xl text-warning font-bold">{email}</h5>
			</div>
			<div className="img p-10 ">
				<img
					className="rounded-full"
					style={{width: '100px', height: '100px'}}
					src={img}
					alt={name}
				/>
			</div>
		</div>
	);
};

export default Review;
