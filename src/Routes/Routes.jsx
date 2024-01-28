import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../pages/Home/HomeMain/HomeMain';
import MainLayout from '../Layout/MainLayout';
import CategoryMenu from '../pages/Home/Category/CategoryMenu';

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
        path: 'category',
        element: <CategoryMenu></CategoryMenu>
      }
    ]
  },
]);

export default router;