import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/AuthProvider/AuthProvider';
import SIngleReview from './SIngleReview';
import {ScaleLoader} from 'react-spinners';
const MyReviews = () => {
	const {user, spinner, setSpinner} = useContext(AuthContext);
	const [MyReviews, SetMyReviews] = useState();
	useEffect(() => {
		const url = `http://localhost:5000/myreviews?email=${user?.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				SetMyReviews(data);
				setSpinner(false);
			});
	}, [setSpinner, user?.email]);
	const handleDelete = (MyReview) => {
		console.log(MyReview);
	};
	return (
		<>
			{spinner ? (
				<div className="flex justify-center items-center h-96">
					<ScaleLoader color="#F26651"></ScaleLoader>
				</div>
			) : (
				<div>
					{MyReviews.length > 0 ? (
						<h2 className="text-center my-6 text-3xl font-bold text-white">
							{MyReviews.length} Reviews Found
						</h2>
					) : (
						<h2 className="text-center my-6 text-3xl font-bold text-white">No Reviews Found</h2>
					)}
					<div className="reviews-container container mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
							{spinner
								? ''
								: MyReviews.map((MyReview) => (
										<SIngleReview
											key={MyReview._id}
											MyReview={MyReview}
											handleDelete={handleDelete}
										></SIngleReview>
								  ))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MyReviews;
