import React from 'react';
import {Link} from 'react-router-dom';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const SingleService = ({service}) => {
	const {_id, img, title, price, description} = service;
	return (
		<div className="m-4">
			<div className="card card-compact  bg-base-300 shadow-xl">
				<figure>
					<PhotoProvider>
						<PhotoView src={img}>
							<img
								className="p-4 rounded-3xl cursor-pointer"
								src={img}
								alt="Shoes"
								style={{width: '400px', height: '257px'}}
							/>
						</PhotoView>
					</PhotoProvider>
				</figure>
				<div className="card-body text-white">
					<h2 className="card-title font-bold">{title}</h2>
					<p>{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
					<p>
						PRICE: <span className="text-3xl text-bold">${price}</span>
					</p>
					<div className="card-actions my-3">
						<Link to={`/service/${_id}`}>
							<button className="btn btn-primary">See Details</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleService;
