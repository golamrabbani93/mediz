import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
	const [user, setUser] = useState();
	const [loader, setLoader] = useState(true);
	const auth = getAuth(app);

	//*create user with email and password
	const userCreateWithEmail = (email, password) => {
		setLoader(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//*Sign in user with email and password
	const userSignInWithEmail = (email, password) => {
		setLoader(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	//*check User
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (curentUser) => {
			setUser(curentUser);
			setLoader(false);
		});
		return () => {
			unSubscribed();
		};
	}, [auth]);
	//*update user Profile
	const userProfileUpdate = (profile) => {
		setLoader(true);
		return updateProfile(auth.currentUser, profile);
	};

	//*User Sign Out
	const userSignOut = () => {
		setLoader(true);
		return signOut(auth);
	};
	const authInfo = {
		user,
		userCreateWithEmail,
		userSignInWithEmail,
		userProfileUpdate,
		userSignOut,
		loader,
		setLoader,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
