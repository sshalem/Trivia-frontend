import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, MainLayout, Question, English, Hebrew, History } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'english',
        element: <English />,
      },
      {
        path: 'english/:parameter',
        element: <Question />,
      },
      {
        path: 'hebrew',
        element: <Hebrew />,
      },
      {
        path: 'history',
        element: <History />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
