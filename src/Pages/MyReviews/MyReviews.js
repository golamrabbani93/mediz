import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/AuthProvider/AuthProvider';
import SIngleReview from './SIngleReview';
import {ScaleLoader} from 'react-spinners';
import toast from 'react-hot-toast';
const MyReviews = () => {
	const {user, spinner, setSpinner, userSignOut} = useContext(AuthContext);
	const [MyReviews, SetMyReviews] = useState();
	useEffect(() => {
		fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('Mediz-token')}`,
			},
		})
			.then((res) => {
				if (res.status === 401 || res.status === 401) {
					userSignOut();
				}
				return res.json();
			})
			.then((data) => {
				SetMyReviews(data);
				setSpinner(false);
			});
	}, [setSpinner, userSignOut, user?.email]);
	const handleDelete = (MyReview) => {
		const deleteRivew = window.confirm('Are You Sure To Delete Your Review');
		if (deleteRivew) {
			fetch(`http://localhost:5000/myreviews/${MyReview._id}`, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						const restReviews = MyReviews.filter((rev) => rev._id !== MyReview._id);
						SetMyReviews(restReviews);
						toast.success('Delete Successfull');
					}
				});
		}
	};
	return (
		<>
			{spinner ? (
				<div className="flex justify-center items-center h-96">
					<ScaleLoader color="#F26651"></ScaleLoader>
				</div>
			) : (
				<div>
					{MyReviews?.length > 0 ? (
						<h2 className="text-center my-6 text-3xl font-bold text-white">
							{MyReviews?.length} Reviews Found
						</h2>
					) : (
						<h2 className="text-center my-6 text-3xl font-bold text-white">No Reviews Found</h2>
					)}
					<div className="reviews-container container mx-auto mb-4 md:mb-10">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
							{spinner
								? ''
								: MyReviews?.map((MyReview) => (
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
