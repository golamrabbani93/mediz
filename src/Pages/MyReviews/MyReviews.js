import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/AuthProvider/AuthProvider';

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
			<h2>My reviews</h2>
		</div>
	);
};

export default MyReviews;
