import React, {useContext, useState} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {FaQuoteRight} from 'react-icons/fa';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';
const Service = () => {
	const {user} = useContext(AuthContext);
	const service = useLoaderData();
	const [login, setLogin] = useState(false);
	const {_id, img, title, price, description} = service;
	const currentDate = new Date();
	const [month, day, year] = [
		currentDate.getMonth(),
		currentDate.getDate(),
		currentDate.getFullYear(),
	];
	const date = `${day}-${month}-${year}`;

	const handleReview = (e) => {
		e.preventDefault();
		const form = e.target;
		const message = form.message.value;
		const name = form.name.value;
		const phone = form.phone.value;
		const review = {
			reviewID: _id,
			service_name: title,
			name: name,
			img: img,
			email: user.email,
			phone: phone,
			message: message,
		};
		fetch('http://localhost:5000/review', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				form.reset();
				// toast.success('Order Successfull');
			});
	};
	return (
		<div>
			{/* //*service details section */}
			<div className="hero h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className=" text-white">
						<h1 className="text-5xl font-bold">{title}</h1>
						<p className="py-6">
							Price:
							<span className="text-5xl font-bold  text-yellow-500">${price}</span>
						</p>
						<p className="pb-6 w-3/4 mx-auto">{description}</p>
						<PhotoProvider>
							<PhotoView src={img}>
								<img className="p-4 rounded-3xl cursor-pointer mx-auto" src={img} alt="Shoes" />
							</PhotoView>
						</PhotoProvider>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			{/* //*testimonial section */}
			<div className="testimonial container mx-auto my-20">
				<div className="testimonial-text text-center">
					<h2 className="text-4xl font-bold text-white">Testimonial</h2>
					<p className="text-6xl mt-5 text-warning font-bold ">
						<FaQuoteRight className="mx-auto" />
					</p>
					<label
						htmlFor="my-modal-6"
						onClick={() => setLogin(!login)}
						className="btn btn-primary mt-7"
					>
						Add Review
					</label>
					{user?.uid ? (
						<>
							{/* Put this part before </body> tag */}
							<input type="checkbox" id="my-modal-6" className="modal-toggle" />
							<div className="modal modal-bottom sm:modal-middle">
								<form onSubmit={handleReview} className="modal-box relative">
									<label
										htmlFor="my-modal-6"
										className="btn btn-sm btn-circle absolute right-2 top-2"
									>
										✕
									</label>
									<textarea
										className="textarea textarea-secondary"
										placeholder="Review Message"
										name="message"
										style={{width: '300px'}}
									></textarea>
									<div className="grid grid-cols-2 gap-5 mt-4 justify-center items-center">
										<input
											type="text"
											placeholder="Name"
											name="name"
											className="input input-bordered input-secondary w-full max-w-xs"
										/>
										<input
											type="text"
											placeholder="Phone"
											name="phone"
											className="input input-bordered input-secondary w-full max-w-xs"
										/>
									</div>
									<button type="submit" className="btn btn-primary mt-7">
										Submit
									</button>
								</form>
							</div>
						</>
					) : (
						<p className={`mt-3 ${login ? 'block' : 'hidden'}`}>
							<span className=" text-white font-bold">Please Sign In to add a review</span>
							<Link to="/signin" className="link ml-2">
								Sign In
							</Link>
						</p>
					)}
				</div>

				<div className="testimonial mt-7">
					<div className="single-testimonial flex border w-3/4 mx-auto justify-center items-center rounded-xl border-warning">
						<div className="text p-10 text-white">
							<p className="w-3/4 font-bold">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo placeat
								iste tempore cum quo eligendi, beatae nostrum dolore nihil?
							</p>
							<h2 className="text-4xl text-warning font-bold">name</h2>
							<h5 className="text-xl text-warning font-bold">date</h5>
						</div>
						<div className="img p-10 ">
							<img className="rounded-full" src="https://placeimg.com/200/200/people" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
