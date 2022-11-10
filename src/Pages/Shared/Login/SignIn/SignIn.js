import React, {useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import UseTitle from '../../../../hooks/UseTitle';
const SignIn = () => {
	const {userSignInWithEmail, googleSignIn} = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	UseTitle('Sign In');
	const handleSignIn = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		userSignInWithEmail(email, password)
			.then((result) => {
				const user = result.user;
				form.reset();
				toast.success('Sign In Successfull');
				// *jwt token
				const currentUser = {
					email: user.email,
				};
				fetch('https://mediz-server.vercel.app/jwt', {
					method: 'POST',
					headers: {
						'content-Type': 'application/json',
					},
					body: JSON.stringify(currentUser),
				})
					.then((res) => res.json())
					.then((data) => {
						localStorage.setItem('Mediz-token', data.token);
						navigate(from, {replace: true});
					});
			})
			.catch((err) => {
				console.error(err.message);
				toast.error(`Sign In UnSuccessfull ${err.message}`);
			});
	};
	const handlegoogle = () => {
		googleSignIn()
			.then((result) => {
				navigate(from, {replace: true});
				toast.success('Google Sign In Successfull');
			})
			.catch((err) => {
				console.error(err.message);
				toast.error(`Sign In UnSuccessfull ${err.message}`);
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
						<div className="social mx-auto pb-6">
							<p className="text-center">Or sign In With</p>
							<button
								onClick={handlegoogle}
								className=" mt-4  border border-warning px-2 py-1 rounded-xl"
							>
								Google
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
