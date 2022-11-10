import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import UseTitle from '../../../../hooks/UseTitle';
const SignUp = () => {
	const {userCreateWithEmail, userProfileUpdate} = useContext(AuthContext);
	const navigate = useNavigate();
	UseTitle('SignUp');
	const handleSignUp = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;

		userCreateWithEmail(email, password)
			.then((result) => {
				// const user = result.user;
				form.reset();
				handleUpdate(name, photo);
				toast.success('Sign UP Successfull');
				navigate('/signin');
			})
			.catch((err) => {
				console.error(err);
				toast.error(`Sign Up UnSuccessfull ${err.message}`);
			});
	};

	const handleUpdate = (name, photo) => {
		const profile = {
			displayName: name,
			photoURL: photo,
		};
		userProfileUpdate(profile)
			.then((result) => {
				// const user = result.user;
			})
			.catch((err) => {
				console.error(err);
			});
	};
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content ">
					<div className="card flex-shrink-0 w-96  shadow-2xl bg-base-100 text-white">
						<h1 className="text-5xl font-bold my-4 text-center">Sign Up!</h1>
						<form onSubmit={handleSignUp} className="card-body ">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Full Name</span>
								</label>
								<input
									type="text"
									placeholder="Full Name"
									name="name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input
									type="text"
									placeholder="Photo URL"
									name="photo"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="Email"
									name="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="Password"
									name="password"
									className="input input-bordered"
								/>
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
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
