import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layouts/Main';
import AddServices from '../../Pages/AddServices/AddServices';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import UpdateReview from '../../Pages/MyReviews/UpdateReview';
import Service from '../../Pages/Services/Service/Service';
import Services from '../../Pages/Services/Services';
import NotFoundPage from '../../Pages/Shared/404-page/NotFoundPage';
import SignIn from '../../Pages/Shared/Login/SignIn/SignIn';
import SignUp from '../../Pages/Shared/Login/SignUp/SignUp';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

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
				element: (
					<PrivateRoutes>
						<MyReviews></MyReviews>
					</PrivateRoutes>
				),
			},
			{
				path: '/addservice',
				element: (
					<PrivateRoutes>
						<AddServices></AddServices>
					</PrivateRoutes>
				),
			},
			{
				path: 'service/:id',
				loader: ({params}) => fetch(`https://mediz-server.vercel.app/service/${params.id}`),
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
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
			{
				path: '/update/:id',
				element: <UpdateReview></UpdateReview>,
				loader: ({params}) => fetch(`https://mediz-server.vercel.app/review/${params.id}`),
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage></NotFoundPage>,
	},
]);
