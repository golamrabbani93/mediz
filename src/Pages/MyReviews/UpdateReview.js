import React from 'react';
import {useLoaderData} from 'react-router-dom';

const UpdateReview = () => {
	const review = useLoaderData();
	console.log('🚀🚀: UpdateReview -> review', review);
	const {message, name, email} = review;
	const handleUpdate = (e) => {
		e.preventDefault();
		const form = e.target;
		const message = form.message.value;
		const name = form.name.value;
		console.log(message, name);
		// const phone = form.phone.value;
		// const review = {
		// 	reviewID: _id,
		// 	service_name: title,
		// 	name: name,
		// 	serviceImg: img,
		// 	img: user.photoURL,
		// 	email: user.email,
		// 	phone: phone,
		// 	message: message,
		// };
	};
	return (
		<div className="container mx-auto text-white text-center mt-7">
			<h2 className="text-5xl mt-10 mb-8">Update </h2>
			<form onSubmit={handleUpdate}>
				<div className="">
					<textarea
						className="textarea textarea-secondary"
						style={{width: '280px'}}
						defaultValue={message}
						name="message"
					></textarea>
				</div>
				<div className="text-center">
					<input
						type="text"
						defaultValue={name}
						name="name"
						className="mt-5 input input-bordered input-secondary w-full max-w-xs"
					/>
					<br />

					<input
						type="text"
						defaultValue={email}
						readOnly
						className="  mt-5 input input-bordered input-secondary w-full max-w-xs"
					/>
				</div>
				<button className="btn btn-secondary mt-5" type="submit">
					Update
				</button>
			</form>
		</div>
	);
};

export default UpdateReview;
