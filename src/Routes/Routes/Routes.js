import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main';
import Home from '../../Pages/Home/Home/Home';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import Service from '../../Pages/Services/Service/Service';
import Services from '../../Pages/Services/Services';
import SignIn from '../../Pages/Shared/Login/SignIn/SignIn';
import SignUp from '../../Pages/Shared/Login/SignUp/SignUp';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/services',
				element: <Services></Services>,
			},
			{
				path: '/myreviews',
				element: <MyReviews></MyReviews>,
			},
			{
				path: 'service/:id',
				loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`),
				element: <Service></Service>,
			},
			{
				path: '/signin',
				element: <SignIn></SignIn>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
		],
	},
]);
