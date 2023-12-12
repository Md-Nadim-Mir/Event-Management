import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Pages/Root/Root';
import Home from './assets/Pages/Home/Home';
import Login from './assets/Pages/Login/Login';
import Register from './assets/Pages/Register/Register';
import Projects from './assets/Pages/Projects/Projects';
import TeamMember from './assets/Pages/TeamMember/TeamMember';
import ErrorPage from './assets/Pages/ErrorPage/ErrorPage';
import AuthtProvider from './assets/Pages/AuthtProvider/AuthtProvider';
import Service_Details from './assets/Pages/Service_Details/Service_Details';
import History from './assets/Pages/History/History';
import PrivateRoute from './assets/Component/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/projects',
        element: <Projects></Projects>
      },

      {
        path: '/team-member',
        element: <PrivateRoute><TeamMember></TeamMember></PrivateRoute>

      },

      {
        path: '/history',
        element: <History></History>
      },

      {
        path: '/service_details/:id',
        loader: () => fetch('/data.json'),
        element: <PrivateRoute><Service_Details></Service_Details></PrivateRoute>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthtProvider>
      <RouterProvider router={router} />
    </AuthtProvider>
  </React.StrictMode>,
)
