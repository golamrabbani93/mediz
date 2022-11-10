import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
	const [user, setUser] = useState();
	const [loader, setLoader] = useState(true);
	const [spinner, setSpinner] = useState(true);
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
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
	const googleSignIn = () => {
		setLoader(true);
		return signInWithPopup(auth, googleProvider);
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
		spinner,
		setSpinner,
		googleSignIn,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
