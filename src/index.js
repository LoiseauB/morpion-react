import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InputNameUser from './components/InputNameUser';
import Layout from './components/Layout';
import Game from './components/Game';
import EndGameWrap from './components/EndGameWrap';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:'/input/player1',
        element: <InputNameUser playerNumber={1} />
      },
      {
        path:'/input/player2',
        element: <InputNameUser playerNumber={2} />
      },
      {
        path:'game',
        element: <Game />
      },
      {
        path:'end-game',
        element: <EndGameWrap />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
