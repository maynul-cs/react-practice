import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1> I'm Home page! </h1>
  },
  {
    path: '/about',
    element: <h1> I'm About page! </h1>
  },
  {
    path: '/blog',
    element: <h1> I'm Blog page! </h1>
  }  
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App