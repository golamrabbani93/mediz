import React from 'react';

const Review = () => {
	return (
		<div className="single-testimonial flex border w-3/4 mx-auto justify-center items-center rounded-xl border-warning mt-5">
			<div className="text p-10 text-white">
				<p className="w-3/4 font-bold">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo placeat iste
					tempore cum quo eligendi, beatae nostrum dolore nihil?
				</p>
				<h2 className="text-4xl text-warning font-bold">name</h2>
				<h5 className="text-xl text-warning font-bold">date</h5>
			</div>
			<div className="img p-10 ">
				<img className="rounded-full" src="https://placeimg.com/200/200/people" alt="" />
			</div>
		</div>
	);
};

export default Review;
