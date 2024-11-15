import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/layouts/AppLayout.jsx'
import { RegistrationForm } from './RegistrationForm.jsx';
import {About, Home, Movies, Contacts, ErrorPage} from './pages'
import { getData } from './api/GetApiData.js';
import { MovieDetails } from './components/UI/MovieDetails.jsx';
import { getMovieData } from './api/GetMovieData.js'
import { contactData } from './pages/Contacts.jsx';
// import './App.css'
export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/form',
          element: <RegistrationForm />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/movie',
          element: <Movies />,
          loader: getData,
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader: getMovieData
        },
        {
          path: '/contacts',
          element: <Contacts />,
          action : contactData
        },
       
      ]
    }

  ]);

  return <RouterProvider router={router} />
}
// export default App;