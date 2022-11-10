import React from 'react';
import {Link} from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFoundPage = () => {
	UseTitle('404 || Mediz');
	return (
		<div>
			<Header></Header>
			<div className="h-screen flex justify-center items-center flex-col">
				<h2 className="text-8xl text-white font-bold">404</h2>
				<h2 className="mt-4 text-3xl mb-5">Page Not Found</h2>
				<Link to="/">
					<button className="btn btn-primary">Go Back</button>
				</Link>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default NotFoundPage;
