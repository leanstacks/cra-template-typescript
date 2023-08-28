import { createBrowserRouter } from 'react-router-dom';

import StandardLayout from 'components/common/layouts/StandardLayout';
import ErrorPage from 'components/common/errors/ErrorPage';
import LandingPage from 'components/landing/LandingPage';

export const routes = [
  {
    path: '/',
    element: <StandardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      }
    ],
  },
];

export const router = createBrowserRouter(routes);
