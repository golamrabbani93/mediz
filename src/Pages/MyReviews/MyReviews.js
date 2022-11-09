import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/AuthProvider/AuthProvider';
import SIngleReview from './SIngleReview';

const MyReviews = () => {
	const {user} = useContext(AuthContext);
	const [MyReviews, SetMyReviews] = useState();
	console.log('🚀🚀: MyReviews -> MyReviews', MyReviews);
	useEffect(() => {
		const url = `http://localhost:5000/myreviews?email=${user?.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				SetMyReviews(data);
			});
	}, [user?.email]);
	return (
		<div>
			<h2>No Reviews Found</h2>
			<div className="reviews-container container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{/* {MyReviews.map((MyReview) => (
						<SIngleReview key={MyReview._id} MyReview={MyReview}></SIngleReview>
					))} */}
				</div>
			</div>
		</div>
	);
};

export default MyReviews;
