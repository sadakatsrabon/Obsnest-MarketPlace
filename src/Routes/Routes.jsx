import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../pages/Home/HomeMain/HomeMain';
import MainLayout from '../Layout/MainLayout';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeMain></HomeMain>
      },
      {
        path: 'login',
        element: <Login></Login>
      }, 
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

export default router;