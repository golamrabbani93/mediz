import React from 'react';
import {Link} from 'react-router-dom';

const SingleService = ({service}) => {
	const {_id, img, title, price, description} = service;
	console.log('🚀🚀: SingleService -> service', service);
	return (
		<div>
			<div className="card card-compact  bg-base-300 shadow-xl">
				<figure>
					<img className="p-4 rounded-3xl" src={img} alt="Shoes" />
				</figure>
				<div className="card-body text-white">
					<h2 className="card-title font-bold">{title}</h2>
					<p>{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
					<p>
						PRICE: <span className="text-3xl">${price}</span>
					</p>
					<div className="card-actions my-3">
						<Link to={`service/${_id}`}>
							<button className="btn btn-primary">Buy Now</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleService;
