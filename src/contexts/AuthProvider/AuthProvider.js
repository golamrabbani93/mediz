import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
	const [user, setUser] = useState();
	const auth = getAuth(app);

	//*create user with email and password
	const userCreateWithEmail = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	//*check User
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (curentUser) => {
			setUser(curentUser);
			// setLoading(false);
		});
		return () => {
			unSubscribed();
		};
	}, [auth]);
	//*update user Profile
	const userProfileUpdate = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};
	const authInfo = {user, userCreateWithEmail, userProfileUpdate};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
