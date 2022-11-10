import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
	const {user, userSignOut} = useContext(AuthContext);
	const navlink = (
		<>
			<li className="mr-2">
				<NavLink to="/" end>
					Home
				</NavLink>
			</li>
			<li className="mr-2">
				<NavLink to="/services">Services</NavLink>
			</li>
			<li className="mr-2">
				<NavLink to="/myreviews">My Reviews</NavLink>
			</li>
			{user?.uid ? (
				<li className="mr-2">
					<NavLink to="/addservice">Add Service</NavLink>
				</li>
			) : (
				''
			)}
			<li className="mr-2">
				<NavLink to="/blog">Blog</NavLink>
			</li>
		</>
	);
	const handleSignOut = () => {
		userSignOut()
			.then((result) => {})
			.catch((err) => {});
	};
	return (
		<header>
			<div className="bg-primary navgation">
				<div className="navbar container mx-auto">
					<div className="navbar-start w-0 lg:w-1/2 mr-auto">
						<div className="flex justify-between ">
							<div className="dropdown">
								<label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h8m-8 6h16"
										/>
									</svg>
								</label>
								<ul
									tabIndex={0}
									className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 "
								>
									{navlink}
									{user?.uid ? (
										''
									) : (
										<div className="navbar-end lg:hidden w-full">
											<Link to="/login" className="btn">
												Login
											</Link>
										</div>
									)}
								</ul>
							</div>
						</div>
						<div className="mr-auto">
							<Link
								to="/"
								className="font-bold text-4xl btn btn-ghost hidden lg:flex normal-case  text-white bg-transparent text-right mx-auto "
							>
								MeDiz
							</Link>
						</div>
					</div>
					<div className="mr-auto">
						<Link
							to="/"
							className=" btn btn-ghost flex lg:hidden normal-case text-xl text-white bg-primary text-right mx-auto"
						>
							MeDiz
						</Link>
					</div>

					<div className="navbar-center hidden lg:flex text-white">
						<ul className="menu menu-horizontal p-0">{navlink}</ul>
					</div>

					{user?.uid ? (
						<div className="dropdown dropdown-end ">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="avatar online">
									<div className="w-10 rounded-full">
										<img src={user?.photoURL} alt="" />
									</div>
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
							>
								<li className="font-bold text-center">{user?.displayName}</li>
								<li>
									<Link className="justify-between">Edit Profile</Link>
								</li>

								<li>
									<button onClick={handleSignOut}>Logout</button>
								</li>
							</ul>
						</div>
					) : (
						<Link to="/signin" className="btn hidden lg:flex">
							Sign In
						</Link>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
