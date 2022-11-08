import React, {createContext} from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
	const user = 'rabbani';
	const auth = getAuth(app);

	//*create user with email and password
	const userCreateWithEmail = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const authInfo = {user, userCreateWithEmail};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
