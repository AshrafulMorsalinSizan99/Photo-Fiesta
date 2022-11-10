import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddServices from '../../Pages/AddServices/AddServices';
import Blogs from '../../Pages/Blogs/Blogs/Blogs';
import EditProduct from '../../Pages/EditProduct/EditProduct';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import AllServices from '../../Pages/Home/Services/AllServices';
import Login from '../../Pages/Login/Login';
import Reviews from '../../Pages/Reviews/Reviews';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import Signup from '../../Pages/Signup/Signup';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://photo-fiesta-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/reviews/edit/:id',
                element: <EditProduct></EditProduct>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            }

        ]
    }
]);

export default router;