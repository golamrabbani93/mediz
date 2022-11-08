import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../../contexts/AuthProvider/AuthProvider';

const SignIn = () => {
	const {userSignInWithEmail} = useContext(AuthContext);
	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		userSignInWithEmail(email, password)
			.then((result) => {
				const user = result.user;
				form.reset();
				console.log('🚀🚀: handleSignIn -> user', user);
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
						<h1 className="text-5xl font-bold my-4 text-center">Sign In!</h1>
						<form onSubmit={handleSignIn} className="card-body ">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									name="password"
									placeholder="password"
									className="input input-bordered"
								/>
								<label className="label">
									<Link href="#" className="label-text-alt link link-hover">
										Forgot password?
									</Link>
									<span className="label-text-alt ">
										New to Mediz
										<Link to="/signup" className=" link link-hover ml-1">
											Sign up
										</Link>
									</span>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Sign In</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
