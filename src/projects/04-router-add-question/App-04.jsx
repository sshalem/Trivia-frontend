import React from 'react';
import './04-index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Admin, HomeLayout, MainPage, Question, English, Hebrew, Tanach, Math, History, Geography, AddQuestion, QuestionList } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'tanach',
        element: <Tanach />,
      },
      {
        path: 'hebrew',
        element: <Hebrew />,
      },
      {
        path: 'math',
        element: <Math />,
      },
      {
        path: 'english',
        element: <English />,
      },
      {
        path: 'english/:parameter',
        element: <Question />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'geography',
        element: <Geography />,
      },
      {
        path: 'english',
        element: <English />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'admin/add-question',
        element: <AddQuestion />,
      },
      {
        path: 'admin/question-list',
        element: <QuestionList />,
      },
      ,
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
