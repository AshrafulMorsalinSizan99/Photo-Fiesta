import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Blogs from '../../Pages/Blogs/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import AllServices from '../../Pages/Home/Services/AllServices';
import Login from '../../Pages/Login/Login';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import Signup from '../../Pages/Signup/Signup';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]
    }
]);

export default router;