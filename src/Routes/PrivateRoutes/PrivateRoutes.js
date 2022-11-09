import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthProvider/AuthProvider';
import {ScaleLoader} from 'react-spinners';
const PrivateRoutes = ({children}) => {
	const {user, loader} = useContext(AuthContext);
	const location = useLocation();
	if (loader) {
		return (
			<div className="flex justify-center items-center h-96">
				<ScaleLoader color="#F26651"></ScaleLoader>
			</div>
		);
	}
	if (!user) {
		return <Navigate to="/signin" state={{from: location}} replace />;
	}
	return children;
};

export default PrivateRoutes;
