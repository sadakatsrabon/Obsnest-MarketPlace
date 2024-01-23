import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../pages/Home/HomeMain/HomeMain';
import MainLayout from '../Layout/MainLayout';
import Category from '../components/Category/Category';

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
        path: "category",
        element: <Category></Category>
      }
    ]
  },
]);

export default router;