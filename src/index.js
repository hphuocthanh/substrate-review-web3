import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import 'semantic-ui-css/semantic.min.css'
import Root from './routes/root'
import ErrorPage from './ErrorPage'
import Home from './pages/home'
import ReviewList from './pages/reviews'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'testing',
        element: <App />,
      },
      {
        path: 'reviews',
        element: <ReviewList />,
      },
    ],
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
