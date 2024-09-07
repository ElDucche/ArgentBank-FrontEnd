import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import './index.css'
import Home from './routes/home';
import Signin from './routes/signin';
import Profile from './routes/profile';
import {store} from './app/store'
import { Provider } from 'react-redux'
import TransactionPage from './components/TransactionPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Signin />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path : '/profile/x6712',
        element: <TransactionPage />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
