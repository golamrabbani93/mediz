import React from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content ">
					<div className="card flex-shrink-0 w-96  shadow-2xl bg-base-100 text-white">
						<h1 className="text-5xl font-bold my-4 text-center">Sign Up!</h1>
						<div className="card-body ">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input type="text" placeholder="Full Name" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input type="text" placeholder="Photo URL" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" placeholder="Email" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" placeholder="Password" className="input input-bordered" />
								<label className="label">
									<Link href="#" className="label-text-alt link link-hover">
										Forgot password?
									</Link>
									<span className="label-text-alt ">
										Al-Ready An Acoount
										<Link to="/signin" className=" link link-hover ml-1">
											Sign In
										</Link>
									</span>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
