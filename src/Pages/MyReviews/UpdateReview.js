import React from 'react';
import toast from 'react-hot-toast';
import {useLoaderData} from 'react-router-dom';

const UpdateReview = () => {
	const review = useLoaderData();
	const {_id, message, name, email} = review;
	const handleUpdate = (e) => {
		e.preventDefault();
		const form = e.target;
		const message = form.message.value;
		const name = form.name.value;
		console.log(message, name);
		const review = {
			name: name,
			message: message,
		};
		fetch(`http://localhost:5000/review/${_id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					toast.success('Upadte SuccessFul');
				}
			});
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
