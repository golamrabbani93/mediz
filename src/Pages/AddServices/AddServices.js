import React from 'react';
import toast from 'react-hot-toast';
import UseTitle from '../../hooks/UseTitle';

const AddServices = () => {
	UseTitle('Add Service || Mediz');
	const addServices = (e) => {
		e.preventDefault();
		const form = e.target;
		const description = form.description.value;
		const title = form.title.value;
		const price = form.price.value;
		const photo = form.photo.value;
		console.log(description, title, price, photo);
		const service = {
			title: title,
			img: photo,
			price: price,
			description: description,
		};
		fetch(`http://localhost:5000/services/`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(service),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success('Add Service Successful');
					form.reset();
				}
			});
	};
	return (
		<div className="container mx-auto text-white text-center my-7">
			<h2 className="text-5xl mt-10 mb-8">Add Service </h2>
			<form onSubmit={addServices}>
				<div className="">
					<textarea
						className="textarea textarea-secondary"
						style={{width: '280px'}}
						placeholder="Description"
						name="description"
					></textarea>
				</div>
				<div className="text-center m-4 md:m-0">
					<input
						type="text"
						placeholder="Title"
						name="title"
						className="mt-5 input input-bordered input-secondary w-full max-w-xs"
					/>
					<br />

					<input
						type="text"
						placeholder="Photo URL"
						name="photo"
						className="  mt-5 input input-bordered input-secondary w-full max-w-xs"
					/>
					<input
						type="text"
						placeholder="Price"
						name="price"
						className="md:ml-5  mt-5 input input-bordered input-secondary w-full max-w-xs"
					/>
				</div>
				<button className="btn btn-secondary mt-5" type="submit">
					Add Service
				</button>
			</form>
		</div>
	);
};

export default AddServices;
