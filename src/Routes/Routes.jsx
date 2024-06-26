import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../pages/Home/HomeMain/HomeMain';
import MainLayout from '../Layout/MainLayout';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Product from './Product/Product';
import DashboardLayout from '../Layout/DashboardLayout';
import MyCart from '../pages/DashBoard/dashboardPage/MyCart';

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
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      }
    ]
  }
]);

export default router;