import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Posts } from '../pages/posts/posts';
import { People } from '../pages/starwars/people/people';
import { RootLayout } from '../layout/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'json-placeholder', element: <Posts /> },
      { path: 'star-wars', element: <People /> },
    ],
  },
]);
