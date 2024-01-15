import { createBrowserRouter } from 'react-router-dom';
import HomeMain from '../pages/Home/HomeMain/HomeMain';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeMain></HomeMain>
    },
  ]);

export default router;