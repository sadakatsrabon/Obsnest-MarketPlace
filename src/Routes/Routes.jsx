import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../pages/Home/HomeMain/HomeMain';
import MainLayout from '../Layout/MainLayout';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import DashboardLayout from '../Layout/DashboardLayout';
import MyCart from '../pages/DashBoard/MyCart';
import LoginLayout from '../Layout/LoginLayout';
import Product from '../pages/Product/Product';
import ObsnestSecret from './ObsnestSecret';
import AllUsers from '../pages/DashBoard/AllUsers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeMain />
      },
      {
        path: `product/:category`,
        element: <Product />
      },
      {
        path: 'product/product-details/:_id',
        element: <ProductDetails />
      },
    ]
  },
  // dashboardRoutes
  {
    path: 'dashboard',
    element: <ObsnestSecret><DashboardLayout></DashboardLayout></ObsnestSecret>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'manageusers',
        element: <AllUsers></AllUsers>
      }
    ]
  },
  // Login/SignUp Routes
  {
    path: 'nest',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
    ]
  }
]);

export default router;