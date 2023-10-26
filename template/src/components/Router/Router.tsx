import { createBrowserRouter } from 'react-router-dom';

import StandardLayout from 'components/Layout/StandardLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import LandingPage from 'pages/LandingPage/LandingPage';

export const routes = [
  {
    path: '/',
    element: <StandardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
